chrome.runtime.onInstalled.addListener(async () => {
  const url = chrome.runtime.getURL("index.html");

  const tab = await chrome.tabs.create({ url });

  // eslint-disable-next-line no-console
  console.log(`Created tab ${tab.id}`);
});
