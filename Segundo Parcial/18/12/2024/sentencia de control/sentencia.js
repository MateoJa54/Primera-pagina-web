// *******Sentencias de control *****************//

// if, else,
//let , var, const
let numero = 2;
//if else
if(numero == 1){
    console.log('Numero 1');
}else if (numero == 2){
    console.log('numero 2');
}else if (numero ==3){
    console.log("Numero 3");
}else {
    console.log("No es un numero");
}
// Ejercicio referente a las estaciones del ano
//Invierto, Otoño, Primavera, verano
let mes = 4;
let estacion;
if(mes ==1 || mes == 2 || mes == 3){
    estacion = 'Invierno';

}else if (mes ==4 || mes == 5 || mes == 6){
    estacion = 'Otoño';
}else if (mes ==7 || mes == 8 || mes == 9){
    estacion = 'Primavera';
}else if (mes ==10 || mes == 11 || mes == 12){
    estacion = 'Verano';
}else {
    estacion = 'No corresponde a una estacion'
}
console.log(estacion);

//Ejercicio 
//Calcular la hora del dia 
// Entre 6am y 11am ==> Buenos dias 12pm y 18pm ==> Buenas tardes 19pm-23pm ==>Buenas noches 24am hasta las 6==>Durmiendo
 let horaDia = 56;
 let mensaje;

//  if (horaDia <= 11 && horaDia >= 6){
//     mensaje = 'Buenos dias';
//  }else if (horaDia <= 18 && horaDia >= 12){
//     mensaje = 'Buenas Tardes';
//  }else if (horaDia <= 19 && horaDia >= 23){
//     mensaje = 'Buenas Noches';
//  }else if (horaDia < 6 && horaDia >= 0){
//     mensaje = 'Durmiendo'
//  }else {
//     mensaje = 'hora no permitida';
//  }
//  console.log(mensaje);

 //Switch

let mesE = 1;
let estacion1 = 'Estacion desconocida';

switch(mesE){
    case 1: case 2: case 3:
        estacion1 = ' Invierno';
        break;
    case 4: case 5: case 6:
        estacion1 = 'Otoño';
        break;
    case 7: case 8: case 9:
        estacion1 = 'Primavera';
        break;
    case 10: case 11: case 12:
        estacion1 = 'Verano';
        break;
    default:
        estacion1 = 'Estacion no valida';
}
console.log(estacion1);

//Otra forma de utilizar el if 

if (horaDia <= 11 && horaDia >= 6)
   mensaje = 'Buenos dias';
else if (horaDia <= 18 && horaDia >= 12)
   mensaje = 'Buenas Tardes';
else if (horaDia <= 19 && horaDia >= 23)
   mensaje = 'Buenas Noches';
else if (horaDia < 6 && horaDia >= 0)
   mensaje = 'Durmiendo'
else mensaje = 'hora no permitida';

console.log(mensaje);