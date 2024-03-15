// Função para criar a animação de loading
function animateLoading() {
    const loadingText = document.getElementById('loading');
    let counter = 0;
    const interval = setInterval(() => {
        // Limpa o conteúdo atual
        loadingText.textContent = 'Loading' + '.'.repeat(counter % 3);
        counter++;
    }, 500); // Altera a cada 0.5 segundos
}

// Chama a função para iniciar a animação de loading quando a página é carregada
window.onload = animateLoading;
