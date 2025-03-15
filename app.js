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

/* Función para mostrar el resultado */
function mostrarResultado() {
  let resultado = document.getElementById("resultado");
  let amigosOrdenados = amigos.sort();
  resultado.innerHTML = amigosOrdenados.join(", ");
}
