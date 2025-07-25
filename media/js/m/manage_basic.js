/*! (c) FunnyMonkey under Copyright Reserved */
(e => {
    "use strict";
    e.I18nHelper = function(t) {
        const a = {
            en_US: "en"
        };
        let n = null,
            s = {},
            l = null;
        this.init = async () => {
            const e = async () => {
                const e = await t.helper.dao.call("langvars");
                e && e.language && (n = e.language, s = e.vars, l = e.dir)
            };
            return new Promise((async t => {
                await e();
                let a = 0;
                if (s && 0 !== Object.keys(s).length) t();
                else {
                    const n = setInterval((async () => {
                        await e(), s && 0 !== Object.keys(s).length && (clearInterval(n), t()), a >= 5e3 && (clearInterval(n), t()), a += 500
                    }), 500)
                }
            }))
        }, this.getLanguage = () => n, this.isRtl = () => "rtl" === l, this.getUILanguage = () => {
            let t = e.api.i18n.getUILanguage();
            return a[t.replace("-", "_")] ? a[t.replace("-", "_")] : t.replace("-", "_")
        }, this.getDefaultLanguage = () => e.opts.manifest.default_locale, this.getLocaleSortCollator = () => {
            try {
                return new Intl.Collator(e.api.i18n.getUILanguage(), {
                    sensitivity: "base"
                })
            } catch (e) {
                return new Intl.Collator("zh-CN", {
                    sensitivity: "base"
                })
            }
        }, this.getLocaleDate = e => ("number" == typeof e && (e = new Date(e)), e.toLocaleDateString([this.getUILanguage(), this.getDefaultLanguage()], {
            year: "numeric",
            month: "2-digit",
            day: "2-digit"
        })), this.parseHtml = t => {
            e(t).find("[" + e.attr.i18n + "]").forEach((t => {
                let a = null;
                const n = e(t).attr(e.attr.i18n);
                if (n) {
                    let s = [];
                    const l = e(t).attr(e.attr.i18nReplaces);
                    l && (s = l.split(",")), a = this.get(n, s)
                }
                a ? (e(t).removeAttr(e.attr.i18n), e(t).removeAttr(e.attr.i18nReplaces), e(t).html(a)) : e(t).remove()
            }))
        }, this.get = (t, a = [], n = !1) => {
            let l = "";
            const i = s[t];
            return i && i.message && (l = i.message, l = l.replace(/\{browserName\}/gi, e.browserName), a && a.length > 0 && a.forEach(((e, t) => {
                l = l.replace(new RegExp("\\{" + (t + 1) + "\\}"), e)
            })), l = l.replace(/\[b\](.*)\[\/b\]/, "<strong>$1</strong>"), l = l.replace(/\[a\](.*)\[\/a\]/, "<a href='#'>$1</a>"), l = l.replace(/\[em\](.*)\[\/em\]/, "<em>$1</em>")), n && (l = l.replace(/'/g, "&#x27;")), l
        }
    }, e.StyleHelper = function(t) {
        const a = () => {
            const t = e(document);
            let a = null;
            return a = 0 === t.find("head").length() ? t.find("body") : t.find("head"), a
        };
        this.addStylesheets = e => new Promise((t => {
            const n = a();
            this.readCss(e, n).then((() => {
                t()
            }))
        })), this.addStylesheetsByContent = (t, n, s = null) => {
            null == s && (s = a()), e.cl && e.cl.page && e.cl.page.style && e.attr && e.attr.name ? (s.find("style." + e.cl.page.style + "[" + e.attr.name + "='" + n + "']").remove(), s.append("<style class='" + e.cl.page.style + "' " + e.attr.name + "='" + n + "'>" + t + "</style>")) : s.append("<style>" + t + "</style>")
        }, this.readCss = (e, t = null) => new Promise(((a, n) => {
            this.readCssContent(e).then((e => {
                for (let a in e) this.addStylesheetsByContent(e[a], a, t);
                a()
            })).catch((() => {
                a()
            }))
        })), this.readCssContent = t => new Promise(((a, n) => {
            let s = 0,
                l = {};
            t.forEach((n => {
                e.fetch(e.api.runtime.getURL("media/css/" + n + ".css")).then((e => {
                    e.text().then((e => {
                        l[n] = e, s++, s >= t.length && a(l)
                    }))
                })).catch((e => {
                    a(l)
                }))
            }))
        }))
    }, e.DaoHelper = function(t) {
        const a = [{
                name: "youtube",
                alias: "yt"
            }, {
                name: "coupon",
                alias: "c"
            }, {
                name: "utility",
                alias: "u"
            }],
            n = {
                yt: {
                    videoPlaySpeed: 1,
                    commentTable: !0,
                    themeProgressBar: !0,
                    speedControl: !0,
                    markOrRemoveAd: !0,
                    theme: "light",
                    videoLoop: !1
                },
                c: {},
                u: {}
            };
        let s = {};
        this.getDefaults = () => n, this.init = () => new Promise((e => {
            Promise.all([l()]).then(e)
        })).catch((() => {})), this.call = async (t, a = {}, n = 0) => {
            let s = !1;
            a.type = t;
            let l = await e.api.runtime.sendMessage(a).catch((t => {
                t && ("" + t).includes("Could not establish connection") ? s = !0 : e.isDev
            }));
            return s && n < 50 && (await e.delay(100), l = await this.call(t, a, n + 1)), l
        };
        const l = () => new Promise((t => {
            null == e.api.runtime.id && t();
            const n = a.map((e => e.name)),
                l = {},
                i = n.length;
            let r = 0;
            n.forEach((a => {
                e.api.storage.local.get([a], (e => {
                    l[a] = e[a] || {}, ++r === i && (s = l, t())
                }))
            }))
        }));
        this.getData = (e, t = !1) => {
            let l = e;
            "string" == typeof l && (l = [l]);
            let i = {};
            if (l.forEach((e => {
                    const l = e.split("/")[0],
                        r = e.split("/")[1];
                    let o = null,
                        c = !1;
                    const h = (e => {
                        const t = a.find((t => t.alias === e));
                        return t ? t.name : null
                    })(l);
                    h && s[h] && void 0 !== s[h][r] ? o = s[h][r] : c = !0, c && t && void 0 !== n[l] && void 0 !== n[l][r] && (o = n[l][r]), i[r] = o
                })), "string" == typeof e) {
                const t = e.split("/")[1];
                i = i[t]
            }
            return i
        }, this.setDataByKey = (e, t) => {
            const a = {};
            return a[e] = t, this.setData(a)
        }, this.setData = t => new Promise((n => {
            l().then((() => {
                Object.keys(t).forEach((e => {
                    const n = e.split("/")[0],
                        l = e.split("/")[1],
                        i = t[e],
                        r = a.find((e => e.alias === n));
                    r && (s[r.name][l] = i)
                }));
                try {
                    e.api.storage.local.set({
                        utility: s.utility,
                        coupon: s.coupon,
                        youtube: s.youtube
                    }, (() => {
                        const t = e.api.runtime.lastError;
                        t && t.message, n()
                    }))
                } catch (e) {
                    n()
                }
            }))
        }))
    }
})(jsu);
