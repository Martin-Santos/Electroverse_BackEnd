import { Router } from "express"
import { ProductController } from "../Controllers/controller"

export abstract class ProductsRoutes{
    public static getRoutes = () => {
        const router = Router() 
        const productController = new ProductController()
        router.get("/",productController.getAllProducts)
        return router
    }
}




// // 1
// router.get('/products', getProducts);

// // 2

// router.get('/products/menoresacien', getProductsByPrice);


// // 3

// router.put('/products/modificar/:modelo', SetNewProduct);

// // 4
// router.get('/products/:modelo', getProductByModel);


// // 5
// router.get('/products/porpais/:pais', getProductByPais);

// // 6
// router.get('/products/porprecio/:precio', getProductByPrecio);

// //7
// router.post('/createProducts', pushGetProduct);







export default ProductsRoutes;