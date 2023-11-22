import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id!: number

    @Column({
        length:45,
    })
    name: string

    @Column()
    email: number

    @Column({
        length:200,
    })
    password: string

    constructor(name:string, price: number, img: string){
        this.name = name;
        this.email = price;
        this.password = img;
    } 
}