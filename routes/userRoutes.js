const express = require('express');
const userController = require('./../contollers/userController');
const router = express.Router();

/* ============== User Router ==================== */

router
    .route('/')
    .get(userController.getAllUsers)
    .post(userController.createUser);

router
    .route('/:id')
    .get(userController.getUser)
    .patch(userController.updateUser)
    .delete(userController.deleteUser);

module.exports = router;