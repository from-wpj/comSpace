$(document).ready(function() {
    var href = location.href;
    var type;
    var dataC = localStorage.getItem("GHY_login");
    if (href.indexOf("=") < 0) {} else {
        type = href.split("=")[1];
    }
    if (type == 2 || type == "2#") {
        setTimeout(function() {
            document.getElementById("comMessage").click();
        }, 1000);
    } else if (type == 3 || type == "3#") {
        setTimeout(function() {
            document.getElementById("comVisitor").click();
        }, 1000);
    } else if (type == 4 || type == "4#") {
        setTimeout(function() {
            document.getElementById("goodInfo").click();
        }, 1000);
    } else if (type == 8 || type == "8#") {
        setTimeout(function() {
            document.getElementById("comActivity").click();
        }, 1000);
    }
    // 创建富文本编辑框
    var F = window.wangEditor
    var editor = new F('#editor')
    // **************************************自动上传图片开始*********************************
    var dataImg, imgSrc;
    editor.customConfig.customUploadImg = function(files, insert) {
        var iformdata = new FormData();
        var imgU = files[0];
        iformdata.append('image', imgU);
        $.ajax({
            type: 'post',
            url: '' + EQD_space + '/Articles/CommitImage.ashx',
            data: iformdata,
            cache: false,
            processData: false, // 不处理发送的数据，因为data值是Formdata对象，不需要对数据做处理
            contentType: false, // 不设置Content-type请求头
            success: function(data) {
                dataImg = JSON.parse(data)
                imgSrc = (dataImg.items).substring(25)
                if (dataImg.status == 200) {
                    insert(dataImg.items)
                }
            }
        });
    };
    // **************************************自动上传图片结束*********************************
    editor.create();
    var E = window.wangEditor
    var editor2 = new E('#editor2')
    // editor.customConfig.uploadImgfadeInBase64 = true;
    // **************************************自动上传图片开始*********************************
    var dataImg2, imgSrc2;
    editor2.customConfig.customUploadImg = function(files, insert) {
        var iformdata2 = new FormData();
        var imgU2 = files[0];
        iformdata2.append('image', imgU2);
        $.ajax({
            type: 'post',
            url: '' + EQD_space + '/Articles/CommitImage.ashx',
            data: iformdata2,
            cache: false,
            processData: false, // 不处理发送的数据，因为data值是Formdata对象，不需要对数据做处理
            contentType: false, // 不设置Content-type请求头
            success: function(data) {
                dataImg2 = JSON.parse(data)
                imgSrc2 = (dataImg2.items).substring(25)
                if (dataImg2.status == 200) {
                    insert(dataImg2.items)
                }
            }
        });
    };
    // **************************************自动上传图片结束*********************************
    editor2.create();
    var G = window.wangEditor
    var editor3 = new G('#editor3')
    // **************************************自动上传图片开始*********************************
    var dataImg3, imgSrc3;
    editor3.customConfig.customUploadImg = function(files, insert) {
        var iformdata3 = new FormData();
        var imgU3 = files[0];
        iformdata3.append('image', imgU3);
        $.ajax({
            type: 'post',
            url: '' + EQD_space + '/Articles/CommitImage.ashx',
            data: iformdata3,
            cache: false,
            processData: false, // 不处理发送的数据，因为data值是Formdata对象，不需要对数据做处理
            contentType: false, // 不设置Content-type请求头
            success: function(data) {
                dataImg3 = JSON.parse(data)
                imgSrc3 = (dataImg3.items).substring(25)
                if (dataImg3.status == 200) {
                    insert(dataImg3.items)
                }
            }
        });
    };
    // **************************************自动上传图片结束*********************************
    editor3.create();
    var H = window.wangEditor
    var editor4 = new H('#editor4')
    // **************************************自动上传图片开始*********************************
    var dataImg4, imgSrc4;
    editor4.customConfig.customUploadImg = function(files, insert) {
        var iformdata4 = new FormData();
        var imgU4 = files[0];
        iformdata4.append('image', imgU4);
        $.ajax({
            type: 'post',
            url: '' + EQD_space + '/Articles/CommitImage.ashx',
            data: iformdata4,
            cache: false,
            processData: false, // 不处理发送的数据，因为data值是Formdata对象，不需要对数据做处理
            contentType: false, // 不设置Content-type请求头
            success: function(data) {
                dataImg4 = JSON.parse(data)
                imgSrc4 = (dataImg4.items).substring(25)
                if (dataImg4.status == 200) {
                    insert(dataImg4.items)
                }
            }
        });
    };
    // **************************************自动上传图片结束*********************************
    editor4.create();
    var Y = window.wangEditor
    var editor5 = new Y('#editor5')
    var dataImg5, imgSrc5;
    editor5.customConfig.customUploadImg = function(files, insert) {
        var iformdata5 = new FormData();
        var imgU5 = files[0];
        iformdata5.append('image', imgU5);
        $.ajax({
            type: 'post',
            url: '' + EQD_space + '/Articles/CommitImage.ashx',
            data: iformdata5,
            cache: false,
            processData: false, // 不处理发送的数据，因为data值是Formdata对象，不需要对数据做处理
            contentType: false, // 不设置Content-type请求头
            success: function(data) {
                dataImg5 = JSON.parse(data)
                imgSrc5 = (dataImg5.items).substring(25)
                if (dataImg5.status == 200) {
                    insert(dataImg5.items)
                }
            }
        });
    };
    // **************************************自动上传图片结束*********************************
    editor5.create();
    var Z = window.wangEditor
    var editor6 = new Z('#editor6')
    var dataImg6, imgSrc6;
    editor6.customConfig.customUploadImg = function(files, insert) {
        var iformdata6 = new FormData();
        var imgU6 = files[0];
        iformdata6.append('image', imgU6);
        $.ajax({
            type: 'post',
            url: '' + EQD_space + '/Articles/CommitImage.ashx',
            data: iformdata6,
            cache: false,
            processData: false, // 不处理发送的数据，因为data值是Formdata对象，不需要对数据做处理
            contentType: false, // 不设置Content-type请求头
            success: function(data) {
                dataImg6 = JSON.parse(data)
                imgSrc6 = (dataImg6.items).substring(25)
                if (dataImg6.status == 200) {
                    insert(dataImg6.items)
                }
            }
        });
    };
    editor6.create();
    var M = window.wangEditor
    var editor7 = new M('#editor7')
    var dataImg7, imgSrc7;
    editor7.customConfig.customUploadImg = function(files, insert) {
        var iformdata7 = new FormData();
        var imgU7 = files[0];
        iformdata7.append('image', imgU7);
        $.ajax({
            type: 'post',
            url: '' + EQD_space + '/Articles/CommitImage.ashx',
            data: iformdata7,
            cache: false,
            processData: false, // 不处理发送的数据，因为data值是Formdata对象，不需要对数据做处理
            contentType: false, // 不设置Content-type请求头
            success: function(data) {
                dataImg7 = JSON.parse(data)
                imgSrc7 = (dataImg7.items).substring(25)
                if (dataImg7.status == 200) {
                    insert(dataImg7.items)
                }
            }
        });
    };
    editor7.create();
    if (dataC != null) {
        $('.infoBtn').fadeIn();
        $('.loginBtn').hide();
        var dataInfo = JSON.parse(dataC);
        $('.userImg').attr('src', dataInfo.iphoto);
        $('.topRight .name').text(dataInfo.username)
    } else {
        $('.loginBtn').fadeIn();
        $('.infoBtn').hide();
        location.href = "innerLogin.html?href=" + href + "";
    };
    // 查看公司信息
    setTimeout(function() {
        $.post('' + EQD_space + '/Com_regiInfo.ashx', {
            "comId": dataInfo.companyId
        }, function(data) {
            var dataCominfo = JSON.parse(data)
            $('.imgArea img').attr('src', dataCominfo.items.logo);
            $('.logoArea img').attr('src', dataCominfo.items.logo);
            $('.logoArea .companyName').text(dataCominfo.items.name)
        });
    }, 220);
    setTimeout(function() {
        $.post('' + EQD_space + '/Option_AreasAnd.ashx', {
            "type": 49
        }, function(data) {
            var productJson = data
            $('#ProductTexing').typeahead({
                source: productJson,
                items: 10,
            });
            $("#addedProductName").typeahead({
                source: productJson,
                items: 10,
            });
        });
    }, 270);
    // 日志
    $('.comRizhiDiv').fadeIn();
    loadRizhiFirst(0)
    $('.comRizhi').on("click", function() {
        $('.comRizhiDiv').fadeIn().siblings('div').hide();
        $('.rizhiWrite').fadeIn().siblings('div').hide();
        $(this).addClass('active2').siblings('p').removeClass('active2');
        setTimeout(function() {
            var oDiv1 = document.getElementById('comRizhiDiv');
            if (oDiv1.offsetHeight < window.innerHeight) {
                $('.Link').addClass('fixed')
            } else {
                $('.Link').removeClass('fixed')
            }
        }, 300)
    });
    // 写日志
    $('#writeBtn').click(function() {
        layer.open({
            type: 1,
            area: ['800px', '600px'],
            title: ['写日志', 'font-size:18px;text-align: center;'],
            content: $(".writeDiv"),
            btn: '确定',
            yes: function(index, layero) {
                if ($('.circleTitle').val() == "" || $('.labelInput').val() == "" || editor.txt.text() == "") {
                    layer.msg('请完善内容', {
                        time: 1000,
                    })
                } else {
                    var circleText;
                    var imgHref = "";
                    if (editor.txt.text().length < 60) {
                        circleText = editor.txt.text()
                    } else {
                        circleText = editor.txt.text().substring(0, 60) + "...";
                    }
                    if (imgSrc == undefined) {
                        imgHref = ""
                    } else {
                        imgHref = imgSrc
                    }
                    $.post('' + EQD_space + '/Articles/Add_Article.ashx', {
                        "userGuid": dataInfo.Guid,
                        "title": $('.circleTitle').val(),
                        "content": editor.txt.html(),
                        "homeImage": imgHref,
                        "label": $('.labelInput').val(),
                        "source": 1,
                        "companyId": dataInfo.companyId,
                        "textContent": circleText,
                        "menuId": 0
                    }, function(data) {
                        var dataCircle = JSON.parse(data);
                        if (dataCircle.status == 200) {
                            layer.msg('发表成功', {
                                time: 1000,
                            })
                            loadRizhiFirst(0)
                            editor.txt.clear();
                            $('.circleTitle').val("")
                            $('.labelInput').val("")
                            imgSrc = ""
                            $('.chooseLabelDiv label input').attr('checked', false)
                        } else {
                            layer.msg(dataCircle.msg, {
                                time: 1000,
                            })
                        }
                    });
                    layer.closeAll()
                }
            }
        });
    });
    $('.labelInput').click(function() {
        var labelAll = "";
        var labelVal;
        layer.open({
            type: 1,
            area: ['600px', '350px'],
            title: ['选类别', 'font-size:18px;text-align: center;'],
            content: $(".chooseLabelDiv"),
            btn: '确定',
            yes: function(index, layero) {
                layer.close(index);
                for (var i = 0; i < $('.chooseLabelDiv label input[name="test"]:checked').length; i++) {
                    labelAll += $('.chooseLabelDiv label input[name="test"]:checked').eq(i).val() + ","
                }
                labelVal = labelAll.substring(0, Number(labelAll.length) - 1)
                $('.labelInput').val(labelVal)
            }
        })
        setTimeout(function() {
            $.post('' + EQD_space + '/Option_AreasAnd.ashx', {
                "type": 44
            }, function(data) {
                if ($('.chooseLabelDiv label').length == 0) {
                    for (var i = 0; i < 13; i++) {
                        $('.chooseLabelDiv').append('<label for="label' + i + '"><input type="checkbox" id="label' + i + '" name="test" value="' + data[i].name + '">' + data[i].name + '</label>')
                    }
                }
                $('.chooseLabelDiv label').click(function() {
                    if ($('.chooseLabelDiv label input[name="test"]:checked').length > 3) {
                        layer.msg('最多选择3个', {
                            time: 1000,
                        })
                        $(this).children('input').attr('checked', false);
                    } else {}
                });
                $('.chooseLabelDiv label input').click(function() {
                    if ($('.chooseLabelDiv label input[name="test"]:checked').length > 3) {
                        layer.msg('最多选择3个', {
                            time: 1000,
                        })
                        $(this).attr('checked', false);
                    } else {}
                });
            })
        }, 300)
    });
    var dataRizhi, dataPage = 0;

    function loadRizhiFirst(page) {
        $.post('' + EQD_space + '/Admin/ComSpaceDaily/Get_ComSpaceDaily.ashx', {
            "companyId": dataInfo.companyId,
            "page": page,
        }, function(data) {
            dataRizhi = JSON.parse(data);
            loadRizhiTable(dataRizhi.items.rows);
            $("#rizhiList").bootstrapTable('load', dataRizhi.items.rows);
            dataPage = dataRizhi.items.page;
            if (dataRizhi.items.rows.length >= 10) {
                $('.rizhiNext').fadeIn()
            } else {
                $('.rizhiNext').hide()
            }
        });
    };

    function loadRizhiNext(page) {
        $.post('' + EQD_space + '/Admin/ComSpaceDaily/Get_ComSpaceDaily.ashx', {
            "companyId": dataInfo.companyId,
            "page": page,
        }, function(data) {
            dataRizhi = JSON.parse(data);
            if (dataRizhi.items.rows.length > 0) {
                layer.msg("加载完成", {
                    time: 1200
                });
                loadRizhiTable(dataRizhi.items.rows);
                $("#rizhiList").bootstrapTable('append', dataRizhi.items.rows);
            } else {
                layer.msg("已无更多", {
                    time: 1200
                });
            }
            dataPage = dataRizhi.items.page;
            if (dataRizhi.items.rows.length >= 10) {
                $('.rizhiNext').fadeIn()
            } else {
                $('.rizhiNext').hide()
            }
        });
    }
    $('.rizhiNext').click(function() {
        loadRizhiNext(dataPage);
    });

    function loadRizhiTable(data) {
        $('#rizhiList').bootstrapTable({
            data: data,
            columns: [{
                field: 'image',
                title: '封面图',
                align: 'center',
                valign: 'middle',
                formatter: img2Formatter,
            }, {
                field: 'title',
                title: '标题',
                align: 'center',
                valign: 'middle',
                formatter: timeCreate,
                events: viewRz
            }, {
                field: 'lable',
                title: '分类',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'option',
                title: '操作',
                align: 'center',
                valign: 'middle',
                formatter: optionrizhiFormatter,
                events: optionrizhiEvents
            }]
        });

        function timeCreate(e, value, row, index) {
            var createTime = value.createTime.split("T")[0];
            return '<p class="rzTitle"><span>' + value.title + '</span><span class="rzTime">发布日期：' + createTime + '</span></p>'
        };

        function img2Formatter(e, value, row, index) {
            var imgUrl1 = value.image.replace(/.png/, "min.png")
            return ['<img src="' + imgUrl1 + '" alt="">'].join('');
        };

        function optionrizhiFormatter(e, value, row, index) {
            return ['<a class="deleteRizhi"  title="删除">', '<span id="deleteRizhi">删除</span>', '</a>  ', '<a class="editorRizhi"  title="编辑">', '<span id="editorRizhi">编辑</span>', '</a>  ', '<a class="moreRizhi"  title="详情">', ].join('');
        };
    };
    window.viewRz = {
        'click .rzTitle': function(e, value, row, index) {
            var userCompanyId = row.companyId;
            window.open("http://www.eqidd.com/yqy/articleDetail.html?articleId=" + row.Id + "&userGuid=" + row.userGuid); //兼容
        },
    }
    window.optionrizhiEvents = {
        'click .deleteRizhi': function(e, value, row, index) {
            layer.open({
                type: 1,
                area: ['300px', '180px'],
                title: ['删除日志', 'font-size:18px;text-align: center;'],
                content: $(".deleteDiv"),
                btn: '确定',
                yes: function(index, layero) {
                    $.post('' + EQD_space + '/Admin/ComSpaceDaily/Delete_ComSpaceDaily.ashx', {
                        "dailyId": row.Id,
                        "companyId": dataInfo.companyId,
                        "userGuid": dataInfo.Guid,
                    }, function(data) {
                        var dataDel = JSON.parse(data);
                        if (dataDel.status == 200) {
                            layer.msg('删除成功', {
                                time: 1000,
                            })
                            loadRizhiFirst(0)
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
        'click .editorRizhi': function(e, value, row, index) {
            $.post('' + EQD_space + '/Articles/Get_Article_ById.ashx', {
                "articleId": row.Id,
                "userGuid": dataInfo.Guid
            }, function(data) {
                var dataRizhi2 = JSON.parse(data);
                $('.circleTitle').val(dataRizhi2.items.title)
                $('.labelInput').val(row.lable)
                editor.txt.html(dataRizhi2.items.content)
            })
            layer.open({
                type: 1,
                area: ['800px', '600px'],
                title: ['编辑日志', 'font-size:18px;text-align: center;'],
                content: $(".writeDiv"),
                btn: '确定',
                yes: function(index, layero) {
                    var circleText2
                    if (editor.txt.text().length < 60) {
                        circleText2 = editor.txt.text()
                    } else {
                        circleText2 = editor.txt.text().substring(0, 60) + "...";
                    }
                    $.post('' + EQD_space + '/Articles/Update_Article.ashx', {
                        "userGuid": dataInfo.Guid,
                        "articleId": row.Id,
                        "articleTitle": $('.circleTitle').val(),
                        "articleContent": editor.txt.html(),
                        "textContent": circleText2
                    }, function(data) {
                        var dataRefresh = JSON.parse(data);
                        layer.msg(dataRefresh.msg, {
                            time: 1000,
                        });
                        if (dataRefresh.status == 200) {
                            loadRizhiFirst((dataPage) - 1)
                        }
                    });
                    layer.close(index)
                }
            })
        }
    }
    // 产品
    loadChanpinFirst(0)
    $('.goodInfo').click(function() {
        type = 4;
        $('.goodInfoDiv').fadeIn().siblings('div').hide();
        $(this).addClass('active2').siblings('p').removeClass('active2');
        setTimeout(function() {
            var oDiv2 = document.getElementById('goodInfoDiv');
            if (oDiv2.offsetHeight < window.innerHeight) {
                $('.Link').addClass('fixed')
            } else {
                $('.Link').removeClass('fixed')
            }
        }, 300)
    });
    setTimeout(function() {
        $.post('' + EQD_space + '/Option_AreasAnd.ashx', {
            type: "2"
        }, function(data) {
            $("#hangye1").typeahead({
                source: data,
                items: 10,
                afterSelect: function(item) {
                    $('#hangye1').siblings('.desc').text(item.dec)
                }
            });
        });
    }, 410);
    var areadata, areaLength, val2, provice1Val, provice1Name, city1Val, city1Name, county1Val, county1Name,
        addressChanpin;
    setTimeout(function() {
        $.post('' + EQD_space + '/Option_AreasAnd.ashx', {
            type: "0"
        }, function(data) {
            areadata = data;
            areaLength = areadata.length;
            var len = areaLength;
            for (var i = 0; i < len; i++) {
                var provice1Opt = document.createElement('option');
                provice1Opt.innerText = areadata[i]['name'];
                provice1Opt.value = i;
                provice1.append(provice1Opt);
            }
        });
    },480);
    $('#provice1').click(function() {
        var btn = document.getElementsByClassName('hangye1');
        var provice1 = $('#provice1');
        var city1 = $('#city1');
        var current = {
            provice1: '',
            city1: ''
        };
        $('#provice1').change(function(btn) {
            document.all['city1'].options.length = 1;
            val2 = $('#provice1').select().val();
            if (val2 != current.provice1) {
                current.provice1 = val2;
                btn.disabled = true;
            }
            if (val2 != null) {
                city1.length = 1;
                var city1Len = areadata[val2]["sub"].length;
                for (var j = 0; j < city1Len; j++) {
                    var city1LenOpt = document.createElement('option');
                    city1LenOpt.innerText = areadata[val2]["sub"][j].name;
                    city1LenOpt.value = j;
                    city1.append(city1LenOpt);
                }
            }
            provice1Val = $(this).val()
            provice1Name = areadata[provice1Val].name
        });
        $('#city1').change(function(btn) {
            document.all['county1'].options.length = 1;
            var val3 = $('#city1').select().val();
            if (val3 != current.hangye2) {
                current.city1 = val2;
                btn.disabled = true;
            }
            if (val3 != null) {
                county1.length = 1;
                var county1Len = areadata[val2]["sub"][val3]["sub"].length;
                for (var m = 0; m < county1Len; m++) {
                    var county1Opt = document.createElement('option');
                    county1Opt.innerText = areadata[val2]["sub"][val3]["sub"][m].name;
                    county1Opt.value = m;
                    county1.append(county1Opt);
                }
            }
            city1Val = $(this).val()
            city1Name = areadata[provice1Val]["sub"][city1Val].name
        });
    });
    $('#county1').change(function(btn) {
        county1Val = $(this).val()
        county1Name = areadata[provice1Val]["sub"][city1Val]["sub"][county1Val].name;
        addressChanpin = provice1Name + city1Name + county1Name
    })
    // 添加产品信息
    var arr_imgProduct = [];
    var imageHref, imgStatus;

    function loadProductListTable(data) {
        $('#addproductList').bootstrapTable({
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
                formatter: productFormatter
            }, {
                field: 'option',
                title: '操作',
                align: 'center',
                valign: 'middle',
                formatter: optionproduct2Formatter,
                events: optionproduct2Events
            }]
        });

        function productFormatter(e, value, row, index) {
            var imgUrl2 = value.indexImage.replace(/.png/, "min.png")
            var imgU = 'https://www.eqid.top:8009' + imgUrl2;
            return ['<img src="' + imgU + '" alt="">'].join('');
        };

        function optionproduct2Formatter(e, value, row, index) {
            return ['<a class="deleteProduct2"  title="删除信息">', '<span id="deleteProduct2">删除</span>', '</a>  '].join('');
        };
    }
    window.optionproduct2Events = {
        'click .deleteProduct2': function(e, value, row, index) {
            arr_imgProduct.remove(index);
            loadProductListTable(arr_imgProduct)
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
    $('#addProductTexingBtn').click(function() {
        imgStatus = "";
        imageHref = "";
        var tdic = {};
        layer.open({
            type: 1,
            area: ['1100px', '300px'],
            title: ['添加产品指标项', 'font-size:18px;text-align: center;'],
            content: $(".addProductZhibiaoDiv"),
            btn: '确定',
            yes: function(index, layero) {
                if ($('#ProductTexing').val() != "" && $('#ProductTexingVal').val() != "") {
                    if (imgStatus == 200) {
                        tdic['indexTypeKey'] = $('#ProductTexing').val();
                        tdic['indexTypeValue'] = $('#ProductTexingVal').val();
                        tdic['indexImage'] = imageHref;
                        arr_imgProduct.push(tdic)
                        loadProductListTable(arr_imgProduct)
                        $('#ProductTexing').val("")
                        $('#ProductTexingVal').val("")
                        $('#imgBtn').val("")
                        imageHref = ""
                        imgStatus = ""
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
    $('#uploadImg').click(function() {
        uploadimg()
    });
    $('.addchanpinBtn').click(function() {
        $("#tableAdd").fadeIn()
        $(".addImg").hide()
        $("#addproductList").bootstrapTable('destroy');
        arr_imgProduct = []
        $('.productProvideDiv').hide()
        $('.productBugDiv').hide()
        $('.oldAddressArea2').hide()
        $('#addProductInfo').siblings('label').remove()
        $('.desc').text("")
        $('.ProductName').scrollTop(0)
        $('.imgList').hide()
        layer.open({
            type: 1,
            area: ['1000px', '579px'],
            title: ['添加产品信息', 'font-size:18px;text-align: center;'],
            content: $(".addChanpinDiv"),
            btn: '确定',
            yes: function(index, layero) {
                if ($('.ProductName').val() == "" || editor5.txt.text() == "" || $('#hangye1').val() == "" || $('.ProductPrice').val() == "" || $('.ProductCode').val() == "" || $('.ProductXinghao').val() == "" || $('.Stock').val() == "" || $('.DeliveryCycle').val() == "" || $('.DeliveryCycle2').val() == "" || $('#county1').val() == "") {
                    layer.msg('请完善信息', {
                        time: 1000,
                    })
                } else {
                    var index = layer.load(1, {
                        shade: [0.3, '#000']
                    });
                    chanpinUpload()
                }
            }
        })
        $('.imgChanpin').fadeIn()
        $('.addChanpinDiv input').val("")
        $('.addChanpinDiv select').val("=请选择=")
        editor5.txt.clear();
    });

    function uploadimg() {
        var Pformdata = new FormData();
        Pformdata.append('Files', $("#imgBtn")[0].files[0]);
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
    $('#nextStepBtn').click(function() {
        $('.productProvideDiv').fadeIn()
        $('.productBugDiv').fadeIn()
    });
    // 添加产品信息函数
    function chanpinUpload() {
        var str_imgProduct = "";
        for (var i = 0; i < arr_imgProduct.length; i++) {
            str_imgProduct += JSON.stringify(arr_imgProduct[i]) + ','
        }
        var strPRo = '[' + str_imgProduct.substring(0, Number(str_imgProduct.length) - 1) + ']'
        var addressChanpinAll = addressChanpin + $('.moreAddress').val()
        var Pformdata = new FormData();
        var imgchanpinval = $("#imgChanpin")[0].files
        Pformdata.append('ProductName', $('.ProductName').val());
        Pformdata.append('ProductMsg', editor5.txt.text());
        Pformdata.append('ProductType', $('#hangye1').val());
        Pformdata.append('ProductPrice', $('.ProductPrice').val());
        Pformdata.append('GuoBiaoCode', $('.ProductCode').val());
        Pformdata.append('productModel', $('.ProductXinghao').val());
        Pformdata.append('area', addressChanpinAll);
        Pformdata.append('ProductInfo', editor5.txt.html());
        Pformdata.append('Stock', $('.Stock').val());
        Pformdata.append('DeliveryCycle', $('.DeliveryCycle').val());
        Pformdata.append('DeliveryCycle2', $('.DeliveryCycle2').val());
        Pformdata.append('userGuid', dataInfo.Guid);
        Pformdata.append('productIndexJson', strPRo);
        Pformdata.append('companyId', dataInfo.companyId);
        for (var i = 0; i < imgchanpinval.length; i++) {
            Pformdata.append('images', imgchanpinval[i]);
        }
        $.ajax({
            type: 'post',
            url: '' + EQD_space + '/ComSpace/ComSpaceProduct/Add_ComSpaceProduct.ashx',
            data: Pformdata,
            cache: false,
            processData: false, // 不处理发送的数据，因为data值是Formdata对象，不需要对数据做处理
            contentType: false, // 不设置Content-type请求头
            success: function(data) {
                var data2 = JSON.parse(data)
                if (data2.status == 200) {
                    $('.addChanpinDiv input').val("")
                    $('.addChanpinDiv select').val("=请选择=")
                    editor5.txt.clear();
                    $("#imgChanpin").val("")
                    imgchanpinval = "";
                    layer.closeAll()
                    loadChanpinFirst(Number(changPinPage) - 1)
                } else {
                    layer.msg(data2.msg, {
                        time: 1000,
                    })
                }
            },
            error: function() {}
        });
    }
    var changPinPage;

    function loadChanpinFirst(page) {
        $.post('' + EQD_space + '/ComSpace/ComSpaceProduct/Get_ComSpaceProduct.ashx', {
            "companyId": dataInfo.companyId,
            "page": page
        }, function(data) {
            var dataChanpin = JSON.parse(data);
            if (dataChanpin.items.length > 0) {
                loadChanpinTable(dataChanpin.items);
                $("#chanpinList").bootstrapTable('load', dataChanpin.items);
            } else {}
            changPinPage = dataChanpin.page;
            if (dataChanpin.items.length >= 10) {
                $('.chanpinNext').fadeIn()
            } else {
                $('.chanpinNext').hide()
            }
        });
    };

    function loadChanpinNext(page) {
        $.post('' + EQD_space + '/ComSpace/ComSpaceProduct/Get_ComSpaceProduct.ashx', {
            "companyId": dataInfo.companyId,
            "page": page
        }, function(data) {
            var dataChanpin = JSON.parse(data);
            if (dataChanpin.items.length > 0) {
                layer.msg("加载完成", {
                    time: 1200
                })
                loadChanpinTable(dataChanpin.items);
                $("#chanpinList").bootstrapTable('append', dataChanpin.items);
            } else {
                layer.msg("已无更多", {
                    time: 1200
                })
            }
            changPinPage = dataChanpin.page;
            if (dataChanpin.items.length >= 10) {
                $('.chanpinNext').fadeIn()
            } else {
                $('.chanpinNext').hide()
            }
        });
    };
    $('.chanpinNext').click(function() {
        loadChanpinNext(changPinPage)
    });

    function loadChanpinTable(data) {
        $('#chanpinList').bootstrapTable({
            data: data,
            columns: [{
                field: 'img',
                title: '图片',
                align: 'center',
                valign: 'middle',
                formatter: imgchanpinFormatter,
            }, {
                field: 'ProductName',
                title: '产品名字',
                align: 'center',
                valign: 'middle',
                formatter: pName,
                events: viewP
            }, {
                field: 'ProductType',
                title: '产品类型',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'ProductPrice',
                title: '价格',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'area',
                title: '生产地',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'addProvide',
                title: '产品供方信息',
                align: 'center',
                valign: 'middle',
                formatter: optionprovideFormatter,
                events: optionprovideEvents
            }, {
                field: 'addBuy',
                title: '产品买方信息',
                align: 'center',
                valign: 'middle',
                formatter: optionbuyFormatter,
                events: optionbuyEvents
            }, {
                field: 'option',
                title: '操作',
                align: 'center',
                valign: 'middle',
                formatter: optionchanpinFormatter,
                events: optionchanpinEvents
            }]
        });

        function pName(e, value, row, index) {
            return '<span class="viewP">' + value.ProductName + '</span> '
        }

        function imgchanpinFormatter(e, value, row, index) {
            var imgUrl2 = value.image.replace(/.png/, "min.png")
            return ['<img src="' + imgUrl2 + '" alt="">'].join('');
        };

        function optionchanpinFormatter(e, value, row, index) {
            return ['<a class="deleteChanpin"  title="删除信息">', '<span id="deleteChanpin">删除</span>', '</a>  ', '<a class="changeChanpin"  title="修改">', '<span id="changeChanpin">修改</span>', '</a>  ', ].join('');
        };

        function optionprovideFormatter(e, value, row, index) {
            return ['<a class="addprovideBtn"  title="添加">', '<span id="addprovideBtn">添加</span>', '</a>  ', '<a class="lookProvide"  title="查看详情">', '<span id="lookProvide">查看</span>', '</a>  ', ].join('');
        };

        function optionbuyFormatter(e, value, row, index) {
            return ['<a class="addBuyBtn"  title="添加">', '<span id="addBuyBtn">添加</span>', '</a>  ', '<a class="lookBuy"  title="查看详情">', '<span id="lookBuy">查看</span>', '</a>  ', ].join('');
        };
    }
    var productImgId;
    window.viewP = {
        'click .viewP': function(e, value, row, index) {
            window.open("chanpinDetails.html?id=" + row.Id + "")
        },
    }
    window.optionchanpinEvents = {
        'click .deleteChanpin': function(e, value, row, index) {
            layer.open({
                type: 1,
                area: ['300px', '220px'],
                title: ['删除产品信息', 'font-size:18px;text-align: center;'],
                content: $(".deleteChanpinDiv"),
                btn: '确定',
                yes: function(index, layero) {
                    $.post('' + EQD_space + '/ComSpace/ComSpaceProduct/Delete_ComSpaceProduct.ashx', {
                        "productId": row.Id,
                        "companyId": dataInfo.companyId,
                        "userGuid": dataInfo.Guid,
                    }, function(data) {
                        var dataDel = JSON.parse(data);
                        if (dataDel.status == 200) {
                            layer.msg('删除成功', {
                                time: 1000,
                            })
                            loadChanpinFirst(Number(changPinPage) - 1)
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
        'click .changeChanpin': function(e, value, row, index) {
            $("#tableAdd").hide();
            $(".addImg").fadeIn();
            $('#addImgBtn').val('上传图片')
            productImgId = row.Id;
            $.post('' + EQD_space + '/ComSpace/ComSpaceProduct/Get_ComSpaceProductById.ashx', {
                "productId": row.Id
            }, function(data) {
                var dataChanDet = JSON.parse(data)
                $('.Stock').val(dataChanDet.items.Stock)
                $('.DeliveryCycle').val(dataChanDet.items.DeliveryCycle)
                $('.ProductCode').val(dataChanDet.items.GuoBiaoCode)
                $('.ProductXinghao').val(dataChanDet.items.ProductModel)
                $('.DeliveryCycle2').val(dataChanDet.items.DeliveryCycle2)
                $('.oddAddressVal2').text(dataChanDet.items.area)
                $('.oddTypeVal2').val(dataChanDet.items.ProductType)
                editor5.txt.html(dataChanDet.items.ProductInfo)
                $('.addChanpinDiv').scrollTop(0)
                $('.imgList').fadeIn()
                $('.imgList div').remove()
                for (var i = 0; i < dataChanDet.items.images.length; i++) {
                    $('.imgList').append('<div class="pull-left"><img src="' + dataChanDet.items.images[i] + '" alt="" /><p><button id="D' + i + '">删除该图片</button></p></div>')
                }
                $('.imgList>div button').click(function() {
                    var imgIndex = $(this).attr('id').substring(1);
                    layer.open({
                        type: 1,
                        area: ['300px', '210px'],
                        title: ['删除照片', 'font-size:18px;text-align: center;'],
                        content: $(".deleteImg"),
                        btn: '确定',
                        yes: function(index, layero) {
                            $.post('' + EQD_space + '/ComSpace/ComSpaceProduct/Delete_ComSpaceProductImg.ashx', {
                                "productId": row.Id,
                                "companyId": dataInfo.companyId,
                                "userGuid": dataInfo.Guid,
                                "imgIndex": imgIndex
                            }, function(data) {
                                var dataD = JSON.parse(data)
                                if (dataD.status == 200) {
                                    $('#D' + imgIndex + '').parent('p').parent('div').remove()
                                    layer.close(index);
                                }
                            });
                        }
                    })
                })
                layer.open({
                    type: 1,
                    area: ['1000px', '618px'],
                    title: ['修改产品信息', 'font-size:18px;text-align: center;'],
                    content: $(".addChanpinDiv"),
                    btn: '确定',
                    yes: function(index, layero) {
                        var addressChnapinChange = addressChanpin + $('.moreAddress').val()
                        hangyeVal = $('#hangye1').val()
                        if ($('#county1').val() == "=请选择=") {
                            var addressVal = dataChanDet.items.area
                        } else {
                            addressVal = addressChnapinChange
                        }
                        $.post('' + EQD_space + '/ComSpace/ComSpaceProduct/Update_ComSpaceProduct.ashx', {
                            "productId": row.Id,
                            "companyId": dataInfo.companyId,
                            "userGuid": dataInfo.Guid,
                            "para": "ProductName='" + $('.ProductName').val() + "'," + "ProductMsg='" + editor5.txt.text() + "'," + "ProductType='" + hangyeVal + "'," + "ProductPrice='" + $('.ProductPrice').val() + "'," + "area='" + addressVal + "'," + "ProductInfo='" + editor5.txt.html() + "'," + "Stock='" + $('.Stock').val() + "'," + "DeliveryCycle='" + $('.DeliveryCycle').val() + "'," + "GuoBiaoCode='" + $('.ProductCode').val() + "'," + "productModel='" + $('.ProductXinghao').val() + "'"
                        }, function(data) {
                            var dataChanpinChange = JSON.parse(data)
                            if (dataChanpinChange.status == 200) {
                                loadChanpinFirst(Number(changPinPage) - 1)
                                layer.closeAll();
                            }
                        });
                    }
                })
            });
            $('.ProductName').val(row.ProductName)
            $('.ProductPrice').val(row.ProductPrice)
            $('.imgChanpin').hide()
            $('.oldAddressArea2').fadeIn();
            $('.oldTypeArea2').fadeIn();
            $('.addChanpinDiv select').val("=请选择=")
        },
    }
    $("#addImgBtn").click(function() {
        $("#uploadchanpinImg").click(); //隐藏了input:file样式后，点击头像就可以本地上传
        $("#uploadchanpinImg").on("change", function() {
            var objUrl1 = getObjectURL(this.files[0]); //获取图片的路径，该路径不是图片在本地的路径
            if (objUrl1) {
                $("#pic1Img").fadeIn()
                $(".addImg p").css('display', 'block');
                $("#pic1Img").attr("src", objUrl1); //将图片路径存入src中，显示出图片
                $('#upImg').fadeIn()
                $("#addImgBtn").val("重新选择")
            }
        });
    });
    $('#upImg').click(function() {
        productIMGUpload(productImgId)
    });

    function productIMGUpload(data) {
        var Pformdata = new FormData();
        Pformdata.append('userGuid', dataInfo.Guid);
        Pformdata.append('companyId', dataInfo.companyId);
        Pformdata.append('productId', data);
        Pformdata.append('img', $("#uploadchanpinImg")[0].files[0]);
        $.ajax({
            type: 'post',
            url: '' + EQD_space + '/ComSpace/ComSpaceProduct/Add_ComSpaceProductImg.ashx',
            data: Pformdata,
            cache: false,
            processData: false, // 不处理发送的数据，因为data值是Formdata对象，不需要对数据做处理
            contentType: false, // 不设置Content-type请求头
            success: function(data) {
                var data2 = JSON.parse(data)
                if (data2.status == 200) {
                    $("#addImgBtn").val("上传图片");
                    $("#pic1Img").hide()
                    $('#upImg').hide()
                    $.post('' + EQD_space + '/ComSpace/ComSpaceProduct/Get_ComSpaceProductById.ashx', {
                        "productId": productImgId
                    }, function(data) {
                        var dataImg = JSON.parse(data).items.images;
                        $('.imgList div').remove()
                        for (var i = 0; i < dataImg.length; i++) {
                            $('.imgList').append('<div class="pull-left"><img src="' + dataImg[i] + '" alt="" /><p><button id="D' + i + '">删除该图片</button></p></div>')
                        }
                        $('.imgList>div button').click(function() {
                            var imgIndex = $(this).attr('id').substring(1);
                            layer.open({
                                type: 1,
                                area: ['300px', '210px'],
                                title: ['删除照片', 'font-size:18px;text-align: center;'],
                                content: $(".deleteImg"),
                                btn: '确定',
                                yes: function(index, layero) {
                                    $.post('' + EQD_space + '/ComSpace/ComSpaceProduct/Delete_ComSpaceProductImg.ashx', {
                                        "productId": productImgId,
                                        "companyId": dataInfo.companyId,
                                        "userGuid": dataInfo.Guid,
                                        "imgIndex": imgIndex
                                    }, function(data) {
                                        var dataD = JSON.parse(data)
                                        if (dataD.status == 200) {
                                            $('#D' + imgIndex + '').parent('p').parent('div').remove()
                                            layer.close(index);
                                        }
                                    });
                                }
                            })
                        })
                    })
                }
            },
            error: function() {}
        });
        return false;
    }
    // 获取数据
    var arr_imgProduct2 = [];
    var imageHref2, imgStatus2;
    $('#addProductTexingBtn2').click(function() {
        imgStatus2 = "";
        imageHref2 = "";
        var tdic2 = {};
        layer.open({
            type: 1,
            area: ['1100px', '300px'],
            title: ['添加产品指标项', 'font-size:18px;text-align: center;'],
            content: $(".addProductZhibiaoDiv"),
            btn: '确定',
            yes: function(index, layero) {
                if ($('#ProductTexing').val() != "" && $('#ProductTexingVal').val() != "") {
                    if (imgStatus2 == 200) {
                        tdic2['indexTypeKey'] = $('#ProductTexing').val();
                        tdic2['indexTypeValue'] = $('#ProductTexingVal').val();
                        tdic2['indexImage'] = imageHref2;
                        arr_imgProduct2.push(tdic2)
                        loadProductListTable2(arr_imgProduct2)
                        $('#ProductTexing').val("")
                        $('#ProductTexingVal').val("")
                        $('#imgBtn').val("")
                        imageHref2 = "";
                        imgStatus2 = "";
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

    function loadProductListTable2(data) {
        $('#addproductList2').bootstrapTable({
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
        $("#addproductList2").bootstrapTable('load', data);

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
            loadProductListTable2(arr_imgProduct2)
        }
    }
    // 供货方行业
    setTimeout(function() {
        $.post('' + EQD_space + '/Option_AreasAnd.ashx', {
            type: "2"
        }, function(data) {
            $("#hangyeProvide1").typeahead({
                source: data,
                items: 10,
                afterSelect: function(item) {
                    $('#hangyeProvide1').siblings('.desc').text(item.dec)
                }
            });
        });
    }, 550);
    window.optionprovideEvents = {
        'click .addprovideBtn': function(e, value, row, index) {
            arr_imgProduct = [];
            // $('#addproductList2').hide()
            arr_imgProduct2 = []
            loadProductListTable2(arr_imgProduct2)
            layer.open({
                type: 1,
                area: ['1000px', '500px'],
                title: ['添加供货方信息', 'font-size:18px;text-align: center;'],
                content: $(".addprovideInfoDiv"),
                btn: '确定',
                yes: function(index, layero) {
                    var str_imgProduct2 = "";
                    for (var i = 0; i < arr_imgProduct2.length; i++) {
                        str_imgProduct2 += JSON.stringify(arr_imgProduct2[i]) + ','
                    }
                    var strPRo2 = '[' + str_imgProduct2.substring(0, Number(str_imgProduct2.length) - 1) + ']'
                    $.post('' + EQD_space + '/ComSpace/ComSpaceProduct/ProductSupply/Add_ProductSupply.ashx', {
                        "companyId": dataInfo.companyId,
                        "userGuid": dataInfo.Guid,
                        "productId": row.Id,
                        "productName": $('.productProvideName').val(),
                        "GuoBiaoCode": $('.productProvideCode').val(),
                        "productType": $('#hangyeProvide1').val(),
                        "productDesc": $('#productProvideDesc').val(),
                        "indexJson": strPRo2
                    }, function(data) {
                        var dataProductProvide = JSON.parse(data);
                        if (dataProductProvide.status == 200) {
                            $('.productProvideName').val("")
                            $('.productProvideCode').val("")
                            $('#productProvideDesc').val("")
                            $('#hangyeProvide1Val').val("")
                            $('.addprovideInfoDiv label select').val("=请选择=")
                            loadProductListTable2(arr_imgProduct2)
                        }
                    });
                    layer.close(index)
                }
            })
        },
        'click .lookProvide': function(e, value, row, index) {
            window.open("lookProvideList.html?id=" + row.Id + "")
        }
    }
    // 买货操作
    window.optionbuyEvents = {
        'click .addBuyBtn': function(e, value, row, index) {
            arr_imgProduct2 = []
            loadProductListTable2(arr_imgProduct2)
            layer.open({
                type: 1,
                area: ['1000px', '500px'],
                title: ['添加买货方信息', 'font-size:18px;text-align: center;'],
                content: $(".addprovideInfoDiv"),
                btn: '确定',
                yes: function(index, layero) {
                    var str_imgProduct2 = "";
                    for (var i = 0; i < arr_imgProduct2.length; i++) {
                        str_imgProduct2 += JSON.stringify(arr_imgProduct2[i]) + ','
                    }
                    var strPRo2 = '[' + str_imgProduct2.substring(0, Number(str_imgProduct2.length) - 1) + ']'
                    $.post('' + EQD_space + '/ComSpace/ComSpaceProduct/ProductBuyer/Add_ProductBuyer.ashx', {
                        "companyId": dataInfo.companyId,
                        "userGuid": dataInfo.Guid,
                        "productId": row.Id,
                        "productName": $('.productProvideName').val(),
                        "GuoBiaoCode": $('.productProvideCode').val(),
                        "productType": $('#hangyeProvide1Val').val(),
                        "productDesc": $('#productProvideDesc').val(),
                        "indexJson": strPRo2
                    }, function(data) {
                        var dataProductProvide = JSON.parse(data);
                        if (dataProductProvide.status == 200) {
                            $('.productProvideName').val("")
                            $('.productProvideCode').val("")
                            $('#productProvideDesc').val("")
                            $('#hangyeProvide1Val').val("")
                            $('.addprovideInfoDiv label select').val("=请选择=")
                            loadProductListTable2(arr_imgProduct2)
                        }
                    });
                    layer.close(index)
                }
            })
        },
        'click .lookBuy': function(e, value, row, index) {
            window.open("lookBuyList.html?id=" + row.Id + "")
        }
    }
    // 文化
    $('.comCul').click(function() {
        $('.comCulDiv').fadeIn().siblings('div').hide();
        $(this).addClass('active2').siblings('p').removeClass('active2');
        loadcoreValue()
        setTimeout(function() {
            var oDiv3 = document.getElementById('comCulDiv');
            if (oDiv3.offsetHeight < window.innerHeight) {
                $('.Link').addClass('fixed')
            } else {
                $('.Link').removeClass('fixed')
            }
        }, 300)
    });
    //
    $('#hexinjiazhiguan').click(function() {
        $(this).addClass('active').siblings('li').removeClass('active')
        $('#hexinDiv').fadeIn().siblings('div').hide();
        loadcoreValue()
    });
    // 添加核心文化
    $('.addCoreValuesBtn').click(function() {
        layer.open({
            type: 1,
            area: ['800px', '494px'],
            title: ['添加核心文化', 'font-size:18px;text-align: center;'],
            content: $(".addCoreValuediv"),
            btn: '确定',
            yes: function(index, layero) {
                if ($('#uploadimgCore').val() == "" || $('.coreTitle').val() == "" || $('#coreDescribe').val() == "") {
                    layer.msg('请完善信息', {
                        time: 1000,
                    });
                } else {
                    ajaxFileUploadCoreValue()
                    layer.close(index)
                }
            }
        });
    });
    $("#picimgCore").click(function() {
        $("#uploadimgCore").click(); //隐藏了input:file样式后，点击头像就可以本地上传
        $("#uploadimgCore").on("change", function() {
            var objUrl1 = getObjectURL(this.files[0]); //获取图片的路径，该路径不是图片在本地的路径
            if (objUrl1) {
                $("#pic2imgCore").fadeIn()
                $("#pic2imgCore").attr("src", objUrl1); //将图片路径存入src中，显示出图片
                $("#picimgCore").val("重新选择")
            }
        });
    });
    // 加载核心文化
    function loadcoreValue() {
        $.post('' + EQD_space + '/ComSpace/ComSpaceCoreValues/Get_ComSpaceCoreValues.ashx', {
            "companyId": dataInfo.companyId,
        }, function(data) {
            var dataCoreValue = JSON.parse(data)
            loadcoreValueTable(dataCoreValue.items)
        });
    }
    // 加载核心文化表格
    function loadcoreValueTable(data) {
        $('#coreValuesList').bootstrapTable({
            data: data,
            columns: [{
                field: 'img',
                title: '封面图',
                align: 'center',
                valign: 'middle',
                formatter: imgcoreValueFormatter,
            }, {
                field: 'title',
                title: '标题',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'Describe',
                title: '描述',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'option',
                title: '操作',
                align: 'center',
                valign: 'middle',
                formatter: optioncoreValueFormatter,
                events: optioncoreValueEvents
            }]
        });
        $("#coreValuesList").bootstrapTable('load', data);

        function imgcoreValueFormatter(e, value, row, index) {
            var imgUrl6 = value.ImageUrl.replace(/.png/, "min.png")
            return ['<img src="' + imgUrl6 + '" alt="">'].join('');
        };

        function optioncoreValueFormatter(e, value, row, index) {
            return ['<a class="deletecoreValue"  title="删除">', '<span id="deletecoreValue">删除</span>', '</a>  ', '<a class="changecoreValue"  title="修改图片">', '<span id="changecoreValue">修改图片</span>', '</a>  ', ].join('');
        };
    };
    // 核心价值操作
    window.optioncoreValueEvents = {
        'click .deletecoreValue': function(e, value, row, index) {
            layer.open({
                type: 1,
                area: ['300px', '180px'],
                title: ['删除核心信息', 'font-size:18px;text-align: center;'],
                content: $(".deleteCoreValuediv"),
                btn: '确定',
                yes: function(index, layero) {
                    $.post('' + EQD_space + '/ComSpace/ComSpaceCoreValues/Delete_ComSpaceCoreValues.ashx', {
                        "coreValuesId": row.Id,
                        "companyId": dataInfo.companyId,
                        "userGuid": dataInfo.Guid,
                    }, function(data) {
                        var dataDel = JSON.parse(data);
                        if (dataDel.status == 200) {
                            layer.msg('删除成功', {
                                time: 1000,
                            })
                            loadcoreValue()
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
        'click .changecoreValue': function(e, value, row, index) {
            $('.oldImg2').attr('src', row.ImageUrl);
            layer.open({
                type: 1,
                area: ['600px', '370px'],
                title: ['修改成员头像', 'font-size:18px;text-align: center;'],
                content: $(".changeCoreValueDiv"),
                btn: '确定',
                yes: function(index, layero) {
                    ajaxFileUploadImg2()
                    layer.close(index)
                }
            })
            // 更换核心价值照片
            function ajaxFileUploadImg2() {
                var Pformdata = new FormData();
                var img3val = $("#uploadChangeCore")[0].files[0]
                Pformdata.append('image', img3val);
                Pformdata.append('coreValuesId', row.Id);
                Pformdata.append('userGuid', dataInfo.Guid);
                Pformdata.append('companyId', dataInfo.companyId);
                $.ajax({
                    type: 'post',
                    url: '' + EQD_space + '/ComSpace/ComSpaceCoreValues/Update_ComSpaceCoreValuesImg.ashx',
                    data: Pformdata,
                    cache: false,
                    processData: false, // 不处理发送的数据，因为data值是Formdata对象，不需要对数据做处理
                    contentType: false, // 不设置Content-type请求头
                    success: function(data) {
                        var data2 = JSON.parse(data)
                        if (data2.status == 200) {
                            layer.msg('修改成功', {
                                time: 1000,
                            });
                            $('#uploadChangeCore').val("")
                            loadcoreValue()
                        } else {
                            layer.msg(data2.msg, {
                                time: 1000,
                            });
                        }
                    },
                    error: function() {}
                });
            }
        },
    };
    $('#picChangeCore').click(function() {
        $("#uploadChangeCore").click(); //隐藏了input:file样式后，点击头像就可以本地上传
        $("#uploadChangeCore").on("change", function() {
            var objUrl3 = getObjectURL(this.files[0]); //获取图片的路径，该路径不是图片在本地的路径
            if (objUrl3) {
                $(".oldImg2").removeAttr('src')
                $(".oldImg2").attr("src", objUrl3); //将图片路径存入src中，显示出图片
                $("#picChangeCore").val("重新选择")
            }
        });
    });
    //
    $('#leaderActity').click(function() {
        $(this).addClass('active').siblings('li').removeClass('active')
        $('#leaderActityDiv').fadeIn().siblings('div').hide();
        loadLeaderFirst(0)
    });
    // 添加领导活动
    $('.addLeaderBtn').click(function() {
        layer.open({
            type: 1,
            area: ['800px', '620px'],
            title: ['添加领导活动', 'font-size:18px;text-align: center;'],
            content: $(".addLeadDiv"),
            btn: '确定',
            yes: function(index, layero) {
                if ($('.leadTitle').val() == "") {
                    layer.msg('请完善信息', {
                        time: 1000,
                    });
                } else {
                    $.post('' + EQD_space + '/ComSpace/ComSpaceActivities/Add_ComSpaceActivities.ashx', {
                        "companyId": dataInfo.companyId,
                        "userGuid": dataInfo.Guid,
                        "title": $('.leadTitle').val(),
                        "content": editor2.txt.html()
                    }, function(data) {
                        var dataAddLead = JSON.parse(data);
                        if (dataAddLead.status == 200) {
                            layer.msg('上传成功', {
                                time: 1000,
                            });
                            loadLeader((leaderPage) - 1)
                            $('.leadTitle').val("")
                            editor2.txt.clear();
                        } else {
                            layer.msg(dataAddLead.msg, {
                                time: 1000,
                            });
                        }
                    });
                    layer.close(index)
                }
            }
        });
    });
    // 查看领导活动
    var leaderPage

    function loadLeaderFirst(page) {
        $.post('' + EQD_space + '/ComSpace/ComSpaceActivities/Get_ComSpaceActivities.ashx', {
            "companyId": dataInfo.companyId,
            "page": page
        }, function(data) {
            var dataLeader = JSON.parse(data);
            if (dataLeader.items.length > 0) {
                loadLeadTable(dataLeader.items);
                $("#leaderList").bootstrapTable('load', dataLeader.items);
            } else {}
            leaderPage = dataLeader.page
            if (dataLeader.items.length >= 10) {
                $('.leaderNext').fadeIn()
            } else {
                $('.leaderPrve').hide()
                $('.leaderNext').hide()
            }
        });
    };

    function loadLeaderNext(page) {
        $.post('' + EQD_space + '/ComSpace/ComSpaceActivities/Get_ComSpaceActivities.ashx', {
            "companyId": dataInfo.companyId,
            "page": page
        }, function(data) {
            var dataLeader = JSON.parse(data);
            if (dataLeader.items.length > 0) {
                layer.msg("加载完成", {
                    time: 1200
                });
                loadLeadTable(dataLeader.items);
                $("#leaderList").bootstrapTable('append', dataLeader.items);
            } else {
                layer.msg("已无更多", {
                    time: 1200
                })
            }
            leaderPage = dataLeader.page
            if (dataLeader.items.length >= 10) {
                $('.leaderNext').fadeIn()
            } else {
                $('.leaderNext').hide()
            }
        });
    }
    $('.leaderNext').click(function() {
        loadLeaderNext(leaderPage)
    });

    function loadLeadTable(data) {
        $('#leaderList').bootstrapTable({
            data: data,
            columns: [{
                field: 'title',
                title: '标题',
                align: 'center',
                valign: 'middle',
                formatter: hdName,
                events: viewHd
            }, {
                field: 'createTime',
                title: '时间',
                align: 'center',
                valign: 'middle',
                formatter: timeFormatter
            }, {
                field: 'option',
                title: '操作',
                align: 'center',
                valign: 'middle',
                formatter: optionLeaderFormatter,
                events: optionLeaderEvents
            }]
        });

        function hdName(e, value, row, index) {
            return '<span class="viewHd">' + value.title + '</span>'
        };

        function timeFormatter(e, value, row, index) {
            var time1 = value.createTime.split(" ")[0]
            return [
                time1
            ].join('');
        };

        function optionLeaderFormatter(e, value, row, index) {
            return ['<a class="deleteLeader"  title="删除">', '<span id="deleteLeader">删除</span>', '</a>  ', ].join('');
        };
    };
    window.viewHd = {
        'click .viewHd': function(e, value, row, index) {
            window.open("leaderDetdils.html?id=" + row.Id + "")
        },
    }
    window.optionLeaderEvents = {
        'click .deleteLeader': function(e, value, row, index) {
            layer.open({
                type: 1,
                area: ['300px', '180px'],
                title: ['删除活动', 'font-size:18px;text-align: center;'],
                content: $(".deleteLeadDiv"),
                btn: '确定',
                yes: function(index, layero) {
                    $.post('' + EQD_space + '/ComSpace/ComSpaceActivities/Delete_ComSpaceActivities.ashx', {
                        "activitiesId": row.Id,
                        "companyId": dataInfo.companyId,
                        "userGuid": dataInfo.Guid,
                    }, function(data) {
                        var dataDel = JSON.parse(data);
                        if (dataDel.status == 200) {
                            layer.msg('删除成功', {
                                time: 1000,
                            })
                            loadLeaderFirst(0)
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
    }
    //
    $('#goodThings').click(function() {
        $(this).addClass('active').siblings('li').removeClass('active')
        $('#goodThingsDiv').fadeIn().siblings('div').hide();
        loadGoodFirst(0)
    });
    // 添加先进事迹
    $('.addGoodBtn').click(function() {
        layer.open({
            type: 1,
            area: ['800px', '594px'],
            title: ['添加先进事迹', 'font-size:18px;text-align: center;'],
            content: $(".addgoodDiv"),
            btn: '确定',
            yes: function(index, layero) {
                if ($('.goodTitle').val() == "") {
                    layer.msg('请完善信息', {
                        time: 1000,
                    });
                } else {
                    $.post('' + EQD_space + '/ComSpace/ComSpace_Event/Add_ComSpaceEvent.ashx', {
                        "companyId": dataInfo.companyId,
                        "userGuid": dataInfo.Guid,
                        "title": $('.goodTitle').val(),
                        "content": editor3.txt.html()
                    }, function(data) {
                        var dataAddLead = JSON.parse(data);
                        if (dataAddLead.status == 200) {
                            layer.msg('上传成功', {
                                time: 1000,
                            });
                            loadGoodfirst(0)
                            $('.goodTitle').val("")
                            editor3.txt.clear();
                        } else {
                            layer.msg(dataAddLead.msg, {
                                time: 1000,
                            });
                        }
                    });
                    layer.close(index)
                }
            }
        });
    });
    // 查看先进事迹
    var goodThingPage;

    function loadGoodFirst(page) {
        $.post('' + EQD_space + '/ComSpace/ComSpace_Event/Get_ComSpaceEvent.ashx', {
            "companyId": dataInfo.companyId,
            "page": page
        }, function(data) {
            var dataGood = JSON.parse(data);
            if (dataGood.items.length > 0) {
                loadGoodTable(dataGood.items);
                $("#goodThingsList").bootstrapTable('load', dataGood.items);
            }
            goodThingPage = dataGood.page;
            if (dataGood.items.length >= 10) {
                $('.goodThingNext').fadeIn()
            } else {
                $('.goodThingNext').hide()
            }
        });
    };

    function loadGoodNext(page) {
        $.post('' + EQD_space + '/ComSpace/ComSpace_Event/Get_ComSpaceEvent.ashx', {
            "companyId": dataInfo.companyId,
            "page": page
        }, function(data) {
            var dataGood = JSON.parse(data);
            if (dataGood.items.length > 0) {
                loadGoodTable(dataGood.items);
                $("#goodThingsList").bootstrapTable('append', dataGood.items);
            }
            goodThingPage = dataGood.page;
            if (dataGood.items.length >= 10) {
                $('.goodThingNext').fadeIn()
            } else {
                $('.goodThingNext').hide()
            }
        });
    };
    $('.goodThingNext').click(function() {
        loadGoodNext(goodThingPage)
    });

    function loadGoodTable(data) {
        $('#goodThingsList').bootstrapTable({
            data: data,
            columns: [{
                field: 'title',
                title: '标题',
                align: 'center',
                valign: 'middle',
                formatter: thingsTitle,
                events: viewThings
            }, {
                field: 'createTime',
                title: '时间',
                align: 'center',
                valign: 'middle',
                formatter: time2Formatter
            }, {
                field: 'option',
                title: '操作',
                align: 'center',
                valign: 'middle',
                formatter: optionGoodFormatter,
                events: optionGoodEvents
            }]
        });

        function thingsTitle(e, value, row, index) {
            return '<span class="viewThings">' + value.title + '</span>'
        };

        function time2Formatter(e, value, row, index) {
            var time2 = value.createTime.split(" ")[0]
            return [
                time2
            ].join('');
        };

        function optionGoodFormatter(e, value, row, index) {
            return ['<a class="deletegood"  title="删除">', '<span id="deletegood">删除</span>', '</a>  ', '<a class="moregood"  title="详情">', '<span id="moregood">详情</span>', '</a>  ', ].join('');
        };
    };
    window.viewThings = {
        'click .viewThings': function(e, value, row, index) {
            window.open("thingDetails.html?id=" + row.Id + "")
        },
    };
    window.optionGoodEvents = {
        'click .deletegood': function(e, value, row, index) {
            layer.open({
                type: 1,
                area: ['300px', '180px'],
                title: ['删除事迹', 'font-size:18px;text-align: center;'],
                content: $(".deleteGoodDiv"),
                btn: '确定',
                yes: function(index, layero) {
                    $.post('' + EQD_space + '/ComSpace/ComSpace_Event/Delete_ComSpaceEvent.ashx', {
                        "eventId": row.Id,
                        "companyId": dataInfo.companyId,
                        "userGuid": dataInfo.Guid,
                    }, function(data) {
                        var dataDel = JSON.parse(data);
                        if (dataDel.status == 200) {
                            layer.msg('删除成功', {
                                time: 1000,
                            })
                            loadGoodFirst(Number(goodThingPage) - 1)
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
    }
    //
    $('#honer').click(function() {
        $(this).addClass('active').siblings('li').removeClass('active')
        $('#honerDiv').fadeIn().siblings('div').hide();
        loadPerfectWorker()
    });
    // 添加优秀员工
    $('.addHonerBtn').click(function() {
        layer.open({
            type: 1,
            area: ['800px', '494px'],
            title: ['添加优秀员工', 'font-size:18px;text-align: center;'],
            content: $(".addHonerDiv"),
            btn: '确定',
            yes: function(index, layero) {
                if ($('#uploadHoner').val() == "" || $('#honerName').val() == "" || $('#postHonerMsg').val() == "" || $('#personHonerMsg').val() == "") {
                    layer.msg('请完善信息', {
                        time: 1000,
                    });
                } else {
                    ajaxFileUploadHoner()
                    layer.close(index)
                }
            }
        });
    });
    $("#picHoner").click(function() {
        $("#uploadHoner").click(); //隐藏了input:file样式后，点击头像就可以本地上传
        $("#uploadHoner").on("change", function() {
            var objUrl2 = getObjectURL(this.files[0]); //获取图片的路径，该路径不是图片在本地的路径
            if (objUrl2) {
                $("#picHonerImg").fadeIn()
                $("#picHonerImg").attr("src", objUrl2); //将图片路径存入src中，显示出图片
                $("#picHoner").val("重新选择")
            }
        });
    });
    $('#honerName').click(function() {
        $.session.set('TCPD_set', '3');
        layer.open({
            type: 1,
            area: ['700px', '454px'],
            title: ['选择人员', 'font-size:18px;text-align: center;'],
            content: $(".chooseTeam"),
        });
    });
    // 查看优秀员工
    function loadPerfectWorker() {
        $.post('' + EQD_space + '/ComSpace/ComSpaceGoodStaff/Get_ComSpaceGoodStaff.ashx', {
            "companyId": dataInfo.companyId,
        }, function(data) {
            var dataHoner = JSON.parse(data)
            loadworkerTable(dataHoner.items)
        });
    };
    // 优秀员工操作
    function loadworkerTable(data) {
        $('#honerList').bootstrapTable({
            data: data,
            columns: [{
                field: 'img',
                title: '头像',
                align: 'center',
                valign: 'middle',
                formatter: imgHonerFormatter,
            }, {
                field: 'userName',
                title: '姓名',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'Post',
                title: '职位',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'Msg',
                title: '描述',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'option',
                title: '操作',
                align: 'center',
                valign: 'middle',
                formatter: optionHonerFormatter,
                events: optionHonerEvents
            }]
        });
        $("#honerList").bootstrapTable('load', data);

        function imgHonerFormatter(e, value, row, index) {
            var imgUrl7 = value.HeadImage.replace(/.png/, "min.png")
            return ['<img src="' + imgUrl7 + '" alt="">'].join('');
        };

        function optionHonerFormatter(e, value, row, index) {
            return ['<a class="deleteHoner"  title="删除">', '<span id="deleteHoner">删除</span>', '</a>  ', '<a class="changeHoner"  title="修改图片">', '<span id="changeHoner">修改图片</span>', '</a>  ', ].join('');
        };
    };
    window.optionHonerEvents = {
        'click .deleteHoner': function(e, value, row, index) {
            layer.open({
                type: 1,
                area: ['300px', '180px'],
                title: ['删除优秀员工', 'font-size:18px;text-align: center;'],
                content: $(".deleteHonerDiv"),
                btn: '确定',
                yes: function(index, layero) {
                    $.post('' + EQD_space + '/ComSpace/ComSpaceGoodStaff/Delete_ComSpaceGoodStaff.ashx', {
                        "staffId": row.Id,
                        "companyId": dataInfo.companyId,
                        "userGuid": dataInfo.Guid,
                    }, function(data) {
                        var dataDel = JSON.parse(data);
                        if (dataDel.status == 200) {
                            layer.msg('删除成功', {
                                time: 1000,
                            })
                            loadPerfectWorker()
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
        'click .changeHoner': function(e, value, row, index) {
            $('.oldHonerImg').attr('src', row.HeadImage);
            layer.open({
                type: 1,
                area: ['600px', '370px'],
                title: ['修改员工头像', 'font-size:18px;text-align: center;'],
                content: $(".changeHonerImgDiv"),
                btn: '确定',
                yes: function(index, layero) {
                    ajaxFileUploadHonerImg()
                    layer.close(index)
                }
            })
            // 更换头像
            function ajaxFileUploadHonerImg() {
                var Pformdata = new FormData();
                var img6val = $("#uploadHonerChange")[0].files[0]
                Pformdata.append('image', img6val);
                Pformdata.append('goodStaffId', row.Id);
                Pformdata.append('userGuid', dataInfo.Guid);
                Pformdata.append('companyId', dataInfo.companyId);
                $.ajax({
                    type: 'post',
                    url: '' + EQD_space + '/ComSpace/ComSpaceGoodStaff/Update_ComSpaceGoodStaffImg.ashx',
                    data: Pformdata,
                    cache: false,
                    processData: false, // 不处理发送的数据，因为data值是Formdata对象，不需要对数据做处理
                    contentType: false, // 不设置Content-type请求头
                    success: function(data) {
                        var data2 = JSON.parse(data)
                        if (data2.status == 200) {
                            layer.msg('修改成功', {
                                time: 1000,
                            });
                            $('#uploadHonerChange').val("")
                            loadPerfectWorker()
                        } else {
                            layer.msg(data2.msg, {
                                time: 1000,
                            });
                        }
                    },
                    error: function() {}
                });
            }
        },
    };
    $('#picHonerChange').click(function() {
        $("#uploadHonerChange").click(); //隐藏了input:file样式后，点击头像就可以本地上传
        $("#uploadHonerChange").on("change", function() {
            var objUrl3 = getObjectURL(this.files[0]); //获取图片的路径，该路径不是图片在本地的路径
            if (objUrl3) {
                $(".oldHonerImg").removeAttr('src')
                $(".oldHonerImg").attr("src", objUrl3); //将图片路径存入src中，显示出图片
                $("#picHonerChange").val("重新选择")
            }
        });
    });
    //企业信息
    var dataComInfo
    $('.cominfo').click(function() {
        $('.cominfoDiv').fadeIn().siblings('div').hide();
        $(this).addClass('active2').siblings('p').removeClass('active2');
        loadCOminfo();
    });
    $('#comInfomation').click(function() {
        $(this).addClass('active').siblings('li').removeClass('active')
        $('#comInfomationDiv').fadeIn().siblings('div').hide();
        loadCOminfo()
    });
    // 添加企业信息
    $('.configBtn').click(function() {
        window.open("addcompanyInfo.html")
    });
    // 修改企业信息
    $('.configUpdataBtn').click(function() {
        var str = JSON.stringify(dataComInfo.items); // 将对象转换为字符串
        sessionStorage.removeItem("ChangeInfo");
        sessionStorage.setItem("ChangeInfo", str);
        window.open("updatacompanyInfo.html")
    });
    // 查看企业信息
    function loadCOminfo() {
        $.post('' + EQD_space + '/ComSpace/ComSpacePerfect/Get_ComSpacePerfect.ashx', {
            "companyId": dataInfo.companyId
        }, function(data) {
            dataComInfo = JSON.parse(data);
            if (dataComInfo.items == null) {
                $('.configArea').fadeIn()
            } else {
                $('.fadeInComInfo').fadeIn();
                $(".showComInfo").fadeIn();
                $('.configArea').hide();
                $('.Brand').text(dataComInfo.items.Brand)
                $('.Register').text(dataComInfo.items.Register)
                $('.CustomerGroup').text(dataComInfo.items.CustomerGroup)
                $('.RegisteredCapital').text(dataComInfo.items.RegisteredCapital)
                $('.ScopeOfOperation').text(dataComInfo.items.ScopeOfOperation)
                $('.EstablishTime').text(dataComInfo.items.EstablishTime)
                $('.BusinessTime').text(dataComInfo.items.BusinessTime)
                $('.Industry').text(dataComInfo.items.Industry)
                $('.Authentication').text(dataComInfo.items.Authentication)
                $('.Management').text(dataComInfo.items.Management)
                $('.Trademark').text(dataComInfo.items.Trademark)
                $('.Turnover').text(dataComInfo.items.Turnover)
                $('.WorkshopArea').text(dataComInfo.items.WorkshopArea)
            }
        });
    };
    // 企业简介
    $('#comDesc').click(function() {
        $(this).addClass('active').siblings('li').removeClass('active')
        $('#comDescDiv').fadeIn().siblings('div').hide();
        $('.comImgList div').remove()
        lookComdetails()
    });
    // 查看企业空间详情
    var companyInfo

    function lookComdetails() {
        $.post('' + EQD_space + '/ComSpace/Get_ComSpaceInfo.ashx', {
            'companyId': dataInfo.companyId,
            'userGuid': dataInfo.Guid,
            "userCompanyId": dataInfo.companyId
        }, function(data) {
            companyInfo = JSON.parse(data);
            $('.fadeInComInfo2').append(companyInfo.items.comDesc)
            // 企业图片
            for (var i = 0; i < companyInfo.items.ComImage.length; i++) {
                $('.comImgList').append('<div class="pull-left"><img src="' + companyInfo.items.ComImage[i].imgUrl + '" alt="" /><p><button id="' + companyInfo.items.ComImage[i].Id + '">删除</button></p></div>')
            }
            $('.comImgList button').click(function() {
                var imgId = $(this).attr('id')
                layer.open({
                    type: 1,
                    area: ['300px', '210px'],
                    title: ['删除照片', 'font-size:18px;text-align: center;'],
                    content: $(".deleteImgdiv"),
                    btn: '确定',
                    yes: function(index, layero) {
                        $.post('' + EQD_space + '/ComSpace/ComSpacePerfect/Del_ComSpaceImage.ashx', {
                            "companySpaceImageId": imgId,
                            'companyId': dataInfo.companyId,
                            'userGuid': dataInfo.Guid,
                        }, function(data) {
                            var dataDelImg = JSON.parse(data);
                            if (dataDelImg.status == 200) {
                                $('.comImgList div').remove()
                                lookComdetails()
                                layer.closeAll()
                            }
                        });
                    }
                })
            });
        });
    };
    $('.addSpaceimgBtn').click(function() {
        if (dataComInfo.items.CompanyDesc == "") {
            $('.descarea').fadeIn()
        } else {
            $('.descarea').hide()
        }
        layer.open({
            type: 1,
            area: ['800px', '494px'],
            title: ['添加企业简介', 'font-size:18px;text-align: center;'],
            content: $(".addSpaceimgDiv"),
            btn: '确定',
            yes: function(index, layero) {
                comDescUpload()
            }
        })
    });

    function comDescUpload() {
        var Pformdata = new FormData();
        var dataimg = $("#Spaceimg")[0].files;
        Pformdata.append('userGuid', dataInfo.Guid);
        Pformdata.append('companyId', dataInfo.companyId);
        if (dataComInfo.items.CompanyDesc == "") {
            Pformdata.append('CompanyDesc', editor6.txt.html());
        } else {
            // Pformdata.append('CompanyDesc',"");
        }
        for (var i = 0; i < dataimg.length; i++) {
            Pformdata.append('image', dataimg[i]);
        }
        if (dataimg.length == 0) {
            layer.msg('请完善填写的资料', {
                time: 1000,
            });
        } else {
            $.ajax({
                type: 'post',
                url: '' + EQD_space + '/ComSpace/ComSpacePerfect/Add_ComSpaceImage.ashx',
                data: Pformdata,
                cache: false,
                processData: false, // 不处理发送的数据，因为data值是Formdata对象，不需要对数据做处理
                contentType: false, // 不设置Content-type请求头
                success: function(data) {
                    var data2 = JSON.parse(data)
                    if (data2.status == 200) {
                        layer.msg('上传成功', {
                            time: 1000,
                        });
                        $('.comImgList div').remove()
                        lookComdetails()
                        layer.closeAll()
                    } else {
                        layer.msg(data2.msg, {
                            time: 1000,
                        });
                    }
                },
                error: function() {}
            });
        }
        return false;
    };
    // 修改企业简介
    $('.changeSpaceBtn').click(function() {
        editor7.txt.html(companyInfo.items.comDesc)
        layer.open({
            type: 1,
            area: ['800px', '620px'],
            title: ['修改企业简介', 'font-size:18px;text-align: center;'],
            content: $(".changeComdescDiv"),
            btn: '确定',
            yes: function(index, layero) {
                $.post('' + EQD_space + '/ComSpace/ComSpacePerfect/Update_ComSpaceDesc.ashx', {
                    'userGuid': dataInfo.Guid,
                    'companyId': dataInfo.companyId,
                    'CompanyDesc': editor7.txt.html()
                }, function(data) {
                    var dataComDesc = JSON.parse(data)
                    if (dataComDesc.status == 200) {
                        layer.msg('修改成功', {
                            time: 1000,
                        });
                        editor4.txt.clear();
                        lookComdetails()
                        layer.closeAll()
                    } else {
                        layer.msg(dataComDesc.msg, {
                            time: 1000,
                        });
                    }
                });
            }
        })
    });
    $('#comZizhi').click(function() {
        $(this).addClass('active').siblings('li').removeClass('active');
        $('#comZizhiDiv').fadeIn().siblings('div').hide();
    });
    $('#comShow').click(function() {
        $(this).addClass('active').siblings('li').removeClass('active')
        $('#comShowDiv').fadeIn().siblings('div').hide();
        loadProductFirst(0)
    });
    laydate.render({
        elem: '#productTime'
    });
    // 添加设备信息
    $('.addProductBtn').click(function() {
        $('.productName').val("");
        $('#productTime').val("");
        $('.productCom').val("");
        editor4.txt.clear();
        layer.open({
            type: 1,
            area: ['800px', '620px'],
            title: ['添加设备信息', 'font-size:18px;text-align: center;'],
            content: $(".addProductDiv"),
            btn: '确定',
            yes: function(index, layero) {
                productFileUpload()
                layer.close(index)
            }
        })
        $('.imgLabel').fadeIn()
    });

    function productFileUpload() {
        var Pformdata = new FormData();
        var dataimg = $("#file")[0].files;
        Pformdata.append('userGuid', dataInfo.Guid);
        Pformdata.append('companyId', dataInfo.companyId);
        Pformdata.append('EquipmentName', $('.productName').val());
        Pformdata.append('EquipmentMsg', editor4.txt.html());
        Pformdata.append('Manufactor', $('.productCom').val());
        Pformdata.append('DateOfPurchase', $('#productTime').val());
        for (var i = 0; i < dataimg.length; i++) {
            Pformdata.append('images', dataimg[i]);
        }
        if ($('.productName').val().length == 0 || $('#productTime').val().length == 0 || $('.productCom').val().length == 0 || editor4.txt.html().length == 0) {
            layer.msg('请完善填写的资料', {
                time: 1000,
            });
        } else {
            $.ajax({
                type: 'post',
                url: '' + EQD_space + '/ComSpace/ComSpaceEquipment/Add_ComSpaceEquipment.ashx',
                data: Pformdata,
                cache: false,
                processData: false, // 不处理发送的数据，因为data值是Formdata对象，不需要对数据做处理
                contentType: false, // 不设置Content-type请求头
                success: function(data) {
                    var data2 = JSON.parse(data)
                    if (data2.status == 200) {
                        layer.msg('添加成功', {
                            time: 1000,
                        });
                        loadProductFirst(0);
                        $('.productName').val("");
                        $('#productTime').val("");
                        $('.productCom').val("")
                        editor4.txt.clear();
                        $("#file").val("")
                        dataimg = "";
                        loadProductFirst(0);
                    } else {
                        layer.msg(data2.msg, {
                            time: 1000,
                        });
                    }
                },
                error: function() {}
            });
        }
        return false;
    };
    // 查看设备信息
    var productPage;

    function loadProductFirst(page) {
        $.post('' + EQD_space + '/ComSpace/ComSpaceEquipment/Get_ComSpaceEquipment.ashx', {
            "companyId": dataInfo.companyId,
            "page": page
        }, function(data) {
            var dataProduct = JSON.parse(data)
            loadProductTable(dataProduct.items);
            $("#productList").bootstrapTable('load', dataProduct.items);
            productPage = dataProduct.page;
            if (dataProduct.items.length >= 10) {
                $('.productNext').fadeIn()
            } else {
                $('.productNext').hide()
            }
        });
    };

    function loadProductNext(page) {
        $.post('' + EQD_space + '/ComSpace/ComSpaceEquipment/Get_ComSpaceEquipment.ashx', {
            "companyId": dataInfo.companyId,
            "page": page
        }, function(data) {
            var dataProduct = JSON.parse(data)
            if (dataProduct.items.length > 0) {
                layer.msg("加载完成", {
                    time: 1200
                });
                loadProductTable(dataProduct.items);
                $("#productList").bootstrapTable('append', dataProduct.items);
            } else {
                layer.msg("暂无数据", {
                    time: 1200
                })
            }
            productPage = dataProduct.page;
            if (dataProduct.items.length >= 10) {
                $('.productNext').fadeIn()
            } else {
                $('.productNext').hide()
            }
        });
    };
    $('.productNext').click(function() {
        loadProductNext(productPage)
    });

    function loadProductTable(data) {
        $('#productList').bootstrapTable({
            data: data,
            columns: [{
                field: 'img',
                title: '图片',
                align: 'center',
                valign: 'middle',
                formatter: imgproductFormatter,
            }, {
                field: 'EquipmentName',
                title: '设备名字',
                align: 'center',
                valign: 'middle',
                formatter: pdtName,
                events: viewPdt
            }, {
                field: 'Manufactor',
                title: '设备厂商',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'DateOfPurchase',
                title: '设备出厂日期',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'option',
                title: '操作',
                align: 'center',
                valign: 'middle',
                formatter: optionproductFormatter,
                events: optionproductEvents
            }]
        });

        function pdtName(e, value, row, index) {
            return '<span class="pdtName">' + value.EquipmentName + '</span>'
        }

        function imgproductFormatter(e, value, row, index) {
            var imgUrl3 = value.image.replace(/.png/, "min.png")
            return ['<img src="' + imgUrl3 + '" alt="">'].join('');
        };

        function optionproductFormatter(e, value, row, index) {
            return ['<a class="deleteProduct"  title="删除信息">', '<span id="deleteProduct">删除</span>', '</a>  ', '<a class="changeProduct"  title="修改">', '<span id="changeProduct">修改</span>', '</a>  ', ].join('');
        };
    };
    window.viewPdt = {
        'click .pdtName': function(e, value, row, index) {
            window.open("productDetails.html?id=" + row.Id + "")
        }
    }
    window.optionproductEvents = {
        'click .changeProduct': function(e, value, row, index) {
            $.post('' + EQD_space + '/ComSpace/ComSpaceEquipment/Get_ComSpaceEquipmentById.ashx', {
                "equipmentId": row.Id
            }, function(data) {
                var dataPro = JSON.parse(data)
                editor4.txt.html(dataPro.items.EquipmentMsg)
            });
            $('.productName').val(row.EquipmentName)
            $('.productCom').val(row.Manufactor)
            $('#productTime').val(row.DateOfPurchase)
            layer.open({
                type: 1,
                area: ['800px', '494px'],
                title: ['修改设备信息', 'font-size:18px;text-align: center;'],
                content: $(".addProductDiv"),
                btn: '确定',
                yes: function(index, layero) {
                    $.post('' + EQD_space + '/ComSpace/ComSpaceEquipment/Update_ComSpaceEquipment.ashx', {
                        "equipmentId": row.Id,
                        "companyId": dataInfo.companyId,
                        "userGuid": dataInfo.Guid,
                        "para": "EquipmentName='" + $('.productName').val() + "'," + "Manufactor='" + $('.productCom').val() + "'," + "DateOfPurchase='" + $('#productTime').val() + "'," + "EquipmentMsg='" + editor4.txt.html() + "'"
                    }, function(data) {
                        var dataChangeP = JSON.parse(data)
                        if (dataChangeP.status == 200) {
                            layer.msg('修改成功', {
                                time: 1000,
                            })
                            loadProduct(Number(productPage) - 1)
                        } else {
                            layer.msg(dataChangeP.msg, {
                                time: 1000,
                            })
                        }
                    });
                    layer.close(index)
                }
            })
            $('.imgLabel').hide()
        },
        'click .deleteProduct': function(e, value, row, index) {
            layer.open({
                type: 1,
                area: ['300px', '210px'],
                title: ['删除设备信息', 'font-size:18px;text-align: center;'],
                content: $(".deleteProductDiv"),
                btn: '确定',
                yes: function(index, layero) {
                    $.post('' + EQD_space + '/ComSpace/ComSpaceEquipment/Delete_ComSpaceEquipment.ashx', {
                        "equipmentId": row.Id,
                        "companyId": dataInfo.companyId,
                        "userGuid": dataInfo.Guid,
                    }, function(data) {
                        var dataDel = JSON.parse(data);
                        if (dataDel.status == 200) {
                            layer.msg('删除成功', {
                                time: 1000,
                            })
                            loadProduct(0)
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
    };
    $('#zuzhijigou').click(function() {
        $(this).addClass('active').siblings('li').removeClass('active')
        $('#zuzhijigouDiv').fadeIn().siblings('div').hide();
        getjigou()
    });
    // 获取组织机构
    function getjigou() {
        $.post('' + EQD_space + '/ComSpace/ComSpaceOrganization/Get_ComSpaceOrganization.ashx', {
            "companyId": dataInfo.companyId
        }, function(data) {
            var dataJigou = JSON.parse(data);
            $('#jigouList').bootstrapTable({
                data: dataJigou.items,
                columns: [{
                    field: 'img',
                    title: '机构图',
                    align: 'center',
                    valign: 'middle',
                    formatter: imgFormatter,
                }, {
                    field: 'describe',
                    title: '图片描述',
                    align: 'left',
                    valign: 'middle'
                }, {
                    field: 'option',
                    title: '操作',
                    align: 'center',
                    valign: 'middle',
                    formatter: optionFormatter,
                    events: optionEvents
                }]
            });
            $("#jigouList").bootstrapTable('load', dataJigou.items);

            function imgFormatter(e, value, row, index) {
                var imgUrl4 = value.ImageUrl.replace(/.png/, "min.png")
                return ['<img src="' + imgUrl4 + '" alt="">'].join('');
            };

            function optionFormatter(e, value, row, index) {
                return ['<a class="deleteJigou"  title="删除">', '<span id="deleteJigou">删除</span>', '</a>  ', '<a class="changeJigou"  title="修改">', '<span id="changeJigou">修改</span>', '</a>  ', ].join('');
            };
        });
    };
    window.optionEvents = {
        'click .deleteJigou': function(e, value, row, index) {
            layer.open({
                type: 1,
                area: ['300px', '210px'],
                title: ['删除组织机构图', 'font-size:18px;text-align: center;'],
                content: $(".deleteJigouDiv"),
                btn: '确定',
                yes: function(index, layero) {
                    layer.close(index)
                    $.post('' + EQD_space + '/ComSpace/ComSpaceOrganization/Delete_ComSpaceOrganization.ashx', {
                        "imageId": row.Id,
                        "companyId": dataInfo.companyId,
                        "userGuid": dataInfo.Guid
                    }, function(data) {
                        getjigou()
                    });
                }
            });
        },
        'click .changeJigou': function(e, value, row, index) {
            $('.imgList2').attr('src', row.ImageUrl);
            $('#sort2').val(row.sort)
            $('#imgDetails2').val(row.describe)
            layer.open({
                type: 1,
                area: ['800px', '450px'],
                title: ['修改组织机构图', 'font-size:18px;text-align: center;'],
                content: $(".changeJigoutuDiv"),
                btn: '确定',
                yes: function(index, layero) {
                    layer.close(index)
                    $.post('' + EQD_space + '/ComSpace/ComSpaceOrganization/Update_ComSpaceOrganization.ashx', {
                        "imageId": row.Id,
                        "companyId": dataInfo.companyId,
                        "userGuid": dataInfo.Guid,
                        "describe": $('#imgDetails2').val(),
                        "sort": $('#sort2').val()
                    }, function(data) {
                        getjigou()
                    });
                }
            });
        }
    };
    $('.addjigouBtn').click(function() {
        layer.open({
            type: 1,
            area: ['800px', '494px'],
            title: ['添加组织机构图', 'font-size:18px;text-align: center;'],
            content: $(".addjigouDiv"),
            btn: '确定',
            yes: function(index, layero) {
                if ($('#upload1').val() == "" || $('#sort').val() == "" || $('#imgDetails').val() == "") {
                    layer.msg('请完善信息', {
                        time: 1000,
                    });
                } else {
                    ajaxFileUpload()
                    layer.close(index)
                }
            }
        });
    });
    $("#pic1").click(function() {
        $("#upload1").click(); //隐藏了input:file样式后，点击头像就可以本地上传
        $("#upload1").on("change", function() {
            var objUrl1 = getObjectURL(this.files[0]); //获取图片的路径，该路径不是图片在本地的路径
            if (objUrl1) {
                $("#pic11Img").fadeIn()
                $("#pic11Img").attr("src", objUrl1); //将图片路径存入src中，显示出图片
                $("#pic1").val("重新选择")
            }
        });
    });
    // 选择人员
    $.post('' + EQD_space + '/Com/Com_Staff.ashx', {
        "companyId": dataInfo.companyId,
        "page": 0
    }, function(data) {
        var dataPer = JSON.parse(data);
        loadPerson(dataPer.items.listModel)
    });

    function loadPerson(data) {
        $('#teamchooseList').bootstrapTable({
            data: data,
            columns: [{
                field: 'uname',
                title: '姓名',
                align: 'center',
                valign: 'middle',
            }, {
                field: 'userPhone',
                title: '电话',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'departName',
                title: '部门',
                align: 'center',
                valign: 'middle',
            }, {
                field: 'postName',
                title: '职位',
                align: 'center',
                valign: 'middle',
            }]
        });
        $("#teamchooseList").bootstrapTable('load', data);
    }
    $('#searchInput').keydown(function() {
        if (event.keyCode === 13) {
            if ($('#searchInput').val().length == 0) {
                layer.msg('请输入搜索内容', {
                    time: 1000,
                });
            } else {
                $.post('' + EQD_space + '/Com/User_Search.ashx', {
                    "companyId": dataInfo.companyId,
                    "userGuid": dataInfo.Guid,
                    "para": $('#searchInput').val()
                }, function(data) {
                    var dataChoosed = JSON.parse(data);
                    loadPerson(dataChoosed.items)
                });
            }
        }
    });
    $("#teamchooseList").on('click-row.bs.table', function(e, row, $element) {
        var option = $.session.get('TCPD_set');
        if (option == 1) {
            $('#teamName').val(row.uname)
            $.session.remove('TCPD_set');
        } else if (option == 2) {
            $('#comContenter').val(row.uname)
            $('#cellPhone').val(row.userPhone)
            $.session.remove('TCPD_set');
        } else if (option == 3) {
            $('#honerName').val(row.uname)
            $.session.remove('TCPD_set');
        }
        layer.close(layer.index);
    })
    $('#teamName').click(function() {
        $.session.set('TCPD_set', '1');
        layer.open({
            type: 1,
            area: ['700px', '454px'],
            title: ['选择人员', 'font-size:18px;text-align: center;'],
            content: $(".chooseTeam"),
        });
    });
    $('#teamIntr').click(function() {
        $(this).addClass('active').siblings('li').removeClass('active')
        $('#teamIntrDiv').fadeIn().siblings('div').hide();
        getTeam()
    });
    // 获取团队成员
    function getTeam() {
        $.post('' + EQD_space + '/ComSpace/ComSpaceTeam/Get_ComSpaceTeam.ashx', {
            "companyId": dataInfo.companyId
        }, function(data) {
            var dataTeam = JSON.parse(data);
            $('#teamList').bootstrapTable({
                data: dataTeam.items,
                columns: [{
                    field: 'img',
                    title: '头像',
                    align: 'center',
                    valign: 'middle',
                    formatter: img2Formatter,
                }, {
                    field: 'userName',
                    title: '姓名',
                    align: 'center',
                    valign: 'middle',
                }, {
                    field: 'Post',
                    title: '职位描述',
                    align: 'center',
                    valign: 'middle'
                }, {
                    field: 'Msg',
                    title: '个人简介',
                    align: 'center',
                    valign: 'middle'
                }, {
                    field: 'option',
                    title: '操作',
                    align: 'center',
                    valign: 'middle',
                    width: '170px',
                    formatter: optionTeamFormatter,
                    events: optionTeamEvents
                }]
            });
            $("#teamList").bootstrapTable('load', dataTeam.items);

            function img2Formatter(e, value, row, index) {
                var imgUrl5 = value.HeadImage.replace(/.png/, "min.png")
                return ['<img src="' + imgUrl5 + '" alt="">'].join('');
            };

            function optionTeamFormatter(e, value, row, index) {
                return ['<a class="deleteTeam"  title="删除">', '<span id="deleteTeam">删除</span>', '</a>  ', '<a class="changeTeam"  title="修改头像">', '<span id="changeTeam">修改头像</span>', '</a>  ', '<a class="changeInfo"  title="修改信息">', '<span id="changeInfo">修改信息</span>', '</a>  ', ].join('');
            };
        });
    };
    // 成员操作
    window.optionTeamEvents = {
        'click .deleteTeam': function(e, value, row, index) {
            layer.open({
                type: 1,
                area: ['300px', '210px'],
                title: ['删除成员', 'font-size:18px;text-align: center;'],
                content: $(".deleteTeamDiv"),
                btn: '确定',
                yes: function(index, layero) {
                    $.post('' + EQD_space + '/ComSpace/ComSpaceTeam/Delete_ComSpaceTeam.ashx', {
                        "teamId": row.Id,
                        "companyId": dataInfo.companyId,
                        "userGuid": dataInfo.Guid
                    }, function(data) {
                        getTeam()
                    });
                    layer.close(index)
                }
            });
        },
        'click .changeTeam': function(e, value, row, index) {
            $('.oldImg').attr('src', row.HeadImage);
            layer.open({
                type: 1,
                area: ['600px', '700px'],
                title: ['修改成员头像', 'font-size:18px;text-align: center;'],
                content: $(".changeImgDiv"),
                btn: '确定',
                yes: function(index, layero) {
                    ajaxFileUploadImg()
                    layer.close(index)
                }
            })
            // 更换头像
            function ajaxFileUploadImg() {
                var Pformdata = new FormData();
                var img3val = $("#uploadChange")[0].files[0]
                Pformdata.append('image', img3val);
                Pformdata.append('teamId', row.Id);
                Pformdata.append('userGuid', dataInfo.Guid);
                Pformdata.append('companyId', dataInfo.companyId);
                $.ajax({
                    type: 'post',
                    url: '' + EQD_space + '/ComSpace/ComSpaceTeam/Update_ComSpaceTeamImage.ashx',
                    data: Pformdata,
                    cache: false,
                    processData: false, // 不处理发送的数据，因为data值是Formdata对象，不需要对数据做处理
                    contentType: false, // 不设置Content-type请求头
                    success: function(data) {
                        var data2 = JSON.parse(data)
                        if (data2.status == 200) {
                            layer.msg('修改成功', {
                                time: 1000,
                            });
                            $('#uploadChange').val("")
                            getTeam()
                        } else {
                            layer.msg(data2.msg, {
                                time: 1000,
                            });
                        }
                    },
                    error: function() {}
                });
            }
        },
        'click .changeInfo': function(e, value, row, index) {
            $('.teamHead').hide()
            $('#teamName').val(row.userName)
            $('#personMsg').val(row.Msg)
            $('#postMsg').val(row.Post)
            layer.open({
                type: 1,
                area: ['800px', '494px'],
                title: ['修改团队成员', 'font-size:18px;text-align: center;'],
                content: $(".addteamDiv"),
                btn: '确定',
                yes: function(index, layero) {
                    $.post('' + EQD_space + '/ComSpace/ComSpaceTeam/Update_ComSpaceTeam.ashx', {
                        "userGuid": dataInfo.Guid,
                        "userName": $('#teamName').val(),
                        "companyId": dataInfo.companyId,
                        "PostMsg": $('#postMsg').val(),
                        "Msg": $('#personMsg').val(),
                        "teamId": row.Id
                    }, function(data) {
                        var dataChenaged = JSON.parse(data);
                        if (dataChenaged.status == 200) {
                            getTeam()
                        }
                    });
                    layer.close(index)
                }
            })
        }
    };
    $('#picChange').click(function() {
        $("#uploadChange").click(); //隐藏了input:file样式后，点击头像就可以本地上传
        $("#uploadChange").on("change", function() {
            var objUrl3 = getObjectURL(this.files[0]); //获取图片的路径，该路径不是图片在本地的路径
            if (objUrl3) {
                $(".oldImg").removeAttr('src')
                $(".oldImg").attr("src", objUrl3); //将图片路径存入src中，显示出图片
                $("#picChange").val("重新选择")
            }
        });
    });
    $('.addpersonuBtn').click(function() {
        $('.teamHead').fadeIn()
        $('#teamName').val("")
        $('#postMsg').val("")
        $('#personMsg').val("")
        layer.open({
            type: 1,
            area: ['800px', '494px'],
            title: ['添加团队成员', 'font-size:18px;text-align: center;'],
            content: $(".addteamDiv"),
            btn: '确定',
            yes: function(index, layero) {
                if ($('#upload2').val() == "" || $('#teamName').val() == "" || $('#postMsg').val() == "" || $('#personMsg').val() == "") {
                    layer.msg('请完善信息', {
                        time: 1000,
                    });
                } else {
                    ajaxFileUpload2()
                    layer.close(index)
                }
            }
        });
    });
    $("#pic2").click(function() {
        $("#upload2").click(); //隐藏了input:file样式后，点击头像就可以本地上传
        $("#upload2").on("change", function() {
            var objUrl2 = getObjectURL(this.files[0]); //获取图片的路径，该路径不是图片在本地的路径
            if (objUrl2) {
                $("#pic2Img").fadeIn()
                $("#pic2Img").attr("src", objUrl2); //将图片路径存入src中，显示出图片
                $("#pic2").val("重新选择")
            }
        });
    });
    var dataComInfo;
    $('#contentUs').click(function() {
        $(this).addClass('active').siblings('li').removeClass('active')
        $('#contentUsDiv').fadeIn().siblings('div').hide();
        loadconInfo();
        $.post('' + EQD_space + '/ComSpace/ComSpace_Contact/Get_ComSpaceContact.ashx', {
            "companyId": dataInfo.companyId
        }, function(data) {
            data = JSON.parse(data);
            address = data.items.Address;
            var map = new BMap.Map("loca"); // 创建地图实例  
            var localSearch = new BMap.LocalSearch(map); //创建检索实例
            localSearch.setSearchCompleteCallback(function(searchResult) {
                map.clearOverlays(); //清空原来的标注
                var poi = searchResult.getPoi(0);
                var point = new BMap.Point(poi.point.lng, poi.point.lat);
                map.centerAndZoom(point, 18);
                map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
                var opts = {
                    width: 260, // 信息窗口宽度    
                    height: 80, // 信息窗口高度    
                    title: "" // 信息窗口标题   
                }
                var infoWindow = new BMap.InfoWindow("地址：" + address, opts); // 创建信息窗口对象    
                map.openInfoWindow(infoWindow, point); // 打开信息窗口
                var myIcon = new BMap.Icon("img/marker2.png", new BMap.Size(36, 94));
                var marker = new BMap.Marker(point, {
                    icon: myIcon
                }); // 创建标注
                map.addOverlay(marker);
                marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
                marker.addEventListener("click", getAttr);

                function getAttr() {
                    map.openInfoWindow(infoWindow, point); // 打开信息窗口
                }
                map.addTileLayer(new BMap.PanoramaCoverageLayer());
                var stCtrl = new BMap.PanoramaControl(); //构造全景控件
                stCtrl.setOffset(new BMap.Size(20, 20));
                map.addControl(stCtrl); //添加全景控件
                var bottom_left_control = new BMap.ScaleControl({
                    anchor: BMAP_ANCHOR_BOTTOM_LEFT
                }); // 左下角，添加比例尺
                map.addControl(bottom_left_control);
            });
            localSearch.search(address);
        });
    });

    function loadconInfo() {
        $.post('' + EQD_space + '/ComSpace/ComSpace_Contact/Get_ComSpaceContact.ashx', {
            "companyId": dataInfo.companyId
        }, function(data) {
            dataComInfo = JSON.parse(data);
            if (dataComInfo.items == null) {
                $('.addContentArea').fadeIn()
                $('.contentDetails').hide()
            } else {
                $('.addContentArea').hide()
                $('.contentDetails').fadeIn()
                $('.contentPerson').text(dataComInfo.items.Contacts)
                $('.cellphone').text(dataComInfo.items.ContactNumber)
                $('.phone').text(dataComInfo.items.SeatMachine)
                $('.fax').text(dataComInfo.items.Fax)
                $('.email').text(dataComInfo.items.Email)
                $('.adress').text(dataComInfo.items.Address)
            }
        });
    };
    $('.addContentBtn').click(function() {
        layer.open({
            type: 1,
            area: ['700px', '600px'],
            title: ['添加联系方式', 'font-size:18px;text-align: center;'],
            content: $(".addContentDiv"),
            btn: '确定',
            yes: function(index, layero) {
                var addressAll = $('#s_province').val() + $('#s_city').val() + $('#s_county').val() + $('#addressDet').val();
                $.post('' + EQD_space + '/ComSpace/ComSpace_Contact/Add_ComSpaceContact.ashx', {
                    "userGuid": dataInfo.Guid,
                    "companyId": dataInfo.companyId,
                    "Contacts": $('#comContenter').val(),
                    "ContactNumber": $('#cellPhone').val(),
                    "SeatMachine": $('#phone').val(),
                    "Email": $('#email').val(),
                    "Address": addressAll,
                }, function(data) {
                    var dataAdd = JSON.parse(data)
                    if (dataAdd.status == 200) {
                        $('.addContentArea').hide()
                        $('.contentDetails').fadeIn()
                        loadconInfo()
                    }
                });
                layer.close(index)
            }
        });
    });
    $('.changeContentBtn').click(function() {
        $('.oldAddressArea').fadeIn()
        $('.oldAddress').val(dataComInfo.items.Address)
        $('#comContenter').val(dataComInfo.items.Contacts);
        $('#cellPhone').val(dataComInfo.items.ContactNumber);
        $('#phone').val(dataComInfo.items.SeatMachine);
        $('#email').val(dataComInfo.items.Email)
        layer.open({
            type: 1,
            area: ['700px', '370px'],
            title: ['修改联系方式', 'font-size:18px;text-align: center;'],
            content: $(".addContentDiv"),
            btn: '确定',
            yes: function(index, layero) {
                var addressAll2
                if ($('#s_province').val() == "省份") {
                    addressAll2 = dataComInfo.items.Address
                } else {
                    addressAll2 = $('#s_province').val() + $('#s_city').val() + $('#s_county').val() + $('#addressDet').val();
                }
                $.post('' + EQD_space + '/ComSpace/ComSpace_Contact/Update_ComSpaceContact.ashx', {
                    "userGuid": dataInfo.Guid,
                    "companyId": dataInfo.companyId,
                    "contactId": dataComInfo.items.Id,
                    "para": "Contacts='" + $('#comContenter').val() + "'," + "ContactNumber='" + $('#cellPhone').val() + "'," + "SeatMachine='" + $('#phone').val() + "'," + "Email='" + $('#email').val() + "'," + "Address='" + addressAll2 + "'"
                }, function(data) {
                    loadconInfo()
                });
                layer.close(index)
            }
        })
    });
    $('#comContenter').click(function() {
        $.session.set('TCPD_set', '2');
        layer.open({
            type: 1,
            area: ['700px', '454px'],
            title: ['选择人员', 'font-size:18px;text-align: center;'],
            content: $(".chooseTeam"),
        });
    });
    // 留言
    loadMessageFirst(0);
    $('.comMessage').click(function() {
        type = 2;
        $('.comMessageDiv').fadeIn().siblings('div').hide();
        $(this).addClass('active2').siblings('p').removeClass('active2');
        setTimeout(function() {
            var oDiv4 = document.getElementById('comMessageDiv');
            if (oDiv4.offsetHeight < window.innerHeight) {
                $('.Link').addClass('fixed')
            } else {
                $('.Link').removeClass('fixed')
            }
        }, 300)
    });
    //加载留言
    var messagePage;

    function loadMessageFirst(page) {
        $.post('' + EQD_space + '/ComSpace/ComSpaceLeaveMessage/Get_ComSpaceLeaveMessage.ashx', {
            "companyId": dataInfo.companyId,
            "page": page
        }, function(data) {
            var dataMessage = JSON.parse(data);
            loadMessageTable(dataMessage.items);
            $("#messageList").bootstrapTable('load', dataMessage.items);
            messagePage = dataMessage.page;
            if (dataMessage.items.length > 5) {
                $('.messageNext').fadeIn()
            } else {
                $('.messageNext').hide()
            }
        });
    };

    function loadMessageNext(page) {
        $.post('' + EQD_space + '/ComSpace/ComSpaceLeaveMessage/Get_ComSpaceLeaveMessage.ashx', {
            "companyId": dataInfo.companyId,
            "page": page
        }, function(data) {
            var dataMessage = JSON.parse(data);
            if (dataMessage.items.length > 0) {
                layer.msg("加载完成", {
                    time: 1200
                })
                loadMessageTable(dataMessage.items);
                $("#messageList").bootstrapTable('append', dataMessage.items);
            } else {
                layer.msg("已无更多", {
                    time: 1200
                })
            }
            messagePage = dataMessage.page;
            if (dataMessage.items.length > 5) {
                $('.messageNext').fadeIn()
            } else {
                $('.messageNext').hide()
            }
        });
    };
    $('.messageNext').click(function() {
        loadMessageNext(messagePage)
    });
    // 留言表格
    function loadMessageTable(data) {
        $('#messageList').bootstrapTable({
            data: data,
            // classes:'table-no-bordered',
            columns: [{
                field: 'iphoto',
                align: 'center',
                valign: 'middle',
                formatter: imgMessageFormatter,
                events: optionMessageEvents
            }, ]
        });

        function imgMessageFormatter(e, value, row, index) {
            var answerVal, proName;
            var time1 = value.createTime.split("T")[0];
            if (value.childList.length == 0) {
                answerVal = ""
            } else {
                answerVal = value.childList[0].Message
            }
            if (value.objectId == 0) {
                proName = ''
            } else {
                ''
                proName = '<div class="comeForm">该留言来自产品<a href="product2.html?id=' + value.objectId + '" target="_blank" title="点击查看详情">《' + value.ProductName + '》</a>版块</div>'
            }
            return ['<div><div class="personInfo clearfix"><img src="' + value.iphoto + '" alt="点击访问他的创客空间"  class="pull-left photo"><p class="personName pull-left" title="点击访问他的创客空间">' + value.staffName + '</p><br /><p class="pull-left"><span class="lyTime">' + time1 + '</span><span>' + value.departName + '</span>' + "  " + '<span>' + value.postName + '</span></p></div><div class="content">' + value.Message + '</div><p><a class="deleteMessage"  title="删除"><span class="glyphicon glyphicon-trash"></span><span id="deleteMessage">删除</span></a><a class="answerMessage"  title="回复"><span class="glyphicon glyphicon-comment"></span><span id="answerMessage">回复</span></a></p><div class="answercontent">' + answerVal + '</div>' + proName + '</div>'].join('');
        };
    }
    window.optionMessageEvents = {
        'click .deleteMessage': function(e, value, row, index) {
            layer.open({
                type: 1,
                area: ['350px', '210px'],
                title: ['删除留言', 'font-size:18px;text-align: center;'],
                content: $(".deleteMessageDiv"),
                btn: '确定',
                yes: function(index, layero) {
                    layer.close(index)
                    $.post('' + EQD_space + '/ComSpace/ComSpaceLeaveMessage/Delete_ComSpaceLeaveMessage.ashx', {
                        "msgId": row.Id,
                        "companyId": dataInfo.companyId,
                        "userGuid": dataInfo.Guid,
                        "type": 1
                    }, function(data) {
                        loadMessageFirst(0)
                    });
                }
            });
        },
        'click .answerMessage': function(e, value, row, index) {
            layer.open({
                type: 1,
                area: ['400px', '180px'],
                title: ['回复留言', 'font-size:18px;text-align: center;'],
                content: $(".answerMessageDiv"),
                btn: '发送',
                yes: function(index, layero) {
                    $.post('' + EQD_space + '/ComSpace/ComSpaceLeaveMessage/Add_ComSpaceLeaveMessage.ashx', {
                        "companyId": row.companyId,
                        "userGuid": dataInfo.Guid,
                        "userCompanyId": row.userCompanyId,
                        "message": $('#messageVal').val(),
                        "parentId": row.Id,
                        "parentUserGuid": row.parentUserGuid,
                        "firstCommentId": row.Id
                    }, function(data) {
                        var dataAnswer = JSON.parse(data)
                        if (dataAnswer.status == 200) {
                            loadMessageFirst(0)
                            layer.closeAll()
                        }
                    });
                }
            })
        },
        'click .photo': function(e, value, row, index) {
            sessionStorage.removeItem("GHY_makerGuid");
            sessionStorage.setItem("GHY_makerGuid", row.creater);
            window.open("../createrSpace/html/visitCreaterInfo.html")
        }
    };
    // 访客
    loadVisitorFirst(0)
    $('.comVisitor').click(function() {
        type = 3;
        $('.comVisitorDiv').fadeIn().siblings('div').hide();
        $(this).addClass('active2').siblings('p').removeClass('active2');
        setTimeout(function() {
            var oDiv5 = document.getElementById('comVisitorDiv');
            if (oDiv5.offsetHeight < window.innerHeight) {
                $('.Link').addClass('fixed')
            } else {
                $('.Link').removeClass('fixed')
            }
        }, 300)
    });
    $('#allVisitor').click(function() {
        $(this).addClass('active').siblings('li').removeClass('active')
        $('.allVisitorDiv').fadeIn().siblings('div').hide();
        loadVisitorFirst(0)
    });
    // 加载全部访客
    var visitorPage;
    var arr_visitor = [];

    function loadVisitorFirst(page) {
        arr_visitor = []
        $.post('' + EQD_space + '/ComSpace/ComSpaceVisitor/Get_ComSpaceVisitor.ashx', {
            "companyId": dataInfo.companyId,
            "page": page
        }, function(data) {
            var dataVisitor = JSON.parse(data);
            for (var i = 0; i < dataVisitor.items.length; i++) {
                arr_visitor.push(dataVisitor.items[i])
            }
            if (arr_visitor.length > 0) {
                loadVisitorTable(arr_visitor);
                $("#visitorList").bootstrapTable('load', arr_visitor);
            } else {}
            visitorPage = dataVisitor.page;
            if (dataVisitor.items.length > 9) {
                $('.visitorLoadNext').fadeIn()
            } else {
                $('.visitorLoadNext').hide()
            }
        });
    };

    function loadVisitorNext(page) {
        arr_visitor = []
        $.post('' + EQD_space + '/ComSpace/ComSpaceVisitor/Get_ComSpaceVisitor.ashx', {
            "companyId": dataInfo.companyId,
            "page": page
        }, function(data) {
            var dataVisitor = JSON.parse(data);
            for (var i = 0; i < dataVisitor.items.length; i++) {
                arr_visitor.push(dataVisitor.items[i])
            }
            if (arr_visitor.length > 0) {
                layer.msg("加载完成", {
                    time: 1200
                });
                loadVisitorTable(arr_visitor);
                $("#visitorList").bootstrapTable('append', arr_visitor);
            } else {
                layer.msg("已无更多", {
                    time: 1200
                })
            }
            visitorPage = dataVisitor.page;
            if (dataVisitor.items.length > 9) {
                $('.visitorLoadNext').fadeIn()
            } else {
                $('.visitorLoadNext').hide()
            }
        });
    };
    $('.visitorLoadNext').click(function() {
        loadVisitorNext(visitorPage)
    });
    // 访客全部表格
    function loadVisitorTable(data) {
        $('#visitorList').bootstrapTable({
            data: data,
            columns: [{
                field: 'iphoto',
                align: 'center',
                valign: 'middle',
                formatter: imgVisotorFormatter,
                events: optionVisitorEvents
            }]
        });

        function imgVisotorFormatter(e, value, row, index) {
            var time1 = value.createTime.split("T")[0];
            var time2 = value.createTime.split("T")[1];
            var time3 = time2.split(".")[0];
            var time4 = time1 + "  " + time3
            return ['<div> <div class="content"><p>' + time4 + '</p></div>  <div class="personInfo clearfix"><img src="' + EQD_space + '' + value.iphoto + '" alt="" / class="pull-left photo"><p class="personName pull-left">' + value.staffName + '</p><br /><p class="pull-left"><span>' + value.departName + '</span>  <span>' + value.postName + '</span><span>' + value.useroption + '</span></p></div></div>'].join('');
        };
    };
    window.optionVisitorEvents = {
        'click .photo': function(e, value, row, index) {
            sessionStorage.removeItem("GHY_makerGuid");
            sessionStorage.setItem("GHY_makerGuid", row.creater);
            window.open("../createrSpace/html/visitCreaterInfo.html")
        }
    }
    $('#singleVisitor').click(function() {
        $(this).addClass('active').siblings('li').removeClass('active')
        $('.singleVisitorDiv').fadeIn().siblings('div').hide();
    });
    var chooseModelVal;
    $('#chooseModel').change(function() {
        chooseModelVal = $(this).val()
        loadSingleVisitor(chooseModelVal, 0)
    });
    // 加载单个模块访客
    var visitorSinglePage

    function loadSingleVisitor(model, page) {
        $.post('' + EQD_space + '/ComSpace/ComSpaceVisitor/Get_ComSpaceModularVisitor.ashx', {
            "companyId": dataInfo.companyId,
            "userGuid": dataInfo.Guid,
            "page": page,
            "modularName": model
        }, function(data) {
            var dataSingle = JSON.parse(data)
            loadVisitor2Table(dataSingle.items)
            visitorSinglePage = dataSingle.page
            if (visitorSinglePage <= 1) {
                $('.visitorSinglePrve').hide()
                if (dataSingle.items.length > 9) {
                    $('.visitorSingleNext').fadeIn()
                } else {
                    $('.visitorSinglePrve').hide()
                    $('.visitorSingleNext').hide()
                }
            } else {
                if (dataSingle.items.length > 9) {
                    $('.visitorSingleNext').fadeIn()
                    $('.visitorSinglePrve').fadeIn()
                } else {
                    $('.visitorSingleNext').hide()
                    $('.visitorSinglePrve').fadeIn()
                }
            }
        });
    };
    $('.visitorSingleNext').click(function() {
        loadSingleVisitor(chooseModelVal, Number(visitorSinglePage))
    });
    $('.visitorSinglePrve').click(function() {
        loadSingleVisitor(chooseModelVal, Number(visitorSinglePage) - 2)
    });
    // 访客单个模块表格
    function loadVisitor2Table(data) {
        $('#visitorSingleList').bootstrapTable({
            data: data,
            columns: [{
                field: 'iphoto',
                title: '头像',
                align: 'center',
                valign: 'middle',
                formatter: imgVisotorSingleFormatter,
            }, {
                field: 'staffName',
                title: '姓名',
                align: 'center',
                valign: 'middle',
            }, {
                field: 'mudularName',
                title: '浏览版块',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'com_name',
                title: '所在公司',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'createTime',
                title: '访问时间',
                align: 'center',
                valign: 'middle',
                formatter: timeVisotorSingleFormatter,
            }, {
                field: 'option',
                title: '操作',
                align: 'center',
                valign: 'middle',
                formatter: optionVisitorSingleFormatter,
            }]
        });
        $("#visitorSingleList").bootstrapTable('load', data);

        function imgVisotorSingleFormatter(e, value, row, index) {
            return ['<img src="' + EQD_space + '' + value.iphoto + '" alt="">'].join('');
        };

        function timeVisotorSingleFormatter(e, value, row, index) {
            var time1 = value.createTime.split("T")[0];
            var time2 = value.createTime.split("T")[1];
            var time3 = time2.split(".")[0];
            var time4 = time1 + " " + time3
            return [
                time4
            ].join('');
        };

        function optionVisitorSingleFormatter(e, value, row, index) {
            return ['<a class="deleteVisitor"  title="删除">', '<span id="deleteVisitor"><img src="img/2del.png" />删除</span>', '</a>  ', ].join('');
        };
    };
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
    // 组织机构图
    function ajaxFileUpload() {
        var Pformdata = new FormData();
        var img1val = $("#upload1")[0].files[0]
        Pformdata.append('image', img1val);
        Pformdata.append('describe', $('#imgDetails').val());
        Pformdata.append('sort', $('#sort').val());
        Pformdata.append('userGuid', dataInfo.Guid);
        Pformdata.append('companyId', dataInfo.companyId);
        $.ajax({
            type: 'post',
            url: '' + EQD_space + '/ComSpace/ComSpaceOrganization/Add_ComSpaceOrganization.ashx',
            data: Pformdata,
            cache: false,
            processData: false, // 不处理发送的数据，因为data值是Formdata对象，不需要对数据做处理
            contentType: false, // 不设置Content-type请求头
            success: function(data) {
                var data2 = JSON.parse(data)
                if (data2.status == 200) {
                    layer.msg('上传成功', {
                        time: 1000,
                    });
                    getjigou()
                    $('#sort').val("");
                    $('#imgDetails').val("")
                    $('#upload1').val("")
                    $('#pic1Img').removeAttr('src')
                } else {
                    layer.msg(data2.msg, {
                        time: 1000,
                    });
                }
            },
            error: function() {}
        });
    };
    // 团队成员
    function ajaxFileUpload2() {
        var Pformdata = new FormData();
        var img2val = $("#upload2")[0].files[0]
        Pformdata.append('image', img2val);
        Pformdata.append('userName', $('#teamName').val());
        Pformdata.append('PostMsg', $('#postMsg').val());
        Pformdata.append('Msg', $('#personMsg').val());
        Pformdata.append('userGuid', dataInfo.Guid);
        Pformdata.append('companyId', dataInfo.companyId);
        $.ajax({
            type: 'post',
            url: '' + EQD_space + '/ComSpace/ComSpaceTeam/Add_ComSpaceTeam.ashx',
            data: Pformdata,
            cache: false,
            processData: false, // 不处理发送的数据，因为data值是Formdata对象，不需要对数据做处理
            contentType: false, // 不设置Content-type请求头
            success: function(data) {
                var data2 = JSON.parse(data)
                if (data2.status == 200) {
                    layer.msg('上传成功', {
                        time: 1000,
                    });
                    $('#personMsg').val("");
                    $('#postMsg').val("")
                    $('#teamName').val("")
                    $('#upload2').val("")
                    $('#pic2Img').removeAttr('src')
                    getTeam()
                } else {
                    layer.msg(data2.msg, {
                        time: 1000,
                    });
                }
            },
            error: function() {}
        });
    };
    // 优秀员工
    function ajaxFileUploadHoner() {
        var Pformdata = new FormData();
        var img4val = $("#uploadHoner")[0].files[0]
        Pformdata.append('image', img4val);
        Pformdata.append('userName', $('#honerName').val());
        Pformdata.append('PostMsg', $('#postHonerMsg').val());
        Pformdata.append('Msg', $('#personHonerMsg').val());
        Pformdata.append('userGuid', dataInfo.Guid);
        Pformdata.append('companyId', dataInfo.companyId);
        $.ajax({
            type: 'post',
            url: '' + EQD_space + '/ComSpace/ComSpaceGoodStaff/Add_ComSpaceGoodStaff.ashx',
            data: Pformdata,
            cache: false,
            processData: false, // 不处理发送的数据，因为data值是Formdata对象，不需要对数据做处理
            contentType: false, // 不设置Content-type请求头
            success: function(data) {
                var data2 = JSON.parse(data)
                if (data2.status == 200) {
                    layer.msg('上传成功', {
                        time: 1000,
                    });
                    $('#personHonerMsg').val("");
                    $('#postHonerMsg').val("")
                    $('#honerName').val("")
                    $('#uploadHoner').val("")
                    $('#picHonerImg').removeAttr('src')
                    loadPerfectWorker()
                } else {
                    layer.msg(data2.msg, {
                        time: 1000,
                    });
                }
            },
            error: function() {}
        });
    };
    // 核心价值
    function ajaxFileUploadCoreValue() {
        var Pformdata = new FormData();
        var imgCoreval = $("#uploadimgCore")[0].files[0]
        Pformdata.append('image', imgCoreval);
        Pformdata.append('describe', $('#coreDescribe').val());
        Pformdata.append('title', $('.coreTitle').val());
        Pformdata.append('userGuid', dataInfo.Guid);
        Pformdata.append('companyId', dataInfo.companyId);
        $.ajax({
            type: 'post',
            url: '' + EQD_space + '/ComSpace/ComSpaceCoreValues/Add_ComSpaceCoreValues.ashx',
            data: Pformdata,
            cache: false,
            processData: false, // 不处理发送的数据，因为data值是Formdata对象，不需要对数据做处理
            contentType: false, // 不设置Content-type请求头
            success: function(data) {
                var data2 = JSON.parse(data)
                if (data2.status == 200) {
                    layer.msg('上传成功', {
                        time: 1000,
                    });
                    loadcoreValue()
                    $('.coreTitle').val("");
                    $('#coreDescribe').val("")
                    $('#uploadimgCore').val("")
                    $('#pic2imgCore').removeAttr('src')
                } else {
                    layer.msg(data2.msg, {
                        time: 1000,
                    });
                }
            },
            error: function() {}
        });
    };
    // 公司活动
    var dataActivityPage;
    var actType = 0;
    $('.comActivity').click(function() {
        $(this).addClass('active2').siblings('p').removeClass('active2');
        $('.comActivityDiv').fadeIn().siblings('div').hide()
        lookactivityFirst(actType, 0);
        setTimeout(function() {
            var oDiv8 = document.getElementById('comActivityDiv');
            if (oDiv8.offsetHeight < window.innerHeight) {
                $('.Link').addClass('fixed')
            } else {
                $('.Link').removeClass('fixed')
            }
        }, 300)
    });
    // 发布活动
    $('.addActivity').click(function() {
        window.open("addActicity.html")
    });

    function lookactivityFirst(type, page) {
        $.post('' + EQD_space + '/Activity/Get_ActiveByCompany.ashx', {
            "companyId": dataInfo.companyId,
            "type": type,
            "page": page
        }, function(data) {
            var datalookactivity = JSON.parse(data);
            loadActivityTable(datalookactivity.items);
            $("#activityList").bootstrapTable('load', datalookactivity.items);
            dataActivityPage = datalookactivity.page;
            if (datalookactivity.items.length >= 9) {
                $('.activityLoadNext').fadeIn()
            } else {
                $('.activityLoadNext').hide()
            }
            if (datalookactivity.items.length >= 9) {
                $('.activityedLoadNext').fadeIn()
            } else {
                $('.activityedLoadNext').hide()
            }
        });
    };

    function lookactivityNext(type, page) {
        $.post('' + EQD_space + '/Activity/Get_ActiveByCompany.ashx', {
            "companyId": dataInfo.companyId,
            "type": type,
            "page": page
        }, function(data) {
            var datalookactivity = JSON.parse(data);
            if (datalookactivity.items.length > 0) {
                layer.msg("加载完成", {
                    time: 1200
                });
                loadActivityTable(datalookactivity.items);
                $("#activityList").bootstrapTable('append', datalookactivity.items);
            } else {
                layer.msg("暂无数据", {
                    time: 1200
                })
            }
            dataActivityPage = datalookactivity.page;
            if (datalookactivity.items.length > 9) {
                $('.activityLoadNext').fadeIn()
            } else {
                $('.activityLoadNext').hide()
            }
            if (datalookactivity.items.length > 9) {
                $('.activityedLoadNext').fadeIn()
            } else {
                $('.activityedLoadNext').hide()
            }
        });
    };
    $('.activityLoadNext').click(function() {
        lookactivityNext(0, Number(dataActivityPage))
    });
    $('.activityedLoadNext').click(function() {
        lookactivityNext(1, Number(dataActivityPage))
    });
    $('#approvaling').click(function() {
        $(this).addClass('active').siblings('li').removeClass('active');
        $('.approvalingArea').fadeIn().siblings('.approvaledArea').hide()
        lookactivityFirst(0, 0)
        actType = 0;
    });
    $('#approvaled').click(function() {
        $(this).addClass('active').siblings('li').removeClass('active')
        $('.approvaledArea').fadeIn().siblings('.approvalingArea').hide()
        lookactivityFirst(1, 0)
        actType = 1;
    });

    function loadActivityTable(data) {
        $('#activityList').bootstrapTable({
            data: data,
            columns: [{
                field: 'activeImg',
                title: '活动封面',
                align: 'center',
                valign: 'middle',
                formatter: imgFormatter
            }, {
                field: 'activeTitle',
                title: '主题',
                align: 'center',
                valign: 'middle',
                formatter: actName,
                events: viewAct
            }, {
                field: 'activeCity',
                title: '举办地',
                align: 'center',
                valign: 'middle',
            }, {
                field: 'activer',
                title: '负责人',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'option',
                title: '操作',
                align: 'center',
                valign: 'middle',
                formatter: optionActivityFormatter,
                events: optionActivityEvents
            }]
        });

        function actName(e, value, row, index) {
            return '<span class="viewAct">' + value.activeTitle + '</span>'
        }

        function imgFormatter(e, value, row, index) {
            var imgUrl = value.activeImg.replace(/.png/, "min.png")
            return ['<img src="' + imgUrl + '" alt="">'].join('');
        };

        function optionActivityFormatter(e, value, row, index) {
            return ['<a class="changeActivity"  title="修改活动">', '<span id="changeActivity">修改活动</span>', '</a>  ', ].join('');
        };
    }
    window.viewAct = {
        'click .viewAct': function(e, value, row, index) {
            window.open("acticityDetails.html?id=" + row.Id + "")
        }
    }
    window.optionActivityEvents = {
        'click .changeActivity': function(e, value, row, index) {
            window.open("changeActivity.html?id=" + row.Id + "")
        },
    };
    $(".quitOut").on("click", function() {
        localStorage.removeItem("GHY_login");
        window.location.href = "innerLogin.html?href=" + href
    });
    // 后台中心
    $(".htzx").on("click",function(){
        window.open("http://www.eqidd.com/html/M_index.html")
    })
})