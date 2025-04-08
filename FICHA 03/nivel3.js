// FICHA 03 - NIVEL 3

//----------------------------------------------
// EX1
// ---------------------------------------------

// Recebe um número indefinido de argumentos (cidades) e imprime a quantidade de cidades recebidas
function numCities1(...cidades) {
   console.log(`Nº de cidades recebidas como argumento: ${cidades.length}`) 
}
numCities1("Porto", "Madrid", "Barcelona", "Paris", "Londres")



//-----------------------------------
// EX2
// ----------------------------------
// Recebe um numro indefinido de cidades e imprime os nomes
function numCities2(...cidades) {
    let resultado = ""
    for (let cidade of cidades) {
        resultado+= cidade + " "
    }
    console.log(`Cidades recebidas como argumento: ${resultado}`) 
}
numCities2("Porto", "Madrid", "Barcelona", "Paris", "Londres")



//----------------------------------------
// EX3
//------------------------------------------------
let padindromo = (snumber) => {
    if (snumber[0] == snumber[2]) {
        return true
    }   
    else
    {
        return false
    }
}

numero= +prompt("Digite um número entre 100 e 999:")
if (numero >=100 && numero <1000) {
    console.log(padindromo(numero.toString()))
}

