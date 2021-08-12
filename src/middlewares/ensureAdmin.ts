import {Request, Response, NextFunction} from "express"
import { getCustomRepository } from "typeorm";
import {UsersRepositories} from "../repositories/UsersRepositories"

export async function ensure_admin(req: Request, res: Response, next: NextFunction){

    const {user} = req
    //console.log(user)
    const UserRepository = getCustomRepository(UsersRepositories);

    const { admin } = await UserRepository.findOne(user)


    if(admin){
        return next();
    }

    return res.status(401).json({
        error: "Unauthorized"
    })
}