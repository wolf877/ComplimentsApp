import { getCustomRepository } from "typeorm"
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories"




class ListUserSender{

    async execute(user_id:string){
        const complimentsRepository = getCustomRepository(ComplimentsRepositories);

        const compliments = await complimentsRepository.find({ 
            where:{
                User_sender: user_id
            },
            relations: ["userReceiver", "userSend", "tag"]

        });

        return compliments
    }
}

export {ListUserSender}