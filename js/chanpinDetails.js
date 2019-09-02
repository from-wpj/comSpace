$(document).ready(function(){
      var href = location.href;
      var dataC = localStorage.getItem("GHY_login");
      if (dataC != null) {
              var dataInfo = JSON.parse(dataC);
        }else{
              location.href ="../html/qiyeInfo.html";
        }
      if(href.indexOf("=") < 0 ){
              location.href ="../html/qiyeInfo.html";
            }else{
                  var comId = href.split("=")[1];
            }
            $.post(''+EQD_space+'/ComSpace/ComSpaceProduct/Get_ComSpaceProductById.ashx', {
              "productId" : comId
                }, function(data) {
                  var dataContent = JSON.parse(data)
                  $('.title .p1').text( dataContent.items.ProductName )
                  $('.content').html( dataContent.items.ProductInfo )
                  $('.ProductPrice').text(dataContent.items.ProductPrice )
                  $('.browseCount').text(dataContent.items.browseCount )
                  $('.area').text(dataContent.items.area )
                  $('.Stock').text(dataContent.items.Stock )
                  $('.ProductType').text(dataContent.items.ProductType )
                  for (var i = 0; i < dataContent.items.images.length; i++) {
                      $('.imgList').append('<div class="pull-left"><img src="'+dataContent.items.images[i]+'" alt="" /></div>')
                  }
            });

  })
