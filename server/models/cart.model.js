const mongoose = require('mongoose')

const cartScheme = new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', required: true
    },
    items: [{
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: true
        },
        quantity: {
            type: Number,
            default: 1,
            min: 1
        }
    }],
    total: {
        type: Number,
        default: 0
    }

})


const Cart = mongoose.model('cart', cartScheme)
module.exports = Cart