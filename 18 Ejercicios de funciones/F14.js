function diasEnMes(mes) {
    
    if (mes < 1 || mes > 12) {
        return "Error: Mes inválido. Debe ser un número entre 1 y 12.";
    }

    const diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    return diasPorMes[mes - 1];
}

alert(diasEnMes(12));