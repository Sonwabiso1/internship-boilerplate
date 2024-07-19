import './style.css';

const url = 'https://newsapi.org/v2/top-headlines?' +
          'country=za&' +
          'apiKey=2b939a9e1bc94029add973cc786c3d86';

fetch(url)
    .then(response => response.json())
    .then(data => {
        const headlines = data.articles;
        const headlinesList = document.getElementById('headline-list');
        
        // Generate the list items for headlines
        headlinesList.innerHTML = headlines.map(article => `
            <li class="text-gray-700 hover:text-blue-500">
                <a href="${article.url}" class="text-blue-600 hover:underline" target="_blank">
                    ${article.title}
                </a>
            </li>
        `).join('');
    })
    .catch(error => {
        console.error('Error fetching the news:', error);
    });
