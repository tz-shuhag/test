/*! (c) FunnyMonkey under Copyright Reserved */
(() => {
    "use strict";
    const e = [],
        t = {
            delay: (e = 0) => new Promise((t => {
                setTimeout(t, e)
            })),
            fetch: (t, n = {}, l = null) => {
                "{}" === JSON.stringify(n) && (n.method = "post");
                const o = new AbortController;
                let r = o.signal;
                const a = new Promise(((l, o) => {
                    fetch(t, {
                        signal: r,
                        ...n
                    }).then((e => {
                        e.status < 400 && l(e), o(e)
                    })).catch((n => {
                        e.push({
                            url: t
                        }), o(null)
                    }))
                }));
                let s = null;
                return null != l && (r && r.addEventListener("abort", (() => o.abort())), s = setTimeout((() => o.abort()), l)), a.finally((() => {
                    null != s && clearTimeout(s)
                }))
            },
            cancelFetch: (t = null) => {
                e.forEach((e => {
                    if (null === t || e.url === t) {
                        (new AbortController).abort(), e = null
                    }
                }))
            },
            onPageLoad: e => {
                "complete" === document.readyState ? e() : (window.addEventListener("DOMContentLoaded", e, {
                    once: !0
                }), window.addEventListener("load", e, {
                    once: !0
                }))
            },
            waitForElement: (e, t = document.body, n = !0, l = 10, o = 1e4) => new Promise(((r, a) => {
                let s = 0,
                    u = null,
                    c = !1;
                t && (u = t.querySelector(e), c = n ? !!u : !!u && !!u.innerHTML, c && r(u));
                const i = setInterval((() => {
                    t || (t = document.body), t && (s >= o && (clearInterval(i), r(null)), u = t.querySelector(e), c = n ? !!u : !!u && !!u.innerHTML, c ? (clearInterval(i), r(u)) : s += l)
                }), l)
            }))
        };
    self.jsuTools = t
})();
