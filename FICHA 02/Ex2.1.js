// Jogo Adivinha o Número

const maxTentativas=10
const limMin=1
const limMax = 50

let opcao= "S"
do {
    let numeroRandom = parseInt(limMin + Math.random()*limMax);

    let palpite=0
    let tentativas =0 
    do {   // Jogo - enquanto o utilizador não acertar ou não esgotar as 10 tentativas 
        tentativas+=1
        palpite = +prompt(`Indique o seu ${tentativas}º  palpite:`)
        
        if (palpite< numeroRandom){
            alert("O número a adivinhar é MAIOR")
        }
        else if (palpite > numeroRandom) {
            alert("O número a adivinhar é  MENOR")
        }
    } while (palpite != numeroRandom && tentativas<maxTentativas)

    if(numeroRandom == palpite) {    // testar se saiu do jogo por  que acertou no nº
        alert(`Parabéns!!! Acertou em ${tentativas} tentativas!!`)
    }
    else{
        alert("Esgotou as 10 tentativas! :( ")
    }

    opcao= prompt("Novo Jogo(S/N)? ")
}
 while (opcao.toUpperCase() == "S");
