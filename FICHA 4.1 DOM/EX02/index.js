/// JavaScript


document.getElementById('frmCardio').addEventListener('submit', function(event) {
   
    event.preventDefault();

    data =  document.getElementById("txtData").value
 
    tipoActiv =  document.getElementById("txtTipo").value

    distancia =  document.getElementById("txtDistancia").value

    tempo =  document.getElementById("txtTempo").value

    addTable(data, tipoActiv, distancia, tempo)
   
  

});


function addTable(data, tipoActiv, distancia, tempo) {

    table = document.querySelector('.tabela')

    table.innerHTML+= `
        <tr align="center" class = "data">
            <td> ${data}</td>
            <td>${tipoActiv}</td>
            <td>${distancia}</td>
            <td>${tempo}</td>
        </tr>
    `


}