$(document).ready(function() {
	var href = location.href;
	var dataC = localStorage.getItem("GHY_login");
	if (dataC != null) {
		var dataInfo = JSON.parse(dataC);
	} else {
		location.href = "../html/qiyeInfo.html";
	}
	if (href.indexOf("=") < 0) {
		location.href = "../html/qiyeInfo.html";
	} else {
		var comId = href.split("=")[1];
	}
	$("#pic1").click(function() {
		$("#upload1").click(); //隐藏了input:file样式后，点击头像就可以本地上传
		$("#upload1").on("change", function() {
			var objUrl1 = getObjectURL(this.files[0]); //获取图片的路径，该路径不是图片在本地的路径
			if (objUrl1) {
				$("#pic1Img").show()
				$(".addImg p").css('display', 'block');
				$("#pic1Img").attr("src", objUrl1); //将图片路径存入src中，显示出图片
				$("#pic1").val("重新选择")
			}
		});
	});
	$.post('' + EQD_space + '/ComSpace/ComSpaceEquipment/Get_ComSpaceEquipmentById.ashx', {
		"equipmentId": comId
	}, function(data) {
		var dataContent = JSON.parse(data)
		$('.title .p1').text(dataContent.items.EquipmentName)
		$('.title .p2').text(dataContent.items.DateOfPurchase)
		$('.content').html(dataContent.items.EquipmentMsg)
		for (var i = 0; i < dataContent.items.images.length; i++) {
			$('.imgList').append('<div class="pull-left"><img src="' + dataContent.items.images[i] +
				'" alt="" /><p><button id="D' + i + '">删除该图片</button></p></div>')
		}
		$('.imgList>div button').click(function() {
			var imgIndex = $(this).attr('id').substring(1)
			layer.open({
				type: 1,
				area: ['300px', '210px'],
				title: ['删除照片', 'font-size:18px;text-align: center;'],
				content: $(".deleteImg"),
				btn: '确定',
				yes: function(index, layero) {
					$.post('' + EQD_space + '/ComSpace/ComSpaceEquipment/Delete_ComSpaceEquipmentImg.ashx', {
						"equipmentId": comId,
						"companyId": dataInfo.companyId,
						"userGuid": dataInfo.Guid,
						"imgIndex": imgIndex
					}, function(data) {
						var dataD = JSON.parse(data)
						if (dataD.status == 200) {
							window.location.reload()
						}
					});
				}
			})
		});
		$('#upImg').click(function() {
			var index = layer.load(1, {
				shade: [0.3, '#000']
			});
			productFileUpload()
		});
	});
	//建立一個可存取到該file的url
	function getObjectURL(file) {
		var url = null;
		if (window.createObjectURL != undefined) { // basic
			url = window.createObjectURL(file);
		} else if (window.URL != undefined) { // mozilla(firefox)
			url = window.URL.createObjectURL(file);
		} else if (window.webkitURL != undefined) { // webkit or chrome
			url = window.webkitURL.createObjectURL(file);
		}
		return url;
	}

	function productFileUpload() {
		var Pformdata = new FormData();
		var dataimg2 = $("#upload1")[0].files[0];
		Pformdata.append('userGuid', dataInfo.Guid);
		Pformdata.append('companyId', dataInfo.companyId);
		Pformdata.append('equipmentId', comId);
		Pformdata.append('img', dataimg2);
		$.ajax({
			type: 'post',
			url: '' + EQD_space + '/ComSpace/ComSpaceEquipment/Add_ComSpaceEquipmentImg.ashx',
			data: Pformdata,
			cache: false,
			processData: false, // 不处理发送的数据，因为data值是Formdata对象，不需要对数据做处理
			contentType: false, // 不设置Content-type请求头
			success: function(data) {
				var data2 = JSON.parse(data)
				if (data2.status == 200) {
					window.location.reload()
				}
			},
			error: function() {

			}
		});

		return false;
	}
})
