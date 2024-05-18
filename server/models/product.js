const mongoose = require('mongoose')

const productScheme = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    

    desc:{
        type:String,
        required:true
    },

    category:{
        type:String,
        required:true
    },
    
    offerPrice:{
        type:String,
        required:true
    },

    discountPrice:{
        type:String,
    },

    url:{
        type:String,
        required:true
    },

    url1:{
        type:String,
        required:true
    },

    url2:{
        type:String,
        required:true
    },

    url3:{
        type:String
        }
})


const Product = mongoose.model('products', productScheme)
module.exports= Product