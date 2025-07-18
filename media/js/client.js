/*! (c) FunnyMonkey under Copyright Reserved */
(t => {
    "use strict";
    t.DaoHelper = function(e) {
        const n = [{
                name: "youtube",
                alias: "yt"
            }, {
                name: "coupon",
                alias: "c"
            }, {
                name: "utility",
                alias: "u"
            }],
            o = {
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
        let a = {};
        this.getDefaults = () => o, this.init = () => new Promise((t => {
            Promise.all([i()]).then(t)
        })).catch((() => {})), this.call = async (e, n = {}, o = 0) => {
            let a = !1;
            n.type = e;
            let i = await t.api.runtime.sendMessage(n).catch((e => {
                e && ("" + e).includes("Could not establish connection") ? a = !0 : t.isDev
            }));
            return a && o < 50 && (await t.delay(100), i = await this.call(e, n, o + 1)), i
        };
        const i = () => new Promise((e => {
            null == t.api.runtime.id && e();
            const o = n.map((t => t.name)),
                i = {},
                r = o.length;
            let s = 0;
            o.forEach((n => {
                t.api.storage.local.get([n], (t => {
                    i[n] = t[n] || {}, ++s === r && (a = i, e())
                }))
            }))
        }));
        this.getData = (t, e = !1) => {
            let i = t;
            "string" == typeof i && (i = [i]);
            let r = {};
            if (i.forEach((t => {
                    const i = t.split("/")[0],
                        s = t.split("/")[1];
                    let c = null,
                        d = !1;
                    const l = (t => {
                        const e = n.find((e => e.alias === t));
                        return e ? e.name : null
                    })(i);
                    l && a[l] && void 0 !== a[l][s] ? c = a[l][s] : d = !0, d && e && void 0 !== o[i] && void 0 !== o[i][s] && (c = o[i][s]), r[s] = c
                })), "string" == typeof t) {
                const e = t.split("/")[1];
                r = r[e]
            }
            return r
        }, this.setDataByKey = (t, e) => {
            const n = {};
            return n[t] = e, this.setData(n)
        }, this.setData = e => new Promise((o => {
            i().then((() => {
                Object.keys(e).forEach((t => {
                    const o = t.split("/")[0],
                        i = t.split("/")[1],
                        r = e[t],
                        s = n.find((t => t.alias === o));
                    s && (a[s.name][i] = r)
                }));
                try {
                    t.api.storage.local.set({
                        utility: a.utility,
                        coupon: a.coupon,
                        youtube: a.youtube
                    }, (() => {
                        const e = t.api.runtime.lastError;
                        e && e.message, o()
                    }))
                } catch (t) {
                    o()
                }
            }))
        }))
    }, t.FileHelper = function(e) {
        this.readContent = (e, n) => (e.endsWith("/") || (e += "/"), new Promise(((o, a) => {
            let i = 0,
                r = {};
            n.forEach((a => {
                t.fetch(t.api.runtime.getURL(e + a.name + "." + a.ext)).then((t => {
                    t.text().then((t => {
                        r[a.name] = t, i++, i >= n.length && o(r)
                    }))
                })).catch((t => {
                    o({})
                }))
            }))
        })))
    }, t.I18nHelper = function(e) {
        const n = {
            en_US: "en"
        };
        let o = null,
            a = {},
            i = null;
        this.init = async () => {
            const t = async () => {
                const t = await e.helper.dao.call("langvars");
                t && t.language && (o = t.language, a = t.vars, i = t.dir)
            };
            return new Promise((async e => {
                await t();
                let n = 0;
                if (a && 0 !== Object.keys(a).length) e();
                else {
                    const o = setInterval((async () => {
                        await t(), a && 0 !== Object.keys(a).length && (clearInterval(o), e()), n >= 5e3 && (clearInterval(o), e()), n += 500
                    }), 500)
                }
            }))
        }, this.getLanguage = () => o, this.isRtl = () => "rtl" === i, this.getUILanguage = () => {
            let e = t.api.i18n.getUILanguage();
            return n[e.replace("-", "_")] ? n[e.replace("-", "_")] : e.replace("-", "_")
        }, this.getDefaultLanguage = () => t.opts.manifest.default_locale, this.getLocaleSortCollator = () => {
            try {
                return new Intl.Collator(t.api.i18n.getUILanguage(), {
                    sensitivity: "base"
                })
            } catch (t) {
                return new Intl.Collator("zh-CN", {
                    sensitivity: "base"
                })
            }
        }, this.getLocaleDate = t => ("number" == typeof t && (t = new Date(t)), t.toLocaleDateString([this.getUILanguage(), this.getDefaultLanguage()], {
            year: "numeric",
            month: "2-digit",
            day: "2-digit"
        })), this.parseHtml = e => {
            t(e).find("[" + t.attr.i18n + "]").forEach((e => {
                let n = null;
                const o = t(e).attr(t.attr.i18n);
                if (o) {
                    let a = [];
                    const i = t(e).attr(t.attr.i18nReplaces);
                    i && (a = i.split(",")), n = this.get(o, a)
                }
                n ? (t(e).removeAttr(t.attr.i18n), t(e).removeAttr(t.attr.i18nReplaces), t(e).html(n)) : t(e).remove()
            }))
        }, this.get = (e, n = [], o = !1) => {
            let i = "";
            const r = a[e];
            return r && r.message && (i = r.message, i = i.replace(/\{browserName\}/gi, t.browserName), n && n.length > 0 && n.forEach(((t, e) => {
                i = i.replace(new RegExp("\\{" + (e + 1) + "\\}"), t)
            })), i = i.replace(/\[b\](.*)\[\/b\]/, "<strong>$1</strong>"), i = i.replace(/\[a\](.*)\[\/a\]/, "<a href='#'>$1</a>"), i = i.replace(/\[em\](.*)\[\/em\]/, "<em>$1</em>")), o && (i = i.replace(/'/g, "&#x27;")), i
        }
    }, t.StyleHelper = function(e) {
        const n = () => {
            const e = t(document);
            let n = null;
            return n = 0 === e.find("head").length() ? e.find("body") : e.find("head"), n
        };
        this.addStylesheets = t => new Promise((e => {
            const o = n();
            this.readCss(t, o).then((() => {
                e()
            }))
        })), this.addStylesheetsByContent = (e, o, a = null) => {
            null == a && (a = n()), t.cl && t.cl.page && t.cl.page.style && t.attr && t.attr.name ? (a.find("style." + t.cl.page.style + "[" + t.attr.name + "='" + o + "']").remove(), a.append("<style class='" + t.cl.page.style + "' " + t.attr.name + "='" + o + "'>" + e + "</style>")) : a.append("<style>" + e + "</style>")
        }, this.readCss = (t, e = null) => new Promise(((n, o) => {
            this.readCssContent(t).then((t => {
                for (let n in t) this.addStylesheetsByContent(t[n], n, e);
                n()
            })).catch((() => {
                n()
            }))
        })), this.readCssContent = e => new Promise(((n, o) => {
            let a = 0,
                i = {};
            e.forEach((o => {
                t.fetch(t.api.runtime.getURL("media/css/" + o + ".css")).then((t => {
                    t.text().then((t => {
                        i[o] = t, a++, a >= e.length && n(i)
                    }))
                })).catch((t => {
                    n(i)
                }))
            }))
        }))
    }, t.RecommendHelper = function(e) {
        const n = 432e5,
            o = document.createElement("div");
        o.className = "recommend-sc-dialog-x";
        this.run = function() {
            return new Promise((o => {
                const a = e.helper.dao.getData(t.opts.storageKeys.youtube.recommendData, null) ?? {
                    time: 0,
                    num: 0,
                    gap: n
                };
                if (a.num < 1e5) {
                    const t = (new Date).getTime();
                    t - a.time > a.gap && (e.helper.styleHelper.addStylesheets(["recommend"]), this.showRecommendDialog(a, t))
                }
                o()
            }))
        }, this.showRecommendDialog = function(t, e) {
            setTimeout((() => {
                "ins" !== document.documentElement.getAttribute("d-extension-cgg-c") && (this.generateHtml(t, e), setTimeout((() => {
                    o.remove()
                }), 15e3))
            }), 3e3)
        }, this.generateHtml = function(a, i) {
            a.time = i, a.num += 1, e.helper.dao.setDataByKey(t.opts.storageKeys.youtube.recommendData, a);
            const r = document.createElement("div");
            r.className = "recommend-sc-dialog-x-message";
            const s = document.createElement("div");
            s.className = "recommend-sc-dialog-x-message-item", s.textContent = e.helper.i18n.get("cgg_dialog_title");
            const c = document.createElement("div");
            c.className = "recommend-sc-dialog-x-message-item", c.textContent = e.helper.i18n.get("cgg_dialog_content"), r.appendChild(s), r.appendChild(c);
            const d = document.createElement("div");
            d.className = "recommend-sc-dialog-x-btns";
            const l = document.createElement("img");
            l.src = t.api.runtime.getURL("media/img/coupon-applied.gif"), l.style.width = "95%", l.style.display = "block", l.style.margin = "10px auto", o.appendChild(r), o.appendChild(l), o.appendChild(d);
            const h = document.createElement("span"),
                m = document.createElement("span");
            h.className = "recommend-sc-dialog-x-btn recommend-sc-dialog-x-dismiss-btn", m.className = "recommend-sc-dialog-x-btn recommend-sc-dialog-x-try-it-btn", h.innerHTML = e.helper.i18n.get("cgg_dialog_btn_dismiss"), m.innerHTML = e.helper.i18n.get("cgg_dialog_btn_try"), d.appendChild(h), d.appendChild(m), document.body.appendChild(o), h.addEventListener("click", (() => {
                a.gap = n * (.1 * a.num + 1), e.helper.dao.setDataByKey(t.opts.storageKeys.youtube.recommendData, a), o.remove()
            })), m.addEventListener("click", (() => {
                a.gap = 3456e5 * (.1 * a.num + 1), e.helper.dao.setDataByKey(t.opts.storageKeys.youtube.recommendData, a), e.helper.dao.call("openLink", {
                    href: t.opts.website.coupongogoExtension,
                    newTab: !0
                }).then((t => {})), o.remove()
            }))
        }
    }, t.RemoveAdHelper = function(e) {
        this.generateRemoveAdElementId = "removeADHTMLElement_" + Math.ceil(1e8 * Math.random()), this.markADHTMLElement = function() {
            if (document.querySelector(this.generateRemoveAdElementId)) return;
            let t = ["#masthead-ad", "ytd-rich-item-renderer.style-scope.ytd-rich-grid-row #content:has(.ytd-display-ad-renderer)", ".video-ads.ytp-ad-module", "tp-yt-paper-dialog:has(yt-mealbar-promo-renderer)", 'ytd-engagement-panel-section-list-renderer[target-id="engagement-panel-ads"]', "#related #player-ads", "#related ytd-ad-slot-renderer", "ytd-ad-slot-renderer", "yt-mealbar-promo-renderer", 'ytd-popup-container:has(a[href="/premium"])', "ad-slot-renderer", "ytm-companion-ad-renderer"];
            t.forEach(((e, n) => {
                t[n] = `${e} *{text-decoration:line-through!important;text-decoration-thickness:2px!important;}`
            }));
            const e = t.join(" "),
                n = document.createElement("style");
            n.id = this.generateRemoveAdElementId, (document.head || document.body).appendChild(n), n.appendChild(document.createTextNode(e))
        }, this.run = function() {
            return new Promise((n => {
                e.helper.dao.getData(t.opts.storageKeys.youtube.functionState.markOrRemoveAd, e.helper.dao.getDefaults().yt.markOrRemoveAd) ? t.onPageLoad((() => {
                    this.markADHTMLElement(), n()
                })) : n()
            }))
        }
    }, t.ScreenshotHelper = function(t) {
        this.start = function() {
            var t, e = "png",
                n = document.querySelectorAll("h1.title.ytd-video-primary-info-renderer");

            function o() {
                return n.length > 0 && (t = n[0].innerText.trim(), !0)
            }
            0 == o() && (n = document.querySelectorAll("h1.watch-title-container"), 0 == o() && (t = ""));
            var a = document.getElementsByClassName("video-stream")[0],
                i = a.currentTime;
            t += " ";
            let r = Math.floor(i / 60);
            if (i = Math.floor(i - 60 * r), r > 60) {
                let e = Math.floor(r / 60);
                r -= 60 * e, t += e + "-"
            }
            t += r + "-" + i, t += " screenshot.png";
            var s = document.createElement("canvas");
            s.width = a.videoWidth, s.height = a.videoHeight, s.getContext("2d").drawImage(a, 0, 0, s.width, s.height);
            var c = document.createElement("a");

            function d(t) {
                c.href = URL.createObjectURL(t), c.click()
            }
            c.download = t, s.toBlob((async function(t) {
                d(t)
            }), "image/" + e)
        }
    }, t.SpeedControlHelper = function(e) {
        this.currentSpeed = 1, this.activeAnimationId = null, this.run = function() {
            return new Promise((n => {
                if (!e.helper.dao.getData(t.opts.storageKeys.youtube.functionState.speedControl, e.helper.dao.getDefaults().yt.speedControl)) return void n();
                const o = e.helper.dao.getData(t.opts.storageKeys.youtube.videoPlaySpeed, e.helper.dao.getDefaults().yt.videoPlaySpeed);
                this.currentSpeed = parseFloat(o), this.insertStyle(), this.genrate(), this.setVideoRate(o), this.videoObserver(), n()
            }))
        }, this.insertStyle = function() {
            e.helper.styleHelper.addStylesheetsByContent("\n                .SpeedControl_Extension_Btn_X{\n                    width: 4em !important; \n                    float: left; \n                    text-align: center !important;\n                    border-radius: 0.5em;\n                    font-size:13px;\n                }\n                .SpeedControl_Extension_Btn_X:hover{\n                    color:red;\n                    font-weight: bold;\n                }\n            \n                #youtube-extension-text-box {\n                    position: absolute!important;\n                    margin: auto!important;\n                    top: 0px!important;\n                    right: 0px!important;\n                    bottom: 0px!important;\n                    left: 0px!important;\n                    border-radius: 20px!important;\n                    font-size: 30px!important;\n                    background-color: #000!important;\n                    color: #f3f3f3!important;\n                    z-index: 99999999999999999!important;\n                    opacity: 0.8!important;\n                    width: 80px!important;\n                    height: 80px!important;\n                    line-height: 80px!important;\n                    text-align: center!important;\n                    padding: 0px!important;\n                }\n            \n                .SpeedControl_Extension_Speed-Options {\n                    position: absolute!important;\n                    background: black!important;\n                    color: white!important;\n                    border-radius: 5px!important;\n                    display: none;\n                    bottom: calc(100% + 10px)!important;\n                    width:48px!important;\n                }\n                .SpeedControl_Extension_Speed-Options >.SpeedControl_Extension_Speed-Option-Item {\n                    cursor: pointer!important;\n                    height: 25px!important;\n                    line-height: 25px!important;\n                    font-size:12px!important;\n                    text-align: center!important;\n                }\n                .SpeedControl_Extension_Speed-Options >.SpeedControl_Extension_Speed-Option-Item-Active,\n                .SpeedControl_Extension_Speed-Options >.SpeedControl_Extension_Speed-Option-Item:hover {\n                    color: red!important;\n                    font-weight:bold!important;\n                    font-size:14px!important;\n                }\n            ", "Speed-control")
        }, this.genrate = async function() {
            const e = "SpeedControl_Extension_Btn_X",
                n = document.createElement("div");
            n.className = "ytp-button", n.id = e;
            const o = document.createElement("span");
            o.textContent = this.currentSpeed + "×", n.appendChild(o);
            const a = await t.waitForElement("#player-container-outer .html5-video-player");
            if (a) {
                const t = a.querySelector(".ytp-right-controls"),
                    o = document.querySelector("#" + e);
                t && !o && (t.prepend(n), this.genrateOptions(n))
            }
        }, this.genrateOptions = function(t) {
            const e = document.createElement("div");
            e.classList.add("SpeedControl_Extension_Speed-Options"), t.appendChild(e);
            ["0.5", "0.75", "1.0", "1.25", "1.5", "2.0", "3.0"].forEach((t => {
                const n = document.createElement("div");
                n.className = "SpeedControl_Extension_Speed-Option-Item", n.textContent = `${t}x`, n.dataset.speed = t, parseFloat(t) === this.currentSpeed && n.classList.add("SpeedControl_Extension_Speed-Option-Item-Active"), e.appendChild(n)
            }));
            let n = !1;
            t.addEventListener("mouseenter", (() => {
                n = !0, e.style.display = "block"
            })), t.addEventListener("mouseleave", (() => {
                n = !1, setTimeout((() => {
                    n || (e.style.display = "none")
                }), 100)
            })), e.addEventListener("mouseenter", (() => {
                n = !0
            })), e.addEventListener("mouseleave", (() => {
                n = !1, e.style.display = "none"
            })), e.addEventListener("click", (n => {
                e.style.display = "none";
                const o = parseFloat(n.target.dataset.speed);
                this.speedDisplayText(o + "×"), this.setVideoRate(o), this.currentSpeed = o, this.updateVideoPlaySpeedStorage(o), t.querySelector("span").textContent = o + "×", e.querySelectorAll(".SpeedControl_Extension_Speed-Option-Item").forEach((t => {
                    t.classList.remove("SpeedControl_Extension_Speed-Option-Item-Active")
                })), n.target.classList.add("SpeedControl_Extension_Speed-Option-Item-Active")
            }))
        }, this.updateVideoPlaySpeedStorage = function(n) {
            e.helper.dao.setDataByKey(t.opts.storageKeys.youtube.videoPlaySpeed, n)
        }, this.speedDisplayText = function(t) {
            let e = "youtube-extension-text-box",
                n = document.getElementById(e);
            if (n) n.textContent = t;
            else {
                document.getElementById("movie_player").insertAdjacentHTML("afterbegin", `<div id="${e}">${t}</div>`), n = document.getElementById(e)
            }
            n.style.display = "block", n.style.opacity = .8, n.style.filter = "alpha(opacity=80)", this.startFadeoutAnimation(n)
        }, this.startFadeoutAnimation = function(t, e = .9, n = 1500) {
            let o = e;
            const a = performance.now();
            this.activeAnimationId && cancelAnimationFrame(this.activeAnimationId);
            const i = r => {
                const s = r - a,
                    c = Math.min(s / n, 1);
                o = e * (1 - c), t.style.opacity = o, t.style.filter = `alpha(opacity=${100*o})`, c < 1 ? this.activeAnimationId = requestAnimationFrame(i) : (t.style.display = "none", this.activeAnimationId = null)
            };
            this.activeAnimationId = requestAnimationFrame(i)
        }, this.setVideoRate = function(t) {
            const e = document.querySelector("video");
            e && (e.playbackRate = t)
        }, this.videoObserver = function() {
            const t = setInterval((() => {
                const e = document.querySelector("video");
                if (e) {
                    clearInterval(t);
                    new MutationObserver((t => {
                        for (const n of t) "attributes" === n.type && "src" === n.attributeName && (e.playbackRate = this.currentSpeed)
                    })).observe(e, {
                        attributes: !0
                    })
                }
            }), 1500)
        }
    }, t.TableHelper = function(e) {
        this.run = function() {
            return new Promise((n => {
                e.helper.dao.getData(t.opts.storageKeys.youtube.functionState.commentTable, e.helper.dao.getDefaults().yt.commentTable) ? (this.script(), n()) : n()
            }))
        }, this.script = function() {
            // @license               MIT
            if ("undefined" != typeof trustedTypes && null === trustedTypes.defaultPolicy) {
                let t = t => t;
                trustedTypes.createPolicy("default", {
                    createHTML: t,
                    createScriptURL: t,
                    createScript: t
                })
            }
            const t = "undefined" != typeof trustedTypes && trustedTypes.defaultPolicy || {
                createHTML: t => t
            };

            function e(e) {
                return t.createHTML(e)
            }
            let n = null;
            try {
                document.createElement("div").innerHTML = e("1")
            } catch (t) {
                n = t
            }
            n && n();
            const o = t => {
                    if ("undefined" != typeof trustedTypes && null === trustedTypes.defaultPolicy) {
                        let i = t => t;
                        trustedTypes.createPolicy("default", {
                            createHTML: i,
                            createScriptURL: i,
                            createScript: i
                        })
                    }
                    const e = "undefined" != typeof trustedTypes && trustedTypes.defaultPolicy || {
                        createHTML: t => t
                    };

                    function n(t) {
                        return e.createHTML(t)
                    }
                    let o = null;
                    try {
                        document.createElement("div").innerHTML = n("1")
                    } catch (r) {
                        o = r
                    }
                    o && o();
                    try {
                        let s = 0;
                        if ("undefined" == typeof CustomElementRegistry) return;
                        if (CustomElementRegistry.prototype.define000) return;
                        if ("function" != typeof CustomElementRegistry.prototype.define) return;
                        const c = HTMLElement.prototype.constructor,
                            d = (t, e) => c.prototype.querySelector.call(t, e),
                            l = Object.getOwnPropertyDescriptors(DocumentFragment.prototype);
                        Object.defineProperties(DocumentFragment.prototype, {
                            replaceChildren000: l.replaceChildren
                        });
                        const h = Object.getOwnPropertyDescriptors(Node.prototype);
                        Object.defineProperties(Node.prototype, {
                            appendChild000: h.appendChild,
                            insertBefore000: h.insertBefore
                        });
                        const m = Object.getOwnPropertyDescriptors(Element.prototype);
                        Object.defineProperties(Element.prototype, {
                            setAttribute000: m.setAttribute,
                            getAttribute000: m.getAttribute,
                            hasAttribute000: m.hasAttribute,
                            removeAttribute000: m.removeAttribute,
                            querySelector000: m.querySelector,
                            replaceChildren000: m.replaceChildren
                        }), Element.prototype.setAttribute111 = function(t, e) {
                            e = `${e}`, this.getAttribute000(t) !== e && this.setAttribute000(t, e)
                        }, Element.prototype.incAttribute111 = function(t) {
                            let e = +this.getAttribute000(t) || 0;
                            return e = e > 1e9 ? e + 1 : 9, this.setAttribute000(t, `${e}`), e
                        }, Element.prototype.assignChildern111 = function(t, e, n) {
                            let o = [];
                            for (let t = this.firstChild; t instanceof Node; t = t.nextSibling) t !== e && o.push(t);
                            if (qt = !0, e.parentNode === this) {
                                let a = new DocumentFragment;
                                o.length > 0 && a.replaceChildren000(...o), t && t.length > 0 && (a.replaceChildren000(...t), this.insertBefore000(a, e)), n && n.length > 0 && (a.replaceChildren000(...n), this.appendChild000(a)), a.replaceChildren000(), a = null
                            } else t || (t = []), n || (n = []), this.replaceChildren000(...t, e, ...n);
                            if (qt = !1, o.length > 0)
                                for (const t of o) t instanceof Element && !1 === t.isConnected && t.remove();
                            o.length = 0, o = null
                        };
                        const u = !0;
                        (() => {
                            let t = "undefined" != typeof unsafeWindow ? unsafeWindow : this instanceof Window ? this : window;
                            if (!t._ytConfigHacks) {
                                let e = 4;
                                class n extends Set {
                                    add(t) {
                                        e <= 0 || "function" == typeof t && super.add(t)
                                    }
                                }
                                let o = (async () => {})().constructor,
                                    a = t._ytConfigHacks = new n,
                                    i = () => {
                                        let e = t.ytcsi.originalYtcsi;
                                        e && (t.ytcsi = e, i = null)
                                    },
                                    r = null,
                                    s = () => {
                                        if (e >= 1) {
                                            let n = (t.yt || 0).config_ || (t.ytcfg || 0).data_ || 0;
                                            if ("string" == typeof n.INNERTUBE_API_KEY && "object" == typeof n.EXPERIMENT_FLAGS)
                                                for (let t of (--e <= 0 && i && i(), r = !0, a)) t(n)
                                        }
                                    },
                                    c = 1,
                                    d = e => {
                                        if (e = e || t.ytcsi) return t.ytcsi = new Proxy(e, {
                                            get: (t, e, n) => "originalYtcsi" === e ? t : (s(), r && --c <= 0 && i && i(), t[e])
                                        }), !0
                                    };
                                d() || Object.defineProperty(t, "ytcsi", {
                                    get() {},
                                    set: e => (e && (delete t.ytcsi, d(e)), !0),
                                    enumerable: !1,
                                    configurable: !0
                                });
                                let {
                                    addEventListener: l,
                                    removeEventListener: h
                                } = Document.prototype;

                                function m(e) {
                                    s(), e && t.removeEventListener("DOMContentLoaded", m, !1)
                                }
                                new o((t => {
                                    if ("undefined" != typeof AbortSignal) l.call(document, "yt-page-data-fetched", t, {
                                        once: !0
                                    }), l.call(document, "yt-navigate-finish", t, {
                                        once: !0
                                    }), l.call(document, "spfdone", t, {
                                        once: !0
                                    });
                                    else {
                                        let e = () => {
                                            t(), h.call(document, "yt-page-data-fetched", e, !1), h.call(document, "yt-navigate-finish", e, !1), h.call(document, "spfdone", e, !1)
                                        };
                                        l.call(document, "yt-page-data-fetched", e, !1), l.call(document, "yt-navigate-finish", e, !1), l.call(document, "spfdone", e, !1)
                                    }
                                })).then(s), new o((t => {
                                    if ("undefined" != typeof AbortSignal) l.call(document, "yt-action", t, {
                                        once: !0,
                                        capture: !0
                                    });
                                    else {
                                        let e = () => {
                                            t(), h.call(document, "yt-action", e, !0)
                                        };
                                        l.call(document, "yt-action", e, !0)
                                    }
                                })).then(s), o.resolve().then((() => {
                                    "loading" !== document.readyState ? m() : t.addEventListener("DOMContentLoaded", m, !1)
                                }))
                            }
                        })();
                        let p = !1;
                        window._ytConfigHacks.add((t => {
                            if (p) return;
                            p = !0;
                            const e = t.EXPERIMENT_FLAGS || 0,
                                n = t.EXPERIMENTS_FORCED_FLAGS || 0;
                            for (const t of [e, n]) t && (t.web_watch_chat_hide_button_killswitch = !1, t.web_watch_theater_chat = !1, t.suppress_error_204_logging = !0, t.kevlar_watch_grid = !1, u && (t.enable_shadydom_free_scoped_node_methods = !1, t.enable_shadydom_free_scoped_query_methods = !1, t.enable_shadydom_free_scoped_readonly_properties_batch_one = !1, t.enable_shadydom_free_parent_node = !1, t.enable_shadydom_free_children = !1, t.enable_shadydom_free_last_child = !1))
                        }));
                        const y = "function" == typeof WeakRef ? t => t ? new WeakRef(t) : null : t => t || null,
                            f = t => t && t.deref ? t.deref() : t,
                            b = (async () => {})().constructor,
                            g = t => new b((e => setTimeout(e, t))),
                            v = t => t ? t.polymerController || t.inst || t || 0 : t || 0,
                            w = setTimeout.bind(window),
                            A = ((t, e) => {
                                const n = (n, o) => {
                                    t = n, e = o
                                };
                                return class extends b {
                                    constructor(o = n) {
                                        super(o), o === n && (this.resolve = t, this.reject = e)
                                    }
                                }
                            })();
                        var a = void 0 !== a && a.version >= 2 ? a : (() => {
                            const t = "undefined" != typeof self ? self : "undefined" != typeof global ? global : this;
                            let e = !0;
                            if (! function n(o) {
                                    return o ? e = !1 : t.postMessage && !t.importScripts && t.addEventListener ? (t.addEventListener("message", n, !1), t.postMessage("$$$", "*"), t.removeEventListener("message", n, !1), e) : void 0
                                }()) return;
                            const n = (async () => {})().constructor;
                            let o = null;
                            const a = new Map,
                                {
                                    floor: i,
                                    random: r
                                } = Math;
                            let s;
                            do {
                                s = `$$nextBrowserTick$$${(r()+8).toString().slice(2)}$$`
                            } while (s in t);
                            const c = s,
                                d = c.length + 9;
                            t[c] = 1, t.addEventListener("message", (t => {
                                if (0 !== a.size) {
                                    const e = (t || 0).data;
                                    if ("string" == typeof e && e.length === d && t.source === (t.target || 1)) {
                                        const t = a.get(e);
                                        t && ("p" === e[0] && (o = null), a.delete(e), t())
                                    }
                                }
                            }), !1);
                            const l = (e = a) => {
                                if (e === a) {
                                    if (o) return o;
                                    let e;
                                    do {
                                        e = `p${c}${i(314159265359*r()+314159265359).toString(36)}`
                                    } while (a.has(e));
                                    return o = new n((t => {
                                        a.set(e, t)
                                    })), t.postMessage(e, "*"), e = null, o
                                } {
                                    let n;
                                    do {
                                        n = `f${c}${i(314159265359*r()+314159265359).toString(36)}`
                                    } while (a.has(n));
                                    a.set(n, e), t.postMessage(n, "*")
                                }
                            };
                            return l.version = 2, l
                        })();
                        const x = "function" == typeof IntersectionObserver,
                            E = !x || {
                                capture: !0,
                                passive: !0
                            };
                        class C {
                            constructor(t) {
                                this.list = t, this.flag = 0
                            }
                            makeString() {
                                let t = 1,
                                    e = "",
                                    n = 0;
                                for (; this.flag >= t;) this.flag & t && (e += this.list[n]), n++, t <<= 1;
                                return e
                            }
                        }
                        const S = new C("icp"),
                            k = new WeakMap,
                            L = new Proxy({
                                related: null,
                                comments: null,
                                infoExpander: null
                            }, {
                                get: (t, e) => f(t[e]),
                                set(t, e, n) {
                                    if (n) {
                                        let o = k.get(n);
                                        o || (o = y(n), k.set(n, o)), t[e] = o
                                    } else t[e] = null;
                                    return !0
                                }
                            }),
                            _ = () => {
                                const t = L.infoExpander;
                                if (!t) return null;
                                return (t.matches("[tyt-main-info]") ? t : t.querySelector000("[tyt-main-info]")) || null
                            };
                        let I = null,
                            F = "en";
                        const M = {
                                en: {
                                    info: "Info",
                                    videos: "Videos",
                                    playlist: "Playlist"
                                },
                                jp: {
                                    info: "情報",
                                    videos: "動画",
                                    playlist: "再生リスト"
                                },
                                tw: {
                                    info: "資訊",
                                    videos: "影片",
                                    playlist: "播放清單"
                                },
                                cn: {
                                    info: "资讯",
                                    videos: "视频",
                                    playlist: "播放列表"
                                },
                                du: {
                                    info: "Info",
                                    videos: "Videos",
                                    playlist: "Playlist"
                                },
                                fr: {
                                    info: "Info",
                                    videos: "Vidéos",
                                    playlist: "Playlist"
                                },
                                kr: {
                                    info: "정보",
                                    videos: "동영상",
                                    playlist: "재생목록"
                                },
                                ru: {
                                    info: "Описание",
                                    videos: "Видео",
                                    playlist: "Плейлист"
                                }
                            },
                            N = '<path d="M80 27H12A12 12 90 0 0 0 39v42a12 12 90 0 0 12 12h12v20a2 2 90 0 0 3.4 2L47 93h33a12 \n\t\t\t12 90 0 0 12-12V39a12 12 90 0 0-12-12zM20 47h26a2 2 90 1 1 0 4H20a2 2 90 1 1 0-4zm52 28H20a2 2 90 1 1 0-4h52a2 2 90 \n\t\t\t1 1 0 4zm0-12H20a2 2 90 1 1 0-4h52a2 2 90 1 1 0 4zm36-58H40a12 12 90 0 0-12 12v6h52c9 0 16 7 16 16v42h0v4l7 7a2 2 90 \n\t\t\t0 0 3-1V71h2a12 12 90 0 0 12-12V17a12 12 90 0 0-12-12z"/>'.trim(),
                            z = '<path d="M89 10c0-4-3-7-7-7H7c-4 0-7 3-7 7v70c0 4 3 7 7 7h75c4 0 7-3 7-7V10zm-62 2h13v10H27V12zm-9 \n\t\t\t66H9V68h9v10zm0-56H9V12h9v10zm22 56H27V68h13v10zm-3-25V36c0-2 2-3 4-2l12 8c2 1 2 4 0 5l-12 8c-2 1-4 0-4-2zm25 \n\t\t\t25H49V68h13v10zm0-56H49V12h13v10zm18 56h-9V68h9v10zm0-56h-9V12h9v10z"/>'.trim(),
                            T = '<path d="M30 0C13.3 0 0 13.3 0 30s13.3 30 30 30 30-13.3 30-30S46.7 0 30 0zm6.2 46.6c-1.5.5-2.6 \n\t\t\t1-3.6 1.3a10.9 10.9 0 0 1-3.3.5c-1.7 0-3.3-.5-4.3-1.4a4.68 4.68 0 0 1-1.6-3.6c0-.4.2-1 .2-1.5a20.9 20.9 90 0 1 \n\t\t\t.3-2l2-6.8c.1-.7.3-1.3.4-1.9a8.2 8.2 90 0 0 .3-1.6c0-.8-.3-1.4-.7-1.8s-1-.5-2-.5a4.53 4.53 0 0 0-1.6.3c-.5.2-1 \n\t\t\t.2-1.3.4l.6-2.1c1.2-.5 2.4-1 3.5-1.3s2.3-.6 3.3-.6c1.9 0 3.3.6 4.3 1.3s1.5 2.1 1.5 3.5c0 .3 0 .9-.1 1.6a10.4 10.4 \n\t\t\t90 0 1-.4 2.2l-1.9 6.7c-.2.5-.2 1.1-.4 1.8s-.2 1.3-.2 1.6c0 .9.2 1.6.6 1.9s1.1.5 2.1.5a6.1 6.1 90 0 0 1.5-.3 9 9 90 \n\t\t\t0 0 1.4-.4l-.6 2.2zm-3.8-35.2a1 1 0 010 8.6 1 1 0 010-8.6z"/>'.trim(),
                            D = '<path d="M0 3h12v2H0zm0 4h12v2H0zm0 4h8v2H0zm16 0V7h-2v4h-4v2h4v4h2v-4h4v-2z"/>'.trim();

                        function R(t) {
                            return M[F][t] || M.en[t] || ""
                        }
                        const B = (t, e, n, o, a, i) => `<svg${i?` class=${i}`:""} width="${t}" height="${e}" viewBox="0 0 ${n} ${o}" preserveAspectRatio="xMidYMid meet">${a}</svg>`;
                        let P = 0;

                        function H() {
                            const t = `${B(16,16,90,90,z)}<span>${R("videos")}</span>`,
                                e = `${B(16,16,60,60,T)}<span>${R("info")}</span>`,
                                n = `${B(16,16,20,20,D)}<span>${R("playlist")}</span>`;
                            let o = '\n\t\t\t\t<paper-ripple class="style-scope yt-icon-button">\n\t\t\t\t\t<div id="background" class="style-scope paper-ripple" style="opacity:0;"></div>\n\t\t\t\t\t<div id="waves" class="style-scope paper-ripple"></div>\n\t\t\t\t</paper-ripple>\n\t\t\t\t',
                                a = '\n\t\t\t<div class="font-size-right">\n\t\t\t<div class="font-size-btn font-size-plus" tyt-di="8rdLQ">\n\t\t\t<svg width="12" height="12" viewbox="0 0 50 50" preserveAspectRatio="xMidYMid meet" \n\t\t\tstroke="currentColor" stroke-width="6" stroke-linecap="round" vector-effect="non-scaling-size">\n\t\t\t\t<path d="M12 25H38M25 12V38"/>\n\t\t\t</svg>\n\t\t\t</div><div class="font-size-btn font-size-minus" tyt-di="8rdLQ">\n\t\t\t<svg width="12" height="12" viewbox="0 0 50 50" preserveAspectRatio="xMidYMid meet"\n\t\t\tstroke="currentColor" stroke-width="6" stroke-linecap="round" vector-effect="non-scaling-size">\n\t\t\t\t<path d="M12 25h26"/>\n\t\t\t</svg>\n\t\t\t</div>\n\t\t\t</div>\n\t\t\t'.replace(/[\r\n]+/g, "");
                            return `\n\t\t\t\t<div id="right-tabs">\n\t\t\t\t\t<tabview-view-pos-thead></tabview-view-pos-thead>\n\t\t\t\t\t<header>\n\t\t\t\t\t\t<div id="material-tabs">\n\t\t\t\t\t\t\t${[`<a id="tab-btn1" tyt-di="q9Kjc" tyt-tab-content="#tab-info" class="tab-btn${1&~P?"":" tab-btn-hidden"}">${e}${o}${a}</a>`,`<a id="tab-btn3" tyt-di="q9Kjc" tyt-tab-content="#tab-comments" class="tab-btn${2&~P?"":" tab-btn-hidden"}">${B(16,16,120,120,N)}<span id="tyt-cm-count"></span>${o}${a}</a>`,`<a id="tab-btn4" tyt-di="q9Kjc" tyt-tab-content="#tab-videos" class="tab-btn${4&~P?"":" tab-btn-hidden"}">${t}${o}${a}</a>`,`<a id="tab-btn5" tyt-di="q9Kjc" tyt-tab-content="#tab-list" class="tab-btn tab-btn-hidden">${n}${o}${a}</a>`].join("")}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</header>\n\t\t\t\t\t<div class="tab-content">\n\t\t\t\t\t\t<div id="tab-info" class="tab-content-cld tab-content-hidden" tyt-hidden userscript-scrollbar-render></div>\n\t\t\t\t\t\t<div id="tab-comments" class="tab-content-cld tab-content-hidden" tyt-hidden userscript-scrollbar-render></div>\n\t\t\t\t\t\t<div id="tab-videos" class="tab-content-cld tab-content-hidden" tyt-hidden userscript-scrollbar-render></div>\n\t\t\t\t\t\t<div id="tab-list" class="tab-content-cld tab-content-hidden" tyt-hidden userscript-scrollbar-render></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t`
                        }

                        function q() {
                            let t = "en";
                            switch (((document || 0).documentElement || 0).lang || "") {
                                case "en":
                                case "en-GB":
                                default:
                                    t = "en";
                                    break;
                                case "de":
                                case "de-DE":
                                    t = "du";
                                    break;
                                case "fr":
                                case "fr-CA":
                                case "fr-FR":
                                    t = "fr";
                                    break;
                                case "zh-Hant":
                                case "zh-Hant-HK":
                                case "zh-Hant-TW":
                                    t = "tw";
                                    break;
                                case "zh-Hans":
                                case "zh-Hans-CN":
                                    t = "cn";
                                    break;
                                case "ja":
                                case "ja-JP":
                                    t = "jp";
                                    break;
                                case "ko":
                                case "ko-KR":
                                    t = "kr";
                                    break;
                                case "ru":
                                case "ru-RU":
                                    t = "ru"
                            }
                            return t
                        }

                        function O() {
                            let t = q();
                            F = M[t] ? t : "en"
                        }
                        const Q = {},
                            G = new Proxy(Q, {
                                get: (t, e) => t[e] || 0,
                                set: (t, e, n) => !0
                            }),
                            j = new Proxy(Q, {
                                get: (t, e) => (t[e] > 1e9 && (t[e] = 9), t[e] = (t[e] || 0) + 1),
                                set: (t, e, n) => !0
                            }),
                            Y = new A,
                            U = new A;
                        let V = !1;
                        const Z = new A,
                            W = new A,
                            J = document.createComment("1"),
                            X = [];
                        new MutationObserver((() => {
                            const t = X.length;
                            for (let e = 0; e < t; e++) X[e]()
                        })).observe(J, {
                            characterData: !0
                        });
                        const $ = function(t) {
                                const e = this.content || this.$.content;
                                this.canToggle = this.shouldUseNumberOfLines && (this.alwaysCollapsed || this.collapsed || !1 === this.isToggled) ? this.alwaysToggleable || this.isToggled || e && e.offsetHeight < e.scrollHeight : this.alwaysToggleable || this.isToggled || e && e.scrollHeight > this.collapsedHeight
                            },
                            K = async t => {
                                if (G.aoChatAttrAsyncLock !== t) return;
                                const e = L.chat,
                                    n = L.flexy;
                                if (e && n) {
                                    const t = e.hasAttribute000("collapsed");
                                    t ? n.setAttribute111("tyt-chat-collapsed", "") : n.removeAttribute000("tyt-chat-collapsed"), n.setAttribute111("tyt-chat", t ? "-" : "+")
                                }
                            }, tt = async t => {
                                if (G.aoPlayListAttrAsyncLock !== t) return;
                                const e = L.playlist,
                                    n = L.flexy;
                                e && n ? e.hasAttribute000("collapsed") ? n.removeAttribute000("tyt-playlist-expanded") : n.setAttribute111("tyt-playlist-expanded", "") : n && n.removeAttribute000("tyt-playlist-expanded")
                            }, et = new MutationObserver((() => {
                                b.resolve(j.aoChatAttrAsyncLock).then(K).catch(console.warn)
                            })), nt = new MutationObserver((() => {
                                b.resolve(j.aoPlayListAttrAsyncLock).then(tt).catch(console.warn)
                            })), ot = new MutationObserver((async t => {
                                const e = L.comments,
                                    n = L.flexy;
                                if (!e) return;
                                let o = !1,
                                    a = !1,
                                    i = !1;
                                for (const n of t) "hidden" === n.attributeName && n.target === e ? o = !0 : "tyt-comments-video-id" === n.attributeName && n.target === e ? a = !0 : "tyt-comments-data-status" === n.attributeName && n.target === e && (i = !0);
                                if (o && (e.hasAttribute000("hidden") || b.resolve(e).then(ee.settingCommentsVideoId).catch(console.warn), b.resolve(j.removeKeepCommentsScrollerLock).then(Tt).catch(console.warn)), (o || a || i) && n) {
                                    const t = +e.getAttribute000("tyt-comments-data-status");
                                    2 === t ? n.setAttribute111("tyt-comment-disabled", "") : 1 === t && n.removeAttribute000("tyt-comment-disabled"), b.resolve(j.checkCommentsShouldBeHiddenLock).then(ee.checkCommentsShouldBeHidden).catch(console.warn);
                                    const o = j.rightTabReadyLock01;
                                    if (await Z.then(), G.rightTabReadyLock01 !== o) return;
                                    if (L.comments !== e) return;
                                    if (!1 === e.isConnected) return;
                                    if (e.closest("#tab-comments")) {
                                        const t = !e.closest("[hidden]");
                                        document.querySelector('[tyt-tab-content="#tab-comments"]').classList.toggle("tab-btn-hidden", !t)
                                    }
                                }
                            })), at = new IntersectionObserver((t => {
                                for (const e of t) {
                                    const t = e.target,
                                        n = v(t);
                                    if (e.isIntersecting && t instanceof c && "function" == typeof n.calculateCanCollapse) {
                                        j.removeKeepCommentsScrollerLock, n.calculateCanCollapse(!0), t.setAttribute111("io-intersected", "");
                                        const e = L.flexy;
                                        e && !e.hasAttribute000("keep-comments-scroller") && e.setAttribute111("keep-comments-scroller", "")
                                    } else t.hasAttribute000("io-intersected") && t.removeAttribute000("io-intersected")
                                }
                            }), {
                                threshold: [0],
                                rootMargin: "32px"
                            });
                        let it = !1,
                            rt = 0;
                        const st = new ResizeObserver((t => {
                                const e = t[t.length - 1],
                                    n = Math.round(e.borderBoxSize.inlineSize);
                                rt !== n && (rt = n, 2 & ~dt ? it = !0 : (it = !1, b.resolve(1).then(ee.fixForTabDisplay)))
                            })),
                            ct = t => {
                                "string" == typeof t && (t = document.querySelector(`a[tyt-tab-content="${t}"]`) || null);
                                const e = L.flexy,
                                    n = document.querySelectorAll("#material-tabs a[tyt-tab-content]");
                                for (const e of n) {
                                    const n = document.querySelector(e.getAttribute000("tyt-tab-content"));
                                    e && n && (e !== t ? (e.classList.remove("active"), n.classList.add("tab-content-hidden"), n.hasAttribute000("tyt-hidden") || n.setAttribute111("tyt-hidden", "")) : (e.classList.add("active"), n.hasAttribute000("tyt-hidden") && n.removeAttribute000("tyt-hidden"), n.classList.remove("tab-content-hidden")))
                                }
                                const o = t ? t.getAttribute000("tyt-tab-content") : "";
                                o && (Nt = Mt = o), "" === e.getAttribute000("tyt-chat") && e.removeAttribute000("tyt-chat"), e.setAttribute111("tyt-tab", o), o && (it = !1, b.resolve(0).then(ee.fixForTabDisplay))
                            };
                        let dt = 0;
                        const lt = (t = 0, e) => {
                            const n = L.flexy;
                            return n ? (1 & e && (t |= 1, n.hasAttribute000("theater") || (t -= 1)), 2 & e && (t |= 2, n.getAttribute000("tyt-tab") || (t -= 2)), 4 & e && (t |= 4, "-" !== n.getAttribute000("tyt-chat") && (t -= 4)), 8 & e && (t |= 8, "+" !== n.getAttribute000("tyt-chat") && (t -= 8)), 16 & e && (t |= 16, n.hasAttribute000("is-two-columns_") || (t -= 16)), 32 & e && (t |= 32, n.hasAttribute000("tyt-egm-panel_") || (t -= 32)), 64 & e && (t |= 64, document.fullscreenElement || (t -= 64)), 128 & e && (t |= 128, n.hasAttribute000("tyt-playlist-expanded") || (t -= 128)), t) : t
                        };

                        function ht() {
                            const t = L.flexy;
                            return t && t.hasAttribute000("theater")
                        }

                        function mt() {
                            if (ht()) {
                                const t = document.querySelector("ytd-watch-flexy #ytd-player button.ytp-size-button");
                                t && t.click()
                            }
                        }

                        function ut() {
                            let t = document.querySelector("ytd-live-chat-frame#chat[collapsed] > .ytd-live-chat-frame#show-hide-button");
                            t && (t = t.querySelector000("div.yt-spec-touch-feedback-shape") || t.querySelector000("ytd-toggle-button-renderer"), t && t.click())
                        }

                        function pt() {
                            let t = document.querySelector("ytd-live-chat-frame#chat:not([collapsed]) > .ytd-live-chat-frame#show-hide-button");
                            t && (t = t.querySelector000("div.yt-spec-touch-feedback-shape") || t.querySelector000("ytd-toggle-button-renderer"), t && t.click())
                        }

                        function yt(t) {
                            if (!t) return;
                            "length" in t || (t = [t]);
                            const e = L.flexy;
                            if (!e) return;
                            let n = [];
                            for (const o of t) {
                                if (!o) continue;
                                let t = o.panelId,
                                    a = o.toHide,
                                    i = o.toShow;
                                if (!0 !== a || i ? !0 !== i || a || n.push({
                                        showEngagementPanelEndpoint: {
                                            panelIdentifier: t
                                        }
                                    }) : n.push({
                                        changeEngagementPanelVisibilityAction: {
                                            targetId: t,
                                            visibility: "ENGAGEMENT_PANEL_VISIBILITY_HIDDEN"
                                        }
                                    }), n.length > 0) {
                                    v(e).resolveCommand({
                                        signalServiceEndpoint: {
                                            signal: "CLIENT_SIGNAL",
                                            actions: n
                                        }
                                    }, {}, !1)
                                }
                                n = null
                            }
                        }

                        function ft() {
                            const t = [];
                            for (const e of document.querySelectorAll("ytd-watch-flexy[flexy][tyt-tab] #panels.ytd-watch-flexy ytd-engagement-panel-section-list-renderer[target-id][visibility]:not([hidden])")) "ENGAGEMENT_PANEL_VISIBILITY_EXPANDED" != e.getAttribute("visibility") || e.closest("[hidden]") || t.push({
                                panelId: e.getAttribute000("target-id"),
                                toHide: !0
                            });
                            yt(t)
                        }

                        function bt() {
                            const t = v(L.playlist);
                            t && "boolean" == typeof t.collapsed && (t.collapsed = !1)
                        }

                        function gt() {
                            const t = v(L.playlist);
                            t && "boolean" == typeof t.collapsed && (t.collapsed = !0)
                        }
                        const vt = function() {
                                "ytd-watch-grid" !== this.is && (this.updatePageMediaQueries(), this.schedulePlayerSizeUpdate_())
                            },
                            wt = new WeakMap,
                            At = document.createElement("noscript"),
                            xt = Symbol(),
                            Et = Symbol(),
                            Ct = Symbol(),
                            St = async function(t) {
                                const e = f(this);
                                if (!e) return;
                                const n = v(e),
                                    o = n[Ct],
                                    a = n.data ? n.data[xt] || 1 : 0;
                                o !== a && (n[Ct] = a > 0 ? n.data[xt] = Date.now() : 0, await b.resolve(), Lt(e, "tyt-data-change-counter"))
                            }, kt = function(t) {
                                const e = f(this);
                                if (!e) return;
                                const n = f(e[Et] || null) || null;
                                if (!n) return;
                                const o = v(e),
                                    a = v(n);
                                if (t) {
                                    let i = !1;
                                    for (const e of t)("tyt-clone-refresh-count" === e.attributeName && e.target === n || "tyt-data-change-counter" === e.attributeName && e.target === n) && (i = !0);
                                    i && a.data && (e.replaceWith(At), o.data = Object.assign({}, a.data), At.replaceWith(e))
                                }
                            }, Lt = (t, e) => {
                                let n = (+t.getAttribute000(e) || 0) + 1;
                                return n > 1e9 && (n = 9), t.setAttribute000(e, n), n
                            }, _t = t => "string" == typeof t && 24 === t.length && /UC[-_a-zA-Z0-9+=.]{22}/.test(t), It = t => {
                                if (null !== t && G.infoFixLock !== t) return;
                                const e = L.infoExpander,
                                    n = (e ? e.parentNode : null) || document.querySelector("#tab-info"),
                                    o = L.flexy;
                                if (!n || !o) return;
                                if (e) {
                                    if (!(e.matches("#tab-info > [class]") || e.matches("#tab-info > [tyt-main-info]"))) return
                                }
                                const a = [...document.querySelectorAll('ytd-watch-metadata.ytd-watch-flexy div[slot="extra-content"] > *, ytd-watch-metadata.ytd-watch-flexy #extra-content > *')].filter((t => "string" == typeof t.is)).map((t => {
                                    const e = t.is;
                                    for (; t instanceof c;) {
                                        const n = [...t.querySelectorAll(e)].filter((t => v(t).data));
                                        if (n.length >= 1) return n[0];
                                        t = t.parentNode
                                    }
                                })).filter((t => !!t && "string" == typeof t.is)).map((t => {
                                    const e = v(t);
                                    return {
                                        data: e.data,
                                        tag: e.is,
                                        elm: t
                                    }
                                }));
                                let i = document.querySelector("noscript#aythl");
                                i || (i = document.createElement("noscript"), i.id = "aythl", qt = !0, o.insertBefore000(i, o.firstChild), qt = !1);
                                const r = i;
                                let s = !1;
                                const d = new Set,
                                    l = n;
                                for (const {
                                        data: t,
                                        tag: e,
                                        elm: n
                                    }
                                    of a) {
                                    let o = wt.get(n);
                                    if (o = o ? f(o) : o, o) o.parentNode !== l && (s = !0);
                                    else {
                                        const t = v(n),
                                            a = t.constructor.prototype,
                                            i = document.createElement(e);
                                        r.appendChild(i), o = i, o[Et] = y(n);
                                        const c = y(o);
                                        if (new MutationObserver(kt.bind(c)).observe(n, {
                                                attributes: !0,
                                                attributeFilter: ["tyt-clone-refresh-count", "tyt-data-change-counter"]
                                            }), n.jy8432 = 1, a instanceof Node || a._dataChanged496 || "function" != typeof a._createPropertyObserver) {
                                            if (!(a instanceof Node) && !a._dataChanged496 && !0 === a.useSignals && v(n).signalProxy) {
                                                const e = t?.signalProxy?.signalCache?.data;
                                                !e || "function" != typeof e.setWithPath || e.setWithPath573 || e.controller573 || (e.controller573 = y(t), e.setWithPath573 = e.setWithPath, e.setWithPath = function() {
                                                    const t = f(this.controller573 || null) || null;
                                                    return t && "function" == typeof t._dataChanged496k && b.resolve(t).then(t._dataChanged496k).catch(console.warn), this.setWithPath573(...arguments)
                                                }, a._dataChanged496 = function() {
                                                    const t = this.hostElement || this;
                                                    t.jy8432 && Lt(t, "tyt-data-change-counter")
                                                }, a._dataChanged496k = t => t._dataChanged496())
                                            }
                                        } else a._dataChanged496 = function() {
                                            const t = this.hostElement || this;
                                            t.jy8432 && Lt(t, "tyt-data-change-counter")
                                        }, a._createPropertyObserver("data", "_dataChanged496", void 0);
                                        a._dataChanged496 || new MutationObserver(St.bind(o[Et])).observe(n, {
                                            attributes: !0,
                                            childList: !0,
                                            subtree: !0
                                        }), wt.set(n, c), s = !0
                                    }
                                    if (!s) {
                                        v(o).data !== t && (s = !0)
                                    }
                                    d.add(o), a.mirrored = o
                                }
                                const h = [...d];
                                if (d.clear(), !s) {
                                    let t = e ? -1 : 0;
                                    for (let n = l.firstChild; n instanceof Node; n = n.nextSibling) {
                                        let o = t < 0 ? e : h[t];
                                        if (t++, n !== o) {
                                            s = !0;
                                            break
                                        }
                                    }
                                    s || t === h.length + 1 || (s = !0)
                                }
                                if (s) {
                                    e ? l.assignChildern111(null, e, h) : l.replaceChildren000(...h);
                                    for (const t of h) {
                                        const e = Lt(t, "tyt-clone-refresh-count"),
                                            n = f(t[Et] || null) || null;
                                        n && n.setAttribute111("tyt-clone-refresh-count", e)
                                    }
                                }
                                h.length = 0, a.length = 0
                            }, Ft = t => {
                                if (G.layoutFixLock !== t) return;
                                const e = document.querySelector("#secondary-inner.style-scope.ytd-watch-flexy > secondary-wrapper");
                                if (e) {
                                    const t = e.parentNode,
                                        n = document.querySelector("#columns.style-scope.ytd-watch-flexy [tyt-chat-container]");
                                    if (t.firstChild !== t.lastChild || n && !n.closest("secondary-wrapper")) {
                                        let o = [],
                                            a = [];
                                        for (let i = t.firstChild; i instanceof Node; i = i.nextSibling)
                                            if (i === n && n);
                                            else if (i === e)
                                            for (let t = e.firstChild; t instanceof Node; t = t.nextSibling) t === n && n || ("right-tabs" === t.id && n && a.push(n), a.push(t));
                                        else o.push(i);
                                        qt = !0, e.replaceChildren000(...o, ...a), qt = !1;
                                        const i = L.chat,
                                            r = v(i);
                                        r && "function" == typeof r.urlChanged && e.contains(i) && ("function" == typeof r.urlChangedAsync12 ? r.urlChanged() : setTimeout((() => r.urlChanged()), 136))
                                    }
                                }
                            };
                        let Mt = "",
                            Nt = "";
                        const zt = new MutationObserver((() => {
                                b.resolve(j.updateEgmPanelsLock).then(Dt).catch(console.warn)
                            })),
                            Tt = async t => {
                                if (G.removeKeepCommentsScrollerLock !== t) return;
                                if (await b.resolve(), G.removeKeepCommentsScrollerLock !== t) return;
                                const e = L.flexy;
                                e && e.removeAttribute000("keep-comments-scroller")
                            }, Dt = async t => {
                                if (t !== G.updateEgmPanelsLock) return;
                                if (await U.then().catch(console.warn), t !== G.updateEgmPanelsLock) return;
                                const e = L.flexy;
                                if (!e) return;
                                let n = [],
                                    o = [],
                                    a = [];
                                for (const t of document.querySelectorAll("[tyt-egm-panel][target-id][visibility]")) {
                                    const e = t.getAttribute000("visibility");
                                    if ("ENGAGEMENT_PANEL_VISIBILITY_HIDDEN" === e || t.closest("[hidden]")) t.hasAttribute000("tyt-visible-at") && (t.removeAttribute000("tyt-visible-at"), o.push(t));
                                    else if ("ENGAGEMENT_PANEL_VISIBILITY_EXPANDED" === e && !t.closest("[hidden]")) {
                                        t.getAttribute000("tyt-visible-at") || (t.setAttribute111("tyt-visible-at", Date.now()), n.push(t)), a.push(t)
                                    }
                                }
                                if (n.length >= 1 && a.length >= 2) {
                                    const t = n[n.length - 1],
                                        e = [];
                                    for (const n of a) n !== t && e.push({
                                        panelId: n.getAttribute000("target-id"),
                                        toHide: !0
                                    });
                                    e.length >= 1 && yt(e)
                                }
                                a.length >= 1 ? e.setAttribute111("tyt-egm-panel_", "") : e.removeAttribute000("tyt-egm-panel_"), n.length = 0, n = null, o.length = 0, o = null, a.length = 0, a = null
                            }, Rt = (t, e) => {
                                for (const n of document.querySelectorAll(t))
                                    if (!n.closest(e)) return n;
                                return null
                            };
                        let Bt = 0;
                        const {
                            handleNavigateFactory: Pt
                        } = (() => {
                            let t = !1;

                            function e(t) {
                                if (1 === arguments.length) {
                                    let e = document.querySelector(`#tab-comments ytd-comments ytd-comment-renderer #header-author a[href*="lc=${t}"]`);
                                    if (e) {
                                        let n = closestFromAnchor.call(e, "ytd-comment-renderer");
                                        if (n && t) return {
                                            lc: t,
                                            commentRendererElm: n
                                        }
                                    }
                                } else if (0 === arguments.length) {
                                    let e = document.querySelector("#tab-comments ytd-comments ytd-comment-renderer > #linked-comment-badge span:not(:empty)");
                                    if (e) {
                                        let n = closestFromAnchor.call(e, "ytd-comment-renderer");
                                        if (n) {
                                            let e = _querySelector.call(n, "#header-author");
                                            if (e) {
                                                let n = _querySelector.call(e, 'a[href*="lc="]');
                                                if (n) {
                                                    let e = n.getAttribute("href") || "",
                                                        o = /[&?]lc=([\w_.-]+)/.exec(e);
                                                    o && (t = o[1])
                                                }
                                            }
                                        }
                                        if (n && t) return {
                                            lc: t,
                                            commentRendererElm: n
                                        }
                                    }
                                }
                                return null
                            }

                            function n(t, n, o) {
                                let a = 0;
                                try {
                                    let i = e(n).commentRendererElm,
                                        r = v(i),
                                        s = e(t).commentRendererElm,
                                        c = v(s);
                                    const d = r.data;
                                    let l = Object.assign({}, o);
                                    d.linkedCommentBadge = null, delete d.linkedCommentBadge;
                                    let h = Object.assign({}, d);
                                    h.linkedCommentBadge = null, delete h.linkedCommentBadge, r.data = Object.assign({}, h), c.data = Object.assign({}, c.data, {
                                        linkedCommentBadge: l
                                    }), a = 1
                                } catch (t) {}
                                return 1 === a
                            }
                            const o = async t => {
                                let e = (t || 0).target || 0;
                                if ("VIDEO" !== e.nodeName && "AUDIO" !== e.nodeName) return;
                                const n = e,
                                    o = Ht.getMediaElement(0),
                                    a = Ht.getMediaElements(2);
                                if (null !== o && a.length > 0)
                                    if (n !== o && !1 === o.paused) isVideoPlaying(o) && b.resolve(n).then((t => !1 === t.paused && t.pause())).catch(console.warn);
                                    else if (n === o) {
                                    for (const t of a)
                                        if (!1 === t.paused) {
                                            b.resolve(t).then((t => !1 === t.paused && t.pause())).catch(console.warn);
                                            break
                                        }
                                } else b.resolve(o).then((t => !1 === t.paused && t.pause())).catch(console.warn)
                            }, a = t => {
                                let o = !1,
                                    a = t ? t.command : null;
                                if (a && (a.commandMetadata || 0).webCommandMetadata && a.watchEndpoint) {
                                    let t = a.watchEndpoint.videoId,
                                        o = a.commandMetadata.webCommandMetadata.url;
                                    if ("string" == typeof t && "string" == typeof o && o.indexOf("lc=") > 0) {
                                        let a = /^\/watch\?v=([\w_-]+)&lc=([\w_.-]+)$/.exec(o);
                                        if (a && a[1] === t) {
                                            let t = e(a[2]),
                                                i = t ? e() : null;
                                            if (t && i) {
                                                if (1 === (t.lc === i.lc || function(t, o) {
                                                        let a = 0;
                                                        try {
                                                            let i = e(o).commentRendererElm,
                                                                r = e(t).commentRendererElm;
                                                            if ("object" == typeof v(i).data.linkedCommentBadge && void 0 === v(r).data.linkedCommentBadge) {
                                                                let e = Object.assign({}, v(i).data.linkedCommentBadge);
                                                                ((e || 0).metadataBadgeRenderer || 0).trackingParams && delete e.metadataBadgeRenderer.trackingParams;
                                                                const s = findContentsRenderer(i),
                                                                    c = findContentsRenderer(r);
                                                                if (s.parent !== c.parent || "YTD-COMMENTS" !== c.parent.nodeName && "YTD-ITEM-SECTION-RENDERER" !== c.parent.nodeName) return !1;
                                                                if (c.index >= 0)
                                                                    if ("YTD-COMMENT-REPLIES-RENDERER" === c.parent.nodeName) n(t, o, e) && (a = 1), a = 1;
                                                                    else {
                                                                        const i = v(c.parent),
                                                                            r = (i.data || 0).contents || 0;
                                                                        i.data = Object.assign({}, i.data, {
                                                                            contents: [].concat([r[c.index]], r.slice(0, c.index), r.slice(c.index + 1))
                                                                        }), n(t, o, e) && (a = 1)
                                                                    }
                                                            }
                                                        } catch (t) {}
                                                        return 1 === a
                                                    }(t.lc, i.lc) ? 1 : 0)) return void Ht.xReplaceState(history.state, o)
                                            }
                                        }
                                    }
                                }
                                if (a && (a.commandMetadata || 0).webCommandMetadata && a.browseEndpoint && _t(a.browseEndpoint.browseId)) o = !0;
                                else if (a && (a.browseEndpoint || a.searchEndpoint) && !a.urlEndpoint && !a.watchEndpoint)
                                    if (a.browseEndpoint && "FEwhat_to_watch" === a.browseEndpoint.browseId) {
                                        const t = Ht.getMediaElement(1);
                                        t && !1 === t.paused && (o = !0)
                                    } else if (a.commandMetadata && a.commandMetadata.webCommandMetadata) {
                                    let t = a.commandMetadata.webCommandMetadata;
                                    t && t.url && t.webPageType && (o = !0)
                                }
                                return o || (a = null), a
                            }, i = () => {
                                if (document.querySelector("ytd-page-manager#page-manager > ytd-browse[page-subtype]")) return !0;
                                const t = [...document.querySelectorAll("#movie_player")].filter((t => !t.closest("[hidden]")))[0];
                                if (t) {
                                    const e = d(t, "video[class], audio[class]");
                                    if (e && e.currentTime > 3 && e.duration - e.currentTime > 3 && !1 === e.paused) return !0
                                }
                                return !1
                            };
                            let r = 0;
                            return {
                                handleNavigateFactory: e => function(n) {
                                    r > 1e9 && (r = 9);
                                    const s = ++r,
                                        c = arguments;
                                    let d = null;
                                    if ((t => {
                                            const e = t ? t.command : null;
                                            if (e) {
                                                if (e && (e.commandMetadata || 0).webCommandMetadata && e.watchEndpoint);
                                                else if (e && (e.commandMetadata || 0).webCommandMetadata && e.browseEndpoint && _t(e.browseEndpoint.browseId));
                                                else if (!e || !e.browseEndpoint && !e.searchEndpoint || e.urlEndpoint || e.watchEndpoint) return !1;
                                                return !!i() && "watch" === I && !!Rt("ytd-watch-flexy #player button.ytp-miniplayer-button.ytp-button", "[hidden]")
                                            }
                                        })(n) && (d = a(n)), !d || !i()) return e.apply(this, c);
                                    const l = document.querySelector("ytd-app"),
                                        h = v(l);
                                    let m = null;
                                    try {
                                        m = h.data.response.currentVideoEndpoint.watchEndpoint || null
                                    } catch (t) {
                                        m = null
                                    }
                                    "object" != typeof m && (m = null);
                                    const u = {
                                        once: !0
                                    };
                                    if (null !== m && !("playlistId" in m)) {
                                        let t = y(m);
                                        const e = 3;
                                        let n = 0;
                                        Object.defineProperty(f(t) || {}, "playlistId", {
                                            get() {
                                                return n++, n === e && delete this.playlistId, "*"
                                            },
                                            set(t) {
                                                delete this.playlistId, this.playlistId = t
                                            },
                                            enumerable: !1,
                                            configurable: !0
                                        });
                                        let o = null,
                                            a = 0;
                                        b.race([new b((t => {
                                            a = setTimeout(t, 4e3)
                                        })), new b((t => {
                                            o = () => {
                                                a > 0 && (clearTimeout(a), a = 0), t()
                                            }, document.addEventListener("yt-page-type-changed", o, u)
                                        }))]).then((() => {
                                            0 !== a && (o && document.removeEventListener("yt-page-type-changed", o, u), a = 0), o = null, n = e - 1;
                                            let i = f(t);
                                            return t = null, i ? i.playlistId : null
                                        })).catch(console.warn)
                                    }
                                    t || (t = !0, document.addEventListener("loadstart", o, !0));
                                    const p = `${d?.commandMetadata?.webCommandMetadata?.url||""}`;
                                    p && p.endsWith("/about") && /\/channel\/UC[-_a-zA-Z0-9+=.]{22}\/about/.test(p) && (async t => {
                                        let e = new A;
                                        const n = () => {
                                            e && e.resolve(), e = null
                                        };
                                        document.addEventListener("yt-navigate-finish", n, !1), await e.then(), e = null, document.removeEventListener("yt-navigate-finish", n, !1), t === r && setTimeout((() => {
                                            const t = [...document.querySelectorAll("ytd-about-channel-renderer")].filter((t => !t.closest("[hidden]")))[0];
                                            let e = !1;
                                            if (t) {
                                                const n = t.closest("ytd-popup-container");
                                                if (n) {
                                                    const t = v(n);
                                                    let o = null;
                                                    try {
                                                        o = t.handleGetOpenedPopupsAction_()
                                                    } catch (t) {}
                                                    o && 0 === o.length && (e = !0)
                                                } else e = !1
                                            } else e = !0;
                                            if (e) {
                                                const t = [...document.querySelectorAll("yt-description-preview-view-model")].filter((t => !t.closest("[hidden]")))[0];
                                                if (t) {
                                                    const e = [...t.querySelectorAll("button")].filter((t => !t.closest("[hidden]") && `${t.textContent}`.trim().length > 0))[0];
                                                    e && e.click()
                                                }
                                            }
                                        }), 80)
                                    })(s), e.apply(this, c)
                                }
                            }
                        })(), Ht = (() => {
                            let t = 0;
                            const e = e => {
                                if (0 === t) {
                                    let e = document.querySelector(".video-stream.html5-main-video") || document.querySelector("#movie_player video, #movie_player audio") || document.querySelector("body video[src], body audio[src]");
                                    e && ("VIDEO" === e.nodeName ? t = 1 : "AUDIO" === e.nodeName && (t = 2))
                                }
                                if (!t) return null;
                                if (1 === t) switch (e) {
                                    case 1:
                                        return "ytd-player#ytd-player video[src]";
                                    case 2:
                                        return 'ytd-browse[role="main"] video[src]';
                                    default:
                                        return "#movie_player video[src]"
                                } else if (2 === t) switch (e) {
                                    case 1:
                                        return "ytd-player#ytd-player audio.video-stream.html5-main-video[src]";
                                    case 2:
                                        return 'ytd-browse[role="main"] audio.video-stream.html5-main-video[src]';
                                    default:
                                        return "#movie_player audio.video-stream.html5-main-video[src]"
                                }
                                return null
                            };
                            return {
                                xReplaceState(t, e) {
                                    try {
                                        history.replaceState(t, "", e)
                                    } catch (t) {}
                                    if (t.endpoint) try {
                                        const n = document.querySelector("ytd-app");
                                        v(n).replaceState(t.endpoint, "", e)
                                    } catch (t) {}
                                },
                                getMediaElement(t) {
                                    let n = e(t) || "";
                                    return n ? document.querySelector(n) : null
                                },
                                getMediaElements(t) {
                                    let n = e(t) || "";
                                    return n ? document.querySelectorAll(n) : []
                                }
                            }
                        })();
                        let qt = !1,
                            Ot = "";
                        const Qt = () => {
                                const t = L.flexy,
                                    e = v(t);
                                return e && "string" == typeof e.videoId ? e.videoId : t && "string" == typeof t.videoId ? t.videoId : ""
                            },
                            Gt = t => {
                                try {
                                    t.updateIsAttributedExpanded()
                                } catch (t) {}
                                try {
                                    t.updateIsFormattedExpanded()
                                } catch (t) {}
                                try {
                                    t.updateTextOnSnippetTypeChange()
                                } catch (t) {}
                                try {
                                    t.updateStyles()
                                } catch (t) {}
                            },
                            jt = t => {
                                t && !t.__$$idncjk8487$$__ && (t.__$$idncjk8487$$__ = !0, t.updateTextOnSnippetTypeChange = function() {}, t.isResetMutation = !0, Gt(t))
                            },
                            Yt = () => {
                                const t = _();
                                if (!t) return;
                                const e = t.querySelector("ytd-text-inline-expander"),
                                    n = v(e);
                                jt(n)
                            },
                            Ut = {
                                minibrowser: {
                                    activated: !1,
                                    toUse: !0,
                                    activate() {
                                        if (this.activated) return;
                                        if (!("function" == typeof IntersectionObserver)) return;
                                        this.activated = !0;
                                        const t = document.querySelector("ytd-app"),
                                            e = v(t);
                                        if (!e) return;
                                        const n = e.constructor.prototype;
                                        n.handleNavigate && (n.handleNavigate.__ma355__ || (n.handleNavigate = Pt(n.handleNavigate), n.handleNavigate.__ma355__ = 1))
                                    }
                                },
                                autoExpandInfoDesc: {
                                    activated: !1,
                                    toUse: !1,
                                    mo: null,
                                    promiseReady: new A,
                                    moFn(t) {
                                        if (G.autoExpandInfoDescAttrAsyncLock !== t) return;
                                        const e = _();
                                        if (e) switch (((e || 0).nodeName || "").toLowerCase()) {
                                            case "ytd-expander":
                                                if (e.hasAttribute000("collapsed")) {
                                                    let t = !1;
                                                    try {
                                                        v(e).handleMoreTap(new Event("tap")), t = !0
                                                    } catch (t) {}
                                                    t && e.setAttribute111("tyt-no-less-btn", "")
                                                }
                                                break;
                                            case "ytd-expandable-video-description-body-renderer":
                                                const t = e.querySelector("ytd-text-inline-expander"),
                                                    n = v(t);
                                                n && !1 === n.isExpanded && (n.isExpanded = !0, n.isExpandedChanged())
                                        }
                                    },
                                    activate() {
                                        this.activated || (this.moFn = this.moFn.bind(this), this.mo = new MutationObserver((() => {
                                            b.resolve(j.autoExpandInfoDescAttrAsyncLock).then(this.moFn).catch(console.warn)
                                        })), this.activated = !0, this.promiseReady.resolve())
                                    },
                                    async onMainInfoSet(t) {
                                        await this.promiseReady.then(), "ytd-expander" === t.nodeName.toLowerCase() ? this.mo.observe(t, {
                                            attributes: !0,
                                            attributeFilter: ["collapsed", "attr-8ifv7"]
                                        }) : this.mo.observe(t, {
                                            attributes: !0,
                                            attributeFilter: ["attr-8ifv7"]
                                        }), t.incAttribute111("attr-8ifv7")
                                    }
                                },
                                fullChannelNameOnHover: {
                                    activated: !1,
                                    toUse: !0,
                                    mo: null,
                                    ro: null,
                                    promiseReady: new A,
                                    checkResize: 0,
                                    mouseEnterFn(t) {
                                        const e = t ? t.target : null;
                                        if (!(e instanceof c)) return;
                                        const n = e.closest("ytd-watch-metadata");
                                        n.classList.remove("tyt-metadata-hover-resized"), this.checkResize = Date.now() + 300, n.classList.add("tyt-metadata-hover")
                                    },
                                    mouseLeaveFn(t) {
                                        const e = t ? t.target : null;
                                        if (!(e instanceof c)) return;
                                        const n = e.closest("ytd-watch-metadata");
                                        n.classList.remove("tyt-metadata-hover-resized"), n.classList.remove("tyt-metadata-hover")
                                    },
                                    moFn(t) {
                                        if (G.fullChannelNameOnHoverAttrAsyncLock !== t) return;
                                        const e = document.querySelector("#primary.ytd-watch-flexy ytd-watch-metadata #upload-info");
                                        if (!e) return;
                                        const n = {
                                            passive: !0,
                                            capture: !1
                                        };
                                        e.removeEventListener("pointerenter", this.mouseEnterFn, n), e.removeEventListener("pointerleave", this.mouseLeaveFn, n), e.addEventListener("pointerenter", this.mouseEnterFn, n), e.addEventListener("pointerleave", this.mouseLeaveFn, n)
                                    },
                                    async onNavigateFinish() {
                                        await this.promiseReady.then();
                                        const t = document.querySelector("#primary.ytd-watch-flexy ytd-watch-metadata #upload-info");
                                        t && (this.mo.observe(t, {
                                            attributes: !0,
                                            attributeFilter: ["hidden", "attr-3wb0k"]
                                        }), t.incAttribute111("attr-3wb0k"), this.ro.observe(t))
                                    },
                                    activate() {
                                        if (this.activated) return;
                                        "function" == typeof IntersectionObserver && (this.activated = !0, this.mouseEnterFn = this.mouseEnterFn.bind(this), this.mouseLeaveFn = this.mouseLeaveFn.bind(this), this.moFn = this.moFn.bind(this), this.mo = new MutationObserver((() => {
                                            b.resolve(j.fullChannelNameOnHoverAttrAsyncLock).then(this.moFn).catch(console.warn)
                                        })), this.ro = new ResizeObserver((t => {
                                            if (!(Date.now() > this.checkResize))
                                                for (const e of t) {
                                                    const t = e.target;
                                                    if (t && e.contentRect.width > 0 && e.contentRect.height > 0) {
                                                        const e = t.closest("ytd-watch-metadata");
                                                        e.classList.contains("tyt-metadata-hover") && e.classList.add("tyt-metadata-hover-resized");
                                                        break
                                                    }
                                                }
                                        })), this.promiseReady.resolve())
                                    }
                                }
                            };
                        sessionStorage.__$$tmp_UseAutoExpandInfoDesc$$__ && (Ut.autoExpandInfoDesc.toUse = !0);
                        const Vt = Symbol(),
                            Zt = t => {
                                const e = qt;
                                qt = !1;
                                for (const e of document.querySelectorAll(`${t}`)) {
                                    "function" != typeof(v(e) || 0).attached498 || e[Vt] || b.resolve(e).then(ee[`${t}::attached`]).catch(console.warn)
                                }
                                qt = e
                            },
                            Wt = async () => {
                                for (let t = 2; t-- > 0;) {
                                    let e = document.querySelector("#columns.style-scope.ytd-watch-flexy ytd-live-chat-frame#chat");
                                    if (e instanceof Element) return e;
                                    t > 0 && await g(200)
                                }
                                return null
                            }, Jt = () => {
                                let t = document.querySelector("ytd-watch-flexy noscript[ns-template]");
                                return t || (t = document.createElement("noscript"), t.setAttribute("ns-template", ""), document.querySelector("ytd-watch-flexy").appendChild(t)), t
                            }, Xt = (t, e) => !!(t && t instanceof Element && t.nodeName) && (!!t.closest(e) && !0 === t.isConnected), $t = t => {
                                if (t instanceof HTMLElement) {
                                    const e = HTMLElement.prototype.closest.call(t, "ytd-watch-flexy");
                                    if (!e) return !0;
                                    const n = L.flexy;
                                    if (n && n !== e) return !0
                                }
                                return !1
                            };
                        let Kt = null,
                            te = null;
                        const ee = {
                            ceHack: () => {
                                S.flag |= 2, document.documentElement.setAttribute111("tabview-loaded", S.makeString()), ae("ytd-watch-flexy").then(ee["ytd-watch-flexy::defined"]).catch(console.warn), ae("ytd-expander").then(ee["ytd-expander::defined"]).catch(console.warn), ae("ytd-watch-next-secondary-results-renderer").then(ee["ytd-watch-next-secondary-results-renderer::defined"]).catch(console.warn), ae("ytd-comments-header-renderer").then(ee["ytd-comments-header-renderer::defined"]).catch(console.warn), ae("ytd-live-chat-frame").then(ee["ytd-live-chat-frame::defined"]).catch(console.warn), ae("ytd-comments").then(ee["ytd-comments::defined"]).catch(console.warn), ae("ytd-engagement-panel-section-list-renderer").then(ee["ytd-engagement-panel-section-list-renderer::defined"]).catch(console.warn), ae("ytd-watch-metadata").then(ee["ytd-watch-metadata::defined"]).catch(console.warn), ae("ytd-playlist-panel-renderer").then(ee["ytd-playlist-panel-renderer::defined"]).catch(console.warn), ae("ytd-expandable-video-description-body-renderer").then(ee["ytd-expandable-video-description-body-renderer::defined"]).catch(console.warn)
                            },
                            fixForTabDisplay: t => {
                                it = !1;
                                for (const t of document.querySelectorAll("[io-intersected]")) {
                                    const e = v(t);
                                    if (t instanceof c && "function" == typeof e.calculateCanCollapse) try {
                                        e.calculateCanCollapse(!0)
                                    } catch (t) {}
                                }
                                if (!t && "#tab-info" === Nt) {
                                    for (const t of document.querySelectorAll("#tab-info ytd-video-description-infocards-section-renderer, #tab-info yt-chip-cloud-renderer, #tab-info ytd-horizontal-card-list-renderer, #tab-info yt-horizontal-list-renderer")) {
                                        const e = v(t);
                                        if (t instanceof c && "function" == typeof e.notifyResize) try {
                                            e.notifyResize()
                                        } catch (t) {}
                                    }
                                    for (const t of document.querySelectorAll("#tab-info ytd-text-inline-expander")) {
                                        const e = v(t);
                                        t instanceof c && "function" == typeof e.resize && e.resize(!1), Gt(e)
                                    }
                                }
                                if (!t && "string" == typeof Nt && Nt.startsWith("#tab-")) {
                                    const t = document.querySelector(".tab-content-cld:not(.tab-content-hidden)");
                                    if (t) {
                                        const e = t.querySelectorAll("yt-chip-cloud-renderer");
                                        for (const t of e) {
                                            const e = v(t);
                                            if ("function" == typeof e.notifyResize) try {
                                                e.notifyResize()
                                            } catch (t) {}
                                        }
                                    }
                                }
                            },
                            "ytd-watch-flexy::defined": t => {
                                t.updateChatLocation498 || "function" != typeof t.updateChatLocation || 0 !== t.updateChatLocation.length || (t.updateChatLocation498 = t.updateChatLocation, t.updateChatLocation = vt)
                            },
                            "ytd-watch-next-secondary-results-renderer::defined": t => {
                                t.attached498 || "function" != typeof t.attached || (t.attached498 = t.attached, t.attached = function() {
                                    return qt || b.resolve(this.hostElement).then(ee["ytd-watch-next-secondary-results-renderer::attached"]).catch(console.warn), this.attached498()
                                }), t.detached498 || "function" != typeof t.detached || (t.detached498 = t.detached, t.detached = function() {
                                    return qt || b.resolve(this.hostElement).then(ee["ytd-watch-next-secondary-results-renderer::detached"]).catch(console.warn), this.detached498()
                                }), Zt("ytd-watch-next-secondary-results-renderer")
                            },
                            "ytd-watch-next-secondary-results-renderer::attached": t => {
                                $t(t) || (t instanceof Element && (t[Vt] = !0), t instanceof c && t.classList.length > 0 && !t.closest("noscript") && !0 === t.isConnected && t instanceof c && t.matches("#columns #related ytd-watch-next-secondary-results-renderer") && !t.matches("#right-tabs ytd-watch-next-secondary-results-renderer, [hidden] ytd-watch-next-secondary-results-renderer") && (L.related = t.closest("#related"), t.setAttribute111("tyt-videos-list", "")))
                            },
                            "ytd-watch-next-secondary-results-renderer::detached": t => {
                                t instanceof c && !t.closest("noscript") && !1 === t.isConnected && t.hasAttribute000("tyt-videos-list") && (L.related = null, t.removeAttribute000("tyt-videos-list"))
                            },
                            settingCommentsVideoId: t => {
                                if (!(t instanceof c) || !(t.classList.length > 0) || t.closest("noscript")) return;
                                const e = v(t);
                                if (L.comments !== t || !0 !== t.isConnected || !0 !== e.isAttached || !e.data || !1 !== e.hidden) return;
                                const n = L.flexy,
                                    o = n ? v(n) : null;
                                o && o.videoId ? t.setAttribute111("tyt-comments-video-id", o.videoId) : t.removeAttribute000("tyt-comments-video-id")
                            },
                            checkCommentsShouldBeHidden: t => {
                                if (G.checkCommentsShouldBeHiddenLock !== t) return;
                                const e = L.comments,
                                    n = L.flexy;
                                if (e && n && !e.hasAttribute000("hidden")) {
                                    const t = v(n);
                                    if ("string" == typeof t.videoId) {
                                        const n = e.getAttribute("tyt-comments-video-id");
                                        n && n !== t.videoId && e.setAttribute111("hidden", "")
                                    }
                                }
                            },
                            "ytd-comments::defined": t => {
                                t.attached498 || "function" != typeof t.attached || (t.attached498 = t.attached, t.attached = function() {
                                    return qt || b.resolve(this.hostElement).then(ee["ytd-comments::attached"]).catch(console.warn), this.attached498()
                                }), t.detached498 || "function" != typeof t.detached || (t.detached498 = t.detached, t.detached = function() {
                                    return qt || b.resolve(this.hostElement).then(ee["ytd-comments::detached"]).catch(console.warn), this.detached498()
                                }), t._createPropertyObserver("data", "_dataChanged498", void 0), t._dataChanged498 = function() {
                                    b.resolve(this.hostElement).then(ee["ytd-comments::_dataChanged498"]).catch(console.warn)
                                }, Zt("ytd-comments")
                            },
                            "ytd-comments::_dataChanged498": t => {
                                if (!t.hasAttribute000("tyt-comments-area")) return;
                                let e = 0;
                                const n = v(t),
                                    o = n ? n.data : null,
                                    a = o ? o.contents : null;
                                o && (a && 1 === a.length && a[0].messageRenderer && (e = 2), a && a.length > 1 && a[0].commentThreadRenderer && (e = 1)), e ? t.setAttribute111("tyt-comments-data-status", e) : t.removeAttribute000("tyt-comments-data-status"), b.resolve(t).then(ee.settingCommentsVideoId).catch(console.warn)
                            },
                            "ytd-comments::attached": async t => {
                                if ($t(t)) return;
                                if (t instanceof Element && (t[Vt] = !0), !(t instanceof c) || !(t.classList.length > 0) || t.closest("noscript")) return;
                                if (!0 !== t.isConnected) return;
                                if (!t || "comments" !== t.id) return;
                                L.comments = t, b.resolve(t).then(ee.settingCommentsVideoId).catch(console.warn), ot.observe(t, {
                                    attributes: !0
                                }), t.setAttribute111("tyt-comments-area", "");
                                const e = j.rightTabReadyLock02;
                                if (await Z.then(), G.rightTabReadyLock02 === e && L.comments === t && !1 !== t.isConnected)
                                    if (t && !t.closest("#right-tabs")) document.querySelector("#tab-comments").assignChildern111(null, t, null);
                                    else {
                                        const t = L.comments && L.comments.closest("#tab-comments") && !L.comments.closest("[hidden]");
                                        document.querySelector('[tyt-tab-content="#tab-comments"]').classList.toggle("tab-btn-hidden", !t), b.resolve(j.removeKeepCommentsScrollerLock).then(Tt).catch(console.warn)
                                    }
                            },
                            "ytd-comments::detached": t => {
                                t instanceof c && !t.closest("noscript") && !1 === t.isConnected && t.hasAttribute000("tyt-comments-area") && (t.removeAttribute000("tyt-comments-area"), ot.disconnect(), ot.takeRecords(), L.comments = null, document.querySelector('[tyt-tab-content="#tab-comments"]').classList.add("tab-btn-hidden"), b.resolve(j.removeKeepCommentsScrollerLock).then(Tt).catch(console.warn))
                            },
                            "ytd-comments-header-renderer::defined": t => {
                                t.attached498 || "function" != typeof t.attached || (t.attached498 = t.attached, t.attached = function() {
                                    return qt || b.resolve(this.hostElement).then(ee["ytd-comments-header-renderer::attached"]).catch(console.warn), b.resolve(this.hostElement).then(ee["ytd-comments-header-renderer::dataChanged"]).catch(console.warn), this.attached498()
                                }), t.detached498 || "function" != typeof t.detached || (t.detached498 = t.detached, t.detached = function() {
                                    return qt || b.resolve(this.hostElement).then(ee["ytd-comments-header-renderer::detached"]).catch(console.warn), this.detached498()
                                }), t.dataChanged498 || "function" != typeof t.dataChanged || (t.dataChanged498 = t.dataChanged, t.dataChanged = function() {
                                    return b.resolve(this.hostElement).then(ee["ytd-comments-header-renderer::dataChanged"]).catch(console.warn), this.dataChanged498()
                                }), Zt("ytd-comments-header-renderer")
                            },
                            "ytd-comments-header-renderer::attached": t => {
                                if ($t(t)) return;
                                if (t instanceof Element && (t[Vt] = !0), !(t instanceof c) || !(t.classList.length > 0) || t.closest("noscript")) return;
                                if (!0 !== t.isConnected) return;
                                if (!t || !t.classList.contains("ytd-item-section-renderer")) return;
                                if (t === document.querySelector("[tyt-comments-area] ytd-comments-header-renderer")) t.setAttribute111("tyt-comments-header-field", "");
                                else {
                                    const e = t.parentNode;
                                    e instanceof c && e.querySelector("[tyt-comments-header-field]") && t.setAttribute111("tyt-comments-header-field", "")
                                }
                            },
                            "ytd-comments-header-renderer::detached": t => {
                                if (t instanceof c && !t.closest("noscript") && !1 === t.isConnected) {
                                    if (t.hasAttribute000("field-of-cm-count")) {
                                        t.removeAttribute000("field-of-cm-count");
                                        const e = document.querySelector("#tyt-cm-count");
                                        e && !document.querySelector("#tab-comments ytd-comments-header-renderer[field-of-cm-count]") && (e.textContent = "")
                                    }
                                    t.hasAttribute000("tyt-comments-header-field") && t.removeAttribute000("tyt-comments-header-field")
                                }
                            },
                            "ytd-comments-header-renderer::dataChanged": t => {
                                if (!(t instanceof c) || !(t.classList.length > 0) || t.closest("noscript")) return;
                                const e = L.flexy;
                                let n = !1;
                                if ((v(t) && t.closest("#tab-comments") && document.querySelector("#tab-comments ytd-comments-header-renderer") === t || t instanceof c && t.parentNode instanceof c && t.parentNode.querySelector("[tyt-comments-header-field]")) && (n = !0), n && (t.setAttribute111("tyt-comments-header-field", ""), e && e.removeAttribute000("tyt-comment-disabled")), t.hasAttribute000("tyt-comments-header-field") && !0 === t.isConnected) {
                                    Kt || (Kt = new MutationObserver(ee["ytd-comments-header-renderer::deferredCounterUpdate"])), Kt.observe(t.parentNode, {
                                        subtree: !1,
                                        childList: !0
                                    }), te || (te = document.createElementNS("http://www.w3.org/2000/svg", "defs"));
                                    const e = te;
                                    t.insertAdjacentElement("afterend", e), e.remove()
                                }
                            },
                            "ytd-comments-header-renderer::deferredCounterUpdate": () => {
                                const t = document.querySelectorAll("#tab-comments ytd-comments-header-renderer[class]");
                                if (1 === t.length) {
                                    const e = t[0],
                                        n = v(e).data;
                                    if (!n) return;
                                    let o = "";
                                    if (n.commentsCount && n.commentsCount.runs && n.commentsCount.runs.length >= 1) {
                                        let t = -1;
                                        const e = n.commentsCount.runs.map((e => {
                                            let n = e.text.replace(/\D+/g, "").length;
                                            return n > t && (t = n), [e.text, n]
                                        })).filter((e => e[1] === t));
                                        e.length >= 1 && (o = e[0][0])
                                    } else if (n.countText && n.countText.runs && n.countText.runs.length >= 1) {
                                        let t = -1;
                                        const e = n.countText.runs.map((e => {
                                            let n = e.text.replace(/\D+/g, "").length;
                                            return n > t && (t = n), [e.text, n]
                                        })).filter((e => e[1] === t));
                                        e.length >= 1 && (o = e[0][0])
                                    }
                                    const a = document.querySelector("#tyt-cm-count");
                                    o ? (e.setAttribute111("field-of-cm-count", ""), a && (a.textContent = o.trim())) : (e.removeAttribute000("field-of-cm-count"), a && (a.textContent = ""))
                                }
                            },
                            "ytd-expander::defined": t => {
                                t.attached498 || "function" != typeof t.attached || (t.attached498 = t.attached, t.attached = function() {
                                    return qt || b.resolve(this.hostElement).then(ee["ytd-expander::attached"]).catch(console.warn), this.attached498()
                                }), t.detached498 || "function" != typeof t.detached || (t.detached498 = t.detached, t.detached = function() {
                                    return qt || b.resolve(this.hostElement).then(ee["ytd-expander::detached"]).catch(console.warn), this.detached498()
                                }), t.calculateCanCollapse498 || "function" != typeof t.calculateCanCollapse || (t.calculateCanCollapse498 = t.calculateCanCollapse, t.calculateCanCollapse = $), t.childrenChanged498 || "function" != typeof t.childrenChanged || (t.childrenChanged498 = t.childrenChanged, t.childrenChanged = function() {
                                    return b.resolve(this.hostElement).then(ee["ytd-expander::childrenChanged"]).catch(console.warn), this.childrenChanged498()
                                }), Zt("ytd-expander")
                            },
                            "ytd-expander::childrenChanged": t => {
                                t instanceof Node && t.hasAttribute000("hidden") && t.hasAttribute000("tyt-main-info") && t.firstElementChild && t.removeAttribute("hidden")
                            },
                            "ytd-expandable-video-description-body-renderer::defined": t => {
                                t.attached498 || "function" != typeof t.attached || (t.attached498 = t.attached, t.attached = function() {
                                    return qt || b.resolve(this.hostElement).then(ee["ytd-expandable-video-description-body-renderer::attached"]).catch(console.warn), this.attached498()
                                }), t.detached498 || "function" != typeof t.detached || (t.detached498 = t.detached, t.detached = function() {
                                    return qt || b.resolve(this.hostElement).then(ee["ytd-expandable-video-description-body-renderer::detached"]).catch(console.warn), this.detached498()
                                }), Zt("ytd-expandable-video-description-body-renderer")
                            },
                            "ytd-expandable-video-description-body-renderer::attached": async t => {
                                if (t instanceof c && Xt(t, "[tyt-info-renderer]") && !t.matches("[tyt-main-info]")) {
                                    L.infoExpander = t, W.resolve(), t.setAttribute111("tyt-main-info", ""), Ut.autoExpandInfoDesc.toUse && Ut.autoExpandInfoDesc.onMainInfoSet(t);
                                    const e = j.rightTabReadyLock03;
                                    if (await Z.then(), G.rightTabReadyLock03 !== e) return;
                                    if (L.infoExpander !== t) return;
                                    if (!1 === t.isConnected) return;
                                    L.infoExpander.classList.add("tyt-main-info");
                                    const n = L.infoExpander,
                                        o = n.querySelector("ytd-text-inline-expander");
                                    if (o) {
                                        new MutationObserver((() => {
                                            const t = document.querySelector("#tab-info ytd-text-inline-expander");
                                            sessionStorage.__$$tmp_UseAutoExpandInfoDesc$$__ = t && t.hasAttribute("is-expanded") ? "1" : "", t && Yt()
                                        })).observe(o, {
                                            attributes: ["is-expanded", "attr-6v8qu", "hidden"],
                                            subtree: !0
                                        }), o.incAttribute111("attr-6v8qu");
                                        const t = v(o);
                                        t && Gt(t)
                                    }
                                    if (n && !n.closest("#right-tabs")) document.querySelector("#tab-info").assignChildern111(null, n, null);
                                    else if (document.querySelector('[tyt-tab-content="#tab-info"]')) {
                                        const t = L.infoExpander && L.infoExpander.closest("#tab-info");
                                        document.querySelector('[tyt-tab-content="#tab-info"]').classList.toggle("tab-btn-hidden", !t)
                                    }
                                    b.resolve(j.infoFixLock).then(It).catch(console.warn)
                                }
                                if (t instanceof Element && (t[Vt] = !0), t instanceof c && t.classList.length > 0 && !t.closest("noscript") && !0 === t.isConnected)
                                    if (Xt(t, "#tab-info [tyt-main-info]"));
                                    else if (!t.closest("#tab-info")) {
                                    const e = t;
                                    let n = document.querySelector("ytd-expandable-video-description-body-renderer[tyt-info-renderer]");
                                    n || (n = document.createElement("ytd-expandable-video-description-body-renderer"), n.setAttribute("tyt-info-renderer", ""), Jt().appendChild(n));
                                    v(n).data = Object.assign({}, v(e).data);
                                    const o = n.querySelector("ytd-text-inline-expander"),
                                        a = v(o);
                                    jt(a), L.infoExpanderRendererBack = e, L.infoExpanderRendererFront = n, e.setAttribute("tyt-info-renderer-back", ""), n.setAttribute("tyt-info-renderer-front", "")
                                }
                            },
                            "ytd-expandable-video-description-body-renderer::detached": async t => {
                                t instanceof c && !t.closest("noscript") && !1 === t.isConnected && t.hasAttribute000("tyt-main-info") && (L.infoExpander = null, t.removeAttribute000("tyt-main-info"))
                            },
                            "ytd-expander::attached": async t => {
                                $t(t) || (t instanceof Element && (t[Vt] = !0), t instanceof c && t.classList.length > 0 && !t.closest("noscript") && !0 === t.isConnected && t instanceof c && t.matches("[tyt-comments-area] #contents ytd-expander#expander") && !t.matches("[hidden] ytd-expander#expander") && (t.setAttribute111("tyt-content-comment-entry", ""), at.observe(t)))
                            },
                            "ytd-expander::detached": t => {
                                t instanceof c && !t.closest("noscript") && !1 === t.isConnected && (t.hasAttribute000("tyt-content-comment-entry") ? (at.unobserve(t), t.removeAttribute000("tyt-content-comment-entry")) : t.hasAttribute000("tyt-main-info") && (L.infoExpander = null, t.removeAttribute000("tyt-main-info")))
                            },
                            "ytd-live-chat-frame::defined": t => {
                                let e = 0;
                                if (t.attached498 || "function" != typeof t.attached || (t.attached498 = t.attached, t.attached = function() {
                                        return e = Date.now(), qt || b.resolve(this.hostElement).then(ee["ytd-live-chat-frame::attached"]).catch(console.warn), this.attached498()
                                    }), t.detached498 || "function" != typeof t.detached || (t.detached498 = t.detached, t.detached = function() {
                                        return e = Date.now(), qt || b.resolve(this.hostElement).then(ee["ytd-live-chat-frame::detached"]).catch(console.warn), this.detached498()
                                    }), "function" == typeof t.urlChanged && !t.urlChanged66 && !t.urlChangedAsync12 && 0 === t.urlChanged.length) {
                                    t.urlChanged66 = t.urlChanged;
                                    let e = 0;
                                    t.urlChangedAsync12 = async function() {
                                        await this.__urlChangedAsyncT689__;
                                        const t = e = 1 + (1073741823 & e),
                                            n = this.chatframe || (this.$ || 0).chatframe || 0;
                                        if (n instanceof HTMLIFrameElement) {
                                            if (null === n.contentDocument && (await b.resolve("#").catch(console.warn), t !== e)) return;
                                            if (await new b((t => w(t, 1))).catch(console.warn), t !== e) return;
                                            const o = !this.data || this.collapsed,
                                                a = new b((t => w(t, 706))).catch(console.warn),
                                                i = new b((t => {
                                                    new IntersectionObserver(((e, n) => {
                                                        for (const a of e) {
                                                            const e = a.boundingClientRect || 0;
                                                            if (o || e.width > 0 && e.height > 0) {
                                                                n.disconnect(), t("#");
                                                                break
                                                            }
                                                        }
                                                    })).observe(n)
                                                })).catch(console.warn);
                                            if (await b.race([a, i]), t !== e) return
                                        }
                                        this.urlChanged66()
                                    }, t.urlChanged = function() {
                                        const t = this.__urlChangedAsyncT688__ = 1 + (1073741823 & this.__urlChangedAsyncT688__);
                                        a((() => {
                                            t === this.__urlChangedAsyncT688__ && this.urlChangedAsync12()
                                        }))
                                    }
                                }
                                Zt("ytd-live-chat-frame")
                            },
                            "ytd-live-chat-frame::attached": async t => {
                                if ($t(t)) return;
                                if (t instanceof Element && (t[Vt] = !0), !(t instanceof c) || !(t.classList.length > 0) || t.closest("noscript")) return;
                                if (!0 !== t.isConnected) return;
                                if (!t || "chat" !== t.id) return;
                                const e = j.ytdLiveAttachedLock,
                                    n = await Wt();
                                if (G.ytdLiveAttachedLock === e && n === t) {
                                    L.chat = n, et.observe(n, {
                                        attributes: !0
                                    });
                                    const e = L.flexy instanceof Element;
                                    n.setAttribute111("tyt-active-chat-frame", e ? "CF" : "C");
                                    const o = n ? n.closest("#chat-container") || n : null;
                                    if (o && !o.hasAttribute000("tyt-chat-container")) {
                                        for (const t of document.querySelectorAll("[tyt-chat-container]")) t.removeAttribute000("[tyt-chat-container]");
                                        o.setAttribute111("tyt-chat-container", "")
                                    }
                                    const a = v(t),
                                        i = a.__urlChangedAsyncT688__,
                                        r = a.__urlChangedAsyncT689__ = new A;
                                    w((() => {
                                        r === a.__urlChangedAsyncT689__ && !0 === a.isAttached && !0 === t.isConnected && (r.resolve(), i === a.__urlChangedAsyncT688__ && a.urlChanged())
                                    }), 320), b.resolve(j.layoutFixLock).then(Ft)
                                }
                            },
                            "ytd-live-chat-frame::detached": t => {
                                if (t instanceof c && !t.closest("noscript") && !1 === t.isConnected && t.hasAttribute000("tyt-active-chat-frame")) {
                                    et.disconnect(), et.takeRecords(), t.removeAttribute000("tyt-active-chat-frame"), L.chat = null;
                                    const e = L.flexy;
                                    e && (e.removeAttribute000("tyt-chat-collapsed"), e.setAttribute111("tyt-chat", ""))
                                }
                            },
                            "ytd-engagement-panel-section-list-renderer::defined": t => {
                                t.attached498 || "function" != typeof t.attached || (t.attached498 = t.attached, t.attached = function() {
                                    return qt || b.resolve(this.hostElement).then(ee["ytd-engagement-panel-section-list-renderer::attached"]).catch(console.warn), this.attached498()
                                }), t.detached498 || "function" != typeof t.detached || (t.detached498 = t.detached, t.detached = function() {
                                    return qt || b.resolve(this.hostElement).then(ee["ytd-engagement-panel-section-list-renderer::detached"]).catch(console.warn), this.detached498()
                                }), Zt("ytd-engagement-panel-section-list-renderer")
                            },
                            "ytd-engagement-panel-section-list-renderer::bindTarget": t => {
                                t.matches("#panels.ytd-watch-flexy > ytd-engagement-panel-section-list-renderer[target-id][visibility]") && (t.setAttribute111("tyt-egm-panel", ""), b.resolve(j.updateEgmPanelsLock).then(Dt).catch(console.warn), zt.observe(t, {
                                    attributes: !0,
                                    attributeFilter: ["visibility", "hidden"]
                                }))
                            },
                            "ytd-engagement-panel-section-list-renderer::attached": t => {
                                $t(t) || (t instanceof Element && (t[Vt] = !0), t instanceof c && t.classList.length > 0 && !t.closest("noscript") && !0 === t.isConnected && t.matches("#panels.ytd-watch-flexy > ytd-engagement-panel-section-list-renderer") && (t.hasAttribute000("target-id") && t.hasAttribute000("visibility") ? b.resolve(t).then(ee["ytd-engagement-panel-section-list-renderer::bindTarget"]).catch(console.warn) : (t.setAttribute000("tyt-egm-panel-jclmd", ""), se.observe(t, {
                                    attributes: !0,
                                    attributeFilter: ["visibility", "target-id"]
                                }))))
                            },
                            "ytd-engagement-panel-section-list-renderer::detached": t => {
                                t instanceof c && !t.closest("noscript") && !1 === t.isConnected && (t.hasAttribute000("tyt-egm-panel") ? (t.removeAttribute000("tyt-egm-panel"), b.resolve(j.updateEgmPanelsLock).then(Dt).catch(console.warn)) : t.hasAttribute000("tyt-egm-panel-jclmd") && (t.removeAttribute000("tyt-egm-panel-jclmd"), ce()))
                            },
                            "ytd-watch-metadata::defined": t => {
                                t.attached498 || "function" != typeof t.attached || (t.attached498 = t.attached, t.attached = function() {
                                    return qt || b.resolve(this.hostElement).then(ee["ytd-watch-metadata::attached"]).catch(console.warn), this.attached498()
                                }), t.detached498 || "function" != typeof t.detached || (t.detached498 = t.detached, t.detached = function() {
                                    return qt || b.resolve(this.hostElement).then(ee["ytd-watch-metadata::detached"]).catch(console.warn), this.detached498()
                                }), Zt("ytd-watch-metadata")
                            },
                            "ytd-watch-metadata::attached": t => {
                                $t(t) || (t instanceof Element && (t[Vt] = !0), t instanceof c && t.classList.length > 0 && !t.closest("noscript") && !0 === t.isConnected && Ut.fullChannelNameOnHover.activated && Ut.fullChannelNameOnHover.onNavigateFinish())
                            },
                            "ytd-watch-metadata::detached": t => {
                                t instanceof c && !t.closest("noscript") && t.isConnected
                            },
                            "ytd-playlist-panel-renderer::defined": t => {
                                t.attached498 || "function" != typeof t.attached || (t.attached498 = t.attached, t.attached = function() {
                                    return qt || b.resolve(this.hostElement).then(ee["ytd-playlist-panel-renderer::attached"]).catch(console.warn), this.attached498()
                                }), t.detached498 || "function" != typeof t.detached || (t.detached498 = t.detached, t.detached = function() {
                                    return qt || b.resolve(this.hostElement).then(ee["ytd-playlist-panel-renderer::detached"]).catch(console.warn), this.detached498()
                                }), Zt("ytd-playlist-panel-renderer")
                            },
                            "ytd-playlist-panel-renderer::attached": t => {
                                $t(t) || (t instanceof Element && (t[Vt] = !0), t instanceof c && t.classList.length > 0 && !t.closest("noscript") && !0 === t.isConnected && (L.playlist = t, nt.observe(t, {
                                    attributes: !0,
                                    attributeFilter: ["hidden", "collapsed", "attr-1y6nu"]
                                }), t.incAttribute111("attr-1y6nu")))
                            },
                            "ytd-playlist-panel-renderer::detached": t => {
                                t instanceof c && !t.closest("noscript") && t.isConnected
                            },
                            _yt_playerProvided: () => {
                                S.flag |= 4, document.documentElement.setAttribute111("tabview-loaded", S.makeString())
                            },
                            relatedElementProvided: t => {
                                t.closest("[hidden]") || (L.related = t, Y.resolve())
                            },
                            onceInfoExpanderElementProvidedPromised: () => {
                                const t = L.flexy;
                                t && t.setAttribute111("hide-default-text-inline-expander", "")
                            },
                            refreshSecondaryInner: t => {
                                if (G.refreshSecondaryInnerLock !== t) return;
                                const e = L.flexy;
                                e && e.matches("ytd-watch-flexy[theater][flexy][full-bleed-player]:not([full-bleed-no-max-width-columns])") && e.setAttribute111("full-bleed-no-max-width-columns", "");
                                const n = L.related;
                                n && n.isConnected && !n.closest("#right-tabs #tab-videos") && document.querySelector("#tab-videos").assignChildern111(null, n, null);
                                const o = L.infoExpander;
                                o && o.isConnected && !o.closest("#right-tabs #tab-info") && document.querySelector("#tab-info").assignChildern111(null, o, null);
                                const a = L.comments;
                                if (a) {
                                    if (a.isConnected && !a.closest("#right-tabs #tab-comments")) {
                                        document.querySelector("#tab-comments").assignChildern111(null, a, null)
                                    }
                                }
                            },
                            "yt-navigate-finish": t => {
                                const e = document.querySelector("ytd-page-manager#page-manager.style-scope.ytd-app"),
                                    n = v(e);
                                if (I = n ? (n.data || 0).page : null, !document.querySelector("ytd-watch-flexy #player")) return;
                                const o = [...document.querySelectorAll("ytd-watch-flexy")].filter((t => !t.closest("[hidden]") && t.querySelector("#player")));
                                if (1 === o.length) {
                                    L.flexy = o[0], V ? (b.resolve(j.refreshSecondaryInnerLock).then(ee.refreshSecondaryInner).catch(console.warn), b.resolve(j.removeKeepCommentsScrollerLock).then(Tt).catch(console.warn)) : (U.resolve(), Ut.minibrowser.toUse && Ut.minibrowser.activate(), Ut.autoExpandInfoDesc.toUse && Ut.autoExpandInfoDesc.activate(), Ut.fullChannelNameOnHover.toUse && Ut.fullChannelNameOnHover.activate());
                                    const t = L.chat;
                                    t instanceof Element && t.setAttribute111("tyt-active-chat-frame", "CF");
                                    const e = L.infoExpander;
                                    e && e.closest("#right-tabs") && b.resolve(j.infoFixLock).then(It).catch(console.warn), b.resolve(j.layoutFixLock).then(Ft), Ut.fullChannelNameOnHover.activated && Ut.fullChannelNameOnHover.onNavigateFinish()
                                }
                            },
                            onceInsertRightTabs: () => {
                                const t = L.related;
                                let e = document.querySelector("#right-tabs");
                                if (!document.querySelector("#right-tabs") && t) {
                                    O();
                                    let o = document.createElement("template");
                                    o.innerHTML = n(H());
                                    let a = o.content.firstElementChild;
                                    null !== a && (qt = !0, t.parentNode.insertBefore000(a, t), qt = !1), e = a, e.querySelector('[tyt-tab-content="#tab-comments"]').classList.add("tab-btn-hidden");
                                    const i = document.createElement("secondary-wrapper"),
                                        r = document.querySelector("#secondary-inner.style-scope.ytd-watch-flexy");
                                    qt = !0, i.replaceChildren000(...r.childNodes), r.insertBefore000(i, r.firstChild), qt = !1, e.querySelector("#material-tabs").addEventListener("click", ee["tabs-btn-click"], !0), qt = !0, e.closest("secondary-wrapper") || i.appendChild000(e), qt = !1
                                }
                                if (e) {
                                    V = !0;
                                    const n = new IntersectionObserver((t => {
                                        for (const e of t) {
                                            const t = e.boundingClientRect;
                                            e.target.classList.toggle("tab-btn-visible", t.width && t.height)
                                        }
                                    }), {
                                        rootMargin: "0px"
                                    });
                                    for (const t of document.querySelectorAll(".tab-btn[tyt-tab-content]")) n.observe(t);
                                    t.closest("#right-tabs") || document.querySelector("#tab-videos").assignChildern111(null, t, null);
                                    const o = L.infoExpander;
                                    o && !o.closest("#right-tabs") && document.querySelector("#tab-info").assignChildern111(null, o, null);
                                    const a = L.comments;
                                    a && !a.closest("#right-tabs") && document.querySelector("#tab-comments").assignChildern111(null, a, null), Z.resolve(), st.disconnect(), st.observe(e);
                                    const i = L.flexy;
                                    new MutationObserver(ee.aoFlexyFn).observe(i, {
                                        attributes: !0
                                    }), b.resolve(j.fixInitialTabStateLock).then(ee.fixInitialTabStateFn).catch(console.warn), i.incAttribute111("attr-7qlsy")
                                }
                            },
                            aoFlexyFn: () => {
                                b.resolve(j.checkCommentsShouldBeHiddenLock).then(ee.checkCommentsShouldBeHidden).catch(console.warn), b.resolve(j.refreshSecondaryInnerLock).then(ee.refreshSecondaryInner).catch(console.warn), b.resolve(j.tabsStatusCorrectionLock).then(ee.tabsStatusCorrection).catch(console.warn);
                                const t = Qt();
                                t !== Ot && (Ot = t, b.resolve(j.updateOnVideoIdChangedLock).then(ee.updateOnVideoIdChanged).catch(console.warn))
                            },
                            twoColumnChanged10: t => {
                                if (t === G.twoColumnChanged10Lock)
                                    for (const t of document.querySelectorAll("#tab-videos ytd-watch-next-secondary-results-renderer ytd-continuation-item-renderer")) {
                                        if (t.closest("[hidden]")) continue;
                                        const e = v(t);
                                        if ("boolean" == typeof e.showButton) {
                                            if (!1 === e.showButton) continue;
                                            e.showButton = !1;
                                            const t = e.ytRendererBehavior || e;
                                            "function" == typeof t.invalidate && t.invalidate(!1)
                                        }
                                    }
                            },
                            tabsStatusCorrection: t => {
                                if (t !== G.tabsStatusCorrectionLock) return;
                                if (!L.flexy) return;
                                const e = dt,
                                    n = lt(e, 255);
                                let o = !1;
                                if (e !== n) {
                                    let t = !1;
                                    128 & e || 128 & ~n ? 8 & e || 8 & ~n ? (4 & ~e || 12 & n) && (8 & ~e || 12 & n) || "chat" !== Mt ? 8 == (12 & e) && 4 == (12 & n) && "chat" === Mt ? (Mt = Nt || "", o = !0) : 128 & ~e || 128 & n || "playlist" !== Mt || (Mt = Nt || "", o = !0) : (Mt = Nt || "", o = !0) : Mt = "chat" : Mt = "playlist", dt = n;
                                    let a = !1;
                                    2 == (2 ^ n) && it && (a = !0), !(16 & ~e) & !(16 & n) && b.resolve(j.twoColumnChanged10Lock).then(ee.twoColumnChanged10).catch(console.warn), !(2 & ~e) ^ !(2 & ~n) && !(2 & ~n) && (a = !0), 2 & e || 2 & ~n || 128 & ~e || 128 & ~n || (Mt = Nt || "", gt(), t = !0), 128 != (136 & e) || 136 & ~n || "chat" !== Mt || (Mt = Nt || "", gt(), t = !0), 2 != (130 & e) || 130 & ~n || "playlist" !== Mt || (ct(null), t = !0), 8 != (136 & e) || 136 & ~n || "playlist" !== Mt || (Mt = Nt || "", pt(), t = !0), 17 != (145 & e) || 145 & ~n || (mt(), t = !0), 144 != (145 & e) || 145 & ~n || (Mt = Nt || "", gt(), t = !0), 64 & ~n ? 64 & ~e || 64 & n ? 17 == (59 & e) && 25 == (59 & n) ? (mt(), t = !0) : 16 == (49 & e) && 48 == (49 & n) && (10 & n) > 0 ? (2 & n && (ct(null), t = !0), 8 & n && (pt(), t = !0)) : 24 != (27 & e) || 16 != (27 & n) || 128 & n ? 1 & e || 1 & ~n ? 1 != (3 & e) || 3 & ~n ? 2 != (10 & e) || 10 & ~n ? (32 != (40 & e) || 40 & ~n) && (32 != (34 & e) || 34 & ~n) ? 8 != (10 & e) || 10 & ~n ? 1 & ~e || 33 & n || ("chat" === Mt ? (ut(), t = !0) : Mt === Nt && Nt && (ct(Nt), t = !0)) : (pt(), t = !0) : (ft(), t = !0) : (ct(null), t = !0) : (mt(), t = !0) : (32 & ~n || ft(), 8 != (9 & e) || 9 & ~n || pt(), ct(null), t = !0) : Nt && (ct(Nt), t = !0) : (32 & ~n || ft(), 10 & ~n || ("chat" === Mt ? (ct(null), t = !0) : Mt && (pt(), t = !0))) : t = !1, t || 128 & ~n || (Mt = "playlist", 2 & ~n || (ct(null), t = !0)), (2 & ~e || 128 != (130 & n)) && (8 & ~e || 128 != (136 & n)) && (t || 16 != (17 & e) || 16 != (123 & n) || ("chat" === Mt ? (ut(), t = !0) : "playlist" === Mt ? (bt(), t = !0) : Nt ? (ct(Nt), t = !0) : o && (b.resolve(j.fixInitialTabStateLock).then(ee.fixInitialTabStateFn).catch(console.warn), t = !0))), a && (it = !1, b.resolve(0).then(ee.fixForTabDisplay).catch(console.warn)), !(16 & ~e) ^ !(16 & ~n) && (b.resolve(j.infoFixLock).then(It).catch(console.warn), b.resolve(j.removeKeepCommentsScrollerLock).then(Tt).catch(console.warn), b.resolve(j.layoutFixLock).then(Ft).catch(console.warn))
                                }
                            },
                            updateOnVideoIdChanged: t => {
                                if (t !== G.updateOnVideoIdChangedLock) return;
                                if (!Ot) return;
                                const e = L.infoExpanderRendererBack,
                                    n = L.infoExpanderRendererFront;
                                n && e && (v(n).data = v(e).data), b.resolve(j.infoFixLock).then(It).catch(console.warn)
                            },
                            fixInitialTabStateFn: async t => {
                                if (G.fixInitialTabStateLock !== t) return;
                                const e = Bt > 0 ? 200 : 1;
                                if (await g(e), G.fixInitialTabStateLock !== t) return;
                                const n = document.querySelector("[tyt-tab]"),
                                    o = n && "" !== n.getAttribute("tyt-tab") ? null : Rt("ytd-watch-flexy[is-two-columns_]", "[hidden]");
                                if (Rt("ytd-playlist-panel-renderer#playlist", "[hidden], [collapsed]")) ct(null);
                                else if (Rt("ytd-live-chat-frame#chat", "[hidden], [collapsed]")) ct(null), Rt("ytd-watch-flexy[theater]", "[hidden]") && pt();
                                else if (o) {
                                    if (o.hasAttribute("theater")) ct(null);
                                    else {
                                        const t = document.querySelector(".tab-btn-visible");
                                        ct(t || null)
                                    }
                                }
                                Bt++
                            },
                            "tabs-btn-click": t => {
                                const e = t.target;
                                if (e instanceof c && e.classList.contains("tab-btn") && e.hasAttribute000("tyt-tab-content")) {
                                    t.preventDefault(), t.stopPropagation(), t.stopImmediatePropagation();
                                    ct(e)
                                }
                            }
                        };
                        b.all([Y, U]).then(ee.onceInsertRightTabs).catch(console.warn), b.all([U, W]).then(ee.onceInfoExpanderElementProvidedPromised).catch(console.warn);
                        const ne = "undefined" != typeof customElements && "function" == typeof(customElements || 0).whenDefined,
                            oe = ne ? b.resolve(0) : new b((t => {
                                const e = "ytI-ce-registry-created";
                                if ("undefined" == typeof customElements) {
                                    "__CE_registry" in document || Object.defineProperty(document, "__CE_registry", {
                                        get() {},
                                        set(t) {
                                            return "object" == typeof t && (delete this.__CE_registry, this.__CE_registry = t, this.dispatchEvent(new CustomEvent(e))), !0
                                        },
                                        enumerable: !1,
                                        configurable: !0
                                    });
                                    let n = o => {
                                        document.removeEventListener(e, n, !1);
                                        const a = t;
                                        t = null, n = null, a()
                                    };
                                    document.addEventListener(e, n, !1)
                                } else t()
                            })),
                            ae = async t => {
                                try {
                                    ne || await oe, await customElements.whenDefined(t);
                                    const e = document.querySelector(t) || document.createElement(t);
                                    return v(e).constructor.prototype
                                } catch (t) {}
                            }, ie = {
                                _yt_playerProvided: () => (window || 0)._yt_player || 0
                            };
                        let re = null;
                        new MutationObserver((() => {
                            if (re && (re.resolve(), re = null), "function" == typeof ie._yt_playerProvided) {
                                const t = ie._yt_playerProvided();
                                t && (ie._yt_playerProvided = t, ee._yt_playerProvided())
                            }
                        })).observe(document, {
                            subtree: !0,
                            childList: !0
                        });
                        const se = new MutationObserver((t => {
                                for (const e of t) {
                                    const t = e.target;
                                    t.hasAttribute000("tyt-egm-panel-jclmd") && (t.hasAttribute000("target-id") && t.hasAttribute000("visibility") && (t.removeAttribute000("tyt-egm-panel-jclmd"), ce(), b.resolve(t).then(ee["ytd-engagement-panel-section-list-renderer::bindTarget"]).catch(console.warn)))
                                }
                            })),
                            ce = () => {
                                null === document.querySelector("[tyt-egm-panel-jclmd]") && (se.takeRecords(), se.disconnect())
                            };
                        document.addEventListener("yt-navigate-finish", ee["yt-navigate-finish"], !1), document.addEventListener("animationstart", (t => {
                            const e = ee[t.animationName];
                            "function" == typeof e && e(t.target)
                        }), E), S.flag |= 1, document.documentElement.setAttribute111("tabview-loaded", S.makeString()), oe.then(ee.ceHack).catch(console.warn), s = 1
                    } catch (de) {}
                },
                a = {
                    main: '\n\t\t\n\t\t\n\t\t\t@keyframes relatedElementProvided {\n\t\t\t0% {\n\t\t\t\tbackground-position-x: 3px;\n\t\t\t}\n\t\t\t100% {\n\t\t\t\tbackground-position-x: 4px;\n\t\t\t}\n\t\t\t}\n\t\t\t\n\t\t\thtml[tabview-loaded="icp"] #related.ytd-watch-flexy {\n\t\t\tanimation: relatedElementProvided 1ms linear 0s 1 normal forwards;\n\t\t\t}\n\t\t\t\n\t\t\thtml[tabview-loaded="icp"] #right-tabs #related.ytd-watch-flexy,\n\t\t\thtml[tabview-loaded="icp"] [hidden] #related.ytd-watch-flexy {\n\t\t\tanimation: initial;\n\t\t\t}\n\t\t\n\t\t\t\n\t\t\n\t\t\n\t\t\t\n\t\t\t\n\t\t\thtml[tabview-loaded="icp"] #right-tabs ytd-expander#expander,\n\t\t\thtml[tabview-loaded="icp"] [hidden] ytd-expander#expander,\n\t\t\thtml[tabview-loaded="icp"] ytd-comments ytd-expander#expander{\n\t\t\tanimation: initial;\n\t\t\t}\n\t\t\n\t\t\n\t\t\n\t\t\n\t\t\n\t\t\t#secondary.ytd-watch-flexy {\n\t\t\tposition: relative;\n\t\t\t}\n\t\t\n\t\t\t#secondary-inner.style-scope.ytd-watch-flexy {\n\t\t\theight: 100%;\n\t\t\t}\n\t\t\n\t\t\t/*\n\t\t\tytd-watch-flexy[tyt-tab^="#"] #secondary-inner.style-scope.ytd-watch-flexy::after {\n\t\t\tdisplay: block;\n\t\t\tcontent:\'\';\n\t\t\theight: 100vh;\n\t\t\t}\n\t\t\t*/\n\t\t\n\t\t\tsecondary-wrapper {\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tflex-wrap: nowrap;\n\t\t\tbox-sizing: border-box;\n\t\t\tpadding: 0;\n\t\t\tmargin: 0;\n\t\t\tborder: 0;\n\t\t\theight: 100%;\n\t\t\tmax-height: calc(100vh - var(--ytd-toolbar-height, 56px));\n\t\t\tposition: absolute;\n\t\t\ttop: 0;\n\t\t\tright: 0;\n\t\t\tleft: 0;\n\t\t\tcontain: strict;\n\t\t\tpadding-top: var(--ytd-margin-6x);\n\t\t\tpadding-right: var(--ytd-margin-6x);\n\t\t\tpadding-bottom: var(--ytd-margin-6x);\n\t\t\t}\n\t\t\n\t\t\n\t\t\t#right-tabs {\n\t\t\t\tposition: relative;\n\t\t\t\tdisplay: flex;\n\t\t\t\tpadding: 0;\n\t\t\t\tmargin: 0;    \n\t\t\t\tflex-grow: 1;\n\t\t\t\tflex-direction: column;\n\t\t\t}\n\t\t\n\t\t\t[tyt-tab=""] #right-tabs{\n\t\t\tflex-grow: 0;\n\t\t\t}\n\t\t\n\t\t\t[tyt-tab=""] #right-tabs .tab-content{\n\t\t\t\tborder: 0;\n\t\t\t}\n\t\t\n\t\t\t#right-tabs .tab-content {\n\t\t\tflex-grow: 1;\n\t\t\t}\n\t\t\n\t\t\tytd-watch-flexy[hide-default-text-inline-expander] #primary.style-scope.ytd-watch-flexy ytd-text-inline-expander {\n\t\t\tdisplay: none;\n\t\t\t}\n\t\t\n\t\t\n\t\t\tytd-watch-flexy:not([keep-comments-scroller]) #tab-comments.tab-content-hidden {\n\t\t\t--comment-pre-load-sizing: 90px;\n\t\t\tvisibility: collapse;\n\t\t\tz-index: -1;\n\t\t\tposition: fixed !important;\n\t\t\tleft: 2px;\n\t\t\ttop: 2px;\n\t\t\twidth: var(--comment-pre-load-sizing) !important;\n\t\t\theight: var(--comment-pre-load-sizing) !important;\n\t\t\tdisplay: block !important;\n\t\t\tpointer-events: none !important;\n\t\t\toverflow:hidden;\n\t\t\tcontain:strict;\n\t\t\tborder: 0;\n\t\t\tmargin: 0;\n\t\t\tpadding: 0;\n\t\t\t}\n\t\t\n\t\t\t/*\n\t\t\tytd-watch-flexy:not([keep-comments-scroller]) #tab-comments.tab-content-hidden ytd-comments#comments > * {\n\t\t\tdisplay: none !important;\n\t\t\t}\n\t\t\t*/\n\t\t\n\t\t\tytd-watch-flexy:not([keep-comments-scroller]) #tab-comments.tab-content-hidden ytd-comments#comments > ytd-item-section-renderer#sections {\n\t\t\tdisplay: block !important;\n\t\t\toverflow:hidden;\n\t\t\theight: var(--comment-pre-load-sizing);\n\t\t\twidth: var(--comment-pre-load-sizing);\n\t\t\tcontain:strict;\n\t\t\tborder: 0;\n\t\t\tmargin: 0;\n\t\t\tpadding: 0;\n\t\t\t}\n\t\t\n\t\t\t/*\n\t\t\tytd-watch-flexy:not([keep-comments-scroller]) #tab-comments.tab-content-hidden ytd-comments#comments > ytd-item-section-renderer#sections > * {\n\t\t\tdisplay: none !important;\n\t\t\t}\n\t\t\n\t\t\t*/\n\t\t\n\t\t\tytd-watch-flexy:not([keep-comments-scroller]) #tab-comments.tab-content-hidden ytd-comments#comments > ytd-item-section-renderer#sections > #contents {\n\t\t\tdisplay: flex !important;\n\t\t\tflex-direction: row;\n\t\t\tgap: 60px;\n\t\t\toverflow:hidden;\n\t\t\theight: var(--comment-pre-load-sizing);\n\t\t\twidth: var(--comment-pre-load-sizing);\n\t\t\tcontain:strict;\n\t\t\tborder: 0;\n\t\t\tmargin: 0;\n\t\t\tpadding: 0;\n\t\t\t}\n\t\t\t\n\t\t\t/*\n\t\t\tytd-watch-flexy:not([keep-comments-scroller]) #tab-comments.tab-content-hidden ytd-comments#comments > ytd-item-section-renderer#sections > #contents > * {\n\t\t\tdisplay: block !important;\n\t\t\tvisibility: collapse !important;\n\t\t\toverflow: hidden;\n\t\t\tmargin: calc(2 * var(--comment-pre-load-sizing)) !important;\n\t\t\twidth: var(--comment-pre-load-sizing);\n\t\t\theight: var(--comment-pre-load-sizing);\n\t\t\tbox-sizing: content-box;\n\t\t\tcontain:strict;\n\t\t\tborder: 0;\n\t\t\tpadding: 0;\n\t\t\t}\n\t\t\t*/\n\t\t\n\t\t\t\n\t\t\tytd-watch-flexy:not([keep-comments-scroller]) #tab-comments.tab-content-hidden ytd-comments#comments #contents {\n\t\t\t--comment-pre-load-display: none;\n\t\t\t}\n\t\t\n\t\t\tytd-watch-flexy:not([keep-comments-scroller]) #tab-comments.tab-content-hidden ytd-comments#comments #contents > *:only-of-type,\n\t\t\tytd-watch-flexy:not([keep-comments-scroller]) #tab-comments.tab-content-hidden ytd-comments#comments #contents > *:last-child {\n\t\t\t--comment-pre-load-display: block;\n\t\t\t}\n\t\t\n\t\t\tytd-watch-flexy:not([keep-comments-scroller]) #tab-comments.tab-content-hidden ytd-comments#comments #contents > * {\n\t\t\tdisplay: var(--comment-pre-load-display) !important;\n\t\t\t}\n\t\t\n\t\t\t#right-tabs #material-tabs {\n\t\t\tposition: relative;\n\t\t\tdisplay: flex;\n\t\t\tpadding: 0;\n\t\t\t/*outline: 1px solid var(--tyt-x-border-color);*/\n\t\t\t/*outline: 1px solid var(--ytd-searchbox-legacy-border-color);*/\n\t\t\t/* 2023/05/05 chaged from outline to border */\n\t\t\tborder: 1px solid var(--ytd-searchbox-legacy-border-color);\n\t\t\t/* border-bottom:0; */\n\t\t\toverflow: hidden;\n\t\t\t}\n\t\t\n\t\t\t[tyt-tab] #right-tabs #material-tabs {\n\t\t\tborder-radius: var(--tyt-rounded-a1) var(--tyt-rounded-a1) var(--tyt-rounded-a1) var(--tyt-rounded-a1);\n\t\t\t}\n\t\t\n\t\t\t[tyt-tab^="#"] #right-tabs #material-tabs {\n\t\t\tborder-radius: var(--tyt-rounded-a1) var(--tyt-rounded-a1) 0 0;\n\t\t\t}\n\t\t\n\t\t\tytd-watch-flexy[flexy]:not([is-two-columns_]) #right-tabs #material-tabs {\n\t\t\t\toutline: 0;\n\t\t\t}\n\t\t\n\t\t\t#right-tabs #material-tabs a.tab-btn[tyt-tab-content] > * {\n\t\t\tpointer-events: none;\n\t\t\t}\n\t\t\n\t\t\t#right-tabs #material-tabs a.tab-btn[tyt-tab-content] > .font-size-right {\n\t\t\tpointer-events: initial;\n\t\t\tdisplay: none; /* not yet supported */\n\t\t\t}\n\t\t\n\t\t\t\t\n\t\t\tytd-watch-flexy #right-tabs .tab-content {\n\t\t\t\tpadding: 0;\n\t\t\t\tbox-sizing: border-box;\n\t\t\t\tdisplay: block;\n\t\t\t\t/*--yt-spec-brand-background-primary:var(--yt-spec-general-background-a);*/\n\t\t\t\t/*outline: 1px solid var(--tyt-x-border-color);*/\n\t\t\t\t/* outline: 1px solid var(--ytd-searchbox-legacy-border-color); */\n\t\t\t\t/* 2023/05/05 chaged from outline to border */\n\t\t\t\tborder: 1px solid var(--ytd-searchbox-legacy-border-color);\n\t\t\t\tborder-top:0;\n\t\t\t\tposition: relative;\n\t\t\t\ttop: 0;\n\t\t\t\tdisplay: flex;\n\t\t\t\tflex-direction: row;\n\t\t\t\toverflow: hidden;\n\t\t\t\tborder-radius: 0 0 var(--tyt-rounded-a1) var(--tyt-rounded-a1);\n\t\t\t}\n\t\t\n\t\t\tytd-watch-flexy[is-two-columns_] #right-tabs .tab-content {\n\t\t\t/*\n\t\t\t\theight: var(--tyt-tabs-content-height);\n\t\t\t\tcontain: size layout paint;\n\t\t\t\t*/\n\t\t\t}\n\t\t\n\t\t\tytd-watch-flexy:not([is-two-columns_]) #right-tabs .tab-content {\n\t\t\t\theight: 100%;\n\t\t\t}\n\t\t\n\t\t\tytd-watch-flexy #right-tabs .tab-content-cld {\n\t\t\t\tbox-sizing: border-box;\n\t\t\t\tposition: relative;\n\t\t\t\tdisplay: block;\n\t\t\t\twidth: 100%;\n\t\t\t\toverflow: auto;\n\t\t\t\t--tab-content-padding: var(--ytd-margin-4x);\n\t\t\t\tpadding: var(--tab-content-padding);\n\t\t\t\tcontain: layout paint;\n\t\t\n\t\t\t}\n\t\t\n\t\t\t.tab-content-cld,\n\t\t\t#right-tabs,\n\t\t\t.tab-content {\n\t\t\t\ttransition: none;\n\t\t\t\tanimation: none;\n\t\t\t}\n\t\t\n\t\t\tytd-watch-flexy[is-two-columns_] #right-tabs .tab-content-cld {\n\t\t\t\theight: 100%;\n\t\t\t\twidth: 100%;\n\t\t\t\tcontain: size layout paint style;\n\t\t\t\tposition: absolute;\n\t\t\t}\n\t\t\n\t\t\tytd-watch-flexy #right-tabs .tab-content-cld.tab-content-hidden {\n\t\t\t\tdisplay: none;\n\t\t\t\twidth: 100%;\n\t\t\t\t/* width fix */\n\t\t\t\tcontain: size layout paint style;\n\t\t\t}\n\t\t\n\t\t\n\t\t\n\t\t\n\t\t\n\t\t\n\t\t\t@supports (color: var(--tabview-tab-btn-define)) {\n\t\t\n\t\t\t/* give background color; otherwise it will be transparent in dark mode, single column*/\n\t\t\tytd-watch-flexy #right-tabs .tab-btn {\n\t\t\t\tbackground: var(--yt-spec-general-background-a);\n\t\t\t}\n\t\t\n\t\t\thtml {\n\t\t\t\t--tyt-tab-btn-flex-grow: 1;\n\t\t\t\t--tyt-tab-btn-flex-basis: 0%;\n\t\t\t\t--tyt-tab-bar-color-1-def: #ff4533;\n\t\t\t\t--tyt-tab-bar-color-2-def: var(--yt-brand-light-red);\n\t\t\t\t--tyt-tab-bar-color-1:var(--main-color, var(--tyt-tab-bar-color-1-def));\n\t\t\t\t--tyt-tab-bar-color-2:var(--main-color, var(--tyt-tab-bar-color-2-def));\n\t\t\t}\n\t\t\n\t\t\tytd-watch-flexy #right-tabs .tab-btn[tyt-tab-content] {\n\t\t\n\t\t\t\tflex-grow: 1;\n\t\t\t\tflex-shrink: 1;\n\t\t\t\tflex-basis: 0%;\n\t\t\t\t\n\t\t\t\tflex-grow: var(--tyt-tab-btn-flex-grow);\n\t\t\t\tflex-basis: var(--tyt-tab-btn-flex-basis);\n\t\t\t\tposition: relative;\n\t\t\t\tdisplay: inline-block;\n\t\t\t\ttext-decoration: none;\n\t\t\t\ttext-transform: uppercase;\n\t\t\t\t--tyt-tab-btn-color: var(--yt-spec-text-secondary);\n\t\t\t\tcolor: var(--tyt-tab-btn-color);\n\t\t\t\ttext-align: center;\n\t\t\t\tpadding: 14px 8px 10px;\n\t\t\t\tborder: 0;\n\t\t\t\tborder-bottom: 4px solid transparent;\n\t\t\t\tfont-weight: 500;\n\t\t\t\tfont-size: 12px;\n\t\t\t\tline-height: 18px;\n\t\t\t\tcursor: pointer;\n\t\t\t\ttransition: border 200ms linear 100ms;\n\t\t\t\tbackground-color: var(--ytd-searchbox-legacy-button-color);\n\t\t\t\ttext-transform: var(--yt-button-text-transform, inherit);\n\t\t\t\tuser-select: none !important;\n\t\t\n\t\t\t\toverflow: hidden;\n\t\t\t\twhite-space: nowrap;\n\t\t\t\t/*text-overflow: ellipsis;*/\n\t\t\t\ttext-overflow: clip;\n\t\t\n\t\t\t}\n\t\t\n\t\t\n\t\t\t/* .tab-btn[tyt-tab-content] */\n\t\t\n\t\t\tytd-watch-flexy #right-tabs .tab-btn[tyt-tab-content]>svg {\n\t\t\t\theight: 18px;\n\t\t\t\tpadding-right: 0px;\n\t\t\t\tvertical-align: bottom;\n\t\t\t\topacity: .5;\n\t\t\t\tmargin-right: 0px;\n\t\t\t\tcolor: var(--yt-button-color, inherit);\n\t\t\t\tfill: var(--iron-icon-fill-color, currentcolor);\n\t\t\t\tstroke: var(--iron-icon-stroke-color, none);\n\t\t\t}\n\t\t\n\t\t\tytd-watch-flexy #right-tabs .tab-btn {\n\t\t\t\t--tabview-btn-txt-ml: 8px;\n\t\t\t}\n\t\t\tytd-watch-flexy[tyt-comment-disabled] #right-tabs .tab-btn[tyt-tab-content="#tab-comments"] {\n\t\t\t\t--tabview-btn-txt-ml: 0px;\n\t\t\t}\n\t\t\n\t\t\tytd-watch-flexy #right-tabs .tab-btn[tyt-tab-content]>svg+span {\n\t\t\t\tmargin-left: var(--tabview-btn-txt-ml);\n\t\t\t}\n\t\t\n\t\t\tytd-watch-flexy #right-tabs .tab-btn[tyt-tab-content] svg {\n\t\t\t\tpointer-events: none;\n\t\t\t}\n\t\t\n\t\t\tytd-watch-flexy #right-tabs .tab-btn[tyt-tab-content].active {\n\t\t\t\tfont-weight: 500;\n\t\t\t\toutline: 0;\n\t\t\t\t--tyt-tab-btn-color: var(--yt-spec-text-primary);\n\t\t\t\tbackground-color: var(--ytd-searchbox-legacy-button-focus-color);\n\t\t\t\tborder-bottom: 2px var(--tyt-tab-bar-color-1) solid;\n\t\t\t\tborder-bottom-color: var(--tyt-tab-bar-color-2);\n\t\t\t}\n\t\t\n\t\t\tytd-watch-flexy #right-tabs .tab-btn[tyt-tab-content].active svg {\n\t\t\t\topacity: .9\n\t\t\t}\n\t\t\n\t\t\tytd-watch-flexy #right-tabs .tab-btn[tyt-tab-content]:not(.active):hover {\n\t\t\t\tbackground-color: var(--ytd-searchbox-legacy-button-hover-color);\n\t\t\t\t--tyt-tab-btn-color: var(--yt-spec-text-primary);\n\t\t\t}\n\t\t\n\t\t\tytd-watch-flexy #right-tabs .tab-btn[tyt-tab-content]:not(.active):hover svg {\n\t\t\t\topacity: .9\n\t\t\t}\n\t\t\n\t\t\tytd-watch-flexy #right-tabs .tab-btn[tyt-tab-content] {\n\t\t\t\tuser-select: none !important;\n\t\t\t}\n\t\t\n\t\t\tytd-watch-flexy #right-tabs .tab-btn[tyt-tab-content].tab-btn-hidden {\n\t\t\t\tdisplay: none;\n\t\t\t}\n\t\t\n\t\t\tytd-watch-flexy[tyt-comment-disabled] #right-tabs .tab-btn[tyt-tab-content="#tab-comments"],\n\t\t\tytd-watch-flexy[tyt-comment-disabled] #right-tabs .tab-btn[tyt-tab-content="#tab-comments"]:hover {\n\t\t\t\t--tyt-tab-btn-color: var(--yt-spec-icon-disabled);\n\t\t\t}\n\t\t\n\t\t\tytd-watch-flexy[tyt-comment-disabled] #right-tabs .tab-btn[tyt-tab-content="#tab-comments"] span#tyt-cm-count:empty{\n\t\t\tdisplay:none;\n\t\t\t}\n\t\t\n\t\t\n\t\t\tytd-watch-flexy #right-tabs .tab-btn span#tyt-cm-count:empty::after {\n\t\t\t\tdisplay: inline-block;\n\t\t\t\twidth: 4em;\n\t\t\t\ttext-align: left;\n\t\t\t\tfont-size: inherit;\n\t\t\t\tcolor: currentColor;\n\t\t\t\ttransform: scaleX(0.8);\n\t\t\t}\n\t\t\n\t\t\t}\n\t\t\n\t\t\t@supports (color: var(--tyt-cm-count-define)){\n\t\t\n\t\t\tytd-watch-flexy {\n\t\t\t\t--tyt-x-loading-content-letter-spacing: 2px;\n\t\t\t}\n\t\t\n\t\t\thtml {\n\t\t\t\t--tabview-text-loading: "Loading";\n\t\t\t\t--tabview-text-fetching: "Fetching";\n\t\t\t\t--tabview-panel-loading: var(--tabview-text-loading);\n\t\t\t}\n\t\t\n\t\t\thtml:lang(ja) {\n\t\t\t\t--tabview-text-loading: "読み込み中";\n\t\t\t\t--tabview-text-fetching: "フェッチ..";\n\t\t\t}\n\t\t\n\t\t\thtml:lang(ko) {\n\t\t\t\t--tabview-text-loading: "로딩..";\n\t\t\t\t--tabview-text-fetching: "가져오기..";\n\t\t\t}\n\t\t\n\t\t\thtml:lang(zh-Hant) {\n\t\t\t\t/* 資訊科技名詞 @ https://terms.naer.edu.tw/ */\n\t\t\t\t--tabview-text-loading: "載入中";\n\t\t\t\t--tabview-text-fetching: "擷取中";\n\t\t\t}\n\t\t\n\t\t\thtml:lang(zh-Hans) {\n\t\t\t\t--tabview-text-loading: "加载中";\n\t\t\t\t--tabview-text-fetching: "抓取中";\n\t\t\t}\n\t\t\n\t\t\thtml:lang(ru) {\n\t\t\t\t--tabview-text-loading: "Загрузка";\n\t\t\t\t--tabview-text-fetching: "Получение";\n\t\t\t}\n\t\t\n\t\t\tytd-watch-flexy #right-tabs .tab-btn span#tyt-cm-count:empty::after {\n\t\t\t\tcontent: var(--tabview-text-loading);\n\t\t\t\tletter-spacing: var(--tyt-x-loading-content-letter-spacing);\n\t\t\t}\n\t\t\n\t\t\t}\n\t\t\n\t\t\n\t\t\t@supports (color: var(--tabview-font-size-btn-define)) {\n\t\t\n\t\t\t.font-size-right {\n\t\t\t\tdisplay: inline-flex;\n\t\t\t\tflex-direction: column;\n\t\t\t\tposition: absolute;\n\t\t\t\tright: 0;\n\t\t\t\ttop: 0;\n\t\t\t\tbottom: 0;\n\t\t\t\twidth: 16px;\n\t\t\t\tpadding: 4px 0;\n\t\t\t\tjustify-content: space-evenly;\n\t\t\t\talign-content: space-evenly;\n\t\t\t\tpointer-events: none;\n\t\t\t}\n\t\t\n\t\t\thtml body ytd-watch-flexy.style-scope .font-size-btn {\n\t\t\t\tuser-select: none !important;\n\t\t\t}\n\t\t\n\t\t\t.font-size-btn {\n\t\t\t\t--tyt-font-size-btn-display: none;\n\t\t\t\tdisplay: var(--tyt-font-size-btn-display, none);\n\t\t\t\t/* hide zoom btn for FireFox */\n\t\t\t\twidth: 12px;\n\t\t\t\theight: 12px;\n\t\t\t\tcolor: var(--yt-spec-text-secondary);\n\t\t\t\tbackground-color: var(--yt-spec-badge-chip-background);\n\t\t\t\tbox-sizing: border-box;\n\t\t\t\tcursor: pointer;\n\t\t\t\ttransform-origin: left top;\n\t\t\t\tmargin: 0;\n\t\t\t\tpadding: 0;\n\t\t\t\tposition: relative;\n\t\t\t\tfont-family: \'Menlo\', \'Lucida Console\', \'Monaco\', \'Consolas\', monospace;\n\t\t\t\tline-height: 100%;\n\t\t\t\tfont-weight: 900;\n\t\t\t\ttransition: background-color 90ms linear, color 90ms linear;\n\t\t\t\tpointer-events: all;\n\t\t\t}\n\t\t\n\t\t\t.font-size-btn:hover {\n\t\t\t\tbackground-color: var(--yt-spec-text-primary);\n\t\t\t\tcolor: var(--yt-spec-general-background-a);\n\t\t\t}\n\t\t\n\t\t\t@supports (zoom: 0.5) {\n\t\t\n\t\t\t\t.tab-btn .font-size-btn {\n\t\t\t\t\t--tyt-font-size-btn-display: none;\n\t\t\t\t}\n\t\t\n\t\t\t\t.tab-btn.active:hover .font-size-btn {\n\t\t\t\t\t--tyt-font-size-btn-display: inline-block;\n\t\t\t\t}\n\t\t\n\t\t\t}\n\t\t\n\t\t\t}\n\t\t\n\t\t\n\t\t\tbody ytd-watch-flexy:not([is-two-columns_]) #columns.ytd-watch-flexy{\n\t\t\tflex-direction: column;\n\t\t\t}\n\t\t\n\t\t\tbody ytd-watch-flexy:not([is-two-columns_]) #secondary.ytd-watch-flexy {\n\t\t\tdisplay: block;\n\t\t\twidth: 100%;\n\t\t\tbox-sizing: border-box;\n\t\t\t}\n\t\t\n\t\t\tbody ytd-watch-flexy:not([is-two-columns_]) #secondary.ytd-watch-flexy secondary-wrapper {\n\t\t\n\t\t\t\tpadding-left: var(--ytd-margin-6x);\n\t\t\t\tcontain: content;\n\t\t\t\theight: initial;\n\t\t\n\t\t\n\t\t\t}\n\t\t\n\t\t\tbody ytd-watch-flexy:not([is-two-columns_]) #secondary.ytd-watch-flexy secondary-wrapper #right-tabs {\n\t\t\toverflow: auto;\n\t\t\n\t\t\t}\n\t\t\n\t\t\t[tyt-chat="+"] secondary-wrapper > [tyt-chat-container]{\n\t\t\t\tflex-grow: 1;\n\t\t\t\tflex-shrink: 0;\n\t\t\t\tdisplay: flex;\n\t\t\t\tflex-direction: column;\n\t\t\t}\n\t\t\n\t\t\t[tyt-chat="+"] secondary-wrapper > [tyt-chat-container] > #chat{\n\t\t\t\tflex-grow: 1;\n\t\t\t}\n\t\t\n\t\t\tytd-watch-flexy[is-two-columns_]:not([theater]) #columns.style-scope.ytd-watch-flexy {\n\t\t\t\tmin-height: calc(100vh - var(--ytd-toolbar-height, 56px));\n\t\t\t}\n\t\t\n\t\t\tytd-watch-flexy[is-two-columns_] ytd-live-chat-frame#chat {\n\t\t\t\tmin-height: initial !important;\n\t\t\t\theight: initial !important;\n\t\t\t}\n\t\t\n\t\t\tytd-watch-flexy[tyt-tab^="#"]:not([is-two-columns_]):not([tyt-chat="+"]) #right-tabs {\n\t\t\t\tmin-height: var(--ytd-watch-flexy-chat-max-height)\n\t\t\t}\n\t\t\n\t\t\tbody ytd-watch-flexy:not([is-two-columns_]) #chat.ytd-watch-flexy {\n\t\t\tmargin-top: 0;\n\t\t\n\t\t\t}\n\t\t\n\t\t\tbody ytd-watch-flexy:not([is-two-columns_]) ytd-watch-metadata.ytd-watch-flexy {\n\t\t\tmargin-bottom: 0;\n\t\t\t}\n\t\t\n\t\t\tytd-watch-metadata.ytd-watch-flexy ytd-metadata-row-container-renderer {\n\t\t\tdisplay: none;\n\t\t\t}\n\t\t\n\t\t\t/*\n\t\t\t#tab-info #items.style-scope.ytd-video-description-infocards-section-renderer {\n\t\t\n\t\t\tdisplay: inline-flex;\n\t\t\tflex-wrap: wrap;\n\t\t\trow-gap: 8px;\n\t\t\t}\n\t\t\n\t\t\t#tab-info #left-arrow-container.style-scope.ytd-video-description-infocards-section-renderer,\n\t\t\t#tab-info #left-arrow.style-scope.ytd-video-description-infocards-section-renderer,\n\t\t\t#tab-info #right-arrow-container.style-scope.ytd-video-description-infocards-section-renderer,\n\t\t\t#tab-info #right-arrow.style-scope.ytd-video-description-infocards-section-renderer {\n\t\t\tvisibility: collapse;\n\t\t\t}\n\t\t\t*/\n\t\t\n\t\t\t/*\n\t\t\t#tab-info #social-links.style-scope.ytd-video-description-infocards-section-renderer > #left-arrow-container.ytd-video-description-infocards-section-renderer{\n\t\t\tleft:0;\n\t\t\t}\n\t\t\t#tab-info #social-links.style-scope.ytd-video-description-infocards-section-renderer > #right-arrow-container.ytd-video-description-infocards-section-renderer{\n\t\t\tright:0;\n\t\t\t}\n\t\t\n\t\t\t#tab-info #social-links.style-scope.ytd-video-description-infocards-section-renderer > #scroll-container.ytd-video-description-infocards-section-renderer{\n\t\t\tmargin: 0 32px;\n\t\t\t}\n\t\t\t*/\n\t\t\n\t\t\t#tab-info [show-expand-button] #expand-sizer.ytd-text-inline-expander{\n\t\t\tvisibility: initial;\n\t\t\t}\n\t\t\n\t\t\n\t\t\t#tab-info #social-links.style-scope.ytd-video-description-infocards-section-renderer > #left-arrow-container.ytd-video-description-infocards-section-renderer > #left-arrow{\n\t\t\tborder: 6px solid transparent;\n\t\t\topacity: 0.65;\n\t\t\t}\n\t\t\t#tab-info #social-links.style-scope.ytd-video-description-infocards-section-renderer > #right-arrow-container.ytd-video-description-infocards-section-renderer >#right-arrow{\n\t\t\tborder: 6px solid transparent;\n\t\t\topacity: 0.65;\n\t\t\t}\n\t\t\n\t\t\n\t\t\n\t\t\t#tab-info #social-links.style-scope.ytd-video-description-infocards-section-renderer > #left-arrow-container.ytd-video-description-infocards-section-renderer > #left-arrow:hover{\n\t\t\topacity: 1;\n\t\t\t}\n\t\t\t#tab-info #social-links.style-scope.ytd-video-description-infocards-section-renderer > #right-arrow-container.ytd-video-description-infocards-section-renderer >#right-arrow:hover{\n\t\t\n\t\t\t\topacity: 1;\n\t\t\t\t}\n\t\t\n\t\t\n\t\t\t#tab-info #social-links.style-scope.ytd-video-description-infocards-section-renderer >  div#left-arrow-container::before {\n\t\t\t\tcontent: \'\';\n\t\t\t\tbackground: transparent;\n\t\t\t\twidth: 40px;\n\t\t\t\tdisplay: block;\n\t\t\t\theight: 40px;\n\t\t\t\tposition: absolute;\n\t\t\t\tleft: -20px;\n\t\t\t\ttop: 0;\n\t\t\t\tz-index: -1;\n\t\t\t}\n\t\t\t#tab-info #social-links.style-scope.ytd-video-description-infocards-section-renderer >  div#right-arrow-container::before {\n\t\t\t\tcontent: \'\';\n\t\t\t\tbackground: transparent;\n\t\t\t\twidth: 40px;\n\t\t\t\tdisplay: block;\n\t\t\t\theight: 40px;\n\t\t\t\tposition: absolute;\n\t\t\t\tright: -20px;\n\t\t\t\ttop: 0;\n\t\t\t\tz-index: -1;\n\t\t\t}\n\t\t\n\t\t\n\t\t\n\t\t\tbody ytd-watch-flexy[is-two-columns_][tyt-egm-panel_] #columns.style-scope.ytd-watch-flexy #panels.style-scope.ytd-watch-flexy{\n\t\t\t\tflex-grow: 1;\n\t\t\t\tflex-shrink: 0;\n\t\t\t\tdisplay: flex;\n\t\t\t\tflex-direction: column;\n\t\t\t}\n\t\t\n\t\t\n\t\t\tbody ytd-watch-flexy[is-two-columns_][tyt-egm-panel_] #columns.style-scope.ytd-watch-flexy #panels.style-scope.ytd-watch-flexy ytd-engagement-panel-section-list-renderer[target-id][visibility="ENGAGEMENT_PANEL_VISIBILITY_EXPANDED"]{\n\t\t\n\t\t\t\theight: initial;\n\t\t\t\tmax-height: initial;\n\t\t\t\tmin-height: initial;\n\t\t\t\tflex-grow: 1;\n\t\t\t\tflex-shrink: 0;\n\t\t\t\tdisplay: flex;\n\t\t\t\tflex-direction: column;\n\t\t\n\t\t\t\t\n\t\t\t}\n\t\t\n\t\t\n\t\t\tbody ytd-watch-flexy[is-two-columns_][tyt-egm-panel_] #columns.style-scope.ytd-watch-flexy #panels.style-scope.ytd-watch-flexy ytd-engagement-panel-section-list-renderer[target-id][visibility="ENGAGEMENT_PANEL_VISIBILITY_EXPANDED"] #content.style-scope.ytd-engagement-panel-section-list-renderer{\n\t\t\n\t\t\t/*\n\t\t\theight: initial;\n\t\t\tmax-height: initial;\n\t\t\tmin-height: initial;\n\t\t\t\tflex-grow: 1;\n\t\t\t\tflex-shrink: 0;\n\t\t\t\tmargin: 0;\n\t\t\t\tpadding: 0;\n\t\t\t\tborder: 0;\n\t\t\t\tdisplay: flex;\n\t\t\t\tflex-direction: column;\n\t\t\t\t*/\n\t\t\t}\n\t\t\n\t\t\n\t\t\tbody ytd-watch-flexy[is-two-columns_][tyt-egm-panel_] #columns.style-scope.ytd-watch-flexy #panels.style-scope.ytd-watch-flexy ytd-engagement-panel-section-list-renderer[target-id][visibility="ENGAGEMENT_PANEL_VISIBILITY_EXPANDED"] #content.style-scope.ytd-engagement-panel-section-list-renderer > [panel-target-id]{\n\t\t\n\t\t\t/*\n\t\t\theight: initial;\n\t\t\tmax-height: initial;\n\t\t\tmin-height: initial;\n\t\t\t\tflex-grow: 1;\n\t\t\t\tflex-shrink: 0;\n\t\t\t\tmargin: 0;\n\t\t\t\tpadding: 0;\n\t\t\t\tborder: 0;\n\t\t\t\t*/\n\t\t\t}\n\t\t\n\t\t\n\t\t\tsecondary-wrapper [visibility="ENGAGEMENT_PANEL_VISIBILITY_EXPANDED"] ytd-transcript-renderer:not(:empty),\n\t\t\tsecondary-wrapper [visibility="ENGAGEMENT_PANEL_VISIBILITY_EXPANDED"] #body.ytd-transcript-renderer:not(:empty),\n\t\t\tsecondary-wrapper [visibility="ENGAGEMENT_PANEL_VISIBILITY_EXPANDED"]  #content.ytd-transcript-renderer:not(:empty){\n\t\t\n\t\t\tflex-grow: 1;\n\t\t\theight: initial;\n\t\t\tmax-height: initial;\n\t\t\tmin-height: initial;\n\t\t\t}\n\t\t\n\t\t\tsecondary-wrapper #content.ytd-engagement-panel-section-list-renderer{\n\t\t\n\t\t\t\tposition: relative;\n\t\t\t}\n\t\t\n\t\t\t/*\n\t\t\t@supports (contain: strict) {\n\t\t\n\t\t\tsecondary-wrapper #content.ytd-engagement-panel-section-list-renderer > [panel-target-id]:only-child{\n\t\t\n\t\t\t\tcontain: strict;\n\t\t\t\tmax-height: 100%;\n\t\t\t}\n\t\t\n\t\t\t}\n\t\t\n\t\t\n\t\t\t@supports not (contain: strict) {\n\t\t\n\t\t\tsecondary-wrapper #content.ytd-engagement-panel-section-list-renderer > [panel-target-id]:only-child{\n\t\t\n\t\t\t\tposition: absolute;\n\t\t\t\tmax-height: 100%;\n\t\t\t}\n\t\t\n\t\t\t}\n\t\t\t*/\n\t\t\n\t\t\n\t\t\tsecondary-wrapper #content.ytd-engagement-panel-section-list-renderer > [panel-target-id]:only-child{\n\t\t\t/* https://www.youtube.com/watch?v=zLak0dxBKpM Transcript Panel Language Toggle */\n\t\t\tcontain: style size;\n\t\t\t}\n\t\t\n\t\t\tsecondary-wrapper #content.ytd-engagement-panel-section-list-renderer ytd-transcript-segment-list-renderer.ytd-transcript-search-panel-renderer {\n\t\t\tflex-grow: 1;\n\t\t\tcontain: strict;\n\t\t\t}\n\t\t\n\t\t\tsecondary-wrapper #content.ytd-engagement-panel-section-list-renderer ytd-transcript-segment-renderer.style-scope.ytd-transcript-segment-list-renderer {\n\t\t\tcontain: layout paint style;\n\t\t\t}\n\t\t\n\t\t\tsecondary-wrapper #content.ytd-engagement-panel-section-list-renderer ytd-transcript-segment-renderer.style-scope.ytd-transcript-segment-list-renderer > .segment {\n\t\t\tcontain: layout paint style;\n\t\t\t}\n\t\t\n\t\t\n\t\t\n\t\t\t\n\t\t\n\t\t\n\t\t\n\t\t\tbody ytd-watch-flexy[theater] #secondary.ytd-watch-flexy {\n\t\t\t\tmargin-top: var(--ytd-margin-3x);\n\t\t\t\tpadding-top: 0;\n\t\t\t}\n\t\t\n\t\t\tbody ytd-watch-flexy[theater] secondary-wrapper {\n\t\t\t\tmargin-top: 0;\n\t\t\t\tpadding-top: 0;\n\t\t\t}\n\t\t\n\t\t\tbody ytd-watch-flexy[theater] #chat.ytd-watch-flexy{\n\t\t\t\tmargin-bottom:  var(--ytd-margin-2x);\n\t\t\t}\n\t\t\n\t\t\t#tab-comments ytd-comments#comments [field-of-cm-count]{\n\t\t\tmargin-top:0;\n\t\t\t}\n\t\t\t/*\n\t\t\n\t\t\t#tab-info #social-links.ytd-video-description-infocards-section-renderer {\n\t\t\tmargin-bottom:0;\n\t\t\t}\n\t\t\t#tab-info #social-links.ytd-video-description-infocards-section-renderer ~ #infocards-section {\n\t\t\t\tmargin-top: 16px;\n\t\t\t}\n\t\t\n\t\t\t#tab-info ytd-structured-description-content-renderer ytd-video-description-infocards-section-renderer.ytd-structured-description-content-renderer{\n\t\t\tpadding-bottom:0;\n\t\t\t}\n\t\t\t*/\n\t\t\n\t\t\t#tab-info > ytd-expandable-video-description-body-renderer {\n\t\t\tmargin-bottom: var(--ytd-margin-3x);\n\t\t\t}\n\t\t\n\t\t\t#tab-info [class]:last-child {\n\t\t\tmargin-bottom: 0;\n\t\t\tpadding-bottom: 0;\n\t\t\t}\n\t\t\n\t\t\n\t\t\t#tab-info ytd-rich-metadata-row-renderer ytd-rich-metadata-renderer {\n\t\t\tmax-width: initial;\n\t\t\t}\n\t\t\n\t\t\tytd-watch-flexy[is-two-columns_] secondary-wrapper #chat.ytd-watch-flexy {\n\t\t\tmargin-bottom: var(--ytd-margin-3x);\n\t\t\t}\n\t\t\n\t\t\tytd-watch-flexy[tyt-tab] tp-yt-paper-tooltip {\n\t\t\t\twhite-space: nowrap;\n\t\t\t\tcontain: content;\n\t\t\t}\n\t\t\n\t\t\n\t\t\tytd-watch-info-text tp-yt-paper-tooltip.style-scope.ytd-watch-info-text{\n\t\t\tmargin-bottom: -300px;\n\t\t\tmargin-top: -96px;\n\t\t\t}\n\t\t\n\t\t\n\t\t\t[hide-default-text-inline-expander] #bottom-row #description.ytd-watch-metadata {\n\t\t\t\n\t\t\tfont-size: 1.2rem;\n\t\t\tline-height: 1.8rem;\n\t\t\n\t\t\t}\n\t\t\n\t\t\t[hide-default-text-inline-expander] #bottom-row #description.ytd-watch-metadata yt-animated-rolling-number{\n\t\t\t\tfont-size: inherit;\n\t\t\t}\n\t\t\n\t\t\n\t\t\t[hide-default-text-inline-expander] #bottom-row #description.ytd-watch-metadata #info-container.style-scope.ytd-watch-info-text{\n\t\t\talign-items: center;\n\t\t\t}\n\t\t\n\t\t\n\t\t\tytd-watch-flexy[hide-default-text-inline-expander]{\n\t\t\t--tyt-bottom-watch-metadata-margin: 6px;\n\t\t\t}\n\t\t\n\t\t\t[hide-default-text-inline-expander] #bottom-row #description.ytd-watch-metadata > #description-inner.ytd-watch-metadata{\n\t\t\n\t\t\tmargin: 6px 12px; \n\t\t\n\t\t\t}\n\t\t\n\t\t\t[hide-default-text-inline-expander] ytd-watch-metadata[title-headline-xs] h1.ytd-watch-metadata {\n\t\t\n\t\t\tfont-size: 1.8rem;\n\t\t\t}\n\t\t\n\t\t\n\t\t\t\n\t\t\n\t\t\tytd-watch-flexy[is-two-columns_][hide-default-text-inline-expander] #below.style-scope.ytd-watch-flexy ytd-merch-shelf-renderer{\n\t\t\t\tpadding: 0;\n\t\t\t\tborder: 0;\n\t\t\t\tmargin:0;\n\t\t\t}\n\t\t\n\t\t\n\t\t\tytd-watch-flexy[is-two-columns_][hide-default-text-inline-expander] #below.style-scope.ytd-watch-flexy ytd-watch-metadata.ytd-watch-flexy {\n\t\t\tmargin-bottom: 6px;\n\t\t\t}\n\t\t\n\t\t\t#tab-info yt-video-attribute-view-model .yt-video-attribute-view-model--horizontal .yt-video-attribute-view-model__link-container .yt-video-attribute-view-model__hero-section {\n\t\t\tflex-shrink:0;\n\t\t\t}\n\t\t\n\t\t\n\t\t\t#tab-info yt-video-attribute-view-model .yt-video-attribute-view-model__overflow-menu{\n\t\t\tbackground: var(--yt-emoji-picker-category-background-color);\n\t\t\tborder-radius: 99px;\n\t\t\t}\n\t\t\n\t\t\t#tab-info yt-video-attribute-view-model .yt-video-attribute-view-model--image-square.yt-video-attribute-view-model--image-large .yt-video-attribute-view-model__hero-section{\n\t\t\n\t\t\tmax-height: 128px;\n\t\t\t}\n\t\t\n\t\t\t#tab-info yt-video-attribute-view-model .yt-video-attribute-view-model--image-large .yt-video-attribute-view-model__hero-section{\n\t\t\n\t\t\tmax-width: 128px;\n\t\t\t}\n\t\t\n\t\t\t#tab-info ytd-reel-shelf-renderer #items.yt-horizontal-list-renderer ytd-reel-item-renderer.yt-horizontal-list-renderer {\n\t\t\tmax-width: 142px;\n\t\t\t}\n\t\t\n\t\t\tytd-watch-info-text#ytd-watch-info-text.style-scope.ytd-watch-metadata #view-count.style-scope.ytd-watch-info-text{\n\t\t\talign-items: center;\n\t\t\t\n\t\t\t}\n\t\t\n\t\t\n\t\t\tytd-watch-info-text#ytd-watch-info-text.style-scope.ytd-watch-metadata #date-text.style-scope.ytd-watch-info-text{\n\t\t\talign-items: center;\n\t\t\t\n\t\t\t}\n\t\t\n\t\t\n\t\t\tytd-watch-info-text:not([detailed]) #info.ytd-watch-info-text a.yt-simple-endpoint.yt-formatted-string {\n\t\t\n\t\t\tpointer-events: none;\n\t\t\t}\n\t\t\n\t\t\n\t\t\tbody ytd-app > ytd-popup-container > tp-yt-iron-dropdown > #contentWrapper >  [slot="dropdown-content"] {\n\t\t\n\t\t\t\tbackdrop-filter: none ;\n\t\t\t}\n\t\t\n\t\t\t#tab-info [tyt-clone-refresh-count] {\n\t\t\toverflow: visible !important;\n\t\t\t}\n\t\t\n\t\t\t/* css unknown sizing bug */\n\t\t\t#tab-info #items.ytd-horizontal-card-list-renderer yt-video-attribute-view-model.ytd-horizontal-card-list-renderer {\n\t\t\t\tcontain: layout;\n\t\t\t}\n\t\t\n\t\t\n\t\t\t/* https://www.youtube.com/watch?v=2h3pbdTPu6Q */\n\t\t\n\t\t\t#tab-info #thumbnail-container.ytd-structured-description-channel-lockup-renderer {\n\t\t\t\n\t\t\t\tflex-shrink: 0;\n\t\t\t}\n\t\t\t#tab-info ytd-media-lockup-renderer[is-compact] #thumbnail-container.ytd-media-lockup-renderer {\n\t\t\t\n\t\t\t\tflex-shrink: 0;\n\t\t\t}\n\t\t\n\t\t\t/* https://www.youtube.com/watch?v=cV2gBU6hKfY */\n\t\t\tsecondary-wrapper ytd-donation-unavailable-renderer{\n\t\t\t--ytd-margin-6x:var(--ytd-margin-2x);\n\t\t\t--ytd-margin-5x:var(--ytd-margin-2x);\n\t\t\t--ytd-margin-4x:var(--ytd-margin-2x);\n\t\t\t--ytd-margin-3x:var(--ytd-margin-2x);\n\t\t\t}\n\t\t\n\t\t\n\t\t\t[tyt-no-less-btn] #less{\n\t\t\tdisplay: none;\n\t\t\t}\n\t\t\n\t\t\t.tyt-metadata-hover-resized #purchase-button,\n\t\t\t.tyt-metadata-hover-resized #sponsor-button,\n\t\t\t.tyt-metadata-hover-resized #analytics-button,\n\t\t\t.tyt-metadata-hover-resized #subscribe-button\n\t\t\t{\n\t\t\tdisplay: none !important;\n\t\t\t}\n\t\t\n\t\t\t.tyt-metadata-hover #upload-info {\n\t\t\tmax-width: max-content;\n\t\t\tmin-width: max-content;\n\t\t\tflex-basis: 100vw;\n\t\t\tflex-shrink: 0;\n\t\t\t}\n\t\t\n\t\t\t#tab-info ytd-structured-description-playlist-lockup-renderer[collections] #playlist-thumbnail.style-scope.ytd-structured-description-playlist-lockup-renderer {\n\t\t\t\tmax-width: 100%;\n\t\t\t}\n\t\t\n\t\t\t#tab-info ytd-structured-description-playlist-lockup-renderer[collections] #lockup-container.ytd-structured-description-playlist-lockup-renderer{\n\t\t\t\tpadding: 1px;\n\t\t\t}\n\t\t\n\t\t\t#tab-info ytd-structured-description-playlist-lockup-renderer[collections] #thumbnail.ytd-structured-description-playlist-lockup-renderer {\n\t\t\t\toutline: 1px solid rgba(127, 127, 127, 0.5);\n\t\t\t}\n\t\t\n\t\t\t/* minor spacing fix */\n\t\t\n\t\t\t/* https://www.youtube.com/watch?v=wAcY2fx0UWQ */\n\t\t\tytd-live-chat-frame#chat[collapsed] ytd-message-renderer ~ #show-hide-button.ytd-live-chat-frame>ytd-toggle-button-renderer.ytd-live-chat-frame\n\t\t\t{\n\t\t\tpadding:0;\n\t\t\t}\n\t\t\n\t\t\t.tyt-info-invisible {\n\t\t\tdisplay: none;\n\t\t\t}\n\t\t\n\t\t\t[tyt-playlist-expanded] secondary-wrapper > ytd-playlist-panel-renderer#playlist {\n\t\t\t\toverflow: auto;\n\t\t\t\tflex-shrink: 1;\n\t\t\t\tflex-grow: 1;\n\t\t\t\tmax-height: unset !important;\n\t\t\t}\n\t\t\n\t\t\t[tyt-playlist-expanded] secondary-wrapper > ytd-playlist-panel-renderer#playlist > #container {\n\t\t\tmax-height: unset !important;\n\t\t\t}\n\t\t\n\t\t\tsecondary-wrapper ytd-playlist-panel-renderer{\n\t\t\t--ytd-margin-6x: var(--ytd-margin-3x);\n\t\t\t}\n\t\t\n\t\t\tytd-watch-flexy[theater] ytd-playlist-panel-renderer[collapsible][collapsed] .header.ytd-playlist-panel-renderer {\n\t\t\tpadding: 6px 8px;\n\t\t\t}\n\t\t\tytd-watch-flexy[theater] #playlist.ytd-watch-flexy {\n\t\t\tmargin-bottom: var(--ytd-margin-2x);\n\t\t\t}\n\t\t\n\t\t\tytd-watch-flexy[theater] #right-tabs .tab-btn[tyt-tab-content] {\n\t\t\tpadding: 8px 4px 6px;\n\t\t\tborder-bottom: 0px solid transparent;\n\t\t\t}\n\t\t\n\t\t\tytd-watch-flexy {\n\t\t\t--tyt-bottom-watch-metadata-margin: 12px;  \n\t\t\t}\n\t\t\tytd-watch-flexy[rounded-info-panel], \n\t\t\tytd-watch-flexy[rounded-player-large] {\n\t\t\t--tyt-rounded-a1: 12px;\n\t\t\t}\n\t\t\n\t\t\t#bottom-row.style-scope.ytd-watch-metadata .item.ytd-watch-metadata {\n\t\t\tmargin-right: var(--tyt-bottom-watch-metadata-margin, 12px);\n\t\t\tmargin-top: var(--tyt-bottom-watch-metadata-margin, 12px);\n\t\t\t}\n\t\t\n\t\t\t/* fix cinematics lighting issue */\n\t\t\t#cinematics {\n\t\t\tcontain: layout style size;\n\t\t\t}\n\t\t\n\t\t\t'
                };
            (async () => {
                const t = `ck-${Date.now()}-${Math.floor(314159265359*Math.random()+314159265359).toString(36)}`,
                    n = (async () => {})().constructor;
                if (!document.documentElement)
                    for (await n.resolve(0); !document.documentElement;) await new n((t => nextBrowserTick(t))).then().catch(console.warn);
                const i = `(${o})("${t}");\n\n//# sourceURL=debug://tabview-youtube/tabview.execution.js\n`;
                let r = document.createElement("button");
                r.setAttribute("onclick", e(i)), r.click(), r = null;
                let s = document.createElement("style");
                s.textContent = `${a.main.trim()}\n\n/*# sourceURL=debug://tabview-youtube/tabview.main.css */\n`, document.documentElement.appendChild(s)
            })()
        }
    }, t.ThemeProgressBarHelper = function(e) {
        this.run = function() {
            return new Promise((t => {
                this.style(), t()
            }))
        }, this.style = function() {
            if (!e.helper.dao.getData(t.opts.storageKeys.youtube.functionState.themeProgressBar, e.helper.dao.getDefaults().yt.themeProgressBar)) return;
            const n = document.createElement("style");
            n.type = "text/css", n.media = "screen", n.textContent = '\n                .html5-play-progress, .ytp-play-progress {\n                    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAMCAIAAAAs6UAAAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QUNCQzIyREQ0QjdEMTFFMzlEMDM4Qzc3MEY0NzdGMDgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QUNCQzIyREU0QjdEMTFFMzlEMDM4Qzc3MEY0NzdGMDgiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBQ0JDMjJEQjRCN0QxMUUzOUQwMzhDNzcwRjQ3N0YwOCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBQ0JDMjJEQzRCN0QxMUUzOUQwMzhDNzcwRjQ3N0YwOCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PovDFgYAAAAmSURBVHjaYvjPwMAAxjMZmBhA9H8INv4P4TPM/A+m04zBNECAAQBCWQv9SUQpVgAAAABJRU5ErkJggg==") repeat-x !important; \n                    background: linear-gradient(to bottom, #FF0000 0%, #FF0000 16.5%, #FF9900 16.5%, #FF9900 33%, #FFFF00 33%, #FFFF00 50%, #33FF00 50%, #33FF00 66%, #0099FF 66%, #0099FF 83.5%, #6633ff 83.5%, #6633ff 100%) !important;\n                    background: -webkit-linear-gradient(top, #FF0000 0%, #FF0000 16.5%, #FF9900 16.5%, #FF9900 33%, #FFFF00 33%, #FFFF00 50%, #33FF00 50%, #33FF00 66%, #0099FF 66%, #0099FF 83.5%, #6633ff 83.5%, #6633ff 100%) !important;\n                    background: -moz-linear-gradient(top, #FF0000 0%, #FF0000 16.5%, #FF9900 16.5%, #FF9900 33%, #FFFF00 33%, #FFFF00 50%, #33FF00 50%, #33FF00 66%, #0099FF 66%, #0099FF 83.5%, #6633ff 83.5%, #6633ff 100%) !important;\n                }\n\n                .html5-load-progress, .ytp-load-progress {\n                background:  url("data:image/gif;base64,R0lGODlhMAAMAIAAAAxBd////yH/C05FVFNDQVBFMi4wAwEAAAAh+QQECgAAACwAAAAAMAAMAAACJYSPqcvtD6MKstpLr24Z9A2GYvJ544mhXQmxoesElIyCcB3dRgEAIfkEBAoAAAAsAQACAC0ACgAAAiGEj6nLHG0enNQdWbPefOHYhSLydVhJoSYXPO04qrAmJwUAIfkEBAoAAAAsBQABACkACwAAAiGEj6nLwQ8jcC5ViW3evHt1GaE0flxpphn6BNTEqvI8dQUAIfkEBAoAAAAsAQABACoACwAAAiGEj6nLwQ+jcU5VidPNvPtvad0GfmSJeicUUECbxnK0RgUAIfkEBAoAAAAsAAAAACcADAAAAiCEj6mbwQ+ji5QGd6t+c/v2hZzYiVpXmuoKIikLm6hXAAAh+QQECgAAACwAAAAALQAMAAACI4SPqQvBD6NysloTXL480g4uX0iW1Wg21oem7ismLUy/LFwAACH5BAQKAAAALAkAAAAkAAwAAAIghI8Joe0Po0yBWTaz3g/z7UXhMX7kYmplmo0rC8cyUgAAIfkEBAoAAAAsBQAAACUACgAAAh2Ejwmh7Q+jbIFZNrPeEXPudU74IVa5kSiYqOtRAAAh+QQECgAAACwEAAAAIgAKAAACHISPELfpD6OcqTGKs4bWRp+B36YFi0mGaVmtWQEAIfkEBAoAAAAsAAAAACMACgAAAh2EjxC36Q+jnK8xirOW1kavgd+2BYtJhmnpiGtUAAAh+QQECgAAACwAAAAALgALAAACIYSPqcvtD+MKicqLn82c7e6BIhZQ5jem6oVKbfdqQLzKBQAh+QQECgAAACwCAAIALAAJAAACHQx+hsvtD2OStDplKc68r2CEm0eW5uSN6aqe1lgAADs=") !important;\n                }\n\n                .html5-scrubber-button, .ytp-scrubber-button {background: url("data:image/gif;base64,R0lGODlhIgAVAKIHAL3/9/+Zmf8zmf/MmZmZmf+Z/wAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpDMkJBNjY5RTU1NEJFMzExOUM4QUM2MDAwNDQzRERBQyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCREIzOEIzMzRCN0IxMUUzODhEQjgwOTYzMTgyNTE0QiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCREIzOEIzMjRCN0IxMUUzODhEQjgwOTYzMTgyNTE0QiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkM1QkE2NjlFNTU0QkUzMTE5QzhBQzYwMDA0NDNEREFDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkMyQkE2NjlFNTU0QkUzMTE5QzhBQzYwMDA0NDNEREFDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Af/+/fz7+vn49/b19PPy8fDv7u3s6+rp6Ofm5eTj4uHg397d3Nva2djX1tXU09LR0M/OzczLysnIx8bFxMPCwcC/vr28u7q5uLe2tbSzsrGwr66trKuqqainpqWko6KhoJ+enZybmpmYl5aVlJOSkZCPjo2Mi4qJiIeGhYSDgoGAf359fHt6eXh3dnV0c3JxcG9ubWxramloZ2ZlZGNiYWBfXl1cW1pZWFdWVVRTUlFQT05NTEtKSUhHRkVEQ0JBQD8+PTw7Ojk4NzY1NDMyMTAvLi0sKyopKCcmJSQjIiEgHx4dHBsaGRgXFhUUExIREA8ODQwLCgkIBwYFBAMCAQAAIfkECQcABwAsAAAAACIAFQAAA6J4umv+MDpG6zEj682zsRaWFWRpltoHMuJZCCRseis7xG5eDGp93bqCA7f7TFaYoIFAMMwczB5EkTzJllEUttmIGoG5bfPBjDawD7CsJC67uWcv2CRov929C/q2ZpcBbYBmLGk6W1BRY4MUDnMvJEsBAXdlknk2fCeRk2iJliAijpBlEmigjR0plKSgpKWvEUheF4tUZqZID1RHjEe8PsDBBwkAIfkECQcABwAsAAAAACIAFQAAA6B4umv+MDpG6zEj682zsRaWFWRpltoHMuJZCCRseis7xG5eDGp93TqS40XiKSYgTLBgIBAMqE/zmQSaZEzns+jQ9pC/5dQJ0VIv5KMVWxqb36opxHrNvu9ptPfGbmsBbgSAeRdydCdjXWRPchQPh1hNAQF4TpM9NnwukpRyi5chGjqJEoSOIh0plaYsZBKvsCuNjY5ptElgDyFIuj6+vwcJACH5BAkHAAcALAAAAAAiABUAAAOfeLrc/vCZSaudUY7Nu99GxhhcYZ7oyYXiQQ5pIZgzCrYuLMd8MbAiUu802flYGIhwaCAQDKpQ86nUoWqF6dP00wIby572SXE6vyMrlmhuu9GKifWaddvNQAtszXYCxgR/Zy5jYTFeXmSDiIZGdQEBd06QSBQ5e4cEkE9nnZQaG2J4F4MSLx8rkqUSZBeurhlTUqsLsi60DpZxSWBJugcJACH5BAkHAAcALAAAAAAiABUAAAOgeLrc/vCZSaudUY7Nu99GxhhcYZ7oyYXiQQ5pIZgzCrYuLMd8MbAiUu802flYGIhwaCAQDKpQ86nUoWqF6dP00wIby572SXE6vyMrlmhuu9GuifWaddvNwMkZtmY7AWMEgGcKY2ExXl5khFMVc0Z1AQF3TpJShDl8iASST2efloV5JTyJFpgOch8dgW9KZxexshGNLqgLtbW0SXFwvaJfCQAh+QQJBwAHACwAAAAAIgAVAAADoXi63P7wmUmrnVGOzbvfRsYYXGGe6MmF4kEOaSGYMwq2LizHfDGwIlLPNKGZfi6gZmggEAy2iVPZEKZqzakq+1xUFFYe90lxTsHmim6HGpvf3eR7skYJ3PC5tyystc0AboFnVXQ9XFJTZIQOYUYFTQEBeWaSVF4bbCeRk1meBJYSL3WbaReMIxQfHXh6jaYXsbEQni6oaF21ERR7l0ksvA0JACH5BAkHAAcALAAAAAAiABUAAAOeeLrc/vCZSaudUY7Nu99GxhhcYZ7oyYXiQQ5pIZgzCrYuLMfFlA4hTITEMxkIBMOuADwmhzqeM6mashTCXKw2TVKQyKuTRSx2wegnNkyJ1ozpOFiMLqcEU8BZHx6NYW8nVlZefQ1tZgQBAXJIi1eHUTRwi0lhl48QL0sogxaGDhMlUo2gh14fHhcVmnOrrxNqrU9joX21Q0IUElm7DQkAIfkECQcABwAsAAAAACIAFQAAA6J4umv+MDpG6zEj682zsRaWFWRpltoHMuJZCCRseis7xG5eDGp93bqCA7f7TFaYoIFAMMwczB5EkTzJllEUttmIGoG5bfPBjDawD7CsJC67uWcv2CRov929C/q2ZpcBbYBmLGk6W1BRY4MUDnMvJEsBAXdlknk2fCeRk2iJliAijpBlEmigjR0plKSgpKWvEUheF4tUZqZID1RHjEe8PsDBBwkAIfkECQcABwAsAAAAACIAFQAAA6B4umv+MDpG6zEj682zsRaWFWRpltoHMuJZCCRseis7xG5eDGp93TqS40XiKSYgTLBgIBAMqE/zmQSaZEzns+jQ9pC/5dQJ0VIv5KMVWxqb36opxHrNvu9ptPfGbmsBbgSAeRdydCdjXWRPchQPh1hNAQF4TpM9NnwukpRyi5chGjqJEoSOIh0plaYsZBKvsCuNjY5ptElgDyFIuj6+vwcJACH5BAkHAAcALAAAAAAiABUAAAOfeLrc/vCZSaudUY7Nu99GxhhcYZ7oyYXiQQ5pIZgzCrYuLMd8MbAiUu802flYGIhwaCAQDKpQ86nUoWqF6dP00wIby572SXE6vyMrlmhuu9GKifWaddvNQAtszXYCxgR/Zy5jYTFeXmSDiIZGdQEBd06QSBQ5e4cEkE9nnZQaG2J4F4MSLx8rkqUSZBeurhlTUqsLsi60DpZxSWBJugcJACH5BAkHAAcALAAAAAAiABUAAAOgeLrc/vCZSaudUY7Nu99GxhhcYZ7oyYXiQQ5pIZgzCrYuLMd8MbAiUu802flYGIhwaCAQDKpQ86nUoWqF6dP00wIby572SXE6vyMrlmhuu9GuifWaddvNwMkZtmY7AWMEgGcKY2ExXl5khFMVc0Z1AQF3TpJShDl8iASST2efloV5JTyJFpgOch8dgW9KZxexshGNLqgLtbW0SXFwvaJfCQAh+QQJBwAHACwAAAAAIgAVAAADoXi63P7wmUmrnVGOzbvfRsYYXGGe6MmF4kEOaSGYMwq2LizHfDGwIlLPNKGZfi6gZmggEAy2iVPZEKZqzakq+1xUFFYe90lxTsHmim6HGpvf3eR7skYJ3PC5tyystc0AboFnVXQ9XFJTZIQOYUYFTQEBeWaSVF4bbCeRk1meBJYSL3WbaReMIxQfHXh6jaYXsbEQni6oaF21ERR7l0ksvA0JACH5BAkHAAcALAAAAAAiABUAAAOeeLrc/vCZSaudUY7Nu99GxhhcYZ7oyYXiQQ5pIZgzCrYuLMfFlA4hTITEMxkIBMOuADwmhzqeM6mashTCXKw2TVKQyKuTRSx2wegnNkyJ1ozpOFiMLqcEU8BZHx6NYW8nVlZefQ1tZgQBAXJIi1eHUTRwi0lhl48QL0sogxaGDhMlUo2gh14fHhcVmnOrrxNqrU9joX21Q0IUElm7DQkAOw==") !important;\n                width: 34px !important;\n                height: 21px !important;\n                border: none !important;\n                margin-left: -18px !important;\n                margin-top: 0px !important;\n                transform: scale(0.8);\n                -webkit-transform: scale(0.8);\n                -moz-transform: scale(0.8);\n                -ms-transform: scale(0.8);\n                }\n                .ytp-progress-bar-container:hover .ytp-scrubber-button,\n                .ytp-progress-bar-container:hover .ytp-load-progress{\n                    image-rendering: pixelated;\n                }\n                .html5-progress-bar-container, .ytp-progress-bar-container {\n                height: 12px !important;\n                }\n                .html5-progress-bar, .ytp-progress-bar {\n                margin-top: 12px !important;\n                }\n                .html5-progress-list, .ytp-progress-list, .video-ads .html5-progress-list.html5-ad-progress-list, .video-ads .ytp-progress-list.ytp-ad-progress-list {\n                height: 12px !important;\n                }\n                .ytp-volume-slider-track {\n                background: #0C4177 !important;\n                }\n            ', document.documentElement.appendChild(n)
        }
    }, t.ThemeHelper = function(e) {
        this.setTheme = function(t = "light", e = !0, a = !1) {
            "light" === t ? o(e, a) : "dark" === t ? n(e, a) : o(e, a)
        };
        const n = (t, e) => {
                e ? i(!0, t) : a(!0, t)
            },
            o = (t, e) => {
                e ? i(!1, t) : a(!1, t)
            },
            a = (e, n) => {
                t.api.cookies.get({
                    url: "https://www.youtube.com",
                    name: "PREF"
                }, (n => {
                    const o = {
                        url: "https://www.youtube.com",
                        domain: ".youtube.com",
                        name: "PREF",
                        value: n ? n.value : "f6=400"
                    };
                    o.value = o.value.replace(/&f6=\d+/, "").replace(/f6=\d+/, "");
                    const a = o.value ? "&" : "";
                    o.value += e ? a + "f6=400" : a + "f6=80000", t.api.cookies.set(o)
                })), n && t.api.tabs.query({}, (function(e) {
                    for (var n = 0; n < e.length; n++) e[n].url && e[n].url.includes("youtube.com") && t.api.tabs.reload(e[n].id)
                }))
            },
            i = (t, e) => {
                let n = document.cookie.split("; ").find((t => t.startsWith("PREF="))),
                    o = n ? n.split("=")[1] : "f6=400";
                o = o.replace(/&f6=\d+/, "").replace(/f6=\d+/, "");
                const a = o ? "&" : "";
                o += t ? a + "f6=400" : a + "f6=80000", document.cookie = `PREF=${o}; path=/; domain=.youtube.com; secure`, e && location.reload()
            }
    }, t.TipsHelper = function(e) {
        this.init = function() {
            t.onPageLoad((() => {
                this.tipsListener(), setInterval((() => {
                    this.tipsListener()
                }), 2e3)
            }))
        }, this.tipsListener = function() {
            const e = document.createElement("div");
            e.setAttribute("style", "display: none;\n                position: absolute;\n                background-color: rgba(0, 0, 0, 0.7);\n                color: white;\n                padding: 5px 10px;\n                border-radius: 5px;\n                font-size: 13px;\n                pointer-events: none; /* 防止提示框影响到鼠标事件 */"), document.body.appendChild(e);
            document.querySelectorAll("[" + t.opts.tips.message + "]:not([" + t.opts.tips.result + "='true'])").forEach((n => {
                n.setAttribute(`${t.opts.tips.result}`, "true"), n.addEventListener("mouseenter", (n => {
                    const o = n.target.getAttribute(t.opts.tips.message);
                    if (!o) return;
                    e.textContent = o, e.style.display = "block";
                    const a = n.target.getBoundingClientRect(),
                        i = a.width,
                        r = e.offsetWidth,
                        s = a.left + window.scrollX + (i - r) / 2;
                    e.style.left = `${s}px`, e.style.top = a.top + window.scrollY - e.offsetHeight - 15 + "px"
                })), n.addEventListener("mouseleave", (() => {
                    e.style.display = "none"
                }))
            }))
        }
    }, t.ToolBoxHelper = function(e) {
        this.genrateToolBoxSvg = function() {
            const t = "http://www.w3.org/2000/svg",
                e = document.createElementNS(t, "svg");
            e.setAttribute("viewBox", "0 0 1024 1024"), e.setAttribute("width", "22"), e.setAttribute("height", "22"), e.setAttribute("class", "icon");
            const n = document.createElementNS(t, "path");
            return n.setAttribute("d", "M364.999 128.853H158.28c-52.383 0-95 42.617-95 95v206.719c0 52.383 42.617 95 95 95h206.719c52.383 0 95-42.617 95-95V223.853c0-52.384-42.617-95-95-95zM364.999 562.39H158.28c-52.383 0-95 42.617-95 95v206.719c0 52.383 42.617 95 95 95h206.719c52.383 0 95-42.617 95-95V657.39c0-52.383-42.617-95-95-95zM943.066 230.037L796.895 83.865c-17.943-17.943-41.8-27.825-67.175-27.825-25.376 0-49.232 9.881-67.175 27.825L516.372 230.037c-37.041 37.041-37.041 97.31 0 134.35l146.172 146.172c17.943 17.943 41.8 27.825 67.176 27.825 25.375 0 49.231-9.882 67.175-27.825l146.172-146.172c17.943-17.943 27.825-41.8 27.825-67.175s-9.882-49.233-27.826-67.175z m-21.212 113.137L775.682 489.346c-12.277 12.277-28.601 19.038-45.962 19.038-17.362 0-33.686-6.761-45.963-19.038L537.585 343.174c-25.343-25.344-25.343-66.581 0-91.924l146.173-146.172c12.276-12.277 28.6-19.038 45.962-19.038 17.361 0 33.685 6.761 45.962 19.038L921.854 251.25c12.276 12.277 19.038 28.6 19.038 45.962s-6.762 33.685-19.038 45.962zM798.887 562.39H592.168c-52.383 0-95 42.617-95 95v206.719c0 52.383 42.617 95 95 95h206.719c52.383 0 95-42.617 95-95V657.39c0-52.383-42.617-95-95-95z"), n.setAttribute("fill", "#ffffff"), e.appendChild(n), e
        }, this.genrateDownloadSvg = function(t = 20, e = 20) {
            const n = "http://www.w3.org/2000/svg",
                o = document.createElementNS(n, "svg");
            o.setAttribute("t", "1743576847386"), o.setAttribute("class", "icon"), o.setAttribute("viewBox", "0 0 1024 1024"), o.setAttribute("version", "1.1"), o.setAttribute("xmlns", n), o.setAttribute("p-id", "1746"), o.setAttribute("width", t), o.setAttribute("height", e);
            const a = document.createElementNS(n, "path");
            a.setAttribute("d", "M32 32h960v960H32z"), a.setAttribute("fill", "#000000"), a.setAttribute("fill-opacity", "0"), a.setAttribute("p-id", "1747");
            const i = document.createElementNS(n, "path");
            return i.setAttribute("d", "M852.00000031 476.54c21.07999969 0 38.35999969 16.51999969 39.9 37.5l0.09999938 3.01999969v212.80000031C891.99999969 819.42000031 820.35999969 891.99999969 732.00000031 891.99999969H291.99999969c-88.36000031 0-160.00000031-72.6-159.99999938-162.13999969v-212.80000031l0.09999938-3A40.21999969 40.21999969 0 0 1 171.99999969 476.52000031c21.07999969 0 38.35999969 16.51999969 39.9 37.5l0.10000031 3.01999969v212.80000031c0 44.77999969 35.80000031 81.07999969 79.99999969 81.07999969h440.00000062c44.20000031 0 79.99999969-36.3 79.99999969-81.07999969v-212.80000031l0.10000031-3A40.21999969 40.21999969 0 0 1 852.00000031 476.52000031zM512 132.00000031a40.00000031 40.00000031 0 0 1 40.00000031 39.99999938v342.24l99.63999938-104.13999938a45.94000031 45.94000031 0 0 1 66.46000031 0.06 50.4 50.4 0 0 1-0.06 69.6l-170.34 178.03999969a45.94000031 45.94000031 0 0 1-66.28000031 0.13999969 46.62 46.62 0 0 1-4.38-4.03999969l-170.34-178.02a50.4 50.4 0 0 1-0.06-69.6 45.94000031 45.94000031 0 0 1 64.96000031-1.57999969l1.5 1.5L471.99999969 509.55999969V171.99999969a40.00000031 40.00000031 0 0 1 40.00000031-39.99999938z"), i.setAttribute("fill", "#000000"), i.setAttribute("p-id", "1748"), o.appendChild(a), o.appendChild(i), o
        }, this.genrateShortDownloadSvg = function() {
            const t = "http://www.w3.org/2000/svg",
                e = document.createElementNS(t, "svg");
            e.setAttribute("viewBox", "0 0 1024 1024"), e.setAttribute("width", "32"), e.setAttribute("height", "32");
            return [{
                d: "M0 0m512 0l0 0q512 0 512 512l0 0q0 512-512 512l0 0q-512 0-512-512l0 0q0-512 512-512Z",
                opacity: "0.7"
            }, {
                d: "M671.1552 727.2192H350.4128a95.7696 95.7696 0 0 1-96.2304-95.104v-190.2336a31.872 31.872 0 0 1 32.0768-31.7184 31.872 31.872 0 0 1 32.0768 31.7184v190.2336a31.9232 31.9232 0 0 0 32.0768 31.6928h320.7424a31.9232 31.9232 0 0 0 32.0768-31.6928v-190.2336a32.0768 32.0768 0 0 1 64.1536 0v190.2336a95.7696 95.7696 0 0 1-96.2304 95.104z",
                fill: "#FFFFFF"
            }, {
                d: "M499.1232 563.7376a16.5632 16.5632 0 0 0 23.3472 0l108.7744-108.8256c6.4256-6.4256 4.2496-11.6736-4.8384-11.6736h-33.0496a16.5632 16.5632 0 0 1-16.512-16.5376v-66.0992a16.5376 16.5376 0 0 0-16.512-16.512h-99.0976a16.5632 16.5632 0 0 0-16.512 16.512v66.0992a16.5632 16.5632 0 0 1-16.512 16.5376h-33.1008c-9.088 0-11.264 5.248-4.8384 11.6736z",
                fill: "#FFFFFF"
            }, {
                d: "M446.2336 294.5792a16.512 16.512 0 1 1 16.512 16.5376 16.5376 16.5376 0 0 1-16.512-16.5376z",
                fill: "#FFFFFF"
            }, {
                d: "M542.2848 294.5792a16.512 16.512 0 1 1 16.512 16.5376 16.5376 16.5376 0 0 1-16.512-16.5376z",
                fill: "#FFFFFF"
            }, {
                d: "M461.2352 277.9904h99.0976v33.0496h-99.0976z",
                fill: "#FFFFFF"
            }].forEach((n => {
                const o = document.createElementNS(t, "path");
                for (let t in n) o.setAttribute(t, n[t]);
                e.appendChild(o)
            })), e
        }, this.genrateScreenshotSvg = function() {
            const t = "http://www.w3.org/2000/svg",
                e = document.createElementNS(t, "svg");
            e.setAttribute("viewBox", "0 0 1024 1024"), e.setAttribute("width", "20"), e.setAttribute("height", "20"), e.setAttribute("class", "icon");
            const n = document.createElementNS(t, "path");
            n.setAttribute("d", "M924.49999971 755.74999971h-93.74999942V287c0-52.49999971-41.24999971-93.75000029-93.75000029-93.75000029H268.25000029V99.50000029c0-22.5-15.00000029-37.50000029-37.50000029-37.50000029s-37.50000029 15.00000029-37.50000029 37.50000029v93.74999942H99.50000029c-22.5 0-37.50000029 15.00000029-37.50000029 37.50000029s15.00000029 37.50000029 37.50000029 37.50000029h93.74999942V737c0 52.49999971 41.24999971 93.75000029 93.75000029 93.75000029h468.74999971V924.49999971c0 22.5 15.00000029 37.50000029 37.50000029 37.50000029s37.50000029-15.00000029 37.50000029-37.50000029v-93.74999942H924.49999971c22.5 0 37.50000029-15.00000029 37.50000029-37.50000029s-15.00000029-37.50000029-37.50000029-37.50000029z m-187.49999971-487.49999942c11.25 0 18.74999971 7.49999971 18.74999971 18.74999971v299.99999971l-127.49999942-123.75c-15.00000029-15.00000029-37.50000029-15.00000029-52.50000058 0l-123.75 127.50000029L399.5 538.25000029c-15.00000029-15.00000029-33.75-15.00000029-48.75000029-3.75000029l-78.75 63.74999971V268.25000029H737z m-450 487.49999942c-11.25 0-18.74999971-7.49999971-18.74999971-18.74999971v-37.50000029l101.25-82.49999942 56.25 56.25c7.49999971 7.49999971 15.00000029 11.25 26.24999942 11.25s18.74999971-3.75000029 26.25000029-11.25l123.75-127.50000029 153.74999971 146.25v63.74999971H287z"), n.setAttribute("fill", "#000000");
            const o = document.createElementNS(t, "path");
            return o.setAttribute("d", "M399.5 485.74999971c45 0 82.50000029-37.50000029 82.50000029-82.49999942s-37.50000029-82.50000029-82.50000029-82.50000029-82.50000029 33.75-82.50000029 78.75 37.50000029 86.24999971 82.50000029 86.24999971z m0-112.5c15.00000029 0 29.99999971 11.25 29.99999971 30.00000058s-15.00000029 26.25000029-29.99999971 26.24999942-29.99999971-15.00000029-29.99999971-29.99999971 15.00000029-26.25000029 29.99999971-26.25000029z"), o.setAttribute("fill", "#000000"), e.appendChild(n), e.appendChild(o), e
        }, this.genrateSwitchThemeSvg = function() {
            const t = "http://www.w3.org/2000/svg",
                e = document.createElementNS(t, "svg");
            e.setAttribute("t", "1743577080138"), e.setAttribute("class", "icon"), e.setAttribute("viewBox", "0 0 1024 1024"), e.setAttribute("version", "1.1"), e.setAttribute("xmlns", t), e.setAttribute("p-id", "1950"), e.setAttribute("width", "20"), e.setAttribute("height", "20");
            const n = document.createElementNS(t, "path");
            return n.setAttribute("d", "M873.91601563 358.72753906A393.42480469 393.42480469 0 0 0 512 118.25c-217.546875 0.47460938-393.75 176.57226563-393.75 393.75s176.203125 393.27539063 393.75 393.75a393.95214844 393.95214844 0 0 0 361.91601563-547.02246094zM749.77050781 750.65820313A335.27636719 335.27636719 0 0 1 512 849.5V174.5a337.5 337.5 0 0 1 237.77050781 576.15820313z"), n.setAttribute("p-id", "1951"), e.appendChild(n), e
        }, this.genrateVideoTabSvg = function() {
            const t = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            t.setAttribute("width", "20"), t.setAttribute("height", "20"), t.setAttribute("viewBox", "0 0 24 24"), t.setAttribute("stroke-width", "2"), t.setAttribute("stroke", "currentColor"), t.setAttribute("fill", "none"), t.setAttribute("stroke-linecap", "round"), t.setAttribute("stroke-linejoin", "round");
            return [{
                d: "M0 0h24v24H0z",
                fill: "none"
            }, {
                d: "M3 16m0 1a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1z"
            }, {
                d: "M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-6"
            }, {
                d: "M12 8h4v4"
            }, {
                d: "M16 8l-5 5"
            }].forEach((e => {
                const n = document.createElementNS("http://www.w3.org/2000/svg", "path");
                e.hasOwnProperty("fill") || n.setAttribute("fill", "#000000"), Object.entries(e).forEach((([t, e]) => n.setAttribute(t, e))), t.appendChild(n)
            })), t
        }, this.genratePictureToPictureSvg = function() {
            const t = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            t.setAttribute("width", "20"), t.setAttribute("height", "20"), t.setAttribute("viewBox", "0 0 24 24"), t.setAttribute("stroke-width", "2"), t.setAttribute("stroke", "currentColor"), t.setAttribute("fill", "none"), t.setAttribute("stroke-linecap", "round"), t.setAttribute("stroke-linejoin", "round");
            return [{
                d: "M0 0h24v24H0z",
                fill: "none"
            }, {
                d: "M11 19h-6a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4"
            }, {
                d: "M14 14m0 1a1 1 0 0 1 1 -1h5a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-5a1 1 0 0 1 -1 -1z"
            }].forEach((e => {
                const n = document.createElementNS("http://www.w3.org/2000/svg", "path");
                e.hasOwnProperty("fill") || n.setAttribute("fill", "#000000"), Object.entries(e).forEach((([t, e]) => n.setAttribute(t, e))), t.appendChild(n)
            })), t
        }, this.genrateLoopSvg = function() {
            const t = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            t.setAttribute("t", "1746700282649"), t.setAttribute("class", "icon"), t.setAttribute("viewBox", "0 0 1024 1024"), t.setAttribute("xmlns", "http://www.w3.org/2000/svg"), t.setAttribute("width", "20"), t.setAttribute("height", "20");
            return [{
                d: "M286.95 286.95h450.1v134.61l178.78-178.78L737.05 64v134.61H198.61v269.22h88.34V286.95z m450.1 450.1h-450.1V602.44L108.17 781.22 286.95 960V825.39h538.44V556.17h-88.34v180.88z",
                "p-id": "3512",
                fill: "#000000"
            }].forEach((e => {
                const n = document.createElementNS("http://www.w3.org/2000/svg", "path");
                Object.entries(e).forEach((([t, e]) => n.setAttribute(t, e))), t.appendChild(n)
            })), t
        }, this.genrateNotLoopSvg = function() {
            const t = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            t.setAttribute("t", "1746700343318"), t.setAttribute("class", "icon"), t.setAttribute("viewBox", "0 0 1024 1024"), t.setAttribute("xmlns", "http://www.w3.org/2000/svg"), t.setAttribute("width", "20"), t.setAttribute("height", "20");
            return [{
                d: "M759.14 198.61V64l178.78 178.78-178.78 178.78V286.95H391.06l-90.44-88.34h458.52z m0 357.56h88.34v189.3l-88.34-90.44v-98.86zM86.09 209.13l56.79-56.79 750.87 750.87L836.96 960 702.35 825.39H309.03V960L130.25 781.22l178.78-178.78v134.61H611.9L309.03 434.18v33.65H220.7V343.74L86.09 209.13z",
                "p-id": "3770",
                fill: "#000000"
            }].forEach((e => {
                const n = document.createElementNS("http://www.w3.org/2000/svg", "path");
                Object.entries(e).forEach((([t, e]) => n.setAttribute(t, e))), t.appendChild(n)
            })), t
        }, this.genrateCashback = function() {
            const t = "http://www.w3.org/2000/svg",
                e = document.createElementNS(t, "svg");
            e.setAttribute("viewBox", "0 0 1024 1024"), e.setAttribute("version", "1.1"), e.setAttribute("xmlns", t), e.setAttribute("width", "20"), e.setAttribute("height", "20"), e.setAttribute("class", "icon");
            const n = document.createElementNS(t, "path");
            return n.setAttribute("d", "M512 32c265.125 0 480 214.875 480 480S777.125 992 512 992 32 777.125 32 512 246.875 32 512 32z m181.781 430.125H598.25L702.125 272h-93l-91.781 168-91.875-168h-93L436.25 462.125H321.875v82.219h146.437v27.375H321.875v82.219h146.437V752h93v-98.063h132.375v-82.219H561.406v-27.375h132.375v-82.219z"), n.setAttribute("fill", "#d81e06"), n.setAttribute("p-id", "10844"), e.appendChild(n), e
        }, this.downloadVideo = function() {
            const t = "https://www.tikfork.com/en/yt?s=2&url=" + window.location.href;
            e.helper.dao.call("openLink", {
                href: t,
                newTab: !0
            })
        }, this.genrateTools = function(n) {
            const o = "_loop_" + Math.ceil(1e8 * Math.random()),
                a = () => {
                    this.downloadVideo()
                };
            let i = e.helper.dao.getData(t.opts.storageKeys.youtube.videoLoop, e.helper.dao.getDefaults().yt.videoLoop),
                r = null;
            const s = () => {
                r && (clearInterval(r), r = null);
                null != document.querySelector("#movie_player > div.html5-video-container > video") && (r = setInterval((() => {
                    i ? document.querySelector("#movie_player > div.html5-video-container > video").setAttribute("loop", "true") : document.querySelector("#movie_player > div.html5-video-container > video").removeAttribute("loop")
                }), 1e3))
            };
            s();
            const c = [{
                tagName: "div",
                title: "Screenshot",
                classname: "toolbox_extension_tool_btn",
                onclick: () => {
                    e.helper.youtube.screenshot.start()
                },
                icon: this.genrateScreenshotSvg()
            }, {
                tagName: "div",
                title: "Switch the theme",
                classname: "toolbox_extension_tool_btn",
                onclick: () => {
                    const n = e.helper.dao,
                        o = n.getDefaults();
                    let a = n.getData(t.opts.storageKeys.youtube.theme, o.yt.theme);
                    a = "light" === a ? "dark" : "light", e.helper.youtube.theme.setTheme(a, !0, !0), n.setDataByKey(t.opts.storageKeys.youtube.theme, a)
                },
                icon: this.genrateSwitchThemeSvg()
            }, {
                tagName: "div",
                title: "New Tab Playback",
                classname: "toolbox_extension_tool_btn",
                onclick: () => {
                    document.querySelector("video").click();
                    const t = new URLSearchParams(window.location.search).get("v");
                    e.helper.dao.call("openLink", {
                        href: `https://www.youtube.com/embed/${t}?rel=0&controls=2&color=white&iv_load_policy=3&showinfo=0&modestbranding=1&autoplay=1`,
                        newTab: !0
                    })
                },
                icon: this.genrateVideoTabSvg()
            }, {
                tagName: "div",
                title: "Picture to picture",
                classname: "toolbox_extension_tool_btn",
                onclick: () => {
                    const t = document.querySelector("video");
                    "pictureInPictureEnabled" in document && (document.pictureInPictureElement || t.requestPictureInPicture().then((() => {})).catch((t => {})))
                },
                icon: this.genratePictureToPictureSvg()
            }, {
                tagName: "div",
                title: "Loop",
                classname: "toolbox_extension_tool_btn",
                id: o,
                onclick: () => {
                    const n = document.querySelector("#" + o);
                    let a = null;
                    i ? (i = !1, a = this.genrateNotLoopSvg()) : (i = !0, a = this.genrateLoopSvg()), n.replaceChildren(a), e.helper.dao.getData(t.opts.storageKeys.youtube.videoLoop, i), s()
                },
                icon: i ? this.genrateLoopSvg() : this.genrateNotLoopSvg()
            }];
            "chrome" !== t.browserName && c.push({
                tagName: "div",
                title: "Download",
                classname: "toolbox_extension_tool_btn",
                onclick: a,
                icon: this.genrateDownloadSvg()
            }), c.push({
                tagName: "div",
                title: "Automatically find coupons",
                classname: "toolbox_extension_tool_btn toolbox_hover-feedback",
                onclick: () => {
                    e.helper.dao.call("openLink", {
                        href: t.opts.website.coupongogoExtension,
                        newTab: !0
                    }).then((t => {}))
                },
                icon: this.genrateCashback()
            });
            for (let t = 0; t < c.length; t++) {
                let e = c[t];
                const o = document.createElement(e.tagName);
                o.className = e.classname, o.setAttribute("title", e.title), e.hasOwnProperty("icon") && o.appendChild(e.icon), e.hasOwnProperty("id") && (o.id = e.id), e.hasOwnProperty("onclick") && (o.onclick = e.onclick), e.hasOwnProperty("style") && o.setAttribute("style", e.style), n.appendChild(o)
            }
        }, this.genrateBoxContainer = function(t, e) {
            const n = document.createElement("div");
            n.id = "toolbox_extension_container", n.className = "toolbox_extension_container";
            const o = document.createElement("div");
            o.className = "toolbox_extension_tools", this.genrateTools(o), n.appendChild(o), e.appendChild(n);
            let a = !1;
            t.addEventListener("mouseenter", (() => {
                n.style.display = "block";
                var o = e.getBoundingClientRect(),
                    a = t.getBoundingClientRect(),
                    i = n.getBoundingClientRect(),
                    r = a.left - o.left - i.width / 2 + a.width / 2,
                    s = a.top - o.top - n.clientHeight;
                n.style.left = `${r}px`, n.style.top = `${s}px`
            })), t.addEventListener("mouseleave", (() => {
                a = !1, setTimeout((() => {
                    a || (n.style.display = "none")
                }), 100)
            })), n.addEventListener("mouseenter", (() => {
                a = !0
            })), n.addEventListener("mouseleave", (() => {
                a = !1, n.style.display = "none"
            }))
        }, this.genrateBox = async function() {
            const e = "toolBox_extension_codehemu_x",
                n = document.createElement("div");
            n.className = "ytp-button", n.id = e, n.setAttribute("style", "position: relative;display: inline-block;width: 48px;height: 100%;");
            const o = document.createElement("div");
            o.setAttribute("style", "position: absolute;width: 100%;height: 100%;\t");
            const a = document.createElement("button");
            a.setAttribute("style", "background-color: transparent;width: 100%;height: 100%;outline: none;flex: 1 1 0%;display: flex;-webkit-box-align: center;align-items: center;-webkit-box-pack: center;justify-content: center;border: none;padding: 0px;cursor: pointer;"), n.appendChild(o), o.appendChild(a), a.appendChild(this.genrateToolBoxSvg());
            const i = await t.waitForElement("#player-container-outer .html5-video-player");
            if (i) {
                const t = i.querySelector(".ytp-right-controls"),
                    o = document.querySelector("#" + e);
                t && !o && (t.prepend(n), this.genrateBoxContainer(n, i))
            }
        }, this.genrateShorts = async function() {
            const t = "http://www.w3.org/2000/svg",
                e = document.createElementNS(t, "svg");
            e.setAttribute("viewBox", "0 0 1024 1024"), e.setAttribute("width", "32"), e.setAttribute("height", "32");
            [{
                d: "M0 0m512 0l0 0q512 0 512 512l0 0q0 512-512 512l0 0q-512 0-512-512l0 0q0-512 512-512Z",
                opacity: ".7"
            }, {
                d: "M671.1552 727.2192H350.4128a95.7696 95.7696 0 0 1-96.2304-95.104v-190.2336a31.872 31.872 0 0 1 32.0768-31.7184 31.872 31.872 0 0 1 32.0768 31.7184v190.2336a31.9232 31.9232 0 0 0 32.0768 31.6928h320.7424a31.9232 31.9232 0 0 0 32.0768-31.6928v-190.2336a32.0768 32.0768 0 0 1 64.1536 0v190.2336a95.7696 95.7696 0 0 1-96.2304 95.104z",
                fill: "#FFFFFF"
            }, {
                d: "M499.1232 563.7376a16.5632 16.5632 0 0 0 23.3472 0l108.7744-108.8256c6.4256-6.4256 4.2496-11.6736-4.8384-11.6736h-33.0496a16.5632 16.5632 0 0 1-16.512-16.5376v-66.0992a16.5376 16.5376 0 0 0-16.512-16.512h-99.0976a16.5632 16.5632 0 0 0-16.512 16.512v66.0992a16.5632 16.5632 0 0 1-16.512 16.5376h-33.1008c-9.088 0-11.264 5.248-4.8384 11.6736z",
                fill: "#FFFFFF"
            }, {
                d: "M446.2336 294.5792a16.512 16.512 0 1 1 16.512 16.5376 16.5376 16.5376 0 0 1-16.512-16.5376z",
                fill: "#FFFFFF"
            }, {
                d: "M542.2848 294.5792a16.512 16.512 0 1 1 16.512 16.5376 16.5376 16.5376 0 0 1-16.512-16.5376z",
                fill: "#FFFFFF"
            }, {
                d: "M461.2352 277.9904h99.0976v33.0496h-99.0976z",
                fill: "#FFFFFF"
            }].forEach((n => {
                const o = document.createElementNS(t, "path");
                for (let t in n) o.setAttribute(t, n[t]);
                e.appendChild(o)
            }));
            const n = () => {
                if (-1 != window.location.href.indexOf("/shorts/")) {
                    const t = document.querySelector("#navigation-button-down");
                    if (t) {
                        const n = document.createElement("div");
                        n.setAttribute("style", "cursor:pointer;display: flex;justify-content: center;align-items: center;"), n.id = "script_download_shorts", n.className = "navigation-button style-scope ytd-shorts", t.after(n), n.appendChild(e), n.addEventListener("click", (() => {
                            this.downloadVideo()
                        }))
                    }
                }
            };
            setInterval((() => {
                document.querySelector("#script_download_shorts") || n()
            }), 800)
        }, this.genrateOuterBox = async function() {
            const t = "script_outer_box",
                e = document.createElement("div");
            e.id = t, e.setAttribute("style", "margin-left:10px;display:inline-flex;border-radius:10px;overflow: hidden;");
            const n = document.createElement("div");
            n.setAttribute("style", "width:36px;height:36px;border:none;cursor:pointer;display:flex;align-items: center;justify-content:center"), n.appendChild(this.genrateShortDownloadSvg()), e.appendChild(n), n.onclick = this.downloadVideo;
            const o = setInterval((() => {
                if (!document.querySelector("#" + t)) {
                    const t = document.querySelector("#owner");
                    if (t) t.appendChild(e), clearInterval(o);
                    else {
                        const t = document.querySelector("#actions");
                        t && (t.insertBefore(e, t.firstChild), clearInterval(o))
                    }
                }
            }), 500)
        }, this.run = function() {
            return new Promise((n => {
                e.helper.styleHelper.addStylesheets(["toolbox"]).then((async () => {
                    await this.genrateBox(), "chrome" !== t.browserName && (await this.genrateShorts(), await this.genrateOuterBox()), n()
                }))
            }))
        }
    };
    (new function() {
        this.run = () => {
            e(), n()
        };
        const e = () => {
                this.helper = {
                    dao: new t.DaoHelper(this),
                    i18n: new t.I18nHelper(this),
                    styleHelper: new t.StyleHelper(this),
                    youtube: {
                        recommend: new t.RecommendHelper(this),
                        commentTable: new t.TableHelper(this),
                        themeProgressBar: new t.ThemeProgressBarHelper(this),
                        removeAd: new t.RemoveAdHelper(this),
                        speedControl: new t.SpeedControlHelper(this),
                        screenshot: new t.ScreenshotHelper(this),
                        theme: new t.ThemeHelper(this),
                        toolBox: new t.ToolBoxHelper(this),
                        tips: new t.TipsHelper(this)
                    }
                }
            },
            n = () => {
                this.helper.dao.init().then((() => Promise.all([this.helper.i18n.init()]))).then((() => Promise.all([this.helper.youtube.commentTable.run(), this.helper.youtube.themeProgressBar.run(), this.helper.youtube.removeAd.run()]))).then((() => Promise.all([this.helper.youtube.toolBox.run()]))).then((() => Promise.all([this.helper.youtube.speedControl.run()]))).then((() => {
                    this.helper.youtube.recommend.run(), this.helper.youtube.tips.init()
                }))
            };
        this.log = e => {
            t.isDev
        }
    }).run()
})(jsu);
