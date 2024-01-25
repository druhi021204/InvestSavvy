const Data = require('../models/dataModel')
const mongoose = require('mongoose')

const createdata = async (req, res) => {
    const {risk_factor, time_period} = req.body 

    let emptyFields = [] 

    if(!risk_factor)
    {
        emptyFields.push('risk_factor')
    }

    if(!time_period)
    {
        emptyFields.push('time_period')
    }

    if(emptyFields.length < 0) 
    {
        return res.status(400).json({ error: 'Please fill in all the fields', emptyFields })
    }

    try {
        // const user_id = req.user._id 
        const data = await Data.create({risk_factor, time_period})
        res.status(200).json(data)
    }
    catch (error) {
        res.status(400).json({error: error.message})
      }
}

module.exports = {createdata}