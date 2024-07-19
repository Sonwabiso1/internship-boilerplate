import './style.css'

var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=&' +
          'apiKey=2b939a9e1bc94029add973cc786c3d86';
var req = new Request(url);
fetch(req)
    .then(function(response) {
        console.log(response.json());
    })