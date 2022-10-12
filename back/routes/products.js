const express=require("express")
const router= express.Router();

const{getProducts, newProduct}=require("../controllers/productsController")//traemos la respuesta json desde el controlador

router.route('/productos').get(getProducts) //establecemos desde que ruta queremos ver el getProducts
router.route('/producto/nuevo').post(newProduct); //establecer la ruta

module.exports=router;