import {MigrationInterface, QueryRunner} from "typeorm";

export class Post1615318893919 implements MigrationInterface {
    name = 'Post1615318893919'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`COMMENT ON COLUMN "post"."createdAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "post" ALTER COLUMN "createdAt" SET DEFAULT '"2021-03-09T19:41:34.014Z"'`);
        await queryRunner.query(`COMMENT ON COLUMN "post"."updatedAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "post" ALTER COLUMN "updatedAt" SET DEFAULT '"2021-03-09T19:41:34.014Z"'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" ALTER COLUMN "updatedAt" SET DEFAULT '2021-03-08 09:42:21.001'`);
        await queryRunner.query(`COMMENT ON COLUMN "post"."updatedAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "post" ALTER COLUMN "createdAt" SET DEFAULT '2021-03-08 09:42:21.001'`);
        await queryRunner.query(`COMMENT ON COLUMN "post"."createdAt" IS NULL`);
    }

}
