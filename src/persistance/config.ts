import {DataSource} from 'typeorm';
import {Product} from './product';
import "reflect-metadata";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "1234",
    database: "ElectroverseDB",
    entities: [Product]
})

AppDataSource.initialize()
    .then(() => {
        console.log("Sexo")
    })
    .catch((error) => console.log(error))
