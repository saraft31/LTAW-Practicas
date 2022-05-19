
// -- PRACTICA 2: TIENDA ON-LINE CON NODE.JS


//-- Importar los modulos http, fs y url
const http = require('http');
const fs = require('fs');
const url = require('url');

//-- fich
const TIENDA_JSON = fs.readFileSync('tienda.json','utf-8');

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

switch (filename) {
    case '':
        content = TIENDA;
        get_cookie(req);
        break;
    case 'login':
    
        let usuario = myURL.searchParams.get('usuario');
        let correo = myURL.searchParams.get('correo');

        let info = JSON.parse(TIENDA_JSON);
        let user1 = info['usuarios'][0]['user'];
        let correo1 = info['usuarios'][0]['correo'];
        let name1 = info['usuarios'][0]['nombre'];
        let name2 = info['usuarios'][1]['nombre'];
        let user2 = info['usuarios'][1]['user'];
        let correo2 = info['usuarios'][1]['correo'];

        content = RESPUESTA;

        if (correo==correo1 && usuario==user1) {
            console.log("Coincide");

            content = content.replace("HTML_EXTRA", "Bienvenido " + name1);
            mime[type]= "text/html";

        }else if (correo==correo2 && usuario==user2){
            console.log("Coincide");

            content = content.replace("HTML_EXTRA", "Bienvenido " + name2);
            mime[type]= "text/html";

        }else{
            content = content.replace("HTML_EXTRA", "NO ESTA REGISTRADO");
            mime[type]= "text/html";
        }

        break;

    //-- Si no es ninguna de las anteriores devolver mensaje de error
    default:
        res.setHeader('Content-Type','text/html');
        res.statusCode = 404;
        res.write(ERROR);
        res.end();
    
}





//-- Activar el servidor
server.listen(PUERTO);

//-- Mensaje de inicio
console.log("La pagina está activa. Escuchando en puerto: " + PUERTO);


