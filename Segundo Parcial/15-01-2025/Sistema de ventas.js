class Producto {
    static  contadorProductos = 0;

    constructor(nombre, precio){
        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;
    }

    get idProducto(){
        return this._idProducto;
    }

    get nombre (){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get precio (){
        return this._precio;
    }
    set precio(precio){
        this.precio = precio;
    }
    toString(){
        return `idProducto: ${this._idProducto}, nombre: ${this._nombre}, precio: ${this._precio}`;
    }
}

//****PRODUCTO*******/

// let producto1 = new Producto('Pantalon', 200);
// let producto2 = new Producto('Vestido', 300);

// console.log(producto1.toString());
// console.log(producto2.toString());

//Creacion de la clase Orden 

class Orden {
    static contadorOrdenes = 0;
    static get Max_Productos(){//Es un valor constante
        return 5;
    }
    constructor(parameters) {
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
        this._contadorProductosAgregados = 0;
    }
    get idOrden (){
        return this._idOrden
    }
    agregarProducto(producto){
        //Verificar si no hemos superado el maximo de productos existentes 
        if (this._productos.length < Orden.Max_Productos){
            this._productos.push(producto);
            //otra sintaxis
        } else {
            //indica que no se puede agregar mas productos a la orden
            console.log('No se pueden agregar mas productos a la orden');
        }
    }

    calcularTotal (){
        let totalVenta = 0;
        for (const producto of this._productos) {
            totalVenta += producto.precio;
        }
        return totalVenta;
    }
    mostrarOrden (){
        let productosOrden = '';
        for (const producto of this._productos) {
            productosOrden += producto.toString() + ' ';
        }
        console.log(`orden: ${this._idOrden}, Total: $${this.calcularTotal}, Productos: ${productosOrden}`);
    }
}

let producto1 =  new Producto('Laptop', 500);
let producto2 = new Producto('Mouse',10);

let orden1 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.mostrarOrden();

let orden2 = new Orden();
let producto3 = new Producto('Teclaodo', 150);
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto1);
orden2.agregarProducto(producto2);

orden2.mostrarOrden();
//Modificador denominado STATIC se utliza para acceder 
//directamente atravez de la clase

//Los metodos o propiedades estaticas (static)  no requieren que se 
//creen una instancia de la clase, para ser utilizados 

class Calculadora {
    //metodo estatico
    static sumar (a,b){
        return a +b;
    }
}

// El acceso al metodo estatico directamente de la clase es asi
console.log(Calculadora.sumar(5,3))//8

//no se puede acceder desde una instancia 

const calc = new Calculadora();
// console.log(calc.sumar(5,3));

// El modificador static en JS es una herramienta clave para definir funciones y propiedades
//compartidas sin necesidad de crear algun tipo de instancia de una clase.

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