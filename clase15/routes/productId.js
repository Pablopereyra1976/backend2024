import express from "express";
import fs from "fs";


const productIdRouter = express.Router();
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

export default productIdRouter;