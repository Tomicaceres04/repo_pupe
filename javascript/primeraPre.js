const MARCA = "Pupe Shoes"

class Cliente{
    constructor(nombre,apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
    toSting(){
        return this.nombre + " " + this.apellido;
    }
}

let primerCliente = new Cliente(prompt("Ingrese su Nombre").toLocaleUpperCase(), prompt("Ingrese su apellido").toLocaleUpperCase());

console.log(primerCliente);

let saludo = prompt("Que tipo de calzado queres ver?\n" + "Por ejemplo '1' para Botas " + "\n n1-BOTAS" + "\n n2-ZAPATILLAS" + "\n n3-TEXANAS" + "\n n4-Salir")
let botas = 1;
let zapatillas = 2;
let texanas = 3;
let salir = 4;


while ((parseInt(saludo) !== botas) && (parseInt(saludo) !== zapatillas) && (parseInt(saludo) !== texanas) && (parseInt(saludo) !== salir)) {
    saludo = prompt("Que tipo de calzado queres ver?\n" + "Por ejemplo '1' para Botas " + "\n n1-BOTAS" + "\n n2-ZAPATILLAS" + "\n n3-TEXANAS" + "\n n4-Salir")
}
//BOTAS
if (saludo == 1){    
    
    let opcionNaranja = 1;
    let opcionBrillos = 2;
    let opcionNegras = 3;
    let opcionLluvia= 4;
    
    let opcionBotas = prompt(" Estas son las botas en stock Elige las botas que quieras ver.\n " + "\n 1-Botas Naranjas" + "\n 2-Botas Brillo" + "\n 3-Botas Negras" + "\n 4-Botas LLuvia" + "\n 5-Salir")

    while ((parseInt)(opcionBotas) !== opcionNegras && (parseInt(opcionBotas) !== opcionBrillos) && (parseInt(opcionBotas) !== opcionLluvia) && (parseInt(opcionBotas) !== opcionNaranja && (parseInt(opcionBotas) !== salir))){
    let opcionBotas = prompt(" Estas son las botas en stock Elige las botas que quieras ver.\n " + "\n 1-Botas Naranjas" + "\n 2-Botas Brillo" + "\n 3-Botas Negras" + "\n 4-Botas LLuvia" + "\n 5-Salir")        
    }

    console.log("El usuario ingreso la opcion" + opcionBotas)

    //BOTAS NARANJAS 

    if (opcionBotas == 1) {

        let botasNaranjas = {
            modelo: "Botas Naranjas",
            precio: "5000$",
            talles: "40 41 42",    
    
        }
    
        let modeloNaranja = botasNaranjas["modelo"];
        let precioNaranja = botasNaranjas["precio"];
        let tallesNaranja = botasNaranjas["talles"];
        
        let fraseNaranjas = "las" + " " + modeloNaranja + " " + "tienen un precio de" + " " + precioNaranja + " " + "y los talles disponibles son:" + " " + tallesNaranja;
        
        alert(fraseNaranjas);

        let cantidadBotas = prompt("Cuantas Botas vas a querer comprar?");

        while ((parseInt(cantidadBotas)<= 0)){
            alert("Tienes que comprar al menos una bota para seguir con la compra");
            cantidadBotas = prompt("Cuantas Botas vas a querer comprar?");
        }

        let suma = parseInt(cantidadBotas) * parseInt(precioNaranja);

        console.log("El resultado del monto a pagar es:" + suma);
        
        alert(" El monto a pagar es " + suma);

        let pago = prompt ("Con cuanto vas a abonar?");

        if (pago < suma) {
            alert("Lo siento tu pago es insuficiente para la compra")
        }

        if (pago >= suma){
            alert(" Muchas gracias " + " " + "Tu compra se finalizo con exito. Tu vuelto es " + (parseInt(pago) - parseInt(suma)))
            console.log("--> El resultado de la resta para saber el vuelto es:" + (parseInt(pago) - parseInt(suma)))
        }
    }
    //TERMINA BOTAS NARANJAS

    //ARRANCA BOTAS BRILLOS
    if (opcionBotas == 2) {
        let botasBrillos = {
            modelo:"Botas con Brillos",
            precio:"5.500$",
            talles:"38 39 40"
        }
    
        let modeloBrillos = botasBrillos["modelo"];
        let precioBrillos = botasBrillos["precio"];
        let tallesBrillos = botasBrillos["talles"];
        
        let fraseBrillos = "las" + " " + modeloBrillos + " " + "tienen un precio de" + " " + precioBrillos + " " + "y los talles disponibles son:" + " " + tallesBrillos;

        alert (fraseBrillos)

        let cantidadBotas = prompt("Cuantas Botas vas a querer comprar?");
        
        while ((parseInt(cantidadBotas)<= 0)){
            alert("Tienes que comprar al menos una bota para seguir con la compra");
            cantidadBotas = prompt("Cuantas Botas vas a querer comprar?");
        }

        let suma = parseInt(cantidadBotas) * parseInt(precioBrillos);
        console.log("El resultado del monto a pagar es:" + suma);
        
        alert(" El monto a pagar es " + suma);

        let pago = prompt ("Con cuanto vas a abonar?");

        if (pago < suma) {
            alert("Lo siento tu pago es insuficiente para la compra")
        }

        if (pago >= suma){
            alert(" Muchas gracias" + " " + "Tu compra se finalizo con exito. Tu vuelto es " + (parseInt(pago) - parseInt(suma)))
            console.log("--> El resultado de la resta para saber el vuelto es:" + (parseInt(pago) - parseInt(suma)))
        } 
    }
    //TERMINA BOTAS BRILLOS

    //ARRANCA BOTAS NEGRAS
    if (opcionBotas == 3) {
        let botasNegras = {
            modelo:"Botas Negras",
            precio:"5000$",
            talles:"37 40 42"
        }
        
        let modeloNegras = botasNegras["modelo"];
        let precioNegras = botasNegras["precio"];
        let tallesNegras = botasNegras["talles"];
        
        let fraseNegras = "las" + " " + modeloNegras + " " + "tienen un precio de" + " " + precioNegras + " " + "y los talles disponibles son:" + " " + tallesNegras;

        alert(fraseNegras);

        let cantidadBotas = prompt("Cuantas Botas vas a querer comprar?");
        
        while ((parseInt(cantidadBotas)<= 0)){
            alert("Tienes que comprar al menos una bota para seguir con la compra");
            cantidadBotas = prompt("Cuantas Botas vas a querer comprar?");
        }

        let suma = parseInt(cantidadBotas) * parseInt(precioNegras);
        console.log("El resultado del monto a pagar es:" + suma);
        
        alert(" El monto a pagar es " + suma);

        let pago = prompt ("Con cuanto vas a abonar?");

        if (pago < suma) {
            alert("Lo siento tu pago es insuficiente para la compra")
        }

        if (pago >= suma){
            alert(" Muchas gracias" + " " + "Tu compra se finalizo con exito. Tu vuelto es " + (parseInt(pago) - parseInt(suma)))
            console.log("--> El resultado de la resta para saber el vuelto es:" + (parseInt(pago) - parseInt(suma)))
        } 
    }
    //TERMINA BOTAS NEGRAS

    //ARRANCA BOTAS LLUVIA
    if (opcionBotas == 4) {
        let botasLluvia = {
            modelo:"Botas para la lluvia",
            precio:"7000$",
            talles:"38 39 40 41 42"
        }
    
        let modeloLluvia = botasLluvia["modelo"];
        let precioLluvia = botasLluvia["precio"];
        let tallesLluvia = botasLluvia["talles"];
        
        let fraseLluvia = "las" + " " + modeloLluvia + " " + "tienen un precio de" + " " + precioLluvia + " " + "y los talles disponibles son:" + " " + tallesLluvia;

        alert(fraseLluvia);

        let cantidadBotas = prompt("Cuantas Botas vas a querer comprar?");
        
        while ((parseInt(cantidadBotas)<= 0)){
            alert("Tienes que comprar al menos una bota para seguir con la compra");
            cantidadBotas = prompt("Cuantas Botas vas a querer comprar?");
        }

        let suma = parseInt(cantidadBotas) * parseInt(precioLluvia);
        console.log("El resultado del monto a pagar es:" + suma);
        
        alert(" El monto a pagar es " + suma);

        let pago = prompt ("Con cuanto vas a abonar?");

        if (pago < suma) {
            alert("Lo siento tu pago es insuficiente para la compra")
        }

        if (pago >= suma){
            alert(" Muchas gracias" + " " + "Tu compra se finalizo con exito. Tu vuelto es " + (parseInt(pago) - parseInt(suma)))
            console.log("--> El resultado de la resta para saber el vuelto es:" + (parseInt(pago) - parseInt(suma)))
        } 
    }

    //TERMINA BOTAS LLUVIA
   if (opcionBotas == 5) {
        salida();
    }
}
//TERMINA BOTAS
//ZAPATILLAS
if (saludo == 2) {
    
    let opcionBlancas = 1;
    let opcionGris = 2;
    let opcionStreet = 3;
    let opcionzNegras= 4;
    
    let opcionZapas = prompt(" Estas son las Zapatillas en stock Elige las Zapatillas que quieras ver.\n " + "\n 1-Zapatillas Blanco con Rosa" + "\n 2-Zapatillas Gris" + "\n 3-Zapatillas Street" + "\n 4-Zapatillas Negras" + "\n 5-Salir")

    while ((parseInt)(opcionZapas) !== opcionBlancas && (parseInt(opcionZapas) !== opcionGris) && (parseInt(opcionZapas) !== opcionzNegras) && (parseInt(opcionZapas) !== opcionStreet && (parseInt(opcionZapas) !== salir))){
        let opcionZapas = prompt(" Estas son las Zapatillas en stock Elige las Zapatillas que quieras ver.\n " + "\n 1-Zapatillas Blanco con Rosa" + "\n 2-Zapatillas Gris" + "\n 3-Zapatillas Street" + "\n 4-Zapatillas Negras" + "\n 5-Salir")  
    }

    console.log("El usuario ingreso la opcion" + opcionZapas)

//ZAPAS BLANCAS
if (opcionZapas == 1) {

    let zapasBlancas = {
        modelo: "Zapatillas Blanco con Rosa",
        precio: "8000$",
        talles: "39 40 41 42",    

    }

    let modeloBlancas = zapasBlancas["modelo"];
    let precioBlancas = zapasBlancas["precio"];
    let tallesBlancas = zapasBlancas["talles"];
    
    let fraseBlancas = "las" + " " + modeloBlancas + " " + "tienen un precio de" + " " + precioBlancas + " " + "y los talles disponibles son:" + " " + tallesBlancas;
    
    alert(fraseBlancas);

    let cantidadZapas = prompt("Cuantas Zapas vas a querer comprar?");

    while ((parseInt(cantidadZapas)<= 0)){
        alert("Tienes que comprar al menos una bota para seguir con la compra");
        cantidadZapas = prompt("Cuantas Zapas vas a querer comprar?");
    }

    let suma = parseInt(cantidadZapas) * parseInt(precioBlancas);

    console.log("El resultado del monto a pagar es:" + suma);
    
    alert(" El monto a pagar es " + suma);

    let pago = prompt ("Con cuanto vas a abonar?");

    if (pago < suma) {
        alert("Lo siento tu pago es insuficiente para la compra")
    }

    if (pago >= suma){
        alert(" Muchas gracias " + " " + "Tu compra se finalizo con exito. Tu vuelto es " + (parseInt(pago) - parseInt(suma)))
        console.log("--> El resultado de la resta para saber el vuelto es:" + (parseInt(pago) - parseInt(suma)))
    }

    }
    //TERMINA ZAPAS BLANCAS

    //ARRANCA ZAPAS GRIS
    if (opcionZapas == 2) {

        let zapasGris = {
            modelo: "Zapatillas Gris",
            precio: "8000$",
            talles: "39 40 41 42 44",    
    
        }
    
        let modeloGris = zapasGris["modelo"];
        let precioGris = zapasGris["precio"];
        let tallesGris = zapasGris["talles"];
        
        let fraseGris = "las" + " " + modeloGris + " " + "tienen un precio de" + " " + precioGris + " " + "y los talles disponibles son:" + " " + tallesGris;
        
        alert(fraseGris);
    
        let cantidadZapas = prompt("Cuantas Zapas vas a querer comprar?");
    
        while ((parseInt(cantidadZapas)<= 0)){
            alert("Tienes que comprar al menos una bota para seguir con la compra");
            cantidadZapas = prompt("Cuantas Zapas vas a querer comprar?");
        }
    
        let suma = parseInt(cantidadZapas) * parseInt(precioGris);
    
        console.log("El resultado del monto a pagar es:" + suma);
        
        alert(" El monto a pagar es " + suma);
    
        let pago = prompt ("Con cuanto vas a abonar?");
    
        if (pago < suma) {
            alert("Lo siento tu pago es insuficiente para la compra")
        }
    
        if (pago >= suma){
            alert(" Muchas gracias " + " " + "Tu compra se finalizo con exito. Tu vuelto es " + (parseInt(pago) - parseInt(suma)))
            console.log("--> El resultado de la resta para saber el vuelto es:" + (parseInt(pago) - parseInt(suma)))
        }
    
        }
    //TERMINA ZAPAS GRIS

    //ARRANCA ZAPAS STREET
    if (opcionZapas == 3) {

        let zapasStreet = {
            modelo: "Zapatillas Street",
            precio: "10000$",
            talles: "37 40 41 42 44 45",    
    
        }
    
        let modeloStreet = zapasStreet["modelo"];
        let precioStreet = zapasStreet["precio"];
        let tallesStreet = zapasStreet["talles"];
        
        let fraseStreet = "las" + " " + modeloStreet + " " + "tienen un precio de" + " " + precioStreet + " " + "y los talles disponibles son:" + " " + tallesStreet;
        
        alert(fraseStreet);
    
        let cantidadZapas = prompt("Cuantas Zapas vas a querer comprar?");
    
        while ((parseInt(cantidadZapas)<= 0)){
            alert("Tienes que comprar al menos una bota para seguir con la compra");
            cantidadZapas = prompt("Cuantas Zapas vas a querer comprar?");
        }
    
        let suma = parseInt(cantidadZapas) * parseInt(precioStreet);
    
        console.log("El resultado del monto a pagar es:" + suma);
        
        alert(" El monto a pagar es " + suma);
    
        let pago = prompt ("Con cuanto vas a abonar?");
    
        if (pago < suma) {
            alert("Lo siento tu pago es insuficiente para la compra")
        }
    
        if (pago >= suma){
            alert(" Muchas gracias " + " " + "Tu compra se finalizo con exito. Tu vuelto es " + (parseInt(pago) - parseInt(suma)))
            console.log("--> El resultado de la resta para saber el vuelto es:" + (parseInt(pago) - parseInt(suma)))
        }
    
    }
    //TERMINA ZAPAS STREET

    //ARRACA ZAPAS NEGRAS
    if (opcionZapas == 4) {

        let zapasNegras = {
            modelo: "Zapatillas Negras",
            precio: "8500$",
            talles: "37 38 40 41 42 44 45",    
    
        }
    
        let modeloNegras = zapasNegras["modelo"];
        let precioNegras = zapasNegras["precio"];
        let tallesNegras = zapasNegras["talles"];
        
        let fraseNegras = "las" + " " + modeloNegras + " " + "tienen un precio de" + " " + precioNegras + " " + "y los talles disponibles son:" + " " + tallesNegras;
        
        alert(fraseNegras);
    
        let cantidadZapas = prompt("Cuantas Zapas vas a querer comprar?");
    
        while ((parseInt(cantidadZapas)<= 0)){
            alert("Tienes que comprar al menos una bota para seguir con la compra");
            cantidadZapas = prompt("Cuantas Zapas vas a querer comprar?");
        }
    
        let suma = parseInt(cantidadZapas) * parseInt(precioNegras);
    
        console.log("El resultado del monto a pagar es:" + suma);
        
        alert(" El monto a pagar es " + suma);
    
        let pago = prompt ("Con cuanto vas a abonar?");
    
        if (pago < suma) {
            alert("Lo siento tu pago es insuficiente para la compra")
        }
    
        if (pago >= suma){
            alert(" Muchas gracias " + " " + "Tu compra se finalizo con exito. Tu vuelto es " + (parseInt(pago) - parseInt(suma)))
            console.log("--> El resultado de la resta para saber el vuelto es:" + (parseInt(pago) - parseInt(suma)))
        }
    
    }
    if (opcionZapas == 5) {
        salida();
    }
}
//TERMINA ZAPATILLAS

//ARRANCA TEXANAS
if (saludo == 3) {
    let texanasBrillos = 1;
    let texanasBlancas = 2;
    let texanasNegras = 3;
    let texanasRosas = 4;
    let salir = 5;

    let opcionTex = prompt(" Estas son las texanas en stock Elige las texanas que quieras ver.\n " + "\n 1-Texanas Brillos" + "\n 2-Texanas Blancas" + "\n 3-Texabas Negras con Cuero" + "\n 4-Texanas Rosas" + "\n 5- Salir")

    while ((parseInt)(opcionTex) !== texanasBrillos && (parseInt(opcionTex) !== texanasBlancas) && (parseInt(opcionTex) !== texanasRosas) && (parseInt(opcionTex) !== texanasNegras) && (parseInt(opcionTex) !== salir)){
        let opcionTex = prompt(" Estas son las texanas en stock Elige las texanas que quieras ver.\n " + "\n 1-Texanas Brillos" + "\n 2-Texanas Blancas" + "\n 3-Texabas Negras con Cuero" + "\n 4-Texanas Rosas" + "\n 5- Salir")        
    }
    console.log("El usuario ingreso la opcion" + opcionTex)

    //ARRANCA TEXANAS BRILLOS
    if (opcionTex == 1) {

        let texanasBrillos = {
            modelo: "Texanas con Brillos",
            precio: "6500$",
            talles: "37 38",    
    
        }
    
        let modeloBrillos = texanasBrillos["modelo"];
        let precioBrillos = texanasBrillos["precio"];
        let tallesBrillos = texanasBrillos["talles"];
        
        let fraseBrillos = "las" + " " + modeloBrillos + " " + "tienen un precio de" + " " + precioBrillos + " " + "y los talles disponibles son:" + " " + tallesBrillos;
        
        alert(fraseBrillos);
    
        let cantidadTex = prompt("Cuantas Texanas vas a querer comprar?");
    
        while ((parseInt(cantidadTex)<= 0)){
            alert("Tienes que comprar al menos una Texana para seguir con la compra");
            cantidadTex = prompt("Cuantas Texanas vas a querer comprar?");
        }
    
        let suma = parseInt(cantidadTex) * parseInt(precioBrillos);
    
        console.log("El resultado del monto a pagar es:" + suma);
        
        alert(" El monto a pagar es " + suma);
    
        let pago = prompt ("Con cuanto vas a abonar?");
    
        if (pago < suma) {
            alert("Lo siento tu pago es insuficiente para la compra")
        }
    
        if (pago >= suma){
            alert(" Muchas gracias " + " " +"Tu compra se finalizo con exito. Tu vuelto es " + (parseInt(pago) - parseInt(suma)))
            console.log("--> El resultado de la resta para saber el vuelto es:" + (parseInt(pago) - parseInt(suma)))
        }
    
    }
    //TERMINA TEXANAS BRILLOS

    //ARRANCA TEXANAS BLANCAS
    if (opcionTex == 2) {

        let texanasBlancas = {
            modelo: "Texanas con Brillos",
            precio: "5000$",
            talles: "35 36 37",    
    
        }
    
        let modeloBlancas = texanasBlancas["modelo"];
        let precioBlancas = texanasBlancas["precio"];
        let tallesBlancas = texanasBlancas["talles"];
        
        let fraseBlancas = "las" + " " + modeloBlancas + " " + "tienen un precio de" + " " + precioBlancas + " " + "y los talles disponibles son:" + " " + tallesBlancas;
        
        alert(fraseBlancas);
    
        let cantidadTex = prompt("Cuantas Texanas vas a querer comprar?");
    
        while ((parseInt(cantidadTex)<= 0)){
            alert("Tienes que comprar al menos una Texana para seguir con la compra");
            cantidadTex = prompt("Cuantas Texanas vas a querer comprar?");
        }
    
        let suma = parseInt(cantidadTex) * parseInt(precioBlancas);
    
        console.log("El resultado del monto a pagar es:" + suma);
        
        alert(" El monto a pagar es " + suma);
    
        let pago = prompt ("Con cuanto vas a abonar?");
    
        if (pago < suma) {
            alert("Lo siento tu pago es insuficiente para la compra")
        }
    
        if (pago >= suma){
            alert(" Muchas gracias " + " " + "Tu compra se finalizo con exito. Tu vuelto es " + (parseInt(pago) - parseInt(suma)))
            console.log("--> El resultado de la resta para saber el vuelto es:" + (parseInt(pago) - parseInt(suma)))
        }
    
    }
    //TERMINA TEXANAS BLANCAS

    //ARRANCA TEXANAS NEGRAS
    if (opcionTex == 3) {

        let texanasNegras = {
            modelo: "Texanas Negras con Cuero",
            precio: "5999$",
            talles: "35 36 37 40",    
    
        }
    
        let modeloNegras = texanasNegras["modelo"];
        let precioNegras = texanasNegras["precio"];
        let tallesNegras = texanasNegras["talles"];
        
        let fraseNegras = "las" + " " + modeloNegras + " " + "tienen un precio de" + " " + precioNegras + " " + "y los talles disponibles son:" + " " + tallesNegras;
        
        alert(fraseNegras);
    
        let cantidadTex = prompt("Cuantas Texanas vas a querer comprar?");
    
        while ((parseInt(cantidadTex)<= 0)){
            alert("Tienes que comprar al menos una Texana para seguir con la compra");
            cantidadTex = prompt("Cuantas Texanas vas a querer comprar?");
        }
    
        let suma = parseInt(cantidadTex) * parseInt(precioNegras);
    
        console.log("El resultado del monto a pagar es:" + suma);
        
        alert(" El monto a pagar es " + suma);
    
        let pago = prompt ("Con cuanto vas a abonar?");
    
        if (pago < suma) {
            alert("Lo siento tu pago es insuficiente para la compra")
        }
    
        if (pago >= suma){
            alert(" Muchas gracias " + " " + "Tu compra se finalizo con exito. Tu vuelto es " + (parseInt(pago) - parseInt(suma)))
            console.log("--> El resultado de la resta para saber el vuelto es:" + (parseInt(pago) - parseInt(suma)))
        }
    
    }
    //TERMINA TEXANAS NEGRAS

    //ARRANCA TEXANAS ROSAS
    if (opcionTex == 4) {

        let texanasRosas = {
            modelo: "Texanas Rosas",
            precio: "5000$",
            talles: "35 36 37 40",    
    
        }
    
        let modeloRosas = texanasRosas["modelo"];
        let precioRosas = texanasRosas["precio"];
        let tallesRosas = texanasRosas["talles"];
        
        let fraseRosas = "las" + " " + modeloRosas + " " + "tienen un precio de" + " " + precioRosas + " " + "y los talles disponibles son:" + " " + tallesRosas;
        
        alert(fraseRosas);
    
        let cantidadTex = prompt("Cuantas Texanas vas a querer comprar?");
    
        while ((parseInt(cantidadTex)<= 0)){
            alert("Tienes que comprar al menos una Texana para seguir con la compra");
            cantidadTex = prompt("Cuantas Texanas vas a querer comprar?");
        }
    
        let suma = parseInt(cantidadTex) * parseInt(precioRosas);
    
        console.log("El resultado del monto a pagar es:" + suma);
        
        alert(" El monto a pagar es " + suma);
    
        let pago = prompt ("Con cuanto vas a abonar?");
    
        if (pago < suma) {
            alert("Lo siento tu pago es insuficiente para la compra")
        }
    
        if (pago >= suma){
            alert(" Muchas gracias " + " " + "Tu compra se finalizo con exito. Tu vuelto es " + (parseInt(pago) - parseInt(suma)))
            console.log("--> El resultado de la resta para saber el vuelto es:" + (parseInt(pago) - parseInt(suma)))
        }
    
    }
    //TERMINA TEXANAS ROSAS
    if (opcionTex == 5) {
        salida();
    }
    //TERMINA TEXANAS
}

function salida() {
    console.log("Gracias por preferir a " + MARCA + ". Será para una próxima ocasión. ¡Hasta Luego!");
    alert("Gracias por preferir a " + MARCA + ". Será para una próxima ocasión. ¡Hasta Luego!");
}

if (saludo == 4) {
    salida()
}
