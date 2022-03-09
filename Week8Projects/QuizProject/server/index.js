const express = require("express");
const cors = require("cors");
const request = require("request");

const PORT = 3001;

const app = express();

// app.get("/api", (req, res) => {
//     res.json({ message: "Hello from Express!" });
//   });

app.get("/api", (req, res) => {
  request(
    "https://opentdb.com/api.php?amount=10&category=31&difficulty=easy",
    function(error, response, body) {
      if(!error && response.statusCode === 200) {
        res.send(body);
      }
    }
  );
});


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});