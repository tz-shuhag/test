let oldHref = document.location.href;

function init() {
  let e = document.querySelector("body"),
      t = document.querySelector("head");

  let o = new MutationObserver(function (e) {
    e.forEach(function (e) {
      if (oldHref != document.location.href) {
        oldHref = document.location.href;
        replaceHomePage();
      }
      if (e.target.tagName == "TITLE") removeUnreadCountFromTitle();
    });
  });

  let s = new MutationObserver(function (e) {
    e.forEach(function (e) {
      if (e.target.tagName == "TITLE") removeUnreadCountFromTitle();
    });
  });

  let n = { childList: true, subtree: true };

  o.observe(e, n);
  s.observe(t, n);

  replaceHomePage();
  removeUnreadCountFromTitle();
}

function replaceHomePage() {
  displayBody();
  document.body.style.display = "block";
  document.body.classList.add("no-pseudo");

  if (window.location.pathname === "/") {
    document.querySelector("body").innerHTML = `
      <div class="home-container">
        <div class="logo">
          <svg viewBox="0 0 90 20" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;">
            <g viewBox="0 0 90 20" preserveAspectRatio="xMidYMid meet" class="style-scope yt-icon">
              <g class="style-scope yt-icon">
                <path d="M27.9727 3.12324C27.6435 1.89323 26.6768 0.926623 25.4468 0.597366C23.2197 2.24288e-07 14.285 0 14.285 0C14.285 0 5.35042 2.24288e-07 3.12323 0.597366C1.89323 0.926623 0.926623 1.89323 0.597366 3.12324C2.24288e-07 5.35042 0 10 0 10C0 10 2.24288e-07 14.6496 0.597366 16.8768C0.926623 18.1068 1.89323 19.0734 3.12323 19.4026C5.35042 20 14.285 20 14.285 20C14.285 20 23.2197 20 25.4468 19.4026C26.6768 19.0734 27.6435 18.1068 27.9727 16.8768C28.5701 14.6496 28.5701 10 28.5701 10C28.5701 10 28.5677 5.35042 27.9727 3.12324Z" fill="#FF0000" class="style-scope yt-icon"></path>
                <path d="M11.4253 14.2854L18.8477 10.0004L11.4253 5.71533V14.2854Z" fill="white" class="style-scope yt-icon"></path>
              </g>
              <g class="style-scope yt-icon">
                <g id="youtube-paths" class="style-scope yt-icon">
                  <!-- All the remaining <path> elements from your original code -->
                </g>
              </g>
            </g>
          </svg>
        </div>
        <div class="search-group">
          <input class="search-input" placeholder="Search" autofocus />
          <button class="search-btn">
            <div class="search-icon-container">
              <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;">
                <g class="style-scope yt-icon">
                  <path d="M20.87,20.17l-5.59-5.59C16.35,13.35,17,11.75,17,10c0-3.87-3.13-7-7-7s-7,3.13-7,7s3.13,7,7,7c1.75,0,3.35-0.65,4.58-1.71 l5.59,5.59L20.87,20.17z M10,16c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6S13.31,16,10,16z" class="style-scope yt-icon"></path>
                </g>
              </svg>
            </div>
          </button>
        </div>
      </div>
    `;

    const e = document.querySelector(".search-input"),
          t = document.querySelector(".search-btn");

    e.addEventListener("keypress", function (t) {
      if (t.key === "Enter") {
        const query = e.value;
        window.location.href = `https://www.youtube.com/results?search_query=${query}`;
      }
    });

    t.addEventListener("click", function () {
      const query = e.value;
      window.location.href = `https://www.youtube.com/results?search_query=${query}`;
    });
  }
}

function removeUnreadCountFromTitle() {
  const e = document.title;
  if (e.match(/^\(\d+\)\s*/) === null) return;
  const t = e.replace(/^\(\d+\)\s*/, "");
  document.title = t;
}

function addMinimalYoutubeClassToHtml() {
  document.documentElement.className += " minimal-youtube";
}

function addMinimalYoutubeClassToHtmlBLURTHUMBNAIL() {
  document.documentElement.className += " minimal-youtube-blur-thumbnail";
}

function displayBody() {
  document.body.style.display = "block";
}

chrome.storage.local.get(["enabled", "blurThumb"], (e) => {
  const t = e.enabled === void 0 || !!e.enabled;

  if (e.blurThumb) addMinimalYoutubeClassToHtmlBLURTHUMBNAIL();

  if (t) {
    addMinimalYoutubeClassToHtml();
    window.onload = init;
    return;
  }

  displayBody();
});
