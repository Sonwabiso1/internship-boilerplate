import './style.css'

var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=za&' +
          'apiKey=2b939a9e1bc94029add973cc786c3d86';

fetch(url)
    .then(response => response.json()) // Convert the response to JSON
    .then(data => {
        console.log(data); // Log the data
    })
    .catch(error => {
        console.error('Error fetching the news:', error); // Handle any errors
    });
