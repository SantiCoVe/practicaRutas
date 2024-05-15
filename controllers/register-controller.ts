import { Request, Response } from "express";
import User from "../Dto/userDto";
import userService from "../services/userService";

let register = async( req: Request, res: Response ) => {
    try {
        const {
            email,
            password,
            names
        } = req.body

        const registerUser = await userService.register(new User(email, password, names));
        return res.status(201).send({
            status: 'registrado con exito'
        });

    } catch (error: any) {
        if (error && error.code == ' ER_DUP_ENTRY') {
            return res.status(500).send({ errorInfo: error.mysqlMessage});
        }
    }
}

export default register