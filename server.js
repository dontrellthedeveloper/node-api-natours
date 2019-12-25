const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({path: './config.env'});
const app = require('./app');




/* =============== Mongo Database ================ */

const DB = process.env.DATABASE.replace(
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD);

mongoose
    .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
    .then(() => console.log('DB connection successful!'));


/* =============== Express Server ================ */
const port = process.env.PORT || 9000;
app.listen(port, () => {
    console.log(`App running on port ${port}...`)
});
