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

//-- Function fecha
function date(){
    var hoy = new Date();
    var dd = hoy.getDate();
    var mm = hoy.getMonth();
    var yyyy = hoy.getFullYear();
    var h = hoy.getHours();
    var m = hoy.getMinutes();
    return dd+'/'+mm+'/'+yyyy+' --> '+ h+':'+m;

}

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
    //-- Mostrar cunado se conecta un usuario
    io.emit('conect', '--> Usuario conectado!. Número: ' + cont_user);

    //-- Evento hello
    socket.emit('hello', "Eres el usuario numero: " + cont_user);

    //-- Retrollamada de mensaje recibido del cliente
    socket.on('msg', (msg) => {
    console.log("Cliente: " + socket.id + ': ' + msg);

    //-- Enviar el mensaje a clientes conectados
    io.emit('msg', cont_user + ":" + " " + msg);

    });

    //-- Usuario desconectado. Imprimir el identificador de su socket
    socket.on('disconnect', function(){
        console.log('--> Usuario Desconectado. Socket id: ' + socket.id.yellow);
        //Restamos uno al contador de usuarios
        if (cont_user > 0){
            cont_user = cont_user - 1;
            console.log("Número de usuarios: " + cont_user);
            //-- Mensaje de nuevo usuario desconectado
            io.send("¡Usuario desconectado!");
        };
    }); 
    
    socket.on('zumbido', function(){
        console.log('voy a mandar zumbido');
        zumbido = 'esto es un Zumbido'
        socket.emit('zumbido', "esto es un zumbido");
    })

    socket.on('cmd', (msg) => {
        console.log("Cliente: " + socket.id + ': ' + msg);
    
        if(msg =='/help'){
          socket.emit('cmd', " Comandos posibles: /help , /list, /hello, /date ");
        }else if (msg =='/list') {
          socket.emit('cmd', " Tenemos " + cont_user + " usuarios conectados en el chat " );
        }else if (msg =='/hello') {
          socket.emit('cmd', "Hola compañero, espero que todo te vaya genial :)");
        }else if (msg =='/date') {
            socket.emit('cmd', 'Hoy es: ' + date());
        }else {
          socket.emit('cmd', " Comando Erroneo: ejecute /help para ver los comandos permitidos ");
        }
      })
  
  
});