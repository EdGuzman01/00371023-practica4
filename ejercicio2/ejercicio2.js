// Variables
var variable1;
let variable2;
const variable3 = 2;

// ✔ contener letras, números, _ 0 $
var $jquery, _private;

// ● empezar por números o contener espacios
// var 50cent = 1, esto no vale = 1; // Esto daría error

// Son case sensitive
var variable = 2, VARIABLE = 2;
// Mayoritariamente se usa camelCase, pero también se usa snake_case
var camelCase = 2, snake_case = 2;
// Se recomienda declarar una variable por línea
var camelCase = 2;
var snake_case = 3;

// Declaración y asignación
var mVariable;
let miOtraVariable;

mVariable = 2;
miOtraVariable = 2;

var mVariable = 42;
let miOtraVariable2 = mVariable;

// var nos permite acceder a una variable antes de inicializarla
console.log(mVariable); // undefined
var mVariable = 2;
console.log(mVariable); // 2

// let en cambio...
// console.log(miOtraVariable); // Uncaught ReferenceError: miOtraVariable is not defined
let miOtraVariable3 = 2;
console.log(miOtraVariable3);

const estoNoDaraProblems = 42;

// Una variable declarada con const, no puede cambiar su valor.
// Por tanto, siempre ha de ser inicializada en su declaración
// const estoVaAfaLlar; // Uncaught SyntaxError: Missing initializer in const declaration
const estoTambienFaLlara = 2;
// estoTambienFaLlara = 3; // Uncaught TypeError: Assignment to constant variable.

// Tipos
console.log("=== TIPOS DE DATOS ===");

// undefined
console.log("typeof undefined:", typeof undefined);
console.log("typeof estaVariableQueNoHeInicializadoAun:", typeof estaVariableQueNoHeInicializadoAun);

// object
console.log("typeof null:", typeof null);
console.log("typeof { key: 2 }:", typeof { key: 2 });
console.log("typeof [15, 4]:", typeof [15, 4]);
console.log("typeof new Date():", typeof new Date());

// boolean
console.log("typeof true:", typeof true);
console.log("typeof false:", typeof false);
console.log("typeof new Boolean(true):", typeof new Boolean(true));

// string
console.log('typeof "hola":', typeof "hola");

// function
console.log("typeof function (){}:", typeof function (){});

// number
console.log("typeof 1:", typeof 1);
console.log("typeof 1.3:", typeof 1.3);
console.log("typeof NaN:", typeof NaN);
console.log("typeof Infinity:", typeof Infinity);

// symbol
console.log("typeof Symbol():", typeof Symbol());
console.log('typeof Symbol("mi simbolo"):', typeof Symbol("mi simbolo"));

// Artimética básica
console.log("=== ARITMÉTICA BÁSICA ===");

// operador suma
const suma = 1 + 2; // 3
console.log("1 + 2 =", suma);

// operador resta
const resta = 3 - 2; // 1
console.log("3 - 2 =", resta);

// operador producto
const producto = 2 * 4; // 8
console.log("2 * 4 =", producto);

// operador division
const division = 9 / 3; // 3
console.log("9 / 3 =", division);

// operador potencia
const potencia = 3 ** 2; // 9
console.log("3 ** 2 =", potencia);

// operador modulo u operador resto
const modulo = 8 % 3; // 2
console.log("8 % 3 =", modulo);

// Suma de strings
const concatenarStrings = "Hola" + " " + "mundo" + "!";
console.log('"Hola" + " " + "mundo" + "!" =', concatenarStrings);

// Suma de string y número
const sumaStringYNumero = 1 + "1";
console.log('1 + "1" =', sumaStringYNumero);

// Caso curioso
const banana = "b" + "a" + +"a" + "a";
console.log('"b" + "a" + +"a" + "a" =', banana);

// Precedencia de operadores
console.log("=== PRECEDENCIA DE OPERADORES ===");

const expression1 = (3 + 7) * 10; // 100
console.log("(3 + 7) * 10 =", expression1);

const expression2 = 3 + 7 * 10; // 73
console.log("3 + 7 * 10 =", expression2);

const expression3 = 2 ** 3 ** 2; // 512
console.log("2 ** 3 ** 2 =", expression3);

// Operadores de incremento/decremento
let inicio = 5;
const sumaYAsigna = ++inicio; // 6
console.log("++inicio =", sumaYAsigna);

const asignaYSuma = inicio++; // 6
console.log("inicio++ =", asignaYSuma);

const restaYAsigna = --inicio; // 5
console.log("--inicio =", restaYAsigna);

const asignaYResta = inicio--; // 5
console.log("inicio-- =", asignaYResta);
console.log("Valor final de inicio:", inicio);

// Operadores de asignación
let x = 1;
let y = 2;
let z = 3;
x = y;
console.log("x = y -> x =", x);
x += z;
console.log("x += z -> x =", x);
x *= y;
console.log("x *= y -> x =", x);
x /= y;
console.log("x /= y -> x =", x);
x %= x;
console.log("x %= x -> x =", x);

// Lógica
console.log("=== OPERADORES LÓGICOS ===");

const masFalsoQueSalvame = true;

// El operador AND tiene más prioridad que el operador OR
const cherto = true && true;
console.log("true && true =", cherto);

let noECherto = false && true;
console.log("false && true =", noECherto);

noECherto = false && false;
console.log("false && false =", noECherto);

noECherto = true && false;
console.log("true && false =", noECherto);

let cherto2 = true || true;
console.log("true || true =", cherto2);

let echerto = false || false;
console.log("false || false =", echerto);

echerto = true || false;
console.log("true || false =", echerto);

const noECherto2 = false || false;
console.log("false || false =", noECherto2);

// Comparación
console.log("=== OPERADORES DE COMPARACIÓN ===");

const mayorQue = 100 > 50;
console.log("100 > 50 =", mayorQue);

const menorQue = 50 < 100;
console.log("50 < 100 =", menorQue);

const mayorOIgualQue = 100 >= 100;
console.log("100 >= 100 =", mayorOIgualQue);

const menorOIgualQue = 100 <= 100;
console.log("100 <= 100 =", menorOIgualQue);

const igualOCasi = 100 == "100";
console.log('100 == "100" =', igualOCasi);

const igualVDeIMismoTipo = 100 === 100;
console.log("100 === 100 =", igualVDeIMismoTipo);

const noIgual = 100 !== "100";
console.log('100 !== "100" =', noIgual);

// Más ejemplos
console.log('1 == "1" =', 1 == '1');
console.log('1 === "1" =', 1 === '1');
console.log("false == 0 =", false == 0);
console.log("false === 0 =", false === 0);
console.log('"" == 0 =', '' == 0);
console.log('"" === 0 =', '' === 0);

// Control de flujo if/else
console.log("=== CONTROL DE FLUJO IF/ELSE ===");

if (true) {
    console.log("true, por eso me ejecuto");
} else {
    console.log("false, por eso me ejecuto");
}

// Ejemplo con prompt (comentado para evitar interrupciones)
/*
const miNumero = prompt("¿Qué número estoy pensando?")
if (miNumero < 5) {
    alert("miNumero es bastante pequeño");
} else if (miNumero > 5) {
    alert("vaya, miNumero se ha pasado");
} else {
    alert("¡miNumero es 5!");
}
*/

// Switch
console.log("=== SWITCH ===");

// Ejemplo con prompt (comentado para evitar interrupciones)
/*
let numero = prompt("¿Qué número estoy pensando?")
switch(numero) {
    case "5":
        alert("¡Número correcto!");
        break;
    case "4":
    case "6":
        alert("¡Casi aciertas!");
        break;
    default:
        alert("Frío, frío")
}
*/

// While
console.log("=== WHILE ===");

// Ejemplo con prompt (comentado para evitar interrupciones)
/*
let edad = prompt("¿Cuantos años tienes?", 0)
while (edad <= 18) {
    alert("Eres demasiado joven lo siento");
    edad = prompt("¿Cuantos años tienes?", 0)
};
*/

// For
console.log("=== FOR ===");

for (let i = 0; i < 10; i += 1){
    console.log(i)
}


for (let i = 10; i > 0; i -= 1){
    console.log(i)
}


for (let i = 10, j = 0; i > j; i -= 1){
    console.log(i, j)
}

console.log("Ejercicio 2 completado. Revise la consola para ver todos los resultados.");