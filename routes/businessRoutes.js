const businessController = require('../controllers/businessController')

const express = require('express')
const businessRoutes = express.Router()

businessRoutes.get('/', businessController.allBusinesses)
businessRoutes.get('/:id', businessController.oneBusiness)
businessRoutes.post('/', businessController.createBusiness)
businessRoutes.post('/:id/review', businessController.createReview)
businessRoutes.get('/:id/review', businessController.getBusinessReviews)

module.exports = businessRoutes
