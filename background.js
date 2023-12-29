chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  
  if (request && request.url) {
    chrome.runtime.sendMessage({ urlFromContent: request.url });
  }
});
