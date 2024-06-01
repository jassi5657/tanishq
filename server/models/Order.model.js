const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema({
  price: Number,
  products: Array,
  email: String,
  address: Object,
  url:String
});

const Orders = mongoose.model("orders", OrderSchema);
module.exports = Orders



// const Cart = mongoose.model('cart', cartScheme)