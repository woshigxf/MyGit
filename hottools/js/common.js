function checkWindow() {
    var n = document.body.scrollTop + document.documentElement.scrollTop;
    n > 300 ? $(".floatWin .links").show() : $(".floatWin .links").hide()
}

function enterSumbit() {
    var n = arguments.callee.caller.arguments[0] || window.event;
    return n.keyCode == 13 ? !0 : !1
}

function flashChecker() {
    var t = 0,
        i = /*@cc_on!@*/ 0,
        n;
    return i ? (n = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), n && (t = 1)) : navigator.plugins && navigator.plugins.length > 0 && (n = navigator.plugins["Shockwave Flash"], n && (t = 1)), {
        f: t
    }
}

function zclipCopy() {
    var n = flashChecker();
    n.f ? $("#CssCopy").zclip({
        path: "/zclip/ZeroClipboard.swf",
        afterCopy: function () {
            $("#CssCopy").select(), closeBox("CssBox"), $("#lightBoxBtn").click()
        },
        copy: $("#CssBoxContent").val()
    }) : alert("浏览器拒绝,请手动选择代码并CTRL+C复制!")
}

function showBox(n) {
    $("#" + n).window({
        modal: !0
    });
    var t = document.body.scrollTop + document.documentElement.scrollTop;
    $("#" + n).window({
        top: t + 150,
        modal: !0,
        onClose: function () {}
    }), $("#" + n).window("open")
}

function closeBox(n) {
    $("#" + n).dialog("close")
}

function showLoginBox() {
    $("#LoginBox").window({
        top: 200,
        left: ($(window).width() - $("#LoginBox").width()) * .5,
        modal: !0,
        onClose: function () {}
    }), $("html,body").animate({
        scrollTop: "0px"
    }, 800), $("#LoginBox").window("open")
}

function AddFavorite() {
    var t = window.location,
        n = document.title;
    try {
        window.external.addFavorite(t, n)
    } catch (i) {
        try {
            window.sidebar.addPanel(n, t, "")
        } catch (i) {
            alert("加入收藏失败，请使用Ctrl+D进行添加")
        }
    }
}

// function checkTopLoginInfo() {
//     var n;
//     $.ajax({
//         type: "POST",
//         url: "/Ajax/CheckTopLoginInfo",
//         beforeSend: function () {
//             $(".loading").show()
//         },
//         success: function (t) {
//             $(".loading").hide(), 
//             t = JSON.parse(t), 
//             t.result ? (n = "<p>你好，" + t.userName + ' <a href="/Ajax/Logout" id="logoutBtn">退出</a>    <a href="/userAdmin/index" target="_blank">个人中心</a>  <a href="javascript:void(0)" onclick="AddFavorite()">收藏本网站</a></p>', $("#topLoginInfo").html(n)) : (n = '<p>欢迎来到美淘猫，<a href="javascript:void(0)" id="showTopBox">请登录</a>  <a href="http://www.mtmao.com/help/detail/766c19a6-b896-4b33-8ecf-55a982f3555c" target="_blank">如何成为会员？</a></p>', 
//             $("#topLoginInfo").html(n), 
//             $("#showTopBox").click(function () {
//                 showLoginBox()
//             }))
//         }
//     })
// }

function defaultLoginInput() {
    $("#userPassword").val(""), $("#userCode").val(""), $("#valiCode").attr("src", "/Ajax/GetValidateCode?time=" + +new Date)
}

function checkUserCodeFn(n) {
    $.ajax({
        type: "post",
        async: !1,
        url: "/Ajax/GetLoginErrorTimes",
        data: {
            userName: n,
            __RequestVerificationToken: $("input[name='__RequestVerificationToken']").val()
        },
        success: function (n) {
            checkUserCode = n
        }
    })
}

function loginCheckFn() {
    function n(n, t) {
        return $.trim($(n).val()) == "" ? ($(n).siblings(".alert_text").html(t), !1) : ($(n).siblings(".alert_text").html(""), !0)
    }
    $("#showTopBox").click(function () {
        showLoginBox()
    }), $("#loginShowNav").click(function () {
        var n = checkIsLogin();
        n ? window.location.href = "/userAdmin/index" : showLoginBox()
    }), $("#LoginFormInfo #userName").blur(function () {
        checkUserCodeFn($(this).val()), checkUserCode ? $("#showUserCodeFormTr").show() : $("#showUserCodeFormTr").hide()
    }), $("#LoginFormInfo #LoginFormBtn").unbind("click").click(function () {
        var i, r, t;
        i = n($("#LoginFormInfo #userName"), "请输入您的账号!"), r = n($("#LoginFormInfo #userPassword"), "请输入您的密码!"), checkUserCodeFn($("#LoginFormInfo #userName").val()), checkUserCode ? ($("#showUserCodeFormTr").show(), t = n($("#LoginFormInfo #userCode"), "请输入验证码!")) : ($("#showUserCodeFormTr").hide(), t = !0), i && r && t && ($("#LoginFormInfo #userPassword").val(hex_md5($("#LoginFormInfo #userPassword").val()).toUpperCase()), setTimeout(function () {
            $("#LoginFormTable").submit()
        }, 100))
    }), $("#LoginAjaxInfo #userName").blur(function () {
        checkUserCodeFn($(this).val()), checkUserCode ? $("#showUserCodeTr").show() : $("#showUserCodeTr").hide()
    }), $("#LoginAjaxInfo #LoginBtn").unbind("click").click(function () {
        var r, u, t, i;
        return (r = n($("#LoginAjaxInfo #userName"), "请输入您的账号!"), u = n($("#LoginAjaxInfo #userPassword"), "请输入您的密码!"), i = "", checkUserCodeFn($("#LoginAjaxInfo #userName").val()), checkUserCode ? ($("#showUserCodeTr").show(), t = n($("#LoginAjaxInfo #userCode"), "请输入验证码!"), i = $("#LoginAjaxInfo #userCode").val()) : ($("#showUserCodeTr").hide(), t = !0), r && u && t) ? ($.ajax({
            type: "POST",
            url: "/Ajax/login",
            data: {
                userName: $("#LoginAjaxInfo #userName").val(),
                userPassword: hex_md5($("#LoginAjaxInfo #userPassword").val()).toUpperCase(),
                userCode: i,
                autoType: $("#cbb_auto_login").is(":checked"),
                __RequestVerificationToken: $("input[name='__RequestVerificationToken']").val()
            },
            beforeSend: function () {
                $(".loading").show(), $("#LoginBtn").val("提交中..."), $("#LoginBtn").attr("disabled", "disabled")
            },
            success: function (n) {
                $(".loading").hide(), $("#LoginBtn").val("确定"), $("#LoginBtn").removeAttr("disabled"), n.result ? closeBox("LoginBox") : alert(n.msg), defaultLoginInput()/* , checkTopLoginInfo() */
            },
            error: function () {
                $(".loading").hide(), $("#LoginBtn").val("确定"), $("#LoginBtn").removeAttr("disabled"), defaultLoginInput(), /* checkTopLoginInfo(), */ alert("未知错误,请刷新或更换新版浏览器再试!"), restr = !1
            }
        }), !0) : !1
    }), $("#LoginAjaxInfo #userPassword").keyup(function () {
        enterSumbit() && $("#LoginBtn").click()
    }), $("#LoginAjaxInfo #userCode").keyup(function () {
        enterSumbit() && $("#LoginBtn").click()
    }), $("#LoginFormInfo #userPassword").keyup(function () {
        enterSumbit() && $("#LoginFormBtn").click()
    }), $("#LoginFormInfo #userCode").keyup(function () {
        enterSumbit() && $("#LoginFormBtn").click()
    }), $(".codeAjax").unbind("click").click(function () {
        $(this).siblings("img").attr("src", "/Ajax/GetValidateCode?time=" + +new Date), $(this).attr("src", "/Ajax/GetValidateCode?time=" + +new Date)
    })
}

function checkIsLogin() {
    var n = !1;
    return $.ajax({
        url: "/Ajax/CheckLogin",
        type: "POST",
        async: !1,
        beforeSend: function () {
            $(".loading").show()
        },
        success: function (t) {
            $(".loading").hide(), t.result ? n = !0 : (/* checkTopLoginInfo(), */ showLoginBox(), n = !1)
        },
        error: function () {
            $(".loading").hide(), n = !1
        }
    }), n
}

function mtmAboutBoxFn() {
    $("#CloseMtmAbout").click(function () {
        $("#MtmAboutBox").hide()
    })
}

function howUseBoxFn() {
    $(".CloseHowUse").click(function () {
        $("#HowUseBox").hide()
    })
}
window.onscroll = function () {
    checkWindow()
};
var checkUserCode = !1;
$(function () {
    $(".lightbox").lightbox(), /* checkTopLoginInfo(), */ loginCheckFn(), mtmAboutBoxFn(), howUseBoxFn()
})