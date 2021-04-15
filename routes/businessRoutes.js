const businessController = require('../controllers/businessController')

const express = require('express')
const businessRoutes = express.Router()

businessRoutes.get('/', businessController.allBusinesses)
businessRoutes.get('/:id', businessController.allBusinesses)

module.exports = businessRoutes