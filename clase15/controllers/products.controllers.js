
import fs from "fs";
export const getAllProductsController = async (req, res) => {
    try {
        const obtenerproducts = await fs.promises.readFile(
            "./data/products.json",
            "utf-8"
        );
        const products = JSON.parse(obtenerproducts).filter((product) => product.active === true);



        const response = {
            ok: true,
            status: 200,
            message: "Productos obtenidos con éxito",
            payload: { products },
        };

        console.log("productos enviados", products);
        return res.json(response);

    } catch (error) {
        console.error("error al leer el objeto", error);

        const response = {
            ok: false,
            status: 500,
            message: "Error interno del servidor",
            payload: {
                detail: error.message,
            },
        };
        return res.status(500).json(response);
    }
};

