import {Request, Response} from "express"
import {ComplimentsSevice} from "../service/complimentsSevice"


class CreateComplimentController{
    async handle(req: Request, res: Response){
        const {tag,   email_receiver, message} = req.body

        const {user} = req;

        const createComplimentService = new ComplimentsSevice()

        const compliment = await createComplimentService.execute({
            tag,
            email_receiver,
            User_sender: user,
            message
        });

        return res.json(compliment)
    }

}

export {CreateComplimentController}