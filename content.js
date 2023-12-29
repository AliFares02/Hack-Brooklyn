chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  
  if (message.action === 'extractText') {
    const url = window.location.href;
    sendResponse(url);

  }
});


