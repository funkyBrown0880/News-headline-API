
document.addEventListener("DOMContentLoaded", function () {
    const apiKey = 'e94470b54f734a61bce573852f9f1279'; 
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

    function getLatestNews() {
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => displayNews(data.articles))
        .catch(error => console.error('Error fetching news:', error));
    }

    function displayNews(articles) {
      const newsList = document.getElementById('newsList');

      articles.forEach(article => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${article.title}</strong><br>${article.description}<br><a href="${article.url}" target="_blank">Read more</a>`;
        newsList.appendChild(listItem);
      });
    }

    getLatestNews();
  });