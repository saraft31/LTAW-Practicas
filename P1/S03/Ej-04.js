const http = require('http');

const PUERTO = 8080;

//-- SERVIDOR: Bucle principal de atención a clientes
const server = http.createServer((req, res) => {

  console.log("Petición recibida")

  //-- Hayppy server. Generar respuesta
  //-- Código: todo ok
  res.statusCode = 200; //codigo standar todo OK
  res.statusMessage = "OK :-)"; // mensaje que va con el code
  res.setHeader('Content-Type', 'text/plain'); //envio el cuero (texto plano)
  res.write("Soy el happy server\n");
  res.end()

});

server.listen(PUERTO);

console.log("Ejemplo 4. Happy Server listo!. Escuchando en puerto: " + PUERTO);


//-- curl  -v 127.0.0.1:8080 petición