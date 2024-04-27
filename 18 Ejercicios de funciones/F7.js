function siguiente(numero) {
    return numero + 1;
  }
  
  function doble(numero) {
    return numero * 2;
  }
  
  function cuadrado(numero) {
    return numero * numero;
  }
  
  function imprimirValores(numero) {
    console.log("Número:", numero);
    console.log("Siguiente:", siguiente(numero));
    console.log("Doble:", doble(numero));
    console.log("Cuadrado:", cuadrado(numero));
  }
  
  imprimirValores(7); 