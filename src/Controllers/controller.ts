import { Request, Response } from "express";
import { Product } from "../persistance/product";
import { AppDataSource } from "../persistance/config";
import { User } from "../persistance/user";



export const getAllProducts =async (_:Request, res: Response) => {
    const productRepository = AppDataSource.getRepository(Product)
        
    const products = await productRepository.find()
    res.json({
        products
    })
        
}
export const login = async (req:Request, res: Response) => {
    const {email, password} = req.body
    try{
        const comparador = await AppDataSource.manager.findOne(User, {where:{email, password}})
        if (comparador) {res.json({mensaje: "Secion iniciada"})}
        else {res.status(400).json({mensaje: "Secion Fallida"})}
    }catch(error){
        console.log(error)
    }
}




    // public readonly login = async (req:Request, res: Response) => {
    //     const {email, password} = req.body
    //     try{
    //         const comparador = await AppDataSource.manager.findOne(User, {where:{email, password}})
    //         if (comparador) {res.json({mensaje: "ingreso correcto"})}
    //         else {res.json({mensaje: "ingreso fallido"})}
    //     }
    //     catch(error){
    //         console.log(error)
    //     }
    // }

export const createproduct = async (req: Request, res: Response) => {
    const { price, name, imageUrl } = req.body
    const productRepository = AppDataSource.getRepository(Product)
    const product = await productRepository.findOne({
        where: {
            name
        }

    })
    if (product) {
        return res.status(400).json({
            error: ' El producto con nombre ' + name + ' ya existe '

        })
    }

    try {
        const newProduct = new Product(name, price, imageUrl)
        await productRepository.save(newProduct)
        return res.status(201).json({
            mensaje: 'producto creado',
            producto: newProduct
        })




    } catch (error) {
        return res.status(500).json({
        error: 'no se encontro el producto'
        })
    }
}

    //CONTROLADOR DEL REGISTER
export const registerUser = async (req: Request, res: Response) => {
    const { formData } = req.body;
    
    const name = formData.usuario;
    const email = formData.email;
    const password = formData.password;
    
    try {
            
    
        const existingUser = await AppDataSource.manager.findOne(User, { where: { name, email } });
    
        if (existingUser) {
            return res.status(400).json({ error: 'El Usuario o Email ya esta en uso' });
        } else {
            const newUser = new User(name, email, password);
    
        try {
                await AppDataSource.manager.save(newUser);
                    
    
                return res.status(201).json({ message: 'Usuario registrado exitosamente' });
            } catch (error) {
                console.error('Error al registrar el usuario:', error);
                return res.status(500).json({ error: 'Error al conectar con la base de datos' });
            }
    }
    
    } catch (err) {
        console.error('Error al registrar el usuario:', err);
        return res.status(500).json({ error: 'Error interno del servidor' });
    }  
};
    










// let productoMercancia = [ 
//     {nombre: "Toyota", modelo:"GT86", precio:15000, paisOrigen:"Japon" },
//     {nombre: "Amd", modelo:"Ryzen7", precio:50, paisOrigen:"China" },
//     {nombre: "Iphone", modelo:"15Pro", precio:1200, paisOrigen:"USA" }
// ];


// export function getProducts( res: Response) {
//     res.send(productoMercancia);
// };

// export function getProductsByPrice ( res: Response){
//     res.send(productoMercancia.filter(productos => productos.precio < 100));
//     res.json(productoMercancia);
// };

// export function SetNewProduct(req: Request, res: Response){
//     const{ Modelo } = req.params;
//     const nuevoProducto = req.body;

//     const productoExistente = productoMercancia.find((producto) => producto.modelo === Modelo);
//     if (!productoExistente){
//         res.status(400).json({message: "Producto no existente"});
//     } else {
//         Object.assign(productoExistente, nuevoProducto);
//         res.status(202).send({message: "Producto modificado", producto: productoExistente});
//     }
// };

// export function getProductByModel(req: Request, res: Response){
//     const {modelo} = req.params;
//     const longitud = productoMercancia.length;

//     productoMercancia = productoMercancia.filter(producto => producto.modelo !== modelo);
    
//     if (productoMercancia.length === longitud) {
//         res.status(404).send('producto no encontrado');
//         console.log('producto no encontrado');
//     } else {
//         res.send('Producto eliminado');
//         console.log('Producto eliminado');
//     }
// };

// export function getProductByPais (req: Request, res: Response){
//     const { pais } = req.params;
//     const productFound = productoMercancia.find(producto => producto.paisOrigen === pais);
//     if (productFound){
//         res.json(productFound);
//     } else{
//         res.status(404).send('Producto sin encontrar');
//     }
// };

// export function getProductByPrecio (req: Request, res: Response){
//     const {precio} = req.params;
//     const productFound = productoMercancia.find(producto => producto.precio === Number(precio));
//     if (productFound) {
//         res.json(productFound);
//     }  else {
//         res.status(404).send('Producto sin encontrar');
//     }
   
// };


// export function pushGetProduct (req, res){
//     const getProduct = req.body;
//     productoMercancia.push(getProduct);
//     res.status(201).send(productoMercancia);
// };