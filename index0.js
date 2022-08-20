const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/latestdb',{
    useNewUrlParser: true,
}).then(() => {

    const app = express();

    app.get("/", (req, res) => {
        res.send("Updated!");
    });

    app.listen(4000, () => {
        console.log("Server is running on port 4000");
    });

    }).catch(() => {
        console.log('Database connection failed');
})