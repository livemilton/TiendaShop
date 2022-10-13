const producto=require("../models/productos")
const fetch=(url)=> import('node-fetch').then(({default:fetch})=>fetch(url));//usurpacion del requiered

//ver la lista de producros
exports.getProducts=async(req,res,next)=> {
    const productos=await producto.find();
    res.status(200).json({
        success:true,
        cantidad:productos.length,
        productos
    })
}

//Ver un producto por ID
exports.getProductById= async(req, res, next)=>{
    const product= await producto.findById (req.params.id)  //crear constante product para halla un pt por id constante product
    if (!product) {  //verificacion con condicional para verificar sino hay un producto 
        return res.status(404).json({
            success: false,
            message: "No se encuentra ese producto"
        })
    }
    res.status(200).json({ //si encuentra un producto si arroja el success true y el mensaje
        success:true,
        message: "Aque se encuentra la informacion de sus productos",
        product
    })
}

//Update un producto
exports.UpdateProduct=async(req,res,next) =>{
    let product= await producto.findById (req.params.id)  //crear constante let product para halla un pt por id constante product
    //se hace para el usuario netamente cuando consulte la tienda y no hay el producto
    if (!product) {  //verificacion con condicional para verificar sino hay un producto 
            return res.status(404).json({
            success: false,
            message: "No se encuentra ese producto"
        })
    }
    // si el objeto si existia, entonces si ejecuto la actualizacion
    product= await producto.findByIdAndUpdate(req.params.id, req.body, {
        new:true, //valido solo si los atributos nuevos o actulizados
        runValidators:true
    });
    //respondo OK si el producto se actualizo
    res.status(200).json({
        success:true,
        message:"Producto actualizado correctamente",
        producto
    })
}

//eliminar un producto
exports.deleteProduct=async(req,res,next) =>{
    const product= await producto.findById (req.params.id)  //crear constante const product para halla un pt por id constante product
    //se hace para el usuario netamente cuando consulte la tienda y no hay el producto
    if (!product) {  //verificacion con condicional para verificar sino hay un producto 
            return res.status(404).json({//si el objeto no existe, retunr termina el metodo
            success: false,
            message: "No se encuentra ese producto"
        })
    }
    await product.remove();//eliminamos el proceso
    res.status(200).json({
        success:true,
        message:"producto eliminado correctamente",
    })
}

//crear nuevo producto /api/productos
exports.newProduct=async(req,res,next)=>{
    const product=await producto.create(req.body);
    res.status(201).json({
        success:true,
        product
    })
}
//hablemos de fetch
//ver por id  -- comando para correr npm install node-fetch

//Ver todos los productos
function verProductos(){
    fetch('http://localhost:4000/api/productos')
    .then(res=>res.json())
    .then(res=>console.log(res))
    .catch(err=>console.error(err))
}

//verProductos(); LLamamos al metodo creado para probar la consulta

//Ver por id
function verProductoPorID(id){
    fetch('http://localhost:4000/api/producto/'+id)
    .then(res=>res.json())
    .then(res=>console.log(res))
    .catch(err=>console.error(err))
}

verProductoPorID('63468bc3cb6137a60aa326c4');//Probamos el metodo con un id