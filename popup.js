function handleMessages(request) {
  if (request && request.urlFromContent) {
    const urlFromContent = request.urlFromContent;
    console.log('URL from content script:', urlFromContent);
  }
}

function bookmarkCurrentTab() {
  chrome.runtime.sendMessage({ bookmarkCurrentTab: true });
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('bookmarkButton').addEventListener('click', bookmarkCurrentTab);
});

chrome.runtime.onMessage.addListener(handleMessages);
