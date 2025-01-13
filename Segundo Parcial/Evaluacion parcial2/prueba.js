// Clase Producto
class Producto {
    constructor(nombre, precio, cantidad, categoria) {
        this.Nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.categoria = categoria;
    }
}

// Clase Inventario
class Inventario {
    productos = [];

    AgregarProducto(nombre, precio, cantidad, categoria) {
        this.productos.push(new Producto(nombre, precio, cantidad, categoria));//Guarda en arreglo productos, con los atributos 
    }

    MostrarPoructosPrecioAscendente() {
        this.productos.sort((a, b) => a.precio - b.precio);//ordena de menos a mayor
        for (let producto of this.productos) {
            console.log(producto);
        }
    }

    FiltrarCategoria(categoria) {
        for (let producto of this.productos) {
            if (producto.categoria === categoria) {//muestra solo la categoria elegida
                console.log(producto);
            }
        }
    }

    Descuento(categoria, porcentaje) {
        for (let producto of this.productos) {
            if (producto.categoria === categoria) {
                producto.precio -= producto.precio * (porcentaje / 100);//Descuenta del precio inicial
                console.log(`Se aplicó un descuento del ${porcentaje}% al producto seleccionado:`);
                console.log(producto);
            }
        }
    }
}

// Clase Venta
class Venta {
    ventas = []; 

    realizarVenta(Nombre, cantidad, inventario) {
        for (let producto of inventario.productos) {
            if (producto.Nombre === Nombre) {// Busca por nombre
                if (producto.cantidad >= cantidad) {//Busca si todavia hay
                    producto.cantidad -= cantidad;
                    console.log(`Venta realizada del producto ${producto.Nombre}:`);
                    this.ventas.push(
                        new Producto(producto.Nombre, producto.precio, cantidad, producto.categoria)//Guarda en el arreglo venta
                    );
                } else {
                    console.log(`No hay suficientes unidades de ${producto.Nombre} en el inventario.`);
                }
                return;
            }
        }
        console.log(`El producto ${Nombre} no existe en el inventario.`);
    }

}

let invent = new Inventario();
console.log('*************************PRODUCTOS EN EL INVENTARIO*************************');
invent.AgregarProducto('Coca Cola', 1.30, 30, 'Refresco');
invent.AgregarProducto('Ruflees', 2, 15, 'Snacks');
invent.AgregarProducto('Doritos', 1.8, 20, 'Snacks');
invent.AgregarProducto('Chicles', 0.50, 40, 'Dulces');
invent.AgregarProducto('Sprite', 1.10, 20, 'Reflesco');
invent.AgregarProducto('Chachitos',0.80, 25, 'Snacks');
invent.AgregarProducto('Chupetes',0.20,40,'Dulces')
console.log('*********PRODUCTOS EN ORDEN ASCENDENTE POR PRECIO*******');
invent.MostrarPoructosPrecioAscendente();
console.log('************** FILTRAR POR CATEGORIAS*********}*****');
invent.FiltrarCategoria('Snacks');

console.log('**************DESCUENTOs*****************');
invent.Descuento('Snacks', 10);
invent.Descuento('Dulces', 15);

console.log('**********VENTAS**************');

let venta = new Venta();
venta.realizarVenta('Leche',1,invent);//para probar un producto que no esta
venta.realizarVenta('Ruflees', 5, invent);
venta.realizarVenta('Chupetes', 6, invent);
venta.realizarVenta('Coca Cola', 2, invent);

console.log('****************REPORTE DE VENTAS*************');
console.log('**********PRODUCTOS EN EL INVENTARIO*********');
invent.MostrarPoructosPrecioAscendente();
console.log('*********VENTAS REALIZADAS*********');
for (let vent of venta.ventas) {//para poner la fecha
    console.log(vent);
    console.log('Fecha de la venta:  ' + new Date());
    console.log (' *************************************************************************')
}

console.log('************TOTAL INGRESOS GENERADOS*************');
let totalVentas = 0;
for (let vent of venta.ventas) {
    totalVentas += vent.precio * vent.cantidad;//Suma todos las ventas realizadas
}
console.log('Total de ingresos generados : ' + totalVentas);
console.log('**********PRODUCTO MAS VENDIDO*********');
let masVendido = venta.ventas[0];//guarda el primer elemento de lista venta, con todos sus atributos
for (let vent of venta.ventas) {
    if (vent.cantidad > masVendido.cantidad) {
        masVendido = vent;//Guarda el producto mas vendido
    }
}
console.log('Producto que más vendido es: ' + masVendido.Nombre + ' con ' + masVendido.cantidad + ' vendidos');


