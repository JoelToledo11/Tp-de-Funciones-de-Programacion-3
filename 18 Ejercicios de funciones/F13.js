function CalcularAreaCirculo(radio){
    var area = Math.PI * Math.pow(radio, 2);
    return area;
} 
var radio = 4;
var area = CalcularAreaCirculo(radio);
console.log("el area del circulo con radio " + radio + " es: " + area);