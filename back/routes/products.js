const express=require("express")
const router= express.Router();

const{getProducts, newProduct, getProductById, UpdateProduct, deleteProduct}=require("../controllers/productsController")//traemos la respuesta json desde el controlador

router.route('/productos').get(getProducts) //establecemos desde que ruta queremos ver el getProducts
router.route('/producto/nuevo').post(newProduct); //establecer la ruta
router.route('/producto/:id').get(getProductById);  //: por los parametros que debe consultar por id -la ruta de producto por ID
router.route('/producto/:id').put(UpdateProduct);// creacion de la ruta de actualizacion
router.route('/producto/:id').delete(deleteProduct);//creacion de la ruta de eliminacion por id

module.exports=router;