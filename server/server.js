const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(express.static('dist'));
app.use(express.json());

let articles;

fs.readFile(path.join(__dirname, 'initData/articles.json'), 'utf8', (err, data) => {
    if (err) throw err;
    articles = data;
    app.listen(8000, () => console.log('server started'));
});


app.get('/api/articles', (req, res) => res.send(articles));
app.get('*', function(req, res){
    res.sendFile(path.join(__dirname, './../dist/index.html'));
});
