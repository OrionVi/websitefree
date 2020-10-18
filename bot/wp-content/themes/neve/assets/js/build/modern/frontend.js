! function() {
    "use strict";
    var e, t = function(e, t) {
            for (var n = 0; n < e.length; n++) t(e[n])
        },
        n = e => {
            var t = e.split("#");
            return t.length > 1 ? t[0] : e
        },
        r = (e, t, n) => {
            for (var r = e instanceof NodeList ? e : [e], o = 0; o < r.length; o++) r[o] && r[o].addEventListener(t, n)
        },
        o = (e, t) => {
            l(e, t, "toggle")
        },
        i = (e, t) => {
            l(e, t, "add")
        },
        a = (e, t) => {
            l(e, t, "remove")
        },
        l = (e, t, n) => {
            for (var r = t.split(" "), o = e instanceof NodeList ? e : [e], i = 0; i < o.length; i++) o[i] && o[i].classList[n].apply(o[i].classList, r)
        },
        d = null,
        c = null,
        s = 2,
        u = () => !("enabled" !== NeveProperties.masonry || NeveProperties.masonryColumns < 2) && (null !== (c = document.querySelector(".nv-index-posts .posts-wrapper")) && void imagesLoaded(c, () => {
            d = new Masonry(c, {
                itemSelector: "article.layout-grid",
                columnWidth: "article.layout-grid",
                percentPosition: !0
            })
        })),
        v = () => "enabled" === NeveProperties.infiniteScroll && (null !== document.querySelector(".nv-index-posts .posts-wrapper") && void
            function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .5,
                    r = new IntersectionObserver(e => {
                        e[0].intersectionRatio <= n || t()
                    });
                r.observe(e)
            }(document.querySelector(".infinite-scroll-trigger"), () => {
                if (parent.wp.customize) return parent.wp.customize.requestChangesetUpdate().then(() => {
                    p()
                }), !1;
                p()
            })),
        p = () => {
            var e = document.querySelector(".infinite-scroll-trigger");
            if (null === e) return !1;
            if (document.querySelector(".nv-loader").style.display = "block", s > NeveProperties.infiniteScrollMaxPages) return e.parentNode.removeChild(e), document.querySelector(".nv-loader").style.display = "none", !1;
            var n, r, o, i, a = document.querySelector(".nv-index-posts .posts-wrapper"),
                l = m(NeveProperties.infiniteScrollEndpoint + s);
            s++, n = l, r = e => {
                if ("enabled" !== NeveProperties.masonry) a.innerHTML += JSON.parse(e);
                else {
                    var n = document.createElement("div");
                    n.innerHTML = JSON.parse(e), t(n.children, e => {
                        c.append(e), d.appended(e)
                    })
                }
            }, o = NeveProperties.infiniteScrollQuery, (i = new XMLHttpRequest).onload = () => {
                4 === i.readyState && 200 === i.status && r(i.response)
            }, i.onerror = e => {
                console.error(e)
            }, i.open("POST", n, !0), i.setRequestHeader("Content-Type", "application/json; charset=UTF-8"), i.send(o)
        },
        m = e => void 0 === wp.customize ? e : (e += "?customize_changeset_uuid=" + wp.customize.settings.changeset.uuid + "&customize_autosaved=on", "undefined" == typeof _wpCustomizeSettings ? e : e += "&customize_preview_nonce=" + _wpCustomizeSettings.nonce.preview),
        y = () => {
            var r;
            e = window.location.href, g(),
                function() {
                    var r = document.querySelectorAll(".nv-nav-wrap a");
                    if (0 === r.length) return !1;
                    t(r, t => {
                        t.addEventListener("click", t => {
                            var r = t.target.getAttribute("href");
                            if (null === r) return !1;
                            n(r) === n(e) && window.HFG.toggleMenuSidebar(!1)
                        })
                    })
                }(), f(), h(), w(), !0 === /(Trident|MSIE|Edge)/.test(window.navigator.userAgent) && (r = document.querySelectorAll('.header--row[data-show-on="desktop"] .sub-menu'), t(r, e => {
                    var t = e.parentNode;
                    t.addEventListener("mouseenter", () => {
                        i(e, "dropdown-open")
                    }), t.addEventListener("mouseleave", () => {
                        a(e, "dropdown-open")
                    })
                })), window.HFG.initSearch = function() {
                    h(), f()
                }
        },
        g = () => {
            var e, n, {
                    isRTL: r
                } = NeveProperties,
                o = document.querySelectorAll(".sub-menu");
            if (0 === o.length) return !1;
            var i = window.innerWidth;
            t(o, t => {
                var o = t.getBoundingClientRect(),
                    a = o.left;
                a < 0 && (e = r ? "auto" : 0, n = r ? "-100%" : "auto", t.style.right = n, t.style.left = e), a + o.width >= i && (n = r ? 0 : "100%", e = "auto", t.style.right = n, t.style.left = e)
            })
        };

    function f() {
        var e = document.querySelectorAll(".caret-wrap");
        t(e, e => {
            e.addEventListener("click", t => {
                t.preventDefault(), t.stopPropagation();
                var n = e.parentNode.parentNode.querySelector(".sub-menu");
                o(e, "dropdown-open"), o(n, "dropdown-open"), S(document.querySelectorAll(".dropdown-open"), "dropdown-open")
            })
        })
    }

    function h() {
        var e = document.querySelectorAll(".nv-nav-search"),
            n = document.querySelectorAll(".menu-item-nav-search"),
            r = document.querySelectorAll(".close-responsive-search");
        t(n, e => {
            e.addEventListener("click", t => {
                t.preventDefault(), t.stopPropagation(), o(e, "active"), e.querySelector(".search-field").focus(), window.innerWidth <= 960 || S(e, "active")
            })
        }), t(e, e => {
            e.addEventListener("click", e => {
                e.stopPropagation()
            })
        }), t(r, e => {
            e.addEventListener("click", e => {
                e.preventDefault(), t(n, e => {
                    a(e, "active")
                });
                var r = document.querySelector(".nav-clickaway-overlay");
                null !== r && r.parentNode.removeChild(r)
            })
        })
    }

    function w() {
        var e = document.querySelectorAll(".header--row .nv-nav-cart");
        0 !== e.length && t(e, e => {
            e.getBoundingClientRect().left < 0 && (e.style.left = 0)
        })
    }

    function S(e, t) {
        var n = document.querySelector(".nav-clickaway-overlay");
        null !== n && n.parentNode.removeChild(n), n = document.createElement("div"), i(n, "nav-clickaway-overlay");
        var r = document.querySelector("header.header");
        r.parentNode.insertBefore(n, r), n.addEventListener("click", () => {
            a(e, t), n.parentNode.removeChild(n)
        })
    }
    window.addEventListener("resize", w);
    var b, q = function() {
        this.options = {
            menuToggleDuration: 300
        }, this.init()
    };

    function L() {
        window.HFG = new q, (() => {
            if (null === document.querySelector(".blog.nv-index-posts")) return !1;
            u(), v()
        })(), y()
    }

    function N() {
        g()
    }
    q.prototype.init = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!1 === e) {
            var t = document.querySelectorAll(".close-sidebar-panel .navbar-toggle");
            r(t, "click", () => {
                this.toggleMenuSidebar(!1)
            })
        }
        var n = document.querySelectorAll(".menu-mobile-toggle");
        r(n, "click", () => {
            this.toggleMenuSidebar(!0)
        });
        var o = document.querySelector(".header-menu-sidebar-overlay");
        r(o, "click", function() {
            this.toggleMenuSidebar(!1)
        }.bind(this))
    }, q.prototype.toggleMenuSidebar = function(e) {
        var t = document.querySelectorAll(".menu-mobile-toggle");
        if (a(document.body, "hiding-header-menu-sidebar"), !NeveProperties.isCustomize && document.body.classList.contains("is-menu-sidebar") || !1 === e) {
            var n = document.querySelector(".nav-clickaway-overlay");
            null !== n && n.parentNode.removeChild(n), i(document.body, "hiding-header-menu-sidebar"), a(document.body, "is-menu-sidebar"), a(t, "is-active"), setTimeout(function() {
                a(document.body, "hiding-header-menu-sidebar")
            }.bind(this), 1e3)
        } else i(document.body, "is-menu-sidebar"), i(t, "is-active")
    }, window.addEventListener("load", () => {
        L()
    }), window.addEventListener("resize", () => {
        clearTimeout(b), b = setTimeout(N, 500)
    })
}();