// content.js

function applyDarkMode() {
  const css = `
    html {
      /* Apply the primary inversion to the entire page */
      filter: invert(100%) hue-rotate(180deg) !important;
      /* Setting a background prevents a white flash on load and helps with transparency issues */
      background-color: #fcfcfc !important;
    }

    /* Re-invert elements that should retain their original colors */
    /* This list is designed to be comprehensive for common media and UI elements */
    img, video, picture, canvas, svg,
    [style*="background-image" i], /* Case-insensitive match for background-image in inline styles */
    [class*="icon"], /* Elements with "icon" in their class name */
    [id*="icon"],   /* Elements with "icon" in their ID */
    button,
    input,
    textarea,
    select,
    [role="button"],
    [role="img"],
    [role="presentation"],
    a, /* Links might need re-inversion if their default colors are problematic */
    iframe,
    embed,
    object,
    /* Re-invert children and pseudo-elements to handle complex structures and shadows */
    *,
    *::before,
    *::after {
      filter: invert(100%) hue-rotate(180deg) !important;
      /* Ensure backgrounds of re-inverted elements are not affected by the root filter */
      background-color: transparent !important;
    }

    /* Special handling for elements with text shadows or box shadows */
    /* These properties can look strange when directly inverted */
    text-shadow, box-shadow {
      filter: invert(100%) hue-rotate(180deg) !important;
    }

    /* Further refine background-color handling for elements that might have specific background-colors set */
    /* This aims to prevent double inversion of already inverted backgrounds */
    [style*="background-color" i] {
        /* Attempt to reset background color to initial or a neutral state if it causes issues */
        /* Note: Perfect preservation of original background colors via CSS alone is complex */
        background-color: initial !important;
    }

    /* Sometimes, specific backgrounds need to be explicitly managed */
    /* For instance, if a site uses a dark background on a re-inverted element */
    /* This part might need custom adjustments per site */
    /* Example:
    .some-dark-background-element {
        background-color: #333 !important;
        filter: none !important; // Remove all filters if needed
    }
    */
  `;

  // Create or update the style element
  let style = document.getElementById('dark-mode-style');
  if (!style) {
    style = document.createElement('style');
    style.id = 'dark-mode-style';
    // Append to document.head for proper CSS cascade and visibility
    document.head.appendChild(style);
  }
  style.textContent = css;

  // Add a class to the html element to indicate dark mode is active
  document.documentElement.classList.add('dark-mode-active');
}

function removeDarkMode() {
  const style = document.getElementById('dark-mode-style');
  if (style) {
    style.remove();
  }
  // Remove the class from the html element
  document.documentElement.classList.remove('dark-mode-active');
}

// Apply dark mode on page load if the current site is in enabledSites
chrome.storage.sync.get("enabledSites", (data) => {
  const enabledSites = data.enabledSites || {};
  const hostname = window.location.hostname;
  if (enabledSites[hostname]) {
    applyDarkMode();
  }
});

// Listen for messages from the background script (e.g., from the popup)
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "toggleDarkMode") {
    if (message.isEnabled) {
      applyDarkMode();
    } else {
      removeDarkMode();
    }
    // Send a response back to the sender (e.g., popup script)
    sendResponse({ success: true });
  }
});
