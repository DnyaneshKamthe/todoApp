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
        if (error) return res.status(400).json({ message: error })

        //check for existing user
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: 'User already exists' });

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
        res.status(500).json({ message: error.message })
    }
}


const login = async (req, res) => {
    try {
        //destructure data
        let { username, password } = req.body;

        //validate user
        let error = validateLoginInput(username, password);
        if (error) return res.status(400).json({ message: error });

        //check if user exists
        let user = await User.findOne({ username: req.body.username });
        if (!user) return res.status(400).json({ message: 'User not found' })

        //check if its valid password
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) return res.status(400).json({ message: 'Invalid password' });

        //create jwt token
        const token = jwt.sign(
            { id: user._id, username: user.username },
            jwtSecret,
            { expiresIn: jwtExpiration }
        );

        // return if everything is ok
        return res.status(200).json({ message: "User login successful", token, user: { id: user._id, username: user.username, email: user.email } })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    signUp,
    login
}