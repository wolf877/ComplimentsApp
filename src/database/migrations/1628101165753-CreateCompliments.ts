import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCompliments1628101165753 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "Compliments",
                columns: [ 
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "User_sender",
                        type: "uuid",
                    },
                    {
                        name: "User_receiver",
                        type: "uuid"
                    },
                    {
                        name: "tag_id",
                        type: "uuid"
                    },
                    {
                        name: "message",
                        type: "varchar",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ],
                foreignKeys: [ 
                    {
                        name: "FKUSerSender",
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        columnNames: ["User_sender"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    },
                    {
                        name: "FKUSerReceiver",
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        columnNames: ["User_receiver"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    },
                    {
                        name: "FKTags",
                        referencedTableName: "tags",
                        referencedColumnNames: ["id"],
                        columnNames: ["tag_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    }
                ]
            })
        )
        /*
            await queryRunner.create.ForeignKey(
                "Compliments",
                new TableForeigKey(
                    {
                        name: "FKUSerSender",
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        columnNames: ["User_sender"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    }
                )
            )
        */
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Compliments");
    }

}
