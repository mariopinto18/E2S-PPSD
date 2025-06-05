


function descarregarImagem(urlImagem, nomeFicheiro) {
    const link = document.createElement('a');
    link.href = urlImagem;
    link.download = nomeFicheiro;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}



document.getElementById('btn1').addEventListener('click', function(event) {
    // parametros: 'url do ficheiro a transferir', 'nome do ficheiro' 
    urlImagem = './img/badge1.png';
    nomeFicheiro = 'badge1.png';

    descarregarImagem(urlImagem, nomeFicheiro);

    // rebnderiza a imagem descarregada na página HTML
    document.getElementById('idImg').src = urlImagem;
});


