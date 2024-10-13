import express from "express";
import fs from "fs";

const crearProductoRouter = express.Router();

crearProducto.POST("/crearproducto", async (req, res) => {
    try {
        const crearproducts = await fs.promises.readFile(
            "./data/products.json",
            "utf-8"
        );
        const products = JSON.parse(crearproducts);
        const { id, title, price, categoria, stock } = req.body;

        const newProduct = {
            id: products[products.length - 1].id + 1,
            title,
            price,
            categoria,
            stock,
        };

        products.push(newProduct);
        await fs.promises.writeFile(
            "./data/products.json",
            JSON.stringify(products)
        );

        const response = {

    };

        res.json(response);
    } catch (error) {
        console.log("error al leer el objeto", error);  

    }

});

export default crearProductoRouter;