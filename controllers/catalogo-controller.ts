import { Request, Response } from "express";
import { productos } from "../Dto/catalogoDto";

let catalogoProductos = async(req: Request, res: Response) => {
    res.json(productos)
}

export default catalogoProductos;