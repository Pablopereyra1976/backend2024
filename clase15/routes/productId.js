import express from "express";
import fs from "fs";
import  responseBuilder from "../builders/response.builder.js";

const productIdRouter = express.Router();

productIdRouter.get('/:product_id', async (req, res) => {
  try {
      const { product_id } = req.params;

      if( isNaN(product_id) || Number(product_id) < 0){
          const response = new responseBuilder()
          .setOk(false)
          .setStatus(400)
          .setMessage('Consulta erronea')
          .setPayload({
              detail: 'Debe haber un product_id numerico que sea 0 o mayor'
          })
          .build()
          return res.status(400).json(response)
      }


      const productos = JSON.parse(await fs.promises.readFile('./data/products.json', { encoding: 'utf-8' }))

      
      const producto_buscado = productos.find((product) => product.id === Number(product_id))
      if (!producto_buscado) {
          const response = new responseBuilder()
              .setOk(false)
              .setStatus(404)
              .setMessage('No se encontro el producto')
              .setPayload({
                  product: null
              })
              .build()
          return res.status(404).json(response)
      }

      if(!producto_buscado.active){
          const response = new responseBuilder()
              .setOk(false)
              .setStatus(410)
              .setMessage('El producto fue eliminado')
              .setPayload({
                  product: null
              })
              .build()
          return res.json(response)
      }
      const response = new responseBuilder()
          .setOk(true)
          .setStatus(200)
          .setMessage('Producto obtenido')
          .setPayload({
              product: producto_buscado
          })
          .build()
      return res.json(response)
  }
  catch (error) {
      const response = new responseBuilder()
          .setOk(false)
          .setStatus(500)
          .setMessage('Server error')
          .setPayload({
              detail: error.message
          })
          .build()
      res.status(500).json(response)
  }
})

export default productIdRouter;
/*
productIdRouter.get("/productoporid/:id", async (req, res) => {
  try {
    throw new Error("Este es un error simulado del servidor");
    console.log("valor del parametro", req.params.id);
    const productPorId = JSON.parse(
      await fs.promises.readFile("./data/products.json", "utf-8")
    );
    const product = productPorId.find(
      (product) => product.id === Number(req.params.id)
    );

    console.log("producto encontrado", product);

if(product){
    
    const response = {
      ok: true,
      status: 200,
      message: "Producto Obtenido",
      payload: {
        product: product ,
      },
    };
res.json(response);
}else{
    const response = {
      ok: false,
      status: 404,
      message: "No se encontro el producto",
      payload: {
        product: null,
      },
    };
    res.status(404).json(response);
}

  } catch (error) {
    const response = {
      ok: false,
      status: 500,
      message: "error interno del servidor",
      payload: {
        details: error.message
      },
    };
    res.status(500).json(response);
  }
});
*/
