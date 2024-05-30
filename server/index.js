const express = require('express');
const db = require( 'mongoose' )
const app = express()
const port = 4000
const bcrypt = require("bcrypt");



const cors = require('cors')

require("dotenv").config();

const mongoose = require("mongoose");
const connectDB = require('./db/conn');
const Product = require('./models/product');
const User = require('./models/user');
require("./db/conn")


app.use(cors())
app.use(express.json())



// console.log(db);
app.get('/' , (req,res)=>{
    res.send("hello")
})

app.use("/product", require('./routes/product.route'))
app.use("/user", require('./routes/user.routes'))
app.use("/cart", require('./routes/cart.router'))



// app.post("/auth/signup", async (req, res) => {
//     const { username, email, password, phone, city, zip } = req.body;

//   const checkingUser = await User.findOne({ email: email });

//   if (checkingUser) {
//     return res.send("user already exist");
//   }

//   const saltround = await bcrypt.genSalt(10);
//   const hashed = await bcrypt.hash(password, saltround);
//   const user = await User.create({
//     username,
//     email,
//     phone,
//     password: hashed,
//     city,
//     zip,
//     role: "seller",
//   });
//   res.send("user added success");
//   console.log(user);
//   });




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

