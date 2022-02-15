//ejemplo 3 programacion asincrona
const http = require('http');

const PUERTO = 8080;

//-- SERVIDOR: Bucle principal de atención a clientes
//CUANDO RECIBO UNA SOLICITUD
const server = http.createServer((req, res) => {

  console.log("\nMENSAJE A")

  req.on('data', (cuerpo) => {
    console.log("MENSAJE B")
  }); //cuando lleguen datros

  //eento end
  req.on('end', ()=> {
    console.log("MENSAJE C");

    //-- Hayppy server. Generar respuesta
    res.setHeader('Content-Type', 'text/plain');
    res.write("Soy el happy server\n");
    res.end()
  });

  console.log("MENSAJE D");

});

console.log("MENSAJE E"); //primer mensaje que va a sacar
server.listen(PUERTO);
console.log("MENSAJE F");

//-- Arranca servidor 
//-- MENSAJE E
//-- MENSAJE F
//---- Llega una solicitud
//-- MENSAJE A
//-- MENSAJE D
//----Llega evento tipo data
//-- MENSAJE B
//---- Evento END
//-- MENSAJE C

// curl "127.0.0.1:8080" solicitud tipo 1 que hago 
//curl  -d "cuerpo" 127.0.0.1:8080 solicitud tipo 2 que hago 
