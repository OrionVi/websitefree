! function(e) {
    var t = {};

    function r(o) {
        if (t[o]) return t[o].exports;
        var n = t[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(n.exports, n, n.exports, r), n.l = !0, n.exports
    }
    r.m = e, r.c = t, r.d = function(e, t, o) {
        r.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: o
        })
    }, r.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, r.t = function(e, t) {
        if (1 & t && (e = r(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if (r.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var n in e) r.d(o, n, function(t) {
                return e[t]
            }.bind(null, n));
        return o
    }, r.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return r.d(t, "a", t), t
    }, r.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, r.p = "", r(r.s = 32)
}({
    32: function(e, t) {
        function r() {
            var e = document.querySelectorAll(".header--row.hide-on-mobile.is_sticky"),
                t = document.querySelectorAll(".header--row.hide-on-desktop.is_sticky");
            (e.length > 0 || t.length > 0) && (! function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    r = document.querySelector(".sticky-header-placeholder"),
                    o = document.querySelector(".hfg_header"),
                    n = document.querySelector(".neve-transparent-header");
                null === r && null === n && ((r = document.createElement("div")).classList.add("sticky-header-placeholder"), o.parentNode.insertBefore(r, o.nextSibling));
                !e && r && r.classList.add("hide-on-mobile", "hide-on-tablet");
                !t && r && r.classList.add("hide-on-desktop");
                e && o.classList.add("has-sticky-rows--mobile");
                t && o.classList.add("has-sticky-rows--desktop");
                null !== r && (r.style.height = o.offsetHeight + "px")
            }(t.length > 0, e.length > 0), o(document.querySelector(".hfg_header"), document.querySelector("header.header")))
        }

        function o(e, t) {
            new IntersectionObserver((function(t) {
                if (!0 === t[0].isIntersecting) return e.classList.remove("is-stuck"), !1;
                e.classList.add("is-stuck")
            }), {
                rootMargin: "20px 0px 25px 0px"
            }).observe(t)
        }

        function n() {
            document.querySelectorAll(".footer--row.is_sticky").length > 0 && (! function() {
                var e = document.querySelector(".sticky-footer-placeholder"),
                    t = document.querySelector(".hfg_footer");
                null === e && ((e = document.createElement("div")).classList.add("sticky-footer-placeholder"), t.parentNode.insertBefore(e, t.nextSibling));
                t.classList.add("has-sticky-rows"), e.style.height = t.offsetHeight + "px"
            }(), o(document.querySelector(".hfg_footer"), document.querySelector("footer")))
        }
        var i;
        window.addEventListener("load", (function() {
            r(), n()
        })), window.addEventListener("selective-refresh-content-rendered", (function(e) {
            if ("hfg_header_layout_partial" === e.detail) {
                var t = document.querySelector(".sticky-header-placeholder"),
                    o = document.querySelector(".hfg_header");
                t && t.remove(), o.classList.remove("has-sticky-rows--mobile", "has-sticky-rows--desktop"), r()
            }
            if ("hfg_footer_layout_partial" === e.detail) {
                var i = document.querySelector(".hfg_footer"),
                    c = document.querySelector(".sticky-footer-placeholder");
                c && c.remove(), i.classList.remove("has-sticky-rows"), n()
            }
        })), window.addEventListener("resize", (function() {
            clearTimeout(i), i = setTimeout((function() {
                r(), n()
            }), 500)
        }))
    }
});