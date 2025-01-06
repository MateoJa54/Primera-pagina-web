// Promedio
function calcularPromedio(a, b, c) {
    if (typeof a === 'number' && typeof b === 'number' && typeof c === 'number') {
        return (a + b + c) / 3;
    } else {
        return 'Error: Todos los parámetros deben ser números';
    }
}

// Mayor entre 2 numeros
function determinarMayor(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a > b ? a : b;
    } else {
        return 'Error: Todos los parámetros deben ser números';
    }
}

// Funcion par
const esPar = (a) => {
    if (typeof a === 'number') {
        return a % 2 === 0;
    } else {
        return 'Error: El parametro debe ser numero';
    }
};


// Función anónima autoejecutable
setTimeout(function () {
    const a = 4, b = 2, c = 10;
    const impar = 11, par = 10;
        
    console.log("Promedio: "+ calcularPromedio(a, b, c));
    console.log("Mayor entre "+ c +  " y "+ a+ " : "+ determinarMayor(c, a));
    console.log("El numero "+ impar + " es par : " + esPar(impar));
    console.log("El numero " + par+ " es par: "+ esPar(par));

}, 9000);

