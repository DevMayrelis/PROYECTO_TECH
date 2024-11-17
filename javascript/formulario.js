const API_URL = "http://localhost:3000/usuarios";
let usuarioSeleccionadoId = null;

//Leer los datos de los usuarios y actualizar tabla
function obtenerUsuarios() {
  fetch(API_URL)
    .then(function(response) {
      return response.json();
    })
    .then(function(usuarios) {
      actualizarTabla(usuarios);
    });
}

// Crear usuario
function crearUsuario() {
  const usuario = obtenerDatosUsuarios();
  
  fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(usuario)
  })
  .then(function(response) {
    if (response.ok) {
      obtenerUsuarios();
      limpiarDatos();
    } else {
      alert("Error al crear usuario");
    }
  });
}



// Obtener datos del formulario
function obtenerDatosUsuarios() {
  return {
    nombre: document.getElementById("nombre").value,
    apellido: document.getElementById("apellido").value,
    eps: document.getElementById("eps").value,
    edad: parseInt(document.getElementById("edad").value),
    genero: document.querySelector('input[name="genero"]:checked').value,
    suscripcion: document.getElementById("suscripcion").checked ? "Sí" : "No"
  };
}


// Actualizar usuario
function actualizarUsuario(id) {
  const usuario = obtenerDatosUsuarios();
  
  fetch(API_URL + '/' + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(usuario)
  })
  .then(function(response) {
    if (response.ok) {
      obtenerUsuarios();
      limpiarDatos();
      document.getElementById("Editar").disabled = true;
      usuarioSeleccionadoId = null;
    } else {
      alert("Error al actualizar usuario");
    }
  });
}


// Actualizar la tabla de usuarios
function actualizarTabla(usuarios) {
  const tabla = document.getElementById("usuariosTabla");
  tabla.innerHTML = "";

  usuarios.forEach(function(usuario) {
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${usuario.nombre}</td>
      <td>${usuario.apellido}</td>
      <td>${usuario.eps}</td>
      <td>${usuario.edad}</td>
      <td>${usuario.genero}</td>
      <td>${usuario.suscripcion}</td>
      <td>
        <button onclick="editarUsuario('${usuario._id}')" class="btn btn-secondary">Editar</button>
        <button onclick="eliminarUsuario('${usuario._id}')" class="btn btn-danger">Eliminar</button>
      </td>
    `;
    tabla.appendChild(fila);
  });
}


// Cargar los datos del usuario en el formulario para editar
function editarUsuario(id) {
  fetch(API_URL + '/' + id)
    .then(function(response) {
      return response.json();
    })
    .then(function(usuario) {
      document.getElementById("nombre").value = usuario.nombre;
      document.getElementById("apellido").value = usuario.apellido;
      document.getElementById("eps").value = usuario.eps;
      document.getElementById("edad").value = usuario.edad;
      document.getElementById(usuario.genero.toLowerCase()).checked = true;
      document.getElementById("suscripcion").checked = usuario.suscripcion === "Sí";

      usuarioSeleccionadoId = id; // Guardar ID del usuario seleccionado
      document.getElementById("confirmarEdicionBtn").disabled = false;
    });
}


// Confirmar edición
function confirmarEdicion() {
  if (usuarioSeleccionadoId) {
    actualizarUsuario(usuarioSeleccionadoId);
  }
}


// Cargar usuarios al inicio
document.addEventListener("DOMContentLoaded", obtenerUsuarios);

// Función limpiar formulario
function limpiarDatos() {
    // Limpiar todos los campos
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("eps").selectedIndex = 0;
    document.getElementById("edad").value = "";
    document.getElementById("masculino").checked = false;
    document.getElementById("femenino").checked = false;
    document.getElementById("suscripcion").checked = false;

    // Limpiar el resultado mostrado
    document.getElementById("respuesta").innerText = "";}
