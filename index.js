const express = require("express");
const app = express();
const clientsRouter = require('./routes/clientRoutes');

const port = process.env.PORT; 

//Es una variable que se toma de un archivo almacenado en la carpeta raíz del proyecto, process se refiere a una instrucción del sistema operativo 

app.use(express.json());
app.use("/miRuta", clientsRouter);
// /miRuta/clients
//configureRoutes(app); //Carga las rutas de los demás servicios
//app.use('/rutas',configureRoutes);

// app.use('/clients', (req, res, next) => {
//     console.log('you are accessing clients mw');
//     next();
// });

//app.use(globalMw);


app.get("/", (req, res) => {
    res.send('This is your main route');
});
/*
app.get('/clients', (req, res) => {
    res.send('¿Qué onda, we?');
});
*/


app.listen(port, () => {
    console.log('server running on',port);
});

