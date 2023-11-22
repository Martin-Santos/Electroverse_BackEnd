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
    synchronize: true,
    logging:true,
    entities: [Product]
})

AppDataSource.initialize()
    .then(async() => {

        console.log("Server")
        const productRepository = AppDataSource.manager.getRepository(Product);
        const existingProducts = await productRepository.find();
        if (existingProducts.length === 0){
            const product1 = new Product("SAMSUNG S22+", 80, "https://images.samsung.com/is/image/samsung/p6pim/ar/2202/gallery/ar-galaxy-s22-s901-sm-s901ezwlaro-thumb-530921607");
            const product2 = new Product("IPHONE 13 PRO MAX", 100, "https://acdn.mitiendanube.com/stores/001/054/848/products/iphone-13-pro-black-21-0ca9f19950903ffe5616541121121361-640-0.png");
            const product3 = new Product("XIAOMI NOTE 10S", 100, "https://www.gonzalezgimenez.com.py/storage/sku/xiaomi-celulares-celular-xiaomi-redmi-note-10s-128-gb-grey-1-1-1655902425.png");
            const product4 = new Product("Samsung 50'' UHD 4K", 100, "https://images.samsung.com/is/image/samsung/p6pim/ar/un50au7000gczb/gallery/ar-uhd-au7000-un50au7000gczb-489502349?$650_519_PNG$");
            const product5 = new Product("LG 55'' UHD 4K", 100, "https://www.lg.com/es/images/television/md07551189/gallery/medium03.jpg");
            const product6 = new Product("Heladera Side by Side Samsung", 100, "https://images.samsung.com/is/image/samsung/p6pim/ar/rs27t5200s9-bg/gallery/ar-ref-sbs-rs5300-379833-rs27t5200s9-bg-404205135?$650_519_PNG$");
            const product7 = new Product("AirFriyer 3,5L Taurus", 100, "https://www.compraonline.alcampo.es/images-v3/37ea0506-72ec-4543-93c8-a77bb916ec12/cf27eef5-425b-4bf8-afab-c8c82f07d8c5/500x500.jpg");

            await productRepository.save([product1, product2, product3, product4, product5, product6, product7 ]);
        }
        
    })
    .catch((err) => console.log(err))
