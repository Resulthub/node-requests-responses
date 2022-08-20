const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')

// create an express app
const app = express()

//connection to mongodb
const dbURI = 'mongodb+srv://netninja:test1234@cluster0.tpynavz.mongodb.net/node-tuts?retryWrites=true&w=majority';
mongoose.connect(dbURI,{ useNewUrlParser: true, useUnifiedTopology: true })
// .then(() => {

//     const app = express();

//     app.get("/", (req, res) => {
//         res.send("Updated!");
//     });

//     app.listen(4000, () => {
//         console.log("Server is running on port 4000");
//     });

//     }).catch(() => {
//         console.log('Database connection failed');
// })

    .then(() => app.listen(4000))
    .catch((err) => console.log(err));

    // .then(() => console.log('connected to mongodb'))
    // .catch((err) => console.log(err));

    console.log(mongoose.connection.readyState);



//resgister view engine
app.set('view engine', 'ejs');

mongoose.connect(
    dbURI,{
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    }
)
.then(() => console.log('DB Connection Successfull'))
.catch((err) => {
    console.error(err);
});

//listen for requests
// app.listen(4000);

//middlware & static files
app.use(morgan('dev'))
app.use(express.static('./public'))
 
app.get('/', (req, res) =>{
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quos.'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quos.'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quos.'},
    ];
    res.render('index', {title: 'Home', blogs});
});

// app.use((req, res, next) => {
//     console.log('in the next middleware');
//     next();
// })

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