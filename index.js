const express = require ("express");
const app = express()
const cors = require('cors')
const db = require ('./Config/index')
const helmet = require("helmet");
const routes = require("./Routes")
const morgan = require("morgan")


app.use(helmet());
app.use(cors())
app.use(morgan('dev'))

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(express.static(__dirname + "/public"));

app.use(routes)

app.use(function(err,req,res,next){
  console.error(err)
  res.status(500).send(err)
})

db.sync({ force:false }).then(() => {
    console.log("conectada a la base de datos");
    app.listen(3001);
    console.log("Servidor escuchado en el puerto 3001");
  });