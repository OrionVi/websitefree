(window.webpackJsonp = window.webpackJsonp || []).push([
    [8], {
        304: function(t, e, r) {
            var content = r(314);
            "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, r(14).default)("1a9b7b1a", content, !0, {
                sourceMap: !1
            })
        },
        313: function(t, e, r) {
            "use strict";
            var o = r(304);
            r.n(o).a
        },
        314: function(t, e, r) {
            (e = r(13)(!1)).push([t.i, ".invite[data-v-18fe856c],.invite .wrapper[data-v-18fe856c]{display:flex;flex-direction:column;justify-content:center;align-items:center}.invite .wrapper .title[data-v-18fe856c]{font-size:50px}.invite .wrapper .description[data-v-18fe856c]{font-size:20px;opacity:.75;margin:10px 25px 20px;text-align:center;max-width:800px}.invite .wrapper .url[data-v-18fe856c]{background:var(--grey-dark);box-shadow:var(--shadow-all);border-radius:var(--radius-medium);padding:15px;font-size:25px;cursor:pointer}@media only screen and (max-width:1000px){.invite .wrapper .title[data-v-18fe856c]{font-size:35px}.invite .wrapper .description[data-v-18fe856c]{font-size:15px;max-width:600px}.invite .wrapper .url[data-v-18fe856c]{font-size:20px;padding:10px;margin:10px}}@media only screen and (max-width:500px){.invite .wrapper .url[data-v-18fe856c]{font-size:15px}}", ""]), t.exports = e
        },
        331: function(t, e, r) {
            "use strict";
            r.r(e);
            r(78), r(34), r(30), r(17), r(66), r(112);
            var o = r(45),
                n = (r(26), r(4)),
                c = r(147);

            function d(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(object);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, r)
                }
                return e
            }

            function l(t) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? d(Object(source), !0).forEach((function(e) {
                        Object(o.a)(t, e, source[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : d(Object(source)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                    }))
                }
                return t
            }
            var v = {
                    prod: "234395307759108106",
                    "prod-2": "368424172730187786",
                    "prod-3": "287378523843198976",
                    patreon: "368424172730187786",
                    staging: "582362839864573958",
                    local: "505914069132378112",
                    steve: "234388536382586883"
                },
                f = {
                    components: {
                        loader: c.a
                    },
                    head: function() {
                        return {
                            title: "Add Groovy to your Server",
                            meta: [{
                                hid: "robots",
                                name: "robots",
                                content: "noindex"
                            }, {
                                hid: "description",
                                name: "description",
                                content: "Groovy is the easiest way to play music in your server. Invite it now!"
                            }, {
                                hid: "og:title",
                                property: "og:title",
                                content: "Add Groovy to your Server"
                            }, {
                                hid: "og:url",
                                property: "og:url",
                                content: "https://groovy.bot/invite"
                            }, {
                                hid: "og:description",
                                property: "og:description",
                                content: "Groovy is the easiest way to play music in your server. Invite it now!"
                            }],
                            link: [{
                                rel: "canonical",
                                href: "https://groovy.bot/invite"
                            }]
                        }
                    },
                    data: function() {
                        return {
                            url: null,
                            loaded: !1
                        }
                    },
                    fetch: function(t) {
                        return Object(n.a)(regeneratorRuntime.mark((function e() {
                            var r, o, n, c, d, f, y, h, w;
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (r = t.redirect, o = t.route, n = t.app, c = t.from, t.store, t.req, d = {
                                                redirect: void 0 === c ? "/" : c.fullPath
                                            }, n.$storage.setCookie("state", d, {
                                                expires: new Date(Date.now() + 18e5)
                                            }), f = {
                                                scope: "bot",
                                                permissions: "8",
                                                client_id: void 0 !== o.query.bot ? v[o.query.bot] : v.prod
                                            }, y = null, f.client_id === v.prod && (f.scope = "bot identify guilds email", y = {
                                                redirect_uri: n.$env.GROOVY_REDIRECT_URL,
                                                response_type: "code"
                                            }), h = null, h = l(null !== y ? l({}, y) : {}, f), void 0 === o.query.guildId) {
                                            e.next = 18;
                                            break
                                        }
                                        if (h.guild_id = o.query.guildId, !n.$auth.isLoggedIn()) {
                                            e.next = 18;
                                            break
                                        }
                                        return e.next = 13, n.$auth.getSelfGuilds().then((function(t) {
                                            return t.find((function(t) {
                                                return t.id === o.query.guildId
                                            }))
                                        }));
                                    case 13:
                                        if (void 0 !== (w = e.sent)) {
                                            e.next = 16;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 16:
                                        if (32 == (32 & w.permissions) || 8 == (8 & w.permissions)) {
                                            e.next = 18;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 18:
                                        return e.prev = 18, e.abrupt("return", r("https://discordapp.com/oauth2/authorize", h));
                                    case 22:
                                        e.prev = 22, e.t0 = e.catch(18);
                                    case 24:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [18, 22]
                            ])
                        })))()
                    },
                    mounted: function() {
                        var t = this;
                        this.$nextTick((function() {
                            t.url = "".concat(window.location.protocol, "//").concat(window.location.hostname).concat(window.location.port ? ":" + window.location.port : "", "/invite?guildId=").concat(t.$route.query.guildId).concat(void 0 !== t.$route.query.bot ? "&bot=" + t.$route.query.bot : ""), t.loaded = !0
                        }))
                    },
                    methods: {
                        copy: function() {
                            var t = this;
                            dataLayer.push({
                                event: "groovy_button-clicked",
                                gCategory: "g-button",
                                gAction: "invite_copy",
                                gNonInteraction: !1
                            }), navigator.permissions.query({
                                name: "clipboard-write"
                            }).then((function(e) {
                                if ("granted" === e.state || "prompt" === e.state) {
                                    var r = t.$store;
                                    navigator.clipboard.writeText(t.url).then((function() {
                                        r.commit("util/addToast", {
                                            description: "We've copied an invite link for Groovy to your clipboard!"
                                        })
                                    }), (function() {
                                        r.commit("util/addToast", {
                                            description: "We couldn't copy the link to your clipboard! I guess you'll just have to do it yourself... "
                                        })
                                    }))
                                }
                            }))
                        }
                    }
                },
                y = (r(313), r(7)),
                component = Object(y.a)(f, (function() {
                    var t = this,
                        e = t.$createElement,
                        r = t._self._c || e;
                    return r("div", {
                        staticClass: "invite"
                    }, [t.loaded ? r("div", {
                        staticClass: "wrapper"
                    }, [r("h1", {
                        staticClass: "title"
                    }, [t._v("\n      Aw man!\n    ")]), t._v(" "), r("p", {
                        staticClass: "description"
                    }, [t._v("\n      It doesn't look like you have the permissions needed to add Groovy to that server! Copy the link below by clicking on it and send it to an admin on the server.\n    ")]), t._v(" "), r("p", {
                        staticClass: "url",
                        on: {
                            click: function(e) {
                                return t.copy()
                            }
                        }
                    }, [t._v("\n      " + t._s(t.url) + "\n    ")])]) : r("loader", {
                        attrs: {
                            size: "big"
                        }
                    })], 1)
                }), [], !1, null, "18fe856c", null);
            e.default = component.exports
        }
    }
]);