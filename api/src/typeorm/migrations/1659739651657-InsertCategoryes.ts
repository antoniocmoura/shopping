import { MigrationInterface, QueryRunner } from "typeorm";

export class InsertCategoryes1659739651657 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO category (id,name) VALUES ('0016e367-7dc6-4215-b1b7-45858526103c','Clubes Brasileiros')`);
        await queryRunner.query(`INSERT INTO category (id,name) VALUES ('56f06df3-e8d8-44d0-850e-3501a0246be9','Clubes Europeus')`);
        await queryRunner.query(`INSERT INTO category (id,name) VALUES ('355a8b36-2f54-4fb4-9986-74b02e74f2e0','Camisetas Casuais')`);
        await queryRunner.query(`INSERT INTO category (id,name) VALUES ('8e45875c-fdc6-4184-bcec-e15c3d1be0db','Camisetas Históricas')`);
        await queryRunner.query(`INSERT INTO category (id,name) VALUES ('cdf0104b-3158-42ea-b7b3-19bb2f9af334','Seleções Nacionais')`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DELETE FROM category");
    }
}
