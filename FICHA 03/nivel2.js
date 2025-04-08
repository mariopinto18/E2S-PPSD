// FICHA 03 - NIVEL 2

//----------------------------------------------
// EX1
// ---------------------------------------------

function nameNormalized(completeName) {
 // recebe um nome e normaliza-o, devolvendo o primeiro e ultimo nome
 //e as iniciais dos nomes intermédios   
    if (completeName.includes(" ") == false) {
        return null
    }

    let pos1 = completeName.indexOf(" ")  // posição do 1º espaço 
    if (pos1 == null) return null

    let pos2 = completeName.lastIndexOf(" ")  // procurar posição ultimo espaço
    if (pos2 == null) return null

    let nameInitials = completeName.slice(0,pos1+1) // primeiro nome
    // Iniciais dos nomes do meio
    for (let i= pos1; i< pos2; i++) {
        if (completeName[i] == " ")
            nameInitials+= completeName[i+1]+ '. '
    }
    
    nameInitials+=  completeName.slice(pos2+1, completeName.length)  // Ultimo nome
    return nameInitials

}

nome = prompt("Indique um nome:")
console.log(nameNormalized(nome))



//-------------------------------------------------------
// EX2
//--------------------------------------------------------~/*

function numberOccur(text, textFind) {
 
    let cont =0
    let position= 0
    let pos = text.indexOf(textFind, 0)
    while  (pos!= -1) {
        cont++
        position= pos+1
        pos= text.indexOf(textFind, position)
    }
    return cont
}


let text = prompt("Insira um texto: ")
let textFind = prompt("Indique uma palavra para pesquisa no texto: ")
let number = numberOccur(text, textFind)
alert(`Nº de ocorrências: ${number}`)


//-------------------------------------------------
// EX 3
// ------------------------------------------------



function showInverse(text) {
  lista = text.split(" ")                  // divide pelo espaço para uma lista
  textoInv= lista.reverse().join(" ")     // ordena a lista por ordem inversa
  console.log(textoInv)                   // e junta as posições da lista numa string

}

// le texto e invoca a função showInversa
text= prompt("Indique um texto:")
showInverse(text)