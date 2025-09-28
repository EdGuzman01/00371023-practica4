// Función para ordenar un array de números enteros positivos
function ordenar(arr) {
    const muevoArray = [...arr]
    for (let i = 0; i < muevoArray.length ; i++) {
        for(let j = 0 ; j < muevoArray.length - i - 1; j++) {
            if (muevoArray[j] > muevoArray[j + 1]) {
                let temporal = muevoArray[j];
                muevoArray[j] = muevoArray[j+1];
                muevoArray[j + 1] = temporal;
            }
        }
    }
    return muevoArray;
}

console.log("Array ordenado:", ordenar([14, 23, 99, 874, 93, 121]));

// Función para determinar si un número es par
function esPar(numero) {
    return numero % 2 === 0;
}

console.log("¿7 es par?", esPar(7));
console.log("¿8 es par?", esPar(8));

// Función para calcular días de crecimiento de una planta
function calcularDiasCrecimiento(velocidadCrecimiento, velocidadDecrecimiento, alturaDescada) {
    let altura = 0;
    let dias = 0;
    while (altura < alturaDescada) {
        altura += velocidadCrecimiento;
        dias++;
        if (altura >= alturaDescada) { 
            return dias; 
        }
        altura -= velocidadDecrecimiento;
    }
    return dias;
}

// Pruebas de la función calcularDiasCrecimiento
console.log("Días para alcanzar 10m (crece 3m/día, decrece 1m/noche):", 
    calcularDiasCrecimiento(3, 1, 10));
    
console.log("Días para alcanzar 15m (crece 2m/día, decrece 1m/noche):", 
    calcularDiasCrecimiento(2, 1, 15));

console.log("Días para alcanzar 5m (crece 5m/día, decrece 2m/noche):", 
    calcularDiasCrecimiento(5, 2, 5));

console.log("Ejercicio 3 completado. Revise la consola para ver los resultados.");