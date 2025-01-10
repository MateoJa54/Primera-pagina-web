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

//Methodo GET en Objetos JS
//Son metodos que se usan a manera de buenas practicas
//Que permiten acceder y modificar dichos objetos
//Permite acceder a los valores de las propiedades
let personaGET = {
    nombre: 'Marco',
    apellido: 'Valdivieso',
    email: 'mar@gamil.com',
    edad: 20,
    get nombreCompleto(){ //No es una propiedad es un metodo get
        return this.nombre + ' ' + this.apellido;
    }
}
console.log(personaGET.nombreCompleto);

//Metodo SET en Objetos JS
// Set establecer o modificar los valores de los atributos de los objetos 

//Validacion 
let personaSET = {
    nombre: 'Marco',
    apellido: 'Valdivieso',
    email: 'mar@gamil.com',
    edad: 20,
    idioma: 'es',
    get lang(){
        return this.idioma.toUpperCase();//Convertir a mayusula
    },
    get nombreCompleto(){ //No es una propiedad es un metodo get
        return this.nombre + ' ' + this.apellido;
    }
}
console.log(personaSET.lang);
//SET

let personaSET2 = {
    nombre: 'Marco',
    apellido: 'Valdivieso',
    email: 'mar@gamil.com',
    edad: 20,
    idioma: 'es',
    get lang(){
        return this.idioma.toUpperCase();//Convertir a mayusula
    },
    set lang(lang){
        this.idioma = lang.toUpperCase();
    },
    get nombreCompleto(){ //No es una propiedad es un metodo get
        return this.nombre + ' ' + this.apellido;
    }
}

console.log(personaSET2.lang)

personaSET2.lang = 'en';
console.log(personaSET2.lang);

//Constructores en JS

//si se desea crear mas objetos del mismo tipo esto no es posible
//Es por ello que se crea los constructores 

//Es una funcion especial que permite trabajar con objetos en JS

//Funcion constructora de tipo persona

function PersonaFC(nombre, apellido,correo) {   
    this.nombre = nombre;
    this.apellido = apellido;
    this.correo = correo;
}

let padreFC = new PersonaFC('Juan','Samchez','jsanches@gamil.com');//La variable ya no es variable, ahora es un metodo que permite crear un objeto de tipo perosna
console.log(padreFC);
let madreFC = new PersonaFC('Delia','Barrionuevo','deliaBarrio@gamil.com');
console.log(madreFC);

padreFC.telefono = '0998229477';
console.log(padreFC);
console.log(madreFC);

//Agregar un metodo a una funcion constructura de objetos
function PersonaFCM(nombre, apellido,correo) {   
    this.nombre = nombre;
    this.apellido = apellido;
    this.correo = correo;
    this.nombreCompleto = function () {
        return this.nombre + ' ' + this.apellido;
    }
}
let padreFCM = new PersonaFCM('Juan','Samchez','jsanches@gamil.com');
console.log(padreFCM.nombreCompleto());
let madreFCM = new PersonaFCM('Delia','Barrionuevo','deliaBarrio@gamil.com');
console.log(madreFCM.nombreCompleto());

//uso de prototipo 

PersonaFCM.prototype.telefono = '0985228533';//Agraga una propiedad a todos los objetos que usen el constructor
console.log(madreFCM);
console.log(padreFCM);

//Uso de Call

let personaCall1 = {
    nombre: 'Juan',
    apellido: 'Dominguez',
    nombreCompleto(){ 
        return this.nombre + ' ' + this.apellido;
    }
}
let personaCall2 = {
    nombre: 'Marco',
    apellido: 'Valdivieso',

    }

//Para usar el metodo nombreCompleto que pertence al objeto personaCall1
//Con los datos del objeto que esta en personaCall2

console.log(personaCall1.nombreCompleto());
console.log(personaCall1.nombreCompleto.call(personaCall2));

//Como pasar parametos a travez del metodo call
let personaCallP1 = {
    nombre: 'Juan',
    apellido: 'Dominguez',
    nombreCompleto: function(titulo, telefono){ 
        return titulo + ' ' + this.nombre + ' ' + this.apellido + ' ' + telefono;
    }
}
console.log(personaCallP1.nombreCompleto('Lic', '098523432552'));

let personaCallP2 = {
    nombre: 'Marco',
    apellido: 'Valdivieso',

    }
console.log(personaCallP1.nombreCompleto.call(personaCallP2,'Ing',"2334424"));

// uso de apply
let personaApply1 = {
    nombre: 'Juan',
    apellido: 'Dominguez',
    nombreCompleto: function(titulo, telefono){ 
        return  titulo + ' ' + this.nombre + ' ' + this.apellido + ' ' + telefono;
    }
}

let personaApply2 = {
    nombre: 'Marco',
    apellido: 'Valdivieso',

}

console.log(personaApply1.nombreCompleto());
console.log(personaApply1.nombreCompleto.apply(personaApply2));
let arreglo = ['Ing', '0938463773']
console.log(personaApply1.nombreCompleto.apply(personaApply2,arreglo));//['Ing', '0938463773']
