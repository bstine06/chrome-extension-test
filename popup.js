const startButton = document.getElementById("startButton");

startButton.onclick = function() {
  console.log("CLICKED THE START BUTTON");
  if (tab.url && tab.url.includes("tiktok.com/@")) {
    const userIdFromUrl = tab.url.split("@")[1];

    chrome.tabs.sendMessage(tabId, {
      userId: userIdFromUrl
    });
  }
}