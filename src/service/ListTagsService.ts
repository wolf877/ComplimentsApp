import { getCustomRepository } from "typeorm"
import { TagsRepository } from "../repositories/TagsRepositories"
import {classToPlain} from "class-transformer"



class ListTagsService{
    async execute(){
        const tagsRepository = getCustomRepository(TagsRepository);

        const tags = await tagsRepository.find();
        
        //inserir novo parametro usando map
        //tags = tags.map(tag => ({... tag, nameCustom: `#${tag.name}`}))

        //inserir novo parametro de retormo usando o class-transformer
        return classToPlain(tags)
    }
}

export {ListTagsService}