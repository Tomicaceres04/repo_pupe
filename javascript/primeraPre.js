let nombre = prompt("Ingrese su nombre:");
let apellido = prompt("Ingrese su apellido:");
const MARCA = "Pupe Shoes"
if ((nombre == "") && (apellido == "")) {
    alert("Necesitas rellenar el campo de nombre y apellido para continuar la operacion")
    nombre = prompt("Ingrese su nombre");
    apellido = prompt("Ingrese su apellido");
}

alert("Bienvenido a los destacados de Pupe Shoes" + " " + nombre + " " + apellido)

console.log("El usuario ingreso el nombre: "+ nombre);
console.log("El usuario ingreso el apellido:"+ apellido);

let saludo = prompt("Que tipo de calzado queres ver?\n" + "Por ejemplo '1' para Botas " + "\n n1-BOTAS" + "\n n2-ZAPATILLAS" + "\n n3-TEXANAS" + "\n n4-OTROS" + "\n n5-Salir" )
let botas = 1;
let zapatillas = 2;
let texanas = 3;
let otros = 4
let salir = 5;

while ((parseInt(saludo) !== botas) && (parseInt(saludo) !== zapatillas) && (parseInt(saludo) !== texanas) && (parseInt(saludo) !== otros) && (parseInt(saludo) !== salir)) {
    saludo = prompt("Que tipo de calzado queres ver?\n" + "Por ejemplo '1' para Botas " + "\n n1-BOTAS" + "\n n2-ZAPATILLAS" + "\n n3-TEXANAS" + "\n n4-OTROS" + "\n n5-Salir" )
}
//BOTAS
if (saludo == 1){
    let botasNegras = 1;
    let botasBrillo = 2;
    let salir = 3;

    let opcionBotas = prompt(" Estas son las botas en stock Elige las botas que quieras ver.\n " + "\n 1-Botas Negras" + "\n 2-Botas Brillo" + "\n 3-Salir")

    while ((parseInt)(opcionBotas) !== botasNegras && (parseInt(opcionBotas) !== botasBrillo) && (parseInt(opcionBotas) !== salir)){
    let opcionBotas = prompt(" Estas son las botas en stock Elige las botas que quieras ver.\n " + "\n 1-Botas Negras" + "\n 2-Botas Brillo" + "\n 3-Salir")        
    }

    console.log("El usuario ingreso la opcion" + opcionBotas)

    if (opcionBotas == 1) {
        alert("Nuestas Botas Negras tienen un costo de $5000");

        let cantidadBotas = prompt("Cuantas Botas vas a querer comprar?");

        while ((parseInt(cantidadBotas)<= 0)){
            alert("Tienes que comprar al menos una bota para seguir con la compra");
            cantidadBotas = prompt("Cuantas Botas vas a querer comprar?");
        }

        let suma = parseInt(cantidadBotas) * 5000;
        console.log("El resultado del monto a pagar es:" + suma);
        
        alert(" El monto a pagar es " + suma);

        let pago = prompt ("Con cuanto vas a abonar?");

        if (pago < suma) {
            alert("Lo siento tu pago es insuficiente para la compra")
        }

        if (pago >= suma){
            alert(" Muchas gracias " + " " + nombre + " " + "Tu compra se finalizo con exito. Tu vuelto es " + (parseInt(pago) - parseInt(suma)))
            console.log("--> El resultado de la resta para saber el vuelto es:" + (parseInt(pago) - parseInt(suma)))
        }
    }

    if (opcionBotas == 2) {
        let botascBrillo = 5500
        alert ("Nuestras Botas con brillos tienen un costo de" + botascBrillo)

        let cantidadBotas = prompt("Cuantas Botas vas a querer comprar?");
        
        while ((parseInt(cantidadBotas)<= 0)){
            alert("Tienes que comprar al menos una bota para seguir con la compra");
            cantidadBotas = prompt("Cuantas Botas vas a querer comprar?");
        }

        let suma = parseInt(cantidadBotas) * botascBrillo;
        console.log("El resultado del monto a pagar es:" + suma);
        
        alert(" El monto a pagar es " + suma);

        let pago = prompt ("Con cuanto vas a abonar?");

        if (pago < suma) {
            alert("Lo siento tu pago es insuficiente para la compra")
        }

        if (pago >= suma){
            alert(" Muchas gracias" + " " + nombre + " " + "Tu compra se finalizo con exito. Tu vuelto es " + (parseInt(pago) - parseInt(suma)))
            console.log("--> El resultado de la resta para saber el vuelto es:" + (parseInt(pago) - parseInt(suma)))
        } 
    }
    if (opcionBotas == 3) {
        salida();
    }
}
//TERMINA BOTAS
//ZAPATILLAS
if (saludo == 2) {
    
    alert ("Las unicas zapatillas que tenemos en stock son las rosas con blanco");
    
    let precioZapatillas = prompt("Quieres saber el precio de la zapatilla?" + "\n Indicar con si o no.");

    if (precioZapatillas.toLowerCase() == "si") {
        alert("Las zapatillas tienen un valor de 8000$")

        let cantidadZapas = prompt("Cuantas Zapatillas vas a querer comprar?");
        
        while ((parseInt(cantidadZapas)<= 0)){
            alert("Tienes que comprar al menos una Zapatilla para seguir con la compra");
            cantidadZapas = prompt("Cuantas Botas vas a querer comprar?");
        }
        
        let sumazapas = parseInt(cantidadZapas) * 8000
        console.log("El resultado del monto a pagar es:" + sumazapas);

        alert (" El monto a pagar es " + sumazapas)

        let pagozapas = prompt("Con cuanto vas a abonar?")
        
        if (pagozapas < sumazapas) {
            alert("Lo siento tu pago es insuficiente para la compra")
        }

        if (pagozapas >= sumazapas){
            alert(" Muchas gracias" + " " + nombre + " " + "Tu compra se finalizo con exito. Tu vuelto es " + (parseInt(pagozapas) - parseInt(sumazapas)))
            console.log("--> El resultado de la resta para saber el vuelto es:" + (parseInt(pagozapas) - parseInt(sumazapas)))
        } 

    }

    if (precioZapatillas.toLowerCase() == "no") {
        alert("Lo siento ya vamos a reponer el stock")
    }
}
//TERMINA ZAPATILLAS
if (saludo == 3) {
    let texanasBrillos = 1
    let texanasBlancas = 2
    let salir = 3;

    let opcionTex = prompt(" Estas son las texanas en stock Elige las texanas que quieras ver.\n " + "\n 1-Texanas Brillos" + "\n 2-Texanas Blancas" + "\n 3-Salir")

    while ((parseInt)(opcionTex) !== texanasBrillos && (parseInt(opcionTex) !== texanasBlancas) && (parseInt(opcionTex) !== salir)){
    let opcionTex = prompt(" Estas son las Texanas en stock Elige las Texanas que quieras ver.\n " + "\n 1-Texanas Brillos" + "\n 2-Texanas Blancas" + "\n 3-Salir")        
    }
    console.log("El usuario ingreso la opcion" + opcionTex)

    if (opcionTex == 1) {
        alert("Nuestas Texanas con Brillos tienen un costo de $6500");

        let cantidadTex = prompt("Cuantas Texanas vas a querer comprar?");

        while ((parseInt(cantidadTex)<= 0)){
            alert("Tienes que comprar al menos una Texana para seguir con la compra");
            cantidadTex = prompt("Cuantas Texanas vas a querer comprar?");
        }

        let sumaTex = parseInt(opcionTex) * 6500;
        console.log("El resultado del monto a pagar es:" + sumaTex);
        
        alert(" El monto a pagar es " + sumaTex);

        let pagoTex = prompt ("Con cuanto vas a abonar?");

        if (pagoTex < sumaTex) {
            alert("Lo siento tu pago es insuficiente para la compra")
        }

        if (pagoTex >= sumaTex){
            alert(" Muchas gracias " + " " + nombre + " " + "Tu compra se finalizo con exito. Tu vuelto es " + (parseInt(pagoTex) - parseInt(sumaTex)))
            console.log("--> El resultado de la resta para saber el vuelto es:" + (parseInt(pagoTex) - parseInt(sumaTex)))
        }
    }
    
    if (opcionTex == 2) {
        alert("Nuestas Texanas Blancas tienen un costo de $5000");

        let cantidadTex = prompt("Cuantas Texanas vas a querer comprar?");

        while ((parseInt(cantidadTex)<= 0)){
            alert("Tienes que comprar al menos una Texana para seguir con la compra");
            cantidadTex = prompt("Cuantas Texanas vas a querer comprar?");
        }

        let sumaTex = parseInt(opcionTex) * 5000;
        
        alert(" El monto a pagar es " + sumaTex);
        console.log("El resultado del monto a pagar es:" + sumaTex);

        let pagoTex = prompt ("Con cuanto vas a abonar?");

        if (pagoTex < sumaTex) {
            alert("Lo siento tu pago es insuficiente para la compra")
        }

        if (pagoTex >= sumaTex){
            alert(" Muchas gracias " + " " + nombre + " " + "Tu compra se finalizo con exito. Tu vuelto es " + (parseInt(pagoTex) - parseInt(sumaTex)))
            console.log("--> El resultado de la resta para saber el vuelto es:" + (parseInt(pagoTex) - parseInt(sumaTex)))
        }
    }
    if (opcionTex == 3) {
        salida();
    }
}
if (saludo == 4) {
        
    let bucaneras = 1
    let plataformarosa = 2
    let taconesblancos = 3
    let salir = 4

    let opcionOtros= prompt("Estos son los productos destacados de la seccion OTROS indique que precio desea saber" + "\n n1-Bucaneras" + "\n n2-Plataforma Rosa" + "\n n3-Tacones Blancos" + "\n n4-Salir");

    while ((parseInt)(opcionOtros) !== bucaneras && (parseInt(opcionOtros) !== plataformarosa) && (parseInt (opcionOtros) !== taconesblancos) && (parseInt (opcionOtros) !== salir)){
        let opcionOtros = prompt("\n n1-Bucaneras" + "\n n2-Plataforma Rosa" + "\n n3-Tacones Blancos" + "\n n4-Salir")        
    }
    
    console.log("El usuario ingreso la opcion" + opcionOtros)

    if (opcionOtros == 1) {
        alert("Nuestas Bucaneras tienen un costo de $7000");

        let cantidadOtros = prompt("Cuantas Bucaneras vas a querer comprar?");

        while ((parseInt(cantidadOtros)<= 0)){
            alert("Tienes que comprar al menos una Bucanera para seguir con la compra");
            cantidadOtros = prompt("Cuantas Bucaneras vas a querer comprar?");
        }

        let sumaOtros = parseInt(opcionOtros) *7000;
        console.log("El resultado del monto a pagar es:" + sumaOtros);
        
        alert(" El monto a pagar es " + sumaOtros);

        let pagoOtros = prompt ("Con cuanto vas a abonar?");

        if (pagoOtros < sumaOtros) {
            alert("Lo siento tu pago es insuficiente para la compra")
        }

        if (pagoOtros >= sumaOtros){
            alert(" Muchas gracias " + " " + nombre + " " + "Tu compra se finalizo con exito. Tu vuelto es " + (parseInt(pagoOtros) - parseInt(sumaOtros)))
            console.log("--> El resultado de la resta para saber el vuelto es:" + (parseInt(pagoOtros) - parseInt(sumaOtros)))
        }
    }

    if (opcionOtros == 2) {
        alert("Nuestas Plataformas Rosas tienen un costo de $5999");

        let cantidadOtros = prompt("Cuantas Plataformas Rosas vas a querer comprar?");

        while ((parseInt(cantidadOtros)<= 0)){
            alert("Tienes que comprar al menos una Plataforma rosa para seguir con la compra");
            cantidadOtros = prompt("Cuantas Plataformas Rosas vas a querer comprar?");
        }

        let sumaOtros = parseInt(opcionOtros) *5999;
        console.log("El resultado del monto a pagar es:" + sumaOtros);
        
        alert(" El monto a pagar es " + sumaOtros);

        let pagoOtros = prompt ("Con cuanto vas a abonar?");

        if (pagoOtros < sumaOtros) {
            alert("Lo siento tu pago es insuficiente para la compra")
        }

        if (pagoOtros >= sumaOtros){
            alert(" Muchas gracias " + " " + nombre + " " + "Tu compra se finalizo con exito. Tu vuelto es " + (parseInt(pagoOtros) - parseInt(sumaOtros)))
            console.log("--> El resultado de la resta para saber el vuelto es:" + (parseInt(pagoOtros) - parseInt(sumaOtros)))
        }
    }

    if (opcionOtros == 3) {
        alert("Nuestros Tacones Blancos tienen un costo de $5999");

        let cantidadOtros = prompt("Cuantas Tacones Blancos vas a querer comprar?");

        while ((parseInt(cantidadOtros)<= 0)){
            alert("Tienes que comprar al menos unos tacones para seguir con la compra");
            cantidadOtros = prompt("Cuantas Tacones Blancos vas a querer comprar?");
        }

        let sumaOtros = parseInt(opcionOtros) *9000;
        console.log ("El resultado del monto a pagar es:" + sumaOtros);
        
        alert(" El monto a pagar es " + sumaOtros);

        let pagoOtros = prompt ("Con cuanto vas a abonar?");

        if (pagoOtros < sumaOtros) {
            alert("Lo siento tu pago es insuficiente para la compra")
        }

        if (pagoOtros >= sumaOtros){
            alert(" Muchas gracias " + " " + nombre + " " + "Tu compra se finalizo con exito. Tu vuelto es " + (parseInt(pagoOtros) - parseInt(sumaOtros)))
            console.log("--> El resultado de la resta para saber el vuelto es:" + (parseInt(pagoOtros) - parseInt(sumaOtros)))
        }
    }
    
    if (opcionOtros== 4) {
        salida();
    }
}
function salida() {
    console.log("Gracias por preferir a " + MARCA + ". Será para una próxima ocasión. ¡Hasta Luego!");
    alert("Gracias por preferir a " + MARCA + ". Será para una próxima ocasión. ¡Hasta Luego!");
}

if (saludo == 5) {
    salida()
}
