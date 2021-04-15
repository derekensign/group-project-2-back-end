const models = require('../models')
const businessRoutes = require('../routes/businessRoutes')
const businessController = {}


businessController.allBusinesses = async (req,res) => {

    console.log(req)
    try {
        let businesses = await models.business.findAll()
    
        console.log(businesses)
        res.json(businesses)

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
    
        console.log(business)
        res.json(business)

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
module.exports = businessController