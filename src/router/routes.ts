import express, {Request, Response} from 'express';
const app = express();
app.use(express.json());

const router = express.Router();
let productoMercancia = [ 
    {nombre: "Toyota", modelo:"GT86", precio:15000, paisOrigen:"Japon" },
    {nombre: "Amd", modelo:"Ryzen7", precio:50, paisOrigen:"China" },
    {nombre: "Iphone", modelo:"15Pro", precio:1200, paisOrigen:"USA" }
];
// 1
router.get('/products', (_: Request, res: Response) => {
    res.send(productoMercancia);
});
// 2
router.get('/products/menoresacien', (_: Request, res: Response) => {
    res.send(productoMercancia.filter(productos => productos.precio < 100));
    res.json(productoMercancia);
});
// 3
// 4
router.get('/products/:modelo', (req: Request, res: Response) => {
    const {modelo} = req.params;
    const longitud = productoMercancia.length;

    productoMercancia = productoMercancia.filter(producto => producto.modelo !== modelo);
    
    if (productoMercancia.length === longitud) {
        res.status(404).send('producto no encontrado');
        console.log('producto no encontrado');
    } else {
        res.send('Producto eliminado');
        console.log('Producto eliminado');
    }
});

// app.get('/products/eliminar/:modelo', (req: Request, res: Response) => {
//     const modelo = req.params.modelo;
//     const indice = productoMercancia.findIndex((producto) => producto.modelo === modelo);
  
//     if (indice !== -1) {
//       // Eliminar el producto
//       productoMercancia.splice(indice, 1);
//       res.send(`Producto con modelo ${modelo} eliminado.`);
//     } else {
//       res.status(404).send(`Producto con modelo ${modelo} no encontrado.`);
//     }
//   });



// 5
router.get('/products/porpais/:pais', (req: Request, res: Response) => {
    const { pais } = req.params;
    const productFound = productoMercancia.find(producto => producto.paisOrigen === pais);
    if (productFound){
        res.json(productFound);
    } else{
        res.status(404).send('Producto sin encontrar');
    }
});

// 6
router.get('/products/porprecio/:precio', (req: Request, res: Response) => {
    const {precio} = req.params;
    const productFound = productoMercancia.find(producto => producto.precio === Number(precio));
    if (productFound) {
        res.json(productFound);
    }  else {
        res.status(404).send('Producto sin encontrar');
    }
   
});

//7








export default router;