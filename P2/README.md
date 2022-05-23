 # Práctica 2

Tienda con node.js que además implementa cookies para recordar datos de usuario y la lista de la compra.

La tienda deberá tener una base de datos implementada en el fichero tienda.json. Debe contener los siguientes datos:
*Usuarios: Todos los usuarios registrados en la tienda. Existen 2 usuarios saraft y root.

Productos: Todos los productos disponibles en la tienda. Para cada producto: nombre, descripción, precio y cantidad en stock. Tenemos 4 productos subrayadores, boligrafos, post-it y cuadernos

Pedidos: Registro de los pedidos realizados. Cada pedido contiene la siguiente información: nombre de usuario, dirección de envío, numero de la tarjeta y una lista con los nombres de los productos comprados

## Funcionamiento

Cuando accedemos a la página de la tienda con la url "[localhost:9000](http://localhost:9090/)" una vez lanzado el el servidor desde el terminal con node nos aparece la página principal (tienda.html) donde tenemos un enlace para realizar el login y las imagenes de cada producto que nos llevarán a ellos pinchando en la imagen. Desde la página de cada producto podemos añadir este al carrito

## Imágenes
![](https://github.com/saraft31/LTAW-Practicas/blob/main/P2/imagenes/wiki.png)
