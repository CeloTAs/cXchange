const express = require(`express`);
const router = new express.Router();
const quote_in = require(`./routes/quote-in`);
const quote_out = require(`./routes/quote-out`);
require(`./db/database-config`);

const app = express();
app.use(express.json());
app.use(router, [quote_in, quote_out]);

const port = process.env.PORT || 5000;

router.get(`/clock`, (req, res) => {
    res.status(200).send(
        {
            time: new Date().toISOString()
        });
});


app.listen(port, () => {
    console.log(`FiatConnect App is running on port ${port}`);
})