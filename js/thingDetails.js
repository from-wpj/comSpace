$(document).ready(function(){
      var href = location.href;
      if(href.indexOf("=") < 0 ){
              location.href ="../html/qiyeInfo.html"
            }else{
                  var leaderId = href.split("=")[1];
            }
            $.post('https://www.eqid.top:8009/ComSpace/ComSpace_Event/Get_ComSpaceEventInfo.ashx', {
              "eventId" : leaderId
              }, function(data) {
                var datagoodDetails = JSON.parse(data);
                $('.p1').text(datagoodDetails.items.title)
                $('.content').html(datagoodDetails.items.content)
                $('.p2').text(datagoodDetails.items.createTime.split(" ")[0])
              });
})
