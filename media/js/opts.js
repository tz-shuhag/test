/*! (c) FunnyMonkey under Copyright Reserved */
(e => {
    "use strict";
    e.api = "undefined" != typeof browser ? browser : chrome;
    const t = e.api.runtime.getManifest();
    e.isDev = "Dev" === t.version_name.trim(), e.browserName = "chrome";
    const s = navigator.userAgent;
    /Edg\//.test(s) ? e.browserName = "edge" : !/Chrome\//.test(s) || /Edg\//.test(s) || /OPR\//.test(s) ? /Firefox\//.test(s) ? e.browserName = "firefox" : /Safari\//.test(s) && !/Chrome\//.test(s) && (e.browserName = "safari") : e.browserName = "chrome", e.opts = {
        manifest: t,
        urlAliases: {
            Edge: {
                "chrome://newtab/": "edge://newtab/",
                "chrome://bookmarks": "edge://favorites",
                "chrome://extensions/shortcuts": "edge://extensions/shortcuts",
                "chrome://settings/syncSetup": "edge://settings/profiles/sync"
            },
            Opera: {
                "chrome://newtab/": "chrome://startpage/",
                "chrome://bookmarks": "opera://bookmarks",
                "chrome://extensions/shortcuts": "opera://settings/keyboardShortcuts"
            }
        },
        classes: {
            page: {
                style: "lds-be-style"
            }
        },
        attr: {
            id: "data-id",
            stop: "data-stop",
            i18n: "data-i18n",
            i18nReplaces: "data-i18nReplaces",
            overrides: "data-overrides",
            style: "data-style",
            name: "data-name",
            hidden: "data-hidden"
        },
        website: {
            youtube: "https://www.youtube.com/",
            coupongogoExtension: "https://www.jtm.pub/extension/install?p=" + e.browserName,
            extensionUrl: {
                chrome: "https://chromewebstore.google.com/detail/youtube-assistent-new-lay/dninfcoeoeoplchmcleglkelmofmaeho",
                edge: "https://microsoftedge.microsoft.com/addons/detail/youtube-assistent-new-l/jjmdnjgajalmoopljiebjbblgmgckfae"
            }
        },
        tips: {
            message: "extension-tips-message",
            result: "extension-tips-result"
        },
        storageKeys: {
            youtube: {
                videoPlaySpeed: "yt/videoPlaySpeed",
                recommendData: "yt/recommendData",
                functionState: {
                    commentTable: "yt/commentTable",
                    themeProgressBar: "yt/themeProgressBar",
                    speedControl: "yt/speedControl",
                    markOrRemoveAd: "yt/markOrRemoveAd"
                },
                theme: "yt/theme",
                videoLoop: "yt/videoLoop"
            },
            coupon: {}
        }
    }, e.cl = e.opts.classes, e.attr = e.opts.attr
})(jsu);
