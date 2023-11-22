import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id!: number

    @Column({
        length:45,
    })
    name: string

    @Column()
    price: number

    @Column({
        length:200,
    })
    img: string

    constructor(name:string, price: number, img: string){
        this.name = name;
        this.price = price;
        this.img = img;
    } 
}