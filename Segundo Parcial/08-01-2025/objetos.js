// ********************************Objetos************************************
//Caracteristicas principales de los objetos en javaScript

//Claves y valores

//Las claves son cadenas de <> simbolos unicos 
// Los valores pueden ser de cualquier tipo> numeros , cadenas, funciones 
//otros tipos de objetos. etc

//Dinamismo

//Los objetos pueden moodificarse en tiempo de ejecucion(Agregar, Modificar o eliminar propiedades en un objeto)
//Nota especial
//Dentro de los objetos se pueden incluir metodos 
//Metodos son funciones asociadas a un objeto 

//los objetos  ==> propiedades y metodos 

let persona = {
    nombres: 'Juan',
    apellido: 'Iza',
    email: 'jmiza@espe.edu.ec',
    edad: 20
};

console.log(persona);

//incluir metodos en los objetos 

let people = {
    name: 'andy',
    lastname: 'Cooks',
    age: '20',
    fullName: function () {
        return this.name + ' ' +this.lastname;//this dentro del objeto
    }
}
console.log(people.fullName());//Para que se muestre lo que hay en una funcion se ponen ()

const people2 = {
    name: 'Mary',
    lastname: 'Dalas',
    age: 22,
    saludo: function () {
        console.log(`hello, my name is ${this.name}`);
    }
}
console.log(people2.name)
people2.saludo();

//usando el constructor object
const persona1 = new Object();//Crea el objeto en un espacio vacio
persona1.nombres = 'Maria';
persona1.apellido = 'Velez';
persona1.saludar = function () {
    console.log(`Hola mi nombre es: ${this.nombres}`);
}

console.log(persona1.nombres);
persona1.saludar();

//Usando la clase Object.create()
//Esta forma permite crear un objeto basado en un prototipo

const prototipoPersona = {
    saludar: function () {
        console.log(`Hola desde prototipo soy ${this.nombre}`);
    }
};

const persona2 = Object.create(prototipoPersona);
persona2.nombre = 'Carlos';
persona2.saludar();

//Usando Clases, esto fue introducido de ES6 ==> ES2024
//Proporcionar una sintaxis mas estructurada para crear objetos
class Persona {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
    saludar(){
        console.log(`Hola desde clase, soy ${this.nombre}`);
    }
};
const persona3 = new Persona('Ana','Rios');
persona3.saludar();

//Usando funciones constructoras 
//Forma clasica, ultilizando no muy frecuente

function Persona1 (nombre,edad) {
    this.nombre = nombre;
    this.edad = edad;
    this.saludar = function () {
        console.log(`Hola desde funcion, soy ${this.nombre}`);
    }
};
const persona4 = new Persona1('Luis',15);
persona4.saludar();

//Manipulacion de los datos o propiedades de los objetos 

//1. Agregar o Modificar propiedades

const persona5 = {nombre: 'pedro'};
persona5.edad = 34;
persona5.nombre = 'Mateo';
console.log(persona5);

//2. Eliminar propiedades 

//delete persona5.edad;
console.log(persona5);

//3. Iterar sobre las propiedades 
for(nombrePropiedad in persona5){
    console.log(nombrePropiedad);
    console.log(persona5[nombrePropiedad]);
}

for(let clave in persona5){
    console.log(`${clave}: ${persona5[clave]}`);
}
//4. verificar propiedades

console.log('nombre' in persona5);
console.log(persona5.hasOwnProperty('nomb'));

//Metodos utiles para trabajar con objetos
//1. Object.keys()
//Devolber un array con las claves del objeto
console.log(Object.keys(persona5));

//2. Object.values()
//Devuelve un array con los valores del objeto
console.log(Object.values(persona5))

//3. Object.entries()
//Devuelve un array de pares[Claves, valores]
console.log(Object.entries(persona5));

//5. Object.assign()
//Copia las propiedades de un objeto a otro 

const copia= Object.assign({}, persona5);
console.log(copia);

//6. Object.freeze()
//Congela un objeto para evitar modificaciones 
Object.freeze(persona5);

//7. Object.seal()
//Permite modificar propiedades existes, pero no agregar ni modificar propiedades existentes.

Object.seal(persona5);
persona5.direccion = 'Quito';
delete persona5.nombre;
console.log(persona5);
//Nota:
//Impresion de los valores de las propiedades de un objeto

let personaArray = Object.values(persona5);
console.log(personaArray);

let personaString = JSON.stringify(persona5);
//Json es una notacion , es un objeto
//Stringify es convertir a cadena cada propiedad
console.log(personaString);