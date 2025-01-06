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

//Agregar elementos de un array

//push() agrega 1 o más elementos al final de un arreglo
let p = [1,2,3,4];
p.push(5);
console.log(p);

// unshift() agrega 1 o más elementos al principio del arreglo 
let u = [1,2,3,4];
u.unshift(5);
console.log(u);

//splice() agrega o elimina elementos en cualquier posicion dentro de array
let s = [1,2,3,4];
s.splice(1,0,5);//agreaga el numero 5 en la posicion 1, sin eliminar el elemento 
console.log(s);

//Modificar elementos dentro de un array

//Podemos acceder a un elemento directamente por su indice y modificarlo
let i = ['Ana', 'Juan', 'Pedro', 'Jose'];
i[2] = 'Maria'; //Modifica el elemento en la posicion 2
console.log(i);

//si deseamos modificar el arreglo de forma inmutable, se puede utilizar 
//el metodo map() crea un nuevo arreglo con los valores modificados

// let arregloMap = ['Azul', 'Naranja', 'Amarillo', 'Rojo', 'Negro']; 
let arregloMap = [10,23,35,26];
let arregloNuevo = arregloMap.map(num => num === 10 ? 5 : num);
console.log(arregloNuevo);

//splice() tambien se puede utilizar 
let z = [1,2,3,4];
z.splice(1,1,5);
console.log(z);

//Eliminar elementos de un array
//pop() elimina el ultimo elemento del arreglo.
let arregloE = ['Azul', 'Naranja', 'Amarillo', 'Rojo', 'Negro']; 
arregloE.pop();
console.log(arregloE);

//shift() elemina el primer elemento del un array
let ArregloS = ['Azul', 'Naranja', 'Amarillo', 'Rojo', 'Negro']; 
ArregloS.shift();
console.log(ArregloS);

//splice() para eliminar cualquier elemento dentro de un arreglo
let arregloSp = ['Azul', 'Naranja', 'Amarillo', 'Rojo', 'Negro']; 
arregloSp.splice(3,1);//posicion, elementos para eliminar
console.log(arregloSp);