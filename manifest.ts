export const manifest: chrome.runtime.ManifestV3 = {
  manifest_version: 3,
  name: "Vicro",
  short_name: "Vicro",
  version: "0.0.1",
  action: {
    default_title: "Vicro Developer tool",
    default_popup: "index.html",
    default_icon: {
      16: "logo.png",
      32: "logo.png",
      48: "logo.png",
      128: "logo.png",
    },
  },
  description: "⚡️ Opinionated Vite - Vue Chrome Extension Starter Template ⚡️",
  icons: {
    16: "logo.png",
    32: "logo.png",
    48: "logo.png",
    128: "logo.png",
  },
  author: "thecodeorigin",
  background: {
    service_worker: "background.js",
  },
  content_scripts: [
    {
      matches: ["<all_urls>"],
      css: [],
      js: ["inject.js"],
    },
  ],
  host_permissions: ["<all_urls>"],
  permissions: ["activeTab"],
};
