const express = require(`express`);
const router = express.Router();
const Quote_in = require(`../models/Quote-in`);

router.post(`/quote/in`, async (req, res) => {
    const quote_in = new Quote_in(req.body);

    try {
        await quote_in.save();
        res.status(201).send(quote_in);
    } catch (err) {
        res.status(400).send(err);
    }
})


module.exports = router;