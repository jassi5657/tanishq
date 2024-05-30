const express = require('express');
const { createCart, addItemToCart, updateItemQuantityInCart, checkoutCart } = require('../controllers/cart.controller');
const router = express.Router();

// Create a new cart
router.post('/addCart', createCart);

// Add an item to the cart
router.post('/carts/:cartId/items', addItemToCart);

// Update the quantity of an item in the cart
router.put('/carts/:cartId/items/:itemId', updateItemQuantityInCart);

// Checkout the cart
router.post('/carts/:cartId/checkout', checkoutCart);

module.exports = router;