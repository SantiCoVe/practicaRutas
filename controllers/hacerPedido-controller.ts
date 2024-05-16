import { Request, Response } from "express";
import Pedido from "../Dto/pedidoDto";
import userService from "../services/userService";

let hacerPedido = async (req: Request, res: Response) => {
    try {
        const {
            idProducto,
            direccion,
            nombres,
            email
        } = req.body
        let estado = '';
        const result: any = await userService.hacerPedido(new Pedido(idProducto, direccion, nombres, email, estado));
        console.log(result);
        
        if (result.encontrado) {
            return res.status(201).json({
                status: 'pedido realizado con exito'
            });
        }
        return res.status(401).json({
            status: 'error al realizar el pedido'
        })

    } catch (error) {
        return res.status(401).json({
            status: 'Error al procesar el pedido'
        })
    }
}

export default hacerPedido;