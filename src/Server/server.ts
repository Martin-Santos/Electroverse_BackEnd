import express from "express";
import cors from "cors";
import { AppRoutes } from "./routes";
import { AppDataSource } from "../persistance/config";


class Server {
  private readonly app = express();
  private readonly port = 8080;
  public start = async() => {
    await this.middlewares();
    this.app.use(AppRoutes.routes)
    this.app.listen(this.port, () => {
      console.log("server running in port " + this.port);
    });
  };
  private middlewares = async () => {
    this.app.use(cors());
    this.app.use(express.json());
    try {
      await AppDataSource.initialize()
      console.log ("conexion establecida correctamente ")
    } catch (error) {
      console.log(error)
      
    }
    
  };
}

export default Server;







// import express from 'express';
// import router from './router/routes';
// import { Request, Response } from "express";
// const port = 8080
// const app = express();
// app.use(express.json());
// app.use("/", router);

// app.get('/',(_: Request, res: Response) => {
//     res.send('Hola')
// });

// app.listen(port, () =>{
//     console.log(`Server is running at http://localhost:${port}`)
// });
