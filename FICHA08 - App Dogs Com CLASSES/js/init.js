// Importar classe Dog
import DogModel from "./models/DogModel.js";

if (!localStorage.dogs) { 
    initdata();
}

// INJETAR DADOS CRIADOS A PARTIR DE INSTANCIAS DA CLASSE DOG
// NO FINAL GUARDA NA LOCALSTORAGE
function initdata() {
    let dogs=[];   
    
    let dog = new DogModel('Border Collie','img\\BorderCollie.jpg', 'https://pt.wikipedia.org/wiki/Border_collie' );
    dogs.push(dog)

    dog = new DogModel('Bulldoge Frances', 'img\\BulldogeFrances.jpg', 'https://pt.wikipedia.org/wiki/Buldogue_franc%C3%AAs' );
    dogs.push(dog)
    
    dog = new DogModel('Bull Terrier', 'img\\BullTerrier.jpg', 'https://pt.wikipedia.org/wiki/Bull_terrier' );
    dogs.push(dog)
    
    dog = new DogModel('Doberman', 'img\\Doberman.jpg', 'https://pt.wikipedia.org/wiki/Dobermann' );
    dogs.push(dog)

    dog = new DogModel('Golden Retriever', 'img\\GoldenRetriever.jpg',  'https://pt.wikipedia.org/wiki/Golden_retriever' );
    dogs.push(dog)

    dog = new DogModel('Pastor Alemão', 'img\\PastorAlemao.jpg', 'https://pt.wikipedia.org/wiki/Pastor-alem%C3%A3o' );
    dogs.push(dog)

    dog = new DogModel('Pastor Australiano',  'img\\PastorAustraliano.jpg', 'https://pt.wikipedia.org/wiki/Pastor-australiano' );
    dogs.push(dog)
    
    
    // Poderia guardar o array de objetos diretamente na localStorage, com o código abaixo
    localStorage.setItem("dogs", JSON.stringify(dogs));

}