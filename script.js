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








