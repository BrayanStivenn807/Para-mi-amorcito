const messages = [
  "Te amo muchísimo ❤️",
  "Gracias por estar en mi vida 🌟",
  "Eres mi persona favorita 💕",
  "Juntos por siempre 🤗",
  "Tú y yo, para siempre 💖",
  "Tu sonrisa me ilumina 🍌",
  "Eres lo mejor que me ha pasado 😍",
  "Cada momento contigo es mágico ✨",
  "Siempre pienso en ti 🗨️",
  "Mi corazón es tuyo 💘",
  "Mi noviecita hermosa 😍",
  "Mi pataconcito🍌",
  "Mi frijolito💖",
  "Te amoooooooo🤗",
  "Mi niña de ojitos lindos💘",
  "Mi mujer hermosa🗨️",
  "Mi primer amor✨",
  "mi novia divina💘",
  "Mi Butsi buu💕"
];
const bubblesText = document.getElementById("bubbles-text");

let index = 0;

function showMessage() {
  bubblesText.textContent = messages[index];
  index = (index + 1) % messages.length;
}

setInterval(showMessage, 2000); // Cambia el mensaje cada 2 segundos
showMessage(); // Muestra el primero de inmediato
const bubblesContainer = document.getElementById('bubbles-container');

function createBubble() {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');
  bubble.style.left = Math.random() * 100 + 'vw';
  bubble.style.fontSize = Math.random() * 20 + 10 + 'px';
  bubble.textContent = '❤️'; // También puedes usar '♥' o cualquier otro carácter
  bubble.style.opacity = Math.random();
  bubblesContainer.appendChild(bubble);

  setTimeout(() => {
    bubble.remove();
  }, 8000);
}
document.getElementById("btnMusica").addEventListener("click", function () {
  const audio = document.getElementById("miAudio");
  audio.play()
    .then(() => {
      this.style.display = "none"; // Oculta el botón después de iniciar la música
    })
    .catch(err => {
      alert("Toca la pantalla para permitir la música");
      console.error("Error al reproducir:", err);
    });
});
setInterval(createBubble, 300);