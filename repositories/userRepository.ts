import db from "../config/config-db";
import Auth from "../Dto/authDto";
import User from "../Dto/userDto";

class userRepository {

    static async add(user: User) {
        const sql = 'INSERT INTO users(email, password, nombres) VALUES (?, ?, ?)';
        const values = [user.email, user.password, user.nombres];
        return db.execute(sql, values)
    }

    static async login(auth: Auth) {
        const sql = 'SELECT password FROM users WHERE email = ?'
        const values = [auth.email]
    }
}

export default userRepository;