// chat del server js


const express = require('express')
// app web vacía
const app = express()
const http = require('http').Server(app);
//-- Crear el servidor de websockets, asociado al servidor http
const io = require('socket.io')(http);

//-- Contador de usuarios
let cont_user = 0;

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


//-- PUNTOS DE ENTRADA DE LA APLICACION WEB
//-- Defino el punto de entrada principal de mi aplicación web
app.get('/', (req, res) => {
    let path = __dirname + '/chat.html';
    res.sendFile(path);
    console.log("Acceso a " + path);
  });


//-- El resto de peticiones como ficheros estáticos
app.use('/', express.static(__dirname +'/'));


io.on('connection', function(socket){
    //-- Usuario conectado. Imprimir el identificador de su socket
    console.log('--> Usuario conectado!. Socket id: ' + socket.id);

    //-- Sumamos uno al contador 
    cont_user += 1;

    //-- Usuario conectado. Imprimir el identificador de su socket
    console.log('--> Usuario conectado!. Socket id: ' + socket.id);

    //-- Evento hello
    socket.emit('hello', "Bienvenido al Chat Winows Live messenger Eres el usuario numero: " + cont_user);

    //-- Retrollamada de mensaje recibido del cliente
    socket.on('msg', (msg) => {
    console.log("Cliente: " + socket.id + ': ' + msg);

    //-- Enviar el mensaje a clientes conectados
    io.emit('msg', msg);
  })

  
});