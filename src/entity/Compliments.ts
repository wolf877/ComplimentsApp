import { Entity, PrimaryColumn, Column, CreateDateColumn, JoinColumn, ManyToOne } from "typeorm";
import { v4 as uuid } from "uuid";
import {Tag} from "../entity/Tags"
import { User } from "./User";

@Entity("compliments")
class Compliment{
    @PrimaryColumn()
    readonly id: string;

    @Column()
    User_sender: string;
    @JoinColumn({name: "User_sender"})
    @ManyToOne(()=> User)
    userSend: User;

    @Column()
    User_receiver: string;
    @JoinColumn({name: "User_receiver"})
    @ManyToOne(()=> User)
    userReceiver: User;


    @Column()
    tag_id: string;
    @JoinColumn({name: "tag_id"})
    @ManyToOne(() => Tag)
    tag: Tag;

    @Column()
    message: string;

    @CreateDateColumn()
    created_at: Date;

    constructor(){
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export { Compliment };