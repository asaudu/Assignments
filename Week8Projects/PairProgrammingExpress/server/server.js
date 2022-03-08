const express = require('express');
const cors = require('cors');

const app = express();

const PORT = 5000;

// creates an endpoint for the route /api
app.get('/api', (req,res) => {
    res.json({ message: 'Heeeyyy from ExpressJS' })
});

//cors is being used on this line to avoid errors while running the function
app.get('/api/students', cors(), async (req,res) => {
    res.json({ message: 'Heeeyyy from ExpressJS' })
});

app.listen(PORT, () => {
    console.lof(`Server is running on port ${PORT}`);
});