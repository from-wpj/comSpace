$(document).ready(function() {
	//登陆退出
    var href = location.href;
    var dataC = localStorage.getItem("GHY_login");
    var top = $(".manager").height()+10;
    if (dataC != null) {
        var dataInfo = JSON.parse(dataC);
        $('#loginBtn').text(dataInfo.username);
        $("#regBtn").on("click", function() {
            localStorage.removeItem("GHY_login");
            window.location.reload();
        }).text("退出");
        var flag2 = 0;
        $("#loginBtn").on("click", function() {
            if (flag2 == 0) {
                $(".userOption").show("500");
                flag2 = 1;
            } else {
                $(".userOption").hide("500");
                flag2 = 0;
            }
        });
        $(".userOption").on("click", function() {
            window.open("http://www.eqidd.com/createrSpace/html/personInfo.html");
        });
        $(".manager").css({
            "visibility": "visible"
        });
        $(".forward").css({
            "marginTop": 0
        })
        
    } else {
        $(".manager").css({
            "visibility": "hidden",
        });
        $(".forward").css({
            "marginTop": -top
        })
        $('#loginBtn').click(function() {
            window.location = "http://www.eqidd.com/comSpace/login/html/innerLogin.html?href =http://www.eqidd.com/comSpace/eqd2.html"
        }).text("登录");
        $("#regBtn").on("click", function() {
            window.location = "http://www.eqidd.com/html/reg.html?href =http://www.eqidd.com/comSpace/eqd2.html"
        }).text("注册")
    }

    // 轮播
    var mySwiper = new Swiper('.swiper-container', {
        loop: true, // 循环模式选项
        autoplay: true,
        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
        },
        // 如果需要滚动条
        scrollbar: {
            el: '.swiper-scrollbar',
        },
        autoplay: {
            //触碰后接着滚蛋
            disableOnInteraction: false,
        },
    });
    var http_head = "http://47.94.173.253:8008/";
    var page = 0;
    setTimeout(function() {
        // 推荐企业
        function loadTable() {
            $.post('' + http_head + 'Com/getComByrecommend.ashx', {}, function(data) {
                var data = JSON.parse(data);
                //console.log("推荐企业", data.items);	
                $(".forward").bootstrapTable({
                    columns: [{
                        field: "com_name",
                        title: "推荐关注",
                        formatter: companyInfor,
                        events: viewCompany
                    }]
                })
                $(".forward").bootstrapTable("load", data.items); //加载数据
                function companyInfor(e, value, row, index) {
                    return ['<div class="aaa"><p>' + value.com_name + '</p> <span class="iconfont icon-iconfonticonfonti2copycopy"> </span></div>']
                }
            })
        }
        loadTable()
    }, 100);
    window.viewCompany = {
        "click .aaa": function(e, value, row, index) {
            var userCompanyId = row.companyId;
            window.open("index.html?conpanyId=" + userCompanyId + ""); //兼容
        }
    }
    setTimeout(function() {
        function loadTable2() {
            $.post("" + http_head + "Articles/Get_ArticleByCompany.ashx", {
                page: page
            }, function(data) {
                var data = JSON.parse(data);
                //console.log(data.items)
                page = data.items.page;
                $("#comsinfor").bootstrapTable({
                    classes: "table-no-bordered",
                    columns: [{
                        formatter: comsinfor,
                        events: {
                            "click .eering": function(e, value, row, index) {
                          
                                var userCompanyId = row.companyId;
                                //console.log("公司ID",userCompanyId);
                                window.open("http://www.eqidd.com/comSpace/index.html?conpanyId=" + userCompanyId + ""); //兼容	
                            },
                            "click .titles": function(e, value, row, index) {
                                //console.log( row,)
                                var userCompanyId = row.companyId;
                                window.open("http://www.eqidd.com/yqy/articleDetail.html?articleId=" + row.Id + "&userGuid=" + row.userGuid); //兼容	
                            },
                            "click .aides": function(e, value, row, index) {
                                //console.log( row,)
                                var userCompanyId = row.companyId;
                                window.open("http://www.eqidd.com/yqy/articleDetail.html?articleId=" + row.Id + "&userGuid=" + row.userGuid); //兼容	
                            },
                            "click .aide": function(e, value, row, index) {
                                //console.log( row,)
                                var userCompanyId = row.companyId;
                                window.open("http://www.eqidd.com/yqy/articleDetail.html?articleId=" + row.Id + "&userGuid=" + row.userGuid); //兼容	
                            }
                        },
                    }]
                });
                $("#comsinfor").bootstrapTable("load", data.items.rows);

                function comsinfor(e, value, index, row) {
                    var timestr = value.createTime;
                    var timehead = timestr.split("T")[0];
                    var timetail1 = timestr.split("T")[1].split(":")[0];
                    var timetail2 = timestr.split("T")[1].split(":")[1];
                    var timetail = timetail1 + ":" + timetail2;
                    var time = timehead + " " + timetail;
                    if (value.image == "") {
                        return '<div class="article"> <p class="titles">' + value.title + '</p> <p class="aides">' + value.content + '</p> <span class="time">' + time + '</span> <span class="eering"><b>' + value.upname + '</b></span> </div>'
                    } else {
                        return '<div class="article"> <p class="titles">' + value.title + '</p> <img src="' + value.image + '"/> <p class="aide">' + value.content + '</p>  <span class="time">' + time + '</span> <span class="eering"><b>' + value.upname + '</b></span> </div>'
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
            page = data.items.page;
            if (data.items.rows.length == 0) {
                $('.btns').html('没有更多数据了')
            } else {
                $("#comsinfor").bootstrapTable({
                    classes: "table-no-bordered",
                    columns: [{
                        formatter: comsinfor,
                        events: {
                            "click .eering": function(e, value, row, index) {
                                var userCompanyId = row.companyId;
                                console.log("查看", userCompanyId);
                                window.open("http://www.eqidd.com/comSpace/index.html?conpanyId=" + userCompanyId);
                            },
                            "click .titles": function(e, value, row, index) {
                                //console.log( value,)
                                var userCompanyId = row.companyId;
                                window.open("http://www.eqidd.com/yqy/articleDetail.html?articleId=" + row.Id + "&userGuid=" + row.userGuid); //兼容	
                            },
                            "click .aides": function(e, value, row, index) {
                                //console.log( row,)
                                var userCompanyId = row.companyId;
                                window.open("http://www.eqidd.com/yqy/articleDetail.html?articleId=" + row.Id + "&userGuid=" + row.userGuid); //兼容	
                            },
                            "click .aide": function(e, value, row, index) {
                                //console.log( row,)
                                var userCompanyId = row.companyId;
                                window.open("http://www.eqidd.com/yqy/articleDetail.html?articleId=" + row.Id + "&userGuid=" + row.userGuid); //兼容	
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
                        return '<div class="article"> <p class="titles">' + value.title + '</p> <p class="aides">' + value.content + '</a></p> <span class="time">' + time + '</span> <span class="eering"><b>' + value.upname + '</b></span> </div>'
                    } else {
                        return '<div class="article"> <p class="titles">' + value.title + '</p> <img src="' + value.image + '"/> <p class="aide">' + value.content + '</p>  <span class="time">' + time + '</span> <span class="eering"><b>' + value.upname + '</b></span> </div>'
                    }
                }
            }
        })
    };
    
    //后台
    $(".buts span").on("click",function(){
        var index = $(this).index();
    	$(this).addClass("active").siblings().removeClass("active");
        if(index==1){
            window.open("http://www.eqidd.com/comSpace/editorSpace.html");
        }else if(index==0){
            window.open("http://www.eqidd.com/chuangkeApace/html/writeCircle.html?source=1")
        }
    });
    $(".gock").on("click", function () {
        if (dataC) {
            var this_userGuid = JSON.parse(dataC).Guid;
            var this_companyId = JSON.parse(dataC).companyId;
            window.open("http://www.eqidd.com/makerSpace/index.html?userGuid=" + this_userGuid + "&companyId=" + this_companyId)
        } else {
            layer.msg("请登录", {
                time: 1200
            })
        }
    });
    
})