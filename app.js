//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver
//  a lógica para resolver o problema.
let amigos = [];
let input = document.getElementById("amigo");

function adicionarAmigo() {
  let amigo = document.querySelector("input").value;
  if (amigo !== "") {
    amigos.push(amigo);
    console.log(amigos);
  } else {
    alert("Por favor, insira um nome.");
  }
  limparCampo();
  atualizarListaAmigos(amigos);
}
input.addEventListener("keypress", function (event) {
  if (event.keyCode == 13) {
    adicionarAmigo();
  }
});
function atualizarListaAmigos(amigos) {
  let amigo = "";
  for (var i = 0; i < amigos.length; i++) {
    amigo += "<li>" + amigos[i] + "</li>";
  }
  let listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = amigo;
}
function sortearAmigo(amigos) {
  let amigo = "";
  if (amigos.length !== 0) {
    let n = Math.floor(Math.random() * amigos.length);
    console.log(n);
    amigo += "<li>" + amigos[n] + "</li>";
  } else {
    alert("Por favor, insira seus amigos na lista.");
  }
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = amigo;
}

function limparCampo() {
  amigo = document.querySelector("input");
  amigo.value = "";
}
