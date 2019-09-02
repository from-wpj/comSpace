$(document).ready(function(){
      var href = location.href;
      var str = JSON.stringify(href)
          sessionStorage.removeItem("SPACE_url")
          sessionStorage.setItem("SPACE_url", str);
      if(href.indexOf("=") < 0 ){
              location.href ="../html/qiyeInfo.html";
            }else{
               if(href.indexOf("#") < 0 ){
                  var comId = href.split("=")[1];
               }else{
                var href1 = href.split("#")[0];
                      comId = href1.split("=")[1];
               }
            }
      var dataC = localStorage.getItem("GHY_login");
        if (dataC != null) {
              $('.infoBtn').show();
              $('.loginBtn').hide();
              var dataInfo = JSON.parse(dataC);
              $('.topRight img').attr('src',dataInfo.iphoto );
              $('.imgArea img').attr('src',dataInfo.iphoto );
              $('.topRight .name').text( dataInfo.username )
              $('.namePerson').text( dataInfo.username )
              $('.PersonCom').text( dataInfo.company )
        }else{
              $('.loginBtn').show();
              $('.quitOut').hide();
              location.href ="../html/qiyeInfo.html";
        }
        // 退出操作
        $('.quitOut').click(function() {
              localStorage.removeItem("GHY_login");
              location.href ="../html/innerLogin.html";
        });
        // 登录操作
        $('.loginBtn').click(function() {
              location.href ="../html/innerLogin.html";
        });
        $('.mainLeft ul li').hover(function() {
          $(this).addClass('liactive').siblings('li').removeClass('liactive');
          $(this).children('a').css('color', '#29e');
        }, function() {
           $(this).children('a').css('color', '#000');
        });
        $('.mainLeft ul li').click(function() {
          $(this).addClass('liactive').siblings('li').removeClass('liactive');
          $(this).children('a').css('color', '#29e').siblings('li').children('a').css('color', '#000');
        });
        // 获取企业空间信息
          function loadComInfo(){
                $.post(''+EQD_space+'/ComSpace/Get_ComSpaceInfo.ashx', {
                      "userGuid" : dataInfo.Guid,
                      "userCompanyId" : dataInfo.companyId,
                      "companyId" : comId
                      }, function( data ) {
                        var companyInfo = JSON.parse(data);
                        $('.comInfoshow').html(companyInfo.items.comDesc)
                        // 设备展示
                        for (var i = 0; i < companyInfo.items.ComEquipment.length; i++) {
                            $('.ComEquipmentDiv').append('<div class="pull-left" id="'+companyInfo.items.ComEquipment[i].Id+'"><img src="'+companyInfo.items.ComEquipment[i].image+'" alt="" /><h4 class="productName">设备名字 :  '+companyInfo.items.ComEquipment[i].EquipmentName+'</h4><p class="productAddress">生产厂家 : '+companyInfo.items.ComEquipment[i].Manufactor+'</p><p class="productDate">出厂日期 : '+companyInfo.items.ComEquipment[i].DateOfPurchase+'</p></div>')
                            $('.ComEquipmentDiv #'+companyInfo.items.ComEquipment[i].Id+'').click(function() {
                              window.open("../html/productDetails.html?id="+$(this).attr('id')+"")
                            });
                        }
                        // 组织机构
                        for (var i = 0; i < companyInfo.items.ComOrganization.length; i++) {
                            $('.ComOrganizationDiv').append('<div class="pull-left"><img src="'+companyInfo.items.ComOrganization[i].ImageUrl+'" alt="" /><h4>图片描述</h4><div>'+companyInfo.items.ComOrganization[i].describe+'</div></div>')
                        }
                        // 企业图片
                        for (var i = 0; i < companyInfo.items.ComImage.length; i++) {
                            $('.ComImageDiv').append('<div class="pull-left layer-photos-demo" id="'+companyInfo.items.ComImage[i].Id+'"><img layer-src="'+companyInfo.items.ComImage[i].imgUrl+'" src="'+companyInfo.items.ComImage[i].imgUrl+'" alt="" /></div>')
                             $('.ComImageDiv #'+companyInfo.items.ComImage[i].Id+'').click(function() {
                                layer.photos({
                                      photos: '.layer-photos-demo'
                                      ,anim: 5 //
                                    });
                             });
                        }
                        // 团队介绍
                        for (var i = 0; i < companyInfo.items.ComTeam.length; i++) {
                            $('.ComTeamDiv').append('<div class="pull-left"><img src="'+companyInfo.items.ComTeam[i].HeadImage+'" alt="" /><h4 class="name">'+companyInfo.items.ComTeam[i].userName+'</h4><p class="post">'+companyInfo.items.ComTeam[i].Post+'</p><div>'+companyInfo.items.ComTeam[i].Msg+'</div></div>')
                        }
                        // 联系我们
                        $('.Contacts').text( companyInfo.items.ComCotact.Contacts )
                        $('.ContactNumber').text( companyInfo.items.ComCotact.ContactNumber )
                        $('.SeatMachine').text( companyInfo.items.ComCotact.SeatMachine )
                        $('.Email').text( companyInfo.items.ComCotact.Email )
                        $('.Address').text( companyInfo.items.ComCotact.Address )
                });
            }
        // 获取企业文化
        function loadcomCulture(){
              $.post(''+EQD_space+'/ComSpace/Get_ComSpaceCulture.ashx', {
                      "userGuid" : dataInfo.Guid,
                      "userCompanyId" : dataInfo.companyId,
                      "companyId" : comId
                      }, function(data) {
                        var companyInfo = JSON.parse(data)
                         // 核心价值
                        for (var i = 0; i < companyInfo.items.ComCoreValues.length; i++) {
                            $('.ComCoreValuesDiv').append('<div class="pull-left"><img src="'+companyInfo.items.ComCoreValues[i].ImageUrl+'" alt="" /><h4>'+companyInfo.items.ComCoreValues[i].title+'</h4><div>'+companyInfo.items.ComCoreValues[i].Describe+'</div></div>')
                        }
                        // 领导活动
                        for (var i = 0; i < companyInfo.items.ComActitivies.length; i++) {
                            $('.ComActitiviesDiv ul').append('<li class="clearfix"><a target="_blank" href="../html/leaderDetdils.html?id='+companyInfo.items.ComActitivies[i].Id+'" class="pull-left">'+companyInfo.items.ComActitivies[i].title+'</a><span class="pull-right">'+companyInfo.items.ComActitivies[i].createTime.split(" ")[0]+'</span></li>')
                        }
                        // 先进事迹
                        for (var i = 0; i < companyInfo.items.ComEvent.length; i++) {
                            $('.ComEventDiv ul').append('<li class="clearfix"><a target="_blank" href="../html/thingDetails.html?id='+companyInfo.items.ComEvent[i].Id+'" class="pull-left">'+companyInfo.items.ComEvent[i].title+'</a><span class="pull-right">'+companyInfo.items.ComEvent[i].createTime.split(" ")[0]+'</span></li>')
                        }
                        // 荣誉墙
                        for (var i = 0; i < companyInfo.items.ComGoodStaff.length; i++) {
                            $('.ComGoodStaffDiv').append('<div class="pull-left"><img src="'+companyInfo.items.ComGoodStaff[i].HeadImage+'" alt="" /><h4 class="name">'+companyInfo.items.ComGoodStaff[i].userName+'</h4><p class="post">'+companyInfo.items.ComGoodStaff[i].Post+'</p><div>'+companyInfo.items.ComGoodStaff[i].Msg+'</div></div>')
                        }
              });
        }
        $('.topLeft li').hover(function() {
          $(this).addClass('active2').siblings('li').removeClass('active2')
        }, function() {
           $(this).removeClass('active2')
        });
        // 日志
            loadRizhi(0)
             var oDiv = document.getElementById('rizhiDiv');
         $('#rizhi').click(function() {
             $(this).addClass('active3').siblings('li').removeClass('active3');
             $('.rizhiDiv').show().siblings('div').hide();
             $('.leaveMessage').show()
             loadRizhi(0)
                if ( oDiv.offsetHeight < window.innerHeight ) {
                  $('.Link').addClass('fixed')
                }else{
                  $('.Link').removeClass('fixed')
                }
         });
        // 查看日志
        var rizhiPage;
        function loadRizhi(page){
              $.post(''+EQD_space+'/Admin/ComSpaceDaily/Get_ComSpaceDaily.ashx', {
                "companyId" : comId,
                "page" : page,
              }, function(data) {
                var dataRizhi = JSON.parse(data)
                if ( dataRizhi.items.rows.length  > 0) {

                $('.logoArea img').attr('src',dataRizhi.items.rows[0].iphoto );
                $('.logoArea .companyName').text( dataRizhi.items.rows[0].upname )
                rizhiPage = dataRizhi.items.page
                $('.lookRizhi>div').remove()
                console.log( dataRizhi.items.rows.length  )
                for (var i = 0; i < dataRizhi.items.rows.length; i++) {
                  loadSingleRizhi( dataRizhi.items.rows[i] )
                }
                $('div[class^=comInfoDiv]').click(function() {
                   var Cid = $(this).attr('id').substring(1)
                   window.open("../html/companyIndex.html?id="+Cid+"");
                  });
                $('.lookMore').click(function() {
                    window.open("../html/rizhiDetails.html?id="+$(this).parent('div').siblings('div').attr('id')+"")
                });
                if ( rizhiPage <=1 ) {
                                  $('#rizhiPrveBtn').hide()
                                  if ( dataRizhi.items.rows.length >=10 ) {
                                    $('#rizhiNextBtn').show()
                                  }else{
                                    $('#rizhiPrveBtn').hide()
                                    $('#rizhiNextBtn').hide()
                                  }
                                }else{
                                  if ( dataRizhi.items.rows.length >=10 ) {
                                      $('#rizhiNextBtn').show()
                                      $('#rizhiPrveBtn').show()
                                  }else{
                                  $('#rizhiNextBtn').hide()
                                  $('#rizhiPrveBtn').show()
                                  }
                                }
                }else{
                  layer.msg('已加载完毕', {
                                                              time: 1000,
                                       });
                }
              });
        }
        $('#rizhiNextBtn').click(function() {
                   loadRizhi(rizhiPage)
                 });
        $('#rizhiPrveBtn').click(function() {
          loadRizhi(Number(rizhiPage)-2)
        });
    // 单个日志模块JS
    function loadSingleRizhi(model){
      var time1 = model.createTime.split("T")[0];
      var time2 = model.createTime.split("T")[1];
      var time3 = time2.substring(0,5);
      $('.lookRizhi').append('<div><div class="clearfix titleTop" id="'+model.Id+'"><img src="'+model.iphoto+'" alt=""  class="pull-left"><div class="pull-left clearfix" id="comName"><p>'+model.upname+'</p><p>'+time1+' '+time3+'</p></div><div class="comInfoDiv" id="C'+model.companyId+'"><p><img src="'+model.iphoto+'" alt=""></p><p>'+model.upname+'</p></div></div><div class="content">'+model.content+'<a class="lookMore">查看全文</a></div><img src="'+model.image+'" class="imgDiv"><div class="dicuss"></div></div>')
      $(".imgDiv").on("load",function(){
        var w = $(this).width();
        var h = $(this).height();
        if (w >= h) {
          $(this).css('width', '500px');
          $(this).css('height', 'auto');
        }else{
          $(this).css('height', '500px');
          $(this).css('width', 'auto');
        }
    });
      $("div[class^=comInfoDiv]").hide();
    }
         $("#rizhi").one("click",function(){
                if ( option == 1 ) {
                }else{
                $.session.set('V_record', '1');
                reorcdHistory()
                }
          });
         // 企业信息
         $('#comInfo').click(function() {
             $(this).addClass('active3').siblings('li').removeClass('active3');
             $('.comInfodiv').show().siblings('div').hide();
             $('.ComEquipmentDiv div').remove()
             $('.ComOrganizationDiv div').remove()
             $('.ComImageDiv div').remove()
             $('.ComTeamDiv div').remove()
             loadComInfo()
             setTimeout(function(){
             var oDiv2 = document.getElementById('comInfodiv');
             if ( oDiv2.offsetHeight < window.innerHeight ) {
                  $('.Link').addClass('fixed')
                }else{
                  $('.Link').removeClass('fixed')
                }
             },300)
         });
         // 产品信息
         $('#goodInfo').click(function() {
                 $(this).addClass('active3').siblings('li').removeClass('active3');
                 $('.goodInfoDiv').show().siblings('div').hide();
                 loadChanpin(0)
                 setTimeout(function(){
                 var oDiv3 = document.getElementById('goodInfoDiv');
                 if ( oDiv3.offsetHeight < window.innerHeight ) {
                      $('.Link').addClass('fixed')
                    }else{
                      $('.Link').removeClass('fixed')
                    }
                 },300)
         });
        var changPinPage;
        function loadChanpin(page){
                $.post(''+EQD_space+'/ComSpace/ComSpaceProduct/Get_ComSpaceProduct.ashx', {
                  "companyId" : comId,
                  "page" : page
                }, function(data) {
                  var dataChanpin = JSON.parse(data)
                  loadChanpinTable(dataChanpin.items)
                  changPinPage = dataChanpin.page
                  if ( changPinPage <=1 ) {
                       $('.chanpinPrve').hide()
                       if ( dataChanpin.items.length >=10 ) {
                         $('.chanpinNext').show()
                       }else{
                         $('.chanpinPrve').hide()
                         $('.chanpinNext').hide()
                      }
                    }else{
                       if ( dataChanpin.items.length >=10 ) {
                          $('.chanpinNext').show()
                          $('.chanpinPrve').show()
                      }else{
                      $('.chanpinNext').hide()
                      $('.chanpinPrve').show()
                      }
                    }
                });
        }
       $('.chanpinNext').click(function() {
            loadChanpin(changPinPage)
        });
        $('.chanpinPrve').click(function() {
           loadChanpin(Number(changPinPage)-2)
         });
          function loadChanpinTable(data){
              $('#productList').bootstrapTable({
                                    url: data,
                                    columns: [
                                    {
                                        field: 'img',
                                        align: 'center',
                                        valign: 'middle',
                                        formatter:imgchanpinFormatter,
                                    },
                                    {
                                        field: 'more',
                                        align: 'left',
                                        valign: 'middle',
                                        formatter:optionchanpinMoreFormatter,
                                    },
                                    ]
                                });
                                $("#productList").bootstrapTable('load', data);
                                function imgchanpinFormatter(e,value, row, index){
                                  var imgUrl2 = value.image.replace(/.png/, "min.png")
                                     return [
                                     '<img src="'+imgUrl2+'" alt="">'
                                      ].join('');
                                };
                                function optionchanpinMoreFormatter(e,value, row, index){
                                     return [
                                        '<p><span>产品名称</span><span>'+value.ProductName+'</span></p>',
                                        '<p><span>产品单价</span><span class="productPrice">￥'+value.ProductPrice+'</span>元</p>',
                                        '<p><span>发货地</span><span>'+value.area+'</span></p>',
                                        '<p><span>浏览量</span><span>'+value.browseCount+'</span></p>',
                                        '<p><span>产品种类</span><span class="productLabel">'+value.ProductType+'</span></p>',
                                      ].join('');
                                };
        }
        $("#productList").on('click-row.bs.table',function( e,row, $element){
                        window.open("../html/product.html?id="+row.Id+"")
                      })
            // 搜索产品
            $('.seaBtn').click(function() {
                $('.chanpinNext').hide()
                $('.chanpinPrve').hide()
                              if ( $('.inputVal').val().length == 0 ){
                                  layer.msg('搜索关键字不能为空', {
                                                              time: 1000,
                                       });
                                   }else{
                                    searchGood(0)
                                  }
            });
            $('.inputVal').keydown(function(event) {
                       if (event.keyCode === 13){
                              if ( $('.inputVal').val().length == 0 ){
                                  layer.msg('搜索关键字不能为空', {
                                                              time: 1000,
                                       });
                                   }else{
                                    searchGood(0)
                                  }
                    }else{}
            });
            var searchPage;
          function searchGood(page){
            $.post(''+EQD_space+'/ComSpace/ComSpaceProduct/Get_ComSpaceBySearch.ashx', {
              "companyId" : comId,
              "para" : $('.inputVal').val(),
              "page" : page
            }, function(data) {
              var dataSearch = JSON.parse(data);
              searchPage = dataSearch.page
              loadChanpinTable(dataSearch.items)
              if ( dataSearch.items.length < 10 ) {
                $('.chanpinNext').hide()
                $('.chanpinPrve').hide()
              }
            });
          }
         $("#goodInfo").one("click",function(){
                if ( option == 2 ) {
                }else{
                $.session.set('V_record', '2');
                reorcdHistory()
                }
          });
         // 企业文化
         $('#comClture').click(function() {
               $(this).addClass('active3').siblings('li').removeClass('active3')
               $('.comCltureDiv').show().siblings('div').hide();
               $('.ComCoreValuesDiv div').remove()
               $('.ComActitiviesDiv ul li').remove()
               $('.ComEventDiv ul li').remove()
               $('.ComGoodStaffDiv div').remove()
               loadcomCulture()
               setTimeout(function(){
                 var oDiv4 = document.getElementById('comCltureDiv');
                 if ( oDiv4.offsetHeight < window.innerHeight ) {
                      $('.Link').addClass('fixed')
                    }else{
                      $('.Link').removeClass('fixed')
                    }
                 },300)
         });
         $('.comCltureDiv li').click(function() {
           $('.laederActivtiesMore').hide().siblings('div').show();
         });
         // 全部领导活动
         var arr_Leader = [];
         var leaderPage;
         $('.leaderMore').click(function() {
          $('.ComActitivies').addClass('liactive').siblings('li').removeClass('liactive')
          arr_Leader = [];
          $('.laederActivtiesMore ul li').remove()
           $('.laederActivtiesMore').show().siblings('div').hide();
           lookAllLeader(0)
          setTimeout(function(){
                 var oDiv8 = document.getElementById('laederActivtiesMore');
                 if ( oDiv8.offsetHeight < window.innerHeight ) {
                      $('.Link').addClass('fixed')
                    }else{
                      $('.Link').removeClass('fixed')
                    }
                 },300)
         });
         // 全部先进事迹
         var arr_GoodThing = [];
         var goodPage;
         $('.goodThingsMore').click(function() {
          $('.ComEvent').addClass('liactive').siblings('li').removeClass('liactive')
          arr_GoodThing = [];
          $('.goodThingMore ul li').remove()
           $('.goodThingMore').show().siblings('div').hide();
           lookAllGood(0)
           setTimeout(function(){
                 var oDiv7 = document.getElementById('goodThingMore');
                 if ( oDiv7.offsetHeight < window.innerHeight ) {
                      $('.Link').addClass('fixed')
                    }else{
                      $('.Link').removeClass('fixed')
                    }
                 },300)
         });
         function lookAllGood(page){
              $.post(''+EQD_space+'/ComSpace/ComSpace_Event/Get_ComSpaceEvent.ashx', {
                "companyId" : comId,
                "page" : page
              }, function(data) {
                var dataGood = JSON.parse(data)
                goodPage = dataGood.page
                for (var i = 0; i < dataGood.items.length; i++) {
                  arr_GoodThing.push( dataGood.items[i] )
                }
                if ( dataGood.items.length >9 ) {
                  $('.loadGoodNext').show()
                  $('.loadGoodNoMore').hide()
                }else{
                  $('.loadGoodNext').hide()
                  $('.loadGoodNoMore').show()
                }
                for (var i = 0; i < arr_GoodThing.length; i++) {
                    $('.goodThingMore ul').append('<li class="clearfix"><a target="_blank" href="../html/thingDetails.html?id='+arr_GoodThing[i].Id+'" class="pull-left">'+arr_GoodThing[i].title+'</a><span class="pull-right">'+arr_GoodThing[i].createTime.split(" ")[0]+'</span></li>')
                }
              })
         }
         $('.loadGoodNext').click(function() {
            $('.goodThingMore ul li').remove()
            lookAllGood(goodPage)
         });
         function lookAllLeader(page){
              $.post(''+EQD_space+'/ComSpace/ComSpaceActivities/Get_ComSpaceActivities.ashx', {
                "companyId" : comId,
                "page" : page
              }, function(data) {
                var dataLeaderAll = JSON.parse(data)
                leaderPage = dataLeaderAll.page
                for (var i = 0; i < dataLeaderAll.items.length; i++) {
                  arr_Leader.push(dataLeaderAll.items[i])
                }
                if ( dataLeaderAll.items.length >9 ) {
                  $('.loadNext').show()
                  $('.loadNoMore').hide()
                }else{
                  $('.loadNext').hide()
                  $('.loadNoMore').show()
                }
                for (var i = 0; i < arr_Leader.length; i++) {
                  $('.laederActivtiesMore ul').append('<li class="clearfix"><a target="_blank" href="../html/leaderDetdils.html?id='+arr_Leader[i].Id+'" class="pull-left">'+arr_Leader[i].title+'</a><span class="pull-right">'+arr_Leader[i].createTime.split(" ")[0]+'</span></li>')
                }
              });
         }
         $('.loadNext').click(function() {
            $('.laederActivtiesMore ul li').remove()
            lookAllLeader(leaderPage)
         });
         // 收藏企业
         $('.collection span').hover(function() {
              layer.tips('点我收藏该企业', '.collection span');
            }, function() {
             layer.closeAll('tips')
            });
         $('.collection').click(function() {
             $.post(''+EQD_space+'/ComSpace/ComSpace_Collection/Add_ComSpaceCollection.ashx', {
                  "userGuid" : dataInfo.Guid,
                  "userCompanyId" : dataInfo.companyId,
                  "objectId" : 0,
                  "objectType" : 0,
                  "objectCompanyId" : comId
                }, function(data) {
                    var dataCollcet = JSON.parse(data)
                    if ( dataCollcet.status == 200 ) {
                      layer.msg('收藏成功', {
                                                      time: 1000,
                                                    });
                    }else{
                      layer.msg(dataCollcet.msg, {
                                                      time: 1000,
                                                    });
                    }
                });
             if (dataInfo.isAdmin != 0) {
              $.post(''+EQD_space+'/Makerspacey/MakerCollection/Add_MakerCollection.ashx', {
                  "userGuid" : dataInfo.Guid,
                  "userCompanyId" : dataInfo.companyId,
                  "objectId" : 0,
                  "objectType" : 0,
                  "objectGuid" : "",
                  "objectCompanyId" : comId
                }, function(data) {
                });
             }
         });
         // 企业留言
         $('#comMessage').click(function() {
             $(this).addClass('active3').siblings('li').removeClass('active3')
             $('.comMessageDiv').show().siblings('div').hide();
             $('.messageList div').remove()
             lookMessage(0)
             setTimeout(function(){
                 var oDiv5 = document.getElementById('comMessageDiv');
                 if ( oDiv5.offsetHeight < window.innerHeight ) {
                      $('.Link').addClass('fixed')
                    }else{
                      $('.Link').removeClass('fixed')
                    }
                 },300)
         });
         // 留言
         $('#sendMessageBtn').click(function() {
              if ( $('#leaveMessage').val().length == 0 ) {
                layer.msg('请输入留言', {
                                                      time: 1000,
                                                    });
              }else{
                   $.post(''+EQD_space+'/ComSpace/ComSpaceLeaveMessage/Add_ComSpaceLeaveMessage.ashx', {
                                                  "userGuid" : dataInfo.Guid,
                                                  "userCompanyId" : dataInfo.companyId,
                                                  "companyId" : comId,
                                                  "message" : $('#leaveMessage').val(),
                                                  "parentId" : 0,
                                                  "parentUserGuid" : 0,
                                                  "firstCommentId" : 0
                                                  }, function(data) {
                                                      var dataLeave = JSON.parse(data);
                                                      if ( dataLeave.status == 200 ) {
                                                        layer.msg('留言成功', {
                                                            time: 1000,
                                                          });
                                                        $('#leaveMessage').val("")
                                                        $('.messageList div').remove()
                                                        lookMessage(0)
                                                      }else{
                                                        layer.msg(dataLeave.msg, {
                                                            time: 1000,
                                                          });
                                                      }
                                                  });
                  }
         });
         // 企业访客
         $('#comVisitor').click(function() {
             $(this).addClass('active3').siblings('li').removeClass('active3')
             $('.comVisitorDiv').show().siblings('div').hide();
         });
         // 记录访问模块
          var option =  $.session.get('V_record');
         function reorcdHistory(){
                  var name;
                  if ( option == 2 ) {
                    name = "产品信息";
                    $.post(''+EQD_space+'/ComSpace/ComSpaceVisitor/Add_ComSpaceVisitor.ashx', {
                          "userGuid" : dataInfo.Guid,
                          "userCompanyId" : dataInfo.companyId,
                          "companyId" : comId,
                          "mudular" : name,
                          "option" : "访问了"+name+""
                          }, function(data) {
                          });
                  }else if ( option == 1 ) {
                    name = "企业日志";
                    $.post(''+EQD_space+'/ComSpace/ComSpaceVisitor/Add_ComSpaceVisitor.ashx', {
                          "userGuid" : dataInfo.Guid,
                          "userCompanyId" : dataInfo.companyId,
                          "companyId" : comId,
                          "mudular" : name,
                          "option" : "你访问了"+name+""
                          }, function(data) {
                          });
                  }
            }
            $(function(){
                  $(window).scroll(function(){
                      if( $(window).scrollTop() > 100 ){
                        $(".backTop").show()
                      }else{
                         $(".backTop").hide()
                      }
                  });
          });
          //当点击跳转链接后，回到页面顶部位置
           $('.backTop').hover(function() {
              layer.tips('点我回到顶部', '.backTop');
            }, function() {
             layer.closeAll('tips')
            });
           // 关注微信
           $('.weChat span').hover(function() {
              layer.tips('<img src="../image/downQRcode.jpg" alt="" id="weChatImg"><p id="fouceWechat">扫码关注微信</p>', '.weChat span');

            }, function() {
             layer.closeAll('tips')
            });
           // 下载
            $('.downloadDiv span').hover(function() {
              layer.tips('<img src="https://www.eqidd.com/image/adjust.png" alt="" id="downImg"><p id="fouceDown">扫码下载APP</p>', '.downloadDiv span');

            }, function() {
             layer.closeAll('tips')
            });
           //
           // 反馈
           $('.collection2').hover(function() {
              layer.tips('反馈信息', '.collection2');
            }, function() {
             layer.closeAll('tips')
            });
           $('.collection2').click(function() {
         window.open("../../71guangwang/html/feedback.html")
    });
            $(".backTop").click(function(){
                $('body,html').animate({scrollTop:0},800);
            });
            // 给我们留言
            $('.message span').hover(function() {
              layer.tips('点我给企业留言', '.message span');
            }, function() {
             layer.closeAll('tips')
            });
            $('.message span').click(function() {
              console.log( "G" )
                  layer.open({
                                 type: 1,
                                 area: ['600px','260px'],
                                 title: ['留言', 'font-size:18px;text-align: center;'],
                                 content: $(".addMessage"),
                                 btn:'确定',
                                 yes: function(index, layero){
                                  if ( $('#messageContent').val().length == 0 ) {
                                    layer.msg('请输入留言', {
                                                                          time: 1000,
                                                                        });
                                  }else{
                                    $.post(''+EQD_space+'/ComSpace/ComSpaceLeaveMessage/Add_ComSpaceLeaveMessage.ashx', {
                                          "userGuid" : dataInfo.Guid,
                                          "userCompanyId" : dataInfo.companyId,
                                          "companyId" : comId,
                                          "message" : $('#messageContent').val(),
                                          "parentId" : 0,
                                          "parentUserGuid" : 0,
                                          "firstCommentId" : 0,
                                          "objectId" : 0
                                        }, function(data) {
                                            var dataLeave = JSON.parse(data);
                                            if ( dataLeave.status == 200 ) {
                                              layer.close(index)
                                              layer.msg('留言成功', {
                                                  time: 1000,
                                                });
                                              $('#messageContent').val("")
                                              $('.messageList div').remove()
                                              lookMessage(0)
                                            }
                                        });
                                  }
                                 }
                              });
            });
            // 查看留言
          function lookMessage(page){
              $.post(''+EQD_space+'/ComSpace/ComSpaceLeaveMessage/Get_ComSpaceLeaveMessage.ashx', {
                "companyId" : comId,
                "page" : page
                }, function(data) {
                  var dataLookMessage = JSON.parse(data);
                  for (var i = 0; i < dataLookMessage.items.length; i++) {
                    $('.messageList').append('<div><div class="personInfo clearfix" id="'+dataLookMessage.items[i].Id+'"><img src="'+dataLookMessage.items[i].iphoto+'" alt="" / class="pull-left"><p class="personName pull-left">'+dataLookMessage.items[i].staffName+'</p><br /><p class="pull-left"><span>'+dataLookMessage.items[i].departName+'</span><span>'+dataLookMessage.items[i].postName+'</span></p><div class="peosonCom" id="L'+dataLookMessage.items[i].Id+'"><p><img src="'+dataLookMessage.items[i].iphoto+'" alt="" /></p><p><a  target="_blank" href="../html/companyIndex.html?id='+dataLookMessage.items[i].companyId+'">'+dataLookMessage.items[i].com_name+'</a></p></div></div><div class="content">'+dataLookMessage.items[i].Message+'</div></div>');
                  }
                  $('.messageList div .personInfo').hover(function() {
                      var Lid = $(this).attr('id');
                      $('#L'+Lid+'').show()
                    }, function() {
                     $('.peosonCom').hide()
                    });
                });
            }
    })
