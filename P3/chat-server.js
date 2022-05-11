// chat del server js

//dependencias 


const express = require('express')

// app web vacía
const app = express()

//-- Crear un servidor, asociado a la App de express
const server = http.Server(app);

//-- Crear el servidor de websockets, asociado al servidor http
const io = socket(server);

//-- Nombre del fichero JSON a escribir
//const FICHERO_JSON_OUT = "ids.json"

//-- Definir el puerto a utilizar
const PUERTO = 9090

io.on('connect', (socket) => {
    console.log('conectado');
});
//-- Lanzar servidor
http.listen(PUERTO, function(){
    console.log('Servidor lanzado en puerto ' + PUERTO);
  });

//-- Mensaje de arranque
console.log("Arrancando servidor...");

