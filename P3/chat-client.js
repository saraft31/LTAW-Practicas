// js del cliente
console.log("Ejecutando cliente JS...");


const msg = document.getElementById("msg");

//creamos el websocket y establecemos conexión con el serv
const socket = io();


//-- Se ha recibido el evento 'hello':
//-- Es el mensaje de bienvenida del servidor
socket.on('hello', (msg) => {
     //-- Mensaje en la consola del navegador
  console.log("Mensaje del servidor: " + msg);
  //-- Párrafo display
  display.innerHTML = msg;
});