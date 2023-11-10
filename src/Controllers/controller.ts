import { Request, Response} from 'express';


let productoMercancia = [ 
    {nombre: "Toyota", modelo:"GT86", precio:15000, paisOrigen:"Japon" },
    {nombre: "Amd", modelo:"Ryzen7", precio:50, paisOrigen:"China" },
    {nombre: "Iphone", modelo:"15Pro", precio:1200, paisOrigen:"USA" }
];


export function getProducts( res: Response) {
    res.send(productoMercancia);
};

export function getProductsByPrice ( res: Response){
    res.send(productoMercancia.filter(productos => productos.precio < 100));
    res.json(productoMercancia);
};

export function SetNewProduct(req: Request, res: Response){
    const{ Modelo } = req.params;
    const nuevoProducto = req.body;

    const productoExistente = productoMercancia.find((producto) => producto.modelo === Modelo);
    if (!productoExistente){
        res.status(400).json({message: "Producto no existente"});
    } else {
        Object.assign(productoExistente, nuevoProducto);
        res.status(202).send({message: "Producto modificado", producto: productoExistente});
    }
};

export function getProductByModel(req: Request, res: Response){
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
};

export function getProductByPais (req: Request, res: Response){
    const { pais } = req.params;
    const productFound = productoMercancia.find(producto => producto.paisOrigen === pais);
    if (productFound){
        res.json(productFound);
    } else{
        res.status(404).send('Producto sin encontrar');
    }
};

export function getProductByPrecio (req: Request, res: Response){
    const {precio} = req.params;
    const productFound = productoMercancia.find(producto => producto.precio === Number(precio));
    if (productFound) {
        res.json(productFound);
    }  else {
        res.status(404).send('Producto sin encontrar');
    }
   
};


export function pushGetProduct (req, res){
    const getProduct = req.body;
    productoMercancia.push(getProduct);
    res.status(201).send(productoMercancia);
};