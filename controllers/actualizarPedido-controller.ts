import { Request ,Response } from "express";
import userService from "../services/userService";

let actualizarPedido = async (req:Request, res: Response)=>{
    try{
        const {
            idPedido,
            estado
        } = req.body
        const result: any = await userService.actualizar(idPedido, estado);
        if(result.encontrado){
            return res.status(201).json({ status: 'Actualizacion exitosa' })
        }
        return res.status(401).json({ status: 'Actualizacion fallida' })
    }catch(error: any){
        return res.status(401).json({
            status: 'Error en el ingreso de datos'
        })
    }
}

export default actualizarPedido;