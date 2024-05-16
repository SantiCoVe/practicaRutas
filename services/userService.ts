import Auth from "../Dto/authDto";
import { productos } from "../Dto/catalogoDto";
import Pedido from "../Dto/pedidoDto";
import User from "../Dto/userDto";
import generateHash from "../helpers/generateHash";
import userRepository from "../repositories/userRepository";
const bcrypt = require("bcryptjs");

class userService {

    static async register(user: User) {
        user.password = await generateHash(user.password);
        return await userRepository.add(user);
    }

    static async auth(auth: Auth){
        const result: any = await userRepository.login(auth);
        if (result[0].length > 0){
            const isPasswordValid = await bcrypt.compare(auth.password, result[0][0].password);
            if(isPasswordValid){
                return {logged: true, status: "Succesful Authentication"}
                }
                return{logged: false, status: "Incorrect username or password"}
            }   
            return{logged: false, status: "Incorrect username or password"}
    }

    static async hacerPedido(pedido: Pedido) {
        const encontrarProducto = productos.find(productos => productos.id === pedido.idProducto);
        if (encontrarProducto) {
            const confirmarPedido = await userRepository.agregarPedido(pedido);
            if (confirmarPedido) {
                return { encontrado: true, status: 'Producto encontrado' }
            }else {
                return { encontrado: false, status: 'Producto no encontrado' }
            }
        }
    }

    static async misPedidos(email: string) {
        return await userRepository.misPedidos(email);
    }

    static async actualizar(estado: string, id: number) {
        const result: any = await userRepository.verificar(id);

        if (result[0].length > 0) {
            const update: any = await userRepository.actualizar(estado, id);
            return { encontrado: true, status: 'Su pedido esta activo'}
        }else {
            return { encontrado: false, status: 'Su pedido no esta activo'}
        }
    }


}

export default userService;