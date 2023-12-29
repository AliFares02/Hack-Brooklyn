chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  
  if (request && request.url) {
    console.log('URL from content script:', request.url);
  }
  
});
