import {Request, Response} from "express"
import { ListUserReceiver } from "../service/ListReceiverService"


class listComplimentsReceiver{
    async handle(req: Request, res: Response){

        const {user} = req

        const UserReceiversService = new ListUserReceiver();

        const compliments = await UserReceiversService.execute(user)

        return res.json(compliments)
    }

}

export {listComplimentsReceiver}