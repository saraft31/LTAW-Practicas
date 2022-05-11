// js del cliente


console.log("Ejecutando cliente JS...");

//creamos el websocket y establecemos conexión con el serv
const socket = io();

socket.on("message", (msg)=>{
    if(msg.includes("Usuarios chat:")){
        mensajesRecibidos.innerHTML =  "</p>" + msg.split("////")[0];
      }else{
        display.innerHTML +=  "</p>" + msg.split("////")[0];
      }
    });
