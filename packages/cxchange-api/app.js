if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const mongoose = require('mongoose');
const express = require('express');

const db_host = process.env.DB_HOST || 'localhost';
const db_port = process.env.DB_PORT || 27017;
const db_name = process.env.DB_NAME || 'cxchange';
mongoose.connect(`mongodb://${db_host}:${db_port}/${db_name}`);
var db=mongoose.connection;
db.on('error', console.log.bind(console, "connection error"));
db.once('open', function(callback){
    console.log("connection succeeded");
})

const app = express();

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Hello, welcome to cXchange!'
    });
})

const port = process.env.API_PORT || 3000;
app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});
