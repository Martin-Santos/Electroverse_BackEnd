import { Router } from 'express';
// import { ProductController } from "../Controllers/controller"
import {getAllProducts, createproduct, login, registerUser } from '../Controllers/controller';

const router: Router = Router();

// const productController = new ProductController()

router.get("/products",getAllProducts)
router.post("/products", createproduct)
router.post("/login", login )
router.post ("/register",registerUser)




export default router;