window.Modernizr = function (n, t, i) {
        function a(n) {
            c.cssText = n
        }

        function yt(n, t) {
            return a(w.join(n + ";") + (t || ""))
        }

        function h(n, t) {
            return typeof n === t
        }

        function v(n, t) {
            return !!~("" + n).indexOf(t)
        }

        function st(n, t) {
            var u, r;
            for (u in n)
                if (r = n[u], !v(r, "-") && c[r] !== i) return t == "pfx" ? r : !0;
            return !1
        }

        function vt(n, t, r) {
            var f, u;
            for (f in n)
                if (u = t[n[f]], u !== i) return r === !1 ? n[f] : h(u, "function") ? u.bind(r || t) : u;
            return !1
        }

        function f(n, t, i) {
            var r = n.charAt(0).toUpperCase() + n.slice(1),
                u = (n + " " + ht.join(r + " ") + r).split(" ");
            return h(t, "string") || h(t, "undefined") ? st(u, t) : (u = (n + " " + ct.join(r + " ") + r).split(" "), vt(u, t, i))
        }

        function at() {
            u.input = function (i) {
                for (var r = 0, u = i.length; r < u; r++) p[i[r]] = i[r] in e;
                return p.list && (p.list = !!t.createElement("datalist") && !!n.HTMLDataListElement), p
            }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), u.inputtypes = function (n) {
                for (var f = 0, r, u, o, h = n.length; f < h; f++) e.setAttribute("type", u = n[f]), r = e.type !== "text", r && (e.value = it, e.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(u) && e.style.WebkitAppearance !== i ? (s.appendChild(e), o = t.defaultView, r = o.getComputedStyle && o.getComputedStyle(e, null).WebkitAppearance !== "textfield" && e.offsetHeight !== 0, s.removeChild(e)) : /^(search|tel)$/.test(u) || (r = /^(url|email)$/.test(u) ? e.checkValidity && e.checkValidity() === !1 : e.value != it)), ft[n[f]] = !!r;
                return ft
            }("search tel url email datetime date month week time datetime-local number range color".split(" "))
        }
        var wt = "2.6.2",
            u = {},
            g = !0,
            s = t.documentElement,
            o = "modernizr",
            ot = t.createElement(o),
            c = ot.style,
            e = t.createElement("input"),
            it = ":)",
            et = {}.toString,
            w = " -webkit- -moz- -o- -ms- ".split(" "),
            lt = "Webkit Moz O ms",
            ht = lt.split(" "),
            ct = lt.toLowerCase().split(" "),
            d = {
                svg: "http://www.w3.org/2000/svg"
            },
            r = {},
            ft = {},
            p = {},
            nt = [],
            rt = nt.slice,
            y, l = function (n, i, r, u) {
                var v, l, c, a, f = t.createElement("div"),
                    h = t.body,
                    e = h || t.createElement("body");
                if (parseInt(r, 10))
                    while (r--) c = t.createElement("div"), c.id = u ? u[r] : o + (r + 1), f.appendChild(c);
                return v = ["&#173;", '<style id="s', o, '">', n, "</style>"].join(""), f.id = o, (h ? f : e).innerHTML += v, e.appendChild(f), h || (e.style.background = "", e.style.overflow = "hidden", a = s.style.overflow, s.style.overflow = "hidden", s.appendChild(e)), l = i(f, n), h ? f.parentNode.removeChild(f) : (e.parentNode.removeChild(e), s.style.overflow = a), !!l
            },
            pt = function (t) {
                var r = n.matchMedia || n.msMatchMedia,
                    i;
                return r ? r(t).matches : (l("@media " + t + " { #" + o + " { position: absolute; } }", function (t) {
                    i = (n.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle).position == "absolute"
                }), i)
            },
            ut = function () {
                function r(r, u) {
                    u = u || t.createElement(n[r] || "div"), r = "on" + r;
                    var f = r in u;
                    return f || (u.setAttribute || (u = t.createElement("div")), u.setAttribute && u.removeAttribute && (u.setAttribute(r, ""), f = h(u[r], "function"), h(u[r], "undefined") || (u[r] = i), u.removeAttribute(r))), u = null, f
                }
                var n = {
                    select: "input",
                    change: "input",
                    submit: "form",
                    reset: "form",
                    error: "img",
                    load: "img",
                    abort: "img"
                };
                return r
            }(),
            tt = {}.hasOwnProperty,
            b, k;
        b = !h(tt, "undefined") && !h(tt.call, "undefined") ? function (n, t) {
            return tt.call(n, t)
        } : function (n, t) {
            return t in n && h(n.constructor.prototype[t], "undefined")
        }, Function.prototype.bind || (Function.prototype.bind = function (n) {
            var t = this,
                r, i;
            if (typeof t != "function") throw new TypeError;
            return r = rt.call(arguments, 1), i = function () {
                var f, e, u;
                return this instanceof i ? (f = function () {}, f.prototype = t.prototype, e = new f, u = t.apply(e, r.concat(rt.call(arguments))), Object(u) === u ? u : e) : t.apply(n, r.concat(rt.call(arguments)))
            }, i
        }), r.flexbox = function () {
            return f("flexWrap")
        }, r.canvas = function () {
            var n = t.createElement("canvas");
            return !!n.getContext && !!n.getContext("2d")
        }, r.canvastext = function () {
            return !!u.canvas && !!h(t.createElement("canvas").getContext("2d").fillText, "function")
        }, r.webgl = function () {
            return !!n.WebGLRenderingContext
        }, r.touch = function () {
            var i;
            return "ontouchstart" in n || n.DocumentTouch && t instanceof DocumentTouch ? i = !0 : l(["@media (", w.join("touch-enabled),("), o, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function (n) {
                i = n.offsetTop === 9
            }), i
        }, r.geolocation = function () {
            return "geolocation" in navigator
        }, r.postmessage = function () {
            return !!n.postMessage
        }, r.websqldatabase = function () {
            return !!n.openDatabase
        }, r.indexedDB = function () {
            return !!f("indexedDB", n)
        }, r.hashchange = function () {
            return ut("hashchange", n) && (t.documentMode === i || t.documentMode > 7)
        }, r.history = function () {
            return !!n.history && !!history.pushState
        }, r.draganddrop = function () {
            var n = t.createElement("div");
            return "draggable" in n || "ondragstart" in n && "ondrop" in n
        }, r.websockets = function () {
            return "WebSocket" in n || "MozWebSocket" in n
        }, r.rgba = function () {
            return a("background-color:rgba(150,255,150,.5)"), v(c.backgroundColor, "rgba")
        }, r.hsla = function () {
            return a("background-color:hsla(120,40%,100%,.5)"), v(c.backgroundColor, "rgba") || v(c.backgroundColor, "hsla")
        }, r.multiplebgs = function () {
            return a("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(c.background)
        }, r.backgroundsize = function () {
            return f("backgroundSize")
        }, r.borderimage = function () {
            return f("borderImage")
        }, r.borderradius = function () {
            return f("borderRadius")
        }, r.boxshadow = function () {
            return f("boxShadow")
        }, r.textshadow = function () {
            return t.createElement("div").style.textShadow === ""
        }, r.opacity = function () {
            return yt("opacity:.55"), /^0.55$/.test(c.opacity)
        }, r.cssanimations = function () {
            return f("animationName")
        }, r.csscolumns = function () {
            return f("columnCount")
        }, r.cssgradients = function () {
            var n = "background-image:",
                i = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
                t = "linear-gradient(left top,#9f9, white);";
            return a((n + "-webkit- ".split(" ").join(i + n) + w.join(t + n)).slice(0, -n.length)), v(c.backgroundImage, "gradient")
        }, r.cssreflections = function () {
            return f("boxReflect")
        }, r.csstransforms = function () {
            return !!f("transform")
        }, r.csstransforms3d = function () {
            var n = !!f("perspective");
            return n && "webkitPerspective" in s.style && l("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function (t) {
                n = t.offsetLeft === 9 && t.offsetHeight === 3
            }), n
        }, r.csstransitions = function () {
            return f("transition")
        }, r.fontface = function () {
            var n;
            return l('@font-face {font-family:"font";src:url("https://")}', function (i, r) {
                var e = t.getElementById("smodernizr"),
                    u = e.sheet || e.styleSheet,
                    f = u ? u.cssRules && u.cssRules[0] ? u.cssRules[0].cssText : u.cssText || "" : "";
                n = /src/i.test(f) && f.indexOf(r.split(" ")[0]) === 0
            }), n
        }, r.generatedcontent = function () {
            var n;
            return l(["#", o, "{font:0/0 a}#", o, ':after{content:"', it, '";visibility:hidden;font:3px/1 a}'].join(""), function (t) {
                n = t.offsetHeight >= 3
            }), n
        }, r.video = function () {
            var i = t.createElement("video"),
                n = !1;
            try {
                (n = !!i.canPlayType) && (n = new Boolean(n), n.ogg = i.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), n.h264 = i.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), n.webm = i.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
            } catch (r) {}
            return n
        }, r.audio = function () {
            var i = t.createElement("audio"),
                n = !1;
            try {
                (n = !!i.canPlayType) && (n = new Boolean(n), n.ogg = i.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), n.mp3 = i.canPlayType("audio/mpeg;").replace(/^no$/, ""), n.wav = i.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), n.m4a = (i.canPlayType("audio/x-m4a;") || i.canPlayType("audio/aac;")).replace(/^no$/, ""))
            } catch (r) {}
            return n
        }, r.localstorage = function () {
            try {
                return localStorage.setItem(o, o), localStorage.removeItem(o), !0
            } catch (n) {
                return !1
            }
        }, r.sessionstorage = function () {
            try {
                return sessionStorage.setItem(o, o), sessionStorage.removeItem(o), !0
            } catch (n) {
                return !1
            }
        }, r.webworkers = function () {
            return !!n.Worker
        }, r.applicationcache = function () {
            return !!n.applicationCache
        }, r.svg = function () {
            return !!t.createElementNS && !!t.createElementNS(d.svg, "svg").createSVGRect
        }, r.inlinesvg = function () {
            var n = t.createElement("div");
            return n.innerHTML = "<svg/>", (n.firstChild && n.firstChild.namespaceURI) == d.svg
        }, r.smil = function () {
            return !!t.createElementNS && /SVGAnimate/.test(et.call(t.createElementNS(d.svg, "animate")))
        }, r.svgclippaths = function () {
            return !!t.createElementNS && /SVGClipPath/.test(et.call(t.createElementNS(d.svg, "clipPath")))
        };
        for (k in r) b(r, k) && (y = k.toLowerCase(), u[y] = r[k](), nt.push((u[y] ? "" : "no-") + y));
        return u.input || at(), u.addTest = function (n, t) {
                if (typeof n == "object")
                    for (var r in n) b(n, r) && u.addTest(r, n[r]);
                else {
                    if (n = n.toLowerCase(), u[n] !== i) return u;
                    t = typeof t == "function" ? t() : t, typeof g != "undefined" && g && (s.className += " " + (t ? "" : "no-") + n), u[n] = t
                }
                return u
            }, a(""), ot = e = null,
            function (n, t) {
                function y(n, t) {
                    var r = n.createElement("p"),
                        i = n.getElementsByTagName("head")[0] || n.documentElement;
                    return r.innerHTML = "x<style>" + t + "</style>", i.insertBefore(r.lastChild, i.firstChild)
                }

                function a() {
                    var n = i.elements;
                    return typeof n == "string" ? n.split(" ") : n
                }

                function o(n) {
                    var t = h[n[s]];
                    return t || (t = {}, e++, n[s] = e, h[e] = t), t
                }

                function l(n, i, u) {
                    if (i || (i = t), r) return i.createElement(n);
                    u || (u = o(i));
                    var f;
                    return f = u.cache[n] ? u.cache[n].cloneNode() : p.test(n) ? (u.cache[n] = u.createElem(n)).cloneNode() : u.createElem(n), f.canHaveChildren && !v.test(n) ? u.frag.appendChild(f) : f
                }

                function b(n, i) {
                    if (n || (n = t), r) return n.createDocumentFragment();
                    i = i || o(n);
                    for (var e = i.frag.cloneNode(), u = 0, f = a(), s = f.length; u < s; u++) e.createElement(f[u]);
                    return e
                }

                function w(n, t) {
                    t.cache || (t.cache = {}, t.createElem = n.createElement, t.createFrag = n.createDocumentFragment, t.frag = t.createFrag()), n.createElement = function (r) {
                        return i.shivMethods ? l(r, n, t) : t.createElem(r)
                    }, n.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + a().join().replace(/\w+/g, function (n) {
                        return t.createElem(n), t.frag.createElement(n), 'c("' + n + '")'
                    }) + ");return n}")(i, t.frag)
                }

                function c(n) {
                    n || (n = t);
                    var f = o(n);
                    return i.shivCSS && !u && !f.hasCSS && (f.hasCSS = !!y(n, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), r || w(n, f), n
                }
                var f = n.html5 || {},
                    v = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                    p = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                    u, s = "_html5shiv",
                    e = 0,
                    h = {},
                    r, i;
                (function () {
                    try {
                        var n = t.createElement("a");
                        n.innerHTML = "<xyz></xyz>", u = "hidden" in n, r = n.childNodes.length == 1 || function () {
                            t.createElement("a");
                            var n = t.createDocumentFragment();
                            return typeof n.cloneNode == "undefined" || typeof n.createDocumentFragment == "undefined" || typeof n.createElement == "undefined"
                        }()
                    } catch (i) {
                        u = !0, r = !0
                    }
                })(), i = {
                    elements: f.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
                    shivCSS: f.shivCSS !== !1,
                    supportsUnknownElements: r,
                    shivMethods: f.shivMethods !== !1,
                    type: "default",
                    shivDocument: c,
                    createElement: l,
                    createDocumentFragment: b
                }, n.html5 = i, c(t)
            }(this, t), u._version = wt, u._prefixes = w, u._domPrefixes = ct, u._cssomPrefixes = ht, u.mq = pt, u.hasEvent = ut, u.testProp = function (n) {
                return st([n])
            }, u.testAllProps = f, u.testStyles = l, u.prefixed = function (n, t, i) {
                return t ? f(n, t, i) : f(n, "pfx")
            }, s.className = s.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (g ? " js " + nt.join(" ") : ""), u
    }(this, this.document),
    function (n, t, i) {
        function c(n) {
            return "[object Function]" == p.call(n)
        }

        function v(n) {
            return "string" == typeof n
        }

        function h() {}

        function k(n) {
            return !n || "loaded" == n || "complete" == n || "uninitialized" == n
        }

        function f() {
            var n = a.shift();
            l = 1, n ? n.t ? s(function () {
                ("c" == n.t ? r.injectCss : r.injectJs)(n.s, 0, n.a, n.x, n.e, 1)
            }, 0) : (n(), f()) : l = 0
        }

        function et(n, i, o, h, c, v, y) {
            function d(t) {
                if (!g && k(p.readyState) && (b.r = g = 1, !l && f(), p.onload = p.onreadystatechange = null, t)) {
                    "img" != n && s(function () {
                        rt.removeChild(p)
                    }, 50);
                    for (var r in u[i]) u[i].hasOwnProperty(r) && u[i][r].onload()
                }
            }
            var y = y || r.errorTimeout,
                p = t.createElement(n),
                g = 0,
                w = 0,
                b = {
                    t: o,
                    s: i,
                    e: c,
                    a: v,
                    x: y
                };
            1 === u[i] && (w = 1, u[i] = []), "object" == n ? p.data = i : (p.src = i, p.type = n), p.width = p.height = "0", p.onerror = p.onload = p.onreadystatechange = function () {
                d.call(this, w)
            }, a.splice(h, 0, b), "img" != n && (w || 2 === u[i] ? (rt.insertBefore(p, nt ? null : e), s(d, y)) : u[i].push(p))
        }

        function ft(n, t, i, r, u) {
            return l = 0, t = t || "j", v(n) ? et("c" == t ? ut : g, n, t, this.i++, i, r, u) : (a.splice(this.i++, 0, n), 1 == a.length && f()), this
        }

        function it() {
            var n = r;
            return n.loader = {
                load: ft,
                i: 0
            }, n
        }
        var o = t.documentElement,
            s = n.setTimeout,
            e = t.getElementsByTagName("script")[0],
            p = {}.toString,
            a = [],
            l = 0,
            tt = "MozAppearance" in o.style,
            nt = tt && !!t.createRange().compareNode,
            rt = nt ? o : e.parentNode,
            o = n.opera && "[object Opera]" == p.call(n.opera),
            o = !!t.attachEvent && !o,
            g = tt ? "object" : o ? "script" : "img",
            ut = o ? "script" : g,
            w = Array.isArray || function (n) {
                return "[object Array]" == p.call(n)
            },
            y = [],
            u = {},
            b = {
                timeout: function (n, t) {
                    return t.length && (n.timeout = t[0]), n
                }
            },
            d, r;
        r = function (n) {
            function l(n) {
                for (var n = n.split("!"), e = y.length, i = n.pop(), f = n.length, i = {
                        url: i,
                        origUrl: i,
                        prefixes: n
                    }, u, r, t = 0; t < f; t++) r = n[t].split("="), (u = b[r.shift()]) && (i = u(i, r));
                for (t = 0; t < e; t++) i = y[t](i);
                return i
            }

            function o(n, t, r, f, e) {
                var o = l(n),
                    s = o.autoCallback;
                o.url.split(".").pop().split("?").shift(), o.bypass || (t && (t = c(t) ? t : t[n] || t[f] || t[n.split("/").pop().split("?")[0]]), o.instead ? o.instead(n, t, r, f, e) : (u[o.url] ? o.noexec = !0 : u[o.url] = 1, r.load(o.url, o.forceCSS || !o.forceJS && "css" == o.url.split(".").pop().split("?").shift() ? "c" : i, o.noexec, o.attrs, o.timeout), (c(t) || c(s)) && r.load(function () {
                    it(), t && t(o.origUrl, e, f), s && s(o.origUrl, e, f), u[o.url] = 2
                })))
            }

            function s(n, t) {
                function l(n, f) {
                    if (n) {
                        if (v(n)) f || (i = function () {
                            var n = [].slice.call(arguments);
                            e.apply(this, n), u()
                        }), o(n, i, t, 0, s);
                        else if (Object(n) === n)
                            for (r in a = function () {
                                    var i = 0,
                                        t;
                                    for (t in n) n.hasOwnProperty(t) && i++;
                                    return i
                                }(), n) n.hasOwnProperty(r) && (!f && !--a && (c(i) ? i = function () {
                                var n = [].slice.call(arguments);
                                e.apply(this, n), u()
                            } : i[r] = function (n) {
                                return function () {
                                    var t = [].slice.call(arguments);
                                    n && n.apply(this, t), u()
                                }
                            }(e[r])), o(n[r], i, t, r, s))
                    } else !f && u()
                }
                var s = !!n.test,
                    f = n.load || n.both,
                    i = n.callback || h,
                    e = i,
                    u = n.complete || h,
                    a, r;
                l(s ? n.yep : n.nope, !!f), f && l(f)
            }
            var f, t, e = this.yepnope.loader;
            if (v(n)) o(n, 0, e, 0);
            else if (w(n))
                for (f = 0; f < n.length; f++) t = n[f], v(t) ? o(t, 0, e, 0) : w(t) ? r(t) : Object(t) === t && s(t, e);
            else Object(n) === n && s(n, e)
        }, r.addPrefix = function (n, t) {
            b[n] = t
        }, r.addFilter = function (n) {
            y.push(n)
        }, r.errorTimeout = 1e4, null == t.readyState && t.addEventListener && (t.readyState = "loading", t.addEventListener("DOMContentLoaded", d = function () {
            t.removeEventListener("DOMContentLoaded", d, 0), t.readyState = "complete"
        }, 0)), n.yepnope = it(), n.yepnope.executeStack = f, n.yepnope.injectJs = function (n, i, u, o, c, l) {
            var a = t.createElement("script"),
                v, y, o = o || r.errorTimeout;
            a.src = n;
            for (y in u) a.setAttribute(y, u[y]);
            i = l ? f : i || h, a.onreadystatechange = a.onload = function () {
                !v && k(a.readyState) && (v = 1, i(), a.onload = a.onreadystatechange = null)
            }, s(function () {
                v || (v = 1, i(1))
            }, o), c ? a.onload() : e.parentNode.insertBefore(a, e)
        }, n.yepnope.injectCss = function (n, i, r, u, o, c) {
            var u = t.createElement("link"),
                l, i = c ? f : i || h;
            u.href = n, u.rel = "stylesheet", u.type = "text/css";
            for (l in r) u.setAttribute(l, r[l]);
            o || (e.parentNode.insertBefore(u, e), s(i, 0))
        }
    }(this, document), Modernizr.load = function () {
        yepnope.apply(window, [].slice.call(arguments, 0))
    },
    function (n) {
        n.fn.ruler = function (t) {
            var o = {
                    vRuleSize: 18,
                    hRuleSize: 18,
                    showCrosshair: !0,
                    showMousePos: !0
                },
                i = n.extend({}, o, t),
                s = '<div class="ruler hRule"></div>',
                h = '<div class="ruler vRule"></div>',
                e = '<div class="ruler corner"></div>',
                r = '<div class="vMouse"></div>',
                u = '<div class="hMouse"></div>',
                f = '<div class="mousePosBox">x: 50%, y: 50%</div>';
            return Modernizr.touch || (i.showCrosshair && n("body").append(r, u), i.showMousePos && n("body").append(f), (i.showCrosshair || i.showMousePos) && n(window).mousemove(function (t) {
                if (i.showCrosshair && (n(".vMouse").css("top", t.pageY - n(document).scrollTop() - 2), n(".hMouse").css("left", t.pageX - 2)), i.showMousePos && n("#tools_zuobiao").attr("checked")) {
                    var u = parseInt(t.pageX - i.vRuleSize - BOXRULELEFT - 2),
                        r = parseInt(t.pageY - i.hRuleSize - BOXRULETOP - 9);
                    u < 0 || r < 0 || u > BOXRULEWIDTH || r > BOXRULEHEIGHT ? n(".mousePosBox").hide() : n(".mousePosBox").show(), n(".mousePosBox").html("x:" + u + ", y:" + r).css({
                        top: t.pageY - n(document).scrollTop() + 16,
                        left: t.pageX + 12
                    })
                }
            })), n(window).resize(function () {
                var e = n(".hRule"),
                    f = n(".vRule"),
                    r, u;
                for (e.empty(), f.empty().height(0).outerHeight(f.parent().outerHeight()), r = i.vRuleSize, u = ""; r <= e.width();)(r - i.vRuleSize) % 50 == 0 ? (u = "<div class='tickLabel'>" + (r - i.vRuleSize) + "</div>", n(u).css("left", r + "px").appendTo(e)) : (r - i.vRuleSize) % 10 == 0 ? (u = "<div class='tickMajor'></div>", n(u).css("left", r + "px").appendTo(e)) : (r - i.vRuleSize) % 5 == 0 && (u = "<div class='tickMinor'></div>", n(u).css("left", r + "px").appendTo(e)), r = r + 5;
                for (r = i.hRuleSize, u = ""; r <= f.height();)(r - i.hRuleSize) % 50 == 0 ? (u = "<div class='tickLabel'><span>" + (r - i.hRuleSize) + "</span></div>", n(u).css("top", r + "px").appendTo(f)) : (r - i.hRuleSize) % 10 == 0 ? (u = "<div class='tickMajor'></div>", n(u).css("top", r + "px").appendTo(f)) : (r - i.hRuleSize) % 5 == 0 && (u = "<div class='tickMinor'></div>", n(u).css("top", r + "px").appendTo(f)), r = r + 5
            }), this.each(function () {
                var u = n(this),
                    c;
                i.hRuleSize > 0 && n(s).height(i.hRuleSize).prependTo(u), i.vRuleSize > 0 && (c = u.outerWidth(), n(h).width(i.vRuleSize).height(u.outerHeight()).prependTo(u)), i.vRuleSize > 0 && i.hRuleSize > 0 && n(e).css({
                    width: i.vRuleSize,
                    height: i.hRuleSize
                }).prependTo(u);
                for (var f = u.children(".hRule"), o = u.children(".vRule"), t = i.vRuleSize, r = ""; t <= f.width();)(t - i.vRuleSize) % 50 == 0 ? (r = "<div class='tickLabel'>" + (t - i.vRuleSize) + "</div>", n(r).css("left", t + "px").appendTo(f)) : (t - i.vRuleSize) % 10 == 0 ? (r = "<div class='tickMajor'></div>", n(r).css("left", t + "px").appendTo(f)) : (t - i.vRuleSize) % 5 == 0 && (r = "<div class='tickMinor'></div>", n(r).css("left", t + "px").appendTo(f)), t = t + 5;
                for (t = i.hRuleSize, r = ""; t <= o.height();)(t - i.hRuleSize) % 50 == 0 ? (r = "<div class='tickLabel'><span>" + (t - i.hRuleSize) + "</span></div>", n(r).css("top", t + "px").appendTo(o)) : (t - i.hRuleSize) % 10 == 0 ? (r = "<div class='tickMajor'></div>", n(r).css("top", t + "px").appendTo(o)) : (t - i.hRuleSize) % 5 == 0 && (r = "<div class='tickMinor'></div>", n(r).css("top", t + "px").appendTo(o)), t = t + 5
            })
        }
    }(jQuery)