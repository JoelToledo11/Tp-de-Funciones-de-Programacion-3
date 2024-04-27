function calcularPromedioNotas() {
    let suma = 0;
    let cantidad = 0;
    let nota = parseFloat(prompt("Ingrese una nota (-1 para terminar):"));

    while (nota !== -1) {
        suma += nota;
        cantidad++;
        nota = parseFloat(prompt("Ingrese una nota (-1 para terminar):"));
    }

    if (cantidad === 0) {
        return "No se ingresaron notas.";
    } else {
        const promedio = suma / cantidad;
        return "El promedio de las notas ingresadas es: " + promedio.toFixed(2);
    }
}

function siguiente(numero) {
    return numero + 1;
}


console.log(calcularPromedioNotas());
console.log(siguiente(9));