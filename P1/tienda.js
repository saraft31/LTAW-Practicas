// -- el servidor de mi tienda


// fichero html 
// ficheros con img
// ficheros css
// devolver fichero pedido


// -- PRACTICA 1: TIENDA ON-LINE CON NODE.JS


//-- Importar los modulos http, fs y url
const http = require('http');
const fs = require('fs');
const url = require('url');

//-- Definir el puerto a utilizar
const PUERTO = 9000;

//-- Mensaje de arranque
console.log("Arrancando servidor...");

//-- Crear el sevidor
const server = http.createServer(function (req, res) {
    
    //-- Indicar que se ha recibido una peticion
    console.log("Peticion Recibida");

    //-- Crear el objeto URL del mensaje de solitud (req)
    //-- y coger el recurso (url)
    let myURL = url.parse(req.url, true);


    //-- Cabecera que indica el tipo de datos del
    //-- cuerpo de la respuesta: Texto plano
    res.setHeader('Content-Type', 'text/plain');

    //-- Mensaje del cuerpo
    res.write("Soy el Happy server!!\n");

    //-- Terminar la respuesta y enviarla
    res.end();


});

//-- Activar el servidor
server.listen(PUERTO);

//-- Mensaje de inicio
console.log("La pagina está activa. Escuchando en puerto: " + PUERTO);


