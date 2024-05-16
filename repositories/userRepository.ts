import db from "../config/config-db";
import Auth from "../Dto/authDto";
import User from "../Dto/userDto";
import Pedido from "../Dto/pedidoDto";
import { log } from "console";

class userRepository {

    static async add(user: User) {
        const sql = 'INSERT INTO users(email, password, nombres) VALUES (?, ?, ?)';
        const values = [user.email, user.password, user.nombres];
        return db.execute(sql, values)
    }

    static async login(auth: Auth) {
        const sql = 'SELECT password FROM users WHERE email = ?'
        const values = [auth.email]
        return db.execute(sql, values);
    }

    static async agregarPedido(pedido: Pedido) {
        const sql = 'INSERT INTO pedidos(idProducto, direccion, nombreUsuario, emailUsuario) VALUES (?, ?, ?, ?)';
        const values = [pedido.idProducto, pedido.direccion, pedido.nombreUsuario, pedido.email];
        return db.execute(sql, values)
    }

    static async misPedidos(email: string) {
        const sql = 'SELECT * FROM pedidos WHERE emailUsuario = ?';
        const values = [email];
        return db.execute(sql, values);
    }

    static async verificar(id: number){
        const sql = 'SELECT * FROM pedido WHERE idPedido =?'
        const values = [id];
        return db.execute(sql, values);
    }

    static actualizar(estado: string, id: number) {
        const sql = 'UPDATE pedidos SET estado = ? WHERE id = ?';
        const values = [estado, id];
        return db.execute(sql, values);
    }

}

export default userRepository;