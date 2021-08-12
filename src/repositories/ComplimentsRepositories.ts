import{Repository, EntityRepository} from "typeorm"
import {Compliment} from "../entity/Compliments"

@EntityRepository(Compliment)
class ComplimentsRepositories extends Repository<Compliment>{

} 

export{ComplimentsRepositories}