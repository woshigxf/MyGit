(function (n) {
    n.fn.zclip = function (t) {
        if (typeof t != "object" || t.length) {
            if (typeof t == "string") return this.each(function () {
                var r = n(this),
                    u, i;
                t = t.toLowerCase(), u = r.data("zclipId"), i = n("#" + u + ".zclip"), t == "remove" ? (i.remove(), r.removeClass("active hover")) : t == "hide" ? (i.hide(), r.removeClass("active hover")) : t == "show" && i.show()
            })
        } else {
            var i = n.extend({
                path: "ZeroClipboard.swf",
                copy: null,
                beforeCopy: null,
                afterCopy: null,
                clickAfter: !0,
                setHandCursor: !0,
                setCSSEffects: !0
            }, t);
            return this.each(function () {
                var t = n(this),
                    r;
                t.is(":visible") && (typeof i.copy == "string" || n.isFunction(i.copy)) && (ZeroClipboard.setMoviePath(i.path), r = new ZeroClipboard.Client, n.isFunction(i.copy) && t.bind("zClip_copy", i.copy), n.isFunction(i.beforeCopy) && t.bind("zClip_beforeCopy", i.beforeCopy), n.isFunction(i.afterCopy) && t.bind("zClip_afterCopy", i.afterCopy), r.setHandCursor(i.setHandCursor), r.setCSSEffects(i.setCSSEffects), r.addEventListener("mouseOver", function () {
                    t.trigger("mouseenter")
                }), r.addEventListener("mouseOut", function () {
                    t.trigger("mouseleave")
                }), r.addEventListener("mouseDown", function () {
                    t.trigger("mousedown"), n.isFunction(i.copy) ? r.setText(t.triggerHandler("zClip_copy")) : r.setText(i.copy), n.isFunction(i.beforeCopy) && t.trigger("zClip_beforeCopy")
                }), r.addEventListener("complete", function (r, u) {
                    n.isFunction(i.afterCopy) ? t.trigger("zClip_afterCopy") : (u.length > 500 && (u = u.substr(0, 500) + "...\n\n(" + (u.length - 500) + " characters not shown)"), t.removeClass("hover"), alert("成功复制到剪切板:\n\n " + u)), i.clickAfter && t.trigger("click")
                }), r.glue(t[0], t.parent()[0]), n(window).bind("load resize", function () {
                    r.reposition()
                }))
            })
        }
    }
})(jQuery);
var ZeroClipboard = {
    version: "1.0.7",
    clients: {},
    moviePath: "ZeroClipboard.swf",
    nextId: 1,
    $: function (n) {
        return typeof n == "string" && (n = document.getElementById(n)), n.addClass || (n.hide = function () {
            this.style.display = "none"
        }, n.show = function () {
            this.style.display = ""
        }, n.addClass = function (n) {
            this.removeClass(n), this.className += " " + n
        }, n.removeClass = function (n) {
            for (var i = this.className.split(/\s+/), r = -1, t = 0; t < i.length; t++) i[t] == n && (r = t, t = i.length);
            return r > -1 && (i.splice(r, 1), this.className = i.join(" ")), this
        }, n.hasClass = function (n) {
            return !!this.className.match(new RegExp("\\s*" + n + "\\s*"))
        }), n
    },
    setMoviePath: function (n) {
        this.moviePath = n
    },
    dispatch: function (n, t, i) {
        var r = this.clients[n];
        r && r.receiveEvent(t, i)
    },
    register: function (n, t) {
        this.clients[n] = t
    },
    getDOMObjectPosition: function (n, t) {
        var i = {
            left: 0,
            top: 0,
            width: n.width ? n.width : n.offsetWidth,
            height: n.height ? n.height : n.offsetHeight
        };
        return n && n != t && (i.left += n.offsetLeft, i.top += n.offsetTop), i
    },
    Client: function (n) {
        this.handlers = {}, this.id = ZeroClipboard.nextId++, this.movieId = "ZeroClipboardMovie_" + this.id, ZeroClipboard.register(this.id, this), n && this.glue(n)
    }
};
ZeroClipboard.Client.prototype = {
    id: 0,
    ready: !1,
    movie: null,
    clipText: "",
    handCursorEnabled: !0,
    cssEffects: !0,
    handlers: null,
    glue: function (n, t, i) {
        var f, u, r;
        if (this.domElement = ZeroClipboard.$(n), f = 99, this.domElement.style.zIndex && (f = parseInt(this.domElement.style.zIndex, 10) + 1), typeof t == "string" ? t = ZeroClipboard.$(t) : typeof t == "undefined" && (t = document.getElementsByTagName("body")[0]), u = ZeroClipboard.getDOMObjectPosition(this.domElement, t), this.div = document.createElement("div"), this.div.className = "zclip", this.div.id = "zclip-" + this.movieId, $(this.domElement).data("zclipId", "zclip-" + this.movieId), r = this.div.style, r.position = "absolute", r.left = "" + u.left + "px", r.top = "" + u.top + "px", r.width = "" + u.width + "px", r.height = "" + u.height + "px", r.zIndex = f, typeof i == "object")
            for (addedStyle in i) r[addedStyle] = i[addedStyle];
        t.appendChild(this.div), this.div.innerHTML = this.getHTML(u.width, u.height)
    },
    getHTML: function (n, t) {
        var i = "",
            u = "id=" + this.id + "&width=" + n + "&height=" + t,
            r;
        return navigator.userAgent.match(/MSIE/) ? (r = location.href.match(/^https/i) ? "https://" : "http://", i += '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="' + r + 'download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="' + n + '" height="' + t + '" id="' + this.movieId + '" align="middle"><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="false" /><param name="movie" value="' + ZeroClipboard.moviePath + '" /><param name="loop" value="false" /><param name="menu" value="false" /><param name="quality" value="best" /><param name="bgcolor" value="#ffffff" /><param name="flashvars" value="' + u + '"/><param name="wmode" value="transparent"/></object>') : i += '<embed id="' + this.movieId + '" src="' + ZeroClipboard.moviePath + '" loop="false" menu="false" quality="best" bgcolor="#ffffff" width="' + n + '" height="' + t + '" name="' + this.movieId + '" align="middle" allowScriptAccess="always" allowFullScreen="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" flashvars="' + u + '" wmode="transparent" />', i
    },
    hide: function () {
        this.div && (this.div.style.left = "-2000px")
    },
    show: function () {
        this.reposition()
    },
    destroy: function () {
        if (this.domElement && this.div) {
            this.hide(), this.div.innerHTML = "";
            var n = document.getElementsByTagName("body")[0];
            try {
                n.removeChild(this.div)
            } catch (t) {}
            this.domElement = null, this.div = null
        }
    },
    reposition: function (n) {
        if (n && (this.domElement = ZeroClipboard.$(n), this.domElement || this.hide()), this.domElement && this.div) {
            var i = ZeroClipboard.getDOMObjectPosition(this.domElement),
                t = this.div.style;
            t.left = "" + i.left + "px", t.top = "" + i.top + "px"
        }
    },
    setText: function (n) {
        this.clipText = n, this.ready && this.movie.setText(n)
    },
    addEventListener: function (n, t) {
        n = n.toString().toLowerCase().replace(/^on/, ""), this.handlers[n] || (this.handlers[n] = []), this.handlers[n].push(t)
    },
    setHandCursor: function (n) {
        this.handCursorEnabled = n, this.ready && this.movie.setHandCursor(n)
    },
    setCSSEffects: function (n) {
        this.cssEffects = !!n
    },
    receiveEvent: function (n, t) {
        var u, r, f, i;
        n = n.toString().toLowerCase().replace(/^on/, "");
        switch (n) {
            case "load":
                if (this.movie = document.getElementById(this.movieId), !this.movie) {
                    u = this, setTimeout(function () {
                        u.receiveEvent("load", null)
                    }, 1);
                    return
                }
                if (!this.ready && navigator.userAgent.match(/Firefox/) && navigator.userAgent.match(/Windows/)) {
                    u = this, setTimeout(function () {
                        u.receiveEvent("load", null)
                    }, 100), this.ready = !0;
                    return
                }
                this.ready = !0;
                try {
                    this.movie.setText(this.clipText)
                } catch (e) {}
                try {
                    this.movie.setHandCursor(this.handCursorEnabled)
                } catch (e) {}
                break;
            case "mouseover":
                this.domElement && this.cssEffects && (this.domElement.addClass("hover"), this.recoverActive && this.domElement.addClass("active"));
                break;
            case "mouseout":
                this.domElement && this.cssEffects && (this.recoverActive = !1, this.domElement.hasClass("active") && (this.domElement.removeClass("active"), this.recoverActive = !0), this.domElement.removeClass("hover"));
                break;
            case "mousedown":
                this.domElement && this.cssEffects && this.domElement.addClass("active");
                break;
            case "mouseup":
                this.domElement && this.cssEffects && (this.domElement.removeClass("active"), this.recoverActive = !1)
        }
        if (this.handlers[n])
            for (r = 0, f = this.handlers[n].length; r < f; r++) i = this.handlers[n][r], typeof i == "function" ? i(this, t) : typeof i == "object" && i.length == 2 ? i[0][i[1]](this, t) : typeof i == "string" && window[i](this, t)
    }
}