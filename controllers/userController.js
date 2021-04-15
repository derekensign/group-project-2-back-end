// We got user from models.user and delcared it variable known as user. (Destructuring)
const { user } = require('./../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const userController = {};

userController.createUser = async(req, res) => {
    try {
        const { name, email, password } = req.body; 

        const salt = bcrypt.genSaltSync(10);

        const hash = bcrypt.hashSync(password, salt);
        
        const newUser = await user.create({
            name,
            email,
            password: hash,
        });

        const userToken = jwt.sign({ userId: newUser.id}, process.env.SECRET);

        res.status(201).json({
            message: 'ok',
            userToken   
        });
    }
    catch(error) {
        console.log(error);
        res.status(400).json({
            error: error.errors[0].message
        });
    }
    

};

userController.loginUser = async(req, res) => {
    try {
        const { email, password } = req.body;

        const findUser = await user.findOne({
            where: {
                email
            }
        });

        if ( findUser === null) {
            return res.status(404).json({
                message: 'User does not exist'
            });
        }

        // Password Checking
      
        if (bcrypt.compareSync(password, findUser.password)) {
           
            const userToken = jwt.sign({ userId: findUser.id}, process.env.SECRET);

            res.status(200).json({
                message: 'ok',
                userToken   
            });
        }

        else {
            res.status(401).json({
                message: 'Password is not correct',  
            });
        }
    }
    catch(error) {
        let errorMessage = error.errors || error.message;

        res.status(400).json({
            error: errorMessage
        });
    }
};

userController.verifyUser = async(req, res) => {
    try {
     
        const { findUser } = req;
        
        if (findUser !== null ) {
            res.status(200).json({
                message: 'Authenticated'
            });
        }
        else {
            res.status(404).json({
                message: 'User does not exist'
            });
        }
    }

    catch(error) {
        res.status(400).error({
            error: error.message
        });
    }
};

// Get reviews 


module.exports = userController;