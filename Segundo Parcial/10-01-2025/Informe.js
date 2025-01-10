// Clase Conductor
class Conductor {
    #licencia;

    constructor(nombre, licencia) {
        this.nombre = nombre;
        this.#licencia = licencia;
        this.rutas = [];
    }

    registrarRuta(ruta) {
        this.rutas.push(ruta);
        console.log(`La Ruta ${ruta} fue registrada para el conductor ${this.nombre}`);
    }

    obtenerRutas() {
        return this.rutas;
    }

    obtenerLicencia() {
        return this.#licencia;
    }
}

// Clase Vehiculo
class Vehiculo {
    constructor(modelo, placa) {
        this.modelo = modelo;
        this.placa = placa;
        this.estado = 'disponible';
    }

    asignarConductor(conductor) {
        if (this.estado === 'disponible') {
            this.estado = 'ocupado';
            this.conductor = conductor;
            console.log(`El vehículo ${this.placa} está ahora ocupado.`);
        } else {
            console.log('Vehículo no disponible.');
        }
    }

    cambiarEstado(nuevoEstado) {
        this.estado = nuevoEstado;
        console.log(`El estado del vehículo ${this.placa} ha cambiado a ${nuevoEstado}.`);
    }
}

// Clase ConductorVIP
class ConductorVIP extends Conductor {
    constructor(nombre, licencia, beneficios) {
        super(nombre, licencia);
        this.beneficios = beneficios;
    }

    asignarVehiculoPreferido(vehiculo) {
        if (vehiculo.estado === 'disponible') {
            vehiculo.asignarConductor(this);
            console.log(`${this.nombre} está asignado a su vehículo preferido: ${vehiculo.modelo}`);
        } else {
            console.log(`El vehículo ${vehiculo.placa} ya está ocupado.`);
        }
    }
}

const conductor1 = new Conductor("Juan Pérez", "ABC123");
const vehiculo1 = new Vehiculo("Toyota Prius", "XYZ789");
const conductorVIP = new ConductorVIP("Ana López", "VIP456", ["Acceso a salones exclusivos"]);

console.log(`Conductor 1: ${conductor1.nombre}, Licencia: ${conductor1.obtenerLicencia()}`);
console.log(`Conductor VIP: ${conductorVIP.nombre}, Beneficios: ${conductorVIP.beneficios.join(", ")}`);

conductor1.registrarRuta("Ruta 1");
console.log(`Rutas de ${conductor1.nombre}: ${conductor1.obtenerRutas().join(", ")}`);

vehiculo1.asignarConductor(conductor1);
vehiculo1.cambiarEstado("mantenimiento");

conductorVIP.asignarVehiculoPreferido(vehiculo1);
