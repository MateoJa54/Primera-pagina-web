//Abstraccion y modularidad 
//Abstraccion:significa ocultar los detalles complejos y mostrar solo lo necesario.
//Modularidad: Las clases se pueden organizar en archivos separados y exportarse o importarse según sea necesario, haciendo que el código sea más manejable.
class Vehiculo {
    constructor(tipo, marca) {
      this.tipo = tipo; // Propiedad abstracta
      this.marca = marca;
    }
  
    conducir() { // Método abstracto
      console.log(`Conduciendo un ${this.tipo} de marca ${this.marca}`);
    }
  }
  
  const auto = new Vehiculo('auto', 'Toyota');
  auto.conducir(); // Conduciendo un auto de marca Toyota

  //Encapsulacion 
  //significa proteger datos y funciones internas para que no sean accesibles directamente desde el exterior.
  class CuentaBancaria {
    #saldo; // Propiedad privada
  
    constructor(saldoInicial) {
      this.#saldo = saldoInicial;
    }
  
    depositar(monto) {
      this.#saldo += monto;
    }
  
    obtenerSaldo() {
      return this.#saldo;
    }
  }
  
  const cuenta = new CuentaBancaria(100);
  cuenta.depositar(50);
  console.log(cuenta.obtenerSaldo()); // 150
  //console.log(cuenta.#saldo); Error: no es accesible directamente

  //Herencia y Extensibilidad 
  //La herencia permite que una clase base (padre) pase sus propiedades y métodos a una clase derivada (hija).
  class Animal {
    constructor(nombre) {
      this.nombre = nombre;
    }
  
    hacerSonido() {
      console.log(`${this.nombre} hace un sonido.`);
    }
  }
  
  class Perro extends Animal {
    hacerSonido() {
      console.log(`${this.nombre} ladra.`);
    }
  }
  
  const perro = new Perro('Rex');
  perro.hacerSonido(); // Rex ladra.

  //Escalabilidad 
  //Las clases permiten agregar nuevas funcionalidades fácilmente sin alterar el código existente, haciéndolo escalable.
//Puedes añadir más métodos o heredar una clase para extender su funcionalidad sin romper lo ya hecho.
class Calculadora {
    sumar(a, b) {
      return a + b;
    }
  }
  
  class CalculadoraCientifica extends Calculadora {
    potencia(base, exponente) {
      return Math.pow(base, exponente);
    }
  }
  
  const calc = new CalculadoraCientifica();
  console.log(calc.sumar(2, 3)); // 5
  console.log(calc.potencia(2, 3)); // 8
  

  
  