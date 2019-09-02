$(document).ready(function() {

	// 获取处理url 
	var http_head = "http://47.94.173.253:8008/";
	var url = window.location.search; //companyid=46&comName=郑州易企点
	var arr_url = url.split("&");
	//[ompanyid=46 ,comName=郑州易企点]
	var href = window.location.href;
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
	// 留言
	$(".submit").on("click", function() {

		if (tarr[2] == false) {
			//没有用户登陆，跳转登陆
			layer.msg("请先登录", {
				time: 2000
			});
			window.location = "../comSpace/login/html/innerLogin.html?href =" + href + ""; //兼容

		} else {
			var message = $(".textarea").val();
			if (message == "") {
				layer.msg("留言不能为空", {
					time: 1500
				})
			} else {
				setTimeout(function() {
					$.post('' + http_head + 'Makerspacey/MakerLeaveMsg/Add_MakerLeaveMsg.ashx', {
						// 数据参数
						userGuid: userGuid,
						userCompanyId: userCompanyId,
						parentUserGuid: " ",
						message: message,
						parentId: 0,
						makerGuid: " ",
						// companyId: 0,
						firstCommentId: 0
					}, function(data) {
						console.log(data)
						layer.msg("留言成功", {
							time: 1500
						});
						message = $(".textarea").val('');
					})
				}, 200)
			}

		}

	});
	// 收藏

	$(".collect").on("click", function() {
		alert("执行")
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

	});

	var page = 0;
	setTimeout(function() {
		// 留言列表
		function loadTablely() {
			$.post('' + http_head + 'ComSpace/ComSpaceLeaveMessage/Get_ComSpaceLeaveMessage.ashx', {
					companyId: companyId,
					page: page
				},
				function(data, status) {
					var data = JSON.parse(data);
					page = data.page
					console.log("留言列表", data)
					$("#companyInforTable").bootstrapTable({
						classes: " table-no-bordered",
						columns: [{
							// field: "createTime",
							formatter: companylyInfor
						}]
					})
					$("#companyInforTable").bootstrapTable("load", data.items); //加载数据

					function companylyInfor(e, value, row, index) {
						// 日期
						var timestr = getDateDiff(value.createTime);
						// 留言数组
						var msglist = value.childList;
						var msg;
						for (var i = 0; i < msglist.length; i++) {
							msg = "企业回复：" + msglist[i].Message + "<br/>";
						}

						if (msg === undefined) {
							return '<div class="lylist clear"> <div class="listl clear">  <div class="logobox" ><img class="logopic" src="' +
								value.iphoto + '"/> </div>  <div class="logoname"> <p>' + value.upname + ' </p><p> ' + value.Message +
								'</p>   </div> </div>  <div class="listr">' + timestr +
								' </div> </div>  <div class="replybox clear"> </div>';
						} else {
							return '<div class="lylist clear"> <div class="listl clear">  <div class="logobox" ><img class="logopic" src="' +
								value.iphoto + '"/> </div>  <div class="logoname"> <p>' + value.upname + ' </p><p> ' + value.Message +
								'</p>   </div> </div>  <div class="listr">' + timestr +
								' </div> </div>  <div class="replybox clear"><p class="reply">' + msg + '</p> </div>';
						}
					}
				});
		}
		loadTablely()
	}, 200);
	$(".pageBtn").on("click", function() {
		nextPage(page)
	});

	function nextPage(npage) {
		$.post('' + http_head + 'ComSpace/ComSpaceLeaveMessage/Get_ComSpaceLeaveMessage.ashx', {
				companyId: companyId,
				page: npage
			},
			function(data, status) {
				var data = JSON.parse(data);
				page = data.page
				console.log("留言列表2", data)
				if (data.items.length == 0) {
					layer.msg("没有更多数据了", {
						time: 1500,
					});
				} else {
					$("#companyInforTable").bootstrapTable({
						classes: " table-no-bordered",
						columns: [{
							// field: "createTime",
							formatter: companylyInfor
						}]
					})
					$("#companyInforTable").bootstrapTable("append", data.items); //加载数据

					function companylyInfor(e, value, row, index) {
						// 日期
						var timestr = getDateDiff(value.createTime);
						// 留言数组
						var msglist = value.childList;
						var msg;
						for (var i = 0; i < msglist.length; i++) {
							msg = "企业回复：" + msglist[i].Message + "<br/>";
						}

						if (msg === undefined) {
							return '<div class="lylist clear"> <div class="listl clear">  <div class="logobox" ><img class="logopic" src="' +
								value.iphoto + '"/> </div>  <div class="logoname"> <p>' + value.upname + ' </p><p> ' + value.Message +
								'</p>   </div> </div>  <div class="listr">' + timestr +
								' </div> </div>  <div class="replybox clear"> </div>';
						} else {
							return '<div class="lylist clear"> <div class="listl clear">  <div class="logobox" ><img class="logopic" src="' +
								value.iphoto + '"/> </div>  <div class="logoname"> <p>' + value.upname + ' </p><p> ' + value.Message +
								'</p>   </div> </div>  <div class="listr">' + timestr +
								' </div> </div>  <div class="replybox clear"><p class="reply">' + msg + '</p> </div>';
						}
					}
				}

			});
	};




	// 导航滑块
	(function() {
		setTimeout(function() {
			$("#line").css("marginLeft", "750px");
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
});
