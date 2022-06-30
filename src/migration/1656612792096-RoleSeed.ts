import {MigrationInterface, QueryRunner} from "typeorm";

export class RoleSeed1656612792096 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            insert into public.role ("name")
            values ('admin'),
            ('company moderator'),
            ('visitor')
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
