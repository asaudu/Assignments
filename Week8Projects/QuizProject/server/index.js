//imports express
const express = require("express");
//imports cors which adds a level of security to the data
const cors = require("cors");
//imports request which allows us to make a request in the format of line 17 - 24
const request = require("request");
//the port express is using
const PORT = 3001;

const app = express();

// app.get("/api", (req, res) => {
//     res.json({ message: "Hello from Express!" });
//   });
//routing the api to the desired route of "/api"
app.get("/api", (req, res) => {
  request(
    //the URL can go as shown or in a variable without the quotes
    "https://opentdb.com/api.php?amount=10&category=31&difficulty=easy",
    //a function taking in the parameters of error, repsonse and body
    function(error, response, body) {
      //if there is no error AND the response code is 200 the respond with sending the api to the body of the page
      if(!error && response.statusCode === 200) {
        res.send(body);
      }
    }
  );
});

//letting express know to make requests via the established port and show a message when it is
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});