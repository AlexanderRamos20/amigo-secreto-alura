//Variables 
let nombreAmigo = null;
let listaAmigos = [];

function obtenerNombreAmigo () {
    nombreAmigo = document.getElementById("amigo").value;
    return nombreAmigo;
}

function validadorStringVacio (nombreIngresado){
    let resultado = document.getElementById("resultado");
    let nombreAmigo = document.getElementById("amigo");
    resultado.innerHTML = ``;
    if (nombreIngresado === '') {
    resultado.innerHTML = `Favor ingrese un nombre válido`;
    resultado.style.color = "red";
    nombreAmigo.value = ''} else {
    resultado.style.color = ''
    return nombreIngresado !== '';}
};

function agregarAmigo (){
    listaAmigos.push(obtenerNombreAmigo().trim());
}

function limpiarEntrada(){
    document.getElementById("amigo").value = "";
}

function main () {
    let nuevoAmigo = obtenerNombreAmigo().trim();
    if (validadorStringVacio(nuevoAmigo)) {
        agregarAmigo();
        limpiarEntrada();
        mostrarAmigos();
    }
}

function mostrarAmigos () {
    let amigosMostrados  = document.getElementById("listaAmigos");
    let tituloListaAmigos = document.getElementById("tituloListaAmigos");
    tituloListaAmigos.innerHTML = "Amigos agregados";
    tituloListaAmigos.style.textDecoration = "underline";
    amigosMostrados.innerHTML = "";
    for (let i= 0; listaAmigos.length > i; i++) {
        amigosMostrados.innerHTML += `<li>${listaAmigos[i]}</li>`;
    }
}

document.getElementById("amigo").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        main();
    }
});

function sortearAmigo (){
    let numeroRandomico = Math.floor(Math.random()*listaAmigos.length);
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ``;
    if (listaAmigos.length == 0) {
        return resultado.innerHTML = `No haz agregado amigos para sortear`} else { 
            resultado.innerHTML = `Tu amigo secreto es: ${listaAmigos[numeroRandomico]}`
        }
}
function reiniciar () {
    listaAmigos = [] ;
    let tituloListaAmigos = document.getElementById("tituloListaAmigos");
    tituloListaAmigos.innerHTML = "";
    let amigosMostrados  = document.getElementById("listaAmigos");
    amigosMostrados.innerHTML = "";
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ``;
}