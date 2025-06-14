chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "toggleDarkMode") {
    const hostname = message.hostname;
    const tabId = sender.tab ? sender.tab.id : message.tabId;

    chrome.storage.sync.get("enabledSites", (data) => {
      const enabledSites = data.enabledSites || {};
      const isEnabled = !enabledSites[hostname];
      enabledSites[hostname] = isEnabled;

      // Storage Update
      chrome.storage.sync.set({ enabledSites }, () => {
        // Message to apply/remove dark mode
        chrome.tabs.sendMessage(tabId, {
          action: "toggleDarkMode",
          isEnabled: isEnabled
        }, (response) => {
          sendResponse({ isEnabled });
        });
      });
    });
    return true;
  }
});
