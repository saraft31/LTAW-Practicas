//-- Ejemplo de paso de parametros a funciones

//-- Recibe dos parámetros y devuelve su suma
function suma(x,y) {
    //-- devolver la suma
    return x+y;
  }
  
  //-- Recibe un parámetro y lo imprime por la consola
  function mensaje(msg) {
    console.log(msg);
  }
  
  //-- Funcion que no recibe parametros
  function saluda() {
      mensaje("HOLA!!");
  }
  
  //-- Funcion que recibe una funcion como parametro
  //-- y simplemente la llama 
  function call(func) {
    console.log("--> Funcion recibida");
  
    //-- Llamar a la funcion pasada como argumento
    func();
  }
  
  //-- Llamar a suma
  let a = suma(2,3);
  
  //-- Probando la funcione mensaje
  mensaje("Prueba")
  mensaje(a);
  
  //-- Probando la funcion call
  call(saluda);
  
  //-- Se le pasa como parametro una funcion
  //-- que se define dentro de los parmatros, vez de 
  //-- fuera
  call( () => {
    mensaje("HOLI!!")
  });

  //-- Ejemplo de paso de parámetros a funciones. ¡Estos parámetros pueden a su vez ser también funciones!. 
  //La función sum(a,b) tiene dos parámetros de entrada y devuelve su suma. 
  //La función mensaje(msg) tiene un parámetro de entrada y no devuelve nada. 
  //La función call(func) tiene un parámetro de entrada que es una función, a la que llama y termina

  //La última llamada se utiliza muchísimo. Se la pasa a call() una función, 
  //pero esta función se define dentro de los parámetros, en vez de hacerlo fuera y usar su nombre. 
  //Se hace así para implementar de forma abreviada las funciones de callback