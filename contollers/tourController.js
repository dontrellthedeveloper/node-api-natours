const Tour = require('./../models/tourModel');

// /* =============== Synchronous Code =============== */
// const tours = JSON.parse(
//     fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
// );

/* ================= Middleware =================== */

exports.checkBody = (req, res, next) => {
    if (!req.body.name || !req.body.price) {
        return res.status(400).json({
            status: 'fail',
            message: 'Missing name or price'
        })
    }
    next();
};

/////////////////// Tour Requests ////////////////////

/* ================ Get All Tours ================= */

exports.getAllTours = (req, res) => {
    console.log(req.requestTime);
    res.status(200).json({
        status: 'success',
        requestedAt: req.requestTime,
        // results: tours.length,
        // data: {
        //     tours
        // }
    })
};

/* ================ Get One Tour ================= */

exports.getTour = (req, res) => {
    console.log(req.params);
    const id = req.params.id * 1;
    // const tour = tours.find(el => el.id === id);
    //
    // res.status(200).json({
    //     status: 'success',
    //     data: {
    //         tour
    //     }
    // });
};

/* ================= Create Tour ================== */

exports.createTour = (req, res) => {
    res.status(201).json({
        status: 'success',
        // data: {
        //     tours: newTour
        // }
    });
};

/* ================= Update Tour ================== */

exports.updateTour = (req, res) => {

    res.status(200).json({
        status: 'success',
        data: {
            tour: '<Updated tour here ...>'
        }
    })
};

/* ================= Delete Tour ================== */

exports.deleteTour = (req, res) => {
    res.status(204).json({
        status: 'success',
        data: null
    })
};