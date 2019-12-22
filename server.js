const dotenv = require('dotenv');
dotenv.config({path: './config.env'});
const app = require('./app');


// console.log(process.env);

/* =============== Express Server ================ */
const port = process.env.PORT || 9000;
app.listen(port, () => {
    console.log(`App running on port ${port}...`)
});
