const express = require('express');
const { createUser, verifyUser, loginUser, deleteUser, updateUser } = require('./../controllers/userController');
const userRoutes = express.Router();


userRoutes.post('/', createUser);
userRoutes.get('/verify', verifyUser);
userRoutes.post('/login', loginUser);
userRoutes.delete('/', deleteUser);
userRoutes.put('/', updateUser);

module.exports = userRoutes;
