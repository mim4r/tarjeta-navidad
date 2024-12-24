// Obtener los elementos del DOM
const card = document.getElementById('card');
const front = document.getElementById('front');
const back = document.getElementById('back');
const audio = document.getElementById('audio');
const gif = document.getElementById('gif');

// Manejar el clic en la tarjeta
card.addEventListener('click', () => {
    // Voltear la tarjeta
    card.style.transform = 'rotateY(360deg)';
    
    // Mostrar la parte posterior de la tarjeta
    front.style.display = 'none';  // Ocultar el frente
    back.style.display = 'flex';   // Mostrar el reverso
    
    // Reproducir la música
    audio.play();
});
