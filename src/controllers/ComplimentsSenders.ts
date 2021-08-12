import {Request, Response} from "express"
import { ListUserSender } from "../service/ListSenderService"

class listComplimentsSenders{
    async handle(req: Request, res: Response){

        const {user} = req
        
        //console.log(user)

        const UserSendersService = new ListUserSender();

        const compliments = await UserSendersService.execute(user)

        return res.json(compliments)
    }

}

export {listComplimentsSenders}