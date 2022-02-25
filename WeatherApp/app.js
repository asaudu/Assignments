const http = require('http');
const rp = require('request-promise');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

let options = {
    uri:'http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=02cfcf682f2bd37a2b563392cc9c6d48',
    json: true
}



rp(options)
    .then(function(response) {
        console.log(response)
    }


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});