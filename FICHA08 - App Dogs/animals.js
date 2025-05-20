

let dogs = [];  // array de objetos

export function init() {
    let dog = {raca: 'Border Collie', imagem: 'imagens\\BorderCollie.jpg', link: '' }
    dogs.push(dog)

    dog = {raca: 'Bulldoge Frances', imagem: 'imagens\\BulldogeFrances.jpg', link: '' }
    dogs.push(dog)
    
    dog = {raca: 'Bull Terrier', imagem: 'imagens\\BullTerrier.jpg', link: '' }
    dogs.push(dog)
    
    dog = {raca: 'Doberman', imagem: 'imagens\\Doberman.jpg', link: '' }
    dogs.push(dog)

    dog = {raca: 'Golden Retriever', imagem: 'imagens\\GoldenRetriever.jpg', link: '' }
    dogs.push(dog)

    dog = {raca: 'Pastor Alemão', imagem: 'imagens\\PastorAlemao.jpg', link: '' }
    dogs.push(dog)

    dog = {raca: 'Pastor Australiano', imagem: 'imagens\\PastorAustraliano.jpg', link: '' }
    dogs.push(dog)

    return dogs;

}