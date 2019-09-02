$(document).ready(function(){
      var href = location.href;
      var dataC = localStorage.getItem("GHY_login");
      if (dataC != null) {
              var dataInfo = JSON.parse(dataC);
              $('.topRight img').attr('src',dataInfo.iphoto );
              $('.imgArea img').attr('src',dataInfo.iphoto );
              $('.topRight .name').text( dataInfo.username )
              $('.namePerson').text( dataInfo.username )
              $('.PersonCom').text( dataInfo.company )
        }else{
              // location.href ="../html/qiyeInfo.html";
        }
        $('.topLeft li').hover(function() {
          $(this).addClass('active2').siblings('li').removeClass('active2')
        }, function() {
           $(this).removeClass('active2')
        });
        var productId;
              if(href.indexOf("&") > 0 ){
                  var product = href.split("&")[0];
                  productId = product.split("=")[1];
              }else{
                    if(href.indexOf("#") > 0 ){
                        var product3 = href.split("?")[1];
                        var productId4 = product3.split("#")[0];
                         productId = productId4.split("=")[1];
                    }else{
                       productId = href.split("=")[1];
                    }
              }
            // 退出操作
            $('.quitOut').click(function() {
                  localStorage.removeItem("GHY_login");
                  location.href ="../html/qiyeInfo.html";
            });
            var comId;
            $.post(''+EQD_space+'/ComSpace/ComSpaceProduct/Get_ComSpaceProductById.ashx', {
              "productId" : productId
                },function(data) {
                  console.log( data )
                    var dataProduct = JSON.parse(data)
                    comId = dataProduct.items.CompanyId
                    if ( dataProduct.status == 200 ) {
                        for (var i = 0; i < dataProduct.items.images.length; i++) {
                          $('#myCarousel ol').append('<li data-target="#myCarousel" data-slide-to="'+i+'"></li>')
                          $('.carousel-inner').append('<div class="item"><img src="'+ dataProduct.items.images[i]+'"></div>')
                        }
                        $('#myCarousel ol li').eq(0).addClass('active')
                        $('.carousel-inner div').eq(0).addClass('active')
                        $('.ProductName').text(dataProduct.items.ProductName)
                        $('.ProductType').text(dataProduct.items.ProductType)
                        $('.ProductPrice').text(dataProduct.items.ProductPrice)
                        $('.companyName').text(dataProduct.items.company)
                        $('.area').text(dataProduct.items.area)
                        $('.productContent').html(dataProduct.items.ProductInfo)
                        $('.Stock').html(dataProduct.items.Stock)
                        $('.DeliveryCycle').html(dataProduct.items.DeliveryCycle)
                        $('.companyName').click(function() {
                          window.open("https://www.eqidd.com/qiyeSpace/html/companyIndex.html?id="+dataProduct.items.CompanyId+"")
                        });
                    }
                    // 查看公司详情
                    $('#showComdesc').click(function() {
                      $(this).addClass('active').siblings('li').removeClass('active')
                      $('.ComShow').show().siblings('.contentUs').hide()
                      loadCompany()
                    });

                  function loadCompany(){
                    $.post(''+EQD_space+'/ComSpace/Get_ComSpaceInfo.ashx', {
                          "companyId" : comId
                        }, function(data) {
                          var dataCom = JSON.parse(data)
                          $('.ComShow>div').html(dataCom.items.comDesc)
                    });
                  }
                  setTimeout(function(){
                    loadCompany()
                  },500)
                    // 联系我们
                    $('#showContentUs').click(function() {
                            $(this).addClass('active').siblings('li').removeClass('active')
                            $('.contentUs').show().siblings('.ComShow').hide()
                            $.post(''+EQD_space+'/ComSpace/ComSpace_Contact/Get_ComSpaceContact.ashx', {
                              "companyId" : comId
                            }, function(data) {
                              var dataContent = JSON.parse(data)
                                    $('.Contacts').text( dataContent.items.Contacts )
                                    $('.ContactNumber').text( dataContent.items.ContactNumber )
                                    $('.SeatMachine').text( dataContent.items.SeatMachine )
                                    $('.Email').text( dataContent.items.Email )
                                    $('.Address').text( dataContent.items.Address )
                            });
                    });
            });
            // 设置轮播时间
            $('#myCarousel').carousel({
              interval: 2000
            });
        // 留言
        $('.sendMessageBtn').click(function() {
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
                                                  "firstCommentId" : 0,
                                                  "objectId" : productId
                                                }, function(data) {
                                                    var dataLeave = JSON.parse(data);
                                                    if ( dataLeave.status == 200 ) {
                                                      layer.msg('留言成功', {
                                                          time: 1000,
                                                        });
                                                      $('#leaveMessage').val("")
                                                    }else{
                                                      layer.msg(dataLeave.msg, {
                                                          time: 1000,
                                                        });
                                                    }
                                                });
                  }
        });
        // 收藏
        $('#collectBtn').click(function() {
                $(this).addClass('active').siblings('li').removeClass('active')
                if ( dataC == null ) {
                  layer.msg('请登录', {
                                                        time: 1000,
                                                      });
                }else{
                  $.post(''+EQD_space+'/ComSpace/ComSpace_Collection/Add_ComSpaceCollection.ashx', {
                    "userGuid" : dataInfo.Guid,
                    "userCompanyId" : dataInfo.companyId,
                    "objectId" : productId,
                    "objectType" : 1,
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
                          "objectId" : productId,
                          "objectType" : 1,
                          "objectGuid" : "",
                          "objectCompanyId" : comId
                        }, function(data) {
                        });
                     }
                }
        })
        // 采购
        $('#buyThis').click(function() {
          layer.msg('该模块正在开发中...', {
                                                        time: 1000,
                                                      });
        });
  })
