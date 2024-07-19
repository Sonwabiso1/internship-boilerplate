import './style.css';

const apiKey = '2b939a9e1bc94029add973cc786c3d86';
const baseUrl = 'https://newsapi.org/v2/top-headlines?country=za&apiKey=' + apiKey;

document.addEventListener('DOMContentLoaded', () => {
    fetchHeadlines();

    document.querySelectorAll('.category-link').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const category = event.target.getAttribute('data-category');
            fetchHeadlines(category);
        });
    });
});

function fetchHeadlines(category = 'general') {
    const url = `${baseUrl}&category=${category}`;
    
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
}
