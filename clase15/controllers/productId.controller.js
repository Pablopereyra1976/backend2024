import fs from "fs";
import  responseBuilder from "../builders/response.builder.js";

export const getAllProductIdController = async (req, res) => {
    try {
       const {product_id} = req.params;
       console.log(`Received product_id: ${product_id}`);

       if( isNaN(product_id) || Number(product_id) < 0){
           const response = new responseBuilder()
           .setOk(false)
           .setStatus(400)
           .setMessage('Consulta erronea')
           .setPayload({
               detail: 'Debe haber un product_id numerico que sea 0 o mayor'
           })
           .build()
           return res.status(400).json(response);
       }
       

       const products = JSON.parse(await fs.promises.readFile('./data/products.json', 'utf-8'));

       const producto_buscado = products.find((product) => product.id === Number(product_id));
       if (!producto_buscado) {
           const response = new responseBuilder()
               .setOk(false)
               .setStatus(404)
               .setMessage('No se encontro el producto')
               .setPayload({
                   product: null
               })
               .build()
           return res.status(404).json(response);
       }

       if(!producto_buscado.active){
           const response = new responseBuilder()
               .setOk(false)
               .setStatus(410)
               .setMessage('No se encontro el producto')
               .setPayload({
                   product: null
               })
               .build()
           return res.status(404).json(response);
       }

       const response = new responseBuilder()
           .setOk(true)
           .setStatus(200)
           .setMessage('Producto obtenido')
           .setPayload({
               product: producto_buscado
           })
           .build()
       return res.json(response);
    } catch (error) {
        const response = new responseBuilder()
            .setOk(false)
            .setStatus(500)
            .setMessage('Server error')
            .setPayload({
                detail: error.message
            })
            .build()
        res.status(500).json(response);
    }
}
