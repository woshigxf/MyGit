var checkLoad;
$.extend({
    checkInit: function () {
        return checkLoad.Init()
    }
}), checkLoad = {
    checkBrowser: function () {
        var n = $.browser;
        return n.msie && (n.version == 6 || n.version == 7) ? !1 : !0
    },
    Init: function () {
        return checkLoad.checkBrowser()
    }
}, $(function () {
    BrowserContrl.Init()
});
var tips, theTop = 100,
    old = theTop,
    BrowserContrl = {
        setBodyBrowserHtml: function () {
            var n = [];
            n.push(""), 
            n.push('<div id="BodyBlack"></div>'), 
            n.push('<div id="BrowserBox">'), 
            n.push('<div class="browserBoxInfo" id="BrowserFloat">'), 
            n.push('<div class="show_bg bg_1">'), 
            n.push('<a href="javascript:void(0)" class="links_01"></a>'), 
            n.push('<a href="javascript:void(0)" class="links_02"></a>'), 
            n.push('<a href="http://rj.baidu.com/soft/detail/14754.html" target="_blank" class="links_03"></a>'), 
            n.push('<a href="http://rj.baidu.com/soft/detail/14744.html" target="_blank" class="links_04"></a>'), 
            n.push('<a href="http://rj.baidu.com/soft/detail/17451.html" target="_blank" class="links_05"></a>'), 
            n.push("</div>"), 
            n.push('<div class="show_bg bg_2">'), 
            n.push('<a href="javascript:void(0)" class="btn_close_03"></a>'), 
            n.push("</div>"), 
            n.push('<div class="show_bg bg_3">'), 
            n.push('<a href="javascript:void(0)" class="btn_close_03"></a>'), 
            n.push("</div>"), 
            n.push("</div>"), 
            n.push("</div>"), 
            $("body").prepend(n.join(""))
        },
        moveTips: function () {
            var n = 50;
            window.innerHeight ? pos = window.pageYOffset : document.documentElement && document.documentElement.scrollTop ? pos = document.documentElement.scrollTop : document.body && (pos = document.body.scrollTop), pos = pos - tips.offsetTop + theTop, pos = tips.offsetTop + pos / 10, pos < theTop && (pos = theTop), pos != old && (tips.style.top = pos + "px", n = 10), old = pos, setTimeout(BrowserContrl.moveTips, n)
        },
        initFloatTips: function () {
            tips = document.getElementById("BrowserFloat"), BrowserContrl.moveTips()
        },
        changeBrowserBg: function (n) {
            $("#BrowserFloat .show_bg").hide(), $("#BrowserFloat .bg_" + n).show()
        },
        BrowserOperation: function () {
            $("#BodyBlack").show(), $("#BrowserBox").show(), $(".bg_1 .links_01").click(function () {
                BrowserContrl.changeBrowserBg(2)
            }), $(".bg_1 .links_02").click(function () {
                BrowserContrl.changeBrowserBg(3)
            }), $(".show_bg .btn_close_03").click(function () {
                BrowserContrl.changeBrowserBg(1)
            }), BrowserContrl.initFloatTips()
        },
        Init: function () {
            $.checkInit() || (BrowserContrl.setBodyBrowserHtml(), BrowserContrl.BrowserOperation())
        }
    }