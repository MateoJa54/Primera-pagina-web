//*****************Arreglos*************

const arr = new Array(10);
const arr1 = [];
console.log(arr1);

const numeros = [1,2,3,4];
let colores = ['rojo', 'verde', 'azul'];
//Ejercicio

let videoJuegos = ['Mario 3', 'FIFA', ' Megman'];

console.log({videoJuegos});

let arregloCosas = [
    true, 
    123,
    'Fernando',
    1+3,
    function(){},
    ()=> {},
    ['s', 'Peliculas']
];

console.log({arregloCosas});

console.log(arregloCosas[3]);

//Metodos

//Metodos funcionales 
//map, filter, reduce()

//map() transforma los elementos de un arreglo 
let numerosM = [1,2,3,4,5,6];
let cuadrados = numerosM.map(num => num * num);

console.log(cuadrados);

//filter() filtra los elementos que cumplen algun tipo de condicion 

let numerosFilter = [1,2,3,4,5,6];
let pares = numerosFilter.filter(num => num % 2 == 0);

console.log(pares);

//reduce( . reduce todos los elementos a un solo valor)

let numerosReduce = [1,2,3,4,5,6,70,8,9,10];
let maximo = numerosReduce.reduce((acumular, num) => (num>acumular ? num: acumular), numerosReduce[0]);

console.log(maximo);

//Ventajas:
//Son ideales para trabajar con transformacion y manipulaciones complejas de datos dentro de un array
// Permite un estilo de programcacon funcona m'as limpia y facil de leer