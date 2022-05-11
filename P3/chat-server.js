// chat del server js

//dependencias 


const express = require('express')

// app web vacía
const app = express()

//asociar serv http com la
const http = require('http').Server(app);

//-- Biblioteca socket.io en el lado del servidor
const io = require('socket.io')(http);

//-- Definir el puerto a utilizar
const PUERTO = 9090

//-- Lanzar servidor
http.listen(PUERTO, function(){
    console.log('Servidor lanzado en puerto ' + PUERTO);
  });

//-- Mensaje de arranque
console.log("Arrancando servidor...");
