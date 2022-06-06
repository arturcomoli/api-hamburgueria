import { MigrationInterface, QueryRunner } from "typeorm";

export class initialMigration1653863029636 implements MigrationInterface {
    name = 'initialMigration1653863029636'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_6b9e7660141f57547ab33e9bb72"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "UQ_6b9e7660141f57547ab33e9bb72"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "requestId"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "requestId" uuid`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "UQ_6b9e7660141f57547ab33e9bb72" UNIQUE ("requestId")`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_6b9e7660141f57547ab33e9bb72" FOREIGN KEY ("requestId") REFERENCES "request"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
