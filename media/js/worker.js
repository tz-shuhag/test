/*! (c) FunnyMonkey under Copyright Reserved */
((e) => {
  "use strict";

  // ConnectHelper
  e.ConnectHelper = function (t) {
    this.init = async () => {
      const a = {
        langvars: t.helper.language.getLangVars,
        openLink: t.helper.util.openLink
      };

      const n = (e) => {
        if (e._timer) {
          clearTimeout(e._timer);
          delete e._timer;
        }
      };

      const i = (e) => {
        n(e);
        e.disconnect();
      };

      const s = (e, t) => {
        try {
          t.postMessage({ uid: e.uid, result: "Yes, I am here" });
        } catch (e) {}
      };

      e.api.runtime.onConnect.addListener((port) => {
        if (!port.name || port.name === "keepalive") {
          port.onMessage.addListener(s);
          port.onDisconnect.addListener(n);
          port._timer = setTimeout(i, 25000, port);
        }
      });

      e.api.runtime.onMessage.addListener((msg, sender, sendResponse) => {
        if (a[msg.type]) {
          msg.tabId = sender.tab ? sender.tab.id : null;
          a[msg.type](msg).then(sendResponse).catch((err) => {
            t.log(err);
            sendResponse();
          });
        } else {
          if (msg.type === "theme") {
            // Do nothing
          } else {
            t.log("Unknown message type:" + msg.type);
          }
          sendResponse();
        }
        return true;
      });
    };
  };

  // DaoHelper
  e.DaoHelper = function (t) {
    let a = {};

    this.init = () =>
      new Promise((resolve) => {
        e.api.storage.local.get(["model"], (result) => {
          a = result.model || {};
          if (a.installationDate === undefined) a.installationDate = +new Date();
          if (a.lastUpdateDate === undefined) a.lastUpdateDate = +new Date();
          n().then(resolve);
        });
      });

    this.setData = (key, value) =>
      new Promise((resolve) => {
        a[key] = value;
        n().then(resolve);
      });

    this.setValue = (obj) =>
      new Promise((resolve) => {
        a[obj.key] = obj.value;
        n().then(resolve);
      });

    this.getValue = (obj) =>
      new Promise((resolve) => {
        resolve(this.getData(obj.key));
      });

    this.getData = (key) => a[key] || null;

    const n = () =>
      new Promise((resolve) => {
        if (Object.getOwnPropertyNames(a).length > 0) {
          e.api.storage.sync.set({ model: a }, () => {
            e.api.runtime.lastError;
            resolve();
          });
        } else {
          resolve();
        }
      });
  };

  // LanguageHelper
  e.LanguageHelper = function (t) {
    const languageMap = {
      en: "English",
      es: "Español",
      ar: "العربية",
      fr: "Français",
      pt: "Português",
      ru: "Русский",
      ja: "日本語",
      de: "Deutsch",
      ko: "한국어",
      it: "Italiano",
      id: "Bahasa Indonesia",
      tr: "Türkçe",
      pl: "Polski",
      uk: "Українська",
      nl: "Nederlands",
      vi: "Tiếng Việt",
      ms: "Bahasa Melayu",
      th: "ไทย",
      zh_CN: "Chinese (Simplified)",
      zh_TW: "Chinese (Traditional)"
    };

    const rtlLanguages = ["ar", "fa", "he"];
    const fallbackMap = { pt: "pt_PT" };

    let currentLang = null;
    let langVars = {};
    let isRtl = false;

    this.init = () =>
      new Promise((resolve) => {
        (e.api.storage.sync || e.api.storage.local).get(["language"], (stored) => {
          const defaultLocale = e.opts.manifest.default_locale;
          let lang = stored?.language || "default";
          let baseLang = null;

          if (lang === "default") {
            const uiLang = this.getUILanguage();
            if (uiLang) lang = uiLang;
          }

          lang = lang.replace("-", "_");
          if (fallbackMap[lang]) lang = fallbackMap[lang];
          if (lang.includes("_")) baseLang = lang.replace(/_.*$/, "");

          this.getAvailableLanguages().then((available) => {
            [lang, baseLang, defaultLocale].some((candidate) => {
              if (
                candidate &&
                available?.infos?.[candidate] &&
                available.infos[candidate].available
              ) {
                currentLang = candidate;
                isRtl = rtlLanguages.includes(currentLang);
                r(candidate, defaultLocale).then((result) => {
                  if (result?.langVars) {
                    langVars = result.langVars;
                    resolve();
                  }
                });
                return true;
              }
              return false;
            });
          });
        });
      });

    this.getUILanguage = () => {
      try {
        return e.api.i18n.getUILanguage().replace("-", "_");
      } catch {
        return null;
      }
    };

    this.getLanguage = () => currentLang;

    this.getRtlLanguages = async () => rtlLanguages;

    this.getLangVars = () =>
      new Promise((resolve) => {
        resolve({
          language: currentLang,
          dir: isRtl ? "rtl" : "ltr",
          vars: langVars
        });
      });

    this.getAvailableLanguages = () =>
      new Promise((resolve) => {
        const total = Object.keys(languageMap).length;
        let loaded = 0;
        const infos = {};

        Object.keys(languageMap).forEach((code) => {
          infos[code] = {
            name: code,
            label: languageMap[code],
            available: false
          };

          const done = () => {
            if (++loaded === total) resolve({ infos });
          };

          e.fetch(e.api.runtime.getURL(`_locales/${code}/messages.json`), {
            method: "HEAD"
          }).then(() => {
            infos[code].available = true;
            done();
          }, done).catch(() => {});
        });
      });

    this.getIncompleteLanguages = () =>
      new Promise((resolve) => {
        e.xhr(e.opts.website.translation.info).then((xhr) => {
          const json = JSON.parse(xhr.responseText);
          const result = [];

          if (json?.languages && json?.categories) {
            let total = 0;
            Object.values(json.categories).forEach((cat) => {
              total += cat.total;
            });

            json.languages.forEach((lang) => {
              if (lang.varsAmount < total) {
                result.push(lang.name);
              }
            });
          }

          resolve(result);
        });
      });

    const r = (code, fallback = null) =>
      new Promise((resolve) => {
        if (!code) return;

        const loadVars = (data) => {
          const vars = data.langVars;
          e.fetch(e.api.runtime.getURL(`_locales/${code}/messages.json`))
            .then((res) => res.json())
            .then((json) => {
              Object.assign(vars, json);
              resolve({ langVars: vars });
            })
            .catch(() => {});
        };

        if (fallback && fallback !== code) {
          r(fallback, null).then(loadVars);
        } else {
          loadVars({ langVars: {} });
        }
      });
  };

  // UpgradeHelper
  e.UpgradeHelper = function (t) {
    this.loaded = false;

    this.init = async () => {
      if (e.api.runtime.onUpdateAvailable) {
        e.api.runtime.onUpdateAvailable.addListener(() => {
          e.api.runtime.reload();
        });
      }
      this.loaded = true;
    };

    this.onInstalled = () => {
      const installed = t.helper.dao.getData("installationDate");
      if (installed === null || +new Date() - installed < 60000) {
        a("install");
        t.helper.util.openLink({ href: e.opts.website.youtube, newTab: true });
      }
      t.reinitialize();
    };

    this.onUpdated = (details) => {};

    const a = (reason) =>
      new Promise((resolve) => {
        resolve();
      });
  };

  // UtilHelper
  e.UtilHelper = function (t) {
    this.getParsedUrl = (url) => {
      const aliases = e.opts.urlAliases[e.browserName];
      return aliases && aliases[url] ? aliases[url] : url;
    };

    this.openLink = (opts) =>
      new Promise((resolve) => {
        let query = "";

        if (opts.params) {
          query = Object.entries(opts.params)
            .map(([k, v]) => `${encodeURIComponent(k)}=${v}`)
            .join("&");

          if (query) query = "?" + query;
        }

        const url = this.getParsedUrl(opts.href) + query;

        const openNewTab = (index = null) => {
          e.api.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            e.api.tabs.create(
              {
                url,
                active: opts.active !== false,
                index: index === null ? tabs[0].index + 1 : index,
                openerTabId: tabs[0].id
              },
              (tab) => {
                t.helper.dao.setData("openedByExtension", tab.id).then(resolve);
              }
            );
          });
        };

        if (opts.newTab) {
          if (opts.position === "afterLast") {
            e.api.tabs.query({ currentWindow: true }, (tabs) => {
              const maxIndex = Math.max(...tabs.map((tab) => tab.index));
              openNewTab(maxIndex + 1);
            });
          } else if (opts.position === "beforeFirst") {
            openNewTab(0);
          } else {
            openNewTab();
          }
        } else if (opts.newWindow) {
          e.api.windows.create({ url, state: "maximized" });
          resolve();
        } else if (opts.incognito) {
          e.api.windows.create({ url, state: "maximized", incognito: true });
          resolve();
        } else {
          e.api.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            e.api.tabs.update(tabs[0].id, { url }, (tab) => {
              t.helper.dao.setData("openedByExtension", tab.id).then(resolve);
            });
          });
        }
      });
  };

  // App entry point
  new (function () {
    this.reinitialize = (e = {}) => {};

    const initHelpers = () => {
      this.helper = {
        dao: new e.DaoHelper(this),
        connect: new e.ConnectHelper(this),
        language: new e.LanguageHelper(this),
        upgrade: new e.UpgradeHelper(this),
        util: new e.UtilHelper(this)
      };
    };

    const handleInstallOrUpdate = (event, retry = 0) => {
      if (this.helper?.upgrade?.loaded) {
        if (event.reason === "install") {
          this.helper.upgrade.onInstalled();
        } else if (event.reason === "update") {
          this.helper.upgrade.onUpdated(event);
        }
      } else if (retry < 100) {
        e.delay(500).then(() => {
          handleInstallOrUpdate(event, retry + 1);
        });
      }
    };

    this.run = () => {
      const start = +new Date();

      if (e.browserName === "safari") {
        initSafari();
      } else {
        initChrome();
      }

      initHelpers();

      this.helper.connect.init()
        .then(() => Promise.all([
          this.helper.dao.init(),
          this.helper.language.init()
        ]))
        .then(() => Promise.all([
          this.helper.upgrade.init()
        ]))
        .then(() => this.reinitialize())
        .then(() => {
          this.log("Finished bg script loading", +new Date() - start);
        });
    };

    const initChrome = () => {
      e.api.runtime.onInstalled.addListener((e) => handleInstallOrUpdate(e));

      let url = e.opts.website.extensionUrl.chrome;
      if (e.browserName === "Edge") url = e.opts.website.extensionUrl.edge;

      e.api.runtime.setUninstallURL(url);

      const action = e.api.action || e.api.browserAction;
      action.onClicked.addListener((tab) => {
        if (tab.url.includes("youtube.com")) {
          action.setPopup({ popup: "/media/html/popup.html?popup" });
          action.openPopup();
          action.setPopup({ popup: "" });
        } else {
          this.helper.util.openLink({ href: e.opts.website.youtube, newTab: true });
        }
      });
    };

    const initSafari = () => {};

    this.log = (msg) => {
      if (e.isDev) console.log(msg);
    };
  })().run();

})(jsu);
