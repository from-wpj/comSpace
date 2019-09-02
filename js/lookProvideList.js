      var href = location.href;
      var dataC = localStorage.getItem("GHY_login");
      if (dataC != null) {
              var dataInfo = JSON.parse(dataC);
        }else{
              // location.href ="../html/qiyeInfo.html";
        }
      if(href.indexOf("=") < 0 ){
            }else{
                  var productProvideId = href.split("=")[1];
            }
            var productJson;
             $.post(''+EQD_space+'/Option_AreasAnd.ashx', {"type": 49}, function(data) {
               productJson = data
               $("#ProductTexing").typeahead({
                      source : productJson,
                      items : 10,
              });
             });
            // 添加供方信息
            var imageHref,imgStatus;
            var arr_imgProduct = [];
            $('#addProvideDeyails').click(function() {
              $('#addproductList2').bootstrapTable('destroy')
              if ( dataInfo == undefined) {
                        layer.msg('请返回登陆', {
                                                        time: '2000'
                                                      });
                   }else{
                        $("#addproductList2").bootstrapTable('destroy');
                        // loadProductListTable2(arr_imgProduct)
                        layer.open({
                                           type: 1,
                                           area: ['1100px','582px'],
                                           title: ['添加供方信息', 'font-size:18px;text-align: center;'],
                                           content: $(".addprovideInfoDiv"),
                                           btn:'确定',
                                           yes: function(index, layero){
                                            var str_imgProduct2 ="";
                                            var strPRo2
                                            if ( arr_imgProduct.length >0 ) {
                                                             for (var i = 0; i < arr_imgProduct.length; i++) {
                                                              str_imgProduct2 +=JSON.stringify(arr_imgProduct[i])+','
                                                             }
                                                             var strPRo2 = '['+str_imgProduct2.substring(0,Number(str_imgProduct2.length)-1)+']'
                                                             $.post(''+EQD_space+'/ComSpace/ComSpaceProduct/ProductSupply/Add_ProductSupply.ashx', {
                                                            "companyId" : dataInfo.companyId,
                                                            "userGuid" : dataInfo.Guid,
                                                            "productId" : productProvideId,
                                                            "productName" : $('.productProvideName').val(),
                                                            "GuoBiaoCode" : $('.productProvideCode').val(),
                                                            "productType" :  $("#hangyeProvide1").val(),
                                                            "productDesc" : $('#productProvideDesc').val(),
                                                            "indexJson" : strPRo2
                                                          }, function(data) {
                                                            console.log( data )
                                                            var dataProductProvide = JSON.parse(data);
                                                            if ( dataProductProvide.status == 200 ) {
                                                              location.reload()
                                                              layer.msg('添加成功', {
                                                                time: 1000,
                                                              });
                                                            }
                                                          });
                                            }else{
                                              layer.msg('请添加指标项', {
                                                                time: 1000,
                                                              });
                                            }
                                           }
                                          })
                   }
            });
            $('#addProductTexingBtn2').click(function() {
                  var  tdic = {};
                  layer.open({
                                   type: 1,
                                   area: ['1100px','320px'],
                                   title: ['添加指标项', 'font-size:18px;text-align: center;'],
                                   content: $(".addProductZhibiaoDiv"),
                                   btn:'确定',
                                   yes: function(index, layero){
                                     if ( $('#ProductTexing').val()!=  "" && $('#ProductTexingVal').val() !="" ) {
                                                    if ( imgStatus == 200 ) {
                                                        tdic['indexTypeKey'] = $('#ProductTexing').val();
                                                        tdic['indexTypeValue'] = $('#ProductTexingVal').val();
                                                        tdic['indexImage'] =  imageHref;
                                                        arr_imgProduct.push( tdic )
                                                        loadProductListTable2(arr_imgProduct)
                                                        $('#ProductTexing').val("")
                                                        $('#ProductTexingVal').val("")
                                                        $('#imgBtn').val("")
                                                        imageHref = ""
                                                        imgStatus =""
                                                        layer.close(index)
                                                    }else{
                                                        layer.msg('图片上传有问题，请重新上传', {
                                                            time: 1000,
                                                          });
                                                    }
                                            }else{
                                                      layer.msg('请完善信息', {
                                                            time: 1000,
                                                          });
                                            }
                                   }
                                  })
            });
        function uploadimg() {
            var  Pformdata= new FormData();
            Pformdata.append('Files',$("#imgBtn")[0].files[0]);
            Pformdata.append('willcompress',true);
            $.ajax({
                           type : 'post',
                           url : ''+EQD_space+'/Reimburse/Upload_Files.ashx',
                           data : Pformdata,
                           cache : false,
                           processData : false, // 不处理发送的数据，因为data值是Formdata对象，不需要对数据做处理
                           contentType : false, // 不设置Content-type请求头
                           success : function(data){
                            var data2 = JSON.parse(data)
                            imgStatus = data2.status;
                            if (data2.status ==200) {
                              layer.msg('上传成功', {
                                time: 1000,
                              });
                             imageHref = data2.items.substring(0,Number(data2.items.length)-1)
                            }else{
                              layer.msg(data2.msg, {
                                time: 1000,
                              });
                            }
                           },
                         error:function()
                         {

                         }
                       });
          }
        function loadProductListTable2(data){
                        $('#addproductList2').bootstrapTable({
                                    url: data,
                                    columns: [
                                    {
                                        field: 'indexTypeKey',
                                        title: '指标项',
                                        align: 'center',
                                        valign: 'middle',
                                    },
                                    {
                                        field: 'indexTypeValue',
                                        title: '指标值',
                                        align: 'center',
                                        valign: 'middle'
                                    },
                                    {
                                        field: 'indexImage',
                                        title: '图片',
                                        align: 'center',
                                        valign: 'middle',
                                        formatter: product2Formatter
                                    },
                                    {
                                      field: 'option',
                                      title: '操作',
                                      align: 'center',
                                      valign: 'middle',
                                      formatter:optionproduct3Formatter,
                                      events:optionproduct3Events
                                    }
                                    ]
                                });
                                $("#addproductList2").bootstrapTable('load', data);
                                function product2Formatter(e,value, row, index){
                                  var imgUrl2 = value.indexImage.replace(/.png/, "min.png")
                                  var imgU = 'https://www.eqid.top:8009'+imgUrl2;
                                     return [
                                     '<img src="'+imgU+'" alt="">'
                                      ].join('');
                                };
                                function optionproduct3Formatter(e,value, row, index){
                                     return [
                                         '<a class="deleteProduct3"  title="删除信息">',
                                         '<span id="deleteProduct3">删除</span>',
                                         '</a>  '
                                      ].join('');
                                };
                  }
                  window.optionproduct3Events = {
                        'click .deleteProduct3': function (e, value, row, index) {
                          arr_imgProduct.remove(index);
                          loadProductListTable2(arr_imgProduct)
                        }
                      }
                      // 数组删除操作
                      Array.prototype.remove=function(obj){
                              for(var i =0;i <this.length;i++){
                              var temp = this[i];
                              if(!isNaN(obj)){
                              temp=i;
                              }
                              if(temp == obj){
                              for(var j = i;j <this.length;j++){
                              this[j]=this[j+1];
                              }
                              this.length = this.length-1;
                              }
                              }
                        }
        function loadTanle(){
            $.post(''+EQD_space+'/ComSpace/ComSpaceProduct/ProductSupply/Get_ProductSupply.ashx', {
              "productId" : productProvideId
            }, function(data) {
                var dataProduct = JSON.parse(data)
                loadcoreValueTable(dataProduct.items)
            });
          }
           loadTanle()
        function loadcoreValueTable(data){
                    $('#productProvideList').bootstrapTable({
                            url: data,
                            columns: [
                            {
                                field: 'ProductName',
                                title: '产品名字',
                                align: 'center',
                                valign: 'middle',
                            },
                            {
                                field: 'GuoBiaoCode',
                                title: '标题',
                                align: 'center',
                                valign: 'middle'
                            },
                            {
                                field: 'ProductType',
                                title: '类型',
                                align: 'center',
                                valign: 'middle'
                            },
                            {
                                field: 'ProductDesc',
                                title: '描述',
                                align: 'center',
                                valign: 'middle'
                            },
                            {
                                field: 'indexList',
                                title: '指标项',
                                align: 'center',
                                valign: 'middle',
                                formatter:indexListFormatter,
                                events:indexListEvents
                            },
                            {
                              field: 'option',
                              title: '操作',
                              align: 'center',
                              valign: 'middle',
                              formatter:optionProductFormatter,
                              events:optionProductEvents
                            }
                            ]
                        });
                      $("#productProvideList").bootstrapTable('load', data);
                      function imgcoreValueFormatter(e,value, row, index){
                        var imgUrl6 = value.ImageUrl.replace(/.png/, "min.png")
                           return [
                           '<img src="'+imgUrl6+'" alt="">'
                            ].join('');
                      };
                      function optionProductFormatter(e,value, row, index){
                           return [
                               '<a class="deletecoreProduct"  title="删除">',
                               '<span id="deletecoreProduct">删除</span>',
                               '</a>  ',
                               '<a class="changeProduct"  title="修改">',
                               '<span id="changeProduct">修改</span>',
                               '</a>  ',
                               '<a class="lookProduct"  title="详情">',
                               '<span id="lookProduct">详情</span>',
                               '</a>  ',
                            ].join('');
                      };
                      function indexListFormatter(e,value, row, index){
                           return [
                               '<a class="lookIndexList"  title="查看">',
                               '<span id="lookIndexList">查看</span>',
                               '</a>  ',
                            ].join('');
                      };
                }
                 var proBuyId,proRow;
                window.indexListEvents = {
                     'click .lookIndexList': function (e, value, row, index) {
                      proRow = row.indexList
                      proBuyId = row.Id;
                       loadProductListTable3( row.indexList )
                      layer.open({
                                           type: 1,
                                           area: ['800px','520px'],
                                           title: ['查看指标项', 'font-size:18px;text-align: center;'],
                                           content: $(".showzhibiaoDiv"),
                                           yes: function(index, layero){

                                           }
                                        })
                     }
                   }
                   // 添加特性指标
                   $('#addProductTexingBtn3').click(function() {
                     imgStatus =""
                     layer.open({
                                           type: 1,
                                           area: ['1100px','280px'],
                                           title: ['添加指标项', 'font-size:18px;text-align: center;'],
                                           content: $(".addProductZhibiaoDiv"),
                                           btn:'确定',
                                           yes: function(index, layero){
                                            if ( $('#ProductTexing').val() !="" && $('#ProductTexingVal').val() != "" ) {
                                              if ( imgStatus == 200 ) {
                                                  $.post(''+EQD_space+'/ComSpace/ComSpaceProduct/ProductSupply/Add_ProductSupplyIndex.ashx', {
                                                        "productId" : productProvideId,
                                                        "companyId" : dataInfo.companyId,
                                                        "userGuid" : dataInfo.Guid,
                                                        "productBuyerId" : proBuyId,
                                                        "indexTypeKey" : $('#ProductTexing').val(),
                                                        "indexTypeValue" : $('#ProductTexingVal').val(),
                                                        "indexImage" : imageHref
                                                      }, function(data) {
                                                        location.reload()
                                                      });
                                                     layer.close(index)
                                              }else{
                                                layer.msg('图片上传有问题，请重新上传', {
                                                            time: 1000,
                                                          });
                                              }
                                            }else{
                                                      layer.msg('请完善信息', {
                                                            time: 1000,
                                                          });
                                            }
                                           }
                                        })
                   });
                   function loadProductListTable3(data){
                        $('#addproductList3').bootstrapTable({
                                    url: data,
                                    columns: [
                                    {
                                        field: 'IndexTypeKey',
                                        title: '名称',
                                        align: 'center',
                                        valign: 'middle',
                                    },
                                    {
                                        field: 'IndexTypeValue',
                                        title: '指标值',
                                        align: 'center',
                                        valign: 'middle'
                                    },
                                    {
                                        field: 'IndexImage',
                                        title: '图片',
                                        align: 'center',
                                        valign: 'middle',
                                        formatter: product3Formatter
                                    },
                                    {
                                      field: 'option',
                                      title: '操作',
                                      align: 'center',
                                      valign: 'middle',
                                      formatter:optionproduct4Formatter,
                                      events:optionbuy4Events
                                    }
                                    ]
                                });
                                $("#addproductList3").bootstrapTable('load', data);
                                function product3Formatter(e,value, row, index){
                                     return [
                                     '<img src="'+ value.IndexImage+'" alt="">'
                                      ].join('');
                                };
                                function optionproduct4Formatter(e,value, row, index){
                                     return [
                                         '<a class="deleteProduct4"  title="删除信息">',
                                         '<span id="deleteProduct4">删除</span>',
                                         '</a>  '
                                      ].join('');
                                };
                  }
                  window.optionbuy4Events = {
                     'click .deleteProduct4': function (e, value, row, index) {
                        layer.open({
                                           type: 1,
                                           area: ['300px','220px'],
                                           title: ['删除买方信息', 'font-size:18px;text-align: center;'],
                                           content: $(".deleteZhibiaoDiv"),
                                           btn:'确定',
                                           yes: function(index, layero){
                                              $.post(''+EQD_space+'/ComSpace/ComSpaceProduct/ProductSupply/Delete_ProductSupplyIndex.ashx', {
                                              "buyerIndexId" : row.Id,
                                              "companyId" : row.CompanyId,
                                              "userGuid" : dataInfo.Guid,
                                            }, function(data) {
                                              var dataDel = JSON.parse(data);
                                              if ( dataDel.status == 200 ) {
                                                layer.msg('删除成功', {
                                                  time: 1000,
                                                });
                                                   location.reload()
                                              }
                                            });
                                              layer.close(index)
                                           }
                                          })
                     }
                   }
      window.optionProductEvents = {
                     'click .deletecoreProduct': function (e, value, row, index) {
                            layer.open({
                                                 type: 1,
                                                 area: ['300px','220px'],
                                                 title: ['删除指标项', 'font-size:18px;text-align: center;'],
                                                 content: $(".deleteProductDiv"),
                                                 btn:'确定',
                                                 yes: function(index, layero){
                                                  $.post(''+EQD_space+'/ComSpace/ComSpaceProduct/ProductSupply/Delete_productSupply.ashx', {
                                                    "buyerId" : row.Id,
                                                    "companyId" : dataInfo.companyId,
                                                    "userGuid" : dataInfo.Guid,
                                                  }, function(data) {
                                                     var dataDel = JSON.parse(data);
                                                     if ( dataDel.status == 200 ) {
                                                        layer.msg('删除成功', {
                                                        time: 1000,
                                                      });
                                                        location.reload()
                                                     }
                                                  });
                                                  layer.closeAll()
                                                 }
                                          })
                     },
                     'click .changeProduct': function (e, value, row, index) {
                          $('.provideName').val( row.ProductName )
                          $('.provideCode').val( row.GuoBiaoCode )
                          $('#provideDesc').val( row.ProductDesc )
                          $('.oldprovideType').val( row.ProductType )
                          $('.desc').text("")
                          layer.open({
                                           type: 1,
                                           area: ['1000px','520px'],
                                           title: ['修改供方信息', 'font-size:18px;text-align: center;'],
                                           content: $(".changeProvideDiv"),
                                           btn:'确定',
                                           yes: function(index, layero){
                                            var proType = $('#hangye1').val()
                                            $.post(''+EQD_space+'/ComSpace/ComSpaceProduct/ProductSupply/Update_ProductSupply.ashx', {
                                              "buyerId" : row.Id,
                                              "companyId" : dataInfo.companyId,
                                              "userGuid" : dataInfo.Guid,
                                              "para": "productName='"+$('.provideName').val()+"',"+"GuoBiaoCode='"+$('.provideCode').val()+"',"+"productType='"+proType+"',"+"productDesc='"+$('#provideDesc').val()+"'"
                                            }, function(data) {
                                             var dataChangd = JSON.parse(data);
                                             if ( dataChangd.status == 200 ) {
                                                loadTanle()
                                             }else{
                                                  layer.msg(dataChangd.msg, {
                                                  time: 1000,
                                                });
                                             }
                                            });
                                            layer.closeAll()
                                           }
                                          })
                     },
                      'click .lookProduct': function (e, value, row, index) {
                        window.open('../html/provide.html?id='+row.Id+'')
                      }
                   }
     // 供货方行业 hangyeProvide3Val hangye3Val
    $.post(''+EQD_space+'/Option_AreasAnd.ashx',{type:"2"} ,function(data) {
        $("#hangye1").typeahead({
                      source : data,
                      items : 10,
                      afterSelect: function (item) {
                                              $('#hangye1').siblings('.desc').text(item.dec)
                                          }
                   });
        $("#hangyeProvide1").typeahead({
                      source : data,
                      items : 10,
                      afterSelect: function (item) {
                                              $('#hangyeProvide1').siblings('.desc').text(item.dec)
                                          }
                   });
     });

