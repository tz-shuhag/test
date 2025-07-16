/*! (c) FunnyMonkey under Copyright Reserved */
(e => {
    "use strict";
    e.ThemeHelper = function(t) {
        this.setTheme = function(e = "light", t = !0, n = !1) {
            "light" === e ? s(t, n) : "dark" === e ? o(t, n) : s(t, n)
        };
        const o = (e, t) => {
                t ? a(!0, e) : n(!0, e)
            },
            s = (e, t) => {
                t ? a(!1, e) : n(!1, e)
            },
            n = (t, o) => {
                e.api.cookies.get({
                    url: "https://www.youtube.com",
                    name: "PREF"
                }, (o => {
                    const s = {
                        url: "https://www.youtube.com",
                        domain: ".youtube.com",
                        name: "PREF",
                        value: o ? o.value : "f6=400"
                    };
                    s.value = s.value.replace(/&f6=\d+/, "").replace(/f6=\d+/, "");
                    const n = s.value ? "&" : "";
                    s.value += t ? n + "f6=400" : n + "f6=80000", e.api.cookies.set(s)
                })), o && e.api.tabs.query({}, (function(t) {
                    for (var o = 0; o < t.length; o++) t[o].url && t[o].url.includes("youtube.com") && e.api.tabs.reload(t[o].id)
                }))
            },
            a = (e, t) => {
                let o = document.cookie.split("; ").find((e => e.startsWith("PREF="))),
                    s = o ? o.split("=")[1] : "f6=400";
                s = s.replace(/&f6=\d+/, "").replace(/f6=\d+/, "");
                const n = s ? "&" : "";
                s += e ? n + "f6=400" : n + "f6=80000", document.cookie = `PREF=${s}; path=/; domain=.youtube.com; secure`, t && location.reload()
            }
    };
    (new function() {
        const t = '\n\t\t\t<svg t="1738988744688" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1063" width="32" height="32"><path d="M254.71051852 511.27182222a257.28948148 257.28948148 0 1 0 514.57896296 0 257.28948148 257.28948148 0 1 0-514.57896296 0z" fill="#FFF0C2" p-id="1064"></path><path d="M271.33724445 511.27182222a240.66275555 240.66275555 0 1 0 481.3255111 0 240.66275555 240.66275555 0 1 0-481.3255111 0zM511.63591111 48.63620741c15.65582222-0.24272592 29.36983703 13.71401482 29.73392592 29.4912l0.48545186 96.60491851c0.24272592 15.65582222-13.71401482 29.36983703-29.4912 29.73392593-15.65582222 0.24272592-29.36983703-13.71401482-29.73392592-29.4912l-0.48545186-96.60491852c1.09226667-18.08308148 13.83537778-29.4912 29.4912-29.73392592zM984.70874075 509.57274075c-0.24272592 15.65582222-11.65084445 28.39893333-29.73392593 29.4912l-96.60491852-0.48545186c-15.65582222-0.24272592-29.73392592-13.95674075-29.4912-29.73392592 0.24272592-15.65582222 13.95674075-29.73392592 29.73392592-29.4912l96.60491853 0.48545185c15.65582222 0.36408889 29.73392592 14.0781037 29.4912 29.73392593z m-789.58743705 0c-0.24272592 15.65582222-11.65084445 28.39893333-29.73392592 29.4912l-96.60491853-0.48545186c-15.65582222-0.24272592-29.73392592-13.95674075-29.4912-29.73392592 0.24272592-15.65582222 13.95674075-29.73392592 29.73392593-29.4912l96.60491852 0.48545185c15.65582222 0.36408889 29.73392592 14.0781037 29.4912 29.73392593z m317.24278519 465.79105184c-15.65582222 0.24272592-29.36983703-13.71401482-29.73392592-29.4912l-0.48545186-96.60491851c-0.24272592-15.65582222 13.71401482-29.36983703 29.4912-29.73392593 15.65582222-0.24272592 29.36983703 13.71401482 29.73392592 29.4912l0.48545186 96.60491852c-1.09226667 18.08308148-13.83537778 29.4912-29.4912 29.73392592zM838.7090963 184.68408889c11.28675555 10.92266667 11.04402963 30.4621037 0.12136295 41.87022222l-67.96325925 68.57007407c-10.92266667 11.28675555-30.4621037 11.04402963-41.87022222 0.12136297-11.28675555-10.92266667-11.04402963-30.4621037-0.12136296-41.87022223l67.96325926-68.57007407c13.47128889-12.01493333 30.4621037-11.04402963 41.87022222-0.12136296z m8.4954074 660.45724444c-11.28675555 10.92266667-28.27757037 11.89357037-41.87022222-0.12136296l-67.96325926-68.57007407c-10.92266667-11.28675555-11.16539259-30.94755555 0.12136296-41.87022222 11.28675555-10.92266667 30.94755555-11.16539259 41.87022223 0.12136295l67.96325926 68.57007408c10.92266667 11.28675555 11.16539259 30.94755555-0.12136297 41.87022222zM288.81351111 286.75034075c-11.28675555 10.92266667-28.27757037 11.89357037-41.87022222-0.12136297l-67.96325926-68.57007408c-10.92266667-11.28675555-11.16539259-30.94755555 0.12136296-41.87022222 11.28675555-10.92266667 30.94755555-11.16539259 41.87022223 0.12136297l67.96325926 68.57007407c10.92266667 11.40811852 11.28675555 30.94755555-0.12136297 41.87022223z m-104.97896296 553.65783703c-11.28675555-10.92266667-11.04402963-30.4621037-0.12136297-41.87022223l67.96325927-68.57007407c10.92266667-11.28675555 30.4621037-11.04402963 41.87022222-0.12136296 11.28675555 10.92266667 11.04402963 30.4621037 0.12136296 41.87022223l-67.96325926 68.57007407c-13.47128889 12.01493333-30.58346667 11.04402963-41.87022222 0.12136296z" fill="#FFB948" p-id="1065"></path></svg>\n\t\t',
            o = '\n\t\t\t<svg t="1738989560989" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1379" width="32" height="32"><path d="M360.35 845.9s-0.45 0-0.9-0.45l-11.7-4.05c-29.7-10.35-30.15-10.8-49.05-19.35-12.6-5.85-48.6-30.15-68.4-44.1-0.9-0.45-1.8-1.35-2.7-1.8-7.65-6.3-14.85-13.05-22.05-20.25-38.25-38.7-65.7-84.15-82.8-135.45 123.75 68.4 277.2 46.35 377.55-55.35s121.95-256.95 54.45-382.05c50.85 17.1 95.4 45 133.65 83.7 18.9 19.35 35.1 40.5 49.05 63l4.05 6.75c14.4 28.35 14.4 28.8 22.05 48.15 7.2 18.9 19.35 61.2 19.35 61.65 3.6 12.6 14.85 20.7 27 20.7 2.7 0 4.95-0.45 7.65-1.35 14.85-4.5 23.85-20.25 19.35-35.1 0 0 0-0.45-0.45-0.9h0.45c-9.45-45.45-26.1-88.65-49.95-128.25l-1.35-3.15c-0.9-2.25-2.25-4.05-4.05-5.85-15.3-23.85-32.85-46.35-53.1-66.6A403.425 403.425 0 0 0 566 125.9c-16.65-4.95-42.3-4.95-58.5 11.7-18 18-15.75 44.1-8.55 60.75l0.9 1.35 0.9 1.35c61.2 104.4 44.55 237.15-40.5 323.1s-216 102.6-318.6 40.95l-1.35-0.9c-9-4.5-40.5-18.45-61.2 2.25-20.25 20.25-13.95 53.55-11.7 63l0.45 1.8c18.9 61.65 53.1 118.35 98.1 164.25 49.95 50.4 112.05 86.85 180 104.85 1.35 0.45 3.15 0.45 4.5 0.45 11.7 0 22.5-7.2 26.55-18.9 5.4-14.4-2.25-30.6-16.65-36z" p-id="1380" fill="#ffffff"></path><path d="M529.55 652.4c-14.4 0-26.1 11.7-26.1 26.1 0 14.4 11.7 26.1 26.1 26.1h234.9c14.4 0 26.1-11.7 26.1-26.1 0-14.4-11.7-26.1-26.1-26.1h-234.9z m403.65 140.85h-504c-14.4 0-26.1 11.7-26.1 26.1 0 14.4 11.7 26.1 26.1 26.1h504.45c14.4 0 26.1-11.7 26.1-26.1-0.45-14.4-12.15-26.1-26.55-26.1z m-321.75-260.55c0 14.4 11.7 26.1 26.1 26.1h295.65c14.4 0 26.1-11.7 26.1-26.1s-11.7-26.1-26.1-26.1h-295.65c-14.4 0-26.1 11.7-26.1 26.1zM345.95 228.5h19.8v19.8c0 9.45 7.65 17.55 17.55 17.55 9.45 0 17.55-7.65 17.55-17.55V228.5h19.8c9.45 0 17.55-7.65 17.55-17.55s-7.65-17.55-17.55-17.55h-19.8v-19.8c0-9.45-7.65-17.55-17.55-17.55-9.45 0-17.55 7.65-17.55 17.55v19.8h-19.8c-9.45 0-17.55 7.65-17.55 17.55S336.5 228.5 345.95 228.5z m-180 242.55h32.85v32.85c0 12.15 9.9 22.05 21.6 22.05 12.15 0 21.6-9.9 21.6-22.05v-32.85h32.85c12.15 0 21.6-9.9 21.6-22.05s-9.9-22.05-21.6-22.05H242v-32.85c0-12.15-9.9-22.05-21.6-22.05-12.15 0-21.6 9.9-21.6 22.05v32.85h-32.85c-12.15 0-21.6 9.9-21.6 22.05s9.45 22.05 21.6 22.05z" p-id="1381" fill="#ffffff"></path></svg>\n\t\t';
        this.elm = {
            body: document.body,
            themeSwitcher: document.querySelector("#theme-switcher"),
            functionIsOpen: {
                commentTable: document.querySelector("#isCommentTableOpen"),
                themeProgressBar: document.querySelector("#isThemeProgressBarOpen"),
                speedControl: document.querySelector("#isSpeedControlOpen"),
                markOrRemoveAd: document.querySelector("#isMarkOrRemoveAdOpen")
            },
            recommentCouponExtension: document.querySelector("#recomment-coupon-extension")
        }, this.run = () => {
            s(), n()
        };
        const s = () => {
                this.helper = {
                    dao: new e.DaoHelper(this),
                    i18n: new e.I18nHelper(this),
                    theme: new e.ThemeHelper(this)
                }
            },
            n = () => {
                this.helper.dao.init().then((() => {
                    const t = this.helper.dao,
                        o = t.getDefaults();
                    return this.settings = {
                        youtube: {
                            functionState: {
                                commentTable: t.getData(e.opts.storageKeys.youtube.functionState.commentTable, o.yt.commentTable),
                                themeProgressBar: t.getData(e.opts.storageKeys.youtube.functionState.themeProgressBar, o.yt.themeProgressBar),
                                speedControl: t.getData(e.opts.storageKeys.youtube.functionState.speedControl, o.yt.speedControl),
                                markOrRemoveAd: t.getData(e.opts.storageKeys.youtube.functionState.markOrRemoveAd, o.yt.markOrRemoveAd)
                            },
                            theme: t.getData(e.opts.storageKeys.youtube.theme, o.yt.theme)
                        }
                    }, Promise.all([this.helper.i18n.init()])
                })).then((() => {
                    this.helper.i18n.parseHtml(document), a(), c(), this.elm.recommentCouponExtension.addEventListener("click", (() => {
                        this.helper.dao.call("openLink", {
                            href: e.opts.website.coupongogoExtension,
                            newTab: !0
                        }).then((e => {}))
                    }))
                }))
            },
            a = () => {
                const {
                    functionIsOpen: t
                } = this.elm, {
                    settings: o
                } = this, {
                    youtube: s
                } = o;
                t.commentTable.checked = s.functionState.commentTable, t.themeProgressBar.checked = s.functionState.themeProgressBar, t.speedControl.checked = s.functionState.speedControl, t.markOrRemoveAd.checked = s.functionState.markOrRemoveAd, t.commentTable.addEventListener("change", (t => {
                    s.functionState.commentTable = t.target.checked, this.helper.dao.setDataByKey(e.opts.storageKeys.youtube.functionState.commentTable, s.functionState.commentTable)
                })), t.themeProgressBar.addEventListener("change", (t => {
                    s.functionState.themeProgressBar = t.target.checked, this.helper.dao.setDataByKey(e.opts.storageKeys.youtube.functionState.themeProgressBar, s.functionState.themeProgressBar)
                })), t.speedControl.addEventListener("change", (t => {
                    s.functionState.speedControl = t.target.checked, this.helper.dao.setDataByKey(e.opts.storageKeys.youtube.functionState.speedControl, s.functionState.speedControl)
                })), t.markOrRemoveAd.addEventListener("change", (t => {
                    s.functionState.markOrRemoveAd = t.target.checked, this.helper.dao.setDataByKey(e.opts.storageKeys.youtube.functionState.markOrRemoveAd, s.functionState.markOrRemoveAd)
                }))
            },
            c = () => {
                const {
                    themeSwitcher: s,
                    body: n
                } = this.elm, {
                    settings: a
                } = this, {
                    theme: c
                } = a.youtube;
                s.setAttribute("data-theme", c), "light" === c ? (s.innerHTML = o, n.classList.remove("dark-mode")) : (s.innerHTML = t, n.classList.add("dark-mode")), "safari" !== e.browserName ? s.addEventListener("click", (() => {
                    "light" === a.youtube.theme ? (s.innerHTML = t, s.setAttribute("data-theme", "dark"), a.youtube.theme = "dark", n.classList.add("dark-mode")) : (s.innerHTML = o, s.setAttribute("data-theme", "light"), a.youtube.theme = "light", n.classList.remove("dark-mode")), this.helper.theme.setTheme(a.youtube.theme), this.helper.dao.setDataByKey(e.opts.storageKeys.youtube.theme, a.youtube.theme)
                })) : s.parentElement.style.display = "none"
            }
    }).run()
})(jsu);
