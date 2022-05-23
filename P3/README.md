 # Práctica 3

Mini-chat en el que múltiples usuarios se pueden conectar a través del navegador. Utiliza webscokets para conseguir que sea una aplicación en tiempo real.

Hemos utilizado módulos de node que hemos instalado previamente con node i (módulo):
*socket.io
*express
*colors

Para el intercambio de datos entre los clientes y el servidor se utilizala biblioteca socket.io.

## Funcionamiento 

Hemos realizado un chat-server.js con el funcionamiento del servidor con node y un chat-client.js para visualizar el chat que lanzamos con node chat-server al cual nos podemos conectar desde el navegador con "[localhost:9000](http://localhost:9090/)".

Cuando ejecutamos esto observamos la página web de nuestro chat que que da la bienvenida cuando entras y te dice el numero de usuario que eres y vemos un display donde escribir los mensajes que podemos enviar pulsando 'enter' o el botón enviar. Una vez esto se mostrará el mensaje que hemos escrito y el numero de usario que lo ha escrito.
En el chat también nos aparece cuando un usuario nuevo se conecta y cuando se desconecta.

Si el mensaje que hemos introducido comienza con '/' lo coge como comando en el que tendremos las siguientes opciones:
*/help: Mostrará una lista con todos los comandos soportados
*/list: Devolverá el número de usuarios conectados
*/hello: El servidor nos devolverá el saludo
*/date: Nos devolverá la fecha

## Mejoras
*Botón de zumbido implementado que manda un zumbido sonoro a cada usuario conectado al chat
*El chat recuerda que usuario eres a través de un fichero .json donde se guardará la id del usuario y se le asignará un numero
*Cada cliente conectado se guardará en el 'chat.json'

## Imágenes
![](https://github.com/saraft31/LTAW-Practicas/blob/main/P3/wiki.png)
