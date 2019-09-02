$(document).ready(function() {
	// 获取处理url 
	var http_head = "http://47.94.173.253:8008/";
	var url = window.location.search; //companyid=46&comName=郑州易企点
	var arr_url = url.split("&");
	//[ompanyid=46 ,comName=郑州易企点]
	var companyId = 0;
	if (arr_url.length) {
		var companyIdStr = arr_url[0]; //ompanyid=46
		companyId = companyIdStr.split("=")[1]; //46
	}

	//获取本地缓存的用户信息
	function getUserData() {
		var userCompanyIdstr = localStorage.getItem("GHY_login");
		if (userCompanyIdstr == undefined) {
			return new Array("", 0, false);
		} else {
			var userCompanyIdjson = JSON.parse(userCompanyIdstr);
			console.log("数据", userCompanyIdjson)
			userGuid = userCompanyIdjson.Guid;
			userCompanyId = userCompanyIdjson.companyId;
			return new Array(userGuid, userCompanyId, true);
		}

	};

	var tarr = getUserData();
	var href = window.location.href;
	var page = 0;

	setTimeout(function() {

		$.post('' + http_head + 'ComSpace/ComSpaceOther/Get_ComSpaceDemand.ashx', {
			companyID: companyId,
			page: page
		}, function(data) {

			var data = JSON.parse(data);
			page = data.page;
			console.log("采购需求", data.items)

			$("#purchase").bootstrapTable({
				classes: " table-no-bordered",
				columns: [{
					// title: "采购需求",
					formatter: purchase,
					events:viewDetail
				}]
			})

			$("#purchase").bootstrapTable("load", data.items);

			function purchase(e, value, index, row) {
				console.log("需求value", value)
				var startime = value.createTime;
				var endtime = value.EndTime;
				if (startime >= endtime) {
					return '<div class="purBox clear"> <div class="purl"> <p class="purlt">' + value.ProductName +
						'</p> <div class="purlm"> <div class="purlml">    <p>' + value.DemandAddress +
						' </p> <p >' + value.ProductType +
						'  </p> </div>  <div class="purlmr">  <p class="budget">预算：<label>' + value.DemandPrice +
						'</label>元</p> </div> </div>   </div>    <div class="purr">进行中</div>            </div>'
				} else {
					return '<div class="purBox clear"> <div class="purl"> <p class="purlt">' + value.ProductName +
						'</p> <div class="purlm"> <div class="purlml">    <p>' + value.DemandAddress +
						' </p> <p >' + value.ProductType +
						'  </p> </div>  <div class="purlmr">  <p class="budget">预算：<label>' + value.DemandPrice +
						'</label>元</p> </div> </div>   </div>    <div class="purr">已完成</div>            </div>'
				}
			}
		})
	}, 200);
	window.viewDetail={
		"click .purBox":function(e,value,row,index){
			console.log("this",row);
// 			var id = row.Id;
// 			window.open("http://www.jinshiku.com/html/needDetails.html?id="+id)
			
		}
	}

	$(".pageBtn").on("click", function() {
		nextPage(page)
	})

	function nextPage(tpage) {

		$.post('' + http_head + 'ComSpace/ComSpaceOther/Get_ComSpaceDemand.ashx', {
			companyID: companyId,
			page: tpage
		}, function(data) {

			var data = JSON.parse(data);
			page = data.page;
			console.log("采购需求2", data.items)
			if (data.items.length == 0) {
				layer.msg("没有更多数据了", {
					time: 1500,
				});
			} else {
				$("#purchase").bootstrapTable({
					classes: " table-no-bordered",
					columns: [{
						// title: "采购需求",
						formatter: purchase
					}]
				})
				$("#purchase").bootstrapTable("append", data.items);

				function purchase(e, value, index, row) {
					console.log("需求value", value)
					var startime = value.createTime;
					var endtime = value.EndTime;
					if (startime >= endtime) {
						return '<div class="purBox clear"> <div class="purl"> <p class="purlt">' + value.ProductName +
							'</p> <div class="purlm"> <div class="purlml">    <p>' + value.DemandAddress +
							' </p> <p >' + value.ProductType +
							'  </p> </div>  <div class="purlmr">  <p class="budget">预算：<label>' + value.DemandPrice +
							'</label>元</p> </div> </div>   </div>    <div class="purr">进行中</div>            </div>'
					} else {
						return '<div class="purBox clear"> <div class="purl"> <p class="purlt">' + value.ProductName +
							'</p> <div class="purlm"> <div class="purlml">    <p>' + value.DemandAddress +
							' </p> <p >' + value.ProductType +
							'  </p> </div>  <div class="purlmr">  <p class="budget">预算：<label>' + value.DemandPrice +
							'</label>元</p> </div> </div>   </div>    <div class="purr">已完成</div>            </div>'
					}


				}
			}
		})


	}

	// 收藏

	$(".collect").on("click", function() {
		console.log(false);
		if (tarr[2] == false) {

			//没有用户登陆，跳转登陆
			layer.msg("请先登录", {
				time: 2000
			});
			window.location = "../comSpace/login/html/innerLogin.html?href =" + href + ""; //兼容
		} else {
			$.post('' + http_head + 'Makerspacey/MakerCollection/Add_MakerCollection.ashx', {
				// 数据参数
				userGuid: userGuid,
				userCompanyId: userCompanyId,
				objectId: 0,
				objectType: 0,
				objectGuid: "",
				objectCompanyId: 0
			}, function(data) {
				var data = JSON.parse(data);
				console.log("收藏", data)

				if (data.status == 202) {
					layer.msg("已收藏", {
						time: 1500,
					});
				} else if (data.status == 200) {
					layer.msg("收藏成功", {
						time: 1500,
					});
				}

			})
		}

	})


	// 导航滑块
	;
	(function() {
		setTimeout(function() {
			$("#line").css("marginLeft", "630px");
		}, 200);
		$(function() {
			var $activeWidth, $defaultMarginLeft, $defaultPaddingLeft, $firstChild, $line, $navListItem;
			$line = $('#line');
			$navListItem = $('.nav-li');
			$activeWidth = $('.active-nav').width();
			$firstChild = $('.nav-li:first-child');
			$defaultMarginLeft = parseInt($('.nav-li:first-child').next().css('marginLeft').replace(/\D/g, ''));
			$defaultPaddingLeft = parseInt($('#nav-container > ul').css('padding-left').replace(/\D/g, ''));
			$line.width($activeWidth + 'px');
			$line.css('marginLeft', $defaultPaddingLeft + 'px');
			return $navListItem.click(function() {
				var $activeNav, $currentIndex, $currentOffset, $currentWidth, $initWidth, $marginLeftToSet, $this;
				$this = $(this);
				$activeNav = $('.active-nav');
				$currentWidth = $activeNav.width();
				$currentOffset = $activeNav.position().left;
				$currentIndex = $activeNav.index();
				$activeNav.removeClass('active-nav');
				$this.addClass('active-nav');
				if ($this.index() > $currentIndex) {
					if ($activeNav.is($firstChild)) {
						$initWidth = $defaultMarginLeft + $this.width() + $this.position().left - $defaultPaddingLeft;
					} else {
						$initWidth = $this.position().left + $this.width() - $currentOffset;
					}
					$marginLeftToSet = $this.position().left + $defaultMarginLeft + 'px';
					$line.width($initWidth + 'px');
					return setTimeout(function() {
						$line.css('marginLeft', $marginLeftToSet);
						return $line.width($this.width() + 'px');
					}, 175);
				} else {
					if ($this.is($firstChild)) {
						$initWidth = $currentOffset - $defaultPaddingLeft + $defaultMarginLeft + $currentWidth;
						$marginLeftToSet = $this.position().left;
					} else {
						$initWidth = $currentWidth + $currentOffset - $this.position().left;
						$marginLeftToSet = $this.position().left + $defaultMarginLeft;
					}
					$line.css('marginLeft', $marginLeftToSet);
					$line.width($initWidth + 'px');
					return setTimeout(function() {
						return $line.width($this.width() + 'px');
					}, 175);
				}
			});
		});
	}.call(this));

})
