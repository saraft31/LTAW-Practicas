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
  //-- Párrafo display
  display.innerHTML = msg;
});
