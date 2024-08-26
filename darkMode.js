function darkMode() {
    // Seleciona a primeira imagem encontrada no documento HTML
    let minhaImagem = document.querySelector('img');

    // Seleciona o elemento <body> do documento HTML
    var element = document.body;

    /* Alterna a classe "dark-mode" no elemento <body>, ou seja, adiciona a classe se não estiver 
      presente e remove se estiver presente */
    element.classList.toggle("dark-mode");

    // Obtém o atributo 'src' da imagem selecionada
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