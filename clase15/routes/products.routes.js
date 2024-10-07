import express from "express";
import fs from "fs";

const productRouter = express.Router();

productRouter.get("/obtenerproductos", async (req, res) => {
  try {
    const obtenerproducts = await fs.promises.readFile(
      "./data/products.json",
      "utf-8"
    );
    const products = JSON.parse(obtenerproducts);

    console.log("recibido", products);

    const response = {
      ok: true,
      status: 200,
      message: "Productos obtenidos con éxito",
      payload: { products: products },
    };

    res.json(response);
    console.log("productos enviados", products);
  } catch (error) {
    console.log("error al leer el objeto", error);

    const response = {
      ok: false,
      status: 500,
      message: "Error interno del servidor",
      payload: {
        detail: error.message,
      },
    };
    res.status(500).json(response);
  }
});



export default  productRouter;
