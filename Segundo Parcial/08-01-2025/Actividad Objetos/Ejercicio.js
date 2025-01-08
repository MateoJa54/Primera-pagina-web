// Gestión de Inventario con Objetos en JavaScript


const inventario = {
    producto1: {
        nombre: 'Papaya',
        precio: 2.00,
        cantidad: 11
    },
    producto2: {
        nombre: 'Tomate',
        precio: 0.50,
        cantidad: 40
    },
    producto3: {
        nombre: 'Cilantro',
        precio: 0.25,
        cantidad: 30
    },
    producto4: {
        nombre: 'Sandia',
        precio: 1.50,
        cantidad: 10
    }
};

// Sella el objeto 

Object.seal(inventario);

// Implementa una función para vender un producto:

function venderProduct(nombre, cantidad) {
    for(let clave in inventario){
        if (inventario[clave].nombre === nombre) {
            if (inventario[clave].cantidad > cantidad) {
                inventario[clave.cantidad] =  inventario[clave.cantidad] - cantidad;
                console.log('Venta realizada con exito:' + cantidad + ' '+ nombre+'s');
                return;
              } else {
                console.log('El stock es insuficiente de : ' + nombre);
                return;
              } 
        }else{
            console.log('No tenemos este producto');
            return;
        }
    }
}

// Implementa una función para aplicar un descuento a todos los productos:
function descuento(descuento) {
    if (descuento < 0) {
        console.log("Error: El porcentaje de descuento no puede ser negativo.");
        return; 
    }
    for(let clave in inventario){
        let resta = inventario[clave].precio * (descuento / 100);
        let nuevoPrecio = inventario[clave].precio - resta;
        if (nuevoPrecio < 0) {
            console.log(`Con el descuento del producto ${inventario[clave].nombre} sale negativo.`);
        } else {
            inventario[clave].precio = nuevoPrecio;
        }
    }
}
//Compilacion


venderProduct('Tomate', 11); 
venderProduct('Tomate', 10); 

descuento(10);

console.log("Inventario final:", inventario);