// js del cliente
console.log("Ejecutando cliente JS...");

//-- Obtener los elementos del DOM
const display = document.getElementById("display");
const msg = document.getElementById("msg");
const send = document.getElementById("enviar");
const cmd = document.getElementById("msg");
const zumbido =document.getElementById("zumbido");


//creamos el websocket y establecemos conexión con el serv
const socket = io();


//-- Se ha recibido el evento 'hello':
//-- Es el mensaje de bienvenida del servidor
socket.on('hello', (msg) => {
  //-- Mensaje en la consola del navegador
  console.log("Mensaje del servidor: " + msg);
  //-- Párrafo display (escribe lo establecido en el evento hello)
  display.innerHTML = msg;
  
});


//-- Botón de enviar
send.onclick = () => {

  //-- Se envía el mensaje escrito
  //-- 'msg' son los mensajes de usuario
  //-- Si no hay mensaje, no se envía
  if (msg.value[0] != '/' ){
    socket.emit('msg', msg.value)
    //-- Borramos lo escrito
    msg.value = "";

  }else { // Si lo primero que se envía es / cuenta como comando  
    socket.emit('cmd', msg.value)
    //-- Borramos lo escrit
    msg.value = "";
  }
}

msg.onchange = () => {
  socket.emit('msg', msg.value);

  //borrar
  msg.value = "";
}

//-- Se ha recibido un mensaje
socket.on('msg', (msg) => {
display.innerHTML += "<br> > " + msg;
});

//-- Se ha conectado un usuario
socket.on('conect', (con) => {
  display.innerHTML += "<br> > " + con;
});

//-- Cuando recibimos un comando
socket.on('cmd', (msg) => {
  console.log("Mensaje del servidor: " + msg);
  display.innerHTML += "<br> > " + msg;
});