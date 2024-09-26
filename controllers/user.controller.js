const User = require("../models/User.model")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { jwtSecret, jwtExpiration } = require("../config/jwt.config")
const { validateUserSignUp, validateLoginInput } = require("../validations/user.validation")

const signUp = async (req, res) => {
    try {
        //destructure data
        const { username, email, password } = req.body;

        //validate inputs
        const error = validateUserSignUp(username, email, password);
        if (error) {
            const err = new Error(error);
            err.status = 400; 
            return next(err);
        }

        //check for existing user
        const existingUser = await User.findOne({ email });
        if (existingUser)  {
            const err = new Error('User already exists');
            err.status = 400; 
            return next(err);
          }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        //create new user data
        let newUser = new User({
            username,
            email,
            password: hashedPassword
        })

        //save the user data
        await newUser.save(newUser)
        res.status(201).json({ message: 'User created successfully' })
    } catch (error) {
        next(error)
    }
}


const login = async (req, res, next) => {
    try {
        //destructure data
        let { username, password } = req.body;

        //validate user
        let error = validateLoginInput(username, password);
        if (error){
            const err = new Error(error);
            err.status = 400; 
            return next(err);
        }

        //check if user exists
        let user = await User.findOne({ username: req.body.username });
        if (!user)  {
            const err = new Error('User not found');
            err.status = 400; 
            return next(err);
          }

        //check if its valid password
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            const err = new Error('Invalid password');
            err.status = 400; 
            return next(err);
          }

        //create jwt token
        const token = jwt.sign(
            { id: user._id, username: user.username },
            jwtSecret,
            { expiresIn: jwtExpiration }
        );

        // return if everything is ok
        return res.status(200).json({ message: "User login successful", token, user: { id: user._id, username: user.username, email: user.email } })

    } catch (error) {
        next(error)
    }
}

const logout = async(req, res) => {
    res.status(200).json({ message: 'User logged out successfully' })
}

module.exports = {
    signUp,
    login,
    logout
}