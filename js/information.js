$(document).ready(function() {

	// lablist点击滚动效果
	$(".inner").on('scroll.unable', function(e) {
		$(".inner").scrollTop(0);
	})
	$(".labli").on("click", function() {
		$(this).addClass("active").siblings().removeClass("active");
		var index = $(this).index();
		var introduceHeight = $("#introduce").height();
		var equipmentHeight = $("#equipment").height();
		var organizationHeight = $("#organization").height();
		var teamHeight = $("#team").height();
		var companyImgHeight = $("#companyImg").height();
		var contactHeight = $("contact").height();

		if (index == 1) {
			$(".inner").animate({
				marginTop: -introduceHeight - 17
			}, {
				duration: 1000,
				easing: "swing"
			})

		} else if (index == 2) {
			$(".inner").animate({
				marginTop: -introduceHeight - equipmentHeight - 35
			}, {
				duration: 1000,
				easing: "swing"
			})
		} else if (index == 3) {
			$(".inner").animate({
				marginTop: -introduceHeight - equipmentHeight - organizationHeight - 54
			}, {
				duration: 1000,
				easing: "swing"
			})
		} else if (index == 0) {
			$(".inner").animate({
				marginTop: 0
			}, {
				duration: 1000,
				easing: "swing"
			})
		} else if (index == 4) {
			$(".inner").animate({
				marginTop: -introduceHeight - equipmentHeight - organizationHeight - teamHeight - 73
			}, {
				duration: 1000,
				easing: "swing"
			})
		} else if (index == 5) {
			$(".inner").animate({
				marginTop: -introduceHeight - equipmentHeight - organizationHeight - teamHeight - companyImgHeight - 92
			}, {
				duration: 1000,
				easing: "swing"
			})
		}
	});

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

	// middler内容 
	setTimeout(function() {
		function loadTablewh() {
			$.post('' + http_head + 'ComSpace/Get_ComSpaceInfo.ashx', {
				companyId: companyId
			}, function(data, status) {
				var data = JSON.parse(data);
				console.log("企业信息", data.items);
				var desc = data.items.comDesc;
				$("#introduce").append(desc);
				// 设备展示
				$("#equipment").bootstrapTable({
					classes: " table-no-bordered",
					columns: [{
						title: "设备展示",
						formatter: equipment
					}]
				})
				$("#equipment").bootstrapTable("load", data.items.ComEquipment);

				function equipment(e, value, row, index) {
					console.log("设备", value)
					return '<div class="eqtBox"><div class="imgBox"> <img src="' + value.image +
						'"/></div> <p><label>设备名字：</label>' + value.EquipmentName + '</p> <p><label>生产厂家：</label>' + value.Manufactor +
						'</p> <p><label>出厂日期：</label>' + value.DateOfPurchase + '</p></div>'
				}
				// 组织机构
				$("#organization").bootstrapTable({
					classes: " table-no-bordered",
					columns: [{
						title: "组织机构",
						formatter: organization
					}]
				})
				$("#organization").bootstrapTable("load", data.items.ComOrganization);

				function organization(e, value, row, index) {
					console.log("组织机构", value)
					return '<div class="orgBox"> <img src="' + value.ImageUrl + '"/></div>'

				}
				// 团队介绍
				$("#team").bootstrapTable({
					classes: " table-no-bordered",
					columns: [{
						title: "团队介绍",
						formatter: team
					}]
				})
				$("#team").bootstrapTable("load", data.items.ComTeam);

				function team(e, value, row, index) {
					console.log("团队介绍", value)
					return '<div class="teamBox"> <img src="' + value.HeadImage + '" />    </div>'
				}
				// 企业图片
				$("#companyImg").bootstrapTable({
					classes: " table-no-bordered",
					columns: [{
						title: "企业图片",
						formatter: companyImg
					}]
				})
				$("#companyImg").bootstrapTable("load", data.items.ComImage);

				function companyImg(e, value, row, index) {
					console.log("企业图片", value)
					return '<div class="comBox"> <img src="' + value.imgUrl + '" />    </div>'
				}

			})

			// 			$.post('' + http_head + 'Com_regiInfo.ashx', {
			// 				comId: companyId
			// 			}, function(data) {
			// 				var data = JSON.parse(data);
			// 				console.log("企业信息2", data.items)
			// 				// 联系我们
			// 				$("#contact").bootstrapTable({
			// 					classes: " table-no-bordered",
			// 					columns: [{
			// 						title: "联系我们",
			// 						formatter: contact
			// 					}]
			// 				})
			// 				$("#contact").bootstrapTable("load", data.items.);
			// 
			// 				function contact(e, value, row, index) {
			// 					console.log("联系我们", value)
			// 					return ''
			// 				}
			// 			})
		}

		loadTablewh();

	}, 200);

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
			$("#line").css("marginLeft", "390px");
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
