import express from "express";
import router from './router/routes';
const port = 8080
const app = express();
app.use(express.json());
app.use("/", router);

app.get('/',(_, res) => {
    res.send('Hola')
});

app.listen(port, () =>{
    console.log(`Server is running at http://localhost:${port}`)
});
