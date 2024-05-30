const mongoose = require("mongoose")

let userSchema = new mongoose.Schema({
        username : {
            type : String ,
            unique : true 
        } ,
        email : {
            type : String ,
            required : true
        } , 
        password : {
            type  : String ,
            required : true  
        } ,
        phone : {
            type : Number
        }, 

        city : {
            type : String
        },

        zip : {
            type : Number
        } 
})

const User = mongoose.model('users' , userSchema)

module.exports = User