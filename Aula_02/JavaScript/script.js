function jogar() {
    idade = prompt("Digite a sua idade: ?");
  
    if (idade < 18) {
      alert("Você NÃO pode jogar!");
    }
  
    if (idade >= 18) {
      let jogador = prompt("1-PEDRA, 2-PAPEL, 3-TESOURA. ?");
  
      let computador = Math.floor(Math.random() * 3) + 1;
  
      //JOGADOR JOGAR PEDRA == COMPUTADOR JOGA PEDRA --> EMPATE
      //JOGADOR JOGA PAPEL == COMPUTADOR JOGA PAPEL --> EMPATE
      //JOGADOR JOGA TESOURA == COMPUTADOR JOGA TESOURA --> EMPATE
      if (jogador == computador) {
        alert("Empatou!!!");
      }
  
      if (jogador == 1) {
        if (computador == 2)
          //SE JOGADOR JOGA PEDRA == COMPUTADOR JOGA PAPEL --> COMPUTADOR VENCE
          alert("COMPUTADOR VENCEU!!!, USOU PAPEL! EMBRULHOU A PEDRA!");
      }
      if (jogador == 1) {
        if (computador == 3)
          //SE JOGADOR JOGA PEDRA == COMPUTADOR TESOURA --> COMPUTADOR PERDE
          alert("JOGADOR VENCEU!!!, USOU PEDRA! ESMAGOU A TESOURA!");
      }
  
      if (jogador == 3) {
        if (computador == 1)
          //SE JOGADOR JOGA TESOURA == COMPUTADOR PEDRA --> COMPUTADOR VENCE
          alert(
            "COMPUTADOR VENCEU!!!, USOU TESOURA o COMPUTADOR ESMAGOU A TESOURA!"
          );
      }
  
      if (jogador == 3) {
        if (computador == 2)
          //SE JOGADOR JOGA TESOURA == COMPUTADOR PAPEL --> JOGADOR VENCE
          alert("JOGADOR VENCEU!!!, USOU TESOURA CORTOU O PAPEL!");
      }
      if (jogador == 2) {
        if (computador == 1)
          //SE JOGADOR JOGA PAPEL == COMPUTADOR PEDRA -- JOGADOR VENCE
          alert("JOGADOR VENCEU!!!! USOU PAPEL E EMBRULHOU A PEDRA!");
      }
      if (jogador == 2) {
        if (computador == 3)
          // SE JOGADOR JOGA PAPEL == COMPUTADOR TESOURA --. COMPUTADOR VENCE
          alert("COMPUTADOR VENCEU!!! CORTOU O PAPEL ");
      }
  
      alert("computador" + computador);
    }
  }
  