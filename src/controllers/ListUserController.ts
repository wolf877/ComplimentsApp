import{Request, Response} from "express"
import { ListUserService } from "../service/ListUserService"


class ListUserController{
    async handle(req: Request, res: Response){
        const listUserController = new ListUserService();

        const users = await listUserController.execute();

        return res.json(users);
    }
}

export {ListUserController}