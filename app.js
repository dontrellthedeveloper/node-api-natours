const fs = require('fs');
const express = require('express');






/* =============================================
|  |  |  |  |  Express Server
================================================ */

const app = express();
app.use(express.json());

const port = 9000;
app.listen(port, () => {
    console.log(`App running on port ${port}...`)
});


/* =============================================
|  |  |  |  |  Synchronous Code
================================================ */

const tours = JSON.parse(
    fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);



///////////////////////////////////////////////////////////////
///////////////////////// Requests ////////////////////////////
///////////////////////////////////////////////////////////////


/* =============================================
|  |  |  |  |  GET request
================================================ */
const getAllTours = (req, res) => {
    res.status(200).json({
        status: 'success',
        results: tours.length,
        data: {
            tours
        }
    })
};



/* =============================================
|  |  |  |  |  GET 'One' request (URL param)
================================================ */
const getTour = (req, res) => {
    console.log(req.params);
    const id = req.params.id * 1;
    const tour = tours.find(el => el.id === id);

    if(!tour) {
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid ID'
        });
    }

    res.status(200).json({
        status: 'success',
        data: {
            tour
        }
    });
};



/* =============================================
|  |  |  |  |  POST request
================================================ */
const createTour = (req, res) => {

    const newId = tours[tours.length -1].id + 1;
    const newTour = Object.assign({id: newId}, req.body);

    tours.push(newTour);

    fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`, JSON.stringify(tours), err => {
        res.status(201).json({
            status: 'success',
            data: {
                tours: newTour
            }
        });
    });
};



/* =============================================
|  |  |  |  |  PATCH request
================================================ */
const updateTour = (req, res) => {
    if(req.params.id * 1 > tours.length) {
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid ID'
        });
    }

    res.status(200).json({
        status: 'success',
        data: {
            tour: '<Updated tour here ...>'
        }
    })
};



/* =============================================
|  |  |  |  |  DELETE request
================================================ */
const deleteTour = (req, res) => {
    if(req.params.id * 1 > tours.length) {
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid ID'
        });
    }

    res.status(204).json({
        status: 'success',
        data: null
    })
};


/* =============================================
|  |  |  |  |  Routes
================================================ */
// app.get('/api/v1/tours', getAllTours);
// app.get('/api/v1/tours/:id', getTour);
// app.post('/api/v1/tours', createTour);
// app.patch('/api/v1/tours/:id', updateTour);
// app.delete('/api/v1/tours/:id', deleteTour );

app
    .route('/api/v1/tours')
    .get(getAllTours)
    .post(createTour);

app
    .route('/api/v1/tours/:id')
    .get(getTour)
    .patch(updateTour)
    .delete(deleteTour);


