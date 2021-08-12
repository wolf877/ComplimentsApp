import { getCustomRepository } from "typeorm";
import { TagsRepository } from "../repositories/TagsRepositories";



class FindTag{
    async execute(tag:string){
        const tagRepository = getCustomRepository(TagsRepository);

        const { id } = await tagRepository.findOne({
            name: tag
        })
        const tag_id = id
        
        // console.log(tag_id)
        // console.log(tag)
        
        return  tag_id 
    }
}

export {FindTag}