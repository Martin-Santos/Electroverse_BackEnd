import express from 'express';
import { getProducts, getProductsByPrice, SetNewProduct, getProductByModel, getProductByPais, getProductByPrecio, pushGetProduct } from '../Controllers/controller';


const app = express();
app.use(express.json());
const router = express.Router();

// 1
router.get('/products', getProducts);

// 2

router.get('/products/menoresacien', getProductsByPrice);


// 3

router.put('/products/modificar/:modelo', SetNewProduct);

// 4
router.get('/products/:modelo', getProductByModel);


// 5
router.get('/products/porpais/:pais', getProductByPais);

// 6
router.get('/products/porprecio/:precio', getProductByPrecio);

//7
router.post('/createProducts', pushGetProduct);







export default router;