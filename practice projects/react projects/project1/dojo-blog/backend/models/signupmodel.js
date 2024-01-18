const mongoose =  require('mongoose')
const Schema = mongoose.Schema 
 
const signupschema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },

    username: {
        type:String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    }
})

mongoose.exports = mongoose.model('signup', signupschema)