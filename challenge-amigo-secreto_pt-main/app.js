
let amigos = []

function adicionarAmigo () {
    let inputAmigo = document.getElementById("amigo");
    let nome = inputAmigo.value.trim();
    if (nome !== "") {
        amigos.push(nome); 
        atualizarLista ();
    } 
    inputAmigo.value = ""; 
    if (nome == "") {
        alert("Digite um nome válido");
    }
}  
function atualizarLista () {
    let listaAmigos = document.getElementById ("listaAmigos");
    listaAmigos.innerHTML = ""; 
    amigos.forEach(function(amigo) { 
        const li = document.createElement("li"); 
        li.textContent = amigo; 
        listaAmigos.appendChild(li);
    })
} 

function sortearAmigo () {
    if (amigos.length === 0) {
        document.getElementById("resultado").textContent = "Adicione amigos para sortear";
        return
    }
let indiceSorteado = Math.floor(Math.random()*amigos.length);
let amigoSorteado = amigos[indiceSorteado]; 
    document.getElementById("resultado").textContent = `O amigo sorteado é ${amigoSorteado}`;
} 
