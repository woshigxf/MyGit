(function (n, t, i, r) {
    var f = function (n) {
            return function () {
                return n.search(arguments[0])
            }
        }(navigator && navigator.userAgent ? navigator.userAgent.toLowerCase() : ""),
        u = !1,
        o = function () {
            for (var n = 3, t = i.createElement("b"), r = t.all || []; t.innerHTML = "<!--[if gt IE " + ++n + "]><i><![endif]-->", r[0];);
            return 4 < n ? n : i.documentMode
        }(),
        e = function () {
            var r, n, t = i.createElement("div");
            return (t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", r = t.getElementsByTagName("*"), n = t.getElementsByTagName("a")[0], !r || !n || !r.length) ? {} : (n.style.cssText = "top:1px;float:left;opacity:.5", {
                opacity: /^0.5/.test(n.style.opacity)
            })
        }();
    f("mobile") > -1 && (f("android") > -1 || f("googletv") > -1 || f("htc_flyer") > -1) && (u = !0), f("opera") > -1 && f("mini") > -1 && f("mobi") > -1 && (u = !0), f("iphone") > -1 && (u = !0), f("windows phone os 7") > -1 && (u = !0), n.extend(n.easing, {
        easeOutBackMin: function (n, t, i, u, f, e) {
            return e === r && (e = 1), u * ((t = t / f - 1) * t * ((e + 1) * t + e) + 1) + i
        }
    }), typeof n.fn.live == "undefined" && (n.fn.live = function (n, t, i) {
        jQuery(this.context).on(n, this.selector, t, i);
        return this
    }), n.extend({
        LightBoxObject: {
            defaults: {
                name: "jquery-lightbox",
                style: {
                    zIndex: 99999,
                    width: 470,
                    height: 280
                },
                modal: !1,
                overlay: {
                    opacity: .2
                },
                animation: {
                    show: {
                        duration: 400,
                        easing: "easeOutBackMin"
                    },
                    close: {
                        duration: 200,
                        easing: "easeOutBackMin"
                    },
                    move: {
                        duration: 700,
                        easing: "easeOutBackMin"
                    },
                    shake: {
                        duration: 100,
                        easing: "easeOutBackMin",
                        distance: 10,
                        loops: 2
                    }
                },
                flash: {
                    width: 640,
                    height: 360
                },
                iframe: {
                    width: 640,
                    height: 360
                },
                maxsize: {
                    width: -1,
                    height: -1
                },
                preload: !0,
                emergefrom: "top",
                ajax: {
                    type: "GET",
                    cache: !1,
                    dataType: "html"
                }
            },
            options: {},
            animations: {},
            gallery: {},
            image: {},
            esqueleto: {
                lightbox: [],
                buttons: {
                    close: [],
                    prev: [],
                    max: [],
                    next: []
                },
                background: [],
                image: [],
                title: [],
                html: []
            },
            visible: !1,
            maximized: !1,
            mode: "image",
            videoregs: {
                swf: {
                    reg: /[^\.]\.(swf)\s*$/i
                },
                youtu: {
                    reg: /youtu\.be\//i,
                    split: "/",
                    index: 3,
                    iframe: 1,
                    url: "http://www.youtube.com/embed/%id%?autoplay=1&amp;fs=1&amp;rel=0&amp;enablejsapi=1"
                },
                youtube: {
                    reg: /youtube\.com\/watch/i,
                    split: "=",
                    index: 1,
                    iframe: 1,
                    url: "http://www.youtube.com/embed/%id%?autoplay=1&amp;fs=1&amp;rel=0&amp;enablejsapi=1"
                },
                vimeo: {
                    reg: /vimeo\.com/i,
                    split: "/",
                    index: 3,
                    iframe: 1,
                    url: "http://player.vimeo.com/video/%id%?hd=1&amp;autoplay=1&amp;show_title=1&amp;show_byline=1&amp;show_portrait=0&amp;color=&amp;fullscreen=1"
                },
                metacafe: {
                    reg: /metacafe\.com\/watch/i,
                    split: "/",
                    index: 4,
                    url: "http://www.metacafe.com/fplayer/%id%/.swf?playerVars=autoPlay=yes"
                },
                dailymotion: {
                    reg: /dailymotion\.com\/video/i,
                    split: "/",
                    index: 4,
                    iframe: !0,
                    url: "http://www.dailymotion.com/embed/video/%id%?autoPlay=1&forcedQuality=hd720"
                },
                collegehumornew: {
                    reg: /collegehumor\.com\/video\//i,
                    split: "video/",
                    index: 1,
                    iframe: !0,
                    url: "http://www.collegehumor.com/e/%id%"
                },
                collegehumor: {
                    reg: /collegehumor\.com\/video:/i,
                    split: "video:",
                    index: 1,
                    url: "http://www.collegehumor.com/moogaloop/moogaloop.swf?autoplay=true&amp;fullscreen=1&amp;clip_id=%id%"
                },
                ustream: {
                    reg: /ustream\.tv/i,
                    split: "/",
                    index: 4,
                    url: "http://www.ustream.tv/flash/video/%id%?loc=%2F&amp;autoplay=true&amp;vid=%id%&amp;disabledComment=true&amp;beginPercent=0.5331&amp;endPercent=0.6292&amp;locale=en_US"
                },
                twitvid: {
                    reg: /twitvid\.com/i,
                    split: "/",
                    index: 3,
                    url: "http://www.twitvid.com/player/%id%"
                },
                wordpress: {
                    reg: /v\.wordpress\.com/i,
                    split: "/",
                    index: 3,
                    url: "http://s0.videopress.com/player.swf?guid=%id%&amp;v=1.01"
                },
                vzaar: {
                    reg: /vzaar\.com\/videos/i,
                    split: "/",
                    index: 4,
                    url: "http://view.vzaar.com/%id%.flashplayer?autoplay=true&amp;border=none"
                },
                youku: {
                    reg: /v.youku.com\/v_show\//i,
                    split: "id_",
                    index: 1,
                    iframe: 1,
                    url: "http://player.youku.com/embed/%id%&amp;autoplay=1"
                }
            },
            mapsreg: {
                bing: {
                    reg: /bing\.com\/maps/i,
                    split: "?",
                    index: 1,
                    url: "http://www.bing.com/maps/embed/?emid=3ede2bc8-227d-8fec-d84a-00b6ff19b1cb&amp;w=%width%&amp;h=%height%&amp;%id%"
                },
                streetview: {
                    reg: /maps\.google\.(com|co.uk|ca|es)(.*)layer=c/i,
                    split: "?",
                    index: 1,
                    url: "http://maps.google.com/?output=svembed&amp;%id%"
                },
                googlev2: {
                    reg: /maps\.google\.(com|co.uk|ca|es)\/maps\/ms/i,
                    split: "?",
                    index: 1,
                    url: "http://maps.google.com/maps/ms?output=embed&amp;%id%"
                },
                google: {
                    reg: /maps\.google\.(com|co.uk|ca|es)/i,
                    split: "?",
                    index: 1,
                    url: "http://maps.google.com/maps?%id%&amp;output=embed"
                }
            },
            imgsreg: /\.(?:jpg|png|jpeg|gif|bmp|tiff)/i,
            overlay: {
                create: function (t) {
                    return this.options = t, this.element = n('<div id="' + +new Date + '" class="' + this.options.name + '-overlay"></div>'), this.element.css(n.extend({}, {
                        position: "fixed",
                        top: 0,
                        left: 0,
                        opacity: 0,
                        display: "none",
                        "z-index": this.options.zIndex
                    }, this.options.style)), this.element.bind("click", n.proxy(function (t) {
                        this.options.modal || this.hidden || (n.isFunction(this.options.callback) ? this.options.callback() : this.hide()), t.preventDefault()
                    }, this)), this.hidden = !0, this.inject(), this
                },
                inject: function () {
                    this.target = n(i.body), this.target.append(this.element)
                },
                resize: function (t, r) {
                    this.element.css({
                        height: 0,
                        width: 0
                    }), this.shim && this.shim.css({
                        height: 0,
                        width: 0
                    });
                    var u = {
                        x: n(i).width(),
                        y: n(i).height()
                    };
                    return this.element.css({
                        width: "100%",
                        height: r || u.y
                    }), this.shim && (this.shim.css({
                        height: 0,
                        width: 0
                    }), this.shim.css({
                        position: "absolute",
                        left: 0,
                        top: 0,
                        width: this.element.width(),
                        height: r || u.y
                    })), this
                },
                show: function (t) {
                    return this.hidden ? (this.transition && this.transition.stop(), this.shim && this.shim.css("display", "block"), this.element.css({
                        display: "block",
                        opacity: 0
                    }), this.resize(), this.hidden = !1, this.transition = this.element.fadeTo(this.options.showDuration, this.options.style.opacity, n.proxy(function () {
                        this.options.style.opacity && this.element.css(this.options.style), this.element.trigger("show"), n.isFunction(t) && t()
                    }, this)), this) : this
                },
                hide: function (t) {
                    return this.hidden ? this : (this.transition && this.transition.stop(), this.shim && this.shim.css("display", "none"), this.hidden = !0, this.transition = this.element.fadeTo(this.options.closeDuration, 0, n.proxy(function () {
                        this.element.trigger("hide"), n.isFunction(t) && t(), this.element.css({
                            height: 0,
                            width: 0,
                            display: "none"
                        })
                    }, this)), this)
                }
            },
            create: function (i) {
                this.options = n.extend(!0, this.defaults, i);
                var r = this.options.name,
                    e = n('<div class="' + r + " " + r + '-mode-image"><div class="' + r + '-border-top-left"></div><div class="' + r + '-border-top-middle"></div><div class="' + r + '-border-top-right"></div><a class="' + r + '-button-close" href="#close"><span>Close</span></a><div class="' + r + '-navigator"><a class="' + r + '-button-left" href="#"><span>Previous</span></a><a class="' + r + '-button-right" href="#"><span>Next</span></a></div><div class="' + r + '-buttons"><div class="' + r + '-buttons-init"></div><a class="' + r + '-button-left" href="#"><span>Previous</span></a><a class="' + r + '-button-max" href="#"><span>Maximize</span></a><div class="' + r + '-buttons-custom"></div><a class="' + r + '-button-right" href="#"><span>Next</span></a><div class="' + r + '-buttons-end"></div></div><div class="' + r + '-background"></div><div class="' + r + '-html"></div><div class="' + r + '-border-bottom-left"></div><div class="' + r + '-border-bottom-middle"></div><div class="' + r + '-border-bottom-right"></div></div>'),
                    f = this.esqueleto;
                return this.overlay.create({
                    name: r,
                    style: this.options.overlay,
                    modal: this.options.modal,
                    zIndex: this.options.style.zIndex - 1,
                    callback: this.proxy(this.close),
                    showDuration: u ? this.options.animation.show.duration / 2 : this.options.animation.show.duration,
                    closeDuration: u ? this.options.animation.close.duration / 2 : this.options.animation.close.duration
                }), f.lightbox = e, f.navigator = n("." + r + "-navigator", e), f.buttons.div = n("." + r + "-buttons", e), f.buttons.close = n("." + r + "-button-close", e), f.buttons.prev = n("." + r + "-button-left", e), f.buttons.max = n("." + r + "-button-max", e), f.buttons.next = n("." + r + "-button-right", e), f.buttons.custom = n("." + r + "-buttons-custom", e), f.background = n("." + r + "-background", e), f.html = n("." + r + "-html", e), f.move = n('<div class="' + r + '-move"></div>').css({
                    position: "absolute",
                    "z-index": this.options.style.zIndex,
                    top: -999
                }).append(e), n("body").append(f.move), this.win = n(t), this.addevents(), e
            },
            addevents: function () {
                var t = this.win;
                t[0].onorientationchange = function () {
                    this.visible && (this.overlay.resize(), this.move && !this.maximized && this.movebox())
                }, t.bind("resize", this.proxy(function () {
                    this.visible && !u && (this.overlay.resize(), this.move && !this.maximized && this.movebox())
                })), t.bind("scroll", this.proxy(function () {
                    this.visible && this.move && !this.maximized && !u && this.movebox()
                })), n(i).bind("keydown", this.proxy(function (n) {
                    this.visible && (n.keyCode === 27 && this.options.modal === !1 && this.close(), this.gallery.total > 1 && (n.keyCode === 37 && this.esqueleto.buttons.prev.triggerHandler("click", n), n.keyCode === 39 && this.esqueleto.buttons.next.triggerHandler("click", n)))
                })), this.esqueleto.buttons.close.bind("click touchend", {
                    fn: "close"
                }, this.proxy(this.fn)), this.esqueleto.buttons.max.bind("click touchend", {
                    fn: "maximinimize"
                }, this.proxy(this.fn)), this.overlay.element.bind("show", this.proxy(function () {
                    n(this).triggerHandler("show")
                })), this.overlay.element.bind("hide", this.proxy(function () {
                    n(this).triggerHandler("close")
                }))
            },
            fn: function (n) {
                this[n.data.fn].apply(this), n.preventDefault()
            },
            proxy: function (t) {
                return n.proxy(t, this)
            },
            ex: function (t, i, r) {
                var u = {
                    type: "",
                    width: "",
                    height: "",
                    href: ""
                };
                return n.each(t, this.proxy(function (t, f) {
                    return n.each(f, this.proxy(function (n, f) {
                        var o, e;
                        if (t == "flash" && i.split("?")[0].match(f.reg) || t == "iframe" && i.match(f.reg)) return u.href = i, f.split && (o = t == "flash" ? i.split(f.split)[f.index].split("?")[0].split("&")[0] : i.split(f.split)[f.index], u.href = f.url.replace("%id%", o).replace("%width%", r.width).replace("%height%", r.height)), u.type = f.iframe ? "iframe" : t, r.width ? (u.width = r.width, u.height = r.height) : (e = this.calculate(this.options[u.type].width, this.options[u.type].height), u.width = e.width, u.height = e.height), !1
                    })), !u.type ? void 0 : !1
                })), u
            },
            create_gallery: function (n) {
                var i = this,
                    u = i.esqueleto.buttons.prev,
                    r = i.esqueleto.buttons.next;
                i.gallery.total = n.length, n.length > 1 ? (u.unbind(".lightbox"), r.unbind(".lightbox"), u.bind("click.lightbox touchend.lightbox", function (t) {
                    t.preventDefault(), n.unshift(n.pop()), i.show(n)
                }), r.bind("click.lightbox touchend.lightbox", function (t) {
                    t.preventDefault(), n.push(n.shift()), i.show(n)
                }), i.esqueleto.navigator.css("display") === "none" && i.esqueleto.buttons.div.show(), u.show(), r.show(), this.options.preload && (n[1].href.match(this.imgsreg) && ((new Image).src = n[1].href), n[n.length - 1].href.match(this.imgsreg) && ((new Image).src = n[n.length - 1].href))) : (u.hide(), r.hide())
            },
            custombuttons: function (t, i) {
                var r = this.esqueleto;
                r.buttons.custom.empty(), n.each(t, this.proxy(function (t, u) {
                    var f = n('<a href="#" class="' + u["class"] + '">' + u.html + "</a>");
                    f.bind("click", this.proxy(function (t) {
                        n.isFunction(u.callback) && u.callback(this.esqueleto.image.src, this, i), t.preventDefault()
                    })), r.buttons.custom.append(f)
                })), r.buttons.div.show()
            },
            show: function (t, i, r) {
                var d, v, c, p, y, l, w, b, a;
                if (this.utils.isEmpty(t)) return !1;
                var h = t[0],
                    u = "",
                    g = !1,
                    o = h.href,
                    s = this.esqueleto,
                    k = {
                        x: this.win.width(),
                        y: this.win.height()
                    },
                    f, e;
                if (t.length === 1 && h.type === "element" && (u = "element"), this.loading(), g = this.visible, this.open(), g === !1 && this.movebox(), this.create_gallery(t, i), i = n.extend(!0, {
                        width: 0,
                        height: 0,
                        modal: 0,
                        force: "",
                        autoresize: !0,
                        move: !0,
                        maximized: !1,
                        iframe: !1,
                        flashvars: "",
                        cufon: !0,
                        ratio: 1,
                        onOpen: function () {},
                        onClose: function () {}
                    }, i || {}, h), this.options.onOpen = i.onOpen, this.options.onClose = i.onClose, this.options.cufon = i.cufon, d = this.unserialize(o), i = n.extend({}, i, d), i.width && ("" + i.width).indexOf("p") > 0 && (i.width = Math.round((k.x - 20) * i.width.substring(0, i.width.indexOf("p")) / 100)), i.height && ("" + i.height).indexOf("p") > 0 && (i.height = Math.round((k.y - 20) * i.height.substring(0, i.height.indexOf("p")) / 100)), this.overlay.options.modal = i.modal, v = s.buttons.max, v.removeClass(this.options.name + "-button-min"), v.removeClass(this.options.name + "-button-max"), v.addClass(this.options.name + "-hide"), this.move = !!i.move, this.maximized = !!i.maximized, n.isArray(i.buttons) && this.custombuttons(i.buttons, h.element), s.buttons.custom.is(":empty") === !1 && s.buttons.div.show(), this.utils.isEmpty(i.force) === !1 ? u = i.force : i.iframe ? u = "iframe" : o.match(this.imgsreg) ? u = "image" : (c = this.ex({
                        flash: this.videoregs,
                        iframe: this.mapsreg
                    }, o, i), !!c.type == !0 && (o = c.href, u = c.type, i.width = c.width, i.height = c.height), !!u == !1 && (o.match(/#/) ? (p = o.substr(o.indexOf("#")), n(p).length > 0 ? (u = "inline", o = p) : u = "ajax") : u = "ajax")), u === "image") s.image = new Image, n(s.image).load(this.proxy(function () {
                    var t = this.esqueleto.image,
                        r;
                    if (n(t).unbind("load"), this.visible === !1) return !1;
                    i.width ? (f = parseInt(i.width, 10), e = parseInt(i.height, 10), i.autoresize = !1) : (t.width = parseInt(t.width * i.ratio, 10), t.height = parseInt(t.height * i.ratio, 10), i.maximized ? (f = t.width, e = t.height) : (r = this.calculate(t.width, t.height), f = r.width, e = r.height)), i.autoresize && (i.maximized || !i.maximized && t.width != f && t.height != e) && (s.buttons.div.show(), s.buttons.max.removeClass(this.options.name + "-hide"), s.buttons.max.addClass(this.options.name + (i.maximized ? "-button-min" : "-button-max"))), s.title = this.utils.isEmpty(i.title) ? !1 : n('<div class="' + this.options.name + '-title"></div>').html(i.title), this.loadimage(), this.resize(f, e)
                })), this.esqueleto.image.onerror = this.proxy(function () {
                    this.error("The requested image cannot be loaded. Please try again later.")
                }), this.esqueleto.image.src = o;
                else if (u == "jwplayer" && typeof jwplayer != "undefined") {
                    if (i.width) f = i.width, e = i.height;
                    else return this.error("You have to specify the size. Add ?lightbox[width]=600&lightbox[height]=400 at the end of the url."), !1;
                    y = "DV_" + +new Date, a = '<div id="' + y + '"></div>', this.appendhtml(n(a).css({
                        width: f,
                        height: e
                    }), f, e), this.esqueleto.background.bind("complete", this.proxy(function () {
                        return this.esqueleto.background.unbind("complete"), jwplayer(y).setup(n.extend(!0, {
                            file: o,
                            autostart: !0
                        }, i)), this.visible === !1 ? !1 : void 0
                    }))
                } else if (u == "flash" || u == "inline" || u == "ajax" || u == "element")
                    if (u == "inline") l = n(o), w = i.source == "original" ? l : l.clone(!0).show(), f = i.width > 0 ? i.width : l.outerWidth(!0), e = i.height > 0 ? i.height : l.outerHeight(!0), this.appendhtml(w, f, e);
                    else if (u == "ajax") {
                    if (i.width) f = i.width, e = i.height;
                    else return this.error("You have to specify the size. Add ?lightbox[width]=600&lightbox[height]=400 at the end of the url."), !1;
                    this.animations.ajax && this.animations.ajax.abort(), this.animations.ajax = n.ajax(n.extend(!0, {}, this.options.ajax, i.ajax || {}, {
                        url: o,
                        error: this.proxy(function (n, t, i) {
                            this.error("AJAX Error " + n.status + " " + i + ". Url: " + o)
                        }),
                        success: this.proxy(function (t) {
                            this.appendhtml(n("<div>" + t + "</div>"), f, e)
                        })
                    }))
                } else u == "flash" ? (b = this.swf2html(o, i.width, i.height, i.flashvars), this.appendhtml(n(b), i.width, i.height, "flash")) : u === "element" && (f = i.width > 0 ? i.width : h.element.outerWidth(!0), e = i.height > 0 ? i.height : h.element.outerHeight(!0), this.appendhtml(h.element, f, e));
                else if (u == "iframe") {
                    if (i.width) f = i.width, e = i.height;
                    else return this.error("You have to specify the size. Add ?lightbox[width]=600&lightbox[height]=400&lighbox[iframe]=true at the end of the url."), !1;
                    a = '<iframe id="IF_' + +new Date + '" frameborder="0" src="' + o + '" style="margin:0; padding:0;"></iframe>', this.appendhtml(n(a).css({
                        width: f,
                        height: e
                    }), f, e)
                }
                this.callback = n.isFunction(r) ? r : function () {}
            },
            loadimage: function () {
                var i = this.esqueleto,
                    t = i.background,
                    r = this.options.name + "-loading";
                t.bind("complete", this.proxy(function () {
                    if (t.unbind("complete"), this.visible === !1) return !1;
                    this.changemode("image"), t.empty(), i.html.empty(), i.title && t.append(i.title), t.append(i.image), e.opacity ? (n(i.image).css("background-color", "rgba(255, 255, 255, 0)"), n(i.image).stop().css("opacity", 0).animate({
                        opacity: 1
                    }, u ? this.options.animation.show.duration / 2 : this.options.animation.show.duration, function () {
                        t.removeClass(r)
                    })) : t.removeClass(r), this.options.onOpen.apply(this)
                }))
            },
            swf2html: function (t, i, r, u) {
                var h = n.extend(!0, {
                        classid: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
                        width: i,
                        height: r,
                        movie: t,
                        src: t,
                        style: "margin:0; padding:0;",
                        allowFullScreen: "true",
                        allowscriptaccess: "always",
                        wmode: "transparent",
                        autostart: "true",
                        autoplay: "true",
                        type: "application/x-shockwave-flash",
                        flashvars: "autostart=1&autoplay=1&fullscreenbutton=1"
                    }, u),
                    s = "<object ",
                    f = "<embed ",
                    e = "",
                    o;
                return n.each(h, function (n, t) {
                    t !== "" && (s += n + '="' + t + '" ', f += n + '="' + t + '" ', e += '<param name="' + n + '" value="' + t + '"></param>')
                }), o = s + ">" + e + f + "></embed></object>"
            },
            appendhtml: function (n, t, i, r) {
                var u = this,
                    s = u.options,
                    o = u.esqueleto,
                    e = o.background;
                u.changemode("html"), u.resize(t + 30, i + 20), e.bind("complete", function () {
                    e.removeClass(s.name + "-loading"), o.html.append(n), r == "flash" && f("chrome") > -1 && o.html.html(n), e.unbind("complete"), s.cufon && typeof Cufon != "undefined" && Cufon.refresh(), s.onOpen.apply(this)
                })
            },
            movebox: function (t, i) {
                var s = n(this.win),
                    f = {
                        x: s.width(),
                        y: s.height()
                    },
                    u = {
                        x: s.scrollLeft(),
                        y: s.scrollTop()
                    },
                    o = this.esqueleto,
                    c = t != null ? t : o.lightbox.outerWidth(!0),
                    h = i != null ? i : o.lightbox.outerHeight(!0),
                    r = 0,
                    e = 0;
                e = u.x + (f.x - c) / 2, this.visible ? r = u.y + (f.y - h) / 2 : this.options.emergefrom == "bottom" ? r = u.y + f.y + 14 : this.options.emergefrom == "top" ? r = u.y - h - 14 : this.options.emergefrom == "right" ? (e = f.x, r = u.y + (f.y - h) / 2) : this.options.emergefrom == "left" && (e = -c, r = u.y + (f.y - h) / 2), this.visible ? (this.animations.move || this.morph(o.move, {
                    left: parseInt(e, 10)
                }, "move"), this.morph(o.move, {
                    top: parseInt(r, 10)
                }, "move")) : o.move.css({
                    left: parseInt(e, 10),
                    top: parseInt(r, 10)
                })
            },
            morph: function (t, i, r, f, e) {
                var s = jQuery.fn.jquery.split("."),
                    o;
                if (s[0] == 1 && s[1] < 8) return o = n.speed({
                    queue: e || !1,
                    duration: u ? this.options.animation[r].duration / 2 : this.options.animation[r].duration,
                    easing: this.options.animation[r].easing,
                    complete: n.isFunction(f) ? this.proxy(f, this) : null
                }), t[o.queue === !1 ? "each" : "queue"](function () {
                    var t, u, r;
                    s[1] > 5 && o.queue === !1 && n._mark(this), t = n.extend({}, o), u = this, t.curAnim = n.extend({}, i), t.animatedProperties = {};
                    for (r in i) name = r, t.animatedProperties[name] = t.specialEasing && t.specialEasing[name] || t.easing || "swing";
                    return n.each(i, function (i, r) {
                        var f = new n.fx(u, t, i);
                        f.custom(f.cur(!0) || 0, r, "px")
                    }), !0
                });
                t.animate(i, {
                    queue: e || !1,
                    duration: u ? this.options.animation[r].duration / 2 : this.options.animation[r].duration,
                    easing: this.options.animation[r].easing,
                    complete: n.isFunction(f) ? this.proxy(f, this) : null
                })
            },
            resize: function (t, i) {
                var r = this.esqueleto;
                if (this.visible) {
                    var f = {
                            x: n(this.win).width(),
                            y: n(this.win).height()
                        },
                        u = {
                            x: n(this.win).scrollLeft(),
                            y: n(this.win).scrollTop()
                        },
                        e = Math.max(u.x + (f.x - (t + 14)) / 2, 0),
                        o = Math.max(u.y + (f.y - (i + 14)) / 2, 0);
                    this.animations.move = !0, this.morph(r.move.stop(), {
                        left: this.maximized && e < 0 ? 0 : e,
                        top: this.maximized && i + 14 > f.y ? u.y : o
                    }, "move", n.proxy(function () {
                        this.move = !1
                    }, this.animations)), this.morph(r.html, {
                        height: i - 20
                    }, "move"), this.morph(r.lightbox.stop(), {
                        width: t + 14,
                        height: i - 20
                    }, "move", {}, !0), this.morph(r.navigator, {
                        width: t
                    }, "move"), this.morph(r.navigator, {
                        top: (i - r.navigator.height()) / 2
                    }, "move"), this.morph(r.background.stop(), {
                        width: t,
                        height: i
                    }, "move", function () {
                        n(r.background).trigger("complete")
                    })
                } else r.html.css({
                    height: i - 20
                }), r.lightbox.css({
                    width: t + 14,
                    height: i - 20
                }), r.background.css({
                    width: t,
                    height: i
                }), r.navigator.css({
                    width: t
                })
            },
            close: function (t) {
                var i = this.esqueleto,
                    r;
                this.visible = !1, this.gallery = {}, this.options.onClose(), r = i.html.children(".jwplayer"), r.length > 0 && typeof jwplayer != "undefined" && jwplayer(r[0]).remove(), o || !e.opacity || u ? (i.background.empty(), i.html.find("iframe").attr("src", ""), o ? setTimeout(function () {
                    i.html.hide().empty().show()
                }, 100) : i.html.hide().empty().show(), i.buttons.custom.empty(), i.move.css("display", "none"), this.movebox()) : i.move.animate({
                    opacity: 0,
                    top: "-=40"
                }, {
                    queue: !1,
                    complete: this.proxy(function () {
                        i.background.empty(), i.html.empty(), i.buttons.custom.empty(), this.movebox(), i.move.css({
                            display: "none",
                            opacity: 1,
                            overflow: "visible"
                        })
                    })
                }), this.overlay.hide(this.proxy(function () {
                    n.isFunction(this.callback) && this.callback.apply(this, n.makeArray(t))
                })), i.background.stop(!0, !1).unbind("complete")
            },
            open: function () {
                this.visible = !0, e.opacity || this.esqueleto.move.get(0).style.removeAttribute("filter"), this.esqueleto.move.stop().css({
                    opacity: 1,
                    display: "block",
                    overflow: "visible"
                }).show(), this.overlay.show()
            },
            shake: function () {
                for (var r = this.options.animation.shake, e = r.distance, u = r.duration, n = r.transition, o = r.loops, t = this.esqueleto.move.position().left, i = this.esqueleto.move, f = 0; f < o; f++) i.animate({
                    left: t + e
                }, u, n), i.animate({
                    left: t - e
                }, u, n);
                i.animate({
                    left: t + e
                }, u, n), i.animate({
                    left: t
                }, u, n)
            },
            changemode: function (n) {
                if (n != this.mode) {
                    var t = this.options.name + "-mode-";
                    this.esqueleto.lightbox.removeClass(t + this.mode).addClass(t + n), this.mode = n
                }
                this.esqueleto.move.css("overflow", "visible")
            },
            error: function (n) {
                alert(n), this.close()
            },
            unserialize: function (t) {
                var r = /lightbox\[([^\]]*)?\]$/i,
                    i = {};
                return t.match(/#/) && (t = t.slice(0, t.indexOf("#"))), t = t.slice(t.indexOf("?") + 1).split("&"), n.each(t, function () {
                    var t = this.split("="),
                        u = t[0],
                        n = t[1];
                    u.match(r) && (isFinite(n) ? n = parseFloat(n) : n.toLowerCase() == "true" ? n = !0 : n.toLowerCase() == "false" && (n = !1), i[u.match(r)[1]] = n)
                }), i
            },
            calculate: function (n, t) {
                var r = this.options.maxsize.width > 0 ? this.options.maxsize.width : this.win.width() - 50,
                    i = this.options.maxsize.height > 0 ? this.options.maxsize.height : this.win.height() - 50;
                return n > r ? (t = t * (r / n), n = r, t > i && (n = n * (i / t), t = i)) : t > i && (n = n * (i / t), t = i, n > r && (t = t * (r / n), n = r)), {
                    width: parseInt(n, 10),
                    height: parseInt(t, 10)
                }
            },
            loading: function () {
                var t = this.options.style,
                    n = this.esqueleto,
                    i = n.background;
                this.changemode("image"), i.children().stop(!0), i.empty(), n.html.empty(), n.buttons.div.hide(), n.buttons.div.css("width"), i.addClass(this.options.name + "-loading"), this.visible == !1 && (this.movebox(t.width, t.height), this.resize(t.width, t.height))
            },
            maximinimize: function () {
                var n = this,
                    u = n.esqueleto.buttons,
                    r = n.esqueleto.image,
                    t = n.options.name,
                    i = {};
                u.max.removeClass(t + "-button-min " + t + "-button-max").addClass(n.maximized ? t + "-button-max" : t + "-button-min"), n.loading(), n.loadimage(), u.div.show(), i = n.maximized ? n.calculate(r.width, r.height) : r, n.resize(i.width, i.height), n.maximized = !n.maximized
            },
            getOptions: function (t) {
                var t = n(t);
                return n.extend({}, {
                    href: t.attr("href"),
                    rel: n.trim(t.attr("data-rel") || t.attr("rel")),
                    relent: t.attr("data-rel") ? "data-rel" : "rel",
                    title: n.trim(t.attr("data-title") || t.attr("title")),
                    element: t[0]
                }, n.parseJSON((t.attr("data-options") || "{}").replace(/\'/g, '"')) || {})
            },
            link: function (t, i) {
                var u = n(i.element),
                    s = this.getOptions(u),
                    o = s.rel,
                    e = s.relent,
                    l = i.options,
                    r = [];
                if (u.blur(), i.gallery) r = i.gallery;
                else if (this.utils.isEmpty(o) || o === "nofollow") r = [s];
                else {
                    var f = [],
                        h = [],
                        c = !1;
                    n("a[" + e + "], area[" + e + "]", this.ownerDocument).filter("[" + e + '="' + o + '"]').each(n.proxy(function (n, t) {
                        u[0] === t ? (f.unshift(this.getOptions(t)), c = !0) : c == !1 ? h.push(this.getOptions(t)) : f.push(this.getOptions(t))
                    }, this)), r = f.concat(h)
                }
                return n.lightbox(r, l, i.callback, u), !1
            },
            utils: {
                isEmpty: function (t) {
                    return t == null ? !0 : Object.prototype.toString.call(t) === "[object String]" || n.type(t) === "array" ? t.length === 0 : void 0
                }
            }
        },
        lightbox: function (t, i, r) {
            var f = [],
                e, u;
            if (n.LightBoxObject.utils.isEmpty(t)) return n.LightBoxObject;
            if (n.type(t) === "string") f = [n.extend({}, {
                href: t
            }, i)];
            else if (n.type(t) === "array") {
                if (e = t[0], n.type(e) === "string")
                    for (u = 0; u < t.length; u++) f[u] = n.extend({}, {
                        href: t[u]
                    }, i);
                else if (n.type(e) === "object")
                    for (u = 0; u < t.length; u++) f[u] = n.extend({}, i, t[u])
            } else n.type(t) === "object" && t[0].nodeType && (f = [n.extend({}, {
                type: "element",
                href: "#",
                element: t
            }, i)]);
            return n.LightBoxObject.show(f, i, r)
        }
    }), n.fn.lightbox = function (t, i) {
        var r = {
            selector: this.selector,
            options: t,
            callback: i
        };
        return n(this).live("click", function (t) {
            return t.preventDefault(), t.stopImmediatePropagation(), n.proxy(n.LightBoxObject.link, n.LightBoxObject)(t, n.extend({}, r, {
                element: this
            }))
        })
    }, n(function () {
        var t = jQuery.fn.jquery.split(".");
        if (t[0] > 1 || t[0] == 1 && t[1] > 3) n.LightBoxObject.create();
        else throw "The jQuery version that was loaded is too old. Lightbox Evolution requires jQuery 1.4+";
    })
})(jQuery, window, document)