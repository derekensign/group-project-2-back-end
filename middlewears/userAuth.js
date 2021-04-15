const e = require('express');
const jwt = require('jsonwebtoken');
const { user } = require('./../models');


const userAuth = async (req, res, next) => {
    try {
        if (req.headers.authorization) {
            
            const token = req.headers.authorization.split(' ')[1];
            const { userId } = jwt.verify(token, process.env.SECRET);
            //models.user
            const findUser = await user.findOne({
                where: {
                    id: userId
                }
            });
           
            req.findUser = findUser || null;
        }
        else {
            req.findUser = null;
        }
        next();
    }

    catch(error) {
        res.status(400).json({ error: error.message })
    }
};


module.exports = { userAuth }; 