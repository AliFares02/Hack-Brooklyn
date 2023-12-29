chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request && request.url) {
    console.log('URL from content script:', request.url);
  }

  if (request && request.bookmarkCurrentTab) {
    bookmarkCurrentTab();
  }
});

function bookmarkCurrentTab() {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    const activeTab = tabs[0];
    if (activeTab) {
      chrome.bookmarks.create({ url: activeTab.url, title: activeTab.title });
      console.log('Tab bookmarked:', activeTab.url);
    } else {
      console.error('Error retrieving active tab information.');
    }
  });
}

