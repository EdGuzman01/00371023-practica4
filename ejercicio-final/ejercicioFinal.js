// Función que recibe el día de la semana y devuelve la actividad correspondiente
function obtenerActividad(dia) {
    const actividades = {
        'lunes': 'Los Lunes debo atender un cliente específico.',
        'martes': 'Los Martes visito una agencia fuera de la ciudad.',
        'miercoles': 'Los Miércoles debo llevar a mi hija al ballet (balé).',
        'jueves': 'En Jueves debo priorizar entregas de desarrollo.',
        'viernes': 'En Viernes debo atender problemas de manera remota.',
        'sabado': 'En Sábado debo hacer lo que mi esposa quiera.',
        'domingo': 'Los Domingos son días de descanso y familia.'
    };
    
    return actividades[dia.toLowerCase()] || 'No hay una actividad específica para este día.';
}

// Función para mostrar el recordatorio en la página
function mostrarRecordatorio() {
    const diaSeleccionado = document.getElementById('diaSemana').value;
    const resultadoDiv = document.getElementById('resultado');
    
    if (!diaSeleccionado) {
        resultadoDiv.innerHTML = '<p>Por favor, seleccione un día de la semana.</p>';
        return;
    }
    
    const actividad = obtenerActividad(diaSeleccionado);
    const diaFormateado = diaSeleccionado.charAt(0).toUpperCase() + diaSeleccionado.slice(1);
    
    // Obtener el día actual para resaltarlo si coincide
    const dias = ['domingo', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado'];
    const fecha = new Date();
    const diaActual = dias[fecha.getDay()];
    
    const esDiaActual = diaSeleccionado === diaActual;
    
    resultadoDiv.innerHTML = `
        <div class="actividad ${esDiaActual ? 'dia-actual' : ''}">
            <h3>${diaFormateado}</h3>
            <p>${actividad}</p>
            ${esDiaActual ? '<p><strong>¡Hoy es este día!</strong></p>' : ''}
        </div>
    `;
}

// Event listener para el botón
document.getElementById('btnRecordatorio').addEventListener('click', mostrarRecordatorio);

// También mostrar el recordatorio cuando cambie la selección, lo comento para mejor comidad, que el usuario deba dar click en el boton
// document.getElementById('diaSemana').addEventListener('change', mostrarRecordatorio);

// Mostrar el día actual al cargar la página
window.addEventListener('load', function() {
    const dias = ['domingo', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado'];
    const fecha = new Date();
    const diaActual = dias[fecha.getDay()];
    
    document.getElementById('diaSemana').value = diaActual;
    mostrarRecordatorio();
});

