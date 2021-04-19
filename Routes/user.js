const express = require("express");
const router = express.Router()
const {User, Property} = require ('../Models/index')
const jwt= require ("jsonwebtoken")
const checkJWT= require("./middlewares/jwt")
const isAdmin=require("./middlewares/isAdmin")


//RUTA REGISTER
router.post("/register", (req, res,next) => {   
    User.create(req.body)
      .then((user) => {
      res.status(201).send(user)})
      .catch(next)
});

//RUTA USER LOGIN
router.post('/login',(req,res,next)=>{
     const {email,password} = req.body
     User.findOne({
         where:{
             email,
         }
     }).then ((user)=>{
         if(!user){
             return res.status(400).send("usuario inexistente")
         }
         if(!user.validPassword(password)){
             return res.status (401).send("invalid credentials")
         }
         const token= jwt.sign({id:user.id,email:user.email,name:user.name,isAdmin:user.isAdmin},"juliaselma")
       return res.status(200).json({token})  
     })
     .catch (error =>{
        next (error)
    })
  })

//RUTA EDITAR USUARIO
router.put ("/:id", checkJWT, (req,res,next)=>{
    User.findByPk(req.params.id)
    .then (user =>{
        user.update(req.body,{returning:true})
    })
    .then (()=>{
        res.send("Usuario actualizado")
    })
    .catch (error =>{
        next (error)
    })
})

//RUTA PARA AGREGAR PROPIEDADES A FAVORITOS
router.post ("/favorites/:id", (req,res,next)=>{ //id del usuario
    User.findByPk (req.params.id)
    .then ((usuario)=>{
            Property.findOne({
                where :{
                    id:req.body.propertyId //entra desde el front id de propiedad favorita
                }
            })
            .then((propiedad)=>{
                propiedad.addUser(usuario) 
                .then((favorite)=>{
                    console.log (favorite)
                    return res.send(propiedad)
                })
            })
    })
    .catch (error =>{
        next (error)
    })
})

//RUTA QUE DEVUELVA FAVORITOS DEL USUARIO
router.get("/favorites/:id", checkJWT, (req,res,next)=>{
    Property.findAll({include:{
        model:User,
        where:{
            id:req.params.id
        },
        attributes:[
            "name"
        ]  
    }})
    .then((propiedades)=>{ 
       const propiedadesFavoritas = propiedades.map((prop)=>{
           console.log(prop.users)
           const{id,name,price,image}=prop
            return {id,name,price,image}
        })
        res.send (propiedadesFavoritas)
    })
    .catch (error =>{
        next (error)
    })  
})
//RUTA QUE ELIMINE UN FAVORITO 
router.delete("/favorites/:id",checkJWT,(req,res,next)=>{
    User.findByPk (req.params.id)
    .then ((usuario)=>{
            Property.findOne({
                where :{
                    id:req.body.propertyId //entra desde el front id de propiedad favorita
                }
            })
            .then((propiedad)=>{
                propiedad.removeUser(usuario) 
                .then(()=>{
                    return res.send("propiedad eliminada")
                })
            })
    })
    .catch (error =>{
        next (error)
    })  
})
module.exports = router