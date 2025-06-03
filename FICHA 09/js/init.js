import escapeRoomModel from "./models/escapeRoomModel.js";
import quizzModel from "./models/quizzModel.js";

let escapeRooms = [];    // array de objetos
let quizzRoom1 = []      // array de objetos do quizz



export function initEscapeRooms() {
  let room = new escapeRoomModel(1,
         "Licenciatura em Sáude Digital: Descobre a Licenciatura!",
         "./images/LSD1.JPG",
         "true",
         1);
  escapeRooms.push(room);

  room = new escapeRoomModel(2,
         "Licenciatura em Saúde Digital: Os temas que vais aprender!",
         "./images/LSD2.JPG",
         "false",
         2);
  escapeRooms.push(room)

  room = new escapeRoomModel(3,
        "Licenciatura em Saúde Digital: Tendências de evolução",
        "./images/LSD3.JPG",
        "false",
        3);
  escapeRooms.push(room)

  room = new escapeRoomModel(4,
        "Licenciatura em Saúde Digital: O mercado à tua espera!",
        "./images/LSD4.JPG",
        "false",
        4);
  escapeRooms.push(room)
  return escapeRooms; 

}



export function initQuizz() {

  let question  = new quizzModel(1,
    "Em que escola funciona a LSD?",
    "Escola Superior de Saúde",
    "Escola de Enfermagem",
    "Escola Superior do Desporto",
    "Escola Superior de Educação",
    "Escola Superior de Saúde");
    quizzRoom1.push(question);

  question  = new quizzModel(2,
    "Quais os exames de acesso?",
      "Biologia e Geologia +  Matemática",
      "Biologia + Matemática",
      "Matemática + Português",
      "Biologia + Português",
      "Biologia e Geologia +  Matemática");
    quizzRoom1.push(question);


  question  = new quizzModel(3,
    "A licenciatura abarca as áreas de:",
    "Saúde e ciências informáticas",
    "Saúde e fisioterapia",
    "Saúde e Osteopatia",
    "Saúde e reabilitação com ciências informáticas",
    "Saúde e reabilitação com ciências informáticas");
  quizzRoom1.push(question);
    
  question  = new quizzModel(4,
    "A licenciatura recorre a tecnologias digitais, imerssivas, IA ou biosensores, para:",
    "Promover o desenvolvimento de aplicações",
    "Desenvolver conteúdos multimédia",
    "Promover a saúde, o tratamento e a reabilitação da doença",
    "Desenvolver competências na ãrea da patologia",
    "Promover a saúde, o tratamento e a reabilitação da doença");
  quizzRoom1.push(question);

  question  = new quizzModel(5,
    "A licenciatura permite-te escolher diversas disciplinas opcionais?",
    "Não",
    "Sim",
    "Apenas se quiseres",
    "Sim, opcionais de outros cursos",
    "Sim");
  quizzRoom1.push(question);
 
  return quizzRoom1
} 




