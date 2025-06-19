var _background = function () {
  "use strict";

  function $(t) {
    return t == null || typeof t == "function" ? { main: t } : t;
  }

  var F =
    typeof globalThis != "undefined"
      ? globalThis
      : typeof window != "undefined"
      ? window
      : typeof global != "undefined"
      ? global
      : typeof self != "undefined"
      ? self
      : {};

  function _(t) {
    return t &&
      t.__esModule &&
      Object.prototype.hasOwnProperty.call(t, "default")
      ? t.default
      : t;
  }

  var L = { exports: {} };

  (function (t, M) {
    (function (i, b) {
      b(t);
    })(
      typeof globalThis != "undefined"
        ? globalThis
        : typeof self != "undefined"
        ? self
        : F,
      function (i) {
        if (
          !(
            globalThis.chrome &&
            globalThis.chrome.runtime &&
            globalThis.chrome.runtime.id
          )
        )
          throw new Error(
            "This script should only be loaded in a browser extension."
          );

        if (
          globalThis.browser &&
          globalThis.browser.runtime &&
          globalThis.browser.runtime.id
        )
          i.exports = globalThis.browser;
        else {
          const b =
              "The message port closed before a response was received.",
            f = (d) => {
              const u = {
                alarms: {
                  clear: { minArgs: 0, maxArgs: 1 },
                  clearAll: { minArgs: 0, maxArgs: 0 },
                  get: { minArgs: 0, maxArgs: 1 },
                  getAll: { minArgs: 0, maxArgs: 0 },
                },
                bookmarks: {
                  create: { minArgs: 1, maxArgs: 1 },
                  get: { minArgs: 1, maxArgs: 1 },
                  getChildren: { minArgs: 1, maxArgs: 1 },
                  getRecent: { minArgs: 1, maxArgs: 1 },
                  getSubTree: { minArgs: 1, maxArgs: 1 },
                  getTree: { minArgs: 0, maxArgs: 0 },
                  move: { minArgs: 2, maxArgs: 2 },
                  remove: { minArgs: 1, maxArgs: 1 },
                  removeTree: { minArgs: 1, maxArgs: 1 },
                  search: { minArgs: 1, maxArgs: 1 },
                  update: { minArgs: 2, maxArgs: 2 },
                },
                browserAction: {
                  disable: { minArgs: 0, maxArgs: 1, fallbackToNoCallback: !0 },
                  enable: { minArgs: 0, maxArgs: 1, fallbackToNoCallback: !0 },
                  getBadgeBackgroundColor: { minArgs: 1, maxArgs: 1 },
                  getBadgeText: { minArgs: 1, maxArgs: 1 },
                  getPopup: { minArgs: 1, maxArgs: 1 },
                  getTitle: { minArgs: 1, maxArgs: 1 },
                  openPopup: { minArgs: 0, maxArgs: 0 },
                  setBadgeBackgroundColor: {
                    minArgs: 1,
                    maxArgs: 1,
                    fallbackToNoCallback: !0,
                  },
                  setBadgeText: {
                    minArgs: 1,
                    maxArgs: 1,
                    fallbackToNoCallback: !0,
                  },
                  setIcon: { minArgs: 1, maxArgs: 1 },
                  setPopup: {
                    minArgs: 1,
                    maxArgs: 1,
                    fallbackToNoCallback: !0,
                  },
                  setTitle: {
                    minArgs: 1,
                    maxArgs: 1,
                    fallbackToNoCallback: !0,
                  },
                },
                browsingData: {
                  remove: { minArgs: 2, maxArgs: 2 },
                  removeCache: { minArgs: 1, maxArgs: 1 },
                  removeCookies: { minArgs: 1, maxArgs: 1 },
                  removeDownloads: { minArgs: 1, maxArgs: 1 },
                  removeFormData: { minArgs: 1, maxArgs: 1 },
                  removeHistory: { minArgs: 1, maxArgs: 1 },
                  removeLocalStorage: { minArgs: 1, maxArgs: 1 },
                  removePasswords: { minArgs: 1, maxArgs: 1 },
                  removePluginData: { minArgs: 1, maxArgs: 1 },
                  settings: { minArgs: 0, maxArgs: 0 },
                },
                commands: { getAll: { minArgs: 0, maxArgs: 0 } },
                contextMenus: {
                  remove: { minArgs: 1, maxArgs: 1 },
                  removeAll: { minArgs: 0, maxArgs: 0 },
                  update: { minArgs: 2, maxArgs: 2 },
                },
                cookies: {
                  get: { minArgs: 1, maxArgs: 1 },
                  getAll: { minArgs: 1, maxArgs: 1 },
                  getAllCookieStores: { minArgs: 0, maxArgs: 0 },
                  remove: { minArgs: 1, maxArgs: 1 },
                  set: { minArgs: 1, maxArgs: 1 },
                },
                devtools: {
                  inspectedWindow: {
                    eval: { minArgs: 1, maxArgs: 2, singleCallbackArg: !1 },
                  },
                  panels: {
                    create: { minArgs: 3, maxArgs: 3, singleCallbackArg: !0 },
                    elements: {
                      createSidebarPane: { minArgs: 1, maxArgs: 1 },
                    },
                  },
                },
                downloads: {
                  cancel: { minArgs: 1, maxArgs: 1 },
                  download: { minArgs: 1, maxArgs: 1 },
                  erase: { minArgs: 1, maxArgs: 1 },
                  getFileIcon: { minArgs: 1, maxArgs: 2 },
                  open: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                  pause: { minArgs: 1, maxArgs: 1 },
                  removeFile: { minArgs: 1, maxArgs: 1 },
                  resume: { minArgs: 1, maxArgs: 1 },
                  search: { minArgs: 1, maxArgs: 1 },
                  show: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                },
                extension: {
                  isAllowedFileSchemeAccess: { minArgs: 0, maxArgs: 0 },
                  isAllowedIncognitoAccess: { minArgs: 0, maxArgs: 0 },
                },
                history: {
                  addUrl: { minArgs: 1, maxArgs: 1 },
                  deleteAll: { minArgs: 0, maxArgs: 0 },
                  deleteRange: { minArgs: 1, maxArgs: 1 },
                  deleteUrl: { minArgs: 1, maxArgs: 1 },
                  getVisits: { minArgs: 1, maxArgs: 1 },
                  search: { minArgs: 1, maxArgs: 1 },
                },
                i18n: {
                  detectLanguage: { minArgs: 1, maxArgs: 1 },
                  getAcceptLanguages: { minArgs: 0, maxArgs: 0 },
                },
                identity: { launchWebAuthFlow: { minArgs: 1, maxArgs: 1 } },
                idle: { queryState: { minArgs: 1, maxArgs: 1 } },
                management: {
                  get: { minArgs: 1, maxArgs: 1 },
                  getAll: { minArgs: 0, maxArgs: 0 },
                  getSelf: { minArgs: 0, maxArgs: 0 },
                  setEnabled: { minArgs: 2, maxArgs: 2 },
                  uninstallSelf: { minArgs: 0, maxArgs: 1 },
                },
                notifications: {
                  clear: { minArgs: 1, maxArgs: 1 },
                  create: { minArgs: 1, maxArgs: 2 },
                  getAll: { minArgs: 0, maxArgs: 0 },
                  getPermissionLevel: { minArgs: 0, maxArgs: 0 },
                  update: { minArgs: 2, maxArgs: 2 },
                },
                pageAction: {
                  getPopup: { minArgs: 1, maxArgs: 1 },
                  getTitle: { minArgs: 1, maxArgs: 1 },
                  hide: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                  setIcon: { minArgs: 1, maxArgs: 1 },
                  setPopup: {
                    minArgs: 1,
                    maxArgs: 1,
                    fallbackToNoCallback: !0,
                  },
                  setTitle: {
                    minArgs: 1,
                    maxArgs: 1,
                    fallbackToNoCallback: !0,
                  },
                  show: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                },
                permissions: {
                  contains: { minArgs: 1, maxArgs: 1 },
                  getAll: { minArgs: 0, maxArgs: 0 },
                  remove: { minArgs: 1, maxArgs: 1 },
                  request: { minArgs: 1, maxArgs: 1 },
                },
                runtime: {
                  getBackgroundPage: { minArgs: 0, maxArgs: 0 },
                  getPlatformInfo: { minArgs: 0, maxArgs: 0 },
                  openOptionsPage: { minArgs: 0, maxArgs: 0 },
                  requestUpdateCheck: { minArgs: 0, maxArgs: 0 },
                  sendMessage: { minArgs: 1, maxArgs: 3 },
                  sendNativeMessage: { minArgs: 2, maxArgs: 2 },
                  setUninstallURL: { minArgs: 1, maxArgs: 1 },
                },
                sessions: {
                  getDevices: { minArgs: 0, maxArgs: 1 },
                  getRecentlyClosed: { minArgs: 0, maxArgs: 1 },
                  restore: { minArgs: 0, maxArgs: 1 },
                },
                storage: {
                  local: {
                    clear: { minArgs: 0, maxArgs: 0 },
                    get: { minArgs: 0, maxArgs: 1 },
                    getBytesInUse: { minArgs: 0, maxArgs: 1 },
                    remove: { minArgs: 1, maxArgs: 1 },
                    set: { minArgs: 1, maxArgs: 1 },
                  },
                  managed: {
                    get: { minArgs: 0, maxArgs: 1 },
                    getBytesInUse: { minArgs: 0, maxArgs: 1 },
                  },
                  sync: {
                    clear: { minArgs: 0, maxArgs: 0 },
                    get: { minArgs: 0, maxArgs: 1 },
                    getBytesInUse: { minArgs: 0, maxArgs: 1 },
                    remove: { minArgs: 1, maxArgs: 1 },
                    set: { minArgs: 1, maxArgs: 1 },
                  },
                },
                tabs: {
                  captureVisibleTab: { minArgs: 0, maxArgs: 2 },
                  create: { minArgs: 1, maxArgs: 1 },
                  detectLanguage: { minArgs: 0, maxArgs: 1 },
                  discard: { minArgs: 0, maxArgs: 1 },
                  duplicate: { minArgs: 1, maxArgs: 1 },
                  executeScript: { minArgs: 1, maxArgs: 2 },
                  get: { minArgs: 1, maxArgs: 1 },
                  getCurrent: { minArgs: 0, maxArgs: 0 },
                  getZoom: { minArgs: 0, maxArgs: 1 },
                  getZoomSettings: { minArgs: 0, maxArgs: 1 },
                  goBack: { minArgs: 0, maxArgs: 1 },
                  goForward: { minArgs: 0, maxArgs: 1 },
                  highlight: { minArgs: 1, maxArgs: 1 },
                  insertCSS: { minArgs: 1, maxArgs: 2 },
                  move: { minArgs: 2, maxArgs: 2 },
                  query: { minArgs: 1, maxArgs: 1 },
                  reload: { minArgs: 0, maxArgs: 2 },
                  remove: { minArgs: 1, maxArgs: 1 },
                  removeCSS: { minArgs: 1, maxArgs: 2 },
                  sendMessage: { minArgs: 2, maxArgs: 3 },
                  setZoom: { minArgs: 1, maxArgs: 2 },
                  setZoomSettings: { minArgs: 1, maxArgs: 2 },
                  update: { minArgs: 1, maxArgs: 2 },
                },
                topSites: { get: { minArgs: 0, maxArgs: 0 } },
                webNavigation: {
                  getAllFrames: { minArgs: 1, maxArgs: 1 },
                  getFrame: { minArgs: 1, maxArgs: 1 },
                },
                webRequest: {
                  handlerBehaviorChanged: { minArgs: 0, maxArgs: 0 },
                },
                windows: {
                  create: { minArgs: 0, maxArgs: 1 },
                  get: { minArgs: 1, maxArgs: 2 },
                  getAll: { minArgs: 0, maxArgs: 1 },
                  getCurrent: { minArgs: 0, maxArgs: 1 },
                  getLastFocused: { minArgs: 0, maxArgs: 1 },
                  remove: { minArgs: 1, maxArgs: 1 },
                  update: { minArgs: 2, maxArgs: 2 },
                },
              };

              if (Object.keys(u).length === 0)
                throw new Error(
                  "api-metadata.json has not been included in browser-polyfill"
                );

              class h extends WeakMap {
                constructor(r, n = void 0) {
                  super(n), (this.createItem = r);
                }
                get(r) {
                  return (
                    this.has(r) || this.set(r, this.createItem(r)), super.get(r)
                  );
                }
              }

              const U = (e) => e && typeof e == "object" && typeof e.then == "function",
                R = (e, r) => (...n) => {
                  d.runtime.lastError
                    ? e.reject(new Error(d.runtime.lastError.message))
                    : r.singleCallbackArg || (n.length <= 1 && r.singleCallbackArg !== !1)
                    ? e.resolve(n[0])
                    : e.resolve(n);
                },
                y = (e) => (e == 1 ? "argument" : "arguments"),
                W = (e, r) =>
                  function (g, ...o) {
                    if (o.length < r.minArgs)
                      throw new Error(
                        `Expected at least ${r.minArgs} ${y(
                          r.minArgs
                        )} for ${e}(), got ${o.length}`
                      );
                    if (o.length > r.maxArgs)
                      throw new Error(
                        `Expected at most ${r.maxArgs} ${y(
                          r.maxArgs
                        )} for ${e}(), got ${o.length}`
                      );
                    return new Promise((A, l) => {
                      if (r.fallbackToNoCallback)
                        try {
                          g[e](...o, R({ resolve: A, reject: l }, r));
                        } catch (s) {
                          console.warn(
                            `${e} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,
                            s
                          ),
                            g[e](...o),
                            (r.fallbackToNoCallback = !1),
                            (r.noCallback = !0),
                            A();
                        }
                      else
                        r.noCallback
                          ? (g[e](...o), A())
                          : g[e](...o, R({ resolve: A, reject: l }, r));
                    });
                  },
                N = (e, r, n) =>
                  new Proxy(r, {
                    apply(g, o, A) {
                      return n.call(o, e, ...A);
                    },
                  });

              let T = Function.call.bind(Object.prototype.hasOwnProperty);

              const C = (e, r = {}, n = {}) => {
                let g = Object.create(null),
                  o = {
                    has(l, s) {
                      return s in e || s in g;
                    },
                    get(l, s, c) {
                      if (s in g) return g[s];
                      if (!(s in e)) return;
                      let a = e[s];
                      if (typeof a == "function")
                        if (typeof r[s] == "function") a = N(e, e[s], r[s]);
                        else if (T(n, s)) {
                          let w = W(s, n[s]);
                          a = N(e, e[s], w);
                        } else a = a.bind(e);
                      else if (
                        typeof a == "object" &&
                        a !== null &&
                        (T(r, s) || T(n, s))
                      )
                        a = C(a, r[s], n[s]);
                      else if (T(n, "*")) a = C(a, r[s], n["*"]);
                      else
                        return (
                          Object.defineProperty(g, s, {
                            configurable: !0,
                            enumerable: !0,
                            get() {
                              return e[s];
                            },
                            set(w) {
                              e[s] = w;
                            },
                          }),
                          a
                        );
                      return (g[s] = a), a;
                    },
                    set(l, s, c, a) {
                      return s in g ? (g[s] = c) : (e[s] = c), !0;
                    },
                    defineProperty(l, s, c) {
                      return Reflect.defineProperty(g, s, c);
                    },
                    deleteProperty(l, s) {
                      return Reflect.deleteProperty(g, s);
                    },
                  },
                  A = Object.create(e);
                return new Proxy(A, o);
              },
                v = (e) => ({
                  addListener(r, n, ...g) {
                    r.addListener(e.get(n), ...g);
                  },
                  hasListener(r, n) {
                    return r.hasListener(e.get(n));
                  },
                  removeListener(r, n) {
                    r.removeListener(e.get(n));
                  },
                }),
                q = new h((e) =>
                  typeof e != "function"
                    ? e
                    : function (n) {
                        const g = C(n, {}, { getContent: { minArgs: 0, maxArgs: 0 } });
                        e(g);
                      }
                ),
                O = new h((e) =>
                  typeof e != "function"
                    ? e
                    : function (n, g, o) {
                        let A = !1,
                          l,
                          s = new Promise((k) => {
                            l = function (x) {
                              A = !0, k(x);
                            };
                          }),
                          c;
                        try {
                          c = e(n, g, l);
                        } catch (k) {
                          c = Promise.reject(k);
                        }
                        const a = c !== !0 && U(c);
                        if (c !== !0 && !a && !A) return !1;
                        const w = (k) => {
                          k.then(
                            (x) => {
                              o(x);
                            },
                            (x) => {
                              let S;
                              (x && (x instanceof Error || typeof x.message == "string")
                                ? (S = x.message)
                                : (S = "An unexpected error occurred"),
                              o({ __mozWebExtensionPolyfillReject__: !0, message: S }));
                            }
                          ).catch((x) => {
                            console.error("Failed to send onMessage rejected reply", x);
                          });
                        };
                        return w(a ? c : s), !0;
                      }
                ),
                G = ({ reject: e, resolve: r }, n) => {
                  d.runtime.lastError
                    ? d.runtime.lastError.message === b
                      ? r()
                      : e(new Error(d.runtime.lastError.message))
                    : n && n.__mozWebExtensionPolyfillReject__
                    ? e(new Error(n.message))
                    : r(n);
                },
                B = (e, r, n, ...g) => {
                  if (g.length < r.minArgs)
                    throw new Error(
                      `Expected at least ${r.minArgs} ${y(r.minArgs)} for ${e}(), got ${
                        g.length
                      }`
                    );
                  if (g.length > r.maxArgs)
                    throw new Error(
                      `Expected at most ${r.maxArgs} ${y(r.maxArgs)} for ${e}(), got ${
                        g.length
                      }`
                    );
                  return new Promise((o, A) => {
                    const l = G.bind(null, { resolve: o, reject: A });
                    g.push(l), n.sendMessage(...g);
                  });
                },
                Z = {
                  devtools: { network: { onRequestFinished: v(q) } },
                  runtime: {
                    onMessage: v(O),
                    onMessageExternal: v(O),
                    sendMessage: B.bind(null, "sendMessage", { minArgs: 1, maxArgs: 3 }),
                  },
                  tabs: {
                    sendMessage: B.bind(null, "sendMessage", { minArgs: 2, maxArgs: 3 }),
                  },
                },
                P = {
                  clear: { minArgs: 1, maxArgs: 1 },
                  get: { minArgs: 1, maxArgs: 1 },
                  set: { minArgs: 1, maxArgs: 1 },
                };

              return (
                (u.privacy = { network: { "*": P }, services: { "*": P }, websites: { "*": P } }),
                C(d, Z, u)
              );
            };

          i.exports = f(chrome);
        }
      }
    );
  })(L);

  var j = L.exports;
  const m = _(j),
    D = $(() => {
      m.runtime.setUninstallURL(
        "https://docs.google.com/forms/d/e/1FAIpQLSdkAY5CjmtKR7qccXxvN0xM_MkGTohSPcDISr9B3XlyoYsOUg/viewform?usp=sharing"
      );
      let t = !1;
      m.storage.local.get("darkMode").then(({ darkMode: i }) => {
        t = i ?? !1;
      }),
        m.runtime.onMessage.addListener((i, b, f) => (
          i.action === "setIcon" && (m.action.setIcon({ path: i.icon }), f(!0)),
          i.action === "getDarkModeStatus" && f(t),
          !0
        )),
        m.runtime.onInstalled.addListener(async (i) => {
          (i?.reason) === "install" &&
            (setInterval(M, 500),
            m.tabs.create({ url: m.runtime.getURL("post-install.html") }));
        });

      function M() {
        m.action.getUserSettings().then((i) => {
          m.storage.local.set({ isExtensionPinned: i.isOnToolbar });
        });
      }

      m.action.onClicked.addListener(async (i) => {
        if (i.id) {
          const { darkMode: b } = await m.storage.local.get("darkMode"),
            f = !b;
          (t = f), await m.storage.local.set({ darkMode: f });
          const d = await m.tabs.query({});
          f
            ? d.forEach((u) => {
                u.id &&
                  m.tabs
                    .sendMessage(u.id, { action: "turnOnDarkMode" })
                    .catch((h) => {
                      console.error(
                        "[Background]: Error sending turnOnDarkMode message",
                        h,
                        u
                      );
                    });
              })
            : d.forEach((u) => {
                u.id &&
                  m.tabs
                    .sendMessage(u.id, { action: "turnOffDarkMode" })
                    .catch((h) => {
                      console.error(
                        "[Background]: Error sending turnOffDarkMode message",
                        h,
                        u
                      );
                    });
              });
        }
      });
    });

  function H() {}
  function p(t, ...M) {}
  const I = {
    debug: (...t) => p(console.debug, ...t),
    log: (...t) => p(console.log, ...t),
    warn: (...t) => p(console.warn, ...t),
    error: (...t) => p(console.error, ...t),
  };

  let E;
  try {
    (E = D.main()),
      E instanceof Promise &&
        console.warn(
          "The background's main() function return a promise, but it must be synchronous"
        );
  } catch (t) {
    throw (I.error("The background crashed on startup!"), t);
  }
  return E;
};

_background;
