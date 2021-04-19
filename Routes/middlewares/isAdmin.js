const jwt= require ("jsonwebtoken")
const {User} = require ('../../Models')

const isAdmin = (req,res,next)=>{
   User.findOne({
       where:{
           id: req.user.id
       }
   })
   .then (usuario =>{
    if(!usuario.isAdmin){
        return res.status(401).send("usuario no admin")
    }else{
        next()  
    }
    })
}

module.exports = isAdmin