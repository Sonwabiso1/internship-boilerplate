import './style.css';

// News API base URL and API key
const apiKey = '2b939a9e1bc94029add973cc786c3d86';
const baseUrl = 'https://newsapi.org/v2/top-headlines?country=za&apiKey=' + apiKey;

document.addEventListener('DOMContentLoaded', () => {
    // Fetch headlines for the default category on page load
    fetchHeadlines();

    // Add click event listeners to all category links
    document.querySelectorAll('.category-link').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const category = event.target.getAttribute('data-category');
            console.log(category)
            // Fetch headlines for the clicked category
            fetchHeadlines(category);
        });
    });
    // Add click event listener to the search button
    document.getElementById('search-button').addEventListener('click', () => {
        const query = document.getElementById('search-input').value;
        // Fetch headlines based on the search query
        fetchHeadlines(null, query);
    });
});

/**
 * Fetches and displays headlines based on the specified category or search query.
 * @param {string} category - The category of news to fetch. Defaults to 'general'.
 * @param {string} query - The search query for fetching specific articles.
 */
function fetchHeadlines(category = 'general', query = '') {
    let url = `${baseUrl}&category=${category}`;
    if (query) {
        url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`;
    }
    
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
