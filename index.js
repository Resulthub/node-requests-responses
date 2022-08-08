const express = require('express')
const app = express()

//listen for requests
app.listen(3000);

app.get('/', (req, res) =>{
    // res.send('<h2> Home page </h2>');
    res.sendFile('./views/index.html', {root: __dirname});
});

app.get('/about', (req, res) =>{
    // res.send('<h2> About page </h2>');
    res.sendFile('./views/about.html', {root: __dirname});
});

//redirects
app.get('/about-us', (req, res) =>{
    res.redirect('/about');
});   //redirects to /about

//404
app.get ((req, res) =>{
    res.status(404).sendFile('./views/404.html', {root: __dirname});
});

// const port = 3000 

// app.get('/', (req, res) => res.send('Hello World!'))
// app.listen(port, () => console.log(`Example app listening on port ${port}!`))