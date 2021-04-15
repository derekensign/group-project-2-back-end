businessController.allBusinesses = async (req,res) => {

    console.log(req)
    try {
        let businesses = await models.business.findAll()
    
        console.log(businesses)
        res.send(businesses)

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
                id: req.params.businessId
            }
        })
    
        console.log(business)
        res.send(business)

    } catch (error) {
        console.log(error)
        res.json({error})
    }
}