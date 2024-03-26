alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 5;
let chute;
let tentativas = 1;

// enquanto o chute não for igual ao n secreto
while ( chute != numeroSecreto ) {
    chute = prompt('Escolha um número entre 1 e 10:');
    if (chute == numeroSecreto) {
        break;
        
    } else {
            //  console.log('Que pena, você errou.')
            // alert('Que pena, você errou :(')
        if (chute > numeroSecreto){
            alert(`O número secreto é menor que  ${chute}`);
        } else{
            alert(`O número secreto é maior que ${chute}`);
        }
        tentativas++; 
        
    }
}

if(tentativas > 1){
    alert(`Isso ai! Você descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativas`);
}else {
    alert(`Isso ai! Você descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativa`);
}
