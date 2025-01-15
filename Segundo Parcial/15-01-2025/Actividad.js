/* 
    stock disminuye 
2. Descuento por Categoria 
    Crear una nueva propiedad categoria en la clase producto
    Los productos de la categoria Electronica deben tener un descuento del 10% al calcular el total de la venta
3. Aplicacion de impuestos 
    Implementar un metodo calcularImpuestos() en la clase orden para que agrege un impuesto 16% al total calculado
4. Listar los productos de forma Decendente
5. Restriccion Adicional:
    Aseguremos que los precios no pueden ser negativos al establecerlos en la clase Producto

*/

// Clase Producto
class Producto {
    static contadorProductos = 0;

    constructor(nombre, precio, categoria, inventario) {
        if (precio < 0) {
            console.error("Error: No se pueden ingresar precios negativos.");
            return; // Detenemos la creación del objeto retornando 'undefined'
        }

        if (inventario < 0) {
            console.error("Error: No se puede ingresar un inventario negativo.");
            return; // Detenemos la creación del objeto retornando 'undefined'
        }

        this.idProducto = ++Producto.contadorProductos;
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
        this.inventario = inventario;
    }

    get IdProducto() {
        return this.idProducto;
    }

    get Nombre() {
        return this.nombre;
    }

    set Nombre(nombre) {
        this.nombre = nombre;
    }

    get Precio() {
        return this.precio;
    }

    set Precio(precio) {
        if (precio < 0) {
            console.error("Error: No se pueden asignar precios negativos.");
        } else {
            this.precio = precio;
        }
    }

    get Inventario() {
        return this.inventario;
    }

    set Inventario(inventario) {
        if (inventario < 0) {
            console.error("Error: No se puede asignar un inventario negativo.");
        } else {
            this.inventario = inventario;
        }
    }

    toString() {
        return `idProducto: ${this.idProducto}, nombre: ${this.nombre}, precio: $${this.precio.toFixed(2)}, categoria: ${this.categoria}, inventario: ${this.inventario}`;
    }
}   

// Clase Orden
class Orden {
    static contadorOrdenes = 0;
    static get MAX_PRODUCTOS() {
        return 6;
    }

    constructor() {
        this.idOrden = ++Orden.contadorOrdenes;
        this.productos = [];
    }

    get IdOrden() {
        return this.idOrden;
    }

    agregarProducto(producto) {
        if (this.productos.length < Orden.MAX_PRODUCTOS) {
            if (producto.inventario > 0) {
                this.productos.push(producto);
                producto.inventario--; 
            } else {
                console.log(`Error: El producto "${producto.nombre}" no tiene inventario disponible.`);
            }
        } else {
            console.log("No se pueden agregar más productos a la orden.");
        }
    }

    calcularTotal() {
        let totalVenta = 0;
        for (const producto of this.productos) {
            let precioFinal = producto.precio;
            if (producto.categoria === "Electronica") {
                precioFinal *= 0.9; 
            }
            totalVenta += precioFinal;
        }
        console.log('Descuento aplicado a los productos de Electronica')
        return totalVenta;
    }

    calcularImpuestos() {
        const total = this.calcularTotal();
        return total * 0.16; 
    }

    mostrarOrden() {
        const totalSinImpuestos = this.calcularTotal();
        const totalConImpuestos = totalSinImpuestos + this.calcularImpuestos();
        let productosOrden = this.productos.map((producto) => producto.toString()).join("\n");
        console.log(`Orden: ${this.idOrden} Total con impuestos: $${totalSinImpuestos} Total con Impuestos: $${totalConImpuestos} Productos: ${productosOrden}`);
    }

    listarProductosPorPrecio() {
        this.productos.sort((a, b) => b.precio - a.precio); 
        console.log("Productos ordenados por precio:");
        for (let producto of this.productos) {
            console.log(producto.toString());
        }
    }
}

// Ejemplo de uso
let producto1 = new Producto("Zapatos", 30, "Ropa", 5);
let producto2 = new Producto("Tablet", 400, "Electronica", 5);
let producto3 = new Producto("Vestido", 60, "Ropa", 2);
console.log(producto1);
let orden1 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.agregarProducto(producto3);

orden1.mostrarOrden();

orden1.listarProductosPorPrecio();
console.log('***********Orden 2***************')
let orden2 = new Orden();
orden2.agregarProducto(producto1);
orden2.agregarProducto(producto2);
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto3);


orden2.mostrarOrden();

orden2.listarProductosPorPrecio();
