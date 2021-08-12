import { getCustomRepository } from "typeorm";
import {UsersRepositories} from "../repositories/UsersRepositories"
import { compare } from "bcryptjs"
import {sign} from "jsonwebtoken"

interface IAuthenticationRequest{
    email: string;
    password: string;
}

class AuthenticationService{
    async execute({email, password}: IAuthenticationRequest){
        const userRepositories =  getCustomRepository(UsersRepositories);
        
        const user = await userRepositories.findOne({email});

        if(!user){
            throw new Error("email/password is incorrect");
        }

        const passwordMatch = await compare(password, user.password)

        if(!passwordMatch){
            throw new Error("email/password is incorrect");
        }

        const token = sign({
            email: user.email
        }, "a2e63ee01401aaeca78be023dfbb8c59", {
            subject: user.id,
            expiresIn: "1d",
        })

        return token;
    }

    
}

export {AuthenticationService}