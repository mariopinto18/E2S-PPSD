

$(document).ready(function(e) {
    $('img[usemap]').rwdImageMaps(); 
//Allows imagemaps to be used in a responsive design 
// by recalculating the area coordinates 
// to match the actual image size on load and window.resize
});


function showDialog(text1, text2, text3, text4, img) {
    document.querySelector("#imgDialog").src = img;
 
    document.querySelector('#txtDialog1').textContent = text1
    document.querySelector('#txtDialog2').textContent = text2
    document.querySelector('#txtDialog3').textContent = text3
    document.querySelector('#txtDialog4').textContent = text4
    document.querySelector("#dlgContent").showModal();


}

showDialog('Entra neste laboratório de saúde Digital!', 
        'Explora o laboratório para descobrires mais sobre a Licenciatura em Saúde Digital!',
        'Boa Sorte... !!',
        '',
        img= './images/LSD.png');


// Função para fechar a Dialog / Modal
document.querySelector("#btnClosedlgContent").addEventListener("click", function () {
    document.querySelector("#dlgContent").close();
});







//  share rect - objetivos
document.getElementById('objetivos').addEventListener('click', function() {
    line1 = 'Conhecer a anatomia e fisiologia humana e determinantes de saúde e bem-estar'
    line2 = 'Analisar e integrar a evidência em cuidados de saúde e reabilitação'
    line3 = 'Desenvolver e implementar tecnologias baseadas em cuidados de saúde e reabilitação' 
    line4 = 'Reconhecer padrões e interoperabilidade de dados na área da saúde'
    img= './images/OBJETIVOS.png';
    showDialog(line1, line2, line3, line4, img)
    
});


// shape  circle - saídas profissionais
document.getElementById('saidasProf').addEventListener('click', function() {
    line1 = 'Serviço Nacional de Saúde'
    line2 = 'Oganizações no setor privado da área da saúde e da tecnologias',
    line3 = 'Organizações do setor social, como Misericórdias' 
    line4 = 'Outras Instituições, IPSS'
    img= './images/SAIDASPROF.png';
    showDialog(line1, line2, line3, line4, img)
});


// shape poly - Vídeo promo
document.getElementById('videoPromo').addEventListener('click', function() {
    DialogVideo()
});




//------------------ DIALOG BAG ----------------------
function DialogVideo() {
 
document.querySelector('#iframeVideo').src = "https://www.youtube.com/embed/l7Cy8XgKmCs?si=oirYHx9dU5nPIgMf"

/*
document.getElementById('iframeVideo').innerHTML= `
<iframe
 width="560" 
 height="315"
 src="https://www.youtube.com/embed/6zXVcHKuAjs?si=c54fLnhaWnurJCxm" 
 title="YouTube video player" 
 frameborder="0" 
 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
 </iframe>
 `;  */
 document.querySelector("#dlgVideo").showModal();
}

document.getElementById('btnClosedlgVideo').addEventListener('click', function() {
    document.querySelector('#dlgVideo').close();

});




