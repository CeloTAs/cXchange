const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const quoteInScehma = new Schema({
    fiatType: {
        required: true,
        type: String,
        enum: [
            `USD`,
            `EUR`,
            `BRL`,
            `GNF`,
            `INR`,
            `NGN`,
            `GHS`,
            `KES`,
            `ZAR`,
            `PHP`,
            `UGX`,
            `GBP`,
            `XOF`,
            `RWF`,
            `CNY`,
            `XAF`,
            `ARS`,
            `BOB`,
            `CLP`,
            `COP`,
            `FKP`,
            `GYD`,
            `PYG`,
            `PEN`,
            `SRD`,
            `UYU`,
            `VES`,
            `MXN`,
            `PAB`,
          ]
    },
    cryptoType: {
        required: true,
        type: String,
        enum: [
            `cUSD`,
            `cEUR`,
            `cREAL`,
            `CELO`
          ]
    },
    fiatAmount: {
        type: String,
    }
});

module.exports = mongoose.model(`Quote_in`, quoteInScehma);;