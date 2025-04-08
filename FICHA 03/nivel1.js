//FICHA 03 - STRINGS

// -------------------------------------------
// EX1
// -------------------------------------------


function showStates() {
// função que lê um texto e imprime o número de palavras e caracteres
   let text = prompt("Texto: ")

   let spaces =0
   for (let i=0; i< text.length; i++) {   //percorrer TODAS as posições /caracteres do texto
    if (text.charAt(i) == ' ')    // SE caracter é um espaço
        spaces++            // soma o contador
   }
    console.log(`O texto inclui ${text.length} caracteres e ${spaces+1} palavras `)
}
//showStates()


//--------------------------------------
// EX 2
//--------------------------------------
function verifyCapicua(word) {
// função que recebe umaa palavra e verifica se a mesma é capicua ou não
    let reverseWord = ''
    for (let i = word.length-1;i >=0; i--) {
        reverseWord+= word[i]
    }
    if (word == reverseWord) {
        alert(`a palavra ${word} é capicua!`)
    }
    else {
        alert(`a palavra ${word} não é capicua!`)
    }
}

//verifyCapicua("asa")     // capicua
//verifyCapicua("teste")   // Não capicua
//verifyCapicua('osso')    // Capicua


//-----------------------------------------------
// EX3
// ----------------------------------------------
// Recebe um nome completo e imprime na consola o primeiro e +ultimo nomes
function showShortName(completeName) {
    if (completeName.includes(" ") == false) {
        return
    }
    let pos1 = completeName.indexOf(" ")
    let pos2 = completeName.lastIndexOf(" ")
    let nomeAbr= completeName.slice(0,pos1) + 
                 completeName.slice(pos2, completeName.length)
    console.log(nomeAbr)

}

showShortName('Carlos Manuel Cardoso Pereira')
showShortName('Carla Maria Andrade')

//-----------------------------------------------
// EX4
// ----------------------------------------------

// recebe um nome completo e imprime na consola o ultimo nome, primeiro nome
function showShortNameV2(completeName) {
    if (completeName.includes(" ") == false) {
        return
    }
    let pos1 = completeName.indexOf(" ")
    let pos2 = completeName.lastIndexOf(" ")
    let nomeAbr= completeName.slice(pos2+1, completeName.length) + 
            ", " + completeName.slice(0,pos1+1)
    console.log(nomeAbr)

}
showShortNameV2('Carlos Manuel Cardoso Pereira')
showShortNameV2('Carla Maria Andrade')
