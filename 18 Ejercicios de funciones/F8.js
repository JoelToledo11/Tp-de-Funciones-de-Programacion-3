function siguiente(numero) {
    return numero + 1;
}

function doble(numero) {
    return numero * 2;
}

function imprimirElDobleDelSiguiente(numero) {
    let siguienteNumero = siguiente(numero);
    let dobleDelSiguiente = doble(siguienteNumero);
    console.log("El doble del siguiente al número " + numero + " es: " + dobleDelSiguiente);
}

const numero = 6;
imprimirElDobleDelSiguiente(numero);