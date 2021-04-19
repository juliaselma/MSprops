const sequelize = require('sequelize')
const db = require ("../Config/index")
const Property = require ('./Property')
const Category = require ('./Category')
const User = require ('./User')

Property.belongsToMany(User,{through: "favorite"})
Category.belongsToMany(Property,{through: "property_category"})

module.exports = {Property,Category,User}