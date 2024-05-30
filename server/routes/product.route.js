const  express = require("express")
const { getProducts, postProduct, deleteProduct, singleProduct, getCategory } = require("../controllers/products.controller")
const router = express.Router()


router.get('/', getProducts)
router.post('/addProduct', postProduct)
router.delete('/:id', deleteProduct)
router.get('/:id', singleProduct)
router.get('/category', getCategory)





module.exports = router
