function handleMessages(request) {
  if (request && request.urlFromContent) {
    const urlFromContent = request.urlFromContent;
    console.log('URL from content script:', urlFromContent);
  }
}

chrome.runtime.onMessage.addListener(handleMessages);
