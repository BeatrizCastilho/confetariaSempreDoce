// Criar a lista de imagens
let imagens = [
    'assets/img/brigadeiro.jpg',
    'assets/img/redvelvet.webp',
    'assets/img/TortaMilFolhas3.jpg'
]

let indiceAtualListaImagens = 0 

function exibirImagem() {
    let imagemCarrosel = document.getElementById('img-carrosel')
    imagemCarrosel.src = imagens[indiceAtualListaImagens]
}

//Lógica para exibir as imagens a cada 4segundos 
setInterval (function() {
    exibirImagem()
    indiceAtualListaImagens++

    if (indiceAtualListaImagens > 2) {
        indiceAtualListaImagens= 0
    }
}, 4000);

  exibirImagem()
 indiceAtualListaImagens++


