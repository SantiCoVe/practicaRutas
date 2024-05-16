import express from "express";
import hacerPedido from "../controllers/hacerPedido-controller";
import validateToken from "../middleware/validateToken";

const router = express.Router();

router.post('/', validateToken, hacerPedido);

export default router;