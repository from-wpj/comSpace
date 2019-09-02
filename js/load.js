$(document).ready(function() {
// 	setTimeout(function() {
// 		// 加载头部
// 		$('#header').load("../comSpace/header.html");
// 	}, 200)

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


	setTimeout(function() {
		// 推荐关注
		$.post('' + http_head + 'Com_regiInfo.ashx', {
				comId: companyId,
			},
			function(data, status) {
				var data = JSON.parse(data);
				// console.log(data.items);
				var companyName = data.items.name;
				var hangye = data.items.hangye;
				var logosrc = data.items.logo;
				// console.log(logosrc);
				$(".companyName").append(companyName);
				$(".describe").append(hangye);
				$(".logo").attr("src", logosrc);

				function loadTable() {
					$.post('' + http_head + 'Com/getComByrecommend.ashx', {
							"hangye": hangye,
							"page": 0
						},
						function(data) {
							var data = JSON.parse(data);
							// console.log("同类型企业数据", data.items);


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
			}
		);
	}, 200);
	window.viewCompany={
		"click .companyList":function(e,value,row,index){
			var userCompanyId = row.companyId;
			window.open ("index.html?conpanyId=" + userCompanyId + ""); //兼容
		}
	}


	setTimeout(function() {
		// 企业介绍基本信息
		$.post('' + http_head + 'ComSpace/Get_ComSpaceInfo.ashx', {
				companyId: companyId,
			},
			function(data, status) {
				var data = JSON.parse(data);
				// console.log(data.items);
				var str = data.items.comDesc;
				$(".information").append(str);
			}
		);
	}, 200)



	setTimeout(function() {
		// 企业空间模块数量
		$.post('' + http_head + 'ComSpace/Get_ComSppaceMenuCount.ashx', {
				companyId: companyId,
			},
			function(data, status) {
				var data = JSON.parse(data);
				// console.log(data.items);
				var countData = data.items;
				var cpcount = countData.cpcount;
				var fkcount = countData.fkcount;
				var lycount = countData.lycount;
				var rzcount = countData.rzcount;
				$(".rzcount").append(rzcount);
				$(".fkconut").append(fkcount);
				$(".lycount").append(lycount);
				$(".cpcount").append(cpcount);
			}
		)
	}, 200)

	// 导航条listbar
	var urlArr = ["../comSpace/index.html", "../comSpace/log.html", "../comSpace/product.html",
		"../comSpace/information.html", "../comSpace/culture.html", "../comSpace/purchase.html",
		"../comSpace/message.html"
	]
	var urltail = window.location.search;
	$(".nav-li").on("click", function() {
		var index = $(this).index();
        window.location = " " + urlArr[index] + "" + urltail + " "
	})


	// 企业空间模块contentr
	$(".contentr ul li").on("click", function() {
		var index = $(this).index();
		if (index == 0) {
			window.location = " " + urlArr[index + 1] + "" + urltail + " "
		} else if (index == 2) {
			window.location = " " + urlArr[index + 4] + "" + urltail + " "
		} else if (index == 3) {
			window.location = " " + urlArr[index - 1] + "" + urltail + " "
		}
	})
	
	
	

})
