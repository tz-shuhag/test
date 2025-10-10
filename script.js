// ==UserScript==
// @name         YT CPU Enhancer
// @version      1.0
// @description  Remove no. of notifications, CSS tweaks
// @author       TZ Shuhag
// @license MIT
// @match        *://www.youtube-nocookie.com/*
// @match        *://www.youtube.com/*
// @match        *://m.youtube.com/*
// @namespace    https://greasyfork.org/en/users/1495563
// @icon         https://www.youtube.com/favicon.ico
// @unwrap
// @run-at       document-idle
// @unwrap
// @grant        none
// ==/UserScript==
// Disable Animations, Ambient Mode
 
// Enable Strict Mode
"use strict";
 
// Define the flags to assign to the EXPERIMENT_FLAGS object
const flagsToAssign = {
  // Disable animated features (except for sub and like buttons)
  web_animated_actions: false,
  web_animated_like: false,
  web_animated_like_lazy_load: false,
  smartimation_background: false,
  // Disable ambient lighting
  kevlar_measure_ambient_mode_idle: false,
  kevlar_watch_cinematics_invisible: false,
  web_cinematic_theater_mode: false,
  web_cinematic_fullscreen: false,
  enable_cinematic_blur_desktop_loading: false,
  kevlar_watch_cinematics: false,
  web_cinematic_masthead: false,
  web_watch_cinematics_preferred_reduced_motion_default_disabled: false,
  // More tweaks
  kevlar_refresh_on_theme_change: false
};
 
const updateFlags = () => {
  // Check if the EXPERIMENT_FLAGS object exists in the window.yt.config_ property chain
  const expFlags = window?.yt?.config_?.EXPERIMENT_FLAGS;
 
  // If EXPERIMENT_FLAGS is not found, exit the function
  if (!expFlags) return;
 
  // Assign the defined flags to the EXPERIMENT_FLAGS object
  Object.assign(expFlags, flagsToAssign);
};
 
// Create a MutationObserver that calls the updateFlags function when changes occur in the document's subtree
const mutationObserver = new MutationObserver(updateFlags);
mutationObserver.observe(document, { subtree: true, childList: true });
 
// Hide the number of notifications to prevent any annoyances
// Save the original descriptor of document.title
const originalTitleDescriptor = Object.getOwnPropertyDescriptor(Document.prototype, 'title');
 
// Create a custom getter and setter
Object.defineProperty(document, 'title', {
  get: function() {
    return originalTitleDescriptor.get.call(this);
  },
  set: function(newValue) {
    // Remove the (#) with regex.
    const interceptedValue = newValue.replace(/^\(\d+\)\s?/, "");
 
    // Call the original setter
    originalTitleDescriptor.set.call(this, interceptedValue);
  }
});
 
(function() {
    'use strict';
    const style = document.createElement('style');
    style.type = 'text/css';
    style.innerText = '.yt-spec-icon-badge-shape--type-notification .yt-spec-icon-badge-shape__badge{display:none;}';
    document.head.appendChild(style);
})();


// Add CSS tweaks (disables frosted glass transparency on topbar, reducing bottom gradient in the video player, etc...)
(function() {
let css = `
/* Topbar tweaks */
ytm-mobile-topbar-renderer.frosted-glass,
ytm-pivot-bar-renderer.frosted-glass,
ytm-feed-filter-chip-bar-renderer.frosted-glass,
#background.ytd-masthead, #frosted-glass.ytd-app,
#left-arrow-button.ytd-feed-filter-chip-bar-renderer,
#right-arrow-button.ytd-feed-filter-chip-bar-renderer {
background: var(--yt-spec-base-background) !important;
backdrop-filter: none !important;
-webkit-backdrop-filter: none !important
}
 
#left-arrow.ytd-feed-filter-chip-bar-renderer:after {
background: linear-gradient(to right, var(--yt-spec-base-background) 20%, rgba(255, 255, 255, 0) 80%) !important
}
 
#right-arrow.ytd-feed-filter-chip-bar-renderer:before {
background: linear-gradient(to left, var(--yt-spec-base-background) 20%, rgba(255, 255, 255, 0) 80%) !important
}
 
ytd-button-renderer.ytd-feed-filter-chip-bar-renderer {
background: transparent !important
}
 
div#end.style-scope.ytd-masthead .yt-spec-icon-badge-shape--style-overlay.yt-spec-icon-badge-shape--type-cart-refresh .yt-spec-icon-badge-shape__badge {
color: #fff !important
}
 
.yt-spec-icon-badge-shape--type-notification .yt-spec-icon-badge-shape__badge {
display: none !important
}
 
/* Player tweaks */
#cinematics.ytd-watch-flexy {
display: none !important
}
 
.ytp-gradient-top, .ytp-gradient-bottom {
height: 61px !important;
padding: 0
}
 
.ytp-small-mode .ytp-gradient-top, .ytp-small-mode .ytp-gradient-bottom {
height: 50px !important
}
 
.ytp-big-mode .ytp-gradient-top, .ytp-big-mode .ytp-gradient-bottom {
height: 0 !important
}
 
.ytp-gradient-top {
background: linear-gradient(to bottom, #0009, #0000) !important
}
 
.ytp-gradient-bottom {
background: linear-gradient(to top, #0009, #0000) !important
}

 
/* Remove minimal annoyances and other tweaks */
ytd-ad-slot-renderer,
ytm-ad-slot-renderer,
ad-slot-renderer,
ytd-promoted-video-renderer,
ytm-promoted-video-renderer,
ytd-promoted-sparkles-web-renderer,
ytm-promoted-sparkles-web-renderer,
ytd-text-image-no-button-layout-renderer,
ytm-text-image-no-button-layout-renderer,
ytd-merch-shelf-renderer,
ytd-compact-movie-renderer,
ytd-mealbear-promo-renderer,
ytd-video-quality-promo-renderer,
tp-yt-iron-overlay-backdrop.opened {
display: none !important
}
 
.ytd-ghost-grid-renderer,
.info-skeleton,
.meta-skeleton,
#ghost-cards,
#ghost-comment-section,
#related-skeleton {
display: none !important
}
 
ytd-watch-metadata.ytd-watch-flexy {
padding-bottom: 36px !important
}`;
if (typeof GM_addStyle !== "undefined") {
  GM_addStyle(css);
} else {
  let styleNode = document.createElement("style");
  styleNode.appendChild(document.createTextNode(css));
  (document.querySelector("head") || document.documentElement).appendChild(styleNode);
}
})();
