chrome.tabs.onUpdated.addListener((tabId, tab) => {
    if (tab.url && tab.url.includes("tiktok.com/@")) {
      const userIdFromUrl = tab.url.split("@")[1];
  
      chrome.tabs.sendMessage(tabId, {
        userId: userIdFromUrl
      });
    }
  });
  
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(null, {file: "popup.js"});
});