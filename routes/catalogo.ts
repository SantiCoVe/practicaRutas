import express from "express";
import catalogoProductos from "../controllers/catalogo-controller";

let router = express.Router()

router.get('/', catalogoProductos);

export default router;