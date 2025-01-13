var nombre = "Mateo";
var apellido = "Iza";
var edad= 20;
console.log("Mi nombre es "+ nombre +" "+apellido);
console.log("Mi edad es "+ edad);
console.log("Mi nombre es "+nombre+" " + apellido + " y tengo " + edad + " años")
let x = 10;
let y = 20;
let z = x + y;
console.log(z);

//var declara una variable global
//let declara una variable local o tambien una variable de bloqueç
//conts declara una variable que no va a cambiar su valor 

//if marca un bloque de instrucciones que se ejecutan si una condicion se cumple 
//swich marca un bloque de instrucciones que se ejcutan si una condicon se cumple
//While marca un bloque de instrucciones que se ejecutan varias veces 
//function marca un bloque de instrucciones que se ejcutan varias veces si se declaran 
// try se ejecuta cuando se produce un error
//catch se ejecuta cuando se produce un error
//Return se ejecuta cuando una condicion se cumple ademas de devolver un valor 

//Ejemplo de los tipos de datos de JavaScript

//Tipos de datos string 

//var ==> undepercante
var nombre2 = "Mateo";
let apellido2 = "Iza";
const edad2= 20;
console.log("Mi nombre es "+ nombre2 +" "+apellido2);
console.log("Mi edad es "+ edad2);
console.log("Mi nombre es "+nombre2+" " + apellido2 + " y tengo " + edad2 + " años")
//Tipos de datos string 
let nombrePersona = "Mateo ";
console.log(nombrePersona);

let nombrePersona1= "Juan";
console.log(nombrePersona1);

//Tipo de datos de tipo numerico 
let numero = 100;
console.log(numero);

//Tipo de dato objetivo o denominado object

let persona = {
    nombre: "Juan",
    apellido: "Iza",
    edad: 35
}

console.log(persona);

let let1 = "mateo";
console.log(typeof let1);

let let2 = 25;
console.log(typeof let2);

let let3 = false;
console.log(typeof let3);

let let4 = BigInt(123);
console.log(let4);

let let5 = [1,2,3,4,5,,8,9];
console.log(typeof let5);

//tipo de dato tipo de funcion

function saludar (){
}
console.log(typeof saludar);

//Tipo de dato symbol

let simbolo = Symbol('Mi simbolo');

console.log(typeof simbolo);
//Tipo de dato calse que es similar a una funcion 
class Persona {
    constructor(nombre, apellidos, edad) {
        this.nombre= nombre;
        this.apellidos = apellidos;
        this.edad = edad;
    }
}
console.log(typeof Persona);

//tipo de dato underfined se puede utiliza como un valro 
let variable;
console.log(variable);
console.log(typeof variable);

//Tipo de dato es null, quiere decir que tiene aucencia de valor 

let variable1 = null;
console.log(variable1);
console.log(typeof variable1);
let autos = ['BW', ' Mercedes benz', 'audi'];
console.log(autos);
console.log(typeof autos);

let cadenaVacia = " ";
console.log(cadenaVacia);
console.log(typeof cadenaVacia);

//Reglas de JavaScript para declarar variables 

//No se puede iniciar con simpolos para iniciar 

//Formas correcta de declarar una variable 

let nombresCompletos = 'Mateo Iza ';
let nombres_Completos = 'Mateo Iza';
let $nombresCompletos = 'Mateo Iza';
let _nombresCompletos = 'Mateo Iza';
 let nombresCompletos_ = 'Mateo Iza';

 //Formas incorrecctas 

//  let 1nombresCompletos = 'Mateo Iza';
//  let nombrescompeltos ='mateo iza';

//------------

// Operadores de tipo Aritmetico
//suma,resta, multiplicacion y division 
//mod %
let numer1 = '20';
let numer2 = '2';

console.log(numer1 + numer2);
console.log(numer1 - numer2);
console.log(numer1 * numer2);
console.log(numer1 / numer2);
console.log(numer1 ** numer2);
 
//decremento

let num3 = 3, num4 = 2;
let num5 = num3 + num4;

//Incrementeo 
//Pre/ incrementeo , el operador ++ va antes de la variable 

num5 = ++num3;
console.log(num3);
console.log(num5);
//Post Incremento (el  operador ++ va despues de la variable))
num5 = num4++;
console.log(num4);
console.log(num5);

//Decremento
//Pre decremento , el operador -- va antes de la variable 

num5 = --num3;
console.log(num3);
console.log(num5);
//Post decremento (el  operador -- va despues de la variable))
num5 = num4--;
console.log(num4);
console.log(num5);

//Precedencia de operadores 
//Los operadores se ejecutan de izquierda a derecha , segun sea el caso 

let pre1= 2, pre2 = 3, pre3=4, pre4 =5;
let pre5 = (pre1 + pre2) * pre3 ;
console.log(pre5);

let pre6= pre3 * (pre1 + pre2);
console.log(pre6);

let pre8 = (pre1 * pre3) + pre2 * pre4/(pre1 + pre2);
console.log(pre8);

let operador1 = 3, operador2= 2;
operador1 += operador2;
console.log(operador1);
operador1 =+ operador2;
console.log(operador1);

//Operadores de comparacion 
let operador3 = 3, operadores4 = '3';

let operador10= operador3 == operadores4;
console.log(operador10);

let operador11 = operador3 === operadores4;
console.log(operador11);
if(operador3 === operadores4){
    console.log("son iguales");
}else{
    console.log("No son iguales");
}

numpar = 23;
if (numpar % 2 == 0){
    console.log('es par')
}else {
console.log('es impar')
}

edad = 20;
if (edad <= 18){
    console.log('es menor de edad');
}else {
    console.log("Es mayor de edad");
}

//De un conjunto de valores [14,15,16,17....] de diez valores determinar cuandos son pares y cuantos son impares

let datos = [12,34,65,78,98,3,45,2,34,56];

for (let i =0; i>10;i++){
    if (datos[i] %2 == 0){
        console.log('El numero ' + datos[i] + 'Es par');
    }else {
        console.log('El numero ' + datos[i] + 'Es impar');
    }
}

//Operadores logicos

let s = 8;
let valMin = 9; valorMax= 7;

if (s >= valMin && s <= valorMax){
    console.log("El valro esta dentro del rango");
} else {
    console.log("El valor no esta dentro del rango");
}

if (s >= valMin || s <= valorMax){
    console.log("El valro esta dentro del rango");
} else {
    console.log("El valor no esta dentro del rango");
}

//Operadores Ternarios 

let resultado = (s >= valMin && s <= valorMax) ? "El valor esta dentro del rango" : "El valor no esta dentro del rango";
console.log(resultado);

 let minumero = "20";
 console.log(typeof minumero);

 let minumero2 = Number(minumero);
 console.log(typeof minumero2);
 console.log(minumero2);

 let minumero3 = parseInt(minumero);
 console.log(typeof minumero3);
 console.log(minumero2);

 console.log(parseInt("42px"));//Solo la parte entera se comvierte en int
 console.log(parseInt(3.141623));//Solo convierte la parte entera

 console.log(parseInt('abc')); //No existe un valor numerico para la conversion

 console.log(Number("42px"));//Solo la parte entera se comvierte en int
 console.log(Number(3.141623));//Solo convierte la parte entera

 console.log(Number('abc'));

 console.log(Number(true));
 console.log(Number(false));
 console.log(Number(null));
 console.log(Number*undefined);

 if(!isNaN(minumero2)){
    console.log('No es un numero');
 }else {
    console.log("Es un numero");
 }