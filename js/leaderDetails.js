$(document).ready(function(){
      var href = location.href;
      if(href.indexOf("=") < 0 ){
              location.href ="../html/qiyeInfo.html";
            }else{
                  var leaderId = href.split("=")[1];
            }
            $.post(''+EQD_space+'/ComSpace/ComSpaceActivities/Get_ComSpaceActivitiesInfo.ashx', {
              "activityId" : leaderId
            }, function(data) {
                var dataContent = JSON.parse(data)
                $('.title .p1').text( dataContent.items.title )
                $('.title .p2').text( dataContent.items.createTime.split(" ")[0] )
                $('.content').html( dataContent.items.content )
            });
  })
