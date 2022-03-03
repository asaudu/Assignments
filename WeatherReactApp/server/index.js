const express = require("express");
let request = require("request");

const port = 3001;

const app = express();



app.get("/api", (req, res) => {
    res.json({ message: "Hello from Express!" });
  });

app.get("/getWeatherPlano", (req, res) => {
    request(
        "https://api.openweathermap.org/data/2.5/forecast?lat=33.0136764&lon=-96.6925096&cnt=5&units=imperial&appid=02cfcf682f2bd37a2b563392cc9c6d48",
        function(error, response, body) {
        if(!error && response.statusCode === 200) {
            let parsedBody = JSON.parse(body);
            let temperature = parsedBody['list']['main']['temp'];
            res.send({temperature, });
         }
       }
    );
});  

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});