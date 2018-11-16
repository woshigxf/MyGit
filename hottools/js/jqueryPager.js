jQuery.fn.pagination = function (n, t) {
    return t = jQuery.extend({
        tatal_count: n,
        items_per_page: 10,
        num_display_entries: 10,
        current_page: 1,
        num_edge_entries: 1,
        link_to: "javascript:void(0)",
        prev_text: "上一页",
        next_text: "下一页",
        ellipse_text: "...",
        prev_show_always: !0,
        next_show_always: !0,
        load_callback: !0,
        callback: function () {
            return !1
        }
    }, t || {}), this.each(function () {
        function f() {
            return Math.ceil(n / t.items_per_page)
        }

        function o() {
            var n = Math.ceil(t.num_display_entries / 2),
                r = f(),
                o = r - t.num_display_entries,
                e = i > n ? Math.max(Math.min(i - n, o), 0) : 0,
                u = i > n ? Math.min(i + n, r) : Math.min(t.num_display_entries, r);
            return [e, u]
        }

        function u(n, u) {
            i = n, e();
            var f = t.callback(n, r);
            return f || (u.stopPropagation ? u.stopPropagation() : u.cancelBubble = !0), f
        }

        function e() {
            var l, c, n;
            r.empty();
            var e = o(),
                s = f(),
                a = function (n) {
                    return function (t) {
                        return u(n, t)
                    }
                },
                h = function (n, u) {
                    var f;
                    n = n < 1 ? 1 : n <= s ? n : s, u = jQuery.extend({
                        text: n,
                        classes: ""
                    }, u || {}), f = n == i ? jQuery("<span class='current'>" + u.text + "</span>") : jQuery("<a>" + u.text + "</a>").bind("click", a(n)).attr("href", t.link_to.replace(/__id__/, n)), u.classes && f.addClass(u.classes), r.append(f)
                };
            if (t.prev_text && (i > 0 || t.prev_show_always) && h(i - 1, {
                    text: t.prev_text,
                    classes: "prev"
                }), e[0] > 0 && t.num_edge_entries > 0) {
                for (l = Math.min(t.num_edge_entries, e[0]), n = 1; n <= l; n++) h(n);
                t.num_edge_entries < e[0] && t.ellipse_text && jQuery("<span>" + t.ellipse_text + "</span>").appendTo(r)
            }
            for (n = e[0] + 1; n <= e[1]; n++) h(n);
            if (e[1] < s && t.num_edge_entries > 0)
                for (s - t.num_edge_entries > e[1] && t.ellipse_text && jQuery("<span>" + t.ellipse_text + "</span>").appendTo(r), c = Math.max(s - t.num_edge_entries, e[1]), n = c + 1; n <= s; n++) h(n);
            t.next_text && (i < s || t.next_show_always) && h(i + 1, {
                text: t.next_text,
                classes: "next"
            })
        }
        var i = t.current_page,
            r;
        n = !n || n < 0 ? 1 : n, t.items_per_page = !t.items_per_page || t.items_per_page < 0 ? 1 : t.items_per_page, r = jQuery(this), this.selectPage = function (n) {
            u(n)
        }, this.prevPage = function () {
            return i > 0 ? (u(i - 1), !0) : !1
        }, this.nextPage = function () {
            return i < f() - 1 ? (u(i + 1), !0) : !1
        }, t.tatal_count > 0 ? (e(), t.load_callback && t.callback(i, this)) : $(this).addClass("PageNoData").html("暂时没有数据存在!")
    })
}