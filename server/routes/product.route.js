const  express = require("express")
const { getProducts, postProduct, deleteProduct } = require("../controllers/products.controller")
const router = express.Router()


router.get('/', getProducts)
router.post('/addProduct', postProduct)
router.delete('/:id', deleteProduct)



module.exports = router
