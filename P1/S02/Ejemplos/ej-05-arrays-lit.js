//Para obtener nuevas variables a partir de las propiedades se puede hacer de varias formas. En el ejemplo vemos esta línea:

//const { valor, nombre } = objeto1;
//Este código es la forma abreviada de este otro:

//const valor = objeto1.valor;
//const nombre = objeto1.nombre;

//-- Ejemplo de arrays literales

//-- Crear una lista (array) de 4 elementos
const a = [1,3,5,7];

//-- Mostrar el elemento 2
console.log("Elemento 2: " + a[2]);

//-- Recorrer todos los elementos
for (i in a) {
    console.log(`a[${i}] = ${a[i]}`);
}

//-- Imprimir el numero total de elementos
console.log("Cantidad de elementos: " + a.length);

//length numero de elementos totales