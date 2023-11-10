import {DataSource} from 'typeorm';
import {Product} from './product';
import "reflect-metadata";

const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "test",
    password: "test",
    database: "test",
    entities: [Product]
})

AppDataSource.initialize(
    .then(() => {

    })
    .catch((error) => console.log(error))
)