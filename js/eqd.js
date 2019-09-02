$(document).ready(function() {
	var http_head = "http://47.94.173.253:8008/";

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
			username = userCompanyIdjson.username
			return new Array(userGuid, userCompanyId, true);
		}

	};

	var tarr = getUserData();
	var top = $(".inforContent").height() + 70;

	if (tarr[2] == false) {
		// 隐藏inforContent

		$(".inforContent").css({
			"visibility": "hidden",
		});
		$(".bgbox").css({
			"visibility": "hidden"
		});
		$("#companyTable").css({
			"marginTop": -top
		})
		$(".logininfor1").on("click", function() {
			window.location =
				"http://www.eqidd.com/comSpace/login/html/innerLogin.html?href =http://www.eqidd.com/comSpace/eqd.html"
		}).children().append("登录");
		$(".logininfor2").on("click", function() {
			window.location = "http://www.eqidd.com/html/reg.html?href =http://www.eqidd.com/comSpace/eqd.html"
		}).children().append("注册");

	} else {
		// 显示inforContent
		$(".inforContent").css({
			"visibility": "visible"
		});
		$(".bgbox").css({
			"visibility": "visible"
		});
		$("#companyTable").css({
			"marginTop": 0
		})
		$(".logininfor1").children().append(username);
		
		$(".logininfor2").on("click", function() {
			localStorage.removeItem("GHY_login")
			window.location = "http://www.eqidd.com/comSpace/eqd.html"
		}).children().append("退出");


		setTimeout(function() {
			// 企业介绍基本信息
			$.post('' + http_head + 'Com_regiInfo.ashx', {
					comId: userCompanyId,
				},
				function(data, status) {
					var data = JSON.parse(data);
					console.log("企业信息", data.items);
					var hangye = data.items.hangye;
					var address = data.items.address;
					var logourl = data.items.logo;
					var comname = data.items.name;
					$(".ct").append(hangye);
					$(".ca").append(address);
					$(".comlogo").attr("src", logourl);
					$(".comCall").append(comname)
				}
			);
		}, 200)

		setTimeout(function() {
			// 企业空间模块数量
			$.post('' + http_head + 'ComSpace/Get_ComSppaceMenuCount.ashx', {
					companyId: userCompanyId,
				},
				function(data, status) {
					var data = JSON.parse(data);
					// console.log(data.items);
					var countData = data.items;
					var cpcount = countData.cpcount;
					var fkcount = countData.fkcount;
					var lycount = countData.lycount;
					var rzcount = countData.rzcount;
					$(".rzcount").text(rzcount);
					$(".fkconut").text(fkcount);
					$(".lycount").text(lycount);
					$(".cpcount").text(cpcount);
				}
			)
		}, 200)

		// 点击modeCount>li

		$(".modeCount ul li").on("click", function() {
			var index = $(this).index();

			if (index == 0) {
				console.log(urlArr[1])
				window.location = "../comSpace/log.html?conpanyId=" + userCompanyId + ""
			} else if (index == 2) {
				window.location = "../comSpace/message.html?conpanyId=" + userCompanyId + ""
			} else if (index == 3) {
				window.location = "../comSpace/product.html?conpanyId=" + userCompanyId + ""
			}
		})
	}

	setTimeout(function() {
		// 推荐企业
		function loadTable() {
			$.post('' + http_head + 'Com/getComByrecommend.ashx', {

			}, function(data) {
				var data = JSON.parse(data);
				console.log("推荐企业", data.items);

				$("#companyTable").bootstrapTable({
					columns: [{
						field: "com_name",
						title: "推荐关注",
						formatter: companyInfor,
						events:viewCompany
					}]
				})

				$("#companyTable").bootstrapTable("load", data.items); //加载数据

				function companyInfor(e, value, row, index) {

					return [
						'<div class="companyList clear"> <div class="cpltl"> <img class="logoimg" src="' + value.comLogo +
						'"/>   </div> <div class="cpltr"> <p class="comName" title="' + value.com_name + '" >' + value.com_name +
						'</p>    </div>  </div>'
					]
				}
			})

		}
		loadTable()
	}, 200);
	window.viewCompany={
		"click .companyList":function(e,value,row,index){
			var userCompanyId = row.companyId;
			window.open ("index.html?conpanyId=" + userCompanyId + ""); //兼容
		}
	}


	// 企业table

	var page = 0;

	setTimeout(function() {
		function loadTable2() {
			$.post("" + http_head + "Articles/Get_ArticleByCompany.ashx", {
				page: page
			}, function(data) {
				var data = JSON.parse(data);
				console.log(data.items)
				page = data.items.page;
				$("#comsinfor").bootstrapTable({
					classes: "table-no-bordered",
					columns: [{
						formatter: comsinfor,
						events: {
							"click .lookcom": function(e, value, row, index) {
								console.log("点击数据",row);
								var userCompanyId = row.companyId;
                                console.log("公司ID",userCompanyId);
								window.open ("index.html?conpanyId=" + userCompanyId + ""); //兼容	
							},
                            "click .looklog": function(e, value, row, index) {
								console.log("查看全文",row)
								var userCompanyId = row.companyId;
								window.open ( "http://www.eqidd.com/yqy/articleDetail.html?articleId=" + row.Id + "&userGuid="+row.userGuid); //兼容	
							},
						}
					}]
				})
				$("#comsinfor").bootstrapTable("load", data.items.rows);

				function comsinfor(e, value, index, row) {
					var timestr = value.createTime;
					var timehead = timestr.split("T")[0];
					var timetail1 = timestr.split("T")[1].split(":")[0];
					var timetail2 = timestr.split("T")[1].split(":")[1];
					var timetail = timetail1 + ":" + timetail2;
					var time = timehead + " " + timetail;

					if (value.image == "") {
						return '<div class="logBox">  <div class="logt">   <img  src="' + value.iphoto +
							'" />  <div> <p><a class="lookcom"> ' +
							value.upname + '</p></a> <p>' +
							time + '</p> </div> </div>  <div class="logb">   <p>' + value.content +
							'<a class="looklog">查看全文</a></p>  </div>    </div>'
					} else {
						return '<div class="logBox"> <div class="logt"> <img  src="' + value.iphoto +
							'" />  <div> <p><a class="lookcom">' + value.upname +
							'</a></p> <p>' +
							time + '</p> </div> </div>  <div class="logb">  <p>' + value.content +
							'<a class="looklog">查看全文</a></p>  <img src="' +
							value.image +
							'"/> </div>    </div>'
					}
				};
			})
		}
		loadTable2()

	}, 200);

	$(".pageBtn").on("click", function() {
		nextPage(page)
	})

	function nextPage(npage) {

		$.post("" + http_head + "Articles/Get_ArticleByCompany.ashx", {
			page: npage
		}, function(data) {
			var data = JSON.parse(data);
			console.log("2", data)
			page = data.items.page;

			if (data.items.rows.length == 0) {
				layer.msg("没有更多数据了", {
					time: 1500,
				});
			} else {

				$("#comsinfor").bootstrapTable({
					classes: "table-no-bordered",
					columns: [{
						formatter: comsinfor,
						events: {
							"click .lookcom": function(e, value, row, index) {
								var userCompanyId = row.companyId;
                                console.log("查看",userCompanyId)
								window.open ("index.html?conpanyId=" + userCompanyId); 
							}
						}

					}]
				})
				$("#comsinfor").bootstrapTable("append", data.items.rows);

				function comsinfor(e, value, index, row) {
					var timestr = value.createTime;
					var timehead = timestr.split("T")[0];
					var timetail1 = timestr.split("T")[1].split(":")[0];
					var timetail2 = timestr.split("T")[1].split(":")[1];
					var timetail = timetail1 + ":" + timetail2;
					var time = timehead + " " + timetail;

					if (value.image == "") {
						return '<div class="logBox">  <div class="logt">   <img  src="' + value.iphoto +
							'" />  <div> <p><a class="lookcom"> ' +
							value.upname + '</p></a> <p>' +
							time + '</p> </div> </div>  <div class="logb">   <p>' + value.content +
							'<a class="looklog">查看全文</a></p>  </div>    </div>'
					} else {
						return '<div class="logBox"> <div class="logt"> <img  src="' + value.iphoto +
							'" />  <div> <p><a class="lookcom">' + value.upname +
							'</a></p> <p>' +
							time + '</p> </div> </div>  <div class="logb">  <p>' + value.content +
							'<a class="looklog">查看全文</a></p>  <img src="' +
							value.image +
							'"/> </div>    </div>'
					}

				}

			}
		})
	};

    // 跳转
	$(".comCall").on("click",function(){
		window.open("editorSpace.html");
	})






})
