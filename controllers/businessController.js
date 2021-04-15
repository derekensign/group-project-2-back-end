const models = require('../models')
const businessRoutes = require('../routes/businessRoutes')
const businessController = {}


businessController.allBusinesses = async (req,res) => {

    console.log(req)
    try {
        let businesses = await models.business.findAll()
    
        console.log(businesses)
        res.json({businesses})

    } catch (error) {
        console.log(error)
        res.json({error})
    }
}

businessController.oneBusiness = async (req,res) => {

    console.log(req)
    try {
        let business = await models.business.findOne({
            where: {
                id: req.params.id
            }
        })
    
        let reviews = await business.getReviews()

        console.log(reviews)
        console.log(business)

        res.json({business, reviews})

    } catch (error) {
        console.log(error)
        res.json({error})
    }
}

businessController.createBusiness = async (req,res) => {

    const { findUser } = req;

    try {
        let business = await models.business.create({
    
            address: req.body.address,
            name: req.body.name,
            category: req.body.category,
            phoneNumber: req.body.phoneNumber,
            image: req.body.image,
            description: req.body.description
        })

        await findUser.addBusiness(business)

        console.log(business)
        res.json({businessId: business.id})

    } catch (error) {
        console.log(error)
        res.json({error})
    }
}

businessController.createReview = async (req,res) => {

    const { findUser } = req;

    try {
        let review = await models.review.create({
            comment: req.body.rating,
            rating: req.body.rating,
            image: req.body.image
        })

        let business = await models.business.findOne({
            where: {
                id: req.params.id
            }
        })

        await findUser.addReview(review)
        await business.addReview(review)

        console.log(business)
        res.json({reviewId: review.id})

    } catch (error) {
        console.log(error)
        res.json({error})
    }
}
module.exports = businessController