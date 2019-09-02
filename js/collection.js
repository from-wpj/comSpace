$(document).ready(function() {
    var href = location.href;
    var dataC = localStorage.getItem("GHY_login");
    var dataInfo = JSON.parse(dataC);
    var demandPage;
    $('.comCollection').click(function() {
        $('.comCollcctionDiv').fadeIn().siblings('div').hide();
        $(this).addClass('active2').siblings('p').removeClass('active2');
        setTimeout(function() {
            var oDiv7 = document.getElementById('comCollcctionDiv');
            if (oDiv7.offsetHeight < window.innerHeight) {
                $('.Link').addClass('fixed')
            } else {
                $('.Link').removeClass('fixed')
            }
        }, 300)
    });
    // 收藏的公司
    lookDemandFirst(0);
    $('#collectionCom').click(function() {
        $(this).addClass('active').siblings('li').removeClass('active');
        $('.collectionComDiv').fadeIn().siblings('div').hide()
        lookDemandFirst(0);
        $(".cltCom").attr("src", "img/2sc.png");
        $(".cltPrt").attr("src", "img/2sced.png");
    });

    function lookDemandFirst(page) {
        setTimeout(function() {
            $.post('' + EQD_space + '/ComSpace/ComSpace_Collection/Get_CompanyCollection.ashx', {
                "companyId": dataInfo.companyId,
                "page": page
            }, function(data) {
                var dataDemand = JSON.parse(data);
                demandPage = dataDemand.page;
                if (dataDemand.items.length > 0) {
                    loadcollcetionTable(dataDemand.items);
                    $("#collectionComTable").bootstrapTable('load', dataDemand.items);
                }
                if (dataDemand.items.length >= 10) {
                    $('.collectionComNext').fadeIn()
                } else {
                    $('.collectionComNext').hide()
                }
            });
        },820)
    };

    function lookDemandNext(page) {
        $.post('' + EQD_space + '/ComSpace/ComSpace_Collection/Get_CompanyCollection.ashx', {
            "companyId": dataInfo.companyId,
            "page": page
        }, function(data) {
            var dataDemand = JSON.parse(data);
            demandPage = dataDemand.page;
            if (dataDemand.items.length > 0) {
                layer.msg("加载完成", {
                    time: 1200
                });
                loadcollcetionTable(dataDemand.items);
                $("#collectionComTable").bootstrapTable('load', dataDemand.items);
            } else {
                layer.msg("已无更多", {
                    time: 1200
                })
            }
            if (dataDemand.items.length >= 10) {
                $('.collectionComNext').fadeIn()
            } else {
                $('.collectionComNext').hide()
            }
        });
    };
    $('.collectionComNext').click(function() {
        lookDemandNext(demandPage)
    });

    function loadcollcetionTable(data) {
        $('#collectionComTable').bootstrapTable({
            data: data,
            columns: [{
                field: 'img',
                title: 'logo',
                align: 'center',
                valign: 'middle',
                formatter: logoFormatter,
            }, {
                field: 'company',
                title: '公司名称',
                align: 'center',
                valign: 'middle',
                formatter: comName,
                events: viewCom
            }, {
                field: 'option',
                title: '操作',
                align: 'center',
                valign: 'middle',
                formatter: optiondemandFormatter,
                events: optiondemandEvents
            }]
        });

        function comName(e, value, index, row) {
            return '<span class="visitorCollection">' + value.company + '</span>'
        }

        function logoFormatter(e, value, row, index) {
            return ['<img src="' + value.comLogo + '" alt="">'].join('');
        };

        function optiondemandFormatter(e, value, row, index) {
            return ['<a class="cancleCollection"  title="取消收藏">', '<span id="cancleCollection">取消收藏</span>', '</a>  ', ].join('');
        };
    };
    window.viewCom = {
        'click .visitorCollection': function(e, value, row, index) {
            window.open("companyIndex.html?id=" + row.companyId + "")
        }
    }
    window.optiondemandEvents = {
        'click .cancleCollection': function(e, value, row, index) {
            layer.open({
                type: 1,
                area: ['300px', '220px'],
                title: ['取消收藏', 'font-size:18px;text-align: center;'],
                content: $(".cancleCollectionDiv"),
                btn: '确定',
                yes: function(index, layero) {
                    $.post('' + EQD_space + '/ComSpace/ComSpace_Collection/Cancel_Collection.ashx', {
                        "collectId": row.Id,
                        "companyId": dataInfo.companyId,
                        "userGuid": dataInfo.Guid,
                    }, function(data) {
                        var dataDel = JSON.parse(data);
                        if (dataDel.status == 200) {
                            layer.msg('取消成功', {
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
    };
    // 收藏的产品
    var dataDemand2, demandPage2;
    $('#collectionProduct').click(function() {
        $(this).addClass('active').siblings('li').removeClass('active')
        $('.collectionProductDiv').fadeIn().siblings('div').hide();
        lookDemand2First(0);
        $(".cltCom").attr("src", "img/2sced.png");
        $(".cltPrt").attr("src", "img/2sc.png");
    });

    function lookDemand2First(page) {
        $.post('' + EQD_space + '/ComSpace/ComSpace_Collection/Get_ProductCollection.ashx', {
            "companyId": dataInfo.companyId,
            "page": page
        }, function(data) {
            var dataDemand2 = JSON.parse(data);
            if (dataDemand2.items.length > 0) {
                loadcollcetionProTable(dataDemand2.items);
                $("#collectionProductTable").bootstrapTable('load', dataDemand2.items);
            } else {}
            demandPage2 = dataDemand2.page;
            if (dataDemand2.items.length >= 10) {
                $('.collectionProductNext').fadeIn()
            } else {
                $('.collectionProductNext').hide()
            }
        });
    };

    function lookDemand2Next(page) {
        $.post('' + EQD_space + '/ComSpace/ComSpace_Collection/Get_ProductCollection.ashx', {
            "companyId": dataInfo.companyId,
            "page": page
        }, function(data) {
            var dataDemand2 = JSON.parse(data);
            if (dataDemand2.items.length > 0) {
                layer.msg("加载完成", {
                    time: 1200
                });
                loadcollcetionProTable(dataDemand2.items);
                $("#collectionProductTable").bootstrapTable('load', dataDemand2.items);
            } else {
                layer.msg("已无更多", {
                    time: 1200
                });
            }
            demandPage2 = dataDemand2.page;
            if (dataDemand2.items.length >= 10) {
                $('.collectionProductNext').fadeIn()
            } else {
                $('.collectionProductNext').hide()
            }
        });
    };
    $('.collectionProductNext').click(function() {
        lookDemand2Next(demandPage2)
    });

    function loadcollcetionProTable(data) {
        $('#collectionProductTable').bootstrapTable({
            data: data,
            columns: [{
                field: 'productImage',
                title: '图片',
                align: 'center',
                valign: 'middle',
                formatter: imgFormatter
            }, {
                field: 'productName',
                title: '名称',
                align: 'center',
                valign: 'middle',
                formatter: productName,
                events: viewPdt2
            }, {
                field: 'company',
                title: '公司',
                align: 'center',
                valign: 'middle',
            }, {
                field: 'productPrice',
                title: '价格',
                align: 'center',
                valign: 'middle'
            }, {
                field: 'option',
                title: '操作',
                align: 'center',
                valign: 'middle',
                formatter: optiondemand2Formatter,
                events: optiondemand2Events
            }]
        });

        function productName(e, value, row, index) {
            return '<span class="viewPdt2">' + value.productName + '</span>'
        }

        function imgFormatter(e, value, row, index) {
            var imgUrl = value.productImage.replace(/.png/, "min.png")
            return ['<img src="' + imgUrl + '" alt="">'].join('');
        };

        function optiondemand2Formatter(e, value, row, index) {
            return ['<a class="cancleCollection"  title="取消收藏">', '<span id="cancleCollection">取消收藏</span>', '</a>  ', '<a class="visitorCollection2"  title="查看详情">', '<span id="visitorCollection2">查看详情</span>', '</a>  ', ].join('');
        };
    };
    window.viewPdt2 = {
        'click .viewPdt2': function(e, value, row, index) {
            window.open("chanpinDetails.html?id=" + row.productId + "")
        }
    };
    window.optiondemand2Events = {
        'click .cancleCollection': function(e, value, row, index) {
            layer.open({
                type: 1,
                area: ['300px', '220px'],
                title: ['取消收藏', 'font-size:18px;text-align: center;'],
                content: $(".cancleCollectionDiv"),
                btn: '确定',
                yes: function(index, layero) {
                    $.post('' + EQD_space + '/ComSpace/ComSpace_Collection/Cancel_Collection.ashx', {
                        "collectId": row.Id,
                        "companyId": dataInfo.companyId,
                        "userGuid": dataInfo.Guid,
                    }, function(data) {
                        var dataDel = JSON.parse(data);
                        if (dataDel.status == 200) {
                            layer.msg('取消成功', {
                                time: 1000,
                            })
                            lookDemand2First(0)
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
})