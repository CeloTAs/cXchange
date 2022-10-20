const mongoose = require(`mongoose`);

const db_host = process.env.DB_HOST || `127.0.0.1`;
const db_port = process.env.DB_PORT || 27017;
const db_name = process.env.DB_NAME || `fiat-connect-db`;

mongoose.connect(`mongodb://${db_host}:${db_port}/${db_name}`, {
    useNewUrlParser: true
});