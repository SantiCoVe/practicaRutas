import { Request, Response } from "express";
import userService from "../services/userService";
import { generateToken } from "../helpers/generateToken";
import Auth from "../Dto/authDto";

let auth = async (req: Request, res: Response) => {
    try {
        const { 
            email,
            password
        } = req.body
        const login = await userService
    } catch (error) {
        
    }
}
