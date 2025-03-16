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
/* Función para capturar el valor del campo de entrada agregar amigos */
function agregarAmigo() {
  let amigo = document.getElementById("amigo").value;
  amigos.push(amigo);
  document.getElementById("amigo").value = "";
  console.log(amigos);
  mostrarResultado();
}

/* Función para limpiar el array */
function limpiarArray() {
  amigos = [];
  mostrarResultado();
}

/* Función para función que recorra el array amigos y 
agregue cada nombre como un elemento <li> dentro de una lista HTML. */
function mostrarResultado() {
  let resultado = document.getElementById("resultado");
  let listaAmigos = amigos.sort();
  resultado.innerHTML = listaAmigos.join(", ") + ".";
}

/* Función para escoger un amigo aleatorio */
function escogerAmigo() {
    if (amigos.length === 0) {
        alert("Por favor inserte un nombre");
        return;
    } else {
        let amigoAleatorio = amigos[Math.floor(Math.random() * amigos.length)];
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = amigoAleatorio;
        mostrarResultado();
    }
}
