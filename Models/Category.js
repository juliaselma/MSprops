const S = require('sequelize');
const db = require('../Config');

class Category extends S.Model {}

Category.init({
name:{
        type: S.STRING
},

},{sequelize: db, modelName:"category"});

module.exports = Category