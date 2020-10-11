(window.webpackJsonp = window.webpackJsonp || []).push([
    [7], {
        310: function(t, e, n) {
            var content = n(326);
            "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(14).default)("4683a252", content, !0, {
                sourceMap: !1
            })
        },
        325: function(t, e, n) {
            "use strict";
            var d = n(310);
            n.n(d).a
        },
        326: function(t, e, n) {
            (e = n(13)(!1)).push([t.i, ".index[data-v-44df5d60]{display:flex;flex-direction:column}.index .background[data-v-44df5d60]{position:absolute;height:100vh;left:0;right:0;z-index:-1;overflow:hidden;background-image:url(/img/backgrounds/horizontal.svg);background-position:50%;background-repeat:no-repeat;background-size:cover}.index .intro[data-v-44df5d60]{display:flex;flex-direction:row;align-items:center;justify-content:space-evenly;height:725px;padding:0 100px;z-index:2}.index .intro .text[data-v-44df5d60]{display:flex;flex-direction:column;justify-content:center;width:30%;height:500px}.index .intro .text .title[data-v-44df5d60]{font-size:70px;line-height:75px}.index .intro .text .description[data-v-44df5d60]{font-size:30px;line-height:35px;opacity:.9;margin:15px 0 25px}.index .intro .text .description .link[data-v-44df5d60]{font-size:inherit;color:var(--blue)}.index .intro .text .button[data-v-44df5d60]{width:200px;font-size:25px}.index .intro .logo .image[data-v-44df5d60]{height:400px}.index .wave[data-v-44df5d60]{z-index:2;transform:translateY(5px)}.index .reasons[data-v-44df5d60]{display:flex;flex-direction:row;flex-wrap:wrap;background:var(--blue);justify-content:space-evenly;padding-bottom:100px;z-index:2}.index .reasons .reason[data-v-44df5d60]{display:flex;flex-direction:column;width:200px;align-items:center;margin:5px 25px}.index .reasons .reason .icon[data-v-44df5d60]{font-size:45px}.index .reasons .reason .text[data-v-44df5d60]{display:flex;flex-direction:column}.index .reasons .reason .text .title[data-v-44df5d60]{font-weight:700;font-size:25px;text-align:center;margin:10px 0 5px}.index .reasons .reason .text .description[data-v-44df5d60]{font-weight:400;font-size:15px;text-align:center;opacity:.75}.index .premium[data-v-44df5d60]{display:flex;background:var(--transparent);flex-direction:column;align-items:center;padding:75px 0}.index .premium .title[data-v-44df5d60]{font-size:50px;font-weight:700;text-align:center}.index .premium .description[data-v-44df5d60]{font-size:20px;line-height:25px;margin-top:10px;width:700px;opacity:.9;text-align:center}.index .premium .button[data-v-44df5d60]{margin-top:25px}@media only screen and (max-width:1500px){.index .intro[data-v-44df5d60]{padding:0}}@media only screen and (max-width:1250px){.index .intro[data-v-44df5d60]{height:500px}.index .intro .text[data-v-44df5d60]{width:40%}.index .intro .text .title[data-v-44df5d60]{font-size:55px;line-height:60px}.index .intro .text .button[data-v-44df5d60]{width:150px;font-size:20px;margin:25px 0}.index .intro .text .description[data-v-44df5d60]{font-size:25px;line-height:30px}.index .intro .logo .image[data-v-44df5d60]{height:300px}.index .reasons .reason[data-v-44df5d60]{margin:25px}}@media only screen and (max-width:1000px){.index .reasons[data-v-44df5d60]{padding:50px 0 100px}}@media only screen and (max-width:800px){.index .intro[data-v-44df5d60]{flex-direction:column-reverse;height:auto}.index .intro .text[data-v-44df5d60]{align-items:center;height:auto;padding:25px 50px;width:auto}.index .intro .text .description[data-v-44df5d60],.index .intro .text .title[data-v-44df5d60]{text-align:center}.index .intro .logo .image[data-v-44df5d60]{height:250px}.index .premium[data-v-44df5d60]{padding:75px 50px}.index .premium .title[data-v-44df5d60]{font-size:35px}.index .premium .description[data-v-44df5d60]{width:100%;font-size:17px}}@media only screen and (max-width:500px){.index .logo[data-v-44df5d60]{display:none}}@media screen and (max-width:1500px) and (min-width:1250px) and (max-height:900px){.index .intro[data-v-44df5d60]{height:650px}}@media screen and (max-width:1250px) and (min-width:1000px) and (max-height:750px){.index .intro[data-v-44df5d60]{height:500px}}", ""]), t.exports = e
        },
        342: function(t, e, n) {
            "use strict";
            n.r(e);
            var d = {
                    head: function() {
                        return {
                            title: "Groovy - The Best Discord Music Bot",
                            meta: [{
                                hid: "og:title",
                                property: "og:title",
                                content: "Groovy - The Best Discord Music Bot"
                            }],
                            link: [{
                                rel: "canonical",
                                href: "https://groovy.bot"
                            }]
                        }
                    },
                    methods: {
                        getPremiumTrigger: function() {
                            dataLayer.push({
                                event: "groovy_button-clicked",
                                gCategory: "g-button",
                                gAction: "premium_landing_page_get",
                                gNonInteraction: !1
                            })
                        }
                    }
                },
                o = (n(325), n(7)),
                component = Object(o.a)(d, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "index"
                    }, [n("div", {
                        staticClass: "background"
                    }), t._v(" "), n("div", {
                        staticClass: "intro"
                    }, [n("div", {
                        staticClass: "text"
                    }, [n("h1", {
                        staticClass: "title"
                    }, [t._v("\n        The best music bot for Discord.\n      ")]), t._v(" "), n("h2", {
                        staticClass: "description"
                    }, [t._v("\n        Groovy is the easiest way to play music in your server.\n      ")]), t._v(" "), n("nuxt-link", {
                        staticClass: "btn rounded purple-average white-text huge animated button",
                        attrs: {
                            to: "/invite"
                        }
                    }, [t._v("\n        Add to Discord\n      ")])], 1), t._v(" "), t._m(0)]), t._v(" "), n("div", {
                        staticClass: "wave"
                    }, [n("svg", {
                        attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 1920 250"
                        }
                    }, [n("path", {
                        attrs: {
                            fill: "#78a4fa",
                            d: "M1920.63,26.94l-.13,305.7H.5V41.24c108.29,13,349.38,59.16,557.91,59.14,266.94,0,386.89-70.07,804.78-93.51C1688.37-11.37,1882.84,14.06,1920.63,26.94Z"
                        }
                    })])]), t._v(" "), n("div", {
                        staticClass: "reasons"
                    }, [n("div", {
                        staticClass: "reason"
                    }, [n("fa", {
                        staticClass: "icon",
                        attrs: {
                            icon: "bolt"
                        }
                    }), t._v(" "), t._m(1)], 1), t._v(" "), n("div", {
                        staticClass: "reason"
                    }, [n("fa", {
                        staticClass: "icon",
                        attrs: {
                            icon: "user-check"
                        }
                    }), t._v(" "), t._m(2)], 1), t._v(" "), n("div", {
                        staticClass: "reason"
                    }, [n("fa", {
                        staticClass: "icon",
                        attrs: {
                            icon: "server"
                        }
                    }), t._v(" "), t._m(3)], 1), t._v(" "), n("div", {
                        staticClass: "reason"
                    }, [n("fa", {
                        staticClass: "icon",
                        attrs: {
                            icon: "list-ul"
                        }
                    }), t._v(" "), t._m(4)], 1)]), t._v(" "), n("div", {
                        staticClass: "premium"
                    }, [n("h2", {
                        staticClass: "title"
                    }, [t._v("\n      Want more than that?\n    ")]), t._v(" "), n("p", {
                        staticClass: "description"
                    }, [t._v("\n      Consider subscribing to one of our Premium plans in order to be able to use volume control, audio effects and more!\n    ")]), t._v(" "), n("nuxt-link", {
                        staticClass: "btn rounded purple-average white-text huge animated button",
                        attrs: {
                            to: "/premium"
                        },
                        on: {
                            click: function(e) {
                                return t.getPremiumTrigger()
                            }
                        }
                    }, [t._v("\n      Get Premium\n    ")])], 1)])
                }), [function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "logo"
                    }, [e("img", {
                        staticClass: "image",
                        attrs: {
                            src: "/img/logos/rounded.svg",
                            alt: "Groovy's logo",
                            draggable: "false"
                        }
                    })])
                }, function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "text"
                    }, [e("h2", {
                        staticClass: "title"
                    }, [this._v("\n          Stable\n        ")]), this._v(" "), e("p", {
                        staticClass: "description"
                    }, [this._v("\n          Groovy will always be there to play music for you.\n        ")])])
                }, function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "text"
                    }, [e("h2", {
                        staticClass: "title"
                    }, [this._v("\n          Easy to Use\n        ")]), this._v(" "), e("p", {
                        staticClass: "description"
                    }, [this._v("\n          No setup required. It only takes one command to get music playing.\n        ")])])
                }, function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "text"
                    }, [e("h2", {
                        staticClass: "title"
                    }, [this._v("\n          Lag Free\n        ")]), this._v(" "), e("p", {
                        staticClass: "description"
                    }, [this._v("\n          We ensure that there is always enough capacity for every server to get the highest quality possible.\n        ")])])
                }, function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "text"
                    }, [e("h2", {
                        staticClass: "title"
                    }, [this._v("\n          Feature-rich\n        ")]), this._v(" "), e("p", {
                        staticClass: "description"
                    }, [this._v("\n          Groovy supports more sites than any other music bot and has a wide range of commands.\n        ")])])
                }], !1, null, "44df5d60", null);
            e.default = component.exports
        }
    }
]);