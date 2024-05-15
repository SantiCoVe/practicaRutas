import Auth from "../Dto/authDto";
import User from "../Dto/userDto";
import generateHash from "../helpers/generateHash";
import userRepository from "../repositories/userRepository";
const bcrypt = require("bcryptjs");

class userService {

    static async register(user: User) {
        user.password = await generateHash(user.password);
        return await userRepository.add(user);
    }

    static async auth(auth: Auth) {
        const result: any = await userRepository.login(auth);
        if (result[1]) {
            
        }
    }


}

export default userService;