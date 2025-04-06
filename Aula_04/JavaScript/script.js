let ninja = ["", "", ""];
let viloes = ["", "", ""];

let forcaNinja = 0;
let forcaViloes = 0;

alert("Seus Ninjas são: " + ninja);

for (let i = 0; i < 3; i++) {
    let escolhaNinja = prompt("Digite o nome do seu Shinobe " + (i + 1));
    ninja[i] = escolhaNinja;

    // calcular a força de cada jogador, e depois somar pra saber a força do time
    forcaNinja += Math.floor(Math.random() * 10) + 1;
}
console.log("Seus ninjas contêm: " + ninja);

console.log("início Vilões: " + viloes);

let viloesPossiveis = ["Orochimaru", "Pain", "Madara Uchiha", "Kabuto", "Obito Uchiha"];
for (let i = 0; i < 3; i++) {
    let indiceAleatorio = Math.floor(Math.random() * 5);
    viloes[i] = viloesPossiveis[indiceAleatorio];

    // calcular força vilões
    forcaViloes += Math.floor(Math.random() * 10) + 1;
}
console.log("final de vilões: " + viloes);

// comparar
if (forcaNinja > forcaViloes) {
    alert("Seu time é muito forte! Você ganhou! Sua força foi " + forcaNinja);
} else {
    if (forcaNinja < forcaViloes) {
        alert("Seu time não foi forte suficiente!! O computador ganhou a luta com a força de " + forcaViloes);
    } else {
        alert("Os dois times têm a mesma força!!! Empate!");
    }
}

