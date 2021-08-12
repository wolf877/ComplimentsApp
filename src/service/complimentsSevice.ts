import { getCustomRepository } from "typeorm";
import {UsersRepositories} from "../repositories/UsersRepositories"
import {ComplimentsRepositories} from "../repositories/ComplimentsRepositories"

import{FindTag} from "./serviceForTags"

interface ICompliment{
    tag: string;
    User_sender: string;
    email_receiver: string;
    message: string;
}

class ComplimentsSevice{
    async execute({tag, User_sender, email_receiver, message}:ICompliment){

        //const email = email_receiver
        const complimentRepository = getCustomRepository(ComplimentsRepositories)
        const userRepository = getCustomRepository(UsersRepositories)

        const findTag = new FindTag();
        //console.log(email_receiver)

        try{
        const { id } = await userRepository.findOne({
            email: email_receiver
        });

        //console.log(id)

        const User_receiver = id
        if(User_sender === User_receiver){
            throw new Error("User Receiver Incorrect ")
        }

        //const userReceiverExists = await userRepository.findOne(User_receiver);

        //if(!userReceiverExists){
         //   throw new Error("User receiver not exists")
        //}

        const tag_id = await findTag.execute(tag)
        
        console.log(tag_id)

        let compliment = complimentRepository.create({
            tag_id,
            User_receiver,
            User_sender,
            message
        },)

        await complimentRepository.save(compliment)

        

        return compliment}catch(err){
            throw new Error("User receiver not exists")
          }
    }
}

export {ComplimentsSevice}