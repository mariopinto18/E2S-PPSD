// Importa modulo init.js
import * as data from "../init.js";


// declara array employees
let rooms = []
let quizzRoom= []
let pontos = 0
// invoca função data (módulo data.js) para preencher automaticamente array de objetos
rooms = data.initEscapeRooms();   // carrega os escaperooms

quizzRoom= data.initQuizz();   // carrega as perguntas do quizz 1

// rebnderizar os níveis de diversos Escape Rooms
renderCatalog(rooms);




// EXIBIR O CATÁLOGO DE CARDS  com os objetos Dog
function renderCatalog() {
    let result = "";
    // percorre todas as instancias de escapeRooms
    for (const room of rooms) {
        result += generateCard(room);    
    }

    // Atribuição de todos os cards gerados ao elemento com id myCatalog
    document.querySelector("#myCatalog").innerHTML = result;

    // CLICAR NO BOTÃO JOGAR ESCAPE ROOM
    const btnsEscapeRoom = document.getElementsByClassName("view");
    for (const button of btnsEscapeRoom) {
        button.addEventListener("click", () => {
            // Renderizar o quizz associado a cada Escape Room
            renderQuizz(quizzRoom);
        });
    }
}

// GERAR CARD de cada Escape Room
function generateCard(room) {

let newBtnClass=" "
if (room.solved == "true") {
    newBtnClass = " disabled "
}
//console.log("==", newclass)
let result = ` 
      <div class="col">
          <div class="card  bg-light mb-3" style="widht: 300px; ">
              <img src="${room.image}" class="card-img-top" style="height: 300px;">
              <div class="card-body">
                  <h5 class="card-title">${room.title}</h5>
                  <p class="card-text">LEVEL: ${room.level}</p>
                  <button id="${room.id}"  class="btn btn-warning ${newBtnClass} view">Jogar Escape Room</button>
              </div>    
          </div>
      </div>
      `;

return result;
}


// Fazer um Quizz do Escape Room
function renderQuizz(quizzRoom) {
   
 $("#modalquizz").modal('show');

  renderNewQuestion(quizzRoom)
  document.querySelector("#seguinte").addEventListener('click', function() {
        renderNewQuestion(quizzRoom)    // NOVA QUESTÃO
  })


  document.querySelector("#close").addEventListener('click', function() {
 //   alert(pontos)
     $("#modalquizz").modal('hide');   // FECHA MODAL
    renderPontos()
 })
}


function renderPontos() {

    $("#modalPontos").modal('show');
    document.getElementById('idPontos').innerHTML= `Conseguiste ${pontos} Pontos!`;
    
}


function renderNewQuestion(quizzRoom) {

    let num = parseInt(1+ Math.random()*4)

    document.getElementById('question').innerHTML = quizzRoom[num].questao;
    document.querySelector('#resp1').innerHTML    = quizzRoom[num].resposta1; 
    document.querySelector('#resp2').innerHTML    = quizzRoom[num].resposta2; 
    document.querySelector('#resp3').innerHTML    = quizzRoom[num].resposta3; 
    document.querySelector('#resp4').innerHTML    = quizzRoom[num].resposta4;

    document.querySelector('#resp1').addEventListener('click', () => {
        testarResposta(quizzRoom[num].resposta1,quizzRoom[num].certa);
         return;
    })

    document.querySelector('#resp2').addEventListener('click', () => {
        testarResposta(quizzRoom[num].resposta2,quizzRoom[num].certa);
        return;

    })
    document.querySelector('#resp3').addEventListener('click', () => {
        testarResposta(quizzRoom[num].resposta3,quizzRoom[num].certa);
        return;

    })
    document.querySelector('#resp4').addEventListener('click', () => {
        testarResposta(quizzRoom[num].resposta4,quizzRoom[num].certa);
        return;

    })

}

function testarResposta(escolha, certa) {
    if (escolha == certa) {
        pontos+=1 
    }
   
}





