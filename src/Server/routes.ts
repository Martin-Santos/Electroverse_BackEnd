import { Router } from 'express';
import { ProductController } from "../Controllers/controller"

const router: Router = Router();

const productController = new ProductController()

router.get("/products",productController.getAllProducts)
router.post("/products", productController.createproduct)
router.post("/login", productController.login )
router.post ("/register",productController.registerUser)




export default router;