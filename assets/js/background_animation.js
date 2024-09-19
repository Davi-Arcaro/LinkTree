const images = [
    'assets/image/background1.jpg',
    'assets/image/background2.jpg',
    'assets/image/background3.jpg'
];

let currentImageIndex = 0;
const backgroundElement = document.getElementById('background');

function changeBackground() {
    // Aplicar a nova imagem e iniciar a transição de fade
    backgroundElement.style.opacity = 0; // Começa com a imagem invisível

    setTimeout(() => {
        backgroundElement.style.backgroundImage = `url(${images[currentImageIndex]})`;
        backgroundElement.style.opacity = 1; // Torna a nova imagem visível
    }, 500); // Espera o tempo da transição anterior para começar a transição de opacidade

    // Atualiza o índice da imagem
    currentImageIndex = (currentImageIndex + 1) % images.length;
}

// Inicia a troca de fundo
setInterval(changeBackground, 5000); // Muda a cada 5 segundos

// Definir a primeira imagem de fundo imediatamente
changeBackground();
