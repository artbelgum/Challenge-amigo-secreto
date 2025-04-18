// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Creación de array de lista de amigos
let amigos = [];

/*Función para validar que el campo no esté vacío */
function validarCampo() {
    let amigo = document.getElementById("amigo").value.trim(); //trim Elimina espacios en blanco
    if (amigo === "") {
      alert("Por favor inserte un nombre");
    } else {
      agregarAmigo();
    }
  }
/* Función para capturar el valor del campo de entrada agregar amigos */
function agregarAmigo() {
  let amigo = document.getElementById("amigo").value.trim(); // Obtener el nombre y eliminar espacios

  // Verificar si el nombre ya existe en la lista con .includes función en vez de for 
  if (amigos.includes(amigo)) {
      alert("Este nombre ya está en la lista. Por favor, ingrese un nombre diferente.");
  } else {
      amigos.push(amigo); // Agregar el nuevo amigo
      document.getElementById("amigo").value = ""; // Limpiar el campo de entrada
      console.log(amigos); // Mostrar la lista en la consola
      mostrarResultado(); // Actualizar la visualización
  }
}

/* Función para limpiar el array */
function limpiarArray() {
  amigos = [];
  mostrarResultado();
}

/* Función que recorra el array amigos y 
agregue cada nombre como un elemento <li> dentro de una lista HTML. */
function mostrarResultado() {
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = ""; // Limpiar la lista existente
  let listaAmigos = amigos.sort(); // Ordenar la lista de amigos
  // Usar un bucle for para iterar sobre el array
  for (let i = 0; i < listaAmigos.length; i++) {
    let li = document.createElement("li"); // Crear un nuevo elemento <li>
    li.textContent = listaAmigos[i]; // Asignar el nombre del amigo al <li>
    resultado.appendChild(li); // Agregar el <li> al elemento resultado
  }
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
    }
}
