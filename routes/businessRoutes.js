const businessController = require('../controllers/businessController')

const express = require('express')
const businessRoutes = express.Router()
const axios = require('axios')

businessRoutes.get('/', businessController.allBusinesses)
businessRoutes.get('/:id', businessController.allBusinesses)