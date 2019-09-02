$(document).ready(function(){
      var href = location.href;
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
      var dataInfo = JSON.parse(dataC);
        var arr_demand = [];
        var demandPage;
        $('#comCommand').click(function() {
          arr_demand = []
                 $(this).addClass('active3').siblings('li').removeClass('active3');
                 $('.comCommandDiv').show().siblings('div').hide();
                    loadDemand(0)
                    setTimeout(function(){
                         var oDivdemand = document.getElementById('comCommandDiv');
                        if ( oDivdemand.offsetHeight < window.innerHeight ) {
                          $('.Link').addClass('fixed')
                        }else{
                          $('.Link').removeClass('fixed')
                        }
                    },300)
             });
    function loadDemand(page){
        $.post(''+EQD_space+'/ComSpace/ComSpaceOther/Get_ComSpaceDemand.ashx', {
            "companyId" : dataInfo.companyId,
            "page" : page
            }, function(data) {
              var dataDemand  = JSON.parse(data);
              demandPage = dataDemand.page;
              for (var i = 0; i < dataDemand.items.length; i++) {

                      arr_demand.push(dataDemand.items[i])

              }
               loaddemandTable(arr_demand)
               if ( demandPage <=1 ) {
                       $('.demandPrve').hide()
                       if ( dataDemand.items.length >=10 ) {
                         $('.demandNext').show()
                       }else{
                         $('.demandPrve').hide()
                         $('.demandNext').hide()
                      }
                    }else{
                       if ( dataDemand.items.length >=10 ) {
                          $('.demandNext').show()
                          // $('.demandPrve').show()
                      }else{
                      $('.demandNext').hide()
                      // $('.demandPrve').show()
                      }
                    }
          });
    }
    $('.demandNext').click(function() {
            loadDemand(demandPage)
        });
        // $('.demandPrve').click(function() {
        //    loadDemand(Number(demandPage)-2)
        //  });
    function loaddemandTable(data){
      $('#comDemandList').bootstrapTable({
                                    url: data,
                                    columns: [
                                    {
                                        field: 'more',
                                        align: 'left',
                                        valign: 'middle',
                                        formatter:optiondemandMoreFormatter,
                                    }
                                    ]
                                });
                                $("#comDemandList").bootstrapTable('load', data);
                                function optiondemandMoreFormatter(e,value, row, index){
                                     return [
                                        '<p class="demandTitle">'+value.ProductName+'</p>',
                                        '<p class="demandType"><span>需求类别</span><span>'+value.ProductType+'</span></p>',
                                        '<p><span>国际代码</span><span>'+value.GuoBiaoCode+'</span></p>',
                                        '<p><span>种类</span><span>'+value.ProductType+'</span></p>',
                                        '<p><span>需求描述</span><span>'+value.ProductDesc+'</span></p>'
                                      ].join('');
                                };
                                // function optiondemandFormatter(e,value, row, index){
                                //   var yourtime=value.EndTime;
                                //   var addSpan;
                                //     yourtime = yourtime.replace("-","/");//替换字符，变成标准格式
                                //     var d2=new Date();//取今天的日期
                                //     var d1 = new Date(Date.parse(yourtime));
                                //     if(d1<d2){
                                //       addSpan = '<p><span class="adjustShow">已结束</span></p>'
                                //     }else{
                                //      addSpan =''
                                //     }
                                //      return [
                                //          '<div class="demandsecond" id="'+value.Id+'"><p><span>'+value.DemandNum+'</span>件</p><p><span>'+value.DemandPrice+'</span>元/件</p><p><span>'+value.createTime.split(" ")[0]+'</span></p>'+addSpan+'</div>',
                                //       ].join('');
                                // };
    }
    $("#comDemandList").on('click-row.bs.table',function( e,row, $element){
                    window.open("../html/demandDetails.html?id="+row.Id+"")
                  })
})
