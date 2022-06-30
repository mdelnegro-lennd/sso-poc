import {MigrationInterface, QueryRunner} from "typeorm";

export class PermissionSeed1656613121511 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const permission = JSON.stringify({ id: { $in: [1] } });

        console.log(permission);

        await queryRunner.query(`
            insert into public.permission ("action", "subject", "conditions", "roleId")
            values ('manage', 'all', null, 1),
            ('read', 'company', null, 2),
            ('view', 'company', '${permission}', 2)
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
