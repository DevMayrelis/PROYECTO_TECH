//Funcion 
function procesa() {
    // Variables locales: obteniendo los valores de los campos por ID
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let eps = document.getElementById("eps").value;
    let edad = document.getElementById("edad").value;
    let genero = document.querySelector('input[name="genero"]:checked') ? document.querySelector('input[name="genero"]:checked').value : "No seleccionado";
    let suscripcion = document.getElementById("suscripcion").checked ? "Sí" : "No";

    // Mostrar los valores procesados en el div de resultado
    document.getElementById("respuesta").innerText = 
        "Nombre: " + nombre + "\n" +
        "Apellido: " + apellido + "\n" +
        "EPS: " + eps + "\n" +
        "Edad: " + edad + "\n" +
        "Rango: " + procesarEdad(edad) + "\n" +
        "Género: " + genero + "\n" +
        "Términos: " + suscripcion;
}

function procesarEdad(edad) {
    if(edad > 1 && edad < 15) {
        return "Primera infancia";
    } else if(edad >= 15 && edad < 45) {
        return "Cotizante";
    } else if(edad >= 45 && edad < 70) {
        return "Adulto mayor";
    } else if(edad >= 70) {
        return "No aplica";
    }
}

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
    document.getElementById("respuesta").innerText = "";
}
