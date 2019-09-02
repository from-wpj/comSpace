var href = location.href;
var dataC = localStorage.getItem("GHY_login");
var dataInfo = JSON.parse(dataC);
var demandPage;
lookDemandFirst(0)
$('.comPurchase').click(function() {
    $('.comPurchaseDiv').show().siblings('div').hide();
    $(this).addClass('active2').siblings('p').removeClass('active2');
    
    setTimeout(function() {
        var oDiv7 = document.getElementById('comPurchaseDiv');
        if (oDiv7.offsetHeight < window.innerHeight) {
            $('.Link').addClass('fixed')
        } else {
            $('.Link').removeClass('fixed')
        }
    }, 300)
});
$.post('' + EQD_space + '/Option_AreasAnd.ashx', {
    "type": 49
}, function(data) {
    var productJson = data
    $('#ProductTexing3').typeahead({
        source: productJson,
        items: 10,
    });
});

function lookDemandFirst(page) {
    $.post('' + EQD_space + '/ComSpace/ComSpaceOther/Get_ComSpaceDemand.ashx', {
        "companyId": dataInfo.companyId,
        "page": page
    }, function(data) {
        var dataDemand = JSON.parse(data);
        if(dataDemand.items.length>0){
        	loaddemandTable(dataDemand.items);
            $("#purchaseList").bootstrapTable('load', dataDemand.items);
        }else{}
        demandPage = dataDemand.page;  
        if (dataDemand.items.length >= 10) {
            $('.demandLoadNext').show()
        } else {
            $('.demandLoadNext').hide()
        }
    });
};
function lookDemandNext(page) {
    $.post('' + EQD_space + '/ComSpace/ComSpaceOther/Get_ComSpaceDemand.ashx', {
        "companyId": dataInfo.companyId,
        "page": page
    }, function(data) {
        var dataDemand = JSON.parse(data);
        if(dataDemand.items.length>0){
        	layer.msg("加载完成",{
        		time:1200
        	});
        	loaddemandTable(dataDemand.items);
            $("#purchaseList").bootstrapTable('append', dataDemand.items);
        }else{
            layer.msg("已无更多",{
            	time:1200
            })
        }
        demandPage = dataDemand.page;  
        if (dataDemand.items.length >= 10) {
            $('.demandLoadNext').show()
        } else {
            $('.demandLoadNext').hide()
        }
    });
};
$('.demandLoadNext').click(function() {
    lookDemandNext(demandPage)
});

function loaddemandTable(data) {
    $('#purchaseList').bootstrapTable({
        data: data,
        columns: [{
            field: 'ProductName',
            title: '名称',
            align: 'center',
            valign: 'middle',
            formatter: pdtName,
            events: viewThis
        }, {
            field: 'GuoBiaoCode',
            title: '国际代码',
            align: 'center',
            valign: 'middle'
        }, {
            field: 'ProductType',
            title: '种类',
            align: 'center',
            valign: 'middle'
        }, {
            field: 'indexList',
            title: '指标项',
            align: 'center',
            valign: 'middle',
            formatter: optionZhibiaoFormatter,
            events: optionZhibiaoEvents
        }, {
            field: 'option',
            title: '操作',
            align: 'center',
            valign: 'middle',
            formatter: optiondemandFormatter22,
            events: optiondemandEvents22
        }]
    });

    function pdtName(e, value, index, row) {
        return '<span class="moreDemand">' + value.ProductName + '</span>'
    }

    function optiondemandFormatter22(e, value, row, index) {
        return ['<a class="deleteDemand"  title="删除">', '<span id="deleteDemand">删除</span>', '</a>  ', '<a class="changeDemand"  title="修改">', '<span id="changeDemand">修改</span>', '</a>  ', ].join('');
    };

    function optionZhibiaoFormatter(e, value, row, index) {
        return ['<a class="lookZhibiao"  title="查看">', '<span id="lookZhibiao">查看</span>', '</a>  ', ].join('');
    };
}
window.viewThis = {
    'click .moreDemand': function(e, value, row, index) {
        window.open("demandDetails.html?id=" + row.Id + "")
    }
}
window.optiondemandEvents22 = {
    'click .deleteDemand': function(e, value, row, index) {
        layer.open({
            type: 1,
            area: ['300px', '180px'],
            title: ['删除需求', 'font-size:18px;text-align: center;'],
            content: $(".deleteDemandDiv"),
            btn: '确定',
            yes: function(index, layero) {
                $.post('' + EQD_space + '/ComSpace/ComSpaceProduct/ProductSupply/Delete_productSupply.ashx', {
                    "buyerId": row.Id,
                    "companyId": dataInfo.companyId,
                    "userGuid": dataInfo.Guid,
                }, function(data) {
                    var dataDel = JSON.parse(data);
                    if (dataDel.status == 200) {
                        layer.msg('删除成功', {
                            time: 1000,
                        })
                        lookDemandFirst(0)
                    } else {
                        layer.msg(dataDel.msg, {
                            time: 1000,
                        })
                    }
                });
                layer.close(index)
            }
        })
    },
    'click .statusDemand': function(e, value, row, index) {
        var showCode;
        if ($(this).children('span').text() == "关闭") {
            showCode = false;
        } else {
            showCode = true;
        }
        $.post('' + EQD_space + '/ComSpace/ComSpaceDemand/Set_ComSpaceDemandShow.ashx', {
            "demandId": row.Id,
            "companyId": dataInfo.companyId,
            "userGuid": dataInfo.Guid,
            "showStatus": showCode
        }, function(data) {
            var daraStatus = JSON.parse(data)
            if (daraStatus.status == 200) {
                lookDemandFirst(Number(demandPage) - 1)
                layer.msg('修改成功', {
                    time: 1000,
                });
            }
        });
    },
    'click .changeDemand': function(e, value, row, index) {
        $.post('' + EQD_space + '/ComSpace/ComSpaceOther/Get_ComSpaceDemandById.ashx', {
            "DemandID": row.Id
        }, function(data) {
            var demandDetails = JSON.parse(data)
            $('#hangyeDemand1C').val(demandDetails.items.ProductType)
            $('#DemandName2').val(demandDetails.items.ProductName)
            $('#DemandDescribe2').val(demandDetails.items.ProductDesc)
            $('#DemandCode').val(demandDetails.items.GuoBiaoCode)
            $('#DemandCount2').val(demandDetails.items.DemandNum)
            $('#DemandPerson2').val(demandDetails.items.Contacts)
            $('#DemandTel2').val(demandDetails.items.ContactWay)
            $('#DemandTime2').val(demandDetails.items.EndTime.split(" ")[0])
            $('#DemandPrice2').val(demandDetails.items.DemandPrice)
            $('.oldAddressDemand').text(demandDetails.items.DemandAddress)
        });
        $('.desc').text("")
        layer.open({
            type: 1,
            area: ['1100px', '700px'],
            title: ['修改需求', 'font-size:18px;text-align: center;'],
            content: $(".changeDemandDiv"),
            btn: '确定',
            yes: function(index, layero) {
                var changedAddress;
                if ($('#countyDemand2').val() == "=请选择=") {
                    changedAddress = $('.oldAddressDemand').text()
                } else {
                    changedAddress = addressChanpin2
                }
                var newType = $('#hangyeDemand1C').val()
                $.post('' + EQD_space + '/ComSpace/ComSpaceProduct/ProductSupply/Update_ProductSupply.ashx', {
                    "buyerId": row.Id,
                    "companyId": dataInfo.companyId,
                    "userGuid": dataInfo.Guid,
                    "para": "productType='" + newType + "'," + "productName='" + $('#DemandName2').val() + "'," + "productDesc='" + $('#DemandDescribe2').val() + "'," + "GuoBiaoCode='" + $('#DemandCode').val() + "'"
                }, function(data) {
                    var dataChangeDemand = JSON.parse(data);
                    if (dataChangeDemand.status == 200) {
                        lookDemandFirst(Number(demandPage) - 1)
                        layer.closeAll()
                        layer.msg('修改成功', {
                            time: 1000,
                        });
                    } else {
                        layer.msg(dataChangeDemand.msg, {
                            time: 1000,
                        });
                    }
                });
            }
        })
    },
}
window.optionZhibiaoEvents = {
    'click .lookZhibiao': function(e, value, row, index) {
        loadProductListTable4(row.indexList)
        layer.open({
            type: 1,
            area: ['800px', '520px'],
            title: ['查看指标项', 'font-size:18px;text-align: center;'],
            content: $(".showzhibiaoDiv"),
        })
    }
}

function loadProductListTable4(data) {
    $('#addproductList4').bootstrapTable({
        data: data,
        columns: [{
            field: 'IndexTypeKey',
            title: '名称',
            align: 'center',
            valign: 'middle',
        }, {
            field: 'IndexTypeValue',
            title: '指标值',
            align: 'center',
            valign: 'middle'
        }, {
            field: 'IndexImage',
            title: '图片',
            align: 'center',
            valign: 'middle',
            formatter: product3Formatter
        }]
    });
    $("#addproductList4").bootstrapTable('load', data);

    function product3Formatter(e, value, row, index) {
        return ['<img src="' + value.IndexImage + '" alt="">'].join('');
    };
}
// 发布需求
var arr_imgProduct2 = [];
var imageHref2, imgStatus2;
laydate.render({
    elem: '#DemandTime',
});
laydate.render({
    elem: '#DemandTime2',
});
$('.addDemand').click(function() {
    $('#addproductList3').bootstrapTable('destroy')
    $('.oldAddressAreaDemand').hide()
    layer.open({
        type: 1,
        area: ['1100px', '494px'],
        title: ['添加需求', 'font-size:18px;text-align: center;'],
        content: $(".addDemandDiv"),
        btn: '确定',
        yes: function(index, layero) {
            if (arr_imgProduct2.length > 0) {
                var str_imgProduct3 = "";
                for (var i = 0; i < arr_imgProduct2.length; i++) {
                    str_imgProduct3 += JSON.stringify(arr_imgProduct2[i]) + ','
                }
                var strPRo3 = '[' + str_imgProduct3.substring(0, Number(str_imgProduct3.length) - 1) + ']'
                $.post('' + EQD_space + '/ComSpace/ComSpaceOther/Add_ComSpaceDemand.ashx', {
                    "userGuid": dataInfo.Guid,
                    "companyId": dataInfo.companyId,
                    "productName": $('#DemandName').val(),
                    "GuoBiaoCode": $('#DemandNum').val(),
                    "productType": $('#hangyeDemand1').val(),
                    "productDesc": $('#DemandDescribe').val(),
                    "indexJson": strPRo3,
                    "demandNum": $('#DemandCount').val(),
                    "demandPrice": $('#DemandPrice').val(),
                    "demandAddress": addressDemand,
                    "contacts": $('#DemandPerson').val(),
                    "contactWay": $('#DemandTel').val(),
                    "endTime": $('#DemandTime').val(),
                }, function(data) {
                    var dataSendDemand = JSON.parse(data);
                    if (dataSendDemand.status == 200) {
                        lookDemandFirst(0)
                        $('.addDemandDiv input').val("")
                        $('.addDemandDiv #addProductTexingBtn3').val("添加产品特性指标")
                        $('.addDemandDiv textarea').val("")
                        arr_imgProduct2 = []
                        $('.addDemandDiv select').val("=请选择=")
                        layer.closeAll()
                        layer.msg('添加成功', {
                            time: 1000,
                        });
                    } else {
                        layer.msg(dataSendDemand.msg, {
                            time: 1000,
                        });
                    }
                });
            } else {
                layer.msg('请添加指标项', {
                    time: 1000,
                });
            }
        }
    })
});
// 添加指标项
$('#addProductTexingBtn3').click(function() {
    imgStatus2 = "";
    imageHref2 = "";
    var tdic2 = {};
    layer.open({
        type: 1,
        area: ['1100px', '300px'],
        title: ['添加产品指标项', 'font-size:18px;text-align: center;'],
        content: $(".addProductZhibiaoDiv3"),
        btn: '确定',
        yes: function(index, layero) {
            if ($('#ProductTexing3').val() != "" && $('#ProductTexingVal3').val() != "") {
                if (imgStatus2 == 200) {
                    tdic2['indexTypeKey'] = $('#ProductTexing3').val();
                    tdic2['indexTypeValue'] = $('#ProductTexingVal3').val();
                    tdic2['indexImage'] = imageHref2;
                    arr_imgProduct2.push(tdic2)
                    loadProductListTable3(arr_imgProduct2)
                    $('#ProductTexing3').val("")
                    $('#ProductTexingVal3').val("")
                    $('#imgBtn3').val("")
                    imgStatus2 = "";
                    imageHref2 = "";
                    layer.close(index)
                } else {
                    layer.msg('图片上传有问题，请重新上传', {
                        time: 1000,
                    });
                }
            } else {
                layer.msg('请完善信息', {
                    time: 1000,
                });
            }
        }
    })
});
// 上传照片操作
function uploadimg2() {
    var Pformdata = new FormData();
    Pformdata.append('Files', $("#imgBtn3")[0].files[0]);
    Pformdata.append('willcompress', true);
    $.ajax({
        type: 'post',
        url: '' + EQD_space + '/Reimburse/Upload_Files.ashx',
        data: Pformdata,
        cache: false,
        processData: false, // 不处理发送的数据，因为data值是Formdata对象，不需要对数据做处理
        contentType: false, // 不设置Content-type请求头
        success: function(data) {
            var data2 = JSON.parse(data)
            imgStatus = data2.status;
            imgStatus2 = data2.status;
            if (data2.status == 200) {
                layer.msg('上传成功', {
                    time: 1000,
                });
                imageHref = data2.items.substring(0, Number(data2.items.length) - 1)
                imageHref2 = data2.items.substring(0, Number(data2.items.length) - 1)
            } else {
                layer.msg(data2.msg, {
                    time: 1000,
                });
            }
        },
        error: function() {}
    });
}
// 行业
$.post('' + EQD_space + '/Option_AreasAnd.ashx', {
    type: "2"
}, function(data) {
    $("#hangyeDemand1").typeahead({
        source: data,
        items: 10,
        afterSelect: function(item) {
            $('#hangyeDemand1').siblings('.desc').text(item.dec)
        }
    });
    $("#hangyeDemand1C").typeahead({
        source: data,
        items: 10,
        afterSelect: function(item) {
            $('#hangyeDemand1C').siblings('.desc').text(item.dec)
        }
    });
});

function loadProductListTable3(data) {
    $('#addproductList3').bootstrapTable({
        data: data,
        columns: [{
            field: 'indexTypeKey',
            title: '指标项',
            align: 'center',
            valign: 'middle',
        }, {
            field: 'indexTypeValue',
            title: '指标值',
            align: 'center',
            valign: 'middle'
        }, {
            field: 'indexImage',
            title: '图片',
            align: 'center',
            valign: 'middle',
            formatter: product2Formatter
        }, {
            field: 'option',
            title: '操作',
            align: 'center',
            valign: 'middle',
            formatter: optionproduct3Formatter,
            events: optionproduct3Events
        }]
    });
    $("#addproductList3").bootstrapTable('load', data);

    function product2Formatter(e, value, row, index) {
        var imgUrl2 = value.indexImage.replace(/.png/, "min.png")
        var imgU = 'https://www.eqid.top:8009' + imgUrl2;
        return ['<img src="' + imgU + '" alt="">'].join('');
    };

    function optionproduct3Formatter(e, value, row, index) {
        return ['<a class="deleteProduct3"  title="删除信息">', '<span id="deleteProduct3">删除</span>', '</a>  '].join('');
    };
}
window.optionproduct3Events = {
    'click .deleteProduct3': function(e, value, row, index) {
        arr_imgProduct2.remove(index);
        loadProductListTable3(arr_imgProduct2)
    }
}
// 数组删除操作
Array.prototype.remove = function(obj) {
    for (var i = 0; i < this.length; i++) {
        var temp = this[i];
        if (!isNaN(obj)) {
            temp = i;
        }
        if (temp == obj) {
            for (var j = i; j < this.length; j++) {
                this[j] = this[j + 1];
            }
            this.length = this.length - 1;
        }
    }
}
var areadata, areaLength, val2, proviceDemandVal, proviceDemandName, cityDemandVal, cityDemandName,
    countyDemandVal, countyDemandName, addressDemand;
$.post('' + EQD_space + '/Option_AreasAnd.ashx', {
    type: "0"
}, function(data) {
    areadata = data;
    areaLength = areadata.length;
    var len = areaLength;
    for (var i = 0; i < len; i++) {
        var proviceDemandOpt = document.createElement('option');
        proviceDemandOpt.innerText = areadata[i]['name'];
        proviceDemandOpt.value = i;
        proviceDemand.append(proviceDemandOpt);
    }
});
$('#proviceDemand').click(function() {
    var btn = document.getElementsByClassName('hangye1');
    var proviceDemand = $('#proviceDemand');
    var cityDemand = $('#cityDemand');
    var current = {
        proviceDemand: '',
        cityDemand: ''
    };
    $('#proviceDemand').change(function(btn) {
        document.all['cityDemand'].options.length = 1;
        val2 = $('#proviceDemand').select().val();
        if (val2 != current.proviceDemand) {
            current.proviceDemand = val2;
            btn.disabled = true;
        }
        if (val2 != null) {
            cityDemand.length = 1;
            var cityDemandLen = areadata[val2]["sub"].length;
            for (var j = 0; j < cityDemandLen; j++) {
                var cityDemandLenOpt = document.createElement('option');
                cityDemandLenOpt.innerText = areadata[val2]["sub"][j].name;
                cityDemandLenOpt.value = j;
                cityDemand.append(cityDemandLenOpt);
            }
        }
        proviceDemandVal = $(this).val()
        proviceDemandName = areadata[proviceDemandVal].name
    });
    $('#cityDemand').change(function(btn) {
        document.all['countyDemand'].options.length = 1;
        var val3 = $('#cityDemand').select().val();
        if (val3 != current.hangye2) {
            current.cityDemand = val2;
            btn.disabled = true;
        }
        if (val3 != null) {
            countyDemand.length = 1;
            var countyDemandLen = areadata[val2]["sub"][val3]["sub"].length;
            for (var m = 0; m < countyDemandLen; m++) {
                var countyDemandOpt = document.createElement('option');
                countyDemandOpt.innerText = areadata[val2]["sub"][val3]["sub"][m].name;
                countyDemandOpt.value = m;
                countyDemand.append(countyDemandOpt);
            }
        }
        cityDemandVal = $(this).val()
        cityDemandName = areadata[proviceDemandVal]["sub"][cityDemandVal].name
    });
});
$('#countyDemand').change(function(btn) {
    countyDemandVal = $(this).val()
    countyDemandName = areadata[proviceDemandVal]["sub"][cityDemandVal]["sub"][countyDemandVal].name;
    addressDemand = proviceDemandName + cityDemandName + countyDemandName
})
var areadata, areaLength, val2, proviceDemand2Val, proviceDemand2Name, cityDemand2Val, cityDemand2Name,
    countyDemand2Val, countyDemand2Name, addressChanpin2;
$.post('' + EQD_space + '/Option_AreasAnd.ashx', {
    type: "0"
}, function(data) {
    areadata = data;
    areaLength = areadata.length;
    var len = areaLength;
    for (var i = 0; i < len; i++) {
        var proviceDemand2Opt = document.createElement('option');
        proviceDemand2Opt.innerText = areadata[i]['name'];
        proviceDemand2Opt.value = i;
        proviceDemand2.append(proviceDemand2Opt);
    }
});
$('#proviceDemand2').click(function() {
    var btn = document.getElementsByClassName('hangye1');
    var proviceDemand2 = $('#proviceDemand2');
    var cityDemand2 = $('#cityDemand2');
    var current = {
        proviceDemand2: '',
        cityDemand2: ''
    };
    $('#proviceDemand2').change(function(btn) {
        document.all['cityDemand2'].options.length = 1;
        val2 = $('#proviceDemand2').select().val();
        if (val2 != current.proviceDemand2) {
            current.proviceDemand2 = val2;
            btn.disabled = true;
        }
        if (val2 != null) {
            cityDemand2.length = 1;
            var cityDemand2Len = areadata[val2]["sub"].length;
            for (var j = 0; j < cityDemand2Len; j++) {
                var cityDemand2LenOpt = document.createElement('option');
                cityDemand2LenOpt.innerText = areadata[val2]["sub"][j].name;
                cityDemand2LenOpt.value = j;
                cityDemand2.append(cityDemand2LenOpt);
            }
        }
        proviceDemand2Val = $(this).val()
        proviceDemand2Name = areadata[proviceDemand2Val].name
    });
    $('#cityDemand2').change(function(btn) {
        document.all['countyDemand2'].options.length = 1;
        var val3 = $('#cityDemand2').select().val();
        if (val3 != current.hangye2) {
            current.cityDemand2 = val2;
            btn.disabled = true;
        }
        if (val3 != null) {
            countyDemand2.length = 1;
            var countyDemand2Len = areadata[val2]["sub"][val3]["sub"].length;
            for (var m = 0; m < countyDemand2Len; m++) {
                var countyDemand2Opt = document.createElement('option');
                countyDemand2Opt.innerText = areadata[val2]["sub"][val3]["sub"][m].name;
                countyDemand2Opt.value = m;
                countyDemand2.append(countyDemand2Opt);
            }
        }
        cityDemand2Val = $(this).val()
        cityDemand2Name = areadata[proviceDemand2Val]["sub"][cityDemand2Val].name
    });
});
$('#countyDemand2').change(function(btn) {
    countyDemand2Val = $(this).val()
    countyDemand2Name = areadata[proviceDemand2Val]["sub"][cityDemand2Val]["sub"][countyDemand2Val].name;
    addressChanpin2 = proviceDemand2Name + cityDemand2Name + countyDemand2Name
})