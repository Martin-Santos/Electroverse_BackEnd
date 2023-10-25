import express, {Request, Response} from 'express';

const router = express.Router();
let productoMercancia = [ 
    {nombre: "Toyota", modelo:"GT86", precio:15000, paisOrigen:"Japon" },
    {nombre: "Amd", modelo:"Ryzen 7", precio:50, paisOrigen:"China" },
    {nombre: "Iphone", modelo:"15 Pro", precio:1200, paisOrigen:"USA" }
]
// 1
router.get('/', (_: Request, res: Response) => {
    res.send(productoMercancia);
})
// 2
router.get('/menoracien', (_: Request, res: Response) => {
    res.send(productoMercancia.filter(productos => productos.precio < 100));
    res.json(productoMercancia);
})
// 3
// 4
// 5
router.get('/', (_: Request, res: Response) => {
    const { pais } = req.params;
    const productFound = productoMercancia.find(producto => producto.paisOrigen === pais);
    if (productFound){
        res.json(productFound);
    } else{
        res.status(404).send('Producto sin encontrar');
    }
};

// 6
router.get('/', (_: Request, res: Response) => {
    const {precio} = req.params;
    const productFound = productoMercancia.find(producto => producto.precio === Number(precio));
    if (productFound) {
        res.json(productFound);
    }  else {
        res.status(404).send('Producto sin encontrar');
    }
   
})









export default router;