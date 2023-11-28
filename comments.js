// create web server 
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const comments = require('./comments.json');
const fs = require('fs');

// middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/comments', (req, res) => {
    res.json(comments);
});

app.post('/comments', (req, res) => {
    // get the data from the client
    const newComment = req.body;
    // add the data to the comments.json file
    comments.push(newComment);
    // write the data back to the file
    fs.writeFile('comments.json', JSON.stringify(comments), (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
    // send a response to the client
    res.json({ msg: 'Thanks for your message' });
});

// Start the server
app.listen(port, () => console.log(`Example app listening on port ${port}!`));