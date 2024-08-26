function darkMode() {

    let minhaImagem = document.querySelector('img');


    var element = document.body;


    element.classList.toggle("dark-mode");


    let meuSrc = minhaImagem.getAttribute('src');

    // Verifica se o atributo 'src' atual da imagem é igual a uma URL específica
    if (meuSrc === 'https://cdn-icons-png.flaticon.com/512/5558/5558226.png') {
        // Se a URL atual for igual à URL específica, altera o 'src' para outra URL
        minhaImagem.setAttribute('src', 'https://cdn-icons-png.flaticon.com/512/5262/5262027.png');
    } else {
        // Se a URL atual for diferente da URL específica, altera o 'src' de volta para a URL original
        minhaImagem.setAttribute('src', 'https://cdn-icons-png.flaticon.com/512/5558/5558226.png');
    }
}