$(document).ready(function() {
    var dataAll = localStorage.getItem("GHY_login");
    var dataCompany = sessionStorage.getItem("ChangeInfo");
    if (dataCompany == null) {
        // location.href = "editorSpace.html"
    }
    var dataCom = JSON.parse(dataCompany)
    $('.usertypeOld').val(dataCom.Management)
    $('.Brand').val(dataCom.Brand)
    $('.Trademark').val(dataCom.Trademark)
    $('.EstablishTime').val(dataCom.EstablishTime)
    $('.RegisteredCapital').val(dataCom.RegisteredCapital)
    $('.ScopeOfOperation').val(dataCom.ScopeOfOperation)
    $('.Turnover').val(dataCom.Turnover)
    $('.Register').val(dataCom.Register)
    $('.BusinessTime').val(dataCom.BusinessTime)
    $('.WorkshopArea').val(dataCom.WorkshopArea)
    $('.CustomerGroup').val(dataCom.CustomerGroup)
    $('.mainHangye').val(dataCom.Industry)
    $('.Authentication').val(dataCom.Authentication)
    $('#pic1Img').attr('src', dataCom.TrademarkImages);
    var dataG = JSON.parse(dataAll)
    laydate.render({
        elem: '#timeSet'
    });
    // 修改
    $('.changType').click(function() {
        $('.oldType').hide();
        $('.newType').show();
    });
    $.post('' + EQD_space + '/Option_AreasAnd.ashx', {
        type: "2"
    }, function(data) {
        $("#mainHangye").typeahead({
            source: data,
            items: 10,
            afterSelect: function(item) {
                $('#mainHangye').siblings('.desc').text(item.dec)
            }
        });
    });
    var changType;
    var changType2 = ""
    $('.regBtn').click(function() {
        if ($('#usertype').val() == null) {
            changType = dataCom.Management
            changType2 = (changType.replace(/,/g, " "))
        } else {
            changType = $('#usertype').val()
            for (var i = 0; i < changType.length; i++) {
                changType2 += changType[1] + " "
            }
        }
        $.post('https://www.eqid.top:8009/ComSpace/ComSpacePerfect/Update_ComSpacePerfect.ashx', {
            'userGuid': dataG.Guid,
            'companyId': dataG.companyId,
            'comSpaceId': dataCom.Id,
            "para": "CustomerGroup='" + $('.CustomerGroup').val() + "'," + "RegisteredCapital='" + $('.RegisteredCapital').val() + "'," + "ScopeOfOperation='" + $('.ScopeOfOperation').val() + "'," + "EstablishTime='" + $('.EstablishTime').val() + "'," + "Register='" + $('.Register').val() + "'," + "BusinessTime='" + $('.BusinessTime').val() + "'," + "Industry='" + $('#mainHangye').val() + "'," + "Authentication='" + $('.Authentication').val() + "'," + "Management='" + changType2 + "'," + "Brand='" + $('.Brand').val() + "'," + "Trademark='" + $('.Trademark').val() + "'," + "Turnover='" + $('.Turnover').val() + "'," + "WorkshopArea='" + $('.WorkshopArea').val() + "'"
        }, function(data) {
            var dataChanged = JSON.parse(data)
            if (dataChanged.status == 200) {
                layer.msg('修改成功', {
                    time: 1000,
                });
                setTimeout(function() {
                    sessionStorage.removeItem("ChangeInfo");
                    location.href = "editorSpace.html"
                }, 1500)
            } else {
                layer.msg(dataChanged.msg, {
                    time: 1000,
                });
            }
        });
    });
})