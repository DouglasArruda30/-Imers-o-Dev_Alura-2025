function jogar() {
    let enigma = 1;
    while (enigma <= 3) {
      console.log("Enigmas: " + enigma);
  
    let escolhaPlayer = prompt("Nível " + enigma + ", descifre (1,2 ou 3)?");
      escolhaErrada = Math.floor(Math.random() * 3) + 1;
  
      if (escolhaPlayer == escolhaErrada) {
        alert("Você errou! Estude mais sobre enigmas antes de voltar!!!");
        enigma = 1000;
      } else {
        alert("Você completou o enigma! o resposta errada estava ao lado!!!");
      }
  
      enigma = enigma + 1;
    }
  
    if (enigma == 4) {
      alert("Você Completou o enigma! Parabéns!");
    }
  }
  