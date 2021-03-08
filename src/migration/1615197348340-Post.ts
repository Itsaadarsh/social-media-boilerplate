import { MigrationInterface, QueryRunner } from 'typeorm';

export class Post1615197348340 implements MigrationInterface {
  name = 'Post1615197348340';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`COMMENT ON COLUMN "post"."createdAt" IS NULL`);
    await queryRunner.query(
      `ALTER TABLE "post" ALTER COLUMN "createdAt" SET DEFAULT '"2021-03-08T09:55:48.420Z"'`
    );
    await queryRunner.query(`COMMENT ON COLUMN "post"."updatedAt" IS NULL`);
    await queryRunner.query(
      `ALTER TABLE "post" ALTER COLUMN "updatedAt" SET DEFAULT '"2021-03-08T09:55:48.420Z"'`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "post" ALTER COLUMN "updatedAt" SET DEFAULT '2021-03-08 09:42:21.001'`
    );
    await queryRunner.query(`COMMENT ON COLUMN "post"."updatedAt" IS NULL`);
    await queryRunner.query(
      `ALTER TABLE "post" ALTER COLUMN "createdAt" SET DEFAULT '2021-03-08 09:42:21.001'`
    );
    await queryRunner.query(`COMMENT ON COLUMN "post"."createdAt" IS NULL`);
  }
}
