//ejercicio 1
/* 
// Objeto auto con sus características
let auto = {
    color: "rojo",
    marca: "Fiat",
    modelo: "Cronos",
    encendido: false,
    
    // Método para encender el auto
    encender: function() {
        if (!this.encendido) {
            this.encendido = true;
            console.log("Auto encendido");
        } else {
            console.log("El auto ya está encendido");
        }
    },
    
    // Método para apagar el auto
    apagar: function() {
        if (this.encendido) {
            this.encendido = false;
            console.log("El auto se apagó");
        } else {
            console.log("El auto ya está apagado");
        }
    }
};


auto.encender();  
auto.apagar();    
auto.apagar();   
auto.encender();   */

//ejercicio 2
/* 
// Crear el objeto cuenta con las propiedades y métodos solicitados
let cuenta = {
    // Propiedades
    titular: "Alex",
    saldo: 0,
    
    // Método para ingresar dinero
    ingresar: function(cantidad) {
        this.saldo = this.saldo + cantidad;
        console.log("Se ingresaron $" + cantidad);
    },
    
    // Método para extraer dinero
    extraer: function(cantidad) {
        if (cantidad <= this.saldo) {
            this.saldo = this.saldo - cantidad;
            console.log("Se extrajeron $" + cantidad);
        } else {
            console.log("No tienes suficiente saldo para extraer $" + cantidad);
        }
    },
    
    // Método para informar el estado de la cuenta
    informar: function() {
        return "Titular: " + this.titular + ", Saldo: $" + this.saldo;
    }
};

// Mostrar el estado inicial de la cuenta
console.log("--- Estado inicial de la cuenta ---");
console.log(cuenta.informar());

// Ingresar dinero
console.log("\n--- Ingresando dinero ---");
cuenta.ingresar(1000);
console.log(cuenta.informar());

// Extraer dinero
console.log("\n--- Extrayendo dinero ---");
cuenta.extraer(500);
console.log(cuenta.informar());

// Intentar extraer más dinero del disponible
console.log("\n--- Intentando extraer más dinero del disponible ---");
cuenta.extraer(800);
console.log(cuenta.informar());

// Ingresar más dinero
console.log("\n--- Ingresando más dinero ---");
cuenta.ingresar(300);
console.log(cuenta.informar());

// Extraer dinero nuevamente
console.log("\n--- Extrayendo dinero nuevamente ---");
cuenta.extraer(800);
console.log(cuenta.informar()); */

//ejercicio 3 
/* 
// Clase para hacer rectángulos
class Rectangulo {
    constructor(alto, ancho) {
        this.alto = alto;
        this.ancho = ancho;
    }
    
    // Método para mostrar las propiedades
    mostrarPropiedades() {
        console.log("Alto: " + this.alto);
        console.log("Ancho: " + this.ancho);
    }
    
    // Método para cambiar el alto
    cambiarAlto(nuevoAlto) {
        this.alto = nuevoAlto;
        console.log("El alto ahora es: " + this.alto);
    }
    
    // Método para cambiar el ancho
    cambiarAncho(nuevoAncho) {
        this.ancho = nuevoAncho;
        console.log("El ancho ahora es: " + this.ancho);
    }
    
    // Método para calcular el perímetro
    calcularPerimetro() {
        const perimetro = (2 * this.alto) + (2 * this.ancho);
        return perimetro;
    }
    
    // Método para calcular el área
    calcularArea() {
        const area = this.alto * this.ancho;
        return area;
    }
}

// Probando la clase
console.log("=== Creando un rectángulo ===");
const miRectangulo = new Rectangulo(5, 10);

console.log("=== Mostrando propiedades ===");
miRectangulo.mostrarPropiedades();

console.log("=== Calculando perímetro ===");
const perimetro = miRectangulo.calcularPerimetro();
console.log("El perímetro es: " + perimetro);

console.log("=== Calculando área ===");
const area = miRectangulo.calcularArea();
console.log("El área es: " + area);

console.log("=== Cambiando propiedades ===");
miRectangulo.cambiarAlto(8);
miRectangulo.cambiarAncho(15);

console.log("=== Mostrando propiedades nuevas ===");
miRectangulo.mostrarPropiedades();

console.log("=== Calculando nuevo perímetro ===");
const nuevoPerimetro = miRectangulo.calcularPerimetro();
console.log("El nuevo perímetro es: " + nuevoPerimetro);

console.log("=== Calculando nueva área ===");
const nuevaArea = miRectangulo.calcularArea();
console.log("La nueva área es: " + nuevaArea);

// Haciendo otro rectángulo
console.log("=== Creando otro rectángulo ===");
const otroRectangulo = new Rectangulo(3, 7);
otroRectangulo.mostrarPropiedades();
console.log("Perímetro: " + otroRectangulo.calcularPerimetro());
console.log("Área: " + otroRectangulo.calcularArea()); */

//ejercicio 4



//ejecicio 5 


//ejercicio 6

// ejercicio 7

/* class AgendaContacto {
  #contactos;
  #listaContacto;
  constructor(contactos) {
    this.#contactos = contactos;
    this.#listaContacto = 4;
  }

  get contactos() {
    return this.#contactos;
  }

  set nuevoContacto(contacto) {
    this.#contactos = contacto;
  }

  get listaContacto() {
    return this.#listaContacto;
  }
  // [1,2] < 4

  aniadirContacto(contacto) {
    if (this.#contactos.length < this.#listaContacto) {
      this.#contactos.push(contacto);
    } else {
      alert("La agenda esta llena, no se puede agregar al contacto");
    }
  }

  existeContacto(nombre) {
    let aux = this.#contactos.find((contacto) =>
      contacto.nombre.includes(nombre)
    );

    if (aux) {
      alert("El contacto existe");
      alert(aux);
    } else {
      alert("El contacto no existe");
      alert(aux);
    }
  }

  listaContactos() {
    for (let i = 0; i < this.#contactos.length; i++) {
      alert(`Mostrando contacto ${i + 1}
        Nombre: ${this.#contactos[i].nombre}
        Telefono: ${this.#contactos[i].telefono}`);
    }
  }

  buscarContacto(nombre) {
    const aux = this.#contactos.filter(
      (contacto) => contacto.nombre === nombre
    );

    if (aux) {
      alert(`El telefono del contacto ${aux[0].nombre} es: ${aux[0].telefono}`);
      console.log(aux);
    } else {
      `El contacto no existe`;
    }
  }

  eliminarContacto(nombre) {
    console.log(nombre);
    const aux = this.#contactos.findIndex(
      (contacto) => contacto.nombre === nombre
    );

    if (aux || aux === 0) {
      this.#contactos.splice(aux, 1);
      alert(`Contacto eliminado`);
    } else {
      alert(`El contacto no existe`);
    }
  }

  agendaLlena() {
    if (this.#contactos.length > this.#listaContacto) {
      alert(`La agenda esta llena`);
    } else {
      alert(`La agenda no esta llena`);
    }
  }

  huecosLibres() {
    const calculo = this.#listaContacto - this.#contactos.length;
    if (calculo > 0) {
      alert(`La agenda tiene ${calculo} huecos libres`);
    } else {
      alert(`La agenda esta llena`);
    }
  }
}

let agenda1 = new AgendaContacto([
  { nombre: "Ezequiel", telefono: 381746253 },
  { nombre: "Jose", telefono: 38123456 },
]);

alert("Bienvenido a tu agenda de contactos");

do {
  let opcion =
    +prompt(`Ingrese un numero del 1 al 7 según lo que quiere realizar en su agenda
    1- Agregar Contacto
    2- Verificar si Existe un Contacto
    3- Mostrar Contacto
    4- Buscar el teléfono de un contacto por su nombre
    5- Eliminar un contacto
    6- Consultar si la agenda esta llena
    7- Consultar cuantos huecos libres tiene la agenda`);

  switch (opcion) {
    case 1:
      agenda1.aniadirContacto({
        nombre: prompt("Ingrese el nombre del contacto"),
        telefono: +prompt("Ingrese el número de teléfono"),
      });
      break;
    case 2:
      let nombre = prompt("Ingrese el nombre del contacto");
      agenda1.existeContacto(nombre);
      break;
    case 3:
      agenda1.listaContactos();
      break;
    case 4:
      agenda1.buscarContacto(prompt("Ingrese el nombre del contacto"));
      break;
    case 5:
      agenda1.eliminarContacto(
        prompt("Ingrese el nombre del contacto a eliminar")
      );
      break;
    case 6:
      agenda1.agendaLlena();
      break;
    case 7:
      agenda1.huecosLibres();
      break;
    default:
      break;
  }
} while (
  confirm("¿Desea seguir modificando su agenda o elegir una opción válida?")
); */



//Ejercicio 10

class Aeropuerto{
  constructor(nombreAeropuerto){
    this.nombreAeropuerto = nombreAeropuerto;
    this.listaaviones = [];
  }

  agregarAvion(avion){
    this.listaaviones.push(avion);
  }
  buscaAviones(nombre){
    const avion = this.listaaviones.find((avion) => avion.nombre === nombre);
    if(avion){
      console.log (`nombre: ${avion.nombre}
      capacidad: ${avion.capacidad}
      destino: ${avion.destino}
      pasajeros: ${avion.listaPasajeros.length}/${avion.capacidad}`);
      return avion
    }else{
      console.log("el avión no existe");
    }
  }

}

class avion{
  constructor(nombre, capacidad, destino){
    this.nombre = nombre;
    this.capacidad = capacidad;
    this.destino = destino;
    this.listaPasajeros = [];
  }

  abordar(pasajero){
    if(this.listaPasajeros.length < this.capacidad){
      this.listaPasajeros.push(pasajero);
      console.log(`Pasajero ${pasajero} abordo del avión ${this.nombre}`);
    }else{
      console.log(`El avión ${this.nombre} está lleno`);
    }
  }
}

const aeropuerto = new Aeropuerto("Aeropuerto Internacional");
let avion1 = new avion("Boieng 747", 3, "Nueva York");
let avion2 = new avion("Airbus A320", 2, "Los Ángeles");
let avion3 = new avion("Boeing 777", 4, "Londres");

aeropuerto.agregarAvion(avion1);
aeropuerto.agregarAvion(avion2);
aeropuerto.agregarAvion(avion3);

console.log(aeropuerto);

let avionesEncontrados = aeropuerto.buscaAviones("Boieng 747");
if(avionesEncontrados){
  avionesEncontrados.abordar("Juan");
}
