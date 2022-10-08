const express=require("express");
const app = express();

app.use(express.json());

//importar rutas
const productos=require("./routes/products")

//definir area para ver 
app.use('/api',productos)//sujeto a decision(ruta del navegador)

module.exports=app