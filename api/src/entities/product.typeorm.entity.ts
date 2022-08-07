import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Category } from "./category.typeorm.entity";

@Entity()
export class Product {
    
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column()
    name!: string;

    @Column("decimal")
    price!: number;

    @Column("int")
    quantity!: number;

    @Column()
    image!: string;

    @ManyToOne(() => Category, { eager: true })
    @JoinColumn({name: 'category_id', referencedColumnName: 'id'})
    category!: Category;  

    @CreateDateColumn()
    created_at!: Date;

    @UpdateDateColumn()
    updated_at!: Date;
   
}
