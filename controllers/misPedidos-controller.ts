import { Request, Response } from "express";
import userService from "../services/userService";
import userRepository from "../repositories/userRepository";

let misPedidos = async(req: Request, res: Response) => {
    try {
        const emailUser = req.query.email as string;
        const misPedidos = await userService.misPedidos(emailUser);
        return res.status(200).json({
            status: 'Pedidos obtenidos con exito', email: emailUser, pedidos: misPedidos
        });
    } catch (error: any) {
        console.error("Error al buscar pedidos: ", error);
        return res.status(500).json({
            error: "Error al obtener pedido"
        });
    }
}

export default misPedidos;