chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  
  if (request && request.urlFromContent) {
    const urlFromContent = request.urlFromContent;
    console.log('URL from content script:', urlFromContent);

  }
});
