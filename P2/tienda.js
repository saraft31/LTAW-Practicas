
// -- PRACTICA 2: TIENDA ON-LINE CON NODE.JS


//-- Importar los modulos http, fs y url
const http = require('http');
const fs = require('fs');
const url = require('url');

//-- fich
const TIENDA_JSON = fs.readFileSync('tienda.json','utf-8');

const FORMULARIO = fs.readFileSync('login.html','utf-8');
const RESPUESTA = fs.readFileSync('login_res.html', 'utf-8');
const ERROR = fs.readFileSync('tienda_error.html');
const TIENDA = fs.readFileSync('tienda.html','utf-8');

//-- Definir el puerto a utilizar
const PUERTO = 8080;

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
        'otf'  : 'text/otf',
        'webp' : 'image/webp',
        'json' : 'application/json'
      
    };

    let hastaPunto = myUrl.pathname.lastIndexOf(".");
    let type = myUrl.pathname.slice(hastaPunto+1);
    
    let filename = myUrl.pathname;
    filename = filename.substr(1);

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
        //estilo
        case 'tienda.css':
            content = fs.readFileSync(filename);
            break;
        //imagenes
        case 'imagenes/fondo.jpg':
            content = fs.readFileSync(filename);
            break;
        case 'imagenes/bolis.jpg':
            content = fs.readFileSync(filename);
            break;
        case 'imagenes/cuadernos.jpg':
            content = fs.readFileSync(filename);
            break;
        case 'imagenes/cuadernos.jpg':
            content = fs.readFileSync(filename);
            break;
        case 'imagenes/posit.jpg':
            content = fs.readFileSync(filename);
            break;
        case 'imagenes/sub.jpg':
            content = fs.readFileSync(filename);
            break;
        case 'imagenes/icono.png':
            content = fs.readFileSync(filename);
            break;
        //letra
        case 'Verdana.ttf':
            content = fs.readFileSync(filename);
            break;
        
        // ficheros html
        case 'tienda.html':
            content = TIENDA;
            get_cookie(req);
            break; 
        case 'tienda_error.html':
            content = ERROR;
            get_cookie(req);
            break;
        case 'login.html':
            content = FORMULARIO;
            get_cookie(req);
            break;
        case 'login_res.html':
            content = RESPUESTA;
            get_cookie(req);
            break;
            
        //-- Si no es ninguna de las anteriores devolver mensaje de error
        default:
            res.setHeader('Content-Type','text/html');
            res.statusCode = 404;
            res.write(ERROR);
            res.end();
        
    }



    //-- Si hay datos en el cuerpo, se imprimen
    req.on('data', (cuerpo) => {
    
        //-- Los datos del cuerpo son caracteres
        req.setEncoding('utf8');
        console.log(`Cuerpo (${cuerpo.length} bytes)`);
        console.log(` ${cuerpo}`);
        usuario= recortar(data, "=")
        console.log(usuario);
    });
    


    //-- Esto solo se ejecuta cuando llega el final del mensaje de solicitud
        req.on('end', ()=> {

            //-- Generar respuesta
            res.setHeader('Content-Type', mine[type]);
            res.write(content);
            res.end();
            
        });

});


//-- Activar el servidor
server.listen(PUERTO);

//-- Mensaje de inicio
console.log("La pagina está activa. Escuchando en puerto: " + PUERTO);


