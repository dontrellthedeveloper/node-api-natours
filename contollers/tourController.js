const Tour = require('./../models/tourModel');


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

exports.createTour = async (req, res) => {

    try {
        const newTour = await Tour.create(req.body);

        res.status(201).json({
            status: 'success',
            data: {
                tours: newTour
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        })
    }
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