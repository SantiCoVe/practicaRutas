import express from "express";
import actualizarPedido from "../controllers/actualizarPedido-controller";

const router = express.Router();

router.put('/', actualizarPedido);

export default router;