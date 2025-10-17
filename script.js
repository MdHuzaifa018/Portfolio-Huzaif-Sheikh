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


const aboutBtn = document.getElementById('aboutMeBtn');
const modal = document.getElementById('aboutModal');
const closeBtn = document.querySelector('.close-btn');

// Open modal function
function openModal() {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

// Close modal function
function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
}

// Event listeners
aboutBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);

// Close modal when clicking outside
modal.addEventListener('click', function(e) {
    if (e.target === modal) {
        closeModal();
    }
});

// Close modal with ESC key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        closeModal();
    }
});


// Smooth animation for tech tags
document.addEventListener('DOMContentLoaded', function() {
    const tags = document.querySelectorAll('.tag');
    tags.forEach((tag, index) => {
        tag.style.animationDelay = `${index * 0.1}s`;
        tag.classList.add('tag-animate');
    });
});

// Add CSS animation class
const style = document.createElement('style');
style.textContent = `
    .tag-animate {
        animation: tagSlideIn 0.5s ease forwards;
        opacity: 0;
        transform: translateY(20px);
    }
    
    @keyframes tagSlideIn {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);
