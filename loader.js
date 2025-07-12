var _loader = function () {
    "use strict";
    function j(g) {
        return g == null || typeof g == "function" ? { main: g } : g
    }
    var F = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
    function L(g) {
        return g && g.__esModule && Object.prototype.hasOwnProperty.call(g, "default") ? g.default : g
    }
    var E = {
        exports: {}
    };
    (function (g, l) {
        (function (p, y) {
            y(g)
        })(typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : F, function (p) {
            if (!(globalThis.chrome && globalThis.chrome.runtime && globalThis.chrome.runtime.id)) throw new Error("This script should only be loaded in a browser extension.");
            if (globalThis.browser && globalThis.browser.runtime && globalThis.browser.runtime.id) p.exports = globalThis.browser;
            else {
                const y = "The message port closed before a response was received.",
                    U = x => {
                        const k = {
                            alarms: {
                                clear: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                clearAll: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                get: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                getAll: {
                                    minArgs: 0,
                                    maxArgs: 0
                                }
                            },
                            bookmarks: {
                                create: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                get: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getChildren: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getRecent: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getSubTree: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getTree: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                move: {
                                    minArgs: 2,
                                    maxArgs: 2
                                },
                                remove: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeTree: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                search: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                update: {
                                    minArgs: 2,
                                    maxArgs: 2
                                }
                            },
                            browserAction: {
                                disable: {
                                    minArgs: 0,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                enable: {
                                    minArgs: 0,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                getBadgeBackgroundColor: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getBadgeText: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getPopup: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getTitle: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                openPopup: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                setBadgeBackgroundColor: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                setBadgeText: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                setIcon: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                setPopup: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                setTitle: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                }
                            },
                            browsingData: {
                                remove: {
                                    minArgs: 2,
                                    maxArgs: 2
                                },
                                removeCache: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeCookies: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeDownloads: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeFormData: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeHistory: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeLocalStorage: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removePasswords: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removePluginData: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                settings: {
                                    minArgs: 0,
                                    maxArgs: 0
                                }
                            },
                            commands: {
                                getAll: {
                                    minArgs: 0,
                                    maxArgs: 0
                                }
                            },
                            contextMenus: {
                                remove: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeAll: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                update: {
                                    minArgs: 2,
                                    maxArgs: 2
                                }
                            },
                            cookies: {
                                get: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getAll: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getAllCookieStores: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                remove: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                set: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            },
                            devtools: {
                                inspectedWindow: {
                                    eval: {
                                        minArgs: 1,
                                        maxArgs: 2,
                                        singleCallbackArg: !1
                                    }
                                },
                                panels: {
                                    create: {
                                        minArgs: 3,
                                        maxArgs: 3,
                                        singleCallbackArg: !0
                                    },
                                    elements: {
                                        createSidebarPane: {
                                            minArgs: 1,
                                            maxArgs: 1
                                        }
                                    }
                                }
                            },
                            downloads: {
                                cancel: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                download: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                erase: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getFileIcon: {
                                    minArgs: 1,
                                    maxArgs: 2
                                },
                                open: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                pause: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeFile: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                resume: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                search: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                show: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                }
                            },
                            extension: {
                                isAllowedFileSchemeAccess: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                isAllowedIncognitoAccess: {
                                    minArgs: 0,
                                    maxArgs: 0
                                }
                            },
                            history: {
                                addUrl: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                deleteAll: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                deleteRange: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                deleteUrl: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getVisits: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                search: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            },
                            i18n: {
                                detectLanguage: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getAcceptLanguages: {
                                    minArgs: 0,
                                    maxArgs: 0
                                }
                            },
                            identity: {
                                launchWebAuthFlow: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            },
                            idle: {
                                queryState: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            },
                            management: {
                                get: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getAll: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                getSelf: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                setEnabled: {
                                    minArgs: 2,
                                    maxArgs: 2
                                },
                                uninstallSelf: {
                                    minArgs: 0,
                                    maxArgs: 1
                                }
                            },
                            notifications: {
                                clear: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                create: {
                                    minArgs: 1,
                                    maxArgs: 2
                                },
                                getAll: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                getPermissionLevel: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                update: {
                                    minArgs: 2,
                                    maxArgs: 2
                                }
                            },
                            pageAction: {
                                getPopup: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getTitle: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                hide: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                setIcon: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                setPopup: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                setTitle: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                show: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                }
                            },
                            permissions: {
                                contains: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getAll: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                remove: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                request: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            },
                            runtime: {
                                getBackgroundPage: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                getPlatformInfo: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                openOptionsPage: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                requestUpdateCheck: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                sendMessage: {
                                    minArgs: 1,
                                    maxArgs: 3
                                },
                                sendNativeMessage: {
                                    minArgs: 2,
                                    maxArgs: 2
                                },
                                setUninstallURL: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            },
                            sessions: {
                                getDevices: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                getRecentlyClosed: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                restore: {
                                    minArgs: 0,
                                    maxArgs: 1
                                }
                            },
                            storage: {
                                local: {
                                    clear: {
                                        minArgs: 0,
                                        maxArgs: 0
                                    },
                                    get: {
                                        minArgs: 0,
                                        maxArgs: 1
                                    },
                                    getBytesInUse: {
                                        minArgs: 0,
                                        maxArgs: 1
                                    },
                                    remove: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    },
                                    set: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    }
                                },
                                managed: {
                                    get: {
                                        minArgs: 0,
                                        maxArgs: 1
                                    },
                                    getBytesInUse: {
                                        minArgs: 0,
                                        maxArgs: 1
                                    }
                                },
                                sync: {
                                    clear: {
                                        minArgs: 0,
                                        maxArgs: 0
                                    },
                                    get: {
                                        minArgs: 0,
                                        maxArgs: 1
                                    },
                                    getBytesInUse: {
                                        minArgs: 0,
                                        maxArgs: 1
                                    },
                                    remove: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    },
                                    set: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    }
                                }
                            },
                            tabs: {
                                captureVisibleTab: {
                                    minArgs: 0,
                                    maxArgs: 2
                                },
                                create: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                detectLanguage: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                discard: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                duplicate: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                executeScript: {
                                    minArgs: 1,
                                    maxArgs: 2
                                },
                                get: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getCurrent: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                getZoom: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                getZoomSettings: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                goBack: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                goForward: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                highlight: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                insertCSS: {
                                    minArgs: 1,
                                    maxArgs: 2
                                },
                                move: {
                                    minArgs: 2,
                                    maxArgs: 2
                                },
                                query: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                reload: {
                                    minArgs: 0,
                                    maxArgs: 2
                                },
                                remove: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeCSS: {
                                    minArgs: 1,
                                    maxArgs: 2
                                },
                                sendMessage: {
                                    minArgs: 2,
                                    maxArgs: 3
                                },
                                setZoom: {
                                    minArgs: 1,
                                    maxArgs: 2
                                },
                                setZoomSettings: {
                                    minArgs: 1,
                                    maxArgs: 2
                                },
                                update: {
                                    minArgs: 1,
                                    maxArgs: 2
                                }
                            },
                            topSites: {
                                get: {
                                    minArgs: 0,
                                    maxArgs: 0
                                }
                            },
                            webNavigation: {
                                getAllFrames: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getFrame: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            },
                            webRequest: {
                                handlerBehaviorChanged: {
                                    minArgs: 0,
                                    maxArgs: 0
                                }
                            },
                            windows: {
                                create: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                get: {
                                    minArgs: 1,
                                    maxArgs: 2
                                },
                                getAll: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                getCurrent: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                getLastFocused: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                remove: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                update: {
                                    minArgs: 2,
                                    maxArgs: 2
                                }
                            }
                        };
                        if (Object.keys(k).length === 0) throw new Error("api-metadata.json has not been included in browser-polyfill");
                        class S extends WeakMap {
                            constructor(r, n = void 0) {
                                super(n), this.createItem = r
                            }
                            get(r) {
                                return this.has(r) || this.set(r, this.createItem(r)), super.get(r)
                            }
                        }
                        const W = e => e && typeof e == "object" && typeof e.then == "function",
                            M = (e, r) => (...n) => {
                                x.runtime.lastError ? e.reject(new Error(x.runtime.lastError.message)) : r.singleCallbackArg || n.length <= 1 && r.singleCallbackArg !== !1 ? e.resolve(n[0]) : e.resolve(n)
                            },
                            b = e => e == 1 ? "argument" : "arguments",
                            q = (e, r) => function(t, ...i) {
                                if (i.length < r.minArgs) throw new Error(`Expected at least ${r.minArgs} ${b(r.minArgs)} for ${e}(), got ${i.length}`);
                                if (i.length > r.maxArgs) throw new Error(`Expected at most ${r.maxArgs} ${b(r.maxArgs)} for ${e}(), got ${i.length}`);
                                return new Promise((a, o) => {
                                    if (r.fallbackToNoCallback) try {
                                        t[e](...i, M({
                                            resolve: a,
                                            reject: o
                                        }, r))
                                    } catch (s) {
                                        console.warn(`${e} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `, s), t[e](...i), r.fallbackToNoCallback = !1, r.noCallback = !0, a()
                                    } else r.noCallback ? (t[e](...i), a()) : t[e](...i, M({
                                        resolve: a,
                                        reject: o
                                    }, r))
                                })
                            },
                            R = (e, r, n) => new Proxy(r, {
                                apply(t, i, a) {
                                    return n.call(i, e, ...a)
                                }
                            });
                        let h = Function.call.bind(Object.prototype.hasOwnProperty);
                        const w = (e, r = {}, n = {}) => {
                                let t = Object.create(null),
                                    i = {
                                        has(o, s) {
                                            return s in e || s in t
                                        },
                                        get(o, s, A) {
                                            if (s in t) return t[s];
                                            if (!(s in e)) return;
                                            let m = e[s];
                                            if (typeof m == "function") if (typeof r[s] == "function") m = R(e, e[s], r[s]);
                                            else if (h(n, s)) {
                                                let u = q(s, n[s]);
                                                m = R(e, e[s], u)
                                            } else m = m.bind(e);
                                            else if (typeof m == "object" && m !== null && (h(r, s) || h(n, s))) m = w(m, r[s], n[s]);
                                            else if (h(n, "*")) m = w(m, r[s], n["*"]);
                                            else return Object.defineProperty(t, s, {
                                                configurable: !0,
                                                enumerable: !0,
                                                get() {
                                                    return e[s]
                                                },
                                                set(u) {
                                                    e[s] = u
                                                }
                                            }), m;
                                            return t[s] = m, m
                                        },
                                        set(o, s, A, m) {
                                            return s in t ? t[s] = A : e[s] = A, !0
                                        },
                                        defineProperty(o, s, A) {
                                            return Reflect.defineProperty(t, s, A)
                                        },
                                        deleteProperty(o, s) {
                                            return Reflect.deleteProperty(t, s)
                                        }
                                    },
                                    a = Object.create(e);
                                return new Proxy(a, i)
                            },
                            T = e => ({
                                addListener(r, n, ...t) {
                                    r.addListener(e.get(n), ...t)
                                },
                                hasListener(r, n) {
                                    return r.hasListener(e.get(n))
                                },
                                removeListener(r, n) {
                                    r.removeListener(e.get(n))
                                }
                            }),
                            D = new S(e => typeof e != "function" ? e : function(n) {
                                const t = w(n, {}, {
                                    getContent: {
                                        minArgs: 0,
                                        maxArgs: 0
                                    }
                                });
                                e(t)
                            }),
                            N = new S(e => typeof e != "function" ? e : function(n, t, i) {
                                let a = !1,
                                    o, s = new Promise(d => {
                                        o = function(c) {
                                            a = !0, d(c)
                                        }
                                    }),
                                    A;
                                try {
                                    A = e(n, t, o)
                                } catch (d) {
                                    A = Promise.reject(d)
                                }
                                const m = A !== !0 && W(A);
                                if (A !== !0 && !m && !a) return !1;
                                const u = d => {
                                    d.then(c => {
                                        i(c)
                                    }, c => {
                                        let v;
                                        c && (c instanceof Error || typeof c.message == "string") ? v = c.message : v = "An unexpected error occurred", i({
                                            __mozWebExtensionPolyfillReject__: !0,
                                            message: v
                                        })
                                    }).catch(c => {
                                        console.error("Failed to send onMessage rejected reply", c)
                                    })
                                };
                                return u(m ? A : s), !0
                            }),
                            I = ({
                                reject: e,
                                resolve: r
                            }, n) => {
                                x.runtime.lastError ? x.runtime.lastError.message === y ? r() : e(new Error(x.runtime.lastError.message)) : n && n.__mozWebExtensionPolyfillReject__ ? e(new Error(n.message)) : r(n)
                            },
                            $ = (e, r, n, ...t) => {
                                if (t.length < r.minArgs) throw new Error(`Expected at least ${r.minArgs} ${b(r.minArgs)} for ${e}(), got ${t.length}`);
                                if (t.length > r.maxArgs) throw new Error(`Expected at most ${r.maxArgs} ${b(r.maxArgs)} for ${e}(), got ${t.length}`);
                                return new Promise((i, a) => {
                                    const o = I.bind(null, {
                                        resolve: i,
                                        reject: a
                                    });
                                    t.push(o), n.sendMessage(...t)
                                })
                            },
                            Z = {
                                devtools: {
                                    network: {
                                        onRequestFinished: T(D)
                                    }
                                },
                                runtime: {
                                    onMessage: T(N),
                                    onMessageExternal: T(N),
                                    sendMessage: $.bind(null, "sendMessage", {
                                        minArgs: 1,
                                        maxArgs: 3
                                    })
                                },
                                tabs: {
                                    sendMessage: $.bind(null, "sendMessage", {
                                        minArgs: 2,
                                        maxArgs: 3
                                    })
                                }
                            },
                            C = {
                                clear: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                get: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                set: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            };
                        return k.privacy = {
                            network: {
                                "*": C
                            },
                            services: {
                                "*": C
                            },
                            websites: {
                                "*": C
                            }
                        }, w(x, Z, k)
                    };
                p.exports = U(chrome)
            }
        })
    })(E);
    var _ = E.exports;
    const P = L(_),
        B = j(() => {
            {
                const g = document.head || document.documentElement,
                    l = document.createElement("script");
                l.src = P.runtime.getURL("/listener.js"), l.onload = () => l.remove(), g.append(l)
            } {
                const g = document.head || document.documentElement,
                    l = document.createElement("script");
                l.src = P.runtime.getURL("/dark-mode.helper.js"), l.onload = () => l.remove(), g.append(l)
            }
        });

    function G() {}

    function f(g, ...l) {}
    const O = {
        debug: (...g) => f(console.debug, ...g),
        log: (...g) => f(console.log, ...g),
        warn: (...g) => f(console.warn, ...g),
        error: (...g) => f(console.error, ...g)
    };
    return (async () => {
        try {
            return await B.main()
        } catch (g) {
            throw O.error('The unlisted script "loader" crashed on startup!', g), g
        }
    })()
}();
_loader;
