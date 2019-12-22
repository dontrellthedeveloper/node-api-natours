const app = require('./app');

/* =============== Express Server ================ */
const port = 9000;
app.listen(port, () => {
    console.log(`App running on port ${port}...`)
});