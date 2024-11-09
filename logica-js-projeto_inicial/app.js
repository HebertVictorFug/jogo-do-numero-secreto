alert('o primeiro passo para a sua mudanca');
let numeroMaximo = 5000
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute; 
let tentativas = 1

//enquanto chute não for igual ao N.S.
while(chute != numeroSecreto){
    chute = prompt(`escolha um numero entre 1 e ${numeroMaximo}`);
    // se chute for igual ao numero secreto
    if (chute == numeroSecreto){
        break
    } else {
        if (chute > numeroSecreto){
            alert(`o numero secreto é menor que ${chute}`);
        }else{
            alert(`o numero secreto é maior que ${chute}`);
        }
        //tentativas = tentativas + 1;
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

//if (tentativas > 1){
//   alert(`Isso ai! você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
//} else {
//    alert(`Isso ai! você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa`);
//}
   