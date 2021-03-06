(function (n, t) {
    function et(n) {
        return i.isWindow(n) ? n : n.nodeType === 9 ? n.defaultView || n.parentWindow : !1
    }

    function bt(n) {
        if (!ut[n]) {
            var e = r.body,
                t = i("<" + n + ">").appendTo(e),
                u = t.css("display");
            t.remove(), 
            (u === "none" || u === "") && (f || (f = r.createElement("iframe"), 
            f.frameBorder = f.width = f.height = 0), 
            e.appendChild(f), 
            h && f.createElement || (h = (f.contentWindow || f.contentDocument).document, 
            h.write((r.compatMode === "CSS1Compat" ? "<!doctype html>" : "") + "<html><body>"),
            h.close()), t = h.createElement(n), h.body.appendChild(t), u = i.css(t, "display"),e.removeChild(f)), 
            ut[n] = u
        }
        return ut[n]
    }

    function v(n, t) {
        var r = {};
        return i.each(tr.concat.apply([], tr.slice(0, t)), function () {
            r[this] = n
        }), r
    }

    function nf() {
        p = t
    }

    function bi() {
        return setTimeout(nf, 0), p = i.now()
    }

    function tf() {
        try {
            return new n.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }

    function ur() {
        try {
            return new n.XMLHttpRequest
        } catch (t) {}
    }

    function du(n, r) {
        n.dataFilter && (r = n.dataFilter(r, n.dataType));
        for (var v = n.dataTypes, s = {}, l, p = v.length, a, f = v[0], h, y, u, o, e, c = 1; c < p; c++) {
            if (c === 1)
                for (l in n.converters) typeof l == "string" && (s[l.toLowerCase()] = n.converters[l]);
            if (h = f, f = v[c], f === "*") f = h;
            else if (h !== "*" && h !== f) {
                if (y = h + " " + f, u = s[y] || s["* " + f], !u) {
                    e = t;
                    for (o in s)
                        if (a = o.split(" "), (a[0] === h || a[0] === "*") && (e = s[a[1] + " " + f], e)) {
                            o = s[o], o === !0 ? u = e : e === !0 && (u = o);
                            break
                        }
                }!u && !e && i.error("No conversion from " + y.replace(" ", " to ")), u !== !0 && (r = u ? u(r) : e(o(r)))
            }
        }
        return r
    }

    function gu(n, i, r) {
        var h = n.contents,
            f = n.dataTypes,
            c = n.responseFields,
            o, u, e, s;
        for (u in c) u in r && (i[c[u]] = r[u]);
        while (f[0] === "*") f.shift(), o === t && (o = n.mimeType || i.getResponseHeader("content-type"));
        if (o)
            for (u in h)
                if (h[u] && h[u].test(o)) {
                    f.unshift(u);
                    break
                } if (f[0] in r) e = f[0];
        else {
            for (u in r) {
                if (!f[0] || n.converters[u + " " + f[0]]) {
                    e = u;
                    break
                }
                s || (s = u)
            }
            e = e || s
        }
        if (e) return e !== f[0] && f.unshift(e), r[e]
    }

    function rt(n, t, r, u) {
        if (i.isArray(t)) i.each(t, function (t, f) {
            r || dr.test(n) ? u(n, f) : rt(n + "[" + (typeof f == "object" || i.isArray(f) ? t : "") + "]", f, r, u)
        });
        else if (r || t == null || typeof t != "object") u(n, t);
        else
            for (var f in t) rt(n + "[" + f + "]", t[f], r, u)
    }

    function yi(n, r) {
        var u, f, e = i.ajaxSettings.flatOptions || {};
        for (u in r) r[u] !== t && ((e[u] ? n : f || (f = {}))[u] = r[u]);
        f && i.extend(!0, n, f)
    }

    function tt(n, i, r, u, f, e) {
        f = f || i.dataTypes[0], e = e || {}, e[f] = !0;
        for (var h = n[f], c = 0, l = h ? h.length : 0, s = n === st, o; c < l && (s || !o); c++) o = h[c](i, r, u), typeof o == "string" && (!s || e[o] ? o = t : (i.dataTypes.unshift(o), o = tt(n, i, r, u, o, e)));
        return (s || !o) && !e["*"] && (o = tt(n, i, r, u, "*", e)), o
    }

    function er(n) {
        return function (t, r) {
            if (typeof t != "string" && (r = t, t = "*"), i.isFunction(r))
                for (var s = t.toLowerCase().split(lt), e = 0, h = s.length, u, o, f; e < h; e++) u = s[e], f = /^\+/.test(u), f && (u = u.substr(1) || "*"), o = n[u] = n[u] || [], o[f ? "unshift" : "push"](r)
        }
    }

    function vr(n, t, r) {
        var u = t === "width" ? n.offsetWidth : n.offsetHeight,
            e = t === "width" ? pf : su,
            f = 0,
            o = e.length;
        if (u > 0) {
            if (r !== "border")
                for (; f < o; f++) r || (u -= parseFloat(i.css(n, "padding" + e[f])) || 0), r === "margin" ? u += parseFloat(i.css(n, r + e[f])) || 0 : u -= parseFloat(i.css(n, "border" + e[f] + "Width")) || 0;
            return u + "px"
        }
        if (u = l(n, t, t), (u < 0 || u == null) && (u = n.style[t] || 0), u = parseFloat(u) || 0, r)
            for (; f < o; f++) u += parseFloat(i.css(n, "padding" + e[f])) || 0, r !== "padding" && (u += parseFloat(i.css(n, "border" + e[f] + "Width")) || 0), r === "margin" && (u += parseFloat(i.css(n, r + e[f])) || 0);
        return u + "px"
    }

    function rf(n, t) {
        t.src ? i.ajax({
            url: t.src,
            async: !1,
            dataType: "script"
        }) : i.globalEval((t.text || t.textContent || t.innerHTML || "").replace(hf, "/*$0*/")), t.parentNode && t.parentNode.removeChild(t)
    }

    function ef(n) {
        var t = r.createElement("div");
        return li.appendChild(t), t.innerHTML = n.outerHTML, t.firstChild
    }

    function nr(n) {
        var t = (n.nodeName || "").toLowerCase();
        t === "input" ? hr(n) : t !== "script" && typeof n.getElementsByTagName != "undefined" && i.grep(n.getElementsByTagName("input"), hr)
    }

    function hr(n) {
        (n.type === "checkbox" || n.type === "radio") && (n.defaultChecked = n.checked)
    }

    function g(n) {
        return typeof n.getElementsByTagName != "undefined" ? n.getElementsByTagName("*") : typeof n.querySelectorAll != "undefined" ? n.querySelectorAll("*") : []
    }

    function fi(n, t) {
        var r;
        t.nodeType === 1 && (t.clearAttributes && t.clearAttributes(), t.mergeAttributes && t.mergeAttributes(n), r = t.nodeName.toLowerCase(), r === "object" ? t.outerHTML = n.outerHTML : r !== "input" || n.type !== "checkbox" && n.type !== "radio" ? r === "option" ? t.selected = n.defaultSelected : (r === "input" || r === "textarea") && (t.defaultValue = n.defaultValue) : (n.checked && (t.defaultChecked = t.checked = n.checked), t.value !== n.value && (t.value = n.value)), t.removeAttribute(i.expando))
    }

    function ui(n, t) {
        if (t.nodeType === 1 && !!i.hasData(n)) {
            var f, u, o, s = i._data(n),
                e = i._data(t, s),
                r = s.events;
            if (r) {
                delete e.handle, e.events = {};
                for (f in r)
                    for (u = 0, o = r[f].length; u < o; u++) i.event.add(t, f + (r[f][u].namespace ? "." : "") + r[f][u].namespace, r[f][u], r[f][u].data)
            }
            e.data && (e.data = i.extend({}, e.data))
        }
    }

    function of (n) {
        return i.nodeName(n, "table") ? n.getElementsByTagName("tbody")[0] || n.appendChild(n.ownerDocument.createElement("tbody")) : n
    }

    function ci(n) {
        var i = pt.split("|"),
            t = n.createDocumentFragment();
        if (t.createElement)
            while (i.length) t.createElement(i.pop());
        return t
    }

    function ni(n, t, r) {
        if (t = t || 0, i.isFunction(t)) return i.grep(n, function (n, i) {
            var u = !!t.call(n, i, n);
            return u === r
        });
        if (t.nodeType) return i.grep(n, function (n) {
            return n === t === r
        });
        if (typeof t == "string") {
            var u = i.grep(n, function (n) {
                return n.nodeType === 1
            });
            if (gf.test(t)) return i.filter(t, u, !r);
            t = i.filter(t, u)
        }
        return i.grep(n, function (n) {
            return i.inArray(n, t) >= 0 === r
        })
    }

    function dt(n) {
        return !n || !n.parentNode || n.parentNode.nodeType === 11
    }

    function w() {
        return !0
    }

    function c() {
        return !1
    }

    function fr(n, t, r) {
        var e = t + "defer",
            o = t + "queue",
            u = t + "mark",
            f = i._data(n, e);
        f && (r === "queue" || !i._data(n, o)) && (r === "mark" || !i._data(n, u)) && setTimeout(function () {
            !i._data(n, o) && !i._data(n, u) && (i.removeData(n, e, !0), f.fire())
        }, 0)
    }

    function ct(n) {
        for (var t in n)
            if ((t !== "data" || !i.isEmptyObject(n[t])) && t !== "toJSON") return !1;
        return !0
    }

    function ir(n, r, u) {
        if (u === t && n.nodeType === 1) {
            var f = "data-" + r.replace(wi, "-$1").toLowerCase();
            if (u = n.getAttribute(f), typeof u == "string") {
                try {
                    u = u === "true" ? !0 : u === "false" ? !1 : u === "null" ? null : i.isNumeric(u) ? parseFloat(u) : gi.test(u) ? i.parseJSON(u) : u
                } catch (e) {}
                i.data(n, r, u)
            } else u = t
        }
        return u
    }

    function uf(n) {
        var r = rr[n] = {},
            t, i;
        for (n = n.split(/\s+/), t = 0, i = n.length; t < i; t++) r[n[t]] = !0;
        return r
    }
    var r = n.document,
        ff = n.navigator,
        ku = n.location,
        i = function () {
            function b() {
                if (!i.isReady) {
                    try {
                        r.documentElement.doScroll("left")
                    } catch (n) {
                        setTimeout(b, 1);
                        return
                    }
                    i.ready()
                }
            }
            var i = function (n, t) {
                    return new i.fn.init(n, t, y)
                },
                g = n.jQuery,
                it = n.$,
                y, tt = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
                p = /\S/,
                v = /^\s+/,
                w = /\s+$/,
                st = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
                et = /^[\],:{}\s]*$/,
                ot = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
                ft = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                rt = /(?:^|:|,)(?:\s*\[)+/g,
                ut = /(webkit)[ \/]([\w.]+)/,
                nt = /(opera)(?:.*version)?[ \/]([\w.]+)/,
                at = /(msie) ([\w.]+)/,
                vt = /(mozilla)(?:.*? rv:([\w.]+))?/,
                lt = /-([a-z]|[0-9])/ig,
                ht = /^-ms-/,
                ct = function (n, t) {
                    return (t + "").toUpperCase()
                },
                k = ff.userAgent,
                e, o, u, d = Object.prototype.toString,
                h = Object.prototype.hasOwnProperty,
                s = Array.prototype.push,
                f = Array.prototype.slice,
                l = String.prototype.trim,
                a = Array.prototype.indexOf,
                c = {};
            return i.fn = i.prototype = {
                constructor: i,
                init: function (n, u, f) {
                    var o, s, e, h;
                    if (!n) return this;
                    if (n.nodeType) return this.context = this[0] = n, this.length = 1, this;
                    if (n === "body" && !u && r.body) return this.context = r, this[0] = r.body, this.selector = n, this.length = 1, this;
                    if (typeof n == "string") {
                        if (o = n.charAt(0) !== "<" || n.charAt(n.length - 1) !== ">" || n.length < 3 ? tt.exec(n) : [null, n, null], o && (o[1] || !u)) {
                            if (o[1]) return u = u instanceof i ? u[0] : u, h = u ? u.ownerDocument || u : r, e = st.exec(n), e ? i.isPlainObject(u) ? (n = [r.createElement(e[1])], i.fn.attr.call(n, u, !0)) : n = [h.createElement(e[1])] : (e = i.buildFragment([o[1]], [h]), n = (e.cacheable ? i.clone(e.fragment) : e.fragment).childNodes), i.merge(this, n);
                            if (s = r.getElementById(o[2]), s && s.parentNode) {
                                if (s.id !== o[2]) return f.find(n);
                                this.length = 1, this[0] = s
                            }
                            return this.context = r, this.selector = n, this
                        }
                        return !u || u.jquery ? (u || f).find(n) : this.constructor(u).find(n)
                    }
                    return i.isFunction(n) ? f.ready(n) : (n.selector !== t && (this.selector = n.selector, this.context = n.context), i.makeArray(n, this))
                },
                selector: "",
                jquery: "1.7.1",
                length: 0,
                size: function () {
                    return this.length
                },
                toArray: function () {
                    return f.call(this, 0)
                },
                get: function (n) {
                    return n == null ? this.toArray() : n < 0 ? this[this.length + n] : this[n]
                },
                pushStack: function (n, t, r) {
                    var u = this.constructor();
                    return i.isArray(n) ? s.apply(u, n) : i.merge(u, n), u.prevObject = this, u.context = this.context, t === "find" ? u.selector = this.selector + (this.selector ? " " : "") + r : t && (u.selector = this.selector + "." + t + "(" + r + ")"), u
                },
                each: function (n, t) {
                    return i.each(this, n, t)
                },
                ready: function (n) {
                    return i.bindReady(), o.add(n), this
                },
                eq: function (n) {
                    return n = +n, n === -1 ? this.slice(n) : this.slice(n, n + 1)
                },
                first: function () {
                    return this.eq(0)
                },
                last: function () {
                    return this.eq(-1)
                },
                slice: function () {
                    return this.pushStack(f.apply(this, arguments), "slice", f.call(arguments).join(","))
                },
                map: function (n) {
                    return this.pushStack(i.map(this, function (t, i) {
                        return n.call(t, i, t)
                    }))
                },
                end: function () {
                    return this.prevObject || this.constructor(null)
                },
                push: s,
                sort: [].sort,
                splice: [].splice
            }, i.fn.init.prototype = i.fn, i.extend = i.fn.extend = function () {
                var s, e, u, r, h, c, n = arguments[0] || {},
                    f = 1,
                    l = arguments.length,
                    o = !1;
                for (typeof n == "boolean" && (o = n, n = arguments[1] || {}, f = 2), typeof n != "object" && !i.isFunction(n) && (n = {}), l === f && (n = this, --f); f < l; f++)
                    if ((s = arguments[f]) != null)
                        for (e in s)(u = n[e], r = s[e], n !== r) && (o && r && (i.isPlainObject(r) || (h = i.isArray(r))) ? (h ? (h = !1, c = u && i.isArray(u) ? u : []) : c = u && i.isPlainObject(u) ? u : {}, n[e] = i.extend(o, c, r)) : r !== t && (n[e] = r));
                return n
            }, i.extend({
                noConflict: function (t) {
                    return n.$ === i && (n.$ = it), t && n.jQuery === i && (n.jQuery = g), i
                },
                isReady: !1,
                readyWait: 1,
                holdReady: function (n) {
                    n ? i.readyWait++ : i.ready(!0)
                },
                ready: function (n) {
                    if (n === !0 && !--i.readyWait || n !== !0 && !i.isReady) {
                        if (!r.body) return setTimeout(i.ready, 1);
                        if (i.isReady = !0, n !== !0 && --i.readyWait > 0) return;
                        o.fireWith(r, [i]), i.fn.trigger && i(r).trigger("ready").off("ready")
                    }
                },
                bindReady: function () {
                    if (!o) {
                        if (o = i.Callbacks("once memory"), r.readyState === "complete") return setTimeout(i.ready, 1);
                        if (r.addEventListener) r.addEventListener("DOMContentLoaded", u, !1), n.addEventListener("load", i.ready, !1);
                        else if (r.attachEvent) {
                            r.attachEvent("onreadystatechange", u), n.attachEvent("onload", i.ready);
                            var t = !1;
                            try {
                                t = n.frameElement == null
                            } catch (f) {}
                            r.documentElement.doScroll && t && b()
                        }
                    }
                },
                isFunction: function (n) {
                    return i.type(n) === "function"
                },
                isArray: Array.isArray || function (n) {
                    return i.type(n) === "array"
                },
                isWindow: function (n) {
                    return n && typeof n == "object" && "setInterval" in n
                },
                isNumeric: function (n) {
                    return !isNaN(parseFloat(n)) && isFinite(n)
                },
                type: function (n) {
                    return n == null ? String(n) : c[d.call(n)] || "object"
                },
                isPlainObject: function (n) {
                    if (!n || i.type(n) !== "object" || n.nodeType || i.isWindow(n)) return !1;
                    try {
                        if (n.constructor && !h.call(n, "constructor") && !h.call(n.constructor.prototype, "isPrototypeOf")) return !1
                    } catch (u) {
                        return !1
                    }
                    var r;
                    for (r in n);
                    return r === t || h.call(n, r)
                },
                isEmptyObject: function (n) {
                    for (var t in n) return !1;
                    return !0
                },
                error: function (n) {
                    throw new Error(n);
                },
                parseJSON: function (t) {
                    if (typeof t != "string" || !t) return null;
                    if (t = i.trim(t), n.JSON && n.JSON.parse) return n.JSON.parse(t);
                    if (et.test(t.replace(ot, "@").replace(ft, "]").replace(rt, ""))) return new Function("return " + t)();
                    i.error("Invalid JSON: " + t)
                },
                parseXML: function (r) {
                    var u, f;
                    try {
                        n.DOMParser ? (f = new DOMParser, u = f.parseFromString(r, "text/xml")) : (u = new ActiveXObject("Microsoft.XMLDOM"), u.async = "false", u.loadXML(r))
                    } catch (e) {
                        u = t
                    }
                    return (!u || !u.documentElement || u.getElementsByTagName("parsererror").length) && i.error("Invalid XML: " + r), u
                },
                noop: function () {},
                globalEval: function (t) {
                    t && p.test(t) && (n.execScript || function (t) {
                        n.eval.call(n, t)
                    })(t)
                },
                camelCase: function (n) {
                    return n.replace(ht, "ms-").replace(lt, ct)
                },
                nodeName: function (n, t) {
                    return n.nodeName && n.nodeName.toUpperCase() === t.toUpperCase()
                },
                each: function (n, r, u) {
                    var e, f = 0,
                        o = n.length,
                        s = o === t || i.isFunction(n);
                    if (u) {
                        if (s) {
                            for (e in n)
                                if (r.apply(n[e], u) === !1) break
                        } else
                            for (; f < o;)
                                if (r.apply(n[f++], u) === !1) break
                    } else if (s) {
                        for (e in n)
                            if (r.call(n[e], e, n[e]) === !1) break
                    } else
                        for (; f < o;)
                            if (r.call(n[f], f, n[f++]) === !1) break;
                    return n
                },
                trim: l ? function (n) {
                    return n == null ? "" : l.call(n)
                } : function (n) {
                    return n == null ? "" : (n + "").replace(v, "").replace(w, "")
                },
                makeArray: function (n, t) {
                    var u = t || [],
                        r;
                    return n != null && (r = i.type(n), n.length == null || r === "string" || r === "function" || r === "regexp" || i.isWindow(n) ? s.call(u, n) : i.merge(u, n)), u
                },
                inArray: function (n, t, i) {
                    var r;
                    if (t) {
                        if (a) return a.call(t, n, i);
                        for (r = t.length, i = i ? i < 0 ? Math.max(0, r + i) : i : 0; i < r; i++)
                            if (i in t && t[i] === n) return i
                    }
                    return -1
                },
                merge: function (n, i) {
                    var u = n.length,
                        r = 0,
                        f;
                    if (typeof i.length == "number")
                        for (f = i.length; r < f; r++) n[u++] = i[r];
                    else
                        while (i[r] !== t) n[u++] = i[r++];
                    return n.length = u, n
                },
                grep: function (n, t, i) {
                    var f = [],
                        e, r, u;
                    for (i = !!i, r = 0, u = n.length; r < u; r++) e = !!t(n[r], r), i !== e && f.push(n[r]);
                    return f
                },
                map: function (n, r, u) {
                    var o, h, f = [],
                        s = 0,
                        e = n.length,
                        c = n instanceof i || e !== t && typeof e == "number" && (e > 0 && n[0] && n[e - 1] || e === 0 || i.isArray(n));
                    if (c)
                        for (; s < e; s++) o = r(n[s], s, u), o != null && (f[f.length] = o);
                    else
                        for (h in n) o = r(n[h], h, u), o != null && (f[f.length] = o);
                    return f.concat.apply([], f)
                },
                guid: 1,
                proxy: function (n, r) {
                    var e, o, u;
                    return (typeof r == "string" && (e = n[r], r = n, n = e), !i.isFunction(n)) ? t : (o = f.call(arguments, 2), u = function () {
                        return n.apply(r, o.concat(f.call(arguments)))
                    }, u.guid = n.guid = n.guid || u.guid || i.guid++, u)
                },
                access: function (n, r, u, f, e, o) {
                    var c = n.length,
                        h, s;
                    if (typeof r == "object") {
                        for (h in r) i.access(n, h, r[h], f, e, u);
                        return n
                    }
                    if (u !== t) {
                        for (f = !o && f && i.isFunction(u), s = 0; s < c; s++) e(n[s], r, f ? u.call(n[s], s, e(n[s], r)) : u, o);
                        return n
                    }
                    return c ? e(n[0], r) : t
                },
                now: function () {
                    return +new Date
                },
                uaMatch: function (n) {
                    n = n.toLowerCase();
                    var t = ut.exec(n) || nt.exec(n) || at.exec(n) || n.indexOf("compatible") < 0 && vt.exec(n) || [];
                    return {
                        browser: t[1] || "",
                        version: t[2] || "0"
                    }
                },
                sub: function () {
                    function n(t, i) {
                        return new n.fn.init(t, i)
                    }
                    i.extend(!0, n, this), n.superclass = this, n.fn = n.prototype = this(), n.fn.constructor = n, n.sub = this.sub, n.fn.init = function (r, u) {
                        return u && u instanceof i && !(u instanceof n) && (u = n(u)), i.fn.init.call(this, r, u, t)
                    }, n.fn.init.prototype = n.fn;
                    var t = n(r);
                    return n
                },
                browser: {}
            }), i.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (n, t) {
                c["[object " + t + "]"] = t.toLowerCase()
            }), e = i.uaMatch(k), e.browser && (i.browser[e.browser] = !0, i.browser.version = e.version), i.browser.webkit && (i.browser.safari = !0), p.test(" ") && (v = /^[\s\xA0]+/, w = /[\s\xA0]+$/), y = i(r), r.addEventListener ? u = function () {
                r.removeEventListener("DOMContentLoaded", u, !1), i.ready()
            } : r.attachEvent && (u = function () {
                r.readyState === "complete" && (r.detachEvent("onreadystatechange", u), i.ready())
            }), i
        }(),
        rr = {},
        b, gi, wi, yr, y, k, ki, a, di, it;
    i.Callbacks = function (n) {
        n = n ? rr[n] || uf(n) : {};
        var r = [],
            f = [],
            u, s, c, h, e, l = function (t) {
                for (var u, e, h, f = 0, s = t.length; f < s; f++) u = t[f], e = i.type(u), e === "array" ? l(u) : e === "function" && (!n.unique || !o.has(u)) && r.push(u)
            },
            a = function (t, i) {
                for (i = i || [], u = !n.memory || [t, i], s = !0, e = c || 0, c = 0, h = r.length; r && e < h; e++)
                    if (r[e].apply(t, i) === !1 && n.stopOnFalse) {
                        u = !0;
                        break
                    } s = !1, r && (n.once ? u === !0 ? o.disable() : r = [] : f && f.length && (u = f.shift(), o.fireWith(u[0], u[1])))
            },
            o = {
                add: function () {
                    if (r) {
                        var n = r.length;
                        l(arguments), s ? h = r.length : u && u !== !0 && (c = n, a(u[0], u[1]))
                    }
                    return this
                },
                remove: function () {
                    var t;
                    if (r)
                        for (var u = arguments, i = 0, f = u.length; i < f; i++)
                            for (t = 0; t < r.length; t++)
                                if (u[i] === r[t] && (s && t <= h && (h--, t <= e && e--), r.splice(t--, 1), n.unique)) break;
                    return this
                },
                has: function (n) {
                    if (r)
                        for (var t = 0, i = r.length; t < i; t++)
                            if (n === r[t]) return !0;
                    return !1
                },
                empty: function () {
                    return r = [], this
                },
                disable: function () {
                    return r = f = u = t, this
                },
                disabled: function () {
                    return !r
                },
                lock: function () {
                    return f = t, (!u || u === !0) && o.disable(), this
                },
                locked: function () {
                    return !f
                },
                fireWith: function (t, i) {
                    return f && (s ? n.once || f.push([t, i]) : (!n.once || !u) && a(t, i)), this
                },
                fire: function () {
                    return o.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!u
                }
            };
        return o
    }, b = [].slice, i.extend({
        Deferred: function (n) {
            var u = i.Callbacks("once memory"),
                o = i.Callbacks("once memory"),
                e = i.Callbacks("memory"),
                s = "pending",
                h = {
                    resolve: u,
                    reject: o,
                    notify: e
                },
                f = {
                    done: u.add,
                    fail: o.add,
                    progress: e.add,
                    state: function () {
                        return s
                    },
                    isResolved: u.fired,
                    isRejected: o.fired,
                    then: function (n, i, r) {
                        return t.done(n).fail(i).progress(r), this
                    },
                    always: function () {
                        return t.done.apply(t, arguments).fail.apply(t, arguments), this
                    },
                    pipe: function (n, r, u) {
                        return i.Deferred(function (f) {
                            i.each({
                                done: [n, "resolve"],
                                fail: [r, "reject"],
                                progress: [u, "notify"]
                            }, function (n, r) {
                                var e = r[0],
                                    o = r[1],
                                    u;
                                i.isFunction(e) ? t[n](function () {
                                    u = e.apply(this, arguments), u && i.isFunction(u.promise) ? u.promise().then(f.resolve, f.reject, f.notify) : f[o + "With"](this === t ? f : this, [u])
                                }) : t[n](f[o])
                            })
                        }).promise()
                    },
                    promise: function (n) {
                        if (n == null) n = f;
                        else
                            for (var t in f) n[t] = f[t];
                        return n
                    }
                },
                t = f.promise({}),
                r;
            for (r in h) t[r] = h[r].fire, t[r + "With"] = h[r].fireWith;
            return t.done(function () {
                s = "resolved"
            }, o.disable, e.lock).fail(function () {
                s = "rejected"
            }, u.disable, e.lock), n && n.call(t, t), t
        },
        when: function (n) {
            function h(n) {
                return function (i) {
                    s[n] = arguments.length > 1 ? b.call(arguments, 0) : i, t.notifyWith(o, s)
                }
            }

            function c(n) {
                return function (i) {
                    r[n] = arguments.length > 1 ? b.call(arguments, 0) : i, --e || t.resolveWith(t, r)
                }
            }
            var r = b.call(arguments, 0),
                u = 0,
                f = r.length,
                s = Array(f),
                e = f,
                l = f,
                t = f <= 1 && n && i.isFunction(n.promise) ? n : i.Deferred(),
                o = t.promise();
            if (f > 1) {
                for (; u < f; u++) r[u] && r[u].promise && i.isFunction(r[u].promise) ? r[u].promise().then(c(u), t.reject, h(u)) : --e;
                e || t.resolveWith(t, r)
            } else t !== n && t.resolveWith(t, f ? [n] : []);
            return o
        }
    }), i.support = function () {
        var u, y, o, v, a, f, h, e, c, k, l, p, s, t = r.createElement("div"),
            b = r.documentElement;
        if (t.setAttribute("className", "t"), t.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>", y = t.getElementsByTagName("*"), o = t.getElementsByTagName("a")[0], !y || !y.length || !o) return {};
        v = r.createElement("select"), a = v.appendChild(r.createElement("option")), f = t.getElementsByTagName("input")[0], u = {
            leadingWhitespace: t.firstChild.nodeType === 3,
            tbody: !t.getElementsByTagName("tbody").length,
            htmlSerialize: !!t.getElementsByTagName("link").length,
            style: /top/.test(o.getAttribute("style")),
            hrefNormalized: o.getAttribute("href") === "/a",
            opacity: /^0.55/.test(o.style.opacity),
            cssFloat: !!o.style.cssFloat,
            checkOn: f.value === "on",
            optSelected: a.selected,
            getSetAttribute: t.className !== "t",
            enctype: !!r.createElement("form").enctype,
            html5Clone: r.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0
        }, f.checked = !0, u.noCloneChecked = f.cloneNode(!0).checked, v.disabled = !0, u.optDisabled = !a.disabled;
        try {
            delete t.test
        } catch (w) {
            u.deleteExpando = !1
        }
        if (!t.addEventListener && t.attachEvent && t.fireEvent && (t.attachEvent("onclick", function () {
                u.noCloneEvent = !1
            }), t.cloneNode(!0).fireEvent("onclick")), f = r.createElement("input"), f.value = "t", f.setAttribute("type", "radio"), u.radioValue = f.value === "t", f.setAttribute("checked", "checked"), t.appendChild(f), e = r.createDocumentFragment(), e.appendChild(t.lastChild), u.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, u.appendChecked = f.checked, e.removeChild(f), e.appendChild(t), t.innerHTML = "", n.getComputedStyle && (h = r.createElement("div"), h.style.width = "0", h.style.marginRight = "0", t.style.width = "2px", t.appendChild(h), u.reliableMarginRight = (parseInt((n.getComputedStyle(h, null) || {
                marginRight: 0
            }).marginRight, 10) || 0) === 0), t.attachEvent)
            for (p in {
                    submit: 1,
                    change: 1,
                    focusin: 1
                }) l = "on" + p, s = l in t, s || (t.setAttribute(l, "return;"), s = typeof t[l] == "function"), u[p + "Bubbles"] = s;
        return e.removeChild(t), e = v = a = h = t = f = null, i(function () {
            var f, h, n, b, w, e, y, v, l, a, p, o = r.getElementsByTagName("body")[0];
            !o || (y = 1, v = "position:absolute;top:0;left:0;width:1px;height:1px;margin:0;", l = "visibility:hidden;border:0;", a = "style='" + v + "border:5px solid #000;padding:0;'", p = "<div " + a + "><div></div></div><table " + a + " cellpadding='0' cellspacing='0'><tr><td></td></tr></table>", f = r.createElement("div"), f.style.cssText = l + "width:0;height:0;position:static;top:0;margin-top:" + y + "px", o.insertBefore(f, o.firstChild), t = r.createElement("div"), f.appendChild(t), t.innerHTML = "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>", c = t.getElementsByTagName("td"), s = c[0].offsetHeight === 0, c[0].style.display = "", c[1].style.display = "none", u.reliableHiddenOffsets = s && c[0].offsetHeight === 0, t.innerHTML = "", t.style.width = t.style.paddingLeft = "1px", i.boxModel = u.boxModel = t.offsetWidth === 2, typeof t.style.zoom != "undefined" && (t.style.display = "inline", t.style.zoom = 1, u.inlineBlockNeedsLayout = t.offsetWidth === 2, t.style.display = "", t.innerHTML = "<div style='width:4px;'></div>", u.shrinkWrapBlocks = t.offsetWidth !== 2), t.style.cssText = v + l, t.innerHTML = p, h = t.firstChild, n = h.firstChild, w = h.nextSibling.firstChild.firstChild, e = {
                doesNotAddBorder: n.offsetTop !== 5,
                doesAddBorderForTableAndCells: w.offsetTop === 5
            }, n.style.position = "fixed", n.style.top = "20px", e.fixedPosition = n.offsetTop === 20 || n.offsetTop === 15, n.style.position = n.style.top = "", h.style.overflow = "hidden", h.style.position = "relative", e.subtractsBorderForOverflowNotVisible = n.offsetTop === -5, e.doesNotIncludeMarginInBodyOffset = o.offsetTop !== y, o.removeChild(f), t = f = null, i.extend(u, e))
        }), u
    }(), gi = /^(?:\{.*\}|\[.*\])$/, wi = /([A-Z])/g, i.extend({
        cache: {},
        uuid: 0,
        expando: "jQuery" + (i.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function (n) {
            return n = n.nodeType ? i.cache[n[i.expando]] : n[i.expando], !!n && !ct(n)
        },
        data: function (n, r, u, f) {
            if (!!i.acceptData(n)) {
                var v, s, c, h = i.expando,
                    y = typeof r == "string",
                    l = n.nodeType,
                    o = l ? i.cache : n,
                    e = l ? n[h] : n[h] && h,
                    a = r === "events";
                return (!e || !o[e] || !a && !f && !o[e].data) && y && u === t ? void 0 : (e || (l ? n[h] = e = ++i.uuid : e = h), o[e] || (o[e] = {}, l || (o[e].toJSON = i.noop)), (typeof r == "object" || typeof r == "function") && (f ? o[e] = i.extend(o[e], r) : o[e].data = i.extend(o[e].data, r)), v = s = o[e], f || (s.data || (s.data = {}), s = s.data), u !== t && (s[i.camelCase(r)] = u), a && !s[r]) ? v.events : (y ? (c = s[r], c == null && (c = s[i.camelCase(r)])) : c = s, c)
            }
        },
        removeData: function (n, t, r) {
            if (!!i.acceptData(n)) {
                var e, s, c, o = i.expando,
                    h = n.nodeType,
                    u = h ? i.cache : n,
                    f = h ? n[o] : o;
                if (!u[f]) return;
                if (t && (e = r ? u[f] : u[f].data, e)) {
                    for (i.isArray(t) || (t in e ? t = [t] : (t = i.camelCase(t), t = t in e ? [t] : t.split(" "))), s = 0, c = t.length; s < c; s++) delete e[t[s]];
                    if (!(r ? ct : i.isEmptyObject)(e)) return
                }
                if (!r && (delete u[f].data, !ct(u[f]))) return;
                i.support.deleteExpando || !u.setInterval ? delete u[f] : u[f] = null, h && (i.support.deleteExpando ? delete n[o] : n.removeAttribute ? n.removeAttribute(o) : n[o] = null)
            }
        },
        _data: function (n, t, r) {
            return i.data(n, t, r, !0)
        },
        acceptData: function (n) {
            if (n.nodeName) {
                var t = i.noData[n.nodeName.toLowerCase()];
                if (t) return t !== !0 && n.getAttribute("classid") === t
            }
            return !0
        }
    }), i.fn.extend({
        data: function (n, r) {
            var u, s, e, f = null,
                o, h;
            if (typeof n == "undefined") {
                if (this.length && (f = i.data(this[0]), this[0].nodeType === 1 && !i._data(this[0], "parsedAttrs"))) {
                    for (s = this[0].attributes, o = 0, h = s.length; o < h; o++) e = s[o].name, e.indexOf("data-") === 0 && (e = i.camelCase(e.substring(5)), ir(this[0], e, f[e]));
                    i._data(this[0], "parsedAttrs", !0)
                }
                return f
            }
            return typeof n == "object" ? this.each(function () {
                i.data(this, n)
            }) : (u = n.split("."), u[1] = u[1] ? "." + u[1] : "", r === t) ? (f = this.triggerHandler("getData" + u[1] + "!", [u[0]]), f === t && this.length && (f = i.data(this[0], n), f = ir(this[0], n, f)), f === t && u[1] ? this.data(u[0]) : f) : this.each(function () {
                var f = i(this),
                    t = [u[0], r];
                f.triggerHandler("setData" + u[1] + "!", t), i.data(this, n, r), f.triggerHandler("changeData" + u[1] + "!", t)
            })
        },
        removeData: function (n) {
            return this.each(function () {
                i.removeData(this, n)
            })
        }
    }), i.extend({
        _mark: function (n, t) {
            n && (t = (t || "fx") + "mark", i._data(n, t, (i._data(n, t) || 0) + 1))
        },
        _unmark: function (n, t, r) {
            if (n !== !0 && (r = t, t = n, n = !1), t) {
                r = r || "fx";
                var u = r + "mark",
                    f = n ? 0 : (i._data(t, u) || 1) - 1;
                f ? i._data(t, u, f) : (i.removeData(t, u, !0), fr(t, r, "mark"))
            }
        },
        queue: function (n, t, r) {
            var u;
            if (n) return t = (t || "fx") + "queue", u = i._data(n, t), r && (!u || i.isArray(r) ? u = i._data(n, t, i.makeArray(r)) : u.push(r)), u || []
        },
        dequeue: function (n, t) {
            t = t || "fx";
            var u = i.queue(n, t),
                r = u.shift(),
                f = {};
            r === "inprogress" && (r = u.shift()), r && (t === "fx" && u.unshift("inprogress"), i._data(n, t + ".run", f), r.call(n, function () {
                i.dequeue(n, t)
            }, f)), u.length || (i.removeData(n, t + "queue " + t + ".run", !0), fr(n, t, "queue"))
        }
    }), i.fn.extend({
        queue: function (n, r) {
            return (typeof n != "string" && (r = n, n = "fx"), r === t) ? i.queue(this[0], n) : this.each(function () {
                var t = i.queue(this, n, r);
                n === "fx" && t[0] !== "inprogress" && i.dequeue(this, n)
            })
        },
        dequeue: function (n) {
            return this.each(function () {
                i.dequeue(this, n)
            })
        },
        delay: function (n, t) {
            return n = i.fx ? i.fx.speeds[n] || n : n, t = t || "fx", this.queue(t, function (t, i) {
                var r = setTimeout(t, n);
                i.stop = function () {
                    clearTimeout(r)
                }
            })
        },
        clearQueue: function (n) {
            return this.queue(n || "fx", [])
        },
        promise: function (n, r) {
            function c() {
                --s || h.resolveWith(u, [u])
            }
            typeof n != "string" && (r = n, n = t), n = n || "fx";
            for (var h = i.Deferred(), u = this, f = u.length, s = 1, e = n + "defer", l = n + "queue", a = n + "mark", o; f--;)(o = i.data(u[f], e, t, !0) || (i.data(u[f], l, t, !0) || i.data(u[f], a, t, !0)) && i.data(u[f], e, i.Callbacks("once memory"), !0)) && (s++, o.add(c));
            return c(), h.promise()
        }
    });
    var pi = /[\n\t\r]/g,
        d = /\s+/,
        lu = /\r/g,
        au = /^(?:button|input)$/i,
        hu = /^(?:button|input|object|select|textarea)$/i,
        cu = /^a(?:rea)?$/i,
        pr = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        cr = i.support.getSetAttribute,
        e, or, sr;
    i.fn.extend({
        attr: function (n, t) {
            return i.access(this, n, t, !0, i.attr)
        },
        removeAttr: function (n) {
            return this.each(function () {
                i.removeAttr(this, n)
            })
        },
        prop: function (n, t) {
            return i.access(this, n, t, !0, i.prop)
        },
        removeProp: function (n) {
            return n = i.propFix[n] || n, this.each(function () {
                try {
                    this[n] = t, delete this[n]
                } catch (i) {}
            })
        },
        addClass: function (n) {
            var u, e, s, t, f, r, o;
            if (i.isFunction(n)) return this.each(function (t) {
                i(this).addClass(n.call(this, t, this.className))
            });
            if (n && typeof n == "string")
                for (u = n.split(d), e = 0, s = this.length; e < s; e++)
                    if (t = this[e], t.nodeType === 1)
                        if (t.className || u.length !== 1) {
                            for (f = " " + t.className + " ", r = 0, o = u.length; r < o; r++) ~f.indexOf(" " + u[r] + " ") || (f += u[r] + " ");
                            t.className = i.trim(f)
                        } else t.className = n;
            return this
        },
        removeClass: function (n) {
            var o, e, h, r, u, f, s;
            if (i.isFunction(n)) return this.each(function (t) {
                i(this).removeClass(n.call(this, t, this.className))
            });
            if (n && typeof n == "string" || n === t)
                for (o = (n || "").split(d), e = 0, h = this.length; e < h; e++)
                    if (r = this[e], r.nodeType === 1 && r.className)
                        if (n) {
                            for (u = (" " + r.className + " ").replace(pi, " "), f = 0, s = o.length; f < s; f++) u = u.replace(" " + o[f] + " ", " ");
                            r.className = i.trim(u)
                        } else r.className = "";
            return this
        },
        toggleClass: function (n, t) {
            var r = typeof n,
                u = typeof t == "boolean";
            return i.isFunction(n) ? this.each(function (r) {
                i(this).toggleClass(n.call(this, r, this.className, t), t)
            }) : this.each(function () {
                if (r === "string")
                    for (var e, h = 0, o = i(this), f = t, s = n.split(d); e = s[h++];) f = u ? f : !o.hasClass(e), o[f ? "addClass" : "removeClass"](e);
                else(r === "undefined" || r === "boolean") && (this.className && i._data(this, "__className__", this.className), this.className = this.className || n === !1 ? "" : i._data(this, "__className__") || "")
            })
        },
        hasClass: function (n) {
            for (var r = " " + n + " ", t = 0, i = this.length; t < i; t++)
                if (this[t].nodeType === 1 && (" " + this[t].className + " ").replace(pi, " ").indexOf(r) > -1) return !0;
            return !1
        },
        val: function (n) {
            var r, u, e, f = this[0];
            return !arguments.length ? f ? (r = i.valHooks[f.nodeName.toLowerCase()] || i.valHooks[f.type], r && "get" in r && (u = r.get(f, "value")) !== t) ? u : (u = f.value, typeof u == "string" ? u.replace(lu, "") : u == null ? "" : u) : void 0 : (e = i.isFunction(n), this.each(function (u) {
                var o = i(this),
                    f;
                this.nodeType === 1 && (f = e ? n.call(this, u, o.val()) : n, f == null ? f = "" : typeof f == "number" ? f += "" : i.isArray(f) && (f = i.map(f, function (n) {
                    return n == null ? "" : n + ""
                })), r = i.valHooks[this.nodeName.toLowerCase()] || i.valHooks[this.type], r && "set" in r && r.set(this, f, "value") !== t || (this.value = f))
            }))
        }
    }), i.extend({
        valHooks: {
            option: {
                get: function (n) {
                    var t = n.attributes.value;
                    return !t || t.specified ? n.value : n.text
                }
            },
            select: {
                get: function (n) {
                    var o, e, h, t, r = n.selectedIndex,
                        s = [],
                        u = n.options,
                        f = n.type === "select-one";
                    if (r < 0) return null;
                    for (e = f ? r : 0, h = f ? r + 1 : u.length; e < h; e++)
                        if (t = u[e], t.selected && (i.support.optDisabled ? !t.disabled : t.getAttribute("disabled") === null) && (!t.parentNode.disabled || !i.nodeName(t.parentNode, "optgroup"))) {
                            if (o = i(t).val(), f) return o;
                            s.push(o)
                        } return f && !s.length && u.length ? i(u[r]).val() : s
                },
                set: function (n, t) {
                    var r = i.makeArray(t);
                    return i(n).find("option").each(function () {
                        this.selected = i.inArray(i(this).val(), r) >= 0
                    }), r.length || (n.selectedIndex = -1), r
                }
            }
        },
        attrFn: {
            val: !0,
            css: !0,
            html: !0,
            text: !0,
            data: !0,
            width: !0,
            height: !0,
            offset: !0
        },
        attr: function (n, r, u, f) {
            var s, o, c, h = n.nodeType;
            if (!!n && h !== 3 && h !== 8 && h !== 2) {
                if (f && r in i.attrFn) return i(n)[r](u);
                if (typeof n.getAttribute == "undefined") return i.prop(n, r, u);
                if (c = h !== 1 || !i.isXMLDoc(n), c && (r = r.toLowerCase(), o = i.attrHooks[r] || (pr.test(r) ? or : e)), u !== t) {
                    if (u === null) {
                        i.removeAttr(n, r);
                        return
                    }
                    return o && "set" in o && c && (s = o.set(n, u, r)) !== t ? s : (n.setAttribute(r, "" + u), u)
                }
                return o && "get" in o && c && (s = o.get(n, r)) !== null ? s : (s = n.getAttribute(r), s === null ? t : s)
            }
        },
        removeAttr: function (n, t) {
            var u, e, r, o, f = 0;
            if (t && n.nodeType === 1)
                for (e = t.toLowerCase().split(d), o = e.length; f < o; f++) r = e[f], r && (u = i.propFix[r] || r, i.attr(n, r, ""), n.removeAttribute(cr ? r : u), pr.test(r) && u in n && (n[u] = !1))
        },
        attrHooks: {
            type: {
                set: function (n, t) {
                    if (au.test(n.nodeName) && n.parentNode) i.error("type property can't be changed");
                    else if (!i.support.radioValue && t === "radio" && i.nodeName(n, "input")) {
                        var r = n.value;
                        return n.setAttribute("type", t), r && (n.value = r), t
                    }
                }
            },
            value: {
                get: function (n, t) {
                    return e && i.nodeName(n, "button") ? e.get(n, t) : t in n ? n.value : null
                },
                set: function (n, t, r) {
                    if (e && i.nodeName(n, "button")) return e.set(n, t, r);
                    n.value = t
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function (n, r, u) {
            var o, f, s, e = n.nodeType;
            if (!!n && e !== 3 && e !== 8 && e !== 2) return s = e !== 1 || !i.isXMLDoc(n), s && (r = i.propFix[r] || r, f = i.propHooks[r]), u !== t ? f && "set" in f && (o = f.set(n, u, r)) !== t ? o : n[r] = u : f && "get" in f && (o = f.get(n, r)) !== null ? o : n[r]
        },
        propHooks: {
            tabIndex: {
                get: function (n) {
                    var i = n.getAttributeNode("tabindex");
                    return i && i.specified ? parseInt(i.value, 10) : hu.test(n.nodeName) || cu.test(n.nodeName) && n.href ? 0 : t
                }
            }
        }
    }), i.attrHooks.tabindex = i.propHooks.tabIndex, or = {
        get: function (n, r) {
            var f, u = i.prop(n, r);
            return u === !0 || typeof u != "boolean" && (f = n.getAttributeNode(r)) && f.nodeValue !== !1 ? r.toLowerCase() : t
        },
        set: function (n, t, r) {
            var u;
            return t === !1 ? i.removeAttr(n, r) : (u = i.propFix[r] || r, u in n && (n[u] = !0), n.setAttribute(r, r.toLowerCase())), r
        }
    }, cr || (sr = {
        name: !0,
        id: !0
    }, e = i.valHooks.button = {
        get: function (n, i) {
            var r;
            return r = n.getAttributeNode(i), r && (sr[i] ? r.nodeValue !== "" : r.specified) ? r.nodeValue : t
        },
        set: function (n, t, i) {
            var u = n.getAttributeNode(i);
            return u || (u = r.createAttribute(i), n.setAttributeNode(u)), u.nodeValue = t + ""
        }
    }, i.attrHooks.tabindex.set = e.set, i.each(["width", "height"], function (n, t) {
        i.attrHooks[t] = i.extend(i.attrHooks[t], {
            set: function (n, i) {
                if (i === "") return n.setAttribute(t, "auto"), i
            }
        })
    }), i.attrHooks.contenteditable = {
        get: e.get,
        set: function (n, t, i) {
            t === "" && (t = "false"), e.set(n, t, i)
        }
    }), i.support.hrefNormalized || i.each(["href", "src", "width", "height"], function (n, r) {
        i.attrHooks[r] = i.extend(i.attrHooks[r], {
            get: function (n) {
                var i = n.getAttribute(r, 2);
                return i === null ? t : i
            }
        })
    }), i.support.style || (i.attrHooks.style = {
        get: function (n) {
            return n.style.cssText.toLowerCase() || t
        },
        set: function (n, t) {
            return n.style.cssText = "" + t
        }
    }), i.support.optSelected || (i.propHooks.selected = i.extend(i.propHooks.selected, {
        get: function (n) {
            var t = n.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    })), i.support.enctype || (i.propFix.enctype = "encoding"), i.support.checkOn || i.each(["radio", "checkbox"], function () {
        i.valHooks[this] = {
            get: function (n) {
                return n.getAttribute("value") === null ? "on" : n.value
            }
        }
    }), i.each(["radio", "checkbox"], function () {
        i.valHooks[this] = i.extend(i.valHooks[this], {
            set: function (n, t) {
                if (i.isArray(t)) return n.checked = i.inArray(i(n).val(), t) >= 0
            }
        })
    });
    var ft = /^(?:textarea|input|select)$/i,
        lr = /^([^\.]*)?(?:\.(.+))?$/,
        vu = /\bhover(\.\S+)?\b/,
        wu = /^key/,
        bu = /^(?:mouse|contextmenu)|click/,
        kt = /^(?:focusinfocus|focusoutblur)$/,
        yu = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,
        pu = function (n) {
            var t = yu.exec(n);
            return t && (t[1] = (t[1] || "").toLowerCase(), t[3] = t[3] && new RegExp("(?:^|\\s)" + t[3] + "(?:\\s|$)")), t
        },
        sf = function (n, t) {
            var i = n.attributes || {};
            return (!t[1] || n.nodeName.toLowerCase() === t[1]) && (!t[2] || (i.id || {}).value === t[2]) && (!t[3] || t[3].test((i["class"] || {}).value))
        },
        gt = function (n) {
            return i.event.special.hover ? n : n.replace(vu, "mouseenter$1 mouseleave$1")
        };
    i.event = {
            add: function (n, r, u, f, e) {
                var v, h, a, p, y, o, w, l, b, k, c, s;
                if (!(n.nodeType === 3 || n.nodeType === 8 || !r || !u || !(v = i._data(n)))) {
                    for (u.handler && (b = u, u = b.handler), u.guid || (u.guid = i.guid++), a = v.events, a || (v.events = a = {}), h = v.handle, h || (v.handle = h = function (n) {
                            return typeof i != "undefined" && (!n || i.event.triggered !== n.type) ? i.event.dispatch.apply(h.elem, arguments) : t
                        }, h.elem = n), r = i.trim(gt(r)).split(" "), p = 0; p < r.length; p++) y = lr.exec(r[p]) || [], o = y[1], w = (y[2] || "").split(".").sort(), s = i.event.special[o] || {}, o = (e ? s.delegateType : s.bindType) || o, s = i.event.special[o] || {}, l = i.extend({
                        type: o,
                        origType: y[1],
                        data: f,
                        handler: u,
                        guid: u.guid,
                        selector: e,
                        quick: pu(e),
                        namespace: w.join(".")
                    }, b), c = a[o], c || (c = a[o] = [], c.delegateCount = 0, s.setup && s.setup.call(n, f, w, h) !== !1 || (n.addEventListener ? n.addEventListener(o, h, !1) : n.attachEvent && n.attachEvent("on" + o, h))), s.add && (s.add.call(n, l), l.handler.guid || (l.handler.guid = u.guid)), e ? c.splice(c.delegateCount++, 0, l) : c.push(l), i.event.global[o] = !0;
                    n = null
                }
            },
            global: {},
            remove: function (n, t, r, u, f) {
                var y = i.hasData(n) && i._data(n),
                    v, p, e, k, h, b, l, a, c, w, o, s;
                if (!!y && !!(a = y.events)) {
                    for (t = i.trim(gt(t || "")).split(" "), v = 0; v < t.length; v++) {
                        if (p = lr.exec(t[v]) || [], e = k = p[1], h = p[2], !e) {
                            for (e in a) i.event.remove(n, e + t[v], r, u, !0);
                            continue
                        }
                        for (c = i.event.special[e] || {}, e = (u ? c.delegateType : c.bindType) || e, o = a[e] || [], b = o.length, h = h ? new RegExp("(^|\\.)" + h.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null, l = 0; l < o.length; l++) s = o[l], (f || k === s.origType) && (!r || r.guid === s.guid) && (!h || h.test(s.namespace)) && (!u || u === s.selector || u === "**" && s.selector) && (o.splice(l--, 1), s.selector && o.delegateCount--, c.remove && c.remove.call(n, s));
                        o.length === 0 && b !== o.length && ((!c.teardown || c.teardown.call(n, h) === !1) && i.removeEvent(n, e, y.handle), delete a[e])
                    }
                    i.isEmptyObject(a) && (w = y.handle, w && (w.elem = null), i.removeData(n, ["events", "handle"], !0))
                }
            },
            customEvent: {
                getData: !0,
                setData: !0,
                changeData: !0
            },
            trigger: function (r, u, f, e) {
                if (!f || f.nodeType !== 3 && f.nodeType !== 8) {
                    var o = r.type || r,
                        w = [],
                        p, k, c, s, h, a, l, v, y, b;
                    if (kt.test(o + i.event.triggered)) return;
                    if (o.indexOf("!") >= 0 && (o = o.slice(0, -1), k = !0), o.indexOf(".") >= 0 && (w = o.split("."), o = w.shift(), w.sort()), (!f || i.event.customEvent[o]) && !i.event.global[o]) return;
                    if (r = typeof r == "object" ? r[i.expando] ? r : new i.Event(o, r) : new i.Event(o), r.type = o, r.isTrigger = !0, r.exclusive = k, r.namespace = w.join("."), r.namespace_re = r.namespace ? new RegExp("(^|\\.)" + w.join("\\.(?:.*\\.)?") + "(\\.|$)") : null, a = o.indexOf(":") < 0 ? "on" + o : "", !f) {
                        p = i.cache;
                        for (c in p) p[c].events && p[c].events[o] && i.event.trigger(r, u, p[c].handle.elem, !0);
                        return
                    }
                    if (r.result = t, r.target || (r.target = f), u = u != null ? i.makeArray(u) : [], u.unshift(r), l = i.event.special[o] || {}, l.trigger && l.trigger.apply(f, u) === !1) return;
                    if (y = [
                            [f, l.bindType || o]
                        ], !e && !l.noBubble && !i.isWindow(f)) {
                        for (b = l.delegateType || o, s = kt.test(b + o) ? f : f.parentNode, h = null; s; s = s.parentNode) y.push([s, b]), h = s;
                        h && h === f.ownerDocument && y.push([h.defaultView || h.parentWindow || n, b])
                    }
                    for (c = 0; c < y.length && !r.isPropagationStopped(); c++) s = y[c][0], r.type = y[c][1], v = (i._data(s, "events") || {})[r.type] && i._data(s, "handle"), v && v.apply(s, u), v = a && s[a], v && i.acceptData(s) && v.apply(s, u) === !1 && r.preventDefault();
                    return r.type = o, !e && !r.isDefaultPrevented() && (!l._default || l._default.apply(f.ownerDocument, u) === !1) && (o !== "click" || !i.nodeName(f, "a")) && i.acceptData(f) && a && f[o] && (o !== "focus" && o !== "blur" || r.target.offsetWidth !== 0) && !i.isWindow(f) && (h = f[a], h && (f[a] = null), i.event.triggered = o, f[o](), i.event.triggered = t, h && (f[a] = h)), r.result
                }
            },
            dispatch: function (r) {
                r = i.event.fix(r || n.event);
                var h = (i._data(this, "events") || {})[r.type] || [],
                    p = h.delegateCount,
                    b = [].slice.call(arguments, 0),
                    k = !r.exclusive && !r.namespace,
                    y = [],
                    f, w, e, a, v, c, s, l, u, o, d;
                if (b[0] = r, r.delegateTarget = this, p && !r.target.disabled && (!r.button || r.type !== "click"))
                    for (a = i(this), a.context = this.ownerDocument || this, e = r.target; e != this; e = e.parentNode || this) {
                        for (c = {}, l = [], a[0] = e, f = 0; f < p; f++) u = h[f], o = u.selector, c[o] === t && (c[o] = u.quick ? sf(e, u.quick) : a.is(o)), c[o] && l.push(u);
                        l.length && y.push({
                            elem: e,
                            matches: l
                        })
                    }
                for (h.length > p && y.push({
                        elem: this,
                        matches: h.slice(p)
                    }), f = 0; f < y.length && !r.isPropagationStopped(); f++)
                    for (s = y[f], r.currentTarget = s.elem, w = 0; w < s.matches.length && !r.isImmediatePropagationStopped(); w++) u = s.matches[w], (k || !r.namespace && !u.namespace || r.namespace_re && r.namespace_re.test(u.namespace)) && (r.data = u.data, r.handleObj = u, v = ((i.event.special[u.origType] || {}).handle || u.handler).apply(s.elem, b), v !== t && (r.result = v, v === !1 && (r.preventDefault(), r.stopPropagation())));
                return r.result
            },
            props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function (n, t) {
                    return n.which == null && (n.which = t.charCode != null ? t.charCode : t.keyCode), n
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function (n, i) {
                    var s, f, u, e = i.button,
                        o = i.fromElement;
                    return n.pageX == null && i.clientX != null && (s = n.target.ownerDocument || r, f = s.documentElement, u = s.body, n.pageX = i.clientX + (f && f.scrollLeft || u && u.scrollLeft || 0) - (f && f.clientLeft || u && u.clientLeft || 0), n.pageY = i.clientY + (f && f.scrollTop || u && u.scrollTop || 0) - (f && f.clientTop || u && u.clientTop || 0)), !n.relatedTarget && o && (n.relatedTarget = o === n.target ? i.toElement : o), !n.which && e !== t && (n.which = e & 1 ? 1 : e & 2 ? 3 : e & 4 ? 2 : 0), n
                }
            },
            fix: function (n) {
                if (n[i.expando]) return n;
                var e, o, u = n,
                    f = i.event.fixHooks[n.type] || {},
                    s = f.props ? this.props.concat(f.props) : this.props;
                for (n = i.Event(u), e = s.length; e;) o = s[--e], n[o] = u[o];
                return n.target || (n.target = u.srcElement || r), n.target.nodeType === 3 && (n.target = n.target.parentNode), n.metaKey === t && (n.metaKey = n.ctrlKey), f.filter ? f.filter(n, u) : n
            },
            special: {
                ready: {
                    setup: i.bindReady
                },
                load: {
                    noBubble: !0
                },
                focus: {
                    delegateType: "focusin"
                },
                blur: {
                    delegateType: "focusout"
                },
                beforeunload: {
                    setup: function (n, t, r) {
                        i.isWindow(this) && (this.onbeforeunload = r)
                    },
                    teardown: function (n, t) {
                        this.onbeforeunload === t && (this.onbeforeunload = null)
                    }
                }
            },
            simulate: function (n, t, r, u) {
                var f = i.extend(new i.Event, r, {
                    type: n,
                    isSimulated: !0,
                    originalEvent: {}
                });
                u ? i.event.trigger(f, null, t) : i.event.dispatch.call(t, f), f.isDefaultPrevented() && r.preventDefault()
            }
        }, i.event.handle = i.event.dispatch, i.removeEvent = r.removeEventListener ? function (n, t, i) {
            n.removeEventListener && n.removeEventListener(t, i, !1)
        } : function (n, t, i) {
            n.detachEvent && n.detachEvent("on" + t, i)
        }, i.Event = function (n, t) {
            if (!(this instanceof i.Event)) return new i.Event(n, t);
            n && n.type ? (this.originalEvent = n, this.type = n.type, this.isDefaultPrevented = n.defaultPrevented || n.returnValue === !1 || n.getPreventDefault && n.getPreventDefault() ? w : c) : this.type = n, t && i.extend(this, t), this.timeStamp = n && n.timeStamp || i.now(), this[i.expando] = !0
        }, i.Event.prototype = {
            preventDefault: function () {
                this.isDefaultPrevented = w;
                var n = this.originalEvent;
                !n || (n.preventDefault ? n.preventDefault() : n.returnValue = !1)
            },
            stopPropagation: function () {
                this.isPropagationStopped = w;
                var n = this.originalEvent;
                !n || (n.stopPropagation && n.stopPropagation(), n.cancelBubble = !0)
            },
            stopImmediatePropagation: function () {
                this.isImmediatePropagationStopped = w, this.stopPropagation()
            },
            isDefaultPrevented: c,
            isPropagationStopped: c,
            isImmediatePropagationStopped: c
        }, i.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }, function (n, t) {
            i.event.special[n] = {
                delegateType: t,
                bindType: t,
                handle: function (n) {
                    var e = this,
                        u = n.relatedTarget,
                        r = n.handleObj,
                        o = r.selector,
                        f;
                    return u && (u === e || i.contains(e, u)) || (n.type = r.origType, f = r.handler.apply(this, arguments), n.type = t), f
                }
            }
        }), i.support.submitBubbles || (i.event.special.submit = {
            setup: function () {
                if (i.nodeName(this, "form")) return !1;
                i.event.add(this, "click._submit keypress._submit", function (n) {
                    var u = n.target,
                        r = i.nodeName(u, "input") || i.nodeName(u, "button") ? u.form : t;
                    r && !r._submit_attached && (i.event.add(r, "submit._submit", function (n) {
                        this.parentNode && !n.isTrigger && i.event.simulate("submit", this.parentNode, n, !0)
                    }), r._submit_attached = !0)
                })
            },
            teardown: function () {
                if (i.nodeName(this, "form")) return !1;
                i.event.remove(this, "._submit")
            }
        }), i.support.changeBubbles || (i.event.special.change = {
            setup: function () {
                if (ft.test(this.nodeName)) return (this.type === "checkbox" || this.type === "radio") && (i.event.add(this, "propertychange._change", function (n) {
                    n.originalEvent.propertyName === "checked" && (this._just_changed = !0)
                }), i.event.add(this, "click._change", function (n) {
                    this._just_changed && !n.isTrigger && (this._just_changed = !1, i.event.simulate("change", this, n, !0))
                })), !1;
                i.event.add(this, "beforeactivate._change", function (n) {
                    var t = n.target;
                    ft.test(t.nodeName) && !t._change_attached && (i.event.add(t, "change._change", function (n) {
                        this.parentNode && !n.isSimulated && !n.isTrigger && i.event.simulate("change", this.parentNode, n, !0)
                    }), t._change_attached = !0)
                })
            },
            handle: function (n) {
                var t = n.target;
                if (this !== t || n.isSimulated || n.isTrigger || t.type !== "radio" && t.type !== "checkbox") return n.handleObj.handler.apply(this, arguments)
            },
            teardown: function () {
                return i.event.remove(this, "._change"), ft.test(this.nodeName)
            }
        }), i.support.focusinBubbles || i.each({
            focus: "focusin",
            blur: "focusout"
        }, function (n, t) {
            var f = 0,
                u = function (n) {
                    i.event.simulate(t, n.target, i.event.fix(n), !0)
                };
            i.event.special[t] = {
                setup: function () {
                    f++ == 0 && r.addEventListener(n, u, !0)
                },
                teardown: function () {
                    --f == 0 && r.removeEventListener(n, u, !0)
                }
            }
        }), i.fn.extend({
            on: function (n, r, u, f, e) {
                var o, s;
                if (typeof n == "object") {
                    typeof r != "string" && (u = r, r = t);
                    for (s in n) this.on(s, r, u, n[s], e);
                    return this
                }
                if (u == null && f == null ? (f = r, u = r = t) : f == null && (typeof r == "string" ? (f = u, u = t) : (f = u, u = r, r = t)), f === !1) f = c;
                else if (!f) return this;
                return e === 1 && (o = f, f = function (n) {
                    return i().off(n), o.apply(this, arguments)
                }, f.guid = o.guid || (o.guid = i.guid++)), this.each(function () {
                    i.event.add(this, n, f, u, r)
                })
            },
            one: function (n, t, i, r) {
                return this.on.call(this, n, t, i, r, 1)
            },
            off: function (n, r, u) {
                var f, e;
                if (n && n.preventDefault && n.handleObj) return f = n.handleObj, i(n.delegateTarget).off(f.namespace ? f.type + "." + f.namespace : f.type, f.selector, f.handler), this;
                if (typeof n == "object") {
                    for (e in n) this.off(e, r, n[e]);
                    return this
                }
                return (r === !1 || typeof r == "function") && (u = r, r = t), u === !1 && (u = c), this.each(function () {
                    i.event.remove(this, n, u, r)
                })
            },
            bind: function (n, t, i) {
                return this.on(n, null, t, i)
            },
            unbind: function (n, t) {
                return this.off(n, null, t)
            },
            live: function (n, t, r) {
                i(this.context).on(n, this.selector, t, r);
                return this
            },
            die: function (n, t) {
                return i(this.context).off(n, this.selector || "**", t), this
            },
            delegate: function (n, t, i, r) {
                return this.on(t, n, i, r)
            },
            undelegate: function (n, t, i) {
                return arguments.length == 1 ? this.off(n, "**") : this.off(t, n, i)
            },
            trigger: function (n, t) {
                return this.each(function () {
                    i.event.trigger(n, t, this)
                })
            },
            triggerHandler: function (n, t) {
                if (this[0]) return i.event.trigger(n, t, this[0], !0)
            },
            toggle: function (n) {
                var r = arguments,
                    f = n.guid || i.guid++,
                    t = 0,
                    u = function (u) {
                        var f = (i._data(this, "lastToggle" + n.guid) || 0) % t;
                        return i._data(this, "lastToggle" + n.guid, f + 1), u.preventDefault(), r[f].apply(this, arguments) || !1
                    };
                for (u.guid = f; t < r.length;) r[t++].guid = f;
                return this.click(u)
            },
            hover: function (n, t) {
                return this.mouseenter(n).mouseleave(t || n)
            }
        }), i.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (n, t) {
            i.fn[t] = function (n, i) {
                return i == null && (i = n, n = null), arguments.length > 0 ? this.on(t, null, n, i) : this.trigger(t)
            }, i.attrFn && (i.attrFn[t] = !0), wu.test(t) && (i.event.fixHooks[t] = i.event.keyHooks), bu.test(t) && (i.event.fixHooks[t] = i.event.mouseHooks)
        }),
        function () {
            function b(t, i, r, u, f, e) {
                for (var s, c, h = 0, l = u.length; h < l; h++)
                    if (s = u[h], s) {
                        for (c = !1, s = s[t]; s;) {
                            if (s[o] === r) {
                                c = u[s.sizset];
                                break
                            }
                            if (s.nodeType === 1)
                                if (e || (s[o] = r, s.sizset = h), typeof i != "string") {
                                    if (s === i) {
                                        c = !0;
                                        break
                                    }
                                } else if (n.filter(i, [s]).length > 0) {
                                c = s;
                                break
                            }
                            s = s[t]
                        }
                        u[h] = c
                    }
            }

            function d(n, t, i, r, u, f) {
                for (var e, h, s = 0, c = r.length; s < c; s++)
                    if (e = r[s], e) {
                        for (h = !1, e = e[n]; e;) {
                            if (e[o] === i) {
                                h = r[e.sizset];
                                break
                            }
                            if (e.nodeType === 1 && !f && (e[o] = i, e.sizset = s), e.nodeName.toLowerCase() === t) {
                                h = e;
                                break
                            }
                            e = e[n]
                        }
                        r[s] = h
                    }
            }
            var w = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
                o = "sizcache" + (Math.random() + "").replace(".", ""),
                p = 0,
                g = Object.prototype.toString,
                l = !1,
                k = !0,
                e = /\\/g,
                it = /\r\n/g,
                c = /\W/,
                n, h, f, a, s, y;
            [0, 0].sort(function () {
                return k = !1, 0
            }), n = function (t, i, e, o) {
                var it;
                if (e = e || [], i = i || r, it = i, i.nodeType !== 1 && i.nodeType !== 9) return [];
                if (!t || typeof t != "string") return e;
                var v, a, h, d, l, p, b, c, rt = !0,
                    k = n.isXML(i),
                    s = [],
                    tt = t;
                do
                    if (w.exec(""), v = w.exec(tt), v && (tt = v[3], s.push(v[1]), v[2])) {
                        d = v[3];
                        break
                    } while (v);
                if (s.length > 1 && nt.exec(t))
                    if (s.length === 2 && u.relative[s[0]]) a = y(s[0] + s[1], i, o);
                    else
                        for (a = u.relative[s[0]] ? [i] : n(s.shift(), i); s.length;) t = s.shift(), u.relative[t] && (t += s.shift()), a = y(t, a, o);
                else if (!o && s.length > 1 && i.nodeType === 9 && !k && u.match.ID.test(s[0]) && !u.match.ID.test(s[s.length - 1]) && (l = n.find(s.shift(), i, k), i = l.expr ? n.filter(l.expr, l.set)[0] : l.set[0]), i)
                    for (l = o ? {
                            expr: s.pop(),
                            set: f(o)
                        } : n.find(s.pop(), s.length === 1 && (s[0] === "~" || s[0] === "+") && i.parentNode ? i.parentNode : i, k), a = l.expr ? n.filter(l.expr, l.set) : l.set, s.length > 0 ? h = f(a) : rt = !1; s.length;) p = s.pop(), b = p, u.relative[p] ? b = s.pop() : p = "", b == null && (b = i), u.relative[p](h, b, k);
                else h = s = [];
                if (h || (h = a), h || n.error(p || t), g.call(h) === "[object Array]")
                    if (rt)
                        if (i && i.nodeType === 1)
                            for (c = 0; h[c] != null; c++) h[c] && (h[c] === !0 || h[c].nodeType === 1 && n.contains(i, h[c])) && e.push(a[c]);
                        else
                            for (c = 0; h[c] != null; c++) h[c] && h[c].nodeType === 1 && e.push(a[c]);
                else e.push.apply(e, h);
                else f(h, e);
                return d && (n(d, it, e, o), n.uniqueSort(e)), e
            }, n.uniqueSort = function (n) {
                if (a && (l = k, n.sort(a), l))
                    for (var t = 1; t < n.length; t++) n[t] === n[t - 1] && n.splice(t--, 1);
                return n
            }, n.matches = function (t, i) {
                return n(t, null, null, i)
            }, n.matchesSelector = function (t, i) {
                return n(i, null, null, [t]).length > 0
            }, n.find = function (n, t, i) {
                var f, s, c, r, o, h;
                if (!n) return [];
                for (s = 0, c = u.order.length; s < c; s++)
                    if (o = u.order[s], (r = u.leftMatch[o].exec(n)) && (h = r[1], r.splice(1, 1), h.substr(h.length - 1) !== "\\" && (r[1] = (r[1] || "").replace(e, ""), f = u.find[o](r, t, i), f != null))) {
                        n = n.replace(u.match[o], "");
                        break
                    } return f || (f = typeof t.getElementsByTagName != "undefined" ? t.getElementsByTagName("*") : []), {
                    set: f,
                    expr: n
                }
            }, n.filter = function (i, r, f, e) {
                for (var o, c, h, v, y, b, p, l, w, k = i, a = [], s = r, d = r && r[0] && n.isXML(r[0]); i && r.length;) {
                    for (h in u.filter)
                        if ((o = u.leftMatch[h].exec(i)) != null && o[2]) {
                            if (b = u.filter[h], p = o[1], c = !1, o.splice(1, 1), p.substr(p.length - 1) === "\\") continue;
                            if (s === a && (a = []), u.preFilter[h])
                                if (o = u.preFilter[h](o, s, f, a, e, d), o) {
                                    if (o === !0) continue
                                } else c = v = !0;
                            if (o)
                                for (l = 0;
                                    (y = s[l]) != null; l++) y && (v = b(y, o, l, s), w = e ^ v, f && v != null ? w ? c = !0 : s[l] = !1 : w && (a.push(y), c = !0));
                            if (v !== t) {
                                if (f || (s = a), i = i.replace(u.match[h], ""), !c) return [];
                                break
                            }
                        } if (i === k)
                        if (c == null) n.error(i);
                        else break;
                    k = i
                }
                return s
            }, n.error = function (n) {
                throw new Error("Syntax error, unrecognized expression: " + n);
            };
            var v = n.getText = function (n) {
                    var r, u, t = n.nodeType,
                        i = "";
                    if (t) {
                        if (t === 1 || t === 9) {
                            if (typeof n.textContent == "string") return n.textContent;
                            if (typeof n.innerText == "string") return n.innerText.replace(it, "");
                            for (n = n.firstChild; n; n = n.nextSibling) i += v(n)
                        } else if (t === 3 || t === 4) return n.nodeValue
                    } else
                        for (r = 0; u = n[r]; r++) u.nodeType !== 8 && (i += v(u));
                    return i
                },
                u = n.selectors = {
                    order: ["ID", "NAME", "TAG"],
                    match: {
                        ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                        CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                        NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                        ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                        TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                        CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                        POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                        PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
                    },
                    leftMatch: {},
                    attrMap: {
                        "class": "className",
                        "for": "htmlFor"
                    },
                    attrHandle: {
                        href: function (n) {
                            return n.getAttribute("href")
                        },
                        type: function (n) {
                            return n.getAttribute("type")
                        }
                    },
                    relative: {
                        "+": function (t, i) {
                            var s = typeof i == "string",
                                e = s && !c.test(i),
                                o = s && !e,
                                u, f, r;
                            for (e && (i = i.toLowerCase()), u = 0, f = t.length; u < f; u++)
                                if (r = t[u]) {
                                    while ((r = r.previousSibling) && r.nodeType !== 1);
                                    t[u] = o || r && r.nodeName.toLowerCase() === i ? r || !1 : r === i
                                } o && n.filter(i, t, !0)
                        },
                        ">": function (t, i) {
                            var u, e = typeof i == "string",
                                r = 0,
                                o = t.length,
                                f;
                            if (e && !c.test(i))
                                for (i = i.toLowerCase(); r < o; r++) u = t[r], u && (f = u.parentNode, t[r] = f.nodeName.toLowerCase() === i ? f : !1);
                            else {
                                for (; r < o; r++) u = t[r], u && (t[r] = e ? u.parentNode : u.parentNode === i);
                                e && n.filter(i, t, !0)
                            }
                        },
                        "": function (n, t, i) {
                            var u, f = p++,
                                r = b;
                            typeof t == "string" && !c.test(t) && (t = t.toLowerCase(), u = t, r = d), r("parentNode", t, f, n, u, i)
                        },
                        "~": function (n, t, i) {
                            var u, f = p++,
                                r = b;
                            typeof t == "string" && !c.test(t) && (t = t.toLowerCase(), u = t, r = d), r("previousSibling", t, f, n, u, i)
                        }
                    },
                    find: {
                        ID: function (n, t, i) {
                            if (typeof t.getElementById != "undefined" && !i) {
                                var r = t.getElementById(n[1]);
                                return r && r.parentNode ? [r] : []
                            }
                        },
                        NAME: function (n, t) {
                            var u, r, i, f;
                            if (typeof t.getElementsByName != "undefined") {
                                for (u = [], r = t.getElementsByName(n[1]), i = 0, f = r.length; i < f; i++) r[i].getAttribute("name") === n[1] && u.push(r[i]);
                                return u.length === 0 ? null : u
                            }
                        },
                        TAG: function (n, t) {
                            if (typeof t.getElementsByTagName != "undefined") return t.getElementsByTagName(n[1])
                        }
                    },
                    preFilter: {
                        CLASS: function (n, t, i, r, u, f) {
                            if (n = " " + n[1].replace(e, "") + " ", f) return n;
                            for (var s = 0, o;
                                (o = t[s]) != null; s++) o && (u ^ (o.className && (" " + o.className + " ").replace(/[\t\n\r]/g, " ").indexOf(n) >= 0) ? i || r.push(o) : i && (t[s] = !1));
                            return !1
                        },
                        ID: function (n) {
                            return n[1].replace(e, "")
                        },
                        TAG: function (n) {
                            return n[1].replace(e, "").toLowerCase()
                        },
                        CHILD: function (t) {
                            if (t[1] === "nth") {
                                t[2] || n.error(t[0]), t[2] = t[2].replace(/^\+|\s*/g, "");
                                var i = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(t[2] === "even" && "2n" || t[2] === "odd" && "2n+1" || !/\D/.test(t[2]) && "0n+" + t[2] || t[2]);
                                t[2] = i[1] + (i[2] || 1) - 0, t[3] = i[3] - 0
                            } else t[2] && n.error(t[0]);
                            return t[0] = p++, t
                        },
                        ATTR: function (n, t, i, r, f, o) {
                            var s = n[1] = n[1].replace(e, "");
                            return !o && u.attrMap[s] && (n[1] = u.attrMap[s]), n[4] = (n[4] || n[5] || "").replace(e, ""), n[2] === "~=" && (n[4] = " " + n[4] + " "), n
                        },
                        PSEUDO: function (t, i, r, f, e) {
                            if (t[1] === "not")
                                if ((w.exec(t[3]) || "").length > 1 || /^\w/.test(t[3])) t[3] = n(t[3], null, null, i);
                                else {
                                    var o = n.filter(t[3], i, r, !0 ^ e);
                                    return r || f.push.apply(f, o), !1
                                }
                            else if (u.match.POS.test(t[0]) || u.match.CHILD.test(t[0])) return !0;
                            return t
                        },
                        POS: function (n) {
                            return n.unshift(!0), n
                        }
                    },
                    filters: {
                        enabled: function (n) {
                            return n.disabled === !1 && n.type !== "hidden"
                        },
                        disabled: function (n) {
                            return n.disabled === !0
                        },
                        checked: function (n) {
                            return n.checked === !0
                        },
                        selected: function (n) {
                            return n.parentNode && n.parentNode.selectedIndex, n.selected === !0
                        },
                        parent: function (n) {
                            return !!n.firstChild
                        },
                        empty: function (n) {
                            return !n.firstChild
                        },
                        has: function (t, i, r) {
                            return !!n(r[3], t).length
                        },
                        header: function (n) {
                            return /h\d/i.test(n.nodeName)
                        },
                        text: function (n) {
                            var i = n.getAttribute("type"),
                                t = n.type;
                            return n.nodeName.toLowerCase() === "input" && "text" === t && (i === t || i === null)
                        },
                        radio: function (n) {
                            return n.nodeName.toLowerCase() === "input" && "radio" === n.type
                        },
                        checkbox: function (n) {
                            return n.nodeName.toLowerCase() === "input" && "checkbox" === n.type
                        },
                        file: function (n) {
                            return n.nodeName.toLowerCase() === "input" && "file" === n.type
                        },
                        password: function (n) {
                            return n.nodeName.toLowerCase() === "input" && "password" === n.type
                        },
                        submit: function (n) {
                            var t = n.nodeName.toLowerCase();
                            return (t === "input" || t === "button") && "submit" === n.type
                        },
                        image: function (n) {
                            return n.nodeName.toLowerCase() === "input" && "image" === n.type
                        },
                        reset: function (n) {
                            var t = n.nodeName.toLowerCase();
                            return (t === "input" || t === "button") && "reset" === n.type
                        },
                        button: function (n) {
                            var t = n.nodeName.toLowerCase();
                            return t === "input" && "button" === n.type || t === "button"
                        },
                        input: function (n) {
                            return /input|select|textarea|button/i.test(n.nodeName)
                        },
                        focus: function (n) {
                            return n === n.ownerDocument.activeElement
                        }
                    },
                    setFilters: {
                        first: function (n, t) {
                            return t === 0
                        },
                        last: function (n, t, i, r) {
                            return t === r.length - 1
                        },
                        even: function (n, t) {
                            return t % 2 == 0
                        },
                        odd: function (n, t) {
                            return t % 2 == 1
                        },
                        lt: function (n, t, i) {
                            return t < i[3] - 0
                        },
                        gt: function (n, t, i) {
                            return t > i[3] - 0
                        },
                        nth: function (n, t, i) {
                            return i[3] - 0 === t
                        },
                        eq: function (n, t, i) {
                            return i[3] - 0 === t
                        }
                    },
                    filter: {
                        PSEUDO: function (t, i, r, f) {
                            var o = i[1],
                                c = u.filters[o],
                                s, e, h;
                            if (c) return c(t, r, i, f);
                            if (o === "contains") return (t.textContent || t.innerText || v([t]) || "").indexOf(i[3]) >= 0;
                            if (o === "not") {
                                for (s = i[3], e = 0, h = s.length; e < h; e++)
                                    if (s[e] === t) return !1;
                                return !0
                            }
                            n.error(o)
                        },
                        CHILD: function (n, t) {
                            var r, e, s, u, l, c, f, h = t[1],
                                i = n;
                            switch (h) {
                                case "only":
                                case "first":
                                    while (i = i.previousSibling)
                                        if (i.nodeType === 1) return !1;
                                    if (h === "first") return !0;
                                    i = n;
                                case "last":
                                    while (i = i.nextSibling)
                                        if (i.nodeType === 1) return !1;
                                    return !0;
                                case "nth":
                                    if (r = t[2], e = t[3], r === 1 && e === 0) return !0;
                                    if (s = t[0], u = n.parentNode, u && (u[o] !== s || !n.nodeIndex)) {
                                        for (c = 0, i = u.firstChild; i; i = i.nextSibling) i.nodeType === 1 && (i.nodeIndex = ++c);
                                        u[o] = s
                                    }
                                    return f = n.nodeIndex - e, r === 0 ? f === 0 : f % r == 0 && f / r >= 0
                            }
                        },
                        ID: function (n, t) {
                            return n.nodeType === 1 && n.getAttribute("id") === t
                        },
                        TAG: function (n, t) {
                            return t === "*" && n.nodeType === 1 || !!n.nodeName && n.nodeName.toLowerCase() === t
                        },
                        CLASS: function (n, t) {
                            return (" " + (n.className || n.getAttribute("class")) + " ").indexOf(t) > -1
                        },
                        ATTR: function (t, i) {
                            var o = i[1],
                                s = n.attr ? n.attr(t, o) : u.attrHandle[o] ? u.attrHandle[o](t) : t[o] != null ? t[o] : t.getAttribute(o),
                                f = s + "",
                                e = i[2],
                                r = i[4];
                            return s == null ? e === "!=" : !e && n.attr ? s != null : e === "=" ? f === r : e === "*=" ? f.indexOf(r) >= 0 : e === "~=" ? (" " + f + " ").indexOf(r) >= 0 : r ? e === "!=" ? f !== r : e === "^=" ? f.indexOf(r) === 0 : e === "$=" ? f.substr(f.length - r.length) === r : e === "|=" ? f === r || f.substr(0, r.length + 1) === r + "-" : !1 : f && s !== !1
                        },
                        POS: function (n, t, i, r) {
                            var e = t[2],
                                f = u.setFilters[e];
                            if (f) return f(n, i, t, r)
                        }
                    }
                },
                nt = u.match.POS,
                tt = function (n, t) {
                    return "\\" + (+t + 1)
                };
            for (h in u.match) u.match[h] = new RegExp(u.match[h].source + /(?![^\[]*\])(?![^\(]*\))/.source), u.leftMatch[h] = new RegExp(/(^(?:.|\r|\n)*?)/.source + u.match[h].source.replace(/\\(\d+)/g, tt));
            f = function (n, t) {
                return (n = Array.prototype.slice.call(n, 0), t) ? (t.push.apply(t, n), t) : n
            };
            try {
                Array.prototype.slice.call(r.documentElement.childNodes, 0)[0].nodeType
            } catch (rt) {
                f = function (n, t) {
                    var i = 0,
                        r = t || [],
                        u;
                    if (g.call(n) === "[object Array]") Array.prototype.push.apply(r, n);
                    else if (typeof n.length == "number")
                        for (u = n.length; i < u; i++) r.push(n[i]);
                    else
                        for (; n[i]; i++) r.push(n[i]);
                    return r
                }
            }
            r.documentElement.compareDocumentPosition ? a = function (n, t) {
                    return n === t ? (l = !0, 0) : !n.compareDocumentPosition || !t.compareDocumentPosition ? n.compareDocumentPosition ? -1 : 1 : n.compareDocumentPosition(t) & 4 ? -1 : 1
                } : (a = function (n, t) {
                    var i;
                    if (n === t) return l = !0, 0;
                    if (n.sourceIndex && t.sourceIndex) return n.sourceIndex - t.sourceIndex;
                    var o, c, f = [],
                        u = [],
                        h = n.parentNode,
                        e = t.parentNode,
                        r = h;
                    if (h === e) return s(n, t);
                    if (!h) return -1;
                    if (!e) return 1;
                    while (r) f.unshift(r), r = r.parentNode;
                    for (r = e; r;) u.unshift(r), r = r.parentNode;
                    for (o = f.length, c = u.length, i = 0; i < o && i < c; i++)
                        if (f[i] !== u[i]) return s(f[i], u[i]);
                    return i === o ? s(n, u[i], -1) : s(f[i], t, 1)
                }, s = function (n, t, i) {
                    if (n === t) return i;
                    for (var r = n.nextSibling; r;) {
                        if (r === t) return -1;
                        r = r.nextSibling
                    }
                    return 1
                }),
                function () {
                    var i = r.createElement("div"),
                        f = "script" + +new Date,
                        n = r.documentElement;
                    i.innerHTML = "<a name='" + f + "'/>", n.insertBefore(i, n.firstChild), r.getElementById(f) && (u.find.ID = function (n, i, r) {
                        if (typeof i.getElementById != "undefined" && !r) {
                            var u = i.getElementById(n[1]);
                            return u ? u.id === n[1] || typeof u.getAttributeNode != "undefined" && u.getAttributeNode("id").nodeValue === n[1] ? [u] : t : []
                        }
                    }, u.filter.ID = function (n, t) {
                        var i = typeof n.getAttributeNode != "undefined" && n.getAttributeNode("id");
                        return n.nodeType === 1 && i && i.nodeValue === t
                    }), n.removeChild(i), n = i = null
                }(),
                function () {
                    var n = r.createElement("div");
                    n.appendChild(r.createComment("")), n.getElementsByTagName("*").length > 0 && (u.find.TAG = function (n, t) {
                        var r = t.getElementsByTagName(n[1]),
                            u, i;
                        if (n[1] === "*") {
                            for (u = [], i = 0; r[i]; i++) r[i].nodeType === 1 && u.push(r[i]);
                            r = u
                        }
                        return r
                    }), n.innerHTML = "<a href='#'></a>", n.firstChild && typeof n.firstChild.getAttribute != "undefined" && n.firstChild.getAttribute("href") !== "#" && (u.attrHandle.href = function (n) {
                        return n.getAttribute("href", 2)
                    }), n = null
                }(), r.querySelectorAll && function () {
                    var e = n,
                        t = r.createElement("div"),
                        o = "__sizzle__",
                        i;
                    if (t.innerHTML = "<p class='TEST'></p>", !t.querySelectorAll || t.querySelectorAll(".TEST").length !== 0) {
                        n = function (t, i, s, h) {
                            var c, l;
                            if (i = i || r, !h && !n.isXML(i)) {
                                if (c = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(t), c && (i.nodeType === 1 || i.nodeType === 9)) {
                                    if (c[1]) return f(i.getElementsByTagName(t), s);
                                    if (c[2] && u.find.CLASS && i.getElementsByClassName) return f(i.getElementsByClassName(c[2]), s)
                                }
                                if (i.nodeType === 9) {
                                    if (t === "body" && i.body) return f([i.body], s);
                                    if (c && c[3]) {
                                        if (l = i.getElementById(c[3]), !l || !l.parentNode) return f([], s);
                                        if (l.id === c[3]) return f([l], s)
                                    }
                                    try {
                                        return f(i.querySelectorAll(t), s)
                                    } catch (k) {}
                                } else if (i.nodeType === 1 && i.nodeName.toLowerCase() !== "object") {
                                    var w = i,
                                        v = i.getAttribute("id"),
                                        a = v || o,
                                        y = i.parentNode,
                                        p = /^\s*[+~]/.test(t);
                                    v ? a = a.replace(/'/g, "\\$&") : i.setAttribute("id", a), p && y && (i = i.parentNode);
                                    try {
                                        if (!p || y) return f(i.querySelectorAll("[id='" + a + "'] " + t), s)
                                    } catch (b) {} finally {
                                        v || w.removeAttribute("id")
                                    }
                                }
                            }
                            return e(t, i, s, h)
                        };
                        for (i in e) n[i] = e[i];
                        t = null
                    }
                }(),
                function () {
                    var i = r.documentElement,
                        t = i.matchesSelector || i.mozMatchesSelector || i.webkitMatchesSelector || i.msMatchesSelector,
                        e, f;
                    if (t) {
                        e = !t.call(r.createElement("div"), "div"), f = !1;
                        try {
                            t.call(r.documentElement, "[test!='']:sizzle")
                        } catch (o) {
                            f = !0
                        }
                        n.matchesSelector = function (i, r) {
                            if (r = r.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']"), !n.isXML(i)) try {
                                if (f || !u.match.PSEUDO.test(r) && !/!=/.test(r)) {
                                    var o = t.call(i, r);
                                    if (o || !e || i.document && i.document.nodeType !== 11) return o
                                }
                            } catch (s) {}
                            return n(r, null, null, [i]).length > 0
                        }
                    }
                }(),
                function () {
                    var n = r.createElement("div");
                    if (n.innerHTML = "<div class='test e'></div><div class='test'></div>", !!n.getElementsByClassName && n.getElementsByClassName("e").length !== 0) {
                        if (n.lastChild.className = "e", n.getElementsByClassName("e").length === 1) return;
                        u.order.splice(1, 0, "CLASS"), u.find.CLASS = function (n, t, i) {
                            if (typeof t.getElementsByClassName != "undefined" && !i) return t.getElementsByClassName(n[1])
                        }, n = null
                    }
                }(), n.contains = r.documentElement.contains ? function (n, t) {
                    return n !== t && (n.contains ? n.contains(t) : !0)
                } : r.documentElement.compareDocumentPosition ? function (n, t) {
                    return !!(n.compareDocumentPosition(t) & 16)
                } : function () {
                    return !1
                }, n.isXML = function (n) {
                    var t = (n ? n.ownerDocument || n : 0).documentElement;
                    return t ? t.nodeName !== "HTML" : !1
                }, y = function (t, i, r) {
                    for (var s, h = [], c = "", e = i.nodeType ? [i] : i, f, o; s = u.match.PSEUDO.exec(t);) c += s[0], t = t.replace(u.match.PSEUDO, "");
                    for (t = u.relative[t] ? t + "*" : t, f = 0, o = e.length; f < o; f++) n(t, e[f], h, r);
                    return n.filter(c, h)
                }, n.attr = i.attr, n.selectors.attrMap = {}, i.find = n, i.expr = n.selectors, i.expr[":"] = i.expr.filters, i.unique = n.uniqueSort, i.text = n.getText, i.isXMLDoc = n.isXML, i.contains = n.contains
        }();
    var ne = /Until$/,
        te = /^(?:parents|prevUntil|prevAll)/,
        df = /,/,
        gf = /^.[^:#\[\.,]*$/,
        ie = Array.prototype.slice,
        wt = i.expr.match.POS,
        fe = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    i.fn.extend({
        find: function (n) {
            var s = this,
                t, e, r, o, u, f;
            if (typeof n != "string") return i(n).filter(function () {
                for (t = 0, e = s.length; t < e; t++)
                    if (i.contains(s[t], this)) return !0
            });
            for (r = this.pushStack("", "find", n), t = 0, e = this.length; t < e; t++)
                if (o = r.length, i.find(n, this[t], r), t > 0)
                    for (u = o; u < r.length; u++)
                        for (f = 0; f < o; f++)
                            if (r[f] === r[u]) {
                                r.splice(u--, 1);
                                break
                            } return r
        },
        has: function (n) {
            var t = i(n);
            return this.filter(function () {
                for (var n = 0, r = t.length; n < r; n++)
                    if (i.contains(this, t[n])) return !0
            })
        },
        not: function (n) {
            return this.pushStack(ni(this, n, !1), "not", n)
        },
        filter: function (n) {
            return this.pushStack(ni(this, n, !0), "filter", n)
        },
        is: function (n) {
            return !!n && (typeof n == "string" ? wt.test(n) ? i(n, this.context).index(this[0]) >= 0 : i.filter(n, this).length > 0 : this.filter(n).length > 0)
        },
        closest: function (n, t) {
            var f = [],
                u, s, r = this[0],
                e, o;
            if (i.isArray(n)) {
                for (e = 1; r && r.ownerDocument && r !== t;) {
                    for (u = 0; u < n.length; u++) i(r).is(n[u]) && f.push({
                        selector: n[u],
                        elem: r,
                        level: e
                    });
                    r = r.parentNode, e++
                }
                return f
            }
            for (o = wt.test(n) || typeof n != "string" ? i(n, t || this.context) : 0, u = 0, s = this.length; u < s; u++)
                for (r = this[u]; r;) {
                    if (o ? o.index(r) > -1 : i.find.matchesSelector(r, n)) {
                        f.push(r);
                        break
                    }
                    if (r = r.parentNode, !r || !r.ownerDocument || r === t || r.nodeType === 11) break
                }
            return f = f.length > 1 ? i.unique(f) : f, this.pushStack(f, "closest", n)
        },
        index: function (n) {
            return n ? typeof n == "string" ? i.inArray(this[0], i(n)) : i.inArray(n.jquery ? n[0] : n, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
        },
        add: function (n, t) {
            var u = typeof n == "string" ? i(n, t) : i.makeArray(n && n.nodeType ? [n] : n),
                r = i.merge(this.get(), u);
            return this.pushStack(dt(u[0]) || dt(r[0]) ? r : i.unique(r))
        },
        andSelf: function () {
            return this.add(this.prevObject)
        }
    }), i.each({
        parent: function (n) {
            var t = n.parentNode;
            return t && t.nodeType !== 11 ? t : null
        },
        parents: function (n) {
            return i.dir(n, "parentNode")
        },
        parentsUntil: function (n, t, r) {
            return i.dir(n, "parentNode", r)
        },
        next: function (n) {
            return i.nth(n, 2, "nextSibling")
        },
        prev: function (n) {
            return i.nth(n, 2, "previousSibling")
        },
        nextAll: function (n) {
            return i.dir(n, "nextSibling")
        },
        prevAll: function (n) {
            return i.dir(n, "previousSibling")
        },
        nextUntil: function (n, t, r) {
            return i.dir(n, "nextSibling", r)
        },
        prevUntil: function (n, t, r) {
            return i.dir(n, "previousSibling", r)
        },
        siblings: function (n) {
            return i.sibling(n.parentNode.firstChild, n)
        },
        children: function (n) {
            return i.sibling(n.firstChild)
        },
        contents: function (n) {
            return i.nodeName(n, "iframe") ? n.contentDocument || n.contentWindow.document : i.makeArray(n.childNodes)
        }
    }, function (n, t) {
        i.fn[n] = function (r, u) {
            var f = i.map(this, t, r);
            return ne.test(n) || (u = r), u && typeof u == "string" && (f = i.filter(u, f)), f = this.length > 1 && !fe[n] ? i.unique(f) : f, (this.length > 1 || df.test(u)) && te.test(n) && (f = f.reverse()), this.pushStack(f, n, ie.call(arguments).join(","))
        }
    }), i.extend({
        filter: function (n, t, r) {
            return r && (n = ":not(" + n + ")"), t.length === 1 ? i.find.matchesSelector(t[0], n) ? [t[0]] : [] : i.find.matches(n, t)
        },
        dir: function (n, r, u) {
            for (var e = [], f = n[r]; f && f.nodeType !== 9 && (u === t || f.nodeType !== 1 || !i(f).is(u));) f.nodeType === 1 && e.push(f), f = f[r];
            return e
        },
        nth: function (n, t, i) {
            t = t || 1;
            for (var u = 0; n; n = n[i])
                if (n.nodeType === 1 && ++u === t) break;
            return n
        },
        sibling: function (n, t) {
            for (var i = []; n; n = n.nextSibling) n.nodeType === 1 && n !== t && i.push(n);
            return i
        }
    });
    var pt = "abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        ee = / jQuery\d+="(?:\d+|null)"/g,
        ht = /^\s+/,
        hi = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
        si = /<([\w:]+)/,
        re = /<tbody/i,
        ue = /<|&#?\w+;/,
        kf = /<(?:script|style)/i,
        lf = /<(?:script|object|embed|option|style)/i,
        vi = new RegExp("<(?:" + pt + ")", "i"),
        ai = /checked\s*(?:[^=]|=\s*.checked.)/i,
        af = /\/(java|ecma)script/i,
        hf = /^\s*<!(?:\[CDATA\[|\-\-)/,
        u = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        },
        li = ci(r);
    u.optgroup = u.option, u.tbody = u.tfoot = u.colgroup = u.caption = u.thead, u.th = u.td, i.support.htmlSerialize || (u._default = [1, "div<div>", "</div>"]), i.fn.extend({
        text: function (n) {
            return i.isFunction(n) ? this.each(function (t) {
                var r = i(this);
                r.text(n.call(this, t, r.text()))
            }) : typeof n != "object" && n !== t ? this.empty().append((this[0] && this[0].ownerDocument || r).createTextNode(n)) : i.text(this)
        },
        wrapAll: function (n) {
            if (i.isFunction(n)) return this.each(function (t) {
                i(this).wrapAll(n.call(this, t))
            });
            if (this[0]) {
                var t = i(n, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                    for (var n = this; n.firstChild && n.firstChild.nodeType === 1;) n = n.firstChild;
                    return n
                }).append(this)
            }
            return this
        },
        wrapInner: function (n) {
            return i.isFunction(n) ? this.each(function (t) {
                i(this).wrapInner(n.call(this, t))
            }) : this.each(function () {
                var r = i(this),
                    t = r.contents();
                t.length ? t.wrapAll(n) : r.append(n)
            })
        },
        wrap: function (n) {
            var t = i.isFunction(n);
            return this.each(function (r) {
                i(this).wrapAll(t ? n.call(this, r) : n)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                i.nodeName(this, "body") || i(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function () {
            return this.domManip(arguments, !0, function (n) {
                this.nodeType === 1 && this.appendChild(n)
            })
        },
        prepend: function () {
            return this.domManip(arguments, !0, function (n) {
                this.nodeType === 1 && this.insertBefore(n, this.firstChild)
            })
        },
        before: function () {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function (n) {
                this.parentNode.insertBefore(n, this)
            });
            if (arguments.length) {
                var n = i.clean(arguments);
                return n.push.apply(n, this.toArray()), this.pushStack(n, "before", arguments)
            }
        },
        after: function () {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function (n) {
                this.parentNode.insertBefore(n, this.nextSibling)
            });
            if (arguments.length) {
                var n = this.pushStack(this, "after", arguments);
                return n.push.apply(n, i.clean(arguments)), n
            }
        },
        remove: function (n, t) {
            for (var u = 0, r;
                (r = this[u]) != null; u++)(!n || i.filter(n, [r]).length) && (!t && r.nodeType === 1 && (i.cleanData(r.getElementsByTagName("*")), i.cleanData([r])), r.parentNode && r.parentNode.removeChild(r));
            return this
        },
        empty: function () {
            for (var t = 0, n;
                (n = this[t]) != null; t++)
                for (n.nodeType === 1 && i.cleanData(n.getElementsByTagName("*")); n.firstChild;) n.removeChild(n.firstChild);
            return this
        },
        clone: function (n, t) {
            return n = n == null ? !1 : n, t = t == null ? n : t, this.map(function () {
                return i.clone(this, n, t)
            })
        },
        html: function (n) {
            if (n === t) return this[0] && this[0].nodeType === 1 ? this[0].innerHTML.replace(ee, "") : null;
            if (typeof n != "string" || kf.test(n) || !i.support.leadingWhitespace && ht.test(n) || u[(si.exec(n) || ["", ""])[1].toLowerCase()]) i.isFunction(n) ? this.each(function (t) {
                var r = i(this);
                r.html(n.call(this, t, r.html()))
            }) : this.empty().append(n);
            else {
                n = n.replace(hi, "<$1></$2>");
                try {
                    for (var r = 0, f = this.length; r < f; r++) this[r].nodeType === 1 && (i.cleanData(this[r].getElementsByTagName("*")), this[r].innerHTML = n)
                } catch (e) {
                    this.empty().append(n)
                }
            }
            return this
        },
        replaceWith: function (n) {
            return this[0] && this[0].parentNode ? i.isFunction(n) ? this.each(function (t) {
                var r = i(this),
                    u = r.html();
                r.replaceWith(n.call(this, t, u))
            }) : (typeof n != "string" && (n = i(n).detach()), this.each(function () {
                var t = this.nextSibling,
                    r = this.parentNode;
                i(this).remove(), t ? i(t).before(n) : i(r).append(n)
            })) : this.length ? this.pushStack(i(i.isFunction(n) ? n() : n), "replaceWith", n) : this
        },
        detach: function (n) {
            return this.remove(n, !0)
        },
        domManip: function (n, r, u) {
            var c, o, f, h, e = n[0],
                a = [];
            if (!i.support.checkClone && arguments.length === 3 && typeof e == "string" && ai.test(e)) return this.each(function () {
                i(this).domManip(n, r, u, !0)
            });
            if (i.isFunction(e)) return this.each(function (f) {
                var o = i(this);
                n[0] = e.call(this, f, r ? o.html() : t), o.domManip(n, r, u)
            });
            if (this[0]) {
                if (h = e && e.parentNode, c = i.support.parentNode && h && h.nodeType === 11 && h.childNodes.length === this.length ? {
                        fragment: h
                    } : i.buildFragment(n, this, a), f = c.fragment, o = f.childNodes.length === 1 ? f = f.firstChild : f.firstChild, o) {
                    r = r && i.nodeName(o, "tr");
                    for (var s = 0, l = this.length, v = l - 1; s < l; s++) u.call(r ? of (this[s], o) : this[s], c.cacheable || l > 1 && s < v ? i.clone(f, !0, !0) : f)
                }
                a.length && i.each(a, rf)
            }
            return this
        }
    }), i.buildFragment = function (n, t, u) {
        var o, h, s, e, f = n[0];
        return t && t[0] && (e = t[0].ownerDocument || t[0]), e.createDocumentFragment || (e = r), n.length === 1 && typeof f == "string" && f.length < 512 && e === r && f.charAt(0) === "<" && !lf.test(f) && (i.support.checkClone || !ai.test(f)) && (i.support.html5Clone || !vi.test(f)) && (h = !0, s = i.fragments[f], s && s !== 1 && (o = s)), o || (o = e.createDocumentFragment(), i.clean(n, e, o, u)), h && (i.fragments[f] = s ? o : 1), {
            fragment: o,
            cacheable: h
        }
    }, i.fragments = {}, i.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (n, t) {
        i.fn[n] = function (r) {
            var o = [],
                u = i(r),
                s = this.length === 1 && this[0].parentNode,
                f, h, e;
            if (s && s.nodeType === 11 && s.childNodes.length === 1 && u.length === 1) return u[t](this[0]), this;
            for (f = 0, h = u.length; f < h; f++) e = (f > 0 ? this.clone(!0) : this).get(), i(u[f])[t](e), o = o.concat(e);
            return this.pushStack(o, n, u.selector)
        }
    }), i.extend({
        clone: function (n, t, r) {
            var f, e, u, o = i.support.html5Clone || !vi.test("<" + n.nodeName) ? n.cloneNode(!0) : ef(n);
            if ((!i.support.noCloneEvent || !i.support.noCloneChecked) && (n.nodeType === 1 || n.nodeType === 11) && !i.isXMLDoc(n))
                for (fi(n, o), f = g(n), e = g(o), u = 0; f[u]; ++u) e[u] && fi(f[u], e[u]);
            if (t && (ui(n, o), r))
                for (f = g(n), e = g(o), u = 0; f[u]; ++u) ui(f[u], e[u]);
            return f = e = null, o
        },
        clean: function (n, t, f, e) {
            var p, s, l, h, o, y, a, w, k;
            for (t = t || r, typeof t.createElement == "undefined" && (t = t.ownerDocument || t[0] && t[0].ownerDocument || r), s = [], h = 0;
                (o = n[h]) != null; h++)
                if (typeof o == "number" && (o += ""), o) {
                    if (typeof o == "string")
                        if (ue.test(o)) {
                            o = o.replace(hi, "<$1></$2>");
                            var b = (si.exec(o) || ["", ""])[1].toLowerCase(),
                                v = u[b] || u._default,
                                d = v[0],
                                c = t.createElement("div");
                            for (t === r ? li.appendChild(c) : ci(t).appendChild(c), c.innerHTML = v[1] + o + v[2]; d--;) c = c.lastChild;
                            if (!i.support.tbody)
                                for (y = re.test(o), a = b === "table" && !y ? c.firstChild && c.firstChild.childNodes : v[1] === "<table>" && !y ? c.childNodes : [], l = a.length - 1; l >= 0; --l) i.nodeName(a[l], "tbody") && !a[l].childNodes.length && a[l].parentNode.removeChild(a[l]);
                            !i.support.leadingWhitespace && ht.test(o) && c.insertBefore(t.createTextNode(ht.exec(o)[0]), c.firstChild), o = c.childNodes
                        } else o = t.createTextNode(o);
                    if (!i.support.appendChecked)
                        if (o[0] && typeof (w = o.length) == "number")
                            for (l = 0; l < w; l++) nr(o[l]);
                        else nr(o);
                    o.nodeType ? s.push(o) : s = i.merge(s, o)
                } if (f)
                for (p = function (n) {
                        return !n.type || af.test(n.type)
                    }, h = 0; s[h]; h++) e && i.nodeName(s[h], "script") && (!s[h].type || s[h].type.toLowerCase() === "text/javascript") ? e.push(s[h].parentNode ? s[h].parentNode.removeChild(s[h]) : s[h]) : (s[h].nodeType === 1 && (k = i.grep(s[h].getElementsByTagName("script"), p), s.splice.apply(s, [h + 1, 0].concat(k))), f.appendChild(s[h]));
            return s
        },
        cleanData: function (n) {
            for (var r, f, o = i.cache, s = i.event.special, h = i.support.deleteExpando, t, u, e = 0;
                (t = n[e]) != null; e++)
                if ((!t.nodeName || !i.noData[t.nodeName.toLowerCase()]) && (f = t[i.expando], f)) {
                    if (r = o[f], r && r.events) {
                        for (u in r.events) s[u] ? i.event.remove(t, u) : i.removeEvent(t, u, r.handle);
                        r.handle && (r.handle.elem = null)
                    }
                    h ? delete t[i.expando] : t.removeAttribute && t.removeAttribute(i.expando), delete o[f]
                }
        }
    });
    var ot = /alpha\([^)]*\)/i,
        cf = /opacity=([^)]*)/,
        vf = /([A-Z]|^ms)/g,
        ii = /^-?\d+(?:px)?$/i,
        wf = /^-?\d/,
        bf = /^([\-+])=([\-+.\de]+)/,
        yf = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        pf = ["Left", "Right"],
        su = ["Top", "Bottom"],
        l, ei, oi;
    i.fn.css = function (n, r) {
        return arguments.length === 2 && r === t ? this : i.access(this, n, r, !0, function (n, r, u) {
            return u !== t ? i.style(n, r, u) : i.css(n, r)
        })
    }, i.extend({
        cssHooks: {
            opacity: {
                get: function (n, t) {
                    if (t) {
                        var i = l(n, "opacity", "opacity");
                        return i === "" ? "1" : i
                    }
                    return n.style.opacity
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: i.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (n, r, u, f) {
            if (!!n && n.nodeType !== 3 && n.nodeType !== 8 && !!n.style) {
                var s, o, h = i.camelCase(r),
                    c = n.style,
                    e = i.cssHooks[h];
                if (r = i.cssProps[h] || h, u === t) return e && "get" in e && (s = e.get(n, !1, f)) !== t ? s : c[r];
                if (o = typeof u, o === "string" && (s = bf.exec(u)) && (u = +(s[1] + 1) * +s[2] + parseFloat(i.css(n, r)), o = "number"), u == null || o === "number" && isNaN(u)) return;
                if (o === "number" && !i.cssNumber[h] && (u += "px"), !e || !("set" in e) || (u = e.set(n, u)) !== t) try {
                    c[r] = u
                } catch (l) {}
            }
        },
        css: function (n, r, u) {
            var e, f;
            return (r = i.camelCase(r), f = i.cssHooks[r], r = i.cssProps[r] || r, r === "cssFloat" && (r = "float"), f && "get" in f && (e = f.get(n, !0, u)) !== t) ? e : l ? l(n, r) : void 0
        },
        swap: function (n, t, i) {
            var u = {},
                r;
            for (r in t) u[r] = n.style[r], n.style[r] = t[r];
            i.call(n);
            for (r in t) n.style[r] = u[r]
        }
    }), i.curCSS = i.css, i.each(["height", "width"], function (n, t) {
        i.cssHooks[t] = {
            get: function (n, r, u) {
                var f;
                if (r) return n.offsetWidth !== 0 ? vr(n, t, u) : (i.swap(n, yf, function () {
                    f = vr(n, t, u)
                }), f)
            },
            set: function (n, t) {
                return ii.test(t) ? (t = parseFloat(t), t >= 0 ? t + "px" : void 0) : t
            }
        }
    }), i.support.opacity || (i.cssHooks.opacity = {
        get: function (n, t) {
            return cf.test((t && n.currentStyle ? n.currentStyle.filter : n.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : t ? "1" : ""
        },
        set: function (n, t) {
            var f = n.style,
                u = n.currentStyle,
                e = i.isNumeric(t) ? "alpha(opacity=" + t * 100 + ")" : "",
                r = u && u.filter || f.filter || "";
            (f.zoom = 1, t >= 1 && i.trim(r.replace(ot, "")) === "" && (f.removeAttribute("filter"), u && !u.filter)) || (f.filter = ot.test(r) ? r.replace(ot, e) : r + " " + e)
        }
    }), i(function () {
        i.support.reliableMarginRight || (i.cssHooks.marginRight = {
            get: function (n, t) {
                var r;
                return i.swap(n, {
                    display: "inline-block"
                }, function () {
                    r = t ? l(n, "margin-right", "marginRight") : n.style.marginRight
                }), r
            }
        })
    }), r.defaultView && r.defaultView.getComputedStyle && (ei = function (n, t) {
        var r, f, u;
        return t = t.replace(vf, "-$1").toLowerCase(), (f = n.ownerDocument.defaultView) && (u = f.getComputedStyle(n, null)) && (r = u.getPropertyValue(t), r === "" && !i.contains(n.ownerDocument.documentElement, n) && (r = i.style(n, t))), r
    }), r.documentElement.currentStyle && (oi = function (n, t) {
        var e, u, f, i = n.currentStyle && n.currentStyle[t],
            r = n.style;
        return i === null && r && (f = r[t]) && (i = f), !ii.test(i) && wf.test(i) && (e = r.left, u = n.runtimeStyle && n.runtimeStyle.left, u && (n.runtimeStyle.left = n.currentStyle.left), r.left = t === "fontSize" ? "1em" : i || 0, i = r.pixelLeft + "px", r.left = e, u && (n.runtimeStyle.left = u)), i === "" ? "auto" : i
    }), l = ei || oi, i.expr && i.expr.filters && (i.expr.filters.hidden = function (n) {
        var r = n.offsetWidth,
            t = n.offsetHeight;
        return r === 0 && t === 0 || !i.support.reliableHiddenOffsets && (n.style && n.style.display || i.css(n, "display")) === "none"
    }, i.expr.filters.visible = function (n) {
        return !i.expr.filters.hidden(n)
    });
    var kr = /%20/g,
        dr = /\[\]$/,
        ri = /\r?\n/g,
        uu = /#.*$/,
        ou = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        eu = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        ru = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
        nu = /^(?:GET|HEAD)$/,
        gr = /^\/\//,
        yt = /\?/,
        br = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        tu = /^(?:select|textarea)/i,
        lt = /\s+/,
        iu = /([?&])_=[^&]*/,
        at = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
        vt = i.fn.load,
        st = {},
        ti = {},
        s, o, ar = ["*/"] + ["*"];
    try {
        s = ku.href
    } catch (oe) {
        s = r.createElement("a"), s.href = "", s = s.href
    }
    o = at.exec(s.toLowerCase()) || [], i.fn.extend({
            load: function (n, r, u) {
                var f, s, o, e;
                return typeof n != "string" && vt ? vt.apply(this, arguments) : this.length ? (f = n.indexOf(" "), f >= 0 && (s = n.slice(f, n.length), n = n.slice(0, f)), o = "GET", r && (i.isFunction(r) ? (u = r, r = t) : typeof r == "object" && (r = i.param(r, i.ajaxSettings.traditional), o = "POST")), e = this, i.ajax({
                    url: n,
                    type: o,
                    dataType: "html",
                    data: r,
                    complete: function (n, t, r) {
                        r = n.responseText, n.isResolved() && (n.done(function (n) {
                            r = n
                        }), e.html(s ? i("<div>").append(r.replace(br, "")).find(s) : r)), u && e.each(u, [r, t, n])
                    }
                }), this) : this
            },
            serialize: function () {
                return i.param(this.serializeArray())
            },
            serializeArray: function () {
                return this.map(function () {
                    return this.elements ? i.makeArray(this.elements) : this
                }).filter(function () {
                    return this.name && !this.disabled && (this.checked || tu.test(this.nodeName) || eu.test(this.type))
                }).map(function (n, t) {
                    var r = i(this).val();
                    return r == null ? null : i.isArray(r) ? i.map(r, function (n) {
                        return {
                            name: t.name,
                            value: n.replace(ri, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: r.replace(ri, "\r\n")
                    }
                }).get()
            }
        }), i.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (n, t) {
            i.fn[t] = function (n) {
                return this.on(t, n)
            }
        }), i.each(["get", "post"], function (n, r) {
            i[r] = function (n, u, f, e) {
                return i.isFunction(u) && (e = e || f, f = u, u = t), i.ajax({
                    type: r,
                    url: n,
                    data: u,
                    success: f,
                    dataType: e
                })
            }
        }), i.extend({
            getScript: function (n, r) {
                return i.get(n, t, r, "script")
            },
            getJSON: function (n, t, r) {
                return i.get(n, t, r, "json")
            },
            ajaxSetup: function (n, t) {
                return t ? yi(n, i.ajaxSettings) : (t = n, n = i.ajaxSettings), yi(n, t), n
            },
            ajaxSettings: {
                url: s,
                isLocal: ru.test(o[1]),
                global: !0,
                type: "GET",
                contentType: "application/x-www-form-urlencoded",
                processData: !0,
                async: !0,
                accepts: {
                    xml: "application/xml, text/xml",
                    html: "text/html",
                    text: "text/plain",
                    json: "application/json, text/javascript",
                    "*": ar
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText"
                },
                converters: {
                    "* text": n.String,
                    "text html": !0,
                    "text json": i.parseJSON,
                    "text xml": i.parseXML
                },
                flatOptions: {
                    context: !0,
                    url: !0
                }
            },
            ajaxPrefilter: er(st),
            ajaxTransport: er(ti),
            ajax: function (n, r) {
                function w(n, r, o, l) {
                    if (e !== 2) {
                        e = 2, k && clearTimeout(k), c = t, nt = l || "", f.readyState = n > 0 ? 4 : 0;
                        var y, g, w, a = r,
                            ut = o ? gu(u, f, o) : t,
                            it, tt;
                        if (n >= 200 && n < 300 || n === 304)
                            if (u.ifModified && ((it = f.getResponseHeader("Last-Modified")) && (i.lastModified[s] = it), (tt = f.getResponseHeader("Etag")) && (i.etag[s] = tt)), n === 304) a = "notmodified", y = !0;
                            else try {
                                g = du(u, ut), a = "success", y = !0
                            } catch (ft) {
                                a = "parsererror", w = ft
                            } else w = a, (!a || n) && (a = "error", n < 0 && (n = 0));
                        f.status = n, f.statusText = "" + (r || a), y ? b.resolveWith(h, [g, a, f]) : b.rejectWith(h, [f, a, w]), f.statusCode(p), p = t, v && d.trigger("ajax" + (y ? "Success" : "Error"), [f, u, y ? g : w]), rt.fireWith(h, [f, a]), v && (d.trigger("ajaxComplete", [f, u]), --i.active || i.event.trigger("ajaxStop"))
                    }
                }
                var it, g;
                typeof n == "object" && (r = n, n = t), r = r || {};
                var u = i.ajaxSetup({}, r),
                    h = u.context || u,
                    d = h !== u && (h.nodeType || h instanceof i) ? i(h) : i.event,
                    b = i.Deferred(),
                    rt = i.Callbacks("once memory"),
                    p = u.statusCode || {},
                    s, ut = {},
                    ft = {},
                    nt, y, c, k, l, e = 0,
                    v, a, f = {
                        readyState: 0,
                        setRequestHeader: function (n, t) {
                            if (!e) {
                                var i = n.toLowerCase();
                                n = ft[i] = ft[i] || n, ut[n] = t
                            }
                            return this
                        },
                        getAllResponseHeaders: function () {
                            return e === 2 ? nt : null
                        },
                        getResponseHeader: function (n) {
                            var i;
                            if (e === 2) {
                                if (!y)
                                    for (y = {}; i = ou.exec(nt);) y[i[1].toLowerCase()] = i[2];
                                i = y[n.toLowerCase()]
                            }
                            return i === t ? null : i
                        },
                        overrideMimeType: function (n) {
                            return e || (u.mimeType = n), this
                        },
                        abort: function (n) {
                            return n = n || "abort", c && c.abort(n), w(0, n), this
                        }
                    };
                if (b.promise(f), f.success = f.done, f.error = f.fail, f.complete = rt.add, f.statusCode = function (n) {
                        if (n) {
                            var t;
                            if (e < 2)
                                for (t in n) p[t] = [p[t], n[t]];
                            else t = n[f.status], f.then(t, t)
                        }
                        return this
                    }, u.url = ((n || u.url) + "").replace(uu, "").replace(gr, o[1] + "//"), u.dataTypes = i.trim(u.dataType || "*").toLowerCase().split(lt), u.crossDomain == null && (l = at.exec(u.url.toLowerCase()), u.crossDomain = !(!l || l[1] == o[1] && l[2] == o[2] && (l[3] || (l[1] === "http:" ? 80 : 443)) == (o[3] || (o[1] === "http:" ? 80 : 443)))), u.data && u.processData && typeof u.data != "string" && (u.data = i.param(u.data, u.traditional)), tt(st, u, r, f), e === 2) return !1;
                v = u.global, u.type = u.type.toUpperCase(), u.hasContent = !nu.test(u.type), v && i.active++ == 0 && i.event.trigger("ajaxStart"), u.hasContent || (u.data && (u.url += (yt.test(u.url) ? "&" : "?") + u.data, delete u.data), s = u.url, u.cache === !1 && (it = i.now(), g = u.url.replace(iu, "$1_=" + it), u.url = g + (g === u.url ? (yt.test(u.url) ? "&" : "?") + "_=" + it : ""))), (u.data && u.hasContent && u.contentType !== !1 || r.contentType) && f.setRequestHeader("Content-Type", u.contentType), u.ifModified && (s = s || u.url, i.lastModified[s] && f.setRequestHeader("If-Modified-Since", i.lastModified[s]), i.etag[s] && f.setRequestHeader("If-None-Match", i.etag[s])), f.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + (u.dataTypes[0] !== "*" ? ", " + ar + "; q=0.01" : "") : u.accepts["*"]);
                for (a in u.headers) f.setRequestHeader(a, u.headers[a]);
                if (u.beforeSend && (u.beforeSend.call(h, f, u) === !1 || e === 2)) return f.abort(), !1;
                for (a in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) f[a](u[a]);
                if (c = tt(ti, u, r, f), c) {
                    f.readyState = 1, v && d.trigger("ajaxSend", [f, u]), u.async && u.timeout > 0 && (k = setTimeout(function () {
                        f.abort("timeout")
                    }, u.timeout));
                    try {
                        e = 1, c.send(ut, w)
                    } catch (et) {
                        if (e < 2) w(-1, et);
                        else throw et;
                    }
                } else w(-1, "No Transport");
                return f
            },
            param: function (n, r) {
                var f = [],
                    e = function (n, t) {
                        t = i.isFunction(t) ? t() : t, f[f.length] = encodeURIComponent(n) + "=" + encodeURIComponent(t)
                    },
                    u;
                if (r === t && (r = i.ajaxSettings.traditional), i.isArray(n) || n.jquery && !i.isPlainObject(n)) i.each(n, function () {
                    e(this.name, this.value)
                });
                else
                    for (u in n) rt(u, n[u], r, e);
                return f.join("&").replace(kr, "+")
            }
        }), i.extend({
            active: 0,
            lastModified: {},
            etag: {}
        }), yr = i.now(), y = /(\=)\?(&|$)|\?\?/i, i.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
                return i.expando + "_" + yr++
            }
        }), i.ajaxPrefilter("json jsonp", function (t, r, u) {
            var l = t.contentType === "application/x-www-form-urlencoded" && typeof t.data == "string";
            if (t.dataTypes[0] === "jsonp" || t.jsonp !== !1 && (y.test(t.url) || l && y.test(t.data))) {
                var o, f = t.jsonpCallback = i.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
                    c = n[f],
                    e = t.url,
                    s = t.data,
                    h = "$1" + f + "$2";
                return t.jsonp !== !1 && (e = e.replace(y, h), t.url === e && (l && (s = s.replace(y, h)), t.data === s && (e += (/\?/.test(e) ? "&" : "?") + t.jsonp + "=" + f))), t.url = e, t.data = s, n[f] = function (n) {
                    o = [n]
                }, u.always(function () {
                    n[f] = c, o && i.isFunction(c) && n[f](o[0])
                }), t.converters["script json"] = function () {
                    return o || i.error(f + " was not called"), o[0]
                }, t.dataTypes[0] = "json", "script"
            }
        }), i.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /javascript|ecmascript/
            },
            converters: {
                "text script": function (n) {
                    return i.globalEval(n), n
                }
            }
        }), i.ajaxPrefilter("script", function (n) {
            n.cache === t && (n.cache = !1), n.crossDomain && (n.type = "GET", n.global = !1)
        }), i.ajaxTransport("script", function (n) {
            if (n.crossDomain) {
                var i, u = r.head || r.getElementsByTagName("head")[0] || r.documentElement;
                return {
                    send: function (f, e) {
                        i = r.createElement("script"), i.async = "async", n.scriptCharset && (i.charset = n.scriptCharset), i.src = n.url, i.onload = i.onreadystatechange = function (n, r) {
                            (r || !i.readyState || /loaded|complete/.test(i.readyState)) && (i.onload = i.onreadystatechange = null, u && i.parentNode && u.removeChild(i), i = t, r || e(200, "success"))
                        }, u.insertBefore(i, u.firstChild)
                    },
                    abort: function () {
                        i && i.onload(0, 1)
                    }
                }
            }
        }), k = n.ActiveXObject ? function () {
            for (var n in a) a[n](0, 1)
        } : !1, ki = 0, i.ajaxSettings.xhr = n.ActiveXObject ? function () {
            return !this.isLocal && ur() || tf()
        } : ur,
        function (n) {
            i.extend(i.support, {
                ajax: !!n,
                cors: !!n && "withCredentials" in n
            })
        }(i.ajaxSettings.xhr()), i.support.ajax && i.ajaxTransport(function (r) {
            if (!r.crossDomain || i.support.cors) {
                var u;
                return {
                    send: function (f, e) {
                        var o = r.xhr(),
                            h, s;
                        if (r.username ? o.open(r.type, r.url, r.async, r.username, r.password) : o.open(r.type, r.url, r.async), r.xhrFields)
                            for (s in r.xhrFields) o[s] = r.xhrFields[s];
                        r.mimeType && o.overrideMimeType && o.overrideMimeType(r.mimeType), !r.crossDomain && !f["X-Requested-With"] && (f["X-Requested-With"] = "XMLHttpRequest");
                        try {
                            for (s in f) o.setRequestHeader(s, f[s])
                        } catch (c) {}
                        o.send(r.hasContent && r.data || null), u = function (n, f) {
                            var c, v, y, s, l;
                            try {
                                if (u && (f || o.readyState === 4))
                                    if (u = t, h && (o.onreadystatechange = i.noop, k && delete a[h]), f) o.readyState !== 4 && o.abort();
                                    else {
                                        c = o.status, y = o.getAllResponseHeaders(), s = {}, l = o.responseXML, l && l.documentElement && (s.xml = l), s.text = o.responseText;
                                        try {
                                            v = o.statusText
                                        } catch (w) {
                                            v = ""
                                        }!c && r.isLocal && !r.crossDomain ? c = s.text ? 200 : 404 : c === 1223 && (c = 204)
                                    }
                            } catch (p) {
                                f || e(-1, p)
                            }
                            s && e(c, v, s, y)
                        }, !r.async || o.readyState === 4 ? u() : (h = ++ki, k && (a || (a = {}, i(n).unload(k)), a[h] = u), o.onreadystatechange = u)
                    },
                    abort: function () {
                        u && u(0, 1)
                    }
                }
            }
        });
    var ut = {},
        f, h, fu = /^(?:toggle|show|hide)$/,
        wr = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
        nt, tr = [
            ["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
            ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
            ["opacity"]
        ],
        p;
    i.fn.extend({
        show: function (n, t, r) {
            var u, e, f, o;
            if (n || n === 0) return this.animate(v("show", 3), n, t, r);
            for (f = 0, o = this.length; f < o; f++) u = this[f], u.style && (e = u.style.display, !i._data(u, "olddisplay") && e === "none" && (e = u.style.display = ""), e === "" && i.css(u, "display") === "none" && i._data(u, "olddisplay", bt(u.nodeName)));
            for (f = 0; f < o; f++) u = this[f], u.style && (e = u.style.display, (e === "" || e === "none") && (u.style.display = i._data(u, "olddisplay") || ""));
            return this
        },
        hide: function (n, t, r) {
            if (n || n === 0) return this.animate(v("hide", 3), n, t, r);
            for (var f, e, u = 0, o = this.length; u < o; u++) f = this[u], f.style && (e = i.css(f, "display"), e !== "none" && !i._data(f, "olddisplay") && i._data(f, "olddisplay", e));
            for (u = 0; u < o; u++) this[u].style && (this[u].style.display = "none");
            return this
        },
        _toggle: i.fn.toggle,
        toggle: function (n, t, r) {
            var u = typeof n == "boolean";
            return i.isFunction(n) && i.isFunction(t) ? this._toggle.apply(this, arguments) : n == null || u ? this.each(function () {
                var t = u ? n : i(this).is(":hidden");
                i(this)[t ? "show" : "hide"]()
            }) : this.animate(v("toggle", 3), n, t, r), this
        },
        fadeTo: function (n, t, i, r) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({
                opacity: t
            }, n, i, r)
        },
        animate: function (n, t, r, u) {
            function e() {
                f.queue === !1 && i._mark(this);
                var u = i.extend({}, f),
                    y = this.nodeType === 1,
                    v = y && i(this).is(":hidden"),
                    e, t, r, s, c, o, h, l, a;
                u.animatedProperties = {};
                for (r in n) {
                    if (e = i.camelCase(r), r !== e && (n[e] = n[r], delete n[r]), t = n[e], i.isArray(t) ? (u.animatedProperties[e] = t[1], t = n[e] = t[0]) : u.animatedProperties[e] = u.specialEasing && u.specialEasing[e] || u.easing || "swing", t === "hide" && v || t === "show" && !v) return u.complete.call(this);
                    y && (e === "height" || e === "width") && (u.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], i.css(this, "display") === "inline" && i.css(this, "float") === "none" && (!i.support.inlineBlockNeedsLayout || bt(this.nodeName) === "inline" ? this.style.display = "inline-block" : this.style.zoom = 1))
                }
                u.overflow != null && (this.style.overflow = "hidden");
                for (r in n) s = new i.fx(this, u, r), t = n[r], fu.test(t) ? (a = i._data(this, "toggle" + r) || (t === "toggle" ? v ? "show" : "hide" : 0), a ? (i._data(this, "toggle" + r, a === "show" ? "hide" : "show"), s[a]()) : s[t]()) : (c = wr.exec(t), o = s.cur(), c ? (h = parseFloat(c[2]), l = c[3] || (i.cssNumber[r] ? "" : "px"), l !== "px" && (i.style(this, r, (h || 1) + l), o = (h || 1) / s.cur() * o, i.style(this, r, o + l)), c[1] && (h = (c[1] === "-=" ? -1 : 1) * h + o), s.custom(o, h, l)) : s.custom(o, t, ""));
                return !0
            }
            var f = i.speed(t, r, u);
            return i.isEmptyObject(n) ? this.each(f.complete, [!1]) : (n = i.extend({}, n), f.queue === !1 ? this.each(e) : this.queue(f.queue, e))
        },
        stop: function (n, r, u) {
            return typeof n != "string" && (u = r, r = n, n = t), r && n !== !1 && this.queue(n || "fx", []), this.each(function () {
                function e(n, t, r) {
                    var f = t[r];
                    i.removeData(n, r, !0), f.stop(u)
                }
                var t, o = !1,
                    f = i.timers,
                    r = i._data(this);
                if (u || i._unmark(!0, this), n == null)
                    for (t in r) r[t] && r[t].stop && t.indexOf(".run") === t.length - 4 && e(this, r, t);
                else r[t = n + ".run"] && r[t].stop && e(this, r, t);
                for (t = f.length; t--;) f[t].elem === this && (n == null || f[t].queue === n) && (u ? f[t](!0) : f[t].saveState(), o = !0, f.splice(t, 1));
                (!u || !o) && i.dequeue(this, n)
            })
        }
    }), i.each({
        slideDown: v("show", 1),
        slideUp: v("hide", 1),
        slideToggle: v("toggle", 1),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (n, t) {
        i.fn[n] = function (n, i, r) {
            return this.animate(t, n, i, r)
        }
    }), i.extend({
        speed: function (n, t, r) {
            var u = n && typeof n == "object" ? i.extend({}, n) : {
                complete: r || !r && t || i.isFunction(n) && n,
                duration: n,
                easing: r && t || t && !i.isFunction(t) && t
            };
            return u.duration = i.fx.off ? 0 : typeof u.duration == "number" ? u.duration : u.duration in i.fx.speeds ? i.fx.speeds[u.duration] : i.fx.speeds._default, (u.queue == null || u.queue === !0) && (u.queue = "fx"), u.old = u.complete, u.complete = function (n) {
                i.isFunction(u.old) && u.old.call(this), u.queue ? i.dequeue(this, u.queue) : n !== !1 && i._unmark(this)
            }, u
        },
        easing: {
            linear: function (n, t, i, r) {
                return i + r * n
            },
            swing: function (n, t, i, r) {
                return (-Math.cos(n * Math.PI) / 2 + .5) * r + i
            }
        },
        timers: [],
        fx: function (n, t, i) {
            this.options = t, this.elem = n, this.prop = i, t.orig = t.orig || {}
        }
    }), i.fx.prototype = {
        update: function () {
            this.options.step && this.options.step.call(this.elem, this.now, this), (i.fx.step[this.prop] || i.fx.step._default)(this)
        },
        cur: function () {
            if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null)) return this.elem[this.prop];
            var t, n = i.css(this.elem, this.prop);
            return isNaN(t = parseFloat(n)) ? !n || n === "auto" ? 0 : n : t
        },
        custom: function (n, r, u) {
            function e(n) {
                return f.step(n)
            }
            var f = this,
                o = i.fx;
            this.startTime = p || bi(), this.end = r, this.now = this.start = n, this.pos = this.state = 0, this.unit = u || this.unit || (i.cssNumber[this.prop] ? "" : "px"), e.queue = this.options.queue, e.elem = this.elem, e.saveState = function () {
                f.options.hide && i._data(f.elem, "fxshow" + f.prop) === t && i._data(f.elem, "fxshow" + f.prop, f.start)
            }, e() && i.timers.push(e) && !nt && (nt = setInterval(o.tick, o.interval))
        },
        show: function () {
            var n = i._data(this.elem, "fxshow" + this.prop);
            this.options.orig[this.prop] = n || i.style(this.elem, this.prop), this.options.show = !0, n !== t ? this.custom(this.cur(), n) : this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur()), i(this.elem).show()
        },
        hide: function () {
            this.options.orig[this.prop] = i._data(this.elem, "fxshow" + this.prop) || i.style(this.elem, this.prop), this.options.hide = !0, this.custom(this.cur(), 0)
        },
        step: function (n) {
            var r, e, f, o = p || bi(),
                s = !0,
                u = this.elem,
                t = this.options;
            if (n || o >= t.duration + this.startTime) {
                this.now = this.end, this.pos = this.state = 1, this.update(), t.animatedProperties[this.prop] = !0;
                for (r in t.animatedProperties) t.animatedProperties[r] !== !0 && (s = !1);
                if (s) {
                    if (t.overflow != null && !i.support.shrinkWrapBlocks && i.each(["", "X", "Y"], function (n, i) {
                            u.style["overflow" + i] = t.overflow[n]
                        }), t.hide && i(u).hide(), t.hide || t.show)
                        for (r in t.animatedProperties) i.style(u, r, t.orig[r]), i.removeData(u, "fxshow" + r, !0), i.removeData(u, "toggle" + r, !0);
                    f = t.complete, f && (t.complete = !1, f.call(u))
                }
                return !1
            }
            return t.duration == Infinity ? this.now = o : (e = o - this.startTime, this.state = e / t.duration, this.pos = i.easing[t.animatedProperties[this.prop]](this.state, e, 0, 1, t.duration), this.now = this.start + (this.end - this.start) * this.pos), this.update(), !0
        }
    }, i.extend(i.fx, {
        tick: function () {
            for (var r, t = i.timers, n = 0; n < t.length; n++) r = t[n], !r() && t[n] === r && t.splice(n--, 1);
            t.length || i.fx.stop()
        },
        interval: 13,
        stop: function () {
            clearInterval(nt), nt = null
        },
        speeds: {
            slow: 600,
            fast: 200,
            _default: 400
        },
        step: {
            opacity: function (n) {
                i.style(n.elem, "opacity", n.now)
            },
            _default: function (n) {
                n.elem.style && n.elem.style[n.prop] != null ? n.elem.style[n.prop] = n.now + n.unit : n.elem[n.prop] = n.now
            }
        }
    }), i.each(["width", "height"], function (n, t) {
        i.fx.step[t] = function (n) {
            i.style(n.elem, t, Math.max(0, n.now) + n.unit)
        }
    }), i.expr && i.expr.filters && (i.expr.filters.animated = function (n) {
        return i.grep(i.timers, function (t) {
            return n === t.elem
        }).length
    }), di = /^t(?:able|d|h)$/i, it = /^(?:body|html)$/i, i.fn.offset = "getBoundingClientRect" in r.documentElement ? function (n) {
        var t = this[0],
            r, e, u;
        if (n) return this.each(function (t) {
            i.offset.setOffset(this, n, t)
        });
        if (!t || !t.ownerDocument) return null;
        if (t === t.ownerDocument.body) return i.offset.bodyOffset(t);
        try {
            r = t.getBoundingClientRect()
        } catch (y) {}
        if (e = t.ownerDocument, u = e.documentElement, !r || !i.contains(u, t)) return r ? {
            top: r.top,
            left: r.left
        } : {
            top: 0,
            left: 0
        };
        var f = e.body,
            o = et(e),
            l = u.clientTop || f.clientTop || 0,
            a = u.clientLeft || f.clientLeft || 0,
            v = o.pageYOffset || i.support.boxModel && u.scrollTop || f.scrollTop,
            s = o.pageXOffset || i.support.boxModel && u.scrollLeft || f.scrollLeft,
            h = r.top + v - l,
            c = r.left + s - a;
        return {
            top: h,
            left: c
        }
    } : function (n) {
        var t = this[0];
        if (n) return this.each(function (t) {
            i.offset.setOffset(this, n, t)
        });
        if (!t || !t.ownerDocument) return null;
        if (t === t.ownerDocument.body) return i.offset.bodyOffset(t);
        for (var f, h = t.offsetParent, a = t, l = t.ownerDocument, c = l.documentElement, o = l.body, s = l.defaultView, e = s ? s.getComputedStyle(t, null) : t.currentStyle, u = t.offsetTop, r = t.offsetLeft;
            (t = t.parentNode) && t !== o && t !== c;) {
            if (i.support.fixedPosition && e.position === "fixed") break;
            f = s ? s.getComputedStyle(t, null) : t.currentStyle, u -= t.scrollTop, r -= t.scrollLeft, t === h && (u += t.offsetTop, r += t.offsetLeft, i.support.doesNotAddBorder && (!i.support.doesAddBorderForTableAndCells || !di.test(t.nodeName)) && (u += parseFloat(f.borderTopWidth) || 0, r += parseFloat(f.borderLeftWidth) || 0), a = h, h = t.offsetParent), i.support.subtractsBorderForOverflowNotVisible && f.overflow !== "visible" && (u += parseFloat(f.borderTopWidth) || 0, r += parseFloat(f.borderLeftWidth) || 0), e = f
        }
        return (e.position === "relative" || e.position === "static") && (u += o.offsetTop, r += o.offsetLeft), i.support.fixedPosition && e.position === "fixed" && (u += Math.max(c.scrollTop, o.scrollTop), r += Math.max(c.scrollLeft, o.scrollLeft)), {
            top: u,
            left: r
        }
    }, i.offset = {
        bodyOffset: function (n) {
            var r = n.offsetTop,
                t = n.offsetLeft;
            return i.support.doesNotIncludeMarginInBodyOffset && (r += parseFloat(i.css(n, "marginTop")) || 0, t += parseFloat(i.css(n, "marginLeft")) || 0), {
                top: r,
                left: t
            }
        },
        setOffset: function (n, t, r) {
            var s = i.css(n, "position");
            s === "static" && (n.style.position = "relative");
            var h = i(n),
                c = h.offset(),
                l = i.css(n, "top"),
                a = i.css(n, "left"),
                v = (s === "absolute" || s === "fixed") && i.inArray("auto", [l, a]) > -1,
                u = {},
                e = {},
                f, o;
            v ? (e = h.position(), f = e.top, o = e.left) : (f = parseFloat(l) || 0, o = parseFloat(a) || 0), i.isFunction(t) && (t = t.call(n, r, c)), t.top != null && (u.top = t.top - c.top + f), t.left != null && (u.left = t.left - c.left + o), "using" in t ? t.using.call(n, u) : h.css(u)
        }
    }, i.fn.extend({
        position: function () {
            if (!this[0]) return null;
            var u = this[0],
                r = this.offsetParent(),
                n = this.offset(),
                t = it.test(r[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : r.offset();
            return n.top -= parseFloat(i.css(u, "marginTop")) || 0, n.left -= parseFloat(i.css(u, "marginLeft")) || 0, t.top += parseFloat(i.css(r[0], "borderTopWidth")) || 0, t.left += parseFloat(i.css(r[0], "borderLeftWidth")) || 0, {
                top: n.top - t.top,
                left: n.left - t.left
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var n = this.offsetParent || r.body; n && !it.test(n.nodeName) && i.css(n, "position") === "static";) n = n.offsetParent;
                return n
            })
        }
    }), i.each(["Left", "Top"], function (n, r) {
        var u = "scroll" + r;
        i.fn[u] = function (r) {
            var e, f;
            return r === t ? (e = this[0], !e) ? null : (f = et(e), f ? "pageXOffset" in f ? f[n ? "pageYOffset" : "pageXOffset"] : i.support.boxModel && f.document.documentElement[u] || f.document.body[u] : e[u]) : this.each(function () {
                f = et(this), f ? f.scrollTo(n ? i(f).scrollLeft() : r, n ? r : i(f).scrollTop()) : this[u] = r
            })
        }
    }), i.each(["Height", "Width"], function (n, r) {
        var u = r.toLowerCase();
        i.fn["inner" + r] = function () {
            var n = this[0];
            return n ? n.style ? parseFloat(i.css(n, u, "padding")) : this[u]() : null
        }, i.fn["outer" + r] = function (n) {
            var t = this[0];
            return t ? t.style ? parseFloat(i.css(t, u, n ? "margin" : "border")) : this[u]() : null
        }, i.fn[u] = function (n) {
            var f = this[0],
                s, h, e, o;
            return f ? i.isFunction(n) ? this.each(function (t) {
                var r = i(this);
                r[u](n.call(this, t, r[u]()))
            }) : i.isWindow(f) ? (s = f.document.documentElement["client" + r], h = f.document.body, f.document.compatMode === "CSS1Compat" && s || h && h["client" + r] || s) : f.nodeType === 9 ? Math.max(f.documentElement["client" + r], f.body["scroll" + r], f.documentElement["scroll" + r], f.body["offset" + r], f.documentElement["offset" + r]) : n === t ? (e = i.css(f, u), o = parseFloat(e), i.isNumeric(o) ? o : e) : this.css(u, typeof n == "string" ? n : n + "px") : n == null ? null : this
        }
    }), n.jQuery = n.$ = i, typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function () {
        return i
    })
})(window),
function (n, t) {
    function pu(n) {
        var t = at[n] = {};
        return i.each(n.split(h), function (n, i) {
            t[i] = !0
        }), t
    }

    function su(n, r, u) {
        if (u === t && n.nodeType === 1) {
            var f = "data-" + r.replace(fu, "-$1").toLowerCase();
            if (u = n.getAttribute(f), typeof u == "string") {
                try {
                    u = u === "true" ? !0 : u === "false" ? !1 : u === "null" ? null : +u + "" === u ? +u : cu.test(u) ? i.parseJSON(u) : u
                } catch (e) {}
                i.data(n, r, u)
            } else u = t
        }
        return u
    }

    function vt(n) {
        var t;
        for (t in n)
            if ((t !== "data" || !i.isEmptyObject(n[t])) && t !== "toJSON") return !1;
        return !0
    }

    function p() {
        return !1
    }

    function ft() {
        return !0
    }

    function b(n) {
        return !n || !n.parentNode || n.parentNode.nodeType === 11
    }

    function vu(n, t) {
        do n = n[t]; while (n && n.nodeType !== 1);
        return n
    }

    function eu(n, t, r) {
        if (t = t || 0, i.isFunction(t)) return i.grep(n, function (n, i) {
            var u = !!t.call(n, i, n);
            return u === r
        });
        if (t.nodeType) return i.grep(n, function (n) {
            return n === t === r
        });
        if (typeof t == "string") {
            var u = i.grep(n, function (n) {
                return n.nodeType === 1
            });
            if (fe.test(t)) return i.filter(t, u, !r);
            t = i.filter(t, u)
        }
        return i.grep(n, function (n) {
            return i.inArray(n, t) >= 0 === r
        })
    }

    function ou(n) {
        var i = ur.split("|"),
            t = n.createDocumentFragment();
        if (t.createElement)
            while (i.length) t.createElement(i.pop());
        return t
    }

    function hf(n, t) {
        return n.getElementsByTagName(t)[0] || n.appendChild(n.ownerDocument.createElement(t))
    }

    function yu(n, t) {
        if (t.nodeType === 1 && i.hasData(n)) {
            var e, f, o, s = i._data(n),
                r = i._data(t, s),
                u = s.events;
            if (u) {
                delete r.handle, r.events = {};
                for (e in u)
                    for (f = 0, o = u[e].length; f < o; f++) i.event.add(t, e, u[e][f])
            }
            r.data && (r.data = i.extend({}, r.data))
        }
    }

    function lu(n, t) {
        var r;
        t.nodeType === 1 && (t.clearAttributes && t.clearAttributes(), t.mergeAttributes && t.mergeAttributes(n), r = t.nodeName.toLowerCase(), r === "object" ? (t.parentNode && (t.outerHTML = n.outerHTML), i.support.html5Clone && n.innerHTML && !i.trim(t.innerHTML) && (t.innerHTML = n.innerHTML)) : r === "input" && li.test(n.type) ? (t.defaultChecked = t.checked = n.checked, t.value !== n.value && (t.value = n.value)) : r === "option" ? t.selected = n.defaultSelected : r === "input" || r === "textarea" ? t.defaultValue = n.defaultValue : r === "script" && t.text !== n.text && (t.text = n.text), t.removeAttribute(i.expando))
    }

    function ht(n) {
        return typeof n.getElementsByTagName != "undefined" ? n.getElementsByTagName("*") : typeof n.querySelectorAll != "undefined" ? n.querySelectorAll("*") : []
    }

    function au(n) {
        li.test(n.type) && (n.defaultChecked = n.checked)
    }

    function uu(n, t) {
        if (t in n) return t;
        for (var r = t.charAt(0).toUpperCase() + t.slice(1), u = t, i = pi.length; i--;)
            if (t = pi[i] + r, t in n) return t;
        return u
    }

    function st(n, t) {
        return n = t || n, i.css(n, "display") === "none" || !i.contains(n.ownerDocument, n)
    }

    function vr(n, t) {
        for (var r, o, e = [], f = 0, s = n.length; f < s; f++)(r = n[f], r.style) && (e[f] = i._data(r, "olddisplay"), t ? (!e[f] && r.style.display === "none" && (r.style.display = ""), r.style.display === "" && st(r) && (e[f] = i._data(r, "olddisplay", sr(r.nodeName)))) : (o = u(r, "display"), !e[f] && o !== "none" && i._data(r, "olddisplay", o)));
        for (f = 0; f < s; f++)(r = n[f], r.style) && (t && r.style.display !== "none" && r.style.display !== "" || (r.style.display = t ? e[f] || "" : "none"));
        return n
    }

    function ar(n, t, i) {
        var r = uo.exec(t);
        return r ? Math.max(0, r[1] - (i || 0)) + (r[2] || "px") : t
    }

    function yr(n, t, r, f) {
        for (var e = r === (f ? "border" : "content") ? 4 : t === "width" ? 1 : 0, o = 0; e < 4; e += 2) r === "margin" && (o += i.css(n, r + c[e], !0)), f ? (r === "content" && (o -= parseFloat(u(n, "padding" + c[e])) || 0), r !== "margin" && (o -= parseFloat(u(n, "border" + c[e] + "Width")) || 0)) : (o += parseFloat(u(n, "padding" + c[e])) || 0, r !== "padding" && (o += parseFloat(u(n, "border" + c[e] + "Width")) || 0));
        return o
    }

    function hr(n, t, r) {
        var f = t === "width" ? n.offsetWidth : n.offsetHeight,
            o = !0,
            e = i.support.boxSizing && i.css(n, "boxSizing") === "border-box";
        if (f <= 0) {
            if (f = u(n, t), (f < 0 || f == null) && (f = n.style[t]), g.test(f)) return f;
            o = e && (i.support.boxSizingReliable || f === n.style[t]), f = parseFloat(f) || 0
        }
        return f + yr(n, t, r || (e ? "border" : "content"), o) + "px"
    }

    function sr(n) {
        if (ti[n]) return ti[n];
        var f = i("<" + n + ">").appendTo(r.body),
            t = f.css("display");
        return f.remove(), (t === "none" || t === "") && (v = r.body.appendChild(v || i.extend(r.createElement("iframe"), {
            frameBorder: 0,
            width: 0,
            height: 0
        })), y && v.createElement || (y = (v.contentWindow || v.contentDocument).document, y.write("<!doctype html><html><body>"), y.close()), f = y.body.appendChild(y.createElement(n)), t = u(f, "display"), r.body.removeChild(v)), ti[n] = t, t
    }

    function ii(n, t, r, u) {
        var f;
        if (i.isArray(t)) i.each(t, function (t, i) {
            r || rf.test(n) ? u(n, i) : ii(n + "[" + (typeof i == "object" ? t : "") + "]", i, r, u)
        });
        else if (r || i.type(t) !== "object") u(n, t);
        else
            for (f in t) ii(n + "[" + f + "]", t[f], r, u)
    }

    function tu(n) {
        return function (t, r) {
            typeof t != "string" && (r = t, t = "*");
            var u, s, f, o = t.toLowerCase().split(h),
                e = 0,
                c = o.length;
            if (i.isFunction(r))
                for (; e < c; e++) u = o[e], f = /^\+/.test(u), f && (u = u.substr(1) || "*"), s = n[u] = n[u] || [], s[f ? "unshift" : "push"](r)
        }
    }

    function lt(n, i, r, u, f, e) {
        f = f || i.dataTypes[0], e = e || {}, e[f] = !0;
        for (var o, c = n[f], h = 0, l = c ? c.length : 0, s = n === ni; h < l && (s || !o); h++) o = c[h](i, r, u), typeof o == "string" && (!s || e[o] ? o = t : (i.dataTypes.unshift(o), o = lt(n, i, r, u, o, e)));
        return (s || !o) && !e["*"] && (o = lt(n, i, r, u, "*", e)), o
    }

    function iu(n, r) {
        var u, f, e = i.ajaxSettings.flatOptions || {};
        for (u in r) r[u] !== t && ((e[u] ? n : f || (f = {}))[u] = r[u]);
        f && i.extend(!0, n, f)
    }

    function uf(n, i, r) {
        var o, u, e, h, s = n.contents,
            f = n.dataTypes,
            c = n.responseFields;
        for (u in c) u in r && (i[c[u]] = r[u]);
        while (f[0] === "*") f.shift(), o === t && (o = n.mimeType || i.getResponseHeader("content-type"));
        if (o)
            for (u in s)
                if (s[u] && s[u].test(o)) {
                    f.unshift(u);
                    break
                } if (f[0] in r) e = f[0];
        else {
            for (u in r) {
                if (!f[0] || n.converters[u + " " + f[0]]) {
                    e = u;
                    break
                }
                h || (h = u)
            }
            e = e || h
        }
        if (e) return e !== f[0] && f.unshift(e), r[e]
    }

    function tf(n, t) {
        var i, o, r, e, s = n.dataTypes.slice(),
            f = s[0],
            u = {},
            h = 0;
        if (n.dataFilter && (t = n.dataFilter(t, n.dataType)), s[1])
            for (i in n.converters) u[i.toLowerCase()] = n.converters[i];
        for (; r = s[++h];)
            if (r !== "*") {
                if (f !== "*" && f !== r) {
                    if (i = u[f + " " + r] || u["* " + r], !i)
                        for (o in u)
                            if (e = o.split(" "), e[1] === r && (i = u[f + " " + e[0]] || u["* " + e[0]], i)) {
                                i === !0 ? i = u[o] : u[o] !== !0 && (r = e[0], s.splice(h--, 0, r));
                                break
                            } if (i !== !0)
                        if (i && n.throws) t = i(t);
                        else try {
                            t = i(t)
                        } catch (c) {
                            return {
                                state: "parsererror",
                                error: i ? c : "No conversion from " + f + " to " + r
                            }
                        }
                }
                f = r
            } return {
            state: "success",
            data: t
        }
    }

    function gr() {
        try {
            return new n.XMLHttpRequest
        } catch (t) {}
    }

    function wu() {
        try {
            return new n.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }

    function lr() {
        return setTimeout(function () {
            ct = t
        }, 0), ct = i.now()
    }

    function io(n, t) {
        i.each(t, function (t, i) {
            for (var u = (k[t] || []).concat(k["*"]), r = 0, f = u.length; r < f; r++)
                if (u[r].call(n, t, i)) return
        })
    }

    function dr(n, t, r) {
        var o, s = 0,
            l = 0,
            c = ut.length,
            f = i.Deferred().always(function () {
                delete h.elem
            }),
            h = function () {
                for (var o = ct || lr(), i = Math.max(0, u.startTime + u.duration - o), r = 1 - (i / u.duration || 0), t = 0, e = u.tweens.length; t < e; t++) u.tweens[t].run(r);
                return f.notifyWith(n, [u, r, i]), r < 1 && e ? i : (f.resolveWith(n, [u]), !1)
            },
            u = f.promise({
                elem: n,
                props: i.extend({}, t),
                opts: i.extend(!0, {
                    specialEasing: {}
                }, r),
                originalProperties: t,
                originalOptions: r,
                startTime: ct || lr(),
                duration: r.duration,
                tweens: [],
                createTween: function (t, r) {
                    var e = i.Tween(n, u.opts, t, r, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(e), e
                },
                stop: function (t) {
                    for (var i = 0, r = t ? u.tweens.length : 0; i < r; i++) u.tweens[i].run(1);
                    return t ? f.resolveWith(n, [u, t]) : f.rejectWith(n, [u, t]), this
                }
            }),
            e = u.props;
        for (ro(e, u.opts.specialEasing); s < c; s++)
            if (o = ut[s].call(u, n, e, u.opts), o) return o;
        return io(u, e), i.isFunction(u.opts.start) && u.opts.start.call(n, u), i.fx.timer(i.extend(h, {
            anim: u,
            queue: u.opts.queue,
            elem: n
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function ro(n, t) {
        var r, f, o, u, e;
        for (r in n)
            if (f = i.camelCase(r), o = t[f], u = n[r], i.isArray(u) && (o = u[1], u = n[r] = u[0]), r !== f && (n[f] = u, delete n[r]), e = i.cssHooks[f], e && "expand" in e) {
                u = e.expand(u), delete n[f];
                for (r in u) r in n || (n[r] = u[r], t[r] = o)
            } else t[f] = o
    }

    function be(n, t, r) {
        var o, u, v, p, c, h, e, w, s = this,
            f = n.style,
            y = {},
            a = [],
            l = n.nodeType && st(n);
        r.queue || (e = i._queueHooks(n, "fx"), e.unqueued == null && (e.unqueued = 0, w = e.empty.fire, e.empty.fire = function () {
            e.unqueued || w()
        }), e.unqueued++, s.always(function () {
            s.always(function () {
                e.unqueued--, i.queue(n, "fx").length || e.empty.fire()
            })
        })), n.nodeType === 1 && ("height" in t || "width" in t) && (r.overflow = [f.overflow, f.overflowX, f.overflowY], i.css(n, "display") === "inline" && i.css(n, "float") === "none" && (!i.support.inlineBlockNeedsLayout || sr(n.nodeName) === "inline" ? f.display = "inline-block" : f.zoom = 1)), r.overflow && (f.overflow = "hidden", i.support.shrinkWrapBlocks || s.done(function () {
            f.overflow = r.overflow[0], f.overflowX = r.overflow[1], f.overflowY = r.overflow[2]
        }));
        for (o in t)
            if (v = t[o], cf.exec(v)) {
                if (delete t[o], v === (l ? "hide" : "show")) continue;
                a.push(o)
            } if (p = a.length, p)
            for (c = i._data(n, "fxshow") || i._data(n, "fxshow", {}), l ? i(n).show() : s.done(function () {
                    i(n).hide()
                }), s.done(function () {
                    var t;
                    i.removeData(n, "fxshow", !0);
                    for (t in y) i.style(n, t, y[t])
                }), o = 0; o < p; o++) u = a[o], h = s.createTween(u, l ? c[u] : 0), y[u] = c[u] || i.style(n, u), u in c || (c[u] = h.start, l && (h.end = h.start, h.start = u === "width" || u === "height" ? 1 : 0))
    }

    function f(n, t, i, r, u) {
        return new f.prototype.init(n, t, i, r, u)
    }

    function it(n, t) {
        for (var u, i = {
                height: n
            }, r = 0; r < 4; r += 2 - t) u = c[r], i["margin" + u] = i["padding" + u] = n;
        return t && (i.opacity = i.width = n), i
    }

    function br(n) {
        return i.isWindow(n) ? n : n.nodeType === 9 ? n.defaultView || n.parentWindow : !1
    }
    var kr, nt, r = n.document,
        ge = n.location,
        de = n.navigator,
        fo = n.jQuery,
        ao = n.$,
        ru = Array.prototype.push,
        s = Array.prototype.slice,
        nu = Array.prototype.indexOf,
        vo = Object.prototype.toString,
        yt = Object.prototype.hasOwnProperty,
        wr = String.prototype.trim,
        i = function (n, t) {
            return new i.fn.init(n, t, kr)
        },
        d = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
        cr = /\S/,
        h = /\s+/,
        so = cr.test(" ") ? /^[\s\xA0]+|[\s\xA0]+$/g : /^\s+|\s+$/g,
        re = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
        pr = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        df = /^[\],:{}\s]*$/,
        kf = /(?:^|:|,)(?:\s*\[)+/g,
        ve = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        ae = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,
        pe = /^-ms-/,
        ye = /-([\da-z])/gi,
        he = function (n, t) {
            return (t + "").toUpperCase()
        },
        tt = function () {
            r.addEventListener ? (r.removeEventListener("DOMContentLoaded", tt, !1), i.ready()) : r.readyState === "complete" && (r.detachEvent("onreadystatechange", tt), i.ready())
        },
        hu = {},
        at, cu, fu, w, ot, ir, kt;
    i.fn = i.prototype = {
        constructor: i,
        init: function (n, u, f) {
            var e, o, h, s;
            if (!n) return this;
            if (n.nodeType) return this.context = this[0] = n, this.length = 1, this;
            if (typeof n == "string") {
                if (e = n.charAt(0) === "<" && n.charAt(n.length - 1) === ">" && n.length >= 3 ? [null, n, null] : re.exec(n), e && (e[1] || !u)) {
                    if (e[1]) return u = u instanceof i ? u[0] : u, s = u && u.nodeType ? u.ownerDocument || u : r, n = i.parseHTML(e[1], s, !0), pr.test(e[1]) && i.isPlainObject(u) && this.attr.call(n, u, !0), i.merge(this, n);
                    if (o = r.getElementById(e[2]), o && o.parentNode) {
                        if (o.id !== e[2]) return f.find(n);
                        this.length = 1, this[0] = o
                    }
                    return this.context = r, this.selector = n, this
                }
                return !u || u.jquery ? (u || f).find(n) : this.constructor(u).find(n)
            }
            return i.isFunction(n) ? f.ready(n) : (n.selector !== t && (this.selector = n.selector, this.context = n.context), i.makeArray(n, this))
        },
        selector: "",
        jquery: "1.8.0",
        length: 0,
        size: function () {
            return this.length
        },
        toArray: function () {
            return s.call(this)
        },
        get: function (n) {
            return n == null ? this.toArray() : n < 0 ? this[this.length + n] : this[n]
        },
        pushStack: function (n, t, r) {
            var u = i.merge(this.constructor(), n);
            return u.prevObject = this, u.context = this.context, t === "find" ? u.selector = this.selector + (this.selector ? " " : "") + r : t && (u.selector = this.selector + "." + t + "(" + r + ")"), u
        },
        each: function (n, t) {
            return i.each(this, n, t)
        },
        ready: function (n) {
            return i.ready.promise().done(n), this
        },
        eq: function (n) {
            return n = +n, n === -1 ? this.slice(n) : this.slice(n, n + 1)
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        slice: function () {
            return this.pushStack(s.apply(this, arguments), "slice", s.call(arguments).join(","))
        },
        map: function (n) {
            return this.pushStack(i.map(this, function (t, i) {
                return n.call(t, i, t)
            }))
        },
        end: function () {
            return this.prevObject || this.constructor(null)
        },
        push: ru,
        sort: [].sort,
        splice: [].splice
    }, i.fn.init.prototype = i.fn, i.extend = i.fn.extend = function () {
        var s, e, u, r, h, c, n = arguments[0] || {},
            f = 1,
            l = arguments.length,
            o = !1;
        for (typeof n == "boolean" && (o = n, n = arguments[1] || {}, f = 2), typeof n != "object" && !i.isFunction(n) && (n = {}), l === f && (n = this, --f); f < l; f++)
            if ((s = arguments[f]) != null)
                for (e in s)(u = n[e], r = s[e], n !== r) && (o && r && (i.isPlainObject(r) || (h = i.isArray(r))) ? (h ? (h = !1, c = u && i.isArray(u) ? u : []) : c = u && i.isPlainObject(u) ? u : {}, n[e] = i.extend(o, c, r)) : r !== t && (n[e] = r));
        return n
    }, i.extend({
        noConflict: function (t) {
            return n.$ === i && (n.$ = ao), t && n.jQuery === i && (n.jQuery = fo), i
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function (n) {
            n ? i.readyWait++ : i.ready(!0)
        },
        ready: function (n) {
            if (n === !0 ? !--i.readyWait : !i.isReady) {
                if (!r.body) return setTimeout(i.ready, 1);
                (i.isReady = !0, n !== !0 && --i.readyWait > 0) || (nt.resolveWith(r, [i]), i.fn.trigger && i(r).trigger("ready").off("ready"))
            }
        },
        isFunction: function (n) {
            return i.type(n) === "function"
        },
        isArray: Array.isArray || function (n) {
            return i.type(n) === "array"
        },
        isWindow: function (n) {
            return n != null && n == n.window
        },
        isNumeric: function (n) {
            return !isNaN(parseFloat(n)) && isFinite(n)
        },
        type: function (n) {
            return n == null ? String(n) : hu[vo.call(n)] || "object"
        },
        isPlainObject: function (n) {
            if (!n || i.type(n) !== "object" || n.nodeType || i.isWindow(n)) return !1;
            try {
                if (n.constructor && !yt.call(n, "constructor") && !yt.call(n.constructor.prototype, "isPrototypeOf")) return !1
            } catch (u) {
                return !1
            }
            var r;
            for (r in n);
            return r === t || yt.call(n, r)
        },
        isEmptyObject: function (n) {
            var t;
            for (t in n) return !1;
            return !0
        },
        error: function (n) {
            throw new Error(n);
        },
        parseHTML: function (n, t, u) {
            var f;
            return !n || typeof n != "string" ? null : (typeof t == "boolean" && (u = t, t = 0), t = t || r, (f = pr.exec(n)) ? [t.createElement(f[1])] : (f = i.buildFragment([n], t, u ? null : []), i.merge([], (f.cacheable ? i.clone(f.fragment) : f.fragment).childNodes)))
        },
        parseJSON: function (t) {
            if (!t || typeof t != "string") return null;
            if (t = i.trim(t), n.JSON && n.JSON.parse) return n.JSON.parse(t);
            if (df.test(t.replace(ve, "@").replace(ae, "]").replace(kf, ""))) return new Function("return " + t)();
            i.error("Invalid JSON: " + t)
        },
        parseXML: function (r) {
            var u, f;
            if (!r || typeof r != "string") return null;
            try {
                n.DOMParser ? (f = new DOMParser, u = f.parseFromString(r, "text/xml")) : (u = new ActiveXObject("Microsoft.XMLDOM"), u.async = "false", u.loadXML(r))
            } catch (e) {
                u = t
            }
            return (!u || !u.documentElement || u.getElementsByTagName("parsererror").length) && i.error("Invalid XML: " + r), u
        },
        noop: function () {},
        globalEval: function (t) {
            t && cr.test(t) && (n.execScript || function (t) {
                n.eval.call(n, t)
            })(t)
        },
        camelCase: function (n) {
            return n.replace(pe, "ms-").replace(ye, he)
        },
        nodeName: function (n, t) {
            return n.nodeName && n.nodeName.toUpperCase() === t.toUpperCase()
        },
        each: function (n, r, u) {
            var e, f = 0,
                o = n.length,
                s = o === t || i.isFunction(n);
            if (u) {
                if (s) {
                    for (e in n)
                        if (r.apply(n[e], u) === !1) break
                } else
                    for (; f < o;)
                        if (r.apply(n[f++], u) === !1) break
            } else if (s) {
                for (e in n)
                    if (r.call(n[e], e, n[e]) === !1) break
            } else
                for (; f < o;)
                    if (r.call(n[f], f, n[f++]) === !1) break;
            return n
        },
        trim: wr ? function (n) {
            return n == null ? "" : wr.call(n)
        } : function (n) {
            return n == null ? "" : n.toString().replace(so, "")
        },
        makeArray: function (n, t) {
            var r, u = t || [];
            return n != null && (r = i.type(n), n.length == null || r === "string" || r === "function" || r === "regexp" || i.isWindow(n) ? ru.call(u, n) : i.merge(u, n)), u
        },
        inArray: function (n, t, i) {
            var r;
            if (t) {
                if (nu) return nu.call(t, n, i);
                for (r = t.length, i = i ? i < 0 ? Math.max(0, r + i) : i : 0; i < r; i++)
                    if (i in t && t[i] === n) return i
            }
            return -1
        },
        merge: function (n, i) {
            var f = i.length,
                u = n.length,
                r = 0;
            if (typeof f == "number")
                for (; r < f; r++) n[u++] = i[r];
            else
                while (i[r] !== t) n[u++] = i[r++];
            return n.length = u, n
        },
        grep: function (n, t, i) {
            var f, u = [],
                r = 0,
                e = n.length;
            for (i = !!i; r < e; r++) f = !!t(n[r], r), i !== f && u.push(n[r]);
            return u
        },
        map: function (n, r, u) {
            var o, h, f = [],
                s = 0,
                e = n.length,
                c = n instanceof i || e !== t && typeof e == "number" && (e > 0 && n[0] && n[e - 1] || e === 0 || i.isArray(n));
            if (c)
                for (; s < e; s++) o = r(n[s], s, u), o != null && (f[f.length] = o);
            else
                for (h in n) o = r(n[h], h, u), o != null && (f[f.length] = o);
            return f.concat.apply([], f)
        },
        guid: 1,
        proxy: function (n, r) {
            var f, e, u;
            return typeof r == "string" && (f = n[r], r = n, n = f), i.isFunction(n) ? (e = s.call(arguments, 2), u = function () {
                return n.apply(r, e.concat(s.call(arguments)))
            }, u.guid = n.guid = n.guid || u.guid || i.guid++, u) : t
        },
        access: function (n, r, u, f, e, o, s) {
            var c, a = u == null,
                h = 0,
                l = n.length;
            if (u && typeof u == "object") {
                for (h in u) i.access(n, r, h, u[h], 1, o, f);
                e = 1
            } else if (f !== t) {
                if (c = s === t && i.isFunction(f), a && (c ? (c = r, r = function (n, t, r) {
                        return c.call(i(n), r)
                    }) : (r.call(n, f), r = null)), r)
                    for (; h < l; h++) r(n[h], u, c ? f.call(n[h], h, r(n[h], u)) : f, s);
                e = 1
            }
            return e ? n : a ? r.call(n) : l ? r(n[0], u) : o
        },
        now: function () {
            return +new Date
        }
    }), i.ready.promise = function (t) {
        if (!nt)
            if (nt = i.Deferred(), r.readyState === "complete" || r.readyState !== "loading" && r.addEventListener) setTimeout(i.ready, 1);
            else if (r.addEventListener) r.addEventListener("DOMContentLoaded", tt, !1), n.addEventListener("load", i.ready, !1);
        else {
            r.attachEvent("onreadystatechange", tt), n.attachEvent("onload", i.ready);
            var u = !1;
            try {
                u = n.frameElement == null && r.documentElement
            } catch (e) {}
            u && u.doScroll && function f() {
                if (!i.isReady) {
                    try {
                        u.doScroll("left")
                    } catch (n) {
                        return setTimeout(f, 50)
                    }
                    i.ready()
                }
            }()
        }
        return nt.promise(t)
    }, i.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (n, t) {
        hu["[object " + t + "]"] = t.toLowerCase()
    }), kr = i(r), at = {}, i.Callbacks = function (n) {
        n = typeof n == "string" ? at[n] || pu(n) : i.extend({}, n);
        var f, c, s, a, h, e, r = [],
            u = !n.once && [],
            l = function (t) {
                for (f = n.memory && t, c = !0, e = a || 0, a = 0, h = r.length, s = !0; r && e < h; e++)
                    if (r[e].apply(t[0], t[1]) === !1 && n.stopOnFalse) {
                        f = !1;
                        break
                    } s = !1, r && (u ? u.length && l(u.shift()) : f ? r = [] : o.disable())
            },
            o = {
                add: function () {
                    if (r) {
                        var u = r.length;
                        (function t(u) {
                            i.each(u, function (u, f) {
                                i.isFunction(f) && (!n.unique || !o.has(f)) ? r.push(f) : f && f.length && t(f)
                            })
                        })(arguments), s ? h = r.length : f && (a = u, l(f))
                    }
                    return this
                },
                remove: function () {
                    return r && i.each(arguments, function (n, t) {
                        for (var u;
                            (u = i.inArray(t, r, u)) > -1;) r.splice(u, 1), s && (u <= h && h--, u <= e && e--)
                    }), this
                },
                has: function (n) {
                    return i.inArray(n, r) > -1
                },
                empty: function () {
                    return r = [], this
                },
                disable: function () {
                    return r = u = f = t, this
                },
                disabled: function () {
                    return !r
                },
                lock: function () {
                    return u = t, f || o.disable(), this
                },
                locked: function () {
                    return !u
                },
                fireWith: function (n, t) {
                    return t = t || [], t = [n, t.slice ? t.slice() : t], r && (!c || u) && (s ? u.push(t) : l(t)), this
                },
                fire: function () {
                    return o.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!c
                }
            };
        return o
    }, i.extend({
        Deferred: function (n) {
            var u = [
                    ["resolve", "done", i.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", i.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", i.Callbacks("memory")]
                ],
                f = "pending",
                r = {
                    state: function () {
                        return f
                    },
                    always: function () {
                        return t.done(arguments).fail(arguments), this
                    },
                    then: function () {
                        var n = arguments;
                        return i.Deferred(function (r) {
                            i.each(u, function (u, f) {
                                var o = f[0],
                                    e = n[u];
                                t[f[1]](i.isFunction(e) ? function () {
                                    var n = e.apply(this, arguments);
                                    n && i.isFunction(n.promise) ? n.promise().done(r.resolve).fail(r.reject).progress(r.notify) : r[o + "With"](this === t ? r : this, [n])
                                } : r[o])
                            }), n = null
                        }).promise()
                    },
                    promise: function (n) {
                        return typeof n == "object" ? i.extend(n, r) : r
                    }
                },
                t = {};
            return r.pipe = r.then, i.each(u, function (n, i) {
                var e = i[2],
                    o = i[3];
                r[i[1]] = e.add, o && e.add(function () {
                    f = o
                }, u[n ^ 1][2].disable, u[2][2].lock), t[i[0]] = e.fire, t[i[0] + "With"] = e.fireWith
            }), r.promise(t), n && n.call(t, t), t
        },
        when: function (n) {
            var r = 0,
                u = s.call(arguments),
                t = u.length,
                e = t !== 1 || n && i.isFunction(n.promise) ? t : 0,
                f = e === 1 ? n : i.Deferred(),
                c = function (n, t, i) {
                    return function (r) {
                        t[n] = this, i[n] = arguments.length > 1 ? s.call(arguments) : r, i === h ? f.notifyWith(t, i) : --e || f.resolveWith(t, i)
                    }
                },
                h, l, o;
            if (t > 1)
                for (h = new Array(t), l = new Array(t), o = new Array(t); r < t; r++) u[r] && i.isFunction(u[r].promise) ? u[r].promise().done(c(r, o, u)).fail(f.reject).progress(c(r, l, h)) : --e;
            return e || f.resolveWith(o, u), f.promise()
        }
    }), i.support = function () {
        var u, h, e, l, c, f, o, a, v, s, y, t = r.createElement("div");
        if (t.setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", h = t.getElementsByTagName("*"), e = t.getElementsByTagName("a")[0], e.style.cssText = "top:1px;float:left;opacity:.5", !h || !h.length || !e) return {};
        l = r.createElement("select"), c = l.appendChild(r.createElement("option")), f = t.getElementsByTagName("input")[0], u = {
            leadingWhitespace: t.firstChild.nodeType === 3,
            tbody: !t.getElementsByTagName("tbody").length,
            htmlSerialize: !!t.getElementsByTagName("link").length,
            style: /top/.test(e.getAttribute("style")),
            hrefNormalized: e.getAttribute("href") === "/a",
            opacity: /^0.5/.test(e.style.opacity),
            cssFloat: !!e.style.cssFloat,
            checkOn: f.value === "on",
            optSelected: c.selected,
            getSetAttribute: t.className !== "t",
            enctype: !!r.createElement("form").enctype,
            html5Clone: r.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",
            boxModel: r.compatMode === "CSS1Compat",
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        }, f.checked = !0, u.noCloneChecked = f.cloneNode(!0).checked, l.disabled = !0, u.optDisabled = !c.disabled;
        try {
            delete t.test
        } catch (p) {
            u.deleteExpando = !1
        }
        if (!t.addEventListener && t.attachEvent && t.fireEvent && (t.attachEvent("onclick", y = function () {
                u.noCloneEvent = !1
            }), t.cloneNode(!0).fireEvent("onclick"), t.detachEvent("onclick", y)), f = r.createElement("input"), f.value = "t", f.setAttribute("type", "radio"), u.radioValue = f.value === "t", f.setAttribute("checked", "checked"), f.setAttribute("name", "t"), t.appendChild(f), o = r.createDocumentFragment(), o.appendChild(t.lastChild), u.checkClone = o.cloneNode(!0).cloneNode(!0).lastChild.checked, u.appendChecked = f.checked, o.removeChild(f), o.appendChild(t), t.attachEvent)
            for (v in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) a = "on" + v, s = a in t, s || (t.setAttribute(a, "return;"), s = typeof t[a] == "function"), u[v + "Bubbles"] = s;
        return i(function () {
            var e, t, f, i, h = "padding:0;margin:0;border:0;display:block;overflow:hidden;",
                o = r.getElementsByTagName("body")[0];
            o && (e = r.createElement("div"), e.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", o.insertBefore(e, o.firstChild), t = r.createElement("div"), e.appendChild(t), t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", f = t.getElementsByTagName("td"), f[0].style.cssText = "padding:0;margin:0;border:0;display:none", s = f[0].offsetHeight === 0, f[0].style.display = "", f[1].style.display = "none", u.reliableHiddenOffsets = s && f[0].offsetHeight === 0, t.innerHTML = "", t.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", u.boxSizing = t.offsetWidth === 4, u.doesNotIncludeMarginInBodyOffset = o.offsetTop !== 1, n.getComputedStyle && (u.pixelPosition = (n.getComputedStyle(t, null) || {}).top !== "1%", u.boxSizingReliable = (n.getComputedStyle(t, null) || {
                width: "4px"
            }).width === "4px", i = r.createElement("div"), i.style.cssText = t.style.cssText = h, i.style.marginRight = i.style.width = "0", t.style.width = "1px", t.appendChild(i), u.reliableMarginRight = !parseFloat((n.getComputedStyle(i, null) || {}).marginRight)), typeof t.style.zoom != "undefined" && (t.innerHTML = "", t.style.cssText = h + "width:1px;padding:1px;display:inline;zoom:1", u.inlineBlockNeedsLayout = t.offsetWidth === 3, t.style.display = "block", t.style.overflow = "visible", t.innerHTML = "<div></div>", t.firstChild.style.width = "5px", u.shrinkWrapBlocks = t.offsetWidth !== 3, e.style.zoom = 1), o.removeChild(e), e = t = f = i = null)
        }), o.removeChild(t), h = e = l = c = f = o = t = null, u
    }(), cu = /^(?:\{.*\}|\[.*\])$/, fu = /([A-Z])/g, i.extend({
        cache: {},
        deletedIds: [],
        uuid: 0,
        expando: "jQuery" + (i.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function (n) {
            return n = n.nodeType ? i.cache[n[i.expando]] : n[i.expando], !!n && !vt(n)
        },
        data: function (n, r, u, f) {
            if (i.acceptData(n)) {
                var s, h, c = i.expando,
                    a = typeof r == "string",
                    l = n.nodeType,
                    o = l ? i.cache : n,
                    e = l ? n[c] : n[c] && c;
                if (e && o[e] && (f || o[e].data) || !a || u !== t) return e || (l ? n[c] = e = i.deletedIds.pop() || ++i.uuid : e = c), o[e] || (o[e] = {}, l || (o[e].toJSON = i.noop)), (typeof r == "object" || typeof r == "function") && (f ? o[e] = i.extend(o[e], r) : o[e].data = i.extend(o[e].data, r)), s = o[e], f || (s.data || (s.data = {}), s = s.data), u !== t && (s[i.camelCase(r)] = u), a ? (h = s[r], h == null && (h = s[i.camelCase(r)])) : h = s, h
            }
        },
        removeData: function (n, t, r) {
            if (i.acceptData(n)) {
                var e, o, h, s = n.nodeType,
                    u = s ? i.cache : n,
                    f = s ? n[i.expando] : i.expando;
                if (u[f]) {
                    if (t && (e = r ? u[f] : u[f].data, e)) {
                        for (i.isArray(t) || (t in e ? t = [t] : (t = i.camelCase(t), t = t in e ? [t] : t.split(" "))), o = 0, h = t.length; o < h; o++) delete e[t[o]];
                        if (!(r ? vt : i.isEmptyObject)(e)) return
                    }(r || (delete u[f].data, vt(u[f]))) && (s ? i.cleanData([n], !0) : i.support.deleteExpando || u != u.window ? delete u[f] : u[f] = null)
                }
            }
        },
        _data: function (n, t, r) {
            return i.data(n, t, r, !0)
        },
        acceptData: function (n) {
            var t = n.nodeName && i.noData[n.nodeName.toLowerCase()];
            return !t || t !== !0 && n.getAttribute("classid") === t
        }
    }), i.fn.extend({
        data: function (n, r) {
            var u, s, c, o, l, e = this[0],
                h = 0,
                f = null;
            if (n === t) {
                if (this.length && (f = i.data(e), e.nodeType === 1 && !i._data(e, "parsedAttrs"))) {
                    for (c = e.attributes, l = c.length; h < l; h++) o = c[h].name, o.indexOf("data-") === 0 && (o = i.camelCase(o.substring(5)), su(e, o, f[o]));
                    i._data(e, "parsedAttrs", !0)
                }
                return f
            }
            return typeof n == "object" ? this.each(function () {
                i.data(this, n)
            }) : (u = n.split(".", 2), u[1] = u[1] ? "." + u[1] : "", s = u[1] + "!", i.access(this, function (r) {
                if (r === t) return f = this.triggerHandler("getData" + s, [u[0]]), f === t && e && (f = i.data(e, n), f = su(e, n, f)), f === t && u[1] ? this.data(u[0]) : f;
                u[1] = r, this.each(function () {
                    var t = i(this);
                    t.triggerHandler("setData" + s, u), i.data(this, n, r), t.triggerHandler("changeData" + s, u)
                })
            }, null, r, arguments.length > 1, null, !1))
        },
        removeData: function (n) {
            return this.each(function () {
                i.removeData(this, n)
            })
        }
    }), i.extend({
        queue: function (n, t, r) {
            var u;
            if (n) return t = (t || "fx") + "queue", u = i._data(n, t), r && (!u || i.isArray(r) ? u = i._data(n, t, i.makeArray(r)) : u.push(r)), u || []
        },
        dequeue: function (n, t) {
            t = t || "fx";
            var f = i.queue(n, t),
                u = f.shift(),
                r = i._queueHooks(n, t),
                e = function () {
                    i.dequeue(n, t)
                };
            u === "inprogress" && (u = f.shift()), u && (t === "fx" && f.unshift("inprogress"), delete r.stop, u.call(n, e, r)), !f.length && r && r.empty.fire()
        },
        _queueHooks: function (n, t) {
            var r = t + "queueHooks";
            return i._data(n, r) || i._data(n, r, {
                empty: i.Callbacks("once memory").add(function () {
                    i.removeData(n, t + "queue", !0), i.removeData(n, r, !0)
                })
            })
        }
    }), i.fn.extend({
        queue: function (n, r) {
            var u = 2;
            return typeof n != "string" && (r = n, n = "fx", u--), arguments.length < u ? i.queue(this[0], n) : r === t ? this : this.each(function () {
                var t = i.queue(this, n, r);
                i._queueHooks(this, n), n === "fx" && t[0] !== "inprogress" && i.dequeue(this, n)
            })
        },
        dequeue: function (n) {
            return this.each(function () {
                i.dequeue(this, n)
            })
        },
        delay: function (n, t) {
            return n = i.fx ? i.fx.speeds[n] || n : n, t = t || "fx", this.queue(t, function (t, i) {
                var r = setTimeout(t, n);
                i.stop = function () {
                    clearTimeout(r)
                }
            })
        },
        clearQueue: function (n) {
            return this.queue(n || "fx", [])
        },
        promise: function (n, r) {
            var f, s = 1,
                h = i.Deferred(),
                u = this,
                o = this.length,
                e = function () {
                    --s || h.resolveWith(u, [u])
                };
            for (typeof n != "string" && (r = n, n = t), n = n || "fx"; o--;)(f = i._data(u[o], n + "queueHooks")) && f.empty && (s++, f.empty.add(e));
            return e(), h.promise(r)
        }
    });
    var o, ci, ai, yi = /[\t\r\n]/g,
        ce = /\r/g,
        oe = /^(?:button|input)$/i,
        se = /^(?:button|input|object|select|textarea)$/i,
        le = /^a(?:rea|)$/i,
        vi = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        si = i.support.getSetAttribute;
    i.fn.extend({
        attr: function (n, t) {
            return i.access(this, i.attr, n, t, arguments.length > 1)
        },
        removeAttr: function (n) {
            return this.each(function () {
                i.removeAttr(this, n)
            })
        },
        prop: function (n, t) {
            return i.access(this, i.prop, n, t, arguments.length > 1)
        },
        removeProp: function (n) {
            return n = i.propFix[n] || n, this.each(function () {
                try {
                    this[n] = t, delete this[n]
                } catch (i) {}
            })
        },
        addClass: function (n) {
            var u, e, s, t, f, r, o;
            if (i.isFunction(n)) return this.each(function (t) {
                i(this).addClass(n.call(this, t, this.className))
            });
            if (n && typeof n == "string")
                for (u = n.split(h), e = 0, s = this.length; e < s; e++)
                    if (t = this[e], t.nodeType === 1)
                        if (t.className || u.length !== 1) {
                            for (f = " " + t.className + " ", r = 0, o = u.length; r < o; r++) ~f.indexOf(" " + u[r] + " ") || (f += u[r] + " ");
                            t.className = i.trim(f)
                        } else t.className = n;
            return this
        },
        removeClass: function (n) {
            var o, f, r, u, c, e, s;
            if (i.isFunction(n)) return this.each(function (t) {
                i(this).removeClass(n.call(this, t, this.className))
            });
            if (n && typeof n == "string" || n === t)
                for (o = (n || "").split(h), e = 0, s = this.length; e < s; e++)
                    if (r = this[e], r.nodeType === 1 && r.className) {
                        for (f = (" " + r.className + " ").replace(yi, " "), u = 0, c = o.length; u < c; u++)
                            while (f.indexOf(" " + o[u] + " ") > -1) f = f.replace(" " + o[u] + " ", " ");
                        r.className = n ? i.trim(f) : ""
                    } return this
        },
        toggleClass: function (n, t) {
            var r = typeof n,
                u = typeof t == "boolean";
            return i.isFunction(n) ? this.each(function (r) {
                i(this).toggleClass(n.call(this, r, this.className, t), t)
            }) : this.each(function () {
                if (r === "string")
                    for (var e, c = 0, o = i(this), f = t, s = n.split(h); e = s[c++];) f = u ? f : !o.hasClass(e), o[f ? "addClass" : "removeClass"](e);
                else(r === "undefined" || r === "boolean") && (this.className && i._data(this, "__className__", this.className), this.className = this.className || n === !1 ? "" : i._data(this, "__className__") || "")
            })
        },
        hasClass: function (n) {
            for (var r = " " + n + " ", t = 0, i = this.length; t < i; t++)
                if (this[t].nodeType === 1 && (" " + this[t].className + " ").replace(yi, " ").indexOf(r) > -1) return !0;
            return !1
        },
        val: function (n) {
            var r, u, e, f = this[0];
            return arguments.length ? (e = i.isFunction(n), this.each(function (u) {
                var f, o = i(this);
                this.nodeType === 1 && (f = e ? n.call(this, u, o.val()) : n, f == null ? f = "" : typeof f == "number" ? f += "" : i.isArray(f) && (f = i.map(f, function (n) {
                    return n == null ? "" : n + ""
                })), r = i.valHooks[this.type] || i.valHooks[this.nodeName.toLowerCase()], r && "set" in r && r.set(this, f, "value") !== t || (this.value = f))
            })) : f ? (r = i.valHooks[f.type] || i.valHooks[f.nodeName.toLowerCase()], r && "get" in r && (u = r.get(f, "value")) !== t ? u : (u = f.value, typeof u == "string" ? u.replace(ce, "") : u == null ? "" : u)) : void 0
        }
    }), i.extend({
        valHooks: {
            option: {
                get: function (n) {
                    var t = n.attributes.value;
                    return !t || t.specified ? n.value : n.text
                }
            },
            select: {
                get: function (n) {
                    var o, e, h, t, r = n.selectedIndex,
                        s = [],
                        u = n.options,
                        f = n.type === "select-one";
                    if (r < 0) return null;
                    for (e = f ? r : 0, h = f ? r + 1 : u.length; e < h; e++)
                        if (t = u[e], t.selected && (i.support.optDisabled ? !t.disabled : t.getAttribute("disabled") === null) && (!t.parentNode.disabled || !i.nodeName(t.parentNode, "optgroup"))) {
                            if (o = i(t).val(), f) return o;
                            s.push(o)
                        } return f && !s.length && u.length ? i(u[r]).val() : s
                },
                set: function (n, t) {
                    var r = i.makeArray(t);
                    return i(n).find("option").each(function () {
                        this.selected = i.inArray(i(this).val(), r) >= 0
                    }), r.length || (n.selectedIndex = -1), r
                }
            }
        },
        attrFn: {},
        attr: function (n, r, u, f) {
            var s, e, c, h = n.nodeType;
            if (n && h !== 3 && h !== 8 && h !== 2) {
                if (f && i.isFunction(i.fn[r])) return i(n)[r](u);
                if (typeof n.getAttribute == "undefined") return i.prop(n, r, u);
                if (c = h !== 1 || !i.isXMLDoc(n), c && (r = r.toLowerCase(), e = i.attrHooks[r] || (vi.test(r) ? ci : o)), u !== t) {
                    if (u === null) {
                        i.removeAttr(n, r);
                        return
                    }
                    return e && "set" in e && c && (s = e.set(n, u, r)) !== t ? s : (n.setAttribute(r, "" + u), u)
                }
                return e && "get" in e && c && (s = e.get(n, r)) !== null ? s : (s = n.getAttribute(r), s === null ? t : s)
            }
        },
        removeAttr: function (n, t) {
            var u, o, r, e, f = 0;
            if (t && n.nodeType === 1)
                for (o = t.split(h); f < o.length; f++) r = o[f], r && (u = i.propFix[r] || r, e = vi.test(r), e || i.attr(n, r, ""), n.removeAttribute(si ? r : u), e && u in n && (n[u] = !1))
        },
        attrHooks: {
            type: {
                set: function (n, t) {
                    if (oe.test(n.nodeName) && n.parentNode) i.error("type property can't be changed");
                    else if (!i.support.radioValue && t === "radio" && i.nodeName(n, "input")) {
                        var r = n.value;
                        return n.setAttribute("type", t), r && (n.value = r), t
                    }
                }
            },
            value: {
                get: function (n, t) {
                    return o && i.nodeName(n, "button") ? o.get(n, t) : t in n ? n.value : null
                },
                set: function (n, t, r) {
                    if (o && i.nodeName(n, "button")) return o.set(n, t, r);
                    n.value = t
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function (n, r, u) {
            var o, f, s, e = n.nodeType;
            if (n && e !== 3 && e !== 8 && e !== 2) return s = e !== 1 || !i.isXMLDoc(n), s && (r = i.propFix[r] || r, f = i.propHooks[r]), u !== t ? f && "set" in f && (o = f.set(n, u, r)) !== t ? o : n[r] = u : f && "get" in f && (o = f.get(n, r)) !== null ? o : n[r]
        },
        propHooks: {
            tabIndex: {
                get: function (n) {
                    var i = n.getAttributeNode("tabindex");
                    return i && i.specified ? parseInt(i.value, 10) : se.test(n.nodeName) || le.test(n.nodeName) && n.href ? 0 : t
                }
            }
        }
    }), ci = {
        get: function (n, r) {
            var f, u = i.prop(n, r);
            return u === !0 || typeof u != "boolean" && (f = n.getAttributeNode(r)) && f.nodeValue !== !1 ? r.toLowerCase() : t
        },
        set: function (n, t, r) {
            var u;
            return t === !1 ? i.removeAttr(n, r) : (u = i.propFix[r] || r, u in n && (n[u] = !0), n.setAttribute(r, r.toLowerCase())), r
        }
    }, si || (ai = {
        name: !0,
        id: !0,
        coords: !0
    }, o = i.valHooks.button = {
        get: function (n, i) {
            var r;
            return r = n.getAttributeNode(i), r && (ai[i] ? r.value !== "" : r.specified) ? r.value : t
        },
        set: function (n, t, i) {
            var u = n.getAttributeNode(i);
            return u || (u = r.createAttribute(i), n.setAttributeNode(u)), u.value = t + ""
        }
    }, i.each(["width", "height"], function (n, t) {
        i.attrHooks[t] = i.extend(i.attrHooks[t], {
            set: function (n, i) {
                if (i === "") return n.setAttribute(t, "auto"), i
            }
        })
    }), i.attrHooks.contenteditable = {
        get: o.get,
        set: function (n, t, i) {
            t === "" && (t = "false"), o.set(n, t, i)
        }
    }), i.support.hrefNormalized || i.each(["href", "src", "width", "height"], function (n, r) {
        i.attrHooks[r] = i.extend(i.attrHooks[r], {
            get: function (n) {
                var i = n.getAttribute(r, 2);
                return i === null ? t : i
            }
        })
    }), i.support.style || (i.attrHooks.style = {
        get: function (n) {
            return n.style.cssText.toLowerCase() || t
        },
        set: function (n, t) {
            return n.style.cssText = "" + t
        }
    }), i.support.optSelected || (i.propHooks.selected = i.extend(i.propHooks.selected, {
        get: function (n) {
            var t = n.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    })), i.support.enctype || (i.propFix.enctype = "encoding"), i.support.checkOn || i.each(["radio", "checkbox"], function () {
        i.valHooks[this] = {
            get: function (n) {
                return n.getAttribute("value") === null ? "on" : n.value
            }
        }
    }), i.each(["radio", "checkbox"], function () {
        i.valHooks[this] = i.extend(i.valHooks[this], {
            set: function (n, t) {
                if (i.isArray(t)) return n.checked = i.inArray(i(n).val(), t) >= 0
            }
        })
    });
    var wt = /^(?:textarea|input|select)$/i,
        ei = /^([^\.]*|)(?:\.(.+)|)$/,
        ee = /(?:^|\s)hover(\.\S+|)\b/,
        gf = /^key/,
        ne = /^(?:mouse|contextmenu)|click/,
        oi = /^(?:focusinfocus|focusoutblur)$/,
        ui = function (n) {
            return i.event.special.hover ? n : n.replace(ee, "mouseenter$1 mouseleave$1")
        };
    i.event = {
            add: function (n, r, u, f, e) {
                var v, h, a, y, w, o, b, l, p, c, s;
                if (n.nodeType !== 3 && n.nodeType !== 8 && r && u && (v = i._data(n))) {
                    for (u.handler && (p = u, u = p.handler, e = p.selector), u.guid || (u.guid = i.guid++), a = v.events, a || (v.events = a = {}), h = v.handle, h || (v.handle = h = function (n) {
                            return typeof i != "undefined" && (!n || i.event.triggered !== n.type) ? i.event.dispatch.apply(h.elem, arguments) : t
                        }, h.elem = n), r = i.trim(ui(r)).split(" "), y = 0; y < r.length; y++) w = ei.exec(r[y]) || [], o = w[1], b = (w[2] || "").split(".").sort(), s = i.event.special[o] || {}, o = (e ? s.delegateType : s.bindType) || o, s = i.event.special[o] || {}, l = i.extend({
                        type: o,
                        origType: w[1],
                        data: f,
                        handler: u,
                        guid: u.guid,
                        selector: e,
                        namespace: b.join(".")
                    }, p), c = a[o], c || (c = a[o] = [], c.delegateCount = 0, s.setup && s.setup.call(n, f, b, h) !== !1 || (n.addEventListener ? n.addEventListener(o, h, !1) : n.attachEvent && n.attachEvent("on" + o, h))), s.add && (s.add.call(n, l), l.handler.guid || (l.handler.guid = u.guid)), e ? c.splice(c.delegateCount++, 0, l) : c.push(l), i.event.global[o] = !0;
                    n = null
                }
            },
            global: {},
            remove: function (n, t, r, u, f) {
                var v, p, e, w, h, b, a, l, c, o, s, y = i.hasData(n) && i._data(n);
                if (y && (l = y.events)) {
                    for (t = i.trim(ui(t || "")).split(" "), v = 0; v < t.length; v++) {
                        if (p = ei.exec(t[v]) || [], e = w = p[1], h = p[2], !e) {
                            for (e in l) i.event.remove(n, e + t[v], r, u, !0);
                            continue
                        }
                        for (c = i.event.special[e] || {}, e = (u ? c.delegateType : c.bindType) || e, o = l[e] || [], b = o.length, h = h ? new RegExp("(^|\\.)" + h.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null, a = 0; a < o.length; a++) s = o[a], (f || w === s.origType) && (!r || r.guid === s.guid) && (!h || h.test(s.namespace)) && (!u || u === s.selector || u === "**" && s.selector) && (o.splice(a--, 1), s.selector && o.delegateCount--, c.remove && c.remove.call(n, s));
                        o.length === 0 && b !== o.length && ((!c.teardown || c.teardown.call(n, h, y.handle) === !1) && i.removeEvent(n, e, y.handle), delete l[e])
                    }
                    i.isEmptyObject(l) && (delete y.handle, i.removeData(n, "events", !0))
                }
            },
            customEvent: {
                getData: !0,
                setData: !0,
                changeData: !0
            },
            trigger: function (u, f, e, o) {
                if (!e || e.nodeType !== 3 && e.nodeType !== 8) {
                    var w, d, l, h, c, v, a, p, y, k, s = u.type || u,
                        b = [];
                    if (oi.test(s + i.event.triggered)) return;
                    if (s.indexOf("!") >= 0 && (s = s.slice(0, -1), d = !0), s.indexOf(".") >= 0 && (b = s.split("."), s = b.shift(), b.sort()), (!e || i.event.customEvent[s]) && !i.event.global[s]) return;
                    if (u = typeof u == "object" ? u[i.expando] ? u : new i.Event(s, u) : new i.Event(s), u.type = s, u.isTrigger = !0, u.exclusive = d, u.namespace = b.join("."), u.namespace_re = u.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, v = s.indexOf(":") < 0 ? "on" + s : "", !e) {
                        w = i.cache;
                        for (l in w) w[l].events && w[l].events[s] && i.event.trigger(u, f, w[l].handle.elem, !0);
                        return
                    }
                    if (u.result = t, u.target || (u.target = e), f = f != null ? i.makeArray(f) : [], f.unshift(u), a = i.event.special[s] || {}, a.trigger && a.trigger.apply(e, f) === !1) return;
                    if (y = [
                            [e, a.bindType || s]
                        ], !o && !a.noBubble && !i.isWindow(e)) {
                        for (k = a.delegateType || s, h = oi.test(k + s) ? e : e.parentNode, c = e; h; h = h.parentNode) y.push([h, k]), c = h;
                        c === (e.ownerDocument || r) && y.push([c.defaultView || c.parentWindow || n, k])
                    }
                    for (l = 0; l < y.length && !u.isPropagationStopped(); l++) h = y[l][0], u.type = y[l][1], p = (i._data(h, "events") || {})[u.type] && i._data(h, "handle"), p && p.apply(h, f), p = v && h[v], p && i.acceptData(h) && p.apply(h, f) === !1 && u.preventDefault();
                    return u.type = s, !o && !u.isDefaultPrevented() && (!a._default || a._default.apply(e.ownerDocument, f) === !1) && (s !== "click" || !i.nodeName(e, "a")) && i.acceptData(e) && v && e[s] && (s !== "focus" && s !== "blur" || u.target.offsetWidth !== 0) && !i.isWindow(e) && (c = e[v], c && (e[v] = null), i.event.triggered = s, e[s](), i.event.triggered = t, c && (e[v] = c)), u.result
                }
                return
            },
            dispatch: function (r) {
                r = i.event.fix(r || n.event);
                var f, p, e, y, v, b, s, w, u, o, g, a = (i._data(this, "events") || {})[r.type] || [],
                    l = a.delegateCount,
                    k = [].slice.call(arguments),
                    d = !r.exclusive && !r.namespace,
                    h = i.event.special[r.type] || {},
                    c = [];
                if (k[0] = r, r.delegateTarget = this, !h.preDispatch || h.preDispatch.call(this, r) !== !1) {
                    if (l && (!r.button || r.type !== "click"))
                        for (y = i(this), y.context = this, e = r.target; e != this; e = e.parentNode || this)
                            if (e.disabled !== !0 || r.type !== "click") {
                                for (b = {}, w = [], y[0] = e, f = 0; f < l; f++) u = a[f], o = u.selector, b[o] === t && (b[o] = y.is(o)), b[o] && w.push(u);
                                w.length && c.push({
                                    elem: e,
                                    matches: w
                                })
                            } for (a.length > l && c.push({
                            elem: this,
                            matches: a.slice(l)
                        }), f = 0; f < c.length && !r.isPropagationStopped(); f++)
                        for (s = c[f], r.currentTarget = s.elem, p = 0; p < s.matches.length && !r.isImmediatePropagationStopped(); p++) u = s.matches[p], (d || !r.namespace && !u.namespace || r.namespace_re && r.namespace_re.test(u.namespace)) && (r.data = u.data, r.handleObj = u, v = ((i.event.special[u.origType] || {}).handle || u.handler).apply(s.elem, k), v !== t && (r.result = v, v === !1 && (r.preventDefault(), r.stopPropagation())));
                    return h.postDispatch && h.postDispatch.call(this, r), r.result
                }
            },
            props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function (n, t) {
                    return n.which == null && (n.which = t.charCode != null ? t.charCode : t.keyCode), n
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function (n, i) {
                    var s, f, u, e = i.button,
                        o = i.fromElement;
                    return n.pageX == null && i.clientX != null && (s = n.target.ownerDocument || r, f = s.documentElement, u = s.body, n.pageX = i.clientX + (f && f.scrollLeft || u && u.scrollLeft || 0) - (f && f.clientLeft || u && u.clientLeft || 0), n.pageY = i.clientY + (f && f.scrollTop || u && u.scrollTop || 0) - (f && f.clientTop || u && u.clientTop || 0)), !n.relatedTarget && o && (n.relatedTarget = o === n.target ? i.toElement : o), !n.which && e !== t && (n.which = e & 1 ? 1 : e & 2 ? 3 : e & 4 ? 2 : 0), n
                }
            },
            fix: function (n) {
                if (n[i.expando]) return n;
                var f, e, t = n,
                    u = i.event.fixHooks[n.type] || {},
                    o = u.props ? this.props.concat(u.props) : this.props;
                for (n = i.Event(t), f = o.length; f;) e = o[--f], n[e] = t[e];
                return n.target || (n.target = t.srcElement || r), n.target.nodeType === 3 && (n.target = n.target.parentNode), n.metaKey = !!n.metaKey, u.filter ? u.filter(n, t) : n
            },
            special: {
                ready: {
                    setup: i.bindReady
                },
                load: {
                    noBubble: !0
                },
                focus: {
                    delegateType: "focusin"
                },
                blur: {
                    delegateType: "focusout"
                },
                beforeunload: {
                    setup: function (n, t, r) {
                        i.isWindow(this) && (this.onbeforeunload = r)
                    },
                    teardown: function (n, t) {
                        this.onbeforeunload === t && (this.onbeforeunload = null)
                    }
                }
            },
            simulate: function (n, t, r, u) {
                var f = i.extend(new i.Event, r, {
                    type: n,
                    isSimulated: !0,
                    originalEvent: {}
                });
                u ? i.event.trigger(f, null, t) : i.event.dispatch.call(t, f), f.isDefaultPrevented() && r.preventDefault()
            }
        }, i.event.handle = i.event.dispatch, i.removeEvent = r.removeEventListener ? function (n, t, i) {
            n.removeEventListener && n.removeEventListener(t, i, !1)
        } : function (n, t, i) {
            var r = "on" + t;
            n.detachEvent && (typeof n[r] == "undefined" && (n[r] = null), n.detachEvent(r, i))
        }, i.Event = function (n, t) {
            if (this instanceof i.Event) n && n.type ? (this.originalEvent = n, this.type = n.type, this.isDefaultPrevented = n.defaultPrevented || n.returnValue === !1 || n.getPreventDefault && n.getPreventDefault() ? ft : p) : this.type = n, t && i.extend(this, t), this.timeStamp = n && n.timeStamp || i.now(), this[i.expando] = !0;
            else return new i.Event(n, t)
        }, i.Event.prototype = {
            preventDefault: function () {
                this.isDefaultPrevented = ft;
                var n = this.originalEvent;
                n && (n.preventDefault ? n.preventDefault() : n.returnValue = !1)
            },
            stopPropagation: function () {
                this.isPropagationStopped = ft;
                var n = this.originalEvent;
                n && (n.stopPropagation && n.stopPropagation(), n.cancelBubble = !0)
            },
            stopImmediatePropagation: function () {
                this.isImmediatePropagationStopped = ft, this.stopPropagation()
            },
            isDefaultPrevented: p,
            isPropagationStopped: p,
            isImmediatePropagationStopped: p
        }, i.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }, function (n, t) {
            i.event.special[n] = {
                delegateType: t,
                bindType: t,
                handle: function (n) {
                    var f, e = this,
                        r = n.relatedTarget,
                        u = n.handleObj,
                        o = u.selector;
                    return r && (r === e || i.contains(e, r)) || (n.type = u.origType, f = u.handler.apply(this, arguments), n.type = t), f
                }
            }
        }), i.support.submitBubbles || (i.event.special.submit = {
            setup: function () {
                if (i.nodeName(this, "form")) return !1;
                i.event.add(this, "click._submit keypress._submit", function (n) {
                    var u = n.target,
                        r = i.nodeName(u, "input") || i.nodeName(u, "button") ? u.form : t;
                    r && !i._data(r, "_submit_attached") && (i.event.add(r, "submit._submit", function (n) {
                        n._submit_bubble = !0
                    }), i._data(r, "_submit_attached", !0))
                })
            },
            postDispatch: function (n) {
                n._submit_bubble && (delete n._submit_bubble, this.parentNode && !n.isTrigger && i.event.simulate("submit", this.parentNode, n, !0))
            },
            teardown: function () {
                if (i.nodeName(this, "form")) return !1;
                i.event.remove(this, "._submit")
            }
        }), i.support.changeBubbles || (i.event.special.change = {
            setup: function () {
                if (wt.test(this.nodeName)) return (this.type === "checkbox" || this.type === "radio") && (i.event.add(this, "propertychange._change", function (n) {
                    n.originalEvent.propertyName === "checked" && (this._just_changed = !0)
                }), i.event.add(this, "click._change", function (n) {
                    this._just_changed && !n.isTrigger && (this._just_changed = !1), i.event.simulate("change", this, n, !0)
                })), !1;
                i.event.add(this, "beforeactivate._change", function (n) {
                    var t = n.target;
                    wt.test(t.nodeName) && !i._data(t, "_change_attached") && (i.event.add(t, "change._change", function (n) {
                        this.parentNode && !n.isSimulated && !n.isTrigger && i.event.simulate("change", this.parentNode, n, !0)
                    }), i._data(t, "_change_attached", !0))
                })
            },
            handle: function (n) {
                var t = n.target;
                if (this !== t || n.isSimulated || n.isTrigger || t.type !== "radio" && t.type !== "checkbox") return n.handleObj.handler.apply(this, arguments)
            },
            teardown: function () {
                return i.event.remove(this, "._change"), wt.test(this.nodeName)
            }
        }), i.support.focusinBubbles || i.each({
            focus: "focusin",
            blur: "focusout"
        }, function (n, t) {
            var f = 0,
                u = function (n) {
                    i.event.simulate(t, n.target, i.event.fix(n), !0)
                };
            i.event.special[t] = {
                setup: function () {
                    f++ == 0 && r.addEventListener(n, u, !0)
                },
                teardown: function () {
                    --f == 0 && r.removeEventListener(n, u, !0)
                }
            }
        }), i.fn.extend({
            on: function (n, r, u, f, e) {
                var o, s;
                if (typeof n == "object") {
                    typeof r != "string" && (u = u || r, r = t);
                    for (s in n) this.on(s, r, u, n[s], e);
                    return this
                }
                if (u == null && f == null ? (f = r, u = r = t) : f == null && (typeof r == "string" ? (f = u, u = t) : (f = u, u = r, r = t)), f === !1) f = p;
                else if (!f) return this;
                return e === 1 && (o = f, f = function (n) {
                    return i().off(n), o.apply(this, arguments)
                }, f.guid = o.guid || (o.guid = i.guid++)), this.each(function () {
                    i.event.add(this, n, f, u, r)
                })
            },
            one: function (n, t, i, r) {
                return this.on(n, t, i, r, 1)
            },
            off: function (n, r, u) {
                var f, e;
                if (n && n.preventDefault && n.handleObj) return f = n.handleObj, i(n.delegateTarget).off(f.namespace ? f.origType + "." + f.namespace : f.origType, f.selector, f.handler), this;
                if (typeof n == "object") {
                    for (e in n) this.off(e, r, n[e]);
                    return this
                }
                return (r === !1 || typeof r == "function") && (u = r, r = t), u === !1 && (u = p), this.each(function () {
                    i.event.remove(this, n, u, r)
                })
            },
            bind: function (n, t, i) {
                return this.on(n, null, t, i)
            },
            unbind: function (n, t) {
                return this.off(n, null, t)
            },
            live: function (n, t, r) {
                return i(this.context).on(n, this.selector, t, r), this
            },
            die: function (n, t) {
                return i(this.context).off(n, this.selector || "**", t), this
            },
            delegate: function (n, t, i, r) {
                return this.on(t, n, i, r)
            },
            undelegate: function (n, t, i) {
                return arguments.length == 1 ? this.off(n, "**") : this.off(t, n || "**", i)
            },
            trigger: function (n, t) {
                return this.each(function () {
                    i.event.trigger(n, t, this)
                })
            },
            triggerHandler: function (n, t) {
                if (this[0]) return i.event.trigger(n, t, this[0], !0)
            },
            toggle: function (n) {
                var r = arguments,
                    f = n.guid || i.guid++,
                    t = 0,
                    u = function (u) {
                        var f = (i._data(this, "lastToggle" + n.guid) || 0) % t;
                        return i._data(this, "lastToggle" + n.guid, f + 1), u.preventDefault(), r[f].apply(this, arguments) || !1
                    };
                for (u.guid = f; t < r.length;) r[t++].guid = f;
                return this.click(u)
            },
            hover: function (n, t) {
                return this.mouseenter(n).mouseleave(t || n)
            }
        }), i.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (n, t) {
            i.fn[t] = function (n, i) {
                return i == null && (i = n, n = null), arguments.length > 0 ? this.on(t, null, n, i) : this.trigger(t)
            }, gf.test(t) && (i.event.fixHooks[t] = i.event.keyHooks), ne.test(t) && (i.event.fixHooks[t] = i.event.mouseHooks)
        }),
        function (n, t) {
            function kt(n, t, i, u) {
                for (var f = 0, e = t.length; f < e; f++) r(n, t[f], i, u)
            }

            function hi(n, t, i, f, e, o) {
                var s, h = u.setFilters[t.toLowerCase()];
                return h || r.error(t), (n || !(s = e)) && kt(n || "*", f, s = [], e), s.length > 0 ? h(s, i, o) : []
            }

            function si(n, i, u, e, o) {
                for (var c, d, v, a, h, k, s, b, w = 0, g = o.length, y = l.POS, it = new RegExp("^" + y.source + "(?!" + f + ")", "i"), tt = function () {
                        for (var n = 1, i = arguments.length - 2; n < i; n++) arguments[n] === t && (c[n] = t)
                    }; w < g; w++) {
                    for (y.exec(""), n = o[w], a = [], v = 0, h = e; c = y.exec(n);) b = y.lastIndex = c.index + c[0].length, b > v && (s = n.slice(v, c.index), v = b, k = [i], nt.test(s) && (h && (k = h), h = e), (d = pi.test(s)) && (s = s.slice(0, -5).replace(nt, "$&*")), c.length > 1 && c[0].replace(it, tt), h = hi(s, c[1], c[2], k, h, d));
                    h ? (a = a.concat(h), (s = n.slice(v)) && s !== ")" ? nt.test(s) ? kt(s, a, u, e) : r(s, i, u, e ? e.concat(h) : h) : p.apply(u, a)) : r(n, i, u, e)
                }
                return g === 1 ? u : r.uniqueSort(u)
            }

            function ai(n, t, i) {
                for (var c, e, h, v = [], y = 0, f = ii.exec(n), o = !f.pop() && !f.pop(), b = o && n.match(rt) || [""], a = u.preFilter, w = u.filter, p = !i && t !== s;
                    (e = b[y]) != null && o; y++)
                    for (v.push(c = []), p && (e = " " + e); e;) {
                        o = !1, (f = nt.exec(e)) && (e = e.slice(f[0].length), o = c.push({
                            part: f.pop().replace(ut, " "),
                            captures: f
                        }));
                        for (h in w)(f = l[h].exec(e)) && (!a[h] || (f = a[h](f, t, i))) && (e = e.slice(f.shift().length), o = c.push({
                            part: h,
                            captures: f
                        }));
                        if (!o) break
                    }
                return o || r.error(n), v
            }

            function li(n, t, i) {
                var r = t.dir,
                    u = pt++;
                return n || (n = function (n) {
                    return n === i
                }), t.first ? function (t, i) {
                    while (t = t[r])
                        if (t.nodeType === 1) return n(t, i) && t
                } : function (t, i) {
                    for (var f, s = u + "." + yt, e = s + "." + dt; t = t[r];)
                        if (t.nodeType === 1) {
                            if ((f = t[o]) === e) return t.sizset;
                            if (typeof f == "string" && f.indexOf(s) === 0) {
                                if (t.sizset) return t
                            } else {
                                if (t[o] = e, n(t, i)) return t.sizset = !0, t;
                                t.sizset = !1
                            }
                        }
                }
            }

            function oi(n, t) {
                return n ? function (i, r) {
                    var u = t(i, r);
                    return u && n(u === !0 ? i : u, r)
                } : t
            }

            function di(n, t, i) {
                for (var r, f, e = 0; r = n[e]; e++) u.relative[r.part] ? f = li(f, u.relative[r.part], t) : (r.captures.push(t, i), f = oi(f, u.filter[r.part].apply(null, r.captures)));
                return f
            }

            function nr(n) {
                return function (t, i) {
                    for (var u, r = 0; u = n[r]; r++)
                        if (u(t, i)) return !0;
                    return !1
                }
            }
            var dt, yt, d, b, vt, s = n.document,
                e = s.documentElement,
                h = "undefined",
                k = !1,
                wt = !0,
                pt = 0,
                c = [].slice,
                p = [].push,
                o = ("sizcache" + Math.random()).replace(".", ""),
                f = "[\\x20\\t\\r\\n\\f]",
                v = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",
                yi = v.replace("w", "w#"),
                wi = "([*^$|!~]?=)",
                ti = "\\[" + f + "*(" + v + ")" + f + "*(?:" + wi + f + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + yi + ")|)|)" + f + "*\\]",
                ri = ":(" + v + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|((?:[^,]|\\\\,|(?:,(?=[^\\[]*\\]))|(?:,(?=[^\\(]*\\))))*))\\)|)",
                ni = ":(nth|eq|gt|lt|first|last|even|odd)(?:\\((\\d*)\\)|)(?=[^-]|$)",
                ui = f + "*([\\x20\\t\\r\\n\\f>+~])" + f + "*",
                at = "(?=[^\\x20\\t\\r\\n\\f])(?:\\\\.|" + ti + "|" + ri.replace(2, 7) + "|[^\\\\(),])+",
                ut = new RegExp("^" + f + "+|((?:^|[^\\\\])(?:\\\\.)*)" + f + "+$", "g"),
                nt = new RegExp("^" + ui),
                rt = new RegExp(at + "?(?=" + f + "*,|$)", "g"),
                ii = new RegExp("^(?:(?!,)(?:(?:^|,)" + f + "*" + at + ")*?|" + f + "*(.*?))(\\)|$)"),
                ir = new RegExp(at.slice(19, -6) + "\\x20\\t\\r\\n\\f>+~])+|" + ui, "g"),
                tr = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,
                it = /[\x20\t\r\n\f]*[+~]/,
                pi = /:not\($/,
                bi = /h\d/i,
                ki = /input|select|textarea|button/i,
                y = /\\(?!\\)/g,
                l = {
                    ID: new RegExp("^#(" + v + ")"),
                    CLASS: new RegExp("^\\.(" + v + ")"),
                    NAME: new RegExp("^\\[name=['\"]?(" + v + ")['\"]?\\]"),
                    TAG: new RegExp("^(" + v.replace("[-", "[-\\*") + ")"),
                    ATTR: new RegExp("^" + ti),
                    PSEUDO: new RegExp("^" + ri),
                    CHILD: new RegExp("^:(only|nth|last|first)-child(?:\\(" + f + "*(even|odd|(([+-]|)(\\d*)n|)" + f + "*(?:([+-]|)" + f + "*(\\d+)|))" + f + "*\\)|)", "i"),
                    POS: new RegExp(ni, "ig"),
                    needsContext: new RegExp("^" + f + "*[>+~]|" + ni, "i")
                },
                ct = {},
                lt = [],
                et = {},
                ot = [],
                g = function (n) {
                    return n.sizzleFilter = !0, n
                },
                w = function (n) {
                    return function (t) {
                        return t.nodeName.toLowerCase() === "input" && t.type === n
                    }
                },
                gt = function (n) {
                    return function (t) {
                        var i = t.nodeName.toLowerCase();
                        return (i === "input" || i === "button") && t.type === n
                    }
                },
                a = function (n) {
                    var i = !1,
                        t = s.createElement("div");
                    try {
                        i = n(t)
                    } catch (r) {}
                    return t = null, i
                },
                gi = a(function (n) {
                    n.innerHTML = "<select></select>";
                    var t = typeof n.lastChild.getAttribute("multiple");
                    return t !== "boolean" && t !== "string"
                }),
                vi = a(function (n) {
                    n.id = o + 0, n.innerHTML = "<a name='" + o + "'></a><div name='" + o + "'></div>", e.insertBefore(n, e.firstChild);
                    var t = s.getElementsByName && s.getElementsByName(o).length === 2 + s.getElementsByName(o + 0).length;
                    return vt = !s.getElementById(o), e.removeChild(n), t
                }),
                ei = a(function (n) {
                    return n.appendChild(s.createComment("")), n.getElementsByTagName("*").length === 0
                }),
                fi = a(function (n) {
                    return n.innerHTML = "<a href='#'></a>", n.firstChild && typeof n.firstChild.getAttribute !== h && n.firstChild.getAttribute("href") === "#"
                }),
                bt = a(function (n) {
                    return n.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", !n.getElementsByClassName || n.getElementsByClassName("e").length === 0 ? !1 : (n.lastChild.className = "e", n.getElementsByClassName("e").length !== 1)
                }),
                r = function (n, t, i, r) {
                    i = i || [], t = t || s;
                    var e, u, h, f, o = t.nodeType;
                    if (o !== 1 && o !== 9) return [];
                    if (!n || typeof n != "string") return i;
                    if (h = ft(t), !h && !r && (e = tr.exec(n)))
                        if (f = e[1]) {
                            if (o === 9) {
                                if (u = t.getElementById(f), !u || !u.parentNode) return i;
                                if (u.id === f) return i.push(u), i
                            } else if (t.ownerDocument && (u = t.ownerDocument.getElementById(f)) && ci(t, u) && u.id === f) return i.push(u), i
                        } else {
                            if (e[2]) return p.apply(i, c.call(t.getElementsByTagName(n), 0)), i;
                            if ((f = e[3]) && bt && t.getElementsByClassName) return p.apply(i, c.call(t.getElementsByClassName(f), 0)), i
                        } return tt(n, t, i, r, h)
                },
                u = r.selectors = {
                    cacheLength: 50,
                    match: l,
                    order: ["ID", "TAG"],
                    attrHandle: {},
                    createPseudo: g,
                    find: {
                        ID: vt ? function (n, t, i) {
                            if (typeof t.getElementById !== h && !i) {
                                var r = t.getElementById(n);
                                return r && r.parentNode ? [r] : []
                            }
                        } : function (n, i, r) {
                            if (typeof i.getElementById !== h && !r) {
                                var u = i.getElementById(n);
                                return u ? u.id === n || typeof u.getAttributeNode !== h && u.getAttributeNode("id").value === n ? [u] : t : []
                            }
                        },
                        TAG: ei ? function (n, t) {
                            if (typeof t.getElementsByTagName !== h) return t.getElementsByTagName(n)
                        } : function (n, t) {
                            var f = t.getElementsByTagName(n),
                                r, i, u;
                            if (n === "*") {
                                for (i = [], u = 0; r = f[u]; u++) r.nodeType === 1 && i.push(r);
                                return i
                            }
                            return f
                        }
                    },
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function (n) {
                            return n[1] = n[1].replace(y, ""), n[3] = (n[4] || n[5] || "").replace(y, ""), n[2] === "~=" && (n[3] = " " + n[3] + " "), n.slice(0, 4)
                        },
                        CHILD: function (n) {
                            return n[1] = n[1].toLowerCase(), n[1] === "nth" ? (n[2] || r.error(n[0]), n[3] = +(n[3] ? n[4] + (n[5] || 1) : 2 * (n[2] === "even" || n[2] === "odd")), n[4] = +(n[6] + n[7] || n[2] === "odd")) : n[2] && r.error(n[0]), n
                        },
                        PSEUDO: function (n) {
                            var i, t = n[4];
                            return l.CHILD.test(n[0]) ? null : (t && (i = ii.exec(t)) && i.pop() && (n[0] = n[0].slice(0, i[0].length - t.length - 1), t = i[0].slice(0, -1)), n.splice(2, 3, t || n[3]), n)
                        }
                    },
                    filter: {
                        ID: vt ? function (n) {
                            return n = n.replace(y, ""),
                                function (t) {
                                    return t.getAttribute("id") === n
                                }
                        } : function (n) {
                            return n = n.replace(y, ""),
                                function (t) {
                                    var i = typeof t.getAttributeNode !== h && t.getAttributeNode("id");
                                    return i && i.value === n
                                }
                        },
                        TAG: function (n) {
                            return n === "*" ? function () {
                                return !0
                            } : (n = n.replace(y, "").toLowerCase(), function (t) {
                                return t.nodeName && t.nodeName.toLowerCase() === n
                            })
                        },
                        CLASS: function (n) {
                            var t = ct[n];
                            return t || (t = ct[n] = new RegExp("(^|" + f + ")" + n + "(" + f + "|$)"), lt.push(n), lt.length > u.cacheLength && delete ct[lt.shift()]),
                                function (n) {
                                    return t.test(n.className || typeof n.getAttribute !== h && n.getAttribute("class") || "")
                                }
                        },
                        ATTR: function (n, t, i) {
                            return t ? function (u) {
                                var e = r.attr(u, n),
                                    f = e + "";
                                if (e == null) return t === "!=";
                                switch (t) {
                                    case "=":
                                        return f === i;
                                    case "!=":
                                        return f !== i;
                                    case "^=":
                                        return i && f.indexOf(i) === 0;
                                    case "*=":
                                        return i && f.indexOf(i) > -1;
                                    case "$=":
                                        return i && f.substr(f.length - i.length) === i;
                                    case "~=":
                                        return (" " + f + " ").indexOf(i) > -1;
                                    case "|=":
                                        return f === i || f.substr(0, i.length + 1) === i + "-"
                                }
                            } : function (t) {
                                return r.attr(t, n) != null
                            }
                        },
                        CHILD: function (n, t, i, r) {
                            if (n === "nth") {
                                var u = pt++;
                                return function (n) {
                                    var f, e, s = 0,
                                        t = n;
                                    if (i === 1 && r === 0) return !0;
                                    if (f = n.parentNode, f && (f[o] !== u || !n.sizset)) {
                                        for (t = f.firstChild; t; t = t.nextSibling)
                                            if (t.nodeType === 1 && (t.sizset = ++s, t === n)) break;
                                        f[o] = u
                                    }
                                    return e = n.sizset - r, i === 0 ? e === 0 : e % i == 0 && e / i >= 0
                                }
                            }
                            return function (t) {
                                var i = t;
                                switch (n) {
                                    case "only":
                                    case "first":
                                        while (i = i.previousSibling)
                                            if (i.nodeType === 1) return !1;
                                        if (n === "first") return !0;
                                        i = t;
                                    case "last":
                                        while (i = i.nextSibling)
                                            if (i.nodeType === 1) return !1;
                                        return !0
                                }
                            }
                        },
                        PSEUDO: function (n, t, i, f) {
                            var e = u.pseudos[n] || u.pseudos[n.toLowerCase()];
                            return e || r.error("unsupported pseudo: " + n), e.sizzleFilter ? e(t, i, f) : e
                        }
                    },
                    pseudos: {
                        not: g(function (n, t, i) {
                            var r = ht(n.replace(ut, "$1"), t, i);
                            return function (n) {
                                return !r(n)
                            }
                        }),
                        enabled: function (n) {
                            return n.disabled === !1
                        },
                        disabled: function (n) {
                            return n.disabled === !0
                        },
                        checked: function (n) {
                            var t = n.nodeName.toLowerCase();
                            return t === "input" && !!n.checked || t === "option" && !!n.selected
                        },
                        selected: function (n) {
                            return n.parentNode && n.parentNode.selectedIndex, n.selected === !0
                        },
                        parent: function (n) {
                            return !u.pseudos.empty(n)
                        },
                        empty: function (n) {
                            var t;
                            for (n = n.firstChild; n;) {
                                if (n.nodeName > "@" || (t = n.nodeType) === 3 || t === 4) return !1;
                                n = n.nextSibling
                            }
                            return !0
                        },
                        contains: g(function (n) {
                            return function (t) {
                                return (t.textContent || t.innerText || st(t)).indexOf(n) > -1
                            }
                        }),
                        has: g(function (n) {
                            return function (t) {
                                return r(n, t).length > 0
                            }
                        }),
                        header: function (n) {
                            return bi.test(n.nodeName)
                        },
                        text: function (n) {
                            var i, t;
                            return n.nodeName.toLowerCase() === "input" && (i = n.type) === "text" && ((t = n.getAttribute("type")) == null || t.toLowerCase() === i)
                        },
                        radio: w("radio"),
                        checkbox: w("checkbox"),
                        file: w("file"),
                        password: w("password"),
                        image: w("image"),
                        submit: gt("submit"),
                        reset: gt("reset"),
                        button: function (n) {
                            var t = n.nodeName.toLowerCase();
                            return t === "input" && n.type === "button" || t === "button"
                        },
                        input: function (n) {
                            return ki.test(n.nodeName)
                        },
                        focus: function (n) {
                            var t = n.ownerDocument;
                            return n === t.activeElement && (!t.hasFocus || t.hasFocus()) && (!!n.type || !!n.href)
                        },
                        active: function (n) {
                            return n === n.ownerDocument.activeElement
                        }
                    },
                    setFilters: {
                        first: function (n, t, i) {
                            return i ? n.slice(1) : [n[0]]
                        },
                        last: function (n, t, i) {
                            var r = n.pop();
                            return i ? n : [r]
                        },
                        even: function (n, t, i) {
                            for (var u = [], r = i ? 1 : 0, f = n.length; r < f; r = r + 2) u.push(n[r]);
                            return u
                        },
                        odd: function (n, t, i) {
                            for (var u = [], r = i ? 0 : 1, f = n.length; r < f; r = r + 2) u.push(n[r]);
                            return u
                        },
                        lt: function (n, t, i) {
                            return i ? n.slice(+t) : n.slice(0, +t)
                        },
                        gt: function (n, t, i) {
                            return i ? n.slice(0, +t + 1) : n.slice(+t + 1)
                        },
                        eq: function (n, t, i) {
                            var r = n.splice(+t, 1);
                            return i ? n : r
                        }
                    }
                },
                ht, tt;
            u.setFilters.nth = u.setFilters.eq, u.filters = u.pseudos, fi || (u.attrHandle = {
                href: function (n) {
                    return n.getAttribute("href", 2)
                },
                type: function (n) {
                    return n.getAttribute("type")
                }
            }), vi && (u.order.push("NAME"), u.find.NAME = function (n, t) {
                if (typeof t.getElementsByName !== h) return t.getElementsByName(n)
            }), bt && (u.order.splice(1, 0, "CLASS"), u.find.CLASS = function (n, t, i) {
                if (typeof t.getElementsByClassName !== h && !i) return t.getElementsByClassName(n)
            });
            try {
                c.call(e.childNodes, 0)[0].nodeType
            } catch (rr) {
                c = function (n) {
                    for (var i, t = []; i = this[n]; n++) t.push(i);
                    return t
                }
            }
            var ft = r.isXML = function (n) {
                    var t = n && (n.ownerDocument || n).documentElement;
                    return t ? t.nodeName !== "HTML" : !1
                },
                ci = r.contains = e.compareDocumentPosition ? function (n, t) {
                    return !!(n.compareDocumentPosition(t) & 16)
                } : e.contains ? function (n, t) {
                    var r = n.nodeType === 9 ? n.documentElement : n,
                        i = t.parentNode;
                    return n === i || !!(i && i.nodeType === 1 && r.contains && r.contains(i))
                } : function (n, t) {
                    while (t = t.parentNode)
                        if (t === n) return !0;
                    return !1
                },
                st = r.getText = function (n) {
                    var r, i = "",
                        u = 0,
                        t = n.nodeType;
                    if (t) {
                        if (t === 1 || t === 9 || t === 11) {
                            if (typeof n.textContent == "string") return n.textContent;
                            for (n = n.firstChild; n; n = n.nextSibling) i += st(n)
                        } else if (t === 3 || t === 4) return n.nodeValue
                    } else
                        for (; r = n[u]; u++) i += st(r);
                    return i
                };
            r.attr = function (n, t) {
                var i, r = ft(n);
                return r || (t = t.toLowerCase()), u.attrHandle[t] ? u.attrHandle[t](n) : gi || r ? n.getAttribute(t) : (i = n.getAttributeNode(t), i ? typeof n[t] == "boolean" ? n[t] ? t : null : i.specified ? i.value : null : null)
            }, r.error = function (n) {
                throw new Error("Syntax error, unrecognized expression: " + n);
            }, [0, 0].sort(function () {
                return wt = 0
            }), e.compareDocumentPosition ? d = function (n, t) {
                return n === t ? (k = !0, 0) : (!n.compareDocumentPosition || !t.compareDocumentPosition ? n.compareDocumentPosition : n.compareDocumentPosition(t) & 4) ? -1 : 1
            } : (d = function (n, t) {
                var i;
                if (n === t) return k = !0, 0;
                if (n.sourceIndex && t.sourceIndex) return n.sourceIndex - t.sourceIndex;
                var o, h, f = [],
                    u = [],
                    s = n.parentNode,
                    e = t.parentNode,
                    r = s;
                if (s === e) return b(n, t);
                if (!s) return -1;
                if (!e) return 1;
                while (r) f.unshift(r), r = r.parentNode;
                for (r = e; r;) u.unshift(r), r = r.parentNode;
                for (o = f.length, h = u.length, i = 0; i < o && i < h; i++)
                    if (f[i] !== u[i]) return b(f[i], u[i]);
                return i === o ? b(n, u[i], -1) : b(f[i], t, 1)
            }, b = function (n, t, i) {
                if (n === t) return i;
                for (var r = n.nextSibling; r;) {
                    if (r === t) return -1;
                    r = r.nextSibling
                }
                return 1
            }), r.uniqueSort = function (n) {
                var i, t = 1;
                if (d && (k = wt, n.sort(d), k))
                    for (; i = n[t]; t++) i === n[t - 1] && n.splice(t--, 1);
                return n
            }, ht = r.compile = function (n, t, i) {
                var o, e, f, r = et[n];
                if (r && r.context === t) return r;
                for (e = ai(n, t, i), f = 0; o = e[f]; f++) e[f] = di(o, t, i);
                return r = et[n] = nr(e), r.context = t, r.runs = r.dirruns = 0, ot.push(n), ot.length > u.cacheLength && delete et[ot.shift()], r
            }, r.matches = function (n, t) {
                return r(n, null, null, t)
            }, r.matchesSelector = function (n, t) {
                return r(t, null, null, [n]).length > 0
            }, tt = function (n, t, i, r, f) {
                n = n.replace(ut, "$1");
                var s, w, o, d, k, b, a, g, v, e = n.match(rt),
                    h = n.match(ir),
                    nt = t.nodeType;
                if (l.POS.test(n)) return si(n, t, i, r, e);
                if (r) s = c.call(r, 0);
                else if (e && e.length === 1) {
                    if (h.length > 1 && nt === 9 && !f && (e = l.ID.exec(h[0]))) {
                        if (t = u.find.ID(e[1], t, f)[0], !t) return i;
                        n = n.slice(h.shift().length)
                    }
                    for (g = (e = it.exec(h[0])) && !e.index && t.parentNode || t, v = h.pop(), b = v.split(":not")[0], o = 0, d = u.order.length; o < d; o++)
                        if (a = u.order[o], e = l[a].exec(b)) {
                            if (s = u.find[a]((e[1] || "").replace(y, ""), g, f), s == null) continue;
                            b === v && (n = n.slice(0, n.length - v.length) + b.replace(l[a], ""), n || p.apply(i, c.call(s, 0)));
                            break
                        }
                }
                if (n)
                    for (w = ht(n, t, f), yt = w.dirruns++, s == null && (s = u.find.TAG("*", it.test(n) && t.parentNode || t)), o = 0; k = s[o]; o++) dt = w.runs++, w(k, t) && i.push(k);
                return i
            }, s.querySelectorAll && function () {
                var s, l = tt,
                    v = /'|\\/g,
                    h = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
                    n = [],
                    i = [":active"],
                    t = e.matchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.oMatchesSelector || e.msMatchesSelector;
                a(function (t) {
                    t.innerHTML = "<select><option selected></option></select>", t.querySelectorAll("[selected]").length || n.push("\\[" + f + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), t.querySelectorAll(":checked").length || n.push(":checked")
                }), a(function (t) {
                    t.innerHTML = "<p test=''></p>", t.querySelectorAll("[test^='']").length && n.push("[*^$]=" + f + "*(?:\"\"|'')"), t.innerHTML = "<input type='hidden'>", t.querySelectorAll(":enabled").length || n.push(":enabled", ":disabled")
                }), n = n.length && new RegExp(n.join("|")), tt = function (t, i, r, u, f) {
                    if (!u && !f && (!n || !n.test(t)))
                        if (i.nodeType === 9) try {
                            return p.apply(r, c.call(i.querySelectorAll(t), 0)), r
                        } catch (a) {} else if (i.nodeType === 1 && i.nodeName.toLowerCase() !== "object") {
                            var s = i.getAttribute("id"),
                                e = s || o,
                                h = it.test(t) && i.parentNode || i;
                            s ? e = e.replace(v, "\\$&") : i.setAttribute("id", e);
                            try {
                                return p.apply(r, c.call(h.querySelectorAll(t.replace(rt, "[id='" + e + "'] $&")), 0)), r
                            } catch (a) {} finally {
                                s || i.removeAttribute("id")
                            }
                        } return l(t, i, r, u, f)
                }, t && (a(function (n) {
                    s = t.call(n, "div");
                    try {
                        t.call(n, "[test!='']:sizzle"), i.push(u.match.PSEUDO)
                    } catch (r) {}
                }), i = new RegExp(i.join("|")), r.matchesSelector = function (u, f) {
                    if (f = f.replace(h, "='$1']"), !ft(u) && !i.test(f) && (!n || !n.test(f))) try {
                        var e = t.call(u, f);
                        if (e || s || u.document && u.document.nodeType !== 11) return e
                    } catch (o) {}
                    return r(f, null, null, [u]).length > 0
                })
            }(), r.attr = i.attr, i.find = r, i.expr = r.selectors, i.expr[":"] = i.expr.pseudos, i.unique = r.uniqueSort, i.text = r.getText, i.isXMLDoc = r.isXML, i.contains = r.contains
        }(n);
    var te = /Until$/,
        ue = /^(?:parents|prev(?:Until|All))/,
        fe = /^.[^:#\[\.,]*$/,
        fi = i.expr.match.needsContext,
        ie = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    i.fn.extend({
        find: function (n) {
            var t, e, o, u, f, r, s = this;
            if (typeof n != "string") return i(n).filter(function () {
                for (t = 0, e = s.length; t < e; t++)
                    if (i.contains(s[t], this)) return !0
            });
            for (r = this.pushStack("", "find", n), t = 0, e = this.length; t < e; t++)
                if (o = r.length, i.find(n, this[t], r), t > 0)
                    for (u = o; u < r.length; u++)
                        for (f = 0; f < o; f++)
                            if (r[f] === r[u]) {
                                r.splice(u--, 1);
                                break
                            } return r
        },
        has: function (n) {
            var t, r = i(n, this),
                u = r.length;
            return this.filter(function () {
                for (t = 0; t < u; t++)
                    if (i.contains(this, r[t])) return !0
            })
        },
        not: function (n) {
            return this.pushStack(eu(this, n, !1), "not", n)
        },
        filter: function (n) {
            return this.pushStack(eu(this, n, !0), "filter", n)
        },
        is: function (n) {
            return !!n && (typeof n == "string" ? fi.test(n) ? i(n, this.context).index(this[0]) >= 0 : i.filter(n, this).length > 0 : this.filter(n).length > 0)
        },
        closest: function (n, t) {
            for (var r, f = 0, o = this.length, u = [], e = fi.test(n) || typeof n != "string" ? i(n, t || this.context) : 0; f < o; f++)
                for (r = this[f]; r && r.ownerDocument && r !== t && r.nodeType !== 11;) {
                    if (e ? e.index(r) > -1 : i.find.matchesSelector(r, n)) {
                        u.push(r);
                        break
                    }
                    r = r.parentNode
                }
            return u = u.length > 1 ? i.unique(u) : u, this.pushStack(u, "closest", n)
        },
        index: function (n) {
            return n ? typeof n == "string" ? i.inArray(this[0], i(n)) : i.inArray(n.jquery ? n[0] : n, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
        },
        add: function (n, t) {
            var u = typeof n == "string" ? i(n, t) : i.makeArray(n && n.nodeType ? [n] : n),
                r = i.merge(this.get(), u);
            return this.pushStack(b(u[0]) || b(r[0]) ? r : i.unique(r))
        },
        addBack: function (n) {
            return this.add(n == null ? this.prevObject : this.prevObject.filter(n))
        }
    }), i.fn.andSelf = i.fn.addBack, i.each({
        parent: function (n) {
            var t = n.parentNode;
            return t && t.nodeType !== 11 ? t : null
        },
        parents: function (n) {
            return i.dir(n, "parentNode")
        },
        parentsUntil: function (n, t, r) {
            return i.dir(n, "parentNode", r)
        },
        next: function (n) {
            return vu(n, "nextSibling")
        },
        prev: function (n) {
            return vu(n, "previousSibling")
        },
        nextAll: function (n) {
            return i.dir(n, "nextSibling")
        },
        prevAll: function (n) {
            return i.dir(n, "previousSibling")
        },
        nextUntil: function (n, t, r) {
            return i.dir(n, "nextSibling", r)
        },
        prevUntil: function (n, t, r) {
            return i.dir(n, "previousSibling", r)
        },
        siblings: function (n) {
            return i.sibling((n.parentNode || {}).firstChild, n)
        },
        children: function (n) {
            return i.sibling(n.firstChild)
        },
        contents: function (n) {
            return i.nodeName(n, "iframe") ? n.contentDocument || n.contentWindow.document : i.merge([], n.childNodes)
        }
    }, function (n, t) {
        i.fn[n] = function (r, u) {
            var f = i.map(this, t, r);
            return te.test(n) || (u = r), u && typeof u == "string" && (f = i.filter(u, f)), f = this.length > 1 && !ie[n] ? i.unique(f) : f, this.length > 1 && ue.test(n) && (f = f.reverse()), this.pushStack(f, n, s.call(arguments).join(","))
        }
    }), i.extend({
        filter: function (n, t, r) {
            return r && (n = ":not(" + n + ")"), t.length === 1 ? i.find.matchesSelector(t[0], n) ? [t[0]] : [] : i.find.matches(n, t)
        },
        dir: function (n, r, u) {
            for (var e = [], f = n[r]; f && f.nodeType !== 9 && (u === t || f.nodeType !== 1 || !i(f).is(u));) f.nodeType === 1 && e.push(f), f = f[r];
            return e
        },
        sibling: function (n, t) {
            for (var i = []; n; n = n.nextSibling) n.nodeType === 1 && n !== t && i.push(n);
            return i
        }
    });
    var ur = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        we = / jQuery\d+="(?:null|\d+)"/g,
        bt = /^\s+/,
        or = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        er = /<([\w:]+)/,
        ho = /<tbody/i,
        eo = /<|&#?\w+;/,
        oo = /<(?:script|style|link)/i,
        co = /<(?:script|object|embed|option|style)/i,
        gt = new RegExp("<(?:" + ur + ")[\\s/>]", "i"),
        li = /^(?:checkbox|radio)$/,
        bi = /checked\s*(?:[^=]|=\s*.checked.)/i,
        yo = /\/(java|ecma)script/i,
        lo = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,
        e = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        },
        nr = ou(r),
        pt = nr.appendChild(r.createElement("div"));
    e.optgroup = e.option, e.tbody = e.tfoot = e.colgroup = e.caption = e.thead, e.th = e.td, i.support.htmlSerialize || (e._default = [1, "X<div>", "</div>"]), i.fn.extend({
            text: function (n) {
                return i.access(this, function (n) {
                    return n === t ? i.text(this) : this.empty().append((this[0] && this[0].ownerDocument || r).createTextNode(n))
                }, null, n, arguments.length)
            },
            wrapAll: function (n) {
                if (i.isFunction(n)) return this.each(function (t) {
                    i(this).wrapAll(n.call(this, t))
                });
                if (this[0]) {
                    var t = i(n, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                        for (var n = this; n.firstChild && n.firstChild.nodeType === 1;) n = n.firstChild;
                        return n
                    }).append(this)
                }
                return this
            },
            wrapInner: function (n) {
                return i.isFunction(n) ? this.each(function (t) {
                    i(this).wrapInner(n.call(this, t))
                }) : this.each(function () {
                    var r = i(this),
                        t = r.contents();
                    t.length ? t.wrapAll(n) : r.append(n)
                })
            },
            wrap: function (n) {
                var t = i.isFunction(n);
                return this.each(function (r) {
                    i(this).wrapAll(t ? n.call(this, r) : n)
                })
            },
            unwrap: function () {
                return this.parent().each(function () {
                    i.nodeName(this, "body") || i(this).replaceWith(this.childNodes)
                }).end()
            },
            append: function () {
                return this.domManip(arguments, !0, function (n) {
                    (this.nodeType === 1 || this.nodeType === 11) && this.appendChild(n)
                })
            },
            prepend: function () {
                return this.domManip(arguments, !0, function (n) {
                    (this.nodeType === 1 || this.nodeType === 11) && this.insertBefore(n, this.firstChild)
                })
            },
            before: function () {
                if (!b(this[0])) return this.domManip(arguments, !1, function (n) {
                    this.parentNode.insertBefore(n, this)
                });
                if (arguments.length) {
                    var n = i.clean(arguments);
                    return this.pushStack(i.merge(n, this), "before", this.selector)
                }
            },
            after: function () {
                if (!b(this[0])) return this.domManip(arguments, !1, function (n) {
                    this.parentNode.insertBefore(n, this.nextSibling)
                });
                if (arguments.length) {
                    var n = i.clean(arguments);
                    return this.pushStack(i.merge(this, n), "after", this.selector)
                }
            },
            remove: function (n, t) {
                for (var r, u = 0;
                    (r = this[u]) != null; u++)(!n || i.filter(n, [r]).length) && (!t && r.nodeType === 1 && (i.cleanData(r.getElementsByTagName("*")), i.cleanData([r])), r.parentNode && r.parentNode.removeChild(r));
                return this
            },
            empty: function () {
                for (var n, t = 0;
                    (n = this[t]) != null; t++)
                    for (n.nodeType === 1 && i.cleanData(n.getElementsByTagName("*")); n.firstChild;) n.removeChild(n.firstChild);
                return this
            },
            clone: function (n, t) {
                return n = n == null ? !1 : n, t = t == null ? n : t, this.map(function () {
                    return i.clone(this, n, t)
                })
            },
            html: function (n) {
                return i.access(this, function (n) {
                    var r = this[0] || {},
                        u = 0,
                        f = this.length;
                    if (n === t) return r.nodeType === 1 ? r.innerHTML.replace(we, "") : t;
                    if (typeof n == "string" && !oo.test(n) && (i.support.htmlSerialize || !gt.test(n)) && (i.support.leadingWhitespace || !bt.test(n)) && !e[(er.exec(n) || ["", ""])[1].toLowerCase()]) {
                        n = n.replace(or, "<$1></$2>");
                        try {
                            for (; u < f; u++) r = this[u] || {}, r.nodeType === 1 && (i.cleanData(r.getElementsByTagName("*")), r.innerHTML = n);
                            r = 0
                        } catch (o) {}
                    }
                    r && this.empty().append(n)
                }, null, n, arguments.length)
            },
            replaceWith: function (n) {
                return b(this[0]) ? this.length ? this.pushStack(i(i.isFunction(n) ? n() : n), "replaceWith", n) : this : i.isFunction(n) ? this.each(function (t) {
                    var r = i(this),
                        u = r.html();
                    r.replaceWith(n.call(this, t, u))
                }) : (typeof n != "string" && (n = i(n).detach()), this.each(function () {
                    var t = this.nextSibling,
                        r = this.parentNode;
                    i(this).remove(), t ? i(t).before(n) : i(r).append(n)
                }))
            },
            detach: function (n) {
                return this.remove(n, !0)
            },
            domManip: function (n, r, u) {
                n = [].concat.apply([], n);
                var l, o, f, a, e = 0,
                    s = n[0],
                    h = [],
                    c = this.length;
                if (!i.support.checkClone && c > 1 && typeof s == "string" && bi.test(s)) return this.each(function () {
                    i(this).domManip(n, r, u)
                });
                if (i.isFunction(s)) return this.each(function (f) {
                    var e = i(this);
                    n[0] = s.call(this, f, r ? e.html() : t), e.domManip(n, r, u)
                });
                if (this[0]) {
                    if (l = i.buildFragment(n, this, h), f = l.fragment, o = f.firstChild, f.childNodes.length === 1 && (f = o), o)
                        for (r = r && i.nodeName(o, "tr"), a = l.cacheable || c - 1; e < c; e++) u.call(r && i.nodeName(this[e], "table") ? hf(this[e], "tbody") : this[e], e === a ? f : i.clone(f, !0, !0));
                    f = o = null, h.length && i.each(h, function (n, t) {
                        t.src ? i.ajax ? i.ajax({
                            url: t.src,
                            type: "GET",
                            dataType: "script",
                            async: !1,
                            global: !1,
                            throws: !0
                        }) : i.error("no ajax") : i.globalEval((t.text || t.textContent || t.innerHTML || "").replace(lo, "")), t.parentNode && t.parentNode.removeChild(t)
                    })
                }
                return this
            }
        }), i.buildFragment = function (n, u, f) {
            var o, s, h, e = n[0];
            return u = u || r, u = (u[0] || u).ownerDocument || u[0] || u, typeof u.createDocumentFragment == "undefined" && (u = r), n.length === 1 && typeof e == "string" && e.length < 512 && u === r && e.charAt(0) === "<" && !co.test(e) && (i.support.checkClone || !bi.test(e)) && (i.support.html5Clone || !gt.test(e)) && (s = !0, o = i.fragments[e], h = o !== t), o || (o = u.createDocumentFragment(), i.clean(n, u, o, f), s && (i.fragments[e] = h && o)), {
                fragment: o,
                cacheable: s
            }
        }, i.fragments = {}, i.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function (n, t) {
            i.fn[n] = function (r) {
                var s, e = 0,
                    o = [],
                    f = i(r),
                    h = f.length,
                    u = this.length === 1 && this[0].parentNode;
                if ((u == null || u && u.nodeType === 11 && u.childNodes.length === 1) && h === 1) return f[t](this[0]), this;
                for (; e < h; e++) s = (e > 0 ? this.clone(!0) : this).get(), i(f[e])[t](s), o = o.concat(s);
                return this.pushStack(o, n, f.selector)
            }
        }), i.extend({
            clone: function (n, t, r) {
                var e, o, u, f;
                if (i.support.html5Clone || i.isXMLDoc(n) || !gt.test("<" + n.nodeName + ">") ? f = n.cloneNode(!0) : (pt.innerHTML = n.outerHTML, pt.removeChild(f = pt.firstChild)), (!i.support.noCloneEvent || !i.support.noCloneChecked) && (n.nodeType === 1 || n.nodeType === 11) && !i.isXMLDoc(n))
                    for (lu(n, f), e = ht(n), o = ht(f), u = 0; e[u]; ++u) o[u] && lu(e[u], o[u]);
                if (t && (yu(n, f), r))
                    for (e = ht(n), o = ht(f), u = 0; e[u]; ++u) yu(e[u], o[u]);
                return e = o = null, f
            },
            clean: function (n, t, u, f) {
                var a, l, o, w, y, d, s, k, v, g, b, p, h = 0,
                    c = [];
                for (t && typeof t.createDocumentFragment != "undefined" || (t = r), l = t === r && nr;
                    (o = n[h]) != null; h++)
                    if (typeof o == "number" && (o += ""), o) {
                        if (typeof o == "string")
                            if (eo.test(o)) {
                                for (l = l || ou(t), s = s || l.appendChild(t.createElement("div")), o = o.replace(or, "<$1></$2>"), w = (er.exec(o) || ["", ""])[1].toLowerCase(), y = e[w] || e._default, d = y[0], s.innerHTML = y[1] + o + y[2]; d--;) s = s.lastChild;
                                if (!i.support.tbody)
                                    for (k = ho.test(o), v = w === "table" && !k ? s.firstChild && s.firstChild.childNodes : y[1] === "<table>" && !k ? s.childNodes : [], a = v.length - 1; a >= 0; --a) i.nodeName(v[a], "tbody") && !v[a].childNodes.length && v[a].parentNode.removeChild(v[a]);
                                !i.support.leadingWhitespace && bt.test(o) && s.insertBefore(t.createTextNode(bt.exec(o)[0]), s.firstChild), o = s.childNodes, s = l.lastChild
                            } else o = t.createTextNode(o);
                        o.nodeType ? c.push(o) : c = i.merge(c, o)
                    } if (s && (l.removeChild(s), o = s = l = null), !i.support.appendChecked)
                    for (h = 0;
                        (o = c[h]) != null; h++) i.nodeName(o, "input") ? au(o) : typeof o.getElementsByTagName != "undefined" && i.grep(o.getElementsByTagName("input"), au);
                if (u)
                    for (b = function (n) {
                            if (!n.type || yo.test(n.type)) return f ? f.push(n.parentNode ? n.parentNode.removeChild(n) : n) : u.appendChild(n)
                        }, h = 0;
                        (o = c[h]) != null; h++) i.nodeName(o, "script") && b(o) || (u.appendChild(o), typeof o.getElementsByTagName != "undefined" && (p = i.grep(i.merge([], o.getElementsByTagName("script")), b), c.splice.apply(c, [h + 1, 0].concat(p)), h += p.length));
                return c
            },
            cleanData: function (n, t) {
                for (var f, u, r, o, h = 0, e = i.expando, s = i.cache, l = i.support.deleteExpando, c = i.event.special;
                    (r = n[h]) != null; h++)
                    if ((t || i.acceptData(r)) && (u = r[e], f = u && s[u], f)) {
                        if (f.events)
                            for (o in f.events) c[o] ? i.event.remove(r, o) : i.removeEvent(r, o, f.handle);
                        s[u] && (delete s[u], l ? delete r[e] : r.removeAttribute ? r.removeAttribute(e) : r[e] = null, i.deletedIds.push(u))
                    }
            }
        }),
        function () {
            var t, n;
            i.uaMatch = function (n) {
                n = n.toLowerCase();
                var t = /(chrome)[ \/]([\w.]+)/.exec(n) || /(webkit)[ \/]([\w.]+)/.exec(n) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(n) || /(msie) ([\w.]+)/.exec(n) || n.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(n) || [];
                return {
                    browser: t[1] || "",
                    version: t[2] || "0"
                }
            }, t = i.uaMatch(de.userAgent), n = {}, t.browser && (n[t.browser] = !0, n.version = t.version), n.webkit && (n.safari = !0), i.browser = n, i.sub = function () {
                function n(t, i) {
                    return new n.fn.init(t, i)
                }
                i.extend(!0, n, this), n.superclass = this, n.fn = n.prototype = this(), n.fn.constructor = n, n.sub = this.sub, n.fn.init = function u(c, r) {
                    return r && r instanceof i && !(r instanceof n) && (r = n(r)), i.fn.init.call(this, u, r, t)
                }, n.fn.init.prototype = n.fn;
                var t = n(r);
                return n
            }
        }();
    var u, v, y, dt = /alpha\([^)]*\)/i,
        ke = /opacity=([^)]*)/,
        no = /^(top|right|bottom|left)$/,
        fr = /^margin/,
        uo = new RegExp("^(" + d + ")(.*)$", "i"),
        g = new RegExp("^(" + d + ")(?!px)[a-z%]+$", "i"),
        to = new RegExp("^([-+])=(" + d + ")", "i"),
        ti = {},
        bf = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        rr = {
            letterSpacing: 0,
            fontWeight: 400,
            lineHeight: 1
        },
        c = ["Top", "Right", "Bottom", "Left"],
        pi = ["Webkit", "O", "Moz", "ms"],
        du = i.fn.toggle;
    i.fn.extend({
        css: function (n, r) {
            return i.access(this, function (n, r, u) {
                return u !== t ? i.style(n, r, u) : i.css(n, r)
            }, n, r, arguments.length > 1)
        },
        show: function () {
            return vr(this, !0)
        },
        hide: function () {
            return vr(this)
        },
        toggle: function (n, t) {
            var r = typeof n == "boolean";
            return i.isFunction(n) && i.isFunction(t) ? du.apply(this, arguments) : this.each(function () {
                (r ? n : st(this)) ? i(this).show(): i(this).hide()
            })
        }
    }), i.extend({
        cssHooks: {
            opacity: {
                get: function (n, t) {
                    if (t) {
                        var i = u(n, "opacity");
                        return i === "" ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: i.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (n, r, u, f) {
            if (n && n.nodeType !== 3 && n.nodeType !== 8 && n.style) {
                var s, h, e, o = i.camelCase(r),
                    c = n.style;
                if (r = i.cssProps[o] || (i.cssProps[o] = uu(c, o)), e = i.cssHooks[r] || i.cssHooks[o], u === t) return e && "get" in e && (s = e.get(n, !1, f)) !== t ? s : c[r];
                if ((h = typeof u, h === "string" && (s = to.exec(u)) && (u = (s[1] + 1) * s[2] + parseFloat(i.css(n, r)), h = "number"), u != null && (h !== "number" || !isNaN(u))) && (h === "number" && !i.cssNumber[o] && (u += "px"), !e || !("set" in e) || (u = e.set(n, u, f)) !== t)) try {
                    c[r] = u
                } catch (l) {}
            }
        },
        css: function (n, r, f, e) {
            var o, c, s, h = i.camelCase(r);
            return r = i.cssProps[h] || (i.cssProps[h] = uu(n.style, h)), s = i.cssHooks[r] || i.cssHooks[h], s && "get" in s && (o = s.get(n, !0, e)), o === t && (o = u(n, r)), o === "normal" && r in rr && (o = rr[r]), f || e !== t ? (c = parseFloat(o), f || i.isNumeric(c) ? c || 0 : o) : o
        },
        swap: function (n, t, i) {
            var f, r, u = {};
            for (r in t) u[r] = n.style[r], n.style[r] = t[r];
            f = i.call(n);
            for (r in t) n.style[r] = u[r];
            return f
        }
    }), n.getComputedStyle ? u = function (n, t) {
        var u, e, o, s, f = getComputedStyle(n, null),
            r = n.style;
        return f && (u = f[t], u === "" && !i.contains(n.ownerDocument.documentElement, n) && (u = i.style(n, t)), g.test(u) && fr.test(t) && (e = r.width, o = r.minWidth, s = r.maxWidth, r.minWidth = r.maxWidth = r.width = u, u = f.width, r.width = e, r.minWidth = o, r.maxWidth = s)), u
    } : r.documentElement.currentStyle && (u = function (n, t) {
        var f, u, i = n.currentStyle && n.currentStyle[t],
            r = n.style;
        return i == null && r && r[t] && (i = r[t]), g.test(i) && !no.test(t) && (f = r.left, u = n.runtimeStyle && n.runtimeStyle.left, u && (n.runtimeStyle.left = n.currentStyle.left), r.left = t === "fontSize" ? "1em" : i, i = r.pixelLeft + "px", r.left = f, u && (n.runtimeStyle.left = u)), i === "" ? "auto" : i
    }), i.each(["height", "width"], function (n, t) {
        i.cssHooks[t] = {
            get: function (n, r, f) {
                if (r) return n.offsetWidth !== 0 || u(n, "display") !== "none" ? hr(n, t, f) : i.swap(n, bf, function () {
                    return hr(n, t, f)
                })
            },
            set: function (n, r, u) {
                return ar(n, r, u ? yr(n, t, u, i.support.boxSizing && i.css(n, "boxSizing") === "border-box") : 0)
            }
        }
    }), i.support.opacity || (i.cssHooks.opacity = {
        get: function (n, t) {
            return ke.test((t && n.currentStyle ? n.currentStyle.filter : n.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function (n, t) {
            var r = n.style,
                f = n.currentStyle,
                e = i.isNumeric(t) ? "alpha(opacity=" + t * 100 + ")" : "",
                u = f && f.filter || r.filter || "";
            (r.zoom = 1, t >= 1 && i.trim(u.replace(dt, "")) === "" && r.removeAttribute && (r.removeAttribute("filter"), f && !f.filter)) || (r.filter = dt.test(u) ? u.replace(dt, e) : u + " " + e)
        }
    }), i(function () {
        i.support.reliableMarginRight || (i.cssHooks.marginRight = {
            get: function (n, t) {
                return i.swap(n, {
                    display: "inline-block"
                }, function () {
                    if (t) return u(n, "marginRight")
                })
            }
        }), !i.support.pixelPosition && i.fn.position && i.each(["top", "left"], function (n, t) {
            i.cssHooks[t] = {
                get: function (n, r) {
                    if (r) {
                        var f = u(n, t);
                        return g.test(f) ? i(n).position()[t] + "px" : f
                    }
                }
            }
        })
    }), i.expr && i.expr.filters && (i.expr.filters.hidden = function (n) {
        return n.offsetWidth === 0 && n.offsetHeight === 0 || !i.support.reliableHiddenOffsets && (n.style && n.style.display || u(n, "display")) === "none"
    }, i.expr.filters.visible = function (n) {
        return !i.expr.filters.hidden(n)
    }), i.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (n, t) {
        i.cssHooks[n + t] = {
            expand: function (i) {
                for (var u = typeof i == "string" ? i.split(" ") : [i], f = {}, r = 0; r < 4; r++) f[n + c[r] + t] = u[r] || u[r - 2] || u[0];
                return f
            }
        }, fr.test(n) || (i.cssHooks[n + t].set = ar)
    });
    var nf = /%20/g,
        rf = /\[\]$/,
        hi = /\r?\n/g,
        ku = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        bu = /^(?:select|textarea)/i;
    i.fn.extend({
        serialize: function () {
            return i.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                return this.elements ? i.makeArray(this.elements) : this
            }).filter(function () {
                return this.name && !this.disabled && (this.checked || bu.test(this.nodeName) || ku.test(this.type))
            }).map(function (n, t) {
                var r = i(this).val();
                return r == null ? null : i.isArray(r) ? i.map(r, function (n) {
                    return {
                        name: t.name,
                        value: n.replace(hi, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: r.replace(hi, "\r\n")
                }
            }).get()
        }
    }), i.param = function (n, r) {
        var f, u = [],
            e = function (n, t) {
                t = i.isFunction(t) ? t() : t == null ? "" : t, u[u.length] = encodeURIComponent(n) + "=" + encodeURIComponent(t)
            };
        if (r === t && (r = i.ajaxSettings && i.ajaxSettings.traditional), i.isArray(n) || n.jquery && !i.isPlainObject(n)) i.each(n, function () {
            e(this.name, this.value)
        });
        else
            for (f in n) ii(f, n[f], r, e);
        return u.join("&").replace(nf, "+")
    };
    var a, l, vf = /#.*$/,
        af = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        pf = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
        yf = /^(?:GET|HEAD)$/,
        of = /^\/\//,
        ri = /\?/,
        ff = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        gu = /([?&])_=[^&]*/,
        tr = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        ki = i.fn.load,
        ni = {},
        wi = {},
        gi = ["*/"] + ["*"];
    try {
        a = ge.href
    } catch (po) {
        a = r.createElement("a"), a.href = "", a = a.href
    }
    l = tr.exec(a.toLowerCase()) || [], i.fn.load = function (n, r, u) {
        if (typeof n != "string" && ki) return ki.apply(this, arguments);
        if (!this.length) return this;
        var e, o, h, s = this,
            f = n.indexOf(" ");
        return f >= 0 && (e = n.slice(f, n.length), n = n.slice(0, f)), i.isFunction(r) ? (u = r, r = t) : typeof r == "object" && (o = "POST"), i.ajax({
            url: n,
            type: o,
            dataType: "html",
            data: r,
            complete: function (n, t) {
                u && s.each(u, h || [n.responseText, t, n])
            }
        }).done(function (n) {
            h = arguments, s.html(e ? i("<div>").append(n.replace(ff, "")).find(e) : n)
        }), this
    }, i.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (n, t) {
        i.fn[t] = function (n) {
            return this.on(t, n)
        }
    }), i.each(["get", "post"], function (n, r) {
        i[r] = function (n, u, f, e) {
            return i.isFunction(u) && (e = e || f, f = u, u = t), i.ajax({
                type: r,
                url: n,
                data: u,
                success: f,
                dataType: e
            })
        }
    }), i.extend({
        getScript: function (n, r) {
            return i.get(n, t, r, "script")
        },
        getJSON: function (n, t, r) {
            return i.get(n, t, r, "json")
        },
        ajaxSetup: function (n, t) {
            return t ? iu(n, i.ajaxSettings) : (t = n, n = i.ajaxSettings), iu(n, t), n
        },
        ajaxSettings: {
            url: a,
            isLocal: pf.test(l[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": gi
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": n.String,
                "text html": !0,
                "text json": i.parseJSON,
                "text xml": i.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: tu(ni),
        ajaxTransport: tu(wi),
        ajax: function (n, r) {
            function p(n, r, h, c) {
                var a, d, w, tt, p, l = r;
                e !== 2 && (e = 2, nt && clearTimeout(nt), v = t, k = c || "", f.readyState = n > 0 ? 4 : 0, h && (tt = uf(u, f, h)), n >= 200 && n < 300 || n === 304 ? (u.ifModified && (p = f.getResponseHeader("Last-Modified"), p && (i.lastModified[o] = p), p = f.getResponseHeader("Etag"), p && (i.etag[o] = p)), n === 304 ? (l = "notmodified", a = !0) : (a = tf(u, tt), l = a.state, d = a.data, w = a.error, a = !w)) : (w = l, (!l || n) && (l = "error", n < 0 && (n = 0))), f.status = n, f.statusText = "" + (r || l), a ? it.resolveWith(s, [d, l, f]) : it.rejectWith(s, [f, l, w]), f.statusCode(b), b = t, y && g.trigger("ajax" + (a ? "Success" : "Error"), [f, u, a ? d : w]), ut.fireWith(s, [f, l]), y && (g.trigger("ajaxComplete", [f, u]), --i.active || i.event.trigger("ajaxStop")))
            }
            var d, tt;
            typeof n == "object" && (r = n, n = t), r = r || {};
            var o, k, w, v, nt, a, y, c, u = i.ajaxSetup({}, r),
                s = u.context || u,
                g = s !== u && (s.nodeType || s instanceof i) ? i(s) : i.event,
                it = i.Deferred(),
                ut = i.Callbacks("once memory"),
                b = u.statusCode || {},
                ft = {},
                et = {},
                e = 0,
                rt = "canceled",
                f = {
                    readyState: 0,
                    setRequestHeader: function (n, t) {
                        if (!e) {
                            var i = n.toLowerCase();
                            n = et[i] = et[i] || n, ft[n] = t
                        }
                        return this
                    },
                    getAllResponseHeaders: function () {
                        return e === 2 ? k : null
                    },
                    getResponseHeader: function (n) {
                        var i;
                        if (e === 2) {
                            if (!w)
                                for (w = {}; i = af.exec(k);) w[i[1].toLowerCase()] = i[2];
                            i = w[n.toLowerCase()]
                        }
                        return i === t ? null : i
                    },
                    overrideMimeType: function (n) {
                        return e || (u.mimeType = n), this
                    },
                    abort: function (n) {
                        return n = n || rt, v && v.abort(n), p(0, n), this
                    }
                };
            if (it.promise(f), f.success = f.done, f.error = f.fail, f.complete = ut.add, f.statusCode = function (n) {
                    if (n) {
                        var t;
                        if (e < 2)
                            for (t in n) b[t] = [b[t], n[t]];
                        else t = n[f.status], f.always(t)
                    }
                    return this
                }, u.url = ((n || u.url) + "").replace(vf, "").replace( of , l[1] + "//"), u.dataTypes = i.trim(u.dataType || "*").toLowerCase().split(h), u.crossDomain == null && (a = tr.exec(u.url.toLowerCase()), u.crossDomain = !(!a || a[1] == l[1] && a[2] == l[2] && (a[3] || (a[1] === "http:" ? 80 : 443)) == (l[3] || (l[1] === "http:" ? 80 : 443)))), u.data && u.processData && typeof u.data != "string" && (u.data = i.param(u.data, u.traditional)), lt(ni, u, r, f), e === 2) return f;
            y = u.global, u.type = u.type.toUpperCase(), u.hasContent = !yf.test(u.type), y && i.active++ == 0 && i.event.trigger("ajaxStart"), u.hasContent || (u.data && (u.url += (ri.test(u.url) ? "&" : "?") + u.data, delete u.data), o = u.url, u.cache === !1 && (d = i.now(), tt = u.url.replace(gu, "$1_=" + d), u.url = tt + (tt === u.url ? (ri.test(u.url) ? "&" : "?") + "_=" + d : ""))), (u.data && u.hasContent && u.contentType !== !1 || r.contentType) && f.setRequestHeader("Content-Type", u.contentType), u.ifModified && (o = o || u.url, i.lastModified[o] && f.setRequestHeader("If-Modified-Since", i.lastModified[o]), i.etag[o] && f.setRequestHeader("If-None-Match", i.etag[o])), f.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + (u.dataTypes[0] !== "*" ? ", " + gi + "; q=0.01" : "") : u.accepts["*"]);
            for (c in u.headers) f.setRequestHeader(c, u.headers[c]);
            if (!u.beforeSend || u.beforeSend.call(s, f, u) !== !1 && e !== 2) {
                rt = "abort";
                for (c in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) f[c](u[c]);
                if (v = lt(wi, u, r, f), v) {
                    f.readyState = 1, y && g.trigger("ajaxSend", [f, u]), u.async && u.timeout > 0 && (nt = setTimeout(function () {
                        f.abort("timeout")
                    }, u.timeout));
                    try {
                        e = 1, v.send(ft, p)
                    } catch (ot) {
                        if (e < 2) p(-1, ot);
                        else throw ot;
                    }
                } else p(-1, "No Transport");
                return f
            }
            return f.abort()
        },
        active: 0,
        lastModified: {},
        etag: {}
    });
    var di = [],
        lf = /\?/,
        et = /(=)\?(?=&|$)|\?\?/,
        sf = i.now();
    i.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
                var n = di.pop() || i.expando + "_" + sf++;
                return this[n] = !0, n
            }
        }), i.ajaxPrefilter("json jsonp", function (r, u, f) {
            var e, s, o, l = r.data,
                a = r.url,
                h = r.jsonp !== !1,
                c = h && et.test(a),
                v = h && !c && typeof l == "string" && !(r.contentType || "").indexOf("application/x-www-form-urlencoded") && et.test(l);
            if (r.dataTypes[0] === "jsonp" || c || v) return e = r.jsonpCallback = i.isFunction(r.jsonpCallback) ? r.jsonpCallback() : r.jsonpCallback, s = n[e], c ? r.url = a.replace(et, "$1" + e) : v ? r.data = l.replace(et, "$1" + e) : h && (r.url += (lf.test(a) ? "&" : "?") + r.jsonp + "=" + e), r.converters["script json"] = function () {
                return o || i.error(e + " was not called"), o[0]
            }, r.dataTypes[0] = "json", n[e] = function () {
                o = arguments
            }, f.always(function () {
                n[e] = s, r[e] && (r.jsonpCallback = u.jsonpCallback, di.push(e)), o && i.isFunction(s) && s(o[0]), o = s = t
            }), "script"
        }), i.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /javascript|ecmascript/
            },
            converters: {
                "text script": function (n) {
                    return i.globalEval(n), n
                }
            }
        }), i.ajaxPrefilter("script", function (n) {
            n.cache === t && (n.cache = !1), n.crossDomain && (n.type = "GET", n.global = !1)
        }), i.ajaxTransport("script", function (n) {
            if (n.crossDomain) {
                var i, u = r.head || r.getElementsByTagName("head")[0] || r.documentElement;
                return {
                    send: function (f, e) {
                        i = r.createElement("script"), i.async = "async", n.scriptCharset && (i.charset = n.scriptCharset), i.src = n.url, i.onload = i.onreadystatechange = function (n, r) {
                            (r || !i.readyState || /loaded|complete/.test(i.readyState)) && (i.onload = i.onreadystatechange = null, u && i.parentNode && u.removeChild(i), i = t, r || e(200, "success"))
                        }, u.insertBefore(i, u.firstChild)
                    },
                    abort: function () {
                        i && i.onload(0, 1)
                    }
                }
            }
        }), ot = n.ActiveXObject ? function () {
            for (var n in w) w[n](0, 1)
        } : !1, ir = 0, i.ajaxSettings.xhr = n.ActiveXObject ? function () {
            return !this.isLocal && gr() || wu()
        } : gr,
        function (n) {
            i.extend(i.support, {
                ajax: !!n,
                cors: !!n && "withCredentials" in n
            })
        }(i.ajaxSettings.xhr()), i.support.ajax && i.ajaxTransport(function (r) {
            if (!r.crossDomain || i.support.cors) {
                var u;
                return {
                    send: function (f, e) {
                        var h, s, o = r.xhr();
                        if (r.username ? o.open(r.type, r.url, r.async, r.username, r.password) : o.open(r.type, r.url, r.async), r.xhrFields)
                            for (s in r.xhrFields) o[s] = r.xhrFields[s];
                        r.mimeType && o.overrideMimeType && o.overrideMimeType(r.mimeType), !r.crossDomain && !f["X-Requested-With"] && (f["X-Requested-With"] = "XMLHttpRequest");
                        try {
                            for (s in f) o.setRequestHeader(s, f[s])
                        } catch (c) {}
                        o.send(r.hasContent && r.data || null), u = function (n, f) {
                            var c, a, v, s, l;
                            try {
                                if (u && (f || o.readyState === 4))
                                    if (u = t, h && (o.onreadystatechange = i.noop, ot && delete w[h]), f) o.readyState !== 4 && o.abort();
                                    else {
                                        c = o.status, v = o.getAllResponseHeaders(), s = {}, l = o.responseXML, l && l.documentElement && (s.xml = l);
                                        try {
                                            s.text = o.responseText
                                        } catch (n) {}
                                        try {
                                            a = o.statusText
                                        } catch (p) {
                                            a = ""
                                        }!c && r.isLocal && !r.crossDomain ? c = s.text ? 200 : 404 : c === 1223 && (c = 204)
                                    }
                            } catch (y) {
                                f || e(-1, y)
                            }
                            s && e(c, a, s, v)
                        }, r.async ? o.readyState === 4 ? setTimeout(u, 0) : (h = ++ir, ot && (w || (w = {}, i(n).unload(ot)), w[h] = u), o.onreadystatechange = u) : u()
                    },
                    abort: function () {
                        u && u(0, 1)
                    }
                }
            }
        });
    var ct, rt, cf = /^(?:toggle|show|hide)$/,
        ef = new RegExp("^(?:([-+])=|)(" + d + ")([a-z%]*)$", "i"),
        wf = /queueHooks$/,
        ut = [be],
        k = {
            "*": [function (n, t) {
                var o, s, h, r = this.createTween(n, t),
                    e = ef.exec(t),
                    c = r.cur(),
                    u = +c || 0,
                    f = 1;
                if (e) {
                    if (o = +e[2], s = e[3] || (i.cssNumber[n] ? "" : "px"), s !== "px" && u) {
                        u = i.css(r.elem, n, !0) || o || 1;
                        do h = f = f || ".5", u = u / f, i.style(r.elem, n, u + s), f = r.cur() / c; while (f !== 1 && f !== h)
                    }
                    r.unit = s, r.start = u, r.end = e[1] ? u + (e[1] + 1) * o : o
                }
                return r
            }]
        };
    i.Animation = i.extend(dr, {
        tweener: function (n, t) {
            i.isFunction(n) ? (t = n, n = ["*"]) : n = n.split(" ");
            for (var r, u = 0, f = n.length; u < f; u++) r = n[u], k[r] = k[r] || [], k[r].unshift(t)
        },
        prefilter: function (n, t) {
            t ? ut.unshift(n) : ut.push(n)
        }
    }), i.Tween = f, f.prototype = {
        constructor: f,
        init: function (n, t, r, u, f, e) {
            this.elem = n, this.prop = r, this.easing = f || "swing", this.options = t, this.start = this.now = this.cur(), this.end = u, this.unit = e || (i.cssNumber[r] ? "" : "px")
        },
        cur: function () {
            var n = f.propHooks[this.prop];
            return n && n.get ? n.get(this) : f.propHooks._default.get(this)
        },
        run: function (n) {
            var r, t = f.propHooks[this.prop];
            return this.pos = r = i.easing[this.easing](n, this.options.duration * n, 0, 1, this.options.duration), this.now = (this.end - this.start) * r + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), t && t.set ? t.set(this) : f.propHooks._default.set(this), this
        }
    }, f.prototype.init.prototype = f.prototype, f.propHooks = {
        _default: {
            get: function (n) {
                var t;
                return n.elem[n.prop] == null || !!n.elem.style && n.elem.style[n.prop] != null ? (t = i.css(n.elem, n.prop, !1, ""), !t || t === "auto" ? 0 : t) : n.elem[n.prop]
            },
            set: function (n) {
                i.fx.step[n.prop] ? i.fx.step[n.prop](n) : n.elem.style && (n.elem.style[i.cssProps[n.prop]] != null || i.cssHooks[n.prop]) ? i.style(n.elem, n.prop, n.now + n.unit) : n.elem[n.prop] = n.now
            }
        }
    }, f.propHooks.scrollTop = f.propHooks.scrollLeft = {
        set: function (n) {
            n.elem.nodeType && n.elem.parentNode && (n.elem[n.prop] = n.now)
        }
    }, i.each(["toggle", "show", "hide"], function (n, t) {
        var r = i.fn[t];
        i.fn[t] = function (u, f, e) {
            return u == null || typeof u == "boolean" || !n && i.isFunction(u) && i.isFunction(f) ? r.apply(this, arguments) : this.animate(it(t, !0), u, f, e)
        }
    }), i.fn.extend({
        fadeTo: function (n, t, i, r) {
            return this.filter(st).css("opacity", 0).show().end().animate({
                opacity: t
            }, n, i, r)
        },
        animate: function (n, t, r, u) {
            var o = i.isEmptyObject(n),
                f = i.speed(t, r, u),
                e = function () {
                    var t = dr(this, i.extend({}, n), f);
                    o && t.stop(!0)
                };
            return o || f.queue === !1 ? this.each(e) : this.queue(f.queue, e)
        },
        stop: function (n, r, u) {
            var f = function (n) {
                var t = n.stop;
                delete n.stop, t(u)
            };
            return typeof n != "string" && (u = r, r = n, n = t), r && n !== !1 && this.queue(n || "fx", []), this.each(function () {
                var o = !0,
                    t = n != null && n + "queueHooks",
                    e = i.timers,
                    r = i._data(this);
                if (t) r[t] && r[t].stop && f(r[t]);
                else
                    for (t in r) r[t] && r[t].stop && wf.test(t) && f(r[t]);
                for (t = e.length; t--;) e[t].elem === this && (n == null || e[t].queue === n) && (e[t].anim.stop(u), o = !1, e.splice(t, 1));
                (o || !u) && i.dequeue(this, n)
            })
        }
    }), i.each({
        slideDown: it("show"),
        slideUp: it("hide"),
        slideToggle: it("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (n, t) {
        i.fn[n] = function (n, i, r) {
            return this.animate(t, n, i, r)
        }
    }), i.speed = function (n, t, r) {
        var u = n && typeof n == "object" ? i.extend({}, n) : {
            complete: r || !r && t || i.isFunction(n) && n,
            duration: n,
            easing: r && t || t && !i.isFunction(t) && t
        };
        return u.duration = i.fx.off ? 0 : typeof u.duration == "number" ? u.duration : u.duration in i.fx.speeds ? i.fx.speeds[u.duration] : i.fx.speeds._default, (u.queue == null || u.queue === !0) && (u.queue = "fx"), u.old = u.complete, u.complete = function () {
            i.isFunction(u.old) && u.old.call(this), u.queue && i.dequeue(this, u.queue)
        }, u
    }, i.easing = {
        linear: function (n) {
            return n
        },
        swing: function (n) {
            return .5 - Math.cos(n * Math.PI) / 2
        }
    }, i.timers = [], i.fx = f.prototype.init, i.fx.tick = function () {
        for (var r, t = i.timers, n = 0; n < t.length; n++) r = t[n], !r() && t[n] === r && t.splice(n--, 1);
        t.length || i.fx.stop()
    }, i.fx.timer = function (n) {
        n() && i.timers.push(n) && !rt && (rt = setInterval(i.fx.tick, i.fx.interval))
    }, i.fx.interval = 13, i.fx.stop = function () {
        clearInterval(rt), rt = null
    }, i.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, i.fx.step = {}, i.expr && i.expr.filters && (i.expr.filters.animated = function (n) {
        return i.grep(i.timers, function (t) {
            return n === t.elem
        }).length
    }), kt = /^(?:body|html)$/i, i.fn.offset = function (n) {
        if (arguments.length) return n === t ? this : this.each(function (t) {
            i.offset.setOffset(this, n, t)
        });
        var o, r, e, s, a, c, v, y, l, h, u = this[0],
            f = u && u.ownerDocument;
        if (f) return (e = f.body) === u ? i.offset.bodyOffset(u) : (r = f.documentElement, i.contains(r, u) ? (o = u.getBoundingClientRect(), s = br(f), a = r.clientTop || e.clientTop || 0, c = r.clientLeft || e.clientLeft || 0, v = s.pageYOffset || r.scrollTop, y = s.pageXOffset || r.scrollLeft, l = o.top + v - a, h = o.left + y - c, {
            top: l,
            left: h
        }) : {
            top: 0,
            left: 0
        })
    }, i.offset = {
        bodyOffset: function (n) {
            var r = n.offsetTop,
                t = n.offsetLeft;
            return i.support.doesNotIncludeMarginInBodyOffset && (r += parseFloat(i.css(n, "marginTop")) || 0, t += parseFloat(i.css(n, "marginLeft")) || 0), {
                top: r,
                left: t
            }
        },
        setOffset: function (n, t, r) {
            var s = i.css(n, "position");
            s === "static" && (n.style.position = "relative");
            var h = i(n),
                c = h.offset(),
                l = i.css(n, "top"),
                a = i.css(n, "left"),
                v = (s === "absolute" || s === "fixed") && i.inArray("auto", [l, a]) > -1,
                u = {},
                e = {},
                f, o;
            v ? (e = h.position(), f = e.top, o = e.left) : (f = parseFloat(l) || 0, o = parseFloat(a) || 0), i.isFunction(t) && (t = t.call(n, r, c)), t.top != null && (u.top = t.top - c.top + f), t.left != null && (u.left = t.left - c.left + o), "using" in t ? t.using.call(n, u) : h.css(u)
        }
    }, i.fn.extend({
        position: function () {
            if (this[0]) {
                var u = this[0],
                    r = this.offsetParent(),
                    n = this.offset(),
                    t = kt.test(r[0].nodeName) ? {
                        top: 0,
                        left: 0
                    } : r.offset();
                return n.top -= parseFloat(i.css(u, "marginTop")) || 0, n.left -= parseFloat(i.css(u, "marginLeft")) || 0, t.top += parseFloat(i.css(r[0], "borderTopWidth")) || 0, t.left += parseFloat(i.css(r[0], "borderLeftWidth")) || 0, {
                    top: n.top - t.top,
                    left: n.left - t.left
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var n = this.offsetParent || r.body; n && !kt.test(n.nodeName) && i.css(n, "position") === "static";) n = n.offsetParent;
                return n || r.body
            })
        }
    }), i.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (n, r) {
        var u = /Y/.test(r);
        i.fn[n] = function (f) {
            return i.access(this, function (n, f, e) {
                var o = br(n);
                if (e === t) return o ? r in o ? o[r] : o.document.documentElement[f] : n[f];
                o ? o.scrollTo(u ? i(o).scrollLeft() : e, u ? e : i(o).scrollTop()) : n[f] = e
            }, n, f, arguments.length, null)
        }
    }), i.each({
        Height: "height",
        Width: "width"
    }, function (n, r) {
        i.each({
            padding: "inner" + n,
            content: r,
            "": "outer" + n
        }, function (u, f) {
            i.fn[f] = function (f, e) {
                var s = arguments.length && (u || typeof f != "boolean"),
                    o = u || (f === !0 || e === !0 ? "margin" : "border");
                return i.access(this, function (r, u, f) {
                    var e;
                    return i.isWindow(r) ? r.document.documentElement["client" + n] : r.nodeType === 9 ? (e = r.documentElement, Math.max(r.body["scroll" + n], e["scroll" + n], r.body["offset" + n], e["offset" + n], e["client" + n])) : f === t ? i.css(r, u, f, o) : i.style(r, u, f, o)
                }, r, s ? f : t, s)
            }
        })
    }), n.jQuery = n.$ = i, typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function () {
        return i
    })
}(window);
var JSON;
JSON || (JSON = {}),
    function () {
        "use strict";

        function i(n) {
            return n < 10 ? "0" + n : n
        }

        function f(n) {
            return o.lastIndex = 0, o.test(n) ? '"' + n.replace(o, function (n) {
                var t = s[n];
                return typeof t == "string" ? t : "\\u" + ("0000" + n.charCodeAt(0).toString(16)).slice(-4)
            }) + '"' : '"' + n + '"'
        }

        function r(i, e) {
            var h, l, c, a, v = n,
                s, o = e[i];
            o && typeof o == "object" && typeof o.toJSON == "function" && (o = o.toJSON(i)), typeof t == "function" && (o = t.call(e, i, o));
            switch (typeof o) {
                case "string":
                    return f(o);
                case "number":
                    return isFinite(o) ? String(o) : "null";
                case "boolean":
                case "null":
                    return String(o);
                case "object":
                    if (!o) return "null";
                    if (n += u, s = [], Object.prototype.toString.apply(o) === "[object Array]") {
                        for (a = o.length, h = 0; h < a; h += 1) s[h] = r(h, o) || "null";
                        return c = s.length === 0 ? "[]" : n ? "[\n" + n + s.join(",\n" + n) + "\n" + v + "]" : "[" + s.join(",") + "]", n = v, c
                    }
                    if (t && typeof t == "object")
                        for (a = t.length, h = 0; h < a; h += 1) typeof t[h] == "string" && (l = t[h], c = r(l, o), c && s.push(f(l) + (n ? ": " : ":") + c));
                    else
                        for (l in o) Object.prototype.hasOwnProperty.call(o, l) && (c = r(l, o), c && s.push(f(l) + (n ? ": " : ":") + c));
                    return c = s.length === 0 ? "{}" : n ? "{\n" + n + s.join(",\n" + n) + "\n" + v + "}" : "{" + s.join(",") + "}", n = v, c
            }
        }
        typeof Date.prototype.toJSON != "function" && (Date.prototype.toJSON = function () {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + i(this.getUTCMonth() + 1) + "-" + i(this.getUTCDate()) + "T" + i(this.getUTCHours()) + ":" + i(this.getUTCMinutes()) + ":" + i(this.getUTCSeconds()) + "Z" : null
        }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function () {
            return this.valueOf()
        });
        var e = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            o = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            n, u, s = {
                "\b": "\\b",
                "\t": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\"
            },
            t;
        typeof JSON.stringify != "function" && (JSON.stringify = function (i, f, e) {
            var o;
            if (n = "", u = "", typeof e == "number")
                for (o = 0; o < e; o += 1) u += " ";
            else typeof e == "string" && (u = e);
            if (t = f, f && typeof f != "function" && (typeof f != "object" || typeof f.length != "number")) throw new Error("JSON.stringify");
            return r("", {
                "": i
            })
        }), typeof JSON.parse != "function" && (JSON.parse = function (text, reviver) {
            function walk(n, t) {
                var r, u, i = n[t];
                if (i && typeof i == "object")
                    for (r in i) Object.prototype.hasOwnProperty.call(i, r) && (u = walk(i, r), u !== undefined ? i[r] = u : delete i[r]);
                return reviver.call(n, t, i)
            }
            var j;
            if (text = String(text), e.lastIndex = 0, e.test(text) && (text = text.replace(e, function (n) {
                    return "\\u" + ("0000" + n.charCodeAt(0).toString(16)).slice(-4)
                })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), typeof reviver == "function" ? walk({
                "": j
            }, "") : j;
            throw new SyntaxError("JSON.parse");
        })
    }()