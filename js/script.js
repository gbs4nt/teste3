// Botão para trocar mensagens
document.getElementById('changeMessageBtn').addEventListener('click', function () {
    const messages = [
        '"Cada momento ao seu lado é uma doce recordação."',
        '"Você é o melhor capítulo da minha vida!"',
        '"Que venham mais anos de amor e felicidade!"',
        '"Com você, todo dia é uma comemoração."'
    ];

    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById('message').innerText = randomMessage;
});

// Carrossel de Fotos
const carousel = document.querySelector('.carousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const cards = document.querySelectorAll('.card');

let currentIndex = 0;

// Função para atualizar a posição do carrossel
function updateCarousel() {
    const offset = currentIndex * -320;
    carousel.style.transform = `translateX(${offset}px)`;  // Atualiza a posição do carrossel
    checkButtons();  // Checa o estado dos botões
    updateImageVisibility(); // Atualiza a visibilidade das imagens
}

// Função para verificar se os botões devem estar habilitados
function checkButtons() {
    // Se o índice for maior que 0, o botão anterior deve ser habilitado
    prevBtn.disabled = currentIndex === 0;

    // Se o índice for menor que o número total de fotos - 1, o botão de próximo deve ser habilitado
    nextBtn.disabled = currentIndex === cards.length - 1;
}

// Função para atualizar a visibilidade das imagens
function updateImageVisibility() {
    cards.forEach((card, index) => {
        // Se a imagem não for a imagem atual, a torna invisível
        if (index !== currentIndex) {
            card.classList.remove('show');
        } else {
            card.classList.add('show'); // Torna a imagem atual visível
        }
    });
}

// Botão anterior
prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

// Botão próximo
nextBtn.addEventListener('click', () => {
    if (currentIndex < cards.length - 1) {
        currentIndex++;
        updateCarousel();
    }
});

// Efeito de virar a foto
cards.forEach((card) => {
    card.addEventListener('click', () => {
        card.classList.toggle('is-flipped');
    });
});

// Coração interativo
document.getElementById('heart').addEventListener('click', function () {
    alert("Beijinho 💋");
});

// Efeito de fade ao rolar a página
window.addEventListener('scroll', function () {
    const infoElements = document.querySelectorAll('.fade-info');
    infoElements.forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight) {
            el.style.animation = 'fadeInInfo 2s ease-in-out forwards';
        }
    });
});

// Inicializar botões corretamente
updateCarousel();
