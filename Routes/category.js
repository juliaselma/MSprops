const express = require('express');
const router = express.Router();
const {Category, Property} = require("../Models/index")
const { Op } = require("sequelize");
const isAdmin = require("./middlewares/isAdmin")
const checkJWT= require("./middlewares/jwt");

// CREACIÓN DE CATEGORIA
router.post ("/",checkJWT,isAdmin, (req,res,next)=>{
    Category.create (req.body)
    .then ((categoria)=>{
        res.send(categoria)
    })
    .catch (error =>{
        next (error)
    })
})

// BORRAR CATEGORIA
router.delete("/:id",checkJWT,isAdmin, (req, res, next) => {
   Category.findOne({
    where: {
        id: req.params.id,
      },
   })
   .then((categoria)=>{
       categoria.destroy()
       .then(()=>{
           console.log("categoria eliminada")
           res.send("se elimino tu producto correctamente")
        })
   })
   .catch (error =>{
        next (error)
    })
})

// EDITAR CATEGORIA
router.put ("/:id",checkJWT, isAdmin, (req,res,next)=>{
    Category.findOne({
        where:{
            id: req.params.id
        }
    })
    .then (categoria =>{
        categoria.update(req.body,{returning:true})
    })
    .then (()=>{
        res.send("Categoria actualizada")
    })
    .catch (error =>{
        next (error)
    })
})
// /// BUSCAR CATEGORIA
// router.get("/search/:query", (req, res) => {
//     Category.findAll({
//         where: {
//             nombre:{
//                 [Op.substring]:req.params.query,
//             } 
//           },include: Product
//        },)
//        .then((productos)=>{ 
//            res.send(productos[0].products)
//        })
//         .catch(err => console.log("hubo un error"))
// })

// ////BUSCAR TODAS LAS CATEGORIAS
// router.get("/search/", (req, res) => {
//     Category.findAll()
//     .then((categorias)=>{
//         res.send(categorias)
//     })
//     .catch(err => console.log(err))
// })

module.exports = router