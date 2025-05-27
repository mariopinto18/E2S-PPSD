import * as Dog from "../models/DogModel.js";


let dogs = Dog.init();   // OBTER DADOS DA LOCALSTORAGE OU DEVOLVER UM ARRAY VAZIO


renderCatalog(Dog.getDogs());


// Renderizar o catálogo com o array de objetos
function renderCatalog(dogs = []) {

    let result ='';
    for (let dog of dogs) {

        result += `
        <div class = "col">
             <div class="card  bg-light mt-5 mx-3" style="widht: 200px; ">
                <img src=${dog.imagem} class="card-img-top" alt="imageDod" style="height: 300px;">
                <div class="card-body">
                    <h5 class="card-title">${dog.raca}</h5>
                    <a href=${dog.link} class="btn btn-primary">Ver Mais</a>
                </div>
            </div> 
        </div> 
        `;

    }
    // Atribuição de todos os cards gerados ao elemento com id myCatalog
    document.querySelector("#myCatalog").innerHTML = result;
 
}


// CLICK NO Button GUARDAR DADOS
document.querySelector("#btnSave").addEventListener('click', (event) => {

    Dog.saveData(Dog.getDogs());
});




document.querySelector("#btnGerir").addEventListener('click', (event) => {

    $('#dogsModal').modal('show');
    
    const myForm = document.getElementById("formGerir")
    myForm.addEventListener('submit', (event) => {
        event.preventDefault();
       
        let raca = document.getElementById('idRaca').value
        let imagem = document.getElementById('idImagem').value
        let link = document.getElementById('idLink').value
        let pathimagem = "img\\"+imagem;
        try {
            Dog.dogAdd(raca, pathimagem, link);
        }
        catch (error) {
          alert(error.message);
        }
             
        // RENDERIZA NOVAMENTE O CATALOGO
        renderCatalog(Dog.getDogs());
    })     // AddEventListener 

});   // EVENTO CLICK DO BUTTON btnGerir




  




