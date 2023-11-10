import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length:100,
    })
    name: string

    @Column({
        length:100,
    })
    price: number

    @Column({
        length:100,
    })
    photo: string
}