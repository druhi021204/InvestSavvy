const mongoose = require('mongoose')

const Schema = mongoose.Schema

const dataSchema = new Schema ({
    risk_factor: {
        type: Number,
        required:true
    },

    time_period: {
        type:Number,
        required:true
    }
}, {timestamps:true})

const Data =  new mongoose.model('Data', dataSchema)
module.exports=Data;