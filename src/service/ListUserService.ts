import { classToPlain } from "class-transformer";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";




class ListUserService{
    async execute(){
        const userRepository = getCustomRepository(UsersRepositories);

        const users = await userRepository.find();

        return classToPlain(users);
    }

}

export {ListUserService};