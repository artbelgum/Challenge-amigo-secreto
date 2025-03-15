// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Creación de array de lista de amigos
let amigos = [];

/*Función para validar que el campo no esté vacío */
function validarCampo() {
    let amigo = document.getElementById("amigo").value;
    if (amigo === "") {
      alert("Por favor inserte un nombre");
    } else {
      agregarAmigo();
    }
  }
/* Capturar el valor del campo de entrada */
function agregarAmigo() {
  let amigo = document.getElementById("amigo").value;
  amigos.push(amigo);
  document.getElementById("amigo").value = "";
  console.log(amigos);
}

/* Función para limpiar el array */
function limpiarArray() {
  amigos = [];
  mostrarResultado();
}

/* Función para mostrar el resultado */
function mostrarResultado() {
  let resultado = document.getElementById("resultado");
  let amigosOrdenados = amigos.sort();
  resultado.innerHTML = amigosOrdenados.join(", ");
  for (let i = 0; i < amigosOrdenados.length; i++) {
    if (i === amigosOrdenados.length - 1) {
      resultado.innerHTML += ".";
    } else {
      resultado.innerHTML += ", ";
    }
  }
}

/* Función para escoger un amigo aleatorio */
function escogerAmigo() {
    if (amigos.length === 0) {
      alert("Por favor inserte un nombre");
      return;
    }
    else {
      amigoAleatorio();
    }
  let amigoAleatorio = amigos[Math.floor(Math.random() * amigos.length)];
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = amigoAleatorio;
}
