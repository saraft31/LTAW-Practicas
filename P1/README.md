 # Práctica 1
En esta práctica se ha contruido un servidor node.js de una tienda, en mi caso una tienda de productos de snowboard.
Hemos creado un servidor web (back-end) y la presentación al usuario (front-end).

A través de páginas con HTML, javascript y  hojas de estilos. 
* Recurso principal: tienda.js, tienda.html y style.css
* Productos: productos.js, productos.html y productos.css
* Info: info.html y info.css
* Contacto: contacto.html y contacto.css
* Otros: tienda_error.html, imagenes y fuentes


## Puesta en marcha
Para poner en funcionamiento la tienda una vez descargado todo se abre un terminal en la carpeta de P1, en la cual se deben encontrar todos los ficheros correspondientes y ejecutar: node tienda.js

De esta forma el servidor se pone en marcha e indica el puerto en el que está, que será el 9090.

Para acceder abrimos el navegador y nos conectaremos a la url "[localhost:9000](http://localhost:9090/)".

## Servidor

El servidor es un programa que se encarga de recibir las peticiones de los clientes y procesarlas detectándo lo que pide, accede al sistema de ficheros local, localiza el recurso y lo devuelve.

En el navegador renderizará estos recursos para mostrarlos, los correspondietes a imágenes, html o incluso el funcionamiento del código javascript.

Cuando ejecutamos el servidor lo primero que vemos es la página principal de bienvenida a la tienda en la que vemos tres enlaces (Productos, Información y Contacto), si pulsamos en cuanquiera de estos nos lleva a la pagina html con dicho recurso.
En la página de productos vemos 4 botones cada uno de cada tipo de producto, pinchando en ellos se nos muestran imagenes de esos productos. En información podemos consultar información sobre el snowboard y en contacto vemos los datos de nuestra tienda y donde puedes encontrarnos.

## Mejoras
* Implementación de una página principal en vez de mostrsr productos directamente
* Botones para desplegar los productos
* Más productos de los requeridos en la práctica


