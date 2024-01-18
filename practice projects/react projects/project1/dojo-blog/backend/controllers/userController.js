//login user 
const forLogin = require('../models/loginmodel')
const forSignup = require('../models/signupmodel')

const loginUser = async(req, res) => {
    res.json({mssg:'login user'})
}

const signupUser = async (req, res) => {
    res.json({mssg: 'signup user'})
}

module.exports = {signupUser, loginUser}