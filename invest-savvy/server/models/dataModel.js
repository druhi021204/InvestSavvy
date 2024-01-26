const mongoose = require('mongoose')

const Schema = mongoose.Schema

const dataSchema = new Schema ({
    risk: {
        type: Number,
        required:true
    },

    timeperiod: {
        type:Number,
        required:true
    }
})

// dataSchema.statics.fillform = async function(risk, timeperiod)
// {
//     const data = await this.findOne({risk, timeperiod})
//     if(!risk || ! timeperiod)
//     {
//         throw Error ("All fields must be filled")
//     }

//     return data
// }

const Data = mongoose.model('Data', dataSchema)
module.exports=Data;