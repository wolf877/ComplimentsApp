import { EntityRepository, Repository } from "typeorm";
import { Tag } from "../entity/Tags";

@EntityRepository(Tag)
class TagsRepository extends Repository<Tag>{
    
};

export{TagsRepository};