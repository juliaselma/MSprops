const { Sequelize } = require('sequelize');
const db = require('../Config/index')

class Property extends Sequelize.Model { }

Property.init({
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
     image: {
         type: Sequelize.STRING,
     },
    description: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    truncateDescription:{
        type: Sequelize.VIRTUAL,
        get(){
            return this.description.slice(0,19)+"..."
        }
    },
    available: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
    },
    location: {
        type: Sequelize.STRING,
    }

}, { sequelize: db, modelName: "property" })

Property.addHook("beforeCreate",function(){
    if(this.available == false){
        Property.name= this.name + " No disponible"
    }
})
module.exports = Property