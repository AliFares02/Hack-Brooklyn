document.addEventListener('DOMContentLoaded', () => {
  const extractText = document.querySelector('.extractButton');

  extractText.addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { action: 'extractText' }, (response) => {
        console.log('Received URL:', response);
      });
    });
  })
})