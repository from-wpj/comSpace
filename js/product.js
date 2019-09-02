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
		$.post('' + http_head + 'ComSpace/ComSpaceProduct/Get_ComSpaceProduct.ashx', {
			companyID: companyId,
			page: page
		}, function(data) {
			var data = JSON.parse(data);
			page = data.page
			console.log("产品信息", data)
			$("#product").bootstrapTable({
				classes: " table-no-bordered",
				columns: [{
					// title: "产品信息",
					formatter: product
				}]
			})
			$("#product").bootstrapTable("load", data.items);

			function product(e, value, index, row) {

				return '<div class="proBox clear"><div class="prol"> <img src="' + value.image +
					'" /></div><div class="pror"><p class="prort">' + value.ProductName + '</p><div class="prorm"><p>产品单价：￥' +
					value.ProductPrice +
					'</p><p>发货地：' + value.area + '</p><p>浏览量：' + value.browseCount + '</p><p>产品种类' + value.ProductType +
					'</p></div><p class=" examine"> <a> 查看详情</a></p></div></div>'

			}
		})
	}, 200)

	$(".pageBtn").on("click", function() {
		nextPage(page)
	})

	function nextPage(tpage) {
		// 加载下一页
		$.post('' + http_head + 'ComSpace/ComSpaceProduct/Get_ComSpaceProduct.ashx', {
			companyID: companyId,
			page: page
		}, function(data) {
			var data = JSON.parse(data);
			page = data.page
			console.log("产品信息下一页", data)
			if (data.items.length == 0) {
				layer.msg("没有更多数据了", {
					time: 1500,
				});
			} else {
				$("#product").bootstrapTable({
					classes: " table-no-bordered",
					columns: [{
						// title: "产品信息",
						formatter: product
					}]
				})
				$("#product").bootstrapTable("append", data.items);

				function product(e, value, index, row) {

					return '<div class="proBox clear"><div class="prol"> <img src="' + value.image +
						'" /></div><div class="pror"><p class="prort">' + value.ProductName + '</p><div class="prorm"><p>产品单价：￥' +
						value.ProductPrice +
						'</p><p>发货地：' + value.area + '</p><p>浏览量：' + value.browseCount + '</p><p>产品种类' + value.ProductType +
						'</p></div><p class=" examine"> <a> 查看详情</a></p></div></div>'

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
			$("#line").css("marginLeft", "270px");
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
