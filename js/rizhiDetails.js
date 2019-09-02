$(document).ready(function(){
          var href = location.href;
          var str = JSON.stringify(href)
          sessionStorage.removeItem("SPACE_url")
          sessionStorage.setItem("SPACE_url", str);
           if(href.indexOf("=") < 0 ){
              location.href ="../html/qiyeInfo.html"
            }else{
              if ( href.indexOf("#") < 0 ) {
              var thisHref = href.split("=")[1];
              thisHref = thisHref.split("&")[0];

              }else{
                var newHref = href.split("#")[0];
                thisHref = newHref.split("=")[1];
                  thisHref = thisHref.split("&")[0];
              }
            }
            var loginGuid;
      var dataCircle = localStorage.getItem("GHY_login");
        if (dataCircle != null) {
          $('.infoBtn').show();
          $('#loginBtn').hide();
        var dataC = JSON.parse(dataCircle);
        loginGuid = dataC.Guid;
        $('.topRight img').attr('src', dataC.iphoto);
        $('.topRight .name').text( dataC.username )
         // 查看公司信息
        $.post(''+EQD_space+'/Com_regiInfo.ashx', {
                  "comId" : dataC.companyId
                 }, function(data) {
                  var dataCominfo = JSON.parse(data)
                  $('.logoArea img').attr('src',dataCominfo.items.logo  );
                  $('.logoArea .companyName').text( dataCominfo.items.name )
                });
        $.post(''+EQD_space+'/ComSpace/ComSpacePerfect/Get_ComSpacePerfect.ashx', {
              "companyId" : dataC.companyId
              }, function(data) {
                var dataCom = JSON.parse(data);
                $('.industry').text(dataCom.items.Industry)
                $('.address').text(dataCom.items.Register)
                $('.service').text(dataCom.items.ScopeOfOperation)
                $('.turnover').text(dataCom.items.Turnover)
                $('.conName').text(dataC.company)
                $('.logo img').attr('src', dataC.iphoto);
        });
        }else{
          loginGuid = ""
          $('#loginBtn').show()
          $('.quitOut').hide()
          // location.href ="../html/innerLogin.html"
        }
      // 退出操作
      $('.quitOut').click(function() {
              localStorage.removeItem("GHY_login");
              location.href =href
            });

      // 登陆操作
      $('#loginBtn').click(function() {
         location.href ="../html/innerLogin.html";
      });
      $('.news').hover(function() {
        $(this).children('ul').show();
      }, function() {
       $(this).children('ul').hide();
      });
      $('.fouceBtn').hover(function() {
        $(this).children('ul').show();
      }, function() {
       $(this).children('ul').hide();
      });
      $('.infoBtn').hover(function() {
        $(this).children('ul').show();
      }, function() {
       $(this).children('ul').hide();
      });
     var dataCircleShow;
    function loadCircle(){
        $.post(''+EQD_space+'/Articles/Get_Article_ById.ashx',{
                 "articleId":thisHref,
                 "userGuid":loginGuid
                }, function(data) {
                 dataCircleShow = JSON.parse(data);
                 if ( dataCircleShow.status !=200 ) {
                    layer.msg(dataCircleShow.msg, {
                                                  time: 1000,
                                                });
                 }
                var time1 = (dataCircleShow.items.createTime).split("T")[0];
                var time2 = ((dataCircleShow.items.createTime).split("T")[1]).substring(0,5);
                var time3 = time1+" "+time2
                var time4 = diaplayTime(time3)
                if ( dataCircleShow.items.isAttention === false ) {
                  var attention = "+关注";
                }else{
                       attention = "已关注";
                       $('.attention').css({
                         backgroundColor: '#fff',
                         border: '1px solid #828282',
                         color:'#828282'
                       });
                       $('.fouceBtn2').css({
                         backgroundColor: '#fff',
                         border: '1px solid #828282',
                         color:'#828282'
                       });
                }
                if ( dataCircleShow.items.isZan === false ){
           }else{
            $('.addLike').css({
                backgroundColor: '#ea6f5a',
                color: '#fff'
              });
              $('.addLike span').css('color', '#fff');
           }
                var content = dataCircleShow.items.content;
                 content =   content.replace(/<pre>/g, "");
                  content =  content.replace(/<\/pre>/g, "");
                $('.title p').eq(0).text(dataCircleShow.items.title)
                $('.info img').attr('src', dataCircleShow.items.iphoto);
                $('.infoLeft img').attr('src', dataCircleShow.items.iphoto);
                $('.nicheng').text(dataCircleShow.items.upname);
                $('.upname').text(dataCircleShow.items.upname);
                $('.cTime').text(time4);
                $('.LTime').text(time4);
                $('.content').html(content);
                $('.read').html(dataCircleShow.items.browseCount);
                $('.Read').html(dataCircleShow.items.browseCount);
                $('.discuss').text(dataCircleShow.items.commentCount);
                $('.Dicuss').text(dataCircleShow.items.commentCount);
                $('.like').text(dataCircleShow.items.zanCount);
                $('.liked').text(dataCircleShow.items.zanCount);
                $('.attention').text(attention);
                $('.fouceBtn2').text(attention);
                 if ( $('.attention').text() == "已关注" ) {
                  $('.attention').hover(function() {
                        $(this).text("X  取消关注")
                       }, function() {
                         $(this).text("已关注")
                       });
                }
                if ( $('.fouceBtn2').text() == "已关注" ) {
                  $('.fouceBtn2').hover(function() {
                        $(this).text("X  取消关注")
                       }, function() {
                         $(this).text("已关注")
                       });
                }
        });
    }
    loadCircle()
          $('.attention').click(function() {
                    if ( $('.attention').text() == "X  取消关注" ) {
                      $.post(''+EQD_space+'/Articles/Cancle_ArticleAttention.ashx', {
                            "userGuid":dataC.Guid,
                            "author":dataCircleShow.items.userGuid
                          }, function(data) {
                           $('.attention').css({
                           backgroundColor: '#42c02e',
                           border: 'none',
                           color:'#fff'
                         });
                           loadCircle()
                          });
                    }else{
                      $.post(''+EQD_space+'/Articles/Add_Article_Attention.ashx', {
                            "userGuid":dataC.Guid,
                            "attention":dataCircleShow.items.userGuid
                          }, function(data) {
                           loadCircle()
                          });
                    }
          });
          $('.fouceBtn2').click(function() {
                    if ( dataC ==null ) {
                      layer.msg('请先登陆', {
                                          time: 1000,
                                        });
                      setTimeout( function(){
                           location.href ="../html/innerLogin.html"
                    }, 1500 );
                    }else{
                    if ( $('.fouceBtn2').text() == "X  取消关注" ) {
                      $.post(''+EQD_space+'/Articles/Cancle_ArticleAttention.ashx', {
                            "userGuid":dataC.Guid,
                            "author":dataCircleShow.items.userGuid
                          }, function(data) {
                           $('.fouceBtn2').css({
                           backgroundColor: '#42c02e',
                           border: 'none',
                           color:'#fff'
                         });
                           $('.attention').css({
                           backgroundColor: '#42c02e',
                           border: 'none',
                           color:'#fff'
                         });
                           loadCircle()
                          });
                    }else{
                      $.post(''+EQD_space+'/Articles/Add_Article_Attention.ashx', {
                            "userGuid":dataC.Guid,
                            "attention":dataCircleShow.items.userGuid
                          }, function(data) {
                           loadCircle()
                          });
                    }
                }
          });
          // 举报文章
      $('.rePort').click(function() {
            if ( dataC ==null ) {
              layer.msg('请先登陆', {
                                  time: 1000,
                                });
            setTimeout( function(){
                           location.href ="../html/innerLogin.html"
                    }, 1500 );
            }else{
                  layer.open({
                                  type: 1,
                                  area: '350px',
                                  title: ['举报文章', 'font-size:18px;text-align: center;'],
                                  content: $(".reportDetails"),
                                  btn:'确定',
                                  shade: false
                                });
                  $('.layui-layer-btn0').click(function() {
                          if ( $('#reason').val().length == 0 ) {
                            var textCircle = " "
                          }else{
                                  textCircle = $('#reason').val()
                          }
                          $.post(''+EQD_space+'/Articles/Add_Article_Report.ashx', {
                            "userGuid":dataC.Guid,
                            "articleId":thisHref,
                            "reason":textCircle,
                            "reportType":$('input[name="circle"]:checked').val()
                          }, function(data) {
                            layer.msg('举报成功', {
                                  time: 1000,
                                });
                          });
                  });
                  }
          });
          // 喜欢点赞文章
      $('.addLike').click(function() {
            if ( dataC ==null ) {
              layer.msg('请先登陆', {
                                  time: 1000,
                                });
              setTimeout( function(){
                           location.href ="../html/innerLogin.html"
                    }, 1500 );
            }else{
            if ( dataCircleShow.items.isZan === false ){
            $.post(''+EQD_space+'/Articles/Add_Article_Zan.ashx', {
              "userGuid":dataC.Guid,
              "articleId":thisHref
            }, function(data) {
               loadCircle()
            });
            }else{
                $('.addLike').css({
                backgroundColor: '#ea6f5a',
                color: '#fff'
              });
              $('.addLike span').css('color', '#fff');
            }
            }
          });
          // 收藏文章
          $('.collection').click(function() {
                if ( dataC ==null ) {
                  layer.msg('请先登陆', {
                                      time: 1000,
                                    });
                  setTimeout( function(){
                           location.href ="../html/innerLogin.html"
                    }, 1500 );
                }else{
                        var herfAll ;
                        if ( dataCircleShow.items.homeImage == '' ) {
                          var imgUrl = " ";
                        }else{
                          imgUrl = dataCircleShow.items.homeImage;
                        }
                        herfAll = imgUrl+";"+href;
                        $.post(''+EQD_space+'/Collection/Add_collection.ashx', {
                          "owner":dataC.Guid,
                          "type":10,
                          "title":dataCircleShow.items.title,
                          "url":herfAll,
                          "source":"易企阅",
                          "sourceOwner":dataCircleShow.items.userGuid,
                          "articleId":thisHref
                        }, function(data) {
                          var dataColltion = JSON.parse(data)
                          if ( dataColltion.status == 200 ) {
                            layer.msg('收藏成功', {
                                                time: 1000,
                                              });
                          }
                        });
                }
          });
           $(window).scroll(function(){
               if($(window).scrollTop() >  70){
                  $('#writerInfo').addClass('active')
                }else{
                  $('#writerInfo').removeClass('active')
                }
         })
      $('.yesBtn').click(function() {
            if ( dataC ==null ) {
                  layer.msg('请先登陆', {
                                      time: 1000,
                                    });
                  setTimeout( function(){
                           location.href ="../html/innerLogin.html"
                    }, 1500 );
                }else{
                    if ( $('#WriterComment').val().length >0 ) {
                         $.post(''+EQD_space+'/Articles/Add_ArtcielComment.ashx', {
                            "userGuid":dataC.Guid,
                            "parentid":0,
                            "content":$('#WriterComment').val(),
                            "articleId":thisHref,
                            "parentUserGuid":" ",
                            "firstCommentId":0
                         }, function(data) {
                          var dataCircleComment = JSON.parse(data).items;
                           $('#WriterComment').val("");
                           var pTime1 = (dataCircleComment.createTime).split("T")[0];
                           var pTime2 = ((dataCircleComment.createTime).split("T")[1]).substring(0,5);
                           var pTime3 = pTime1+" "+pTime2;
                           var pTime4 = diaplayTime(pTime3);
                           $('.commentList').prepend('<div id="'+dataCircleComment.Id+'"><div><img class="pull-left" src="'+dataCircleComment.iphoto+'"><p><span class="biecheng">'+dataCircleComment.upname+'</span><br><span class="createTimeC">'+pTime4+'</span></p><p class="comContent">'+dataCircleComment.content+'</p><p id="huifu"><a class="dianzan"><span class="glyphicon glyphicon-thumbs-up"></span> 点赞</a><a class="answer"><span class="glyphicon glyphicon-comment"></span> 回复</a><a class="delDis"><span class="glyphicon glyphicon-trash"></span>删除</a></p></div></div>')
                           // ***************************静态点赞***************************
                           $('#'+dataCircleComment.Id+' .dianzan').click(function() {
                                      if ( dataC ==null ) {
                                          layer.msg('请先登陆', {
                                                              time: 1000,
                                                            });
                                        }
                             var comId  = $(this).parent('#huifu').parent('div').parent('div').attr('id');
                             $.post(''+EQD_space+'/Articles/Add_ArticleComment_Zan.ashx', {
                                    "userGuid":dataC.Guid,
                                    "articleCommentId":comId
                                  }, function(data) {
                                    $('#'+comId+' .dianzan').children('span').css({
                                      color: '#f00'
                                    });
                              });
                           });
                           // ***************************静态回复***************************
                           $('#'+dataCircleComment.Id+' .answer').click(function() {
                              var comId  = $(this).parent('#huifu').parent('div').parent('div').attr('id');
                           })
                         });
                    }else{
                      layer.msg('评论内容不能为空', {
                                                  time: 1000,
                                                });
                    }
                  }
               });
           var pageNum;
    function loaddisArea(page){
           $.post(''+EQD_space+'/Articles/Get_ArticleComment.ashx', {
              "userGuid":dataC.Guid,
              "page":page,
              "articleId":thisHref
               }, function(data) {
                 var dataComm = JSON.parse(data);
                 pageNum = dataComm.items.page;
                 var dataCircle = dataComm.items.rows;
                 if ( dataComm.items.rows.length >=10 ) {
                        $('.loadMoreComment').show();
                        $('.noMoreBtn').hide();
                      }else{
                        $('.loadMoreComment').hide();
                        $('.noMoreBtn').show();
                      }
                 for (var i = 0; i < dataComm.items.rows.length; i++) {
                   loadComment(dataComm.items.rows[i])
                   for (var j = 0; j < dataComm.items.rows[i].list.length; j++) {
                      loadCommentChild(dataComm.items.rows[i],dataComm.items.rows[i].list[j])
                   }
                 }
           });
      }
      loaddisArea(0)
      $('.loadMoreComment').click(function() {
        loaddisArea(pageNum)
      });
           function loadComment(model){
                  var modelList = model;
                      var comTime1 = (modelList.createTime).split("T")[0];
                      var comTime2 = ((modelList.createTime).split("T")[1]).substring(0,5);
                      var comTime3 = comTime1+" "+comTime2;
                      var comTime4 = diaplayTime(comTime3);
                  $('.commentList').append('<div id="'+modelList.Id+'"><div><img class="pull-left" src="'+modelList.iphoto+'"><p><span class="biecheng">'+modelList.upname+'</span><br><span class="createTimeC">'+comTime4+'</span></p><p class="comContent">'+modelList.content+'</p><p id="huifu"><a class="dianzan"><span class="glyphicon glyphicon-thumbs-up"></span> 点赞</a><a class="answer"><span class="glyphicon glyphicon-comment"></span> 回复</a><a class="delDis"><span class="glyphicon glyphicon-trash"></span>删除</a></p></div></div>')
                  // ******************************************一级评论点赞开始******************************************
                  if ( modelList.isZan === false ) {
                       $('.dianzan').click(function() {
                       if ( dataC ==null ) {
                                          layer.msg('请先登陆', {
                                                              time: 1000,
                                                            });
                                        }else{
                                    var comId  = $(this).parent('#huifu').parent('div').parent('div').attr('id');
                                    $.post(''+EQD_space+'/Articles/Add_ArticleComment_Zan.ashx', {
                                      "userGuid":dataC.Guid,
                                      "articleCommentId":comId
                                    }, function(data) {
                                      $('#'+comId+' .dianzan').children('span').css({
                                        color: '#f00'
                                      });
                                    });
                                        }
                    });
                  }else{
                    $('.dianzan').children('span').css('color', '#f00');
                  }
              // ******************************************一级评论点赞结束******************************************
              // ******************************************一级评论回复开始******************************************
                  $('#'+modelList.Id+' .answer').click(function() {
                        if ( dataC ==null ) {
                                          layer.msg('请先登陆', {
                                                              time: 1000,
                                                            });
                                        }else{
                                                var parentId = $(this).parent('p').parent('div').parent('div').attr('id');
                                                $('.sendComment').remove();
                                                  if ( $('#WriterfirstComment').size() == 0 ) {
                                                 $(this).parent('p').append('<div class="sendfirstComment"><textarea placeholder="写下你的评论..." class="form-control" id="WriterfirstComment"></textarea><div class="lanuchfirstBtnList clearfix"><button class="sendfirstBtn pull-right">发送</button><button class="canfirstBtn pull-right">取消</button></div></div>')
                                               }else{}
                                                  $('.canfirstBtn').click(function() {

                                                    $('.sendfirstComment').hide()
                                                  })
                                                 $('.sendfirstBtn').click(function() {
                                                      if ( $('#WriterfirstComment').val().length == 0 ) {
                                                        layer.msg('评论内容不能为空', {
                                                                                  time: 1000,
                                                                                });
                                                      }else{
                                                          $.post(''+EQD_space+'/Articles/Add_ArtcielComment.ashx', {
                                                                  "userGuid":dataC.Guid,
                                                                  "articleId":thisHref,
                                                                  "parentid":parentId,
                                                                  "content":$('#WriterfirstComment').val(),
                                                                  "parentUserGuid":modelList.userGuid,
                                                                  "firstCommentId":parentId
                                                                  }, function(data) {
                                                                  var dataComment = JSON.parse(data).items;
                                                                  $('.sendfirstComment').hide();
                                                                  $('#WriterfirstComment').val('')
                                                                  $('#WriterfirstComment').remove()
                                                                   loadCommentChild(model,dataComment)
                                                                  var childTime11 = (dataComment.createTime).split("T")[0];
                                                                  var childTime22 = ((dataComment.createTime).split("T")[1]).substring(0,5);
                                                                  var childTime33 = childTime11+" "+childTime22;
                                                                  var childTime44 = diaplayTime(childTime33);
                                                                   $('#'+modelList.Id+' .loadMoreBtn').hide()
                                                                });
                                                       }
                                                 });
                    }
                  });
              // ******************************************一级评论回复结束******************************************
              // ******************************************删除一级评论开始******************************************
                  if ( modelList.userGuid == dataC.Guid ) {
                    $('#'+modelList.Id+' .delDis').show()
                  }else{
                     $('#'+modelList.Id+' .delDis').hide()
                  }
                  $('#'+modelList.Id+' .delDis').click(function() {
                          if ( dataC ==null ) {
                                              layer.msg('请先登陆', {
                                                                  time: 1000,
                                                                });
                                            }else{
                            layer.open({
                                          type: 1,
                                          area: '450px',
                                          title: ['删除评论', 'font-size:18px;text-align: center;'],
                                          content: $(".delDisTable"),
                                          btn:'确定',
                                          shade: false
                                        });
                            $('.layui-layer-btn0').click(function() {
                                  $.post(''+EQD_space+'/Articles/Delete_ArticleComment.ashx', {
                                    "userGuid":dataC.Guid,
                                    "articleCommentId":modelList.Id,
                                    "articleId":thisHref,
                                    "type":1
                                      }, function(data) {
                                        var dataDis = JSON.parse(data)
                                        if ( dataDis.status == 200 ) {
                                          $('#'+modelList.Id+'').css('display', 'none');
                                        }else{
                                            layer.msg(dataDis.msg, {
                                                      time: 1000,
                                                    });
                                        }
                                      });
                            });
                        }
                  });
           // ******************************************删除一级评论结束******************************************
            }
            // 加载子评论
            function loadCommentChild(pModel,cModel){
                  var cmodelList = cModel;
                  var pmodelList = pModel;
                  var comTime11 = (cModel.createTime).split("T")[0];
                  var comTime22 = ((cModel.createTime).split("T")[1]).substring(0,5);
                  var comTime33 = comTime11+" "+comTime22;
                  var comTime44 = diaplayTime(comTime33);
                  $('#'+pmodelList.Id+'').append('<div id="'+cModel.Id+'" class="clearfix"><p id="huifu2"><span class="huifuzhe">'+cModel.upname+'</span>: 回复<span  class="pinglunzhe">'+cModel.parentUPname+'</span> : <span class="cContent"> '+cModel.content+' </span></p><p id="huifu3"><a class="huifuTime"><span>'+comTime44+'</span></a><a class="cDianzan"><span class="glyphicon glyphicon-thumbs-up"></span> 点赞</a><a class="huifuPinglun"><span class="glyphicon glyphicon-comment"></span> 回复</a><a class="delcDis"><span class="glyphicon glyphicon-trash"></span>删除</a></p></div>')
                        if ( $('#'+pmodelList.Id+' .loadMoreBtn').size() == 0 ) {
                          $('#'+pmodelList.Id+' div:gt(2)').append('<button class="loadMoreBtn pull-right">加载更多</button>');
                          $('.loadMoreBtn').show()
                        }
                        $('#'+pmodelList.Id+' .loadMoreBtn').click(function() {
                          var str1 = JSON.stringify(pmodelList);
                          sessionStorage.removeItem("P_comment")
                          sessionStorage.setItem("P_comment",str1)
                          window.open("../html/comment.html");
                        })
                        $('#'+pmodelList.Id+'').children('#'+cModel.Id+'').css('paddLeft', '50px');
                      // **************************************赞子评论**************************************
                            var comId2;
                            if ( cModel.isZan === false ) {
                                  $('.cDianzan').click(function() {
                                    if ( dataC ==null ) {
                                          layer.msg('请先登陆', {
                                                              time: 1000,
                                                            });
                                        }else{
                                     comId2  = $(this).parent('#huifu3').parent('div').attr('id');
                                    $.post(''+EQD_space+'/Articles/Add_ArticleComment_Zan.ashx', {
                                      "userGuid":dataC.Guid,
                                      "articleCommentId":comId2
                                    }, function(data) {
                                      $('#'+comId2+' .cDianzan').children('span').css({
                                        color: '#f00'
                                      });
                                    });
                                  }
                                  });
                                }else{
                                  $('.cDianzan').children('span').css('color', '#f00');
                                }
                        // **************************************回复子评论**************************************
                        $('#'+cModel.Id+' .huifuPinglun').click(function() {
                             if ( dataC ==null ) {
                                          layer.msg('请先登陆', {
                                                              time: 1000,
                                                            });
                                        }else{
                                               $(this).parent('p').children('div').remove();
                                               $('.sendComment').remove();
                                               $('.sendfirstComment').remove();
                                               $(this).parent('p').append('<div class="sendComment"><textarea placeholder="写下你的评论..." class="form-control" id="WriterCommentChild"></textarea><div class="lanuchBtnList2 clearfix"><button class="sendBtn pull-right">发送</button><button class="canBtn pull-right">取消</button></div></div>')
                                                $('.sendBtn').click(function() {
                                                      if ( $('#WriterCommentChild').val().length == 0 ) {
                                                            layer.msg('评论内容不能为空呀', {
                                                                        time: 1000,
                                                                      });
                                                      }else{
                                                        $.post(''+EQD_space+'/Articles/Add_ArtcielComment.ashx', {
                                                          "userGuid":dataC.Guid,
                                                          "articleId":thisHref,
                                                          "parentid":cModel.parentId,
                                                          "content":$('#WriterCommentChild').val(),
                                                          "parentUserGuid":cModel.userGuid,
                                                          "firstCommentId":cModel.firstCommentId
                                                          }, function(data) {
                                                          $('.sendComment').hide();
                                                          $('#WriterCommentChild').text("");
                                                          $('#'+cModel.firstCommentId+' div:gt(0)').remove();
                                                           singleComment( cModel.firstCommentId )
                                                           $('#'+pmodelList.Id+' .loadMoreBtn').hide()
                                                        });
                                                    }
                                                });
                                                $('.canBtn').click(function() {
                                                      $('.sendComment').hide();
                                                      $('#WriterCommentChild').text("")
                                                });
                            }
                        });
                        // **************************************删除子评论**************************************
                        if ( cModel.userGuid == dataC.Guid ) {
                            $('#'+cModel.Id+' .delcDis').show()
                          }else{
                              $('#'+cModel.Id+' .delcDis').hide()
                          }
                      $('#'+cModel.Id+' .delcDis').click(function() {
                            if ( dataC ==null ) {
                                              layer.msg('请先登陆', {
                                                                  time: 1000,
                                                                });
                                            }else{
                              layer.open({
                                              type: 1,
                                              area: '450px',
                                              title: ['删除评论', 'font-size:18px;text-align: center;'],
                                              content: $(".delDisTable2"),
                                              btn:'确定',
                                              shade: false
                                            });
                              $('.layui-layer-btn0').click(function() {
                                      $.post(''+EQD_space+'/Articles/Delete_ArticleComment.ashx', {
                                        "userGuid":dataC.Guid,
                                        "articleCommentId":cModel.Id,
                                        "articleId":thisHref,
                                        "type":2
                                      }, function(data) {
                                        var dataDis2 = JSON.parse(data)
                                        if ( dataDis2.status == 200 ) {
                                          $('#'+cModel.Id+'').css('display', 'none');
                                        }else{
                                            layer.msg(dataDis2.msg, {
                                                      time: 1000,
                                                    });
                                        }
                                      });
                                });
                          }
                      });
                  // **************************************hover子评论**********************************************
                  $('#'+cModel.Id+' .cContent').hover(function() {
                      $(this).attr('title', cModel.firstComment);
                       }, function() {

                  });
            }
            // 查看、刷新单条一级评论
            function singleComment(commentId){
                  $.post(''+EQD_space+'/Articles/Get_ArticleComments.ashx', {
                        "userGuid":dataC.Guid,
                        "articleCommentId":commentId
                        }, function(data) {
                        var dataChild = JSON.parse(data);
                        for (var i = 0; i < dataChild.items.rows.length; i++) {
                          for (var n = 0; n < dataChild.items.rows[i].list.length; n++) {
                                  loadCommentChild(dataChild.items.rows[i],dataChild.items.rows[i].list[n])
                          }
                        }
                      });
            }
     function diaplayTime(data) {
        var str = data;
        var result;
        //将字符串转换成时间格式
        var timePublish = new Date(str);
        var timeNow = new Date();
        var minute = 1000 * 60;
        var hour = minute * 60;
        var day = hour * 24;
        var month = day * 30;
        var diffValue = timeNow - timePublish;
        var diffMonth = diffValue / month;
        var diffWeek = diffValue / (7 * day);
        var diffDay = diffValue / day;
        var diffHour = diffValue / hour;
        var diffMinute = diffValue / minute;

        if (diffValue < 0) {
        }
        else if (diffMonth > 3) {
            result = timePublish.getFullYear() + "-";
            result += timePublish.getMonth() + "-";
            result += timePublish.getDate();
        }
        else if (diffWeek > 1) {
            result = timePublish.getMonth() + "月";
            result += timePublish.getDate() + "日 ";
            result += timePublish.getHours() + ":";
            if (timePublish.getMinutes() > 9) {
                result += timePublish.getMinutes();
            } else {
                result += "0" + timePublish.getMinutes();
            }
        }
        else if (diffDay > 1) {
            result = parseInt(diffDay) + "天前";
        }
        else if (diffHour > 1) {
            result = parseInt(diffHour) + "小时前";
        }
        else if (diffMinute > 1) {
            result = parseInt(diffMinute) + "分钟前";
        }
        else {
            result = "刚刚发表";
        }
        return result;
    }
})
