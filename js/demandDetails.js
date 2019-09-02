$(document).ready(function(){
      var href = location.href;
      if(href.indexOf("=") < 0 ){
              location.href ="../html/qiyeInfo.html"
            }else{
                  var demandId = href.split("=")[1];
            }
            $.post('https://www.eqid.top:8009/ComSpace/ComSpaceOther/Get_ComSpaceDemandById.ashx', {
                    "DemandID" : demandId
                    }, function(data) {
                      console.log( data )
                      var datademandDetails = JSON.parse(data);
                      if ( datademandDetails.status == 200 ) {
                          $('.p1').text(datademandDetails.items.ProductName)
                          $('.demandType').text(datademandDetails.items.ProductType)
                          $('.company').text(datademandDetails.items.company)
                          $('.GuoBiaoCode').text(datademandDetails.items.GuoBiaoCode)
                          $('.demandPrice').text(datademandDetails.items.DemandPrice)
                          $('.demandCount').text(datademandDetails.items.DemandNum)
                          $('.demandPerson').text(datademandDetails.items.Contacts)
                          $('.demandTel').text(datademandDetails.items.ContactWay)
                          $('.createTime').text(datademandDetails.items.createTime.split(" ")[0])
                          $('.EndTime').text(datademandDetails.items.EndTime.split(" ")[0])
                          $('.content').text(datademandDetails.items.ProductDesc)
                          $('.demandAddress').text(datademandDetails.items.DemandAddress)
                          loadProductListTable3( datademandDetails.items.indexList )
                      }
              });
            function loadProductListTable3(data){
                        $('#addproductList3').bootstrapTable({
                                    url: data,
                                    columns: [
                                    {
                                        field: 'IndexTypeKey',
                                        title: '指标项',
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
                                        formatter: product2Formatter
                                    }
                                    ]
                                });
                                $("#addproductList3").bootstrapTable('load', data);
                                function product2Formatter(e,value, row, index){
                                     return [
                                     '<img src="'+value.IndexImage+'" alt="">'
                                      ].join('');
                                };
                  }
          function loadDemand(page,count){
                  $.post('https://www.eqid.top:8009/ComSpace/ComSpaceOther/Demand_Matching.ashx', {
                    "demandId" : demandId,
                    "page" : page,
                    "count" : count
                  }, function(data) {
                    var dataDemand = JSON.parse(data)
                    loaddemandTable(dataDemand.items)
                  });
           }
            loadDemand(0,2)
            function loaddemandTable(data){
                          $('#DemandMatchingTable').bootstrapTable({
                                                        url: data,
                                                        columns: [
                                                              {
                                                                  field: 'img',
                                                                  title : '图片',
                                                                  align: 'center',
                                                                  valign: 'middle',
                                                                  formatter:optiondemandImgFormatter,
                                                              },
                                                              {
                                                                  field: 'ProductName',
                                                                  title : '名称',
                                                                  align: 'center',
                                                                  valign: 'middle',
                                                              },
                                                              {
                                                                  field: 'ProductPrice',
                                                                  title : '价格(元)',
                                                                  align: 'center',
                                                                  valign: 'middle',
                                                              },
                                                              {
                                                                  field: 'area',
                                                                  title : '发货地',
                                                                  align: 'center',
                                                                  valign: 'middle',
                                                              }
                                                      ]
                                                  });
                                                    $("#DemandMatchingTable").bootstrapTable('load', data);
                                                    function optiondemandImgFormatter(e,value, row, index){
                                                          var imgUrl3 = value.image.replace(/.png/, "min.png")
                                                         return [
                                                              '<img src="'+imgUrl3+'" alt="" />'
                                                          ].join('');
                                                    };
               }
               $("#DemandMatchingTable").on('click-row.bs.table',function( e,row, $element){
                        window.open("../html/product.html?id="+row.Id+"")
                      })
})
