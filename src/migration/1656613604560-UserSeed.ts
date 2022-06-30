import {MigrationInterface, QueryRunner} from "typeorm";

export class UserSeed1656613604560 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            insert into public.user ("firstName", "lastName", "roleId")
            values ('Marcelo', 'Del Negro', 1),
            ('David', 'Gil', 2)
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
