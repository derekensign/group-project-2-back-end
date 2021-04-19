const models = require('../models')
const businessRoutes = require('../routes/businessRoutes')
const businessController = {}


businessController.allBusinesses = async (req,res) => {

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

    try {
        let business = await models.business.findOne({
            where: {
                id: req.params.id
            },
            include : [{
                model: models.user,
                attributes: ['name']
            }]
        })
        
        let reviews = await business.getReviews()
        console.log(business);

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
        res.json({business})

    } catch (error) {
        console.log(error)
        res.json({error})
    }
}

businessController.createReview = async (req,res) => {

    const { findUser } = req;

    try {
        let review = await models.review.create({
            headline: req.body.headline,
            comment: req.body.comment,
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
        res.json({review})

    } catch (error) {
        console.log(error)
        res.json({error})
    }
}

businessController.getBusinessReviews = async (req,res) => {
    try {
        let business = await models.business.findOne({
            where: {
                id: req.params.id
            },
            include: [{
                model: models.review,
                include : {
                    model: models.user,
                    attributes: ['name']
                }
            }]
        })

        // let reviews = await business.getReviews({include: 'user'})
        let reviews = business.reviews


        res.json({reviews})

    } catch (error) {
        console.log(error)
        res.json({error})
    }
}

module.exports = businessController