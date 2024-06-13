// Selecciona los elementos necesarios
let incognitoUsuario = document.querySelector('.incognito__usuario');
let incognitoPc = document.querySelector('.incognito__pc');
const mensaje = document.querySelector('.mensaje');
const opciones = document.querySelector('.opciones');

const piedra = document.querySelector('.piedra');
const papel = document.querySelector('.papel');
const tijera = document.querySelector('.tijera');

// Función para obtener la elección aleatoria de la PC
const opcionPcAleatoria = () => {
  const opciones = ['piedra', 'papel', 'tijera'];
  let indice = Math.floor(Math.random() * opciones.length);
  return opciones[indice];
};

// Función para manejar la elección del usuario
function opcionUsuario(e) {
  if (e.target.classList.contains('piedra')) {
    eleccionUsuario = 'piedra';
  } else if (e.target.classList.contains('papel')) {
    eleccionUsuario = 'papel';
  } else if (e.target.classList.contains('tijera')) {
    eleccionUsuario = 'tijera';
  }

  reemplazar();
}

// Función para reemplazar la imagen y comparar resultados
function reemplazar() {
  // Reemplazar la imagen del usuario
  const clonUsuario = document.querySelector(`.${eleccionUsuario}`).cloneNode(true);
  incognitoUsuario.replaceWith(clonUsuario);
  incognitoUsuario = clonUsuario;

  // Obtener y reemplazar la imagen de la PC
  const eleccionPc = opcionPcAleatoria();
  const clonPc = document.querySelector(`.${eleccionPc}`).cloneNode(true);
  incognitoPc.replaceWith(clonPc);
  incognitoPc = clonPc;

  // Comparar resultados basados en las clases
  comparResultado(incognitoUsuario, incognitoPc);
}

// Función para comparar el resultado basado en las clases de los nodos
function comparResultado(incognitoUsuario, incognitoPc) {
  const claseUsuario = incognitoUsuario.className;
  const clasePc = incognitoPc.className;

  console.log(claseUsuario, clasePc);

  if (claseUsuario.includes(clasePc)) {
    mensaje.textContent = 'empate';
    console.log('empate');
  } else if (
    (claseUsuario.includes('piedra') && clasePc.includes('tijera')) ||
    (claseUsuario.includes('papel') && clasePc.includes('piedra')) ||
    (claseUsuario.includes('tijera') && clasePc.includes('papel'))
  ) {
    mensaje.textContent = 'ganaste';
    console.log('ganaste');
  } else {
    mensaje.textContent = 'perdiste';
    console.log('perdiste');
  }
}

// Agregar el event listener a las opciones
opciones.addEventListener('click', opcionUsuario);

// Variable para almacenar la elección del usuario
let eleccionUsuario = '';