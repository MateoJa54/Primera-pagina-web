// function saludar(nombre) {
//     console.log('Hola, ' + nombre);
// }

// function procesarEntradaUsuario(callback) {
//     const nombre = 'Juan'; 
//     callback(nombre);
// }

// procesarEntradaUsuario(saludar);

function mostrarMensaje() {
    console.log('¡Hola, mundo!');
}

// setInterval(mostrarMensaje, 2000); 

let promesa = new Promise((resolver, rechazar) => {
    let exito = true; // Cambia esto a false para ver cómo funciona el rechazo

    if (exito) {
        resolver("¡Operación exitosa!");
    } else {
        rechazar("Algo salió mal.");
    }
});

promesa.then((mensaje) => {
    console.log(mensaje); 
}).catch((error) => {
    console.log(error); //algo salio mal
});

async function miFuncion() {
    return "¡Hola, mundo!";
}

miFuncion().then((mensaje) => {
    console.log(mensaje); 
});