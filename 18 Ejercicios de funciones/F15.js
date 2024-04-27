function Bisiesto(año) {
    if ((año % 4 == 0 && año % 100 != 0) || año % 400 == 0) {
        return true;
    } else {
        return false;
    }
}

var año = 2024;
if (Bisiesto(año)) {
    console.log(año + " es un año bisiesto.");
} else {
    console.log(año + " no es un año bisiesto.");
}