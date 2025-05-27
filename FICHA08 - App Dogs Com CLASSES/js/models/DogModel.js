let dogs = [];

// Definir a classe Dog com os atributos do enunciado
export default class Dog {
    raca= '';
    imagem='';
    link= '';

    constructor(raca, imagem, link) {
        this.raca = raca;
        this.imagem= imagem;
        this.link = link;
    }
   
}   // classe 

// CARREGAR UTILIZADORES DA LOCALSTORAGE
export function init() {
  if (localStorage.dogs) { 
    dogs = JSON.parse(localStorage.getItem('dogs'))
  } else
  {
    dogs = []
  }
  return dogs
}


export function getDogs() {
  return dogs;
}


//  GUARDAR EXPLICITAMENTE NA LOCALSTORAGE
 export function saveData(dogs) {
       localStorage.setItem("dogs", JSON.stringify(dogs));
}


// ADICIONAR UM NOVO OBJETO
 export function dogAdd(raca, pathimagem, link) {
   if (dogs.some((element) => element.raca === raca)) {
      throw Error(`The race "${raca}" already exists!`);
   } 
   else {
      dogs.push(new Dog(raca, pathimagem, link));
      localStorage.setItem("dogs", JSON.stringify(dogs));
   }

}



