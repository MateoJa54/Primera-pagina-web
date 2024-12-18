let estudiantes = ['Mateo', 'Estefany', 'Juan', 'Luis', 'Felipe', 'Antonio', 'Marco', 'Maria', 'Jose', 'Nicol'];
let calificaciones = [
    [18, 14, 20],
    [20, 18, 16, 19],
    [14, 18],
    [10, 19, 12, 15, 18],
    [12, 4],
    [15, 4, 13],
    [5, 4, 3],
    [5, 15, 17, 20],
    [4, 20, 15],
    [10, 20, 16, 12]
];

// Calcular promedios
let promedios = calificaciones.map(notas => 
    notas.reduce((acum, nota) => acum + nota, 0) / notas.length
);

console.log("Promedios con decimales:", promedios);

// Convertir promedios a enteros
let promedio1 = [
    parseInt(promedios[0]), parseInt(promedios[1]), parseInt(promedios[2]), 
    parseInt(promedios[3]), parseInt(promedios[4]), parseInt(promedios[5]),
    parseInt(promedios[6]), parseInt(promedios[7]), parseInt(promedios[8]), parseInt(promedios[9])
];
console.log("Promedios como enteros:", promedio1);

// Determinar máximo y mínimo promedio
let maximo = promedio1[0];
let minimo = promedio1[0];

for (let i = 1; i < promedio1.length; i++) {
    if (promedio1[i] > maximo) {
        maximo = promedio1[i];
    }
    if (promedio1[i] < minimo) {
        minimo = promedio1[i];
    }
}

console.log("Máximo Promedio:", maximo);
console.log("Mínimo Promedio:", minimo);

// Clasificación de estudiantes según el promedio
let clasificaciones = promedio1.map(promedio => {
    if (promedio >= 16) return "Excelente";
    else if (promedio >= 12) return "Bueno";
    else if (promedio >= 8) return "Aprobado";
    else return "Reprobado";
});

// Encontrar el estudiante con mejor y peor promedio
let estudianteMejor = '';
let estudiantePeor = '';

for (let i = 0; i < estudiantes.length; i++) {
    if (promedio1[i] === maximo) {
        estudianteMejor = estudiantes[i];
    }
    if (promedio1[i] === minimo) {
        estudiantePeor = estudiantes[i];
    }
}

// Imprimir resultados
console.log("\nResultados Finales:");
for (let i = 0; i < estudiantes.length; i++) {
    console.log(`Estudiante: `+ estudiantes[i]);
    console.log(`Promedio: ` + promedio1[i]);
    console.log(`Clasificación: ` + clasificaciones[i]);
    console.log("---------------------------");
}

console.log(`Estudiante con el Mejor Promedio: ` + estudianteMejor + ' nota :'+ maximo);
console.log(`Estudiante con el Peor Promedio: ` + estudiantePeor + ' nota :'+ minimo);
