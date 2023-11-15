import "reflect-metadata"
import { AppDataSource } from "../persistance/config";
import { Product } from "./product";
export class DB{
    constructor(){}
    getAllProducts(){
        AppDataSource.manager.find(Product);
        
    }
}