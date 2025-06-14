function applyDarkMode() {
  document.documentElement.style.filter = "invert(100%) hue-rotate(180deg)";
  document.body.style.backgroundColor = "black";
  document.body.style.color = "white";
  const mediaElements = document.querySelectorAll("img, video, picture, iframe");
  mediaElements.forEach(element => {
    const src = element.src || "";
    if (!src.endsWith(".html") && !src.includes(".html?")) {
      element.style.filter = "invert(100%) hue-rotate(180deg)";
    }
  });
}

function removeDarkMode() {
  document.documentElement.style.filter = "none";
  document.body.style.backgroundColor = "";
  document.body.style.color = "";
  const mediaElements = document.querySelectorAll("img, video, picture, iframe");
  mediaElements.forEach(element => {
    const src = element.src || "";
    if (!src.endsWith(".html") && !src.includes(".html?")) {
      element.style.filter = "none";
    }
  });
}

// Apply dark mode on page load if site is in enabledSites
chrome.storage.sync.get("enabledSites", (data) => {
  const enabledSites = data.enabledSites || {};
  const hostname = window.location.hostname;
  if (enabledSites[hostname]) {
    applyDarkMode();
  }
});

// Listen for toggle messages from background script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "toggleDarkMode") {
    if (message.isEnabled) {
      applyDarkMode();
    } else {
      removeDarkMode();
    }
    sendResponse({ success: true });
  }
});
