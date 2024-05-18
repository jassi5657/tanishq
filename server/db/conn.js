const mongoose = require("mongoose")

const DB = process.env.DATABASE;

// uri = "mongodb+srv://preetsansoya008:1Shergill@cluster0.kk8m2hh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const connectDB =  (uri) => {
    console.log("connected");
    return mongoose.connect(uri,{
    });

};
    


module.exports=connectDB;
