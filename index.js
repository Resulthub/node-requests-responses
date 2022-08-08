const express = require('express')

// create an express app
const app = express()

//resgister view engine
app.set('view engine', 'ejs')
// app.set('views', './views')

//listen for requests
app.listen(3000);

// app.use((req, res) => {
//     console.log('new request made:');
//     console.log('host: ', req.hostname);
//     console.log('path: ', req.path);
//     console.log('method: ', req.method);
//     next();
// });

app.get('/', (req, res) =>{
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quos.'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quos.'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quos.'},
    ];
    res.render('index', {title: 'Home', blogs});
});

app.get('/about', (req, res) =>{
    res.render('about', {title: 'About Page'});
});

app.get('/blogs/create', (req, res) =>{
     res.render('create',   {title: 'Create Blog'});
}); 

//404
app.use((req, res) =>{
    res.status(404).render('404', {title: '404'});
})