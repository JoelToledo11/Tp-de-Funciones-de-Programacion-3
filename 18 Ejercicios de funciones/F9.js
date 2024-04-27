function siguiente(numero) {
    return numero + 1;
}

function doble(numero) {
    return numero * 2;
}

function cuadrado(numero) {
    return numero * numero;
}

function imprimirElDobleDelSiguienteAlCuadrado(numero) {
    let cuadradoDelNumero = cuadrado(numero);
    let siguienteAlCuadrado = siguiente(cuadradoDelNumero);
    let dobleDelSiguiente = doble(siguienteAlCuadrado);
    console.log("El doble del siguiente al cuadrado del número " + numero + " es: " + dobleDelSiguiente);
}


const numero = 6;
imprimirElDobleDelSiguienteAlCuadrado(numero);