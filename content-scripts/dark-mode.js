var _dark_mode=function(){"use strict";var Dc=Object.defineProperty;var Aa=Q=>{throw TypeError(Q)};var Pc=(Q,G,en)=>G in Q?Dc(Q,G,{enumerable:!0,configurable:!0,writable:!0,value:en}):Q[G]=en;var Nt=(Q,G,en)=>Pc(Q,typeof G!="symbol"?G+"":G,en),Vt=(Q,G,en)=>G.has(Q)||Aa("Cannot "+en);var Kr=(Q,G,en)=>(Vt(Q,G,"read from private field"),en?en.call(Q):G.get(Q)),Qr=(Q,G,en)=>G.has(Q)?Aa("Cannot add the same private member more than once"):G instanceof WeakSet?G.add(Q):G.set(Q,en),Ca=(Q,G,en,wr)=>(Vt(Q,G,"write to private field"),wr?wr.call(Q,en):G.set(Q,en),en),Wt=(Q,G,en)=>(Vt(Q,G,"access private method"),en);var Zr,or,ne,ar,Ia,Ea;function Q(z){return z}var G=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function en(z){return z&&z.__esModule&&Object.prototype.hasOwnProperty.call(z,"default")?z.default:z}var wr={exports:{}};(function(z,M){(function(E,O){O(z)})(typeof globalThis<"u"?globalThis:typeof self<"u"?self:G,function(E){if(!(globalThis.chrome&&globalThis.chrome.runtime&&globalThis.chrome.runtime.id))throw new Error("This script should only be loaded in a browser extension.");if(globalThis.browser&&globalThis.browser.runtime&&globalThis.browser.runtime.id)E.exports=globalThis.browser;else{const O="The message port closed before a response was received.",$n=yn=>{const Fn={alarms:{clear:{minArgs:0,maxArgs:1},clearAll:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getAll:{minArgs:0,maxArgs:0}},bookmarks:{create:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},getChildren:{minArgs:1,maxArgs:1},getRecent:{minArgs:1,maxArgs:1},getSubTree:{minArgs:1,maxArgs:1},getTree:{minArgs:0,maxArgs:0},move:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeTree:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}},browserAction:{disable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},enable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},getBadgeBackgroundColor:{minArgs:1,maxArgs:1},getBadgeText:{minArgs:1,maxArgs:1},getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},openPopup:{minArgs:0,maxArgs:0},setBadgeBackgroundColor:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setBadgeText:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},browsingData:{remove:{minArgs:2,maxArgs:2},removeCache:{minArgs:1,maxArgs:1},removeCookies:{minArgs:1,maxArgs:1},removeDownloads:{minArgs:1,maxArgs:1},removeFormData:{minArgs:1,maxArgs:1},removeHistory:{minArgs:1,maxArgs:1},removeLocalStorage:{minArgs:1,maxArgs:1},removePasswords:{minArgs:1,maxArgs:1},removePluginData:{minArgs:1,maxArgs:1},settings:{minArgs:0,maxArgs:0}},commands:{getAll:{minArgs:0,maxArgs:0}},contextMenus:{remove:{minArgs:1,maxArgs:1},removeAll:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},cookies:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:1,maxArgs:1},getAllCookieStores:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},devtools:{inspectedWindow:{eval:{minArgs:1,maxArgs:2,singleCallbackArg:!1}},panels:{create:{minArgs:3,maxArgs:3,singleCallbackArg:!0},elements:{createSidebarPane:{minArgs:1,maxArgs:1}}}},downloads:{cancel:{minArgs:1,maxArgs:1},download:{minArgs:1,maxArgs:1},erase:{minArgs:1,maxArgs:1},getFileIcon:{minArgs:1,maxArgs:2},open:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},pause:{minArgs:1,maxArgs:1},removeFile:{minArgs:1,maxArgs:1},resume:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},extension:{isAllowedFileSchemeAccess:{minArgs:0,maxArgs:0},isAllowedIncognitoAccess:{minArgs:0,maxArgs:0}},history:{addUrl:{minArgs:1,maxArgs:1},deleteAll:{minArgs:0,maxArgs:0},deleteRange:{minArgs:1,maxArgs:1},deleteUrl:{minArgs:1,maxArgs:1},getVisits:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1}},i18n:{detectLanguage:{minArgs:1,maxArgs:1},getAcceptLanguages:{minArgs:0,maxArgs:0}},identity:{launchWebAuthFlow:{minArgs:1,maxArgs:1}},idle:{queryState:{minArgs:1,maxArgs:1}},management:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},getSelf:{minArgs:0,maxArgs:0},setEnabled:{minArgs:2,maxArgs:2},uninstallSelf:{minArgs:0,maxArgs:1}},notifications:{clear:{minArgs:1,maxArgs:1},create:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:0},getPermissionLevel:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},pageAction:{getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},hide:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},permissions:{contains:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},request:{minArgs:1,maxArgs:1}},runtime:{getBackgroundPage:{minArgs:0,maxArgs:0},getPlatformInfo:{minArgs:0,maxArgs:0},openOptionsPage:{minArgs:0,maxArgs:0},requestUpdateCheck:{minArgs:0,maxArgs:0},sendMessage:{minArgs:1,maxArgs:3},sendNativeMessage:{minArgs:2,maxArgs:2},setUninstallURL:{minArgs:1,maxArgs:1}},sessions:{getDevices:{minArgs:0,maxArgs:1},getRecentlyClosed:{minArgs:0,maxArgs:1},restore:{minArgs:0,maxArgs:1}},storage:{local:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},managed:{get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1}},sync:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}}},tabs:{captureVisibleTab:{minArgs:0,maxArgs:2},create:{minArgs:1,maxArgs:1},detectLanguage:{minArgs:0,maxArgs:1},discard:{minArgs:0,maxArgs:1},duplicate:{minArgs:1,maxArgs:1},executeScript:{minArgs:1,maxArgs:2},get:{minArgs:1,maxArgs:1},getCurrent:{minArgs:0,maxArgs:0},getZoom:{minArgs:0,maxArgs:1},getZoomSettings:{minArgs:0,maxArgs:1},goBack:{minArgs:0,maxArgs:1},goForward:{minArgs:0,maxArgs:1},highlight:{minArgs:1,maxArgs:1},insertCSS:{minArgs:1,maxArgs:2},move:{minArgs:2,maxArgs:2},query:{minArgs:1,maxArgs:1},reload:{minArgs:0,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeCSS:{minArgs:1,maxArgs:2},sendMessage:{minArgs:2,maxArgs:3},setZoom:{minArgs:1,maxArgs:2},setZoomSettings:{minArgs:1,maxArgs:2},update:{minArgs:1,maxArgs:2}},topSites:{get:{minArgs:0,maxArgs:0}},webNavigation:{getAllFrames:{minArgs:1,maxArgs:1},getFrame:{minArgs:1,maxArgs:1}},webRequest:{handlerBehaviorChanged:{minArgs:0,maxArgs:0}},windows:{create:{minArgs:0,maxArgs:1},get:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:1},getCurrent:{minArgs:0,maxArgs:1},getLastFocused:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}}};if(Object.keys(Fn).length===0)throw new Error("api-metadata.json has not been included in browser-polyfill");class gn extends WeakMap{constructor(C,B=void 0){super(B),this.createItem=C}get(C){return this.has(C)||this.set(C,this.createItem(C)),super.get(C)}}const un=$=>$&&typeof $=="object"&&typeof $.then=="function",An=($,C)=>(...B)=>{yn.runtime.lastError?$.reject(new Error(yn.runtime.lastError.message)):C.singleCallbackArg||B.length<=1&&C.singleCallbackArg!==!1?$.resolve(B[0]):$.resolve(B)},an=$=>$==1?"argument":"arguments",zn=($,C)=>function(D,...tn){if(tn.length<C.minArgs)throw new Error(`Expected at least ${C.minArgs} ${an(C.minArgs)} for ${$}(), got ${tn.length}`);if(tn.length>C.maxArgs)throw new Error(`Expected at most ${C.maxArgs} ${an(C.maxArgs)} for ${$}(), got ${tn.length}`);return new Promise((vn,kn)=>{if(C.fallbackToNoCallback)try{D[$](...tn,An({resolve:vn,reject:kn},C))}catch(R){console.warn(`${$} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,R),D[$](...tn),C.fallbackToNoCallback=!1,C.noCallback=!0,vn()}else C.noCallback?(D[$](...tn),vn()):D[$](...tn,An({resolve:vn,reject:kn},C))})},Ln=($,C,B)=>new Proxy(C,{apply(D,tn,vn){return B.call(tn,$,...vn)}});let mn=Function.call.bind(Object.prototype.hasOwnProperty);const sn=($,C={},B={})=>{let D=Object.create(null),tn={has(kn,R){return R in $||R in D},get(kn,R,fn){if(R in D)return D[R];if(!(R in $))return;let nn=$[R];if(typeof nn=="function")if(typeof C[R]=="function")nn=Ln($,$[R],C[R]);else if(mn(B,R)){let Vn=zn(R,B[R]);nn=Ln($,$[R],Vn)}else nn=nn.bind($);else if(typeof nn=="object"&&nn!==null&&(mn(C,R)||mn(B,R)))nn=sn(nn,C[R],B[R]);else if(mn(B,"*"))nn=sn(nn,C[R],B["*"]);else return Object.defineProperty(D,R,{configurable:!0,enumerable:!0,get(){return $[R]},set(Vn){$[R]=Vn}}),nn;return D[R]=nn,nn},set(kn,R,fn,nn){return R in D?D[R]=fn:$[R]=fn,!0},defineProperty(kn,R,fn){return Reflect.defineProperty(D,R,fn)},deleteProperty(kn,R){return Reflect.deleteProperty(D,R)}},vn=Object.create($);return new Proxy(vn,tn)},Bn=$=>({addListener(C,B,...D){C.addListener($.get(B),...D)},hasListener(C,B){return C.hasListener($.get(B))},removeListener(C,B){C.removeListener($.get(B))}}),Rn=new gn($=>typeof $!="function"?$:function(B){const D=sn(B,{},{getContent:{minArgs:0,maxArgs:0}});$(D)}),Yn=new gn($=>typeof $!="function"?$:function(B,D,tn){let vn=!1,kn,R=new Promise(Jn=>{kn=function(wn){vn=!0,Jn(wn)}}),fn;try{fn=$(B,D,kn)}catch(Jn){fn=Promise.reject(Jn)}const nn=fn!==!0&&un(fn);if(fn!==!0&&!nn&&!vn)return!1;const Vn=Jn=>{Jn.then(wn=>{tn(wn)},wn=>{let lr;wn&&(wn instanceof Error||typeof wn.message=="string")?lr=wn.message:lr="An unexpected error occurred",tn({__mozWebExtensionPolyfillReject__:!0,message:lr})}).catch(wn=>{console.error("Failed to send onMessage rejected reply",wn)})};return Vn(nn?fn:R),!0}),qe=({reject:$,resolve:C},B)=>{yn.runtime.lastError?yn.runtime.lastError.message===O?C():$(new Error(yn.runtime.lastError.message)):B&&B.__mozWebExtensionPolyfillReject__?$(new Error(B.message)):C(B)},Sr=($,C,B,...D)=>{if(D.length<C.minArgs)throw new Error(`Expected at least ${C.minArgs} ${an(C.minArgs)} for ${$}(), got ${D.length}`);if(D.length>C.maxArgs)throw new Error(`Expected at most ${C.maxArgs} ${an(C.maxArgs)} for ${$}(), got ${D.length}`);return new Promise((tn,vn)=>{const kn=qe.bind(null,{resolve:tn,reject:vn});D.push(kn),B.sendMessage(...D)})},re={devtools:{network:{onRequestFinished:Bn(Rn)}},runtime:{onMessage:Bn(Yn),onMessageExternal:Bn(Yn),sendMessage:Sr.bind(null,"sendMessage",{minArgs:1,maxArgs:3})},tabs:{sendMessage:Sr.bind(null,"sendMessage",{minArgs:2,maxArgs:3})}},ir={clear:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}};return Fn.privacy={network:{"*":ir},services:{"*":ir},websites:{"*":ir}},sn(yn,re,Fn)};E.exports=$n(chrome)}})})(wr);var Fa=wr.exports;const Nn=en(Fa);var Te={exports:{}};(function(z,M){(function(E,O){O(M)})(G,function(E){var O;(function(n){n.GET_DATA="ui-bg-get-data",n.GET_DEVTOOLS_DATA="ui-bg-get-devtools-data",n.SUBSCRIBE_TO_CHANGES="ui-bg-subscribe-to-changes",n.UNSUBSCRIBE_FROM_CHANGES="ui-bg-unsubscribe-from-changes",n.CHANGE_SETTINGS="ui-bg-change-settings",n.SET_THEME="ui-bg-set-theme",n.TOGGLE_ACTIVE_TAB="ui-bg-toggle-active-tab",n.MARK_NEWS_AS_READ="ui-bg-mark-news-as-read",n.MARK_NEWS_AS_DISPLAYED="ui-bg-mark-news-as-displayed",n.LOAD_CONFIG="ui-bg-load-config",n.APPLY_DEV_DYNAMIC_THEME_FIXES="ui-bg-apply-dev-dynamic-theme-fixes",n.RESET_DEV_DYNAMIC_THEME_FIXES="ui-bg-reset-dev-dynamic-theme-fixes",n.APPLY_DEV_INVERSION_FIXES="ui-bg-apply-dev-inversion-fixes",n.RESET_DEV_INVERSION_FIXES="ui-bg-reset-dev-inversion-fixes",n.APPLY_DEV_STATIC_THEMES="ui-bg-apply-dev-static-themes",n.RESET_DEV_STATIC_THEMES="ui-bg-reset-dev-static-themes",n.COLOR_SCHEME_CHANGE="ui-bg-color-scheme-change",n.HIDE_HIGHLIGHTS="ui-bg-hide-highlights"})(O||(O={}));var $n;(function(n){n.CHANGES="bg-ui-changes"})($n||($n={}));var yn;(function(n){n.CSS_UPDATE="debug-bg-ui-css-update",n.UPDATE="debug-bg-ui-update"})(yn||(yn={}));var Fn;(function(n){n.ADD_CSS_FILTER="bg-cs-add-css-filter",n.ADD_DYNAMIC_THEME="bg-cs-add-dynamic-theme",n.ADD_STATIC_THEME="bg-cs-add-static-theme",n.ADD_SVG_FILTER="bg-cs-add-svg-filter",n.CLEAN_UP="bg-cs-clean-up",n.FETCH_RESPONSE="bg-cs-fetch-response",n.UNSUPPORTED_SENDER="bg-cs-unsupported-sender"})(Fn||(Fn={}));var gn;(function(n){n.RELOAD="debug-bg-cs-reload"})(gn||(gn={}));var un;(function(n){n.COLOR_SCHEME_CHANGE="cs-bg-color-scheme-change",n.DARK_THEME_DETECTED="cs-bg-dark-theme-detected",n.DARK_THEME_NOT_DETECTED="cs-bg-dark-theme-not-detected",n.FETCH="cs-bg-fetch",n.DOCUMENT_CONNECT="cs-bg-document-connect",n.DOCUMENT_FORGET="cs-bg-document-forget",n.DOCUMENT_FREEZE="cs-bg-document-freeze",n.DOCUMENT_RESUME="cs-bg-document-resume"})(un||(un={}));var An;(function(n){n.LOG="debug-cs-bg-log"})(An||(An={}));var an;(function(n){n.EXPORT_CSS_RESPONSE="cs-ui-export-css-response"})(an||(an={}));var zn;(function(n){n.EXPORT_CSS="ui-cs-export-css"})(zn||(zn={}));const Ln=typeof navigator<"u",mn=Ln?navigator.userAgentData&&Array.isArray(navigator.userAgentData.brands)?navigator.userAgentData.brands.map(n=>`${n.brand.toLowerCase()} ${n.version}`).join(" "):navigator.userAgent.toLowerCase():"some useragent",sn=Ln?navigator.userAgentData&&typeof navigator.userAgentData.platform=="string"?navigator.userAgentData.platform.toLowerCase():navigator.platform.toLowerCase():"some platform",Bn=mn.includes("chrome")||mn.includes("chromium"),Rn=mn.includes("firefox")||mn.includes("thunderbird")||mn.includes("librewolf"),Yn=mn.includes("safari")&&!Bn,qe=sn.startsWith("win"),Sr=sn.startsWith("mac");Ln&&navigator.userAgentData?navigator.userAgentData.mobile:mn.includes("mobile");const re=typeof ShadowRoot=="function",ir=typeof MediaQueryList=="function"&&typeof MediaQueryList.prototype.addEventListener=="function",$=typeof CSSLayerBlockRule=="function";(()=>{const n=mn.match(/chrom(?:e|ium)(?:\/| )([^ ]+)/);return n&&n[1]?n[1]:""})(),(()=>{const n=mn.match(/(?:firefox|librewolf)(?:\/| )([^ ]+)/);return n&&n[1]?n[1]:""})();const C=(()=>{try{return document.querySelector(":defined"),!0}catch{return!1}})(),B=(()=>{try{if(typeof document>"u")return!1;const n=document.createElement("div");return!n||typeof n.style!="object"?!1:typeof n.style.colorScheme=="string"?!0:(n.setAttribute("style","color-scheme: dark"),n.style.colorScheme==="dark")}catch{return!1}})();async function D(n,r,e){const t=await fetch(n,{cache:"force-cache",credentials:"omit",referrer:e});if(Rn&&r==="text/css"&&n.startsWith("moz-extension://")&&n.endsWith(".css"))return t;if(r&&!t.headers.get("Content-Type").startsWith(r))throw new Error(`Mime type mismatch when loading ${n}`);if(!t.ok)throw new Error(`Unable to load ${n} ${t.status} ${t.statusText}`);return t}async function tn(n,r){const e=await D(n,r);return await kn(e)}async function vn(n,r){return await(await D(n,r)).blob()}async function kn(n){const r=await n.blob();return await new Promise(t=>{const o=new FileReader;o.onloadend=()=>t(o.result),o.readAsDataURL(r)})}async function R(n,r,e){return await(await D(n,r,e)).text()}const fn=async n=>Promise.reject(new Error(["Embedded Dark Reader cannot access a cross-origin resource",n,"Overview your URLs and CORS policies or use","`DarkReader.setFetchMethod(fetch: (url) => Promise<Response>))`.","See if using `DarkReader.setFetchMethod(window.fetch)`","before `DarkReader.enable()` works."].join(" ")));let nn=fn;function Vn(n){n?nn=n:nn=fn}async function Jn(n){return await nn(n)}window.chrome||(window.chrome={}),chrome.runtime||(chrome.runtime={});const wn=new Set;async function lr(...n){if(n[0]&&n[0].type===un.FETCH){const{id:r}=n[0];try{const{url:e,responseType:t}=n[0].data,o=await Jn(e);let a;t==="data-url"?a=await kn(o):a=await o.text(),wn.forEach(i=>i({type:Fn.FETCH_RESPONSE,data:a,error:null,id:r}))}catch(e){console.error(e),wn.forEach(t=>t({type:Fn.FETCH_RESPONSE,data:null,error:e,id:r}))}}}function Gt(n){wn.add(n)}if(typeof chrome.runtime.sendMessage=="function"){const n=chrome.runtime.sendMessage;chrome.runtime.sendMessage=(...r)=>{lr(...r),n.apply(chrome.runtime,r)}}else chrome.runtime.sendMessage=lr;if(chrome.runtime.onMessage||(chrome.runtime.onMessage={}),typeof chrome.runtime.onMessage.addListener=="function"){const n=chrome.runtime.onMessage.addListener;chrome.runtime.onMessage.addListener=(...r)=>{Gt(r[0]),n.apply(chrome.runtime.onMessage,r)}}else chrome.runtime.onMessage.addListener=(...n)=>Gt(n[0]);var ee;(function(n){n.cssFilter="cssFilter",n.svgFilter="svgFilter",n.staticTheme="staticTheme",n.dynamicTheme="dynamicTheme"})(ee||(ee={}));var Oe;(function(n){n.NONE="",n.TIME="time",n.SYSTEM="system",n.LOCATION="location"})(Oe||(Oe={}));const te={darkScheme:{background:"#181a1b",text:"#e8e6e3"},lightScheme:{background:"#dcdad7",text:"#181a1b"}},Ut={mode:1,brightness:100,contrast:100,grayscale:0,sepia:0,useFont:!1,fontFamily:Sr?"Helvetica Neue":qe?"Segoe UI":"Open Sans",textStroke:0,engine:ee.dynamicTheme,stylesheet:"",darkSchemeBackgroundColor:te.darkScheme.background,darkSchemeTextColor:te.darkScheme.text,lightSchemeBackgroundColor:te.lightScheme.background,lightSchemeTextColor:te.lightScheme.text,scrollbarColor:Sr?"":"auto",selectionColor:"auto",styleSystemControls:!B,lightColorScheme:"Default",darkColorScheme:"Default",immediateModify:!1};Oe.NONE;function Da(n){return n.length!=null}function Cn(n,r){if(Da(n))for(let e=0,t=n.length;e<t;e++)r(n[e]);else for(const e of n)r(e)}function Ne(n,r){Cn(r,e=>n.push(e))}function Pa(n){const r=[];for(let e=0,t=n.length;e<t;e++)r.push(n[e]);return r}function Dn(...n){}function Kt(...n){}function Ve(n){let r=!1,e=null,t;return Object.assign((...i)=>{t=i,e?r=!0:(n(...t),e=requestAnimationFrame(()=>{e=null,r&&(n(...t),r=!1)}))},{cancel:()=>{cancelAnimationFrame(e),r=!1,e=null}})}function qa(){const n=[];let r=null;function e(){let a;for(;a=n.shift();)a();r=null}function t(a){n.push(a),r||(r=requestAnimationFrame(e))}function o(){n.splice(0),cancelAnimationFrame(r),r=null}return{add:t,cancel:o}}const We=new Set;function Qt(n,r){We.has(n)||(We.add(n),requestAnimationFrame(()=>{We.delete(n),r()}))}function oe(n){let r=0;return n.seconds&&(r+=n.seconds*1e3),n.minutes&&(r+=n.minutes*60*1e3),n.hours&&(r+=n.hours*60*60*1e3),n.days&&(r+=n.days*24*60*60*1e3),r}function pn(n){n&&n.parentNode&&n.parentNode.removeChild(n)}function He(n,r,e=Function.prototype){const o=oe({seconds:2}),a=oe({seconds:10}),i=n.previousSibling;let l=n.parentNode;if(!l)throw new Error("Unable to watch for node position: parent element not found");if(r==="prev-sibling"&&!i)throw new Error("Unable to watch for node position: there is no previous sibling");let s=0,c=null,d=null;const m=Ve(()=>{if(d)return;s++;const p=Date.now();if(c==null)c=p;else if(s>=10){if(p-c<a){d=setTimeout(()=>{c=null,s=0,d=null,m()},o);return}c=p,s=1}if(r==="head"&&i&&i.parentNode!==l){S();return}if(r==="prev-sibling"){if(i.parentNode==null){S();return}i.parentNode!==l&&y(i.parentNode)}r==="head"&&!l.isConnected&&(l=document.head),l.insertBefore(n,i&&i.isConnected?i.nextSibling:l.firstChild),v.takeRecords(),e&&e()}),v=new MutationObserver(()=>{(r==="head"&&(n.parentNode!==l||!n.parentNode.isConnected)||r==="prev-sibling"&&n.previousSibling!==i)&&m()}),w=()=>{v.observe(l,{childList:!0})},S=()=>{clearTimeout(d),v.disconnect(),m.cancel()},b=()=>{v.takeRecords()},y=p=>{l=p,S(),w()};return w(),{run:w,stop:S,skip:b}}function cr(n,r){if(n==null)return;const e=document.createTreeWalker(n,NodeFilter.SHOW_ELEMENT,{acceptNode(t){return t.shadowRoot==null?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT}});for(let t=n.shadowRoot?e.currentNode:e.nextNode();t!=null;t=e.nextNode())t.classList.contains("surfingkeys_hints_host")||(r(t),cr(t.shadowRoot,r))}let Wn=()=>document.readyState==="complete"||document.readyState==="interactive";function Oa(n){Wn=n}const ae=new Set;function Ge(n){Wn()?n():ae.add(n)}function Yt(n){ae.delete(n)}function ie(){return document.readyState==="complete"}const le=new Set;function Ue(n){ie()?n():le.add(n)}function Na(){le.clear()}if(!Wn()){const n=()=>{Wn()&&(ae.forEach(r=>r()),ae.clear(),ie()&&(document.removeEventListener("readystatechange",n),le.forEach(r=>r()),le.clear()))};document.addEventListener("readystatechange",n)}const Jt=1e3;function Va(n){if(n.length>Jt)return!0;let r=0;for(let e=0;e<n.length;e++)if(r+=n[e].addedNodes.length,r>Jt)return!0;return!1}function Wa(n){const r=new Set,e=new Set,t=new Set;n.forEach(i=>{Cn(i.addedNodes,l=>{l instanceof Element&&l.isConnected&&r.add(l)}),Cn(i.removedNodes,l=>{l instanceof Element&&(l.isConnected?(t.add(l),r.delete(l)):e.add(l))})});const o=[],a=[];return r.forEach(i=>{r.has(i.parentElement)&&o.push(i)}),e.forEach(i=>{e.has(i.parentElement)&&a.push(i)}),o.forEach(i=>r.delete(i)),a.forEach(i=>e.delete(i)),{additions:r,moves:t,deletions:e}}const ce=new Map,Ke=new WeakMap;function Xt(n,r){let e,t,o;if(ce.has(n))e=ce.get(n),t=Ke.get(e);else{let a=!1,i=!1;e=new MutationObserver(l=>{if(Va(l))!a||Wn()?t.forEach(({onHugeMutations:s})=>s(n)):i||(o=()=>t.forEach(({onHugeMutations:s})=>s(n)),Ge(o),i=!0),a=!0;else{const s=Wa(l);t.forEach(({onMinorMutations:c})=>c(n,s))}}),e.observe(n,{childList:!0,subtree:!0}),ce.set(n,e),t=new Set,Ke.set(e,t)}return t.add(r),{disconnect(){t.delete(r),o&&Yt(o),t.size===0&&(e.disconnect(),Ke.delete(e),ce.delete(n))}}}function $r(n,r,e=0){const t=[];let o;for(;o=n.exec(r);)t.push(o[e]);return t}function Zt(n){const r=n.length;let e=0;for(let t=0;t<r;t++){const o=n.charCodeAt(t);e=(e<<5)-e+o&4294967295}return e}function Ha(n){return n.replaceAll(/[\^$.*+?\(\)\[\]{}|\-\\]/g,"\\$&")}function Qe(n,r=0){return no(n,r,"(",")",[])}function no(n,r,e,t,o){let a;o.length===0?a=(c,d)=>n.indexOf(c,d):a=(c,d)=>Ye(n,c,d,o);const{length:i}=n;let l=0,s=-1;for(let c=r;c<i;c++)if(l===0){const d=a(e,c);if(d<0)break;s=d,l++,c=d}else{const d=a(t,c);if(d<0)break;const m=a(e,c);if(m<0||d<=m){if(l--,l===0)return{start:s,end:d+1};c=d}else l++,c=m}return null}function Ye(n,r,e,t){const o=n.indexOf(r,e),a=t.find(i=>o>=i.start&&o<i.end);return a?Ye(n,r,a.end,t):o}function ro(n,r,e){const t=[];let o=-1,a=0;for(;(o=Ye(n,r,a,e))>=0;)t.push(n.substring(a,o).trim()),a=o+1;return t.push(n.substring(a).trim()),t}let se;const Ar=new Map;function eo(n){return se||(se=document.createElement("a")),se.href=n,se.href}function de(n,r=null){const e=`${n}${r?`;${r}`:""}`;if(Ar.has(e))return Ar.get(e);if(r){const o=new URL(n,eo(r));return Ar.set(e,o),o}const t=new URL(eo(n));return Ar.set(n,t),t}function ge(n,r){if(r.match(/^data\\?\:/))return r;if(/^\/\//.test(r))return`${location.protocol}${r}`;const e=de(n);return de(r,e.href).href}function Ga(n){if(n.startsWith("data:"))return!0;const r=de(n);return r.protocol!==location.protocol||r.hostname!==location.hostname||r.port!==location.port?!1:r.pathname===location.pathname}function Xn(n,r,e){Cn(n,t=>{if(uo(t))r(t);else if(Ja(t))try{Xn(t.styleSheet.cssRules,r,e)}catch{e==null||e()}else if(Xe(t)){const o=Array.from(t.media),a=o.some(l=>l.startsWith("screen")||l.startsWith("all")||l.startsWith("(")),i=o.some(l=>l.startsWith("print")||l.startsWith("speech"));(a||!i)&&Xn(t.cssRules,r,e)}else Xa(t)?CSS.supports(t.conditionText)&&Xn(t.cssRules,r,e):mo(t)&&Xn(t.cssRules,r,e)})}const to=["background","border","border-color","border-bottom","border-left","border-right","border-top","outline","outline-color"],Ua=Yn?to.map(n=>{const r=new RegExp(`${n}:\\s*(.*?)\\s*;`);return[n,r]}):null;function sr(n,r){Cn(n,t=>{const o=n.getPropertyValue(t).trim();o&&r(t,o)});const e=n.cssText;e.includes("var(")&&(Yn?Ua.forEach(([t,o])=>{const a=e.match(o);if(a&&a[1]){const i=a[1].trim();r(t,i)}}):to.forEach(t=>{const o=n.getPropertyValue(t);o&&o.includes("var(")&&r(t,o)})),e.includes("background-color: ;")&&!n.getPropertyValue("background")&&oo("background",n,r),e.includes("border-")&&e.includes("-color: ;")&&!n.getPropertyValue("border")&&oo("border",n,r)}function oo(n,r,e){var o,a;const t=r.parentRule;if(uo(t)){const i=(a=(o=t.parentStyleSheet)==null?void 0:o.ownerNode)==null?void 0:a.textContent;if(i){let l=Ha(t.selectorText);l=l.replaceAll(/\s+/g,"\\s*"),l=l.replaceAll(/::/g,"::?");const s=new RegExp(`${l}\\s*{[^}]*${n}:\\s*([^;}]+)`),c=i.match(s);c&&e(n,c[1])}else n==="background"&&e("background-color","#ffffff")}}const ao=/url\((('.*?')|(".*?")|([^\)]*?))\)/g,io=/@import\s*(url\()?(('.+?')|(".+?")|([^\)]*?))\)? ?(screen)?;?/gi;function Je(n){return n.trim().replace(/[\n\r\\]+/g,"").replace(/^url\((.*)\)$/,"$1").trim().replace(/^"(.*)"$/,"$1").replace(/^'(.*)'$/,"$1").replace(/(?:\\(.))/g,"$1")}function ue(n){const r=de(n);return`${r.origin}${r.pathname.replace(/\?.*$/,"").replace(/(\/)([^\/]+)$/i,"$1")}`}function Ka(n,r){return n.replace(ao,e=>{try{const t=Je(e);return`url('${ge(r,t).replaceAll("'","\\'")}')`}catch{return e}})}const Qa=/@font-face\s*{[^}]*}/g;function Ya(n){return n.replace(Qa,"")}const dr=new WeakSet,lo=new WeakSet,co=new WeakSet,so=new WeakSet,go=new WeakSet;function uo(n){return n?dr.has(n)?!0:n.selectorText?(dr.add(n),!0):!1:!1}function Ja(n){return!n||dr.has(n)?!1:lo.has(n)?!0:n.href?(lo.add(n),!0):!1}function Xe(n){return!n||dr.has(n)?!1:co.has(n)?!0:n.media?(co.add(n),!0):!1}function Xa(n){return!n||dr.has(n)?!1:so.has(n)?!0:n instanceof CSSSupportsRule?(so.add(n),!0):!1}function mo(n){return!n||dr.has(n)?!1:go.has(n)?!0:$&&n instanceof CSSLayerBlockRule?(go.add(n),!0):!1}function Za(n){const r=[],e=[];let t;for(let a=0,i=n.length;a<i;a++){const l=n[a];if(!(!l||l===" ")){if(Cr.has(l)){const s=Cr.get(l);for(;e.length;){const c=Cr.get(e[0]);if(!c)break;if(s.lessOrEqualThan(c))r.push(e.shift());else break}e.unshift(l)}else!t||Cr.has(t)?r.push(l):r[r.length-1]+=l;t=l}}r.push(...e);const o=[];for(let a=0,i=r.length;a<i;a++){const l=Cr.get(r[a]);if(l){const s=o.splice(0,2);o.push(l.exec(s[1],s[0]))}else o.unshift(parseFloat(r[a]))}return o[0]}class me{constructor(r,e){this.precendce=r,this.execMethod=e}exec(r,e){return this.execMethod(r,e)}lessOrEqualThan(r){return this.precendce<=r.precendce}}const Cr=new Map([["+",new me(1,(n,r)=>n+r)],["-",new me(1,(n,r)=>n-r)],["*",new me(2,(n,r)=>n*r)],["/",new me(2,(n,r)=>n/r)]]),ni=()=>matchMedia("(prefers-color-scheme: dark)").matches,pe=new Map,be=new Map;function dn(n){if(n=n.trim(),be.has(n))return be.get(n);n.includes("calc(")&&(n=hi(n));const r=ho(n);return r&&be.set(n,r),r}function po(n){if(pe.has(n))return pe.get(n);const r=dn(n);if(!r)return null;const e=he(r);return pe.set(n,e),e}function ri(){pe.clear(),be.clear()}function bo({h:n,s:r,l:e,a:t=1}){if(r===0){const[d,m,v]=[e,e,e].map(w=>Math.round(w*255));return{r:d,g:v,b:m,a:t}}const o=(1-Math.abs(2*e-1))*r,a=o*(1-Math.abs(n/60%2-1)),i=e-o/2,[l,s,c]=(n<60?[o,a,0]:n<120?[a,o,0]:n<180?[0,o,a]:n<240?[0,a,o]:n<300?[a,0,o]:[o,0,a]).map(d=>Math.round((d+i)*255));return{r:l,g:s,b:c,a:t}}function he({r:n,g:r,b:e,a:t=1}){const o=n/255,a=r/255,i=e/255,l=Math.max(o,a,i),s=Math.min(o,a,i),c=l-s,d=(l+s)/2;if(c===0)return{h:0,s:0,l:d,a:t};let m=(l===o?(a-i)/c%6:l===a?(i-o)/c+2:(o-a)/c+4)*60;m<0&&(m+=360);const v=c/(1-Math.abs(2*d-1));return{h:m,s:v,l:d,a:t}}function xn(n,r=0){const e=n.toFixed(r);if(r===0)return e;const t=e.indexOf(".");if(t>=0){const o=e.match(/0+$/);if(o)return o.index===t+1?e.substring(0,t):e.substring(0,o.index)}return e}function ei(n){const{r,g:e,b:t,a:o}=n;return o!=null&&o<1?`rgba(${xn(r)}, ${xn(e)}, ${xn(t)}, ${xn(o,2)})`:`rgb(${xn(r)}, ${xn(e)}, ${xn(t)})`}function ti({r:n,g:r,b:e,a:t}){return`#${(t!=null&&t<1?[n,r,e,Math.round(t*255)]:[n,r,e]).map(o=>`${o<16?"0":""}${o.toString(16)}`).join("")}`}function gr(n){const{h:r,s:e,l:t,a:o}=n;return o!=null&&o<1?`hsla(${xn(r)}, ${xn(e*100)}%, ${xn(t*100)}%, ${xn(o,2)})`:`hsl(${xn(r)}, ${xn(e*100)}%, ${xn(t*100)}%)`}const oi=/^rgba?\([^\(\)]+\)$/,ai=/^hsla?\([^\(\)]+\)$/,ii=/^#[0-9a-f]+$/i;function ho(n){const r=n.trim().toLowerCase();if(r.match(oi))return ko(r);if(r.match(ai))return ui(r);if(r.match(ii))return mi(r);if(fo.has(r))return pi(r);if(_o.has(r))return bi(r);if(n==="transparent")return{r:0,g:0,b:0,a:0};if((r.startsWith("color(")||r.startsWith("color-mix("))&&r.endsWith(")"))return vi(r);if(r.startsWith("light-dark(")&&r.endsWith(")")){const e=r.match(/^light-dark\(\s*([a-z]+(\(.*\))?),\s*([a-z]+(\(.*\))?)\s*\)$/);if(e){const t=ni()?e[3]:e[1];return ho(t)}}return null}function li(n){const r=[];let e=0,t=!1;const o=n.indexOf("(");n=n.substring(o+1,n.length-1);for(let a=0;a<n.length;a++){const i=n[a];i>="0"&&i<="9"||i==="."||i==="+"||i==="-"?t=!0:t&&(i===" "||i===","||i==="/")?(r.push(n.substring(e,a)),t=!1,e=a+1):t||(e=a+1)}return t&&r.push(n.substring(e,n.length)),r}function vo(n,r,e){const t=li(n),o=Object.entries(e);return t.map(i=>i.trim()).map((i,l)=>{let s;const c=o.find(([d])=>i.endsWith(d));return c?s=parseFloat(i.substring(0,i.length-c[0].length))/c[1]*r[l]:s=parseFloat(i),r[l]>1?Math.round(s):s})}const ci=[255,255,255,1],si={"%":100};function ko(n){const[r,e,t,o=1]=vo(n,ci,si);return{r,g:e,b:t,a:o}}const di=[360,1,1,1],gi={"%":100,deg:360,rad:2*Math.PI,turn:1};function ui(n){const[r,e,t,o=1]=vo(n,di,gi);return bo({h:r,s:e,l:t,a:o})}function mi(n){const r=n.substring(1);switch(r.length){case 3:case 4:{const[e,t,o]=[0,1,2].map(i=>parseInt(`${r[i]}${r[i]}`,16)),a=r.length===3?1:parseInt(`${r[3]}${r[3]}`,16)/255;return{r:e,g:t,b:o,a}}case 6:case 8:{const[e,t,o]=[0,2,4].map(i=>parseInt(r.substring(i,i+2),16)),a=r.length===6?1:parseInt(r.substring(6,8),16)/255;return{r:e,g:t,b:o,a}}}return null}function pi(n){const r=fo.get(n);return{r:r>>16&255,g:r>>8&255,b:r>>0&255,a:1}}function bi(n){const r=_o.get(n);return{r:r>>16&255,g:r>>8&255,b:r>>0&255,a:1}}function hi(n){let r=0;const e=(t,o,a)=>{n=n.substring(0,t)+a+n.substring(o)};for(;(r=n.indexOf("calc("))!==-1;){const t=Qe(n,r);if(!t)break;let o=n.slice(t.start+1,t.end-1);const a=o.includes("%");o=o.split("%").join("");const i=Math.round(Za(o));e(t.start-4,t.end,i+(a?"%":""))}return n}const fo=new Map(Object.entries({aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgrey:11119017,darkgreen:25600,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,grey:8421504,green:32768,greenyellow:11403055,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgrey:13882323,lightgreen:9498256,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074})),_o=new Map(Object.entries({ActiveBorder:3906044,ActiveCaption:0,AppWorkspace:11184810,Background:6513614,ButtonFace:16777215,ButtonHighlight:15329769,ButtonShadow:10461343,ButtonText:0,CaptionText:0,GrayText:8355711,Highlight:11720703,HighlightText:0,InactiveBorder:16777215,InactiveCaption:16777215,InactiveCaptionText:0,InfoBackground:16514245,InfoText:0,Menu:16185078,MenuText:16777215,Scrollbar:11184810,ThreeDDarkShadow:0,ThreeDFace:12632256,ThreeDHighlight:16777215,ThreeDLightShadow:16777215,ThreeDShadow:0,Window:15527148,WindowFrame:11184810,WindowText:0,"-webkit-focus-ring-color":15046400}).map(([n,r])=>[n.toLowerCase(),r]));function yo(n,r,e){return(.2126*n+.7152*r+.0722*e)/255}let ve,Ir;function vi(n){Ir||(ve=document.createElement("canvas"),ve.width=1,ve.height=1,Ir=ve.getContext("2d",{willReadFrequently:!0})),Ir.fillStyle=n,Ir.fillRect(0,0,1,1);const r=Ir.getImageData(0,0,1,1).data,e=`rgba(${r[0]}, ${r[1]}, ${r[2]}, ${(r[3]/255).toFixed(2)})`;return ko(e)}function Mn(n,r,e,t,o){return(n-r)*(o-t)/(e-r)+t}function Hn(n,r,e){return Math.min(e,Math.max(r,n))}function ur(n,r){const e=[];for(let t=0,o=n.length;t<o;t++){e[t]=[];for(let a=0,i=r[0].length;a<i;a++){let l=0;for(let s=0,c=n[0].length;s<c;s++)l+=n[t][s]*r[s][a];e[t][a]=l}}return e}function wo(n){let r=mr.identity();return n.sepia!==0&&(r=ur(r,mr.sepia(n.sepia/100))),n.grayscale!==0&&(r=ur(r,mr.grayscale(n.grayscale/100))),n.contrast!==100&&(r=ur(r,mr.contrast(n.contrast/100))),n.brightness!==100&&(r=ur(r,mr.brightness(n.brightness/100))),n.mode===1&&(r=ur(r,mr.invertNHue())),r}function ki([n,r,e],t){const o=[[n/255],[r/255],[e/255],[1],[1]],a=ur(t,o);return[0,1,2].map(i=>Hn(Math.round(a[i][0]*255),0,255))}const mr={identity(){return[[1,0,0,0,0],[0,1,0,0,0],[0,0,1,0,0],[0,0,0,1,0],[0,0,0,0,1]]},invertNHue(){return[[.333,-.667,-.667,0,1],[-.667,.333,-.667,0,1],[-.667,-.667,.333,0,1],[0,0,0,1,0],[0,0,0,0,1]]},brightness(n){return[[n,0,0,0,0],[0,n,0,0,0],[0,0,n,0,0],[0,0,0,1,0],[0,0,0,0,1]]},contrast(n){const r=(1-n)/2;return[[n,0,0,0,r],[0,n,0,0,r],[0,0,n,0,r],[0,0,0,1,0],[0,0,0,0,1]]},sepia(n){return[[.393+.607*(1-n),.769-.769*(1-n),.189-.189*(1-n),0,0],[.349-.349*(1-n),.686+.314*(1-n),.168-.168*(1-n),0,0],[.272-.272*(1-n),.534-.534*(1-n),.131+.869*(1-n),0,0],[0,0,0,1,0],[0,0,0,0,1]]},grayscale(n){return[[.2126+.7874*(1-n),.7152-.7152*(1-n),.0722-.0722*(1-n),0,0],[.2126-.2126*(1-n),.7152+.2848*(1-n),.0722-.0722*(1-n),0,0],[.2126-.2126*(1-n),.7152-.7152*(1-n),.0722+.9278*(1-n),0,0],[0,0,0,1,0],[0,0,0,0,1]]}};function Ze(n){const e=n.mode===1?"darkSchemeBackgroundColor":"lightSchemeBackgroundColor";return n[e]}function nt(n){const e=n.mode===1?"darkSchemeTextColor":"lightSchemeTextColor";return n[e]}const ke=new Map;function fi(){ke.clear()}const _i=["r","g","b","a"],yi=["mode","brightness","contrast","grayscale","sepia","darkSchemeBackgroundColor","darkSchemeTextColor","lightSchemeBackgroundColor","lightSchemeTextColor"];function wi(n,r){let e="";return _i.forEach(t=>{e+=`${n[t]};`}),yi.forEach(t=>{e+=`${r[t]};`}),e}function fe(n,r,e,t,o){let a;ke.has(e)?a=ke.get(e):(a=new Map,ke.set(e,a));const i=wi(n,r);if(a.has(i))return a.get(i);const l=he(n),s=t==null?null:po(t),c=o==null?null:po(o),d=e(l,s,c),{r:m,g:v,b:w,a:S}=bo(d),b=wo(r),[y,p,_]=ki([m,v,w],b),k=S===1?ti({r:y,g:p,b:_}):ei({r:y,g:p,b:_,a:S});return a.set(i,k),k}function rt(n,r){const e=Ze(r),t=nt(r);return fe(n,r,xi,t,e)}function xi({h:n,s:r,l:e,a:t},o,a){const i=e<.5;let l;if(i)l=e<.2||r<.12;else{const m=n>200&&n<280;l=r<.24||e>.8&&m}let s=n,c=e;l&&(i?(s=o.h,c=o.s):(s=a.h,c=a.s));const d=Mn(e,0,1,o.l,a.l);return{h:s,s:c,l:d,a:t}}const xo=.4;function Si({h:n,s:r,l:e,a:t},o){const a=e<.5,i=n>200&&n<280,l=r<.12||e>.8&&i;if(a){const m=Mn(e,0,.5,0,xo);if(l){const v=o.h,w=o.s;return{h:v,s:w,l:m,a:t}}return{h:n,s:r,l:m,a:t}}let s=Mn(e,.5,1,xo,o.l);if(l){const m=o.h,v=o.s;return{h:m,s:v,l:s,a:t}}let c=n;return n>60&&n<180&&(n>120?c=Mn(n,120,180,135,180):c=Mn(n,60,120,60,105)),c>40&&c<80&&(s*=.75),{h:c,s:r,l:s,a:t}}function ln(n,r){if(r.mode===0)return rt(n,r);const e=Ze(r);return fe(n,{...r,mode:0},Si,e)}const _e=.55;function So(n){return Mn(n,205,245,205,220)}function $i({h:n,s:r,l:e,a:t},o){const a=e>.5,i=e<.2||r<.24,l=!i&&n>205&&n<245;if(a){const d=Mn(e,.5,1,_e,o.l);if(i){const v=o.h,w=o.s;return{h:v,s:w,l:d,a:t}}let m=n;return l&&(m=So(n)),{h:m,s:r,l:d,a:t}}if(i){const d=o.h,m=o.s,v=Mn(e,0,.5,o.l,_e);return{h:d,s:m,l:v,a:t}}let s=n,c;return l?(s=So(n),c=Mn(e,0,.5,o.l,Math.min(1,_e+.05))):c=Mn(e,0,.5,o.l,_e),{h:s,s:r,l:c,a:t}}function Sn(n,r){if(r.mode===0)return rt(n,r);const e=nt(r);return fe(n,{...r,mode:0},$i,e)}function Ai({h:n,s:r,l:e,a:t},o,a){const i=e<.5,l=e<.2||r<.24;let s=n,c=r;l&&(i?(s=o.h,c=o.s):(s=a.h,c=a.s));const d=Mn(e,0,1,.5,.2);return{h:s,s:c,l:d,a:t}}function Er(n,r){if(r.mode===0)return rt(n,r);const e=nt(r),t=Ze(r);return fe(n,{...r,mode:0},Ai,e,t)}function Ci(n,r){return ln(n,r)}function et(n,r){return ln(n,r)}const Ii=["pre","pre *","code",'[aria-hidden="true"]','[class*="fa-"]',".fa",".fab",".fad",".fal",".far",".fas",".fass",".fasr",".fat",".icofont",'[style*="font-"]','[class*="icon"]','[class*="Icon"]','[class*="symbol"]','[class*="Symbol"]',".glyphicon",'[class*="material-symbol"]','[class*="material-icon"]',"mu",'[class*="mu-"]',".typcn",'[class*="vjs-"]'];function Ei(n){const r=[];return r.push(`*:not(${Ii.join(", ")}) {`),n.useFont&&n.fontFamily&&r.push(`  font-family: ${n.fontFamily} !important;`),n.textStroke>0&&(r.push(`  -webkit-text-stroke: ${n.textStroke}px !important;`),r.push(`  text-stroke: ${n.textStroke}px !important;`)),r.push("}"),r.join(`
`)}var tt;(function(n){n[n.light=0]="light",n[n.dark=1]="dark"})(tt||(tt={}));function $o(n){const r=[];return n.mode===tt.dark&&r.push("invert(100%) hue-rotate(180deg)"),n.brightness!==100&&r.push(`brightness(${n.brightness}%)`),n.contrast!==100&&r.push(`contrast(${n.contrast}%)`),n.grayscale!==0&&r.push(`grayscale(${n.grayscale}%)`),n.sepia!==0&&r.push(`sepia(${n.sepia}%)`),r.length===0?null:r.join(" ")}function Fi(n){return n.slice(0,4).map(r=>r.map(e=>e.toFixed(3)).join(" ")).join(" ")}function Li(n){return Fi(wo(n))}function ji(n){return(n<16?"0":"")+n.toString(16)}function Ao(){if("randomUUID"in crypto){const n=crypto.randomUUID();return n.substring(0,8)+n.substring(9,13)+n.substring(14,18)+n.substring(19,23)+n.substring(24)}return"getRandomValues"in crypto?Array.from(crypto.getRandomValues(new Uint8Array(16))).map(n=>ji(n)).join(""):Math.floor(Math.random()*0x80000000000000).toString(36)}const ot=new Map,at=new Map;async function Co(n){var r,e;return(e=(r=window.DarkReader)==null?void 0:r.Plugins)!=null&&e.fetch?window.DarkReader.Plugins.fetch(n):new Promise((t,o)=>{const a=Ao();ot.set(a,t),at.set(a,o),chrome.runtime.sendMessage({type:un.FETCH,data:n,id:a})})}chrome.runtime.onMessage.addListener(({type:n,data:r,error:e,id:t})=>{if(n===Fn.FETCH_RESPONSE){const o=ot.get(t),a=at.get(t);ot.delete(t),at.delete(t),e?a&&a(e):o&&o(r)}});const zi=1e3/60;class Mi{constructor(){this.queue=[],this.timerId=null}addTask(r){this.queue.push(r),this.scheduleFrame()}stop(){this.timerId!==null&&(cancelAnimationFrame(this.timerId),this.timerId=null),this.queue=[]}scheduleFrame(){this.timerId||(this.timerId=requestAnimationFrame(()=>{this.timerId=null;const r=Date.now();let e;for(;e=this.queue.shift();)if(e(),Date.now()-r>=zi){this.scheduleFrame();break}}))}}const it=new Mi;async function Io(n){return new Promise(async(r,e)=>{try{const t=n.startsWith("data:")?n:await Ri(n),o=jo(t)??await vn(n);let a;t.startsWith("data:image/svg+xml")?a=await Eo(t):a=await Ti(o)??await Eo(t),it.addTask(()=>{const i=Ni(a);r({src:n,dataURL:i.isLarge?"":t,width:a.width,height:a.height,...i})})}catch(t){e(t)}})}async function Ri(n){return new URL(n).origin===location.origin?await tn(n):await Co({url:n,responseType:"data-url"})}async function Ti(n){try{return await createImageBitmap(n)}catch(r){return Kt(`Unable to create image bitmap for type ${n.type}: ${String(r)}`),null}}const Bi=256;let Di=0;async function Eo(n){return new Promise((r,e)=>{const t=new Image;t.onload=()=>r(t),t.onerror=()=>e(`Unable to load image ${n}`),++Di<=Bi||ie()?t.src=n:Ue(()=>t.src=n)})}const lt=32*32;let pr,br;function Pi(){const n=lt,r=lt;pr=document.createElement("canvas"),pr.width=n,pr.height=r,br=pr.getContext("2d",{willReadFrequently:!0}),br.imageSmoothingEnabled=!1}function qi(){pr=null,br=null}const Oi=512*512;function Ni(n){pr||Pi();let r,e;if(n instanceof HTMLImageElement?(r=n.naturalWidth,e=n.naturalHeight):(r=n.width,e=n.height),r===0||e===0)return{isDark:!1,isLight:!1,isTransparent:!1,isLarge:!1};const t=r*e>Oi,o=r*e,a=Math.min(1,Math.sqrt(lt/o)),i=Math.ceil(r*a),l=Math.ceil(e*a);br.clearRect(0,0,i,l),br.drawImage(n,0,0,r,e,0,0,i,l);const c=br.getImageData(0,0,i,l).data,d=.05,m=.4,v=.7;let w=0,S=0,b=0,y,p,_,k,f,g,u,h;for(_=0;_<l;_++)for(p=0;p<i;p++)y=4*(_*i+p),k=c[y+0],f=c[y+1],g=c[y+2],u=c[y+3],u/255<d?w++:(h=yo(k,f,g),h<m&&S++,h>v&&b++);const A=i*l,F=A-w;return{isDark:S/F>=.7,isLight:b/F>=.7,isTransparent:w/A>=.1,isLarge:t}}let Fr=null,ct=!1,Fo=!1;const st=[];document.addEventListener("__darkreader__inlineScriptsAllowed",()=>ct=!0,{once:!0});async function Vi(){if(ct){if(Fo)return await new Promise(n=>st.push(n));Fo=!0,await new Promise(n=>{document.addEventListener("__darkreader__blobURLCheckResponse",r=>{Fr=r.detail.blobURLAllowed,n(),st.forEach(e=>e()),st.splice(0)},{once:!0}),document.dispatchEvent(new CustomEvent("__darkreader__blobURLCheckRequest"))})}}function Wi(){return Fr!=null||!ct}function Lo(n){n.blockedURI==="blob"&&(Fr=!1,document.removeEventListener("securitypolicyviolation",Lo))}document.addEventListener("securitypolicyviolation",Lo);const dt=new Set;function gt({dataURL:n,width:r,height:e},t){n.startsWith("data:image/svg+xml")&&(n=Gi(n));const o=Li(t),a=[`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${r}" height="${e}">`,"<defs>",'<filter id="darkreader-image-filter">',`<feColorMatrix type="matrix" values="${o}" />`,"</filter>","</defs>",`<image width="${r}" height="${e}" filter="url(#darkreader-image-filter)" xlink:href="${n}" />`,"</svg>"].join("");if(!Fr)return`data:image/svg+xml;base64,${btoa(a)}`;const i=new Uint8Array(a.length);for(let c=0;c<a.length;c++)i[c]=a.charCodeAt(c);const l=new Blob([i],{type:"image/svg+xml"}),s=URL.createObjectURL(l);return dt.add(s),s}const Hi={"<":"&lt;",">":"&gt;","&":"&amp;","'":"&apos;",'"':"&quot;"};function Gi(n){return n.replace(/[<>&'"]/g,r=>Hi[r]??r)}const ye=new Map;function jo(n){const r=n.indexOf(":"),e=n.indexOf(";",r+1),t=n.indexOf(",",e+1),o=n.substring(e+1,t).toLocaleLowerCase(),a=n.substring(r+1,e);if(o!=="base64"||!a)return null;const i=atob(n.substring(t+1)),l=new Uint8Array(i.length);for(let s=0;s<i.length;s++)l[s]=i.charCodeAt(s);return new Blob([l],{type:a})}async function Ui(n){if(!Fr)return null;const r=Zt(n);let e=ye.get(r);if(e)return e;let t=jo(n);return t||(t=await(await fetch(n)).blob()),e=URL.createObjectURL(t),ye.set(r,e),e}function Ki(){it&&it.stop(),qi(),dt.forEach(n=>URL.revokeObjectURL(n)),dt.clear(),ye.forEach(n=>URL.revokeObjectURL(n)),ye.clear()}const zo=8,ut="conic-",Qi=ut.length,Yi="radial-",Ji="linear-";function Xi(n){const r=[];let e=0,t=ut.length;for(;(e=n.indexOf("gradient",t))!==-1;){let o;if([Ji,Yi,ut].find(s=>{if(e-s.length>=0&&n.substring(e-s.length,e)===s)return n.slice(e-s.length-10,e-s.length-1)==="repeating"?(o=`repeating-${s}gradient`,!0):n.slice(e-s.length-8,e-s.length-1)==="-webkit"?(o=`-webkit-${s}gradient`,!0):(o=`${s}gradient`,!0)}),!o)break;const{start:a,end:i}=Qe(n,e+zo),l=n.substring(a+1,i-1);t=i+1+Qi,r.push({typeGradient:o,match:l,offset:o.length+2,index:e-o.length+zo,hasComma:!0})}return r.length&&(r[r.length-1].hasComma=!1),r}function Zi(n,r){return!!(n&&n.getPropertyPriority(r))}function Mo(n,r,e,t,o,a){let i=null;if(n.startsWith("--"))i=dl(t,n,r,e,o,a);else if(r.includes("var("))i=gl(t,n,r);else if(n==="color-scheme")i=sl();else if(n==="scrollbar-color")i=cl(r);else if(n.includes("color")&&n!=="-webkit-print-color-adjust"||n==="fill"||n==="stroke"||n==="stop-color")if(n.startsWith("border")&&n!=="border-color"&&r==="initial"){const l=n.substring(0,n.length-6),s=e.style.getPropertyValue(l);s.startsWith("0px")||s==="none"?(n=l,i=s):i=r}else i=al(n,r,e);else n==="background-image"||n==="list-style-image"?i=Bo(r,e,o,a):n.includes("shadow")&&(i=ll(r));return i?{property:n,value:i,important:Zi(e.style,n),sourceValue:r}:null}function Ro(...n){return n.filter(Boolean).join(", ")}function nl(n,r,e){const t=[];r||(t.push("html {"),t.push(`    background-color: ${ln({r:255,g:255,b:255},n)} !important;`),t.push("}")),B&&n.mode===1&&(t.push("html {"),t.push("    color-scheme: dark !important;"),t.push("}"),t.push("iframe {"),t.push("    color-scheme: initial;"),t.push("}"));const o=Ro(r?"":"html, body",e?"input, textarea, select, button, dialog":"");return o&&(t.push(`${o} {`),t.push(`    background-color: ${ln({r:255,g:255,b:255},n)};`),t.push("}")),t.push(`${Ro("html, body",e?"input, textarea, select, button":"")} {`),t.push(`    border-color: ${Er({r:76,g:76,b:76},n)};`),t.push(`    color: ${Sn({r:0,g:0,b:0},n)};`),t.push("}"),t.push("a {"),t.push(`    color: ${Sn({r:0,g:64,b:255},n)};`),t.push("}"),t.push("table {"),t.push(`    border-color: ${Er({r:128,g:128,b:128},n)};`),t.push("}"),t.push("mark {"),t.push(`    color: ${Sn({r:0,g:0,b:0},n)};`),t.push("}"),t.push("::placeholder {"),t.push(`    color: ${Sn({r:169,g:169,b:169},n)};`),t.push("}"),t.push("input:-webkit-autofill,"),t.push("textarea:-webkit-autofill,"),t.push("select:-webkit-autofill {"),t.push(`    background-color: ${ln({r:250,g:255,b:189},n)} !important;`),t.push(`    color: ${Sn({r:0,g:0,b:0},n)} !important;`),t.push("}"),n.scrollbarColor&&t.push(el(n)),n.selectionColor&&t.push(rl(n)),$&&(t.unshift("@layer {"),t.push("}")),t.join(`
`)}function To(n){let r,e;if(n.selectionColor==="auto")r=ln({r:0,g:96,b:212},{...n,grayscale:0}),e=Sn({r:255,g:255,b:255},{...n,grayscale:0});else{const t=dn(n.selectionColor),o=he(t);r=n.selectionColor,o.l<.5?e="#FFF":e="#000"}return{backgroundColorSelection:r,foregroundColorSelection:e}}function rl(n){const r=[],e=To(n),t=e.backgroundColorSelection,o=e.foregroundColorSelection;return["::selection","::-moz-selection"].forEach(a=>{r.push(`${a} {`),r.push(`    background-color: ${t} !important;`),r.push(`    color: ${o} !important;`),r.push("}")}),r.join(`
`)}function el(n){const r=[];let e,t,o,a,i,l;if(n.scrollbarColor==="auto")e=ln({r:241,g:241,b:241},n),t=Sn({r:96,g:96,b:96},n),o=ln({r:176,g:176,b:176},n),a=ln({r:144,g:144,b:144},n),i=ln({r:96,g:96,b:96},n),l=ln({r:255,g:255,b:255},n);else{const s=dn(n.scrollbarColor),c=he(s),d=c.l>.5,m=w=>({...c,l:Hn(c.l+w,0,1)}),v=w=>({...c,l:Hn(c.l-w,0,1)});e=gr(v(.4)),t=gr(d?v(.4):m(.4)),o=gr(c),a=gr(m(.1)),i=gr(m(.2)),l=gr(v(.5))}return r.push("::-webkit-scrollbar {"),r.push(`    background-color: ${e};`),r.push(`    color: ${t};`),r.push("}"),r.push("::-webkit-scrollbar-thumb {"),r.push(`    background-color: ${o};`),r.push("}"),r.push("::-webkit-scrollbar-thumb:hover {"),r.push(`    background-color: ${a};`),r.push("}"),r.push("::-webkit-scrollbar-thumb:active {"),r.push(`    background-color: ${i};`),r.push("}"),r.push("::-webkit-scrollbar-corner {"),r.push(`    background-color: ${l};`),r.push("}"),Rn&&(r.push("* {"),r.push(`    scrollbar-color: ${o} ${e};`),r.push("}")),r.join(`
`)}function mt(n,{strict:r}){return tl(n,{strict:r})}function tl(n,{strict:r}){const e=[];return e.push(`html, body, ${r?"body :not(iframe)":"body > :not(iframe)"} {`),e.push(`    background-color: ${ln({r:255,g:255,b:255},n)} !important;`),e.push(`    border-color: ${Er({r:64,g:64,b:64},n)} !important;`),e.push(`    color: ${Sn({r:0,g:0,b:0},n)} !important;`),e.push("}"),e.push('div[style*="background-color: rgb(135, 135, 135)"] {'),e.push("    background-color: #878787 !important;"),e.push("}"),e.join(`
`)}const ol=new Set(["inherit","transparent","initial","currentcolor","none","unset","auto"]);function al(n,r,e){if(ol.has(r.toLowerCase()))return r;const t=dn(r);return t?n.includes("background")?e.style.webkitMaskImage&&e.style.webkitMaskImage!=="none"||e.style.webkitMask&&!e.style.webkitMask.startsWith("none")||e.style.mask&&e.style.mask!=="none"||e.style.getPropertyValue("mask-image")&&e.style.getPropertyValue("mask-image")!=="none"?o=>Sn(t,o):o=>ln(t,o):n.includes("border")||n.includes("outline")?o=>Er(t,o):o=>Sn(t,o):null}const we=new Map,Pn=new Map;function il(n,r){if(!n||r.length===0)return!1;if(r.some(t=>t==="*"))return!0;const e=n.split(/,\s*/g);for(let t=0;t<r.length;t++){const o=r[t];if(e.some(a=>a===o))return!0}return!1}function Bo(n,r,e,t){try{if(il(r.selectorText,e))return n;const o=Xi(n),a=$r(ao,n);if(a.length===0&&o.length===0)return n;const i=S=>{let b=0;return S.map(y=>{const p=n.indexOf(y,b);return b=p+y.length,{match:y,index:p}})},l=o.map(S=>({type:"gradient",...S})).concat(i(a).map(S=>({type:"url",offset:0,...S}))).sort((S,b)=>S.index>b.index?1:-1),s=S=>{const{typeGradient:b,match:y,hasComma:p}=S,_=/([^\(\),]+(\([^\(\)]*(\([^\(\)]*\)*[^\(\)]*)?\))?([^\(\), ]|( (?!calc)))*),?/g,k=/^(from|color-stop|to)\(([^\(\)]*?,\s*)?(.*?)\)$/,f=$r(_,y,1).map(g=>{g=g.trim();let u=dn(g);if(u)return F=>et(u,F);const h=g.lastIndexOf(" ");if(u=dn(g.substring(0,h)),u)return F=>`${et(u,F)} ${g.substring(h+1)}`;const A=g.match(k);return A&&(u=dn(A[3]),u)?F=>`${A[1]}(${A[2]?`${A[2]}, `:""}${et(u,F)})`:()=>g});return g=>`${b}(${f.map(u=>u(g)).join(", ")})${p?", ":""}`},c=S=>{var k;let b=Je(S);const y=b.length===0,{parentStyleSheet:p}=r,_=p&&p.href?ue(p.href):((k=p==null?void 0:p.ownerNode)==null?void 0:k.baseURI)||location.origin;return b=ge(_,b),async f=>{if(y)return"url('')";let g=null;if(we.has(b))g=we.get(b);else try{if(Wi()||await Vi(),Pn.has(b)){const u=Pn.get(b);if(g=await new Promise(h=>u.push(h)),!g)return null}else Pn.set(b,[]),g=await Io(b),we.set(b,g),Pn.get(b).forEach(u=>u(g)),Pn.delete(b);if(t())return null}catch(u){Kt(u),Pn.has(b)&&(Pn.get(b).forEach(h=>h(null)),Pn.delete(b))}if(g){const u=d(g,f);if(u)return u}if(b.startsWith("data:")){const u=await Ui(b);if(u)return`url("${u}")`}return`url("${b}")`}},d=(S,b)=>{const{isDark:y,isLight:p,isTransparent:_,isLarge:k,width:f}=S;let g;const u=S.src.startsWith("data:")?"data:":S.src;return k&&p&&!_&&b.mode===1?(Dn(`Hiding large light image ${u}`),g="none"):y&&_&&b.mode===1&&f>2?(Dn(`Inverting dark image ${u}`),g=`url("${gt(S,{...b,sepia:Hn(b.sepia+10,0,100)})}")`):p&&!_&&b.mode===1?(Dn(`Dimming light image ${u}`),g=`url("${gt(S,b)}")`):b.mode===0&&p?(Dn(`Applying filter to image ${u}`),g=`url("${gt(S,{...b,brightness:Hn(b.brightness-10,5,200),sepia:Hn(b.sepia+10,0,100)})}")`):(Dn(`Not modifying the image ${u}`),g=null),g},m=[];let v=0,w=!1;return l.forEach(({type:S,match:b,index:y,typeGradient:p,hasComma:_,offset:k},f)=>{const g=y,u=v,h=g+b.length+k;v=h,u!==g&&(w?m.push(()=>{let A=n.substring(u,g);return A[0]===","&&(A=A.substring(1)),A}):m.push(()=>n.substring(u,g))),w=_||!1,S==="url"?m.push(c(b)):S==="gradient"&&m.push(s({match:b,index:y,typeGradient:p,hasComma:_||!1,offset:k})),f===l.length-1&&m.push(()=>n.substring(h))}),S=>{const b=m.filter(Boolean).map(p=>p(S));if(b.some(p=>p instanceof Promise))return Promise.all(b).then(p=>p.filter(Boolean).join(""));const y=b.join("");return y.endsWith(", initial")?y.slice(0,-9):y}}catch{return null}}function Do(n){try{let r=0;const e=$r(/(^|\s)(?!calc)([a-z]+\(.+?\)|#[0-9a-f]+|[a-z]+)(.*?(inset|outset)?($|,))/gi,n,2);let t=0;const o=e.map((a,i)=>{const l=r,s=n.indexOf(a,r),c=s+a.length;r=c;const d=dn(a);return d?m=>`${n.substring(l,s)}${Ci(d,m)}${i===e.length-1?n.substring(c):""}`:(t++,()=>n.substring(l,c))});return a=>{const i=o.map(l=>l(a)).join("");return{matchesLength:e.length,unparseableMatchesLength:t,result:i}}}catch{return null}}function ll(n){const r=Do(n);return r?e=>r(e).result:null}function cl(n){const r=n.match(/^\s*([a-z]+(\(.*\))?)\s+([a-z]+(\(.*\))?)\s*$/);if(!r)return n;const e=dn(r[1]),t=dn(r[3]);return!e||!t?null:o=>`${Sn(e,o)} ${ln(e,o)}`}function sl(){return n=>n.mode===0?"dark light":"dark"}function dl(n,r,e,t,o,a){return n.getModifierForVariable({varName:r,sourceValue:e,rule:t,ignoredImgSelectors:o,isCancelled:a})}function gl(n,r,e){return n.getModifierForVarDependant(r,e)}function ul(){fi(),we.clear(),Ki(),Pn.clear()}const In=1,hr=2,vr=4,Lr=8;class ml{constructor(){this.varTypes=new Map,this.rulesQueue=new Set,this.inlineStyleQueue=[],this.definedVars=new Set,this.varRefs=new Map,this.unknownColorVars=new Set,this.unknownBgVars=new Set,this.undefinedVars=new Set,this.initialVarTypes=new Map,this.changedTypeVars=new Set,this.typeChangeSubscriptions=new Map,this.unstableVarValues=new Map}clear(){this.varTypes.clear(),this.rulesQueue.clear(),this.inlineStyleQueue.splice(0),this.definedVars.clear(),this.varRefs.clear(),this.unknownColorVars.clear(),this.unknownBgVars.clear(),this.undefinedVars.clear(),this.initialVarTypes.clear(),this.changedTypeVars.clear(),this.typeChangeSubscriptions.clear(),this.unstableVarValues.clear()}isVarType(r,e){return this.varTypes.has(r)&&(this.varTypes.get(r)&e)>0}addRulesForMatching(r){this.rulesQueue.add(r)}addInlineStyleForMatching(r){this.inlineStyleQueue.push(r)}matchVariablesAndDependents(){this.rulesQueue.size===0&&this.inlineStyleQueue.length===0||(this.changedTypeVars.clear(),this.initialVarTypes=new Map(this.varTypes),this.collectRootVariables(),this.collectVariablesAndVarDep(),this.collectRootVarDependents(),this.varRefs.forEach((r,e)=>{r.forEach(t=>{this.varTypes.has(e)&&this.resolveVariableType(t,this.varTypes.get(e))})}),this.unknownColorVars.forEach(r=>{this.unknownBgVars.has(r)?(this.unknownColorVars.delete(r),this.unknownBgVars.delete(r),this.resolveVariableType(r,In)):this.isVarType(r,In|hr|vr)?this.unknownColorVars.delete(r):this.undefinedVars.add(r)}),this.unknownBgVars.forEach(r=>{this.findVarRef(r,t=>this.unknownColorVars.has(t)||this.isVarType(t,In|hr|vr))!=null?this.iterateVarRefs(r,t=>{this.resolveVariableType(t,In)}):this.isVarType(r,In|Lr)?this.unknownBgVars.delete(r):this.undefinedVars.add(r)}),this.changedTypeVars.forEach(r=>{this.typeChangeSubscriptions.has(r)&&this.typeChangeSubscriptions.get(r).forEach(e=>{e()})}),this.changedTypeVars.clear())}getModifierForVariable(r){return e=>{const{varName:t,sourceValue:o,rule:a,ignoredImgSelectors:i,isCancelled:l}=r,s=()=>{const v=[],w=(S,b,y)=>{if(!this.isVarType(t,S))return;const p=b(t);let _;if(Zn(o))if(No(o)){let k=kt(o,this.unstableVarValues);k||(k=S===In?"#ffffff":"#000000"),_=y(k,e)}else _=Gn(o,k=>b(k),k=>y(k,e));else _=y(o,e);v.push({property:p,value:_})};if(w(In,jr,nr),w(hr,pt,zr),w(vr,bt,Se),this.isVarType(t,Lr)){const S=Oo(t);let b=o;Zn(o)&&(b=Gn(o,p=>jr(p),p=>nr(p,e)));const y=Bo(b,a,i,l);b=typeof y=="function"?y(e):y,v.push({property:S,value:b})}return v},c=new Set,d=v=>{const w=()=>{const S=s();v(S)};c.add(w),this.subscribeForVarTypeChange(t,w)},m=()=>{c.forEach(v=>{this.unsubscribeFromVariableTypeChanges(t,v)})};return{declarations:s(),onTypeChange:{addListener:d,removeListeners:m}}}}getModifierForVarDependant(r,e){const t=e.match(/^\s*(rgb|hsl)a?\(/),o=e.match(/^rgba?\(var\(--[\-_A-Za-z0-9]+\)(\s*,?\/?\s*0?\.\d+)?\)$/);if(t&&!o){const a=r.startsWith("background"),i=ht(r);return l=>{let s=kt(e,this.unstableVarValues);return s||(s=a?"#ffffff":"#000000"),(a?nr:i?zr:Se)(s,l)}}return r==="background-color"||o&&r==="background"?a=>{const i=nr(t?"255, 255, 255":"#ffffff",a);return Gn(e,l=>jr(l),l=>nr(l,a),i)}:ht(r)?a=>{const i=zr(t?"0, 0, 0":"#000000",a);return Gn(e,l=>pt(l),l=>zr(l,a),i)}:r==="background"||r==="background-image"||r==="box-shadow"?a=>{const i=new Set,l=()=>{const c=Gn(e,d=>this.isVarType(d,In)?jr(d):this.isVarType(d,Lr)?Oo(d):(i.add(d),d),d=>nr(d,a));if(r==="box-shadow"){const m=Do(c)(a);if(m.unparseableMatchesLength!==m.matchesLength)return m.result}return c},s=l();return i.size>0?s.match(/^var\(.*?, (var\(--darkreader-bg--.*\))|(#[0-9A-Fa-f]+)|([a-z]+)|(rgba?\(.+\))|(hsla?\(.+\))\)$/)?s:new Promise(d=>{for(const m of i.values()){const v=()=>{this.unsubscribeFromVariableTypeChanges(m,v);const w=l();d(w)};this.subscribeForVarTypeChange(m,v)}}):s}:r.startsWith("border")||r.startsWith("outline")?a=>Gn(e,i=>bt(i),i=>Se(i,a)):null}subscribeForVarTypeChange(r,e){this.typeChangeSubscriptions.has(r)||this.typeChangeSubscriptions.set(r,new Set);const t=this.typeChangeSubscriptions.get(r);t.has(e)||t.add(e)}unsubscribeFromVariableTypeChanges(r,e){this.typeChangeSubscriptions.has(r)&&this.typeChangeSubscriptions.get(r).delete(e)}collectVariablesAndVarDep(){this.rulesQueue.forEach(r=>{Xn(r,e=>{e.style&&this.collectVarsFromCSSDeclarations(e.style)})}),this.inlineStyleQueue.forEach(r=>{this.collectVarsFromCSSDeclarations(r)}),this.rulesQueue.clear(),this.inlineStyleQueue.splice(0)}collectVarsFromCSSDeclarations(r){sr(r,(e,t)=>{xe(e)&&this.inspectVariable(e,t),Zn(t)&&this.inspectVarDependant(e,t)})}shouldProcessRootVariables(){var r;return this.rulesQueue.size>0&&((r=document.documentElement.getAttribute("style"))==null?void 0:r.includes("--"))}collectRootVariables(){this.shouldProcessRootVariables()&&sr(document.documentElement.style,(r,e)=>{xe(r)&&this.inspectVariable(r,e)})}inspectVariable(r,e){if(this.unstableVarValues.set(r,e),Zn(e)&&No(e)&&(this.unknownColorVars.add(r),this.definedVars.add(r)),this.definedVars.has(r))return;this.definedVars.add(r),!!(e.match(Vo)||e.match(Wo)||dn(e))?this.unknownColorVars.add(r):(e.includes("url(")||e.includes("linear-gradient(")||e.includes("radial-gradient("))&&this.resolveVariableType(r,Lr)}resolveVariableType(r,e){const t=this.initialVarTypes.get(r)||0,a=(this.varTypes.get(r)||0)|e;this.varTypes.set(r,a),(a!==t||this.undefinedVars.has(r))&&(this.changedTypeVars.add(r),this.undefinedVars.delete(r)),this.unknownColorVars.delete(r),this.unknownBgVars.delete(r)}collectRootVarDependents(){this.shouldProcessRootVariables()&&sr(document.documentElement.style,(r,e)=>{Zn(e)&&this.inspectVarDependant(r,e)})}inspectVarDependant(r,e){xe(r)?this.iterateVarDeps(e,t=>{this.varRefs.has(r)||this.varRefs.set(r,new Set),this.varRefs.get(r).add(t)}):r==="background-color"||r==="box-shadow"?this.iterateVarDeps(e,t=>this.resolveVariableType(t,In)):ht(r)?this.iterateVarDeps(e,t=>this.resolveVariableType(t,hr)):r.startsWith("border")||r.startsWith("outline")?this.iterateVarDeps(e,t=>this.resolveVariableType(t,vr)):(r==="background"||r==="background-image")&&this.iterateVarDeps(e,t=>{if(this.isVarType(t,In|Lr))return;const o=this.findVarRef(t,a=>this.unknownColorVars.has(a)||this.isVarType(a,In|hr|vr))!=null;this.iterateVarRefs(t,a=>{o?this.resolveVariableType(a,In):this.unknownBgVars.add(a)})})}iterateVarDeps(r,e){const t=new Set;hl(r,o=>t.add(o)),t.forEach(o=>e(o))}findVarRef(r,e,t=new Set){if(t.has(r))return null;if(t.add(r),e(r))return r;const a=this.varRefs.get(r);if(!a||a.size===0)return null;for(const i of a){const l=this.findVarRef(i,e,t);if(l)return l}return null}iterateVarRefs(r,e){this.findVarRef(r,t=>(e(t),!1))}setOnRootVariableChange(r){this.onRootVariableDefined=r}putRootVars(r,e){const t=r.sheet;t.cssRules.length>0&&t.deleteRule(0);const o=new Map;sr(document.documentElement.style,(l,s)=>{xe(l)&&(this.isVarType(l,In)&&o.set(jr(l),nr(s,e)),this.isVarType(l,hr)&&o.set(pt(l),zr(s,e)),this.isVarType(l,vr)&&o.set(bt(l),Se(s,e)),this.subscribeForVarTypeChange(l,this.onRootVariableDefined))});const a=[];a.push(":root {");for(const[l,s]of o)a.push(`    ${l}: ${s};`);a.push("}");const i=a.join(`
`);t.insertRule(i)}}const U=new ml;function pl(n,r=0){const e=n.indexOf("var(",r);if(e>=0){const t=Qe(n,e+3);if(t)return{start:e,end:t.end}}return null}function bl(n){const r=[];let e=0,t;for(;t=pl(n,e);){const{start:o,end:a}=t;r.push({start:o,end:a,value:n.substring(o,a)}),e=t.end+1}return r}function Po(n,r){const e=bl(n),t=e.length;if(t===0)return n;const o=n.length,a=e.map(l=>r(l.value,e.length)),i=[];i.push(n.substring(0,e[0].start));for(let l=0;l<t;l++){i.push(a[l]);const s=e[l].end,c=l<t-1?e[l+1].start:o;i.push(n.substring(s,c))}return i.join("")}function qo(n){const r=n.indexOf(",");let e,t;return r>=0?(e=n.substring(4,r).trim(),t=n.substring(r+1,n.length-1).trim()):(e=n.substring(4,n.length-1).trim(),t=""),{name:e,fallback:t}}function Gn(n,r,e,t){return Po(n,a=>{const{name:i,fallback:l}=qo(a),s=r(i);if(!l)return t?`var(${s}, ${t})`:`var(${s})`;let c;return Zn(l)?c=Gn(l,r,e):e?c=e(l):c=l,`var(${s}, ${c})`})}function hl(n,r){Gn(n,e=>(r(e),e))}function jr(n){return`--darkreader-bg${n}`}function pt(n){return`--darkreader-text${n}`}function bt(n){return`--darkreader-border${n}`}function Oo(n){return`--darkreader-bgimg${n}`}function xe(n){return n.startsWith("--")}function Zn(n){return n.includes("var(")}function No(n){return n.match(/^\s*(rgb|hsl)a?\(/)||n.match(/^(((\d{1,3})|(var\([\-_A-Za-z0-9]+\))),?\s*?){3}$/)}function ht(n){return n==="color"||n==="caret-color"||n==="-webkit-text-fill-color"}const Vo=/^(\d{1,3})\s+(\d{1,3})\s+(\d{1,3})$/,Wo=/^(\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})$/;function vl(n){const r=n.match(Vo)??n.match(Wo);return r?{isRaw:!0,color:`rgb(${r[1]}, ${r[2]}, ${r[3]})`}:{isRaw:!1,color:n}}function vt(n,r,e){const{isRaw:t,color:o}=vl(n),a=dn(o);if(a){const i=e(a,r);if(t){const l=dn(i);return l?`${l.r}, ${l.g}, ${l.b}`:i}return i}return o}function nr(n,r){return vt(n,r,ln)}function zr(n,r){return vt(n,r,Sn)}function Se(n,r){return vt(n,r,Er)}function kt(n,r,e=new Set){let t=!1;const a=Po(n,(i,l)=>{const{name:s,fallback:c}=qo(i),d=l>1?new Set(e):e;if(d.has(s))return t=!0,null;d.add(s);const m=r.get(s)||c;let v=null;return m&&(Zn(m)?v=kt(m,r,d):v=m),v||(t=!0,null)});return t?null:a}const kr={"background-color":{customProp:"--darkreader-inline-bgcolor",cssProp:"background-color",dataAttr:"data-darkreader-inline-bgcolor"},"background-image":{customProp:"--darkreader-inline-bgimage",cssProp:"background-image",dataAttr:"data-darkreader-inline-bgimage"},"border-color":{customProp:"--darkreader-inline-border",cssProp:"border-color",dataAttr:"data-darkreader-inline-border"},"border-bottom-color":{customProp:"--darkreader-inline-border-bottom",cssProp:"border-bottom-color",dataAttr:"data-darkreader-inline-border-bottom"},"border-left-color":{customProp:"--darkreader-inline-border-left",cssProp:"border-left-color",dataAttr:"data-darkreader-inline-border-left"},"border-right-color":{customProp:"--darkreader-inline-border-right",cssProp:"border-right-color",dataAttr:"data-darkreader-inline-border-right"},"border-top-color":{customProp:"--darkreader-inline-border-top",cssProp:"border-top-color",dataAttr:"data-darkreader-inline-border-top"},"box-shadow":{customProp:"--darkreader-inline-boxshadow",cssProp:"box-shadow",dataAttr:"data-darkreader-inline-boxshadow"},color:{customProp:"--darkreader-inline-color",cssProp:"color",dataAttr:"data-darkreader-inline-color"},fill:{customProp:"--darkreader-inline-fill",cssProp:"fill",dataAttr:"data-darkreader-inline-fill"},stroke:{customProp:"--darkreader-inline-stroke",cssProp:"stroke",dataAttr:"data-darkreader-inline-stroke"},"outline-color":{customProp:"--darkreader-inline-outline",cssProp:"outline-color",dataAttr:"data-darkreader-inline-outline"},"stop-color":{customProp:"--darkreader-inline-stopcolor",cssProp:"stop-color",dataAttr:"data-darkreader-inline-stopcolor"}},Ho={background:{customProp:"--darkreader-inline-bg",cssProp:"background",dataAttr:"data-darkreader-inline-bg"}},ft=Object.values(kr),_t={};ft.forEach(({cssProp:n,customProp:r})=>_t[r]=n);const $e=["style","fill","stop-color","stroke","bgcolor","color","background"],Mr=$e.map(n=>`[${n}]`).join(", ");function Go(){return ft.concat(Object.values(Ho)).map(({dataAttr:r,customProp:e,cssProp:t})=>[`[${r}] {`,`  ${t}: var(${e}) !important;`,"}"].join(`
`)).concat(["[data-darkreader-inline-invert] {","    filter: invert(100%) hue-rotate(180deg);","}"]).join(`
`)}function kl(n){const r=[];return n instanceof Element&&n.matches(Mr)&&r.push(n),(n instanceof Element||re&&n instanceof ShadowRoot||n instanceof Document)&&Ne(r,n.querySelectorAll(Mr)),r}const Rr=new Map,Ae=new Map;function fl(n,r){yt(document,n,r),cr(document.documentElement,e=>{yt(e.shadowRoot,n,r)})}function yt(n,r,e){Rr.has(n)&&(Rr.get(n).disconnect(),Ae.get(n).disconnect());const t=new WeakSet;function o(b){kl(b).forEach(y=>{t.has(y)||(t.add(y),r(y))}),cr(b,y=>{t.has(b)||(t.add(b),e(y.shadowRoot),yt(y.shadowRoot,r,e))}),U.matchVariablesAndDependents()}const a=Xt(n,{onMinorMutations:(b,{additions:y})=>{y.forEach(p=>o(p))},onHugeMutations:()=>{o(n)}});Rr.set(n,a);let i=0,l=null;const s=oe({seconds:10}),c=oe({seconds:2}),d=50;let m=[],v=null;const w=Ve(b=>{const y=new Set;b.forEach(p=>{const _=p.target;y.has(_)||$e.includes(p.attributeName)&&(y.add(_),r(_))}),U.matchVariablesAndDependents()}),S=new MutationObserver(b=>{if(v){m.push(...b);return}i++;const y=Date.now();if(l==null)l=y;else if(i>=d){if(y-l<s){v=setTimeout(()=>{l=null,i=0,v=null;const p=m;m=[],w(p)},c),m.push(...b);return}l=y,i=1}w(b)});S.observe(n,{attributes:!0,attributeFilter:$e.concat(ft.map(({dataAttr:b})=>b)),subtree:!0}),Ae.set(n,S)}function _l(){Rr.forEach(n=>n.disconnect()),Ae.forEach(n=>n.disconnect()),Rr.clear(),Ae.clear()}const wt=new WeakMap,Uo=new WeakSet,xt=new WeakMap,yl=["brightness","contrast","grayscale","sepia","mode"];function wl(n){var e,t,o;if(xt.has(n))return xt.get(n);const r=!!(n&&((e=n.getAttribute("class"))!=null&&e.includes("logo")||(o=(t=n.parentElement)==null?void 0:t.getAttribute("class"))!=null&&o.includes("logo")));return xt.set(n,r),r}function St(n,r){return $e.map(e=>`${e}="${n.getAttribute(e)}"`).concat(yl.map(e=>`${e}="${r[e]}"`)).join(" ")}function xl(n,r){for(let e=0,t=r.length;e<t;e++){const o=r[e];if(n.matches(o))return!0}return!1}function $t(n,r,e,t){var c;if(St(n,r)===wt.get(n))return;const a=new Set(Object.keys(kr));function i(d,m,v){const w=Mo(m,v,{style:n.style},U,t,null);if(!w)return;function S(_){const{customProp:k,dataAttr:f}=kr[d]??Ho[d];n.style.setProperty(k,_),n.hasAttribute(f)||n.setAttribute(f,""),a.delete(d)}function b(_){let k=[];function f(g){k.forEach(({property:u})=>{n.style.removeProperty(u)}),g.forEach(({property:u,value:h})=>{h instanceof Promise||n.style.setProperty(u,h)}),k=g}f(_.declarations),_.onTypeChange.addListener(f)}function y(_,k){_.then(f=>{f&&d==="background"&&f.startsWith("var(--darkreader-bg--")&&S(f),f&&d==="background-image"&&((n===document.documentElement||n===document.body)&&f===k&&(f="none"),S(f)),wt.set(n,St(n,r))})}const p=typeof w.value=="function"?w.value(r):w.value;typeof p=="string"?S(p):p instanceof Promise?y(p,v):typeof p=="object"&&b(p)}if(e.length>0&&xl(n,e)){a.forEach(d=>{n.removeAttribute(kr[d].dataAttr)});return}const l=n instanceof SVGElement,s=l?n.ownerSVGElement??(n instanceof SVGSVGElement?n:null):null;if(l&&r.mode===1&&s){if(Uo.has(s))return;if(wl(s)){Uo.add(s);const d=()=>{let m=s.outerHTML;m=m.replaceAll('<style class="darkreader darkreader--sync" media="screen"></style>',"");const v=`data:image/svg+xml;base64,${btoa(m)}`;Io(v).then(w=>{w.isDark&&w.isTransparent||w.isLarge&&w.isLight&&!w.isTransparent?s.setAttribute("data-darkreader-inline-invert",""):s.removeAttribute("data-darkreader-inline-invert")})};d(),Wn()||Ge(d);return}}if(n.hasAttribute("bgcolor")){let d=n.getAttribute("bgcolor");(d.match(/^[0-9a-f]{3}$/i)||d.match(/^[0-9a-f]{6}$/i))&&(d=`#${d}`),i("background-color","background-color",d)}if((n===document.documentElement||n===document.body)&&n.hasAttribute("background")){const m=`url("${ge(location.href,n.getAttribute("background")??"")}")`;i("background-image","background-image",m)}if(n.hasAttribute("color")&&n.rel!=="mask-icon"){let d=n.getAttribute("color");(d.match(/^[0-9a-f]{3}$/i)||d.match(/^[0-9a-f]{6}$/i))&&(d=`#${d}`),i("color","color",d)}if(l){if(n.hasAttribute("fill")){const m=n.getAttribute("fill");if(m!=="none")if(n instanceof SVGTextElement)i("fill","color",m);else{const v=()=>{const{width:w,height:S}=n.getBoundingClientRect(),b=w>32||S>32;i("fill",b?"background-color":"color",m)};ie()?v():Ue(v)}}n.hasAttribute("stop-color")&&i("stop-color","background-color",n.getAttribute("stop-color"))}if(n.hasAttribute("stroke")){const d=n.getAttribute("stroke");i("stroke",n instanceof SVGLineElement||n instanceof SVGTextElement?"border-color":"color",d)}n.style&&sr(n.style,(d,m)=>{if(d==="background-image"&&m.includes("url")){(n===document.documentElement||n===document.body)&&i(d,d,m);return}if(kr.hasOwnProperty(d)||d.startsWith("--")&&!_t[d])i(d,d,m);else if(d==="background"&&m.includes("var("))i("background","background",m);else{const v=_t[d];if(v&&!n.style.getPropertyValue(v)&&!n.hasAttribute(v)){if(v==="background-color"&&n.hasAttribute("bgcolor"))return;n.style.setProperty(d,"")}}}),n.style&&n instanceof SVGTextElement&&n.style.fill&&i("fill","color",n.style.getPropertyValue("fill")),(c=n.getAttribute("style"))!=null&&c.includes("--")&&U.addInlineStyleForMatching(n.style),Cn(a,d=>{n.removeAttribute(kr[d].dataAttr)}),wt.set(n,St(n,r))}const Ko="theme-color",Qo=`meta[name="${Ko}"]`;let Tr=null,qn=null;function Yo(n,r){Tr=Tr||n.content;const e=dn(Tr);e&&(n.content=ln(e,r))}function Sl(n){const r=document.querySelector(Qo);r?Yo(r,n):(qn&&qn.disconnect(),qn=new MutationObserver(e=>{n:for(let t=0;t<e.length;t++){const{addedNodes:o}=e[t];for(let a=0;a<o.length;a++){const i=o[a];if(i instanceof HTMLMetaElement&&i.name===Ko){qn.disconnect(),qn=null,Yo(i,n);break n}}}}),qn.observe(document.head,{childList:!0}))}function $l(){qn&&(qn.disconnect(),qn=null);const n=document.querySelector(Qo);n&&Tr&&(n.content=Tr)}const Al=/\/\*[\s\S]*?\*\//g;function At(n){return n.replace(Al,"")}const Cl=["mode","brightness","contrast","grayscale","sepia","darkSchemeBackgroundColor","darkSchemeTextColor","lightSchemeBackgroundColor","lightSchemeTextColor"];function Il(n){let r="";return Cl.forEach(e=>{r+=`${e}:${n[e]};`}),r}const El=qa();function Ct(){let n=0;function r(d){let m=d.cssText;return Xe(d.parentRule)&&(m=`${d.parentRule.media.mediaText} { ${m} }`),Zt(m)}const e=new Set,t=new Map,o=new Set;let a=null,i=!1,l=!1;function s(){return i&&!l}function c(d){const m=d.sourceCSSRules,{theme:v,ignoreImageAnalysis:w,force:S,prepareSheet:b,isAsyncCancelled:y}=d;let p=t.size===0;const _=new Set(t.keys()),k=Il(v),f=k!==a;i&&(l=!0);const g=[];if(Xn(m,I=>{const P=r(I);let q=!1;if(_.delete(P),e.has(P)||(e.add(P),q=!0),q)p=!0;else{g.push(t.get(P));return}if(I.style.all==="revert")return;const j=[];I.style&&sr(I.style,(x,T)=>{const K=Mo(x,T,I,U,w,y);K&&j.push(K)});let rn=null;if(j.length>0){const x=I.parentRule;rn={selector:I.selectorText,declarations:j,parentRule:x},g.push(rn)}t.set(P,rn)},()=>{i=!0}),_.forEach(I=>{e.delete(I),t.delete(I)}),a=k,!S&&!p&&!f)return;n++;function u(I,P,q){const{selector:j,declarations:rn}=q;let x=j;const T=Bn&&j.startsWith(":is(")&&(j.includes(":is()")||j.includes(":where()")||j.includes(":where(")&&j.includes(":-moz")),K=j.includes("::view-transition-");(T||K)&&(x=".darkreader-unsupported-selector");let V=`${x} {`;for(const bn of rn){const{property:cn,value:Z,important:hn}=bn;Z&&(V+=` ${cn}: ${Z}${hn?" !important":""};`)}V+=" }",I.insertRule(V,P)}const h=new Map,A=new Map;let F=0,N=0;const W={rule:null,rules:[],isGroup:!0},on=new WeakMap;function Qn(I){if(I==null)return W;if(on.has(I))return on.get(I);const P={rule:I,rules:[],isGroup:!0};return on.set(I,P),Qn(I.parentRule).rules.push(P),P}o.forEach(I=>I()),o.clear(),g.filter(I=>I).forEach(({selector:I,declarations:P,parentRule:q})=>{const j=Qn(q),rn={selector:I,declarations:[],isGroup:!1},x=rn.declarations;j.rules.push(rn);function T(V,bn,cn,Z){const hn=++F,Hr={property:V,value:null,important:cn,asyncKey:hn,sourceValue:Z};x.push(Hr);const tr=n;bn.then(Re=>{!Re||y()||tr!==n||(Hr.value=Re,El.add(()=>{y()||tr!==n||J(hn)}))})}function K(V,bn,cn,Z){const{declarations:hn,onTypeChange:Hr}=bn,tr=++N,Re=n,Tc=x.length;let Gr=[];if(hn.length===0){const Tn={property:V,value:Z,important:cn,sourceValue:Z,varKey:tr};x.push(Tn),Gr=[Tn]}hn.forEach(Tn=>{if(Tn.value instanceof Promise)T(Tn.property,Tn.value,cn,Z);else{const Ur={property:Tn.property,value:Tn.value,important:cn,sourceValue:Z,varKey:tr};x.push(Ur),Gr.push(Ur)}}),Hr.addListener(Tn=>{if(y()||Re!==n)return;const Ur=Tn.map($a=>({property:$a.property,value:$a.value,important:cn,sourceValue:Z,varKey:tr})),Bc=x.indexOf(Gr[0],Tc);x.splice(Bc,Gr.length,...Ur),Gr=Ur,X(tr)}),o.add(()=>Hr.removeListeners())}P.forEach(({property:V,value:bn,important:cn,sourceValue:Z})=>{if(typeof bn=="function"){const hn=bn(v);hn instanceof Promise?T(V,hn,cn,Z):V.startsWith("--")?K(V,hn,cn,Z):x.push({property:V,value:hn,important:cn,sourceValue:Z})}else x.push({property:V,value:bn,important:cn,sourceValue:Z})})});const Wr=b();function H(){function I(q,j){const{rule:rn}=q;if(Xe(rn)){const{media:x}=rn,T=j.cssRules.length;return j.insertRule(`@media ${x.mediaText} {}`,T),j.cssRules[T]}if(mo(rn)){const{name:x}=rn,T=j.cssRules.length;return j.insertRule(`@layer ${x} {}`,T),j.cssRules[T]}return j}function P(q,j,rn){q.rules.forEach(x=>{if(x.isGroup){const T=I(x,j);P(x,T,rn)}else rn(x,j)})}P(W,Wr,(q,j)=>{const rn=j.cssRules.length;q.declarations.forEach(({asyncKey:x,varKey:T})=>{x!=null&&h.set(x,{rule:q,target:j,index:rn}),T!=null&&A.set(T,{rule:q,target:j,index:rn})}),u(j,rn,q)})}function J(I){const{rule:P,target:q,index:j}=h.get(I);q.deleteRule(j),u(q,j,P),h.delete(I)}function X(I){const{rule:P,target:q,index:j}=A.get(I);q.deleteRule(j),u(q,j,P)}H()}return{modifySheet:c,shouldRebuildStyle:s}}let Ce=!1;document.addEventListener("__darkreader__inlineScriptsAllowed",()=>Ce=!0,{once:!0});function Fl(n,r,e,t){let o=null;function a(){s(),Ce&&n.sheet||(o=Ll(n,r,e,t),o.start())}let i=!1;function l(){if(Ce=!0,o==null||o.stop(),i)return;function m(){i=!1,!t()&&e()}i=!0,queueMicrotask(m)}function s(){n.addEventListener("__darkreader__updateSheet",l)}function c(){n.removeEventListener("__darkreader__updateSheet",l)}function d(){c(),o==null||o.stop()}return{start:a,stop:d}}function Ll(n,r,e,t){let o=null,a=null;function i(){const d=r();return d?d.length:null}function l(){return i()!==o}function s(){o=i(),c();const d=()=>{const m=t();if(!m&&l()&&(o=i(),e()),m||Ce&&n.sheet){c();return}a=requestAnimationFrame(d)};d()}function c(){a&&cancelAnimationFrame(a)}return{start:s,stop:c}}const jl='style, link[rel*="stylesheet" i]:not([disabled])';function zl(n){if(!n.href)return!1;try{return new URL(n.href).hostname==="fonts.googleapis.com"}catch{return Dn(`Couldn't construct ${n.href} as URL`),!1}}const Ml=["www.onet.pl"];function Jo(n){return(n instanceof HTMLStyleElement||n instanceof SVGStyleElement&&!Ml.includes(location.hostname)||n instanceof HTMLLinkElement&&!!n.rel&&n.rel.toLowerCase().includes("stylesheet")&&!!n.href&&!n.disabled&&(Rn?!n.href.startsWith("moz-extension://"):!0)&&!zl(n))&&!n.classList.contains("darkreader")&&n.media.toLowerCase()!=="print"&&!n.classList.contains("stylus")}function Un(n,r=[],e=!0){return Jo(n)?r.push(n):(n instanceof Element||re&&n instanceof ShadowRoot||n===document)&&(Cn(n.querySelectorAll(jl),t=>Un(t,r,!1)),e&&cr(n,t=>Un(t.shadowRoot,r,!1))),r}const Xo=new WeakSet,Zo=new WeakSet;let Rl=0;const fr=new Map;function Tl(){fr.clear()}function Bl(n,{update:r,loadingStart:e,loadingEnd:t}){const o=[];let a=n;for(;(a=a.nextElementSibling)&&a.matches(".darkreader");)o.push(a);let i=o.find(x=>x.matches(".darkreader--cors")&&!Zo.has(x))||null,l=o.find(x=>x.matches(".darkreader--sync")&&!Xo.has(x))||null,s=null,c=null,d=!1,m=!0;const v=()=>d,w=Ct(),S=new MutationObserver(x=>{if(x.some(T=>T.type==="characterData")&&y()){const T=(n.textContent??"").trim();F(T,location.href).then(r)}else r()}),b={attributes:!0,childList:!0,subtree:!0,characterData:!0};function y(){return n instanceof HTMLStyleElement?At(n.textContent??"").trim().match(io):!1}function p(x,T){let K=!1;if(x){let V;n:for(let bn=0,cn=x.length;bn<cn;bn++)if(V=x[bn],V.href)if(T){if(!V.href.startsWith("https://fonts.googleapis.com/")&&V.href.startsWith("http")&&!V.href.startsWith(location.origin)){K=!0;break n}}else{K=!0;break n}}return K}function _(){if(i)return i.sheet.cssRules;if(y())return null;const x=H();return n instanceof HTMLLinkElement&&!Ga(n.href)&&p(x,!1)||p(x,!0)?null:x}function k(){i?(n.nextSibling!==i&&n.parentNode.insertBefore(i,n.nextSibling),i.nextSibling!==l&&n.parentNode.insertBefore(l,i.nextSibling)):n.nextSibling!==l&&n.parentNode.insertBefore(l,n.nextSibling)}function f(){l=n instanceof SVGStyleElement?document.createElementNS("http://www.w3.org/2000/svg","style"):document.createElement("style"),l.classList.add("darkreader"),l.classList.add("darkreader--sync"),l.media="screen",n.title&&(l.title=n.title),Xo.add(l)}let g=!1,u=!1;const h=++Rl;async function A(){let x,T;if(n instanceof HTMLLinkElement){let[K,V]=Qn();if(Yn&&!n.sheet||!Yn&&!K&&!V||Wr(V)){try{Dn(`Linkelement ${h} is not loaded yet and thus will be await for`,n),await Dl(n,h)}catch{u=!0}if(d)return null;[K,V]=Qn()}if(K&&!p(K,!1))return K;if(x=await na(n.href),T=ue(n.href),d)return null}else if(y())x=n.textContent.trim(),T=ue(location.href);else return null;return await F(x,T),i?i.sheet.cssRules:null}async function F(x,T){var K;if(x){try{const V=await ra(x,T);i?(((K=i.textContent)==null?void 0:K.length)??0)<V.length&&(i.textContent=V):i=ql(n,V)}catch{}i&&(s=He(i,"prev-sibling"))}}function N(x){const T=_();return T?{rules:T}:(x.secondRound||g||u||(g=!0,e(),A().then(K=>{g=!1,t(),K&&r()}).catch(K=>{g=!1,t()})),null)}let W=!1;function on(x,T){const K=_();if(!K)return;d=!1;function V(Z){if(Z)for(let hn=Z.cssRules.length-1;hn>=0;hn--)Z.deleteRule(hn)}function bn(){l||f(),c&&c.stop(),k(),l.sheet==null&&(l.textContent="");const Z=l.sheet;return V(Z),c?c.run():c=He(l,"prev-sibling",()=>{W=!0,cn()}),l.sheet}function cn(){const Z=W;W=!1,w.modifySheet({prepareSheet:bn,sourceCSSRules:K,theme:x,ignoreImageAnalysis:T,force:Z,isAsyncCancelled:v}),m=l.sheet.cssRules.length===0,w.shouldRebuildStyle()&&Ue(()=>r())}cn()}function Qn(){try{return n.sheet==null?[null,null]:[n.sheet.cssRules,null]}catch(x){return[null,x]}}function Wr(x){return x&&x.message&&x.message.includes("loading")}function H(){const[x,T]=Qn();return T?null:x}const J=Fl(n,H,r,v);function X(){S.disconnect(),d=!0,s&&s.stop(),c&&c.stop(),J.stop()}function I(){if(X(),pn(i),pn(l),t(),fr.has(h)){const x=fr.get(h);fr.delete(h),x&&x()}}function P(){S.observe(n,b),n instanceof HTMLStyleElement&&J.start()}const q=10;let j=0;function rn(){l&&(j++,!(j>q)&&(k(),s&&s.skip(),c&&c.skip(),m||(W=!0,r())))}return{details:N,render:on,pause:X,destroy:I,watch:P,restore:rn}}async function Dl(n,r){return new Promise((e,t)=>{const o=()=>{n.removeEventListener("load",a),n.removeEventListener("error",i),fr.delete(r)},a=()=>{o(),e()},i=()=>{o(),t(`Linkelement ${r} couldn't be loaded. ${n.href}`)};fr.set(r,()=>{o(),t()}),n.addEventListener("load",a,{passive:!0}),n.addEventListener("error",i,{passive:!0}),n.href||i()})}function Pl(n){return Je(n.substring(7).trim().replace(/;$/,"").replace(/screen$/,""))}async function na(n){return n.startsWith("data:")?await(await fetch(n)).text():new URL(n).origin===location.origin?await R(n,"text/css",location.origin):await Co({url:n,responseType:"text",mimeType:"text/css",origin:location.origin})}async function ra(n,r,e=new Map){n=At(n),n=Ya(n),n=Ka(n,r);const t=$r(io,n);for(const o of t){const a=Pl(o),i=ge(r,a);let l;if(e.has(i))l=e.get(i);else try{l=await na(i),e.set(i,l),l=await ra(l,ue(i),e)}catch{l=""}n=n.split(o).join(l)}return n=n.trim(),n}function ql(n,r){if(!r)return null;const e=document.createElement("style");return e.classList.add("darkreader"),e.classList.add("darkreader--cors"),e.media="screen",e.textContent=r,n.parentNode.insertBefore(e,n.nextSibling),e.sheet.disabled=!0,Zo.add(e),e}const ea=new Set,rr=new Map;let Ie;function Ol(n){return!!(n.tagName.includes("-")||n.getAttribute("is"))}function ta(n){let r=n.tagName.toLowerCase();if(!r.includes("-")){const e=n.getAttribute("is");if(e)r=e;else return}rr.has(r)||(rr.set(r,new Set),Nl(r).then(()=>{if(Ie){const e=rr.get(r);rr.delete(r),Ie(Array.from(e))}})),rr.get(r).add(n)}function Ee(n){C&&Cn(n.querySelectorAll(":not(:defined)"),ta)}let It=!1;document.addEventListener("__darkreader__inlineScriptsAllowed",()=>{It=!0},{once:!0,passive:!0});const _r=new Map;function oa(n){It=!0;const r=n.detail.tag;if(ea.add(r),_r.has(r)){const e=_r.get(r);_r.delete(r),e.forEach(t=>t())}}async function Nl(n){if(!ea.has(n))return new Promise(r=>{if(window.customElements&&typeof customElements.whenDefined=="function")customElements.whenDefined(n).then(()=>r());else if(It)_r.has(n)?_r.get(n).push(r):_r.set(n,[r]),document.dispatchEvent(new CustomEvent("__darkreader__addUndefinedResolver",{detail:{tag:n}}));else{const e=()=>{const t=rr.get(n);t&&t.size>0&&(t.values().next().value.matches(":defined")?r():requestAnimationFrame(e))};requestAnimationFrame(e)}})}function Vl(n){Ie=n}function Wl(){Ie=null,rr.clear(),document.removeEventListener("__darkreader__isDefined",oa)}const Fe=[];let Le;function Hl(n,r,e){aa();const t=new WeakMap,o=p=>(t.has(p)||t.set(p,new Set),t.get(p));n.forEach(p=>{let _=p;for(;_=_.parentNode;)if(_===document||_.nodeType===Node.DOCUMENT_FRAGMENT_NODE){o(_).add(p);break}});const a=new WeakMap,i=new WeakMap;function l(p){a.set(p,p.previousElementSibling),i.set(p,p.nextElementSibling)}function s(p){a.delete(p),i.delete(p)}function c(p){return p.previousElementSibling!==a.get(p)||p.nextElementSibling!==i.get(p)}n.forEach(l);function d(p,_){const{createdStyles:k,removedStyles:f,movedStyles:g}=_;k.forEach(h=>l(h)),g.forEach(h=>l(h)),f.forEach(h=>s(h));const u=o(p);k.forEach(h=>u.add(h)),f.forEach(h=>u.delete(h)),k.size+f.size+g.size>0&&r({created:Array.from(k),removed:Array.from(f),moved:Array.from(g),updated:[]})}function m(p,{additions:_,moves:k,deletions:f}){const g=new Set,u=new Set,h=new Set;_.forEach(A=>Un(A).forEach(F=>g.add(F))),f.forEach(A=>Un(A).forEach(F=>u.add(F))),k.forEach(A=>Un(A).forEach(F=>h.add(F))),d(p,{createdStyles:g,removedStyles:u,movedStyles:h}),_.forEach(A=>{y(A),Ee(A)}),_.forEach(A=>Ol(A)&&ta(A))}function v(p){const _=new Set(Un(p)),k=new Set,f=new Set,g=new Set,u=o(p);_.forEach(h=>{u.has(h)||k.add(h)}),u.forEach(h=>{_.has(h)||f.add(h)}),_.forEach(h=>{!k.has(h)&&!f.has(h)&&c(h)&&g.add(h)}),d(p,{createdStyles:k,removedStyles:f,movedStyles:g}),y(p),Ee(p)}function w(p){const _=new Set,k=new Set;p.forEach(f=>{const{target:g}=f;g.isConnected&&(Jo(g)?_.add(g):g instanceof HTMLLinkElement&&g.disabled&&k.add(g))}),_.size+k.size>0&&r({updated:Array.from(_),created:[],removed:Array.from(k),moved:[]})}function S(p){if(Le.has(p))return;const _=Xt(p,{onMinorMutations:m,onHugeMutations:v}),k=new MutationObserver(w);k.observe(p,{attributeFilter:["rel","disabled","media","href"],subtree:!0}),Fe.push(_,k),Le.add(p)}function b(p){const{shadowRoot:_}=p;_==null||Le.has(_)||(S(_),e(_))}function y(p){cr(p,b)}S(document),y(document.documentElement),Vl(p=>{const _=[];p.forEach(k=>Ne(_,Un(k.shadowRoot))),r({created:_,updated:[],removed:[],moved:[]}),p.forEach(k=>{const{shadowRoot:f}=k;f!=null&&(b(k),y(f),Ee(f))})}),document.addEventListener("__darkreader__isDefined",oa),Ee(document)}function Gl(){Fe.forEach(n=>n.disconnect()),Fe.splice(0,Fe.length),Le=new WeakSet}function aa(){Gl(),Wl()}function Ul(n,r,e){Hl(n,r,e)}function Kl(){aa()}let je=!1;document.addEventListener("__darkreader__inlineScriptsAllowed",()=>je=!0,{once:!0});const Br=new WeakSet,Et=new WeakMap;function Ql(n){return Array.isArray(n.adoptedStyleSheets)}function Yl(n){let r=!1;function e(k){n.adoptedStyleSheets.forEach(f=>{Br.has(f)||k(f)})}function t(k,f){const g=[...n.adoptedStyleSheets],u=g.indexOf(k),h=g.indexOf(f);h>=0&&g.splice(h,1),g.splice(u+1,0,f),n.adoptedStyleSheets=g}function o(){const k=[...n.adoptedStyleSheets];for(let f=k.length-1;f>=0;f--){const g=k[f];Br.has(g)&&k.splice(f,1)}n.adoptedStyleSheets.length!==k.length&&(n.adoptedStyleSheets=k),c=new WeakSet,d=new WeakSet}const a=[];function i(){a.forEach(k=>k()),a.splice(0),r=!0,o(),b&&(cancelAnimationFrame(b),b=null)}let l=0;function s(){let k=0;if(e(f=>{k+=f.cssRules.length}),k===1){const f=n.adoptedStyleSheets[0].cssRules[0];return f instanceof CSSStyleRule?f.style.length:k}return k}let c=new WeakSet,d=new WeakSet;function m(k,f){o();for(let g=n.adoptedStyleSheets.length-1;g>=0;g--){const u=n.adoptedStyleSheets[g];if(Br.has(u))continue;c.add(u);const h=Et.get(u);if(h){l=s(),t(u,h);continue}const A=u.cssRules,F=new CSSStyleSheet;Et.set(u,F),Xn(A,on=>d.add(on.style));const N=()=>{for(let on=F.cssRules.length-1;on>=0;on--)F.deleteRule(on);return F.insertRule("#__darkreader__adoptedOverride {}"),t(u,F),Br.add(F),F};Ct().modifySheet({prepareSheet:N,sourceCSSRules:A,theme:k,ignoreImageAnalysis:f,force:!1,isAsyncCancelled:()=>r})}l=s()}let v=!1;function w(k){v||(v=!0,queueMicrotask(()=>{v=!1;const f=n.adoptedStyleSheets.filter(g=>!Br.has(g));f.forEach(g=>Et.delete(g)),k(f)}))}function S(){return s()!==l}let b=null;function y(k){b=requestAnimationFrame(()=>{je||(S()&&w(k),y(k))})}function p(k,f){n.addEventListener(k,f),a.push(()=>n.removeEventListener(k,f))}function _(k){const f=()=>{je=!0,w(k)};p("__darkreader__adoptedStyleSheetsChange",f),p("__darkreader__adoptedStyleSheetChange",f),p("__darkreader__adoptedStyleDeclarationChange",f),!je&&y(k)}return{render:m,destroy:i,watch:_}}class Ft{constructor(r){this.cssRules=[],this.commands=[],this.onChange=r}insertRule(r,e=0){return this.commands.push({type:"insert",index:e,cssText:r}),this.cssRules.splice(e,0,new Ft(this.onChange)),this.onChange(),e}deleteRule(r){this.commands.push({type:"delete",index:r}),this.cssRules.splice(r,1),this.onChange()}replaceSync(r){if(this.commands.splice(0),this.commands.push({type:"replace",cssText:r}),r==="")this.cssRules.splice(0);else throw new Error("StyleSheetCommandBuilder.replaceSync() is not fully supported");this.onChange()}getDeepCSSCommands(){const r=[];return this.commands.forEach(e=>{r.push({type:e.type,cssText:e.type!=="delete"?e.cssText:"",path:e.type==="replace"?[]:[e.index]})}),this.cssRules.forEach((e,t)=>{e.getDeepCSSCommands().forEach(a=>a.path.unshift(t))}),r}clearDeepCSSCommands(){this.commands.splice(0),this.cssRules.forEach(r=>r.clearDeepCSSCommands())}}function Jl(n){let r=!1,e=[],t,o;function a(d){e=d,t&&o&&l(t,o)}const i=new Ft(n);function l(d,m){t=d,o=m;const v=()=>(i.replaceSync(""),i);Ct().modifySheet({prepareSheet:v,sourceCSSRules:e,theme:d,ignoreImageAnalysis:m,force:!1,isAsyncCancelled:()=>r})}function s(){const d=i.getDeepCSSCommands();return i.clearDeepCSSCommands(),d}function c(){r=!0}return{render:l,destroy:c,updateCSS:a,commands:s}}function Xl(n,r){document.dispatchEvent(new CustomEvent("__darkreader__inlineScriptsAllowed"));const e=[];function t(){e.forEach(g=>g()),e.splice(0)}function o(g,u,h){document.addEventListener(g,u,h),e.push(()=>document.removeEventListener(g,u))}function a(){(()=>{var u;(u=window==null?void 0:window.WPDarkMode)!=null&&u.deactivate&&window.WPDarkMode.deactivate()})()}o("__darkreader__cleanUp",t),o("__darkreader__disableConflictingPlugins",a);function i(g,u,h){const A=g.prototype,F=Object.getOwnPropertyDescriptor(A,u),N={...F};Object.keys(h).forEach(W=>{const on=h[W];N[W]=on(F[W])}),Object.defineProperty(A,u,N),e.push(()=>Object.defineProperty(A,u,F))}function l(g,u,h){i(g,u,{value:h})}function s(g){var u;return(u=g==null?void 0:g.classList)==null?void 0:u.contains("darkreader")}function c(g){return s(g.ownerNode)}const d=new CustomEvent("__darkreader__updateSheet"),m=new CustomEvent("__darkreader__adoptedStyleSheetChange"),v=new WeakMap,w=new WeakMap;function S(g){const u=v.get(g);u==null||u.forEach(h=>{h.isConnected?h.dispatchEvent(m):u.delete(h)})}function b(g){g.ownerNode&&!c(g)&&g.ownerNode.dispatchEvent(d),v.has(g)&&S(g)}function y(g,u){const{ownerNode:h}=g;h&&!c(g)&&u&&u instanceof Promise&&u.then(()=>h.dispatchEvent(d)),v.has(g)&&u&&u instanceof Promise&&u.then(()=>S(g))}l(CSSStyleSheet,"addRule",g=>function(u,h,A){return g.call(this,u,h,A),b(this),-1}),l(CSSStyleSheet,"insertRule",g=>function(u,h){const A=g.call(this,u,h);return b(this),A}),l(CSSStyleSheet,"deleteRule",g=>function(u){g.call(this,u),b(this)}),l(CSSStyleSheet,"removeRule",g=>function(u){g.call(this,u),b(this)}),l(CSSStyleSheet,"replace",g=>function(u){const h=g.call(this,u);return y(this,h),h}),l(CSSStyleSheet,"replaceSync",g=>function(u){g.call(this,u),b(this)}),(location.hostname==="baidu.com"||location.hostname.endsWith(".baidu.com"))&&l(Element,"getElementsByTagName",g=>function(u){if(u!=="style")return g.call(this,u);const h=()=>{const N=g.call(this,u);return Object.setPrototypeOf([...N].filter(W=>W&&!s(W)),NodeList.prototype)};let A=h();const F={get:function(N,W){return h()[Number(W)||W]}};return A=new Proxy(A,F),A}),["brilliant.org","www.vy.no"].includes(location.hostname)&&i(Node,"childNodes",{get:g=>function(){const u=g.call(this);return Object.setPrototypeOf([...u].filter(h=>!s(h)),NodeList.prototype)}});function k(g){customElements.whenDefined(g).then(()=>{document.dispatchEvent(new CustomEvent("__darkreader__isDefined",{detail:{tag:g}}))})}o("__darkreader__addUndefinedResolver",g=>k(g.detail.tag)),r&&l(CustomElementRegistry,"define",g=>function(u,h,A){k(u),g.call(this,u,h,A)});async function f(){const g='<svg xmlns="http://www.w3.org/2000/svg" width="1" height="1"><rect width="1" height="1" fill="transparent"/></svg>',u=new Uint8Array(g.length);for(let N=0;N<g.length;N++)u[N]=g.charCodeAt(N);const h=new Blob([u],{type:"image/svg+xml"}),A=URL.createObjectURL(h);let F;try{const N=new Image;await new Promise((W,on)=>{N.onload=()=>W(),N.onerror=()=>on(),N.src=A}),F=!0}catch{F=!1}document.dispatchEvent(new CustomEvent("__darkreader__blobURLCheckResponse",{detail:{blobURLAllowed:F}}))}o("__darkreader__blobURLCheckRequest",f,{once:!0}),n&&i(Document,"styleSheets",{get:g=>function(){const u=()=>{const N=[...g.call(this)].filter(W=>W.ownerNode&&!c(W));return N.item=W=>N[W],Object.setPrototypeOf(N,StyleSheetList.prototype)};let h=u();const A={get:function(F,N){return u()[N]}};return h=new Proxy(h,A),h}});{const g=new WeakMap,u=new WeakMap,h=new CustomEvent("__darkreader__adoptedStyleSheetsChange"),A=new WeakSet,F=new WeakMap,N=H=>!H||!H.cssRules?!1:A.has(H)?!0:H.cssRules.length>0&&H.cssRules[0].cssText.startsWith("#__darkreader__adoptedOverride")?(A.add(H),!0):!1,W=(H,J)=>H.length===J.length&&H.every((X,I)=>X===J[I]),on=H=>{const J=F.get(H),X=(H.adoptedStyleSheets||[]).filter(I=>!N(I));F.set(H,X),(!J||!W(J,X))&&(X.forEach(I=>{v.has(I)||v.set(I,new Set),v.get(I).add(H);for(const P of I.cssRules){const q=P.style;q&&w.set(q,I)}}),H.dispatchEvent(h))},Qn=(H,J)=>{if(u.has(J))return J;if(g.has(J))return g.get(J);const X=new Proxy(J,{deleteProperty(I,P){return delete I[P],!0},set(I,P,q){return I[P]=q,P==="length"&&on(H),!0}});return g.set(J,X),u.set(X,J),X};[Document,ShadowRoot].forEach(H=>{i(H,"adoptedStyleSheets",{get:J=>function(){const X=J.call(this);return Qn(this,X)},set:J=>function(X){u.has(X)&&(X=u.get(X)),J.call(this,X),on(this)}})});const Wr=new CustomEvent("__darkreader__adoptedStyleDeclarationChange");["setProperty","removeProperty"].forEach(H=>{l(CSSStyleDeclaration,H,J=>function(...X){const I=J.apply(this,X),P=w.get(this);if(P){const q=v.get(P);q&&q.forEach(j=>{j.dispatchEvent(Wr)})}return I})})}}let On=null,ia=!document.hidden;const yr={capture:!0,passive:!0};function Zl(){document.addEventListener("visibilitychange",On,yr),window.addEventListener("pageshow",On,yr),window.addEventListener("focus",On,yr)}function nc(){document.removeEventListener("visibilitychange",On,yr),window.removeEventListener("pageshow",On,yr),window.removeEventListener("focus",On,yr)}function rc(n){const r=!!On;On=()=>{document.hidden||(la(),n(),ia=!0)},r||Zl()}function la(){nc(),On=null}function ca(){return ia}const Lt=Ao(),jn=new Map,ze=[],Me=new Map,sa=new WeakMap,jt=new WeakMap;let L=null,Y=null,da=null,En=[],Dr=[];function _n(n,r=document.head||document){let e=r.querySelector(`.${n}`);return e||(e=document.createElement("style"),e.classList.add("darkreader"),e.classList.add(n),e.media="screen",e.textContent=""),e}function ec(n,r=document.head||document){let e=r.querySelector(`.${n}`);return e||(e=document.createElement("script"),e.classList.add("darkreader"),e.classList.add(n)),e}const Pr=new Map;function er(n,r){Pr.has(r)&&Pr.get(r).stop(),Pr.set(r,He(n,"head"))}function tc(){Cn(Pr.values(),n=>n.stop()),Pr.clear()}function oc(){const n=_n("darkreader--fallback",document);n.textContent=mt(L,{strict:!0}),document.head.insertBefore(n,document.head.firstChild),er(n,"fallback");const r=_n("darkreader--user-agent");r.textContent=nl(L,da,L.styleSystemControls),document.head.insertBefore(r,n.nextSibling),er(r,"user-agent");const e=_n("darkreader--text");L.useFont||L.textStroke>0?e.textContent=Ei(L):e.textContent="",document.head.insertBefore(e,n.nextSibling),er(e,"text");const t=_n("darkreader--invert");Y&&Array.isArray(Y.invert)&&Y.invert.length>0?t.textContent=[`${Y.invert.join(", ")} {`,`    filter: ${$o({...L,contrast:L.mode===0?L.contrast:Hn(L.contrast-10,0,100)})} !important;`,"}"].join(`
`):t.textContent="",document.head.insertBefore(t,e.nextSibling),er(t,"invert");const o=_n("darkreader--inline");o.textContent=Go(),document.head.insertBefore(o,t.nextSibling),er(o,"inline");const a=_n("darkreader--override");a.textContent=Y&&Y.css?ua(Y.css):"",document.head.appendChild(a),er(a,"override");const i=_n("darkreader--variables"),l=To(L),s=ln(dn("#ffffff"),L),c=Sn(dn("#000000"),L);i.textContent=[":root {",`   --darkreader-neutral-background: ${s};`,`   --darkreader-neutral-text: ${c};`,`   --darkreader-selection-background: ${l.backgroundColorSelection};`,`   --darkreader-selection-text: ${l.foregroundColorSelection};`,"}"].join(`
`),document.head.insertBefore(i,o.nextSibling),er(i,"variables");const d=_n("darkreader--root-vars");document.head.insertBefore(d,i.nextSibling);const m=!(Y&&Y.disableStyleSheetsProxy),v=!(Y&&Y.disableCustomElementRegistryProxy);document.dispatchEvent(new CustomEvent("__darkreader__cleanUp"));{const w=ec("darkreader--proxy");w.append(`(${Xl})(${m}, ${v})`),document.head.insertBefore(w,d.nextSibling),w.remove()}}const zt=new Set;function ga(n){const r=_n("darkreader--inline",n);r.textContent=Go(),n.insertBefore(r,n.firstChild);const e=_n("darkreader--override",n);e.textContent=Y&&Y.css?ua(Y.css):"",n.insertBefore(e,r.nextSibling);const t=_n("darkreader--invert",n);Y&&Array.isArray(Y.invert)&&Y.invert.length>0?t.textContent=[`${Y.invert.join(", ")} {`,`    filter: ${$o({...L,contrast:L.mode===0?L.contrast:Hn(L.contrast-10,0,100)})} !important;`,"}"].join(`
`):t.textContent="",n.insertBefore(t,e.nextSibling),zt.add(n)}function ac(n){new MutationObserver((e,t)=>{t.disconnect();for(const{type:o,removedNodes:a}of e)if(o==="childList"){for(const{nodeName:i,className:l}of a)if(i==="STYLE"&&["darkreader darkreader--inline","darkreader darkreader--override","darkreader darkreader--invert"].includes(l)){ga(n);return}}}).observe(n,{childList:!0})}function Mt(n){const r=n.firstChild===null;ga(n),r&&ac(n)}function ua(n){return n.replace(/\${(.+?)}/g,(r,e)=>{const t=dn(e);return t?yo(t.r,t.g,t.b)>.5?ln(t,L):Sn(t,L):e})}function Rt(){const n=document.querySelector(".darkreader--fallback");n&&(n.textContent="")}function ic(){ba();const r=Un(document).filter(o=>!jn.has(o)).map(o=>ma(o));r.map(o=>o.details({secondRound:!1})).filter(o=>o&&o.rules.length>0).forEach(o=>{U.addRulesForMatching(o.rules)}),U.matchVariablesAndDependents(),U.setOnRootVariableChange(()=>{const o=_n("darkreader--root-vars");U.putRootVars(o,L)});const e=_n("darkreader--root-vars");U.putRootVars(e,L),jn.forEach(o=>o.render(L,En)),Kn.size===0&&Rt(),r.forEach(o=>o.watch());const t=Pa(document.querySelectorAll(Mr));if(cr(document.documentElement,o=>{Mt(o.shadowRoot);const a=o.shadowRoot.querySelectorAll(Mr);a.length>0&&Ne(t,a)}),t.forEach(o=>$t(o,L,Dr,En)),ka(document),U.matchVariablesAndDependents(),Rn){const o=Symbol(),a=i=>{const{node:l,id:s,cssRules:c,entries:d}=i.detail;Array.isArray(d)?(d.forEach(v=>{const w=v[2];U.addRulesForMatching(w)}),U.matchVariablesAndDependents()):c&&(U.addRulesForMatching(c),Qt(o,()=>U.matchVariablesAndDependents())),(Array.isArray(d)?d:l&&c?[[l,s,c]]:[]).forEach(([v,w,S])=>{sa.set(v,w),fa(v).updateCSS(S)})};document.addEventListener("__darkreader__adoptedStyleSheetsChange",a),Tt.push(()=>document.removeEventListener("__darkreader__adoptedStyleSheetsChange",a)),document.dispatchEvent(new CustomEvent("__darkreader__startAdoptedStyleSheetsWatcher"))}}let lc=0;const Kn=new Set;function ma(n){const r=++lc;function e(){if(!Wn()||!ca()){Kn.add(r),Dn(`Current amount of styles loading: ${Kn.size}`);const i=document.querySelector(".darkreader--fallback");i.textContent||(i.textContent=mt(L,{strict:!1}))}}function t(){Kn.delete(r),Dn(`Removed loadingStyle ${r}, now awaiting: ${Kn.size}`),Kn.size===0&&Wn()&&Rt()}function o(){const i=a.details({secondRound:!0});i&&(U.addRulesForMatching(i.rules),U.matchVariablesAndDependents(),a.render(L,En))}const a=Bl(n,{update:o,loadingStart:e,loadingEnd:t});return jn.set(n,a),a}function pa(n){const r=jn.get(n);r&&(r.destroy(),jn.delete(n))}const cc=Ve(n=>{jn.forEach(r=>r.render(L,En)),ze.forEach(r=>r.render(L,En)),n&&n()}),ba=function(){cc.cancel()};function ha(){if(Kn.size===0){Rt();return}}function va(){ic(),gc()}function sc(){oc(),!ca()&&!L.immediateModify?rc(va):va(),Sl(L)}function ka(n){if(Rn){fa(n).render(L,En);return}if(Ql(n)){n.adoptedStyleSheets.forEach(e=>{U.addRulesForMatching(e.cssRules)});const r=Yl(n);ze.push(r),r.render(L,En),r.watch(e=>{e.forEach(t=>{U.addRulesForMatching(t.cssRules)}),U.matchVariablesAndDependents(),r.render(L,En)})}}function dc(n){if(jt.has(n))return jt.get(n);const r=Symbol();return jt.set(n,r),r}function fa(n){let r=Me.get(n);return r||(r=Jl(()=>{const e=dc(n);Qt(e,()=>{const t=sa.get(n),o=r==null?void 0:r.commands();if(!t||!o)return;const a={id:t,commands:o};document.dispatchEvent(new CustomEvent("__darkreader__adoptedStyleSheetCommands",{detail:JSON.stringify(a)}))})}),Me.set(n,r)),r}function gc(){const n=Array.from(jn.keys());Ul(n,({created:r,updated:e,removed:t,moved:o})=>{const a=t,i=r.concat(e).concat(o).filter(c=>!jn.has(c)),l=o.filter(c=>jn.has(c));a.forEach(c=>pa(c));const s=i.map(c=>ma(c));s.map(c=>c.details({secondRound:!1})).filter(c=>c&&c.rules.length>0).forEach(c=>{U.addRulesForMatching(c.rules)}),U.matchVariablesAndDependents(),s.forEach(c=>c.render(L,En)),s.forEach(c=>c.watch()),l.forEach(c=>jn.get(c).restore())},r=>{Mt(r),ka(r)}),fl(r=>{if($t(r,L,Dr,En),r===document.documentElement&&(r.getAttribute("style")||"").includes("--")){U.matchVariablesAndDependents();const t=_n("darkreader--root-vars");U.putRootVars(t,L)}},r=>{Mt(r);const e=r.querySelectorAll(Mr);e.length>0&&Cn(e,t=>$t(t,L,Dr,En))}),Ge(ha)}function uc(){jn.forEach(n=>n.pause()),tc(),Kl(),_l(),Yt(ha),Na()}let qr;function mc(){qr=new MutationObserver(()=>{document.querySelector('meta[name="darkreader-lock"]')&&(qr.disconnect(),Bt())}),qr.observe(document.head,{childList:!0,subtree:!0})}function pc(){const n=document.createElement("meta");n.name="darkreader",n.content=Lt,document.head.appendChild(n)}function bc(){return document.querySelector('meta[name="darkreader-lock"]')!=null}function hc(){const n=document.querySelector('meta[name="darkreader"]');return n?n.content!==Lt:(pc(),mc(),!1)}let vc=2;function kc({success:n,failure:r}){if(--vc<=0){r();return}const e=document.head.querySelector('meta[name="darkreader"]');if(!e||e.content===Lt)return;const t=document.createElement("meta");t.name="darkreader-lock",document.head.append(t),queueMicrotask(()=>{t.remove(),n()})}function fc(){if(document.documentElement.hasAttribute("data-wp-dark-mode-preset")){const n=()=>{document.dispatchEvent(new CustomEvent("__darkreader__disableConflictingPlugins")),document.documentElement.classList.remove("wp-dark-mode-active"),document.documentElement.removeAttribute("data-wp-dark-mode-active")};n(),new MutationObserver(()=>{(document.documentElement.classList.contains("wp-dark-mode-active")||document.documentElement.hasAttribute("data-wp-dark-mode-active"))&&n()}).observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-wp-dark-mode-active"]})}}function _c(n,r,e){L=n,Y=r,Y?(En=Array.isArray(Y.ignoreImageAnalysis)?Y.ignoreImageAnalysis:[],Dr=Array.isArray(Y.ignoreInlineStyle)?Y.ignoreInlineStyle:[]):(En=[],Dr=[]),L.immediateModify&&Oa(()=>!0),da=e;const t=()=>{const o=()=>{fc(),document.documentElement.setAttribute("data-darkreader-mode","dynamic"),document.documentElement.setAttribute("data-darkreader-scheme",L.mode?"dark":"dimmed"),sc()},a=()=>{Bt()};bc()?pn(document.querySelector(".darkreader--fallback")):hc()?kc({success:o,failure:a}):o()};if(document.head)t();else{if(!Rn){const a=_n("darkreader--fallback");document.documentElement.appendChild(a),a.textContent=mt(L,{strict:!0})}const o=new MutationObserver(()=>{document.head&&(o.disconnect(),t())});o.observe(document,{childList:!0,subtree:!0})}}function yc(){document.dispatchEvent(new CustomEvent("__darkreader__cleanUp")),pn(document.head.querySelector(".darkreader--proxy"))}const Tt=[];function Bt(){document.documentElement.removeAttribute("data-darkreader-mode"),document.documentElement.removeAttribute("data-darkreader-scheme"),wc(),pn(document.querySelector(".darkreader--fallback")),document.head&&($l(),pn(document.head.querySelector(".darkreader--user-agent")),pn(document.head.querySelector(".darkreader--text")),pn(document.head.querySelector(".darkreader--invert")),pn(document.head.querySelector(".darkreader--inline")),pn(document.head.querySelector(".darkreader--override")),pn(document.head.querySelector(".darkreader--variables")),pn(document.head.querySelector(".darkreader--root-vars")),pn(document.head.querySelector('meta[name="darkreader"]')),yc()),zt.forEach(n=>{pn(n.querySelector(".darkreader--inline")),pn(n.querySelector(".darkreader--override"))}),zt.clear(),Cn(jn.keys(),n=>pa(n)),Kn.clear(),Tl(),Cn(document.querySelectorAll(".darkreader"),pn),ze.forEach(n=>n.destroy()),ze.splice(0),Me.forEach(n=>n.destroy()),Me.clear(),qr&&qr.disconnect(),Tt.forEach(n=>n()),Tt.splice(0)}function wc(){U.clear(),Ar.clear(),la(),ba(),uc(),ul(),ri()}function _a(n){if(n=At(n),n=n.trim(),!n)return[];const r=[],e=Dt(n),t=Or(n,"{","}",e);let o=0;return t.forEach(a=>{const i=n.substring(o,a.start).trim(),l=n.substring(a.start+1,a.end-1);if(i.startsWith("@")){const s=i.search(/[\s\(]/),c={type:s<0?i:i.substring(0,s),query:s<0?"":i.substring(s).trim(),rules:_a(l)};r.push(c)}else{const s={selectors:xc(i),declarations:Sc(l)};r.push(s)}o=a.end}),r}function Or(n,r,e,t=[]){const o=[];let a=0,i;for(;i=no(n,a,r,e,t);)o.push(i),a=i.end;return o}function Dt(n){const r=n.indexOf("'")<n.indexOf('"'),e=r?"'":'"',t=r?'"':"'",o=Or(n,e,e);return o.push(...Or(n,t,t,o)),o.push(...Or(n,"[","]",o)),o.push(...Or(n,"(",")",o)),o}function xc(n){const r=Dt(n);return ro(n,",",r)}function Sc(n){const r=[],e=Dt(n);return ro(n,";",e).forEach(t=>{const o=t.indexOf(":");if(o>0){const a=t.indexOf("!important");r.push({property:t.substring(0,o).trim(),value:t.substring(o+1,a>0?a:t.length).trim(),important:a>0})}}),r}function ya(n){return"selectors"in n}function $c(n){const r=_a(n);return Ac(r)}function Ac(n){const r=[],e="    ";function t(i,l){ya(i)?a(i,l):o(i,l)}function o({type:i,query:l,rules:s},c){r.push(`${c}${i} ${l} {`),s.forEach(d=>t(d,`${c}${e}`)),r.push(`${c}}`)}function a({selectors:i,declarations:l},s){const c=i.length-1;i.forEach((m,v)=>{r.push(`${s}${m}${v<c?",":" {"}`)}),Cc(l).forEach(({property:m,value:v,important:w})=>{r.push(`${s}${e}${m}: ${v}${w?" !important":""};`)}),r.push(`${s}}`)}return wa(n),n.forEach(i=>t(i,"")),r.join(`
`)}function Cc(n){const r=/^-[a-z]-/;return[...n].sort((e,t)=>{var d,m;const o=e.property,a=t.property,i=((d=o.match(r))==null?void 0:d[0])??"",l=((m=a.match(r))==null?void 0:m[0])??"",s=i?o.replace(r,""):o,c=l?a.replace(r,""):a;return s===c?i.localeCompare(l):s.localeCompare(c)})}function wa(n){for(let r=n.length-1;r>=0;r--){const e=n[r];ya(e)?e.declarations.length===0&&n.splice(r,1):(wa(e.rules),e.rules.length===0&&n.splice(r,1))}}const xa=/url\(\"(blob\:.*?)\"\)/g;async function Ic(n){const r=[];$r(xa,n,1).forEach(t=>{const o=tn(t);r.push(o)});const e=await Promise.all(r);return n.replace(xa,()=>`url("${e.shift()}")`)}const Ec=`/*
                        _______
                       /       \\
                      .==.    .==.
                     ((  ))==((  ))
                    / "=="    "=="\\
                   /____|| || ||___\\
       ________     ____    ________  ___    ___
       |  ___  \\   /    \\   |  ___  \\ |  |  /  /
       |  |  \\  \\ /  /\\  \\  |  |  \\  \\|  |_/  /
       |  |   )  /  /__\\  \\ |  |__/  /|  ___  \\
       |  |__/  /  ______  \\|  ____  \\|  |  \\  \\
_______|_______/__/ ____ \\__\\__|___\\__\\__|___\\__\\____
|  ___  \\ |  ____/ /    \\   |  ___  \\ |  ____|  ___  \\
|  |  \\  \\|  |___ /  /\\  \\  |  |  \\  \\|  |___|  |  \\  \\
|  |__/  /|  ____/  /__\\  \\ |  |   )  |  ____|  |__/  /
|  ____  \\|  |__/  ______  \\|  |__/  /|  |___|  ____  \\
|__|   \\__\\____/__/      \\__\\_______/ |______|__|   \\__\\
                https://darkreader.org
*/

/*! Dark reader generated CSS | Licensed under MIT https://github.com/darkreader/darkreader/blob/main/LICENSE */
`;async function Fc(){const n=[Ec];function r(t,o){const a=document.querySelector(t);a&&a.textContent&&(n.push(`/* ${o} */`),n.push(a.textContent),n.push(""))}r(".darkreader--fallback","Fallback Style"),r(".darkreader--user-agent","User-Agent Style"),r(".darkreader--text","Text Style"),r(".darkreader--invert","Invert Style"),r(".darkreader--variables","Variables Style");const e=[];if(document.querySelectorAll(".darkreader--sync").forEach(t=>{Cn(t.sheet.cssRules,o=>{o&&o.cssText&&e.push(o.cssText)})}),e.length){const t=$c(e.join(`
`));n.push("/* Modified CSS */"),n.push(await Ic(t)),n.push("")}return r(".darkreader--override","Override Style"),n.join(`
`)}let Pt=!1;const Lc=(()=>{try{return window.self!==window.top}catch(n){return console.warn(n),!0}})();function Sa(n={},r=null){const e={...Ut,...n};if(e.engine!==ee.dynamicTheme)throw new Error("Theme engine is not supported.");_c(e,r,Lc),Pt=!0}function jc(){return Pt}function qt(){Bt(),Pt=!1}const Nr=matchMedia("(prefers-color-scheme: dark)");let Ot={themeOptions:null,fixes:null};function Vr(){Nr.matches?Sa(Ot.themeOptions,Ot.fixes):qt()}function zc(n={},r=null){n?(Ot={themeOptions:n,fixes:r},Vr(),ir?Nr.addEventListener("change",Vr):Nr.addListener(Vr)):(ir?Nr.removeEventListener("change",Vr):Nr.removeListener(Vr),qt())}async function Mc(){return await Fc()}const Rc=Vn;E.auto=zc,E.disable=qt,E.enable=Sa,E.exportGeneratedCSS=Mc,E.isEnabled=jc,E.setFetchMethod=Rc,Object.defineProperty(E,"__esModule",{value:!0})})})(Te,Te.exports);var La=Te.exports;const Be=en(La),ja=[{url:["*"],invert:[".jfk-bubble.gtx-bubble",".captcheck_answer_label > input + img",'span#closed_text > img[src^="https://www.gstatic.com/images/branding/googlelogo"]','span[data-href^="https://www.hcaptcha.com/"] > #icon',"img.Wirisformula"],css:`.vimvixen-hint {
    background-color: \${#ffd76e} !important;
    border-color: \${#c59d00} !important;
    color: \${#302505} !important;
}
#vimvixen-console-frame {
    color-scheme: light !important;
}
::placeholder {
    opacity: 0.5 !important;
}
#edge-translate-panel-body,
.MuiTypography-body1,
.nfe-quote-text {
    color: var(--darkreader-neutral-text) !important;
}
gr-main-header {
    background-color: \${lightblue} !important;
}
.tou-z65h9k,
.tou-mignzq,
.tou-1b6i2ox,
.tou-lnqlqk {
    background-color: var(--darkreader-neutral-background) !important;
}
.tou-75mvi {
    background-color: \${rgb(207, 236, 245)} !important;
}
.tou-ta9e87,
.tou-1w3fhi0,
.tou-1b8t2us,
.tou-py7lfi,
.tou-1lpmd9d,
.tou-1frrtv8,
.tou-17ezmgn {
    background-color: \${rgb(245, 245, 245)} !important;
}
.tou-uknfeu {
    background-color: \${rgb(250, 237, 218)} !important;
}
.tou-6i3zyv {
    background-color: \${rgb(133, 195, 216)} !important;
}
div.mermaid-viewer-control-panel .btn {
    background-color: var(--darkreader-neutral-background);
    fill: var(--darkreader-neutral-text);
}
svg g rect.er {
    fill: var(--darkreader-neutral-background) !important;
}
svg g rect.er.entityBox {
    fill: var(--darkreader-neutral-background) !important;
}
svg g rect.er.attributeBoxOdd {
    fill: var(--darkreader-neutral-background) !important;
}
svg g rect.er.attributeBoxEven {
    fill: var(--darkreader-selection-background);
    fill-opacity: 0.8 !important;
}
svg rect.er.relationshipLabelBox {
    fill: var(--darkreader-neutral-background) !important;
}
svg g g.nodes rect,
svg g g.nodes polygon {
    fill: var(--darkreader-neutral-background) !important;
}
svg g rect.task {
    fill: var(--darkreader-selection-background) !important;
}
svg line.messageLine0,
svg line.messageLine1 {
    stroke: var(--darkreader-neutral-text) !important;
}
div.mermaid .actor {
    fill: var(--darkreader-neutral-background) !important;
}
mitid-authenticators-code-app > .code-app-container {
    background-color: white !important;
    padding-top: 1rem;
}
iframe#unpaywall[src$="unpaywall.html"] {
    color-scheme: light !important;
}`,ignoreInlineStyle:[".sr-wrapper *",".sr-reader *",".diigoHighlight"]},{url:["*.abc.net.au"],invert:['[data-component="ABCNewsLogo"] *'],ignoreInlineStyle:['[data-component="ABCLogo"] *']},{url:["*.americanexpress.com"],css:`select[aria-labelledby="bankAccount-label"] > option {
    background-color: var(--darkreader-neutral-background) !important;
}`},{url:["*.archlinux.org"],invert:['img[src*="icons/"]','img[src="/svg/calendar.svg"]'],css:`.vector-sticky-pinned-container::after {
    background: inherit;
}`},{url:["*.bambulab.com"],css:`.bannerTextWrap .title,
.bannerTextWrap .subtitle {
    text-shadow: \${rgb(225, 212, 201)} 1px 1px 0px !important;
}`},{url:["*.bitrix24.ru"],invert:["#ws-canvas"]},{url:["*.cnrtl.fr"],css:`.tlf_cdefinition {
    background-color: \${rgb(255, 255, 0)} !important;
}
.tlf_cdomaine {
    background-color: \${rgb(255, 176, 96)} !important;
}
.tlf_csyntagme {
    background-color: \${rgb(192, 255, 192)} !important;
}`},{url:["*.crm*.dynamics.com"],css:`.ms-Label {
    color: var(--darkreader-neutral-text) !important;
}`},{url:["*.discogs.com"],css:`[class*="logo"] {
    filter: invert(100%) hue-rotate(180deg) !important;
}
.swiper-pagination-bullet {
    background: var(--swiper-pagination-bullet-inactive-color, #FFFFFF) !important;
}`},{url:["*.galaxus.de"],invert:["#logo"],css:`#sidebarMenu div {
    background: var(--darkreader-neutral-background) !important;
}`},{url:["*.gamer.com.tw"],css:`body {
    background-image: none !important;
}`},{url:["*.globo.com"],css:`.bar-scrubber .bar-scrubber-icon,
.bar-background .bar-fill-2 {
    background-color: var(--darkreader-neutral-text) !important;
}
.bar-background .bar-fill-1 {
    background-color: rgba(255, 255, 255, .3) !important;
}
.multicontent {
    background-color: var(--darkreader-neutral-background) !important;
    color: var(--darkreader-neutral-text) !important;
}
span.bstn-hl-summary {
    color: var(--darkreader-neutral-text) !important;
}
.glb-grid .tabela-body {
    background-color: var(--darkreader-neutral-background) !important;
}
.bstn-hl.with-photo::before {
    background-image: var(--bstn-hl-cover) !important;
}`,ignoreInlineStyle:[".poster__play-wrapper *"]},{url:["*.instructure.com"],invert:[".tox-edit-area"],css:`.css-vrgbjj-textArea {
    background: var(--darkreader-neutral-background) !important;
    color: var(--darkreader-neutral-text) !important;
}`},{url:["*.maricopa.edu"],css:`#background-content {
    background: var(--darkreader-neutral-background) !important;
}`},{url:["*.myworkday.com"],invert:[".WIF3",".WIF3:hover",".WIG3",".WIG3:hover",".WFD3 .WGL3",".WAJS",".WAJS:hover",".WJG3",".WHL3",".WKFP"]},{url:["*.service-now.com"],invert:[".highcharts-legend-item text",".palette-content.trees .tree_spacer",".palette-content.trees img.tree",".palette-content.trees img.wf-list-icon"],css:`.cm-s-snc span.cm-string {
    color: #cf947b !important;
}
.cm-s-snc span.cm-def {
    color: #60a4d8 !important;
}
.cm-s-snc span.cm-property {
    color: white !important;
}
.cm-s-snc_readonly span.cm-string {
    color: #cf947b !important;
}
#hierarchy-menu {
    background-color: #797774 !important;
}
.sn-ng-bsm svg {
    fill: #FFF !important;
}
.ui-refresh .btn-inline-form,
.ui-refresh .btn-inline-form-attached {
    background-color: #797774;
}
.node-outline {
    fill: #797774 !important;
}`},{url:["*.speedtestcustom.com"],css:`.stroke-primary {
    stroke: #003b5c !important;
}
.result-graph-svg {
    fill: #003b5c !important;
}`},{url:["*.webex.com"],css:`body {
    background: var(--darkreader-neutral-background) !important;
}
.wxp-chapter-bar-item-progress {
    background: var(--mds-color-decorative-violet-50) !important;
}`},{url:["*.wvu.edu"],css:`.bg-dark {
    background-color: rgba(var(--bs-dark-rgb), var(--bs-bg-opacity)) !important;
}
.bg-wvu-accent--blue {
    background-color: rgba(var(--bs-wvu-accent--blue-rgb), var(--bs-bg-opacity)) !important;
}
.bg-wvu-accent--blue-dark {
    background-color: rgba(var(--bs-wvu-accent--blue-dark-rgb), var(--bs-bg-opacity)) !important;
}
.bg-wvu-accent--blue-light {
    background-color: rgba(var(--bs-wvu-accent--blue-light-rgb), var(--bs-bg-opacity)) !important;
}
.bg-wvu-accent--old-gold {
    background-color: rgba(var(--bs-wvu-accent--old-gold-rgb), var(--bs-bg-opacity)) !important;
}
.bg-wvu-accent--sunset {
    background-color: rgba(var(--bs-wvu-accent--sunset-rgb), var(--bs-bg-opacity)) !important;
}
.bg-wvu-accent--yellow {
    background-color: rgba(var(--bs-wvu-accent--yellow-rgb), var(--bs-bg-opacity)) !important;
}
.bg-wvu-blue {
    background-color: rgba(var(--bs-wvu-blue-rgb), var(--bs-bg-opacity)) !important;
}
.bg-wvu-gold {
    background-color: rgba(var(--bs-wvu-gold-rgb), var(--bs-bg-opacity)) !important;
}
.bg-wvu-neutral--cream {
    background-color: rgba(var(--bs-wvu-neutral--cream-rgb), var(--bs-bg-opacity)) !important;
}
.bg-wvu-neutral--off-white {
    background-color: rgba(var(--bs-wvu-neutral--off-white-rgb), var(--bs-bg-opacity)) !important;
}
.bg-wvu-neutral--warm-gray-dark {
    background-color: rgba(var(--bs-wvu-neutral--warm-gray-dark-rgb), var(--bs-bg-opacity)) !important;
}
.bg-wvu-neutral--warm-gray-light {
    background-color: rgba(var(--bs-wvu-neutral--warm-gray-light-rgb), var(--bs-bg-opacity)) !important;
}
.bg-wvu-neutral--warm-gray-medium {
    background-color: rgba(var(--bs-wvu-neutral--warm-gray-medium-rgb), var(--bs-bg-opacity)) !important;
}
.bg-wvu-neutral--tan {
    background-color: rgba(var(--bs-wvu-neutral--tan-rgb), var(--bs-bg-opacity)) !important;
}
.btn-outline-wvu-blue,
.text-wvu-accent--blue,
.text-wvu-accent--blue-dark,
.text-wvu-accent--old-gold,
.text-wvu-blue,
.text-wvu-neutral--warm-gray-dark {
    background-color: var(--bs-body-bg);
}
.text-wvu-accent--blue {
    color: rgba(var(--bs-wvu-accent--blue-rgb), var(--bs-text-opacity)) !important;
}
.text-wvu-accent--blue-dark {
    color: rgba(var(--bs-wvu-accent--blue-dark-rgb), var(--bs-text-opacity)) !important;
}
.text-wvu-accent--blue-light {
    color: rgba(var(--bs-wvu-accent--blue-light-rgb), var(--bs-text-opacity)) !important;
}
.text-wvu-accent--old-gold {
    color: rgba(var(--bs-wvu-accent--old-gold-rgb), var(--bs-text-opacity)) !important;
}
.text-wvu-accent--sunset {
    color: rgba(var(--bs-wvu-accent--sunset-rgb), var(--bs-text-opacity)) !important;
}
.text-wvu-accent--yellow {
    color: rgba(var(--bs-wvu-accent--yellow-rgb), var(--bs-text-opacity)) !important;
}
.text-wvu-blue {
    color: rgba(var(--bs-wvu-blue-rgb), var(--bs-text-opacity)) !important;
}
.text-wvu-gold {
    color: rgba(var(--bs-wvu-gold-rgb), var(--bs-text-opacity)) !important;
}
.text-wvu-neutral--cream {
    color: rgba(var(--bs-wvu-neutral--cream-rgb), var(--bs-text-opacity)) !important;
}
.text-wvu-neutral--off-white {
    color: rgba(var(--bs-wvu-neutral--off-white-rgb), var(--bs-text-opacity)) !important;
}
.text-wvu-neutral--warm-gray-dark {
    color: rgba(var(--bs-wvu-neutral--warm-gray-dark-rgb), var(--bs-text-opacity)) !important;
}
.text-wvu-neutral--warm-gray-light {
    color: rgba(var(--bs-wvu-neutral--warm-gray-light-rgb), var(--bs-text-opacity)) !important;
}
.text-wvu-neutral--warm-gray-medium {
    color: rgba(var(--bs-wvu-neutral--warm-gray-medium-rgb), var(--bs-text-opacity)) !important;
}
.text-wvu-neutral--tan {
    color: rgba(var(--bs-wvu-neutral--tan-rgb), var(--bs-text-opacity)) !important;
}
.wvu-overflow-hidden {
    color: var(--bs-body-color);
}`},{url:["01net.com"],css:`html,
body {
    color: \${#090702} !important;
}`},{url:["10fastfingers.com"],css:`#speedtest-main .hide-time {
    color: transparent !important;
}
#inputfield {
    background: var(--darkreader-neutral-background) !important;
    color: var(--darkreader-neutral-text) !important;
}
body,
.container-modified > .row,
#practice-main,
#top1000-index-container,
#text-practice,
#content-bg {
    background: var(--darkreader-neutral-background) !important;
}
#main-content-trenner {
    background: var(--darkreader-neutral-background) !important;
    border-bottom: 1px solid rgb(151, 141, 127) !important;
}`},{url:["10minutemail.com"],css:`#main_content {
    background-image: none !important;
}`},{url:["123-3d.nl","123accu.nl","123inkt.nl","123led.nl","123schoon.nl"],css:`.main-panel-left,
.main-panel-right {
    background: var(--darkreader-neutral-background) !important;
}`},{url:["123mathe.de"],invert:[".entry-content img"],css:`body,
.post-inner,
ul.sub-menu {
    background-color: var(--darkreader-neutral-background) !important;
}
ul.sub-menu::after {
    border-bottom-color: var(--darkreader-neutral-background) !important;
}
.progress-wrap {
    box-shadow: var(--darkreader-neutral-background) 0px 0px 0px 3px inset !important;
}`},{url:["1337x.st","1337x.to","x1337x.eu","x1337x.se","x1337x.ws"],css:`.torrent-tabs .tab-nav {
    background-color: var(--darkreader-neutral-background) !important;
    background-image: none !important;
    border-bottom-color: var(--darkreader-neutral-background) !important;
}`},{url:["1917.com"],css:`body {
    background-color: var(--darkreader-neutral-background) !important;
    background-image: none !important;
}`},{url:["1fichier.com"],css:`body {
    background-image: none !important;
}`},{url:["2700chess.com"],invert:[".cg-wrap piece.queen.black",".cg-wrap piece.bishop.black",".cg-wrap piece.rook.black",".cg-wrap piece.knight.black",".cg-wrap piece.pawn.black"]},{url:["2gis.*"],invert:["#map",'path[d^="M34.8"]',"._oow7vi",'path[d^="M15.759"]'],css:`a,
abbr,
acronym,
address,
applet,
article,
aside,
audio,
b,
big,
blockquote,
body,
canvas,
caption,
center,
cite,
code,
dd,
del,
details,
dfn,
div,
dl,
dt,
em,
embed,
fieldset,
figcaption,
figure,
footer,
form,
h1,
h2,
h3,
h4,
h5,
h6,
header,
hgroup,
html,
i,
iframe,
img,
ins,
kbd,
label,
legend,
li,
main,
mark,
menu,
nav,
object,
ol,
output,
p,
pre,
q,
ruby,
s,
samp,
section,
small,
span,
strike,
strong,
sub,
summary,
sup,
table,
tbody,
td,
tfoot,
th,
thead,
time,
tr,
tt,
u,
ul,
var,
video {
    color: var(--darkreader-neutral-text) !important;
}
div[style^="--bg-color"] {
    --bg-color: var(--darkreader-neutral-background) !important;
}
div[style="transform:rotateX(0deg)"] > svg[width="38"] path {
    fill: \${black} !important;
}
button[data-hamburger] span {
    background-color: \${black} !important;
}`,ignoreInlineStyle:['a[href="/"] > svg *']},{url:["3.basecamp.com"],css:`body,
.nav__main {
    background-color: \${white};
}
@media screen and (min-width: 768px) {
    .panel--perma,
    .panel--project {
        box-shadow: rgba(0, 0, 0, 0.05) 0px -1px 10px, rgba(0, 0, 0, 0.1) 0px 1px 4px, rgb(24, 26, 27) 0px 10px 30px;
    }
}`},{url:["300gospodarka.pl","300polityka.pl"],invert:["#logo",'img[alt="300Gospodarka"]','img[alt="Zespół 300Gospodarki"]']},{url:["350.org","map.350.org"],invert:[".dark\\:bg-gray-700",".dark\\:bg-gray-700::after",".dark\\:text-gray-300",".mapboxgl-canvas",".mapboxgl-ctrl-compass > .mapboxgl-ctrl-icon",".mapboxgl-ctrl-logo",".mapboxgl-marker"],css:"mapbox-search-box > input {\n    --darkreader-bg--boxShadow: 0 0 10px 2px ${rgba(0, 0, 0, 0.05)}, 0 0 6px 1px ${rgba(0, 0, 0, 0.1)}, 0 0 0 1px ${rgba(0, 0, 0, 0.1)} !important;\n}"},{url:["37.com"],invert:[".logo37"]},{url:["3dmark.com"],invert:[".logo"]},{url:["40ton.net"],invert:[".td-main-logo"]},{url:["4t-niagara.com"],css:`.download_link > h3,
.buy_link > h3 {
    color: \${#88c1ff} !important;
}
.download_link li,
.buy_link li {
    color: \${white} !important;
}`},{url:["9game.cn"],invert:[".logo9game"]},{url:["a11ywithlindsey.com"],invert:[".logo"],css:`:root {
    --off-white: var(--darkreader-neutral-background) !important;
}`},{url:["aad.org"],invert:[".header-AAD-logo"]},{url:["abandonia.com"],css:`.alt1G2 {
    background-image: none !important;
}
.alt2G2 {
    background-image: none !important;
}`},{url:["abcnews.go.com"],invert:[".navLogo","#sections","#search","#notifications"]},{url:["abiturma.de"],invert:["div.formula","amp-img.latex-inline",'img[src^="/assets/compiled-latex/"]']},{url:["ableton.com"],invert:[".main-nav__logo",".main-footer__basics__logo",".main-footer__secondary__signature__logo"],css:`.body-text--manual figure img {
    background-color: #DCDAD8 !important;
}`},{url:["about.gitlab.com"],invert:["div.customer-logos__companies a"],css:`.progressbar {
    background: black;
}`},{url:["academy.abeka.com"],invert:[".logo img",".center-align img"]},{url:["academy.dqlab.id"],invert:[".menu img"]},{url:["access.ing.de"],css:`.tile__info {
    background-color: #fff !important;
}`},{url:["access.wgu.edu","my.wgu.edu"],invert:['img[alt="WGU Logo"]',".nav-hamburger"]},{url:["accessiblepalette.com"],invert:[".swatch .hex"],ignoreInlineStyle:[".swatch"]},{url:["accesswire.com"],invert:[".v2-nav-logo"]},{url:["account.live.com"],invert:[".ms-Grid-col.ms-sm8.ms-lg4",".ms-Grid-col.ms-sm4.ms-hiddenMdDown.pullout-textwrap",".ms-Grid-col.ms-sm2 img",".pullout-link-text",".pullout-icon:not(.ms-Icon--SkypeCircleCheck)",".pullout-textwrap span"],css:`img[class="ShowMoreLoading"] {
    filter: invert(93.7%) hue-rotate(180deg) contrast(90.6%) !important;
}`},{url:["account.microsoft.com/profile"],invert:['.ms-StackItem div div img[src*="svg?n"]']},{url:["account.orchid.com"],invert:[".walletconnect-qrcode__image"]},{url:["account.proton.me","account.protonvpn.com"],css:`.qr-code {
    border: 5px solid white !important;
}`,ignoreInlineStyle:[".logo *",".qr-code *"]},{url:["account.ui.com"],css:`div[class^="Toggle-module_switcher"] {
    background-color: var(--darkreader-neutral-text) !important;
}
input[class^="Toggle-module_input"] {
    background-color: initial;
}
div[class^="Modal-module_content"] form > div > canvas {
    border: 5px solid white !important;
}`},{url:["account.xiaomi.com"],css:`.mi-profile-layout__profile {
    background-image: none !important;
}`},{url:["accounts.fedoraproject.org"],invert:[".navbar-brand"]},{url:["accounts.google.com"],invert:['img[src$="signin_tapyes.gif"]'],css:`#countryList div[role="option"][data-value] > div > div > div[style] {
    background-image: url('//ssl.gstatic.com/i18n/flags/48x32/nobevel/66bdb7a1bbbdbf86a67de382fac49ecc/flags.png') !important;
}`},{url:["accounts.hetzner.com","dns.hetzner.com","konsoleh.hetzner.com","robot.hetzner.com"],invert:[".top-bar-link > img",".d-flex > img","#panel_dropdown_btn > img","#user_dropdown_btn > img"]},{url:["accounts.spotify.com"],invert:[".spotify-logo"]},{url:["accounts.zoho.com"],invert:["div#product_img.tfa_totp_mode","span.zoho_logo",".zwHDots"]},{url:["accuweather.com"],invert:[".allergy-icon",".icon-search",'img[src$="arrow-right-black.svg"]'],css:`.today-label,
.y-axis-label,
.x-axis-day-label,
.x-axis-month-label {
    fill: var(--darkreader-neutral-text) !important;
}`},{url:["acer.com"],invert:[".firstHeader .logos"],css:`.contSectionBen img {
    filter: brightness(50%) sepia(40%) !important;
}
.contSectionBen .textOverBen {
    position: inherit !important;
}`},{url:["acmicpc.net"],invert:[".cm-s-lucario.CodeMirror"]},{url:["acorn.utoronto.ca"],css:`.acorn-classic.page-container .academic-history .sessionHeader,
.acorn-classic.page-container .academic-history .credit-earned-section,
.acorn-classic.page-container .academic-history .average-section,
.acorn-classic.page-container .academic-history .courses,
.acorn-classic.page-container .academic-history .coursesHeader,
.acorn-classic.page-container .academic-history .academic-history-report .gpa-listing,
.acorn-classic.page-container .academic-history-recent table .emph {
    color: var(--darkreader-neutral-text) !important;
}`},{url:["action.com"],css:`.bg-black {
    background-color: transparent !important;
}`},{url:["actioncardapp.com"],invert:[".logo"]},{url:["ad.nl"],css:`.instanews-page-main-content {
    color: var(--darkreader-neutral-text) !important;
}`},{url:["ada.org"],invert:[".logo"]},{url:["adata.com"],invert:[".logo-nav"]},{url:["addic7ed.com"],invert:[".tablecorner img"],css:`.NewsTitle {
    background-color: rgb(0, 62, 81);
}
.language {
    background-color: rgba(7, 73, 89);
}`},{url:["addons.mozilla.org"],invert:['div[class="Rating Rating--small"]',"img.SecondaryHero-module-icon"],ignoreImageAnalysis:[".Icon-youtube","span.Permission-description::before"]},{url:["adguard-dns.io"],invert:[".animation__video",".footer__logo",".header__logo",".map__point-icon",".map__point-city",".servers-info__queries"],css:`.animation__video {
    z-index: 0 !important;
}
.map__point-city,
.servers-info__map {
    filter: invert(1) hue-rotate(120deg) brightness(250%) !important;
}`},{url:["adguard-vpn.com"],invert:[".header__logo"]},{url:["adguard.com"],invert:["a.header__logo","svg.reviews__icon-topic",".article__section--list-ico .md__list .md__img",".article__content--title-ico .article__section .md__title .md__img",".p-header-logo.p-header-logo--image img",".icon--gray-chrome",".icon--gray-edge",".icon--gray-opera",".icon--gray-firefox"],ignoreImageAnalysis:[".icon--gray-opera",".icon--gray-firefox"]},{url:["admin.google.com"],invert:[".qV6brd img"]},{url:["admin.migadu.com"],css:`.container {
    background-image: none !important;
}`},{url:["afterpay.com"],invert:['div[class^="navigation_logo"]']},{url:["aftership.com"],css:`#sapper div.multi-track-input {
    background-color: var(--darkreader-neutral-background) !important;
}`},{url:["aftonbladet.se"],css:`a[href$="plus_plusikon"] > :nth-child(1) {
    color: \${white};
}`},{url:["ai2.appinventor.mit.edu"],css:`.blocklyDraggable text {
    color: var(--darkreader-neutral-text) !important;
}`},{url:["aiming.pro"],invert:["#left_side_bar > div.logo > a > img"]},{url:["airbnb.*","airbnb.*.*"],invert:['input[name="categoryScroller"] + div img']},{url:["akademy.kde.org","edu.kde.org","dot.kde.org","forum.kde.org"],css:`body,
#footer {
    background: \${rgb(225, 227, 228)} !important;
}`},{url:["akasa.com"],invert:[".logo"]},{url:["akcemed.pl"],invert:[".td-main-menu-logo",".footer-logo-wrap"]},{url:["akinator.com"],invert:[".bubble",".bubble-body"],css:`.bubble {
    background-color: \${black} !important;
    color: \${white} !important;
}
.bubble-body {
    background-color: \${white} !important;
    color: \${black} !important;
}
.question-number {
    color: \${white} !important;
}`},{url:["alamy.com"],css:`.bg-opacity-0 {
    background-color: transparent !important;
}`},{url:["aldi.us"],ignoreInlineStyle:[".company-logo-content *"]},{url:["alertus.com"],invert:[".Header-branding",'[src^="https://images.squarespace-cdn.com"]']},{url:["alexpage.de"],css:`#page {
    background-color: var(--darkreader-neutral-background) !important;
    background-image: none !important;
}`},{url:["alfies.at"],css:`[class*="searchbox"] * {
    background-color: var(--darkreader-neutral-background) !important;
}`},{url:["alfredapp.com"],invert:['[src*="macworld.png"]','[src*="tuaw.png"]','[src*="eddy_awards.png"]','[src*="appstorm.png"]','[src*="tnw.png"]','[src*="search.jpg"]','[src*="clipboard.jpg"]','[src*="control.jpg"]','[src*="konami-code.png"]','[src*="oatmeal404.jpg"]','[src*="query-history.png"]']},{url:["algorithm-wiki.org"],invert:[".thumbimage"],css:`.thumbimage {
    background-color: \${rgb(1, 4, 5)} !important;
    border-color: \${rgb(48, 54, 57)} !important;
}`},{url:["aliexpress.*","aliexpress.*.*","*.aliexpress.*"],invert:[".group-title-img",".EYoOU"],css:`a[class^="SnowOrderDetails_Product__imageWrap"],
div[class^="SnowOrderList_ProductImage__imageWrapper"] {
    background-color: #fff !important;
}
.comet-icon[class*="rating--top"] {
    color: \${yellow} !important;
}
._2E4Wz {
    background-color: \${yellow} !important;
}`,ignoreInlineStyle:['svg[class^="ali-kit_Rating__star"]']},{url:["alipay.com"],invert:["#J_logoHomeUrl",".global-logo"],css:`.qrcode-detail-img {
    background-color: white !important;
}
.authcenter-background {
    z-index: 0 !important;
}
.authcenter-head,
.authcenter-foot,
.authcenter-body-login,
.authcenter-body-logo > a {
    z-index: 1 !important;
}`},{url:["aljazeera.com"],invert:["#site-logo > img",".navbar-brand > img","#navbar-hamburger-mobile"]},{url:["allconnect.com"],invert:[".mininav-header__logo-image"]},{url:["allegrolokalnie.pl"],invert:[".mlc-masthead__branding",".mlc-site-footer__branding"]},{url:["allestoringen.*","downdetector.*","downdetector.*.*","xn--allestrungen-9ib.*"],invert:["#map_container","#map-card"]},{url:["allmacworld.com"],invert:[".logo",".tie-appear.post-thumbnail",'.tie-appear.post-thumbnail > [href="https://allmacworld.com/blocs-free-download/"]','.tie-appear.post-thumbnail > [href="https://allmacworld.com/waves-v11-complete-download-free/"]','.tie-appear.post-thumbnail > [href="https://allmacworld.com/3dequalizer-4-for-mac-free-download/"]','.tie-appear.post-thumbnail > [href="https://allmacworld.com/sylenth1-for-mac-free-download/"]','.tie-appear.post-thumbnail > [href="https://allmacworld.com/synapse-audio-legend-free-download/"]']},{url:["allrecipes.com"],invert:[".checkbox-list-checkmark::before",".external-link-icon",".icon-ellipsis > svg",".icon-email-outline",".icon-search",".icon-share-favorite",".rating-bar-wrapper",'img[src="/img/profile.png"]']},{url:["allspice.io"],invert:['[data-mesh-id="SITE_HEADERinlineContent"] img']},{url:["alphacoders.com"],invert:[".main",".main > *","#page_header","#page_header > *"]},{url:["alphashooters.com"],css:`.site-container {
    --darkreader-bg--site-container-background: var(--darkreader-neutral-background) !important;
}`},{url:["alpine.com"],invert:[".alpsalpineLogo"]},{url:["alt.hololive.tv"],invert:['video[src*="bg.mp4"]','video[src*="first.mp4"]','img[src*="logo_2line_gradient_color.svg"]',"svg"]},{url:["altlinux.org"],invert:[".mw-wiki-logo"]},{url:["amalgamatedbank.com"],css:`.page-banner .banner-image {
    z-index: auto !important;
}`},{url:["amap.com"],invert:[".amap-info",".amap-menu",'.imgfeed[style*="place_default.jpg"]',".logo-img","#subway-svg","#themap",".title01-logo > a > img"]},{url:["amazingmarvin.com"],invert:[".header-title"]},{url:["amazon.*","amazon.*.*"],invert:["#banner-image","#ordersContainer .a-box.order-attributes img","div.a-section.vse-lb-video-metadata","div.vse-video-content","div.vse-video-title","div.vse-video-labels","i.a-icon-search",'img[src*="smile-logo"]',".a-icon-arrow.a-icon-small.arrow-icon",".a-icon-close",".a-icon-extender-expand",".a-icon-popover",".a-link-nav-icon",".currencyINR",".ssf-share-trigger",".utility-bar-icon"],css:`.banner-border {
    background-color: \${white} !important;
    background-image: none !important;
}
div.milestone.notReached .milestone-marker::before {
    border-color: var(--darkreader-neutral-text);
}
span.milestone-bar {
    z-index: 0;
}
span.milestone-bar_foreground {
    background-color: #4DC2B4;
}
span.milestone-bar_background {
    background-image: linear-gradient(var(--darkreader-neutral-text) 40%, #181a1b00 0px);
}
[class*="image-display"],
.a-image-container img,
[class*="imageContainer"] img,
[class*="productImageContainer"] *,
[data-pf=DESKTOP] [class*="img"] * {
    mix-blend-mode: unset !important;
}
.bg-no-repeat .color-squid-ink-dark {
    color: #161e2d !important;
}`,ignoreInlineStyle:[".s-color-swatch-inner-circle-fill"]},{url:["amazon.cn"],invert:["#nav-logo"],css:`#nav-main,
.nav-search-scope {
    background-image: none !important;
}`},{url:["ametek.com"],invert:[".ametek_logo"]},{url:["amfam.com"],invert:[".SiteHeader__logo-img"]},{url:["amtrak.com"],invert:[".farefinder-dash",'img[alt="Click to add the number travelers and discount types"]','img[alt="Passenger"]','img[alt="Switch departure and arrival stations."]'],css:`.hero-banner-and-slides .full-width-img,
.hero-banner-and-slides .hero-banners__img-container {
    z-index: auto !important;
}`},{url:["androidcentral.com"],invert:[".site-logo"],css:`.lazy-loaded {
    mix-blend-mode: normal !important;
}`},{url:["androidpolice.com"],invert:[".header-logo svg"]},{url:["ang.pl"],css:`body {
    background-image: none !important;
}`},{url:["angrymetalguy.com"],invert:[".plbrand"],css:`.thepage {
    background-color: \${white} !important;
}
.content-pad {
    background-color: \${white} !important;
}`},{url:["anibrain.ai"],ignoreInlineStyle:['div[class^="style__HexagonDiv"] *','svg[class^="styles__SvgWithShadow"] *']},{url:["anilibria.tv"],css:`#oframeanilibriaPlayer pjsdiv:nth-child(12) pjsdiv:nth-child(2) pjsdiv,
#oframeanilibriaPlayer pjsdiv:nth-child(14) pjsdiv:nth-child(2) pjsdiv {
    background-color: var(--darkreader-neutral-text) !important;
}`},{url:["anilist.co"],css:`:root {
    --color-background: 39,44,56 !important;
    --color-foreground: 31,35,45 !important;
    --color-foreground-blue: 25,29,38 !important;
    --color-foreground-blue-dark: 19,23,29 !important;
    --color-foreground-grey: 25,29,38 !important;
    --color-foreground-grey-dark: 16,20,25 !important;
    --color-text: 159,173,189 !important;
    --color-text-light: 129,140,153 !important;
    --color-text-lighter: 133,150,165 !important;
}`},{url:["ankiweb.net"],css:`.sidebar {
    background-color: var(--darkreader-neutral-background) !important;
}`},{url:["annas-archive.org"],css:`.header-inner div[style$="rgba(0, 0, 0, 0.41) 0px 0px 3px;"] {
    background-color: var(--darkreader-neutral-text) !important;
}`},{url:["anon-co-eu.com"],invert:['img[alt="Anon-Co Radios Europe"]']},{url:["anon-co.com"],invert:['img[alt="Anon-Co"]']},{url:["answers.opencv.org"],css:`#header,
body,
#question-list,
.short-summary,
#ground {
    background-image: none !important;
}`},{url:["answers.unity.com"],ignoreImageAnalysis:["header.section-header div.shard::before"]},{url:["antagning.se"],invert:[".a-logo",".burger",".uhrlogo",".expand-icon",".favourite-active"],css:`select {
    background-color: var(--darkreader-neutral-background) !important;
}`},{url:["antistorm.eu"],invert:["#map-area","#map-controls-area","#controlPlayPauseIcon","#meteogram_temperature","#meteogram_dewPoint","#meteogram_cloudCover","#meteogram_precipitation","#meteogram_precipitationProbability","#meteogram_pressure","#meteogram_windSpeed",'img[src*="data:image/png;base64,iVBORw"]']},{url:["antywirus-nod32.pl"],css:`.module.infolinia {
    background-image: none !important;
}`},{url:["anytype.io"],ignoreImageAnalysis:[".img.home"]},{url:["aol.com"],invert:[".logo"]},{url:["aosogrenci.anadolu.edu.tr"],css:`.welcome {
    background-image: none !important;
}`},{url:["apartmentlist.com"],invert:['div[class*="LogoContainer"]','div[class*="MenuButton"]']},{url:["apartments.com"],invert:[".logo"]},{url:["apclassroom.collegeboard.org"],invert:[".overview-icon svg",".Zoom--expander svg","svg.icon--xmark",".RI_header__button svg.svg-icon"],css:`.standalone_image img {
    background-color: white;
}`},{url:["api.kde.org"],invert:[".center",".image"],css:`.memdoc,
.memproto {
    background-image: initial !important;
}`},{url:["apidocs.snyk.io/"],invert:["#api-docs"]},{url:["apie.lrt.lt"],invert:['img[alt="LRT"]','button[class^="Burger_burger"]']},{url:["apkpure.com"],invert:['img[src$="gp_logo.png"]']},{url:["apnews.com"],invert:[".hamburger-box",".sticky-part > div svg",".LeftRail > div svg"]},{url:["apolloautomation.com"],invert:["button.pd-floating-icon__open > img","div.rating"],css:`.chat-toggle > svg > path {
    fill: var(--darkreader-neutral-text) !important;
}`},{url:["app.betrybe.com"],invert:["section.quiz-result__template summary","section.quiz-result__template summary .block-code"],css:`.home-projects details,
.header button,
.header a,
.module-index-content {
    background-color: transparent !important;
}
.header button:hover,
.header a:hover,
.module-index-content summary:active,
.quiz-question label {
    background-color: var(--darkreader-neutral-background) !important;
}
.quiz-question label p {
    color: rgb(180, 200, 255) !important;
}
.quiz-question__alternatives label:hover,
.quiz-question__alternatives input[type=radio]:checked + label {
    background: initial !important;
}`},{url:["app.circleci.com"],invert:['div[role="button"] svg[viewBox="0 0 300 100"]']},{url:["app.codesignal.com"],css:`.monaco-editor .cursor {
    background-color: var(--darkreader-selection-text) !important;
}`},{url:["app.corellium.com"],invert:[".brand",".logo"]},{url:["app.daily.dev"],ignoreInlineStyle:[".h-logo *"]},{url:["app.datadoghq.com"],invert:[".HostMap-canvas"],css:`.log-dt-event.active,
.log-dt-event.active:hover,
.log-dt-event:hover {
    background-color: rgb(37, 45, 58) !important;
}
svg text.time_cursor {
    fill: \${black} !important;
}`},{url:["app.estuda.com"],invert:['img[src*="latex"]']},{url:["app.getport.io"],css:`.ring-solid-gray-200 {
    --tw-ring-color: var(--darkreader-selection-text) !important;
    --tw-ring-opacity: 1;
}
.ring-1 {
    box-shadow: var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 --darkreader-selection-text) !important;
}`},{url:["app.grammarly.com"],css:`use.valueCircle_f6otssy {
    stroke: url(#pb-gradient-0);
}
:root {
    --highlight-bg: \${rgba(0, 0, 0, 0.2)};
}
.alerts-clarity {
    --highlight-bg: \${rgba(57, 93, 207, 0.2)};
}
.alerts-engagement {
    --highlight-bg: \${rgba(29, 203, 162, 0.2)};
}
.alerts-correctness {
    --highlight-bg: \${rgba(255, 69, 103, 0.2)};
}
.alerts-delivery {
    --highlight-bg: \${rgba(124, 58, 172, 0.2)};
}
[class*="-alerts-markSelectedHigh"],
span[class*="markSelectedFocused"] {
    background-color: var(--highlight-bg) !important;
}
[class*="-navigation-counterWrapper"] [class*="-navigation-counterContent"],
[class*="-paidview-counter"] [class*="-paidview-counterContent"] {
    fill: rgb(0, 0, 0, .9);
}`,ignoreInlineStyle:['use[class*="valueCircle_"]']},{url:["app.intercom.com"],css:`.embercom-prosemirror-composer-callout[style*="background-color: #e8e8e880"] {
    background-color: \${#e8e8e880} !important;
}
.embercom-prosemirror-composer-callout[style*="border-color: #73737633"] {
    border-color: \${#73737633} !important;
}`,ignoreInlineStyle:[".embercom-prosemirror-composer-callout"]},{url:["app.kognity.com"],invert:["img.KogCalculator",'.content-image-figure > img[src*="png"]'],css:`body,
.KogDashboard-insideLoader {
    background: none var(--darkreader-neutral-background) !important;
}
img:not([src*="png"]):not([src*="svg"]) {
    background-color: white !important;
}`},{url:["app.misaka.io"],invert:[".login-cover",'img[alt="logo"]']},{url:["app.mysms.com"],css:`.message a {
    color: grey;
}`},{url:["app.roll20.net"],invert:[".sheet-hp",".sheet-ac",".sheet-textbox",".sheet-name-container",".sheet-attributes-container",".sheet-attr-container button",".sheet-hlabel-container",".sheet-vitals",".sheet-init button",".sheet-spell-level",".sheet-spell-level input",".sheet-textbox .sheet-options",".sheet-speed input",".sheet-part select",".sheet-resources .sheet-subcontainer",".sheet-resources .sheet-label",".sheet-subcontainer .sheet-top",".sheet-textbox .sheet-label",".sheet-attack .sheet-options"],css:`.sheet-attributes-container,
.sheet-init,
.sheet-speed,
.sheet-trait,
.sheet-part,
.sheet-spell-level,
.sheet-details {
    color: \${white} !important;
}`},{url:["app.standardnotes.org"],invert:['[aria-label="Challenge modal"] > svg > circle:first-child','input[id^="react-tag-"]'],css:`search-options svg {
    fill: var(--darkreader-neutral-text) !important;
}`,ignoreInlineStyle:["search-options svg"]},{url:["app.tandem.net"],invert:['img[src="/static/icons/apple.svg"]',"[data-tip-id=LanguageLevelIndicator] button div span"],css:`div[class*="styles_qrCode"] {
    background-color: white !important;
}`},{url:["app.timelyapp.com"],invert:[".Clock__clock_css_icon___LfBr6",".Clock__stopwatch___2G-CB"],css:`.Day__container___1Fpnl.Day__showBackground___3CXnw {
    background-image: none;
}`},{url:["app.traderepublic.com"],ignoreInlineStyle:["#chartPriceLine"]},{url:["app.univerusrec.com"],css:`html {
    background-color: #181a1b !important;
}
input,
select,
textarea {
    color: --darkreader-selection-text !important;
}`},{url:["app.ynab.com"],css:`.ynab-checkbox-button-square {
    color: transparent;
}`},{url:["app.youneedabudget.com"],css:`[data-darkreader-inline-fill] {
    fill: \${black} !important;
}`},{url:["apple.com"],invert:[".ac-slider-ax-track",".controls-progress-indicator",".rf-ccard-content-info"]},{url:["apple.com/leadership/"],ignoreImageAnalysis:["*"]},{url:["apple.com/macos/sonoma/"],invert:[".section-hero-lockup"]},{url:["apple.com/shop/"],invert:[".as-localnav.as-localnav-scrim",".localnav-title",".as-localnav-menucta",".as-localnav-browseall-menucta",".as-localnav-browseall-list-title",".as-localnav-browseall-listitem"],css:`#globalnav {
    --globalnav-background: var(--darkreader-neutral-background) !important;
}`},{url:["apps.apple.com","support.apple.com"],css:`#globalnav {
    --globalnav-background: var(--darkreader-neutral-background) !important;
}`},{url:["apps.microsoft.com"],invert:[".empty-star"]},{url:["aprs-map.info"],invert:['img[src*="tile.openstreetmap.org/"]','img[src*="tile.opentopomap.org/"]']},{url:["aprs.fi","*.aprs.fi"],invert:['img[src*="maps.googleapis.com/maps/vt"]','img[src*="tile.openstreetmap.org"]'],css:`#panel {
    background-image: none !important;
}`},{url:["apteka.ru"],invert:['ymaps[class$="ground-pane"]',".icon--logo"]},{url:["aras.com"],css:`.alternate_color.banner__title.display-2,
.alternate_color.banner__subtitle.display-5 {
    color: var(--darkreader-neutral-text) !important;
}
.banner__title.display-2,
.banner__subtitle.display-5 {
    color: \${white} !important;
}`},{url:["archenoah-kelkheim.de"],ignoreImageAnalysis:[".wsite-header"]},{url:["architekturaibiznes.pl"],invert:[".icon-section","a span.image-rwd-dzial-logo"]},{url:["archive.org"],invert:["p + fieldset a svg",".search-field svg",".ia-wordmark"],css:`#search-input {
    color: var(--darkreader-neutral-background) !important;
}`},{url:["arelion.com"],invert:["div.tc-navigation-main__text","div.tc-navigation-main__buttons","img.tc-testimonial-expand__logo"]},{url:["ario-player.sourceforge.net"],invert:["div.header"],css:`div.main,
#menu li a,
#menu li {
    background-image: none !important;
}`},{url:["ars.particify.de"],css:`body {
    background-color: var(--darkreader-neutral-background) !important;
}
.mat-mini-fab {
    box-shadow: none !important;
}
.mat-card {
    background-color: #{gray} !important;
    box-shadow: none !important;
}
.mat-chip {
    background-color: var(--darkreader-neutral-background) !important;
    color: var(--darkreader-neutral-text) !important;
}`},{url:["arstechnica.com"],css:`.listing,
.video-thumbnail {
    background-blend-mode: initial !important;
}
.article-single figure img {
    mix-blend-mode: initial !important;
}`},{url:["artofproblemsolving.com"],invert:[".latex",".latexcenter"]},{url:["artsy.net"],css:`[aria-checked="false"][role="checkbox"] svg path {
    fill: transparent !important;
}`,ignoreInlineStyle:['[role="checkbox"] svg *']},{url:["arxiv.org"],css:`.abstract {
    background-color: transparent !important;
}`},{url:["asahichinese-j.com"],invert:["#HeaderInner img",".SocialNav",".Tag li a"],css:`.Tag li a {
    color: \${grey} !important;
}
a,
.LastUpdated,
.Lead {
    color: var(--darkreader-neutral-text) !important;
}
#Footer p,
#FooterInner {
    background-color: var(--darkreader-neutral-background) !important;
}
h1,
.ArticleBody p,
.ImagesHeightMod {
    background-color: var(--darkreader-neutral-background) !important;
    color: var(--darkreader-neutral-text) !important;
}`},{url:["asahilinux.org"],invert:[".header-logo"]},{url:["asana.com"],invert:[".siteHeader__logo",".DatePickerCalendarDate--today .DatePickerCalendarDate-button::after"],css:`.MultiColorIcon--unselected .MultiColorIcon-path--fadedBlack {
    fill: var(--darkreader-bg--color-icon) !important;
}
.MultiColorIcon-path--white {
    fill: var(--darkreader-text--color-icon-foreground) !important;
}
.DailySummaryInboxThread--selected,
.TaskAddedToPotInboxThread--selected,
.InboxExpandableThread.InboxExpandableThread--selected,
.PortfolioItemRow {
    background: var(--darkreader-neutral-background) !important;
}
.PortfolioItemRow:hover {
    background: \${#FFF} !important;
}
.HomePageContent {
    background-image: none !important;
}
div.PeopleWidgetCarousel-gradient.PeopleWidgetCarousel-gradient--right {
    display: none;
}`},{url:["asciinema.org"],ignoreInlineStyle:["polygon","polyline"]},{url:["askjohnmackay.com"],invert:['[src$="ask-john-mackay-logo.png"]','[src$="side-banner-05.gif"]','[src$="reasonwhy.jpg"]'],css:`body,
header,
#site-footer,
#live-search {
    background-color: var(--darkreader-neutral-background) !important;
    background-image: none !important;
}`},{url:["askvg.com"],invert:[".site-header img"]},{url:["askwoody.com"],css:`.banner,
.content {
    background-image: none !important;
}`},{url:["assetstore.unity.com"],css:`div[style^="background-color:var(--color-bg-gray-5)"] {
    --color-bg-gray-5: var(--darkreader-neutral-background) !important;
}
h2[style*="color:var(--color-font-header)"] {
    --color-font-header: var(--darkreader-neutral-text) !important;
}`},{url:["astro.build"],css:`hero-card .card {
    --darkreader-bg--tw-gradient-stops: var(--darkreader-bg--tw-gradient-from), var(--darkreader-neutral-background), var(--darkreader-bg--tw-gradient-to) !important;
}`,ignoreInlineStyle:["#navlogo svg path"]},{url:["astroproxy.com/dashboard/settings/profile/2fa"],css:`.card-body .col-md-6 > div > svg > rect[width="200"] {
    fill: var(--darkreader-neutral-text) !important;
}`},{url:["asus.com"],invert:["span.mobile-menu-toggle.mobile","em#searchopen.icon-search","#af-header .af-inner .logo"],ignoreImageAnalysis:["#af-header .af-inner .logo","li.nav-Rog a"]},{url:["atcoder.jp"],css:`#fixed-server-timer {
    color: #333;
}
.ace-tm .ace_indent-guide {
    opacity: .3;
}`},{url:["athome.abeka.com"],invert:[".logo img",".center-align img"]},{url:["atlas.herzen.spb.ru","guide.herzen.spb.ru","job.herzen.spb.ru"],invert:['img[src="/images/logo.png"]',"hr"],css:`body,
.body,
table,
tbody,
tr,
td,
.corner_bottom {
    background: none !important;
}`},{url:["atlassian.net","*.atlassian.net"],invert:['img[src*="https://github.githubassets.com/favicon.ico"].smart-link-icon',".sc-jTzLTM",'img[src^="https://latexmath.bolo-app.com/render/"]','img[src*="MathJax-SVG"]','span[aria-label="Confluence"]'],css:`span.code,
code.code {
    background-color: rgba(240,246,252,0.15) !important;
}
.ghx-parent-group,
.ghx-issue {
    background-color: rgba(119, 183, 255, 0.05) !important;
}
span.loader-wrapper a,
.css-s0tfqx,
.css-1vn31bx,
.css-1gx5gpx,
.css-wvfva4 {
    background-color: rgba(240,246,252,0.1) !important;
}
.css-1yfnrso,
.aui-flag,
.aui-message {
    box-shadow: 0 0 20px rgba(240,246,252,0.15) !important;
}
.css-1ua1xqz {
    background-color: rgba(65, 65, 83, 0.6) !important;
}
code:first-of-type {
    background-image: linear-gradient(to right, rgba(255,255,255,0.03),rgba(255,255,255,0.03) calc(1ch + 16px),transparent calc(1ch + 16px),transparent) !important;
}
.sc-1jjaulc-0 {
    background-color: \${rgba(3, 9, 15, 0.02)} !important;
    box-shadow: 0 0 4px \${rgba(3,9,15,0.15)} !important;
}
.sc-186t4q4-1 {
    background-color: \${rgba(3, 9, 15, 0.02)} !important;
}
div.zgsxji-0.jMIyWM > div > div > div > div {
    background-color: var(--darkreader-bg--ds-surface, #181a1b) !important;
}
#ak-main-content,
.pfb8c3-0.dpzKHj,
._11q7vuon {
    background-color: var(--darkreader-neutral-background) !important;
}
#jira-issue-header,
#jira-issue-header-actions {
    background-color: rgb(29, 32, 33) !important;
}
.ak-editor-panel[data-panel-type="note"] {
    background-color: \${rgb(217, 200, 228)} !important;
}
.ak-editor-panel[data-panel-type="info"] {
    background-color: \${rgb(172, 217, 242)} !important;
}
.ak-editor-panel[data-panel-type="error"] {
    background-color: \${rgb(255, 220, 211)} !important;
}
.ak-editor-panel[data-panel-type="warning"] {
    background-color: \${rgb(238, 229, 187)} !important;
}
.ak-renderer-document hr,
.ProseMirror hr {
    background-color: rgb(69, 70, 72) !important;
}
.ProseMirror hr.ak-editor-selected-node {
    background-color: rgb(0, 101, 255) !important;
}
.jira-issue-status-lozenge {
    background-color: var(--darkreader-neutral-background) !important;
}
.fabric-text-color-mark {
    --darkreader-text--custom-text-color: var(--custom-text-color);
}
#content-body {
    --ds-surface: var(--darkreader-neutral-background) !important;
}`,ignoreInlineStyle:[".ak-editor-content-area *",'span[aria-label="Jira Software"] *']},{url:["audible.com/webplayer","audible.de"],invert:["#adbl-cloud-player-controls",".hero-img > img"],css:`.adbl-page > #center-0 {
    background-color: #0e0d0c !important;
}
.adblCloudPlayerContainer {
    height: 99999vh !important;
}
.adblCloudPlayerContainer .bc-range-progress,
.bc-range input[type="range"]::-moz-range-thumb,
.bc-range input[type="range"]::-webkit-slider-thumb {
    background-color: #f7991c !important;
}
.bc-range input[type="range"]::-moz-range-track,
.bc-range input[type="range"]::-webkit-slider-runnable-track {
    background: rgba(255,255,255,.5) !important;
}`},{url:["audio-technica.com"],invert:[".o-header__logo"]},{url:["audycje.tokfm.pl/widget"],css:`body {
    background-color: var(--darkreader-neutral-background) !important;
}`},{url:["auth.adguard.com"],invert:['.header__logo path[fill="#000"]']},{url:["auth0.com"],invert:['button[data-handler="authorise-github"] > img.icon.icon-default']},{url:["autodesk.com"],invert:[".uh-logo-container"]},{url:["autoweek.com"],invert:[".nav-logo"]},{url:["avanti24.pl"],invert:[".box-logo"]},{url:["avast.com"],invert:[".avast-logo"]},{url:["avg.com"],invert:[".bi-nav-toplink"]},{url:["avito.ru"],invert:['a[class^="Logo-"] > svg > path','a[class^="header-logo"]',".item-extended-phone",".item-price-old::before",".contacts-phone-3KtSI",".button-content-phone_size_l-1O5VB","._39EVKDP-9p1BREJQ3fhILl._2sPEvPi-1aWpcq1ggVph1C._4wLX_6jxKYoWRyE1U1WcZ",'[class^="suggest-graySuggestCategoryImg"]','ymaps[class$="ground-pane"]'],css:`div[class^="item-preview-image"] {
    z-index: 0 !important;
}`},{url:["avlab.pl"],invert:['img[src*="avlab-logo"]','img[alt*="logo"]',".elementor-widget-wrap div div a.elementor-icon svg",".elementor-social-icons-wrapper"]},{url:["aws.amazon.com"],invert:["a.lb-trigger",".hover .axis-box rect",".img-wrapper",'img[alt^="WEB_FreeTier"]',".lb-is-lazyloaded",".lb-none-v-margin.lb-img",".lb-tiny-iblock .cq-dd-image"],css:`.header-background {
    fill: none !important;
}`},{url:["azure.microsoft.com"],invert:[".card .ocr-img",".img-fluid",".section-master__image"]},{url:["azuresynapse.net"],invert:[".cursor"]},{url:["azurlane.koumakan.jp"],invert:[".mwe-math-element"],css:`.rarity-1,
.rarity-2 {
    background: #999 !important;
}
.rarity-3 {
    background: #5fa8bf !important;
}
.rarity-4 {
    background: #846dbf !important;
}
.rarity-5 {
    background: #aa5 !important;
}
.rarity-6 {
    background: linear-gradient(120deg,#bbbf8a,#7abf7f,#67afbf,#bf6bbf) !important;
}`,ignoreImageAnalysis:[".mw-wiki-logo"]},{url:["bab.la"],invert:[".logo-flash"]},{url:["babyem.co.uk"],invert:["div.elementor-social-icons-wrapper a.elementor-icon","input::placeholder"]},{url:["babylonbee.com"],invert:[".header-logo",".img-fluid.mb-2.d-none.d-sm-block"]},{url:["backblaze.com"],css:`.rt-headingxlred-bodym > p,
a {
    color: \${white} !important;
}
.nav2_link,
.footer_link,
.footer_textlink {
    color: var(--darkreader-neutral-text) !important;
}`},{url:["bahnhof.net"],css:`.contact-form_section {
    background-image: none !important;
}`},{url:["baike.baidu.com"],invert:[".formula"],ignoreImageAnalysis:[".wiki-lemma .lemmaWgt-posterBg"]},{url:["baitoru.com"],css:`mark {
    background-color: #cc4;
    color: black;
}`},{url:["bakabt.me"],invert:["span.icon.hd","span.icon.lossless"]},{url:["balena.io"],invert:[".Header__main-logo"]},{url:["bandcamp.com","allochiria.com"],invert:[".bclogo.white",".vol-control",".progress",".buffer",".seek-control","#material-close"],css:`.ui-dialog {
    background-image: none !important;
}`},{url:["bandshed.net"],css:`#content {
    background-color: var(--darkreader-neutral-background) !important;
}`},{url:["banki.ru"],invert:[".header__logo"],css:`.comment:nth-child(even) {
    background-color: \${#f5f5f5} !important;
}`},{url:["bankier.pl","bankier.tv"],invert:['.o-home-smart-box__header > .a-anchor > .a-image >  img[class="a-image__img"]',".hamburger",".icon > img",".menu-sidebar__close-menu > img",'img[class="menu-sidebar__logo-img"]','img[alt*="Bankier.pl"]','img[src*="logo-smart.svg"]','a[href="https://www.bankier.pl/"]','img[alt="Bankier.TV"]',".m-quote-list__anchor img.a-image__img"]},{url:["bankofamerica.com"],invert:[".main-nav-top-logo img"],css:`.fsdnav-sub-nav-left {
    background-color: var(--darkreader-neutral-background) !important;
}
.ad-acct-layout,
.ad-acct-detail-card-layout,
.thrfwl-body,
.ad-summary-container,
.olb-summary-widget-container {
    background-image: none !important;
}`},{url:["barnesandnoble.com"],invert:[".logo-img"]},{url:["basecamp.com"],invert:[".top-nav__logo"]},{url:["baselinker.com"],css:`.form-control {
    background-color: var(--darkreader-neutral-background) !important;
    color: \${black} !important;
}`},{url:["battlelog.battlefield.com/bf3"],invert:[":not(.active) > .serverguide-cell-ranked-wrapper > div",":not(.active) > .serverguide-cell-pb-wrapper > div",":not(.active) > .serverguide-cell-type-wrapper > div",".common-button-medium-grey",".common-kittimes-overlay",".serverguide-headercells","table.common-table > thead > tr > th",".leaderboard-venice-specific > thead > tr > th","#selected-server-settings .selected-server-setting",".sodaSlider-arrow-left",".sodaSlider-arrow-right"],css:`.common-button-medium-grey > p {
    color: #000 !important;
}
.base-button-arrow-almost-gigantic,
.base-button-arrow-gigantic,
.base-button-arrow-large,
.btn.btn-primary,
.base-button-arrow-large-drop {
    color: #000 !important;
}
.common-button-medium > p,
.common-button-large > p {
    color: #000 !important;
}
.common-selector-alt li.selected {
    color: #262626 !important;
}
.progress-bar .progress-bar-inner,
.common-percentbar-container div {
    background-color: \${#353535} !important;
}
#selected-server-settings .selected-server-setting {
    color: \${#888} !important;
}`,ignoreImageAnalysis:[".serverguide-headercells","table.common-table > thead > tr > th",".leaderboard-venice-specific thead tr th",".base-item-ribbon-small"]},{url:["bayfiles.com"],invert:[".img-responsive",".kopimi"]},{url:["bbb.*"],css:`div[class^='scrollableList'] {
    background: none !important;
    box-shadow: none !important;
}`},{url:["bbc.co.uk","bbc.co.uk/weather","bbc.com/weather"],invert:[".orb-nav-section .orb-nav-blocks",".orb-icon .orb-icon-arrow",'span[class*="LogoIconWrapper"]'],css:`.wr-icon-weather-type__svg-background,
.wr-icon-rain__svg-background,
.wr-icon-wind-direction__svg-background,
.wr-icon-gel__svg-background {
    opacity: 0% !important;
}
.wr-value--windspeed {
    color: \${#dad7d2} !important;
}
.wr-c-environmental-data__icon-text {
    color: \${#dcd9d4} !important;
}
.haCQWq,
.fFEZuA {
    filter: invert(90%) !important;
}`},{url:["bbc.com"],css:`.haCQWq,
.fFEZuA {
    filter: invert(90%) !important;
}`},{url:["bbc.com/news","bbc.com/sport","bbc.com/travel","bbc.com/capital","bbc.com/autos","bbc.com/culture","bbc.com/future","bbc.com/sounds","bbc.com/food","bbc.com/bitesize","bbc.com/earth"],invert:[".orb-nav-section .orb-nav-blocks",".orb-icon .orb-icon-arrow",'[class*="NavigationLink-LogoLink"] > span > svg','span[class*="LogoIconWrapper"]'],css:`.haCQWq,
.fFEZuA {
    filter: invert(90%) !important;
}`},{url:["bbs.chinauos.com","bbs.deepin.org"],invert:[".post_tip"],css:`.post_edit p {
    color: var(--darkreader-neutral-text) !important;
}`},{url:["bbs.thinkpad.com","club.lenovo.com.cn"],css:`body[style] {
    box-shadow: inset 0px 0px 0px 9999px var(--darkreader-neutral-background);
}`},{url:["bbs.wenxuecity.com"],invert:[".logo"]},{url:["behance.net"],invert:['div[class^="PrimaryNav-logoWrap"]']},{url:["benevity.com"],invert:[".header_logo"]},{url:["berlingske.dk"],invert:[".site-header__logo"]},{url:["bestbuy.ca"],invert:[".centerContainer",'[class^="facetName"]','[class^="title"]','[class^="sortLabel"]','[class^="headerText"]','[class^="subTitle"]','[class^="price"]','[class^="soldByBestBuy"]','[class^="availabilityMessage"]','[class^="deliveryDate"]','[class^="storesNearCity"]','svg[class*="availabilityHeaderIcon"]'],css:`div[class*="backgroundContainer"] {
    z-index: 0 !important;
}
body {
    background-image: initial !important;
}`},{url:["bestbuy.com"],css:`input[type="radio" i] {
    background-color: initial;
}`},{url:["bestchange.ru"],invert:[".tabs li a"],css:`body,
.c-inner,
.c-block .c-wrap,
#content_table thead td,
.content .intro,
.c-block,
#content_table tbody td,
#content_reviews,
.review_header,
.review_middle,
.review_bottom {
    background-image: none !important;
}`},{url:["bet.com","cmt.com","logotv.com","paramountnetwork.com","southpark.cc.com","vh1.com"],css:`body {
    background-color: var(--darkreader-neutral-background) !important;
}`},{url:["betanews.com"],css:`.sectionTop,
.editorial .header,
.tabbed .tabs li:not(.active),
.tabbed .tabs li:not(.active) a {
    background-image: none !important;
}
.tabbed .tabs li:not(.active) a {
    background-color: \${#d9d9ff} !important;
}`},{url:["bettercap.org"],invert:[".copy-to-clipboard",'[src$="mitm.jpg"]','[src$="proxy.png"]','[src$="with-hsts.png"]','[src$="sslstrip2.png"]'],css:`.copy-to-clipboard {
    background-color: var(--darkreader-neutral-text) !important;
}`},{url:["bfi.org.uk"],invert:['img[src$="bfi_logo_transp.png"]','img[src$="national-lottery-logo-color.png"]','img[src*="sight-and-sound-logo-280x69.png"]'],css:`body {
    background-image: none !important;
}`},{url:["bgp.he.net"],invert:['img[src="/helogo.gif"]','img[src*="chart.googleapis.com"]','img[src^="/graphs/"]']},{url:["bible.optina.ru"],css:`body,
#left,
#right {
    background-image: none !important;
}`},{url:["bibleref.com"],css:`.scripture,
.content,
.content-commentary .expand {
    background: var(--darkreader-neutral-background) !important;
}`},{url:["bibliotecapleyades.net"],css:`body {
    background-image: none !important;
}`},{url:["bienici.com"],invert:[".section-header",".bv-form",".hpFeaturesRow",".hpContent","#searchSideView",".searchFilterViewContainer",".searchItemPhoto","#map",".animatedSideContent","#detailedSheetsNavigation"]},{url:["bigberthaoriginal.*"],css:`.product-card-figure {
    background-color: #f9f9f9 !important;
}`},{url:["bigocheatsheet.com"],invert:[".gray"],css:`.green,
.orange,
.yellow,
.yellow-green {
    color: black !important;
}`},{url:["biletywielkopolskie.pl"],invert:[".kw-logo"]},{url:["biliomask.com"],invert:["div.header-title-logo"]},{url:["binance.com"],css:`div.qr-code > canvas {
    outline: solid 10px white !important;
}
div > input[type="checkbox"] + svg {
    fill: transparent !important;
}
div > input[type="checkbox"]:checked + svg {
    fill: var(--darkreader-neutral-text) !important;
}
label > svg circle {
    fill: rgb(37, 40, 42) !important;
}`},{url:["bing.com"],invert:['canvas[id^="Microsoft.Maps"]','button[is="cib-button"] svg-icon'],css:`.options-list-container,
.b_wlcmTileWrap > *,
cib-shared,
cib-serp-feedback,
cib-typing-indicator ~ .main-container,
cib-see-more-container {
    background: var(--darkreader-neutral-background) !important;
}
.option > *,
cib-shared,
cib-tooltip,
cib-message,
.disclaimer,
.b_wlcmDesc,
.b_vfly_b,
.container>fieldset>legend {
    color: var(--darkreader-neutral-text) !important;
}
.b_searchboxForm,
.b_searchboxForm:hover,
.b_focus .b_searchboxForm,
#sw_as #sa_ul:not(:empty),
cib-typing-indicator ~ .main-container,
cib-see-more-container {
    box-shadow: \${rgba(0, 0, 0, 0.1)} 0px 0px 0px 1px !important;
}
#b_results > li.b_ans.b_topborder,
#b_results > li.b_ans.b_topborder.b_tophb.b_topshad {
    box-shadow: \${rgba(13, 13, 13, 0.05)} 0px 0px 0px 1px !important;
}
.l_ecrd_imcolheader.gradient {
    z-index: 2 !important;
}
#b_content {
    background-image: none !important;
}
cib-tooltip,
.attributions > .attribution-item > .background {
    background: var(--darkreader-neutral-background) !important;
}
cib-message[type="text"]:not([serp-slot="right-rail"]),
button.container > .item-content,
button.container > .item-content:before,
.container > .options-list-container,
.container > .options-list-container li.option button:not([selected]):before,
button.container[serp-slot="none"],
button.container[serp-slot="right-rail"],
#fbpgbt,
#stop-responding-button,
cib-feedback {
    background: \${rgba(50, 50, 50, 0.1)} !important;
}
cib-message[type="text"]:not([serp-slot="right-rail"]),
cib-shared > .content > .ac-container > .ac-textBlock {
    color: var(--darkreader-text--cib-color-neutral-foreground) !important;
}
button.container[serp-slot="right-rail"]:hover {
    background: \${rgba(0, 0, 0, 0.3)} !important;
}
button.container[serp-slot="none"] {
    border: 1px solid var(--cib-color-brand-secondary-stroke) !important;
}
.attribution-container > .attribution-items > .attribution-item,
.attribution-container > .attribution-items > button.expand-button,
.ac-container.ac-adaptiveCard > .ac-textBlock > p > .tooltip-target + a > sup {
    background: #050F2E !important;
    color: #A2B7F4 !important;
}
div.icon > svg > g:nth-child(1) > path:nth-child(1) {
    opacity: 0 !important;
}
.ac-container.ac-adaptiveCard > .ac-textBlock > p > .tooltip-target.hover {
    background: var(--cib-color-stealth-primary-foreground-hover) !important;
    color: var(--cib-color-brand-text-highlight-background) !important;
    text-decoration-color: var(--cib-color-brand-text-highlight-background) !important;
}
.ac-container.ac-adaptiveCard > .ac-textBlock > p code {
    background: rgba(255,255,255,0.2) !important;
}
.container > button:hover > svg-icon {
    fill: var(--cib-color-neutral-primary-background) !important;
}
.content > .ac-container {
    color: var(--darkreader-neutral-text);
}
#b_results .b_algo.b_deeplinks_bg_color_kc {
    background-image: none !important;
}
:root {
    --cib-color-background-serp-neutral: \${#FFFFFF} !important;
    --cib-color-background-serp-primary: \${#F5F5F5} !important;
    --cib-color-background-surface-app-primary: \${#FFFFFF} !important;
    --cib-color-background-surface-app-quaternary: \${#FFFFFF} !important;
    --cib-color-background-surface-app-secondary: \${#FFFFFF} !important;
    --cib-color-background-surface-app-tertiary: \${#F0F0F0} !important;
    --cib-color-background-surface-card-disabled: \${rgba(255, 255, 255, 0.4)} !important;
    --cib-color-background-surface-card-primary: \${rgba(255, 255, 255, 0.7)} !important;
    --cib-color-background-surface-card-secondary: \${rgba(255, 255, 255, 0.4)} !important;
    --cib-color-background-surface-card-tertiary: \${#FFFFFF} !important;
    --cib-color-background-surface-solid-base: \${#F5F5F5} !important;
    --cib-color-background-surface-solid-primary: \${#F7F7F7} !important;
    --cib-color-background-surface-solid-quaternary: \${#FFFFFF} !important;
    --cib-color-background-surface-solid-secondary: \${#EEEEEE} !important;
    --cib-color-background-surface-solid-tertiary: \${#F9F9F9} !important;
    --cib-color-background-system-attention-primary: \${rgba(255, 255, 255, 0.5)} !important;
    --cib-color-background-system-caution-primary: \${#FFF4CE} !important;
    --cib-color-background-system-critical-primary: \${#FDE7E9} !important;
    --cib-color-background-system-success-primary: \${#DFF6DD} !important;
    --cib-color-foreground-accent-balanced-primary: \${#174AE4} !important;
    --cib-color-foreground-accent-balanced-secondary: \${#1543CD} !important;
    --cib-color-foreground-accent-creative-primary: \${#75306C} !important;
    --cib-color-foreground-accent-creative-secondary: \${#692B61} !important;
    --cib-color-foreground-accent-disabled: \${rgba(23, 74, 228, 0.3)} !important;
    --cib-color-foreground-accent-precise-primary: \${#006880} !important;
    --cib-color-foreground-accent-precise-secondary: \${#005E73} !important;
    --cib-color-foreground-accent-primary: \${#174AE4} !important;
    --cib-color-foreground-accent-quaternary: \${#3B3FB2} !important;
    --cib-color-foreground-accent-secondary: \${#1543CD} !important;
    --cib-color-foreground-accent-tertiary: \${#123BB6} !important;
    --cib-color-foreground-neutral-disabled: \${rgba(17, 17, 17, 0.4)} !important;
    --cib-color-foreground-neutral-quaternary: \${#616161} !important;
    --cib-color-foreground-neutral-secondary: \${#666666} !important;
    --cib-color-foreground-neutral-tertiary: \${#919191} !important;
    --cib-color-foreground-system-attention-primary: \${#106EBE} !important;
    --cib-color-foreground-system-attribution-primary: \${#006621} !important;
    --cib-color-foreground-system-caution-primary: \${#9D5D00} !important;
    --cib-color-foreground-system-critical-primary: \${#C42B1C} !important;
    --cib-color-foreground-system-error-primary: \${#B10E1C} !important;
    --cib-color-foreground-system-link-primary: \${#4007A2} !important;
    --cib-color-foreground-system-neutral-primary: \${rgba(0, 0, 0, 0.45)} !important;
    --cib-color-foreground-system-neutral-strong: \${rgba(0, 0, 0, 0.8)} !important;
    --cib-color-foreground-system-success-primary: \${#0F7B0F} !important;
}`,ignoreInlineStyle:[".b_header_bg",".sp-tpwebicons.WIKI *"]},{url:["biorxiv.org"],invert:[".blood_logo",".logo-img","#czilogo"],css:`body {
    background-image: none !important;
}`},{url:["bitbay.net"],invert:[".navbar-brand",".logo",".full-page-preloader"]},{url:["bitbucket.org"],invert:['a[href="/product"]',".registration-hero .form-prompt"],css:`div[data-testid="file-header"] {
    background-color: \${rgba(33, 53, 89, 0.08)} !important;
}
span[data-testid="file-tree-file__comments"] > span {
    color: var(--darkreader-neutral-text) !important;
}
span > svg {
    color: var(--icon-primary-color) !important;
}
[type="button"][tabindex="0"],
[data-testid="settingsButton"] {
    background-color: \${rgba(33, 53, 89, 0.04)} !important;
}
code.code,
[type="button"][tabindex="0"]:hover,
[data-testid="settingsButton"]:hover {
    background-color: \${rgba(33, 53, 89, 0.08)} !important;
}
.ak-navigation-resize-button {
    box-shadow: \${rgba(33, 53, 89, 0.08)} 0px 0px 0px 1px,
                \${rgba(33, 53, 89, 0.08)} 0px 2px 4px 1px !important;
}
[data-testid="pipeline-row"]:hover {
    background: var(--darkreader-neutral-background) !important;
    box-shadow: -4px 0 0 0 var(--darkreader-neutral-background), 4px 0 0 0 var(--darkreader-neutral-background) !important;
}
[data-testid="result-page"]>div>div:nth-child(3),
[data-testid="result-page"]>div>div:nth-child(3)>div {
    background: var(--darkreader-neutral-background) !important;
}`,ignoreInlineStyle:['[role="presentation"] svg *','[aria-label="Bitbucket"] *']},{url:["bitcoinprice.com"],css:`.highcharts-button-box {
    fill: var(--darkreader-neutral-background) !important;
}`},{url:["bitcoinwisdom.com"],invert:[".site-branding"]},{url:["bitly.com"],css:`.hero-content {
    background-image: none !important;
}`},{url:["bitwarden.com"],invert:['img[alt="Github Logo"]','img[src$="forbes.png"]',"app-login img.logo"],ignoreImageAnalysis:["blockquote .blockquote-header"]},{url:["bitwit.tech"],css:`.svg-primary {
    fill: #375D69 !important;
}
.svg-primary-light {
    fill: #4A7F8F !important;
}
.svg-primary-dark {
    fill: #28444D !important;
}
.svg-secondary {
    fill: #B88399 !important;
}
.svg-secondary-light {
    fill: #E8A9C4 !important;
}
.svg-secondary-dark {
    fill: #825F6E !important;
}
.svg-light {
    fill: #ADCED9 !important;
}
.svg-outline {
    fill: none !important;
    stroke: #000000 !important;
}
.svg-primary-outline {
    fill: none !important;
    stroke: #ADCED9 !important;
}
.svg-secondary-outline {
    fill: none !important;
    stroke: #375D69 !important;
}
.theme-light {
    display: none !important;
}
.theme-dark {
    display: none !important;
}
.theme-darkreader {
    display: block !important;
}`},{url:["biznes.pap.pl"],css:`body,
#copy {
    background-image: none !important;
}`},{url:["blablacar.*","blablacar.*.*"],invert:[".kirk-topBar-left"]},{url:["blackboard.com"],invert:['li[class^="js-multiple-answer-answer"][class$="selected-answer"]','li[class^="js-answer"][class~="is-selected"][class$="answer-selected"]::before',".true-false-answer.selected-answer"],css:`li[class^="js-multiple-answer-answer"][class$="selected-answer"]::before {
    border-color: $var(--darkreader-neutral-background) !important;
}
li[class^="js-answer"][class~="is-selected"][class$="answer-selected"]::before {
    border-color: $var(--darkreader-neutral-background) !important;
}
.true-false-answer.selected-answer::before {
    border-color: $var(--darkreader-neutral-background) !important;
}`},{url:["blahdns.com"],invert:['[src="https://cdn.blahdns.com/logo.png"]','[src="https://cdn.blahdns.com/kofi4.png"]',".liberapay-btn > span","svg"]},{url:["blaupunkt.com"],invert:[".fusion-standard-logo"]},{url:["blog.arelion.com"],invert:['img[src="https://blog.arelion.com/wp-content/themes/arelion-blog-theme-kopia/public/images/logo.svg"]','img[src="https://blog.arelion.com/wp-content/themes/arelion-blog-theme-kopia/public/images/ico/search-icon.svg"]','img[src="https://blog.arelion.com/wp-content/themes/arelion-blog-theme-kopia/public/images/ico/right-arrow.png"]']},{url:["blog.cloudflare.com"],css:`body#main-body {
    background-color: \${white} !important;
    color: \${black} !important;
}
.dn {
    color: \${white} !important;
}
#nav {
    background-color: \${white} !important;
}
main#post {
    background-color: \${white} !important;
}
article.post-full {
    background-color: \${white} !important;
}
article p {
    color: \${gray} !important;
}
code {
    color: \${black} !important;
}
nav.pagination {
    background-color: \${white} !important;
}`},{url:["blog.csdn.net"],css:`html {
    height: inherit !important;
}
.main_father {
    background-color: var(--darkreader-neutral-background) !important;
}`},{url:["blog.documentfoundation.org"],invert:['img[alt*="The Document Foundation Blog"]']},{url:["blog.doist.com"],invert:[".db-header__logo-img"]},{url:["blog.mozilla.org"],invert:['.content > .logo > [href^="https://www.mozilla.org/"]','.nav-global-donate > [href^="https://donate.mozilla.org/"]'],css:`.nav-global-donate > [href^="https://donate.mozilla.org/"] {
    color: \${white} !important;
}
#page {
    background-image: none !important;
}`},{url:["blog.nightly.mozilla.org"],invert:['.content > .logo > [href^="https://www.mozilla.org/"]',".nav-global-twitter a::before",".nav-global-join a::before"],css:`.nav-util-search .fm-search input {
    border-color: \${#999} !important;
}`},{url:["blog.scssoft.com"],css:`body {
    background: none !important;
}`},{url:["blogger.com"],invert:[".gb_ua",".feedflare"]},{url:["blogs.windows.com"],css:`.c-video__icon::before {
    color: \${white} !important;
}
.item-single__content ::before {
    background-color: var(--darkreader-text--wp--preset--color--black) !important;
}`},{url:["bloomberg.com"],invert:[".navi-bar__button-icon",".navi-sections__item--LiveNow::before",".navi-sections__link--current::after"],css:`.navi {
    border-color: var(--darkreader-border--color-black) !important;
}`},{url:["blueberryroasters.pl"],invert:["div#logo"]},{url:["bluemic.com"],invert:[".blue-logo"]},{url:["boardgamearena.com"],invert:[".bgagame-kingoftokyo .player-board .player-hand-card"],css:`body {
    background: none;
}
.bga-dropdown__list.bg-bga-whitebg {
    background-color: rgb(35, 38, 39);
}
.bg-bga-gray-204 {
    background-color: rgb(57, 61, 62);
}
.bgagame-agricola .game-content,
.bgagame-agricola #right-side,
.agricola_popin_container,
.dijitTooltip .action-holder,
.dijitTooltip .player-card {
    color: #000;
}
:is(.bgagame-agricola, .dijitTooltip .action-component-tooltip) .action-card-holder .action-card .action-header,
:is(.bgagame-agricola, .dijitTooltip .action-component-tooltip) .action-card-holder .action-card .action-desc,
:is(.bgagame-agricola, .dijitTooltip .action-component-tooltip) .action-card-holder .action-card .action-footer {
    background-image: url("https://x.boardgamearena.net/data/themereleases/current/games/agricola/230120-1146/img/action_frame.png");
}
:is(.bgagame-agricola, .dijitTooltip .action-component-tooltip) .action-card-holder .action-s .action-header,
:is(.bgagame-agricola, .dijitTooltip .action-component-tooltip) .action-card-holder .action-s .action-desc,
:is(.bgagame-agricola, .dijitTooltip .action-component-tooltip) .action-card-holder .action-s .action-footer {
    background-image: url("https://x.boardgamearena.net/data/themereleases/current/games/agricola/230120-1146/img/action_frame_s.png");
}
.bgagame-bandada .cardontable,
.bgagame-bandada .playercard {
    background-image: url("https://x.boardgamearena.net/data/themereleases/current/games/bandada/221108-1032/img/birds312.png");
}
.bgagame-bandada #dicearea {
    background-image: url("https://x.boardgamearena.net/data/themereleases/current/games/bandada/221108-1032/img/dicecard.png");
}
.bgagame-carnegie .cng_timeline_image {
    background-image: url("https://x.boardgamearena.net/data/themereleases/current/games/carnegie/210812-1806/img/timelines.png");
}
.bgagame-catcafe .ctc_player_board {
    background-image: url("https://x.boardgamearena.net/data/themereleases/current/games/catcafe/221108-0942/img/catcafe_sheet.jpg");
}
.bgagame-catcafe .ctc_square {
    background-image: url("https://x.boardgamearena.net/data/themereleases/current/games/catcafe/221108-0942/img/drawings_black.png");
}
.bgagame-catcafe .ctc_cat_footprint {
    background-image: url("https://x.boardgamearena.net/data/themereleases/current/games/catcafe/221108-0942/img/catfootprint.png");
}
.bgagame-catcafe .ctc_column_scoring {
    background-image: url("https://x.boardgamearena.net/data/themereleases/current/games/catcafe/221108-0942/img/column_scoring.png");
}
.bgagame-catcafe .ctc_txt_flash {
    color: #007f37;
}
.bgagame-catcafe .ctc_sub_scoring {
    color: #000;
}
:is(.bgagame-doglover, .dijitTooltip) .DOG-card-name,
:is(.bgagame-doglover, .dijitTooltip) .DOG-card-type-text,
:is(.bgagame-doglover, .dijitTooltip) .DOG-card-bottom-text,
:is(.bgagame-doglover, .dijitTooltip) .DOG-card-dog-bonus-text,
:is(.bgagame-doglover, .dijitTooltip) .DOG-card-trick-cost-text,
:is(.bgagame-doglover, .dijitTooltip) .DOG-card-back-text {
    color: #000;
}
:is(.bgagame-doglover, .dijitTooltip) .DOG-card-trait-warning-text {
    color: maroon;
}
.bgagame-doglover .DOG-unfed .DOG-played-dog-card .DOG-card-placeholder .DOG-unfed-border {
    border-color: #7e0000;
}
.bgagame-evergreen .eve_remaining-actions .stockitem {
    filter: invert(100%);
}
.bgagame-kingoftokyo .player-evolution-card {
    background-image: url("https://x.boardgamearena.net/data/themereleases/current/games/kingoftokyo/230710-1229/img/evolution-cards.jpg");
}
.bgagame-kingoftokyo .kot-evolution {
    background-image: url("https://x.boardgamearena.net/data/themereleases/current/games/kingoftokyo/230710-1229/img/evolution-cards.jpg");
}
.bgagame-kingoftokyo .kot-evolution .description-wrapper {
    color: #000;
}
.bgagame-kingoftokyo #table .player-table .player-name .outline {
    -webkit-text-stroke: 4px #000;
}
.bgagame-legendraiders #bag {
    background-image: url("https://i.imgur.com/ptX6Fv7.png");
}
.bgagame-littlefactory .cardClay,
.dijitTooltip .cardClay {
    background-image: url("https://x.boardgamearena.net/data/themereleases/current/games/littlefactory/220227-0736/img/Card2.jpg");
}
.bgagame-littlefactory .cardCotton,
.dijitTooltip .cardCotton {
    background-image: url("https://x.boardgamearena.net/data/themereleases/current/games/littlefactory/220227-0736/img/Card4.jpg");
}
.bgagame-littlefactory .cardGrain,
.dijitTooltip .cardGrain {
    background-image: url("https://x.boardgamearena.net/data/themereleases/current/games/littlefactory/220227-0736/img/Card1.jpg");
}
.bgagame-littlefactory .cardStone,
.dijitTooltip .cardStone {
    background-image: url("https://x.boardgamearena.net/data/themereleases/current/games/littlefactory/220227-0736/img/Card5.jpg");
}
.bgagame-littlefactory .cardWood,
.dijitTooltip .cardWood {
    background-image: url("https://x.boardgamearena.net/data/themereleases/current/games/littlefactory/220227-0736/img/Card3.jpg");
}
.bgagame-littlefactory .cell3 {
    color: #000;
}
.bgagame-lox :is(
    .coinCountA, .coinCountB, .coinCountC, .coinCountD,
    .figurineCountA, .figurineCountB, .figurineCountC, .figurineCountD,
    .guildCountA, .guildCountB, .guildCountC, .guildCountD,
    .reputationCountA, .reputationCountB, .reputationCountC, .reputationCountD
) {
    color: #000;
}
.bgagame-microdojo .barrak {
    background-image: url(https://x.boardgamearena.net/data/themereleases/current/games/microdojo/221116-1802/img/barraks.png);
}
.bgagame-microdojo :is(.barrak, .Objname) {
    color: #000;
}
.bgagame-patchwork .cost-label {
    color: #222;
}
.bgagame-rainforest .token {
    background-image: url(https://x.boardgamearena.net/data/themereleases/current/games/rainforest/230403-1628/img/Tokens.png);
}
.bgagame-riftvalleyreserve #rvr-score-ref-holder {
    background-image: url(https://x.boardgamearena.net/data/themereleases/current/games/riftvalleyreserve/221228-1440/img/score_ref_vert.png);
}
.bgagame-riichimahjong :is(.JMJ_tile_other_annot, .JMJ_tile_self_annot) {
    background-image: url("https://x.boardgamearena.net/data/themereleases/current/games/riichimahjong/220818-0132/img/mahjongg_japan_annot.png");
}
:is(.bgagame-sevenwondersduel, .dijitTooltip) :is(.swd_title, .coin > span) {
    color: #000;
}
.bgagame-sixtyone :is(.sxt_leave, .sxt_location) {
    color: #000;
}
.bgagame-splashdown .sd_playerinfo_icon,
.bgagame-splashdown .lilypad,
.bgagame-splashdown .fly,
.bgagame-splashdown .frog,
.bgagame-splashdown .possibleMove {
    background-image: url(https://x.boardgamearena.net/data/themereleases/current/games/splashdown/230808-1947/img/tokens.png);
}
.bgagame-takaraisland .woundtoken {
    background-image: url(https://x.boardgamearena.net/data/themereleases/current/games/takaraisland/170709-1847/img/wound.png);
}
:is(.bgagame-thegnomesofzavandor, .dijitTooltip) :is(.helper, .helper2) {
    color: #000;
}
.bgagame-tickettoride .train-car-group-counter {
    -webkit-text-stroke: 3px #000;
}
.bgagame-tobago .clue_card {
    background-image: url(https://x.boardgamearena.net/data/themereleases/current/games/tobago/190401-1859/img/clue_cards.png);
}
.bgagame-tobago .hut {
    background-image: url(https://x.boardgamearena.net/data/themereleases/current/games/tobago/190401-1859/img/hut.png);
}
.nex_plname {
    color: #000;
}
.nex_metropad {
    background-blend-mode: multiply;
    background-color: #b0b0b0;
    background-image: url("https://x.boardgamearena.net/data/themereleases/current/games/nextstation/220831-1241/img/mainpad_back.jpg");
}
.nex_scorepad {
    background-image: url("https://x.boardgamearena.net/data/themereleases/current/games/nextstation/221221-2031/img/scorepad.jpg");
}
.tactic-card .card-text {
    color: #404040;
}
.tundra .dijitTooltipContainer {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAYCAYAAAA7zJfaAAAAIklEQVQIW2OQl5f/zwAm5OTkyCFkZWX/MxBByMjI/GeAEwB0riA1hmHf7AAAAABJRU5ErkJggg==");
}`,ignoreInlineStyle:[".bgagame-riftvalleyreserve :is(.rvr-rift, .rvr-stop, .rvr-svg-border)"]},{url:["boardgamegeek.com"],css:`.legacy button,
.legacy input,
.legacy optgroup,
.legacy select,
.legacy textarea {
    color: var(--darkreader-neutral-text) !important;
}`},{url:["boincstats.com"],css:`#sidebar {
    background-image: none !important;
}`},{url:["bol.com"],css:`.skeleton-image[loaded] .skeleton-image__img,
.subcategory-entrances .image-card__image img,
.day-deal__image .img {
    mix-blend-mode: normal !important;
}`},{url:["bol.de"],css:`.tm-artikelbild-wrapper {
    z-index: 0 !important;
}`},{url:["bonfire.com"],invert:[".sw-Logo"]},{url:["book.douban.com"],ignoreImageAnalysis:[".bigstar50",".bigstar45",".bigstar40",".bigstar35",".bigstar30",".bigstar25",".bigstar20",".bigstar15",".bigstar10",".bigstar05",".bigstar00",".allstar50",".allstar45",".allstar40",".allstar35",".allstar30",".allstar25",".allstar20",".allstar15",".allstar10",".allstar05",".allstar00",".rating",".starb",".collectors"]},{url:["booking.com","*.booking.com"],invert:['span[data-testid="header-logo"]',".bui-calendar__control",".-iconset-close",".-iconset-navarrow_left",".-iconset-navarrow_right",".security-popup_close",".sort_more_options__button",".mb-ico",".-iconset-review_great",".-iconset-review_poor",".-iconset-chat_bubbles",".location_section_icon",".hp-date-picker-icon",".-streamline-info_sign",".-streamline-person",".-streamline-chat_bubbles",".hp-policies-calendar-icon",".-iconset-moon_crescent"],css:`#ss {
    background-position: 16px center !important;
    background-repeat: no-repeat !important;
    background-size: 20px !important;
}`},{url:["booking.uz.gov.ua"],css:`td:has(img[alt=QR]) {
    background-color: white !important;
}`},{url:["books.google.*","books.google.*.*"],invert:[".jfk-button-img"]},{url:["books.googleusercontent.com"],invert:["reader-rendered-page.-gb-image > img"],css:`reader-rendered-page.-gb-text {
    filter: none !important;
}`},{url:["books.zoho.eu"],css:`.scrollbox {
    background: none !important;
}`},{url:["boredpanda.com"],invert:[".logotype"]},{url:["boringcompany.com"],css:`.tweak-overlay-parallax-enabled .Parallax-item {
    z-index: 1 !important;
}`},{url:["bostonacoustics.com"],invert:['img[alt="logo"]']},{url:["bowerswilkins.com"],invert:[".logo"]},{url:["boxberry.ru"],invert:[".slider__image",'img[src$="cancel.png"]',".box_img_block",'img[src$="Vector.png"]','ymaps[class$="ground-pane"]','ymaps[class$="svg-icon-content"] > ymaps']},{url:["bpmn.io"],ignoreInlineStyle:[".djs-visual > *:not(text:not(rect + text))"]},{url:["br.de"],css:`article h4,
article h3,
article p,
article .css-lip0i6,
article h5,
.asso-gtm,
.css-18ckx31 {
    color: \${#323232} !important;
}
article,
article section,
article footer,
.css-1fzo8jw,
.css-efdc07,
article .css-fhbsai,
main h3,
section.css-3copat section {
    background-color: \${white} !important;
}`},{url:["brack.ch"],css:`body,
body > header,
.popover,
.popover-body {
    background: var(--darkreader-neutral-background) !important;
    color: var(--darkreader-neutral-text) !important;
}
.list-group-item,
.modal-content {
    background: var(--darkreader-neutral-background) !important;
}
a:not(.product__category):not(:hover) {
    color: var(--darkreader-neutral-text) !important;
}
.bhaal1Vl:hover,
.bhauyhAt:hover {
    color: \${black} !important;
}`},{url:["brainly.com"],invert:[".brn-rich-content > p > img"]},{url:["brainly.pl"],invert:['[id^="TexFormula"]',"div.brn-qpage-next-answer-box__content > div > div > div img:not(.brn-qpage-next-attachments-viewer-image-preview__image)"]},{url:["brave.com"],css:`section + img {
    display: none !important;
}`},{url:["breadfinancial.com"],invert:[".header-wrapper__logo"]},{url:["breitbart.com"],invert:["#FootW #FWI p .parler"]},{url:["brightspace.avans.nl"],css:`:root {
    --darkreader-bg--d2l-dropdown-background-color: #1D1F20;
}`},{url:["brightspace.rug.nl","brightspace.com","brightspace.algonquincollege.com"],css:`:root {
    --d2l-dropdown-background-color: var(--darkreader-neutral-background) !important;
    --d2l-menu-background-color: var(--darkreader-neutral-background) !important;
    --darkreader-bg--d2l-dropdown-background-color: var(--darkreader-neutral-background) !important;
    --darkreader-bg--d2l-menu-background-color-hover: var(--darkreader-selection-background) !important;
    --darkreader-border--d2l-menu-border-color: var(--d2l-color-tungsten) !important;
}
d2l-card {
    background-color: var(--darkreader-neutral-background) !important;
    border-color: var(--d2l-color-tungsten) !important;
    color: var(--darkreader-neutral-text) !important;
}
.d2l-msg-container {
    border: none !important;
}`},{url:["brilliant.org"],invert:['[class*="b-sprite-landing"]','[class*="b-sprite-publishers"]',".logo"]},{url:["broadcom.com"],invert:["#header .navBrand .navbar-brand"]},{url:["browser.kagi.com"],invert:['img[src="public/images/checkmark.svg"]','img[src="public/images/cross.svg"]']},{url:["browserleaks.com"],css:`body {
    background-image: none !important;
}`},{url:["brucebase.wikidot.com"],css:`.yui-nav li em {
    background-color: var(--darkreader-neutral-background) !important;
    color: var(--darkreader-neutral-text) !important;
}
.yui-nav .selected a em {
    background-color: var(--darkreader-selection-background) !important;
    color: var(--darkreader-selection-text) !important;
}`},{url:["bsi.bund.de"],invert:[".c-branding__logo"],css:`.c-intro {
    z-index: 0 !important;
}`},{url:["buffer.com"],ignoreInlineStyle:['div[class^="style__LogoWrapper"] *']},{url:["bugreplay.com"],invert:[".br-logo"]},{url:["bugs.chromium.org"],invert:["hr","canvas",".dialog-content",'input[type="date"]','div[class$="MuiMobileStepper-dot"]:not(div[class*="MuiMobileStepper-dotActive"])'],css:`:root {
    --chops-accessible-border: var(--chops-normal-border) !important;
    --chops-blue-50: #032742 !important;
    --chops-blue-75: #021524 !important;
    --chops-blue-gray-25: #1f1f1f !important;
    --chops-card-details-bg: #1a1a1a !important;
    --chops-choice-bg: #242628 !important;
    --chops-gray-200: #1e1e1e !important;
    --chops-gray-300: #4a4a4a !important;
    --chops-gray-400: #3f3f3f75 !important;
    --chops-gray-700: #989898 !important;
    --chops-gray-700-alpha: hsla(0, 0%, 100%, 0.62) !important;
    --chops-gray-900: var(--chops-primary-font-color) !important;
    --chops-normal-border: 1px solid #3f3f3f75 !important;
    --chops-orange-200: #6f4106 !important;
    --chops-orange-50: #342213 !important;
    --chops-primary-font-color: var(--darkreader-selection-text) !important;
    --chops-table-header-bg: #1c1c1c !important;
    --chops-white: #161616 !important;
    --darkreader-bg--chops-active-choice-bg: #06243b !important;
    --darkreader-bg--chops-blue-gray-25: var(--chops-blue-gray-25) !important;
    --darkreader-bg--chops-page-bg: var(--chops-white) !important;
    --darkreader-bg--chops-primary-button-bg: #003078 !important;
    --darkreader-bg--chops-white: var(--chops-white) !important;
    --darkreader-border--chops-accessible-border: var(--chops-normal-border) !important;
    --darkreader-border--chops-blue-100: #1b6099 !important;
    --darkreader-border--chops-checkbox-color: transparent !important;
    --darkreader-border--chops-gray-200: var(--chops-blue-gray-25) !important;
    --darkreader-border--chops-normal-border: var(--chops-normal-border) !important;
    --darkreader-border--mr-search-bar-border: var(--chops-normal-border) !important;
    --darkreader-text--chops-blue-700: var(--chops-blue-700) !important;
    --darkreader-text--chops-link-color: var(--chops-blue-700) !important;
    --darkreader-text--chops-primary-icon-color: #909090 !important;
}
body {
    background: none !important;
}
html {
    background-color: var(--chops-white) !important;
}
.metadata-container,
mr-issue-header {
    background: #141c14 !important;
}
#maincol > h3,
#maincol > div > h3 {
    background: #252525 !important;
}
.results th {
    border-color: var(--chops-white) !important;
}
input#searchq:not(input[name="member_default_query"]) {
    border-bottom: 1px solid #292929 !important;
    border-top: 1px solid #292929 !important;
}
input,
select,
textarea,
fieldset,
.MuiOutlinedInput-root:hover > fieldset {
    border-color: #3f3f3f75 !important;
    color: var(--darkreader-neutral-text) !important;
}
select:not(select[aria-label="Search scope"]),
select > *,
textarea:not(.css-66dh3a-MuiInputBase-input-MuiInput-input),
input[type="text"]:not(*:is(input[placeholder$="issues..."], input[name*="Hotlist"])) {
    background-color: #262626 !important;
}
#wordmark {
    color: #822 !important;
}
#editForm > .star-line {
    border: 1px solid var(--chops-orange-200) !important;
}
#star,
.jss24,
.jss12 > div > span,
.jss63.jss64,
.jss61 > span:nth-child(2),
div[class^="MuiDialogActions-root"] > button {
    color: var(--chops-blue-700) !important;
}
.__crdxFeedbackButton::after {
    color: #afafaf !important;
}
img[title="chromium"],
img[title="v8"] {
    filter: invert(100%) hue-rotate(180deg) contrast(83%) !important;
}
img[title="skia"] {
    filter: invert(100%) hue-rotate(180deg) contrast(87.5%) !important;
}
.select-container i {
    z-index: 4 !important;
}
.select-container select {
    background: #1e1e1e !important;
}
.dialog-content {
    background: #f5f5f5 !important;
    box-shadow: rgba(255, 255, 255, 0.4) 0px 3px 20px 0px !important;
}
button[title^="Don't show"] {
    color: var(--darkreader-text--chops-primary-font-color) !important;
}
chops-dialog *:is(i, th, td) {
    border-color: transparent !important;
    color: #22201f !important;
}
.preview {
    border: 2px solid rgb(24, 58, 114) !important;
}
.preview:hover {
    border-color: #034587 !important;
}
table > tbody:not(:has(tr[draggable="false"])) th {
    border-color: #161616 !important;
}
input#filter,
input[name="newHotlistName"],
input[type="date"] {
    background-color: #e3e3e3 !important;
    border: 1px solid #d9d9d9 !important;
    border-radius: 2px !important;
    color: black !important;
}
#issueHotlistsForm label {
    color: black !important;
}
#issueHotlistsForm chops-button[class="emphasized"] {
    background-color: #70a9fe !important;
}
#issueHotlistsForm chops-button[class*="de-"] {
    background: transparent !important;
}`,ignoreInlineStyle:[".star","#user_star"]},{url:["bugs.mojang.com"],invert:["#logo"]},{url:["bugs.python.org"],invert:['img[title="has PR"]','img[title="GitHub"]']},{url:["build-electronic-circuits.com"],invert:[".tutorial-intro",".tutorial-intro > *"],css:`.page-todo-list {
    background-color: rgb(109, 85, 9) !important;
}`},{url:["bulbagarden.net"],css:`body {
    background-image: none !important;
}`},{url:["bulk.com"],invert:[".swatch-attribute.bp_size .swatch-option::before"],css:`.swatch-attribute.bp_size .swatch-option.selected::after {
    filter: none !important;
}`},{url:["bulldogjob.pl"],invert:['img[alt~="Bulldogjob"]','img[src="/bulldog.guide.svg"]','img[src="/bulldog.tte.icon.svg"]']},{url:["bulldogjob.pl/proxied/job-offers"],ignoreImageAnalysis:["*"]},{url:["burmester.de"],invert:[".header-logo"]},{url:["burnaware.com"],invert:['img[alt="Burnaware"]']},{url:["businessinsider.com","businessinsider.com.au","businessinsider.com.pl","businessinsider.co.za","businessinsider.es","businessinsider.jp","businessinsider.mx","insider.com","it.businessinsider.com"],invert:[".account-text-not-logged-in",".article-share_buttons",".brand",".brands-logo",".drawer-heading.headline-bold",".f-footer-logo",".f-header-logo",".f-header-editionLabel",".footer_logo-bi",".footer_social-links",".header-logo",".ins-drawer-button-area",".ins-drawer-vertical-link",".loginbar-icon-people svg",".logo",".logo-primary",".logo-pair-wrapper",".masthead-icon",".menu-search-icon",".menu-lang-icon",".navSocial-item",".navbar-brand",".net-social",".network-toggle",".new-menu-logo",".p-post-contentPrimeEntryPrice",".search-btn",".site-logo",".social-container",".social-icons > .social",".socialmedia-icon-list",".verticals-listitem-label",'a[title="Business Insider España"]','a[id="menu-hamburger-button"]','a[href="/szukaj"]','button[class*="drawer-dropdown-button"]','button[class="unbutton"] > img','div[class*="footer__LogoWrapper"]','div[class*="footer__SocialWrapper"]','div[class*="header__Wrapper"]','section[class*="brands-social"]']},{url:["businesswire.com"],invert:["body > header div:first-child"],css:`#bw-home {
    background-image: none !important;
}`},{url:["buy.stripe.com"],invert:["img.Icon"],css:`:root {
    --darkreader-bg--border-box-shadow: 0 0 0 1px \${#c0c0c0}, 0 2px 4px 0 \${rgba(0,0,0,0.07)}, 0 1px 1.5px 0 \${rgba(0,0,0,0.05)};
    --darkreader-bg--border-box-shadowless: 0 0 0 1px \${#c0c0c0};
    --darkreader-bg--checkout-gray800: \${hsla(0,0%,10%,0.9)};
}
[style*="background-color: rgb(18, 26, 31)"],
.App-Container:has(.App-Background[style*="background-color: rgb(18, 26, 31)"]) {
    background-color: black !important;
}`},{url:["buzzsprout.com"],invert:[".icon_edit",".icon_stats",".icon_share"]},{url:["byte.com"],css:`.description.show {
    z-index: 0 !important;
}`},{url:["c60.la.coocan.jp"],css:`body {
    background-image: none !important;
}`},{url:["cabinet.tax.gov.ua"],invert:["cb-header-public div.logo-add a div.icon"]},{url:["cad.onshape.com"],invert:[".os-svg-icon",".os-form-field-container"],css:`.os-svg-icon {
    filter: grayscale(1) brightness(0.6) contrast(5) brightness(1.5) !important;
}
.os-panel-selector-button {
    border-color: transparent !important;
}`},{url:["caddy.community"],invert:[".logo-big"]},{url:["caddyserver.com"],invert:["#logo","#zerossl-logo","#footer-logo"],css:`.hero {
    background-image: none !important;
}`},{url:["cadence.com"],invert:[".logo"]},{url:["caf.fr"],css:`#theme-contenu-cnaf .row[class*="conteneur-"][class*="-cnaf"] > [class*="col-"],
#theme-contenu-menu-background-cnaf {
    background-image: none !important;
}`},{url:["caiyunapp.com"],invert:["#icon_current",'#logo-name[src="/imgs/logo/logo-website.png"]',"#map_canvas"]},{url:["cake.avris.it"],css:`line[style*="stroke: black"],
polygon[style*="stroke: black"] {
    --box-a: 0.1 !important;
    stroke: white !important;
}
text {
    fill: white !important;
}`,ignoreInlineStyle:["*"]},{url:["caldigit.com"],css:`.elementor-widget-heading .elementor-heading-title[class*="elementor-size-"] > a {
    color: var(--darkreader-neutral-text) !important;
}`},{url:["calendar.google.com"],invert:['div[style*="gm_add_black"]','img[src$="google_gsuite"]',".wRfGxb > svg > path:first-child"],css:`div[role="checkbox"] > div > div > div {
    border: 1px solid \${black} !important;
}
div[role="dialog"] div[role="slider"][data-saturation] div:nth-child(2) {
    background-image: linear-gradient(to right,#fff 0%,rgba(255,255,255,0) 100%) !important;
}`,ignoreInlineStyle:['div[role="checkbox"]','div[role="dialog"] div[role="slider"]','div[role="dialog"] div[role="slider"] div[style]','div[role="dialog"] div[role="button"][data-contrast]']},{url:["calibre-ebook.com"],ignoreImageAnalysis:[".tooltip","#content-wrapper"]},{url:["calvinklein.us"],invert:[".star:not(.star-active)",".star-half"]},{url:["canakit.com"],invert:["#homePageIcon"]},{url:["candidates.ibo.org"],invert:["img#ibLogo"]},{url:["canva.com"],invert:['#__next > div > section > div[style^="background-color"]','img[src*="category-public.canva.com/icons/"]'],css:`._8aslVA svg path {
    fill: \${black} !important;
}`},{url:["canvas.*.edu"],invert:[".file_download_btn",".ic-DashboardCard__action-badge"],css:`textarea[class*="-textArea"],
[class*="numberInput_input"] {
    background-color: var(--darkreader-neutral-background) !important;
}`},{url:["canvas.usask.ca"],css:`#questions .text img {
    background-color: currentColor !important;
}`},{url:["caramba-switcher.com"],invert:[".t996__cover"]},{url:["cargurus.com"],css:`select > option,
select > optgroup,
select > optgroup > option {
    background-color: var(--darkreader-neutral-background) !important;
}
.homepage.redesign .ddC2dBanner .ddBannerSection .ddBannerSectionFigure .ddBannerSectionFigureWrapper {
    background-image: url(https://static-assets.cargurus.com/images/site-p2p/homePageBanner/DD_Mobile_606bb2f4286d575e9a21b2f3ac776e8dd33d0deccf409fe1598859361ce63c05.png) !important;
}`},{url:["carmax.com"],css:`.recall__placeholder,
.vehicle-history__placeholder {
    background-color: \${yellow} !important;
}
#recall .recall__header *,
#recall .recall--link span {
    color: #2a343d !important;
}
#recall svg,
.vehicle-history__placeholder .vehicle-history a svg {
    fill: #053361 !important;
}
#recall a,
.vehicle-history__placeholder .vehicle-history a {
    color: #004487 !important;
}`},{url:["castbox.fm"],invert:[".nav-item.right.msg",".nav-item.right.upload",".nav-item.right.search",'.userNav-img[src="https://s3.castbox.fm/webstatic/images/userIcon.06c408dc.png"]',".heart",".playbackRate.timing.icon"]},{url:["castos.com/player/"],invert:[".playback__controls",'button[class="player-btn__speed"][aria-label="Playback Speed"]',".play-pause-controls"]},{url:["catalog.update.microsoft.com"],css:`#headerBox,
#searchButtonBox,
#searchGlowBottomBox,
#searchGlowPart4aBox,
#searchGlowPart4bBox,
#searchGlowPart8aBox,
#searchGlowPart8bBox,
#searchGlowTopBox,
.ResultsHeaderTD,
.dialogBody,
.mainBody,
.mainBodyHome,
.tabInactive {
    background-image: none !important;
}`},{url:["catit.com"],css:`.gb-inside-container {
    text-shadow: \${white} 1px 1px 0px !important;
}`},{url:["catt.rs/en/latest"],css:`code.literal {
    background-color: unset !important;
}`},{url:["cbpp.org"],invert:[".navbar-brand"]},{url:["cbsnews.com"],css:`.content__read-more {
    color: var(--darkreader-neutral-color) !important;
}`},{url:["cdaction.pl"],invert:['a[href="/"] svg',"footer > div > svg"]},{url:["cdc.gov"],invert:['.cdc-logo path[fill="#000"]','img[src="/niosh/images/si-no-left-vp4.png"]']},{url:["cdimage.ubuntu.com"],invert:[".p-navigation__logo"],css:`#main {
    background-image: none !important;
}`},{url:["cdn5.dcbstatic.com"],css:`#image942Img {
    display: none !important;
}
li {
    list-style-image: none !important;
    list-style-type: circle !important;
}`},{url:["cdn77.com"],invert:['a[class^="Nav_logo"]']},{url:["cdp.contentdelivery.nu"],css:`body {
    background-image: none !important;
}`},{url:["cdrtools.sourceforge.net"],css:`body {
    background-image: none !important;
}`},{url:["celio.com"],invert:[".ec_account__user",".ec_header__logo",".ec_minicart__user",".ec_search__link",".ec_store__locator"]},{url:["celum.ssg-service.com"],css:`body:hover {
    color: var(--darkreader-neutral-text) !important;
}`},{url:["ceneo.pl"],invert:["[data-new-icon]::before",".cat-prod-row__product-link::after",".add-to-favorite::after"],ignoreImageAnalysis:['[data-new-icon="basket"]::before','[data-new-icon="heart"]::before','[data-new-icon="user"]::before']},{url:["center-pf.kakao.com"],css:`.box_bubble .txt_chat {
    color: rgb(255 255 255);
}`},{url:["central.proxyvote.com"],invert:[".custom-control-label::after"]},{url:["centrum24.pl"],invert:["#mobile-applications .jumbotron",".headerLogo.bankLogo",'img[src*="close-black.svg"]','img[src*="GOALS.png"]',".mc-close-x-button-svg"]},{url:["centrumxp.pl"],invert:[".badge-partner",".img-responsive"]},{url:["cfos-emobility.de"],css:`.navbar {
    background-image: none !important;
}`},{url:["cfos.de"],css:`div[style*="keyboard-light.jpg"],
div[style*="organizer-light.jpg"],
div[style*="data-center-light.jpg"],
div[style*="speed-dial-light.jpg"] {
    background-image: none !important;
}`},{url:["changkun.de"],css:`.content h2,
h3 {
    z-index: 0 !important;
}`},{url:["charitynavigator.org"],invert:['img[alt="Charity Navigator Logo"]']},{url:["chase.com"],invert:[".single-logo-icon"],css:`.menu-button-item {
    color: var(--darkreader-neutral-text) !important;
}`},{url:["chat.google.com"],css:`:root {
    --pkw-background: var(--darkreader-neutral-background) !important;
}`},{url:["cheapshark.com"],css:`.header {
    border-top: 10px solid #000 !important;
}`},{url:["check.spamhaus.org"],invert:[".gradient-yellow","header .curve","header .logo"]},{url:["checkout.minecraft.net"],ignoreInlineStyle:['symbol#esrb [fill="#000"]','symbol#esrb [fill="#fff"]']},{url:["chem.libretexts.org"],invert:[".internal"]},{url:["chess-results.com"],invert:[".FarbewT"]},{url:["chessprogramming.org"],invert:[".mw-parser-output div[class^='float'] > a > img:not(.thumbimage):not(.thumbborder)",".mw-wiki-logo"],ignoreImageAnalysis:[".mw-wiki-logo"]},{url:["chilkatsoft.com"],css:`body {
    background-color: var(--darkreader-neutral-background) !important;
    background-image: none !important;
}`},{url:["chinadigitaltimes.net"],invert:[".show-menu-button span"],css:`#main-header-wrapper {
    background-image: none !important;
}`},{url:["chinauos.com"],invert:[".brand"],css:`.choose {
    background-image: none !important;
}`},{url:["chipotle.com"],invert:[".banner-title",".banner-subtitle",".banner-legal"]},{url:["christinamin9-ancientromancivilisation.weebly.com"],css:`.landing-page #main-wrap,
.tall-header-page #main-wrap,
.short-header-page #main-wrap,
.no-header-page #main-wrap {
    background-color: var(--darkreader-neutral-background) !important;
    background-image: none !important;
}`},{url:["chromeenterprise.google"],invert:["#post-linkedin",".ce-accordion--caret",".glue-carousel__navigation > li",".ce-device-card__details-title--icon",'img[src*="hackerone"]','img[src*="blackberry"]','img[src*="samsung-knox"]','img[src*="paloalto"]','img[src*="onelogin"]','img[src*="splunk"]','img[src*="climate"]','img[src*="topcoder"]','img[src*="bailey-nelson"]','img[src*="colgate"]','img[src*="square"]','img[src*="getty-image"]','img[alt*="romevo"]','img[alt="Pythian"]','img[alt="Amazon"]','img[alt="Softbank"]','img[alt="Cameyo"]','img[alt="Citrix"]','img[alt="Nutanix Frame"]','img[alt="Dustin"]'],css:`img[alt="Onix"],
img[alt="USEN"],
img[alt="Inmac"],
img[src*="first-ipo"],
img[src*="compass-group"],
img[src*="doctor-dot-com"],
img[src*="devoted-health"],
img[alt*="See how people"] {
    filter: invert(15%) !important;
}
#how-to-buy {
    background-color: var(--darkreader-background-neutral) !important;
}`},{url:["chromestatus.com"],invert:["sl-icon"],css:`* {
    --button-color: \${black} !important;
    --card-background: --darkreader-background-neutral !important;
    --md-gray-700-alpha: var(--darkreader-text--default-color) !important;
}
header > aside > hgroup > a > h1,
section.card,
header#header[part=header],
p.description {
    color: var(--darkreader-text--default-color) !important;
}
chromedash-roadmap-milestone-card {
    background-color: var(--darkreader-background-neutral) !important;
}
section.release {
    background-color: transparent;
}
div.nav-dropdown-container > ul {
    background: grey !important;
}`},{url:["chtoes.li"],invert:[".illustration",".menu-page",".menu-item"]},{url:["churchofjesuschrist.org"],invert:["svg"],css:`.container,
#PFmainFooter {
    background: var(--darkreader-neutral-background) !important;
}`},{url:["ci.appveyor.com"],css:`select {
    background-image: none !important;
}`},{url:["cinedrome.ch"],css:`body {
    background-image: none !important;
}`},{url:["circleci.com/docs"],css:`body {
    background-image: none !important;
}`},{url:["circuit-diagram.org"],invert:[".components-list .item .image"]},{url:["cisce.org"],invert:[".nav-wrapper","hgroup"]},{url:["citilink.ru"],invert:['div[class$="RatingDetail__progress_active"]'],css:`.OldPageLayout {
    color: var(--darkreader-neutral-text) !important;
}`,ignoreInlineStyle:[".Icon"]},{url:["cityam.com"],invert:[".site-logo__image",".menu-item a::before"]},{url:["citybuzz.pl"],invert:['img[alt="CityBuzz"]']},{url:["citymapper.com"],invert:["#map"]},{url:["classroom.google.com"],invert:['img[src$="dark_create_class_arrow.svg"]','img[aria-label="YouTube"]','div[role="dialog"] ~ div[role="menu"] > div[role="menuitem"] > div > div:not([style*="background-image"])'],css:`div[role="toolbar"] div[role="button"] > div[class*='-']:not([onclick]):not(:link):not(:visited):not([style*="background-image"]):first-child,
div[role="toolbar"] div[role="button"] > div[class*='-']:not([onclick]):not(:link):not(:visited) > :nth-child(2) > div,
div[style="bottom: 0px;"] > div[style^="opacity:"] div[role="button"] > div:not([onclick]):not(:link):not(:visited),
li[guidedhelpid="classworkTopicListGh"]:not(hover) > div {
    opacity: 99% !important;
}`},{url:["claude.ai"],invert:['img[src="/anthropic_app_icon.png"]'],css:`.bg-gradient-to-b {
    background-image: linear-gradient(to bottom, hsl(var(--darkreader-neutral-background)/1), hsl(var(--darkreader-neutral-background)/0)) !important;
}`},{url:["cleantechnica.com"],css:`body {
    background-color: #1d1e1f !important;
    background-image: none !important;
}`},{url:["clever.com"],css:`img[alt="i-Ready icon"],
img[alt="Google Meet icon"],
img[alt="Google icon"] {
    background-color: white !important;
}
.background-container {
    z-index: 1 !important;
}`},{url:["click.endnote.com"],invert:['img[src="/static/images/settings/web-of-science.png"]']},{url:["click.endnote.com/viewer?doi="],invert:["canvas"]},{url:["clients.servarica.com"],invert:[".logo"]},{url:["cloud.databricks.com","pages.databricks.com","*.azuredatabricks.net"],invert:[".figure","#sparkui-iframe-body #plan-viz-graph svg g.cluster rect","#sparkui-iframe-body #plan-viz-graph svg g.node rect",".monaco-editor .cursors-layer .cursor"],css:`text {
    fill: \${black};
}
.cm-string {
    color: rgb(132, 179, 235) !important;
}
.cm-keyword {
    color: rgb(232, 121, 172) !important;
}
.cm-variable-2 {
    color: rgb(97, 215, 255) !important;
}
li.CodeMirror-hint {
    font-family: Source Code Pro, Menlo, monospace;
}
span[role="presentation"] {
    color: \${black} !important;
}
.CodeMirror-cursor {
    border-left-color: \${black} !important;
}
.ansiout {
    color: \${rgb(85, 85, 85)} !important;
}
.rm-modal {
    background: var(--darkreader-neutral-background) !important;
}`},{url:["cloud.digitalocean.com"],css:`.sc-cwHptR,
.sc-eBMEME,
.sc-tNXst,
.sc-kOPcWz,
.sc-DRugm,
.sc-dtBdUo,
.sc-dJiZtA,
.sc-bMCYpw,
.js-input,
.ember-text-field {
    background-color: inherit !important;
}
.sc-uVWWZ {
    background-color: \${#dfe0e0} !important;
}
input[type="text"],
input[type="text"]::placeholder {
    color: var(--darkreader-neutral-text) !important;
}
.action-item {
    color: var(--darkreader-neutral-text) !important;
}
.sc-cbPlza::before,
.sc-gHCuMn::before,
.sc-itktkY::before,
.sc-dnreFw::before,
.sc-hnCoju::before,
.sc-eRdibt::before,
.sc-jcdlHQ::before {
    background: none !important;
    background-color: var(--darkreader-neutral-background) !important;
}
.sc-hmdomO[data-active-item=""] {
    background-color: \${#d0d3d3} !important;
}
.sc-gRtvSG {
    background-color: \${#e2e3e3} !important;
}`},{url:["cloudflare.com"],css:`.cover {
    background-image: none !important;
}`,ignoreInlineStyle:[".footer-bottom-row-margin > div > a > svg > path"]},{url:["cloudhostnews.com"],invert:[".site-title"]},{url:["cloudinfrastructuremap.com"],invert:["canvas.mapboxgl-canvas"]},{url:["cloudlinux.com"],invert:["img.mega-menu-logo"]},{url:["cloudways.com"],invert:[".md-button.md-primary.md-raised"]},{url:["cnbc.com"],invert:[".RenderKeyPoints-list li::before",".WatchLiveRightRail-logo"],css:`div[class^="FeaturedStories-styles-makeit-background"]::before {
    opacity: 0.1 !important;
}`},{url:["cnki.net"],invert:[".hello-yx-box",".klogin_header_Logo",".search-main > .input-box > .search-btn",".Logo"],css:`.foot-top {
    background-image: none !important;
}
.hello-yx-box {
    color: var(--darkreader-neutral-background) !important;
}`},{url:["cnn.com"],invert:['[data-test="section-link"] > svg:not(.business-logo-icon)',"img.metadata-header__logo"],css:`#header-nav-container::before {
    border-bottom-color: transparent !important;
}`,ignoreInlineStyle:["svg.cnn-badge-icon","svg.cnn-badge-icon > rect","svg.politics-logo-icon","svg.business-logo-icon"]},{url:["cnnews.chosun.com"],invert:[".logo"]},{url:["cobaltstrike.com","cobalt-strike.github.io"],invert:[".navbar-brand"]},{url:["code.qt.io"],invert:['td[class="logo"]',"select","input"]},{url:["code.visual","io.com"],invert:['img[src="/assets/icons/download_dark.svg"]'],css:`.home.linux .jumbotron .screenshot {
    background-image: url("/assets/home/home-screenshot-linux.png");
    padding-bottom: 82.65802%;
}
@media only screen and (min-width: 1200px) {
    .home.linux .jumbotron .screenshot {
        background-image: url("/assets/home/home-screenshot-linux-lg.png");
        padding-bottom: 68%;
    }
}`},{url:["codeberg.org","codeberg-test.org"],css:`main header .header-background-image {
    filter: brightness(50%) sepia(40%) !important;
}
main header .header-title {
    z-index: 1 !important;
}`},{url:["codecademy.com"],invert:[".CodeMirror-cursors",".CodeMirror-selected",'span[class^="burger"]',".cursor-solid"]},{url:["codeforces.com"],invert:["#header > div:first-child img",'#userActivityGraph rect[data-items=""]',".delete-resource-link",".action-link img",'.non-decorated img[src$="tablesorter-bg.gif"]',".tex-formula"],css:`.datatable,
.datatable > div,
.roundbox {
    border-radius: 6px;
}
.lt,
.rt,
.lb,
.rb,
.ilt,
.irt,
.roundbox-lt,
.roundbox-rt,
.roundbox-lb,
.roundbox-rb {
    display: none;
}
.backLava,
.leftLava {
    border-radius: 4.5px;
}
.backLava,
.leftLava,
.bottomLava,
.cornerLava {
    background: \${#BEBEBE} !important;
}
.sidebar-menu ul li {
    border-color: transparent !important;
}
.highlighted-row td,
.highlighted-row th {
    background-color: \${rgb(195, 205, 215)} !important;
}
#footer img[alt="TON"] {
    border-radius: 50%;
}`,ignoreInlineStyle:["#userActivityGraph rect"]},{url:["codewars.com"],invert:[".logo"]},{url:["codingame.com/ide"],css:`.cg-statement .statement-body span.var,
.cg-statement .statement-body var {
    color: var(--darkreader-neutral-background) !important;
}`},{url:["codio.com"],invert:[".cursor"]},{url:["coinbase.com"],css:`.hjbuvQ,
.kfQbHv {
    fill: \${black} !important;
}`},{url:["coindesk.com"],invert:['svg[class^="desktop-navigationstyles__StyledLogo"]']},{url:["coingecko.com"],invert:[".highcharts-background"]},{url:["colasoft.com"],invert:['img[alt="Colasoft"]']},{url:["coliss.com"],css:`body,
#container3,
#sidebar {
    background-image: none !important;
}`},{url:["color-hex.com"],invert:['img[src*="logo"]',".bgwhite",".bgwhite > .previewbox"],ignoreInlineStyle:[".colordvaline",".colordva",".palettecolordiv"]},{url:["colorhunt.co"],ignoreInlineStyle:[".palette > div"]},{url:["colorpicker.me"],ignoreInlineStyle:["html","body","button"]},{url:["colors.dopely.top"],invert:[".footer",".color-selector-icon"],css:`input.number-slider {
    filter: invert(10%) saturate(0%) !important;
}
img[src*="svg"],
.title {
    filter: invert(50%) !important;
}
.accountDopely__letter,
.editProfile__changeProfilePicture {
    filter: saturate(0%) brightness(50%) !important;
}
div[class*="text"],
a[class*="header"],
.navbar-dropdown-item__logo,
.navbar__listItem__button {
    filter: saturate(0%) !important;
}`,ignoreInlineStyle:[".ExpandPalette *",".toner-colors-container *",".color-picker"]},{url:["comenius.susqu.edu"],css:`body,
table,
td {
    background-image: none !important;
}`},{url:["comicfury.com"],css:`#wrapper {
    background-color: inherit !important;
    padding-bottom: 10px !important;
}
#footer {
    margin-top: 0px !important;
}`},{url:["comingsoon.net"],css:`body,
main {
    background-color: var(--darkreader-neutral-background) !important;
}`},{url:["comixology.com"],invert:[".comixology-logo",".primary-heading",".heading-content",".try-now",".unlimited-disclaimer"]},{url:["comma.ai"],invert:[".comma-header-logo",".comma-two-benefit-icon",".comma-landing-reviews-logo"]},{url:["commonvoice.mozilla.org"],invert:["div:not(.logo-container) > .main-logo",".hero-box .fading",".waves",".mars + .screenshot","#help-links img",".button.outline.rounded.hidden-sm-down img",".text-button.contribute-more-button.secondary path"],css:`.language-select .current {
    --white: var(--darkreader-bg--white) !important;
}`},{url:["commscope.com"],invert:[".commscope-logo"]},{url:["community.cloudflare.com"],css:`:root {
    --darkreader-text--primary-medium: \${gray} !important;
}`},{url:["community.mimecast.com"],css:`.cb-section_background {
    mix-blend-mode: multiply !important;
}`},{url:["community.notepad-plus-plus.org"],invert:[".forum-logo"]},{url:["community.ntppool.org"],invert:["#site-logo"]},{url:["community.progress.com"],css:`:root {
    --lwc-colorContentAreaBackground: var(--darkreader-neutral-background) !important;
    --lwc-pageHeaderColorBackground: \${rgb(243, 243, 243)} !important;
}`},{url:["compass.pressekompass.net"],invert:[".logo-holder .brand-logo"],ignoreInlineStyle:["text"]},{url:["computerhope.com"],invert:["#text-tool > p > img"]},{url:["computeruniverse.net"],css:`select.SortByBase_select__uXyP4,
button[class*="Button_headerLightBlue"] {
    background-color: #092846 !important;
    color: rgb(232, 230, 227) !important;
}
select.SortByBase_select__uXyP4 option {
    background-color: rgb(24, 26, 27) !important;
}`,ignoreImageAnalysis:[".SortByBase_select__uXyP4"]},{url:["comsol.com"],invert:["div.latex","div.Eqn"]},{url:["confectioneryproduction.com"],invert:["#mainLogo img"]},{url:["confluence.*"],invert:[".gliffy-text-with-shape-parent-primary",".gliffy-text-with-shape-parent-secondary",".gliffy-text-with-shape-parent-tertiary",".gliffy-text-with-shape-parent-highlight"],css:`.geDiagramContainer rect,
.geDiagramContainer path {
    filter: brightness(60%);
}`},{url:["consent.yahoo.com"],invert:[".consent-wizard-body > .image-container > .image.yahoo"]},{url:["console-openshift-console.*"],css:`.pf-c-dropdown__menu {
    background-color: var(--darkreader-neutral-background) !important;
}`},{url:["console.cloud.google.com"],css:`.cfc-ng2-region .cfc-text-title-3 {
    color: var(--darkreader-neutral-text) !important;
}
.cfc-color-text-secondary {
    color: \${#333} !important;
}
input[type=text] {
    color: var(--darkreader-neutral-text) !important;
}
.cfc-outline-focus-indicator {
    background: var(--darkreader-neutral-background) !important;
}
.bq-results-table-header-cell {
    background: var(--darkreader-neutral-background) !important;
}`},{url:["consumerlab.com"],invert:["#overlay-toggle > .collapsed",".header-link-home"],css:`span[style*="background-color: rgb(255, 255, 0)"] {
    background-color: #550 !important;
}`},{url:["contacts.google.com"],invert:['img[src*="rotate"]','img[src$="google_gsuite"]'],css:`img[src^="https://ssl.gstatic.com/social/contactsui/images/emptycontacts/emptycontacts_animation_"],
div > c-wiz[data-p^='%.@.[[1,3'] > div > div > div > div > div:first-child {
    filter: invert(93.7%) hue-rotate(180deg) contrast(90.6%) !important;
}`},{url:["containertoolbx.org"],css:`body,
img,
video,
iframe {
    filter: none !important;
}`},{url:["convertio.co"],invert:[".logo svg > :last-child",".api-cta-icon > svg",".logos.no-select > *"],css:`.softobar.js-softobar,
.footer {
    background-color: #1c1f20 !important;
}
.ct-tab {
    border-bottom-color: #525252 !important;
}
.footer-sitemap {
    border-bottom-color: #3e3e3e !important;
}
.col.copyright > p.logo > a {
    color: #9D9488;
}
.col.copyright > p.logo > a > svg > use {
    filter: none !important;
}`},{url:["cookiepedia.co.uk"],invert:[".main-logo",".footer-logo"]},{url:["coolblue.be","coolblue.nl","hotorangemedia.nl"],ignoreInlineStyle:[".header__logo-image > path"]},{url:["coolors.co"],css:`.generator_color {
    color: #fff !important;
}
.generator_color.is-light {
    color: #000 !important;
}`,ignoreInlineStyle:["#generator *"]},{url:["coopgames.eu"],invert:['img[alt="Online Co-Op"]','img[alt="Local Co-Op"]','img[title="PS2"]','img[title="PS3"]','img[title="PS4"]','img[title="PSP"]','img[title="PS Vita"]','img[title="DS"]','img[title="3DS"]','img[title="Switch"]']},{url:["coosp.etr.u-szeged.hu"],invert:[".latex"]},{url:["copilot.microsoft.com"],invert:['button[is="cib-button"] svg-icon','button[class$="icon-button"] svg-icon']},{url:["copitosystem.com"],css:`body {
    background-color: var(--darkreader-neutral-background) !important;
    background-image: none !important;
}`},{url:["copytonotion.com"],invert:[".inline"],css:`svg.absolute {
    visibility: hidden !important;
}`},{url:["corriere.it"],invert:[".footer__content div div img"]},{url:["corsair.com"],invert:["img.desktop",'img[src="/_ui/responsive/common/images/icon_cart_empty.png"]',"a.cart-close","input#search-btn",".swatch-white"]},{url:["costplusdrugs.com"],invert:['img[src$="MCCP-wordmark-denim.png"]']},{url:["courses.fit.cvut.cz"],css:`body {
    color: #909090;
}
.App.in-search {
    background-color: #212121 !important;
}
.UserMenu .user-initials {
    background-color: #616161 !important;
}
.CoursesItem .column-info > a:hover {
    color: #58c1ffba;
}
header {
    background-color: #212121 !important;
}
pre {
    color: #a8a6ab;
}
.header {
    background: none;
    border-bottom: 1px solid #676767;
}
main img {
    opacity: 0.8;
}
a {
    color: #58c1ffba;
}`},{url:["covims.org"],invert:['img[alt="Covims Logo.png"]']},{url:["cowkrakowie.pl"],invert:[".logo",".nav-logo"]},{url:["coze.com"],css:`.semi-spin-children * {
    background: none;
    background-color: var(--darkreader-neutral-background) !important;
}`},{url:["cplusplus.com"],css:`#I_mid,
#I_top {
    background-image: none;
}
img[src$=".png"] {
    background-color: white;
}`},{url:["cppm3144.itdhosting.de"],css:`.ppm_button {
    background: \${white} !important;
}
.tableContent img {
    background-image: url("https://cppm3144.itdhosting.de/niku/ui/uitk/images/odf.png") !important;
}`},{url:["cpulator.01xz.net"],invert:[".terminal-cursor",".cm-s-neat span.cm-tag"],css:`div.dev_uart_term .terminal-cursor {
    background: var(--darkreader-neutral-background) !important;
    color: var(--darkreader-neutral-text) !important;
}
.cm-s-neat span.cm-tag {
    color: #006000;
}`},{url:["cqksy.cn"],invert:['td[background="image/Index_QI_CenterBar.gif"]'],css:`table {
    background-color: var(--darkreader-neutral-background) !important;
}
td[background="image/Index_QI_CenterBar.gif"],
td[background="image/Index_QI_CenterBar.gif"] a {
    color: \${white} !important;
}`},{url:["crates.io"],ignoreInlineStyle:['svg[class^="_logo"] *']},{url:["creative.com"],invert:["div.small-logo img.creative-logo",'body:not(body[class^="storepage"]) div#all img.creative-logo',".sb-upgrade > h3",".sb-upgrade > p",".tws-series > h3",".tws-series > p"],css:`.input::placeholder {
    color: var(--darkreader-neutral-text) !important;
}`},{url:["creativecommons.org"],css:`main a {
    --underline-background-color: var(--darkreader-neutral-background) !important;
}`},{url:["creditkarma.com"],invert:[".navi-logo"]},{url:["crowdin.com"],invert:[".crowdin-navbar__logo","svg.logo-icon-projects",".file_type",".file_type.file_folder.file_branch","[class*=static-icon]"],css:`.main-menu-wrapper {
    background-color: var(--darkreader-neutral-background) !important;
}`},{url:["crunchbase.com"],invert:[".identifier-nav",".tab-label"],css:`.mat-tab-label-active {
    color: var(--darkreader-neutral-background) !important;
}`},{url:["crutchfield.com"],invert:[".logo-module svg"]},{url:["cryptostorm.is"],invert:['img[src*="lock.png"]','img[src*="storm.png"]'],css:`body > div {
    background-image: none !important;
}`},{url:["cs61a.org"],css:`table#calendar td {
    border-color: var(--darkreader-neutral-background) !important;
}`},{url:["css-tricks.com"],css:`.article-article {
    background: \${white} !important;
}`},{url:["cubawiki.com.ar"],invert:[".mwe-math-fallback-image-inline",".mwe-math-fallback-image-display"]},{url:["curseforge.com"],ignoreImageAnalysis:[".e-generic-header"]},{url:["cutlermaine.net"],css:`.sqs-block-button-element--medium:hover,
.sqs-block-button-element--large:hover {
    background: gray !important;
}`},{url:["cxp.cengage.com"],invert:['.owl_item_container img[src*=".gif"]','.ci-feedback img[src*=".gif"]','label img[src*=".gif"]','span.MathJax_SVG g[stroke="black"]'],css:`.owl_item_container img[src*=".GIF"] {
    background-color: \${black};
}
font[color="white"] {
    color: transparent !important;
}
div.tool-container.gradient > .controlButtons {
    background-image: none;
}
div.tool-container.gradient {
    box-shadow: none;
}`,ignoreInlineStyle:["span.MathJax_SVG g"]},{url:["cyberlink.com"],invert:[".logo_pc"]},{url:["cybernews.com"],ignoreInlineStyle:["svg *"]},{url:["cynkra.com"],invert:[".btn-outline-dark",".shadow",".navbar-dark .navbar-brand",".cynkra-logo-font"],css:`.btn-outline-secondary {
    color: var(--darkreader-neutral-text) !important;
}`},{url:["cyprus-mail.com"],invert:[".custom-logo-link"]},{url:["cysgliad.com"],invert:['img[src*="logo_cysill_arlein_cy.gif"]','img[src*="hysbyseb_arlein.gif"]',"div > img.gwt-Image"],css:`body {
    background-image: none !important;
}
div[tabindex] > div {
    background-color: var(--darkreader-neutral-background) !important;
    background-image: none !important;
}
textarea.cysilltextarea {
    border: none !important;
}`},{url:["czasnastopy.pl"],invert:[".brandinglogo-wrap"]},{url:["czypada.pl"],invert:["#map"]},{url:["czyztak.pl"],invert:['img[alt*="Logo"]']},{url:["d.hatena.ne.jp"],invert:['img[alt="Hatena Blog Tags"]']},{url:["d2l.ai"],invert:['img[src$=".svg"]']},{url:["daily.afisha.ru"],invert:['svg[class^="Logo"]',".headline__open",".search-icon",".sprite-search-black-26","mark"]},{url:["dailydot.com"],invert:["h1.u-about-pitch"],css:`svg.main-logo.inline-flex g g[fill="#110133"] {
    --darkreader-inline-fill: \${#110133} !important;
}`},{url:["dailyexpose.uk"],invert:[".header-image"]},{url:["dailymotion.com"],ignoreInlineStyle:['div[class*="logoContainer"] a svg path']},{url:["dailywritingtips.com"],css:`blockquote {
    z-index: 0 !important;
}`},{url:["daltonmaag.com"],invert:["#panel-3 img"]},{url:["danyk.cz"],css:`body {
    background-image: none !important;
}`},{url:["darcs.net"],invert:["#header > a > img"]},{url:["darksky.net"],invert:[".currentLocationButton",".searchButton",'span[class^="skycon swip"]',"#right-arrow","#left-arrow"]},{url:["dash.cloudflare.com"],invert:['a[data-testid^="link-homepage"]'],css:`.monaco-editor-background,
.monaco-editor .margin {
    background-color: \${rgb(226 229 231)} !important;
}`},{url:["dashboard.stripe.com"],css:`[data-auto-transform-background="true"] {
    background-color: var(--darkreader-neutral-background) !important;
}`},{url:["dashboard.thechurchapp.org"],invert:["#ember62"]},{url:["datacamp.com","*.datacamp.com"],css:`video#vjs_video_3_html5_api.vjs-tech {
    background-color: rgb(175, 175, 175, 0.5);
    transform: translate(0px, 0px) !important;
}
.css-hu6jey code {
    color: var(--darkreader-neutral-text) !important;
    mix-blend-mode: normal !important;
}
.css-hu6jey pre {
    color: var(--darkreader-neutral-text) !important;
    mix-blend-mode: normal !important;
}
.css-alxior code,
pre {
    color: \${#0f0f0f} !important;
    mix-blend-mode: difference !important;
}
.css-1ebl8to code,
pre {
    color: \${#0f0f0f} !important;
    mix-blend-mode: difference !important;
}`},{url:["daum.net"],css:`.txt_pctop,
.bg_login {
    background-image: none !important;
}`},{url:["dawn.com"],invert:['img[alt="Dawn Logo"]']},{url:["dc.sourceafrica.net"],css:`body {
    background-image: none !important;
}`},{url:["deadpixeltest.org"],css:`html {
    background-color: transparent !important;
}`,ignoreInlineStyle:["body"]},{url:["deadroots.net"],invert:["#header img"]},{url:["debian.org","*.debian.org","*.debian.net"],invert:[".community img",'img[src*="openlogo-100.jpg"]','img[src*="openlogo-50.png"]','img[src*="openlogo-50.svg"]','img[src*="openlogo-nd-75.png"]'],css:`body {
    background-image: none !important;
}
.header-logged-out {
    background-color: transparent !important;
}`,ignoreImageAnalysis:["#splash h1"]},{url:["debijbel.nl"],invert:[".siteLogo",".filter-item__link > img"]},{url:["decathlon.in"],css:`img {
    mix-blend-mode: normal !important;
}`},{url:["decathlon.pl"],invert:[".dkt_logo",".benefit-icon"],ignoreImageAnalysis:["*"]},{url:["deccanchronicle.com"],invert:['img[src$="logo.png"]']},{url:["decisionproblem.com"],invert:[".qChip"],css:`#giftShopDiv {
    color: \${white} !important;
}
.projectButton:disabled {
    color: \${gray} !important;
}`},{url:["deepl.com"],invert:[".dl_translator_link_container > img",".dl_ad_pro__features_item::before",".dl_logo_text",'img[class^="productNavigation-module--logoText"]',"img#languageSelectorIcon",'footer > div > div > div > div > a > img[alt="DeepL"]','div[class^="socialMediaLinks"] > a','div[class^="pageFooterV2-module--socialMediaLinks"] > a']},{url:["deeplearningbook.org"],invert:[".opened > img[src]"],css:`body {
    background-color: transparent !important;
}
#page-container {
    background-image: none !important;
}`},{url:["deew.dev"],css:`[data-darkreader-inline-fill] {
    fill: #dcdad7 !important;
}`},{url:["deezer.com"],css:`.slider-track .gradient-default {
    background-image: linear-gradient(1deg, var(--color-dark-grey-800) 13%, var(--color-white));
}`},{url:["defectivebydesign.org"],invert:[".block--views-repeat-offenders-block .views-row img",'img[src*="DRM-free label"]'],css:`.block--views-repeat-offenders-block {
    background: none !important;
}
.site-name a {
    background: url('https://www.defectivebydesign.org/sites/all/themes/dbd2/images/dbd-logo.png') top left no-repeat;
}
.l-region--navigation .menu li a,
.l-footer,
.l-footer .block__title {
    color: black;
}`},{url:["deftpdf.com"],invert:[".header__logo"]},{url:["dell.com"],invert:[".breadcrumbs",".cat-banner-text",".cfsf-ba-content-wrap",".hpg-cat-item-wrap svg"]},{url:["delphipraxis.net"],css:`.ipsNavBar_secondary {
    background-color: var(--darkreader-neutral-background) !important;
}
.ipsNavBar_secondary::before {
    border-bottom-color: var(--darkreader-neutral-background) !important;
}`},{url:["dennisbareis.com"],css:`body {
    background-image: none !important;
}`},{url:["deno.land"],invert:['img[src="/logo.svg"]']},{url:["dependencywalker.com"],css:`body {
    background-image: none !important;
}`},{url:["deraktionaer.de"],invert:[".close-dark"]},{url:["designobserver.com"],invert:[".dologo"]},{url:["deskmodder.de"],css:`#secondary {
    background-color: var(--darkreader-neutral-background) !important;
}`},{url:["desmos.com"],invert:['.dcg-calculator-api-container .dcg-grapher-2d .dcg-graph-outer[role="img"]',".dcg-calculator-api-container .dcg-grapher-3d"],css:`html[data-darkreader-scheme="dark"] .dcg-calculator-api-container :is(.dcg-graph-inner, .dcg-webgl-canvas) {
    filter: contrast(90%) saturate(200%) !important;
}
.dcg-calculator-api-container .dcg-container.dcg-inverted-colors {
    filter: hue-rotate(180deg) !important;
}
.dcg-calculator-api-container .dcg-grapher-3d .dcg-graph-outer {
    z-index: 1;
}`,ignoreInlineStyle:[".dcg-calculator-api-container .dcg-colored-icon",".dcg-calculator-api-container .dcg-color-swatch"]},{url:["detexify.kirelabs.org"],invert:[".symbol"]},{url:["dev.azure.com"],css:`:root {
    --nav-header-background: var(--darkreader-neutral-background) !important;
}`},{url:["dev.dota2.com"],css:`.navtabs li a.navtab:hover,
.navtabs li.selected a.navtab {
    color: black !important;
}`},{url:["dev.to"],invert:['img[src$=".svg"]','path[d^="M19.099 23.508c0"]'],css:`body,
h1,
h2,
h3,
h4,
h5,
h6,
a,
.content-classification-text {
    color: $(#e8e6e3) !important;
}`},{url:["developer.android.com","source.android.com","developer.android.google.cn","tensorflow.org","quantumai.google","cloud.google.com","webrtc.org"],invert:[".devsite-site-logo"],css:`:root {
    --devsite-background-1: var(--darkreader-neutral-background) !important;
    --devsite-background-3: \${#f1f3f4} !important;
    --devsite-footer-background: var(--darkreader-neutral-background) !important;
    --devsite-header-color-upper: var(--darkreader-neutral-background) !important;
    --devsite-inline-code-background: \${#f1f3f4} !important;
    --devsite-search-form-background-active: rgba(255, 255, 255, 0.05) !important;
    --devsite-searchbox-active: rgba(255, 255, 255, 0.05) !important;
    --devsite-searchbox-hover: rgba(255, 255, 255, 0.1) !important;
    --devsite-searchbox-inactive: rgba(255, 255, 255, 0.05) !important;
    --devsite-table-heading-background: var(--darkreader-neutral-background) !important;
}
devsite-search .devsite-searchbox::before {
    background-color: unset !important;
}
.devsite-wrapper,
button {
    background-color: inherit !important;
    border-color: rgba(255, 255, 255, 0.1) !important;
}
devsite-header .devsite-top-logo-row-wrapper-wrapper,
.devsite-article {
    border-color: rgba(255, 255, 255, 0.05) !important;
}
[role="menu"],
.toggle-button,
devsite-book-nav .devsite-book-nav-filter,
.devsite-nav-accordion,
tr,
code,
devsite-code,
devsite-selector,
devsite-selector devsite-tabs[connected],
devsite-recommendations,
devsite-footer-promos .devsite-footer-promos-list,
devsite-footer-utility .devsite-footer-sites,
devsite-footer-linkboxes .devsite-footer-linkboxes-list,
devsite-playlist .devsite-playlist--section-quiz,
devsite-footer-promos {
    border-color: rgba(255, 255, 255, 0.1) !important;
}
.devsite-breadcrumb-list {
    background: none !important;
}`},{url:["developer.apple.com"],invert:[".icon"],css:`.disabled {
    color: \${gray} !important;
}
pre,
.code-listing {
    background-color: var(--darkreader-neutral-background) !important;
}`,ignoreImageAnalysis:[".screen-hero",".screen-fonts",".screen-tabs",".screen-completion",".screen-swiftui"]},{url:["developer.chrome.com"],css:`.featured-card__title-bar > svg,
.card-title-bar > svg,
.navigation-rail__icon > svg {
    fill: \${black} !important;
}
.search-box__btn > svg {
    fill: \${white} !important;
}`},{url:["developer.mozilla.org"],invert:[".copy-icon",".bc-browsers > th > span::before",".bc-platforms > th::before","a.external::after",".bc-has-history > .bc-history-link",".ic-footnote",".ic-non-standard",".breadcrumbs-container li .breadcrumb-penultimate::after",".breadcrumbs-container li .breadcrumb::after","ul.main-menu .top-level-entry::before","span.icon","#browser_compatibility + a + figure .icon",".bc-level",".legend-icons"],css:`.logo-text,
.search-results-list mark {
    color: var(--darkreader-neutral-text) !important;
}`,ignoreImageAnalysis:[".main-page-content .code-example .copy-icon"]},{url:["developer.roblox.com"],invert:[".logo"]},{url:["developer.salesforce.com"],css:`.slds-tabs_card {
    background-color: var(--darkreader-neutral-background) !important;
}`},{url:["developer.workday.com"],invert:[".minimap"],css:`.monaco-editor-background,
.margin {
    background-color: var(--darkreader-neutral-background) !important;
}`},{url:["developers.arcgis.com"],css:`a {
    text-shadow: none !important;
}`},{url:["developers.facebook.com"],invert:['img[alt^="Follow us on "]','img[id="u_0_1e_Fc"]','img[src^="https://scontent.fiev25-1.fna.fbcdn.net/v/t39.2365-6/306317286_5514106962009770_3327930304024114088_n.jpg"]']},{url:["developers.google.com"],invert:[".devsite-google-wordmark"],css:`:root {
    --devsite-background-3: \${rgb(198, 198, 198)} !important;
    --devsite-breadcrumb-list-background: var(--darkreader-neutral-background) !important;
    --devsite-button-background: var(--darkreader-neutral-background) !important;
    --devsite-footer-background: var(--darkreader-neutral-background) !important;
    --devsite-header-color-upper: var(--darkreader-neutral-background) !important;
    --devsite-searchbox-inactive: var(--darkreader-neutral-background) !important;
}
button,
a.button,
.devsite-landing-row-item {
    border-color: var(--darkreader-border--devsite-select-border) !important;
}
.pre-style,
code,
pre {
    background: var(--darkreader-neutral-background) !important;
}
.devsite-table-wrapper > table > thead > tr > th {
    background-color: var(--darkreader-neutral-background) !important;
    color: var(--darkreader-neutral-text) !important;
}
devsite-selector {
    background: var(--darkreader-neutral-background) !important;
}
devsite-book-nav .devsite-nav-title.devsite-nav-active {
    background: var(--darkreader-bg--devsite-note-notice-background) !important;
}`},{url:["devuan.org"],invert:["#logo"]},{url:["dexie.org"],invert:['a[href="Download"]','img[src$="logo-dexie-black.svg"]']},{url:["dhmo.org"],css:`body {
    background-image: none !important;
}`},{url:["di.com.pl"],invert:['img[alt*="Dziennik Internautów"]'],css:`div#naglowek {
    background-image: none !important;
}`},{url:["diamondsdirect.com"],invert:['[alt="Diamonds Direct Logo"]']},{url:["dianping.com"],invert:[".logo"]},{url:["dice.com"],invert:["dialog input",".seds-button"],css:`.match-not-logged-in-outer,
.match-not-logged-in-row,
.chip_chip__cYJs6,
.sc-dhi-candidates-modal-2 {
    background: var(--darkreader-neutral-background) !important;
}
a.link-label,
.match-not-logged-in-outer a,
.tertiary {
    color: var(--darkreader-text--djv-color-dice-blue-dark) !important;
}
.location-display,
.job-employment-type,
.employment-type,
.card,
.time-stamp,
.seds p,
.seds h1,
.seds h2,
.seds h3,
.seds h4,
.seds h5,
.seds h6,
dialog :not(input) {
    color: var(--darkreader-neutral-text) !important;
}
dialog input {
    color: black !important;
}
.collapsed {
    background: linear-gradient(rgba(24, 26, 27, 0) -7%, rgba(24, 26, 27, 0.58) 23%, rgb(24, 26, 27) 45%) !important;
}
.see-more-text {
    background-color: #181a1b !important;
}`},{url:["dicetower.com"],css:`body {
    background-image: none !important;
}`},{url:["dict.cc"],css:`#langbar {
    background-image: none !important;
}`},{url:["dictionary.cambridge.org"],invert:[".cb.hao.lpt-2",".cb.hv-2.lmr-10"]},{url:["dictionary.com"],invert:[".elu13lxtzrRO8E8WYUVn",".tFCOipZXVYJAiob7tOp0"]},{url:["differencebetween.net"],css:`body,
#page-wrapper {
    background-color: var(--darkreader-neutral-background) !important;
}`},{url:["digg.com"],css:`.digg-story__title-link {
    color: \${black} !important;
}
.digg-story__description {
    color: \${black} !important;
}`},{url:["digi.hu"],invert:["ol.flex-control-nav"],css:`body.not-front {
    background-image: none;
}`},{url:["digitalextremes.zendesk.com"],invert:[".logo"]},{url:["disconnect.me"],invert:['img[src*="vpnCoverageMap"]','img[alt="Toolbar button"]',"#press-strip > div > img"],css:`#accordion {
    background-image: none !important;
}`},{url:["discord.com"],invert:['div[class^="botPermissions"] > ul > li > div > div > span::after'],css:`div[class^="pill"][class*="wrapper"] > span[class^="item"],
div[class*="modeUnread"] > div[class^="unread"] {
    background-color: var(--darkreader-neutral-text) !important;
}
nav[aria-label="Servers sidebar"] foreignObject {
    border-radius: 100% !important;
    mask: none !important;
    transition: all .5s;
}
nav[aria-label="Servers sidebar"] foreignObject:hover {
    border-radius: 30% !important;
}
path[class^="wavePath"] {
    fill: \${rgb(226, 224, 220)} !important;
}
:root {
    --num-grid-columns: 4 !important;
    --page-gutter: 24px !important;
    --page-max-width: 1260px !important;
    --section-spacing: 56px !important;
}
@media screen and (min-width: 768px) {
    :root {
        --num-grid-columns: 8 !important;
        --page-gutter: 40px !important;
        --section-spacing: 80px !important;
    }
}
@media screen and (min-width: 1024px) {
    :root {
        --num-grid-columns: 12 !important;
        --section-spacing: 120px !important;
    }
}`,ignoreInlineStyle:['div[class*="blobContainer"] > div > svg > mask','div[class*="blobContainer"] > div > svg > mask > use','div[class*="wrapper"] > svg > mask','div[class*="wrapper"] > svg > mask > use','div[class*="wrapper"] > svg > circle','mask[id*="svg-mask-avatar-status"] > *','mask[id*="svg-mask-status"] > *']},{url:["discourse.haskell.org"],invert:[".logo-big"]},{url:["discover.com"],invert:["img#flag","i.icon-help","i.icon-search","i.lock-icon","div.welcome-text-wrapper","div.slide--img.credit-card","div.slide--img.personal-loan","div.slide--img.home-loan"]},{url:["discover.forem.com"],invert:["body > div:nth-child(1) > svg:nth-child(1)"]},{url:["discovermagazine.com"],invert:['img[alt="Discover Magazine"]']},{url:["discovery.endeavouros.com"],invert:[".builder-item--logo .site-logo img"]},{url:["discuss.pixls.us"],invert:["#site-logo.logo-big"]},{url:["disk.yandex.*","docviewer.yandex.*"],invert:[".logo",".create-resource-popup-with-anchor .ufo-icon__icon"]},{url:["disney.*"],invert:[".disney-img"]},{url:["distrowatch.com"],invert:['img[src="images/cpxtu/dwbanner.png"]'],css:`input,
.NavMenu,
select,
td:not(.NewsDate):not(.NewsHeadline) {
    background-color: var(--darkreader-neutral-background) !important;
}`},{url:["ditu.baidu.com","map.baidu.com","maps.baidu.com"],invert:["#activity-banner-panel",".BMap_bubble_pop",".BMap_contextMenu",".BMap_cpyCtrl",".BMap_scaleBarBG",".BMap_scaleTxt",".BMap_simple_bubble_pop",".BMap_stdMpZoom",".BMapLabel","#bt_trafficCtrl",".cbtlinetop",".cbtToolBar",".icon","#iw_tool_icon",".jump_back","#map-operate","#maps",".message-banner","#message-panel",".more-device","#nearby-searchbox-hint","#nearby-searchbox-hint-center",".route-button",".tang-pass-qrcode-title","#userSignPanel"],css:`#newuilogo {
    filter: brightness(80%);
}
#sole-input {
    color: var(--darkreader-neutral-text) !important;
}`},{url:["djrankings.org"],css:`body,
li a,
.moduleContentInner {
    background-image: none !important;
}`},{url:["dlagentlemana.pl"],invert:["div.f-grid-3.logo-column > a > img","div.opineo-side-slider-widget > button",".logo-bar img"]},{url:["dle.rae.es"],css:`.bloque_publi DE,
.spr_fundacionlacaixa,
.spr_dle90x110,
.spr_logo-enclave-rae,
.spr_google-play-badge-100x39,
.spr_badge-appstore-lrg-96x28,
.spr_edtri,
.spr_ay,
.spr_cita,
.spr_unidrae,
.spr_consultas,
.spr_pnwe2,
img[src="/images/logos/ASALE2.png"],
img[src="/images/logos/rae.png"],
img[src="/images/LibroDeEstilo_300.jpg"],
img[src="/app/doc/es/img/dle.jpg"],
a[href="https://dej.rae.es"] > img.img-responsive.b-lazy.b-loaded,
img[src="/images/logos/BCRAEl.jpg"] {
    filter: invert(93.7%) hue-rotate(180deg) contrast(90.6%) !important;
}`},{url:["dmca.com"],invert:['img[alt="DMCA Logo"]']},{url:["dmit.io"],invert:[".logo"]},{url:["dnd.su"],css:`input,
select,
textarea,
.input-cast_time,
.input-style,
.input-select,
.button,
button:not(.lg-icon),
.workshop__checkbox .workshop__label::before,
.card-type,
.paper-1,
.desc .additionalInfo,
.subsection .additionalInfo,
.trumbowyg-editor .additionalInfo,
.social-menu ul,
#ya-site-form0 .ya-site-form__form .ya-site-form__input-text,
#ya-site-form0 .ya-site-form__submit {
    background-color: var(--darkreader-neutral-background) !important;
    background-image: none !important;
}`},{url:["dnd5e.wikidot.com"],css:`.feature {
    background-color: var(--darkreader-neutral-background) !important;
}
.feature.offcolor {
    background-color: \${rgb(255, 250, 180)} !important;
}
th {
    background-color: \${rgb(230, 216, 170)} !important;
}`},{url:["dndbeyond.com"],css:`.mon-stat-block,
.mon-stat-block::before,
.mon-stat-block::after,
body {
    background-color: var(--darkreader-neutral-background) !important;
    background-image: none !important;
}
.read-aloud-text,
.more-info::after,
.details-container::after {
    border-image: none !important;
}
::selection {
    background-color: var(--darkreader-selection-background) !important;
}`},{url:["dns-shop.ru"],css:`.star-rating__star svg g path {
    --darkreader-inline-fill: #afafaf !important;
    stroke: var(--darkreader-inline-fill) !important;
}
.star-rating__star[data-state="selected"] svg g path {
    --darkreader-inline-fill: #ffa319 !important;
}`},{url:["dnscrypt.pl"],invert:[".logo"]},{url:["dnsleaktest.com"],invert:['img[src$="logo.png"]','img[src$="what-is-a-dns-leak.png"]','img[src$="transparent-dns-proxy.png"]']},{url:["dnslytics.com"],invert:['img[src*="logo.png"]']},{url:["doba.pl"],invert:[".social",'img[src*="logo.png"]','img[src*="/img/powiaty/"]']},{url:["dobreprogramy.pl"],css:`header a[href="/"] svg {
    fill: #fff !important;
}`},{url:["doc.qt.io"],css:`:root {
    --content-bg-color: var(--darkreader-neutral-background) !important;
}`},{url:["doc.rust-lang.org"],css:`mark {
    color: var(--darkreader-neutral-text) !important;
}`},{url:["docs.asciidoctor.org"],css:`.doc .admonitionblock td.content,
.doc pre > code,
.doc p code,
.doc .colist > table code {
    background: var(--darkreader-neutral-background) !important;
}`},{url:["docs.codacy.com"],invert:['div.footer-logo > img[alt="Codacy"]']},{url:["docs.dagster.io"],invert:['img[alt="Dagster logo"]'],css:`#__next > div {
    background-image: none !important;
}`},{url:["docs.expo.dev"],ignoreInlineStyle:["tr svg *"]},{url:["docs.google.com"],invert:[".docs-icon",".punch-filmstrip-controls-icon","#docs-editor canvas",".docs-homescreen-icon",".kix-equation-toolbar-icon",".kix-equation-toolbar-palette-icon",".cell-input",".formula-content",".docs-instant-button-bubble-icon-container",".docs-gm .docs-dialog .modal-dialog-title-close::after",".docs-preview-palette-item",".goog-menuitem-checkbox",".goog-dimension-picker-unhighlighted",".goog-dimension-picker-highlighted","#docs-star",".rs-role-icon",".toggle-link-icon",".link-management-drop-down-icon",".vs-icon",".vpc-icon",".docs-analytics-img",".share-butter-copy-icon",".doc-previews-indicator-popover .docs-link-bubble-mime-icon",'img[src$="googlelogo_dark_clr_74x24px.svg"]','img[src$="google_gsuite"]',".exportUnderline",".freebirdMaterialIconIconEl",".quantumWizTogglePapercheckboxCheckMark",'#docs-titlebar-share-client-button .scb-button-icon:not([class*="white"])','body[itemtype*="PresentationObject"] #docs-titlebar-share-client-button .scb-button-icon',"g.punch-filmstrip-indicator > image",".docs-gm .docos-icon-overflow-three-dots-size",".docs-grille-gm3 .docs-sheet-status-avs .goog-flat-menu-button-dropdown"],css:`.docs-preview-palette-item {
    border: transparent !important;
}
.cell-input {
    background-color: \${black} !important;
    color: \${white} !important;
}
.cell-input > span,
.cell-input > font {
    --darkreader-inline-color: \${white} !important;
}
.kix-cursor-caret {
    border-color: \${black} !important;
}
.kix-selection-overlay {
    background-color: var(--darkreader-selection-background) !important;
    border: var(--darkreader-selection-background) !important;
}
.ia-invite-controls-area {
    background-color: transparent !important;
}
.docs-gm .docs-revisions-switch .apps-ui-material-slide-toggle-thumb {
    background-color: rgb(43, 46, 48) !important;
}
.docs-gm .docs-revisions-switch.apps-ui-material-slide-toggle-container-checked .apps-ui-material-slide-toggle-thumb {
    background-color: rgb(9, 64, 155) !important;
}
.docs-text-ui-cursor-blink {
    fill: \${black} !important;
}
.docs-title-input-label:not([style*="pointer-events: auto"]) > #docs-title-input-label-inner {
    visibility: hidden !important;
}
input.docs-title-input {
    background-color: var(--darkreader-neutral-background) !important;
    color: var(--darkreader-neutral-text) !important;
}
.sketchy-text-background + g g rect {
    fill: var(--darkreader-selection-background) !important;
}`,ignoreInlineStyle:[".cell-input > span"]},{url:["docs.google.com/picker"],invert:['#doclist div > div + div div[style="user-select: none;"]:not([role="tab"]):not([role="listbox"]):not([role="menuitemradio"]):not([role^="menu"]) > div:not([aria-pressed]):not([role="tab"]):not([class$="highlightsgrid"]):first-of-type','#doclist div > div + div div[role="menu"] div[role="menuitem"][style="user-select: none;"] div[aria-label] div[data-tooltip] + div',"#doclist div > div + div label + input + div[style]",'img[src$="search-black.png"]']},{url:["docs.gtk.org"],css:`.emblem.deprecated {
    background: var(--error-bg-color);
    color: var(--darkreader-neutral-text);
}
a.current {
    background: var(--darkreader-selection-background) !important;
}
svg .node a text {
    fill: var(--darkreader-neutral-text);
}`},{url:["docs.manim.community"],css:`.toc-drawer {
    background: var(--darkreader-bg--color-background-primary);
}
.sidebar-search-container {
    background: var(--darkreader-bg--color-admonition-background);
}
.sidebar-tree .current > .reference {
    background: var(--darkreader-bg--color-admonition-title-background--admonition-todo);
}`},{url:["docs.nestjs.com"],css:`:root {
    --darkreader-bg--primary-accent-color: var(--primary-accent-color) !important;
    --darkreader-bg--primary-color: var(--primary-color) !important;
}`},{url:["docs.opencv.org"],css:`#header,
.header,
.navpath ul,
.sm-dox,
body {
    background-image: none !important;
}`},{url:["docs.sentry.io"],invert:[".index-logo > img",'a.hover-card-link[href="/platforms/apple/"] > .image-frame','a.hover-card-link[href="/platforms/javascript/guides/nextjs/"] > .image-frame'],css:`.document-wrapper,
.promo-banner {
    background-color: var(--darkreader-neutral-background) !important;
}`},{url:["docs.soliditylang.org"],css:`.wy-body-for-nav {
    background-color: unset;
}`},{url:["docs.vyos.io"],css:`.wy-menu-vertical a {
    background-color: var(--darkreader-neutral-background) !important;
    color: var(--darkreader-neutral-text) !important;
}`},{url:["doctorswithoutborders.org"],invert:[".site-logo"]},{url:["documentfoundation.org"],invert:[".logo",'img[alt*="LibreOffice Initial Artwork Logo ColorLogoBasic"]']},{url:["documentliberation.org"],invert:['img[src="assets/Uploads/dlp/images/logo-calligra.png"]','img[src="assets/Uploads/dlp/images/logo-libreoffice.png"]']},{url:["docusign.com","*.docusign.com"],invert:['a[data-context="nav-main-logo"]','img[data-qa="header-docusign-logo"]']},{url:["dominos.*"],invert:[".card--overlay > .card__header .card--overlay__close"],css:`svg.trackerbarimage:not(.complete svg.trackerbarimage) {
    fill: var(--darkreader-neutral-background) !important;
}
.stage:not(.complete) > .title > span {
    color: var(--darkreader-neutral-background) !important;
}
.tracker-page-container div.tracker-module.pizza-tracker .tracker-container > div.stage.complete [class^="chevron-"] {
    fill: #689d30 !important;
}
.tracker-page-container div.tracker-module.pizza-tracker .tracker-container > div.stage [class^="chevron"] {
    stroke: var(--darkreader-neutral-text) !important;
}`},{url:["donald.pl"],invert:['a[href="/"]']},{url:["doodle.com"],invert:["svg.d-checkmark .d-background"]},{url:["doordash.com"],invert:['input[kind="RADIO"][id^="Toggle"]::after']},{url:["dotaunderlords.gamepedia.com","dota2.gamepedia.com","dota2.fandom.com"],css:`#right-navigation {
    background-image: none !important;
}`,ignoreImageAnalysis:["#left-navigation"]},{url:["dou.ua"],css:`.g-right-shadowed,
.img::before,
.img::after {
    background-image: none !important;
}`},{url:["downloads.khinsider.com"],css:`body {
    background: none !important;
}
#faux {
    background-image: none !important;
}`},{url:["dp.ru"],invert:[".logo-image"]},{url:["dribbble.com"],invert:[".site-nav-desktop-logo"]},{url:["drive.google.com"],invert:['div[role="menuitem"] svg','div[role="dialog"][style^="width: 350px;"] div[role="button"][tabindex="0"]','div[role="dialog"] ~ div[role="menu"] > div[role="menuitem"] > div > div:not([style*="background-image"])','img[src$="type/audio/mp3"]','div[role="listitem"] > div > div > div > svg[fill="#000000"] > path','div[role="menu"] > div > div[role="menuitem"] > div > div > div','div[data-label="nd"] > div > div > svg > path[fill="#000000"]','div[role="document"] > div[role="button"] .a-b-c','div > svg > circle[fill="white"]','img[src*="empty_state_trash"]','img[src$="google_gsuite"]','div[tabindex="-1"][role="toolbar"] > div > div > div > svg > path[d^="M10 18h4v-2h-4v2zM3"]','button[class="ao-search-infolder ao-hint"]','button[aria-checked="true"] > div > svg > path','button[aria-checked="true"] > div > span > svg > path'],css:`span[data-type="spelling"] {
    mix-blend-mode: normal !important;
}
div[role="menu"] div[role="menuitem"][class*=" "] > div > div > div,
div[role="button"][aria-disabled="true"] > div {
    filter: invert(50%) !important;
}
#request-access-icon,
img[src="https://ssl.gstatic.com/docs/doclist/images/empty_state_details.png"] {
    filter: invert(93.7%) hue-rotate(180deg) contrast(90.6%) !important;
}
:root {
    --dt-secondary-container: \${#f1f3f4} !important;
}
button[guidedhelpid="new_menu_button"] {
    background-color: \${#dbdde0} !important;
}
div[data-target="autopurgebanner"] > section {
    background: \${#dbdde0} !important;
}
div[role="toolbar"] div[role="button"],
div[role="toolbar"] div[role="presentation"][data-active="true"] > div[role="presentation"] {
    mix-blend-mode: normal !important;
}`,ignoreInlineStyle:['div[role="presentation"] svg','div[data-label="nd"] > div > div > svg > path[fill="#000000"]']},{url:["drive.google.com/file"],invert:['div[role="menu"] > div[role="menuitem"] > div > div > div','div[role="menu"] > div[role="menuitem"] > div > div'],css:`#request-access-icon {
    filter: invert(93.7%) hue-rotate(180deg) contrast(90.6%) !important;
}`},{url:["drive.google.com/picker"],invert:['div[role="menu"] div[role="menuitem"]:not([class*=" "]) > div > div > div','div[role="button"][tabindex="0"]'],css:`div[role="menu"] div[role="menuitem"][class*=" "] > div > div > div,
div[role="button"][aria-disabled="true"] > div {
    filter: invert(50%) !important;
}`,ignoreInlineStyle:['svg[class=""]','svg[class=""] *']},{url:["droid-life.com"],css:`.collection-posts__list .preview__picture {
    mix-blend-mode: normal !important;
}`},{url:["dropbox.com"],invert:[".dl-dropbox",".drops-empty-page-header-image",".restorations-education__df-help__image",".search__view--empty img",".plan-status-section__icon img",".dropbox-logo__type",'iframe[class^="previewhtml _previewContent"]',".toggle.toggle-block__toggle.dig-Toggle",".toggle.toggle-block__toggle.dig-Toggle.dig-Toggle--isToggled > span::after",".shared-with-members.audience-box.u-pad-top-xs.u-pad-bottom-s.u-mar-bottom-xs > .c-loader",".hp-card-carousel-dots",".loading-loading > .loading-img"],css:`.rc-inline-action-bar-container.brws-file-row-inline-action-bar {
    background: var(--darkreader-bg--color__core__secondary) !important;
}
svg.dig-GlyphLogo.dig-Waffle-row-logo path[fill="var(--color__glyph__accent)"] {
    --darkreader-inline-fill: var(--color__glyph__accent) !important;
}
svg.dig-GlyphLogo.dig-Waffle-row-logo path[fill="var(--color__glyph__primary)"] {
    --darkreader-inline-fill: var(--darkreader-text--color__standard__text) !important;
}
.dig-LabelGroup > div > input[aria-checked="false"] {
    background-color: var(--darkreader-bg--color__core__secondary) !important;
}
.dig-LabelGroup > div > input[aria-checked="true"] {
    background-color: var(--darkreader-text--color__core__secondary) !important;
}`,ignoreInlineStyle:[".home__suggest_image path",".selection-preview-pane__icon path",".dig-WordmarkLogo path"]},{url:["drupal.org"],css:`input[type="image"] {
    background: none;
}`},{url:["drvhub.net"],invert:[".vendors-block a img"],css:`.hero {
    background-color: \${white} !important;
    background-image: none !important;
}`},{url:["ds.163.com"],invert:[".c-slogan--normal"]},{url:["dsausa.org"],invert:[".navbar-toggler-icon",".swiper-container-horizontal .swiper-pagination-bullet"]},{url:["dspguide.com"],css:`#divPage {
    background-image: none !important;
}`},{url:["dtf.ru"],invert:["mark"]},{url:["duckduckgo.com"],invert:['.is-active.js-tw-card.bg-clr--white.tw-card > .tw-card__footer > a.js-tweet-action.tw-card__action.tw-card__link > [src="/assets/common/slider/twitter-like.svg"]','[src="https://duckduckgo.com/assets/icons/thirdparty/wikipedia.svg"]'],css:`.justify-content-center.align-items-center.flex-lg-column.flex-md-row.card-1.card > .card-body > h3,
.justify-content-center.align-items-center.flex-lg-column.flex-md-row.card-2.card > .card-body > h3,
.justify-content-center.align-items-center.flex-lg-column.flex-md-row.card-3.card > .card-body > h3,
.justify-content-center.align-items-center.flex-lg-column.flex-md-row.card-1.card > .card-body > p,
.justify-content-center.align-items-center.flex-lg-column.flex-md-row.card-2.card > .card-body > p,
.justify-content-center.align-items-center.flex-lg-column.flex-md-row.card-3.card > .card-body > p,
.js-hiring-open-pos.join__btn.mt-5.btn.col-sm-auto.col {
    color: var(--darkreader-neutral-background) !important;
}
.logo_homepage {
    background-image: url("https://duckduckgo.com/assets/logo_homepage.alt.v108.svg") !important;
}
.header__logo {
    background: no-repeat center url("https://duckduckgo.com/assets/logo_header.alt.v108.svg") !important;
}`,ignoreInlineStyle:["#color_picker_container .sample",".zci--color_codes .circle"]},{url:["duo.google.com"],invert:[".gb_se .gb_ye:not(.gb_Ae)"]},{url:["duolingo.com"],invert:[".Z392z","._24NNT",'[data-test="skill-icon"] + div img'],css:`button[aria-disabled="true"] {
    opacity: 0.3 !important;
}
button.WOZnx::before,
div._3C_oC::before {
    background-color: transparent !important;
}`,ignoreInlineStyle:['div[data-test="challenge-translate-prompt"] svg *','div[data-test="challenge challenge-translate"] svg *']},{url:["dvizhcom.ru"],invert:[".mobile-header-icon:nth-last-of-type(3)",".mobile-header-icon:nth-last-of-type(2)",".mobile-header-icon:nth-last-of-type(1)"]},{url:["dw.com"],css:`#bodyMover {
    background-image: none !important;
}`},{url:["dynadot.com"],invert:['img[data-src="/tr/mainsite2023/navbar-logo-dark-2023.png"]','img[data-src="/tc/img/logo/navbar-logo.svg"]',".icons-line img"]},{url:["dziennik.pl"],invert:['img[alt="Dziennik"]']},{url:["dziennikbaltycki.pl","dzienniklodzki.pl","dziennikpolski24.pl","echodnia.eu","expressbydgoski.pl","expressilustrowany.pl","gazetakrakowska.pl","gazetalubuska.pl","gazetawroclawska.pl","gk24.pl","gloswielkopolski.pl","gol24.pl","gp24.pl","gra.pl","gs24.pl","i.pl","kurierlubelski.pl","motofakty.pl","naszemiasto.pl","nowiny24.pl","nowosci.com.pl","nto.pl","pomorska.pl","poranny.pl","sportowy24.pl","strefaagro.pl","strefabiznesu.pl","strefaedukacji.pl","stronakobiet.pl","stronazdrowia.pl","telemagazyn.pl","to.com.pl","wspolczesna.pl"],invert:[".atomsArticleFoot__tools svg",".atomsCommentsExposition__icon svg",".atomsGalleryButtonsNavigation__left svg",".atomsGalleryButtonsNavigation__right svg",".atomsNavigationBreadcrumbs__content svg",".atomsNavigationFooterLinks__logo",".atomsSocialmediaExposition__content svg",".componentsGalleryNavbar__btn_close",".componentsGalleryNavbar__logo",".componentsNavigationMenu__logo",".componentsNavigationNavbar__logo",".componentsNavigationTopnavbar__icons div span svg",'a[href="https://i.pl/firmy"] svg','a[href="https://i.pl/szukaj"] svg'],css:`svg path[d^="M154.992 47.9999H128L13"],
svg path[d^="M64 28L68 24V15.9999H82"] {
    fill: \${black} !important;
}`},{url:["dzienniknaukowy.pl"],invert:[".top-logo"]},{url:["dziennikprawny.pl"],invert:['a[href="/"]',".fullba"],css:`.fullba {
    background-image: none !important;
}`},{url:["e.foundation"],invert:["img.attachment-full.size-full"]},{url:["ea.com"],invert:[".left_context .context dl dd.select",".modifyMobilePhoneBtn"],css:`img[src*="white-bg-ea-bg-global-white"] {
    display: none !important;
}
body.origin-com,
.left_context .context {
    background-image: none !important;
}
.body_foot .language .select_language .languageText,
.buttonstyle_3 span,
.origin-ux-drop-down-selection > span,
.origin-ux-button-primary > span,
.origin-ux-button-secondary > span {
    color: var(--darkreader-neutral-background) !important;
}`},{url:["eapteka.ru"],invert:['ymaps[class$="ground-pane"]','ymaps[class$="svg-icon-content"] > ymaps']},{url:["earthquake.usgs.gov"],invert:['img[src*="services.arcgisonline.com"]:not([src*="World_Imagery"])']},{url:["easybib.com/guides"],invert:[".hamburger-toggle svg"]},{url:["easypost.com"],invert:[".logo",".progress-bar"]},{url:["eatthis.com"],invert:["svg.site-logo"],css:`.header-leading-authority {
    background-color: var(--darkreader-neutral-background);
}`},{url:["eblocker.org"],invert:[".site-logo-img",'figure[class="aligncenter size-large is-resized"]']},{url:["ebok.pgnig.pl"],invert:['img[src*="logo"]']},{url:["ebok.vectra.pl"],css:`.side-floater {
    background-image: none !important;
}`},{url:["ebooks.cpm.org"],invert:['img[alt="Review and Preview problems below"]']},{url:["economist.com"],invert:["#ds-wordmark-1843 path:nth-child(5)"],css:`.css-1xqo7ld {
    color: transparent;
}`,ignoreInlineStyle:["#ds-economist-logo > path",".ds-share-link > svg > g > circle"]},{url:["eda.yandex.ru"],invert:[".DesktopHeader_logo",".DesktopLiteHeaderLayout_desktopLogoImage",".UiKitOrderStep_icon",".DesktopHeaderBlock_linkIcon",".Profile_chevronIcon",".DesktopCatalogPageSort_sliderIcon",".DesktopHeader_menuIcon","ymaps > ymaps > ymaps > canvas"]},{url:["edmworldmagazine.com"],invert:[".q_logo"]},{url:["edmworldshop.com"],invert:[".site-nav__link--burger",".site-header__logo-image"]},{url:["edstem.org"],css:`.tab-bar-dark .active .tbb-tab-side .fill {
    fill: rgb(34, 37, 38) !important;
}
.tab-bar-dark .tbb-tab-side .fill {
    fill: rgb(26, 28, 29) !important;
}`},{url:["education.github.com"],invert:['img[alt="GitHub Education"]',".octicon-logo-github"]},{url:["eduke32.com"],css:`.main {
    background-image: none !important;
}`},{url:["edulastic.com"],invert:["img.keyboardButton"]},{url:["eduserver.ru"],css:`section.content {
    background: var(--darkreader-neutral-background) !important;
}`},{url:["eevblog.com"],css:`#main_content_section > div > span,
#quickModForm > div > span,
#main_content_section > span {
    mix-blend-mode: color !important;
}
.frame,
.plainbox,
#header,
#content_section,
#footer_section {
    background: var(--darkreader-neutral-background) !important;
    color: var(--darkreader-neutral-text) !important;
}`},{url:["efa.mvv-muenchen.de","rad.mvv-muenchen.de"],invert:[".personalization",".swap",".footer_btn",".footer_btn_main"],css:`#incr_date,
#incr_time,
#decr_date,
#decr_time {
    filter: invert(100%) hue-rotate(180deg) brightness(80%) !important;
}
#search_fields_wrap .no_a img,
.fav {
    filter: invert(100%) hue-rotate(180deg) brightness(350%) !important;
}
#main_nav_wrap,
#mail_feedback,
#minimized_container,
.mined_ctr,
.ui-dialog .ui-dialog-titlebar,
.leaflet-popup-content-mdv-title,
.ui-widget-header {
    background-color: rgb(59,59,59) !important;
    border-bottom-color: rgb(123,123,123) !important;
}
#main_nav > li a {
    border-color: rgb(59,59,59) !important;
    color: rgb(123,123,123) !important;
}
p img {
    filter: invert(100%) hue-rotate(180deg) brightness(100%) !important;
}
[title="Fussweg"] {
    filter: invert(100%) hue-rotate(180deg) brightness(100%) !important;
}
.text_field {
    background-color: rgb(11, 14, 15);
    border-color: rgb(255 255 255);
}
input::placeholder {
    color: rgb(255, 255, 255) !important;
}
.leaflet-tile-pane {
    filter: invert(90%) hue-rotate(180deg) brightness(120%) !important;
}
.leaflet-marker-pane {
    filter: brightness(75%) !important;
}
input[type=radio]:checked + label {
    border-color: white !important;
    border-width: 1px;
}
input::placeholder {
    color: white !important;
    font-weight: bold;
}
.historyitem {
    color: white !important;
}`},{url:["eff.org"],invert:["#masthead .branding a",'#masthead #main-menu-nav form.search-site button[type="submit"]'],css:`select > optgroup,
select > optgroup > option {
    background-color: var(--darkreader-neutral-background) !important;
}
#masthead #main-menu-nav .pane-main-nav-menu > ul > li a::before {
    background-color: var(--darkreader-neutral-text) !important;
}`},{url:["elearning.utdallas.edu"],invert:[".contentBox.contentBox-edit",".content.clearfix"]},{url:["electrical-symbols.com"],invert:[".table-striped img"]},{url:["electrical4u.com"],invert:['img[src*="equation"]']},{url:["electricitymap.org"],invert:[".name",".circular-gauge",'img[alt="logo"]',".capacity",".mapboxgl-canvas"]},{url:["elektronik-kompendium.de"],invert:['img[src*="formel/"]','img[src*="schalt/"]']},{url:["element.io"],invert:[".header--logo--img",".ems-nav__logo"]},{url:["elementalmatter.info"],invert:['[src$="atom.gif"]','[src$="periodic-atomic.gif"]'],css:`td {
    background: var(--darkreader-neutral-background) !important;
}`},{url:["elementary.io"],ignoreInlineStyle:[".logotype-svg"]},{url:["eletimes.com"],invert:[".tdb-logo-img"]},{url:["elitepvpers.com"],invert:[".inlineimg",'img[src*="images/elitepvpers/buttons/"]'],css:`body,
td[id="userbarbg"],
.alt1,
.alt1Active,
.alt2,
.alt2Active,
.panel,
.panelsurround,
.thead,
.vBulletin_editor,
.fieldset,
.ticker,
#contentshadowwhite,
td[id="navbg"],
td[id="navstart"],
.signature-preview,
.cwcontent,
.cwalt {
    background-image: none !important;
}
.alt1,
.alt1Active,
.alt2,
.alt2Active,
.panel,
.panelsurround,
.thead,
.vBulletin_editor,
.fieldset,
.ticker,
#contentshadowwhite {
    border-color: var(--darkreader-neutral-background) !important;
}
td[id="userbarbg"],
td[id="navbg"],
td[id="navstart"] {
    background-color: color-mix(in srgb, var(--darkreader-neutral-text) 10%, var(--darkreader-neutral-background) 90%) !important;
}`},{url:["elle.com"],invert:[".css-lgctud .e1ccpyf90"]},{url:["elp.northumbria.ac.uk"],invert:[".selected-answer"]},{url:["emacswiki.org"],css:`body {
    background-color: var(--darkreader-neutral-background) !important;
}`},{url:["eman-physics.net"],invert:[".middle_area img"],css:`.middle_area {
    border-left-color: transparent !important;
}
.middle_area,
.maintxt,
.display {
    background: none !important;
}
body {
    background-color: var(--darkreader-neutral-background) !important;
}`},{url:["endeavouros.com"],invert:[".navbar-brand"]},{url:["endoflife.date"],css:`.bg-green-000,
.bg-yellow-200,
.bg-red-000 {
    color: var(--darkreader-neutral-text) !important;
}`},{url:["endomondo.com"],invert:[".header-shop-logo",".footer-shop-logo",".eoFeedWorkout-map-image",'.workoutMap img[src*="maps"]'],css:`.highcharts-background {
    fill: rgb(24, 26, 27) !important;
}
.highcharts-data-labels text {
    text-shadow: none !important;
}`},{url:["enduhub.com"],css:`.navbar .nav > li > a {
    text-shadow: rgb(40, 43, 54) 0px 1px 0px !important;
}
.blurme,
.blurme a {
    color: inherit;
    filter: unset;
}`},{url:["enea.pl"],invert:[".menu__logo",".navbar-brand",".slider-content > .slider-title"],css:`.col-lg-12.col-md-12 > div > div > p {
    color: var(--darkreader-neutral-background) !important;
}
.bkg-icon,
.left-bkg-icon {
    color: \${white} !important;
}`},{url:["engines4ed.org/hyperbook/"],css:`body {
    background-image: none !important;
}`},{url:["enjen.net"],css:`body {
    background-image: none !important;
}
input.input-medium {
    background-image: none !important;
}
select.input-small {
    background-image: none !important;
}`},{url:["eps.rs"],invert:[".racun-wrapper"]},{url:["ernestjones.co.uk"],invert:[".logo__img"]},{url:["esbuild.github.io"],css:`.progress {
    background: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, #181a1b 25%, #181a1b 75%, rgba(255, 255, 255, 0) 100%);
}`},{url:["eshop-switch.com"],invert:[".logo"]},{url:["eshot.gov.tr"],css:`a.navbar-brand img {
    filter: hue-rotate(90deg) invert(1) hue-rotate(90deg) saturate(15);
}
#heading .left,
#heading .sub-menu .left-xs,
#heading .sub-menu .right-xs {
    background-color: transparent !important;
    background-image: none !important;
}
section#announcements-area .container {
    background-image: none;
}`},{url:["esphome.io"],invert:["img.component-image"]},{url:["esquire.com"],invert:[".nav-logo"],css:`.marquee-logo-link > svg {
    background-color: \${black} !important;
}`},{url:["estadao.com.br"],invert:["#puzzleHolder",".puzzleField"]},{url:["etherrag.blogspot.com"],css:`body {
    background-color: var(--darkreader-neutral-background) !important;
    background-image: none !important;
}`},{url:["etsy.com"],invert:[".banner-container",".secondary-banner-title",".wt-radio label::before",".review-star.rating:not(.lit)","div.rating.nolit:not(:hover) > .ss-star"]},{url:["eu.community.samsung.com"],invert:['img[alt="search icon"]']},{url:["eukhost.com"],invert:[".navbar-brand"]},{url:["everdermlaser.hu"],invert:[".icon-salient-cart",".icon-salient-m-user"]},{url:["evernote.com"],invert:[".global-logo svg"]},{url:["evga.com"],invert:[".evga-logo-box"],css:`.product-specs .RadTabStrip .rtsLI .rtsLink {
    background-image: none !important;
}`},{url:["ewybory.eu"],invert:[".navbar-brand"]},{url:["excel.officeapps.live.com","*.officeapps.live.com"],invert:[".ewr-sheettable"],css:`#ceROOT_ELEMENT-0 > path.MSChart-HighContrast,
#ceId6_ > path.MSChart-HighContrast {
    fill: \${rgb(232, 230, 227)} !important;
}
.ewa-gridKeyHandler[style*="background-color: rgb(255, 255, 255)"] {
    background-color: var(--darkreader-neutral-background) !important;
}`},{url:["exercism.org"],invert:[".header-intro .c-icon","svg.rough-annotation"],css:`header.c-header-with-bg {
    background: var(--darkreader-neutral-background) !important;
}
.theme-light {
    --darkreader-bg--page-dashboard-background-image: none;
}`},{url:["exmo.me"],invert:["canvas"]},{url:["expedia.com"],invert:[".uitk-header-brand-logo"]},{url:["experian.com"],invert:[".logo"]},{url:["experiencia.xpi.com.br"],invert:["#yield-portal-header a.xpi__header__logo svg path","#yield-portal-header a.xpi__error__logo svg path","#chart-profitability > div:nth-child(2) > svg > g > g:nth-child(2) > g:nth-child(1) > g > g > g > g:nth-child(2) > g > g:nth-child(1) > g:nth-child(2) > g:nth-child(2) > g > text > tspan"],css:`#chart-patrimony g[role='menu'] ~ g tspan {
    color: var(--darkreader-neutral-text) !important;
}`},{url:["explainxkcd.com"],invert:[".mwe-math-fallback-image-inline",".mwe-math-fallback-image-display",".mw-ext-score",".main-footer-menuToggle",'img[src*="Loudspeaker.svg"]','img[alt="The Signpost"]'],css:`.diff-addedline .diffchange {
    background-color: \${lightblue} !important;
}
.diff-deletedline .diffchange {
    background-color: \${#feeec8} !important;
}`,ignoreInlineStyle:[".legend-color",'.infobox > tbody > tr > td[style*="background-color"]']},{url:["expressjs.com"],css:`body {
    background-image: none !important;
}`},{url:["extra.com.br"],css:`.product-card__image {
    mix-blend-mode: normal !important;
}`},{url:["ezgif.com"],invert:["#logo"]},{url:["ezschoolpay.com"],css:`.menuSideLabelSubHeader,
.forgotPassword,
.rememberMeCell > label,
.rmText {
    color: var(--darkreader-selection-text) !important;
}`},{url:["f-droid.org"],invert:[".anti-feature-icon"]},{url:["faasafety.gov"],css:`#navigation .rightBorder,
#footer {
    background: \${white} !important;
}
body {
    background-image: none !important;
}`},{url:["facebook.com"],invert:["._2o89","._2q08",".sx_af7fe0",".sx_7ed17e",".sx_a4a936",".sx_4d607f",".sx_aca067",".sx_77228a",".sx_51302f","._2yu5","._3iiv","._3pao",".kv0qyzoi",".sx_426ea6",".sx_b77acf","._2gb3","._7sjb",".sx_b9f33b",".sx_2e7846",".sx_6d18f4",".monochrome",".repliedLast",".sx_73ef60","._81u_ .img","._3ffs li","#profile_intro_card_bio i",'.uiScrollableAreaWrap .uiList button[type="submit"] i._3-8_',".editPhoto i._3-8_",".sx_08856a",".sx_ac12f7",".sp_hk4DJV_EEeW",".sp_V53xxlprDHX_1_5x",".sp_V53xxlprDHX_2x","#pagelet_ego_pane button .img._3-8_","#homepage_panel_promote_footer_pagelet button .img._3-8_","#event_tabs #reaction_units span img",".fbPlaceFlyoutWrap img","._83aj","._7xv1","._83ak","._8g4q"],css:`.fbNubButton {
    background-image: none !important;
}
.jewelItemNew ._33e {
    background-color: \${#d0d1d3} !important;
}
.sx_cf4e6b {
    filter: brightness(250%) !important;
}
._34k2 {
    filter: brightness(1000%) !important;
}
._3hx- ._4tdt,
._3hx- ._5wd4,
._3hx- ._6vu5 ._5w-5,
._3hx- ._1aa6::after,
._3hx- ._6vu5 ._31o4,
._3hx- ._2cnu:only-of-type ._5wdf,
._3hx- ._5w0o,
._3hx- ._5z-5,
._3hx- ._16ys._3e7u,
._3hx- ._49or .__6j,
._3hx- ._324d .__6j,
._llj {
    border-color: \${#eee} !important;
}
._3hx- ._ua1,
._3hx- ._40qi,
._3hx- ._5ye6,
._3hx- ._llj,
._3hx- ._1a6y,
._31o4,
._3_bp,
._4gd0,
._49or,
._40fu {
    background-color: \${#eee} !important;
}
.fbNub._50mz .fbNubFlyoutFooter::after {
    background-color: \${rgba(0, 0, 0, .15)} !important;
}
.fbNub._50mz .fbNubFlyoutInner,
._4cd8 ._69pt,
._4mq3 .fbNubFlyout,
._4mq3 .fbNubButton {
    box-shadow: 0 0 0 1px \${rgba(0, 0, 0, .15)} !important;
}
.__fb-light-mode {
    --filter-blue-link-icon: invert(73%) sepia(29%) saturate(200%) saturate(200%) saturate(200%) saturate(200%) saturate(200%) saturate(200%) saturate(103.25%) hue-rotate(189deg) brightness(101%) contrast(101%) !important;
    --filter-disabled-icon: invert(100%) opacity(30%) !important;
    --filter-negative: invert(25%) sepia(33%) saturate(200%) saturate(200%) saturate(200%) saturate(200%) saturate(200%) saturate(200%) saturate(110%) hue-rotate(345deg) brightness(132%) contrast(96%) !important;
    --filter-placeholder-icon: invert(59%) sepia(11%) saturate(200%) saturate(135%) hue-rotate(176deg) brightness(96%) contrast(94%) !important;
    --filter-positive: invert(37%) sepia(61%) saturate(200%) saturate(200%) saturate(200%) saturate(200%) saturate(115%) hue-rotate(91deg) brightness(97%) contrast(105%) !important;
    --filter-primary-icon: invert(100%) !important;
    --filter-secondary-icon: invert(62%) sepia(98%) saturate(12%) hue-rotate(175deg) brightness(90%) contrast(96%) !important;
    --filter-warning-icon: invert(77%) sepia(29%) saturate(200%) saturate(200%) saturate(200%) saturate(200%) saturate(200%) saturate(128%) hue-rotate(359deg) brightness(102%) contrast(107%) !important;
}
.__fb-light-mode {
    --darkreader-border--messenger-card-background: var(--darkreader-bg--messenger-card-background) !important;
}
.__fb-dark-mode {
    --darkreader-border--messenger-card-background: #1c1e20 !important;
}
div[role=article] div.k4urcfbm[aria-hidden="true"] {
    --darkreader-inline-bgcolor: none !important;
    background-blend-mode: color;
    background-color: rgba(0, 0, 0, 0.25);
}
div[data-pagelet="Stories"] .ha302278 {
    background-color: rgba(0, 0, 0, 0.4) !important;
}
div[aria-label="Change volume"] .ha302278,
div[aria-label="Change Position"] .ha302278,
._3paq {
    background-color: rgba(255, 255, 255, 0.4) !important;
}
.r4vyqqch {
    background-color: var(--fds-white-alpha-50) !important;
}
.lyi53s4r {
    background-color: rgba(88,144,255,.9) !important;
}
.tdjehn4e,
.oo1teu6h {
    background-color: rgba(255, 255, 255, 0.1) !important;
}
.tdjehn4e:hover,
.ovq5dppa:hover {
    background-color: rgba(255, 255, 255, 0.2) !important;
}
.k19f6yf2 {
    background-color: var(--press-overlay) !important;
}
.cxbav39q {
    background-color: rbga(0, 0, 0, 0.8) !important;
}
.rnr61an3 {
    background-color: var(--hover-overlay) !important;
}
.qbubdy2e {
    fill: none !important;
}
.s1i5eluu {
    background-color: var(--primary-button-background) !important;
}
.q66pz984 {
    color: var(--accent);
}
.esnais5j,
._8bb_ img,
._8bb_ i,
._8bb_ video,
._8bb_ ._w80,
._8bb_ ._7umt ._47yj,
._8bb_ [style*='background-image: url'] {
    filter: none !important;
}
div[role="button"] > i.hu5pjgll:not(.sp_Jc8OKpJq5NW, .sp_T89CCTT7d9Z),
a[role="link"] > i.hu5pjgll,
._3w97,
svg[role="presentation"] {
    filter: var(--filter-secondary-icon) !important;
}
._2yua,
._3pas {
    background-color: #888 !important;
}
._2yu8 {
    background-color: rgba(255, 255, 255, .5) !important;
}
.leaflet-map-pane img[src*="theme=default"],
[style*="map"][style*="theme=default"],
._8bb_ img[src*="/map"],
._8bb_ [style*="map"],
img[src*="mapy.cz"],
._8bb_ img[src*="mapy.cz"],
img[src*="%2Fmap"],
._8bb_ img[src*="%2Fmap"],
img[src*="map.php"],
._8bb_ img[src*="map.php"],
img[src*="www.traseo.pl%2Froute"],
._8bb_ img[src*="www.traseo.pl%2Froute"] {
    filter: invert(100%) hue-rotate(180deg) !important;
}
.j7vl6m33 {
    fill: var(--always-white) !important;
}
::after {
    border-bottom-color: #1c1e20 !important;
    border-left-color: #1c1e20 !important;
    border-right-color: #1c1e20 !important;
    border-top-color: #1c1e20 !important;
}
.x1g6sh6t {
    fill: none !important;
}
div[style*="background-image"] {
    text-shadow: rgb(40, 43, 54) 0px 0px 3px !important;
}
.x1qhmfi1 {
    background-color: rgba(255,255,255,.1) !important;
}`,ignoreInlineStyle:['[role="button"] svg','[role="button"] svg line','div svg[viewBox="0 0 36 36"] mask path',"mask > rect","mask > circle","g > rect",".html-div svg path"],ignoreImageAnalysis:["*"]},{url:["fairhotel.org"],invert:[".btn-close",".gm-ui-hover-effect > span",".navbar-brand > img"]},{url:["fairtradeoriginal.*"],invert:[".SiteLayout",".SiteLayout > *",".Inset-image"]},{url:["fairvote.org"],css:`.bg-dark-red {
    background-color: rgb(229 89 80/var(--tw-bg-opacity)) !important;
}
.bg-primary,
.header-navigation > nav#desktop-nav .nav-backdrop,
.header-navigation > nav#desktop-nav > ul > li > .content-link:after {
    background-color: rgb(71 24 120/var(--tw-bg-opacity)) !important;
}
.header-navigation > nav#desktop-nav .submenu ul.menu-list.third-level > li {
    border-color: rgb(255 255 255/var(--tw-border-opacity)) !important;
}`},{url:["fakespot.com"],invert:[".fs-logo",".logo",".logo-click",".press-logo-container",".app-button > img",'img[alt="Header menu"]']},{url:["fakt.pl"],invert:[".header-links"]},{url:["fallout.wiki"],invert:[".cosmos-actions-talk svg",'img[src*="Hat_arrow.png"]'],css:`@media screen and (min-width: 850px) {
    body::after {
        z-index: 0 !important;
    }
}
.user-anon #cosmos-banner {
    position: sticky !important;
}
.k-player .control-bar {
    background: var(--darkreader-neutral-background) !important;
}`},{url:["fanatical.com"],invert:[".trustpilot > .logo-container > a > img"],ignoreInlineStyle:["div.drm-container svg g"]},{url:["fandom.com","*.fandom.com"],invert:[".mobile-global-navigation__logo",".wds-global-navigation__logo-fandom",'a[href^="https://auth.fandom.com/auth/redirect?redirect="][data-test="back-button"]',".mwe-math-element"],css:`body {
    background-color: var(--darkreader-neutral-background) !important;
}
#mixed-content-footer,
.community-header-wrapper,
.top-ads-container,
.bottom-ads-container,
.global-footer {
    z-index: 1 !important;
}
.fandom-community-header__background.cover {
    z-index: 0 !important;
}
a[href^="https://auth.fandom.com/auth/redirect?redirect="][data-test="back-button"] {
    color: \${white} !important;
}`,ignoreInlineStyle:[".wds-global-navigation__logo-image g path",".wds-global-footer__header-logo g path",".wds-global-footer__link svg g path",'symbol[id^="wds-brand-other"] *']},{url:["fanfiction.net"],css:`#content_wrapper_inner,
#p_footer,
body,
.content_wrapper_inner,
.lc-left,
.lc,
.xcontrast_outer,
.zmenu {
    background-color: var(--darkreader-neutral-background) !important;
    background-image: none !important;
}
.btn {
    background-image: none !important;
}
#search_keywords,
select {
    background-color: var(--darkreader-neutral-background) !important;
}`,ignoreInlineStyle:["body"]},{url:["fantasy.premierleague.com"],invert:[".ism-table"]},{url:["farside.ph.utexas.edu","mathpages.com","mathprofi.ru","mathprofi.net","mathworld.wolfram.com","reference.wolfram.com","terrytao.wordpress.com","wolframalpha.com"],invert:['img:not([src^="/_next/static/images/"])']},{url:["fast.com"],invert:["div.logo","div.powered-by"],ignoreImageAnalysis:["div.logo","div.powered-by"]},{url:["fastmail.com"],invert:[".logo svg"]},{url:["fastmail.com/mail"],css:`.app-listItem.is-focused,
.app-source.is-selected {
    background-color: \${lightgray} !important;
}
.app-source.is-focused {
    background-color: \${lightblue} !important;
    color: \${black} !important;
}
.v-MailboxItem-unreadbadge {
    background-color: \${darkblue} !important;
}
.v-Message-body {
    border-color: transparent !important;
}`},{url:["fatmap.com"],css:`.activity-filter-single-click svg.icon {
    fill: \${black} !important;
}
.stats-container-small svg.ruler-icon {
    fill: \${#333} !important;
}`,ignoreInlineStyle:["svg.icon"]},{url:["fau.de"],invert:[".baselogo"],css:`.accordion-toggle:not(.active) {
    background-color: \${lightgrey} !important;
}
.accordion-toggle.active,
.accordion-toggle:hover {
    background-color: #032755 !important;
}`},{url:["fax.plus"],invert:['img[src$="_info.svg"]']},{url:["fckng-serious.de"],invert:[".logo"]},{url:["fcmed.pl"],invert:[".mkd-logo-wrapper",'a[href*="tel"]',".mkd-sidearea > .textwidget > a > img",".owl-wrapper"]},{url:["fedex.com"],css:`.fx-global-prelog-link.fx-showlogin span {
    background-image: none !important;
}`},{url:["fedica.com","account.fedica.com"],invert:[".topleftLogo"]},{url:["fedoraforum.org"],invert:[".logo-image"]},{url:["feedly.com"],css:`.entry.u0:hover,
.entry--selected.u0,
.entry--selected.u0:hover,
.entry--selected.u4,
.entry--selected.u5,
button.secondary:hover {
    background-color: \${#ccc} !important;
}`},{url:["feynmanlectures.caltech.edu"],invert:['.figure > img[src$=".svgz"]']},{url:["ffmpeg.zeranoe.com"],invert:[".active"]},{url:["fgo.gamepress.gg"],css:`.TLW-tier-charname {
    color: \${black} !important;
}
#content-inner {
    background-image: none !important;
}`},{url:["fibermap.it"],invert:['img[src$="assets/images/bg-cloud.png"]']},{url:["figma.com"],css:`:root,
.blog-body {
    --darkreader-bg--global-bg-color: var(--darkreader-neutral-background) !important;
    --darkreader-text--global-color: var(--darkreader-neutral-text) !important;
    --global-bg-color: var(--darkreader-neutral-background) !important;
    --global-color: var(--darkreader-neutral-text) !important;
}`,ignoreInlineStyle:['div[class*="paint_panels--chit"]','div[class*="modal--modalShadow"] div',".blog-body"]},{url:["fileformat.info"],invert:['[src$="logo_wide.png"]',".thumbnail"],css:`body {
    background-color: var(--darkreader-neutral-background) !important;
    background-image: none !important;
}`},{url:["filetransfer.io"],invert:["a.logo"]},{url:["filmweb.pl"],invert:[".ribbonLbl",'.isInit.ribbon[data-state="1"]::after','.isInit.ribbon[data-state="2"]::after','.isInit.ribbon[data-state="3"]::after','.isInit.ribbon[data-state="4"]::after','.isInit.ribbon[data-state="5"]::after','.isInit.ribbon[data-state="6"]::after','.isInit.ribbon[data-state="7"]::after','.isInit.ribbon[data-state="8"]::after','.isInit.ribbon[data-state="9"]::after','.isInit.ribbon[data-state="10"]::after'],css:`.filmInfo__info {
    color: var(--darkreader-neutral-text) !important;
}`},{url:["filterlists.com"],ignoreInlineStyle:["header.ant-layout-header img"]},{url:["final-fantasy.ch"],css:`nav ul li:first-child span,
h1 {
    color: #000 !important;
}
input[type="submit" i],
input[type="file" i] {
    background-color: \${#c7c7c7} !important;
    color: var(--darkreader-neutral-text) !important;
}`},{url:["finn.no"],invert:["finn-footer","article.ads__unit overflowmenu-active"],ignoreInlineStyle:["svg *"]},{url:["fio.fnar.net"],invert:[".chartjs-render-monitor"]},{url:["firebase.google.com"],invert:[".devsite-site-logo"],css:`.c5e-input-container input[type="text"],
.c5e-input-container input[type="password"],
.c5e-input-container input[type="url"],
.c5e-input-container input[type="number"],
.c5e-input-container input[type="email"],
.c5e-input-container input[type="search"],
.c5e-input-container input[type="time"],
.c5e-input-container input[type="tel"],
.c5e-input-container md-select,
.c5e-input-container mat-select,
.c5e-input-container textarea {
    color: var(--darkreader-bg--fire-color-grey-primary) !important;
}`},{url:["firefox.com"],invert:[".fx-bento-app-link.fx-bento-link.fx-mobile > span::before"]},{url:["firefox.net.cn"],css:`.btn,
.core_follow,
.pop_deep .ct dt.reward,
.pages a,
.pages strong,
.design_mode_edit,
.pop_showmsg {
    background-image: none;
}`},{url:["firstcontributions.github.io"],css:`.App,
.topnav {
    background-color: \${CornflowerBlue};
}`},{url:["fivepost.ru/o"],css:`svg[class^="OrderQRCode__StyledQRCode"] {
    background-color: var(--darkreader-neutral-text) !important;
}
svg[class^="OrderQRCode__StyledQRCode"] > path[fill="#000000"] {
    fill: var(--darkreader-neutral-text) !important;
}`},{url:["fiverr.com"],ignoreInlineStyle:[".site-logo *"]},{url:["fivethirtyeight.com","*.fivethirtyeight.com"],invert:[".logo",".abclogo",".site-logo","#searchform",".header-espn-link"],css:`.domain,
.win-prob,
.winSentText {
    stroke: none !important;
}`},{url:["flaggenlexikon.de"],invert:['img[src="https://www.flaggenlexikon.de/pix/flaggenlexikon.gif"]'],css:`body {
    background-image: none;
}
[background="higru.gif"] {
    background: var(--darkreader-neutral-background);
}`},{url:["flashscore.com.tr"],invert:[".header__logo"]},{url:["flatuicolors.com"],ignoreInlineStyle:[".color"]},{url:["flightfinder.fi"],invert:[".logo"]},{url:["flipslibrary.com"],css:`:root {
    --main-background: var(--darkreader-neutral-background) !important;
    --sidebar-background: var(--darkreader-neutral-background) !important;
}`},{url:["flow.polar.com"],invert:[".brand",".detail-data-panel__icon",".sleep-chart-yaxis.end",".supergraph-canvas"],css:`.highcharts-container svg {
    fill: \${#3f3f3f} !important;
}
.card__item-icon--rounded img {
    background-blend-mode: color;
    background-color: rgba(255, 255, 255, 0.15) !important;
}
.altitudetitle,
.altdescmax,
.altdescmin,
.zonedesctitle,
.zonedescmax,
.zonedesclight,
.maxhighlightval,
.maxhighlightname {
    color: rgb(0, 0, 0) !important;
}
.highcharts-background {
    fill: none !important;
}`,ignoreInlineStyle:[".zonebox",".zonestartbox","stop"]},{url:["flowkey.com"],invert:["body.front #zone-branding-wrapper"],css:`body.html #page.page #subslogan {
    color: \${white} !important;
}`},{url:["fly.io"],css:`.post :not(a):not(pre):not(.changelog-item) > code {
    mix-blend-mode: normal !important;
}`},{url:["flyzipline.com"],invert:["#logo"],ignoreImageAnalysis:["#logo"]},{url:["foli.fi"],invert:['a[title="Etusivu"] svg','a[title="Home"] svg','a[title="Huvudsida"] svg',"button svg","nav g > g:nth-child(1)"]},{url:["follow.it"],invert:[".header-logo",".logo"]},{url:["fontawesome.com"],css:`#icons-header,
#docs-header,
#hero > div:not(.container),
.app-content.docs {
    background-color: var(--darkreader-neutral-background) !important;
}
.doc-nav > div {
    background-color: var(--darkreader-bg--background-norm) !important;
}
#search-header {
    background-color: var(--darkreader-neutral-background) !important;
}`},{url:["fontsinuse.com"],invert:[".fiu-header__branding",".fiu-sample-list__item img",".fiu-gallery-head__text img"]},{url:["fontspring.com"],invert:[".grid6 .fullwidth"]},{url:["fontsquirrel.com"],invert:[".fontlistitem"],css:`#main_content_container {
    background-image: none !important;
}`},{url:["foobar2000.org"],invert:['img[src="/foobarlogo.png"]']},{url:["food4less.com"],invert:['img[alt="Food4less logo"]']},{url:["foolcontrol.org"],css:`html {
    background-color: transparent !important;
}`},{url:["forem.com"],invert:['nav a > img[alt="Home"]',"#cta > section > div > div > img"]},{url:["forms.reform.app"],invert:[".logo"],css:`svg.text-white {
    color: var(--darkreader-neutral-background);
}`},{url:["forms.yandex.ru"],invert:[".header2__service-logo",".header2__logo-wrap"]},{url:["forsal.pl"],invert:[".serviceLogo",".homePageUrl"],css:`.mini-tabs {
    background-color: var(--darkreader-neutral-background) !important;
}`},{url:["forum.dobreprogramy.pl"],invert:["#site-logo"]},{url:["forum.donanimhaber.com"],css:`body {
    background-color: var(--darkreader-neutral-background);
}`},{url:["forum.eset.com","forum.ithardware.pl","forum.kaspersky.com","forums.getpaint.net","forums.laptopvideo2go.com","forums.warframe.com","nieidealny.pl/forum"],invert:[".ipsBadge_highlightedGroup",".ipsBadge_icon",".ipsBadge_popular",".ipsComment_authorBadge",".ipsItemStatus.ipsItemStatus_custom.ipsItemStatus_read",".ipsReact_button",'img[alt="Forum komputerowe ITHardware"]','img[alt="paint.net Forum"]'],css:`.ipsBadge {
    --darkreader-bg--badge--background: var(--darkreader-neutral-background) !important;
}
.ipsReact_reactCount > a,
.ipsReact_reactCount > span,
.elFullInbox_menu,
.ipsHovercard,
.ipsList_reset,
.ipsMenu_auto,
.ipsMenu_footerBar,
.ipsMenu_headerBar,
.ipsMenu_innerContent,
.ipsMenu_item,
.ipsMenu_sep,
.ipsMenu_title,
.ipsPadding,
.cUserHovercard,
a[data-mentionid] {
    background-color: var(--darkreader-neutral-background) !important;
}`},{url:["forum.ivao.aero"],invert:[".buttonlist"],css:`.cat_bar,
.cat_bar > *,
.catbg > * {
    background-color: var(--darkreader-neutral-background) !important;
    background-image: none !important;
    color: var(--darkreader-neutral-text) !important;
}
:not(a) > span,
:not(a) > span > *,
#footer {
    background: none !important;
}
.buttonlist a:not(.active) {
    color: var(--darkreader-neutral-background) !important;
}
ul.dropmenu li {
    background: var(--darkreader-neutral-background) !important;
    border: none !important;
}
ul.dropmenu ul {
    background: var(--darkreader-neutral-background) !important;
    border: 1px solid var(--darkreader-neutral-text) !important;
}`,ignoreInlineStyle:["#header"]},{url:["forum.kaosx.us"],invert:[".Header-logo"],css:`.Dropdown-toggle,
.item-refresh > Button,
.DiscussionList-loadMore > Button,
.LogInButton--github,
.Button--icon {
    background: \${#6f7f92} !important;
    color: \${black} !important;
}`},{url:["forum.manjaro.org"],css:`.below-footer-outlet.custom-footer {
    background-image: none !important;
}`},{url:["forum.miranda-ng.org"],css:`.firstlevel {
    color: \${#666666} !important;
}`},{url:["forum.p300.it"],css:`.ipsReact_reactCount > a {
    background-color: var(--darkreader-neutral-background);
    border-color: var(--darkreader-neutral-text);
}
.ipsType_normal {
    border-color: rgb(48,52,54);
}
.ipsMenu_headerBar,
.ipsMenu_footerBar,
.ipsEmoticons_category,
.ipsMenu_innerContent,
ul.ipsMenu,
.ipsMenu > ul,
a[data-mentionid],
.cUserHovercard {
    background-color: var(--darkreader-neutral-background) !important;
}`},{url:["forums.ankiweb.net"],css:`#user-content {
    background: transparent;
}`},{url:["forums.comodo.com"],invert:[".windowbg span.topslice",".windowbg span.botslice",".windowbg2 span.topslice",".windowbg2 span.botslice"],css:`body {
    background-image: none !important;
}
.buttonlist ul li a span:not(:hover) {
    color: \${white} !important;
}`},{url:["forums.gearsofwar.com"],ignoreImageAnalysis:["body"]},{url:["forums.mydigitallife.net"],ignoreInlineStyle:["#TotpQrCode"]},{url:["forums.opera.com"],invert:[".forum-logo-wrapper"]},{url:["forums.operationsports.com"],invert:["i",".smallfont","strong"]},{url:["forums.stardock.com"],ignoreImageAnalysis:[".body .forum > .post .postcontainer .postinfo .menu .karma_badge"]},{url:["forums.tomshardware.com"],invert:['img[src="/styles/tomshardware/tomshardware/toms-hardware-logo.png"]',"div.trophyShowcase.trophyShowcase--postbit"]},{url:["forvo.com"],invert:['img[src$="layout/logo.svg"]']},{url:["fotor.com"],invert:['div[style^="background-image: url(\\"https://imgv3.fotor.com/images/background/background-image.png\\");"]','div[style^="background-image: url(\\"https://imgv3.fotor.com/images/background/background-image.png\\");"] > *']},{url:["fotw.info"],css:`body {
    background-image: none !important;
}`},{url:["framatube.org"],invert:[".vjs-load-progress",".vjs-play-progress",".vjs-play-progress::before"]},{url:["frame.work"],invert:['a[title="Framework Home"] > img[alt="Framework"]',"#site-logo",'[type="checkbox"].checkbox-black:checked']},{url:["fredmeyerjewelers.com"],invert:["#header1_mainlogo",".mobileNavIcons img",".mobileNavIcons input:not(.searchdesktop)"]},{url:["freebsdfoundation.org"],css:`.content-wrapper {
    background-image: none !important;
}`},{url:["freecodecamp.org"],css:`.video-quiz-selected-input {
    background-color: var(--darkreader-neutral-text) !important;
}
.progress-bar-percent {
    background-color: \${gray} !important;
}
.map-title polygon {
    fill: var(--darkreader-neutral-text) !important;
}
.map-badge circle {
    fill: var(--darkreader-neutral-background) !important;
}`},{url:["freecommander.com"],css:`.am-body,
#subsilver-nav-topic {
    background-image: none !important;
}
.forabg,
.forumbg,
.header > .row-item,
.body-blok-h3 h3 {
    background: var(--darkreader-neutral-background) !important;
}`},{url:["freedom.press"],invert:[".logo-heading-text"]},{url:["freelancer.com"],invert:['.LogoImg[src*="freelancer-logo.svg"]']},{url:["freemaptools.com"],invert:['img[src="images/freemaptools-logo.jpg"]'],css:`body {
    background-image: none !important;
}`},{url:["freesound.org"],css:`#search input:not(#search_submit) {
    background-color: var(--darkreader-neutral-background) !important;
}`},{url:["freetp.org"],css:`html,
body,
.wmid,
.wfoot {
    background-image: none !important;
}
html,
body {
    background-color: var(--darkreader-neutral-background) !important;
}`},{url:["fritz.box"],invert:['div.formular input[type="radio"]','div.formular input[type="checkbox"]'],css:`div.formular input[type="radio"],
div.formular input[type="checkbox"] {
    background-color: transparent !important;
}
#navigationMenu {
    background: linear-gradient(--darkreader-bg--charcoal-gray-20: 30%, rgba(255, 255, 255, 0)) center top,linear-gradient(rgba(255, 255, 255, 0), #1b1e1f 70%) center bottom,linear-gradient(var(--charcoal-gray-30), transparent) center top,linear-gradient(transparent, --darkreader-bg--charcoal-gray-20:) center bottom !important;
    background-attachment: local,local,scroll,scroll !important;
    background-repeat: no-repeat !important;
    background-size: 100% 1.2rem,100% 1.2rem,100% .5rem,100% .5rem !important;
}`},{url:["fs.blog"],invert:[".shared-counts-icon"],css:`body,
.header-box {
    background-color: var(--darkreader-neutral-background) !important;
}`},{url:["fsfe.org"],invert:["#logo"],css:`body {
    background-image: none !important;
}`},{url:["ftp.nluug.nl"],invert:['img[alt="[NLUUG]"]']},{url:["fullstackopen.com"],css:`.gatsby-highlight-code-line {
    background-color: \${hsla(0,0%,48.2%,.3)} !important;
}`},{url:["funpay.ru"],invert:[".logo-color",".logo"]},{url:["furrychina.com"],invert:[".main_logo"]},{url:["fusoya.eludevisibility.org"],css:`body {
    background-image: none !important;
}
td {
    background-image: none !important;
    color: var(--darkreader-neutral-text) !important;
}`},{url:["futar.bkk.hu"],invert:[".mapboxgl-map"]},{url:["futureplc.com"],invert:['img[src$="future-logo.svg"]']},{url:["fyziklani.*","online.fyziklani.cz","physicsbrawl.org"],ignoreImageAnalysis:[".flag-icon-bg",".flag-icon-co",".flag-icon-fi",".flag-icon-jp",".flag-icon-kr",".flag-icon-lt",".flag-icon-pl",".flag-icon-ru",".flag-icon-sk"]},{url:["fz-juelich.de"],css:`body {
    background-image: none !important;
}`},{url:["gadzetomania.pl"],css:`a svg path[d^="M12.881 14.785v-"] {
    fill: #fff !important;
}`},{url:["gain.tv"],css:`.body-new-index .hero-img-container {
    z-index: 0 !important;
}`},{url:["gameinformer.com"],invert:[".site-logo"]},{url:["gameranx.com"],css:`body {
    background-color: var(--darkreader-neutral-background) !important;
}
.mai-toc__listitem,
.mai-toc__details,
.mai-toc-default .mai-toc__summary {
    background-color: \${#f7f7f7} !important;
}`},{url:["gamerevolution.com"],invert:[".wp-block-xwp-curated-content__card-title",".wp-block-xwp-curated-content__card-excerpt",".wp-block-xwp-curated-content__card-footer",".wp-block-xwp-curated-content__title",".xe-footer-nav__menu",".xe-footer-social-nav__menu",".xe-site-footer__bottom-column-2","#h-featured"]},{url:["gamesindustry.biz"],invert:[".logo"]},{url:["gamestop.com"],invert:[".nav-logo"]},{url:["garmin.com","*.garmin.com"],invert:[".gh__logo",".map-controls.player .pause span",".recharts-dot"],css:`.recharts-wrapper text {
    fill: \${rgba(0, 0, 0, 0.75)} !important;
}
span[class*="Carousel_carouselHighlightedDot"] {
    background-color: \${rgba(0, 0, 0, 0.75)} !important;
}
span[class*="Gc5ChallengesCard_progressBar"] div[class*="ProgressBar_bar__"],
span[class*="DayView_progressBar"] div[class*="ProgressBar_bar__"] {
    background: \${black} !important;
}
.find-plan-filters button {
    background-color: var(--darkreader-neutral-background) !important;
}
.plan-section-label {
    color: var(--darkreader-neutral-text) !important;
}
.plan-info,
.plan-specs {
    background-color: var(--darkreader-neutral-background) !important;
    border-color: transparent !important;
    color: var(--darkreader-neutral-text) !important;
}`},{url:["gasbuddy.com"],invert:[".pin",".pin-small"]},{url:["gat.no"],invert:["figure.logo > img"],css:`main.container .every_board > .row:not(.row--takeover) {
    --front-background-color: var(--darkreader-neutral-background) !important;
}`},{url:["gatsbyjs.com"],invert:[".ais-InfiniteHits-item"],css:`.gatsby-highlight,
.language-text {
    background-color: var(--darkreader-neutral-background);
}`},{url:["gazeta.pl","plotek.pl","sport.pl","edziecko.pl","moto.pl","ukrayina.pl"],invert:['img[alt^="logo"]',".vs__actions","a.item.noSwiper img"],css:`.top_section_bg,
.bottom_section_bg {
    background-color: \${#e5e5e5} !important;
}
svg [id="Group_242"],
svg [id="Path_9914"] {
    fill: \${black} !important;
}`},{url:["gazetaprawna.pl"],invert:[".bubbleMenuHamburger",".homePageUrl",".serviceLogo",".servicesMenu #menuTrigger span"]},{url:["gazetaswietokrzyska.pl"],invert:[".logo"],css:`.elementor-column-wrap.elementor-element-populated {
    background-color: var(--darkreader-neutral-background) !important;
}`},{url:["geekflare.com"],invert:[".logo"]},{url:["geeksforgeeks.org"],css:`.gsc-input-box {
    box-shadow: \${rgba(0, 0, 0, 0.3)} 0px 0px 2px !important;
}`},{url:["geizhals.*","skinflint.co.uk","cenowarka.pl"],css:`img,
.mocat-item__image,
.primary-nav .nav-item-type-cat-image {
    mix-blend-mode: normal !important;
}`},{url:["genius.com"],invert:[".texmath"]},{url:["genome-euro.ucsc.edu"],invert:["td.tdData",".tdLeft"]},{url:["genshin-impact-map.appsample.com"],invert:[".bg-secondary.px-1.py-0.input-group-text > .icon",".border-top2.text-center.w-100.sidebar-footer",".gm-ui-hover-effect"]},{url:["gentoo.org"],invert:[".site-logo"]},{url:["geogebra.org"],invert:[".icon-m",".elemText canvas",".gwt-Image",".gwt-StackPanelItem img",".GeoGebraMenuImage.menuImg",".menuImg",".buttonContent.stylebarButton",".EuclidianPanel > canvas",".stepTreeElem"]},{url:["get.google.*","get.google.*.*"],invert:['a[href*="about/products"]','span[aria-label="Settings"][role="menuitem"] path','span[aria-label="About Album Archive"][role="menuitem"] path','span[aria-label="Download photo"][role="menuitem"] path','span[aria-label="Manage in Google Photos"][role="menuitem"] path']},{url:["getalt.org"],invert:[".site-title"]},{url:["getfedora.org"],invert:['img[alt="globe"]']},{url:["getlektor.com"],css:`.body-wrapper .container {
    background-color: var(--darkreader-neutral-background) !important;
}
pre {
    background-image: none !important;
}`},{url:["getmimo.com"],invert:['a[title="Home"][href] > svg','div[class^="FifthSection___StyledDiv8"] > svg','div[class^="Footer__Row"] > :nth-child(1) svg'],css:`login-container {
    background: var(--darkreader-neutral-background) !important;
}`},{url:["getpocket.com"],css:`p a[rel="noopener noreferrer"] {
    background-image: linear-gradient(to top,transparent,transparent 1px,var(--darkreader-text--color-canvas) 1px,var(--darkreader-text--color-canvas) 2px,transparent 2px) !important;
    text-shadow: none !important;
}`},{url:["getsol.us"],invert:['img[alt="Logo"]']},{url:["getsuperpowers.app"],css:`.bg-gradient-to-r {
    background-image: linear-gradient(to right,var(--tw-gradient-stops)) !important;
}`},{url:["gg.pl"],invert:[".chat-btns",".profile-close i",".settings-close i"],css:`.sr-contact-name span {
    background-image: none !important;
}`},{url:["ggmania.com"],css:`body {
    background-image: none !important;
}`},{url:["ghisler.com"],invert:['img[src$="bit.gif"]']},{url:["gigabyte.com"],invert:[".kf-vision",".kf-vision > *",".creator-vision",".creator-vision > *",".InnerGIGABYTEContent .scroll_bg_01",".InnerGIGABYTEContent .scroll_bg_01 > *",".InnerGIGABYTEContent .eagle_build_strong",".InnerGIGABYTEContent .eagle_build_strong > *"]},{url:["git-scm.com"],invert:['img[alt="Git"]'],css:`body,
#masthead {
    background-image: none !important;
}`},{url:["github.com","github.*.*"],invert:['[src="https://github.githubassets.com/images/modules/site/icons/footer/github-logo.svg"]','[src^="https://github.githubassets.com/images/modules/site/home/community-sponsor-"]','[src^="https://github.githubassets.com/images/modules/site/home/community-readme-"]','[src^="https://github.githubassets.com/images/modules/site/home/community-discussions-"]','[src="https://github.githubassets.com/images/modules/site/home/dependabot-merge.png"]','[src="https://github.githubassets.com/images/modules/site/home/dependabot-pr.png"]','[src="https://github.githubassets.com/images/modules/site/home/gh-desktop.png"]','[src="https://github.githubassets.com/images/modules/site/home/pr-merge.png"]','[src="https://github.githubassets.com/images/modules/site/home/pr-comment.png"]','[src="https://github.githubassets.com/images/modules/site/home/pr-description.png"]','[src="https://github.githubassets.com/images/modules/site/home/pr-screen.png"]','[src="https://github.githubassets.com/images/modules/site/home/enterprise-city-w-logos.jpg"]','[src="https://github.githubassets.com/images/modules/site/codespaces/codespaces-icon.png"]','[src="https://github.githubassets.com/images/modules/site/codespaces/dependency-rust.png"]','[src="https://github.githubassets.com/images/modules/site/codespaces/dependency-3.png"]','[src^="https://github.githubassets.com/images/modules/site/codespaces/dependencies-"]','[src="https://github.githubassets.com/images/modules/site/codespaces/commit-3.png"]','[src="https://github.githubassets.com/images/modules/site/codespaces/extensions-1.png"]','[src="https://github.githubassets.com/images/modules/site/codespaces/extensions-2.png"]','[src="https://github.githubassets.com/images/modules/site/codespaces/commit-workflow.png"]','[src="https://github.githubassets.com/images/modules/site/codespaces/workflow-view.png"]','[src="https://github.githubassets.com/images/modules/site/codespaces/code.png"]','[src="https://github.githubassets.com/images/email/explore/explore-gradient-icon.png"]','[src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/collections/learn-to-code/learn-to-code.png"]',".js-viewport-aware-video.color-bg-primary.width-full.d-block.codespaces-hero-video",".build-in-animate.position-relative.mb-6-fluid.box-shadow-active-mktg.mx-auto.home-mobile-iphone.build-in-slideY.js-build-in > .js-viewport-aware-video.width-full",".overflow-hidden.position-relative.box-shadow-active-border-mktg.rounded-2-fluid.color-bg-primary.build-in-scale-fade.js-build-in-item",".build-in-animate.overflow-hidden.box-shadow-active-border-mktg.rounded-2-fluid.position-relative.home-workflow-comp.js-build-in-item",".mx-lg-auto.col-lg-7.col-12"],css:`.blob-code-inner,
.blob-num,
.cm-s-github-light .CodeMirror-lines,
.CodeMirror pre > span,
.CodeMirror,
.CodeMirror-dialog input,
.CodeMirror-hints,
.CodeMirror-linenumber,
.CodeMirror-lines,
.commit .sha,
.commit .sha-block,
.commit-desc pre,
.commit-ref,
.commit-tease-sha,
.export-phrase pre,
.file-info,
.FormControl-input.FormControl-monospace,
.FormControl-select.FormControl-monospace,
.FormControl-textarea.FormControl-monospace,
.input-monospace,
.markdown-body .footnotes .data-footnote-backref g-emoji,
.pr-1 > code > a,
.react-blob-print-hide,
.react-code-text,
.react-code-view-edit .cm-s-github-light .CodeMirror-lines,
.text-mono *,
.text-mono,
.two-factor-recovery-codes,
[aria-labelledby*="codemirror"] *,
[class*="blob-code"] *,
code > a[class="Link--secondary"],
section[aria-labelledby*="file-name-id"] > div > div *,
span.commit-ref > a > *,
span.commit-ref > a {
    font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace !important;
}
.markdown-body code,
.markdown-title code {
    background-color: \${rgba(27, 31, 35, 0.1)} !important;
}
.markdown-body pre code {
    background-color: transparent !important;
}
.refined-github .dashboard .js-all-activity-header + div {
    background-color: \${#e4e5e9} !important;
    border-color: \${#bbc1c9} !important;
}
.refined-github .dashboard-rollup-items .body {
    border-top-color: \${#bbc1c9} !important;
}
.refined-github .reaction-summary-item a {
    box-shadow: 0 0 0 2px \${white} !important;
}
.refined-github button.reaction-summary-item {
    border-bottom: rgb(77, 172, 253) !important;
    border-top-color: rgb(52, 59, 68) !important;
}
.js-site-search-form {
    background-color: #ffffff1a !important;
    border-radius: 2pt !important;
}
.blob-num:not(.cc-coverage-covered-border):not(.cc-coverage-missed-border) {
    border-right: 0 !important;
}
.cc-issue-description {
    color: #24292e !important;
}
.cc-readup-background {
    background-color: rgb(28, 30, 31) !important;
}
.cc-readup-content {
    border-left: 1px solid grey !important;
    color: rgb(216, 214, 208) !important;
}
.cc-readup-content blockquote {
    border-left: 3px solid dimgrey !important;
}
.cc-pr__link-text {
    color: darkgrey !important;
}
.cc-pr__tooltip {
    background-color: rgb(28, 30, 31) !important;
    color: darkgrey !important;
}
.jfk-bubble,
.octotree-sidebar,
.cc-pr__logo,
.cc-octicon,
#network canvas,
img.network-tree {
    filter: invert(94.4%) hue-rotate(180deg) contrast(90%) !important;
}
#commit-activity-detail > svg {
    fill: \${black} !important;
}
.ContributionCalendar-day,
.ContributionCalendar-day[data-level="0"] {
    fill: var(--color-calendar-graph-day-bg) !important;
}
.ContributionCalendar-day[data-level="1"] {
    fill: var(--color-calendar-graph-day-L1-bg) !important;
}
.ContributionCalendar-day[data-level="2"] {
    fill: var(--color-calendar-graph-day-L2-bg) !important;
}
.ContributionCalendar-day[data-level="3"] {
    fill: var(--color-calendar-graph-day-L3-bg) !important;
}
.ContributionCalendar-day[data-level="4"] {
    fill: var(--color-calendar-graph-day-L4-bg) !important;
}
.day,
.day[data-Count="0"] {
    fill: var(--color-calendar-graph-day-bg) !important;
}
.day[data-Count="1"] {
    fill: var(--color-calendar-graph-day-L1-bg) !important;
}
.day[data-Count="2"] {
    fill: var(--color-calendar-graph-day-L2-bg) !important;
}
.day[data-Count="3"] {
    fill: var(--color-calendar-graph-day-L3-bg) !important;
}
.day[data-Count="4"] {
    fill: var(--color-calendar-graph-day-L4-bg) !important;
}
:root {
    --color-calendar-graph-day-bg: \${#ebedf0} !important;
    --color-calendar-graph-day-L1-bg: \${#9be9a8} !important;
    --color-calendar-graph-day-L2-bg: \${#40c463} !important;
    --color-calendar-graph-day-L3-bg: \${#30a14e} !important;
    --color-calendar-graph-day-L4-bg: \${#216e39} !important;
    --color-previewable-comment-form-bg: var(--darkreader-neutral-background) !important;
}
.Box-row--yellow {
    background-color: \${#fffbdd} !important;
}
.merge-status-list {
    border-color: \${#c0c5c7} !important;
}
.user-has-reacted {
    background-color: rgba(17, 88, 199, 0.2) !important;
}
.hx_IssueLabel {
    background: rgb(var(--label-r),var(--label-g),var(--label-b)) !important;
    border-color: hsla(var(--label-h),calc(var(--label-s)*1%),calc((var(--label-l) - 25)*1%),var(--border-alpha)) !important;
    color: hsl(0,0%,calc(var(--lightness-switch)*100%)) !important;
}
.header-search-input {
    border: 0 !important;
}
.HeaderMenu-link--sign-in {
    border: 0 !important;
}
.timeline-comment--caret.current-user::after {
    --color-current-user-tip-bg: var(--darkreader-bg--color-box-bg-info) !important;
}
.timeline-comment--caret.current-user::before {
    background-color: var(--darkreader-border--color-box-border-info) !important;
}
@media screen and (min-width: 1012px) {
    markdown-toolbar.border-lg-top-0 {
        border-top: 1px solid var(--darkreader-border--color-border-primary) !important;
    }
}
@media screen and (max-width: 767px) {
    div.tabnav--responsive button.tabnav-tab {
        --color-border-primary: var(--darkreader-border--color-border-primary) !important;
    }
}
.TimelineItem-badge[style^="background-color: var(--color-timeline-merged-bg)"] {
    background-color: var(--color-timeline-merged-bg) !important;
}
.ContributionCalendar-label {
    --color-text-primary: var(--darkreader-neutral-text) !important;
}
article div[style^="background: linear-gradient"] {
    background: linear-gradient(to top, var(--darkreader-bg--color-bg-primary), transparent) !important;
}
.ͼ5 .cm-content,
.ͼ5 .cm-panel.cm-search > button {
    background-color: var(--darkreader-neutral-background) !important;
}`,ignoreInlineStyle:['a[href^="https://apps.apple.com/app/"] g','a[href^="https://apps.apple.com/app/"] path',"tracked-issues-progress svg *","div#user-repositories-list .tooltipped svg *","div#org-repositories .tooltipped svg *"]},{url:["github.myshopify.com"],invert:[".site-header__logo-image",".column-gh.column-full>svg"]},{url:["githubstatus.com"],css:`.illo-desktop-header {
    z-index: 0 !important;
}`},{url:["gitlab.com","gitlab.host","gitlab.*.*","gitlab.*.*.*","code.videolan.org","framagit.org","git.fairkom.net","repo1.dso.mil"],invert:[".js-contrib-calendar"],css:`:root {
    --svg-status-bg: #181a1b;
}
.avatar,
.avatar-container {
    border: none !important;
}
table.code .line_content *:not(pre),
.job-log *:not(pre) {
    font-family: "Menlo", "DejaVu Sans Mono", "Liberation Mono", "Consolas", "Ubuntu Mono", "Courier New", "andale mono", "lucida console", monospace !important;
}
.gl-drawer-close-button,
.js-reply-button,
.dropdown.more-actions > button,
.js-note-edit,
.btn-default-tertiary,
.btn-confirm-tertiary {
    mix-blend-mode: unset !important;
}
.board-inner {
    --darkreader-border--gray-100: \${#d1cdc7} !important;
    --gray-10: \${#e1e3e4} !important;
}
.mr-tree-list:not(.tree-list-blobs) .tree-list-parent::before {
    background-color: transparent !important;
}`},{url:["gittigidiyor.com"],css:`img[data-testid="productImage"] {
    mix-blend-mode: normal !important;
}`},{url:["giveawayoftheday.com"],invert:[".header_lang .curr_lang::before",".header_logo",".header_nav_trig",".header_search",".header_search .button"],ignoreImageAnalysis:[".countdown-amount .diggit"]},{url:["giveaways.cavebot.xyz"],css:`.respon1.p-r-50.p-l-50.p-b-22.p-t-42.bor1.cd100.flex-sa-m.flex-w {
    border: none !important;
}
.overlay1::after {
    background: unset !important;
}
.overlay1::before {
    background-color: unset !impotant;
    background-image: unset !impotant;
    opacity: 0.8 !important;
}
.overlay1::before {
    background-color: unset !important;
    background-image: unset !important;
}`},{url:["gizmodo.com"],invert:['[aria-label="Gizmodo logo"]']},{url:["glasswire.com"],invert:[".download-n-marks div img",".menu"],css:`.head-menu .menu a {
    color: var(--darkreader-neutral-background) !important;
}`},{url:["global.gotomeeting.com/join/*"],ignoreImageAnalysis:["body"]},{url:["gloswielkopolski.pl"],invert:[".componentsNavigationNavbar__brand"]},{url:["gls-pakete.de"],css:`.tracking--status .status-box::before,
.tracking--status .status-box::after {
    z-index: 0 !important;
}
.tracking--status .status-box.status--complete.status--lastcomplete .status-box--tooltip,
.tracking--status .status-box.status--current .status-box--tooltip {
    bottom: 0 !important;
    margin-bottom: 0px !important;
    margin-top: -10px !important;
    position: absolute !important;
    transform: none !important;
}`},{url:["gnc.com"],ignoreInlineStyle:['a[id^="powered_by_pixlee"]']},{url:["gnu.org"],invert:["#gnu-banner img","#search-icon"]},{url:["godaddy.com"],invert:[".logo-mark"]},{url:["godbolt.org"],css:`div.view-lines * {
    font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace !important;
}`},{url:["godfathers.com"],invert:[".header .top-bar .top-bar-wrapper .page-header-branding img"]},{url:["godoc.org"],css:`.banner {
    background-color: \${rgb(225, 190, 130)} !important;
}`},{url:["godzinyotwarcia24.pl"],invert:[".mbdtr",".mpktr",'form[action="/szukaj"]','div[id="suchfeldlabels"]']},{url:["gog-games.com/game"],invert:['img[src*="hoster_logos"]',"div.close"],css:`#game-details > .container::before {
    background-image: none !important;
}`},{url:["gog.com"],invert:["i.icn.icn--close","svg.icon-wrapper-icon","svg.big-spot__add-to-cart-icon","svg.ic-svg:not(.button__icon):not(.productcard-slider__nav-icon)",".productcard-thumbnails-slider-pagination",".carousel-pagination__page",".big-spot__carousel-pages-container",".big-spots__arrow-icon",".discover-games-more__icon"],css:`.product-tile__info:hover {
    background-color: var(--darkreader-neutral-background) !important;
}
a.product-tile__content {
    background-color: var(--darkreader-neutral-background) !important;
}
.galaxy-tooltip__layer {
    background: \${#d9d9d9} !important;
    color: var(--darkreader-neutral-text) !important;
}
.big-spot__content,
.big-spot__text,
.big-spot__action {
    backdrop-filter: brightness(50%) !important;
}
.big-spot__title,
.big-spot__super-title,
.big-spot__action {
    filter: brightness(130%) !important;
}
.wishlist-button,
.review__read-more,
.review-new__add-button,
.review-new__guideline-button {
    background-image: none !important;
}
.productcard-thumbnails-slider__play-btn {
    border-color: rgb(220, 218, 215) !important;
}
.productcard-thumbnails-slider__play-btn::before {
    border-left-color: rgb(220, 218, 215) !important;
}
.list--summary.shelf-skin--wood .product-row-wrapper:after {
    background-image: url(/bundles/gogwebsiteaccount/img/shelf/wood.png);
}`,ignoreImageAnalysis:[".menu-anonymous__shelf"]},{url:["gog.com/promo","gog.com/partner"],css:`.wrapper.cf > .content.cf::before {
    background-color: rgba(0,0,0,0.5);
    height: 100%;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
}
.container.promo-page-header.cf {
    filter: brightness(100%) !important;
}`},{url:["gokulv.netlify.app"],ignoreImageAnalysis:["body"]},{url:["golang.org"],invert:[".Footer-gopher",".gopher"],css:`#file-editor .CodeMirror,
#file-editor .CodeMirror-lines,
#file-editor .CodeMirror-gutters,
#wrap {
    background-color: var(--darkreader-neutral-background) !important;
}`},{url:["goodreads.com"],invert:[".responsiveSiteFooter__socialLinkWrapper"]},{url:["google.*/chrome"],invert:['[src$="slate.png"]','[src$="articles.png"]','[src$="phone_desktop.png"]','[src$="homepage_tools.png"]','[src$="chrome-ui-sync.png"]','[src$="password-check.png"]','[src$="big_pixel_phone.png"]','[src=$"homepage_privacy.png"]','[src$="big_phone_desktop.png"]','[src$="chrome-ui_desktop.png"]','[src$="pixel_slate_port_desktop.png"]','[src^="/chrome/static/images/productivity/"]','[src^="/chrome/static/images/be-more-productive/"]','[src^="/chrome/static/images/download-browser/pixel"]','[src^="/chrome/static/images/google-translate/screen-"]']},{url:["google.*/maps","google.*.*/maps"],invert:["#app-container.vasquette:not(.app-imagery-mode):not(.app-globe-mode) .widget-scene-canvas","#app-container.vasquette:not(.app-imagery-mode):not(.app-globe-mode) .canvas-container > canvas","#app-container.vasquette:not(.app-imagery-mode):not(.app-globe-mode) .full-screen > img",".widget-settings-button-icon",".searchbox-button",".searchbox-searchbutton",".searchbox-hamburger::before",".maps-sprite-settings-chevron-left","a.ita-kd-icon-button > span","li.ita-kd-menuitem > span.ita-kd-menuitem-inputtool-icon","li.ita-kd-menuitem > span.ita-kd-checkbox","div.maps-sprite-common-chevron-left","span.maps-sprite-common-chevron-right","span.section-destination-via-line-icon","div.section-directions-trip-travel-mode-icon","button.searchbox-hamburger.white-foreground","label.kd-radio-label::before","label.kd-checkbox-label::before","label.kd-checkbox-label::after","button.section-directions-details-action-button","div.section-loading-spinner","a.gb_b > div","a.gb_xc",'.gm-style img[role="presentation"]:not([src*="v="])',".i4ewOd-xl07Ob",".i4ewOd-LQLjdd li::before",".un1lmc-j4gsHd",".maps-sprite-settings-languages",'a[href*="about/products"]',".google-logo",".watermark",".section-review-action-menu",".section-review-interaction-button",".section-directions-trip-travel-mode-icon",".renderable-component-icon",".cards-rating-star",".maps-sprite-common-chevron-right",'[role="region"] button[jsaction^="pane.list-item.add"] [class*="icon-background"] [class*="icon"][src*="black"]',".top-activity-icon",".activity-icon",'img[src$="menu_black_24dp.png"]',"#assistive-chips .e2moi img",'button[guidedhelpid="searchbutton"]','a[href^="//myaccount.google.com/yourdata/maps"] > div','img[src^="//www.google.com/images/branding/lockups/"][alt="Google Maps"]','div[role="checkbox"] > div','div[aria-label="Toggle star"][role="checkbox"]','#legendPanel > div > div > div > div > div > div > div > div > div[jsaction^="keydown"][jsshadow=""][role="checkbox"][style=""]','#legendPanel > div > div > div > div > div > div > div > div > div > div > div > div[jsaction^="keydown"][jsshadow=""][role="checkbox"]',"#map-canvas > div > #watermark","body.vsc-initialized > #app > #map-container > #map > .map-outer.map-extent",'body.vsc-initialized > #app > #map-container > #map > div > div > div > button[jsaction="map.toggle-map-control"] > img','body.vsc-initialized > #app > #map-container > #map > div > div > div > div > div > button[jsaction="map.zoom-out"] > img','body.vsc-initialized > #app > #map-container > #map > div > div > div > div > div > button[jsaction="map.zoom-in"] > img','#app-container > #modal-dialog > div > div > div > div > button[jsaction="modal.close"]',"#map-canvas div[data-tooltip]",'div[style="top: 0px;"] > div > div > div > :first-child','div[style="top: 0px;"] > div > :last-child > div > :nth-child(2)','div[style="top: 0px;"] > div:first-child:not([style^="background"]) > :last-child'],css:`#app-container > #modal-dialog > div > div > div > div > button[jsaction="modal.close"] {
    background-color: $var(--darkreader-neutral-background) !important;
}`,ignoreImageAnalysis:[".widget-settings-map",".widget-settings-satellite",".widget-settings-terrain",".widget-settings-globe",".widget-settings-traffic",".widget-settings-transit",".widget-settings-bike",".widget-settings-street-view",".widget-settings-covid-info-icon",".widget-settings-location-sharing",".widget-settings-your-places",".widget-settings-rate-review",".widget-settings-timeline",".widget-settings-link",".widget-settings-print"]},{url:["googleprojectzero.blogspot.com"],css:`.c5 a img {
    background-color: white !important;
}`},{url:["goplay.anontpp.com"],invert:['img[src*="download.svg"]','img[src*="cast.png"]','img[src*="bookmark.png"]',".jw-slider-container",".jw-time-tip::after"]},{url:["goproblems.com"],invert:[".navbar-brand"],ignoreInlineStyle:['<div class="player-container">']},{url:["gorod.gov.spb.ru"],invert:[".header__logo",".reason__icon",".map-with-address",".problem-details__map",".problem-map-page__map",".evtmap canvas"]},{url:["gorod.mos.ru"],invert:[".scene__logo",'div[id^="map"] > div > div > div','div[style^="text-align: center; margin"] > div > div:first-of-type'],css:`#footer {
    background: \${#CCECE8} !important;
}`},{url:["gosuslugi.ru"],invert:['ymaps[class$="ground-pane"]','ymaps[class$="places-pane"] span']},{url:["gotquestions.org"],css:`.gradient-to-b {
    --color-end: var(--darkreader-neutral-background) !important;
    --color-start: var(--darkreader-neutral-background) !important;
}`},{url:["gov.pl/web/bip"],invert:[".banner-promo",".banner-promo__text"]},{url:["gowork.pl"],invert:[".city__img .city__text"]},{url:["gp.se"],css:`header nav {
    border-top: unset !important;
}
header nav::after {
    background: linear-gradient( 90deg, hsl(0deg 0% 100% / 4%) 0, hsl(0deg 0% 30.39% / 40%) 25%, var(--darkreader-bg--white) ) !important;
}
article.teaser-article {
    --teaser-background-color: var(--darkreader-neutral-background) !important;
}`},{url:["gptzero.me"],css:`.bg-home-mobile-background {
    background-image: none !important;
}
img[alt="background image"] {
    display: none !important;
}`},{url:["grammarly.com"],invert:['img[alt="Grammarly logo"]'],ignoreInlineStyle:['div[data-qa="heroSectionAnimationContainer"] path']},{url:["gramota.ru"],invert:['img[src*="logo-gramota"]',".caret","td > strong"]},{url:["gravatar.com"],invert:["a.g-home",".g-user-menu > svg","body#page > div > div > nav > ul > li > a > svg.g-logo.g-logo--name-gravatar"],css:`a[class="g-sign-in"] > svg > path {
    fill: white !important;
}
body {
    background-image: none !important;
}`},{url:["grc.com"],invert:['img[src*="gif"]']},{url:["greatergood.com"],invert:[".ctg-logo",".logo-ggc-color","#site-logo"]},{url:["grocy.info"],invert:[".navbar-brand",".carousel-control-prev-icon",".carousel-control-next-icon"]},{url:["grubhub.com"],css:`.s-checkbox-filler {
    color: rgb(24, 26, 27) !important;
}
label,
h5,
h6,
header,
.h5 {
    color: \${black};
}`},{url:["gsmchoice.com","mgsm.pl"],invert:[".promo-sticky__item--large",".promo-sticky__item--small",".social-fixed--infoline",'img[alt="GSMchoice.com"]','img[alt="mGSM.pl"]','img[src*="card_ico"]','img[src*="short"]']},{url:["gsuite.google.com"],invert:[".header--logo img"]},{url:["gu.spb.ru"],invert:['ymaps[class$="ground-pane"]'],css:`.bg {
    background-image: var(--darkreader-neutral-background) !important;
}`},{url:["guancha.cn"],css:`.dahui {
    background-image: none !important;
}`},{url:["guiott.com"],css:`.Section1 > div {
    background-image: none !important;
}`},{url:["guitarcenter.pl"],invert:["tr > td > img","p.standard_price","p.promo_price"]},{url:["guitarworld.com"],invert:[".site-logo"]},{url:["gumroad.com"],invert:[".mega-gum-logo"]},{url:["gurushots.com"],css:`.c-challenges-speed-item__countdown > .round-progress-wrapper,
.challengesItemSuggested__timer .round-progress-wrapper {
    background-color: transparent !important;
}
.modal-vote__exposure-meter__arrow,
.modal-vote__exposure-meter__arrow::after {
    background-color: var(--darkreader-neutral-text) !important;
}`},{url:["gutrad.com"],css:`.g_parallex_bnr li .g_no_slider {
    color: black !important;
}`},{url:["habitica.com"],invert:[".logo path:nth-child(2)"],ignoreImageAnalysis:["*"]},{url:["habr.com"],invert:['img[src*="//tex.s2cms.ru/"]',"img[data-tex]","img.formula"],css:`html {
    text-shadow: none !important;
}
.main-navbar .icon-svg {
    fill: \${#929ca5} !important;
}`},{url:["hacdias.com"],css:`:root {
    --background: var(--darkreader-neutral-background) !important;
}`},{url:["hackerone.com"],invert:[".app__logo"]},{url:["hackerrank.com"],invert:[".badge-icon",".CodeMirror-cursors",".CodeMirror-selected"],css:`.monaco-editor .cursor {
    background-color: \${black} !important;
}`},{url:["hampage.hu"],css:`body {
    background-image: none !important;
}`},{url:["handshake.org"],invert:['[src*="logo-dark.svg"]','[src*="blocks.svg"]'],css:`ul.notes li::before {
    background-color: var(--darkreader-neutral-text) !important;
}`},{url:["handwiki.org"],css:`#mw-content {
    background-color: var(--darkreader-neutral-background) !important;
}`},{url:["haokan.baidu.com"],invert:[".header-logo-icon"]},{url:["hazi.ro"],css:`:root {
    --app-nav-top-bg: var(--darkreader-neutral-background);
    --dropdown-bg: var(--darkreader-neutral-background);
    --input-bg: var(--darkreader-neutral-background);
    --input-disabled-bg: var(--darkreader-neutral-background);
    --site-section-bg: \${#ddd};
    --ui-block-bg: var(--darkreader-neutral-background);
}
.main-footer-extended.main-footer-extended-gray {
    background: var(--darkreader-neutral-background) !important;
}`},{url:["hbo.com"],invert:['img[alt="HBO Logo"]']},{url:["hbr.org"],invert:[".hamburger-icon",".top-header--logo",".search-icon",".footer-logo"]},{url:["hbweb.hu"],css:`[background] {
    background-image: unset;
}`},{url:["hdgo.cc","vio.to"],invert:[".hdplayer .big_play_button div",".hdplayer .hdgo_controls div.hdgo_pause_control div",".hdplayer .hdgo_controls div.hdgo_play_control div"]},{url:["hdlbits.01xz.net"],css:`img.image,
.image > img {
    background-color: white !important;
    filter: brightness(50%) sepia(40%) !important;
}`},{url:["headphones.com"],invert:[".header__heading-logo"],css:`#MainContent,
.header__menu-container,
details > ul,
.search__input {
    background-color: rgb(30, 33, 34) !important;
}
.search__input::placeholder {
    color: rgb(30, 33, 34) !important;
}`},{url:["heise.de"],invert:[".heise-online-logo"]},{url:["helix.ru"],invert:[".Site-Header-Logo"]},{url:["help.ea.com"],css:`.app,
.app > div {
    background-image: var(--darkreader-neutral-background) !important;
}`},{url:["help.nextdns.io"],invert:[".logo-desktop",".logo-mobile"]},{url:["helzberg.com"],invert:[".logo",".footer.content",".footer.content > div",".footer__column--logo"],ignoreInlineStyle:['a[id^="powered_by_pixleee"]']},{url:["heraldscotland.com"],invert:[".brand"]},{url:["heritage.org/index"],invert:[".bar"],css:`.content-container {
    background-image: none !important;
}`},{url:["hex-rays.com"],invert:["#logo",".footer-logo"]},{url:["hexos.com"],css:`.fe-block {
    text-shadow: \${white} 1px 1px 0px !important;
}`},{url:["hh.ru"],css:`html {
    text-shadow: none !important;
}`},{url:["hificompass.com"],css:`.field-slideshow-slide img {
    background-color: cornsilk !important;
}`},{url:["high-minded.cx"],css:`i[aria-hidden="true"] {
    font: normal normal normal 18px/1 "Material Design Icons" !important;
}`},{url:["hindustantimes.com"],invert:[".menu.noti-dot",".searchHolder .search",'img[src$="logo-big-cm.png"]','img[src$="logo-ht.png"]','img[src$="htlogo.png"]']},{url:["hionnature.com"],invert:["img.header__heading-logo","div.footer-block-image > img"],css:`.gradient {
    background: var(--darkreader-neutral-background) !important;
}`},{url:["history.state.gov"],css:`body {
    background-image: none !important;
}`,ignoreImageAnalysis:["body"]},{url:["hktdc.com"],invert:[".header-logo"]},{url:["hm.com"],invert:['[class^="TurnToReviewsButton-module--ratingStars"]'],css:`.review-answers .review-answer .average-score {
    background-color: var(--darkreader-neutral-text) !important;
}`,ignoreInlineStyle:[".swatch"]},{url:["hmong.*","wikihmong.com"],invert:["span.mwe-math-element"]},{url:["hoi4.paradoxwikis.com"],invert:[".mwe-math-fallback-image-inline"]},{url:["home.gamer.com.tw"],css:`body {
    background-color: transparent !important;
}`,ignoreImageAnalysis:[".MSG-mainpic","#BH-main_menu","#BH-master h4",".BH-slave_btns .BH-slave_btnA","#BH-slave h5"]},{url:["homebrewery.naturalcrit.com"],css:`.CodeMirror-scroll {
    background-color: #444;
}
span[role="presentation"] {
    color: white;
}
span[role="presentation"] > .cm-header {
    color: rgb(50, 150, 250);
}
span[role="presentation"] > .cm-variable-2 {
    color: rgb(50, 150, 250);
}
.phb blockquote {
    background-color: #e0e5c1 !important;
}
.phb h3,
.phb h2,
.phb h1 {
    color: #58180D;
}
.phb p {
    color: black;
}
.cm-link,
.cm-attribute {
    color: rgb(90, 140, 255) !important;
}
.cm-url,
.cm-string {
    color: rgb(200, 50, 50) !important;
}
.cm-quote,
.cm-tag {
    color: rgb(50, 200, 50) !important;
}`},{url:["hooktail.sub.jp","hooktail.org"],invert:["#box img",".box img"],css:`#box,
.box {
    background-color: var(--darkreader-neutral-background) !important;
}
h2 {
    background-image: none;
}
a {
    color: rgb(157, 149, 237);
}`},{url:["hootsuite.com"],invert:['img[src$="hootsuite_white_form3.png"]']},{url:["host-c.com"],invert:[".logo"]},{url:["hotcrp.com"],css:`select,
button,
.btn,
button.btn-t:hover {
    color: silver;
}`},{url:["hotel.meituan.com"],invert:[".poi-hotellbs-map",".small-map"]},{url:["howbuy.com"],invert:[".bottomStar",".cpBottomWord",".logo",".navList dt",".phCon",".title","#valuationChar"]},{url:["howstuffworks.com"],invert:['a[data-track-gtm="Logo"]']},{url:["hp.com","*.hp.com"],invert:["#g-nav .c-logo",".w-100",'img[src*="CCLS_SSL_Icon.svg"]',".lia-img-powered-by-khoros",'a[aria-label="Options"]',".myprofile-img",".solutions-img",".mykudo-img",".ikudo-img",".osDetectionWindows img",".hpsaImg"],css:`.pdp-bg {
    background-image: none !important;
}`},{url:["hs.fi"],css:`article,
article > article {
    background-color: var(--darkreader-neutral-background) !important;
}`},{url:["hstechdocs.helpsystems.com"],css:`.body-container {
    background-color: var(--darkreader-neutral-background) !important;
}
ul.sidenav li a,
ul.sidenav ul > li > a {
    color: var(--darkreader-neutral-text) !important;
}`},{url:["httpwg.org"],css:`svg.diagram text {
    fill: var(--darkreader-neutral-text) !important;
}`},{url:["huawei.com"],invert:[".logo"]},{url:["huba.news"],invert:['img[alt="Huba"]','img[alt="INTERIA.PL"]',".most-interesting-topics-header::before"]},{url:["hubs.mozilla.com"],invert:["svg.hmc-logo"]},{url:["huji.ac.il/dataj/controller/"],css:`body {
    background-image: none !important;
}`},{url:["hvdic.thivien.net"],invert:["img.hvres-variant-img.lazy"],css:`body {
    background-image: none !important;
}`},{url:["hyperphysics.phy-astr.gsu.edu"],invert:["tbody td > img","tbody center > img","tbody center > a > img"]},{url:["hyperskill.org"],invert:[".html-preview"],css:`.monaco-editor .margin,
.monaco-editor-background {
    background-color: #181A1B !important;
}
.monaco-editor .cursor {
    background-color: \${#000000} !important;
}
.step-text[data-v-341d1caa] pre {
    background-color: var(--darkreader-neutral-background);
}`},{url:["hypixel.net"],invert:[".p-nav-inner",".message-avatar::after"],css:`.p-navEl-link,
.p-header-playNow .p-header-playNow-button,
.p-navgroup-link--search {
    color: \${rgb(214, 210, 205)} !important;
}`},{url:["hypothes.is"],invert:['a[href="https://hypothes.is"] > svg[aria-labelledby="logo-title"] > g > path[fill-rule="nonzero"]','img[class="fusion-standard-logo"]']},{url:["i-item.jd.com"],css:`.itemInfo-wrap .summary-price-wrap .summary-top .summary-promotion {
    background-image: none !important;
}`},{url:["ica.coop"],invert:[".main-header__logo"]},{url:["icloud.com"],invert:[".rm-list-body",".note-list-item-attachment",".sc-iujRgT.jxLrRl",".icloud-text.image",".img.app-icon-icloud","#cloudos-loading-spinner",".editor-container",".light > svg","#.apple-icloud-logo > g > path:first-child","#.apple-icloud-logo.dark > g > path:last-child"],css:`.cw-pane-container,
.reminders {
    background-image: none !important;
}
.homepage-viewport .homepage-gradient-background {
    filter: grayscale(0.8) !important;
}
.content > .title {
    color: var(--darkreader-neutral-background) !important;
}
.content > .description {
    color: var(--darkreader-neutral-background) !important;
}`},{url:["icofont.com"],invert:[".logo"]},{url:["iconfinder.com"],invert:[".logo"]},{url:["iconify.design"],ignoreInlineStyle:["svg.iconify *","svg#footer-icon-name *","svg#icon-nav-prev *","svg#icon-nav-next *",".si-svg-wrapper svg *",".block-container .icons svg *"]},{url:["icons8.com"],css:`.main-page .gradient {
    background-image: none !important;
}`},{url:["icrc.org"],css:`.logo,
.logo img {
    background-color: #fff !important;
}`},{url:["id.fedoraproject.org"],invert:['img[alt="logo"]']},{url:["id.unity.com"],css:`.qr-code {
    border: calc(150px * 1/45) solid #f5f8f9;
}`},{url:["identity.kde.org"],css:`body,
.navbar-inner,
.navbar {
    background-image: none !important;
}`},{url:["ieee.org"],invert:[".logo-left"]},{url:["iett.istanbul"],css:`#routedesc p:nth-child(2) {
    font-size: 0;
}
#routedesc p:nth-child(2)::after {
    content: "Kırmızı renkli seferler ÖHO ve OAŞ; beyaz renkli seferler İETT’ye aittir.";
    font-size: 20px;
}`},{url:["ifixit.com"],invert:['a[aria-label="home page"] > svg > path:first-child'],ignoreImageAnalysis:["*"]},{url:["iflscience.com"],invert:[".header-primary div a svg",".footer-branding a svg",".footer-subscribeBox div span a svg"]},{url:["ifood.com.br"],css:`.responsive-header__logo svg {
    --darkreader-inline-fill: rgb(212, 45, 58) !important;
}`},{url:["igurublog.wordpress.com"],css:`body,
.entry,
#content,
#container {
    background-image: none !important;
}`},{url:["ikea.*"],css:`.range-revamp-ratings-bar__star--empty path,
.range-revamp-ratings-bar__star--half path:first-child {
    fill: \${rgb(246, 245, 244)} !important;
}
.hnf-svg-icon {
    fill: var(--darkreader-neutral-text) !important;
}
.card,
.card-header,
.card-footer {
    background-color: var(--darkreader-neutral-background) !important;
}`,ignoreInlineStyle:[".gpr__color-dot"]},{url:["iliad.it"],ignoreImageAnalysis:[".background"]},{url:["ilovepdf.com"],invert:[".brand__logo",".ico--down",".ico--desk",".ico--hamburger"]},{url:["ilyabirman.*"],invert:['img[src*="layout-win"]'],css:`body {
    background: none !important;
}`},{url:["image-net.org"],invert:['img[src="/static_files/index_files/logo.jpg"]']},{url:["imap:","pop3:"],css:`table[class|="moz-header"] {
    background: none;
}`},{url:["imdb.com"],invert:[".a-icon",".jw-slider-volume"],css:`#wrapper {
    background: \${#e3e2dd} !important;
}
.ipc-page-section--base {
    --ipc-pageSection-base-bg: var(--darkreader-neutral-background) !important;
}
:root: {
    --darkreader-bg--ipt-baseAlt-shade1-bg: var(--darkreader-neutral-background) !important;
}
.imdb-header__nav-drawer div,
.ipc-menu--on-baseAlt,
.imdb-header__search-menu,
.ipc-promptable-base__panel {
    background-color: var(--darkreader-neutral-background) !important;
}
.ipc-promptable-base__content {
    background-color: #171a1b !important;
}
div[class^="SubNav__SubNavContainer"],
div[class^="Media__ButtonContainer"] > a,
div[class*="WatchlistButton__ButtonParent"] > button,
a[class*="EmptyState__FYWStateButton"],
a[class*="EmptyState__FromYourWatchlistRibbon"] > svg,
.ipc-poster-card,
.ipc-poster-card__actions > .ipc-button {
    background: rgba( var(--ipt-on-baseAlt-rgb,255,255,255),var(--ipt-baseAlt-hover-opacity,0.08) ) !important;
}
div[class^="SubNav__ShareButtonWrapper"]::before,
div[class^="Root__Separator"] {
    background: rgba(var(--ipt-base-rgb,255,255,255),0.2);
}
.ipc-title__text::before,
.ipc-tabs__indicator {
    background: #f5c518 !important;
}
.ipc-signpost--accent1 {
    background: var(--darkreader-bg--mdc-theme-ipt-accent1-color, #bb9508) !important;
}
hgroup[class*="ipc-title--category-title"] > .ipc-title__text,
.ipc-title-prompt__title {
    color: #f5c518 !important;
}
.boxOfficeTitle:nth-of-type(2n) {
    background: linear-gradient( to right,rgba(var(--ipt-on-baseAlt-rgb),0),rgba(var(--ipt-on-baseAlt-rgb),0.06) ) !important;
}
div[class^="VideoInfostyles__VideoDescriptionOverlay"] {
    background: linear-gradient(transparent 50%,var(--ipt-baseAlt-bg)) !important;
}
main {
    background: var(--ipc-pageSection-baseAlt-bg) !important;
}
.ipc-watchlist-ribbon__bg-ribbon {
    fill: rgba(var(--ipt-baseAlt-shade1-rgb), 0.75) !important;
}
.ipc-watchlist-ribbon--inWatchlist .ipc-watchlist-ribbon__bg-ribbon {
    fill: #BB9508 !important;
}
.ipc-switch__slider::before,
.ipc-switch__slider::after {
    background: #5799ef !important;
}
.aux-content-widget-2 {
    background: none !important;
}
.ipc-tabs--display-chip .ipc-tab--active,
.ipc-tabs--display-chip .ipc-tab--active:hover {
    background: \${rgb(245,197,24)} !important;
}`},{url:["immobilienscout24.de"],invert:['img[alt^="ImmobilienScout24"]',".topnavigation__sso-login__plus-logo",".button-primary",".main-search__content--rent--from-0",".result-list-entry__new-flag",".product-teaser__image",".no-of-results-highlighter"],css:`.result-list__listing {
    background-color: transparent !important;
}`},{url:["imwithgeekarchive.weebly.com"],css:`body {
    background-color: var(--darkreader-neutral-background) !important;
    background-image: none !important;
}`},{url:["inaturalist.org"],invert:[".logolink"]},{url:["inc.com"],invert:['svg[class*="logo"]']},{url:["ind.ie"],invert:[".three-rs .three-rs-list p"]},{url:["independent.co.uk"],invert:[".logo-text","#MegaMenuButton",".search-toggle",".jw-slider-horizontal",".jw-slider-volume"],ignoreInlineStyle:[".logo-svg-cls-2"]},{url:["inet.se"],invert:[".h1yh8nho",'a.item-button span[class*="icon"]'],css:`:root {
    --svg-icon-default-color: #e8e6e3 !important;
}`},{url:["infinity-academies.com"],invert:["img.bb-logo",'img[src*="profile-avatar-buddyboss-50.png"]']},{url:["infinitysearch.co"],invert:['img[src$="github.ico"]','img[src$="unsplash.png"]','img[src$="boardreader.ico"]','#logo_img_home[src$="logo_text_black.png"]']},{url:["info.wyborcza.biz"],invert:[".imgw"]},{url:["infoq.com"],css:`.bg-cover {
    background-blend-mode: multiply;
}`},{url:["inforlex.pl"],invert:['div[class="content -dark"]','div[class="loginLogo"]','img[src*="infor-lex_2020.jpg"]','a[class="client-logo-entry"]']},{url:["informa.com"],invert:[".header-logo"]},{url:["informatech.com"],invert:[".log-img"]},{url:["inibuilds.com"],invert:[".header__heading-logo",".icon",'img[alt="add icon"]','img[alt="plus"]',".footer-block__image-wrapper",".list-social__link"],ignoreImageAnalysis:[".flagged .flags-AUD",".flagged .flags-EUR"]},{url:["inoreader.com"],css:`.article_expanded {
    background-color: rgb(31, 35, 38) !important;
}`},{url:["inspirehep.net"],css:`svg text {
    fill: \${black} !important;
}`},{url:["instagram.com"],invert:[".s4Iyt",".coreSpriteActivityHeart",".coreSpriteAppStoreButton",".coreSpriteCall",".coreSpriteCheck",".coreSpriteCi",".coreSpriteClose",".coreSpriteDesktopNavDirect",".coreSpriteDesktopProfileSaveActive",".coreSpriteDesktopProfileTaggedActive",".coreSpriteDirectHeart",".coreSpriteDownload",".coreSpriteDropdownArrowGrey9",".coreSpriteGallery",".coreSpriteGooglePlayButton",".coreSpriteKeyhole",".coreSpriteLockSmall",".coreSpriteLoggedOutWordmark",".coreSpriteMobileNavDirect",".coreSpriteMobileNavTypeLogo",".coreSpriteNavBack",".coreSpriteNotificationLeftChevron",".coreSpriteNullProfile",".coreSpriteOptionsEllipsis",".coreSpritePagingChevron",".coreSpriteProfileCamera",".coreSpriteReload",".coreSpriteSaveNull",".coreSpriteSpinstaStory",".coreSpriteStoryCreation",".coreSpriteTaggedNull",".coreSpriteVideoNux",".coreSpriteWindowsStoreButton",".coreSpriteWordmark",".glyphsSpriteAdd__outline__24__grey_9",".glyphsSpriteAdd_friend__outline__96",".glyphsSpriteApp_instagram__outline__24__grey_9",".glyphsSpriteApp_messenger__outline__24__grey_9",".glyphsSpriteApp_twitter__outline__24__grey_9",".glyphsSpriteApp_whatsapp__outline__24__grey_9",".glyphsSpriteCall__outline__24__grey_9",".glyphsSpriteCamera__outline__24__grey_9",".glyphsSpriteChevron_down__outline__24__grey_9",".glyphsSpriteChevron_left__outline__24__grey_9",".glyphsSpriteChevron_up__outline__24__grey_9",".glyphsSpriteCircle_add__outline__24__grey_9",".glyphsSpriteComment__outline__24__grey_9",".glyphsSpriteContact_import",".glyphsSpriteContact_import_sm",".glyphsSpriteDirect__outline__24__grey_9",".glyphsSpriteDirect__outline__96",".glyphsSpriteDownload_2FAC",".glyphsSpriteError__outline__24__grey_9",".glyphsSpriteError__outline__96",".glyphsSpriteFacebook__outline__24__grey_9",".glyphsSpriteFb_brand_center_grey",".glyphsSpriteForward__outline__24__grey_9",".glyphsSpriteFriend_Follow",".glyphsSpriteGlyph_chevron_right",".glyphsSpriteHashtag__outline__24__grey_9",".glyphsSpriteHeart__filled__16__grey_9",".glyphsSpriteHeart__filled__24__grey_9",".glyphsSpriteHeart__outline__24__grey_9",".glyphsSpriteHome__filled__24__grey_9",".glyphsSpriteHome__outline__24__grey_9",".glyphsSpriteInfo__filled__16__grey_9",".glyphsSpriteLink__outline__24__grey_9",".glyphsSpriteLocation__outline__24__grey_9",".glyphsSpriteLock__outline__24__grey_9",".glyphsSpriteLock__outline__96",".glyphsSpriteMail__outline__24__grey_9",".glyphsSpriteMenu__outline__24__grey_9",".glyphsSpriteMore_horizontal__outline__24__grey_9",".glyphsSpriteNew_post__outline__24__grey_9",".glyphsSpritePaging_chevron",".glyphsSpritePlay__filled__16__grey_9",".glyphsSpriteSave__filled__24__grey_9",".glyphsSpriteSave__outline__24__grey_9",".glyphsSpriteSearch__filled__24__grey_9",".glyphsSpriteSearch__outline__24__grey_9",".glyphsSpriteSettings__outline__24__grey_9",".glyphsSpriteShare__outline__24__grey_9",".glyphsSpriteShopping__outline__16__grey_9",".glyphsSpriteStar_filled_24",".glyphsSpriteStar_half_filled_24",".glyphsSpriteStory__outline__24__grey_9",".glyphsSpriteUser__filled__24__grey_9",".glyphsSpriteUser__outline__24__grey_9",".glyphsSpriteUser_follow__filled__24__grey_9",".glyphsSpriteUser_follow__outline__24__grey_9",".glyphsSpriteUsers__outline__24__grey_9",".glyphsSpriteVideo_chat__outline__24__grey_9",".glyphsSpriteWhatsapp__outline__24__grey_9",".glyphsSpriteX__outline__24__grey_9","span.LikeSprite.embedSpriteHeartOpen","span.hideText.embedSpriteComment","span.hideText.embedSpriteShare","span.hideText.embedSpriteSaveOpen","span.Sprite.embedSpriteGlyph.hideText",".-Nmqg",'svg[aria-label*="Facebook"]','a[role="link"][href="/"] i[role="img"]'],css:`div > a[tabindex],
div > span > a[tabindex] {
    border-color: transparent !important;
}
._ac3p {
    background-color: rgb(180, 180, 180) !important;
}
._ac3o {
    background-color: rgb(68, 68, 68) !important;
}`},{url:["instructables.com"],invert:[".site-logo"]},{url:["instructure.com"],invert:[".equation_image",".Page-container"]},{url:["interaktywnie.com"],invert:['img[alt="Interaktywnie.com"]','img[src*="companym/"]']},{url:["interia.pl"],invert:[".logo",".search-submit"],css:`.calendar-date,
.calendar-body {
    background-color: var(--darkreader-neutral-background) !important;
    background-image: none !important;
}`},{url:["internetexchangemap.com"],invert:['div[aria-label="Map"] > div:first-child',"div.fade"]},{url:["internetowa.tv"],invert:['img[src*="/img/"]'],css:`.star-on-png::before {
    color: #FCAD03 !important;
}`},{url:["interpride.org"],invert:[".logo .img-responsive"]},{url:["investopedia.com"],invert:[".widget-ticker-container",".mntl-dotdash-universal-nav__logo"]},{url:["invisioncommunity.com"],invert:['img[src*="customer_logos.png"]','img[src*="logo_dark.png"]','img[src*="footer"]',".cDownloadsCategoryCount"],css:`.ipsBadge {
    --darkreader-bg--badge--background: var(--darkreader-neutral-background) !important;
}
.ipsReact_reactCount > a,
.ipsReact_reactCount > span,
.elFullInbox_menu,
.ipsMenu_auto,
.ipsMenu_footerBar,
.ipsMenu_headerBar,
.ipsMenu_innerContent,
.ipsMenu_item,
.ipsMenu_sep,
.ipsMenu_title,
.ipsPadding {
    background-color: var(--darkreader-neutral-background) !important;
}`},{url:["inwestomat.eu"],css:`main {
    background-color: var(--darkreader-neutral-background) !important;
}`},{url:["iopscience.iop.org"],invert:['.article-text img[alt^="$"]']},{url:["ip-api.com"],invert:['img[alt="logo"]']},{url:["ipinfo.io"],invert:[".navbar-brand"]},{url:["ipko.pl"],invert:["._1vyn4"],css:`._1IGN3 {
    background-size: 75px 56px !important;
}
._3cnGx::before {
    background-size: 112px 80px !important;
}
._3o8il {
    background-size: 48px 48px !important;
}
._2A4oT::before {
    background-size: 36px 38px !important;
}`},{url:["iplocation.net"],invert:['img[src="/assets/images/logo.png"]']},{url:["iqiyi.com"],invert:[".qy-micro-bg"]},{url:["irishtimes.com"],invert:[".masthead-block-logo img"]},{url:["is.muni.cz"],invert:[".isElInput_label_latex",".se-tex-img"]},{url:["isbgpsafeyet.com"],css:`h1,
h2,
h3,
h4,
h5,
h6 {
    color: rgb(255, 255, 255) !important;
}
.Hero,
.Footer {
    background: None !important;
}
.Button-is-primary {
    background: var(--primary-background-color);
}`},{url:["isharkieblanket.com"],css:`.gradient {
    background: var(--darkreader-neutral-background) !important;
}
h1,
h2,
h3,
h4,
h5,
.h0,
.h1,
.h2,
.h3,
.h4,
.h5,
.header__active-menu-item,
.header__menu-item,
.color-background-1,
.color-background-2,
.color-inverse,
.list-menu__item--link,
.localization-selector.link,
.price,
.rte a,
.shopify-payment-button__more-options,
.link {
    color: var(--darkreader-neutral-text) !important;
}`},{url:["ising.pl"],css:`body.grey-gui-bg #content,
div.grey-gui-bg,
.small-navy-heading,
.small-blue-heading,
.small-purple-heading,
.small-navy2-heading {
    background-image: none !important;
}`},{url:["isitdownrightnow.com"],css:`.ts1,
.ts2,
.ts3,
.ts4,
.ts5,
.ts6,
.ts7,
.ts8,
.ts9,
.ts10,
.ts11,
.ts12,
.ts13,
.ts14,
.ts15,
.ts16,
.ts17,
.ts18,
.ts19,
.ts20,
.ts21,
.ts22,
.ts23,
.ts24,
.ts25,
.ts26,
.ts27,
.ts28,
.ts29,
.ts30,
.ts31,
.ts32,
.ts33,
.ts34,
.ts35,
.ts36,
.ts37,
.ts38 {
    background-image: none !important;
}`},{url:["istanbulfm.com.tr"],css:`#jarallax-container-0 {
    z-index: 0 !important;
}`},{url:["italy-vms.ru"],invert:["#main_logo"]},{url:["itbiznes.pl"],invert:[".custom-logo"]},{url:["itch.io"],invert:[".header_widget .mobile_nav_btn"],css:`.index_page .app_banner .outline_button,
.youtube_game_promo_banner_widget .game_information .cta_button {
    border-color: var(--darkreader-neutral-text) !important;
}`},{url:["item.jd.com"],ignoreImageAnalysis:["*"]},{url:["itemfix.com"],invert:[".logo-outer",".footer-logo",'a[href="ll"]']},{url:["ithardware.pl"],invert:[".navbar-brand",'a[href*="uzywki.expert"]','a[href*="rankingi"]','a[href*="feed"]']},{url:["iu-fernstudium.de"],invert:[".cp-logo",".cp-contact-bubble__svg-open",'svg[class$="transform"]']},{url:["iubenda.com"],invert:['img[alt="Iubenda logo"]']},{url:["iupts.org"],css:`body,
.loginbg {
    background-image: none !important;
}`},{url:["ixbt.com"],css:`body {
    background-color: var(--darkreader-neutral-background) !important;
    color: var(--darkreader-neutral-text);
}`},{url:["jacobin.com"],invert:[".hm-sd-b-ty",".hm-sd-b-ty > *",".po-cn .po-cn__intro",".po-cn .po-cn__intro > *",".po-cn .po-cn__rule",".po-hr-cn",".po-hr-cn > *",".pq::after",".pq::before",".si-hr-nv__icon--menu"]},{url:["jailbreak.fce365.info"],css:`body {
    background-image: none !important;
}`},{url:["jakdojade.pl"],invert:["#main-map"]},{url:["jamboard.google.com"],invert:[".docs-icon-img-container",".jam-button-content",".jam-icon-palette-black",".jam-icon-sticky-note-black"]},{url:["jamendo.com"],invert:[".player-volume_range_track",".player-volume_range_fill"]},{url:["japscan.lol"],css:`body {
    background-image: none !important;
}`},{url:["jared.com","kay.com","banter.com","peoplesjewellers.com","zales.com"],invert:[".company-logo"]},{url:["java.com"],invert:["html #jvc0v2.bg1 .jvc0w1","html #jvc0v2.bg3 .jvc0w1","html #jvc0v2.bg5 .jvc0w1"]},{url:["jbl.com"],css:`.product-tile .product-image .thumb-link img {
    mix-blend-mode: normal !important;
}
.search-refinement,
i[class^="icon"].hidden-xs {
    color: var(--darkreader-neutral-text) !important;
}
.product-tile .product-image {
    background-color: white !important;
}
.product-tile .product-swatches .swatch-list li.selected img,
.product-tile .product-swatches .swatch-list li.selected:hover img {
    border-color: white !important;
}`},{url:["jegy.mav.hu"],invert:[".service-icon-container",".standard-icon-size"],css:`.text-content .box {
    color: black !important;
}
div[style='background-image: url("https://jegy.mav.hu//PlaceReservationIcons/Graphic/Cars/wagon_base-empty.svg");'] span {
    color: black !important;
}`,ignoreInlineStyle:['g[id*="ules"] path',"#seat-info-container svg path","span"]},{url:["jenkins.io"],ignoreInlineStyle:[".logo-jenkins *"]},{url:["jewishcurrents.org"],invert:['img[alt="Jewish Currents"]']},{url:["jira.*.com"],invert:[".aui-dropdown2-trigger::after"]},{url:["jira.*.services"],css:`.hstbad {
    z-index: 1 !important;
}`},{url:["jisho.org"],invert:["h1.logo",".stage"]},{url:["jobs.github.com"],css:`#page {
    background-image: none !important;
}`},{url:["joemonster.org"],invert:["#commentHeader",".art-details span",".item-vote-down",".logo",".moderb",".mtv-item-not-working",".vote-down",".vote-up"],css:`body {
    background-image: none !important;
}`},{url:["johnhorgan.org"],css:`.column-sidebar-02 h4,
.column-sidebar-02 div,
.column-sidebar-02 a {
    color: \${white} !important;
}`},{url:["joincake.com"],invert:[".theme-revamp .bg-wave",".theme-revamp .bg-wave > *"],css:`.theme-revamp .bg-wave {
    background-color: white !important;
}`},{url:["joinhoney.com","*.joinhoney.com"],invert:['img[src$="paypal-honey-logo-bl.svg"]','img[src$="star-honey-rating.svg"]'],css:`#lp-pom-block-11 {
    background-color: black;
}`},{url:["joplinapp.org"],css:`#in-the-press-section {
    background-image: none !important;
}`},{url:["journal.tinkoff.ru"],invert:["._17-LK > span","._3aEco","._1Dhxk",".uVy35.V6dif::before","._38Vkx.FrrKu::after","._3LO60._4GqdT::after",".PwECA",".best-authors__arrow.best-authors__arrow--active",".best-authors__arrow",'label[class^="hamburgerMenu"]']},{url:["jpl.nasa.gov"],css:`.brand_area {
    background-image: url("https://www.jpl.nasa.gov/assets/images/logo_nasa_trio_white@2x.png") !important;
}`},{url:["jpmorgan.com"],invert:[".first-logo"]},{url:["jpost.com"],invert:['img[alt*="The Jerusalem Post"]','img[class*="header"]',".btn-digital-library-header > img"]},{url:["jsdelivr.com"],invert:[".navbar-brand > img"]},{url:["jsware.net"],invert:['img[src="since.gif"]'],css:`h5.H5Dex,
td.Dex {
    background: unset !important;
}`},{url:["juejin.cn"],invert:[".equation"]},{url:["jumia.*","jumia.*.*","zando.co.za"],invert:['svg.ic[role="img"]:not([aria-label="Zando logo"])',".logo > a > img",".inbox > a:not(:nth-of-type(1)) > svg",'img[src*="jumia-group-logo.png"]','img[src*="jumia_logo_small_checkout.png"]','img[src*="/Jumia-Pay"]',"li.logo:nth-child(1) > .-i-jumia-logo",'.-ecosystem > a.-category.-inlineblock.-vatop:not([href*="mall"]) > img','img[src*="empty-cart.png"]',".-header > img:nth-child(1)",'.-gy5 > .-fs0 > .vent-link[title*="Rewards"]','.-gy5 > .-fs0 > .vent-link[title*="Pay"]','.-gy5 > .-fs0 > .vent-link[title*="Primo"]','.-gy5 > .-fs0 > .vent-link[title*="Food"]','.-gy5 > .-fs0 > .vent-link[title*="Party"]','.-gy5 > .-fs0 > .vent-link[title*="Now"]',".col4 > .s-menu > a:not(:nth-child(1)):not(:nth-child(3)):not(:nth-child(7)) > svg","div.-fw-w:nth-child(1) > a.-fs0 > img","article.-df > svg > use","svg.ic.xprss","div.-df.-d-co.-c-bet > h3.-fw > svg.ic","a.fk-cb.-me-start.-fsh0 > svg.ic.-h-24"]},{url:["justhost.ru"],invert:[".header__logo"]},{url:["justtherecipe.com"],invert:["flt-glass-pane"]},{url:["juwai.com"],invert:[".c-header__logo",".c-responsive-navigation__logo"]},{url:["jvc.net"],invert:['img[src="img/logo.jpg"]']},{url:["k-report.net"],css:`.dfzlu1 div,
#diskuse_zahlavi a,
.dfprofil,
#diskuse_zahlavi td {
    color: var(--darkreader-neutral-background) !important;
}`},{url:["kaggle.com","kaggleusercontent.com"],css:`div.output_png img {
    background-color: \${black} !important;
}`,ignoreInlineStyle:["div.output_png img"]},{url:["kahoot.it"],invert:['main[data-functional-selector="correct-answer"] > div > div > div > svg > g > path','main[data-functional-selector="incorrect-answer"] > div > div > div > svg > g > path','main[data-functional-selector="time-up-answer"] > div > div > div > svg > g > path','div[data-functional-selector="kahoot-settings__language-picker"] > div > div > div > div > img',".sc-iqxcLP.klWCeb","g#Background","g#Greyscale",'span[data-functional-selector="kahoot-logo"] > svg > g > path'],ignoreInlineStyle:['[data-functional-selector^="answer"]','[data-functional-selector="intro-animation-animation_pre-question-animation"] *'],ignoreImageAnalysis:["*"]},{url:["kaldata.com"],ignoreImageAnalysis:[".tdi_112 .tdb-featured-image-bg"]},{url:["kali.org"],css:`#kali-platforms .card > div {
    background-image: none !important;
}`,ignoreImageAnalysis:["#banner-logo"]},{url:["kamigame.jp"],css:`article,
.article {
    background-image: none !important;
}`},{url:["kaos-community-packages.github.io"],invert:[".Header-brand"]},{url:["kaosx.us"],invert:[".Header-brand img"]},{url:["kapitanbomba.pl"],invert:[".custom-logo"]},{url:["kartotekaonline.pl"],css:`body {
    background-image: none !important;
}`},{url:["kasmedia.com"],css:`.flex {
    z-index: 1 !important;
}
.z-10 {
    z-index: 0 !important;
}`},{url:["katahiromz.web.fc2.com"],css:`body {
    background-image: none !important;
}`},{url:["kaytrip.com"],invert:[".date",".jd_ss",".liuchengt",".nApp",".nTel",".n_app",".tt_t",".wmap"],css:`#imageField {
    background-color: transparent !important;
}
.jd_xl {
    filter: none !important;
}`},{url:["kbb.com"],ignoreInlineStyle:['svg[class*="LogoText"] g']},{url:["kcsoftwares.com"],css:`.status-10-fg {
    color: #FF14FF !important;
}
.status-20-fg {
    color: #FF2190 !important;
}
.status-30-fg {
    color: #FFF719 !important;
}
.status-40-fg {
    color: #FF1919 !important;
}
.status-50-fg {
    color: #0062FF !important;
}
.status-80-fg {
    color: #47FF19 !important;
}
.status-90-fg {
    color: #727985 !important;
}`},{url:["keep.google.com"],invert:['img[src$="google_gsuite"]',".gb_hc"]},{url:["keepa.com"],invert:["div#loadingIcon","div.pLText"]},{url:["keepass.info"],invert:['img[src="help/images/trans.png"]'],css:`body {
    background-image: none !important;
}`},{url:["keepassxc.org"],css:`.btn-primary {
    color: var(--darkreader-neutral-background) !important;
}`},{url:["kelkoo.it"],ignoreInlineStyle:["svg *"]},{url:["kenh14.vn"],css:`.kbwcb-left,
.kbwcb-left::before {
    background-image: none !important;
}`},{url:["kenmore.com"],invert:[".navbar-brand"]},{url:["kenwood.com"],invert:[".logo01"]},{url:["kernel.org"],invert:['img[src*="understand"]']},{url:["keychron.*"],invert:['img[src*="keychron-logo-transparent"]','img[src*="keychron_600_V1.png"]',".btn--secondary"],css:`body,
.header,
.product-info,
.footer {
    background-color: var(--darkreader-neutral-background) !important;
}`},{url:["keyserver.pgp.com"],invert:["a.button-text","#ImPGPComHelp","#ImPGPComHome",'[src="images/crystal_button_left.gif"]','[src="images/crystal_button_left-dark.gif"]','[src="images/crystal_button_right.gif"]','[src="images/crystal_button_right-dark.gif"]','[src="images/global_dir_logo_web.gif"]','[background="images/crystal_button_fill.gif"]','[background="images/crystal_button_fill-dark.gif"]'],css:`.card-top,
.card-top-left-corner,
.card-top-right-corner,
.divide-fill,
.header-bar-left,
.header-bar-right,
.title-left,
.title-right {
    background-image: none !important;
}`},{url:["kfccoupons.co.nz"],css:`.img-container {
    z-index: 0 !important;
}
.img-container > img {
    filter: brightness(50%) sepia(40%) !important;
}`},{url:["khronos.org"],invert:[".navbar-brand"]},{url:["kiedyprzyjedzie.pl"],invert:[".cluster-marker div",".leaflet-pane > .leaflet-layer"],css:`.cluster-marker div span {
    color: var(--darkreader-neutral-background) !important;
}`},{url:["killedbygoogle.com"],invert:['img[src*="e.svg"]','img[src*="-logo"]']},{url:["kingston.com"],invert:[".s-kt-navigation .nav-logo img"]},{url:["kinhmatanna.com"],invert:['img[src$="/logo-anna.svg"]','img[src$="/anna-text.svg"]',"i.eicon",".elementor-button-icon > svg",".elementor-button-icon > svg > g"],css:`.elementor-button-icon::before {
    z-index: 1 !important;
}
.elementor-icon svg {
    fill: #f0f0f0 !important;
}
a[href="/danh-muc-san-pham/gong-kinh/"] {
    background-color: black !important;
    border-color: black !important;
    color: white !important;
}
a[href="/danh-muc-san-pham/gong-kinh/"]:hover {
    filter: invert(100%) contrast(90%) !important;
}
.product:not(div[data-elementor-type="product-archive"]) {
    background-color: #121212 !important;
}
.ast-container > div > section:nth-child(4) > div > div:nth-child(2) > div > div:nth-child(4) {
    z-index: 0 !important;
}`},{url:["kinoart.ru"],invert:["main > div > svg","header > a > svg","footer > div > svg","header > div > a > svg"]},{url:["kinopoisk.ru"],css:`input[name="kp_query"]::placeholder {
    background-image: linear-gradient(45deg, var(--darkreader-neutral-text) 70%, transparent 100%) !important;
}
input[name="kp_query"] {
    background-color: \${lightgray};
}
input[name="kp_query"]:focus {
    background-color: \${rgb(195, 195, 195)};
}`},{url:["kinsta.com"],invert:[".wp-block-kinsta-hero-title",".wp-block-kinsta-hero-title > *"]},{url:["kinzhal.media"],invert:['img[src$="logo.svg"]','img[src$="search.svg"]','img[src$="close.svg"]',".footer-soc",".footer__18",".kinzhal-icon"]},{url:["kioxia.com"],invert:[".header__logo"]},{url:["klubjagiellonski.pl"],invert:[".logo",".site_hamb svg"]},{url:["knaben.eu"],invert:['a[href="https://matrix.to/#/#general:knaben.org"]'],css:`form .text-darker,
div.text-bright,
div.text-darker,
pre.text-bright,
h3.text-darker,
h1.text-darker,
h2.text-bright,
button.text-darker {
    color: var(--darkreader-text-netural) !important;
}`},{url:["knife.media"],invert:['svg[class$="logo-image"]',".explorer__header-close"]},{url:["knossos.sice.com"],css:`#sidebar {
    background: var(--darkreader-neutral-background) !important;
    color: var(--darkreader-neutral-text) !important;
}
input,
select,
textarea {
    background: var(--darkreader-neutral-background) !important;
    color: var(--darkreader-neutral-text) !important;
}
.drdn-trigger,
tr.group td {
    background: var(--darkreader-neutral-background) !important;
    color: var(--darkreader-neutral-text) !important;
}`},{url:["knowyourmeme.com"],invert:[".enlargeNavigation > #enlargeNav-prev",".enlargeNavigation > #enlargeNav-next"]},{url:["ko-fi.com"],invert:['img[alt="Ko-fi Logo"]',".ui-mobile-nav-toggle"]},{url:["kohls.com"],invert:[".top-global-header #logo"]},{url:["komorkomat.pl"],invert:[".navbar-brand > img",".owl-wrapper",".result-item-logo"]},{url:["komputerswiat.pl"],invert:[".serviceLogoImg",".serviceIcon",".secondaryLogoImg"]},{url:["konicaminolta.us"],invert:["#km_Header .logo img"]},{url:["konkret24.tvn24.pl"],invert:[".header-left-corner__logo",".menu-button__bars",".report-toggle-button__icon",".search-panel-toggle-button__icon"]},{url:["konto.onet.pl/signin"],invert:['img[alt="Business Insider"]']},{url:["kopalniawiedzy.pl"],invert:['img[alt="Patronite"]']},{url:["korso24.pl","korsosanockie.pl"],invert:["img.weather-box__img",".nav-top__logo-wrapper",".nav-top__footer-burger > div > span","a.footer__logo"]},{url:["kort.foroyakort.fo"],invert:[".header-section > a:first-child",".container-section > .icon-node"]},{url:["kraken.com"],css:`header > nav > ul > li > a::after,
span[data-testid^="asset-pair"][data-testid$="-low"] + div > :last-child {
    background-color: var(--darkreader-neutral-text) !important;
}`},{url:["krew.info"],invert:['a[class*="kropla"]']},{url:["krita.org"],css:`.container {
    background: none !important;
}`},{url:["krytykapolityczna.pl"],invert:['img[src*="logo"]']},{url:["ksiegowawsieci.pl"],invert:[".logo"]},{url:["kubuntu.org"],invert:[".logo"]},{url:["kulinarnyblog.pl"],invert:[".logo-img"]},{url:["kwyk.fr"],css:`body {
    background-image: none !important;
}`},{url:["kyivindependent.com"],invert:[".custom-logo-link",".donate__patreon::before"]},{url:["l10n.kde.org"],css:`body {
    background-image: none !important;
}`},{url:["labcorp.com"],invert:[".logo"]},{url:["labfolder.com"],css:`:root {
    --secondary-color: \${#002b56} !important;
}`},{url:["laczynasnapiecie.pl"],invert:[".navbar-brand",".tim-power",".row-partners-logo a"]},{url:["ladybird.org"],invert:[".text-black img"],css:`.text-\\[\\#000\\] {
    text-shadow: \${rgb(225, 212, 201)} 1px 1px 0px !important;
}`},{url:["lafibre.info"],css:`.frame,
#header {
    background-image: none !important;
}`},{url:["lajtmobile.pl"],css:`body > * {
    --background: var(--darkreader-neutral-background) !important;
}
.ls-bg-wrap > img,
.generatorTemplate > .columnsBlockGeneratorBlock.mobileHide {
    filter: brightness(50%) sepia(40%) !important;
}
.columnsBlockGeneratorBlock .offertBlock:not(.highlightOffert),
.generatorTemplate > .columnsBlockGeneratorBlock.mobileHide,
.summaryModule,
.formModule,
input[type="text"] {
    background: var(--darkreader-neutral-background) !important;
}
.generatorTemplate > .columnsBlockGeneratorBlock.mobileHide > * {
    background: \${#FEF} !important;
}`},{url:["lambda-the-ultimate.org"],css:`a {
    color: #3391ff !important;
}`},{url:["lambdalabs.com"],invert:[".lambda-logo"]},{url:["lambdatest.com"],invert:[".tools_logo a img"]},{url:["landscan.ornl.gov"],invert:['img[src*="tile.openstreetmap.org"]','img[src*="landscan.ornl.gov/tiles"]'],css:`.global-key-values .square1 {
    background-color: \${\${#15150d}};
}
.global-key-values .square2 {
    background-color: \${\${#1f1f0d}};
}
.global-key-values .square3 {
    background-color: \${\${#2e2e0d}};
}
.global-key-values .square4 {
    background-color: \${\${#9b4e0d}};
}
.global-key-values .square5 {
    background-color: \${\${#f2690e}};
}
.global-key-values .square6 {
    background-color: \${\${#f29191}};
}
.global-key-values .square7 {
    background-color: \${\${#f2a4a4}};
}
.global-key-values .square8 {
    background-color: \${\${#f2c6c6}};
}
.hd-us-key-values .square1 {
    background-color: \${\${#15150d}};
}
.hd-us-key-values .square2 {
    background-color: \${\${#1f1f0d}};
}
.hd-us-key-values .square3 {
    background-color: \${\${#2e2e0d}};
}
.hd-us-key-values .square4 {
    background-color: \${\${#9b4e0d}};
}
.hd-us-key-values .square5 {
    background-color: \${\${#f27c38}};
}
.hd-us-key-values .square6 {
    background-color: \${\${#f29a9a}};
}
.hd-us-key-values .square7 {
    background-color: \${\${#f2c6c6}};
}`},{url:["languagetool.org"],invert:["#checktext_ifr"]},{url:["laptopmag.com"],invert:["div#publisherDetails.logo",".qc-cmp-publisher-logo"]},{url:["laravel.com"],css:`.bg-gray-100,
aside > div {
    background-color: var(--darkreader-neutral-background) !important;
}`},{url:["last.fm"],invert:[".resource-external-link--homepage::before",".share-option",".report-headline-share",".avatar-status-dot"],css:`.user-dashboard-loved-tracks .user-dashboard-big-datapoint-value a {
    color: \${#666666} !important;
}
.user-dashboard-catalogue-item-total a {
    color: \${#666666} !important;
}
.highcharts-text-outline {
    stroke: none !important;
}
.user-dashboard-scalable-content span {
    color: \${#666666} !important;
}
.linkfire-button {
    --darkreader-border--play-arrow-color: var(--gray-50) !important;
}
.promo-v3 .listening-report-promo-date::after {
    filter: invert(0.5) !important;
}`,ignoreInlineStyle:[".highcharts-bar-series .highcharts-point",".highcharts-area-series .highcharts-point"],ignoreImageAnalysis:[".masthead-logo-loading",".masthead-logo",".tag-label--average-daily-scrobbles::before",".report-headline-border"]},{url:["lastpass.com"],invert:[".lp-header__logo--link"]},{url:["latex.wikia.org"],invert:[".mwe-math-fallback-image-inline",".mwe-math-fallback-image-display"]},{url:["latimes.com"],invert:[".page-logo",".page-header-logo"]},{url:["launchpad.net"],invert:[".edit-controls","#launchpad-logo-and-name"],css:`.footer .lp-arcana {
    background-image: none !important;
}`},{url:["laurelroad.key.com"],invert:['img[src="images/logo-lrd.svg"]',".hds-header-logo__img"],css:`.kds-layout__grid {
    background-color: var(--darkreader-neutral-background) !important;
}`},{url:["leagueoflegends.com"],invert:['[data-testid="featurednews"] div[class^="style__ItemWrapper"] div[class^="style__Container"] canvas',".bxrpQD"],css:`article > div > canvas[class^="style__Canvas"] {
    display: none !important;
}
div[class^="style__NavContent"] {
    background-color: var(--darkreader-neutral-background) !important;
}`},{url:["lear.com"],invert:[".logo"]},{url:["learn.inside.dtu.dk"],invert:[".pdfViewer","svg","d2l-icon","d2l-button-icon"],css:`a {
    color: var(--darkreader-neutral-text) !important;
}
:html {
    --d2l-color-celestine-plus-2: var(--darkreader-neutral-background) !important;
}
:host {
    --d2l-dropdown-background-color: var(--darkreader-neutral-background) !important;
    --d2l-input-background-color: var(--darkreader-neutral-background) !important;
    --d2l-list-item-content-text-color: var(--darkreader-neutral-text) !important;
    --d2l-menu-background-color: var(--darkreader-neutral-background) !important;
    --d2l-menu-background-color-hover: var(--darkreader-neutral-background) !important;
    --d2l-tabs-background-color: var(--darkreader-neutral-background) !important;
}
.d2l-navigation-s-personal-menu-text,
.d2l-menu-item-text,
.d2l-body-small,
.d2l-heading,
d2l-htmleditor-menu-item,
d2l-empty-state-simple,
button {
    color: var(--darkreader-neutral-text) !important;
}
.d2l-card-link-container,
.d2l-card-footer,
.d2l-floating-buttons-container,
.d2l-htmleditor-container,
.d2l-dialog-outer,
d2l-card,
d2l-list-item-generic-layout {
    background-color: var(--darkreader-neutral-background) !important;
}`},{url:["learn2.open.ac.uk"],css:`.oucontent-quote p {
    color: \${grey} !important;
}`},{url:["learnopengl.com"],css:`#hover {
    background-image: none !important;
    opacity: 1 !important;
}`},{url:["learnroadrunner.com"],invert:['img[src*="YouAreHere"]','img[src="/assets/advanced/termination-flow.svg"]','img[src="/assets/img/max-vel-latex-half.319e0372.png"]',".u-wrap"]},{url:["learnyouahaskell.com"],invert:[".bgwrapper",".dp-highlighter"]},{url:["leetcode.com","leetcode-cn.com"],invert:['img[alt="logo"]',".cursor",".CodeMirror-cursor",".user-story-chapter-base .companies-showcase-base .logo"],css:`div[class^="data-structure-viewer"] g[class^="node"] > circle {
    fill: var(--darkreader-neutral-background) !important;
}
[class^=question-picker-detail] {
    background: none !important;
}
.monaco-editor,
.monaco-editor-background,
.monaco-editor .margin {
    background-color: var(--darkreader-neutral-background) !important;
}
div#solution img {
    background-color: \${black};
}`},{url:["legacy.com"],css:`.Directory {
    background-image: none !important;
}`},{url:["lemonde.fr"],invert:[".logo__lemonde"]},{url:["lenovo.com"],invert:[".m-megaMenu"],css:`.m-mastheadUtilityLinks {
    background: none !important;
}`},{url:["leroymerlin.*"],css:`.kl-tile__group {
    filter: invert(0%) !important;
}
.kl-tile .kl-blade--figure {
    z-index: 0 !important;
}`},{url:["lesbonscomptes.com"],css:`.important {
    background-color: rgb(92, 92, 61) !important;
}`},{url:["letters.gov.spb.ru"],invert:[".leaflet-map-pane"]},{url:["letyshops.com"],invert:[".header-logo-image"]},{url:["lever.co"],invert:["a.main-header-logo","div.site-branding"]},{url:["lexar.com"],invert:[".page_header_wrapper a.logo img"]},{url:["lg.com"],invert:[".logo",'img[src*="/features/"]']},{url:["liberte.pl","sklep.liberte.pl"],invert:['img[src*="liberte_logo.svg"]','img[src*="libertesklep.svg"]',".hamburger"]},{url:["libravatar.org"],invert:["footer::before",".hero::before"]},{url:["libretexts.org"],css:`.mt-content-container img:hover {
    background-blend-mode: normal;
    background-color: rgba(255, 255, 255, 0.75) !important;
}`},{url:["librewolf-community.gitlab.io"],invert:['[src="/images/search.svg"]','[src="/images/no-looking.png"]']},{url:["librewolf.com"],css:`.docs-container .max-w-screen-md .screenshot + .inner {
    background-image: linear-gradient( 180deg, rgba(255, 255, 255, 0) 0%, rgba(26, 24, 26, var(--darkreader-bg--tw-bg-opacity)) 50% ) !important;
}`},{url:["librivox.org"],invert:[".logo"],css:`.main-content-home,
.homepage-main-wrap,
.homepage-main-block p span {
    background-color: var(--darkreader-neutral-background) !important;
    border-color: transparent !important;
}
.box_1 {
    background-color: \${#eaefdf} !important;
}
.box_2 {
    background-color: \${#e0eef1} !important;
}
.post-wrap,
.page-wrap {
    background-color: \${#f8f8f5} !important;
}
.statistics-wrap {
    background-color: unset !important;
}`},{url:["licensing.biz"],invert:[".logo"]},{url:["lichess.org"],css:`.time {
    z-index: 0 !important;
}`,ignoreInlineStyle:["cg-container > svg > line"],ignoreImageAnalysis:[".is2d .bishop.black",".is2d .king.black",".is2d .knight.black",".is2d .pawn.black",".is2d .queen.black",".is2d .rook.black",".brown .is2d cg-board"]},{url:["life360.com"],invert:[".site-header .header-brand img"]},{url:["lifelock.com"],invert:[".c-topnav__logo-link"]},{url:["lightning.force.com","*.lightning.force.com"],invert:[".chart",".legend"],css:`.slds-brand-band,
.slds-brand-band::after,
.slds-brand-band_cover,
.slds-brand-band_medium,
.slds-page-header,
.slds-utility-bar,
.slds-tabs_card,
.slds-card-wrapper,
.slds-grid,
.slds-clearfix {
    background-color: var(--darkreader-neutral-background) !important;
}
.slds-card {
    background-color: \${rgb(201, 201, 201)} !important;
}
.slds-button_neutral,
.slds-button--neutral {
    color: \${rgb(1, 118, 211)} !important;
}`},{url:["lightningmaps.org"],invert:[".bo_map_realtime",".live_ctrl > img",".tiles_radar"]},{url:["lingvoforum.net"],invert:["div#header","div#header img.avatar","span.topslice","span.botslice"],css:`body {
    background-image: none !important;
}
div#header {
    color: black !important;
}
div#header a:link,
div#header a:visited {
    color: black !important;
}`},{url:["link.springer.com"],invert:[".c-header__brand",'img[src$="logo_high_res.png"]']},{url:["linkedin.com"],css:`:root {
    --color-text-low-emphasis: \${rgba(0,0,0,0.6)};
}
.js-job-card-company-logo {
    background-blend-mode: color;
    background-color: rgba(255, 255, 255, 0.20);
}
.global-footer-compact__linkedin-logo,
li-icon[type="linkedin-logo"],
.bug-text-color {
    fill: \${black} !important;
}
.pds-ge-entry-card__card {
    background: linear-gradient(to bottom, var(--color-action, var(--blue-70, #0073b1)), var(--color-action, var(--blue-70, #0073b1)) 4px, var(--darkreader-neutral-background, #fff) 4px, var(--darkreader-neutral-background, #fff)) !important;
}
.vjs-load-progress {
    background-color: hsla(0,0%,100%,.3) !important;
}
.vjs-play-progress,
.vjs-play-progress::before,
.vjs-volume-level::before,
.vjs-volume-level {
    background-color: #fff !important;
}
.vjs-volume-bar {
    background-color: hsla(0,0%,100%,.4) !important;
}
img[class*="ghost-"],
div[class*="ghost-"] {
    background-size: 100% 100% !important;
}
.artdeco-pill {
    background-color: \${#ccc} !important;
}
img {
    background-color: transparent !important;
}
img[src*="logo"] {
    filter: brightness(75%);
}
.card-layout {
    background-color: var(---darkreader-neutral-background);
}
.member-analytics-addon-insight-v2 {
    background: var(--darkreader-bg--voyager-color-background-brand-accent-1-tint) !important;
}`},{url:["linode.com"],invert:[".c-identity__image"],css:`.o-form__input {
    background-color: rgb(41, 44, 46) !important;
    border-color: rgb(232, 230, 227) !important;
    color: rgb(232, 230, 227) !important;
}
.o-form__input:hover {
    background: transparent !important;
}
.o-form__icon::before {
    color: rgb(232, 230, 227) !important;
}
.o-form__input::placeholder {
    color: rgb(232, 230, 227) !important;
}
.o-button,
o-button--secondary {
    background-color: rgb(41, 44, 46) !important;
    border-color: rgb(232, 230, 227) !important;
    color: rgb(232, 230, 227) !important;
}
.o-button:hover {
    background: transparent !important;
}`},{url:["linotype.com"],invert:["#logo"]},{url:["linustechtips.com"],invert:[".ipsMenu"],css:`:root {
    --darkreader-bg--badge--background: \${white} linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.9)) !important;
}
.ipsHovercard {
    background-color: \${#fff} !important;
}`},{url:["linux-hardware.org"],css:`#ezcGraphChart > path:first-of-type {
    fill: var(--darkreader-neutral-background) !important;
}`},{url:["linuxfoundation.org"],invert:[".logo img"]},{url:["linuxgrandma.blogspot.com"],css:`body {
    background-color: var(--darkreader-neutral-background) !important;
    background-image: none !important;
}`},{url:["linuxuprising.com"],invert:[".logo"]},{url:["lirc.org"],css:`body {
    background: none !important;
}`},{url:["literia.pl"],invert:[".icon-svg-pinterest",".icons-icon-facebook",".sec-logo",".slick-arrow","a::after","a#logo","span.as-label::before",'img[alt="ringier axel springer"]']},{url:["live.myvrspot.com"],invert:[".img-logo"],css:`.wrap {
    background: var(--darkreader-neutral-background);
}`},{url:["liveagent.com"],invert:[".Header__logo"]},{url:["livemint.com"],invert:["div.icoMenu","a.icoSearch.iconSprite","a.icoBell.iconSprite","a.icoBookmark2.iconSprite","a.icoBookmark3.iconSprite","a.icoTwit.iconSprite","div.icoShare.iconSprite"]},{url:["liveuamap.com"],invert:[".comment-link::after",".leaflet-pane > .leaflet-layer",".logo",".top-bright > label::after"],css:`.head-news {
    background-image: none !important;
}`},{url:["lkml.org"],invert:['img[src*="corner"]'],css:`body {
    background-image: none !important;
}
td.c {
    color: \${white} !important;
}
pre[itemprop="articleBody"] a {
    color: \${lightblue};
}`},{url:["llvm.org","*.llvm.org"],css:`header,
.www_sectiontitle,
.www_sidebar {
    background: none !important;
}`},{url:["loepenshop.com","bonjourfoto.nl"],css:`body {
    background-image: none !important;
}`,ignoreImageAnalysis:["div.art-Header-jpeg"]},{url:["login-widget.privatbank.ua"],css:`div[class*="qrContainer"] > div > div {
    background-color: white !important;
}`},{url:["login.assetpanda.com"],css:`tr,
.main-container {
    background-color: var(--darkreader-neutral-background) !important;
}`},{url:["login.docker.com"],invert:['span[data-provider^="github"]'],css:`body {
    --page-background-color: var(--darkreader-neutral-background) !important;
}
:root {
    --font-default-color: var(--darkreader-neutral-text) !important;
    --input-background-color: var(--darkreader-neutral-background) !important;
    --input-text-color: var(--darkreader-neutral-text) !important;
    --secondary-button-text-color: var(--darkreader-neutral-text) !important;
    --title-font-color: var(--darkreader-neutral-text) !important;
    --widget-background-color: var(--darkreader-neutral-background) !important;
}`},{url:["login.live.com"],invert:['div[id$="Proofs"] .tile-img',"div.promoted-fed-cred-content > div > div > div > div > img","div#credentialList.form-group > div > div > div > div > div > img","div.pagination-view.has-identity-banner.animate.slide-in-next > div > div > div > img","span.help-button > img","button.backButton > img",'img[data-testid="backgroundLogo"]'],css:`[data-testid="backgroundImage"] {
    background-image: none !important;
}`},{url:["login.yahoo.com"],invert:[".social-login","label[for=persistent]::before","#password-toggle-button"],ignoreImageAnalysis:[".social-login"]},{url:["logowanie.edukacja.olsztyn.eu"],invert:['img[alt="Nagłówek strony"]',"img#logo",'img[src="/Resources/wylogowano-plansza.jpg"]'],css:`body {
    background-image: none !important;
}`},{url:["lol.fandom.com"],css:`.bracket-line:not(.l-down)::after,
.bracket-line::before,
.bracket-spacer.horizontal::before {
    border-width: 0 0 2px 0 !important;
}
.bracket-line.z-down::after {
    border-width: 0 0 2px 2px !important;
}
.bracket-line.z-down::before {
    border-width: 2px 2px 0 0 !important;
}
.bracket-line.z-up::before {
    border-width: 0 2px 2px 0 !important;
}
.bracket-line.z-up::after {
    border-width: 2px 0 0 2px !important;
}`},{url:["lovekrakow.pl"],invert:[".brand"]},{url:["lowendtalk.com"],invert:[".MeMenu > :last-child",".SpBookmarks"]},{url:["lowes.com"],css:`img {
    mix-blend-mode: normal !important;
}`},{url:["lrt.lt"],invert:['img[src*="/images/logo/logo-"]']},{url:["lsa.umich.edu"],ignoreImageAnalysis:[".header-wrap",".giving-wrap"]},{url:["lunapic.com"],invert:[".toolbar-button",".square-toolbar-button"],ignoreInlineStyle:[".color-well-color"]},{url:["luogu.com.cn"],ignoreInlineStyle:[".fa-group",".fa-secondary",".fa-primary",".lfe-caption tag status-name"]},{url:["lux.camera"],css:`.u-content-background {
    background-color: var(--darkreader-neutral-background) !important;
}`},{url:["lyx.org"],css:`body,
#wrapper {
    background-image: none !important;
}
#col-right {
    background: var(--darkreader-neutral-background) !important;
}`},{url:["m.dianping.com"],invert:[".flash-screen",".header-download-img"]},{url:["m.genk.vn"],css:`.news .li {
    background-image: none !important;
}`},{url:["m.motonet.fi"],css:`form#haku input[type="text"],
#select_my_motonet {
    color: var(--darkreader-neutral-text);
}`},{url:["m.slashdot.org"],css:`.slashbar,
.story-prop,
#discussion,
#filler {
    background-image: none !important;
}`},{url:["mabi.tmpinc.io/numbers/"],invert:["button","img.lock","div.line"],css:`.bit.blue,
.bit.red,
.bit.green {
    border-bottom: 3px solid var(--bit-color) !important;
}
.bit.gray {
    background-color: \${lightgray} !important;
}
label:first-of-type {
    border-left: 1px solid var(--darkreader-neutral-text) !important;
}
label {
    border-bottom: 1px solid var(--darkreader-neutral-text) !important;
    border-right: 1px solid var(--darkreader-neutral-text) !important;
    border-top: 1px solid var(--darkreader-neutral-text) !important;
}
.demo {
    border-color: var(--darkreader-neutral-text) !important;
}
:root {
    --darkreader-border--bit-color: var(--darkreader-neutral-text);
}`},{url:["machinelearningmastery.com"],invert:["img.size-full.wp-image-7676"]},{url:["macrumors.com"],css:`body,
.js-content,
.widget--3ewetJyi {
    background-color: var(--darkreader-neutral-background) !important;
}
.textRow--3IWlPgCD {
    color: var(--darkreader-neutral-text) !important;
}`},{url:["madshi.net"],css:`body,
tr,
td {
    background-image: none !important;
}`},{url:["mafreebox.freebox.fr"],css:`* {
    filter: none !important;
}
.desktop-icon-outer {
    color: #fff !important;
}
body {
    background-image: linear-gradient(rgb(14 14 14 / 50%), rgb(40 40 40 / 50%)), url(../resources/images/fbx/bg_freeboxos.svg);
}
.setting-list-app .setting-app .setting-app-img,
.file-icon-inode_directory,
.x-tree-icon {
    opacity: 1 !important;
}
.freeboxos-southbar .btn-start .x-btn-button {
    background-color: #fff !important;
}`,ignoreImageAnalysis:[".freeboxos-southbar .btn-start .x-btn-button","body"]},{url:["magazine.skyeng.ru"],invert:[".header__logo__img"]},{url:["magazynbieganie.pl"],invert:[".logo-box"]},{url:["magic.freizeitspieler.de"],invert:['img[src="pics/MtG-Freizeitspieler.gif"]'],css:`body {
    background-image: none !important;
}`},{url:["magister.net"],invert:[".bottom > img"],css:`.splash-container {
    z-index: 0 !important;
}
.cijfers-k-grid.k-grid .grade.empty {
    background-color: \${#cfcfcf} !important;
    background-image: none !important;
}`},{url:["mail.eni.it/owa"],ignoreImageAnalysis:[".image-font-png",".image-font_size-png",".image-bold-png",".image-italic-png",".image-underline-png",".image-backcolor-png",".image-forecolor-png",".image-insertunorderedlist-png",".image-insertorderedlist-png",".image-outdent-png",".image-indent-png",".image-justifyleft-png",".image-justifycenter-png",".image-justifyright-png",".image-createlink-png",".image-unlink-png",".image-superscript-png",".image-subscript-png",".image-strikethrough-png",".image-alttext-png",".image-blockdirltr-png",".image-blockdirrtl-png",".image-undo-png",".image-redo-png",".image-removeformat-png",".image-table_icon-png",".image-insertpicture-png",".image-emoji-png",".image-format-png",".image-c_word-png",".image-c_powerpoint-png",".image-c_excel-png"]},{url:["mail.google.com"],invert:[".asor_t0",".asor_i1 > img",".asor_i4",".d-Na-Jo.d-Na-N-ax3",".RK-QJ-Jk",".RK-Mo.RK-Qq-LF","#ita-st-id-cs",".d-Na-N-M7-JX.d-Na-J3",".gb_df",'img[src$="google_gsuite"]','img[src$="profile_mask2.png"]',".rY>.sa",".buh",".asor",".mixmax-flyout__wrapper",'div[aria-label="Hangouts"] > div[role="tablist"] > div[tabid="chat"] > div','form[method="POST"] ~ table div[style] > div > :first-child button:not([string]):not([id])','img[src^="//ssl.gstatic.com/ui/v1/icons/common/x"]','div[style$="gm_add_black_24dp.png)"]'],css:`@media (min-resolution: 144dpi), (-webkit-min-device-pixel-ratio: 1.5) {
    .buk {
        background-image: url(//ssl.gstatic.com/ui/v1/icons/mail/rfr/density_default_v1_2x.png) !important;
    }
    .bui {
        background-image: url(//ssl.gstatic.com/ui/v1/icons/mail/rfr/density_comfortable_v1_2x.png) !important;
    }
    .buj {
        background-image: url(//ssl.gstatic.com/ui/v1/icons/mail/rfr/density_compact_v1_2x.png) !important;
    }
}
.buk {
    background-image: url(//ssl.gstatic.com/ui/v1/icons/mail/rfr/density_default_v1_1x.png) !important;
}
.bui {
    background-image: url(//ssl.gstatic.com/ui/v1/icons/mail/rfr/density_comfortable_v1_1x.png) !important;
}
.buj {
    background-image: url(//ssl.gstatic.com/ui/v1/icons/mail/rfr/density_compact_v1_1x.png) !important;
}
div[class*="bym"][role="navigation"],
.afC,
.agJ {
    background-color: var(--darkreader-neutral-background) !important;
}
.agJ:hover,
.ag5 {
    background-color: \${#E8E6E5} !important;
}
.agJ.bjE {
    background-color: \${#E3E1E0} !important;
}
.ain .TO,
.TO.ol {
    background-color: rgba(255,255,255,0.05) !important;
}
.agh,
.afV,
.afA,
.bbV {
    background-color: transparent !important;
}
.aRg,
.aRj {
    color: \${white} !important;
}
.gb_3e {
    color: \${white} !important;
}
table {
    color: \${black} !important;
}
.agP,
.afx {
    background: \${rgb(229, 228, 229)} !important;
}`,ignoreInlineStyle:[".at",".au",".av",".qj",".hU.hM",".hV.hM",".ajZ-Jt",".aH5",".JA-Kn-Jr-Kw-Jt"]},{url:["mail.jwpub.org/owa"],ignoreImageAnalysis:[".image-font-png",".image-font_size-png",".image-bold-png",".image-italic-png",".image-underline-png",".image-backcolor-png",".image-forecolor-png",".image-insertunorderedlist-png",".image-insertorderedlist-png",".image-outdent-png",".image-indent-png",".image-justifyleft-png",".image-justifycenter-png",".image-justifyright-png",".image-createlink-png",".image-unlink-png",".image-superscript-png",".image-subscript-png",".image-strikethrough-png",".image-alttext-png",".image-blockdirltr-png",".image-blockdirrtl-png",".image-undo-png",".image-redo-png",".image-removeformat-png",".image-table_icon-png",".image-insertpicture-png",".image-emoji-png",".image-format-png"]},{url:["mail.qq.com"],invert:[".header_logo",".imglogo",".listbg",".navbar",".topline",".topbg",".todaybar_ad_bg",".navbottom",".search_subject .smartsearch","#searchIcon"],css:`.fdbody,
.tipstitle {
    background-color: \${#9bbb59} !important;
}
.fdbody {
    border-left-color: var(--darkreader-neutral-background) !important;
}
.readmailinfo,
.settingtable,
.tabtitle td.selected,
.biginfo,
.tipstitle,
.colorsure {
    background-color: \${#ebf4d8} !important;
}
.toolbgline,
.tabtitle td,
.readmailinfo,
.settingtd,
.addr_line,
.filtertd1,
.bartools {
    border-bottom-color: \${#87a34d} !important;
}
.toolbg,
.toolbg1,
.tabtitle,
.addrsort {
    background-color: \${#bed393};
}
.attbg {
    background-color: \${#dceac0} !important;
}
body[module="qmReadMail"] {
    background-color: var(--darkreader-neutral-background) !important;
    color: var(--darkreader-neutral-color) !important;
}
.selbar_bt {
    background-color: var(--darkreader-neutral-background) !important;
    border-bottom-color: var(--darkreader-neutral-background) !important;
    border-top-color: var(--darkreader-neutral-background) !important;
}
table.O2 td {
    border-bottom-color: \${#c1c8d2} !important;
}
body[accesskey],
.cpright {
    background-color: var(--darkreader-neutral-background) !important;
}
.B,
.nomail,
.colortitle {
    background-color: \${#a9b3b6} !important;
}
.settingTitle .selected {
    color: \${#ebf4d8} !important;
}`},{url:["mail.tutanota.com"],css:`div.mb > div > svg > path {
    fill: black !important;
}`},{url:["mailbox.org"],css:`body.bg-blog {
    background-image: none !important;
}
.common .mod_article > .inside {
    background-color: var(--darkreader-neutral-background) !important;
}`,ignoreInlineStyle:[".io-ox-sidepopup"]},{url:["make.com","*.make.com"],css:`.switch.active::after {
    color: var(--darkreader-bg--white) !important;
}
.switch:not(.active)::before {
    color: var(--darkreader-bg--white) !important;
}
.switch:not(.active)::after {
    color: var(--darkreader-text--white) !important;
}`},{url:["makeuseof.com"],ignoreImageAnalysis:[".header-logo"]},{url:["maltapost.com"],css:`.multi-steps > li.is-active::before {
    background-color: gray !important;
}`},{url:["manage.buyvm.net"],invert:[".legend-container"]},{url:["manjaro.org"],invert:['img[alt="manjaro logo"]'],css:`.bg-teal-accent-400,
.bg-teal-accent-400 path {
    background-color: \${rgb(29,233,182)} !important;
    fill: \${rgb(29,233,182)} !important;
}`,ignoreInlineStyle:[".bg-teal-accent-400 path"]},{url:["manualslib.com"],ignoreImageAnalysis:["div.pdf"]},{url:["manytoon.com"],css:`.profile-manga,
.c-breadcrumb-wrapper {
    background-image: none !important;
}`},{url:["map.qq.com"],invert:["#FullScreen","#Logo","#Map",".MenuPanelCheckbox",".MenuPanelContent",".nextStep",".prevStep",".textInput",".titleText",".traffic_next",".traffic_rightbg_b2",".traffic_rightbg_m",".traffic_rightbg_m3",".traffic_rightbg_t2"]},{url:["mapa-turystyczna.pl"],invert:[".ts-map svg"]},{url:["maps.metager.de"],invert:[".map canvas"]},{url:["mapy.cz","*.mapy.cz"],invert:['img[src*="mapserver.mapy.cz"]:not([src*="bing"])',".icon polygon"],css:`.marker span.text {
    color: black !important;
}`},{url:["marginalrevolution.com"],invert:[".logo-mobile",".logo-desktop",'img[src$="mru-logo-450.png"]'],css:`nav {
    background-color: #288d73 !important;
}`},{url:["mariadb.org"],invert:[".featured-header-image"]},{url:["marinij.com"],invert:[".custom-logo.logo > a > img"]},{url:["market.yandex.*"],invert:['ymaps[class$="main-engine-container"] > canvas','ymaps[class$="marker"] > div > div > div'],css:`a[data-zone-name="offerLink"]:has(img) {
    background-color: #fff !important;
}
[data-baobab-name="picture"],
[data-zone-name="picture"] > div > div,
[data-zone-name="picture"] img {
    mix-blend-mode: unset !important;
}
[data-zone-name="offer"] > div > div:nth-child(1) > div:nth-child(1) {
    background-color: white;
}
[data-zone-name="cartButton"] button {
    background-color: rgb(136, 109, 0) !important;
}`,ignoreInlineStyle:['[data-zone-name="offer"] > div > div:nth-child(1) > div:nth-child(1)']},{url:["marketmarketmarket.com","marketstudios.com"],invert:["img.header__heading-logo","button.is-active"],css:`:root {
    --gradient-background: rgb(24, 26, 27) !important;
}
sticky-header.header-wrapper {
    background-color: rgb(24, 26, 27) !important;
}
::placeholder {
    color: transparent !important;
}`},{url:["marketplace.visualstudio.com"],css:`.ux-updated-date {
    color: \${rgb(55, 255, 0)} !important;
}
.ms-Grid-row {
    color: \${rgba(0, 0, 0, .8)} !important;
}`},{url:["markmcgranaghan.com"],css:`body {
    background-color: transparent !important;
}`},{url:["marktplaats.nl"],invert:[".mp-Header-logo",".mp-svg-messages",".mp-svg-notification",".mp-svg-profile",".svg-icon-block"]},{url:["mastarti.com","streamguard.cc"],invert:[".fp-play-icon div",".fp-pause-icon .fp-pause-block div",".fp-volumebar em.fp-color",".fp-fullscreen-line",".fp-fullscreen-dot"]},{url:["math.semestr.ru"],invert:[".img-online"]},{url:["math.tamu.edu"],invert:['div[align="center"] > p + p > img']},{url:["mathsisfun.com"],css:`#searchFld {
    background-color: var(--darkreader-neutral-background) !important;
    border-color: black !important;
}
#searchBtn {
    background-color: var(--darkreader-neutral-background) !important;
    border-color: black !important;
}
#content h1 {
    color: var(--darkreader-neutral-text) !important;
}
#hdr {
    opacity: 0.2;
}
#menuWide li {
    background-color: rgb(64, 99, 255) !important;
    color: white !important;
}
#menuWide li:hover {
    background-color: rgb(18, 35, 112) !important;
}`},{url:["mathsolver.microsoft.com"],invert:["img.light"],css:`.page-header {
    background: \${#e4e6e7} !important;
}
.page-layout-container {
    background: \${#d1e1e1} !important;
}
.t1 {
    color: \${#4f4941} !important;
}`},{url:["matomo.org"],invert:['img[alt*="WordPress"]','img[src*="Mailfence"]','img[src*="sampling"]','img[src*="logo"]',"img.mega-menu-logo"],css:`select,
.elementor-text-editor,
.elementor-text-editor *,
.elementor-blockquote *,
.elementor-testimonial *,
.elementor-price-table * {
    color: var(--darkreader-neutral-text) !important;
}
.elementor-card-shadow-yes .elementor-post__card:hover {
    box-shadow: rgb(76 75 75 / 42%) 0px 0px 30px 0px;
}
.elementor-card-shadow-yes .elementor-post__card {
    box-shadow: rgb(0 0 0 / 23%) 0px 0px 10px 0px;
}`},{url:["matrix.org"],invert:[".mxnavbar__logo",".mxnavsection__icon",".mxgrid__item__bg__img",".mxblock__explore__item__img",'a[aria-label="matrix live  permalink"] > svg',"a > svg"]},{url:["matrix.to"],invert:["div.footer > p > img"]},{url:["matsci.org"],invert:[".d-header #site-logo"],css:`.category-logo.aspect-image img {
    background-color: white !important;
}`},{url:["matters.news"],invert:[".splash-screen .icon",".logo .icon"],css:`section[class$="container"][style^="background-image"] {
    background-image: none !important;
}`},{url:["mcbsys.com"],invert:[".site-branding",".icon-image"]},{url:["mcdonalds.com"],invert:[".cmp-global-header__logo"]},{url:["mediaexpert.pl"],invert:[".euronics-logo",".sg-kategory-box-txt",".sg-new-btn-white",".sg_kat_txt",'img[src*="kafelki_do_bran"]','svg > path[d^="M244.122 17.1023C244.122"]']},{url:["medianauka.pl"],invert:['img[src*="wzory"]']},{url:["mediawiki.org","*.mediawiki.org","wikibooks.org","*.wikibooks.org","wikidata.org","*.wikidata.org","wikiless.org","*.wikiless.org","wikimedia.org","*.wikimedia.org","wikimediafoundation.org","*.wikimediafoundation.org","wikinews.org","*.wikinews.org","wikipedia.org","*.wikipedia.org","wikiquote.org","*.wikiquote.org","wikisource.org","*.wikisource.org","wikiversity.org","*.wikiversity.org","wikivoyage.org","*.wikivoyage.org","wikiwand.com","*.wikiwand.com","wiktionary.org","*.wiktionary.org"],invert:["#main_menu > li:not(.lang_btn) > img.logo_img ~ i","#p-logo-text",".article_btn .drop_down li a > i",".bookend",".cdx-text-input__icon.cdx-text-input__start-icon",".central-featured-logo-text",".central-textlogo__image",".feedback_btn .drop_down li a > i",'.licensetpl td[style^="width"]',".locmap .pl",".locmap .pr",".logo-container",".logo:not(td)",".main-footer-menuToggle",".mf-icon-close-gray",".mf-icon-expand",".mf-icon-expand-invert",".minerva-footer-logo img",".music-symbol img",".mw-ext-score",".mw-hiero-outer.mw-hiero-table",".mw-kartographer-map",".mw-kartographer-mapDialog-map",".mw-logo-tagline",".mw-logo-wordmark",".mw-mmv-filepage-buttons .mw-mmv-view-config .mw-ui-icon::before",".mw-mmv-filepage-buttons .mw-mmv-view-expanded .mw-ui-icon::before",".mw-ui-icon-wikimedia-expand",".mw-wiki-logo",".mwe-math-fallback-image-display",".mwe-math-fallback-image-inline",".nav-logo",".svg-Wikimedia-logo_black",".title_icon",".toc-title-icon",'.tool.tool-button[src$="background-image:"]',".wd-mp-headerimage",".zh-glyph img","body > .oo-ui-windowManager .vega .marks","div.post-content.footer-content > h2 > img","header .branding-box > a > span > img","img.graphite-graph","img.immediate:not(.ntmb)","img.logo_img",'img[alt="Video Camera Icon.svg"]','img[alt="audio speaker icon"]','img[alt="logo Wikisource"]','img[src*="Wiktionary-logo"]','img[src="images/black.png"]',"li.menu-tooltip:not(.lang_btn)","td.icon",'.mbox-image img.mw-file-element[src*="Crowned_Portcullis_redesign_2018.svg.png"]',".vector-dropdown .vector-dropdown-label:not(.cdx-button--icon-only)::after",".vector-page-titlebar .mw-portlet-lang .vector-dropdown-label.cdx-button--action-progressive.cdx-button--weight-quiet::after",'img[src*="Wikipedia-logo-textonly.svg"]','img[src*="Unbalanced_scales.svg"]','td[style*="background: var(--background-color-"]:not([style*="var(--background-color-base, white)"])','img.mw-file-element[src*="ignature.svg"]','img.mw-file-element[src*="Emblem_of_Iran.svg"]','.infobox [style*="background"]:not(.infobox tbody td[style*="background"]):not([style*="color: white"]):not(.mw-no-invert)','img[src*="Share_alt_square_font_awesome.svg"]','img[src*="Justice_scale_silhouette%2C_medium.svg"]','img[src*="Twemoji_1f464.svg"]','img[src*="Mp3.svg"]','img[src*="Globe_eye_icon.png"]','img[src*="Octicons-globe.svg"]','img[src*="Stylized_eye.svg"]'],css:`:root {
    --darkreader-border--border-color-base: \${#a2a9b1} !important;
}
.mwe-popups-discreet > img,
div .thumbimage[src$=".png"],
div .thumbimage img[src$=".png"],
.image-carousel .image-loaded {
    background-color: white;
}
.mw-mmv-image .svg,
.fullImageLink [src*=".svg"],
a[href$=".svg"]:hover > img,
a[href*=".gif"]:hover > img {
    background-blend-mode: color;
    background-color: rgba(255, 255, 255, 0.75) !important;
}
.diff-addedline .diffchange {
    background-color: \${lightblue} !important;
}
.diff-deletedline .diffchange {
    background-color: \${#feeec8} !important;
}
@keyframes unseen-fadeout-to-unread {
    from {
        background-color: \${#dce8ff} !important;
    }
    to {
        background-color: \${#ffffff} !important;
    }
}
@keyframes unseen-fadeout-to-read {
    from {
        background-color: \${#dce8ff} !important;
    }
    to {
        background-color: \${#eaecf0} !important;
    }
}
.main-top {
    background: none !important;
}
ol.references li:target,
sup.reference:target {
    background-color: \${lightblue} !important;
}
.control-bar {
    background-color: var(--darkreader-neutral-background) !important;
    background-image: none !important;
}
.k-player,
body.mediawiki,
#dialogEngineContainer #dialogEngineDialog {
    background-color: var(--darkreader-neutral-background) !important;
}
.template-facttext {
    background-color: \${#c8c6c3} !important;
}
#mw-page-base {
    background-color: var(--darkreader-neutral-background);
    background-image: linear-gradient(\${rgb(231, 229, 228)} 50%, var(--darkreader-neutral-background) 100%) !important;
}
body.skin--responsive,
#menus-cover-background {
    background-image: linear-gradient(\${rgb(231, 229, 228)} 50%, var(--darkreader-neutral-background) 100%) !important;
}
.vector-sticky-pinned-container::after {
    background: linear-gradient(transparent, var(--darkreader-neutral-background)) !important;
}
[style*="background: rgb(221, 221, 255)"],
[style*="background-color: rgb(221, 221, 255)"] {
    background: \${rgb(221, 221, 255)} !important;
}
button[class*=mw-mmv-]:not(.cdx-button),
.cdx-button:enabled .cdx-button__icon,
a[role="button"][class*="mw-mmv-"]:not(.cdx-button),
.cdx-button::after,
span.mw-mmv-icon {
    background-color: white !important;
}
div.mw-warning-with-logexcerpt,
div.mw-lag-warn-high,
div.mw-cascadeprotectedwarning,
div#mw-protect-cascadeon,
div.titleblacklist-warning,
div.locked-warning {
    background-color: \${#ffa9a9} !important;
    border-color: \${#ffa1a1} !important;
}
div.NavFrame div.NavHead {
    background-image: none !important;
}
figure[typeof~="mw:File/Thumb"],
figure[typeof~="mw:File/Thumb"] > figcaption,
figure[typeof~="mw:File/Thumb"] > :not(figcaption) .mw-file-element,
div.thumbinner,
#filetoc,
.mw_metadata td,
div.flaggedrevs_short,
.wbmi-entityview-captionsPanel,
.page-actions-menu,
.content .mw-image-border .mw-file-element,
.mw-footer,
.last-modified-bar,
.minerva-footer-logo,
.cdx-card,
.cdx-thumbnail__placeholder,
.layouttemplate.licensetpl {
    border-color: var(--darkreader-border--border-color-base) !important;
}
.mw-parser-output .sidebar {
    background: var(--darkreader-bg--background-color-neutral-subtle) !important;
}
td[style*="border-bottom:"]:[style*="1px"] {
    border-bottom: solid 1px var(--darkreader-border--border-color-base) !important;
}
td[style*="border-top:"]:[style*="1px"] {
    border-top: solid 1px var(--darkreader-border--border-color-base) !important;
}
th[style*="border-left:"]:[style*="1px"],
td[style*="border-left:"]:[style*="1px"] {
    border-left: solid 1px var(--darkreader-border--border-color-base) !important;
}
th[style*="border-right:"]:[style*="1px"],
td[style*="border-right:"]:[style*="1px"] {
    border-right: solid 1px var(--darkreader-border--border-color-base) !important;
}
#normdaten > div > div {
    background-color: \${#eeeeee} !important;
}
.infobox [style*="border-left:1px dotted #aaa"] {
    border-left: 1px dotted \${#aaa} !important;
}
.infobox [style*="background"]:not([style*="color: white"]) {
    color: #35312C !important;
}
.infobox tbody td {
    color: \${#35312C} !important;
}`,ignoreInlineStyle:["#on_image_elements span",'.infobox [style*="background"]',".infobox table td",".legend-color:not(table.wikitable .legend-color)",'td[style*="background: var(--background-color-"]',".plainlinks table"],ignoreImageAnalysis:[".k-player .k-menu-bar li a",".mf-icon-expand",".mw-wiki-logo",".toc-title-icon",".vector-dropdown .vector-dropdown-label:not(.cdx-button--icon-only)::after",".vector-page-titlebar .mw-portlet-lang .vector-dropdown-label.cdx-button--action-progressive.cdx-button--weight-quiet::after"]},{url:["medium.com"],invert:[".svgIcon",".svgIcon-use",'div[role="separator"]']},{url:["medium.freecodecamp.org"],css:`span.markup--quote.markup--p-quote.is-other {
    background-image: linear-gradient(rgba(14, 255, 167, 0.2), rgba(14, 255, 167, 0.2)) !important;
}`},{url:["medrxiv.org"],invert:[".blood_logo",".logo-img"]},{url:["meduza.io"],css:`mark {
    color: var(--darkreader-neutral-text) !important;
}`},{url:["meet.google.com"],ignoreInlineStyle:['svg[preserveAspectRatio*="meet"] *']},{url:["meet.jit.si"],ignoreInlineStyle:[".jitsi-icon *"]},{url:["mega.nz"],invert:["a.fm-files-view-icon","a.top-icon.menu","div.checkdiv.megaapp-download.checkboxOff.switches","div.fm-dialog-close.medium","div.nw-tree-panel-arrows.icons-sprite","i.small-icon.context","i.small-icon.dialog-sprite.arrows-to-bottom","i.small-icon.dialog-sprite.arrows-to-top","i.small-icon.download-as-zip","i.small-icon.icons-sprite.tiny-grey-tick","i.small-icon.import-to-cloud","i.top-menu-icon.menus-sprite","i.transfer-progress-icon","span.top-icon.language"],css:`.grid-wrapper {
    outline-color: var(--darkreader-bg--surface-main);
}
.topbar-searcher {
    background: var(--darkreader-bg--surface-grey-2) !important;
}
div.mega-dialog.dialog-template-action.two-factor-dialog.verify-two-factor-login {
    background-color: var(--darkreader-bg--surface-main) !important;
}
#msgDialog {
    background: var(--darkreader-bg--surface-grey-2) !important;
}`},{url:["meijer.com"],css:`[class*="bv-rnr_"] {
    background-color: var(--darkreader-neutral-background) !important;
}`},{url:["meituan.com"],invert:[".dpLogo",".header-title",".site-logo"]},{url:["memtest.org"],invert:[".logo-default"]},{url:["mendeley.com"],invert:['#pdfcontainerId > div[class^="PDFReaderWithAnnotations"]',".highlightLayer > *",'div[class^="AnnotationMenuStyle"]','svg[class^="IconMendeley__Icon"]','a[class^="TabCloseButton__CloseTabLink"]',"g#cross3",'svg[class^="ColourCircle"]'],css:`.highlightLayer * {
    background-color: var(--darkreader-selection-text) !important;
}`},{url:["mercury.postlight.com"],invert:[".SVGInline-svg path","#merc-logo",'[src^="/_/src/components/images/reader_kindle_image"]','[href="https://postlight.com/"] > svg > g > path','[src^="/_/src/components/images/reader_tout_image"]','[src^="/_/src/components/images/phone"]',".w-0-m.db-l.dn.cover.w-50"]},{url:["merriam-webster.com"],invert:["circle.outline.Oval"],css:`.logo-cnt path[fill="#004990"] {
    fill: \${#0085e0} !important;
}`},{url:["mersenneforum.org"],invert:['img[src*="mimetex"]']},{url:["messages.android.com"],invert:[".x4Tquc",".QrWqSe",".XCHXxd",".pXeIKc"]},{url:["messages.google.com"],invert:[".x4Tquc",".QrWqSe",".XCHXxd",".pXeIKc"],css:`.input-background {
    --input-bg-fade-color: #202124 !important;
}`},{url:["messenger.com"],invert:["._4rv6","a._4ce_",'div[aria-label="Change Position"]','div[role="slider"]'],css:`._8rsr {
    fill: #0098ff !important;
}
._576q mask path {
    fill: white !important;
}
._576q mask rect {
    fill: black !important;
}
._576q div {
    background-color: transparent !important;
}
.j7vl6m33,
.a8c37x1j,
.bp9cbjyn,
mask[id*="jsc_c"] > circle {
    fill: var(--always-white) !important;
}
.a8c37x1j > rect {
    fill: var(--darkreader-bg--fds-white) !important;
}
.__fb-light-mode {
    --darkreader-border--messenger-card-background: var(--darkreader-bg--messenger-card-background) !important;
    --filter-blue-link-icon: invert(73%) sepia(29%) saturate(200%) saturate(200%) saturate(200%) saturate(200%) saturate(200%) saturate(200%) saturate(103.25%) hue-rotate(189deg) brightness(101%) contrast(101%) !important;
    --filter-disabled-icon: invert(100%) opacity(30%) !important;
    --filter-negative: invert(25%) sepia(33%) saturate(200%) saturate(200%) saturate(200%) saturate(200%) saturate(200%) saturate(200%) saturate(110%) hue-rotate(345deg) brightness(132%) contrast(96%) !important;
    --filter-placeholder-icon: invert(59%) sepia(11%) saturate(200%) saturate(135%) hue-rotate(176deg) brightness(96%) contrast(94%) !important;
    --filter-positive: invert(37%) sepia(61%) saturate(200%) saturate(200%) saturate(200%) saturate(200%) saturate(115%) hue-rotate(91deg) brightness(97%) contrast(105%) !important;
    --filter-primary-icon: invert(100%) !important;
    --filter-secondary-icon: invert(62%) sepia(98%) saturate(12%) hue-rotate(175deg) brightness(90%) contrast(96%) !important;
    --filter-warning-icon: invert(77%) sepia(29%) saturate(200%) saturate(200%) saturate(200%) saturate(200%) saturate(200%) saturate(128%) hue-rotate(359deg) brightness(102%) contrast(107%) !important;
}
.qbubdy2e {
    fill: none !important;
}
.tdjehn4e,
.oo1teu6h {
    background-color: rgba(255, 255, 255, 0.1) !important;
}
.tdjehn4e:hover,
.ovq5dppa:hover {
    background-color: rgba(255, 255, 255, 0.2) !important;
}
i.eb18blue {
    filter: none;
}
div[style][title] > div[style^="transform"] {
    z-index: 0 !important;
}
.x1g6sh6t {
    fill: none !important;
}
.x1g6sh6t {
    fill: none !important;
}
.x1k4qllp {
    outline: 10px solid var(--darkreader-bg--mwp-message-row-background) !important;
}`,ignoreInlineStyle:['[role="button"] svg','[role="button"] svg line','div svg[viewBox="0 0 36 36"] mask path',"mask > rect","g > rect","mask > circle",".html-div svg path"]},{url:["metacareers.com"],invert:['a[href="/"] img.img','#careersContentContainer div[style^="background-image: "]','#careersContentContainer div[style^="background-image: "] > *']},{url:["metal.equinix.com"],invert:[".tw-logo"]},{url:["meteo.imgw.pl"],invert:[".meteo-chart > div > canvas","#map-container svg"],css:`.menu-close img {
    filter: none !important;
}`,ignoreImageAnalysis:[".gory-imgw a"]},{url:["metrics.torproject.org"],invert:['img[src^="/images/flags/"]',"g > text","g > line"],css:`.dot {
    fill: var(--darkreader-neutral-background) !important;
}
div > img[src] {
    filter: invert(90%) !important;
}`},{url:["metro.co.uk"],invert:["#masthead__logo-default"]},{url:["metrobyt-mobile.com"],invert:["#digital-header-logo-img"],css:`#Desktop-img {
    z-index: 0 !important;
}`},{url:["mewe.com"],css:`body > .ember-view {
    background-color: \${#ebf0f3} !important;
}
body > .ember-view.dialog_wrapper {
    background-color: transparent !important;
}`},{url:["microsoft.com"],invert:[".m-updated-quicklinks .c-carousel.f-single-slide ul > li > a.c-hyperlink > img.large-icon",".carousel-inner .card-background",".key-message .card-background",".animated-hero-media"],css:`#announce picture + div h3,
#announce picture + div p,
.edgeconsumer.features .m-hero h1,
.edgeconsumer.features .m-hero p {
    color: var(--darkreader-neutral-background) !important;
}
div[aria-label="Download Microsoft Edge dialog"] {
    background-color: #389fef !important;
}`},{url:["microsoftedge.microsoft.com"],invert:['rect[x="7.5"]','text[text-anchor="middle"]']},{url:["midkar.com"],css:`body {
    background-image: unset !important;
}`},{url:["mikanani.me"],invert:[".an-res-row-bg"]},{url:["mikrotik.com"],invert:['img[alt="MikroTik Logo"]','img[src*="down.png"]','img[src*="file.png"]','img[src*="md5.png"]'],css:`img[src*="ros.jpg"] {
    filter: invert(1) !important;
    mix-blend-mode: exclusion !important;
}
img[src*="demo.png"] {
    filter: invert(1) !important;
    mix-blend-mode: exclusion !important;
}
img[src*="install.png"] {
    filter: invert(1) !important;
    mix-blend-mode: exclusion !important;
}
img[src*="cloud.png"] {
    filter: invert(1) !important;
    mix-blend-mode: exclusion !important;
}
img[src*="read.png"] {
    filter: invert(1) !important;
    mix-blend-mode: exclusion !important;
}
img[src*="buy.png"] {
    filter: invert(1) !important;
    mix-blend-mode: exclusion !important;
}
img[alt="MikroTik App"] {
    filter: invert(1) hue-rotate(180deg) !important;
    mix-blend-mode: difference !important;
}
img[alt="MikroTik Home App"] {
    filter: invert(1) hue-rotate(180deg) !important;
    mix-blend-mode: difference !important;
}
img[alt="Beacon Manager app"] {
    filter: invert(1) hue-rotate(180deg) !important;
    mix-blend-mode: difference !important;
}
img[src*="map_lv.jpg"] {
    filter: invert(1) hue-rotate(180deg) saturate(5) !important;
    mix-blend-mode: difference !important;
}`},{url:["miktex.org"],invert:[".icon-bar"],css:`body,
.site-footer {
    background-image: none !important;
}`},{url:["mikufan.com"],ignoreImageAnalysis:["#header-container"]},{url:["mindfactory.de"],invert:[".col-icons",'img[src*="icon_cart.svg"], img[src*="icon_gamepad.png"], img[src*="icon_schnaepp.png"], img[src*="schnaeppshop_logo_icon.webp"]','#dienst_montage, #dienst_montage .icons, img[src*="mindfactory_komplettsystemmontage.png"]','#ic_aboutus > div:nth-child(2), img[src*="ueberuns/middle.jpg"]',".ms_group_icon > a > img",".text-center > a > img"],css:`.ms_product {
    background-blend-mode: difference !important;
}
.itemhighlight > .ms_product {
    background-color: var(--darkreader-selection-text) !important;
}
.p {
    background-blend-mode: normal !important;
}
#dienst_montage > div > p {
    color: var(--darkreader-neutral-background) !important;
}
body,
.ground-layer {
    background-blend-mode: soft-light !important;
}`},{url:["minecraftskins.com"],css:`.farbtastic .overlay {
    background-image: url("https://www.minecraftskins.com/bundles/app/images/mask.png") !important;
}
.header__menu-outer > ul > li > a {
    color: black !important;
}`,ignoreInlineStyle:[".color","#color"],ignoreImageAnalysis:[".farbtastic .overlay"]},{url:["minesweeper.online"],ignoreImageAnalysis:["*"]},{url:["minsu.dianping.com"],invert:[".zg-map"]},{url:["mint.intuit.com"],invert:[".recharts-cartesian-axis-ticks"],css:`[class*="ExpandableCard-wrapper"] {
    background: none !important;
}
[class*=' TextField-TFInput'] {
    background: var(--darkreader-neutral-background) !important;
}
[class*='BudgetCardstyle__ProgressLine'],
[class*='OverviewCardUIstyle__ProgressLine'] {
    border-right-color: \${black} !important;
    opacity: 1 !important;
}`,ignoreInlineStyle:[".recharts-sector"]},{url:["miro.com"],invert:["#pixiCanvasContainer > :nth-child(1)",".b-icon"]},{url:["mit.edu"],invert:[".mit-logo"]},{url:["mitx.*"],css:`img {
    background-color: white !important;
}`},{url:["mixcloud.com"],invert:[".cQABPj"],ignoreInlineStyle:['path[fill="none"]','path[fill-rule="evenodd"]']},{url:["mjtnet.com"],invert:[".navbar-brand"]},{url:["mlb.com"],css:`#percentile-rank text,
.legend {
    fill: var(--darkreader-neutral-text) !important;
}`},{url:["mnt.ee"],css:`#zone-content-wrapper {
    color: var(--darkreader-neutral-text) !important;
}
#zone-content {
    background-color: var(--darkreader-neutral-background) !important;
}`},{url:["mobiel.nl"],invert:[".credit-warning__image",".dt-carousel-home__dots",".spec__network",'img[alt="Tele2"]','img[alt="hollandsnieuwe"]',".header-main__icon",".spec__network-ready"],ignoreInlineStyle:[".version-without-subscription-row__color",".gEJLdA"]},{url:["mobile.bg"],css:`table .tablereset {
    background-image: none !important;
}`},{url:["moegirl.org.cn"],css:`span.heimu a.external,
span.heimu a.external:visited,
span.heimu a.extiw,
span.heimu a.extiw:visited {
    color: #dadada !important;
}
.heimu,
.heimu a,
a .heimu,
.heimu a.new {
    background-color: #dadada !important;
    color: #dadada !important;
}
body:not(.heimu_toggle_on) .heimu:hover,
body:not(.heimu_toggle_on) .heimu:active,
body:not(.heimu_toggle_on) .heimu.off {
    color: black !important;
}
body:not(.heimu_toggle_on) .heimu:hover a,
body:not(.heimu_toggle_on) a:hover .heimu,
body:not(.heimu_toggle_on) .heimu.off a,
body:not(.heimu_toggle_on) a:hover .heimu.off {
    color: darkblue !important;
}
body:not(.heimu_toggle_on) .heimu.off .new,
body:not(.heimu_toggle_on) .heimu.off .new:hover,
body:not(.heimu_toggle_on) .new:hover .heimu.off,
body:not(.heimu_toggle_on) .heimu.off .new,
body:not(.heimu_toggle_on) .heimu.off .new:hover,
body:not(.heimu_toggle_on) .new:hover .heimu.off {
    color: #BA0000 !important;
}`},{url:["mojosoft.com.pl"],invert:['img[src*="logo16"]','img[src*="img/iko"]','img[src*="img/ideabank"]','img[src*="img/logo"]','img[src*="img_logo"]',"#searchbox"],css:`#viewsh,
#view,
#szukajka,
header,
header.smaller #szukajka .inputsearch,
#search_query,
#mainMenusmall {
    background-color: var(--darkreader-neutral-background) !important;
    background-image: none !important;
}
#searchbox,
select {
    color: var(--darkreader-neutral-background) !important;
}`,ignoreInlineStyle:["header.smaller"]},{url:["moluch.ru"],invert:[".logo"],css:`body {
    background-image: var(--darkreader-neutral-background) !important;
}`},{url:["monde-diplomatique.fr"],invert:[".logodiplo"]},{url:["money.pl"],css:`.dynks {
    color: \${#666666} !important;
}
a[href$="twitter.com/money_pl"] path:first-of-type {
    --darkreader-inline-fill: transparent !important;
}`},{url:["mongodb.com"],invert:['img[alt="MongoDB logo"]']},{url:["monitor.firefox.com"],invert:['svg[class="Mozilla-logo"] > path[fill="#ffffff"]',".fx-bento-app-link.fx-bento-link.fx-mobile > span::before",'img[src="/img/svg/laptop.svg"]','img[src="/img/svg/globe.svg"]','img[src="/img/svg/vpn.svg"]','button[class="vpn-banner-close"]']},{url:["monokai.pro"],invert:[".c-icon-process"]},{url:["monstercat.com"],css:`.volume-slider-outer {
    background-color: \${#4d4d4d} !important;
    z-index: -99999999999;
}
.volume-slider-inner {
    background-color: \${#1873cc} !important;
}
.volume-slider-handle {
    background-color: \${#1d1d1d} !important;
}
.title,
h3,
.line-bottom,
.line-top,
a,
.one-line-ellipsis {
    color: \${#4b4e50} !important;
}`},{url:["monta.ir"],invert:[".floatLeft",".formula-pack > img",".m--content-panel > div > div > canvas",".highcharts-background",".customized-field",".source",".choice > .layoutImageInline",".choice > img",".choice > div > img",".navbar-item > img",".empty_state_student","progress","td > img",".notice > div > img","td > div > img",".extrapractice > div > img",".extrapractice > div > div > img",".empty_teacher",".GO5O4PB-gc-b",".GO5O4PB-gc-i",".GO5O4PB-gc-e",".GO5O4PB-gc-i > div",".GO5O4PB-gc-Eb > div > a","img.is-rounded","img.is-128x128"],css:`.GO5O4PB-gc-n {
    background-image: none !important;
}`},{url:["moodle.herzen.spb.ru"],invert:[".img-responsive"]},{url:["moodle.latech.edu"],css:`#snap-home.logo,
.snap-logo-sitename {
    background-image: url(//moodle.latech.edu/pluginfile.php/1/theme_snap/logo/1680805090/ltu-state-t-logo.png) !important;
}`,ignoreImageAnalysis:["#snap-home.logo",".snap-logo-sitename"]},{url:["moovitapp.com"],invert:[".map",".logo"]},{url:["morele.net"],invert:[".h-logo.col",'.h-control-btn > [src="/static/img/shop/icon-bezpieczna-dostawa.svg"]',".swiper-slide-visible.mx-auto.swiper-slide > .d-flex.img-container","div.cn-different-frontend.cn-menu-item-hover.cn-shop > .cn-main-name.cn-name > .cn-name-value > span:nth-of-type(1)"]},{url:["morningstar.com"],invert:[".mbc-legend-top",".mbc-legend-bottom",".mbc-legend-item-date",".mdc-medal",".mdc-icon",".legend-group",".legend-box-text",".mbc-chart-group",".square-text",".min-max",".axis .tick",".axis .name",".mbc-axis .tick",".mbc-chart-legend-inner",".mbc-layers .tick"]},{url:["mos.ru"],invert:['div[class^="src-components-Map-___styles-module__map_container"]','div[class^="src-components-Map-___styles-module__control"]::before','div[class^="src-components-Map-___styles-module__control"]::after',"#map_div_container","#points_layer > text"]},{url:["motherjones.com"],invert:[".logo",".footer-logo",".menu-button"]},{url:["moto.pl"],invert:['img[src="https://bi.im-g.pl/im/0/24525/m24525630.png"]'],css:`.main_wrapper,
.top_section_bg,
.bottom_section_bg {
    background-color: \${#e5e5e5} !important;
}`},{url:["motorsport.com"],css:`.ms-schedule-table__cell {
    background-color: var(--darkreader-neutral-dark) !important;
}`},{url:["mozilla.net"],invert:[".css-editor-container header h4::before"]},{url:["mp.weixin.qq.com"],invert:[".audio_card_progress",".audio_card_progress_handle"]},{url:["msi.com"],invert:["a.logo",".site-logo",".site-header-menu-toggle--button span",".flickity-button-icon",".homeLink__logo"],css:`#MSI_Support .top-headBg,
#MSI_Support .top-head,
#MSI_Support .main-contact-support {
    background-image: none !important;
}
.related__link > .related__title,
.service__link > .service__head {
    z-index: 1 !important;
}`},{url:["msmgtoolkit.in"],css:`.cid-r89gzwx5mR .mbr-section-title {
    color: \${white};
}
.cid-r89gzwx5mR .mbr-section-subtitle {
    color: \${white};
}`},{url:["msn.com"],invert:[".logowrapper"]},{url:["msnbc.com"],css:`.styles_progress__GFuLT::-moz-progress-bar {
    background-color: var(--darkreader-neutral-text) !important;
}
.styles_progress__GFuLT {
    background-color: #666 !important;
}
.styles_volume__peSyL::-moz-range-thumb {
    background: var(--darkreader-neutral-text) !important;
}
.styles_volume__peSyL::-moz-range-track {
    background: #666 !important;
}`},{url:["msys2.org"],css:`body {
    background-image: none !important;
}`},{url:["mt.lv"],css:`.graph > text {
    fill: var(--darkreader-neutral-text) !important;
}`},{url:["mturk.com"],invert:['[src="/assets/images/how-it-works.png"]','[src="/assets/images/requester_signup.svg"]','[src="/assets/images/worker_signup.svg"]',".lb-mid-8.lb-tiny-24.lb-col > .lb-img > div"]},{url:["mubi.com"],invert:[".css-jd0r3a.e1kjxayp2",".css-k7pew6.ef3qs2t4 img",".css-ywuexf",".css-19064tz",".css-1w8phor",".css-n1xrf1",".css-1dev2nn.e18wowia1 .star",".css-ker29f.ed6irnx8",'img[src*="logo-small_black.png"]','img[src*="industry_event_logo_placeholder-small_black.png"]',".css-zj1tof"],css:`.css-ztue73 {
    filter: brightness(1) !important;
}
.css-1gez225.e1t0dj1j2 svg *,
.css-1gez225.e13p4uxl2 svg * {
    --darkreader-inline-fill: #FFFFFF !important;
}
.css-1fdxz4i.e1f1mjpr0 svg *,
.css-15x1o6o.e19610x52 svg *,
.css-j9vvv8.e1gnvuk52  svg * {
    --darkreader-inline-fill: \${#000000} !important;
}`,ignoreInlineStyle:[".star-ratings svg *"]},{url:["mullvad.net"],css:`#bg {
    fill: #192E45;
}`},{url:["multitran.com"],invert:['img[src="/gif/logoe.gif"]'],css:`body {
    background-image: none !important;
}`},{url:["mumble.info"],invert:[".os",".suggested-download-button-caption"]},{url:["muratordom.pl"],invert:[".logo"]},{url:["murena.com"],invert:["picture.wordmark--link"]},{url:["musclewiki.com"],invert:['img[src="/static/images/logo.png"]']},{url:["music.163.com"],invert:[".btns",".cor","#g_backtop","#g_player",".hot",".logo",".m-playbar",".m-table thead",".u-btn2",".u-lv",".u-btn",".m-tabs",".n-srch .pgsrch",".n-srch .pgsrch .btn",".n-srch .pgsrch .srch"],css:`.n-myinfo {
    background-image: none !important;
}`},{url:["music.amazon.*","music.amazon.*.*"],css:`.listViewStatusButtonInLibrary .add,
.listViewStatusButtonInLibrary .added {
    background-color: \${black} !important;
}
.slider .scrubber,
.slider .scrubberHandle,
.slider .sliderTrackRemainder {
    background-color: \${black} !important;
}`},{url:["music.apple.com"],invert:["body:not(.dark-mode) .web-navigation__logo-link.button-reset.ember-view","body:not(.dark-mode) .native-upsell__logo","body:not(.dark-mode) .native-upsell__action","body:not(.dark-mode) .dt-search-box__icon",".web-chrome-playback-controls",".dt-media-contextual-menu",".web-chrome-playback-lcd__contextual-badge--non-marquee.web-chrome-playback-lcd__contextual-badge",".love-or-popular__popular.love-or-popular__glyph",".web-chrome-playback-lcd__progress-bar-container",".web-chrome-playback-lcd__volume"]},{url:["musicmakers.ru"],invert:["#menubtn > *"]},{url:["musictheory.net"],invert:['[data-musictheory-id="lesson"] canvas']},{url:["my.account.sony.com"],invert:['img[class*="img-wallpaper"]']},{url:["my.bible.com"],css:`.nav-title {
    color: var(--darkreader-neutral-text) !important;
}`},{url:["my.canadalife.com"],css:`.nds-card {
    background: inherit !important;
}`},{url:["my.cofc.edu"],css:`.container {
    background-color: var(--darkreader-neutral-background) !important;
}`},{url:["my.contabo.com"],css:`#mainmenu > div,
#submenu > div,
.button,
.ui-button {
    background-image: none !important;
}
.ui-button {
    color: var(--darkreader-neutral-text) !important;
}`},{url:["my.frantech.ca"],invert:[".logo"]},{url:["my.home-assistant.io"],css:`.ha-card {
    background: \${white} !important;
}`},{url:["my.nextdns.io"],invert:[".mt-2.mb-4.text-center",'img[src*="/static/media/logo-large"]','img[src*="/static/media/samsung"]','img[src*="/static/media/sonos"]',".d-md-inline > img",".settings-button",".stream-button",".tooltipParent > img",".list-group-item > div > img",".d-flex > .text-break > img",".d-flex > .flex-grow-1 > div > img",".d-flex.align-items-center.flex-wrap a img"],css:`.text-right[style*="opacity: 0.3"] {
    opacity: 0.6 !important;
}
g.rsm-geographies {
    filter: invert(1) hue-rotate(180deg) brightness(130%) !important;
}
img[src*="/misc/flags/"] {
    filter: revert !important;
}`},{url:["my.nintendo.com"],css:`.Layout-app,
.Modal_contentInner,
.signUpButton {
    background-image: none !important;
}`},{url:["my.remarkable.com"],invert:[".menu-button",'img[alt="desktop icon"]','img[alt="mobile icon"]']},{url:["my.vega.ua"],invert:["canvas#traffic_graph_canvas"]},{url:["my.volia.com"],css:`body.signInPage {
    background-image: none !important;
}
a.mainLogo {
    background-color: \${grey} !important;
}`},{url:["myabandonware.com"],invert:[".sports",".duke2",".heretic",".hexen",".strategy",".simulation",".blood",".driving",".keen",".playing-rpg",".jazz-jack",".war2",".pitch"],css:`.top {
    background-image: var(--darkreader-neutral-background) !important;
}
body {
    background-color: var(--darkreader-neutral-background) !important;
    background-image: none !important;
}`},{url:["myacademy.oracle.com"],invert:["#logo",".login-logo",".logo--desktop",".nav-control-mobile span",".splide--container button",".dynamic-widget__result .list-view .completion-bar",".course-details__cta a.play::before",".thumb__background",".universal-side-panel__switcher button svg",".universal img",".slide-displays-root > div:nth-child(3) > div > :nth-child(2) > div > :nth-child(3)",".slide-displays-root div:nth-child(3) > div > :first-child > div > :last-child span",".slide-displays-root svg g path:nth-child(2)",".quiz-slide-visualizer",".slide-object-view-icon-placeholder",".quiz-session-view .choice-view__active-element-container .inline-border"],css:`header,
#header {
    background: \${#ccc} !important;
}
.quiz-slide-visualizer span {
    color: #4e3629 !important;
}
.quiz-slide-visualizer .slide-layout > div > :nth-child(3) span,
.quiz-slide-visualizer .slide-layout > div > :nth-child(8) span {
    color: #fed6af !important;
}
.message-box__icon,
.quiz-message-box__icon {
    background-color: white !important;
    border: 2px solid white !important;
    border-radius: 50%;
}
.slide-displays-root div:has(div) > div :first-child > :first-child > :last-child > svg {
    opacity: 0 !important;
}
#AssessmentForm :not(label) span {
    color: \${black} !important;
}
#AssessmentForm label span {
    color: \${#222} !important;
}`},{url:["myaccount.google.com"],invert:["c-wiz ul img"]},{url:["myaccount.suse.com"],invert:[".auth-org-logo",".logo"]},{url:["myalmacoffee.com"],css:`:root {
    --gradient-base-background-1: var(--darkreader-neutral-background) !important;
}`},{url:["myanimelist.net"],invert:[".link-provider img",'.theme-songs td[width="8%"]:first-child'],css:`body:not(.ownlist) {
    background-color: var(--darkreader-neutral-background) !important;
}
body {
    background-color: var(--dakreader-neutral-background) !important;
    background-image: none !important;
}`},{url:["mybrandnewlogo.com"],ignoreInlineStyle:[".b-logo-wrap *"]},{url:["myfood4less.com"],invert:[".elementor-widget-theme-site-logo"]},{url:["mymenu.be"],invert:[".close-icon"],css:`.uix-steps .item.active .number {
    color: \${darkred} !important;
}`,ignoreInlineStyle:[".uix-tracking .information .step .number"]},{url:["myorca.*"],invert:["path.b"],css:`.m-banner h1,
.m-banner p {
    color: black !important;
}`},{url:["myunidays.com"],invert:[".title",".menu-btn-icon"]},{url:["mywikis.com"],invert:[".heading-primary",".heading-subtext",".hero"]},{url:["n.maps.yandex.ru","mapeditor.yandex.com"],invert:['span[class*="nk-icon_id_commit-"] > svg > g > path','span[class*="nk-icon_id_business-feedback-task"] > svg > g > path']},{url:["na.myconnectwise.net"],css:`.cwsvg {
    fill: white;
}`},{url:["nagatabi-p.jimdofree.com"],invert:[".cc-imagewrapper > img"]},{url:["nalog.ru"],invert:[".header__logo"]},{url:["namecheap.com"],invert:[".whoisguard-img"]},{url:["naps2.com"],css:`.os-icon[title="Linux"] {
    background-color: white !important;
}`},{url:["narimiran.github.io/nim-basics"],css:`body,
#toc.toc2 {
    background-color: var(--darkreader-neutral-background) !important;
}`},{url:["narrativ.com"],invert:['img[alt="Narrativ Logo"]']},{url:["nasa.gov"],ignoreImageAnalysis:[".vjs-has-started .vjs-control-bar .vjs-control.vjs-logo-image"]},{url:["natemat.pl","aszdziennik.pl","innpoland.pl","dadhero.pl","mamadu.pl"],invert:['img[src*="/static/media/"]','img[alt="close icon"]','a[href="#comments"]',".st1"],css:`img[class*="Footer--Logo"] {
    background-color: #fff !important;
}`},{url:["nation.cymru"],css:`body {
    background-color: var(--darkreader-neutral-background) !important;
}`},{url:["nationalgeographic.com"],invert:[".NavBar__Logo__Container"]},{url:["nature.com"],invert:[".c-header__logo",'[href="#search-menu"] > svg',".c-header__link--chevron > svg",'img[alt="Nature Careers"]']},{url:["naturemade.com"],invert:["div.header-banner > svg","ul.main-nav-child-links > li > a > img"],css:`:root {
    --gradient-base-background-1: unset !important;
}
form[action="/search"] > div > label {
    display: none;
}`},{url:["nauka.rocks"],invert:[".navigation-branding"]},{url:["navalnews.com"],invert:[".logo"]},{url:["nba.com"],invert:[".nlProgressBar"]},{url:["nbc12.com"],invert:["div.logo.logo-slim","div.logo.logo-large.logo-footer"],ignoreImageAnalysis:[".logo"]},{url:["nbcphiladelphia.com"],invert:[".site-footer__social-list-item .icon"]},{url:["nbi.ku.dk"],css:`.tile-link {
    color: var(--darkreader-neutral-color) !important;
}`},{url:["ncbi.nlm.nih.gov"],invert:[".gene-genomic-context p.withnote img"]},{url:["nec.com"],invert:[".logo"]},{url:["needymeds.org"],css:`#header {
    background: unset !important;
}`},{url:["nejm.org"],invert:['a[href="/"] svg']},{url:["neonet.pl"],invert:['div[class^="newsSingleBar"] > div[class^="newsSingleBarHeaderWidescreen-category"]'],css:`div[class^="newsSingleBar"] > div[class^="newsSingleBarHeaderWidescreen-category"] {
    color: \${white} !important;
}`},{url:["neoseeker.com"],css:`.hidden_text {
    background-color: var(--darkreader-neutral-text) !important;
    color: var(--darkreader-neutral-text) !important;
}
.hidden_text.shown {
    background-color: transparent !important;
    color: var(--darkreader-neutral-text) !important;
}`},{url:["neowin.net"],invert:[".comment-link",".news-view-switcher span",".author a.twitter-link",".meta-comments",".comment-link::before",".select-wrap::after",".report-article-button::before","#comment-help::before",".comment-button-report",".comment-interact a"],css:`.select option {
    background-color: #1c1e1f !important;
    color: white !important;
}`},{url:["nerdschalk.com"],invert:[".logo-default"]},{url:["nerdwallet.com"],ignoreInlineStyle:["#global-nav *"]},{url:["nero.com"],invert:[".navbar-brand"]},{url:["netbank.sparthy.dk"],css:`select option {
    background-color: var(--darkreader-neutral-background) !important;
}`},{url:["nethackwiki.com"],invert:[".tex"],ignoreImageAnalysis:[".mw-wiki-logo"]},{url:["netlify.com"],invert:[".masthead-home-logo",".logo-wall",".input"],css:`.root {
    data-darkreader-inline-fill: var(--scrim-icon-color) !important;
}
.submenu,
.table-wrapper,
.table-header,
td {
    background-color: var(--darkreader-neutral-background) !important;
    color: var(--darkreader-neutral-text) !important;
}
.menu,
.ntl-announcement-bar {
    color: var(--darkreader-neutral-text) !important;
}`},{url:["netzpolitik.org"],invert:['img[src*="/wp-content/themes/liebefeld/images/netzpolitik_logo.svg"]','img[src*="/wp-content/themes/liebefeld/images/palasthotel.svg"]',"a.menu__canvas--toggle"]},{url:["neuralnetworksanddeeplearning.com"],invert:['img[src$=".png"]','img[src^="images/KSH"]','img[src^="images/bump_function"]','img[src^="images/high_weight_function"]',"canvas","svg","video"]},{url:["new.mta.info"],css:`.services-container > .ss-header > #service-status-widget > .active > a:link {
    background-color: #f2a900 !important;
    color: #002d72 !important;
}
.services-container > .ss-header > #service-status-widget > .active > a:link::before {
    color: #002d72 !important;
}
.ss-header {
    border-bottom: 3px solid #f2a900 !important;
}`,ignoreInlineStyle:['a[title="MTA"] > svg > path'],ignoreImageAnalysis:[".block-service-status-block .line-1",".block-service-status-block .line-2",".block-service-status-block .line-3",".block-service-status-block .line-7",".block-service-status-block .line-A",".block-service-status-block .line-C",".block-service-status-block .line-E",".block-service-status-block .line-SI"]},{url:["newegg.com"],css:`.show-img-bg .goods-img:not(.bg-lightgray),
.show-img-bg .goods-img > img {
    mix-blend-mode: normal !important;
}`},{url:["news.mit.edu"],invert:[".logo > .mit-news"]},{url:["news.mynavi.jp"],invert:[".itsearch-head .logo",".site-header__bnr",".site-header__logo"]},{url:["news.yahoo.co.jp"],ignoreImageAnalysis:[".QrZuR"]},{url:["news.yahoo.com"],invert:["#uh-logo",".vp-handle"]},{url:["news.ycombinator.com"],invert:[".votearrow"],css:`#hnmain {
    background-color: var(--darkreader-neutral-background) !important;
}`},{url:["newyorker.com"],invert:['[data-testid="Logo"]','[class*="Logo__logo"]']},{url:["nexojornal.com.br"],invert:[".g-aiImg"]},{url:["nextdns.io"],css:`.index .key-features .feature.blocklists {
    background-image: none !important;
}`,ignoreInlineStyle:["path.rsm-geography"],ignoreImageAnalysis:[".index .hero .content .logo"]},{url:["nextjs.org"],ignoreInlineStyle:[".banner *"]},{url:["nextron.no"],css:`.configurator .summary__titles .resource-row {
    border-color: var(--darkreader-neutral-text) !important;
}
.configurator .summary__titles .resource-row > .resource-shape {
    border-color: var(--darkreader-neutral-text) !important;
}
.configurator .summary__titles .resource-row > .resource-filled {
    background-color: var(--darkreader-neutral-text) !important;
    border-color: var(--darkreader-neutral-text) !important;
}`},{url:["ngrok.com"],invert:[".customer-logos"],css:`.browser path[fill="#BBB"],
.browser g[fill="#BBB"] {
    fill: #BBB !important;
}
.terminal tspan[fill="#FFF"] {
    fill: #FFF !important;
}
.terminal tspan[fill="#BBB"] {
    fill: #BBB !important;
}`},{url:["nicehash.com"],invert:[".chart",'img[src*="hashpower@2x]']},{url:["nicovideo.jp"],invert:[".NicoruIcon circle"],css:`@media (prefers-color-scheme: dark) {
    #IMALinearView iframe {
        opacity: 0.1 !important;
    }
}`},{url:["niestatystyczny.pl"],invert:["div#logo > h1 > a > img"]},{url:["nirsoft.net"],css:`.menub1 a:link,
.menub1 a:visited {
    color: #0040ff;
}
.menub1 a:hover {
    color: #ffffd0;
}`},{url:["niser.ac.in"],css:`body,
#main-content,
#page {
    background-image: none !important;
}`},{url:["nixos.org"],invert:['header a[href="/"]::after'],css:`.demo-preview > .thumbnail svg .background {
    fill: var(--darkreader-neutral-background) !important;
}
.packages-searchbox::before,
.packages-searchbox::after {
    background-image: none !important;
}`},{url:["nlnet.nl"],invert:[".header_logo"]},{url:["nlopt.readthedocs.io"],css:`.wy-nav-content-wrap {
    background-color: var(--darkreader-neutral-background) !important;
}`},{url:["nnmclub.to","nnm-club.me"],invert:['img[src$="images/icon_arrow.gif"]','img[src$="images/freeleech.gif"]'],css:`div.ui-datepicker {
    background: none !important;
}`,ignoreImageAnalysis:["*"]},{url:["nodejs.org"],css:`[data-theme="dark"] h1.special {
    background-image: linear-gradient(180deg, #fff, hsla(0, 0%, 100%, .8)) !important;
}
[data-theme="light"] h1.special {
    background-image: linear-gradient(180deg, \${#2c3437}, \${rgba(44, 52, 55, .8)}) !important;
}`},{url:["nokia.com"],css:`.pds-background-cover > .pds-background-image-set {
    background-color: var(--darkreader-neutral-background) !important;
}
.pds-background-cover video {
    filter: brightness(50%) sepia(40%) !important;
}`},{url:["nomadgoods.com"],invert:['header a[href="/"] > svg']},{url:["nonograms.org"],css:`.nonogram_table {
    background-color: #404040 !important;
}`},{url:["norton.com"],invert:[".c-topnav__wrap a"]},{url:["nos.nl"],invert:[".npo-button"],ignoreImageAnalysis:[".npo-button"]},{url:["notebooks.githubusercontent.com/view/ipynb"],css:`.jp-InputArea-editor,
.jp-CodeConsole .CodeMirror.cm-s-jupyter,
.jp-Notebook .CodeMirror.cm-s-jupyter,
.highlight {
    background-color: var(--darkreader-neutral-background) !important;
}`},{url:["notion.so"],invert:['img[alt="People using Notion"]',".global-margin-s .logos",".persona-grid > .persona-grid-item > .persona-grid-image",".desktop-illustration",".illustration .next-image",".api-section-image .next-image",".visual .next-image",".logo svg > :first-child"],css:`body {
    background-color: var(--darkreader-neutral-background) !important;
}
* {
    caret-color: \${gray} !important;
}
.notion-divider-block div div {
    border-bottom: 1px solid \${rgba(55, 53, 47, 0.4)} !important;
}`},{url:["novartis.com"],invert:["#logo"]},{url:["novelgames.com"],css:`a#commonLogo {
    background-image: url("https://staticz.novelgames.com/style/default/common_e.5.png"), linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255)), url("https://staticz.novelgames.com/style/default/common.8.png") !important;
}`},{url:["novinky.cz","garaz.cz","seznamzpravy.cz"],css:`.ribbon,
.szn-input-with-suggest-list {
    background-color: var(--darkreader-neutral-background) !important;
}
.szn-input-with-suggest-list {
    border-color: \${gray} !important;
}`},{url:["nowafarmacja.pl"],invert:[".icon-chevron-down",".payment-banners",".hheader::after"]},{url:["nowemedium.pl"],invert:[".logo-tagline-group",".menu_toggle"]},{url:["nperf.com"],invert:[".SpeedTest > .resultPanel"],css:`.SpeedTest > .resultPanel {
    background-color: transparent !important;
}`},{url:["npmjs.com"],invert:['header a[href="/"] svg',"#orgs_panel img.h2","#enterprise_detail_panel img.h2",'#customers_panel img[src*="adobe.full.png"]','#customers_panel img[src*="bbc.full.png"]','#customers_panel img[src*="conde-nast.full.png"]','#customers_panel img[src*="netflix.full.png"]','#customers_panel img[src*="visa.full.png"]',"._5532dff2","._93bbf0b4"],css:`a title + g[data-darkreader-inline-fill] {
    fill: var(--darkreader-neutral-text) !important;
}`},{url:["nrc.nl"],invert:[".header__logo",".selections-bar__item__image",".header__button svg",".block__more-link__arrow path",".metabox__icon",".article__byline__icon",".footer__logo",".socialbuttons"]},{url:["ns.nl"],css:`.section--nsYellow {
    background-color: var(--darkreader-neutral-background) !important;
}`},{url:["ntlite.com"],css:`.fr-wrapper *::selection {
    background-color: dodgerblue !important;
}`},{url:["nu.nl"],css:`.app-figure--caption-overlay {
    background: linear-gradient(0deg, var(--darkreader-neutral-background), #fff 40%) !important;
}
.main-nav__main {
    border-top: inherit !important;
}`},{url:["nvidia.com","nvidia.in"],invert:["svg.global-footer__logo","a.brandLink",'img[src*="Experience"]','a[href*="facebook"]','a[href*="twitter"]','a[href*="youtube"]','a[href*="flickr"]','img[src*="tao-toolkit-"]','img[src*="logo"]','img[alt*="Logo"]'],css:`div.nvidia a svg {
    fill: \${black} !important;
}
div.brand-container a svg {
    fill: \${black} !important;
}
.taboff {
    background-image: none !important;
}
.mid-gray {
    background-color: #999 !important;
    fill: #999 !important;
}
.dark .green40 {
    background-color: #3b5d00 !important;
    fill: #3b5d00 !important;
}
.green50 {
    background-color: #598b00 !important;
    fill: #598b00 !important;
}
.dark .green100 {
    background-color: #76b900 !important;
    fill: #76b900 !important;
}`},{url:["nvidia.pl"],invert:[".brand-container",'img[src*="Experience"]','a[href*="facebook"]','a[href*="twitter"]'],css:`body,
.taboff {
    background-image: none !important;
}`},{url:["nxos.org"],invert:["#logo",'a[href^="#sidewidgetarea"]']},{url:["nymag.com"],invert:[".article-feed-header svg",".article-nav-top-center","#latest-feed-title",".logo-svg","#site-feed-curbed-title > .feed-title-wrapper",".tab-trigger > svg",".tab-trigger > svg > circle",".tab-trigger > svg > g > circle",".title-logo","#vulture-trigger > svg > g > path:nth-child(1)","#wwwthecut-trigger > svg > .active > path"],css:`.collection-articles-lede_first-featured .lede-item[data-track-index="0"] .lede-image-wrap {
    z-index: 0 !important;
}
.collection-articles-lede_first-featured .lede-item[data-track-index="0"] .lede-text-wrap {
    position: absolute !important;
    z-index: 1 !important;
}`},{url:["nytimes.com"],invert:['#site_header_wrapper a[aria-label="Wirecutter"]',"div#live-country-map.live-country-map-embed","div#live-us-map.live-us-map-embed","g > text",".svelte-1v1dl99",".vmap-zoom-buttons","#xwd-board"],css:`.css-oylsik,
.css-nhjhh0 svg,
.css-18z7m18 svg,
.css-1q2j1fr svg,
a[data-testid] > svg {
    fill: \${black} !important;
}
.headline-link div {
    color: \${black} !important;
}
.headline-link div:hover {
    color: \${#555} !important;
}
.svelte-15nnlbj {
    font-weight: bold !important;
}
#xwd-board rect[class^="Cell-block--"] {
    fill: \${black} !important;
}
#xwd-board text[class^="Cell-hidden--"] {
    color: \${black} !important;
}
#xwd-board rect[class^="Cell-cell--"] {
    fill: \${darkgrey} !important;
}
#xwd-board rect[class^="Cell-highlighted--"] {
    fill: \${lightgrey} !important;
}
#xwd-board rect[class^="Cell-selected--"] {
    fill: \${white} !important;
}
#xwd-board rect[class^="Cell-related--"] {
    fill: \${goldenrod} !important;
}
#xwd-board rect[class^="xwd__cell--cell"] {
    fill: \${darkgrey} !important;
}
#xwd-board rect[class^="xwd__cell--highlighted"] {
    fill: \${lightgrey} !important;
}
#xwd-board rect[class^="xwd__cell--selected"] {
    fill: \${white} !important;
}
#xwd-board rect[class^="xwd__cell--related"] {
    fill: \${khaki} !important;
}
#xwd-board rect[class*="xwd__cell--penciled"] ~ text[text-anchor^="middle"] {
    fill: \${blue} !important;
}`},{url:["nzbget.*"],invert:[".icon-top",".icon-bottom",".icon-up",".icon-down"]},{url:["nzz.ch"],invert:[".logo"],css:`.logo {
    background-color: unset !important;
    color: \${white} !important;
}`},{url:["o2.co.uk"],invert:[".brandLogo"]},{url:["oalevelsolutions.com"],invert:["p > span > img"]},{url:["objectclub.jp"],invert:["#region-content > div.plain > table > tbody > tr > td > img:nth-child(2)"],css:`body {
    background-image: none !important;
}`},{url:["obserwatorgospodarczy.pl"],invert:[".logo-img"]},{url:["oclc.org"],ignoreInlineStyle:[".chart-key"]},{url:["odysee.com"],invert:[".header__navigation-logo",'[data-vjs-player] .vjs-control-bar > [title="Autoplay Next Off"]','[data-vjs-player] .vjs-control-bar > [title="Autoplay Next On"]::after'],css:`.content__viewer {
    border: none !important;
}`},{url:["oed.com"],invert:['img[alt="search"]'],css:`.wordy {
    color: var(--darkreader-neutral-text) !important;
}
#maincontainer {
    color: var(--darkreader-neutral-text) !important;
}`},{url:["oeis.org"],invert:[".mwe-math-fallback-image-inline",".mwe-math-fallback-image-display"]},{url:["oferteo.pl"],invert:['img[src*="oferteo-color"]',"ul.logo-box.text-center","span.icon-gray.quotation-mark"]},{url:["office.com","*.office.com"],invert:[".ms-ohp-svg-Icon.ms-ohp-Icon--privacyLogo"],ignoreImageAnalysis:[".ms-ohp-svg-Icon.ms-ohp-Icon--privacyLogo",".ms-ohp-svg-Icon.ms-ohp-Icon--calendarLogo::before",".ms-ohp-svg-Icon.ms-ohp-Icon--flowLogo::before"]},{url:["ogs.google.com"],css:`body > div > c-wiz > div > div > c-wiz > div > div > div > div > div {
    background: var(--darkreader-neutral-background) !important;
}`},{url:["oisd.nl"],invert:['img[alt="logo"]']},{url:["okonto.pl"],invert:[".imageWidget"]},{url:["okta.com"],invert:[".chiclet--container",".chiclet--article",".chiclet--footer",'img[class="logo"]']},{url:["old.reddit.com"],invert:[".volume-slider-bar",".volume-slider-thumb",".reddit-video-seek-bar-root",".infobar.listingsignupbar"],css:`.seek-bar-progress {
    background-color: \${#004daa} !important;
}
body::before {
    z-index: 0 !important;
}
.link .entry,
.link .usertext-body .md,
.side,
.commentarea,
.commentarea > .usertext.cloneable,
#sr-header-area,
#sr-more-link,
.tabmenu li.selected a,
input[type="text"],
textarea,
.comment,
.comment .flat-list li,
.title-button,
.linkinfo,
.titlebox form.toggle,
.side .md > blockquote:first-child,
body.loggedin .side .redditname::after,
.side .md > blockquote:first-child > h1 + p a,
.side .md h2:first-of-type ~ *,
.side .md > p:first-of-type ~ h2::before,
.side .sidecontentbox,
.flair::before,
.flair::after,
.linkflairlabel::before,
.linkflairlabel::after {
    background-color: var(--darkreader-neutral-background) !important;
    background-image: none !important;
}`},{url:["oleole.pl"],invert:["#logo::after",'div[id="brands-carousel"]','div[id="footer-logo-brands"]','img[src*="main_menu"]','img[src*="SG/icon"]']},{url:["olx.pl"],css:`.searchmain {
    background-color: var(--darkreader-inline-bgcolor) !important;
}
.wrapper,
.footer-bottom {
    background-color: var(--darkreader-neutral-background) !important;
}`,ignoreImageAnalysis:[".cat-icon.cat-cmt-icon-628",".cat-icon.cat-cmt-icon-87",".cat-icon.cat-cmt-icon-2433",'.maincategories .maincategories-list .li .item a[data-id="promo"] .category-1.cat-icon-promo','.maincategories .maincategories-list .li .item a[data-id="promo"] .category-6.cat-icon-promo','.maincategories .maincategories-list .li .item a[data-id="promo"] .category-8.cat-icon-promo','.maincategories .maincategories-list .li .item a[data-id="promo"] .category-7.cat-icon-promo','.maincategories .maincategories-list .li .item a[data-id="promo"] .category-2.cat-icon-promo','.maincategories .maincategories-list .li .item a[data-id="promo"] .category-5.cat-icon-promo','.maincategories .maincategories-list .li .item a[data-id="promo"] .category-4.cat-icon-promo','.maincategories .maincategories-list .li .item a[data-id="promo"] .category-3.cat-icon-promo']},{url:["omarapollo.com"],invert:[".header__heading-logo"],css:`.gradient {
    background: var(--darkreader-neutral-background) !important;
}`},{url:["omgubuntu.co.uk"],css:`.header {
    background: var(--header-background) !important;
}`},{url:["omni.se"],css:`.article,
.resource,
.component--storyLink,
.component--storyHeading,
.btn--secondary,
.starbox-star {
    background-color: var(--darkreader-neutral-background) !important;
}`},{url:["omnicalculator.com"],css:`.GenericText {
    color: var(--darkreader-neutral-text) !important;
}`},{url:["omnivox.ca"],invert:['td[style*="/cvir/UI"]','img[src^="/cvir/UI/Theme/Lea_Defaut/Images/Accueil_LEA"]','img[src="/cvir/UI/Theme/Lea_Defaut/Images/mesclasses_cg_subtop.jpg"]','img[src^="/cvir/UI/Theme/Lea_Defaut/Images/accueil_"]','img[src$="/bas_du_menu.jpg"]','img[src$="tile.jpg"]',".cgSelect",".mioLinks",".calendrier",".servLinks",".descSection"],css:`.cgSelect > table > tbody > tr > td:nth-child(1) > a > font {
    color: green !important;
}
.calendrier > table > tbody > tr,
.calendrier > table > tbody > tr > td > img,
.calendrier > table > tbody > tr > td > table > tbody > tr > td > img {
    filter: invert(100%) hue-rotate(180deg) contrast(100%) !important;
}
table[style*="/cvir/UI"],
.cgBg {
    background-image: none !important;
}`},{url:["one.uf.edu"],css:`body {
    background-color: var(--darkreader-neutral-background) !important;
}`},{url:["onedrive.live.com"],css:`.ms-CommandBar {
    background-color: var(--darkreader-neutral-background) !important;
}`},{url:["onelook.com"],invert:['img[alt="OneLook"]']},{url:["onepeterfive.com"],css:`.gb-has-dynamic-bg {
    background-image: var(--background-url) !important;
}`},{url:["onet.pl","plejada.pl","*.onet.pl"],invert:['[class*="WeatherDay_tempIcon"]',"._3ZySwSLi_pur0unnAQO2No",".forecast img",".icon-shareIcon svg",".locationName svg",".logo-cls-1",".logoImageRight",".serviceIcon",".sheet",".weatherBox .iconNow",'[class*="weatherIcon"]',".websiteLogo",'[class*="Logo_"]',"a.serviceLogo img",'img[alt="O!Konto"]','img[alt="Plejada.pl"]',"ul.contentList img.icon",'svg[class*="MenuIcon"]','svg[class*="LoginIcon"]','svg[class*="ProfileImage_imageSvg"]',".weatherExtrasWidget__category-image img",'[class*="SponsorImage"]',".windDirectionArrow",".geoIcon",".regionsContentList .iconHolder img",".hSunChart img",".hMoonChart img"],css:`.mainBoxBgHolder {
    background-blend-mode: color;
    background-color: rgba(0, 0, 0, 0.25);
}
.weatherMap .mapLayer .fil0,
#weatherChartsHolder .chartValue {
    fill: rgb(128, 128, 128) !important;
}
svg path[d^="M50.315,89"],
path[d^="M15.757"],
path[d^="M14.989"],
path[d^="M8.935"],
path[d^="m14.05"] {
    fill: \${white} !important;
}`},{url:["online.noordhoff.nl"],invert:["#EAGABA img"]},{url:["online.rbb.bg"],invert:[".has-context:hover",".active",".btn"]},{url:["onlinelibrary.wiley.com"],invert:["#mainLogo"]},{url:["onlinetrade.ru"],invert:[".drawCats__item__name"],css:`.drawCats__item__image {
    filter: brightness(50%) sepia(40%) !important;
}`},{url:["onlineuniversities.com"],css:`body {
    background-image: none !important;
}`},{url:["onlyoffice.com"],invert:[".logo"]},{url:["onnibus.com"],invert:[".icon"]},{url:["op.gg"],invert:[".Level",".ranking-highest__icon .ranking-highest__level"]},{url:["openai.com"],invert:["figure.release-cover>div:first-of-type>img"],css:`body {
    background: initial !important;
}
header[style*="background-image"],
.bg-cover[style*="background-image"] {
    background: none !important;
}
.is-below-fold .header--cover .nav,
.is-below-fold .post-header--cover .nav {
    background: \${white} !important;
    color: \${black} !important;
}
span.token.comment {
    color: \${#aaa} !important;
}
span.token.punctuation {
    color: \${#777} !important;
}
a.btn:not(.fade),
button.btn {
    background: \${rgba(5, 5, 38, 0.05)} !important;
    color: \${#050526} !important;
}
button.btn:hover {
    color: \${#b0b0b0} !important;
}
figcaption,
.caption {
    color: \${rgba(5,5,38,0.5)} !important;
}
.content .timeline > li::before,
.timeline > li::before {
    color: \${black} !important;
}
.content .timeline > li::after,
.timeline > li::after {
    background-color: \${black} !important;
}
.switch-input:checked + .switch-label {
    color: \${rgba(0, 0, 0, 0.7)} !important;
}`},{url:["openanolis.org"],invert:[".logo"]},{url:["openbenchmarking.org"],invert:['g[font-size]:not(g[font-size][fill^="#fff" i]:not(.oborg_expandable_result g))','g[font-size]:not(g[font-size][fill^="#fff" i]) > text[fill="#005a00"]'],ignoreInlineStyle:['g[font-size][fill^="#fff" i]']},{url:["opencollective.com"],invert:['img[alt="Open Collective"]'],css:`#section-contributors > div {
    background-image: none !important;
}`},{url:["openebooks.net"],invert:['img[src="images/home_banner.png"]']},{url:["openenglishbible.org"],invert:["#logo",'img[src="html-logo.png"]']},{url:["opengeofiction.net","openstreetmap.org"],invert:[".map-layout #map",".ideditor g.vertex .icon",".ideditor g.point .icon",".ideditor .icon.areaicon-halo"],css:`div[dir="ltr", id="map"] {
    background: #000 !important;
    filter: none !important;
}
.ideditor .labels-group.halo text {
    stroke: var(--darkreader-neutral-background) !important;
}
.map-layout #map {
    background-color: \${#1b1b1b} !important;
}
img.loader {
    filter: invert(93.7%) hue-rotate(180deg) contrast(90.6%) !important;
}`,ignoreInlineStyle:[".ideditor .main-content *"]},{url:["openoffice.org"],invert:["#ooo-logo"]},{url:["openreview.net"],css:`#__next {
    background-color: var(--darkreader-neutral-background) !important;
}`},{url:["openspeedtest.com"],css:`use.Cards {
    fill: unset !important;
}`},{url:["openstax.org"],css:`input[data-testid$="-search-input"] {
    background-color: transparent !important;
}`},{url:["openvpn.net"],ignoreInlineStyle:[".navbar-brand > svg *"]},{url:["openwall.com"],invert:[".logo"]},{url:["openweathermap.org"],invert:["#chart-component","#y-axis","img.leaflet-tile"]},{url:["openwrt.org"],css:`#dw__pagetools .menuitem svg {
    fill: var(--darkreader-neutral-text) !important;
}`},{url:["orf.at/corona/*"],invert:[".bg",".annotation",".sparkline--fill"]},{url:["osu.edu","ohio-state.edu"],css:`#osu_navbar {
    background-image: linear-gradient(rgb(40, 43, 45) 0%, rgb(63, 69, 71) 100%);
    border-bottom: 5px solid rgb(187, 0, 0);
}
body.sidebar-layout #page #content,
#page #content {
    background-image: none;
}`},{url:["otomoto.pl"],invert:[".seller-card__links__link__icon"]},{url:["overleaf.com"],invert:[".canvasWrapper"]},{url:["overreacted.io"],css:`:root {
    --bg: var(--darkreader-neutral-background) !important;
}`},{url:["overwatchleague.com"],css:`div[class^="dynamic-bracketstyles__Container"] .connector {
    z-index: 0 !important;
}
body {
    background-image: var(--darkreader-neutral-background) !important;
}`},{url:["ovhcloud.com"],invert:[".oof-content-group-line-item"]},{url:["owncube.com"],invert:['[src="/assets/img/logo.png"]'],css:`h1,
h2,
h3,
h4,
h5 {
    color: var(--darkreader-neutral-color);
}`},{url:["oxfordlearnersdictionaries.com"],invert:[".logo-footer"]},{url:["ozbargain.com.au"],css:`div.comment-op {
    background-image: linear-gradient(#000000, #212121) !important;
}`},{url:["ozon.ru"],invert:['ymaps[class$="ground-pane"]']},{url:["p30download.com"],css:`.article-wrapper {
    color: \${#090702} !important;
}`},{url:["pa.gov"],invert:[".nav .nav-trigger.nav-open .inner"],css:`button {
    border: 2px solid #003e51 !important;
}
.nav-trigger:hover {
    box-shadow: inset 0 0 0 2px #003e51 !important;
}
.nav-wrapper {
    background: #003e51 !important;
}`},{url:["pacjent.gov.pl"],css:`.hero-content {
    color: var(--darkreader-neutral-background) !important;
}`},{url:["packages.ubuntu.com"],css:`body {
    background-image: none !important;
}`},{url:["pagerduty.com"],invert:[".navbar-brand"],css:`[class*="SearchBox_icon"] {
    filter: invert(80%);
}`},{url:["palemoon.org"],invert:['img[src="images/goanna200x66.png"]','img[src="images/vpsserver.png"]']},{url:["palshovon.wixsite.com"],invert:["#BACKGROUND_GROUP",'[alt="Marble Surface"]'],css:`[data-mesh-id="SITE_FOOTERinlineContent-gridContainer"] {
    background-color: var(--darkreader-neutral-background) !important;
}`},{url:["pan.baidu.com"],invert:[".module-header-wrapper dt"]},{url:["pan.quark.cn"],invert:['img[alt="夸克网盘"]','img[alt="夸克网盘 logo"]']},{url:["panapply.org"],invert:[".logo"]},{url:["panerabread.com"],invert:[".pds-h-logo"]},{url:["panthema.net"],css:`body {
    background-image: none !important;
}`},{url:["papaya.rocks"],invert:[".favorite.js-open-login",".header__title",".js-logo",".js-logo-big",".js-menu-toggle",".js-open-search",".nav__item--profile",".search__button",".search__close"]},{url:["park-in.gr"],css:`.div-background {
    z-index: 0 !important;
}
.container {
    position: relative !important;
    z-index: 1 !important;
}`},{url:["partitionwizard.com"],css:`.pw-banner {
    background-image: none !important;
}`},{url:["passport.baidu.com"],invert:[".pass-header-logo",".right-icon"]},{url:["passport.bilibili.com/login"],css:`.qrcode-box {
    background: white !important;
    padding: 10px !important;
}`},{url:["passport.jd.com"],css:`.qrcode-img {
    background: white !important;
}`},{url:["passport.yandex.*"],css:`.MagicField-qr {
    background-color: white !important;
}`,ignoreImageAnalysis:["*"]},{url:["paste.rs"],css:`pre {
    --darkreader-inline-bgcolor: var(--darkreader-neutral-background) !important;
}`},{url:["pathfinderwiki.com"],css:`body {
    background-color: \${rgb(245,245,245)};
    background-image: none;
}
.mw-page-container-inner {
    background-color: \${rgb(225,225,245)};
    background-image: none;
}
.fw-alignment-on {
    --darkreader-inline-bgcolor: royalblue !important;
}
.fw-alignment-on a {
    color: \${black} !important;
}`},{url:["patreon.com"],invert:['a[href^="https://docs.google.com"] img','a[href^="https://forms.gle"] img','button[data-tag="menuToggleDiv"] svg','[data-tag="creator-public-page-social-twitch"]','[data-tag="creator-public-page-social-twitter"]','[data-tag="pages-creator-public-page-Header-ShareCampaign"]'],css:`div[data-tag="comment-actions"] svg,
div[data-tag="post-details"] svg {
    fill: var(--darkreader-neutral-text) !important;
}`,ignoreImageAnalysis:["*"]},{url:["patriotmemory.com"],invert:['.w-nav a[href="/"] img',".w-nav-brand"]},{url:["patuscada.bar"],invert:[".topo",".topo > *",".patuscada-logo",".botoes-topo a:last-child img",".logo"],ignoreImageAnalysis:[".etiqueta-vermelha"]},{url:["paulgraham.com"],css:`body {
    background-image: none !important;
}`},{url:["paypal-doladowania.pl"],invert:['img[src*="/img/bank-logos/"]']},{url:["paypal.com"],css:`input.invoiceNumber,
input.transactionAmount {
    border-style: solid !important;
    border-width: 1px !important;
}
.cw_tile-promo-title-container_dw2.css-1cak51m-card_base {
    background: none !important;
}
.tab_container,
.listing_bg {
    background-color: \${#faf8f5} !important;
}
.listing_container,
.listing_container_background {
    background-color: var(--darkreader-neutral-background) !important;
}`},{url:["payu.com"],css:`img[src$="PayU-Map_Homepage_World.svg"] {
    filter: invert(90%) hue-rotate(180deg) contrast(90%) !important;
}`},{url:["pbs.org"],css:`BODY.normal td.bodyarea,
body[background] {
    background-image: none !important;
}`,ignoreInlineStyle:[".page-header__brand > svg > path"]},{url:["pcdiga.com"],css:`.data {
    background-color: var(--darkreader-neutral-background) !important;
}
input,
textarea {
    background-color: var(--darkreader-neutral-background) !important;
    color: var(--darkreader-neutral-text) !important;
}
li.level0 > a {
    color: var(--darkreader-neutral-text) !important;
}
li.level0 > a:hover {
    color: #ff4d23 !important;
}`},{url:["pcgamer.com"],invert:['img[alt="Best Buy"]','img[alt="Amazon"]'],css:`img {
    mix-blend-mode: normal !important;
}`,ignoreInlineStyle:["path"]},{url:["pch24.pl"],invert:['a[href="https://pch24.pl"] svg'],css:`a[href="https://pch24.pl"] svg path[fill="#1d1e1d"] {
    --darkreader-inline-fill: \${white} !important;
}`},{url:["pcloud.com"],invert:[".logo"]},{url:["pcpartpicker.com"],ignoreInlineStyle:[".price-history-legend-color"]},{url:["peardeck.com"],invert:[".boxy-svg",".mc-answer__check-inner",".check-svg"]},{url:["pennylane.ai"],invert:['div[style*="xanadu-background.png"]','div[style*="xanadu-background.png"] > div','div[style*="banner.png"]','div[style*="banner.png"] > div']},{url:["peonaviveu.blogspot.com"],css:`body {
    background-color: var(--darkreader-neutral-background) !important;
    background-image: none !important;
}`},{url:["perfekcyjnawdomu.pl"],invert:['img[src*="logo"]']},{url:["petco.com/shop/en/petcostore"],invert:['a[class^="LogoAnchor__Container"]','button[class^="HamburgerButton"]',"img.center-block.margin-top-sm","h1.pals-header"]},{url:["petri.com"],invert:[".logo"]},{url:["pgatour.com"],css:`.score-card tr td.birdie {
    background-color: rgb(1, 76, 181);
    background-image: initial;
}`},{url:["pgp.net.nz"],invert:['img[src*="DotNZ.svg"]','img[src*="InternetNZ.svg"]']},{url:["phoenixframework.org"],css:`.eva {
    font-family: "Eva-Icons" !important;
}`},{url:["phonescoop.com"],invert:["#sitelogo"],css:`div#outer.wide,
#socpage,
div#top.top-lg,
div#outer {
    background-image: none !important;
}`},{url:["photofeeler.com"],invert:[".navbar-brand"]},{url:["phys.nagoya-u.ac.jp"],invert:['img[src="img/top_94.gif"]'],css:`#wrap table {
    background-image: none !important;
}`},{url:["physics.gmu.edu"],invert:["img.math-display"]},{url:["pianistdiscography.com"],css:`.bg_white {
    background-image: none !important;
}`},{url:["piazza.com"],css:`.dashboard_toolbar,
.page_feed_bucket_header {
    background: linear-gradient(to bottom, \${#c5c7cd} 0%, \${#dfe1e2} 100%) !important;
}`},{url:["picknsave.com"],invert:[".KrogerHeader-Logo--inner"]},{url:["picrew.me"],ignoreInlineStyle:[".imagemaker_colorpalette li"]},{url:["pilot.wp.pl"],invert:[".logo","div > button > svg"]},{url:["ping.sx"],invert:[".ring-0"],css:`#headlessui-switch-1 {
    filter: brightness(70%) !important;
}`},{url:["pipewire.org"],css:`body,
img,
video,
iframe {
    filter: none !important;
}`},{url:["pipiwiki.com"],invert:[".mwe-math-fallback-image-inline",".mwe-math-fallback-image-display","#logo_img"]},{url:["pir2.forumeiros.com"],invert:['img[src*="latex"]']},{url:["pirateship.com"],invert:[".pdf-preview"]},{url:["pixabay.com"],invert:["#logo"]},{url:["pixaful.com"],css:`body {
    background-image: none !important;
}`},{url:["pixilart.com"],css:`.dark-mode-visible {
    display: inline-block;
}
.light-mode-visible {
    display: none;
}
.navbar-nav > .nav-item > .navbar-brand > img {
    content: url("/images/public/logo_pixilart_simple_white.png?v=1.1");
}`,ignoreImageAnalysis:["#image-art-modal"]},{url:["pixiv.net"],css:`.jAENWx,
.iYRMgo {
    color: \${aliceblue} !important;
}`},{url:["pixlab.pl"],invert:['img[src*="trust_us"]']},{url:["pizzahut.com"],invert:[".jss44"]},{url:["pkg.go.dev"],css:`.go-Select {
    background-position: right center;
    background-repeat: no-repeat;
}`},{url:["pkgs.org"],css:`.text-bg-light {
    background-color: \${rgb(248, 249, 250)} !important;
}`},{url:["pl.glosbe.com"],invert:["footer > div > div > a > img"]},{url:["planet.gnome.org"],css:`div.post {
    background-image: none !important;
}`},{url:["planetagracza.pl"],invert:["p.site-title","#footer .site-title a"]},{url:["planetminecraft.com"],css:`#container,
.forum_replies_container,
.forum_reply,
.contents,
.spoiler_header,
#resource-log,
.tag,
.view_more:not(:hover),
#popup,
code {
    background: var(--darkreader-neutral-background) !important;
}`},{url:["plannedparenthood.org"],invert:["a.top-level-nav-link::after","a.top-level-nav-link::before","a.top-level-nav-link > span::after"]},{url:["plantuml.com"],invert:[".scale"]},{url:["play.google.com"],invert:[".bUWb7c",".WF1WQd",'img[src="https://www.gstatic.com/android/market_images/web/play_prism_hlock_2x.png"]','a[href*="about/products"]'],css:`a:visited {
    color: \${black} !important;
}
div {
    color: var(--darkreader-neutral-text);
}`},{url:["play.google.com/apps/publish"],invert:[".IXNAUGB-u-e",".IXNAUGB-U-g img",".IXNAUGB-U-g",'img[src^="data:image/png;"]',".LTMPNY-u-e"]},{url:["play.google.com/books/listen"],invert:['a[href*="books/audiobooks"]'],css:`.chapter-item:not(.iron-selected) .chapter-title {
    color: var(--darkreader-neutral-text) !important;
}`},{url:["play.google.com/music"],invert:[".music-logo",'a[title="Google apps"]',".song-row .rating-container"]},{url:["play.google.com/store/paymentmethods"],css:`body {
    color: var(--darkreader-neutral-text) !important;
}`},{url:["playstation.com"],css:`.pills__container {
    background: var(--darkreader-neutral-background) !important;
}`},{url:["plotkibiznesowe.pl"],invert:["#logo"]},{url:["plumbingforums.com"],invert:[".node-icon::before"],css:`div,
.node-icon {
    background-color: var(--darkreader-neutral-background) !important;
}
.input:focus,
.input.is-focused::placeholder {
    background: var(--darkreader-neutral-background) !important;
}`},{url:["plus.google.com"],invert:["a.gb_b > div",'a[href*="about/products"]']},{url:["pochta.ru"],invert:['ymaps[class$="ground-pane"]']},{url:["pocketbase.io"],invert:[".landing-hero"],css:`.landing-hero div.wrapper:nth-child(2),
.page-header {
    filter: inherit !important;
}
div.eye-socket {
    background-color: #fff !important;
}`},{url:["podcast.adobe.com"],invert:[".bWTYPJ",".cylKGQ","sp-action-button > img",".track","footer > img"],css:`sp-button.sc-eSNLA-D.joqRAB {
    background-color: \${black} !important;
}
sp-button.sc-eSNLA-D.joqRAB > span {
    color: \${white} !important;
}`},{url:["podium.com"],invert:[".logoWrap"]},{url:["poeditor.com"],invert:[".chart img"]},{url:["polar.com"],invert:[".logo"]},{url:["polarion.*","polarion.*.*","polarion.*.*.*"],invert:[".polarion-dle-toolbar-Button img",".polarion-dle-toolbar-ButtonWithMenu img",".polarion-MenuButton img",".polarion-rp-column-configure-layout img"]},{url:["poll.utm.utoronto.ca"],css:`.bg-background,
body {
    background-color: var(--darkreader-neutral-background) !important;
}`},{url:["polsatnews.pl"],css:`.news--over .news__category,
.news--over .news__time,
.news--over .news__title,
.sent__title {
    filter: none !important;
}`},{url:["polskabiega.sport.pl"],css:`.main_wrapper {
    background-color: #181a1b !important;
}`},{url:["polskatimes.pl"],invert:[".componentsNavigationNavbar__logo"]},{url:["polskiemarki.info"],invert:['a[id="powrot"] > img','img[src*="logo_fakro"]'],css:`#katalog .container {
    background-image: none !important;
}`},{url:["polymc.org","polymc.github.io"],ignoreInlineStyle:["svg.home *"]},{url:["poradnikzdrowie.pl"],invert:[".logo"]},{url:["porkbun.com"],invert:['img[src="/images/handshake-icon.svg"]'],css:`.hsds-beacon .iNBOWp iframe[data-cy="FrameComponent"] {
    color-scheme: initial !important;
}`},{url:["portal-portail.apps.cic.gc.ca"],invert:["footer > div > div > div > div > svg > :nth-child(2)","header > div > div > div > svg > :nth-child(3)","ircc-portal-application-status-item img.detailsIcon"]},{url:["portal.edukacja.olsztyn.eu"],invert:["div.main","div#welcome-img","#pageheader","div#ctl00_TheFooter img","a.link-gray > p"]},{url:["portal.qiniu.com"],invert:[".global-loading-content img"]},{url:["portal.saltyfish.io"],invert:[".logo-img"]},{url:["portalsamorzadowy.pl"],invert:[".p-logo",".footer-logo"]},{url:["portswigger.net"],invert:['img[alt="Web Security Academy"]','img[alt="The Daily Swig"]']},{url:["positiveintelligence.com"],invert:["article.logos-grid__grid","img.footer__logo","img.homepage-hero__img","img.menu__logo"]},{url:["postani-student.hr"],css:`body {
    background-image: none !important;
}`},{url:["postnauka.ru"],invert:[".m-header__logo"]},{url:["poszukiwania.pl"],invert:[".header-logo",".footer-logo-address"]},{url:["potplayer.daum.net"],invert:[".promotion_potplayer"]},{url:["powerapps.com","*.powerapps.com"],css:`.ag-cell .ms-Label {
    color: var(--darkreader-text--white) !important;
}`},{url:["pphosted.com"],css:`#menu_items {
    background-image: none !important;
}`},{url:["praca.pl"],invert:['img[alt="Praca.pl"]'],css:`.app-offer__content {
    background-color: rgb(25, 26, 27) !important;
}
.szcont .f1top,
.szcont .f1template_content {
    background-blend-mode: color;
    background-color: rgba(0, 0, 0, 0.25) !important;
}
.company__img {
    padding: 0 0 !important;
}
.listing__logo,
.app-offer__logo-img,
.company__img,
.employer-profile-header .logo img,
.company-job-list .logo img,
.epc-other-employers .logo img,
.home__partner-logo {
    filter: brightness(0.75);
}`,ignoreImageAnalysis:[".szcont .f1top",".szcont .f1template_content"]},{url:["practicum.yandex.*"],invert:['img[src$="?color=000"]',".progress-circle__shape",".burger",".lesson-progress__progress-bar",".scrollbar__control-line",'input[aria-checked="true"] + .radio__control'],css:`.quiz-task {
    background-color: var(--darkreader-neutral-background) !important;
}
.icon-status-error > .shape2,
.icon-status-error > .shape3,
.icon-status-success > .shape2 {
    fill: var(--darkreader-neutral-background) !important;
}`},{url:["pracuj.pl","*.pracuj.pl"],css:`[alt="background"] {
    display: none !important;
}
[data-test="image-background"] {
    display: none !important;
}
[data-test="section-positioned-offers"] {
    background: \${White} !important;
}`},{url:["prairielearn.com"],invert:[".graph text"],css:`.question-container img {
    background: var(--darkreader-neutral-text) !important;
}
div[class="pl-code mb-3 "] {
    --pl-code-background-color: var(--darkreader-neutral-background) !important;
}`},{url:["prajwalkoirala.com"],invert:["svg"]},{url:["preply.com"],css:`.styles_block__BmN2c {
    background-color: \${rgb(232, 230, 227)};
}`},{url:["pressgazette.co.uk"],invert:[".site-logo"]},{url:["primatelabs.com"],invert:[".logo"]},{url:["printables.com"],invert:[".navbar-brand .printables-text"],css:`market-filter-item {
    --line-color: var(--darkreader-border--line-color) !important;
}`},{url:["privat24.ua"],css:`div[class*=qrContainer] > div > div[class*=qr_] {
    background-color: white;
}`},{url:["pro-run.pl"],invert:[".td-main-logo"]},{url:["processon.com"],invert:["#view_container canvas"]},{url:["procyclingstats.com"],ignoreImageAnalysis:[".flag",".flag.w32",".flag.c16"]},{url:["producthunt.com"],invert:['[class="icon_f5f81"]']},{url:["profile.gigabyte.com"],css:`body {
    background-image: var(--darkreader-neutral-background) !important;
}`},{url:["profiler.firefox.com"],invert:[".chartCanvas"]},{url:["projectstream.it"],css:`body {
    background: none !important;
}`},{url:["pronote.toutatice.fr"],invert:[".ObjetGrille",".Cours",".Insecable",".Calendrier_Jour_Selection"],css:`body,
.ie-chips.tag-style {
    background: linear-gradient(90deg, #282c2d 0, #282C2D calc(100% - 0.8rem), transparent calc(100% - 0.8rem), transparent 100%);
}`},{url:["pronto.io"],css:`input.btn-new-group.pointer {
    background-color: var(--darkreader-neutral-background) !important;
}`},{url:["prospectmagazine.co.uk"],invert:[".header__logo"]},{url:["prostovpn.org"],css:`body {
    background: none !important;
}`},{url:["protect-eu.ismartlife.me/login"],css:`div[class^=login_login] {
    background-image: none !important;
}
div[class^=login_qc-code-content] {
    background-color: white !important;
}`},{url:["protocol.com"],invert:["img.logo-icon.open","div#topbar-menu-toggle > svg.icon"]},{url:["proton.me","mail.proton.me"],invert:['img[src$="hero-2x.png"]','iframe[data-testid="rooster-iframe"]']},{url:["protonvpn.com"],invert:[".navbar-brand",".protonmail-link","#page_home .parallax","#page_home .parallax > *"]},{url:["provantage.com"],css:`body,
body.HOME {
    background-color: var(--darkreader-neutral-background) !important;
    background-image: none !important;
}`},{url:["proxmox.com"],invert:["#logo",".uix_logo"]},{url:["psemu.pl"],css:`.menu-item {
    text-shadow: rgb(40, 43, 54) 0px 1px 0px !important;
}`},{url:["psprices.com"],invert:[".store-logo",".highcharts-label text",".game--description::after"],css:`body {
    background-color: var(--darkreader-neutral-background) !important;
}`},{url:["psychonautwiki.org"],invert:["#mw-panel > a > svg",".mw-headline > a > svg",'a[href="http://www.emcdda.europa.eu/about"] > svg','img[alt="Tasks.svg"]','img[alt="Star-o.svg"]','img[alt="Pencil.svg"]',"#InfoTable > tbody > tr > .Image > div > div > .image",".dosechart"],css:`.dosechart,
.thumbimage,
.mwe-popups-discreet > svg {
    background-color: \${black} !important;
}`},{url:["publica.fraunhofer.de"],invert:['img[src="/pub09img/logo-fraunhofer.gif"]']},{url:["publicwww.com"],css:`body {
    background-image: none !important;
}`},{url:["pulumi.com"],css:`:host {
    --neutral-fill-stealth-rest: var(--darkreader-neutral-background) !important;
}`},{url:["pureinfotech.com"],invert:[".pureinfotech-logo"],css:`.article-type-standard-css .entry-content::before {
    color: \${gray} !important;
}`},{url:["purerave.com"],css:`:root {
    --darkreader-border--border: 1px solid rgba(0, 90, 155, 1) !important;
}
div.form-buttons textarea {
    background-color: var(--darkreader-neutral-background) !important;
    border-color: #005a9b !important;
}
textarea {
    background-color: var(--darkreader-neutral-background) !important;
}`},{url:["purevpn.com"],css:`.inner_banner {
    background-image: none !important;
}`},{url:["pushsquare.com"],css:`.page {
    background-image: none !important;
}`},{url:["pyszne.pl","lieferando.*","justeat.*","just-eat.*","takeaway.com","thuisbezorgd.nl"],invert:[".gm-style"],css:`.cover img,
.logowrapper,
.orderoverview__restaurant-image-container-inner,
div[data-qa="avatar"] {
    background-blend-mode: color;
    background-color: rgba(255, 255, 255, 0.5) !important;
}`,ignoreInlineStyle:["svg > circle","svg > text > tspan"]},{url:["pythonanywhere.com"],invert:["#id_logo",'img[src^="/static/glyphicons/"]']},{url:["pytorch.org"],invert:["#site-logo",".header-holder:not(.homepage-header) > div.container > div.header-container > .header-logo"]},{url:["pz.gov.pl"],css:`.banner-text {
    color: var(--darkreader-neutral-background) !important;
}`},{url:["q.utoronto.ca"],invert:[".ic-sidebar-logo__image",".instructure_file_link_holder > .file_download_btn","a.external > span > img:first-child"],css:`:root {
    --darkreader-bg--ic-brand-global-nav-bgd: var(--ic-brand-global-nav-bgd) !important;
    --darkreader-bg--ic-brand-global-nav-logo-bgd: var(--ic-brand-global-nav-logo-bgd) !important;
    --darkreader-border--ic-brand-global-nav-avatar-border: var(--ic-brand-global-nav-avatar-border) !important;
    --ic-brand-global-nav-ic-icon-svg-fill--active: var(--darkreader-text--ic-link-color) !important;
}
.ic-app-header__menu-list-link:hover,
.ic-app-header__menu-list-link:focus {
    background-color: \${rgba(0, 0, 0, 0.2)} !important;
}
.ic-DashboardCard {
    box-shadow: \${rgba(0, 0, 0, 0.3)} 0px 1px 5px !important;
}`},{url:["qcc.com"],invert:[".app-login-insert",".logo",".pay-insert"]},{url:["quantrimang.com"],css:`.taxonomyList .navigation a {
    color: var(--darkreader-neutral-text) !important;
}
.taxonomyList .navigation a:hover {
    color: \${orange} !important;
}`},{url:["qubes-os.org"],invert:['[src$="xen-logo.svg"]','[src$="whonix-tor.svg"]']},{url:["quickbase.com"],css:`td.cell,
td.label {
    border-color: rgb(24, 26, 27) !important;
}`},{url:["quirksmode.org"],invert:[".logoPPK"],css:`body {
    background-image: none !important;
}`},{url:["quizlet.com"],css:`.UIKeyboardHint {
    background-color: transparent !important;
}`,ignoreInlineStyle:[".FeedbackHeading-emoji > svg *"]},{url:["quora.com"],css:`.logo_fill {
    fill: rgb(219, 87, 83) !important;
}
body {
    background-color: var(--darkreader-neutral-background) !important;
}
div.q-box.qu-bg--white {
    background-color: #181a1b !important;
    background-image: none !important;
}`,ignoreInlineStyle:["#upvote","#downvote"]},{url:["qwant.com"],invert:[".background-home__logo",".home__logo__container .home__logo","canvas.mapboxgl-canvas"]},{url:["rachel53461.wordpress.com"],css:`#grad {
    background-image: none !important;
}`},{url:["racketboy.com"],css:`#rb-split,
#rb-split > div {
    background-image: none !important;
}`},{url:["radar-opadow.pl"],invert:["#chase-map",".ro_tooltip"]},{url:["radareu.cz"],invert:["#radarMap .leaflet-map-pane"]},{url:["radeonramdisk.com"],invert:["#logo"]},{url:["radio17.pl"],invert:[".main-title"]},{url:["radiokolor.pl"],invert:[".nav-brand",".buttons-1","a.logo-1"],css:`.content-box-1 {
    background-image: none !important;
}`},{url:["railpassengers.org"],invert:[".navbar__list-search",".navbar__logo",".navbar__mobile-icons"]},{url:["railwaygazette.com"],invert:[".mastheadLogo"]},{url:["rain.thecomicseries.com"],css:`body {
    background-color: var(--darkreader-neutral-background) !important;
    background-image: none !important;
    margin: 0px !important;
    padding: 8px !important;
}
#comicimage {
    background-color: #ffffff !important;
}`},{url:["rakuten.com","*.rakuten.com"],invert:[".chakra-image"],css:`span[class*="Checkbox_checkmark"]::after {
    border-color: rgb(207, 203, 201) !important;
}`},{url:["rapidtables.com"],ignoreInlineStyle:['td[style^="background:"]']},{url:["raspberrypi.com"],invert:['.__rptl-header-logo path[fill="#000"]'],css:`body {
    color: var(--darkreader-neutral-text) !important;
}`},{url:["raspberrypi.org"],invert:[".site-header__home-link"],ignoreImageAnalysis:[".c-at-home__container"]},{url:["rateyourmusic.com"],ignoreImageAnalysis:["*"]},{url:["rationalwiki.org"],invert:[".mw-wiki-logo"]},{url:["read.amazon.*","read.amazon.*.*","lire.amazon.*"],invert:[".header_bar_icon:not(#kindleReader_button_close)",".header_bar_button","#kindleReader_content",".kg-full-page-img",".side-menu-close",".fixed-book-title","ion-menu","ion-header","ion-title"],css:`.kr-renderer-container,
.kr-renderer-container-fullpage {
    z-index: 0 !important;
}`},{url:["readme.io"],css:`.rm-PlaygroundRequest,
.CodeTabs-toolbar {
    background-color: var(--darkreader-neutral-background) !important;
}`},{url:["readpaper.com/pdf-annotate/note"],invert:[".page"]},{url:["readthedocs.io"],css:`.toc-drawer,
.sig,
code.literal,
.sidebar-search-container,
.sidebar-tree .current > .reference {
    background-color: var(--darkreader-neutral-background) !important;
}`},{url:["real-debrid.com"],css:`#wrapper_global {
    background-image: none !important;
}
#header_img_right {
    background-image: none !important;
}`},{url:["realmadridfin.net"],css:`body,
.botslice,
.botslice span,
.button_submit,
.catbg,
.cat_bar,
#content_section,
.frame,
#footer_section,
#header,
.lowerframe,
.lowerframe span,
#shoutbox_b,
#shoutbox_color,
#shoutbox_face,
#shoutbox_i,
#shoutbox_nosound,
#shoutbox_u,
#shoutbox_u + img,
.titlebg,
.title_barIC,
.topslice,
.topslice span,
.upperframe,
.upperframe span {
    background-image: none !important;
}
#shoutbox_message {
    background-color: none !important;
}`},{url:["realmeye.com"],invert:['img[src*="latex"]'],ignoreImageAnalysis:[".character"]},{url:["realmicentral.com"],invert:['img[itemprop="logo"]',"div.fly-but-wrap.left.relative > span"]},{url:["redbubble.com"],invert:['[data-testid="ds-wordmark"]']},{url:["redcross.*","redcross.*.*"],css:`.lecture-attachment img.is-loaded {
    filter: brightness(50%) sepia(40%) !important;
}`},{url:["reddit.com","new.reddit.com"],invert:['video ~ div [style^="height"]',".snoo-cls-1",".snoo-cls-2",".snoo-cls-3",".snoo-cls-8"],css:`[style^="--background"] {
    --background: \${#FFFFFF} !important;
}
[style^="--canvas"] {
    --canvas: \${#DAE0E6} !important;
}
[style^="--pseudo-before-background"] {
    --pseudo-before-background: \${#DAE0E6} !important;
}
[style^="--comments-overlay-background"] {
    --comments-overlay-background: \${#DAE0E6} !important;
}
[style^="--commentswrapper-gradient-color"] {
    --comments-overlay-background: \${#DAE0E6} !important;
}
[style^="--fakelightbox-overlay-background"] {
    --fakelightbox-overlay-background: \${#DAE0E6} !important;
}
.button:hover {
    --button-color-background: var(--darkreader-bg--color-neutral-background-hover) !important;
}
.hover\\:text-secondary:hover {
    color: var(--darkreader-neutral-text) !important;
}
.hover\\:bg-secondary-background-hover:hover {
    background-color: var(--darkreader-bg--color-neutral-background-hover) !important;
}
.hover\\:border-secondary-background-hover:hover {
    border-color: var(--darkreader-border--color-neutral-border-medium) !important;
}
.before\\:border-tone-4::before {
    border-color: var(--color-tone-4) !important;
}
.button-shell {
    color: var(--darkreader-neutral-text) !important;
}
.button-plain {
    --button-color-text-default: var(--darkreader-neutral-text) !important;
}
.button-secondary {
    --button-color-background-default: var(--darkreader-bg--color-neutral-background) !important;
    --button-color-text-default: var(--darkreader-text--color-neutral-content-weak) !important;
}
.internalBackButton {
    background-image: linear-gradient(to right,var(--plain-background) 0,var(--darkreader-bg--color-secondary-background) 30%) !important;
}
.internalForwardButton {
    background-image: linear-gradient(to right,var(--plain-background) 0,var(--darkreader-bg--color-secondary-background) 30%) !important;
}
.label-container {
    background: var(--darkreader-bg--color-neutral-background) !important;
}
.label-container:hover {
    background: var(--darkreader-bg--color-neutral-background-hover) !important;
}
.md p>a[href="#s"]::after,
a[href="#s"]::after {
    color: #000;
}
.text-neutral-content-strong {
    color: var(--darkreader-text--color-neutral-content-strong) !important;
}
header a[aria-label="Home"] svg:last-child g,
header > div > div + div a[href] *,
header > div > div + div button[aria-label] * {
    fill: var(--darkreader-neutral-text) !important;
}
#comment-tree {
    background-color: var(--darkreader-bg--color-neutral-background) !important;
}
#COIN_PURCHASE_DROPDOWN_ID > div {
    background: linear-gradient(180deg,hsla(0,0%,100%,.1) 45.96%,hsla(0,0%,100%,.57) 46%,hsla(0,0%,100%,0) 130%),\${gold} !important;
}
#COIN_PURCHASE_DROPDOWN_ID > div > span {
    color: \${white} !important;
}
#search-input-chip {
    background: var(--darkreader-bg--color-secondary-background-selected) !important;
}
.md-spoiler-text:not([data-revealed])::selection {
    background-color: var(--darkreader-bg--newCommunityTheme-metaText) !important;
    color: transparent !important;
}
button[slot="forward-button"] {
    background-color: var(--darkreader-border--color-neutral) !important;
}
button[slot="back-button"] {
    background-color: var(--darkreader-border--color-neutral) !important;
}
div[slot="tabs"] {
    background: var(--darkreader-bg--color-neutral-background) !important;
}
div[role="menu"][style^="position: fixed"] button button[role="switch"][aria-checked="false"] {
    background-color: \${gray} !important;
}
div[role="menu"][style^="position: fixed"] button button[role="switch"] > div {
    background-color: \${black} !important;
}
object[data="about:blank"] {
    display: none !important;
}
span[class="inline-block mr-[calc(var(--size-button-sm-h)-var(--rem10)-var(--button-border-width-default))] overflow-hidden text-ellipsis"] {
    color: var(--darkreader-text--color-neutral-content) !important;
}
shreddit-comment-tree {
    background-color: var(--darkreader-bg--shreddit-content-background) !important;
}
.self-start {
    background-color: var(--darkreader-bg--shreddit-content-background) !important;
}
#comment-fold-button {
    background-color: var(--darkreader-bg--shreddit-content-background) !important;
}
button.w-lg {
    background-color: var(--darkreader-bg--shreddit-content-background) !important;
}
.bg-neutral-background {
    background-color: var(--darkreader-bg--shreddit-content-background) !important;
}
.text-secondary {
    color: var(--darkreader-text--color-secondary) !important;
}
faceplate-tracker > li > a:hover {
    background-color: var(--darkreader-bg--color-neutral-background-hover) !important;
}
faceplate-tracker > li > div:hover {
    background-color: var(--darkreader-bg--color-neutral-background-hover) !important;
}
div#RECENT > li > a:hover {
    background-color: var(--darkreader-bg--color-neutral-background-hover) !important;
}
span.input-container.stateful-input input {
    color: var(--darkreader-text--color-tone-1) !important;
}
.reddit-search-bar {
    background-color: var(--darkreader-bg--color-neutral-background) !important;
}
.reddit-search-bar .text-neutral-content {
    color: var(--darkreader-text--color-tone-1) !important;
}
faceplate-tracker > li[rpl-selected] > a {
    background-color: var(--darkreader-bg--color-tone-3) !important;
}
faceplate-menu {
    background-color: var(--darkreader-bg--color-neutral-background-strong) !important;
}
faceplate-tracker > button[rpl-selected] {
    background-color: var(--darkreader-bg--color-neutral-background-hover) !important;
}
faceplate-tracker a[data-testid]:hover {
    background-color: unset !important;
}
faceplate-tracker[noun="trending"] div:hover {
    background-color: unset !important;
}
faceplate-hovercard > div > div > div {
    background-color: var(--darkreader-bg--color-neutral-background) !important;
}
faceplate-hovercard > div > div > div:hover {
    background-color: var(--darkreader-bg--color-neutral-background) !important;
}
#faceplate-tooltip {
    background-color: var(--darkreader-bg--color-neutral-background) !important;
}
faceplate-hovercard p {
    color: var(--darkreader-text--color-neutral-content-strong) !important;
}
.text-secondary-weak {
    color: var(--darkreader-text--color-secondary-weak) !important;
}
button.button-plain:hover {
    color: var(--button-color-text-default) !important;
}
faceplate-menu > li > div {
    background-color: var(--darkreader-bg--color-neutral-background-hover) !important;
}
.text-neutral-content-weak {
    color: var(--darkreader-text--color-neutral-content-weak);
}
:host > #content {
    background-color: var(--darkreader-neutral-background) !important;
}
.bg-neutral-background-weak {
    background: var(--darkreader-neutral-background) !important;
}`},{url:["reddit.zendesk.com"],invert:["header > div.logo > a > img","img.hero-inner-image"]},{url:["redditstatus.com"],invert:[".logo-container"]},{url:["redgamingtech.com"],css:`body {
    background-image: none !important;
}`},{url:["redhat.com"],css:`p,
li {
    color: \${black} !important;
}
.PFElement {
    background-color: \${white} !important;
}`,ignoreInlineStyle:[".redhat-logo *"]},{url:["redis.io"],css:`.bg-gradient-to-bl {
    background-image: none !important;
}`},{url:["redpenreviews.org"],css:`header a {
    color: var(--darkreader-neutral-text) !important;
}`},{url:["reebok.*"],css:`div {
    color: var(--darkreader-neutral-text) !important;
}`},{url:["refactoring.guru"],css:`.recipe {
    background-color: var(--darkreader-neutral-background) !important;
}`},{url:["referentiemateriaalvo.noordhoff.nl"],css:`body {
    background-image: none !important;
}`},{url:["regex101.com"],invert:["canvas"]},{url:["reheader.glitch.me"],invert:['[src=$"GitHub-Mark.png"]','[src=*"header-image-readme-gen.gif]','[src=*"Screen%20Shot%202020-07-17%20at%205.19.18%20PM.png"]'],css:`#add-to-github {
    background-color: #96943f !important;
}
#upload-github {
    border: 1px solid #dddddd;
}`},{url:["rei.com"],invert:[".logo__img"]},{url:["relay.firefox.com"],invert:["img.c-landing-hero-brands","img.c-brand-title",".fx-bento-app-link.fx-bento-link.fx-mobile > span::before",".fx-bento-app-link.fx-bento-link.fx-vpn > span::before","div.glocal-site-options > a > img","div.glocal-site-options > form > button::before"]},{url:["relive.cc"],invert:['img[src*="logo-relive"]'],ignoreImageAnalysis:[".email-button i"]},{url:["rememberthemilk.com"],css:`div[contenteditable="true"] {
    border: transparent !important;
}`},{url:["render.com"],invert:[".rm-section.rm-hero",".rm-section.rm-hero > *:not(.rm-back-bottom)",".rm-back-top",".rm-back-large"]},{url:["render.githubusercontent.com/view/ipynb"],invert:["img.math"]},{url:["replit.com"],css:`.monaco-editor .cursor {
    background-color: \${#000};
}`},{url:["repubblica.it"],invert:[".page-header__logo"]},{url:["resetera.com"],css:`.bbc-spoiler:not(:hover):not(:active),
.bbc-spoiler:not(:hover):not(:active) * {
    background-color: \${black} !important;
    color: \${black} !important;
}`},{url:["resmigazete.gov.tr"],css:`img[src="/assets/img/arma.png"] {
    filter: hue-rotate(180deg) invert(1) brightness(2);
}`},{url:["respekt.cz"],invert:[".sitelogo-link"]},{url:["restaurantji.com"],invert:[".logo_sticky"]},{url:["restoreprivacy.com"],css:`body {
    background-color: var(--darkreader-bg--color-body) !important;
}`},{url:["retracmirrors.com"],css:`body,
#app > div {
    background-image: none !important;
}`},{url:["reuters.com"],invert:['path[d^="M121.865 50.29c0"]']},{url:["revisioncentregcse.blogspot.com"],css:`body {
    background-color: var(--darkreader-neutral-background) !important;
    background-image: none !important;
}`},{url:["revolut.com"],css:`[class*="Text-rui"] {
    text-shadow: rgb(40, 43, 54) 1px 1px 0px !important;
}`},{url:["revolver.news"],invert:["h2.title","h3.category"]},{url:["rfc-editor.org"],css:`svg.diagram text {
    fill: var(--darkreader-neutral-text) !important;
}`},{url:["rfi.fr"],invert:[".o-header__site-nav-link"]},{url:["rg-adguard.net"],invert:['img[src*="info"]','img[src*="like"]','img[src*="donate"]','img[src*="faq"]'],css:`body,
.tftable th {
    background: none !important;
}`},{url:["richie-bendall.ml"],css:`.content--card {
    background-color: #303030;
}
body {
    background-color: #5c6bc0;
}
.app--bar,
.drawer--content :not(.mdc-list--non-interactive) > :not(.mdc-list-item--disabled) .mdc-list-item--activated::after,
:not(.mdc-list--non-interactive) > :not(.mdc-list-item--disabled) .mdc-list-item--activated::before {
    background-color: #3f51b5;
}
.btc-dialog .mdc-button {
    color: #3f51b5;
}
.btc-dialog svg {
    fill: white;
}`},{url:["richiebendallstatus.ml"],css:`#page-container {
    background-image: none;
}
.success-bg {
    background-color: #80BA27;
}
.warning-bg {
    background-color: #f7921e;
}
.success {
    color: #80BA27;
}
.warning {
    color: #f7921e;
}
.danger-bg {
    background-color: #ff0000;
}
.paused-bg,
.info-bg,
.black-bg {
    background-color: #17252e;
}`},{url:["ring.com"],invert:['span[alt="Ring Logo"] svg'],ignoreInlineStyle:['span[alt="Ring Logo"] svg *']},{url:["riptutorial.com"],css:`.whole-container {
    background-image: none !important;
}`},{url:["rmf24.pl"],invert:[".mainContent3-left iframe",".belkaNew"],css:`#twojezdrowieCont .page3,
#regionySection {
    background-image: none !important;
}`},{url:["roadmap.sh"],css:`svg .done rect {
    fill: var(--darkreader-neutral-background) !important;
}`},{url:["roblox.com"],css:`.checkbox input[type=checkbox]:checked + label::before {
    background-color: var(--darkreader-neutral-text) !important;
}`},{url:["rocksbox.com"],invert:[".nav_logo"]},{url:["rockylinux.org"],invert:['img[alt="Rocky Linux"]']},{url:["rog.asus.com"],ignoreImageAnalysis:[".rog-header .nav-menu .nav-bar"]},{url:["roland.com"],css:`body {
    background: none !important;
}`},{url:["rollenspiel.monster"],css:`body {
    height: 100% !important;
}`},{url:["ros.org"],css:`.bg-ros-dots-grid {
    background-image: none !important;
}`},{url:["roscidus.com"],css:`span.caption-wrapper img {
    background-color: white !important;
}`},{url:["rosepassion.com"],invert:[".imgmap",".famille-content .image",".les_schemas img",".rpimage .follow-scroll"],css:`#selectionner_voiture .bloc .image {
    mix-blend-mode: normal !important;
}`},{url:["roskomsvoboda.org"],invert:['img[src="/static/core/images/logo.svg"]']},{url:["rostov.tele2.ru"],invert:[".header-navbar-logo"]},{url:["rottentomatoes.com"],ignoreImageAnalysis:[".icon__fresh",".fresh",".icon"]},{url:["royalbank.com"],css:`.rbc-select-input {
    background-color: var(--darkreader-neutral-background) !important;
}`},{url:["rozetka.com.ua"],invert:["div.cabinet-navigation__icon > svg","span.cabinet-navigation__icon > svg"]},{url:["rp.pl"],invert:['a[href="/"]',".burger--menu span",".icon-logo::before",".footer--logo",".footer--copyright--content div"]},{url:["rpcs3.net"],css:`p,
.compat-types,
.compat-hdr-left,
.compat-status-container {
    color: var(--darkreader-neutral-text) !important;
}`},{url:["rpm.org"],ignoreImageAnalysis:["body"]},{url:["rpo.gov.pl"],invert:[".view-content .field-content > img","#etykieta_szukaj a"],ignoreImageAnalysis:["#bip_kontener"]},{url:["rt.ru"],invert:["#logo_text"]},{url:["rte.ie"],invert:[".masthead .nav-btn.menu"],css:`.masthead .weather-widget .icon {
    filter: none !important;
}
.theoplayer-skin .theo-control-bar-shadow {
    background-image: linear-gradient(transparent var(--darkreader-neutral-background)) !important;
}`},{url:["rtlnieuws.nl"],css:`section {
    background-color: var(--darkreader-neutral-background) !important;
}`},{url:["rubenfixit.com"],css:`.shape-top-left::after,
.nav-btn::after {
    border-color: transparent transparent transparent var(--darkreader-neutral-background) !important;
}
.shape-top-right::after,
.nav-btn::before {
    border-color: transparent transparent var(--darkreader-neutral-background) transparent !important;
}
.shape-bottom-left::after {
    border-color: var(--darkreader-neutral-background) transparent transparent transparent !important;
}
.shape-bottom-right::after {
    border-color: transparent var(--darkreader-neutral-background) transparent transparent !important;
}
#blog-isotope-masonry article,
.shape-top-left,
.shape-top-right,
.shape-bottom-left,
.shape-bottom-right {
    background-color: var(--darkreader-neutral-background) !important;
}`},{url:["rubjo.github.io"],css:`select {
    background-color: var(--darkreader-neutral-background) !important;
}`},{url:["rudeiczarne.pl"],invert:["#logo","#footer-logo"]},{url:["rumratings.com"],css:`body {
    background-image: none !important;
}`},{url:["runkit.com"],invert:[".CodeMirror div.CodeMirror-cursor"]},{url:["runtothefinish.com"],css:`:root {
    --body-background-color: var(--darkreader-neutral-background) !important;
}`},{url:["rynek-kolejowy.pl"],invert:[".logoTK",".partnerNaglowka",".pasekbocznynaglowek span",".portalLogo",".tagLogo",".zawartoscPartner",'img[alt="współpraca"]','img[class="wspolpraca"]','img[src*="img/firma"]','img[src*="katalogkolejowy"]']},{url:["rynekzdrowia.pl"],invert:['img[src*="rynekzdrowia.svg"]','img[alt*="partner"]',".search",".copyright > img"]},{url:["rytmy.pl"],invert:[".logo-rytmy-a"]},{url:["s.weibo.com"],invert:["#woo_svg_nav_logo > g > path:nth-child(5)"],css:`#searchapps > div > div[role=navigation] > div.woo-panel-main {
    --darkreader-bg--weibo-top-nav-panel-bgColor: rgb(24, 26, 27);
    --darkreader-border--weibo-top-nav-panel-bd: rgb(52, 56, 58);
}`},{url:["sadanduseless.com"],invert:[".logo1"]},{url:["safetysign.com"],css:`div[id*="RollUp-Aluminum-smalltext-preview"],
div[id*="RollUp-Aluminum-largetext-preview"],
#_HillGradeCustom-hillgradetext-preview {
    color: rgb(0, 0, 0) !important;
}`},{url:["safeweb.norton.com"],invert:[".logo img"]},{url:["saladelcembalo.org"],invert:["#PageDiv td"],css:`html,
body,
input,
textarea,
select,
button {
    background-color: transparent !important;
    color: var(--darkreader-neutral-text) !important;
}`},{url:["samcodes.co.uk"],invert:[".logo"]},{url:["samsung.*"],invert:[".icon",".gnb__logo"],css:`.feature-full-bleed-text img {
    filter: brightness(50%) sepia(40%) !important;
}
.feature-full-bleed-text__content {
    z-index: 1 !important;
}`},{url:["sanomapro.fi"],invert:[".equation"]},{url:["santander.pl"],invert:['img[src*="/santander/footer/"]',".topVisual__text span",".topVisual__content.topVisual__content--nobutton"]},{url:["savannah.gnu.org"],css:`.boxtitle {
    background-image: none !important;
}`},{url:["sba.gov"],invert:[".usa-header--extended .site-logo"]},{url:["sbb.ch","shop.sbb.ch"],css:`#Von0,
#Nach1,
#From0,
#To1,
#De0,
#À1,
#Da0,
#A1 {
    background: none !important;
}
.sbb-navigation__container:before {
    background-color: var(--sbb-color-white-alpha-70) !important;
}
#sbb-logo__signet,
.mod_header_logo_content > * > path:not(path[fill='#EC0000']) {
    fill: white !important;
}
.sbb-clock .face circle {
    fill: \${#dcdad7} !important;
}
.sbb-clock .face,
.sbb-clock .sbb-clock__hand-hours,
.sbb-clock .sbb-clock__hand-minutes {
    fill: \${black} !important;
}
.sbb-button,
.sbb-teaser-hero > * > * > * {
    color: \${black} !important;
}
:root {
    --sbb-color-aluminium-default: \${#d2d2d2} !important;
    --sbb-color-anthracite-default: \${#5a5a5a} !important;
    --sbb-color-autumn-default: \${#e84e10} !important;
    --sbb-color-black-alpha-0: \${transparent} !important;
    --sbb-color-black-alpha-10: \${rgba(0,0,0,.1)} !important;
    --sbb-color-black-alpha-15: \${rgba(0,0,0,.15)} !important;
    --sbb-color-black-alpha-20: \${rgba(0,0,0,.2)} !important;
    --sbb-color-black-alpha-30: \${rgba(0,0,0,.3)} !important;
    --sbb-color-black-alpha-40: \${rgba(0,0,0,.4)} !important;
    --sbb-color-black-alpha-50: \${rgba(0,0,0,.5)} !important;
    --sbb-color-black-alpha-60: \${rgba(0,0,0,.6)} !important;
    --sbb-color-black-alpha-70: \${rgba(0,0,0,.7)} !important;
    --sbb-color-black-default: \${#000} !important;
    --sbb-color-brown-default: \${#b76000} !important;
    --sbb-color-cement-alpha-0: \${hsla(0,0%,74%,0)} !important;
    --sbb-color-cement-alpha-20: \${hsla(0,0%,74%,.2)} !important;
    --sbb-color-cement-default: \${#bdbdbd} !important;
    --sbb-color-charcoal-default: \${#212121} !important;
    --sbb-color-cloud-default: \${#e5e5e5} !important;
    --sbb-color-granite-default: \${#686868} !important;
    --sbb-color-graphite-default: \${#b7b7b7} !important;
    --sbb-color-green-default: \${#008a36} !important;
    --sbb-color-iron-default: \${#444} !important;
    --sbb-color-lemon-default: \${#ffde15} !important;
    --sbb-color-metal-alpha-0: \${hsla(0,0%,46%,0)} !important;
    --sbb-color-metal-alpha-20: \${hsla(0,0%,46%,.2)} !important;
    --sbb-color-metal-default: \${#767676} !important;
    --sbb-color-midnight-default: \${#151515} !important;
    --sbb-color-milk-default: \${#f6f6f6} !important;
    --sbb-color-night-default: \${#143a85} !important;
    --sbb-color-orange-default: \${#f27e00} !important;
    --sbb-color-peach-default: \${#fcbb00} !important;
    --sbb-color-pink-default: \${#cf4082} !important;
    --sbb-color-platinum-alpha-0: \${hsla(0,0%,80%,0)} !important;
    --sbb-color-platinum-alpha-20: \${hsla(0,0%,80%,.2)} !important;
    --sbb-color-platinum-default: \${#cdcdcd} !important;
    --sbb-color-red-alpha-0: rgba(235,0,0,0) !important;
    --sbb-color-red-alpha-20: rgba(235,0,0,.2) !important;
    --sbb-color-red-alpha-90: rgba(235,0,0,.9) !important;
    --sbb-color-red-default: #eb0000 !important;
    --sbb-color-red-mode-dark: #ff3838 !important;
    --sbb-color-red125-alpha-0: rgba(198,0,24,0) !important;
    --sbb-color-red125-alpha-20: rgba(198,0,24,.2) !important;
    --sbb-color-red125-default: #c60018 !important;
    --sbb-color-red150-default: #a20013 !important;
    --sbb-color-silver-default: \${#dcdcdc} !important;
    --sbb-color-sky-default: \${#0079c7} !important;
    --sbb-color-smoke-alpha-0: \${hsla(0,0%,55%,0)} !important;
    --sbb-color-smoke-alpha-10: \${hsla(0,0%,55%,.1)} !important;
    --sbb-color-smoke-alpha-20: \${hsla(0,0%,55%,.2)} !important;
    --sbb-color-smoke-alpha-5: \${hsla(0,0%,55%,.05)} !important;
    --sbb-color-smoke-default: \${#8d8d8d} !important;
    --sbb-color-storm-default: \${#a8a8a8} !important;
    --sbb-color-turquoise-default: \${#00a59b} !important;
    --sbb-color-violet-default: \${#6f2282} !important;
    --sbb-color-white-alpha-0: \${hsla(0,0%,100%,0)} !important;
    --sbb-color-white-alpha-20: \${hsla(0,0%,100%,.2)} !important;
    --sbb-color-white-alpha-30: \${hsla(0,0%,100%,.3)} !important;
    --sbb-color-white-alpha-50: \${hsla(0,0%,100%,.5)} !important;
    --sbb-color-white-alpha-60: \${hsla(0,0%,100%,.6)} !important;
    --sbb-color-white-alpha-70: \${hsla(0,0%,100%,.7)} !important;
    --sbb-color-white-default: \${#fff} !important;
}`},{url:["sbermegamarket.ru"],invert:['ymaps[class$="ground-pane"]']},{url:["scholar.google.*","scholar.google.*.*"],invert:['a[role="checkbox"] > :nth-child(2)','div[role="banner"] > a > span','a[aria-label="Homepage"]',".gs_ico",'img[src*="scholar_logo"]',"a#gs_hdr_lgo","a#gs_hdr_drw_lgo","span.gs_in_cb"]},{url:["schwab.com"],css:`.highcharts-background {
    background-color: var(--darkreader-neutral-background) !important;
}`},{url:["sci-hub.*"],ignoreImageAnalysis:["#raven","#logo"]},{url:["science.org"],invert:[".navbar-brand > .hidden-on-dark",".main-header__secondary__logo > img"],css:`h1.news-article__hero__title {
    color: var(--darkreader-neutral-text) !important;
}`},{url:["sciencebasedmedicine.org"],invert:[".site-logo"]},{url:["sciencedirect.com"],css:`body,
.gh-nav .gh-nav-action,
.search-button-link>.link-button.search-button-outline,
.link-button-secondary:not(.on-dark-background),
.button-link-primary,
.button-alternative-text,
.button-alternative-text:hover,
.bibliography,
.els-footer-content .anchor {
    color: \${#1f1f1f} !important;
}
#gh-cnt,
.accessbar-sticky,
.search-button-link>.link-button.search-button-outline,
.link-button-secondary:not(.on-dark-background) {
    background-color: var(--darkreader-neutral-background) !important;
}
.u-bg-grey1,
.u-bg-white,
.cookie-btn {
    background-color: \${#f5f5f5} !important;
}
.authors,
.gh-nav-help-anchor,
.publication-title-link,
.pps-count,
.pps-label,
.u-margin-s-bottom {
    color: var(--darkreader-neutral-text) !important;
}
.author-highlights,
#gh-drawer,
.popover-content-inner {
    background-color: var(--darkreader-neutral-background) !important;
}
.popover-content {
    background-color: rgba(50, 50, 50, .85) !important;
}
#gh-overlay {
    background-color: rgba(20, 20, 20, .85) !important;
}
.article-textbox {
    background-color: \${rgb(213, 211, 207)} !important;
}
.Article .topic-link {
    color: \${rgb(46, 50, 52)} !important;
    text-decoration-color: \${rgb(46, 50, 52)} !important;
}`},{url:["scipy-lectures.org"],invert:["img.math"]},{url:["scmp.com"],invert:[".header-menu-container__menu-top-left-wrapper",".global-menu-features__menu-icon",".global-menu-features__search-icon",".global-menu-features__close-icon",".social-button__twitter--active",".social-button__email--active",".footer-wrapper__logo"]},{url:["scpclassic.wikidot.com","scpexplained.wikidot.com","scpfoundation.net","scp-wiki.net","scp-wiki.wikidot.com","scp-wiki-cn.wikidot.com","scpko.wikidot.com","scpwiki.com","scp-ru.wikidot.com","scpfoundation.net"],css:`div#container-wrap,
.panel-body,
.content-panel {
    background-image: none !important;
}
div#container-wrap::before {
    background-image: url(https://scp-wiki.wdfiles.com/local--files/component:theme/body_bg.png) !important;
    content: "";
    height: 162px;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
}
.yui-navset .yui-nav a {
    background-image: none !important;
}`},{url:["scratch-wiki.info"],invert:[".sb3-comment-label",".sb3-literal-string",".sb3-literal-number"]},{url:["scratch.mit.edu/projects/*"],css:`path.blocklyFlyoutBackground {
    fill: rgb(32, 32, 32);
}`,ignoreInlineStyle:['g[data-argument-type="colour"] > path',".scratchColourPickerLabel + .goog-slider-horizontal",".color-button_color-button-swatch_37evk",".color-picker_row-header_173LQ + div > .slider_container_o2aIb"]},{url:["screenconnect.com","*.screenconnect.com"],css:`.OuterPanel .MainPanel .MasterPanel .MasterListContainer ul li.HasChildren > div > p {
    filter: brightness(100%) !important;
}`},{url:["scribd.com"],invert:[".logo",".document_container"]},{url:["scribe.rip","scribe.nixnet.services","scribe.citizen4.eu","scribe.bus-hit.me","scribe.froth.zone"],css:`body {
    background-color: var(--darkreader-neutral-background) !important;
}`},{url:["scribus.net"],invert:["#site-header img"]},{url:["script.google.com"],invert:[".docs-icon",".icon",".monaco-editor .cursors-layer > .cursor"],ignoreInlineStyle:["mask > *"]},{url:["scroll.com"],invert:["#content > div > div > header > div > div > div > a.Titlebar__wordMark___2U8-r.display__desktop___1Cfo7 > div > div > svg","#content > div > div > footer > div > div > div > div.layout__column___diAE2.layout__span-12___2a4Fw.layout__span___31pR0.layout__portrait-span-3___A34nc.layout__span___31pR0.layout__landscape-span-2___30F_p.layout__order-3___3WFlS.layout__portrait-order-0___108js.space__stack-xl___1oKsQ.flex__column___JnBPu.flex__flex___1N4XU.flex__align-stretch___2HAV3.flex__direction-column___fSYwh > div > div > div > svg"],css:`.Careers__logo___1kLq6 {
    z-index: 1 !important;
}`},{url:["scroll.morele.net"],invert:[".navbar-logo",".social-link"]},{url:["se.pl"],invert:[".mobile-bars"]},{url:["sea.playblackdesert.com"],invert:[".original .characteristic .desc",".original .characteristic h3",".original .characteristic .feature li span"]},{url:["sealegacy.org"],invert:[".custom-logo"]},{url:["seamonkey-project.org"],invert:['img[src*="logo.png"]'],css:`#breadcrumbs {
    background-image: none !important;
}`},{url:["sec.sangfor.com","sec.sangfor.com.cn"],invert:[".en-logo"]},{url:["secondlife.com"],invert:["nav > div > div > div[class$=-line]"],css:`div.hero-section.homepage.wf-section {
    z-index: 0;
}`},{url:["secure.ally.com"],invert:[".nobd-aob-day","#lp_invite","#manageNonAllyAccountsFrame .third-party-iframe","#billPayFrame"]},{url:["secure.fanboy.co.nz"],css:`html {
    background-image: none !important;
}`},{url:["secureage.com"],invert:[".logo-block"]},{url:["security.org"],invert:[".category-cards img",".featured-in img",".grid-x.stats img",".product-logo","a.brand",'section[id="our-top-picks"] img']},{url:["segmentfault.com"],invert:[".sf-header-logo",".sf-header__logo",".sf-logo",".navbar-brand"]},{url:["sejm.gov.pl"],css:`.main {
    background-image: none !important;
}`},{url:["sematext.com"],invert:["#logo",".sematext-clients-gamma figure"]},{url:["sembr.org"],css:`mark {
    color: var(--darkreader-neutral-text) !important;
}`},{url:["seminka-chilli.cz","chilli-shop.sk"],css:`#pannelWrapper {
    background-color: var(--darkreader-neutral-background) !important;
}`},{url:["semmle.com"],css:`#Header-logo * {
    fill: #ffffff !important;
}`},{url:["senscritique.com"],invert:[".d-media-videos::before",".eins-wish.black",".eins-logo-small",".header-navigation-main-item a img",".eins-search-header",".eins-poll",".eins-compass",".eins-compass-xl",".eins-notification",".eins-tv",".eins-ticket",".eins-current.black",".eins-done.green",".eins-done.white",".eins-newspaper",".juyLRn"],css:`.ecap-products-next,
.ecap-products-prev {
    background-color: hsla(100, 20%, 50%, .8) !important;
    color: \${black} !important;
}
.d-chevron3-b,
.d-chevron3-l,
.d-chevron3-r,
.d-chevron3-t {
    background-image: -webkit-image-set(url(https://static.senscritique.com/img/layout/icons/chevrons/chevron-size3.png?201710121789416) 1x,url(https://static.senscritique.com/img/layout/icons/chevrons/chevron-size3@2x.png?201710121789416) 2x);
}`},{url:["sephora.com"],invert:['img[alt="Sephora"]','img[src="/img/ufe/icons/stores.svg"]','img[src="/img/ufe/icons/community.svg"]','img[src="/img/ufe/icons/me32.svg"]','svg[data-at="basket_icon_large"]','div[aria-label$="stars"]']},{url:["septa.org"],invert:[".checked > label > div > .switch-marker",".clear-btn",".leaflet-control-attribution",".leaflet-popup",'.listbox-row[role="presentation"] > svg-icon',".map-container",".map-zoom-controls > button > i",".search-icon"],css:`.bg-black,
.is-frequent {
    background-color: var(--darkreader-neutral-text) !important;
    color: var(--darkreader-neutral-background) !important;
}
.bus,
.circle {
    border: 2px solid var(--darkreader-neutral-text) !important;
}
.leaflet-routes-pane > svg > g > path {
    stroke: #000 !important;
}
.leaflet-stops-pane > svg > g > path,
.trip-icon-container > svg > path {
    fill: #fff !important;
    stroke: #000 !important;
}`},{url:["server.pro"],invert:["svg.server-pro-logo"]},{url:["servercat.net"],invert:[".theme-header-logo"]},{url:["servercontrolpanel.de"],css:`body {
    background-color: transparent !important;
}`},{url:["setupbits.com"],invert:[".td-header-logo",".td-main-logo"]},{url:["sf-express.com"],invert:[".home-icon",".map",".order-btn"]},{url:["shaneco.com"],invert:[".logo-full"]},{url:["share.dmhy.org"],css:`.jmd_base td a {
    color: \${#3391ff};
}
.jmd .today a {
    color: \${#fff};
}`},{url:["sharedrop.io"],css:`.qr-code img {
    border: 10px solid white !important;
}`},{url:["sharepoint.com","*.sharepoint.com"],invert:["img.WACPageImg"],css:`.ms-FocusZone,
.ms-DetailsRow-cell,
.ms-Button {
    background-color: var(--darkreader-neutral-background) !important;
}
.ms-DetailsRow-cell,
.ms-FocusZone,
.ms-Button,
.od-ItemContent-title,
.ms-DetailsHeader-cellName {
    color: var(--darkreader-neutral-text) !important;
}
.ms-Button {
    border-color: \${#F0F0F0} !important;
}`},{url:["shazam.com"],invert:[".media.track::after"],css:`.google,
.apple-app-store {
    background-image: url(/resources/f6f457227917dcdfc9538fbbb5a931f111648b3d/sprite.png) !important;
}
button[data-shz-cmd="try"] {
    background-color: rgba(232, 230, 227) !important;
    color: rgb(29, 33, 34) !important;
}
.shz-frame-ux-playerbar-upsell-variant-b {
    --darkreader-bg--background-color: #1d2122 !important;
}`},{url:["shells.com"],invert:['img[alt="Shells Logo"]']},{url:["shields.io"],invert:["#app a","object"]},{url:["shimadzu.com"],invert:[".header-logo"]},{url:["shipstation.com","*.shipstation.com"],invert:['[class*="sub-item-icon"]','[data-testid*="note-icon"]','[class*="pill-content"]',".quantity-3CkoKmy"],css:`div[class*="status-text"] {
    background-color: var(--darkreader-neutral-background) !important;
}`,ignoreInlineStyle:['[class*="pill"]','[class*="color-button"]','[class*="dropdown-toggler-color"]']},{url:["shoecarnival.com"],invert:[".jss140"]},{url:["shop.dr-rath.com"],css:`.colored-header-desktop {
    background-color: var(--darkreader-neutral-background) !important;
}`},{url:["shop.surfboard.com"],invert:["img.header-logo-image"],css:`.homepage {
    background-image: none !important;
}
.sb-searchpro .input-group .btn {
    background-color: \${#fee9a4} !important;
}`},{url:["shopify.com","shopify.dev"],invert:[".marketing-nav--skin-light > .marketing-nav__logo",".shopify-logo",".header-country-select__trigger",".lia-message-count::before",".DateTime::before"]},{url:["shoppy.gg"],invert:[".footer-profile__logo"]},{url:["shorthistory.org"],invert:[".td-logo > .td-main-logo > .td-retina-data"]},{url:["signal.org"],invert:[".navbar-item .icon",".signal-logo"]},{url:["signin.ea.com"],ignoreInlineStyle:["svg *"]},{url:["signin.nianticlabs.com"],invert:['img[alt="Niantic"]']},{url:["signulous.com"],invert:[".checkbox input:checked"],css:`.checkbox input:checked {
    background-color: white;
}`},{url:["simepar.br"],css:`.highcharts-text-outline {
    display: none !important;
}`},{url:["similarweb.com"],invert:[".app-header__logo"]},{url:["simplemachines.org"],invert:["h1.forumtitle"],css:`#header div.frame,
#header,
span.botslice span,
span.botslice,
span.topslice,
span.topslice span,
#content_section,
#content_section div.frame,
span.lowerframe,
span.lowerframe span,
div.title_bar,
h4.titlebg,
h3.titlebg,
h4.catbg,
h4.catbg2,
h3.catbg,
h3.catbg2,
.table_list tbody.header td.catbg {
    background-image: none !important;
}`},{url:["simply-v.de"],css:`body {
    background-image: none !important;
}`},{url:["simracingmachines.com"],invert:['slider-component div.media.media--transparent > img[class="multicolumn-card__image"][src*=".png" i]'],css:`.gradient {
    background: var(--darkreader-neutral-background) !important;
}`},{url:["singularlabs.com"],invert:['img[alt="SingularLabs"]']},{url:["sio2.staszic.waw.pl"],invert:[".texmath"]},{url:["sitecheck.sucuri.net"],invert:[".icon",".logo"]},{url:["sklepbiegacza.pl"],invert:[".header__logo",".button__icon",".main-slider__nav-item",".homepage__brand-logo",".footer__list-image","img.footer__image[src*=cash]",".product__brand-logo",".paypo-info__button"]},{url:["skycash.com"],css:`.c-hero__newsletter {
    background-image: none !important;
}`},{url:["skyscanner.*","skyscanner.*.*","backpack.github.io","tianxun.cn","whoflies.com"],css:`body {
    background: \${white} !important;
}
[class*=bpk-flare-bar__curve] {
    fill: \${white} !important;
}`},{url:["slack.com"],css:`.c-slacklogo svg path:first-child {
    fill: var(--darkreader-selection-text) !important;
}
.c-button:not(.v--primary, .v--secondary) {
    background: inherit !important;
    color: inherit !important;
}
.c-button:not(.v--primary, .v--secondary):hover {
    text-decoration: underline !important;
}`},{url:["slackware.com"],css:`body {
    background-image: none !important;
}
td[bgcolor="#000000"] {
    border: 1px solid !important;
}`},{url:["slader.com"],invert:[".navigation__logo",".explanation",".solution-cell img",".solution-content img",".answer img"]},{url:["slashnet.wordpress.com"],css:`#container,
.entry,
body {
    background-image: none !important;
}`},{url:["slazag.pl"],invert:[".focus__portals__banner__single",".footer__title__wrapper",".logo__wrapper",".social-bar",".triangle-slazag-svg","img.section-bg-absolute"]},{url:["smallcultfollowing.com"],css:`*:not(a) {
    color: var(--darkreader-neutral-text) !important;
}`},{url:["smap.uthm.edu.my"],css:`.slider-background {
    background: none !important;
}
.backstretch {
    opacity: 0.5 !important;
}`},{url:["smcdsb.elearningontario.ca"],css:`:host([no-padding-footer]) .d2l-dropdown-content-footer,
:host([no-padding-header]) .d2l-dropdown-content-header,
:host([no-padding]) .d2l-dropdown-content-container {
    background: var(--darkreader-neutral-background);
}`},{url:["smithsonianmag.com"],invert:[".site-logo",".footerLogo > a > img","#mobile-icon > span"]},{url:["smoglab.pl"],css:`.main-nav,
.footer,
.module-title .main-title {
    background-image: none !important;
}`},{url:["smokin-guns.org"],css:`#page-body .smoke-grid-9 .inner {
    background-image: none !important;
}`},{url:["smtp2go.com"],invert:["canvas"]},{url:["smzdm.com"],invert:["#logo",".logo-left"]},{url:["snack.expo.io"],css:`#root > div > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(2) {
    background-color: white !important;
}`},{url:["snapcraft.io"],css:`#search-docs {
    background-image: none !important;
}`},{url:["snapeda.com"],invert:['img[title="SnapEDA"]',"img.part-organization","canvas:not(#firstfootprint)"]},{url:["softorage.com"],css:`.tg {
    background-image: linear-gradient(36deg,#fc466b,#3f5efb) !important;
}`},{url:["softpedia.com"],ignoreImageAnalysis:[".menubar-hp span.logov","h1.logov"]},{url:["soha.vn"],invert:[".page-head__right .head-hanhtrinh img"],css:`.page-body .page-head,
.page-menu,
.page-top,
.sh_home20-wrapper,
.sh_home20-wrapper .shcategory.layout-bd-nonebg,
.sh_home20-wrapper .shnews_box .noticable-news,
.sh_home20-wrapper .shnews_box .reviewer .list-cmt .item-cmt,
.news-detail .share {
    background-color: var(--darkreader-neutral-background) !important;
}
.sh_home20-wrapper .shnews_box .shnews_title,
.sh_home20-wrapper .sh_hotnews .hotnews-label a,
.news-detail .news-title,
.news-content p,
.list-topic-cate .item-news-cate .title-new-cate,
.itembigs .related-special-news .item-related-news:first-child,
.itembigs .related-special-news .item-related-news:first-child a,
.rowccm li.tincungmucfocus .info h4.ksclili-title a {
    color: var(--darkreader-neutral-text) !important;
}
.page-head,
.page-top {
    background-image: none !important;
}`},{url:["sony.*"],ignoreInlineStyle:[".brand-logo-svg > g"]},{url:["soulsplanner.com"],css:`.form-controls input[type="checkbox"]:not(:checked) + label::before {
    color: transparent !important;
}`},{url:["soundcloud.com"],invert:[".notificationIcon.messages::before"],css:`.listenEngagement,
.commentForm__wrapper {
    border: none !important;
}
body,
.commentForm__wrapper,
.searchTitle {
    background: none !important;
}
.sc-classic .header__navMenu > li > a {
    border-right-color: #454545 !important;
}
.headerSearch__input {
    background: \${#f1f4f6} !important;
}`},{url:["souq.com"],invert:['img[src*="/souqAmazon-logo-v2"]','li.fashion-menu-link[aria-expanded="false"]',".userNameField::after",".filter-icon.deals",".cart-icon"]},{url:["source.dot.net"],css:`.r {
    border-style: none !important;
}`},{url:["sourceforge.net"],css:`.intro,
.audience {
    background-image: none !important;
}
.all-facets,
.m-project-search-results {
    background-color: \${white} !important;
}`},{url:["sourcegraph.com"],invert:[".header__logo"],css:`body {
    background-image: none !important;
}`},{url:["sourcing.hktdc.com"],invert:[".logo"]},{url:["southparkstudios.com","southpark.de"],css:`:root {
    --page-background: var(--darkreader-neutral-background) !important;
}`},{url:["soylent.com"],invert:[".header-logo__image",".d-header #site-logo"]},{url:["space.bilibili.com"],invert:[".count::before"]},{url:["spaceweather.com"],invert:['[src$="current_conditions.jpg"]','[src$="center_tablebg_top_r2_c1.jpg"]'],css:`[background] {
    background-image: none !important;
}`},{url:["spanish.kwiziq.com"],css:`.bg-clouds {
    background-image: none !important;
}
.table-scroll-shadow-wrapper table td,
.table-scroll-shadow-wrapper table th,
.table-scroll-shadow-wrapper table tr {
    mix-blend-mode: normal !important;
}`},{url:["spboms.ru"],css:`body {
    background: var(--darkreader-neutral-background) !important;
}`},{url:["spc.noaa.gov"],css:`body {
    background-image: none !important;
}`},{url:["spdx.org/licenses"],invert:[".gray-diagonal","#logo"]},{url:["spectrum.com"],invert:['img[src$="spectrum-logo.svg"]'],css:`.sp-background-image {
    background-image: none !important;
}`},{url:["spectrum.ieee.org"],invert:['a[title="Spectrum Logo"] > svg']},{url:["spectrum.net"],invert:[".banner-wrapper > .image-container",'img[src$="spectrum-logo.svg"]'],css:`.unauthenticated-homepage {
    background-image: none !important;
}`},{url:["speed.cloudflare.com"],invert:['img[src*="speedrabbit-animate.gif"]','img[src*="speedrabbit-static.png"]']},{url:["speeddial2.com"],invert:['img[src*="images/"]']},{url:["spidersweb.pl"],invert:[".amp-site-title",'img[alt="logo bizBlog"]','img[alt="bizblog to ludzie"]']},{url:["spidersweb.pl/plus"],invert:['a[href="/plus"] svg']},{url:["spidersweb.pl/rozrywka"],invert:['a[href="/rozrywka"] svg'],css:`a[href="/rozrywka"] svg path[fill="#211D26"] {
    --darkreader-inline-fill: \${white} !important;
}`},{url:["sports.ru"],invert:[".nav-top-line__logo"]},{url:["sporza.be"],css:`.sc-score,
.sc-score__away,
.bouton:hover {
    color: \${#222} !important;
}
.sc-score__wrapper {
    background-color: \${#BBB} !important;
}
.bouton {
    color: \${#fff} !important;
}
.sc-epg--live .sc-epg__program {
    background-color: \${#CCC} !important;
}
.vrt-newsletter {
    background-color: \${#EEE} !important;
}
.vrt-site-footer .vrt-newsletter .vrt-link--newsletter {
    background-color: \${#AAA} !important;
}
.logo__letters {
    fill: var(--darkreader-neutral-background) !important;
}
.vrt-link {
    background-color: \${rgba(255, 165, 0, 0)} !important;
    color: \${rgba(50, 50, 50)} !important;
}
.vrt-link:hover {
    background-color: \${rgb(100, 100, 100)} !important;
}
.vrt-site-footer__navigation--green {
    background-color: \${#AAA} !important;
    color: var(--darkreader-neutral-background) !important;
}`},{url:["spreadprivacy.com"],invert:['[src^="https://spreadprivacy.com/content/images/2017/07/linux"]','[src^="https://spreadprivacy.com/content/images/2017/11/Significant-Actions"]','[src^="https://spreadprivacy.com/content/images/2018/09/ddg-traffic"]','[src^="https://openclipart.org/image/24px/svg_to_png/28768/qubodup-Cubikopp-smilies"]','[src="https://spreadprivacy.com/content/images/2017/10/smiley.png"]','[src="https://spreadprivacy.com/content/images/2018/09/private-browsing4.png"]','[src="https://spreadprivacy.com/content/images/2017/10/https-in-address-bar26.png"]','[src="https://spreadprivacy.com/content/images/2018/01/private-browsing-reasons-1.png"]','[src="https://spreadprivacy.com/content/images/2020/05/search-preference-menu_heatmap.jpg"]','[src="https://spreadprivacy.com/content/images/2020/10/trilateral-invitation_header-1.png"]','[src="https://spreadprivacy.com/content/images/2020/05/search-preference-menu_comparison-1.jpg"]','[src="https://spreadprivacy.com/content/images/2020/05/search-preference-menu_screen-sizes-1.jpg"]','[src="https://spreadprivacy.com/content/images/2020/02/Awareness-of-Privacy-Risk-of-Public-USB-Charging-.jpg"]','[src="https://spreadprivacy.com/content/images/2018/02/DuckDuckGo-Extension_Desktop-OnDevice.jpg"]']},{url:["sqlitebrowser.org/stats"],ignoreInlineStyle:[".plot-container.plotly *"]},{url:["squareup.com"],invert:[".logo"]},{url:["src.fedoraproject.org","pagure.io"],ignoreInlineStyle:["#cal-heatmap svg rect"]},{url:["ssllabs.com"],invert:["#logo"]},{url:["sso.qiniu.com"],invert:[".navbar-brand"]},{url:["stablediffusionweb.com"],invert:['img[src="https://r2.stablediffusionweb.com/images/background-faqs.jpg"]']},{url:["stackage.org"],invert:[".logo"]},{url:["stackexchange.com","askubuntu.com","mathoverflow.net","serverfault.com","stackapps.com","stackoverflow.com","superuser.com","*.stackexchange.com"],invert:["._glyph:not(.top-bar .-logo ._glyph)",".favicon-mathoverflow",".favicon-mathoverflowmeta",".favicon-stackoverflowmeta",'.h-auto[alt="Academia"]','.h-auto[alt="Anime & Manga"]','.h-auto[alt="Ask Different"]','.h-auto[alt="Aviation"]','.h-auto[alt="Code Review"]','.h-auto[alt="Electrical Engineering"]','.h-auto[alt="English Language Learners"]','.h-auto[alt="Japanese Language"]','.h-auto[alt="MathOverflow"]','.h-auto[alt="Mathematics"]','.h-auto[alt="Server Fault"]','.h-auto[alt="Skeptics"]','.h-auto[alt="Software Engineering"]','.h-auto[alt="Stack Apps"]','.h-auto[alt="Super User"]','.h-auto[alt="The Workplace"]','.h-auto[alt="Theoretical Computer Science"]','.h-auto[alt="Unix & Linux"]','.h-auto[alt="Web Applications"]','.h-auto[alt="Role-playing Games"]',"a.js-gps-track::before",'img[alt="The Stack Exchange Network"]','button[class^="js-vote"]'],css:`body,
#content {
    background-color: var(--darkreader-neutral-background) !important;
    background-image: none !important;
    border-color: var(--darkreader-bg--theme-primary-custom) !important;
}
.profile-cards--graph {
    background-image: repeating-linear-gradient(0deg, transparent, transparent 13px, \${#e4e6e8} -13px, \${#e4e6e8} 21px) !important;
}
.c-pointer {
    color: grey;
}
.js-accepted-answer-indicator.fc-green-500 {
    color: var(--green) !important;
}
#newuser-box {
    background-color: \${#FFF8DC} !important;
}
.topbar .icon-site-switcher-bubble {
    background-repeat: no-repeat !important;
}
div.h100.bar-lg.p-bs-wrapper:has(a[href="/questions"]) {
    background: linear-gradient(0deg, #502502 30%, #FFFFFF) !important;
}
div.h100.bar-lg.p-bs-wrapper:has(a[href="https://stackoverflow.co/teams"]) {
    background: linear-gradient(0deg, hsl(209,100%,26%) 30%, #FFFFFF) !important;
}
button[class^="js-vote"] {
    border-color: var(--darkreader-dark-background) !important;
}`,ignoreInlineStyle:[".chess-replayer-board td"],ignoreImageAnalysis:[".hero-background"]},{url:["standards.ieee.org"],invert:[".logo-link"]},{url:["stardewvalleywiki.com"],css:`html {
    background: none !important;
}`},{url:["stardock.com"],invert:[".mid",".careers"]},{url:["start64.com"],invert:['img[alt="logo"]']},{url:["startech.com.bd"],invert:["#nav-toggler"]},{url:["startpage.com"],invert:[".hamburger-menu .hamburger-button"],ignoreImageAnalysis:[".home__section__search-logo",".header__logo",".header-settings__logo",".hamburger-menu .hamburger-button"]},{url:["stat.utels.ua"],css:`img[src="/i/btm_m1.gif"],
img[src="/i/top_m1.gif"] {
    display: none !important;
}
[style*="background: url(\\"/i/box"],
td[background="/i/cntr_m1.gif"] {
    background-image: none !important;
}`},{url:["station-drivers.com"],invert:['img[src*="/topic_icons/"]','img[src*="/folder_icons/"]','img[src*="/images/bios_firmware"]','img[src*="/images/driver.jpg"]','img[src*="/images/utile"]','img[src*="/images/rating"]','img[src*="/images/star"]','img[src*="/images/downl"]','img[src*="/components/com_remository/images/file_icons/"]','img[src*="/images/gohome.gif"]']},{url:["stats.arp242.net"],invert:[".chart-line"]},{url:["stats.stackexchange.com"],css:`.site-header {
    background-image: none !important;
}`},{url:["status.aws.amazon.com"],invert:[".logo",".tabStandard","td > img","td > a > img","th > a > img","th > div > a > img"],css:`.tabStandard a {
    color: \${white} !important;
}
.tabStandard,
.selected a {
    background-color: \${black} !important;
    color: \${white} !important;
}
tbody > tr > th {
    background: transparent !important;
}
table > tbody > tr > td {
    background: transparent !important;
}
.gradient {
    background: transparent !important;
}`},{url:["status.epicgames.com"],invert:["div.eg-shield.white"]},{url:["status.npmjs.org"],invert:[".logo-container > a > img"]},{url:["statusinvest.com.br"],invert:["div.indice-list div.ml-1","div.indice-list div.mt-2","i.ml-1"]},{url:["steamdeck.com"],invert:["section#available-now div.col_9","section#experience div.col_8","section#experience h2","section#topfeature div.col_5"],css:`section#available-now {
    background-color: \${#0f0f0f} !important;
}`,ignoreInlineStyle:["#header-logo-arc"]},{url:["stevendoesstuffs.dev"],invert:[".post-img-wrapper img"]},{url:["stine.uni-hamburg.de"],css:`.appointment {
    background-color: var(--darkreader-neutral-background) !important;
    background-image: none !important;
}`},{url:["stm.info"],invert:[".map-OSM"]},{url:["stockbit.com"],invert:["#landing-logo img",".footer-logo img",".konvajs-content canvas"],css:`.highlight {
    background-color: var(--darkreader-neutral-background) !important;
}`},{url:["stolichki.ru"],invert:[".logoBig__img",'ymaps[class$="ground-pane"]','ymaps[class$="svg-icon-content"] > ymaps','ymaps[class$="placemark__content-inner"] > ymaps > ymaps']},{url:["stooq.pl"],css:`a[href="//stooq.pl"] path:not([fill]) {
    fill: var(--darkreader-neutral-text) !important;
}`},{url:["store.google.*","store.google.*.*"],css:`[style*="background-image"] {
    filter: brightness(50%) sepia(40%) !important;
}`},{url:["store.playstation.com"],invert:[".psw-brand-text--playstation-store"]},{url:["store.ubi.com"],invert:["div.primary-logo"],css:`.pt_storefront-homepage #main .homepage-slider-wrapper .homepage-custom-slide > a:not(a[href$="/deals"]) .homepage-custom-slide__content .custom-slide-inner h2,
.pt_storefront-homepage #main .homepage-slider-wrapper .homepage-custom-slide > a:not(a[href$="/deals"]) .homepage-custom-slide__content .custom-slide-inner h3,
.pt_storefront-homepage #main .homepage-slider-wrapper .homepage-custom-slide a {
    color: var(--darkreader-neutral-background) !important;
}
.pt_storefront-homepage #main .homepage-slider-wrapper .homepage-custom-slide > a[href$="/deals"] .homepage-custom-slide__content .custom-slide-inner h3 {
    color: var(--darkreader-neutral-text) !important;
}`},{url:["storyteller.fit"],invert:['img[src*="icon"]']},{url:["storytellphys.wordpress.com"],invert:["img"]},{url:["straightdope.com"],css:`body {
    background: var(--darkreader-neutral-background) !important;
}`},{url:["strava.com","*.strava.com"],invert:[".labelGroup","#effort-box",".week.clearfix svg","#compare-graph svg","#compare-graph canvas",".nav-item a::after",".weekly-goal svg .sport-type",'footer img[alt="Strava"]',".activity-indicator",".icon-other","#open-global-search-button",".icon-caret-up",".icon-caret-down",".icon-share",".icon-kudo",".icon-comment",".icon-collapse",".icon-star",".icon-caret-right",".btn-icon.remove",".icon-private",".icon-group","text.label",".leaflet-control-zoom-in",".leaflet-control-zoom-out"],css:`.base-chart .grid-line,
#athlete-history-chart .vgrid {
    stroke: #555555;
}
#athlete-history-chart #effort-box {
    fill: #3e3e3e;
    stroke: black;
}
#basic-analysis .xaxis-container .background,
#basic-analysis rect.static-info-box,
#basic-analysis rect.static-label-box {
    fill: #2c2c2c;
}
.base-chart rect.simple-bar.segmentbar {
    opacity: 1;
}
.base-chart rect.simple-bar {
    fill: #444444;
    stroke: #252627;
}
.current-week-label {
    fill: black;
}
.sum.no-rest {
    fill: black;
}
.options img {
    filter: invert(40%);
}
#infoBox text {
    color: black;
}
.weekly-goal svg .sport-type {
    opacity: 0.5 !important;
}
svg {
    fill: currentColor;
}
[class*="sauce"]:not(.sauce-invoke) {
    background: transparent !important;
}
[class*="sauce"] input,
.sauce-header {
    color: inherit !important;
}
rect.static-label-box,
.xaxis-container text {
    fill: inherit !important;
}
[class*="sauce"] tr:hover {
    background: inherit !important;
}
#sauce-kudo-all button {
    background-color: \${rgba(199, 198, 199, 0.5)};
}`,ignoreImageAnalysis:[".app-icon.icon-fb",".app-icon.icon-rowing"]},{url:["streamable.com"],invert:[".customer-logos",".landing .features-pane .feature > span > svg",".landing .logo",".landing .start-pane .start-form .try-arrow > img",".swoosh","#player.container .actions-section .logo","#player-play-pause-button","#player-progress-track","#player-progress-value"]},{url:["student.ladok.se"],css:`#sidomeny .middle {
    background: var(--darkreader-neutral-background) !important;
}`},{url:["studeo.fi"],invert:[".equation"]},{url:["studio.youtube.com"],invert:["paper-radio-button",".ytcp-home-button"]},{url:["studip.uni-passau.de"],css:`#layout_container > div {
    background-image: none;
}`},{url:["studyflix.de"],invert:["img[title='Rendered by QuickLaTeX.com']"]},{url:["subdivx.com"],invert:["#cabecera img","#contenedor_foro .cita img",'#contenedor_foro .datos img[src*="/img/"]','#perfil_izq img[src*="img/"]'],css:`BODY * {
    color: \${#333};
}
A {
    color: \${#0366d6} !important;
}
input[type="text"],
input[type="password"],
input[type="button"],
input[type="submit"] {
    background: \${#bbb};
    border: 1px solid #999;
}
input[type="submit"]:hover {
    background: \${#999};
    border: 1px solid #999;
}
mark {
    background: \${#f00} !important;
    color: \${#fff} !important;
}
#barra a,
#menu_largo a,
#menu_largo_chat a,
#foro_tema_menu a,
#ultimos_foros_renglon .link_foro_tema,
.titulo_menu_izq {
    color: #ddd !important;
}
#wrapper {
    background-image: none !important;
}
#contenedor_gral {
    background: \${#e0e0e0} !important;
    box-shadow: rgba(0, 0, 0, 0.7) 0px 0px 8px;
    display: table;
    height: -webkit-fill-available !important;
    width: fit-content !important;
}
#cabecera {
    background: \${#e4e4e4};
}
#barra,
#menu_top,
#menu_detalle_buscador,
#menu_detalle,
#menu_largo,
#menu_largo_chat,
#prog_menu_detalle,
#primer_msg_voto,
#reg_menu_detalle,
#drdivx_menu_detalle,
#contenedor_foro .fecha,
#perfil_menu,
#foro_tema_menu {
    background: \${rgb(153,173,206)} !important;
    background: linear-gradient(to bottom, \${rgb(153,173,206)} 0%, \${rgb(75,110,171)} 100%) !important;
}
#foro_home,
#foro_home_renglon,
#cuadrados_izq,
#cuadrados_izq_reng,
#chat_reng,
#contenedor_foro,
#contenedor_foro .datos,
#contenedor_foro .cita,
#contenedor_foro .mensaje {
    background: \${#fff} !important;
}
#foro_home_datos,
#cuadrados_izq {
    color: \${#999} !important;
}
#foro_home_datos a {
    color: \${#669} !important;
}`},{url:["subiektywnieofinansach.pl"],invert:[".logo"]},{url:["submarinecablemap.com"],invert:["#map"]},{url:["subscene.com"],css:`body {
    background-image: none !important;
}`},{url:["suckless.org"],invert:['[src="dwm.svg"]','[src="st.svg"]','[src="core.svg"]','[src="surf.svg"]','[src="blind.svg"]','[src="farbfeld.svg"]','[src="quark.svg"]','[src="sent-bullets-s.png"]','[src="slstatus.svg"]']},{url:["sugaroutfitters.com"],css:`.clearfix {
    display: none !important;
}`},{url:["suggestions.momentumdash.help"],css:`#__next > div {
    --color-bg-body: var(--darkreader-neutral-background) !important;
    --color-bg-default: var(--darkreader-neutral-background) !important;
    --color-bg-emphasize: \${#ccc} !important;
}`},{url:["suite.smarttech-prod.com"],invert:[".smart-wbp-canvas-layer"]},{url:["suno.com.br"],invert:["#logoSuno > a > svg"]},{url:["superbuy.com"],invert:[".header-logo",".logo img"]},{url:["supercoach.heraldsun.com.au"],ignoreInlineStyle:["svg *"]},{url:["support.arkadium.com"],invert:['img[alt="Logo"]']},{url:["support.discord.com"],invert:[".logo img","ol.breadcrumbs li:first-child::before"]},{url:["support.eset.com"],invert:["i.table-icon.product"]},{url:["support.heymman.com"],invert:['img[src*="logo.png"]']},{url:["support.mozilla.org"],invert:[".card--topic .card--icon",".card--icon-sm","div.sumo-nav--logo",".pencil",".thumbsup"]},{url:["surfboard.com"],invert:[".site-logo"]},{url:["surveymonkey.com"],css:`.is-high-contrast .radio-button-display,
.is-high-contrast .checkbox-button-display {
    opacity: 1 !important;
}
.modern-browser .radio-button-display::after,
.modern-browser .checkbox-button-display::after {
    border-color: var(--darkreader-neutral-text) !important;
}`},{url:["sverigesradio.se"],invert:["#sprite-check","#sprite-facebook","#sprite-instagram","#sprite-reddit","#sprite-twitter","#sprite-whatsapp",".circle",".cross",".default",".episode-list-item__controls svg",".external-link-with-icon__icon",".gallery-button .icon",".gallery-button svg g",".info-teaser-container__title h2",".link-icon .icon",".local-weather-item__wind-icon",".logo",".menu-icon.icon",".play-icon__pause-symbol",".play-icon__play-symbol",".progress.queue-progress .bar",".sr-link__svg svg",".sr-logo-wrapper",".sound-bars .bar",".support-info__icon svg",'[data-require="modules/custom-click-tracking"] svg','[data-require="modules/listen-later"] svg','[data-require="modules/share-button"] svg',"button.reset",'input[type="range"]::-moz-range-thumb','input[type="range"]::-moz-range-track','input[type="range"]::-webkit-slider-runnable-track','input[type="range"]::-webkit-slider-thumb'],css:`.weather-icon {
    filter: invert(1) hue-rotate(180deg) !important;
}
.live-marker .dot,
.live-label::before,
.active::before {
    background-color: var(--darkreader-neutral-text) !important;
}
.search-page em,
.search-result em,
.info-teaser-container__title {
    color: var(--darkreader-neutral-background) !important;
}
#sprite-home path,
#sprite-news path,
#sprite-podcast path,
#sprite-direct path,
#sprite-profile path {
    fill: var(--darkreader-neutral-text);
}`},{url:["svt.se"],invert:["header img[src*=svt]",".nyh_navigation__menu-toggle",'[class^="VideoPlayerTheme__play-pause-button-simple"]::before','[class^="_play-pause-button-simple"]::before'],css:`.nyh_breaking__top-prefix,
.nyh_teaser__live-text {
    color: var(--darkreader-neutral-background) !important;
}
button[class^="PaginationButton"],
a[class^="PaginationButton"],
.nyh_screamer,
[class^="_RightNowTeaser__title"],
[class^="_RightNowTeaser__root"] {
    background: var(--darkreader-bg--nyh-color-white) !important;
    border-left-color: var(--darkreader-bg--nyh-color-news);
}
button[class^="PaginationButton"]:hover,
a[class^="PaginationButton"]:hover {
    background: var(--darkreader-border--color-play-white) !important;
}
.flexbox .nyh_teaser.nyh_teaser--group-secondary {
    border-right: none !important;
}
[class*="GroupSecondaryTeasers__container___"],
.nyh_feedbox-item+.nyh_feedbox-item,
.nyh_teaser.nyh_teaser--no-border-top {
    border-top: none !important;
}
.nyh_navigation .nyh_submenu::before {
    border-bottom-color: var(--darkreader-bg--nyh-color-white) !important;
}
.nyh_teaser.nyh_teaser--story-grid,
.nyh_icons_caret--factbox {
    border: none;
}
.nyh_submenu-menucard,
[class*="_Post__contentVisitor___"]::after {
    border-right-color: var(--darkreader-bg--nyh-color-grey-lighter) !important;
}
[class*="CurrentTopics__item___"],
[class*="GroupSecondaryTeasers__showMoreButton___"],
.nyh_mobile-menu__list-item,
.nyh_menu-card__submenu-item,
.nyh_submenu-menucard,
.nyh_submenu {
    border-color: var(--darkreader-border--nyh-color-grey-lighter) !important;
}
.nyh_fact-box {
    border-bottom: 1px solid var(--darkreader-border--nyh-color-grey-lighter);
    border-top: 1px solid var(--darkreader-border--nyh-color-grey-lighter);
}
.nyh_fact-box__body--closed::after {
    background: linear-gradient(to bottom, #1e202180 0%, #1e2021 100%);
}
.nyh_regional-widget-regions {
    background: var(--darkreader-bg--nyh-color-grey-lightest);
}
.nyh_submenu-menucard {
    background-color: var(--darkreader-bg--nyh-color-white);
}`},{url:["sw.kovidgoyal.net"],css:`.sidebar-drawer,
.sidebar-search,
.toc-drawer {
    background: var(--darkreader-neutral-background) !important;
}
.sidebar-tree a.current,
.sidebar-tree label:hover {
    background: var(--darkreader-selection-background) !important;
}
code {
    background: var(--darkreader-neutral-background) !important;
}`},{url:["swiatrolnika.info"],invert:['img[alt*="logo"]','img[src*="/images/images2/icons/"]']},{url:["system76.com"],invert:['svg[class^="sys-logo"]']},{url:["systemd.io"],invert:[".page-logo img"]},{url:["t-mobile.pl"],invert:['img[src*="quick-redirects"]',".text-base-black ::before"],css:`.preview-image,
.inner-container,
.bg-base-secondary-10 {
    background-image: none !important;
}`},{url:["t.bilibili.com"],css:`.bg,
.bgc {
    background: var(--darkreader-neutral-background) !important;
}`},{url:["t.me","telegram.me"],invert:[".tgme_logo"]},{url:["tableau.com"],invert:[".feature-list__icon",".mobile-nav-button__icon",".site-logo"],css:`section {
    background-image: none !important;
}`},{url:["tablesgenerator.com"],invert:[".icon-all-borders.toolbar-icon",".icon-no-borders.toolbar-icon",".icon-edit-borders.toolbar-icon",".icon-merge-cells.toolbar-icon",".icon-split-cells.toolbar-icon",".icon-no-colors.toolbar-icon"],ignoreInlineStyle:[".sp-thumb-inner",".sp-preview-inner"]},{url:["tabletochki.org"],invert:[".perekaz__list img"]},{url:["tabs.ultimate-guitar.com"],invert:[".ddUoc",".JZg5a"]},{url:["tails.net"],invert:[".blocks .block img",".laptop"],css:`body {
    background-image: none !important;
}
#donate-banner p {
    color: var(--darkreader-neutral-background) !important;
}
#donate-banner u {
    border-bottom-color: var(--darkreader-neutral-background) !important;
}`,ignoreImageAnalysis:["#donate-banner"]},{url:["tailwindcss.com"],css:`.bg-white:not(#docsearch),
.bg-gray-100 {
    --bg-opacity: none !important;
}
.text-gray-900,
.hover\\:text-gray-900:hover,
h1,
h2,
h3,
h4,
h5,
h6 {
    --text-opacity: none !important;
}
.bg-center {
    background: none !important;
}`},{url:["tailwindui.com"],css:`html > body > div > div > img {
    opacity: 0 !important;
}`},{url:["take-a-screenshot.org"],invert:[".switch-window span::before"]},{url:["talishar.net"],css:`._ourTurn_199aw_35 {
    background-image: url("https://talishar.net/assets/turnWidget-Normal-89240b8d.png") !important;
}
._pitchBackground_1574e_15 {
    background-image: url("https://talishar.net/assets/symbol-resource-bca42b67.png") !important;
}`},{url:["taobao.com"],invert:["#J_SearchIcon",".J_MyShopCoupon",".J_BtnEditSKU",".cart-checkbox"],css:`.tbh-member.J_Module {
    background-image: none !important;
}
#q.search-combobox-input {
    background-color: var(--darkreader-neutral-background);
}
.qrcode-img {
    background-color: white !important;
}`},{url:["tapology.com"],invert:[".logo","ul.feedCats"],css:`ul.feedCats li a:link,
ul.feedCats li a:visited {
    color: var(--darkreader-neutral-background) !important;
}`},{url:["tarnogorski.info"],invert:[".td-main-logo"]},{url:["tasks.google.com"],invert:['div[role="listitem"] > div > div > div[role="presentation"]']},{url:["tass.ru"],invert:['div[class^="LogoImage_logo"] > svg > path','button[class^="Footer_icon_app_store"] > svg > g > path:last-of-type'],css:`div[class^="ds_ext_carousel"] {
    background-color: var(--darkreader-neutral-background) !important;
}`},{url:["tastoid.com/"],css:`.jumbotron.jumbotron-no-bg {
    background: var(--darkreader-neutral-background) !important;
}`},{url:["tc39.es"],css:`var {
    color: \${#218379} !important;
    mix-blend-mode: normal !important;
}`},{url:["tcrf.net"],css:`body {
    background-image: none !important;
}`},{url:["teamtrees.org"],css:`.hypeTemplate_tano {
    background-color: \${white} !important;
}`},{url:["techmaniak.pl","activemaniak.pl","agdmaniak.pl","appmaniak.pl","blogomaniak.pl","fotomaniak.pl","gizmaniak.pl","gsmmaniak.pl","luxmaniak.pl","mobimaniak.pl","rtvmaniak.pl","tabletmaniak.pl"],css:`body,
#headerNavBlogomaniak,
#header,
#top,
#bottom,
#footer,
#footer_menu,
.wrapper,
#search input.search {
    background-color: var(--darkreader-neutral-background) !important;
    background-image: none !important;
}`},{url:["technologyreview.com"],invert:['a[class^="headerTemplate__logo"]']},{url:["techpowerup.com"],invert:[".page-header__logo"]},{url:["techspot.com"],invert:["svg#techspot-logo"]},{url:["telegeography.com"],invert:[".map-tile-loaded","div#globe-start > canvas","div#globe-end > canvas","div.leaflet-map-pane","img.map-banner","div.mapboxgl-map","span.hamburger-box",'a > img[src^="https://www2.telegeography.com/hubfs/"]','img[alt="TeleGeography"]']},{url:["teleman.pl"],invert:[".movieRank"]},{url:["telerik.com"],invert:["a.TK-Aside-Menu-Link","a.TK-Aside-Menu-Button","#ContentPlaceholder1_C377_Col00 > img"],css:`a.TK-TLRK-Logo svg path[fill="#7c878e"] {
    --darkreader-inline-fill: \${black} !important;
}
a.TK-TLRK-Logo svg path[fill="#4b4e52"] {
    --darkreader-inline-fill: \${black} !important;
}
a.TK-PRGS-Logo-Footer svg path[fill="#4b4e52"] {
    --darkreader-inline-fill: \${black} !important;
}
#ContentPlaceholder1_C418_Col00 > footer {
    background-image: none !important;
}`},{url:["teltarif.de"],css:`body,
.ttColBack,
#tthdrbox {
    background: var(--darkreader-neutral-background);
    color: var(--darkreader-neutral-text);
}`},{url:["temu.com"],css:`._2Fkk_bmp {
    background-color: transparent !important;
}`},{url:["tenforums.com"],css:`.garhead {
    background-color: var(--darkreader-neutral-background) !important;
    background-image: none !important;
    border-left-color: var(--darkreader-neutral-background) !important;
    border-right-color: var(--darkreader-neutral-background) !important;
}`},{url:["tenor.com"],invert:[".FlagIcon",".ShareIcon"]},{url:["terazwy.pl"],invert:['img[src*="img/loga"]','img[src*="img/logotr.png"]']},{url:["terraform.io"],ignoreInlineStyle:[".text"]},{url:["terraria.wiki.gg"],css:`#mw-head {
    background: var(--theme-navbar-background);
}
#mw-panel .portal h3::after {
    border-color: var(--theme-sidebar-heading-arrow-color) transparent;
}
#mw-panel .portal h3:hover::after {
    border-color: var(--theme-sidebar-heading-arrow-color-hover) transparent;
}
#simpleSearch::before,
#simpleSearch::after {
    border-color: var(--theme-navbar-search-botton-text-color);
}
#simpleSearch:hover::before,
#simpleSearch:hover::after {
    border-color: var(--theme-navbar-search-botton-text-color-active);
}`},{url:["tesco.com"],css:`.ui-components-library .nav-dropdown .dropdown a.nav-toggle h1,
.ui-components-library .nav-dropdown .dropdown a.nav-toggle h2,
.ui-components-library .nav-dropdown .dropdown a.nav-toggle h3,
.ui-components-library .nav-dropdown .dropdown a.nav-toggle h4,
.ui-components-library .nav-dropdown .dropdown a.nav-toggle h5,
.ui-components-library .nav-dropdown .dropdown a.nav-toggle h6 {
    z-index: 0 !important;
}`},{url:["tesla.com"],invert:[".tds-modal-close-icon",'.tds-menu-header-legacy [id*="tds-menu-header-main--trigger"]:checked ~ [for*="tds-menu-header-main--trigger"] .tds-menu-header-main--cross_hatch'],css:`.tcl-hero-parallax__heading,
.tcl-hero-parallax__subheading a,
.tcl-hero-parallax__additional-link {
    color: \${gray} !important;
}
#block-mainheadernavigation .tds-menu-header-nav--list_link {
    color: var(--darkreader-neutral-background) !important;
}`},{url:["testudo.umd.edu"],css:`#secondary-side,
#widgetbox_widget_parent_0 {
    background-color: var(--darkreader-neutral-background) !important;
}`},{url:["the-conjugation.com"],css:`#gauche {
    background-color: var(--darkreader-neutral-background) !important;
}`},{url:["the-race.com"],invert:[".img-fluid"]},{url:["the5to9.xyz"],css:`:root {
    --wt-text-on-background-color: var(--darkreader-neutral-text) !important;
}`},{url:["theatlantic.com"],invert:['[class^="NavHamburgerButton_root"]','[class^="NudgeShared_chevron"]','[class^="NonMeteredNudge_desktopTextContainer"]::after']},{url:["theatlas.com"],css:`.d4 .axis .tick text {
    fill: var(--darkreader-neutral-text) !important;
}
.d4 .axis .tick rect {
    fill: var(--darkreader-neutral-background) !important;
}`},{url:["thecamels.org"],invert:[".block-tags",".block-client-group-list",".slider-content-list-item-opinion-logo",".slider-testimonials-list-item"],css:`.slider-testimonials-content {
    background-color: var(--darkreader-neutral-background) !important;
    background-image: none !important;
}`},{url:["thecanadianencyclopedia.ca"],invert:[".edit",".citation",".share",".print",".dot-1.dot",".dot-2.dot",".dot-3.dot",".accordion-toggler.dropdown-toggler.nav-submenu-toggler"]},{url:["thecode.media"],invert:['img[src$="/logo.svg"]',".post-item__arrow","li::before"]},{url:["thedailybeast.com"],invert:[".Logo",".NavSubDesktop__hamburger-bars"]},{url:["thedispatch.com"],invert:["li::before"]},{url:["thefreedictionary.com"],invert:["strong.i.logo","a.i.keyboard-link.mobile-hidden","#regButton::before","ul.social-networks","a.i.icon-notif","div.box > a.i","div.cprh > span.i.A.cpr","a.i.popup-opener","ul.logos-list"]},{url:["thefreelibrary.com"],invert:["div#logo"],css:`div.main_content {
    background-image: none !important;
}`},{url:["theguardian.com"],invert:['a[data-sponsor="guardian.org"]','div[data-link-name="Crosswords"] .crossword__cell-number','div[data-link-name="Crosswords"] .crossword__cell-text','div[data-link-name="most-popular"] > section > ol > li > a > span > svg','section[data-component="documentaries"] a[href="https://www.theguardian.com/documentaries"] > svg','section[data-component="headlines"] .dcr-d4xwbm > svg','section[data-component="olympic-medal-table"] img[alt="Multi-coloured sand texture"]','section[data-component="paralympic-medal-table"] img[alt="Multi-coloured sand texture"]'],css:`section[data-component="documentaries"] p {
    border-top: 1px solid #ffffff50 !important;
}
section[data-component="contact-the-guardian"] a {
    color: #121212 !important;
}
section[data-component="contact-the-guardian"] .btn {
    background-color: #fff !important;
}
section[data-component="contact-the-guardian"] .securedrop {
    background-color: #ffe500 !important;
}
section[data-component="contact-the-guardian"] .securedrop__main > .eyes > .eye > .outside > svg > path {
    stroke: rgba(230,207,0,.5) !important;
}
section[data-component="headlines"] .dcr-d4xwbm {
    background-color: var(--darkreader-neutral-text) !important;
}
section[data-component="olympic-medal-table"] circle[r="6.6"],
section[data-component="paralympic-medal-table"] circle[r="6.6"] {
    fill: var(--darkreader-bg--section-background) !important;
}
section[data-component="video"] button[data-link-name="video-container-next"],
section[data-component="video"] button[data-link-name="video-container-prev"] {
    background-color: var(--carousel-arrow-background) !important;
}
section[data-component="video"] button[data-link-name="video-container-next"]:hover,
section[data-component="video"] button[data-link-name="video-container-prev"]:hover {
    background-color: var(--carousel-arrow-background-hover) !important;
}
section[data-component="video"] button[data-link-name="video-container-next"]:hover svg,
section[data-component="video"] button[data-link-name="video-container-prev"]:hover svg {
    fill: var(--carousel-arrow) !important;
}
section[data-component="video"] .dcr-192a2s8 {
    background-color: rgba(0, 0, 0, 0.7) !important;
}
section[data-component="video"] .dcr-1n5sax3 {
    background: linear-gradient( 180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 25% ) !important;
}
section[data-component="video"] .dcr-1rvgcvp,
section[data-component="video"] .dcr-kcvdg {
    background-color: #707070 !important;
}
section[data-component="video"] .dcr-6r6u10 {
    background-color: var(--carousel-dot) !important;
}
section[data-component="video"] .dcr-zxdpfk {
    background-color: var(--carousel-active-dot) !important;
}
section[data-component="video"] .play-icon {
    background-color: rgba(18, 18, 18, 0.6) !important;
}
svg[stroke="var(--article-border)"],
svg[stroke="var(--straight-lines)"] {
    stroke: var(--darkreader-border--article-border) !important;
}`,ignoreInlineStyle:['a[data-link-name="nav3 : logo"] svg','section[data-component="contact-the-guardian"] *','section[data-component="documentaries"] path[fill="#121212"]','section[data-component="headlines"] path','section[data-component="video"] path[fill="#FFFFFF"]']},{url:["theinformation.com"],invert:[".logo"],ignoreImageAnalysis:["header.locked .logo"]},{url:["theins.ru"],invert:["header > div > a > svg"]},{url:["thejakartapost.com"],invert:[".logo-jakartapost"]},{url:["thelancet.com"],invert:[".journal-logos",".footer__logo"]},{url:["themis.dk"],css:`.content {
    background-image: none !important;
}
.box {
    background-image: none !important;
}`},{url:["themoscowtimes.com","moscowtimes.ru"],invert:[".site-header__logo",".footer__logo",".contribute-teaser__button"]},{url:["themoviedb.org"],invert:[".glyphicons_v2.link",".glyphicons_v2.facebook",".glyphicons_v2.twitter",".glyphicons_v2.instagram",".glyphicons_v2.keyboard",".glyphicons_v2.speech-bubble-alert",".glyphicons_v2.arrow-thin-right",".glyphicons_v2.arrow-thin-left"],css:`.card {
    background-color: \${#dfe1e2} !important;
}`},{url:["thenounproject.com"],invert:['div[class^="styles__Image"]','a[class^="styles__HeaderLogoLink"]']},{url:["theoatmeal.com"],invert:["img.d-inline-block.align-bottom"]},{url:["theonion.com"],invert:['a[href="//www.theonion.com"] .theonion']},{url:["thepaper.cn"],invert:[".head_logo"]},{url:["thepiratebay.org"],invert:['img[src="https://torrindex.net/images/tpb.jpg"]','img[src="https://torrindex.net/images/tpbsmall_notext.jpg"]']},{url:["thereader.mitpress.mit.edu"],invert:["#logo"]},{url:["theregister.*","theregister.*.*"],invert:[".row_label.title_rhs_line",".blocksandfiles_logo",".devclass_logo","#sitpub_logo"]},{url:["thetrainline.com"],css:`.ot-sdk-row,
.ot-sdk-twelve,
.ot-sdk-columns {
    background-color: \${#CDD5E2} !important;
}`},{url:["thetruesize.com"],invert:["map-compass","map-compass :is(circle, g, text)"]},{url:["theverge.com"],invert:[".c-global-header__logo",".c-tab-bar__logo",".c-footer__logo-link"]},{url:["thewindowsclub.com"],invert:[".custom-logo"]},{url:["thompsonstein.com"],invert:["a.logo"]},{url:["thriftbooks.com"],invert:[".DesktopHeader-logo"]},{url:["thronemaster.net"],invert:[".head-info-wild"]},{url:["thunderbird.net"],invert:[".w-48",'a[title="Thunderbird"] > svg']},{url:["ti.com"],invert:[".ti_p-responsiveHeader-top-logo"]},{url:["tianocore.org"],invert:[".tcLogoArea"]},{url:["tieba.baidu.com"],invert:[".add-more-forum",".all-wraper",".core_title_btns",".day_rcmd > .class_title",".fengchao-wrap-box span",".focus_btn",'img[src*="sign_err.png"]',".save_face_bg",".search_bright .nav_wrap_add_border",".share_btn_wrapper",".sub_nav_wrap",".threadlist_rep_num",".u-f-item"],css:`.card_banner {
    filter: brightness(50%);
}
.class_title,
.content-sec,
.f-d-item,
.left-sec,
.page-container,
.pb_footer,
.sub_nav_wrap,
.tb_footer {
    background-image: none !important;
}
.u-f-item {
    color: var(--darkreader-neutral-background) !important;
}
.tang-pass-qrcode-imgWrapper {
    background-color: white !important;
}`},{url:["time.com"],invert:["nav.main .menu-btn .menu-btn-box"]},{url:["timeanddate.com"],invert:[".tad-logo"],css:`#header {
    background: \${#DCD9D8};
}
.analog-clock__hands :not(.analog-clock__hand--seconds):not(.analog-clock__pin-inner) {
    stroke: \${#181F2B};
}`},{url:["tinder.com"],css:`svg > path[style*="--rewind"] {
    fill: \${black} !important;
}
svg > path[style*="--nope"] {
    fill: \${red} !important;
}
svg > path[style*="--super-like"] {
    fill: \${cyan} !important;
}
svg > path[style*="--like"] {
    fill: \${#22ebc0} !important;
}
svg > path[style*="--boost"] {
    fill: \${purple} !important;
}`},{url:["titantv.com"],invert:['img[alt="Home"]']},{url:["tizen.org"],invert:["#header #logo"]},{url:["tjournal.ru"],invert:["mark"],css:`mark a {
    color: \${#346eb8} !important;
}
.main.layout {
    background: var(--darkreader-neutral-background) !important;
}`},{url:["tns-e.ru"],invert:['img[title*="ТНС энерго"]','img[src="/img/refresh.png"]','img[src="/img/logout-black.png"]']},{url:["to-do.live.com"],invert:['span[class^="ms-Toggle-thumb"]'],css:`.backgroundLines {
    background-image: linear-gradient(180deg, var(--darkreader-bg--bg-primary), var(--darkreader-bg--bg-primary) 52px, var(--darkreader-bg--bg-separator) 52px, var(--darkreader-bg--bg-separator) 52px) !important;
}`},{url:["todoist.com"],invert:[".ist_button_apple > img","#td-help-logo_svg__a ~ g:last-of-type"],css:`main > section:first-of-type > div {
    z-index: 1 !important;
}
img[src^="/_next/static/images/"],
[style*="/_next/static/images/"] {
    filter: brightness(50%) sepia(40%) !important;
}
option,
.oT9NU,
footer {
    background-color: var(--darkreader-neutral-background) !important;
}`},{url:["tokfm.pl"],invert:[".controls span.play svg"],css:`div.top_section_bg,
div.bottom_section_bg {
    background-color: \${#e7e5e4} !important;
}
body.desk #content {
    background-color: var(--darkreader-neutral-background) !important;
}`},{url:["tonsky.me"],css:`body {
    background-color: var(--darkreader-neutral-background) !important;
    background-image: none !important;
}`},{url:["torguard.net"],invert:['img[src$="statusok.gif"]','img[src$="statusfailed.gif"]']},{url:["tosdr.org"],invert:['img[src*="tosdr-logo-128.svg"]','img[src*="/img/news/"]','img[src*="guidelines.svg"]']},{url:["totylkoteoria.pl"],invert:[".site-branding",".header__socials"],css:`.hero {
    background-image: none !important;
}`},{url:["toutatice.fr"],invert:[".img-responsive",".banner"]},{url:["towardsdatascience.com"],css:`article picture > img {
    background-color: \${black} !important;
}`},{url:["towersemi.com"],invert:[".Logo"]},{url:["towhee.io"],invert:[".logo-wrapper"]},{url:["town-of-salem.fandom.com","breezewiki.com/town-of-salem/","bw.artemislena.eu/town-of-salem/"],ignoreInlineStyle:['span[style^="text-shadow"]']},{url:["trac.ffmpeg.org"],invert:['img[src$="trac_logo_mini.png"]','img[src="/ffmpeg-logo.png"]'],css:`select option {
    background-color: var(--darkreader-neutral-background);
}`},{url:["tracfone.com"],invert:[".navbar-container nav .navbar-brand"]},{url:["track.toggl.com"],css:`#root,
.content-wrapper > * {
    background-color: var(--darkreader-neutral-background) !important;
}`},{url:["trailhead.salesforce.com"],invert:["lwc-tds-header"],css:`.search-input__input {
    background-color: var(--darkreader-neutral-background) !important;
}
.user-info__name {
    color: inherit !important;
}
.progress-ring__content {
    background-color: white !important;
}
[data-layout="desktop"] .nav-list-item__link:hover,
[data-layout="desktop"] .nav-list-item__button[aria-expanded="true"] {
    background: inherit !important;
}`},{url:["training.moodys.com"],css:`body.frameless {
    background-image: none;
}`},{url:["transifex.com"],invert:["img.close_image"]},{url:["translate.google.*","translate.google.*.*"],invert:[".ttsbutton",".tlid-copy-translation-button",".starbutton",".speech-button",".clear",".swap > .jfk-button-img",".morebutton",".close-button",".ita-kd-icon-button",".ita-kd-menuitem-inputtool-icon",".ita-kd-checkbox",".vk-t-btn",".vk-sf-b",".ita-hwt-backspace-img",".ita-hwt-enter-img",".ita-hwt-grip",".gt-ex-quote"],css:`.trans-verified-button {
    background-size: cover;
}`,ignoreImageAnalysis:[".ita-kd-img"]},{url:["translate.yandex.*"],invert:[".button.button_tab.state-selected::before","#optionsButton::after","#clearButton::after","#textNativeSpeaker","#textSpeaker","#microphone::after","#keyboardButton::after","#spellerButton::after",".button.button_icon.button_icon_swap::after","#favButton::after","#translatorSpeaker","#translatorNativeSpeaker","#copyButton::after","#shareButton::after","#goodVoteButton::after","#badVoteButton::after","#editorButton::after",".toggler::after",".button.button_icon.button_icon_speaker",".dictionary-example_toggler::after",".dictionary-example_meta__vote-buttons",".icon.button.button_icon.button_icon_sync::after",".message.message_yellow.message_replace",".placeholder",".button.header-button.button_icon.button_icon_clear2::after","#shareCopyLink::after"]},{url:["translate.yandex.*/collections"],invert:[".button.header-button.button_icon.button_icon_clear2::after",".record-line_speaker.button.button_icon.button_icon_speaker::after",".button.button_icon.button_icon_lines::after",".button.button_icon.button_icon_trash::after","#shareCollectionCopy::after"]},{url:["translate.yandex.*/doc"],invert:[".button.button_tab.state-selected::before",".listbox-option::after"]},{url:["translate.yandex.*/ocr"],invert:[".button.button_tab.state-selected::before",".button.button_icon.button_icon_swap::after",".button.button_icon.button_icon_plus::after",".button.button_icon.button_icon_minus::after",".button.button_icon.button_icon_lines::after",".button.button_icon.button_icon_words::after",".button button_icon.button_icon_blocks::after",".button.button_icon.button_icon_blocks::after",".button.button_icon.button_icon_reset::after"]},{url:["translate.yandex.*/translate"],invert:[".button.button_tab.state-selected::before","#shareButton::after",".listbox-option::after","#shareCopyLink::after"]},{url:["translifeline.org"],invert:["nav > ul > li > a > span > svg"]},{url:["transport.orgp.spb.ru"],invert:["#map"]},{url:["transum.org"],invert:['img[src*="Level"]']},{url:["trello.com"],css:`.checklist-item-checkbox {
    background-color: #2f3234 !important;
}`},{url:["trendmicro.com"],invert:[".logo"]},{url:["trezor.io"],invert:[".hero-image"]},{url:["tribunemag.co.uk"],invert:[".si-hr-nv__toggle--menu",".si-hr-sm__item"]},{url:["trip101.com"],invert:[".logo",".name",".partner-logo","img.partner-img"]},{url:["tripadvisor.com","tripadvisor.com.tw","*.tripadvisor.com"],invert:['img[alt="Tripadvisor"]']},{url:["trojmiasto.pl"],invert:['img[alt*="Trojmiasto.pl"]']},{url:["truestory.pl"],invert:[".tdb-logo-img"]},{url:["truity.com"],invert:[".navbar-btn.logo",".footer-logo.logo"]},{url:["tug.org/FontCatalogue"],invert:["img"]},{url:["turbolab.it"],css:`body,
.main-header,
footer {
    background-blend-mode: multiply !important;
    background-color: \${rgba(255,255,255,0.5)} !important;
}`},{url:["tutorialspoint.com"],invert:["i.fa","i.fab","i.fal","img.tp-logo","button.slick-prev.slick-arrow::before","button.slick-next.slick-arrow::before"]},{url:["tuwroclaw.com"],invert:['.navigation i[class^="ico"]',".portal-logo",".partners a img",".hamburger-wrapper",'img[src*="gfx/ico"]']},{url:["tuxcare.com"],invert:[".navbar__logo"]},{url:["tuxedocomputers.com"],invert:["#logo"]},{url:["tv.yandex.*"],invert:[".icon_location::after",".icon_location::before",".button_arrow_down::after"],ignoreImageAnalysis:[".icon_location::after",".icon_location::before",".button_arrow_down::after"]},{url:["tvland.com"],css:`body,
.header-container {
    background-color: var(--darkreader-neutral-background) !important;
}`},{url:["tvn24.pl"],invert:[".header-menu__more-button",".hamburger-icon"]},{url:["tvrain.ru"],invert:[".menu3__logo"]},{url:["tvtropes.org"],invert:["body.darthWiki > i","body.wmgWiki > i",".spi.darthwiki",".spi.sugarwiki",".spi.film",".spi.headscratchers",".spi.laconic-icon",".spi.lightnovel",".spi.manga",".spi.nightmarefuel",".spi.radar",".spi.recap",".spi.shoutout",".spi.webcomic",".spi.wmg",".spi.ymmv",'img[src="/img/loading-alt.gif"]'],ignoreImageAnalysis:["body.sugarWiki #header-spacer-left::after","body.sugarWiki #header-spacer-right::after"]},{url:["tweakers.net","*.tweakers.net"],invert:[".infoBox > .title::before","#userbar li.icon.selected > a"],css:`#logo a {
    background: url("https://tweakers.net/g/if/v3/framework/tweakers_logo_full.svg") no-repeat center !important;
}
@media screen and (max-width: 1000px) {
    #logo a {
        background: url("https://tweakers.net/g/if/v3/framework/menu_icons_responsive_v6.png") no-repeat -8px -220px !important;
    }
}
.ankeiler > a.commentCount {
    background-image: url("https://tweakers.net/g/icons/commentcounter_small_bg.svg") !important;
    text-decoration: none !important;
}
#userbar li.icon a {
    background-image: url("https://tweakers.net/g/if/v3/framework/menu_icons_v2.png") !important;
}
#userbar li.icon.flag.nl::after {
    background-color: #fff !important;
    border-bottom-color: #014a93 !important;
    border-top-color: #e7184c !important;
}
#userbar li.icon.flag.be::after {
    background-color: #ffff1a !important;
    border-left-color: #000 !important;
    border-right-color: #e7184c !important;
}
.thumb.category {
    border: none !important;
}
.ctaButton.play::after {
    background-color: #FFF !important;
}
.relatedContentContainer .relatedContentItems .itemContainer {
    border-bottom-color: \${#d9d9d9} !important;
    border-top-color: \${#d9d9d9} !important;
}
#categoryBrowser li a {
    background-color: initial !important;
    background-image: none !important;
}
#categoryBrowser li.more {
    background-image: url("https://tweakers.net/g/if/categories/arrows.png") !important;
}
#categoryBrowser li.more:not(li.active.more) {
    background-position-y: -17px !important;
}
#categoryBrowser li.more.active {
    background-image: url("https://tweakers.net/g/if/categories/arrows.png"), linear-gradient(rgb(131, 24, 46), rgb(148, 15, 49)) !important;
}
#tracker .fakeTop .toggleVisibility .corner::before,
#tracker .fakeTop .toggleVisibility .corner::after {
    border-color: \${#ccc} !important;
}
@media screen and (max-width: 767px) {
    #userbar li.icon a {
        background-image: url("https://tweakers.net/g/if/v3/framework/menu_icons_responsive_v6.png") !important;
    }
    #categoryBrowser li.more.active {
        background-image: none !important;
        box-shadow: none !important;
    }
}
#contentArea,
#categoryBrowser,
#categoryBrowser .sublist,
#categoryBrowser .mainlist,
#categoryBrowser ul,
#categoryBrowser li {
    border-color: \${#b2b9bd} !important;
}`,ignoreImageAnalysis:["#categoryBrowser li a","table.highlights .title a.showMoreItems"]},{url:["twit.tv"],invert:[".logo-large"]},{url:["twitch.tv","*.ext-twitch.tv"],invert:[".volume-slider__slider-container",".seekbar-bar",".mention-fragment--recipient",".reply-line--mentioned",".claimable-bonus__icon"],css:`.seekbar-segment {
    background-color: rgb(169, 112, 255) !important;
}
html,
iframe {
    color-scheme: unset !important;
}`},{url:["twitter.com"],invert:['[role="slider"]','[style^="flex-grow"]'],css:`main,
header {
    background-color: var(--darkreader-neutral-background) !important;
}`},{url:["twosigma.com"],invert:[".homepage-video-desktop video",".homepage-video-desktop img"]},{url:["tygodnikkrag.pl"],invert:["#header-logo-image"]},{url:["typescriptlang.org"],css:`.dark-theme .markdown pre {
    filter: none !important;
}
:root {
    --darkreader-bg--raised-background-color: #1c1f21 !important;
}`},{url:["typst.app"],invert:['img[src$=".svg"]:not([alt="Typst"])']},{url:["ubank.com.au"],css:`.sp-envelope-item {
    background-color: var(--darkreader-neutral-background) !important;
}`},{url:["ubereats.com"],invert:["img[alt*='Home']","div[class^='c5'] .gm-style","#main-content > h1 + div","#wrapper > div:nth-of-type(2)","#wrapper > div:nth-of-type(2) > header","#wrapper > div:nth-of-type(2) > footer","#wrapper > div:nth-of-type(2) > #main-content > div:first-child"]},{url:["ubisoft.com"],invert:[".menu span"],css:`global-navigation,
.menu {
    background-color: var(--darkreader-neutral-background) !important;
}`},{url:["ubuntu.com"],invert:[".cls-2",".global-nav__header-logo-anchor"],css:`header[style$="image-background-paper.png);"] {
    background-image: none !important;
}
.chart-key text {
    fill: var(--darkreader-neutral-text) !important;
}`,ignoreInlineStyle:["g#ubuntu-logo > path"]},{url:["ubuntubudgie.org"],invert:[".custom-logo"]},{url:["udemy.com"],ignoreInlineStyle:['[data-purpose="star-rating-mask"] > rect']},{url:["ultimate-guitar.com"],invert:['form[action$="/search.php"] > button','form[action$="/search.php"] > button:not(:hover) > span','canvas[style^="height: 72px; width: 84px;"]','canvas[style^="height: 42px; width: 141px;"]']},{url:["umweltinstitut.org"],css:`.streifenBg {
    background-image: none !important;
}`},{url:["un.org"],invert:['a.logo[title="United Nations"]','img[src*="UN-text-EN.svg"]']},{url:["understandingwar.org"],css:`#edit-search-block-form--2,
#nice-menu-1 > li > a {
    color: var(--darkreader-neutral-background) !important;
    text-shadow: none !important;
}
#mainwrap,
.secondarybox,
.content,
.view-filters {
    background-image: none !important;
}
img[src*="ISW\\%20LOGO"],
img[src*="ISW\\%20Logo"] {
    background-color: white !important;
}`,ignoreImageAnalysis:["*"]},{url:["unsplash.com"],invert:['svg[aria-labelledby="unsplash-home"]'],css:`li > a[aria-current="page"] {
    box-shadow: \${rgb(25,25,25)} 0px -2px inset;
}`},{url:["uokik.gov.pl"],invert:[".a-press-office",".abgLong",'h1[id="logo"]',"p a","p.nav img",'span[class="number"]','ul[class="tabs"]'],css:`#subpage,
.sWrapper1,
.sWrapper2,
.tabs,
body#page,
div#right,
div#top,
div.fWrapper,
div[class="b1"],
h2#here {
    background-image: none !important;
}
#footer .active {
    color: #000000 !important;
}`},{url:["uol.com.br"],css:`.text a {
    text-decoration: underline;
}`},{url:["uottawa.brightspace.com"],invert:[".d2l-navigation-link-image-container"],css:`:host {
    --d2l-button-icon-background-color-hover: var(--darkreader-bg--d2l-color-gypsum) !important;
}
d2l-card {
    background: var(--darkreader-neutral-background) !important;
    border-color: var(--darkreader-border--d2l-color-gypsum) !important;
}
d2l-dropdown-content > div,
d2l-menu-item {
    background-color: var(--darkreader-neutral-background) !important;
    border-radius: 10px !important;
}
d2l-empty-state-simple {
    border-color: var(--darkreader-border--d2l-color-mica) !important;
}
.d2l-button-filter > ul > li > a.vui-button {
    border-color: var(--darkreader-border--d2l-color-mica) !important;
}
.d2l-label-text:has(.d2l-button-subtle-content):hover,
.d2l-label-text:has(.d2l-button-subtle-content):focus,
.d2l-label-text:has(.d2l-button-subtle-content):active {
    background-color: var(--darkreader-bg--d2l-color-gypsum) !important;
}
.d2l-navigation-centerer {
    color: inherit !important;
}
.d2l-tabs-layout {
    border-color: var(--darkreader-border--d2l-color-gypsum) !important;
}`},{url:["ups.com"],css:`#ups-alertsWrap,
#ups-skipNav {
    background: \${#FE9} !important;
}`},{url:["uptimerobot.com"],invert:[".normal-logo",".socialWrapper > ul > li",".feature-icon",'[src$="godaddy-logo.svg"]','[src$="moodys-logo.svg"]','[src$="ibm-logo.svg"]','[src$="expedia-logo.svg"]','[src$="creditcards.svg"]'],css:`.page-head,
.sidebar {
    background-image: none !important;
}`},{url:["upwork.com"],css:`.profile-completeness-nudges-tiles-alternative .carousel-wrapper .up-icon svg {
    filter: drop-shadow(0 0 0px var(--white)) drop-shadow(0 0 0px var(--white));
}
.up-skill-container .up-btn.up-btn-next::before,
.up-skill-container .up-btn.up-btn-prev::before {
    opacity: 0 !important;
}
.up-tab-scroll-hint::after {
    background: none !important;
}
.up-d-skeleton {
    background-color: var(--darkreader-bg--skeleton-color) !important;
    background-image: linear-gradient(90deg, var(--darkreader-bg--skeleton-color), #24242400, var(--darkreader-bg--skeleton-color)) !important;
    color: transparent !important;
}`},{url:["urbandecay.com"],ignoreInlineStyle:[".c-select__icon",".c-swatch"]},{url:["urbandictionary.com"],invert:["a.block.flex"]},{url:["urpredditodicittadinanza.lavoro.gov.it"],css:`:root {
    --lwc-colorContentAreaBackground: transparent !important;
}`},{url:["usbank.com"],invert:[".logo"]},{url:["userstyles.world"],invert:["nav .menu-icon .i"]},{url:["usosweb.*.edu.pl","usosweb.*.pl","usosweb.*.*.pl","usos.*.*.pl","web.usos.*.edu.pl"],invert:[".icons-fontcolor",".schedimg",".rejestracja-ikona","#titlebar > #close:hover","usos-module-link-tile-container > usos-module-link-tile > h2","timetable-entry"],css:`:root {
    --background: var(--darkreader-bg--background) !important;
    --background-secondary: var(--darkreader-bg--background-secondary) !important;
    --font-color: var(--darkreader-neutral-text) !important;
}
#page-body {
    background-color: var(--darkreader-bg--background) !important;
}
usos-module-link-tile:hover {
    background-color: var(--darkreader-border--border) !important;
}
#close:hover {
    background-color: var(--darkreader-text--on-primary) !important;
}
#close:focus {
    background-color: #888 !important;
}
#layoutCopyright {
    color: var(--darkreader-neutral-text) !important;
}
div > #icon {
    background: rgb(94, 136, 213) !important;
}
timetable-day {
    background-color: var(--darkreader-neutral-background) !important;
}
timetable-entry {
    color: #111 !important;
}
#titlebar {
    background-color: var(--darkreader-neutral-background) !important;
    color: var(--darkreader-neutral-text) !important;
}
body {
    background: \${#d8d8d8} !important;
}`},{url:["uspassporthelpguide.com"],css:`body {
    background: none !important;
}`},{url:["usps.com"],invert:['img[src$="hamburger.svg"]','img[src$="search.svg"]',"ul.nav-list > li.menuheader::after","ul.nav-list > li.qt-nav > div > ul > li > a > img","#usps-logo"]},{url:["utas.hu"],invert:[".mapboxgl-map"]},{url:["uteka.ru"],invert:['img[src$="/static/img/logo.svg?v=12"]','ymaps[class$="ground-pane"]']},{url:["v.qq.com"],invert:[".page_user_center .link_logo"]},{url:["v2ex.com"],css:`#Wrapper {
    background-image: none !important;
}`},{url:["vaccines.gov","vacunas.gov"],invert:[".accIcon",".Button",'img[src$="/images/bch-logo.svg"]','img[src$="/images/en-US/wcdt.svg"]','img[src$="/images/es-US/wcdt.svg"]','img[src$="/images/hhs-logo.svg"]']},{url:["vaccines.procon.org"],invert:["#right-sidebar > aside.widget_media_image > a > img"]},{url:["valgrind.org"],css:`p {
    color: var(--darkreader-neutral-text) !important;
}`},{url:["vandale.nl"],invert:["#content-top.form"]},{url:["vanguard.com"],invert:[".vgn-accordionIcon",".vgn-arrow::after","#vgn-searchToggleButtonButton--long-form","#vgn-searchToggleButtonButton--small-form",'input[id^="buysellForm:"]','input[id^="HoldingDetailForm:"]'],css:`.hidePageIfJSdisabled {
    display: block !important;
}`},{url:["vasp.at"],invert:[".mwe-math-fallback-image-inline",".mwe-math-fallback-image-display"],ignoreImageAnalysis:[".site_logo"]},{url:["vbulletin.com"],css:`.std {
    background-color: var(--darkreader-neutral-background) !important;
}
.hero-text,
#hometext li,
#hometext h4,
#hometext_buttons div p {
    color: var(--darkreader-neutral-background) !important;
}`},{url:["vc.ru"],invert:["mark"],css:`.main.layout,
#page_wrapper {
    background: var(--darkreader-neutral-background) !important;
}`},{url:["vcalc.com"],invert:[".navbar-brand > img"],css:`.features-area {
    background-image: none !important;
}`},{url:["vcb-s.com"],css:`html {
    background-color: transparent !important;
}`},{url:["vechevoikolokol.ru"],invert:[".map",".main-page-about .img-responsive",".header-menu__mobile .img-responsive"],css:`.main-page-about,
.main-suggestions,
.i-about,
.issues-page__content {
    background: none !important;
}`},{url:["vendors.paddle.com"],invert:["svg.datamap"],css:`:host(pui-tabs) {
    background-color: var(--darkreader-neutral-background) !important;
    border-bottom: var(--darkreader-neutral-background) !important;
    color: \${black} !important;
}
:host(pui-tabs) ::slotted(button),
:host(pui-tabs) ::slotted(a) {
    background-color: var(--darkreader-neutral-background) !important;
    color: \${black} !important;
}
#line-chart .tick {
    fill: \${black} !important;
}`},{url:["venture.com/domains"],invert:["ul.nav","div.domain-header-brand-authority"]},{url:["ventusky.com"],css:`.qo {
    color: \${white} !important;
}`},{url:["vercel.com"],invert:['[alt="optimized-frameworks"]','[class^="features_logo"]','button[class^="header_logo"]'],css:`:root {
    --geist-foreground: var(--darkreader-neutral-text) !important;
}
div[style="background:var(--accents-1);"] {
    background-color: var(--darkreader-neutral-background) !important;
}
.geist-text-center {
    color: \${#333} !important;
}`},{url:["verstka.media"],invert:[".wp-block-site-logo"]},{url:["versus.com"],invert:[".searchIcon > span > svg",'img[src="/img/amazon-logo.png"]',".catGroups > div:not(div:nth-child(14)) > span > svg","hr"],css:`div[class^="RadarChart"] > svg:nth-child(2) > g > g:nth-child(1) > * {
    fill: #181a1b !important;
    stroke: #999 !important;
}
.langList,
div[class*="Sort__selectWrapper"],
div[class*="Filter__filter"] > *:is(div, ul),
div[class*="Property__helpBoxContainer"],
.catGroupsContainer {
    box-shadow: rgb(22 22 22) 0px 4px 10px !important;
}
div > select {
    background-color: #181a1b !important;
    border-radius: .375rem !important;
}
div[class*="Comments__translateButton"] > button {
    border-color: #1c1e1f !important;
}
div[class*="Login__icons"] > button,
div[class*="SuggestionsBox__element"],
div[class*="Comments__translateButton"] > button:hover {
    border-color: rgb(66, 72, 75) !important;
}
div[class*="Search__inputWrapper"]::before {
    background-color: #303436 !important;
}
.navSearch > input {
    border-radius: .375rem !important;
}
.navSearch > input:focus-visible,
div[class*="Search__inputWrapper"] > input:nth-child(1):focus-visible {
    outline: transparent !important;
}
div[class*="Login__illustration"] {
    background-image: url('https://images.versus.io/login_background.png'),linear-gradient(298deg,#7600e0,#3c59fc) !important;
}`,ignoreInlineStyle:[".catGroups > div > span > svg > defs > style:nth-child(2)"]},{url:["vfsglobal.cn"],invert:[".covid-icon",".logo"]},{url:["vg24.pl"],invert:['img[alt="VG24.PL logo"]']},{url:["vice.com"],invert:['img[src*="article-logo"]',"div.nav-bar__hamburger-button__hamburger","a.page-footer__logo-vice-link"],ignoreInlineStyle:[".logo-vice *"]},{url:["videogameschronicle.com"],css:`.vgc-layout {
    background-image: none !important;
}`},{url:["videolan.org"],css:`ul {
    color: var(--darkreader-neutral-text) !important;
}`},{url:["videoman.gr"],invert:["#logo-custom span",".logo-single"]},{url:["vimeo.com"],invert:['svg[alt="Vimeo"]',"#header-vimeo-logo",'footer > div > div > a > svg > path[d^="M89.05 23.658a12.087 12.087"]']},{url:["virtualbox.org"],css:`body {
    background-image: none !important;
}`},{url:["virustotal.com"],css:`:root {
    --darkreader-bg--vt-grey-50: \${#eee} !important;
    --darkreader-bg--vt-grey-700: \${#666} !important;
    --vt-white: var(--darkreader-neutral-background) !important;
}
:host(.filled) .chip {
    --vt-ui-chips-color: var(--darkreader-bg--vt-grey-200) !important;
}
.range-wrapper svg {
    --vt-grey-200: var(--darkreader-bg--vt-grey-200) !important;
}
vt-ui-main-footer {
    --darkreader-bg--vt-grey-700: \${#a0a6b4} !important;
    --vt-grey-25: var(--darkreader-bg--vt-grey-200) !important;
}
.logo {
    z-index: 1 !important;
}
:host > a:not(.item),
:host > span {
    border: var(--vt-ui-button-border, 1px solid black) !important;
    color: var(--vt-ui-button-color-text, var(--darkreader-text--vt-grey-800, #e8e6e3)) !important;
}
:host(vt-ui-text-input) {
    border: var(--vt-ui-text-input-border, 1px solid var(--darkreader-border--vt-grey-200)) !important;
}
.detections[clean],
.detections[clean] svg {
    color: var(--vt-green-500) !important;
    fill: var(--vt-green-500) !important;
}
.detections {
    color: var(--vt-red-500) !important;
}
#detections .detection,
#detections {
    --darkreader-border--vt-grey-100: var(--darkreader-border--vt-grey-200) !important;
}
.avatar-section {
    background: var(--darkreader-border--vt-grey-200) !important;
}`,ignoreInlineStyle:[".circle-progressbar circle"]},{url:["visa.vfsglobal.com"],invert:[".logo-height"]},{url:["visortmo.com"],ignoreImageAnalysis:["*"]},{url:["vitaexpress.ru"],invert:['ymaps[class$="ground-pane"]','ymaps[class$="default-cluster"] > ymaps']},{url:["vivaldi.com"],invert:[".hero-cover",".hero-cover p"]},{url:["vivaldi.net"],invert:["#vlogo"]},{url:["vjudge.net"],css:`body {
    background-image: none !important;
}
#contest-rank-table td.accepted {
    background-color: \${#b8ffb8} !important;
}
#contest-rank-table td.prob.fb {
    background-color: \${#c8ffc8} !important;
}`},{url:["vk.com"],css:`body[scheme="vkcom_dark"] ._im_dialog_unread_ct {
    background: var(--counter_primary_background) !important;
}`},{url:["vmware.com"],invert:["h1.banner-title","div.banner"]},{url:["vnexpress.net"],invert:["#vibeji-ham span",".sub-cate img",".swiper-pagination-bullet",'img[src*="app_ico"]','img[src*="icon-empty-noti"]','img[src*="logo_sawaco"]',".wrap-slide-raovat > .swiper-button-box"],css:`.wrap-titile-area,
.inner-section-video .item-news-common {
    border-color: rgb(55, 60, 62) !important;
}
#myvne_apple_login {
    border-color: rgb(67, 72, 75) !important;
}
.ads > svg {
    background-image: url(https://s1.vnecdn.net/vnexpress/restruct/c/v1990/v2_2019/images/graphics/icon-eclick.svg) !important;
}`,ignoreInlineStyle:["symbol#letter-E > *"]},{url:["vod.tvp.pl"],invert:['img[alt="serwisy tvp"]']},{url:["voice.google.com"],css:`.gb_sd.gb_ld {
    background-color: var(--darkreader-neutral-background) !important;
}`},{url:["voltalbania.org","voltbelgium.org","voltdanmark.org","voltdeutschland.org","voltespana.org","volteuropa.org","voltfrance.org","voltluxembourg.org","voltmalta.org","voltnederland.org","voltoesterreich.org","voltportugal.org","voltromania.org","voltslovensko.org","voltsverige.org","voltswitzerland.org"],css:`.hidden.lg\\:block:not(.w-full):not(.absolute):not(.group):not(.theme-icon):not(.mx-3) {
    display: none;
}`},{url:["vonatinfo.mav-start.hu"],css:`#right_panel,
#legend_panel {
    background: none !important;
    background-color: var(--darkreader-neutral-background) !important;
}`},{url:["votecompass.mzalendo.com"],invert:[".content_wrapper_2",".content_wrapper_2 > *"]},{url:["vowi.fsinf.at"],invert:[".mwe-math-fallback-image-inline",".mwe-math-fallback-image-display"]},{url:["vox.com"],invert:[".c-app-nav__logo",".c-footer__logo-link"]},{url:["vpn.getadblock.com"],css:`body {
    background-image: none !important;
}`},{url:["vrt.be/vrtnws"],invert:[".vrt-header__logo",".vrt-nav-toggle-btn"]},{url:["vseinstrumenti.ru"],css:`img[data-behavior="cart-product-image"] {
    mix-blend-mode: unset;
}`},{url:["vshojo.com"],css:`.elementor-section,
.elementor-heading-title {
    background: var(--darkreader-neutral-background) !important;
    color: var(--darkreader-neutral-text) !important;
}`},{url:["vtimes.io"],invert:[".site-header__logo",".sticky-nav__logo",".article__block__disclaimer__close::after",".article__block__disclaimer__close::before"]},{url:["vultr.com"],css:`.svg-banner-shape {
    fill: var(--darkreader-neutral-background) !important;
}`,ignoreInlineStyle:[".icon-ui *",".icon-user *",".icon-sm *",".svg-logo *",".svg-illustration *",".svg-product *",".svg-shape *"]},{url:["w.atwiki.jp"],css:`.atwiki-contents-shadow,
.main_wrapper {
    background-color: var(--darkreader-neutral-background) !important;
}
.atwiki-jp-bg2 {
    color: var(--darkreader-neutral-background) !important;
}`},{url:["w3.org"],invert:['img[alt*="equation" i]']},{url:["wacom.com"],invert:["img.full-size-logo","a.logo","div.minicart-wrapper","a.footer-brand"],css:`img,
div.bg-layer,
div.flickity-viewport,
canvas {
    filter: brightness(50%) sepia(40%) !important;
}`},{url:["wakamaifondue.com"],css:`.upload-button > strong,
.upload-button > span {
    color: \${white} !important;
}`},{url:["walbrzych24.com"],invert:["a.social-icons__icon img","img.page-header__logo","img.page-footer__img"]},{url:["wallet.myalgo.com"],ignoreInlineStyle:[".export-qr-code > *"]},{url:["walmart.com"],css:`.intro-banner__container {
    z-index: 0 !important;
}
label.w_cA4b[data-automation-id="pickup-store"] > svg > circle {
    fill: #9ca9cd !important;
}
label[data-automation-id="pickup-store"] > svg > circle {
    fill: #404658 !important;
}`},{url:["wanikani.com"],invert:['[data-question-type="meaning"]'],css:`.wk-hint,
.wk-hint__title,
.subject-character__meaning {
    text-shadow: None;
}`},{url:["warframe.com"],invert:[".HeaderNavigationBar-logo"],css:`.wrapper {
    background-image: none !important;
}`},{url:["warframe.huijiwiki.com"],css:`#wiki-outer-body {
    background-image: none !important;
}`},{url:["wasd.tv"],invert:[".volume-interaction-area > div",".stream-status-live-badge"]},{url:["washingtonpost.com"],invert:[".hp-masthead",".switch",".switch::after"],css:`.flex * {
    border: none !important;
}
nav[data-qa="secondary-nav"] {
    border-left-color: transparent;
    border-right-color: transparent;
    border-top-color: transparent;
}
span[data-testid="headline"] {
    color: var(--darkreader-neutral-text-color);
}
footer,
div {
    border-left-color: transparent !important;
    border-right-color: transparent !important;
}
div[data-qa="desktop-copyright"] {
    border-bottom-color: transparent !important;
    border-left-color: transparent !important;
    border-right-color: transparent !important;
}`,ignoreInlineStyle:['.center > svg > path[fill="white"]']},{url:["wayfarer.nianticlabs.com"],invert:["wf-logo"]},{url:["waze.com"],invert:[".wm-map__leaflet",".leaflet-bottom",".leaflet-popup-content-wrapper"]},{url:["weather.com"],invert:['div[class*="DynamicMap"]','svg[name="arrow-up"]','svg[name="arrow-down"]','text[class*="DonutChart"]'],ignoreInlineStyle:['[id^="svg-symbol"] *','svg[class*="alerts--"] *',"#svg-symbol-sun"]},{url:["weather.com.cn"],invert:[".w_logo","#hourHolder"],css:`.lv1,
.lv2,
.weatherBg01,
.weatherBgAll,
.weatherBgAll01,
.weatherBgAll02,
.weatherBgAll03 {
    background-image: none !important;
}`},{url:["weather.gov","forecast.weather.gov"],invert:[".header-content > .header-doc",".header-content > .header-nws","#page-header > #header-doc","#page-header > #header-noaa","#page-header > #header-nws"]},{url:["web.archive.org"],invert:[".sparkline-canvas",".sparkline-mouse-highlight",".search-toolbar-logo",".ia-wordmark"],css:`.measure {
    z-index: 0 !important;
}`,ignoreImageAnalysis:[".search-toolbar-logo"]},{url:["web.dev"],css:`.w-aside--gotchas,
.w-aside--key-term {
    color: #b98fff;
}
.w-aside--gotchas::after,
.w-aside--key-term::after {
    background-color: #b98fff;
}`},{url:["web.fulcrumapp.com"],invert:[".scroll-indicator",".css-x2uwzm",".duplicate",".css-37fxgj svg",'a[data-original-title="Edit App"] .icon','a[data-original-title="Import Data"] .icon','a[data-original-title="Export Data"] .icon','a[data-original-title="App Dashboard"] .icon','a[data-original-title="View Records"] .icon',".w14",".css-212r4o",".css-7n901",".css-w98cyk"],css:`.css-1580o8k,
.css-1ew50hl,
.css-zn8522 {
    border-style: solid !important;
    border-width: 1px !important;
}
.css-1ee8v3h,
.css-5mtzen,
.css-16mp2t6,
.css-1o48rld,
.css-cf39a2,
.css-1lkowri,
.css-1gj6av8,
.css-vi0msm,
.icon:is(.edit, .delete),
.css-3o0h5k {
    color: rgb(193, 187, 179) !important;
    fill: rgb(193, 187, 179) !important;
}
.css-13dtodi {
    border-color: rgb(53,58,60) !important;
    border-style: none none solid none !important;
    border-width: 1px !important;
}
.css-1btrp9o:hover,
.css-11bfl1m:hover {
    background-color: rgb(70, 70, 70) !important;
}
.css-1btrp9o:hover span {
    color: rgb(229, 134, 134) !important;
}
.css-1btrp9o[style*="color: rgb(235, 19, 0)"] {
    background-color: rgb(70, 70, 70) !important;
}
.css-1btrp9o[style*="color: rgb(235, 19, 0)"] span {
    color: #ff3d3d !important;
}
.css-1580o8k,
.css-1ew50hl {
    border-style: solid !important;
    border-width: 1px !important;
}
.monaco-editor .cursors-layer .cursor {
    background-color: #aaa !important;
    border-color: #aaa !important;
    color: #fff !important;
}
.monaco-editor .wordHighlightStrong {
    background-color: rgba(0, 73, 114, 0.72) !important;
}
.monaco-editor .selectionHighlight {
    background-color: rgba(173, 214, 255, 0.10) !important;
}
.monaco-editor .view-overlays .current-line {
    border: 2px solid #282828 !important;
}
.rt-td,
.rt-th {
    border-color: rgb(53, 58, 60) !important;
    border-style: none none solid solid !important;
    border-width: 1px !important;
}
mark {
    background-color: rgba(255, 255, 0, 0.5) !important;
}`,ignoreInlineStyle:[".css-1k0tbw6",".css-13dtodi",".css-6tgf2j"]},{url:["web.microsoftstream.com"],invert:[".vjs-progress-holder",".vjs-volume-bar"]},{url:["web.telegram.org"],invert:[".composer_emoji_tooltip_category",".nano-slider",".divider"],css:`.progress-bar {
    background-color: rgba(255,255,255,.9) !important;
}`},{url:["web.whatsapp.com"],css:`.landing-main div>div>div>div:has(canvas[aria-label*="Scan this"]) {
    border: 15px solid white !important;
}
span[data-icon="default-user"] path.primary {
    fill: var(--avatar-placeholder-primary) !important;
}
[data-icon="tail-out"] {
    color: var(--darkreader-bg--outgoing-background) !important;
}
[data-icon="tail-in"] {
    color: var(--darkreader-bg--incoming-background) !important;
}`},{url:["webaim.org"],css:`body {
    background-image: none !important;
}`},{url:["webassign.net"],invert:["img"],css:`body {
    color: var(--darkreader-neutral-text);
}
#webAssign {
    background-color: var(--darkreader-neutral-background) !important;
}
#webAssignMain,
#webAssignContent {
    background-color: var(--darkreader-neutral-background) !important;
}
img[alt="seenKey"] {
    background-color: \${black} !important;
    filter: unset !important;
}
#webAssign select {
    background-color: var(--darkreader-neutral-background) !important;
}
.sButton {
    background-image: unset;
}`},{url:["webbrowsertools.com"],css:`.tile {
    background-color: var(--darkreader-neutral-background);
}`},{url:["webdav.org"],css:`body {
    background: none !important;
}`},{url:["webkitgtk.org"],css:`#main_wrapper {
    background-image: none !important;
}`},{url:["weblate.org"],invert:["h5.list-group-item-heading > svg",'img[src="/static/state/lock.svg"]','img[src="/static/state/link.svg"]','img[src="/static/state/source.svg"]','img[src="/static/auth/password.svg"]','img[src="/static/auth/email.svg"]','img[src="/static/auth/github.svg"]','path[d^="M12,4V2A10,10"]','img[src="/static/state/link.svg"]']},{url:["webmd.com"],invert:[".blogs-webmd-logo-img",".global-nav-logo"]},{url:["webpagetest.org"],css:`.scrollableTable table,
.results-filmstrip-container img,
div:not(.compare_contain_wrap) > div.waterfall-container img,
div.overflow-container > *,
.breakdownFrame_item > div > *,
.experiment_opportunities-resolved ol > *,
.experiments_details_desc > ul li {
    mix-blend-mode: normal !important;
}`},{url:["webroot.com"],invert:[".logo"]},{url:["webstatus.dev"],css:`.details {
    background-color: var(--darkreader-bg--sl-color-neutral-0) !important;
}
.data-table th {
    background: var(--darkreader-bg--table-header-background) !important;
}`},{url:["webtoons.com"],css:`.info {
    color: rgb(0,0,0) !important;
}`},{url:["wegmans.com"],invert:['img[alt="home"]']},{url:["wego.here.com"],invert:["#map",".route_card_left",".route_tooltip_icon",".btn_directions"]},{url:["weibo.com"],invert:[".CopyRight_aria_1Dnvr"],css:`:root {
    --darkreader-border--w-card-border: #FFFFFF00;
    --darkreader-text--weibo-top-nav-line: #FFFFFF19;
}
.Home_split_2r3H7 {
    color: #FFFFFF11;
}
.Nav_panel_YI3-j {
    border-bottom-color: #FFFFFF22 !important;
}
.Card_bottomGap_2Xjqi > div > .woo-divider-x {
    color: #FFFFFF11;
}
.ALink_none_1w6rm .woo-divider-main {
    color: #FFFFFF11;
}
.woo-panel-bottom {
    background-color: #FFFFFF08;
    border: #FFFFFF11, 1px, solid;
}
.Tool_line_GFygz .woo-divider-shadow {
    color: #FFFFFF19;
}
.Aria_box_3ZDlW .woo-divider-shadow {
    color: #FFFFFF19;
}
.Nav_popcon__F1hb .woo-pop-ctrl {
    border-left-color: #FFFFFF11;
}
.Nav_inner_1QCVO {
    background-color: #FFFFFF08;
    border-color: #FFFFFF11 !important;
}
.Feed_normal_12A98 {
    background-color: #FFFFFF08;
}
.title_wrap_3e__u {
    background-color: #FFFFFF00;
}
div > .wbpro-side {
    background-color: #FFFFFF08;
}
.ALink_none_1w6rm .Card_bottomGap_2Xjqi {
    background-color: #FFFFFF08;
}
.title_titleBox_3bh5X {
    border-bottom-color: #FFFFFF08;
}
.Feed_mar1_E_5ip {
    color: #FFFFFF11;
}
.RepostCommentFeed_divider_3xqBq {
    color: #FFFFFF08;
}
.wbpro-scrollbar {
    scrollbar-color: #3a3a3a #FFFFFF11;
}
.Card_wrap_2ibWe .woo-divider-main {
    color: #FFFFFF11;
}
.woo-divider-x {
    color: #FFFFFF11;
}
.Card_wrap_2ibWe .woo-divider-main {
    color: #FFFFFF11 !important;
}
.woo-divider-x {
    color: #FFFFFF11 !important;
}
.Viewer_prevList_11Q1N {
    border-top-color: #FFFFFF11;
}
.woo-modal-main {
    border-color: #FFFFFF19;
    border-style: thin;
}
.woo-modal-main {
    border: 1px, solid, #FFFFFF22;
    border-radius: 8px;
}`},{url:["weightwatchers.com"],invert:['span[class*="NavigationSlice_logo"]']},{url:["wellandgood.com"],invert:[".nav-trigger",".logo"]},{url:["wellrx.com"],invert:[".logo"]},{url:["welsh-dictionary.ac.uk"],css:`#donateButton {
    background-color: var(--darkreader-neutral-background) !important;
    color: var(--darkreader-neutral-color) !important;
    text-shadow: none !important;
}`},{url:["wenxuecity.com"],invert:[".logo"]},{url:["wepe.com.cn"],invert:["#u0_img"]},{url:["wesbos.com"],css:`footer > div > div:not(.bottom) {
    background-color: var(--darkreader-neutral-background) !important;
}`},{url:["westerndigital.com"],invert:[".desktop-brand-logo"]},{url:["westlaw.com","*.westlaw.com","*.*.westlaw.com"],css:`.co_hl.blue,
.highlightBox.blueBox {
    background-color: \${lightblue} !important;
}
.co_hl.purple,
.highlightBox.purpleBox {
    background-color: \${#bd73bd} !important;
}`},{url:["wetteronline.de"],css:`#searchstring {
    background-color: var(--darkreader-neutral-background) !important;
}`},{url:["whambam3d.com"],invert:["span.multis-svg","span.svgbg","summary.header__icon","svg.icon-search"],css:`body {
    background-color: var(--darkreader-neutral-background) !important;
}`},{url:["what-if.xkcd.com"],invert:[".illustration",".archive-image",".logo"]},{url:["whatruns.com"],invert:['img[title="Buffer"]','img[alt*="hatruns"]']},{url:["whatsapp.com"],invert:['span[data-icon="audio-download"]',".landing-main .invisible-space > span","div.landing-header > span > svg","#wafaq_search_input"],css:`[data-asset-intro-image],
[data-asset-intro-image-light] {
    background-image: url(/img/intro-connection_c98cc75f2aa905314d74375a975d2cf2.jpg) !important;
}
html[dir] .landing-main > :first-child > :nth-child(2) > :first-child {
    border: 16px solid white !important;
}
span[data-icon="tail-in"] {
    color: rgb(30, 36, 39) !important;
}
span[data-icon="tail-out"] {
    color: rgb(4, 57, 51) !important;
}
div#subheader {
    background-image: url(https://static.whatsapp.net/rsrc.php/v1/yQ/r/dPFl9fRFF9u.jpg) !important;
    background-size: 100% !important;
}`,ignoreInlineStyle:['path[fill="currentColor"]','path[fill="#FFFFFF"]',".landing-main svg path"]},{url:["whitemad.pl"],invert:["#logo","#cb-nav-logo"]},{url:["who.int"],invert:[".background-url-holder > picture > img"]},{url:["whois.arin.net/ui/advanced.jsp"],css:`td,
div#content div#subcontent div.box ul li {
    background-image: none !important;
}`},{url:["whois.com"],invert:['img[src^="logo.gif"]']},{url:["wiadomoscihandlowe.pl"],invert:[".dropdown-portal__link",".hamburger__button span",".search__icon"]},{url:["wielkopolskiebilety.pl"],invert:[".KW__headerContainer",".logo",".map-container",'img[src*="carriers/"]']},{url:["wiemy.to"],invert:["img.site-logo",".content-font__icon",".font-dropdown__item"]},{url:["wiesci24.pl"],invert:[".tdb-logo-img"]},{url:["wiki.facepunch.com"],css:`body {
    background-color: transparent !important;
}
.content {
    background-image: none !important;
}`},{url:["wiki.mozilla.org"],css:`body {
    background-image: none !important;
}`},{url:["wiki.teamfortress.com"],invert:[".mw-wiki-logo"],css:`body,
#mw-page-base,
#p-logo,
#content,
#footer {
    background-image: none !important;
}
div.vectorTabs ul li.selected a,
#searchInput::placeholder {
    color: var(--darkreader-neutral-text) !important;
}`},{url:["wiki.ubuntuusers.de"],css:`table:not([class]),
table[class^="zebra"] {
    background-image: none !important;
}`},{url:["wiki.unity3d.com"],css:`div#content,
#pt-login,
div.vectorTabs,
div.vectorTabs *,
.portal *,
div.vectorMenu,
div.vectorMenu h5 a,
div#footer,
div#footer * {
    background-image: none !important;
}`},{url:["wiki.wargaming.net"],invert:[".l-description-img_price",".b-description-img_price"],css:`.b-main {
    background: var(--darkreader-neutral-background) !important;
}`},{url:["wikimapia.org"],invert:["#map"]},{url:["wikimedia.de","*.wikimedia.de","wikimediastatus.net","*.wikimediastatus.net"],invert:[".logo",".logo-container"]},{url:["wildberries.ru"],invert:['ymaps[class$="ground-pane"]','ymaps[class$="svg-icon-content"] > ymaps'],css:`.popup__close-btn.j-close,
.popup__close-btn.j-btn-close,
.tooltip.tooltip-btn-edit {
    border: 1px solid rgb(59, 64, 66);
}
.popup__close-btn.j-close,
.popup__close-btn.j-btn-close,
.tooltip.tooltip-btn-edit .tooltip__content button {
    color: var(--darkreader-neutral-text);
}
.dropdown-filter__btn {
    color: var(--darkreader-neutral-text);
}
#Item_Text {
    background: #181a1b;
    color: #d1cdc7;
}`},{url:["willthompson.co.uk"],invert:["body","body > *"]},{url:["windows.php.net"],css:`#content-columns .block,
#page-area .content {
    background-image: none !important;
}
#content-columns .block .corners-top,
#content-columns .block .corners-bottom,
#page-area .content .corners-top,
#page-area .content .corners-bottom {
    filter: invert(91%) !important;
}`,ignoreImageAnalysis:["#content-columns .block .corners-top","#content-columns .block .corners-bottom","#page-area .content .corners-top","#page-area .content .corners-bottom","#content-columns .block .corners-top span","#content-columns .block .corners-bottom span","#page-area .content .corners-top span","#page-area .content .corners-bottom span","#main-column .innerbox .corners-top","#main-column .innerbox .corners-bottom","#mid-column .innerbox .corners-top","#mid-column .innerbox .corners-bottom","#main-column .innerbox .corners-top span","#main-column .innerbox .corners-bottom span","#mid-column .innerbox .corners-top span","#mid-column .innerbox .corners-bottom span"]},{url:["windscribe.com"],css:`#body_wrap > div.blue-bg.blue-top > div.twinkling-blue {
    background-image: none;
}`},{url:["winehq.org","*.winehq.org"],css:`.winehq_menu_item .winehq_badge .winehq_badge_inner {
    color: maroon;
}
#whq-logo-glass {
    z-index: 0;
}
div {
    position: relative;
    z-index: 1;
}
body {
    height: auto !important;
}`},{url:["winzip.com"],invert:[".navbar-brand"]},{url:["wired.co.uk","wired.com"],invert:["body a svg",'a[data-testid="Logo"]',".c-nav__open-icon",".c-nav__close-icon",".standard-navigation__logo-image > img"]},{url:["wireshark.org"],invert:[".navbar-brand"]},{url:["wirtualnemedia.pl"],invert:['img[src$="logo-black.gif"]']},{url:["wmar2news.com"],invert:[".PageLogo-image",".wx-nav > img"]},{url:["wmata.com"],css:`.icon-wmata-logo .path1::before {
    color: #000 !important;
}`,ignoreInlineStyle:[".goog-te-gadget-simple > span > a > span"]},{url:["word-view.officeapps.live.com"],invert:["img.WACPageImg"]},{url:["wordnik.com"],invert:['img[alt="wordnik logo"]',".footer-logo"]},{url:["wordpress.com"],invert:["svg.masterbar__wpcom-wordmark","div.wp-login__footer.wp-login__footer--jetpack > img"],css:`svg.social-icons.social-icons__apple.social-icons--enabled {
    fill: white !important;
}
.stats-card {
    border-color: var(--darkreader-neutral-background) !important;
}
.p2020-sidebar {
    background: var(--darkreader-neutral-background);
    background-image: none !important;
}
.block-editor-rich-text__editable {
    color: var(--darkreader-neutral-text);
}
.block-editor-block-list__layout .block-editor-block-list__block::after {
    box-shadow: none !important;
}`},{url:["workona.com"],invert:[".style-module--unchecked--208a1"]},{url:["worldcubeassociation.org"],css:`.event-checkbox input[type="checkbox"] + i.cubing-icon,
.event-checkbox input[type="radio"] + i.cubing-icon,
.event-radio input[type="checkbox"] + i.cubing-icon,
.event-radio input[type="radio"] + i.cubing-icon {
    color: rgba(0, 0, 0, 1) !important;
}`,ignoreImageAnalysis:[".flag-icon-pl",".flag-icon-kr",".flag-icon-fi",".flag-icon-jp",".flag-icon-ru",".flag-icon-si",".flag-icon-co",".flag-icon-lt",".flag-icon-sk",".flag-icon-bg",".flag-icon-ve",".flag-icon-ge",".flag-icon-ec",".flag-icon-pk",".flag-icon-uy",".flag-icon-mg",".flag-icon-pa",".flag-icon-cy",".flag-icon-bh",".flag-icon-mt",".flag-icon-bt",".flag-icon-jm"]},{url:["worldometers.info"],invert:["#coronavirus-cases-log.active .highcharts-background","#coronavirus-deaths-log.active .highcharts-background","#coronavirus-cases-linear.active .highcharts-background","#coronavirus-deaths-linear.active .highcharts-background"]},{url:["worldtimebuddy.com"],css:`body,
.clientarea > :first-child {
    background-image: none !important;
}`},{url:["wowturkey.com"],css:`body {
    background: none !important;
}
.cevapButton {
    background-image: none !important;
}
span.postdetails span.name a {
    background: transparent !important;
}`,ignoreInlineStyle:[".cevapButton","span.name a"]},{url:["wpshout.com"],invert:['a[rel="home"] > img'],css:`.site-title {
    background-color: var(--darkreader-neutral-background) !important;
}`},{url:["wrestlezone.com"],css:`main,
footer,
body {
    background-color: var(--darkreader-neutral-background) !important;
}`},{url:["writefreely.org"],invert:['img[src*="writefreely.svg"]','img[src*="icon.svg"]','img[src*="i.snap.as/"]',"span"]},{url:["wszystkoconajwazniejsze.pl"],css:`#papier img {
    mix-blend-mode: normal !important;
}`},{url:["wuffs.org"],css:`.heavyShower {
    background-color: \${#e4b849} !important;
}
.lightShower {
    background-color: \${#ff9} !important;
}
.wday-0,
.wday-6 {
    background: \${#ccc} !important;
}
.wday-0 .mWeekday,
.wday-6 .mWeekday {
    color: \${#000059} !important;
}
select:focus {
    color: var(--darkreader-selection-text) !important;
}`},{url:["wunderground.com"],css:`.bar-on {
    fill: rgba(0, 0, 0, 0.4) !important;
}`},{url:["wvpublic.org"],invert:[".Page-header-logo",".chevron"]},{url:["www.123cha.com"],invert:[".logo"]},{url:["www.adjust.com"],invert:[".homepage .a-section:first-child::before"],css:`.a-section.bg-gradient {
    --bg-gradient-end: \${white} !important;
    --bg-gradient-start: var(--darkreader-neutral-background) !important;
}`},{url:["www.androidauthority.com"],invert:["header > a > svg","header > div > button > svg","footer > div > div > a > svg"],css:`footer {
    background-image: none !important;
}`},{url:["www.bilibili.com"],css:`.login-scan-box {
    background: white !important;
}
.bili-mini-content-wp .login_qrcode_tip {
    height: 173px !important;
    left: 0px !important;
    top: 0px !important;
    width: 173px !important;
}
.qrcode {
    background: white !important;
}
.button::before {
    background-color: var(--_container-color) !important;
}
body {
    background: var(--darkreader-neutral-background) !important;
}`},{url:["www.bromite.org"],css:`body,
#container {
    background-image: none !important;
}`},{url:["www.dcard.tw"],css:`#__next {
    background-color: var(--color-main-dark) !important;
}
.atm_26_6oh0b4.atm_26_6oh0b4 {
    background-color: var(--darkreader-bg--color-ui-background) !important;
}
.atm_leio7s_1647m0t svg {
    fill: var(--darkreader-text--color-text-semi-light) !important;
}
.atm_2d_1nnff6z.atm_2d_1nnff6z {
    background-color: var(--avatar-color) !important;
}`},{url:["www.ebay.*","www.ebay.*.*"],css:`html,
body {
    background-image: none !important;
}
.ifh-container button.icon-btn > svg {
    fill: \${#191919} !important;
}
:root {
    --color-foreground-primary: \${#191919} !important;
    --color-neutral-7: \${#191919} !important;
}`},{url:["www.encyclopedia-titanica.org"],css:`body {
    background-color: var(--darkreader-neutral-background) !important;
    background-image: none !important;
}`},{url:["www.federica.unina.it"],invert:["img.latex"]},{url:["www.flickr.com"],ignoreInlineStyle:["#icon-flickr_logo_dots path"]},{url:["www.freepascal.org/docs-html"],invert:["img"]},{url:["www.freeriderhd.com"],css:`#game-container {
    background-color: #cdcdcd !important;
}`},{url:["www.google.*","www.google.*.*"],invert:[".gb_hc",".gb_ec",".gb_x.gb_Vb",".gb_x.gb_Ub",".gb_0b",'#dictionary-modules img[src*="png"]',"a.gb_b > div",'a[href*="about/products"][title]',".JOmIqc",".hLcKi","#EcMbV",'#wrap a[href="/mobile/"]',".vk-sf-b",".vk-t-btn",".ChZgtd div::before",".ChZgtd div::after",".yPHXsc div",".mn-dwn-arw","img.act-icon-dark-gray",".YsGUOb",".tays_show_more_answer_button_hide",".tays_show_more_answer_button_show","#tays_add_more_answers_button_hide","#tays_add_more_answers_button",'img[src^="https://www.google.com/maps"]','[data-attrid="formula-image"]','[data-attrid^="variable"] img','[src^="/chrome/static/images/thank-you/"]','[src^="/chrome/static/images/reversible/"]','[src="/chrome/static/images/gpay/slate.png"]','[src^="/chrome/static/images/productivity/"]','[src^="/chrome/static/images/features/phone"]','[src^="/chrome/static/images/features/big_phone"]','[src^="/chrome/static/images/be-more-productive/"]','[src^="/chrome/static/images/search-bar/chrome-ui"]','[src="/chrome/static/images/go-mobile/qr-code.png"]','[src^="/chrome/static/images/download-browser/pixel"]','[src^="/chrome/static/images/browser-by-google/pixel"]','[src^="/chrome/static/images/sync-incognito/chrome-ui"]','[src^="/chrome/static/images/download-browser/big_pixel"]','[src="/chrome/static/images/homepage/homepage_tools.png"]','[src="/chrome/static/images/homepage/homepage_privacy.png"]','[src="/chrome/static/images/google-translate/screen-english.png"]',"#shield-ok-fill-shield"],css:`.X6JNf,
.appbar,
.sfbg {
    background: var(--darkreader-neutral-background) !important;
}
.RNNXgb,
.aajZCb {
    box-shadow: 0 0 2px 0 \${rgba(0,0,0,0.16)}, 0 0 0 1px \${rgba(0,0,0,0.08)} !important;
}
.Gor6zc {
    background-color: white !important;
}
img[id^="platop"] {
    background-color: white !important;
}
.chr-full-bleed-hero {
    background-image: none !important;
}
html,
body,
img,
[role="img"],
video,
iframe,
#gb,
a[href^="https://shopping.google.com"][href*="/lists"] > span {
    filter: none !important;
}
.REySof {
    color: rgba(255,255,255,0.1) !important;
}
:root {
    --xhUGwc: var(--darkreader-neutral-background) !important;
}`,ignoreInlineStyle:[".kdPwrb",".rnt3Ze",".NYcQFd","#shield-ok-fill-shield"]},{url:["www.hapo.org"],invert:['.section__overlap[style*="/new-site/background-swoosh.png"]']},{url:["www.inu-manga.com"],css:`.bs .bsx .limit .type.Manhwa,
.listupd .utao.styletwo .uta .imgu .type.Manhwa {
    background-image: url("/wp-content/themes/mangareader/assets/images/manhwa.png") !important;
}
.bs .bsx .limit .type.Manga,
.listupd .utao.styletwo .uta .imgu .type.Manga {
    background-image: url("/wp-content/themes/mangareader/assets/images/manga.png") !important;
}`},{url:["www.jetbrains.com"],ignoreInlineStyle:['linearGradient[id*="svg"] > stop','radialGradient[id*="svg"] > stop','svg[class*="logo"]',"#__SVG_SPRITE_NODE__ > symbol > path","#__SVG_SPRITE_NODE__ > symbol > g"]},{url:["www.jiqizhixin.com"],invert:[".header__logo"]},{url:["www.khirevich.com"],invert:[".fig > img"]},{url:["www.kleinanzeigen.de"],css:`.Modal--Content,
.UserBadgesModal--Dialog {
    background-color: var(--darkreader-bg--kds-sema-color-surface) !important;
}`},{url:["www.linuxcollections.com"],invert:["html","body"],css:`body {
    background-image: none !important;
}`},{url:["www.liqpay.ua"],invert:["div.qrcode > canvas"]},{url:["www.logitech.com"],invert:[".locale-selector-bg"]},{url:["www.mayoclinic.org"],invert:[".mc-logo",'.logo > a > img[alt="Mayo Clinic"]','img[src="/-/media/images/mayologo.png"]','img[src="/styles/img/gbs/logo-mayoclinic-mobile.png"]'],css:`ul#nav.nav > li.no-image > a,
ul#nav.nav > li.current > a {
    background-image: url("/UniversalNav/Styles/img/sprite-globalnavarrows.png") !important;
}`},{url:["www.menti.com"],invert:['div#__next svg[role="img"] > title ~ g','img[src^="https://images.mentimeter.com/themes/832111/tyett7pf-brand-light.svg"]']},{url:["www.minecraft.net"],invert:[".feature-details img",".ms-accordion .shade",".ms-accordion td.platform-data",".nav-links__tab-icon"],css:`.ms-accordion td.platform-data {
    background-color: white !important;
}
div[style*="background-image: url("][style*="/background-images/bg-wool-white.png"],
.promo-area .bg-wool-light {
    background-image: none !important;
}`,ignoreImageAnalysis:[".promo-area .trans-top-dark"]},{url:["www.mozilla.org"],invert:["img.sidebar-icon","h1.c-logo"],css:`div.mzp-c-navigation-logo {
    background: \${black} !important;
}`,ignoreImageAnalysis:[".c-logo.t-browser-word-hor-white-xs",".c-logo.t-browser-word-hor-xs",".noodle-browser"]},{url:["www.msn.cn"],css:`.heading span,
msft-attribution span {
    color: var(--darkreader-neutral-background) !important;
}
.heading + .abstract {
    color: \${rgb(247, 244, 241)} !important;
}`,ignoreInlineStyle:[".article","msft-ad-label"]},{url:["www.oschina.net"],invert:[".logo > svg > g > path"]},{url:["www.phoronix.com"],css:`img[src*="/benchmark/result/"] {
    background-color: #348755 !important;
}`},{url:["www.photopea.com"],css:`.block .panelhead div .cross {
    background-image: var(--icon_cross);
}
.window .whead .cross {
    background-image: var(--icon_cross);
}
[data-darkreader-inline-fill] {
    fill: \${white} !important;
}
* {
    border-color: var(--darkreader-bg--bg-panel) !important;
}`},{url:["www.physics.utoronto.ca/~aephraim/aephraim.html"],css:`body {
    --darkreader-inline-bgcolor: var(--darkreader-neutral-background) !important;
}`},{url:["www.pixivision.net"],invert:[".hdc__logo",".ghdsp__logo",".sidebar-visible-button","._search-field-visible-button"]},{url:["www.pravda.com.ua"],invert:["div.war_img > img","div.footer_social_wrapper > a > img","div.interfax > a > img","div.footer_contacts > div.footer_img > img","div.main_logo > a.main_logo_link > svg","div.post_social > a > img","div.post_statistic > div.post_views > img","span.icon-menu"]},{url:["www.psytec.co.jp"],invert:['[background$="images/square.gif"]','[background$="images/square.gif"] > *','td[background*="images/sep_b"]']},{url:["www.qr-code-generator.com"],ignoreInlineStyle:["qrcg-generator-qr-code *"]},{url:["www.qt.io"],css:`.b-background__wrapper .b-background__asset[style^="background-image"] {
    filter: brightness(50%) sepia(40%) !important;
}
div[class*="frontpage"] .scheme--default p {
    color: var(--darkreader-neutral-text) !important;
}`},{url:["www.rbc.ua"],invert:[".h-inner > .logo"]},{url:["www.realtek.com"],css:`#t3-header,
body > div.t3-wrapper > div > div.section-wrap.bg-wrap1 > div > div > div.custom > div > a {
    background: var(--darkreader-neutral-background) !important;
}
#t3-header > div > div.col-xs-3.visible-xs-block > button.search-toggle,
#t3-header > div > div.col-xs-3.visible-xs-block > button.globe-toggle {
    background-color: inherit !important;
}`},{url:["www.scien.cx"],css:`body.custom-background {
    background-image: none !important;
}`},{url:["www.searchenginejournal.com"],invert:[".sej-footer-logo",".sej-mobile-logo",".whitelogo"]},{url:["www.sentienceinstitute.org"],css:`div.parallax-mirror {
    z-index: auto !important;
}`},{url:["www.soepub.com/discuzx34","www.soepub.net/discuzx34"],css:`.c_l,
.c_r,
.c_yb,
.c_yc,
.c_ycr,
.c_yt {
    background-image: none !important;
}`},{url:["www.songsterr.com"],invert:['use[href^="#rest"]','use[href^="#dot"]'],css:`#tablature svg text {
    fill: var(--darkreader-neutral-text) !important;
}
#tablature svg path {
    stroke: var(--darkreader-neutral-text) !important;
}
section[role="main"] div[style^="transform"] {
    mix-blend-mode: normal !important;
}`},{url:["www.sport5.co.il"],invert:[".news-room-placeholder .container-message-in .newsroom-row .newsroom-spitz"]},{url:["www.statshunters.com"],invert:[".logo"],css:`.highcharts-background {
    fill: none !important;
}
.highcharts-text-outline {
    stroke: none !important;
}`},{url:["www.stern.de"],css:`.page {
    --page-background: var(--darkreader-neutral-background) !important;
}
.slide-navigation {
    background: var(--darkreader-neutral-background) !important;
}`},{url:["www.storm.mg"],invert:[".footer_logo_img","#logo_img"]},{url:["www.tandfonline.com"],invert:["img.no-mml-formula"]},{url:["www.thisoldhouse.com"],invert:['.c-masthead__main[style^="background-image"]'],ignoreInlineStyle:[".c-footer__logo-link *"]},{url:["www.thivien.net"],css:`body {
    background-image: none !important;
}`},{url:["www.tiktok.com"],invert:[".like-container .icon",".logo-link",'div[class*="DivSeekBarContainer"]','div[class*="DivVolumeControlCircle"]','div[class*="DivVolumeControlBar"]','div[class*="DivVolumeControlProgress"]',".video-control-container-browser",".volume-control-container-browser",".seek-bar-container",".volume-control-container",'svg[class*="StyledLinkLogo"]','svg[class*="SvgPlayIcon"]',"#svg-music-note > path"],css:`[data-e2e="like-icon"] svg,
[data-e2e="comment-icon"] svg,
[data-e2e="share-icon"] svg {
    fill: var(--darkreader-neutral-text) !important;
}`},{url:["www.tinkoff.ru"],invert:['a[title="Tinkoff"]']},{url:["www.tumblr.com"],invert:[".QnWzN > div",'div[role="progressbar"]'],css:`a[data-testid="google-login-button"],
a[data-testid="apple-login-button"] {
    background-color: var(--darkreader-neutral-background) !important;
}
footer[role="contentinfo"] > ul > li > a {
    filter: invert(0%) hue-rotate(180deg) contrast(200%) !important;
}
:root {
    --darkreader-bg--secondary-accent: 31, 32, 34 !important;
    --darkreader-bg--white: 23, 23, 23 !important;
    --darkreader-text--black: 228, 224, 218 !important;
}`},{url:["www.typingclub.com"],css:`object {
    color-scheme: initial !important;
}`},{url:["www.w3schools.com"],ignoreInlineStyle:[".colorbox .innerbox"]},{url:["www.webofscience.com"],css:`.hh,
.labl,
mark {
    background-color: gray !important;
    color: var(--darkreader-neutral-text) !important;
}`},{url:["www.wikihow.com"],invert:[".qa_obscured_answer_overlay :last-child:not(strong *)"]},{url:["www.windy.com"],invert:[".data-table > .forecast-table.progress-bar > canvas"],css:`#plugin-detail {
    text-shadow: rgb(40, 43, 54) 0px 1px 0px !important;
}`},{url:["www1.flightrising.com"],invert:["#sitewide-effort-details","#sitewide-effort-description","#sitewide-effort-status","#sitewide-effort-current-milestone-title","#sitewide-effort-action","#big-login-form-button",'img[src$="button-subtract-35.png"]','img[src$="turn-in-button.png"]','img[src*="effort/banner_overlays"]','img[src$="button_back.png"]','.dragontip div[style^="background-image"]','.dragontip div[style^="background-image"] *',"#bbcode-tag-bar",'.common-hub-item-button:not([href*="dig-sites"],[href*="database"],[id*="archaeology-muster"])','.common-hub-item-button:not([href*="dig-sites"],[href*="database"],[id*="archaeology-muster"]) .common-hub-item-description','img[src*="edit."]','img[src*="feed."]',"#usertab",".tabstat","#namespan",'img[src*="down_arrow."]',"#energybar","#target","#ltavtr","#element-banner","#statusboxcontext","#status-box-bottom","#lair-action-mode",'img[src*="customize"]','img[src*="button-breed."]','img[src*="bond."]','img[src*="switch-familiar"]','img[src*="share"]','img[src*="predict-morphology"]','img[src*="add-35"]','img[src*="edit-bio"]','img[src*="scenic-mode"]','img[src*="pagination-previous."]','img[src*="pagination-next."]','img[src*="add-tabs"]','img[src*="add-slots"]','img[src*="move-to-tab"]','img[src*="move-to-lair"]','img[src*="move-to-den."]','img[src*="exit"]','#dragon-profile-scene[style*="11.jpg"]','#dragon-profile-scene[style*="10.jpg"]','#dragon-profile-scene[style*="9.jpg"]','#dragon-profile-scene[style*="8.jpg"]','#dragon-profile-scene[style*="7.jpg"]','#dragon-profile-scene[style*="6.jpg"]','#dragon-profile-scene[style*="5.jpg"]','#dragon-profile-scene[style*="4.jpg"]','#dragon-profile-scene[style*="3.jpg"]','#dragon-profile-scene[style*="2.jpg"]','#dragon-profile-scene[style*="1.jpg"]',"#speech-bubble","#speech-bubble-content",".baldwin-create-instruct",'img[src*="baldwincreate."]','img[src*="incubate."]','img[src*="icon_help."]','img[src*="filter"]','img[src*="mode-hoard"]','img[src*="function-vault"]','img[src*="function-ah"]','img[src*="function-sell"]','img[src*="function-convert"]',".hoard-stack-function-toggle-hoard-sell-lock",'img[src*="favorite-off"]','img[src*="select-all"]','img[src*="purchase-den"]',".unlock-slots-dialog-button-remaining","#compose",".menu_content",".achievements-nav",".pursuits-nav",".market-actions","#ah-topright-tray",".ah-landing-button",".ah-landing-button p",".ah-search-tab-up",".ah-search-tab-down",'img[src*="catalog."]','img[src*="swipptrade."]',"#raffle-background",".raffle-winners",'img[alt*="Transmute"]','img[alt*="Create New"]','img[src*="dig-sites."]','img[src*="muster-resources."]',".archaeology-dig-site-index-row-image",".archaeology-dig-site-index-row-focus-toggle",'img[src*="rugged-work."]','img[src*="precise-work."]',"#tradetype",'img[src*="attachdragon."]','img[src*="tradedetails."]',".custom-shops-list-item",".custom-shops-list-item-description",".faire-tooltip .header",".faire-tooltip .header h1","#dominance-background-image",'img[src*="new_posts."]',"#forum-pinglists","#forum-search","#toggle-subscribe",'img[src*="icon-alert."]','img[src*="icon-quote."]',".wws-carousel-slide",".wws-carousel-slide-text",".wws-carousel-navigation-previous",".wws-carousel-navigation-next","#toggle_button","#dressing-room-landing-page",'img[src*="loadoutfit."]','img[src*="saveoutfit."]','img[src*="importapparel."]','img[src*="clearall."]',"#scrybanner > div","#assay-container","#assay-container > div",'img[src*="bg_foreseeprogeny."]','img[src*="offspring_preview."]',"#load-morphology","#save-morphology",'.common-hub-item-button[href*="database"] img',"#game-database-search-icon",'img[src*="-auction-house."]','img[src*="suggest."]','img[src*="icon-help."]',".btn-restore","#ticker","#ticker > div","#lucky-streak","#lucky-streak > div","#fullscreen",".baldwin-create-instruct",".baldwin-create-instruct > div",".ah-listing-clear-button",".ah-clear-all-btn",".ah-listing-relist-button","div#status-box-mid","div#status-box-mid ol","div#status-box-mid div",".status-row-text img",'img[src*="den-slot-unlock."]',".ah-collect-all-btn",'img[src*="canceltrade."]','img[src*="newtopic."]',"#dragtext","#manntext","#morphtext",'img[src*="success_catch."]',".ah-listing-buy-button","#random-dragon","#random-dragon a","#baldwin #plus-button","#divcontrade"],css:`.main:not([style*="familiar/background."],[style*="custom-shop-b"]) {
    background-image: none !important;
}
.swipp-tradebox {
    background-color: var(--darkreader-neutral-background) !important;
}
.lair-supply.lair-supply-meat.common-tooltip {
    background-image: url("/static/layout/icon_meat.png") !important;
}
#trading-post-content {
    background-image: none !important;
}
#crimswap {
    background-image: none !important;
}
#predict-morphology {
    background-image: none !important;
}
#random-dragon {
    color: black !important;
}
.contentcontainer {
    background-color: var(--darkreader-neutral-background) !important;
    background-image: none !important;
}
.scry-image-rear {
    background: url(https://i.imgur.com/1b5mZWZ.png) no-repeat !important;
}
.outfit-image-rear {
    background: url(https://i.imgur.com/FrkDinQ.png) no-repeat !important;
}
img[src*="ss_scavenge."] {
    display: none !important;
}
.itemmeat {
    background-image: url(/static/layout/tooltips/food-meat.png) !important;
}
div#status-box-mid {
    background-image: url(/static/layout/sitestatus_spacer.png) !important;
}
.status-row-text {
    color: black !important;
}
#dragon-profile-likes[data-active="false"] .dragon-profile-likes-icon {
    background-image: url(/static/layout/icon_star_disabled.png) !important;
}
.ah-listing-buy-button {
    background-color: lighten(var(--darkreader-neutral-background), 50%) !important;
}
#baldwin #plus-button {
    background-color: lighten(var(--darkreader-neutral-background), 50%) !important;
}`,ignoreImageAnalysis:["#gem_pack_1","#gem_pack_1:hover","#gem_pack_2","#gem_pack_2:hover","#gem_pack_3","#gem_pack_3:hover","#ah-topright-buy-button","#ah-topright-sell-button","#usertab",".baldwin-create-instruct",".archaeology-dig-plot-square",".scry-image-rear",".outfit-image-rear","#baldwin-xpbar-fill",'.hoard-result-item-use[data-type="baldwin"]::after','.hoard-result-item-use[data-type="den"]::after',"#ticker",".itemmeat",'li[data-visible="true"] .dr-apparel-visibility',".lair-supply.lair-supply-meat.common-tooltip",".archaeology-supply-pickaxe",".ah-listing-clear-button",".ah-clear-all-btn","#archaeology-muster-resources",".ah-collect-all-btn",".ah-listing-buy-button","#baldwin #plus-button"]},{url:["wx.qq.com","wx2.qq.com"],css:`body {
    background-image: none !important;
}`},{url:["wxwidgets.org"],invert:['img[src$="header-logo.png"]']},{url:["wyborcza.pl","wyborcza.biz"],invert:["#wH_username_wrap img",".account-cap--logo",".cap-navigation--back",".cap-vignette--logo-image",".header-cap-holder a img",".nmk_avatar-icon",".partners-list-item",".partners-list-item-text",".podcast-player-control ::after",".podcast-player-time-progress",".return-back img",".wyborcza-logo",'a[title="Aplikacja wyborcza.pl"]',"img.logo",".button svg",".btn.pull-right.dismiss",".slider_nekrologi p::before",'img[src*="WYBORCZA-NEKROLOGI.png"]']},{url:["wysokieobcasy.pl"],invert:[".vin-img-link-pic.vin-local-img-link-pic"]},{url:["x-kom.pl","*.x-kom.pl"],invert:['a[href="/"] img','a[href="https://x-kom.pl"] img','a[href="https://www.x-kom.pl"] img','div[title*="panel"] svg','img[alt="Menu"]','img[alt*="Logo"]','img[src*="Logo_strefy_marek"]','img[src*="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iM"]','img[src*="data:image/svg+xml;base64,PHN2ZyB4bWxucz0ia"]',".geex a img",'a[href="https://geex.x-kom.pl/"] img','img[alt="Geex logotyp"]'],css:`[class*="parts__SlideContainer"] picture,
.ePVVIv {
    filter: brightness(0.8);
}`},{url:["xcite.com"],invert:["li.xc-product-slider-item__actions-bar__express.xcf.xcf--Rocket3-012222","li.xc-product-slider-item__actions-bar__express.xcf.xcf--express-delivery","li.xc-product-slider-item__actions-bar__pickup.xcf.xcf--bag","li.xc-product-slider-item__actions-bar__secret-deal.xcf.xcf--secret-deal","div > a.xc-product-slider-item__name","div.titleFyler > span.weeklyTitle"],css:`div.algolia-instant-results-wrapper {
    background-color: var(--darkreader-neutral-background);
}`},{url:["xda-developers.com"],invert:[".hb-trigger"],css:`body.tag {
    color: var(--darkreader-neutral-text) !important;
}`},{url:["xfree86.org"],invert:['img[src*=".png"]']},{url:["xiph.org"],invert:['img[src$="fish_xiph_org.png"]']},{url:["y.qq.com"],invert:[".popup_guide__logo",".qqmusic_logo"]},{url:["yadi.sk"],invert:["span.logo.burger-sidebar__logo","span.logo.burger-sidebar__sidebar-logo"]},{url:["yamicsoft.com"],css:`.slider-wrapper .slide-secound-detail,
.slider-wrapper .slide-secound-title {
    color: var(--darkreader-neutral-background) !important;
}`},{url:["yandex.*/internet"],invert:['a[href="/internet"]']},{url:["yandex.*/maps","yandex.*/web-maps"],invert:['.content-panel-header__logo path[d^="M39.64 22.32"]',".whats-here-preview__control-search-icon",".close-button._color_black._circle",".business-social-links-view__icon",".social-share-view_discovery-small",".social-share-view_discovery-large",".orgpage-social-links-view__icon",".promo-button__promo-image-container",".orgpage-photos-view__empty",".map-container > ymaps > ymaps > canvas"],css:`span[class$="business-reactions-view__icon"],
div[class$="business-reactions-view__counter"],
span[class$="business-reactions-view__icon _dislike"] {
    color: \${#aba8a8} !important;
}`},{url:["yandex.*/pogoda"],invert:[".maps-widget-nowcast__map-link",".weather-maps__map > ymaps > ymaps > ymaps > ymaps",".color-scale__line",".weather-table__wind-direction > .icon_wind",".icon_color_black"]},{url:["yandex.*/support"],invert:[".header2__logo"]},{url:["yandex.eu/showcaptcha"],css:`.AdvancedCaptcha-SilhouetteTask {
    background-color: teal !important;
}`},{url:["yandex.ru/blog/narod-karta"],invert:[".y-header_club__logo",".y-header_club__service"]},{url:["yandex.ru/q"],invert:['header a[href="/q/"] svg']},{url:["yelp.com"],invert:["#logo:not(.homepage-hero_logo)",'img[src$="40x40_food_v2.svg"]','.gm-style img[role="presentation"]:not([src*="v="])']},{url:["yeniakit.com.tr"],css:`.photo-news-detail-cover .article-header > .image {
    z-index: 0 !important;
}
.photo-news-detail-cover .article-header > .black-shadow {
    z-index: 1 !important;
}
.photo-news-detail-cover .article-header > .social-box,
.photo-news-detail-cover .article-header > .category {
    z-index: 2 !important;
}`},{url:["yettel.rs"],invert:[".header-container"]},{url:["yle.fi"],invert:['[class*="AreenaHeader"]','[class*="TheEndIsDelight__Svg"]'],ignoreImageAnalysis:[".yle-header figure.yle-header-logo"]},{url:["yougetsignal.com"],invert:['img[src^="img/"]']},{url:["youla.ru"],invert:['section[data-test-component="HeaderActionMenu"] a > svg > path:nth-child(2n+2)',"#map-1 canvas"]},{url:["youmath.it","*.youmath.it"],invert:[".ltximg"]},{url:["youtube.com"],invert:["#tube-mount .b img","#ytd-player + .efyt-control-bar > button"],css:`#search-icon-legacy.ytd-searchbox {
    border: 1px solid var(--ytd-searchbox-legacy-border-color) !important;
}
html:not(.style-scope) {
    --accent-color: \${#ff4081} !important;
    --disabled-text-color: \${#9b9b9b} !important;
    --divider-color: \${#dbdbdb} !important;
    --error-color: \${#dd2c00} !important;
    --primary-background-color: \${#ffffff} !important;
    --primary-color: \${#3f51b5} !important;
    --primary-text-color: \${#212121} !important;
    --yt-alert-background: \${hsla(0, 0%, 93.3%, .4)} !important;
    --yt-app-background: \${hsl(0, 0%, 100%)} !important;
    --yt-border-color: \${hsl(0, 0%, 93.3%)} !important;
    --yt-button-active-color: \${hsl(0, 0%, 6.7%)} !important;
    --yt-channel-header-background: \${hsl(0, 0%, 98%)} !important;
    --yt-chat-bubble-other-background-color: \${#F9F9F9} !important;
    --yt-chat-bubble-other-border-color: \${#CCCCCC} !important;
    --yt-chat-bubble-self-background-color: \${#EDEDED} !important;
    --yt-chat-bubble-self-border-color: \${#CCCCCC} !important;
    --yt-commentbox-border-active: \${hsla(0, 0%, 6.7%, .6)} !important;
    --yt-commentbox-border-inactive: \${hsl(0, 0%, 93.3%)} !important;
    --yt-copyright-text: \${hsla(0, 0%, 6.7%, .6)} !important;
    --yt-dialog-background: \${hsl(0, 0%, 100%)} !important;
    --yt-emoji-picker-search-background-color: \${hsla(0, 0%, 100%, .6)} !important;
    --yt-emoji-picker-search-color: \${hsla(0, 0%, 6.7%, .8)} !important;
    --yt-emoji-picker-search-placeholder-color: \${hsla(0, 0%, 6.7%, .6)} !important;
    --yt-expand-color: \${hsla(0, 0%, 6.7%, .6)} !important;
    --yt-featured-channel-title-text-color: \${hsla(0, 0%, 0%, .54)} !important;
    --yt-formatted-string-deemphasize-color: \${hsl(0, 0%, 53.3%)} !important;
    --yt-guide-background: \${hsl(0, 0%, 96%)} !important;
    --yt-guide-entry-text-color: \${hsla(0, 0%, 6.7%, .8)} !important;
    --yt-hovered-text-color: \${hsla(0, 0%, 6.7%, .8)} !important;
    --yt-icon-active-color: \${hsl(0, 0%, 6.7%)} !important;
    --yt-icon-color: \${hsla(0, 0%, 6.7%, .4)} !important;
    --yt-icon-disabled-color: \${hsla(0, 0%, 6.7%, .6)} !important;
    --yt-icon-hover-color: \${hsla(0, 0%, 6.7%, .8)} !important;
    --yt-item-section-header-color: \${hsla(0, 0%, 6.7%, .6)} !important;
    --yt-live-chat-action-panel-background-color: \${hsla(0, 0%, 93.3%, .4)} !important;
    --yt-live-chat-action-panel-background-color-transparent: \${hsla(0, 0%, 97%, .8)} !important;
    --yt-live-chat-background-color: \${hsl(0, 0%, 100%)} !important;
    --yt-live-chat-disabled-icon-button-color: \${hsla(0, 0%, 6.7%, .2)} !important;
    --yt-live-chat-picker-button-color: \${hsla(0, 0%, 6.7%, .4)} !important;
    --yt-live-chat-primary-text-color: \${hsl(0, 0%, 6.7%)} !important;
    --yt-live-chat-secondary-background-color: \${hsl(0, 0%, 93.3%)} !important;
    --yt-live-chat-secondary-text-color: \${hsla(0, 0%, 6.7%, .6)} !important;
    --yt-live-chat-tertiary-text-color: \${hsla(0, 0%, 6.7%, .4)} !important;
    --yt-live-chat-text-input-field-suggestion-background-color: \${hsl(0, 0%, 100%)} !important;
    --yt-live-chat-text-input-field-suggestion-background-color-hover: \${#eee} !important;
    --yt-live-chat-text-input-field-suggestion-text-color: \${#666} !important;
    --yt-live-chat-text-input-field-suggestion-text-color-hover: \${#333} !important;
    --yt-live-chat-vem-background-color: \${hsl(0, 0, 93.3%)} !important;
    --yt-main-app-background: \${hsl(0, 0%, 98%)} !important;
    --yt-main-app-background-tmp: \${hsl(0, 0%, 100%)} !important;
    --yt-material-searchbox-active: \${hsl(0, 0%, 100%)} !important;
    --yt-material-searchbox-active-shadow: \${hsla(0, 0%, 0%, .26)} !important;
    --yt-material-searchbox-inactive: \${hsla(0, 0%, 93.3%, .6)} !important;
    --yt-material-searchbox-inactive-shadow: \${hsla(0, 0%, 53.3%, .2)} !important;
    --yt-material-searchbox-inset: \${hsla(0, 0%, 0%, .04)} !important;
    --yt-menu-focus-background-color: \${hsla(0, 0%, 6.7%, .2)} !important;
    --yt-menu-hover-backgound-color: \${hsl(0, 0%, 93.3%)} !important;
    --yt-paper-button-ink-color: \${hsl(0, 0%, 53.3%)} !important;
    --yt-placeholder-text: \${hsla(0, 0%, 6.7%, .6)} !important;
    --yt-placeholder-text-color: \${hsla(0, 0%, 6.7%, .6)} !important;
    --yt-playlist-background-header: \${hsl(0, 0%, 93.3%)} !important;
    --yt-playlist-background-item: \${hsla(0, 0%, 93.3%, .6)} !important;
    --yt-playlist-message-text: \${hsla(0, 0%, 6.7%, .6)} !important;
    --yt-playlist-message-text-hover: \${hsl(0, 0%, 6.7%)} !important;
    --yt-playlist-title-text: \${hsl(0, 0%, 6.7%)} !important;
    --yt-primary-color: \${hsl(0, 0%, 6.7%)} !important;
    --yt-primary-disabled-button-text-color: \${hsl(0, 0%, 100%)} !important;
    --yt-primary-text-color: \${hsl(0, 0%, 6.7%)} !important;
    --yt-searchbox-background: \${hsl(0, 0%, 100%)} !important;
    --yt-secondary-text-color: \${hsla(0, 0%, 6.7%, .8)} !important;
    --yt-sidebar-background: \${hsl(0, 0%, 98%)} !important;
    --yt-simple-menu-header-background: \${hsl(0, 0%, 93.3%)} !important;
    --yt-spec-10-percent-layer: \${rgba(0, 0, 0, 0.10)} !important;
    --yt-spec-badge-chip-background: \${rgba(0, 0, 0, 0.05)} !important;
    --yt-spec-brand-background-primary: \${rgba(255, 255, 255, 0.98)} !important;
    --yt-spec-brand-background-secondary: \${rgba(255, 255, 255, 0.95)} !important;
    --yt-spec-brand-background-solid: \${#FFFFFF} !important;
    --yt-spec-brand-icon-active: #{rgb(255, 0, 0)} !important;
    --yt-spec-brand-icon-inactive: \${#606060} !important;
    --yt-spec-brand-subscribe-button-background: \${#FF0000} !important;
    --yt-spec-brand-text-button-focus-outline: \${rgba(204, 0, 0, 0.30)} !important;
    --yt-spec-button-chip-background-hover: \${rgba(0, 0, 0, 0.10)} !important;
    --yt-spec-call-to-action: \${#065FD4} !important;
    --yt-spec-call-to-action-button-focus-outline: \${rgba(6, 95, 212, 0.30)} !important;
    --yt-spec-call-to-action-inverse: \${#3EA6FF} !important;
    --yt-spec-error-background: \${#1F1F1F} !important;
    --yt-spec-feed-background-a: \${#F9F9F9} !important;
    --yt-spec-feed-background-b: \${#F3F3F3} !important;
    --yt-spec-feed-background-c: \${#EDEDED} !important;
    --yt-spec-filled-button-focus-outline: \${rgba(0, 0, 0, 0.60)} !important;
    --yt-spec-filled-button-text: \${#FFFFFF} !important;
    --yt-spec-general-background-a: \${white} !important;
    --yt-spec-general-background-b: \${#f1f1f1} !important;
    --yt-spec-general-background-c: \${#e9e9e9} !important;
    --yt-spec-icon-active-other: \${#606060} !important;
    --yt-spec-icon-disabled: \${#CCCCCC} !important;
    --yt-spec-icon-inactive: \${#909090} !important;
    --yt-spec-inactive-text-button-focus-outline: \${#CCCCCC} !important;
    --yt-spec-selected-nav-text: \${#CC0000} !important;
    --yt-spec-suggested-action: \${#F2F8FF} !important;
    --yt-spec-text-disabled: \${#909090} !important;
    --yt-spec-text-primary: \${#0A0A0A} !important;
    --yt-spec-text-primary-inverse: \${#FFFFFF} !important;
    --yt-spec-text-secondary: \${#606060} !important;
    --yt-spec-themed-blue: \${#065FD4} !important;
    --yt-spec-themed-green: \${#107516} !important;
    --yt-spec-touch-response: \${#000000} !important;
    --yt-spec-wordmark-text: \${#282828} !important;
    --yt-std-body-300: \${hsla(0, 0%, 0%, .54)} !important;
    --yt-std-surface-200: \${hsl(0, 0%, 98%)} !important;
    --yt-std-surface-300: \${hsl(0, 0%, 96%)} !important;
    --yt-std-surface-400: \${hsl(0, 0%, 93%)} !important;
    --yt-swatch-icon-color: \${hsla(0, 0%, 6.7%, .4)} !important;
    --yt-swatch-input-text: \${hsl(0, 0%, 6.7%)} !important;
    --yt-swatch-primary: \${hsl(0, 0%, 100%)} !important;
    --yt-swatch-primary-darker: \${rgb(230, 230, 230)} !important;
    --yt-swatch-text: \${hsla(0, 0%, 6.7%, .4)} !important;
    --yt-swatch-textbox-bg: \${rgb(255, 255, 255)} !important;
    --yt-tertiary-text-color: \${hsla(0, 0%, 6.7%, .6)} !important;
    --yt-thumbnail-placeholder-color: \${hsl(0, 0%, 89%)} !important;
    --yt-transcript-background: \${hsl(0, 0%, 100%)} !important;
    --yt-video-secondary-info-description-background: \${hsla(0, 0%, 93.3%, .6)} !important;
    --ytd-backstage-attachment-background-color: \${hsl(0, 0%, 100%)} !important;
    --ytd-backstage-attachment-icon-hover-color: \${hsla(0, 0%, 0%, .74)} !important;
    --ytd-backstage-cancel-background-color: \${hsl(0, 0%, 100%)} !important;
    --ytd-backstage-cancel-color: \${hsla(0, 0%, 6.7%, .4)} !important;
    --ytd-backstage-creationbox-background-color: \${hsl(0, 0%, 98%)} !important;
    --ytd-backstage-creationbox-background-color-focus: \${hsl(0, 0%, 96%)} !important;
    --ytd-backstage-creationbox-disabled-button-color: \${hsla(0, 0%, 0%, .04)} !important;
    --ytd-backstage-creationbox-disabled-button-text-color: \${hsl(0, 0%, 100%)} !important;
    --ytd-backstage-creationbox-inactive-color: \${hsla(0, 0%, 0%, .26)} !important;
    --ytd-backstage-creationbox-input-text-color: \${hsla(0, 0%, 0%, .87)} !important;
    --ytd-backstage-creationbox-text-color: \${hsla(0, 0%, 0%, .54)} !important;
    --ytd-backstage-image-alert-color: \${hsla(0, 0%, 6.7%, .6)} !important;
    --ytd-backstage-metadata-text-color: \${hsl(0, 0%, 53.3%)} !important;
    --ytd-backstage-video-link-background-color: \${hsla(0, 0%, 93.3%, .4)} !important;
    --ytd-badge-disabled-color: \${hsla(0, 0%, 53.3%, .4)} !important;
    --ytd-collection-badge-color: \${hsla(0, 0%, 6.7%, .8)} !important;
    --ytd-comment-text-color: \${hsl(0, 0%, 6.7%)} !important;
    --ytd-moderation-icon-color: \${hsla(0, 0%, 6.7%, .6)} !important;
    --ytd-moderation-icon-hover-color: \${hsl(0, 0%, 6.7%)} !important;
    --ytd-moderation-panel-background: \${hsla(0, 0%, 93.3%, .6)} !important;
    --ytd-moderation-panel-comment-metadata-text: \${hsla(0, 0%, 6.7%, .6)} !important;
    --ytd-moderation-panel-comment-text: \${hsl(0, 0%, 6.7%)} !important;
    --ytd-moderation-panel-hover: \${hsla(0, 0%, 93.3%, .8)} !important;
    --ytd-offer-background-color: \${hsla(0, 0%, 93.3%, .4)} !important;
    --ytd-owner-badge-color: \${hsla(0, 0%, 6.7%, .4)} !important;
    --ytd-searchbox-border-color: \${hsla(0, 0%, 53.3%, .2)} !important;
    --ytd-searchbox-legacy-border-color: \${#ccc} !important;
    --ytd-searchbox-legacy-border-shadow-color: \${#eee} !important;
    --ytd-searchbox-legacy-button-border-color: \${#d3d3d3} !important;
    --ytd-searchbox-legacy-button-color: \${#f8f8f8} !important;
    --ytd-searchbox-legacy-button-focus-color: \${#e9e9e9} !important;
    --ytd-searchbox-legacy-button-hover-border-color: \${#c6c6c6} !important;
    --ytd-searchbox-legacy-button-hover-color: \${#f0f0f0} !important;
    --ytd-searchbox-legacy-button-icon-color: \${#333} !important;
    --ytd-shopping-product-info: \${hsla(0, 0%, 6.7%, .8)} !important;
    --ytd-simple-badge-color: \${hsla(0, 0%, 6.7%, .6)} !important;
    --ytd-sponsorships-background-color-focus: \${hsla(0, 0%, 93.3%, .4)} !important;
    --ytd-transcript-cue-hover-background-color: \${hsl(0, 0%, 93.3%)} !important;
    --ytd-transcript-toolbar-background-color: \${hsl(0, 0%, 93.3%)} !important;
    --ytd-transcript-toolbar-text: \${hsl(0, 0%, 6.7%)} !important;
    --ytd-vat-notice-text: \${hsla(0, 0%, 6.7%, .6)} !important;
    --ytd-video-game-watch-card-logo-color: \${hsl(0, 0%, 6.7%)} !important;
    --ytd-video-publish-date-color: \${hsla(0, 0%, 6.7%, .6)} !important;
    --ytd-watch-card-album-header-background: \${hsl(0, 0%, 100%)} !important;
    --ytd-watch-card-secondary-text-color: \${hsl(0, 0%, 53.3%)} !important;
    --ytd-watch-split-pane-sidebar-background-color: \${hsl(0, 0%, 98%)} !important;
}
.ytp-hover-progress-light {
    background-color: rgba(255,255,255,.5) !important;
}
.ytp-progress-list {
    background-color: rgba(255,255,255,.2) !important;
}
.ytp-volume-slider-handle {
    background-color: white !important;
}
.ytp-volume-slider-handle::before {
    background-color: white !important;
}
.ytp-volume-slider-handle::after {
    background-color: rgba(255,255,255,.2) !important;
}
button[aria-pressed="true"] > yt-icon:not(#guide-icon.ytd-app):not(#guide-icon.ytd-masthead),
[id$="-replies"].ytd-comment-replies-renderer > .ytd-button-renderer > paper-button,
[id$="-replies"].ytd-comment-replies-renderer > .ytd-button-renderer > paper-button  > yt-icon {
    color: var(--yt-spec-call-to-action) !important;
    fill: var(--yt-spec-call-to-action) !important;
}
.ytp-menuitem-toggle-checkbox {
    background: rgba(255, 255, 255, 0.3) !important;
}
.ytp-menuitem[aria-checked="true"] .ytp-menuitem-toggle-checkbox {
    background: #f00 !important;
}
.ytp-menuitem-toggle-checkbox::after {
    background-color: #bdbdbd !important;
}
.ytp-menuitem[aria-checked="true"] .ytp-menuitem-toggle-checkbox::after {
    background-color: white !important;
}
#date yt-formatted-string.ytd-video-primary-info-renderer,
.yt-view-count-renderer {
    color: var(--yt-spec-text-secondary) !important;
}
.ytp-contextmenu .ytp-menuitem .ytp-menuitem-toggle-checkbox {
    background: none !important;
}
.ytp-contextmenu .ytp-menuitem[aria-checked="true"] .ytp-menuitem-toggle-checkbox {
    background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" fill="white"/></svg>') !important;
}
#metadata-line.ytd-video-meta-block span.ytd-video-meta-block {
    color: var(--ytd-metadata-line-color, var(--yt-spec-text-secondary)) !important;
}
yt-formatted-string[has-link-only_]:not([force-default-style]) a.yt-simple-endpoint.yt-formatted-string {
    color: var(--yt-endpoint-color, var(--yt-spec-text-primary)) !important;
}
paper-button.ytd-subscribe-button-renderer[subscribed] {
    background-color: var(--yt-spec-10-percent-layer) !important;
}
.badge-style-type-live-now.ytd-badge-supported-renderer {
    border: 1px solid rgb(255, 78, 69) !important;
}
.ytp-load-progress {
    background: rgba(255,255,255,0.3) !important;
}
yt-chip-cloud-chip-renderer[chip-style="STYLE_DEFAULT"] {
    background-color: rgba(255,255,255,0.05);
}
yt-chip-cloud-chip-renderer[chip-style="STYLE_DEFAULT"].iron-selected {
    background-color: rgba(255,255,255,0.2);
}
paper-item[aria-selected="true"] {
    background-color: rgba(255,255,255,0.2) !important;
}
iron-input.paper-input > input.paper-input,
.input-content.paper-input-container > label,
.input-content.paper-input-container > .paper-input-label {
    color: var(--paper-input-container-shared-input-style_-_color) !important;
}
ytd-compact-autoplay-renderer,
ytd-video-primary-info-renderer,
#sections.ytd-guide-renderer > .ytd-guide-renderer:not(first-child),
ytd-video-secondary-info-renderer,
#placeholder-area.ytd-comment-simplebox-renderer {
    border-bottom-color: var(--yt-spec-10-percent-layer) !important;
}
ytd-guide-collapsible-section-entry-renderer.ytd-guide-section-renderer:not(:first-child),
ytd-metadata-row-header-renderer[has-divider-line] {
    border-top-color: var(--yt-spec-10-percent-layer) !important;
}
ytd-guide-entry-renderer[active] .guide-icon.ytd-guide-entry-renderer {
    fill: \${black} !important;
}
#hearted.ytd-creator-heart-renderer {
    fill: var(--yt-spec-static-brand-red) !important;
}
#hearted-border.ytd-creator-heart-renderer {
    fill: \${white} !important;
}
.guide-entry-badge.ytd-guide-entry-renderer {
    fill: var(--yt-spec-static-brand-red) !important;
}
#endpoint.yt-simple-endpoint.ytd-guide-entry-renderer:hover,
#endpoint.yt-simple-endpoint.ytd-guide-entry-renderer:focus {
    background-color: var(--yt-spec-badge-chip-background) !important;
}
a.yt-simple-endpoint.yt-formatted-string {
    color: var(--yt-endpoint-color, var(--yt-spec-call-to-action)) !important;
}
a.yt-simple-endpoint.yt-formatted-string:hover {
    color: var(--yt-endpoint-hover-color, var(--yt-spec-call-to-action)) !important;
}
.ytp-cards-button-icon .ytp-svg-shadow {
    fill: var(--darkreader-neutral-background) !important;
}
.ytp-doubletap-ui-legacy[data-side="back"] .ytp-doubletap-base-arrow {
    border-right-color: var(--darkreader-neutral-color) !important;
}
.ytp-doubletap-ui-legacy[data-side="forward"] .ytp-doubletap-base-arrow {
    border-left-color: var(--darkreader-neutral-color) !important;
}
.yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal {
    background-color: \${lightgray} !important;
}
.page-header-banner-image {
    background-image: var(--yt-channel-banner) !important;
}`,ignoreInlineStyle:["yt-live-chat-ticker-paid-message-item-renderer *","yt-live-chat-ticker-sponsor-item-renderer *","#ytd-player + .efyt-control-bar > button path"]},{url:["yscec.yonsei.ac.kr"],invert:["iframe","#page-sidebar"]},{url:["yume.wiki"],css:`.spoiler {
    background-color: \${black} !important;
    color: \${black} !important;
}`},{url:["yuque.com"],invert:[".lake-math-content-preview-img > img",".lake-math-container > img",'div[data-lake-card="mindmap"] > div > div > div']},{url:["zacznijzyc.net"],invert:[".logo_container"]},{url:["zadania.info"],invert:["img.latex__math-inline","img.math","img.math-display"]},{url:["zaid-ajaj.github.io"],css:`:root {
    --main-background: var(--darkreader-neutral-background) !important;
    --sidebar-background: var(--darkreader-neutral-background) !important;
}`},{url:["zdic.net"],invert:["li a img",".kxtimg",".zipic img",".zx img"],css:`.nr-box-header {
    background-image: none !important;
}`},{url:["zdw.krakow.pl"],css:`#kw-alert p,
#kw-alert a {
    color: initial !important;
}`},{url:["zendesk.com"],css:`.zendesk-editor--rich-text-container {
    background-image: none !important;
}`},{url:["zenn.dev"],invert:['a[class^="AppHeader_homeLink"]']},{url:["zeptovm.com"],invert:[".logo"]},{url:["zerossl.com"],invert:[".logo"]},{url:["zfsbootmenu.org"],css:`body {
    background-image: none !important;
}`},{url:["zhihu.com"],invert:['img[eeimg="1"]'],css:`div.css-vurnku > div > div.css-1bi2006 {
    background-color: \${darkgray} !important;
}
div.css-vurnku button {
    color: \${darkblue} !important;
}
div.css-vurnku button svg {
    fill: \${darkblue} !important;
}
div.Popover-content .Menu {
    background-color: var(--darkreader-neutral-background) !important;
}`},{url:["zhihuishu.com"],invert:['img[class="kfformula"]']},{url:["zhixue.com"],invert:[".analysis_html_new [src]",".hd2",".hd3",".ml15 [src]",".subject-info [src]",".subject-result [src]","div.analysis-content [src]","div.mt5","#sideToolbar"]},{url:["zippyshare.com"],invert:["img#browse"],css:`.inner_main > table {
    background-image: none !important;
}`},{url:["zlidc.net"],invert:["#nav-logo"]},{url:["znanium.com"],invert:[".bookreadimgs"]},{url:["zorin.com"],invert:[".logotype",".social",'img[alt="GOG logo"]','img[alt="Windows to Zorin OS"]']},{url:["zotero.org"],invert:[".brand"]},{url:["zrzutka.pl"],invert:[".navbar-logo",".rounded-circle"]},{url:["zybooks.com"],css:`.image-content-resource img,
.zyimage {
    background-color: var(--darkreader-neutral-text) !important;
}`}],za={allFrames:!0,matchAboutBlank:!0,runAt:"document_start",matches:["<all_urls>"],async main(){await Nn.runtime.sendMessage({action:"getDarkModeStatus"})&&Fn();function M(){Be.disable(),Nn.runtime.sendMessage({action:"setIcon",icon:"icon/48.png"})}class E extends Error{constructor(un){super(un),this.name="ResponseError"}}function O(){return window.self===window.top?window.self:window.parent}function $n(gn,un){const An=new Blob([gn]);return new Response(An,un)}async function yn(gn,un){const An=Math.random().toString(36).slice(2);return new Promise((an,zn)=>{function Ln(mn){const sn=mn;if(sn.data.requestId!==An||sn.data.type!=="Extension.Response")return;if(window.removeEventListener("message",Ln,!1),"body"in(sn==null?void 0:sn.data)){const Rn=$n(sn.data.body,sn.data.bodyInit);return an(Rn)}const Bn=new E(sn.data.error);Bn.statusCode=sn.data.statusCode,zn(Bn)}window.addEventListener("message",Ln,!1),O().postMessage({type:"Extension.Request",url:gn,requestId:An,options:un},"*")})}function Fn(){const gn=(an,zn)=>yn(an,zn);Be.setFetchMethod(gn);const un=document.head.insertBefore;document.head.insertBefore=function(an,zn){if(an instanceof HTMLElement&&an.classList.contains("darkreader--proxy")){const Ln=document.createElement("div");return Ln.classList.add("darkreader--proxy"),un.call(this,Ln,zn)}return un.call(this,an,zn)};const An=ja.find(an=>an.url.includes(window.location.hostname));Be.enable({brightness:100,contrast:90},An),Nn.runtime.sendMessage({action:"setIcon",icon:"icon/48-alt.png"})}Nn.runtime.onMessage.addListener((gn,un,An)=>{gn.action==="turnOnDarkMode"?Fn():gn.action==="turnOffDarkMode"?M():gn.action})}};function Yr(z,...M){}const Ma={debug:(...z)=>Yr(console.debug,...z),log:(...z)=>Yr(console.log,...z),warn:(...z)=>Yr(console.warn,...z),error:(...z)=>Yr(console.error,...z)},Ra={BASE_URL:"/",BROWSER:"chrome",CHROME:!0,COMMAND:"build",DEV:!1,EDGE:!1,ENTRYPOINT:"dark-mode",FIREFOX:!1,MANIFEST_VERSION:3,MODE:"production",OPERA:!1,PROD:!0,SAFARI:!1,SSR:!1,VITE_CJS_IGNORE_WARNING:"true"},Xr=class Xr extends Event{constructor(M,E){super(Xr.EVENT_NAME,{}),this.newUrl=M,this.oldUrl=E}};Nt(Xr,"EVENT_NAME",Ht("wxt:locationchange"));let De=Xr;function Ht(z){var E;const M=typeof Ra>"u"?"build":"dark-mode";return`${(E=Nn==null?void 0:Nn.runtime)==null?void 0:E.id}:${M}:${z}`}function Ta(z){let M,E;return{run(){M==null&&(E=new URL(location.href),M=z.setInterval(()=>{let O=new URL(location.href);O.href!==E.href&&(window.dispatchEvent(new De(O,E)),E=O)},1e3))}}}const xr=class xr{constructor(M,E){Qr(this,ar);Qr(this,Zr,window.self===window.top);Qr(this,or);Qr(this,ne,Ta(this));this.contentScriptName=M,this.options=E,Ca(this,or,new AbortController),Kr(this,Zr)&&Wt(this,ar,Ia).call(this),this.setTimeout(()=>{Wt(this,ar,Ea).call(this)})}get signal(){return Kr(this,or).signal}abort(M){return Kr(this,or).abort(M)}get isInvalid(){return Nn.runtime.id==null&&this.notifyInvalidated(),this.signal.aborted}get isValid(){return!this.isInvalid}onInvalidated(M){return this.signal.addEventListener("abort",M),()=>this.signal.removeEventListener("abort",M)}block(){return new Promise(()=>{})}setInterval(M,E){const O=setInterval(()=>{this.isValid&&M()},E);return this.onInvalidated(()=>clearInterval(O)),O}setTimeout(M,E){const O=setTimeout(()=>{this.isValid&&M()},E);return this.onInvalidated(()=>clearTimeout(O)),O}requestAnimationFrame(M){const E=requestAnimationFrame((...O)=>{this.isValid&&M(...O)});return this.onInvalidated(()=>cancelAnimationFrame(E)),E}requestIdleCallback(M,E){const O=requestIdleCallback((...$n)=>{this.signal.aborted||M(...$n)},E);return this.onInvalidated(()=>cancelIdleCallback(O)),O}addEventListener(M,E,O,$n){var yn;E==="wxt:locationchange"&&this.isValid&&Kr(this,ne).run(),(yn=M.addEventListener)==null||yn.call(M,E.startsWith("wxt:")?Ht(E):E,O,{...$n,signal:this.signal})}notifyInvalidated(){this.abort("Content script context invalidated"),Ma.debug(`Content script "${this.contentScriptName}" context invalidated`)}};Zr=new WeakMap,or=new WeakMap,ne=new WeakMap,ar=new WeakSet,Ia=function(){window.postMessage({type:xr.SCRIPT_STARTED_MESSAGE_TYPE,contentScriptName:this.contentScriptName},"*")},Ea=function(){const M=E=>{var O,$n;((O=E.data)==null?void 0:O.type)===xr.SCRIPT_STARTED_MESSAGE_TYPE&&(($n=E.data)==null?void 0:$n.contentScriptName)===this.contentScriptName&&this.notifyInvalidated()};addEventListener("message",M),this.onInvalidated(()=>removeEventListener("message",M))},Nt(xr,"SCRIPT_STARTED_MESSAGE_TYPE","wxt:content-script-started");let Pe=xr;function Oc(){}function Jr(z,...M){}const Ba={debug:(...z)=>Jr(console.debug,...z),log:(...z)=>Jr(console.log,...z),warn:(...z)=>Jr(console.warn,...z),error:(...z)=>Jr(console.error,...z)};return(async()=>{try{const{main:z,...M}=za,E=new Pe("dark-mode",M);return await z(E)}catch(z){throw Ba.error('The content script "dark-mode" crashed on startup!',z),z}})()}();
_dark_mode;
