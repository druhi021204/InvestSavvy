const mongoose =  require('mongoose')
const Schema = mongoose.Schema 
 
const loginschema = new Schema({
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


//static login method
// userSchema.statics.login
mongoose.exports = mongoose.model('login', loginschema)