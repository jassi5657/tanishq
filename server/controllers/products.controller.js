const Product = require('../models/product')

async function getProducts(req,res){
    Product.find()
    .then(products => res.json(products))
    .catch(err => res.json(err))
}


async function postProduct(req , res){
    const {name , category , offerPrice ,discountPrice,  desc, url, url1, url2, url3 } = req.body
    const status = await Product.create({name , category , offerPrice ,discountPrice,  desc, url:url, url1, url2, url3 })
    res.send("ok")
    console.log(status);
}




async function deleteProduct(req , res){
    const { id } = req.params
    const data = await Product.deleteOne({ _id : id })
    res.json({ status : data }) 
} 




module.exports = {
    getProducts,
    postProduct,
    deleteProduct
}