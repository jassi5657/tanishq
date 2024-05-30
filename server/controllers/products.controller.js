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



async function singleProduct(req,res){
    const { id } = req.params;
    try {
        const product = await Product.findById({ _id : id });
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(product);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}


async function getCategory(req,res){
    const { category } = req.params;
    try {
        const product = await Product.findOne({ category });
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(product);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}




module.exports = {
    getProducts,
    postProduct,
    deleteProduct,
    singleProduct,
    getCategory
}