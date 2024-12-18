/************************************Ciclos **********************************************/
//Ciclo for 

const heroes = ['batman', 'Superman', 'Mujer Maravilla', 'Aquaman'];

console.warn('***For tradicional****');
for (let i = 0; i < heroes.length; i++) {
   console.warn(heroes[i]);
    
}
for (let i  in heroes) {
    console.warn(heroes[i]);
}

for (let i of heroes) {
    console.warn(heroes);
}

//Uso de la declaracion for
// Se usa for tradicional cuando necesitamos el control total de los indices del arreglo 
// Se usa for in para el manejo de objetos, es decir para iterar un objeto o los indices del array
//Se usa for of para iterar los valores directamente de un iterable(array, cade de texto(string)
// map, set, modeList.)

// Continue y el break dentro de un ciclo for

for (let contador = 0; contador < 10; contador++) {
    if (contador % 2 == 0) {
        continue;//ir a la siguiente iteracion
    }
    console.log(contador);
}
//continue sigue, break sale
const carros = ['ford', 'Mazda', 'Honda','Toyota'];
for (let contador = 0; contador < carros.length; contador++) {
    if (contador == 2) {
        break;
    }
    console.log(carros[contador]);
}

//While 
let i=0; 

while (carros[i]) {
    if (i==1) {
        i++;
        // break;
        continue;
    }
    console.warn(carros[i]);
    i++;
}