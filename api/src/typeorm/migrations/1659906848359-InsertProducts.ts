import { MigrationInterface, QueryRunner } from "typeorm";

export class InsertProducts1659906848359 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO product ("name",price,quantity,image,category_id) VALUES ('Flamengo 2020',300,1000,'./images/products/fla.jpg','0016e367-7dc6-4215-b1b7-45858526103c')`);
        await queryRunner.query(`INSERT INTO product ("name",price,quantity,image,category_id) VALUES ('Palmeiras 2020',199,1000,'./images/products/palmeiras.jpg','0016e367-7dc6-4215-b1b7-45858526103c')`);
        await queryRunner.query(`INSERT INTO product ("name",price,quantity,image,category_id) VALUES ('Grêmio 2020',199,1000,'./images/products/gremio.jpg','0016e367-7dc6-4215-b1b7-45858526103c')`);
        await queryRunner.query(`INSERT INTO product ("name",price,quantity,image,category_id) VALUES ('Arsenal 2020/2021',399.99,1000,'./images/products/arsenal.jpg','56f06df3-e8d8-44d0-850e-3501a0246be9')`);
        await queryRunner.query(`INSERT INTO product ("name",price,quantity,image,category_id) VALUES ('Manchester City 2020/2021',350.99,1000,'./images/products/man-city.jpg','56f06df3-e8d8-44d0-850e-3501a0246be9')`);
        await queryRunner.query(`INSERT INTO product ("name",price,quantity,image,category_id) VALUES ('Milan 2020/2021',299.99,1000,'./images/products/milan.jpg','56f06df3-e8d8-44d0-850e-3501a0246be9')`);
        await queryRunner.query(`INSERT INTO product ("name",price,quantity,image,category_id) VALUES ('Brasil 1944',200,1000,'./images/products/brasil94.jpg','8e45875c-fdc6-4184-bcec-e15c3d1be0db')`);
        await queryRunner.query(`INSERT INTO product ("name",price,quantity,image,category_id) VALUES ('Flamengo 1981',500,1000,'./images/products/fla81.jpg','8e45875c-fdc6-4184-bcec-e15c3d1be0db')`);
        await queryRunner.query(`INSERT INTO product ("name",price,quantity,image,category_id) VALUES ('Alemanha 2022',350,1000,'./images/products/alemanha.jpg','cdf0104b-3158-42ea-b7b3-19bb2f9af334')`);
        await queryRunner.query(`INSERT INTO product ("name",price,quantity,image,category_id) VALUES ('Brasil 2022',299,1000,'./images/products/brasil.jpg','cdf0104b-3158-42ea-b7b3-19bb2f9af334')`);
        await queryRunner.query(`INSERT INTO product ("name",price,quantity,image,category_id) VALUES ('Flamengo Treino 2020',199,1000,'./images/products/fla_treino.jpg','355a8b36-2f54-4fb4-9986-74b02e74f2e0')`);
        await queryRunner.query(`INSERT INTO product ("name",price,quantity,image,category_id) VALUES ('Real Madrid 2019/2020',189.99,1000,'./images/products/real_treino.jpg','355a8b36-2f54-4fb4-9986-74b02e74f2e0')`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DELETE FROM product");
     }
}
