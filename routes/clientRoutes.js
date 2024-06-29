const express = require('express');
const router = express.Router();
const clientServices = require('../services/clientServices');
const cheffServices = require('../services/cheffServices');
const restoServices = require('../services/restaurantesServices');

//const { localMw } = require('../middlewares/exampleMW');

//Visualiza clientes
router.get('/clients', (req, res) => {
    const clients = clientServices.getAll()
    console.log(clients);
    //res.send(clients);
    res.status(200).json({
        clients,
        message: 'Here is the client list from /miRuta/clients'
    });
});
//Visualiza un cliente por ID
router.get('/clients/:id',(req, res) => {
    const clientId = req.params.id;
    const client = clientServices.getOne(clientId);
    res.status(200).json({
        client,
        message: 'Here is the client by ID from get /miRuta/clients/:id'
    });
});
//Agrega un cliente
router.post('/clients', (req, res) => { //Postman es un programa que emula el frontend
    const info = req.body;       //req.body es la forma en como se manda información a través de una petición post
    clientServices.create(info); //Se agrega un nuevo componente en el objeto client
    res.status(201).json({
        message: 'client list updated',
        message: info
    });
});
//Modifica a un cliente
router.put('/update-client-first-name/:id', (req, res) => { 
    const  id  = req.params.id; //req.param son los parámetros que se introducen al final de la barra de navegación
    const {firstName}  = req.body; //la información en el campo Body de postman
    clientServices.updateFirstName(id, firstName);
    res.status(200).json({
        message: 'client updated'
    });
});
//Borra cliente
router.delete('/clients/:id', (req, res) => {
    const  id  = req.params.id;
    clientServices.remove(id);
    console.log('Se borro el elemento: ',id);
    res.status(200).json({
        message: 'client deleted'
    });
});


//           Cheffs

//Visualiza cheffs
router.get('/cheffs', (req, res) => {
    const cheffList = cheffServices.getAll()
    res.status(200).json({
        cheffList,
        message: 'Here is the Cheffs list from /miRuta/cheffs'
    });
});

//Visualiza un cheff por ID
router.get('/cheffs/:id',(req, res) => {
    const cheffId = req.params.id;
    const cheff = cheffServices.getOne(cheffId);
    res.status(200).json({
        cheff,
        message: 'Here is the cheff by ID from get /miRuta/clients/:id'
    });
});

//Agrega un cheff
router.post('/cheffs', (req, res) => { 
    const info = req.body;       
    cheffServices.create(info); 
    res.status(201).json({
        message: 'cheff list updated',
        message: info
    });
});
//Modifica a un cheff
router.put('/update-cheff-first-name/:id', (req, res) => { 
    const  id  = req.params.id; 
    const {firstName}  = req.body; 
    cheffServices.updateFirstName(id, firstName);
    res.status(200).json({
        message: 'cheff updated'
    });
});
//Asignar un restaurante a un cheff
router.put('/resto-assign/:id', (req, res) => { //Se asigna un restaurante por Id 
    const  cheffId  = req.params.id; 
    const {restoId}  = req.body; 
    console.log(cheffId,'-',restoId);
    cheffServices.restoAssign(cheffId, restoId); //Se encuentra en el archivo cheffServices.js
    res.status(200).json({
        message: 'Resto Assigned'
    });
});
//Borra un cheff
router.delete('/cheffs/:id', (req, res) => {
    const  id  = req.params.id;
    cheffServices.remove(id);
    console.log('Se borro el elemento: ',id);
    res.status(200).json({
        message: 'cheff deleted'
    });
});


//           Restaurantes

//Visualiza clientes
router.get('/resto', (req, res) => {
    const resto = restoServices.getAll()
    console.log(resto);
    //res.send(clients);
    res.status(200).json({
        resto,
        message: 'Here is the client list from /miRuta/clients'
    });
});
//Visualiza un restaurante por ID
router.get('/resto/:id', (req, res) => {
    const restoId = req.params.id;
    const resto = restoServices.getOne(restoId);
    res.status(200).json({
        resto,
        message: 'Here is the client by ID from get /miRuta/clients/:id'
    });
});
//Agrega un restaurante
router.post('/resto', (req, res) => { 
    const info = req.body;       
    restoServices.create(info); 
    res.status(201).json({
        message: 'resto list updated',
        message: info
    });
});
//Modifica a un restaurante
router.put('/update-resto-first-name/:id', (req, res) => { 
    const  id  = req.params.id; //req.param son los parámetros que se introducen al final de la barra de navegación
    const {firstName}  = req.body; //la información en el campo Body de postman
    console.log(id,'-',firstName);
    restoServices.updateFirstName(id, firstName);
    res.status(200).json({
        message: 'resto updated'
    });
});
//Borra un restaurante
router.delete('/resto/:id', (req, res) => {
    const  id  = req.params.id;
    restoServices.remove(id);
    console.log('Se borro el elemento: ',id);
    res.status(200).json({
        message: 'resto deleted'
    });
});


module.exports = router;