const Cart = require("../models/cart.model");
const Product = require("../models/product");

exports.createCart = async (req, res) => {
  try {
    const cart = new Cart({ userId: req.user._id });
    await cart.save();
    res.status(201).json({ message: 'Cart created successfully', cart });
  } catch (error) {
    res.status(500).json({ message: 'Error creating cart', error });
  }
};

exports.addItemToCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.user._id }).populate('items.product');
    if (!cart) return res.status(404).json({ message: 'Cart not found' });

    const itemIndex = cart.items.findIndex(item => item.product._id.toString() === req.body.productId);
    if (itemIndex!== -1) {
      // If the item already exists in the cart, update its quantity
      cart.items[itemIndex].quantity += req.body.quantity;
    } else {
      // If the item does not exist in the cart, add it
      const product = await Product.findById(req.body.productId);
      if (!product) return res.status(404).json({ message: 'Product not found' });
      cart.items.push({ product, quantity: req.body.quantity });
    }

    await cart.save();
    res.status(200).json({ message: 'Item added to cart', cart });
  } catch (error) {
    res.status(500).json({ message: 'Error adding item to cart', error });
  }
};

exports.updateItemQuantityInCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.user._id }).populate('items.product');
    if (!cart) return res.status(404).json({ message: 'Cart not found' });

    const itemIndex = cart.items.findIndex(item => item.product._id.toString() === req.params.productId);
    if (itemIndex === -1) return res.status(404).json({ message: 'Item not found in cart' });

    cart.items[itemIndex].quantity = req.body.quantity;
    await cart.save();
    res.status(200).json({ message: 'Item quantity updated', cart });
  } catch (error) {
    res.status(500).json({ message: 'Error updating item quantity', error });
  }
};

exports.checkoutCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.user._id }).populate('items.product');
    if (!cart) return res.status(404).json({ message: 'Cart not found' });

    // Calculate the total cost of the cart
    let total = 0;
    for (const item of cart.items) {
      total += item.product.price * item.quantity;
    }
    cart.total = total;
    await cart.save();

    // Empty the cart
    cart.items = [];
    await cart.save();

    res.status(200).json({ message: 'Cart checked out', cart });
  } catch (error) {
    res.status(500).json({ message: 'Error checking out cart', error });
  }
};