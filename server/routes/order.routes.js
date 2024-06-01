const express = require('express');
const { postOrder, getOrder, deleteOrder } = require('../controllers/order.controller');
const router = express.Router();

// Create a new cart
router.post('/addOrder', postOrder);

router.get('/getOrder', getOrder);
router.delete('/deleteOrder/:id', deleteOrder);




module.exports = router;