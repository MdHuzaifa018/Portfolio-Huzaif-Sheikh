// Enhanced Typing Animation
const typingText = document.querySelector(".typing-text");
const cursor = document.querySelector(".typing-cursor");
const words = ["MERN Stack Developer", "Full Stack Developer", "Web Developer", "UI/UX designer"];
let wordIndex = 0;
let charIndex = 0;
let isTyping = true;

function type() {
  const currentWord = words[wordIndex];

  if (isTyping) {
    typingText.textContent = currentWord.substring(0, charIndex);
    charIndex++;

    if (charIndex > currentWord.length) {
      isTyping = false;
      setTimeout(type, 2000);
      return;
    }
  } else {
    typingText.textContent = currentWord.substring(0, charIndex);
    charIndex--;

    if (charIndex === 0) {
      isTyping = true;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(type, 500);
      return;
    }
  }

  // Ensure cursor stays with text on mobile
  cursor.style.transform = `translateX(${2}px)`;

  const typingSpeed = isTyping ? 100 : 50;
  setTimeout(type, typingSpeed);
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(type, 1000);
});


