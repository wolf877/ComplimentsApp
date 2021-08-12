import {getCustomRepository} from "typeorm"
import {TagsRepository} from "../repositories/TagsRepositories"


class CreateTagService{
    async execute(name:string){
        const tagsRepos = getCustomRepository(TagsRepository);

        if(!name){
            throw new Error("Incorret name")

        }
        // findOne = SELECT * FROM TAGS WHERE NAME like 'name'
        const tagsAlready = await tagsRepos.findOne({
            name
        });

        if(tagsAlready){
            throw new Error("Tags already exist")
        }
        //console.log(name)
        
        const tag = tagsRepos.create({
            name
        });

        await tagsRepos.save(tag);

        return tag;


    }
}

export {CreateTagService}