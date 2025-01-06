//*****************Arreglos*************
//Funcion declarar

function miFuncion(a,b,c) {
    console.log(arguments.length); //Contar el numero de datos
    console.log('la suma es :' + (a+b+ c));
}

miFuncion(1,2,3);
//La palabra return dentro de la funcion 

function miReturn(a,b) {
    return(a+b);
}
let resultado = miReturn(1,2);
console.log(resultado);

//Funcion de tipo expresion
//Declaracion de una funcion que es igual a una expresion 
let sumar = function(a,b) {return a*b};
resultado= sumar(2,4);
console.log(typeof sumar)
console.log(resultado);

//funciones de tipo Self-Invoking
//porque son funciones que llaman a si mismas
//Funciones anonimas 
//No son muy comunes pero pueden ser utiles en algunos casos 

(function (a,b) {
    console.log('Ejecutando la funcion: ' + (a+b));
})(3,4);

//Funciones anonimas
setTimeout(function () {
    console.log('Hola desde una funcion anonima');
}, 9000);//los segundos que se demora en ejecutar

const persona = {
    nombre: 'Mateo',
    saludar() {
        return `Hola, soy ${this.nombre}`;//Interpolar
    },
    apellido: 'Iza'
}
console.log(persona.saludar());

//Funciones tipo flecha (arraw function)
//Se mantiene como una forma concisa de declarar funciones y es ampliamente usado.

const sumarValores =  (a,b) => a + b;
console.log(sumarValores(5,7));

const operaciones = {sumar: (a,b) => a+b, restar: (a,b) => a-b, dividir: (a,b) => a/b, multiplicar: (a,b) => a+b};
console.log(operaciones.sumar(2,3));
console.log(operaciones.restar(2,3));
console.log(operaciones.multiplicar(2,3));
console.log(operaciones.dividir(6,3));
