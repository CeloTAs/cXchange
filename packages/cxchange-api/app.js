const express = require('express');

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
