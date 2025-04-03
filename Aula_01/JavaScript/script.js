function conversor() {
    let dolares = prompt("Valor arrecadado foi de US$: ");           let reaisNumero = 5.70;
    
    //precisei consultar o IA nesta parte para entender uma forma de acrester as pontuações
    let dolaresNumero = Number(dolares.replace('.', '').replace(',', '.')); 

    // esta soma de minha elaboração, pois o pouco que o IA me ajudou dei divergencia em outras coisas.
   let soma = dolaresNumero * reaisNumero;
    
  // Aqui Precisei de uma pequena consulta também
    
    let dolaresFormatado = dolaresNumero.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    let reaisFormatado = soma.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    // resultado da minha operação
    alert("Valor arrecadado foi de US$ " + dolaresFormatado + " que equivale a R$ " + reaisFormatado);
  }

       
      
      
