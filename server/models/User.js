const mongoose= require('mongoose')

const UserSchema= new mongoose.Schema({
    firstName: String,
    lastName: String, 
    contact: String,
    college: String,
    cgpa: String,
    year: String,
    skills: String,
    city: String,
    state: String,
    pin:String,
    resume: String
})

const UserModel= mongoose.model("users", UserSchema)
module.exports = UserModel
