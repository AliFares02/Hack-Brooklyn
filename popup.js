document.addEventListener('DOMContentLoaded', () => {
  const extractText = document.querySelector('.extractButton');

  extractText.addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs && tabs.length > 0) {
        const currentURL = tabs[0].url;
        const extractText = async () => {
            const extractUrl = 'https://article-data-extraction-and-summarization.p.rapidapi.com/article?url=' + currentURL;
            const options = {
            method: 'GET',
            headers: {
              'X-RapidAPI-Key': '61e3269048msh2c25d7d20c98816p1e4b48jsna8efefd63e9f',
              'X-RapidAPI-Host': 'article-data-extraction-and-summarization.p.rapidapi.com'
            }
          };
          try {
            const response = await fetch(extractUrl, options);
            const result = await response.text();
            console.log(result);
          } catch (error) {
            console.error(error);
          }
        }
        extractText();
      } else {
        console.error('No active tabs found.');
      }
    });
  })
})