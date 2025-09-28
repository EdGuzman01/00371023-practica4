# README - Guía de Laboratorio IV - Programación Web

## Análisis de Comportamiento de Operadores y Flujos de Control en JavaScript

---

## 📌 Pregunta 1 - Página 8
Analicemos ¿Qué ocurre en cada caso presentado anteriormente con los operadores y porqué JS me permite esto?"


#### 1. **Operadores de Incremento/Decremento**
```javascript
let inicio = 5;
const sumaYAsigna = ++inicio;    // 6
const asignaYSuma = inicio++;    // 6  
const restaYAsigna = --inicio;   // 5
const asignaYResta = inicio--;   // 5
```

**¿Qué ocurre?**
- `++inicio` (**pre-incremento**): Incrementa la variable primero → luego devuelve el valor
- `inicio++` (**post-incremento**): Devuelve el valor primero → luego incrementa la variable
- `--inicio` (**pre-decremento**): Decrementa la variable primero → luego devuelve el valor
- `inicio--` (**post-decremento**): Devuelve el valor primero → luego decrementa la variable

**¿Por qué JavaScript permite esto?**
- ✅ **Eficiencia en bucles**: Ideal para contadores en estructuras repetitivas
- ✅ **Sintaxis concisa**: Permite operaciones en una sola línea
- ✅ **Estándar industrial**: Operadores comunes en lenguajes como C, C++, Java, C#
- ✅ **Flexibilidad**: Ofrece diferentes comportamientos según la necesidad

#### 2. **Operadores de Asignación Compuesta**
```javascript
let x = 1, y = 2, z = 3;
x = y;      // x = 2
x += z;     // x = x + z → 2 + 3 = 5
x *= y;     // x = x * y → 5 * 2 = 10
x /= y;     // x = x / y → 10 / 2 = 5
x %= x;     // x = x % x → 5 % 5 = 0
```

**¿Qué ocurre?**
Cada operador compuesto realiza la operación aritmética y la asignación simultáneamente.

**¿Por qué JavaScript permite esto?**
- ✅ **Código más limpio**: Evita repetición de variables
- ✅ **Mejor legibilidad**: Expresiones más comprensibles
- ✅ **Conveniencia**: Sintaxis ampliamente adoptada
- ✅ **Reducción de errores**: Menos repetición, menos probabilidad de errores

---

## 📌 Pregunta 2 - Página 9  
Analicemos ¿El comportamiento de los flujos de control es similar a otros lenguajes y ambientes de desarrollo?

 Comparativa de Flujos de Control

#### 1. **Estructura IF/ELSE**
```javascript
if (condición) {
    // código si verdadero
} else {
    // código si falso
}
```

**Comparación con otros lenguajes:**
| Lenguaje | Similitud | Diferencias |
|----------|-----------|-------------|
| **Java, C++** | ⭐⭐⭐⭐⭐ (Idéntica) | Misma sintaxis |
| **Python** | ⭐⭐⭐ (Similar) | Sin paréntesis, usa `:` e indentación |
| **C#** | ⭐⭐⭐⭐⭐ (Idéntica) | Misma estructura |
| **PHP** | ⭐⭐⭐⭐ (Muy similar) | Sintaxis casi idéntica |

#### 2. **Estructura SWITCH**
```javascript
switch(expresión) {
    case valor1:
        // código
        break;
    default:
        // código
}
```

**Comparación:**
- **Java/C++**: ⭐⭐⭐⭐⭐ Sintaxis idéntica
- **Python**: ⭐ No tiene `switch`, usa `if/elif/else` o diccionarios
- **C#**: ⭐⭐⭐⭐ Similar, con posibles mejoras como `when`
- **PHP**: ⭐⭐⭐⭐ Similar, requiere `break` explícito

#### 3. **Estructura WHILE**
```javascript
while (condición) {
    // código
}
```

**Uniformidad entre lenguajes:** ⭐⭐⭐⭐⭐
- Prácticamente todos los lenguajes modernos tienen sintaxis idéntica
- Comportamiento consistente across platforms

#### 4. **Estructura FOR**
```javascript
for (inicialización; condición; actualización) {
    // código
}
```








**Carnet:** 0001234  
**Sección:** 1  
**Fecha:** 2025
