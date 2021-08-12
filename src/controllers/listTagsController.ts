import{Request, Response} from "express"
import { ListTagsService}from "../service/ListTagsService"



class ListTagsController{
    async go(req:Request, res: Response){
        const ListTags = new ListTagsService();

        const tags = await ListTags.execute();

        return res.json(tags)
    }
}

export {ListTagsController}