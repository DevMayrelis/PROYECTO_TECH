/*function procesarFormulario(){
    let nombre = parseFloat(document.getElementById("nombre").value);
    let apellido = parseFloat(document.getElementById("Apellido").value);
    let edad = parseFloat(document.getElementById("edad").value);

    let categoriaEdad = 0;

    if (edad > 1 && edad <=15) {
        categoriaEdad = "Primera infancia";
    } else if (edad > 15 && edad <=45){
        categoriaEdad = "Cotizante"
    } else if (edad > 45 && edad < 70){
        categoriaEdad = "Adulto mayor"
    } else {
        categoriaEdad = "No aplica"
    }

    document.getElementById("resultado").innerText = informacion;
    nombre
    
}
*/
function procesarFormulario() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("Apellido").value;
    let edad = parseFloat(document.getElementById("edad").value);

    let categoriaEdad;

    if (edad > 1 && edad <= 15) {
        categoriaEdad = "Primera infancia";
    } else if (edad > 15 && edad <= 45) {
        categoriaEdad = "Cotizante";
    } else if (edad > 45 && edad < 70) {
        categoriaEdad = "Adulto mayor";
    } else {
        categoriaEdad = "No aplica";
    }

    let informacion = "Estimado usuario "+nombre+" "+apellido+" su categoria es "+categoriaEdad;

    document.getElementById("informacion").innerText = informacion;
}
