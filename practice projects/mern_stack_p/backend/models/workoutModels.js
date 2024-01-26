//mongodb does not support schema
//so we use mongoose to create schema

const mongoose = require('mongoose');

//creating a schema, 's' capital
//creating helps in putting the data

const Schema = mongoose.Schema

//we want following things in our data
//on creating a new document, it notes the time
const workoutSchema = new Schema({
    title: {
        type:String,
        required: true
    },

    reps: {
        type:Number,
        required:true
    },

    load: {
        type:Number,
        required: true
    }
}, {timestamps: true})

//creates a model, 'Work' is the name of the model,and for collection it gets plural by itself.
module.exports = mongoose.model('Work', workoutSchema)
