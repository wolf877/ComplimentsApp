import { getCustomRepository } from "typeorm"
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories"




class ListUserReceiver{

    async execute(user:string){
        const complimentsRepository = getCustomRepository(ComplimentsRepositories);

        const compliments = await complimentsRepository.find({ 
            where:{
                User_receiver: user
            }   
        });

        return compliments
    }
}

export {ListUserReceiver}