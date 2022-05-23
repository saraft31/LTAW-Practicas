 # Práctica 4

Hemos convertido el servidor de Chat de la práctica 3 en una aplición Electron nativa en la que dedede el chat múltiples usuarios se pueden conectar a través del navegador. Utilizamos webscokets para conseguir que sea una aplicación en tiempo real y electron con el que por medio de una interfaz gráfica podemos visualizar todos los mensajes del chat, obtener información adicional o obtener la url del chat.

Hemos instaldo los módulos de node:
*socket.io
*express
*colors
*electron
*ip

Para iniciarlo se introduce desde un terminal en la misma capeta el comando npm start para iniciar la interfaz gráfica de electron.

## Funcionamiento 

El servidor principal y desde donde se gestiona la interfaz gráfica de electron se encuentran en el archivo main.js que es el que se activa al iniciar la práctica. En electron aparece la página correspondiente a index.html el proceso de renderizado es el que se comunica con electron con el proceso principal, de esta manera cuando ha llegado un mensaje al servidor se envía con win.webcontents. Además de escuchar los eventos de electron con electron.ipcMain.handle.

Cuando se accede al chat cargan los contenidos de la anterior práctica a través de la url "[localhost:9000](http://localhost:9090/)", donde se está ejecutando el mini-chat.

## Mejoras
* Código qr de la ip

## Imágenes

![](https://github.com/saraft31/LTAW-Practicas/blob/main/P4/fotowiki.png)
