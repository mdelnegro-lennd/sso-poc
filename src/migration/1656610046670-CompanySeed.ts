import {MigrationInterface, QueryRunner} from "typeorm";

export class CompanySeed1656610046670 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            insert into public.company ("name")
            values ('Apple Inc.'),
            ('Microsoft'),
            ('Jira')
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
