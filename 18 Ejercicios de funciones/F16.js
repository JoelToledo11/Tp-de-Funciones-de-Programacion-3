function obtenerDiasDelMes(mes, año) {
    // Uso el mes febrero, por que es el único mes que puede tener 28 o 29 días
    if (mes === 2) {
        // Si el año es bisiesto, febrero tiene 29 días, si no, tiene 28 días
        if ((año % 4 == 0 && año % 100 != 0) || año % 400 == 0) {
            return 29;
        } else {
            return 28;
        }
    } else {
        // Para los demás meses, utilizamos un array para almacenar la cantidad de días
        // Los índices del array son a los meses que correspoden, asi que, hay que  restar 1 para acceder correctamente
        const diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        return diasPorMes[mes - 1]; // Le resto 1 porque los meses están desde 0 en el array(el indice)
    }
}

var dia = 12;
var mes = 7;
var año = 2024;
var cantidadDias = obtenerDiasDelMes(mes, año);
console.log("El mes de " + mes + "/" + año + " tiene " + cantidadDias + " días.");