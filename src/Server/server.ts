import express from "express";
import cors from "cors";
import router from "./routes";
import "../persistance/config";
import 'reflect-metadata';

const App = express()
const port = 8080
App.use(cors());
App.use(express.json())
App.use("/", router)
App.listen(port, () => {
  console.log("Server is ON in:", port)
})






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
