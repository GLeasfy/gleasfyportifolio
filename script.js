// script.js

// Troca de idioma básica (placeholders de tradução)
const translations = {
  pt: {
    "Galeria": "Galeria",
    "Comissões": "Comissões",
    "NSFW": "NSFW",
    "Sobre Mim": "Sobre Mim"
  },
  en: {
    "Galeria": "Gallery",
    "Comissões": "Commissions",
    "NSFW": "NSFW",
    "Sobre Mim": "About Me"
  },
  es: {
    "Galeria": "Galería",
    "Comissões": "Comisiones",
    "NSFW": "NSFW",
    "Sobre Mim": "Sobre Mí"
  }
};

const langButtons = document.querySelectorAll(".lang-switch button");
langButtons.forEach(button => {
  button.addEventListener("click", () => {
    const lang = button.getAttribute("data-lang");
    document.querySelectorAll("nav a").forEach(link => {
      const original = link.dataset.original || link.textContent;
      link.dataset.original = original;
      if (translations[lang][original]) {
        link.textContent = translations[lang][original];
      }
    });
  });
});

  
  document.querySelectorAll('[data-lang]').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      document.querySelector('#gallery h2').textContent = translations[lang].gallery;
      document.querySelector('#about h2').textContent = translations[lang].about;
      document.querySelector('#commissions h2').textContent = translations[lang].commissions;
    });
  });
  
  // Clique para ampliar imagem (simples)
  document.querySelectorAll('.gallery-item img').forEach(img => {
    img.addEventListener('click', () => {
      const overlay = document.createElement('div');
      overlay.classList.add('overlay');
  
      const fullImg = document.createElement('img');
      fullImg.src = img.src;
      fullImg.alt = img.alt;
      fullImg.classList.add('full-img');
  
      const caption = document.createElement('div');
      caption.classList.add('full-caption');
      caption.textContent = img.nextElementSibling.textContent;
  
      overlay.appendChild(fullImg);
      overlay.appendChild(caption);
      document.body.appendChild(overlay);
  
      overlay.addEventListener('click', () => {
        overlay.remove();
      });
    });
  });
  
  // Função para abrir o modal
function openModal(imgElement) {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    const modalCaption = document.getElementById('modal-caption');
    
    modal.style.display = 'flex';
    modalImage.src = imgElement.src;
    modalCaption.textContent = imgElement.alt;
  }
  
  // Função para fechar o modal
  function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
  }

  function copyDiscord() {
    navigator.clipboard.writeText("@gleasfy").then(() => {
      const el = document.getElementById("discord-text");
      el.textContent = "Copiado!";
      setTimeout(() => {
        el.textContent = "Discord";
      }, 2000);
    });
  }
  
  function showDiscordTag() {
    document.getElementById("discord-text").textContent = "@gleasfy";
  }
  
  function resetDiscordText() {
    document.getElementById("discord-text").textContent = "Discord";
  }
  