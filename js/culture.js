$(document).ready(function() {
	
	// middler内容滚动效果

	$(".inner").on('scroll.unable', function(e) {
		// 阻止滚动
		$(".inner").scrollTop(0);
	})

	$(".labli").on("click", function() {
		$(this).addClass("active");
		$(this).siblings().removeClass("active");
		var index = $(this).index();
		var coreHeight = $("#core").height();
		var sportHeight = $("#sport").height();
		var storyHeight = $("#story").height();
		var wallHeight = $("#wall").height();

		if (index == 1) {
			console.log(coreHeight)
			$(".inner").animate({
				marginTop: -coreHeight - 18
			}, {
				duration: 1000,
				easing: "swing"
			})
		} else if (index == 2) {
			$(".inner").animate({
				marginTop: -coreHeight - sportHeight - 37
			}, {
				duration: 1000,
				easing: "swing"
			})
		} else if (index == 3) {
			$(".inner").animate({
				marginTop: -coreHeight - sportHeight - storyHeight - 56
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
			$.post('' + http_head + 'ComSpace/Get_ComSpaceCulture.ashx', {
				companyId: companyId
			}, function(data, status) {
				var data = JSON.parse(data);
				console.log("企业文化", data.items);

				// 核心价值
				$("#core").bootstrapTable({
					classes: " table-no-bordered",
					columns: [{
						title: "核心价值",
						formatter: core
					}]
				})
				$("#core").bootstrapTable("load", data.items.ComCoreValues);

				function core(e, value, row, index) {
					console.log("value", value)
					return '<div class="valueBox"> <div class="valueImg"><img src="' + value.ImageUrl +
						'"/> </div><p class="valueTitle">' + value.title + '</p> <p class="valueText">' + value.Describe +
						'</p></div>'
				}
				// 领导活动
				$("#sport").bootstrapTable({
					classes: " table-no-bordered",
					columns: [{
						title: "领导活动",
						formatter: sport
					}]
				})
				$("#sport").bootstrapTable("load", data.items.ComActitivies);

				function sport(e, value, row, index) {
					console.log("value", value)
					var creatTime = value.createTime;
					var time = creatTime.split(" ")[0];
					return '<ul class="sportBox clear">  <li><p><a>' + value.title + '</a></p><p>' + time + '</p></li></ul>'
				}
				// 先进事迹
				$("#story").bootstrapTable({
					classes: " table-no-bordered",
					columns: [{
						title: "先进事迹",
						formatter: story
					}]
				})
				$("#story").bootstrapTable("load", data.items.ComEvent);

				function story(e, value, row, index) {
					console.log("value", value)
					var creatTime = value.createTime;
					var time = creatTime.split(" ")[0];
					return '<ul class="sportBox clear">  <li><p><a>' + value.title + '</a></p><p>' + time + '</p></li></ul>'

				}
				// 荣耀墙
				$("#wall").bootstrapTable({
					classes: " table-no-bordered",
					columns: [{
						title: "荣耀墙",
						formatter: wall
					}]
				})
				$("#wall").bootstrapTable("load", data.items.ComGoodStaff);

				function wall(e, value, row, index) {
					console.log("value", value)
					return '<div class="wallBox"> <div class="valueImg"><img src="' + value.HeadImage +
						'"/> </div><p class="valueTitle">' +
						value.userName + '</p><p class="valueText">' + value.Msg + '</p></div>'
				}

			})
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
			$("#line").css("marginLeft", "510px");
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
