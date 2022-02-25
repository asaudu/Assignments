const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3000;

// Where we will keep books
let books = [{
    isbn: "9781250170972",
    title: "Children of Blood and Bone",
    Author: "Tomi Adeyemi",
    NumberOfPages: "523"
    },
    {isbn: "9781638073727",
    title: "Manifestation Journal for Beginners",
    Author: "Lauri Albert",
    NumberOfPages: "94"
    },
    {isbn: "9781951905132",
    title: "TJ Young and the Orishas, the Gatekeeper's Staff",
    Author: "Antoine Bandele",
    NumberOfPages: "400"
    },
    {isbn: "9781570433856",
    title: "Inner Guidance, Our Divine Birthright",
    Author: "Anne Archer Butcher",
    NumberOfPages: "267"
    },
    {isbn: "9781250170996",
    title: "Children of Virtue and Vengeance",
    Author: "Tomi Adeyemi",
    NumberOfPages: "404"
    }];

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/books', (req, res) => {
    res.json(books);
});
//need a landing page for the New Book page
app.get('/book', (req, res) => {
    res.sendFile(path.join(__dirname, '/new-book.html'));
});
//new addition
app.get('/book/:isbn', (req, res) => {
    // Reading isbn from the URL
    const isbn = req.params.isbn;
});

app.post('/book', (req, res) => {
    const book = req.body;

    // Output the book to the console for debugging
    console.log(book);
    books.push(book);

    res.send('Book is added to the database');
});



app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));