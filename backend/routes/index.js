const express = require('express')
const router = express.Router()


const userSignUpController = require("../controllers/users/userSignUp")
const userSignInController = require('../controllers/users/userSignIn')
const authToken = require('../middleware/authToken')
const userLogout = require('../controllers/users/userLogout')
const userDetailsController = require('../controllers/users/userDetails')
const AllUsers = require('../controllers/users/allUsers')
const updatedUser = require('../controllers/users/updateUser')

// product Section
const getProductController = require('../controllers/product/getProduct')
const UploadProductController = require('../controllers/product/uploadProduct')
const updateProductController = require('../controllers/product/updateProduct')
const getCategoryProduct = require('../controllers/product/getCategoryProduct')
const getCategoryWiseProduct = require('../controllers/product/getCategoryWiseProduct')
const searchProduct = require('../controllers/product/searchProduct')
const filterProductController = require('../controllers/product/filterProduct')
const countAddToCartProduct = require('../controllers/users/countAddToCartProduct')
const addToCartViewProduct = require('../controllers/users/addToCartViewProduct')
const deleteAddToCartProduct = require('../controllers/users/deleteAddToCartProduct')
const updateAddToCartProduct = require('../controllers/users/updateAddToCartProduct')
const getProductDetails = require('../controllers/product/getProductDetails')
const addToCartController = require('../controllers/users/addToCartController')


router.post("/signup" , userSignUpController)
router.post("/signin" , userSignInController)
router.get("/user-details", authToken , userDetailsController)
router.get("/userLogout", userLogout)


// admin panel
router.get("/all-user", authToken , AllUsers)
router.post("/update-user" , authToken , updatedUser)


// Product Image
router.post("/upload-product" , authToken , UploadProductController)
router.get("/get-product" , getProductController)
router.post("/update-product" ,authToken,  updateProductController)
router.get("/get-categoryProduct" , getCategoryProduct)
router.post("/category-product", getCategoryWiseProduct)
router.post("/product-details" , getProductDetails)
router.get("/search" , searchProduct)
router.post("/filter-product", filterProductController)


router.post("/addtocart" , authToken ,  addToCartController)
router.get("/countAddToCartProduct" , authToken , countAddToCartProduct)
router.get("/view-card-product" , authToken , addToCartViewProduct)
router.post("/update-cart-product" , authToken , updateAddToCartProduct)
router.post("/delete-cart-product", authToken , deleteAddToCartProduct)


module.exports = router 