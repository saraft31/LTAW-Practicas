
// -- PRACTICA 2: TIENDA ON-LINE CON NODE.JS


//-- Importar los modulos http, fs y url
const http = require('http');
const fs = require('fs');
const url = require('url');

//-- Definir el puerto a utilizar
const PUERTO = 9090;

//-- Mensaje de arranque
console.log("Arrancando servidor...");


function get_cookie(req){

    //-- Leer las cookies
    const cookie = req.headers.cookie;
    if (cookie) {
        console.log("Cookie: " + cookie);

        //-- Obtener un array con todos los pares nombre-valor
        let pares = cookie.split(";");
        
        pares.forEach((element, index) => {
    
            //-- Obtener los nombres y valores por separado
            let [nombre, valor] = element.split('=');

            //-- Leer el usuario
            //-- Solo si el nombre es 'user'
            if (nombre.trim() === 'user') {
                user = valor;
            }
        });
    } else {
        console.log('No hay cookie');
    }
}



//-- Crear el sevidor
const server = http.createServer(function (req, res) {
    
    //-- Url que pide el cliente
    const myUrl = new URL(req.url, 'http://' + req.headers['host']);
    console.log("\nSe ha solicitado el recurso: " + myUrl.pathname);

    //-- Escribir en consola la ruta de nuestro recurso
    console.log("Peticion Recibida: " + myUrl);


    var mine = {
        '/'    : 'text/html',
        'html' : 'text/html',
        'css'  : 'text/css',
        'jfif' : 'image/jfif',
        'png'  : 'image/png',
        'gif'  : 'image/gif',
        'jpg'  : 'image/jpg',
        'js'   : 'text/js',
        'ttf'  : 'txt/ttf',
      
    };
    
    let filename = ""

    
    //-- Obtenemos el fichero correspondiente.
    if(myUrl.pathname == '/'){
        filename += "./tienda.html"; //-- Página principal de la tienda
    }else{
        filename += "." + myUrl.pathname;
    }
    console.log("Filename:",filename);

    // -- Buscamos el "." final para poder indicar que tipo mine es
    let hastaPunto = myUrl.pathname.lastIndexOf(".");
    let type = myUrl.pathname.slice(hastaPunto + 1);
    console.log("Tipo de mine:", mine[type])


    //--respuesta por defecto
    let code = 200;
    let message = "OK";

    fs.readFile(filename, (err, data) => {

        //si hay error
        if (err) {
            code = 404
            message = "Not Found"
            data = fs.readFileSync('./tienda_error.html')
            res.writeHead(code, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        }else{
            res.statusCode = code; 
            res.statusMessage = message;
            res.writeHead(code, {'Content-Type': mine[type]});
            res.write(data);
            res.end();
        }
    });
});





//-- Activar el servidor
server.listen(PUERTO);

//-- Mensaje de inicio
console.log("La pagina está activa. Escuchando en puerto: " + PUERTO);


