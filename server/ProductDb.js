require("dotenv").config()
const connectDB = require("./db/conn")
const Product = require("./models/product")

const ProductJson = require("./products.json")

const start = async () =>{
    try{
        await connectDB(process.env.MONGODB_URL)
        await Product.create(ProductJson)
        console.log("sucess");
    }catch(err){
        console.log(err);
    }
}

start()