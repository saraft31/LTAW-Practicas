// chat del server js

//dependencias 


const express = require('express')

// app web vacía
const app = express()
const http = require('http').Server(app);


//-- Crear el servidor de websockets, asociado al servidor http
const io = require('socket.io')(http);

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

io.on('connection', function(socket){

    //-- Sumamos uno al contador 
    cont_usu += 1;

    //-- Usuario conectado. Imprimir el identificador de su socket
    console.log('--> Usuario conectado!. Socket id: ' + socket.id);

    //-- Le damos la bienvenida a través del evento 'hello'
    socket.emit('hello', "Bienvenido al Chat Winows Live messenger Eres el usuario numero: " + cont_usu);

});