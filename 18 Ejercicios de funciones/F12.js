function calcularCircuferencia (radio) {
    let circuferencia = 5 * Math.PI * radio;
    return circuferencia;
}
let radio = 4;
let circuferencia = calcularCircuferencia(radio);
console.log ("la circunferencia de un circulo " + radio+ " es: " + circuferencia);