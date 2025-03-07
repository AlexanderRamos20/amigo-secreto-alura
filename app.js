//Variables 
let nombreAmigo = null;
let listaAmigos = [];

function obtenerNombreAmigo () {
    nombreAmigo = document.getElementById("amigo").value;
    return nombreAmigo;
}

function validadorStringVacio (nombreIngresado){
    return nombreIngresado !== '';
};

function agregarAmigo (){
    listaAmigos.push(obtenerNombreAmigo());
}

function limpiarEntrada(){
    document.getElementById("amigo").value = "";
}

function main () {
    let nuevoAmigo = obtenerNombreAmigo();
    if (validadorStringVacio(nuevoAmigo)) {
        agregarAmigo();
        limpiarEntrada();
    }
}