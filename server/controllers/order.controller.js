const Orders = require("../models/Order.model");



async function getOrder(req,res){
  
    Orders.find()
    .then(orders => res.json(orders))
    .catch(err => res.json(err))
    
}

async function postOrder(req, res){
    const products = req.body.basket;
    const price = req.body.price;
    const email = req.body.email;
    const address = req.body.address;
  
    const orderDetail = {
      products: products,
      price: price,
      address: address,
      email: email,
    };
  
    try {
      const result = await Orders.create(orderDetail);
      console.log("order added to database >> ", result);
      res.status(201).json(result);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "An error occurred while creating the order." });
    }
  };




  async function deleteOrder(req , res){
    const { id } = req.params
    const data = await Orders.deleteOne({ _id : id })
    res.json({ status : data }) 
} 
  
  

  module.exports = {
    postOrder,
    getOrder,
    deleteOrder
  }
  