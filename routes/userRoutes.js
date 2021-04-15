const express = require('express');
const { createUser, verifyUser, loginUser } = require('./../controllers/userController');
const userRoutes = express.Router();


userRoutes.post('/', createUser);
userRoutes.get('/verify', verifyUser);
userRoutes.post('/login', loginUser);

module.exports = userRoutes;
