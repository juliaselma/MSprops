const express = require ('express')
const router = express.Router()
const userRouter = require ('./user')
const productRouter = require ('./property')
const categoryRouter = require ('./category')
const checkJWT= require("./middlewares/jwt")
const {User} = require ('../Models/index')

router.use ("/users", userRouter)
router.use ("/property", productRouter)
router.use ("/category", categoryRouter)


router.post ("/me",checkJWT ,(req,res,next) => {
    User.findByPk(req.user.id)
    .then (user => res.send(user))
    .catch(next)
    })

module.exports = router