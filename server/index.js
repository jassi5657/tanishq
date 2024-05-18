const express = require('express');
const db = require( 'mongoose' )
const app = express()
const port = 4000

const cors = require('cors')

require("dotenv").config();

const mongoose = require("mongoose");
const connectDB = require('./db/conn');
const Product = require('./models/product');
require("./db/conn")


app.use(cors())
app.use(express.json())



// console.log(db);
app.get('/' , (req,res)=>{
    res.send("hello")
})

app.use("/product", require('./routes/product.route'))

// app.get('/product', (req,res)=>{
//     Product.find()
//     .then(products => res.json(products))
//     .catch(err => res.json(err))
// })



app.get('/product/:id', async(req,res)=>{
console.log(req.params.id);
Product.findById(req.params.id)
.then(products => res.json(products))
.catch(err => res.json(err))

})

app.listen(port, () => {
    connectDB(process.env.MONGODB_URL)
console.log(`server Started at ${port}`);
})

