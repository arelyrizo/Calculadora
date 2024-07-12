// Esto agrega a la pantalla el valor de la calculadora que toquemos
function agregar(valor) {
    document.getElementById(`pantalla`).value += valor
}

// Esta accion vacia la pantalla 
function borrar() {
    document.getElementById(`pantalla`).value = ""
}

// Esta accion tom el valor de la pantall ay ejejcuta los calculos 
function calcular() {
    const valorPantalla = document.getElementById(`pantalla`).value
    const resultado = eval(valorPantalla)
    document.getElementById(`pantalla`).value = resultado
}