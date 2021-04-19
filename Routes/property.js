const express = require('express');
const router = express.Router();
const {Property, Category} = require("../Models/index")
const isAdmin = require("./middlewares/isAdmin")
const checkJWT= require("./middlewares/jwt");
const { Op } = require("sequelize");

//RUTA PARA CREACIÓN DE PROPIEDADES SETEANDO CATEGORIAS
router.post ("/", (req,res,next)=>{
    Property.create (req.body)
    .then ((propiedad)=>{
        //console.log(req.body)
        if(req.body.categoryId){
            Category.findOne({
                where :{
                    id:req.body.categoryId
                }
            })
            .then((categoria)=>{
                console.log (Object.keys(categoria.__proto__))
                categoria.addProperty(propiedad)
                .then((PropCat)=>{
                    console.log (propiedad)
                    return res.send(propiedad)
                })
            })
        }else{
            return res.send(propiedad)
        }
    })
    .catch (error =>{
        next (error)
    })
})

//RUTA PARA EDITAR UNA PROPIEDAD
router.put("/:id",checkJWT, isAdmin, (req, res, next) => {
    let id = req.params.id;
    
    Property.findByPk(id)
        .then(data => {
            !data ? res.sendStatus(404) :
                data.update(req.body)
                    .then(data => res.send(data))
        })
        .catch (error =>{
            next (error)
        })
        
})

//RUTA PARA ELIMINAR UNA PROPIEDAD
router.delete("/:id",checkJWT, isAdmin, (req, res, next) => {
    let propertyID = req.params.id;

    Property.destroy({
        where: {
            id: propertyID
        }
    })
    .then(() => {
        res.send("Propiedad eliminada!!")
    })
    .catch (error =>{
        next (error)
    })
})


//RUTA QUE DEVUELVE PROPIEDADES FILTRADAS POR CATEGORIAS
router.get ("/searchCategory",  (req,res,next) => {
    Category.findOne({
        where: {
            name:{
                [Op.substring]:req.query.name,
            } 
          },include: Property
       },)
       .then((propiedades)=>{ 
           res.send(propiedades.properties)
       })
})

//RUTA QUE DEVUELVE PROPIEDADES FILTRADAS POR NOMBRE 
router.get ("/searchName", (req,res,next) => {
        Property.findOne({
            where:{
                name:{
                    [Op.substring]: req.query.name
                    }
                }
        })
        .then((propiedad)=>{
           res.send(propiedad)
            })
            .catch (error =>{
                next (error)
            })
})

//RUTA QUE DEVUELVE PROPIEDADES FILTRADAS POR UBICACIÓN 
router.get ("/searchLocation", (req,res,next) => {
    Property.findAll({
        where:{
            location:{
                [Op.substring]: req.query.location
                }
            }
    })
    .then((propiedades)=>{
       res.send(propiedades)
        })
        .catch (error =>{
            next (error)
        })
})
     
//RUTA PARA ENCONTRAR TODAS LAS PROPIEDADES
router.get ("/", (req,res,next) => {
Property.findAll()
    .then (productos => {
        res.send (productos)
    })
    .catch (error =>{
        next (error)
    })
})

//RUTA PARA ENCONTRAR UNA PROPIEDAD
router.get("/:id", (req, res,next) => {
    let id = req.params.id
console.log(id)
    Property.findByPk(id)
    .then(property => { res.send(property) })
    .catch (error =>{
        next (error)
    })
})

module.exports = router