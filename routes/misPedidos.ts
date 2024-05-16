import express from "express";
import validateToken from "../middleware/validateToken";
import misPedidos from "../controllers/misPedidos-controller";

const router = express.Router();

router.get('/', validateToken, misPedidos)

export default router;