// Comprueba que si aserción es verdadera
console.assert("Legolas" > "Gimli");

// Limpia la consola
console.clear();

// Lista de forma interactiva las propiedades de un objeto
console.dir(window);

// Muestra una representación HTML del objeto
console.dirxml(document.body);

const marvel = ['Spider Man', 'Iron Man', 'Captian America', 'Lobezno'];
// Permite agrupar diferentes valores
console.group('Superhéroes de Marvel');
marvel.forEach(superhero => console.log(superhero));
// Indica el fin del grupo
console.groupEnd();

// Las verificaciones por logs, tienen por objetivo ayudarme a revisar lo que está pasando a nivel programático en mi programa de JS
console.log("Ejercicio 1 completado. Revise la consola para ver los resultados.");