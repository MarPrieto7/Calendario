
//calendario
const frasesMotivadoras = [
  "¡Si puedes soñarlo, puedes hacerlo!",
  "La ilusión alimenta nuestros sueños; la alegría y el apoyo, son las alas que nos llevan a cumplirlos.",
  "En cada sonrisa hay una pizca de alegría, en cada desafío reside la fuerza y en la constancia de tus sueños florece la ilusión y el tesón.",
  "Cada pequeño paso hacia adelante te acerca un poco más a la realización de tus sueños más grandes.",
  "El verdadero éxito es encontrar satisfacción en cada paso que das hacia adelante.",
  "Lo importante no es llegar a la cima, sino disfrutar el camino. TE DESEO UNA FELIZ NAVIDAD.!!🌊"
];

let diaVisible = 0;

function mostrarFrase(dia) {
  const modal = document.getElementById('modal');
  const fraseMotivadoraModal = document.getElementById('frase-motivadora-modal');

  if (diaVisible !== dia) {
    fraseMotivadoraModal.textContent = frasesMotivadoras[dia - 1];
    diaVisible = dia;
  }

  modal.style.display = 'block';
}

function ocultarFrase() {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
}

// Función para pedir el nombre antes de cargar la página
function pedirNombre() {
  const nombre = prompt("Por favor, ingresa tu nombre:");
  if (nombre) {
    alert(`¡Hola ${nombre}! Bienvenido al Calendario de Adviento`);
  } else {
    alert("Por favor, ingresa un nombre válido para continuar.");
    pedirNombre(); // Vuelve a pedir el nombre si no se ingresó ninguno
  }
}

// Llama a la función al cargar la página
window.onload = pedirNombre;
