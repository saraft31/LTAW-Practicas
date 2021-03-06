
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

let productos_disp = [];
let product_list = [];
let productoss = JSON.parse(TIENDA_JSON);
console.log("Lista de productos disponibles");
console.log("-----------------------------");
productoss["productos"].forEach((element, index)=>{
  console.log("Articulo " + (index + 1) + ": " + element.name +
              ", Stock: " + element.stock + ", Precio: " + element.precio);
  productos_disp.push([element.nombre, element.descripcion, element.stock, 
                       element.precio]);
  product_list.push(element.nombre);
});

const PRODUCTO1 = fs.readFileSync('1-sub.html','utf-8');
const PRODUCTO2 = fs.readFileSync('2-post.html','utf-8');
const PRODUCTO3 = fs.readFileSync('3-bolis.html','utf-8');
const PRODUCTO4 = fs.readFileSync('4-cuadernos.html','utf-8');
const CARRITO = fs.readFileSync('carrito.html','utf-8');

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

function get_compra(req, res, producto){

    const cookie = req.headers.cookie;

    if(cookie){
        //-- par de nombre valor 
        let par = cookie.split(";");
        par.forEach((element,index)=>{
            let [nombre, valor] = element.split("=");


            if (nombre.trim() === 'carrito') {
                res.setHeader('Set-Cookie', element + ': ' + producto);
            }
        });
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
        
            let usuario = myUrl.searchParams.get('usuario');
            let correo = myUrl.searchParams.get('correo');

            let info = JSON.parse(TIENDA_JSON);

            let user1 = info['usuarios'][0]['user'];
            let correo1 = info['usuarios'][0]['correo'];
            let name1 = info['usuarios'][0]['nombre'];
            
            let user2 = info['usuarios'][1]['user'];
            let correo2 = info['usuarios'][1]['correo'];
            let name2 = info['usuarios'][1]['nombre'];

            content = RESPUESTA;

            if (correo==correo1 && usuario==user1) {
                console.log("Coincide");

                content = content.replace("HTML_EXTRA", "Bienvenido " + name1);
                mine[type]= "text/html";

            }else if (correo==correo2 && usuario==user2){
                console.log("Coincide");

                content = content.replace("HTML_EXTRA", "Bienvenido " + name2);
                mine[type]= "text/html";

            }else{
                content = content.replace("HTML_EXTRA", "NO ESTA REGISTRADO");
                mine[type]= "text/html";
            }

            break;
        case 'productos':
            let info_productos = JSON.parse(TIENDA_JSON);
            productos = info_productos["productos"];

            content_type = "application/json";

            let param1 = myURL.searchParams.get('param1');
            param1 = param1.toUpperCase();

            let result = [];

            for (let prod of productos) {
                
                prodU = prod["nombre"].toUpperCase();
                if (prodU.startsWith(param1)) {
                    result.push(prod);
                }
            }

            //-- Pasar una variable a formato JSON. Se hace con el m??todo:
            console.log(result[0]);
            content = JSON.stringify(result);
            mine[type] ="text/html";
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
        //productos
        case '1-sub.html':
            content = PRODUCTO1;
            get_cookie(req);
            break;
        case '2-post.html':
            content = PRODUCTO2;
            get_cookie(req);
            break;
        case '3-bolis.html':
            content = PRODUCTO3;
            get_cookie(req);
            break;
        case '4-cuadernos.html':
            content = PRODUCTO4;
            get_cookie(req);
            break;
        case 'carrito.html':
            content = CARRITO;
            get_compra(req);
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
console.log("La pagina est?? activa. Escuchando en puerto: " + PUERTO);


