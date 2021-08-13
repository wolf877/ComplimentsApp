import { getCustomRepository } from "typeorm";
import {UsersRepositories} from "../repositories/UsersRepositories"
import { hash } from "bcryptjs"

import nodemailer from "nodemailer";

interface IUserResquest{
    name: string;
    email: string;
    admin: boolean;
    password: string;
}
class CreateUserService{
    async execute({name, email, admin = false, password} : IUserResquest){
        const userRepository = getCustomRepository(UsersRepositories);

        const senderEmail = (email:string,  name:string) => {
            const transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 587,
                secure: false,
                auth: {
                    user: "emailfortest767@gmail.com",
                    pass: "car@lho12"
                }
            });

            const mailOptions = {
                from: '"Compliments App" <emailfortest767@gmail.com>',
                to: email,
                subject: "Welcome to Compliments app ",
                html: `
                    <h3>Hello ${name}!</h3>
                    <p>You already create you account and can use the app</p>
                `
            };
    
            transporter.sendMail(mailOptions, function (err, info){
                if (err) {
                    console.log(err);
                }else {
                    console.log('Email send');
                }
            })
        }

        if(!email){
            throw new Error("Email incorrect")
        }
        //console.log(email)

        const userAlreadyExists = await userRepository.findOne({
            email
        });

        if(userAlreadyExists){
            throw new Error("User already exists")
        }

        const passwordHash = await hash(password, 8);
        
        const user = userRepository.create({
            name,
            email,
            admin,
            password: passwordHash
        });

        await userRepository.save(user);
        
        senderEmail(email, name);

        return user;
    }
}

export {CreateUserService}