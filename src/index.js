let nomeHeroi ="";
let nivelHeroi = 0;


const ps = require("prompt-sync")
const prompt = ps();

nivelHeroi = Math.floor(Math.random(0) * 20001);
//Gera um número aleatório e guarda na variável nivelHeroi +
//Utilizei esse comando apenas para simular diferentes resultados sem que tenha que ficar... +
//inserindo valores manualmente na variável.

nomeHeroi = prompt("Digite seu nome de Herói:");

while(nomeHeroi === ""){
    console.log("Você precisa de um nome de herói para trilhar o caminho da vitória!");
    nomeHeroi = prompt("Por favor, digite o nome do seu herói:");
    //Impossível seguir sem um nome de herói
}
console.log("Seja bem vindo, " +nomeHeroi+ "!")


switch(nivelHeroi >=0){
  case nivelHeroi < 1000:
    console.log("O herói de nome " +nomeHeroi+
        " está no nível ferro");
  break
  case nivelHeroi >= 1001 && nivelHeroi <= 2000:
    console.log("O herói de nome " +nomeHeroi+
        " está no nivel bronze "+nivelHeroi);
  break
  case nivelHeroi >= 2001 && nivelHeroi <= 5000:
    console.log("O herói de nome " +nomeHeroi+
        " está no nivel prata");
  break
  case nivelHeroi >= 5001 && nivelHeroi <= 7000:
    console.log("O herói de nome " +nomeHeroi+
        " está no nivel ouro");
  break
  case nivelHeroi >= 7001 && nivelHeroi <= 8000:
    console.log("O herói de nome " +nomeHeroi+
        " está no nivel platina");
  break
  case nivelHeroi >= 8001 && nivelHeroi <= 9000:
    console.log("O herói de nome " +nomeHeroi+
        " está no nivel ascendente");
  break
  case nivelHeroi >= 9001 && nivelHeroi <= 10000:
    console.log("O herói de nome " +nomeHeroi+
        " está no nivel imortal");
  break
  case nivelHeroi >= 10001:
    console.log("O herói de nome " +nomeHeroi+
        " está no nivel radiante");
  break
}