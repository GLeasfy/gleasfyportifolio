// script.js

// Troca de idioma básica (placeholders de tradução)
const translations = {
  pt: {
    "Galeria": "Galeria",
    "Comissões": "Comissões",
    "NSFW": "NSFW",
    "Sobre Mim": "Sobre Mim",
    "Oi! Sou a Yoko, também conhecida como GLeasfy ou Psi. Sou uma artista digital trans que mora no Paraná e desenha desde que se entende por gente.": "Oi! Sou a Yoko, também conhecida como GLeasfy ou Psi. Sou uma artista digital trans que mora no Paraná e desenha desde que se entende por gente.",
    "A arte sempre foi minha forma favorita de me expressar, e fico muito feliz em poder dividir um pedacinho disso com você aqui!": "A arte sempre foi minha forma favorita de me expressar, e fico muito feliz em poder dividir um pedacinho disso com você aqui!",
    "⚠️ Esta página contém conteúdo para maiores de 18 anos.": "⚠️ Esta página contém conteúdo para maiores de 18 anos.",
    "Você confirma que é maior de idade?": "Você confirma que é maior de idade?",
    "Sou maior de 18": "Sou maior de 18",
    "Não sou maior de 18": "Não sou maior de 18",
    "Discord": "Discord",
    "@gleasfy": "@gleasfy",
    "Copiado!": "Copiado!",
    "Preços": "Preços",
    "Pedidos Especiais": "Pedidos Especiais",
    "FAQ": "FAQ",
    "Regras": "Regras"
  },
  en: {
    "Galeria": "Gallery",
    "Comissões": "Commissions",
    "NSFW": "NSFW",
    "Sobre Mim": "About Me",
    "Oi! Sou a Yoko, também conhecida como GLeasfy ou Psi. Sou uma artista digital trans que mora no Paraná e desenha desde que se entende por gente.": "Hi! I'm Yoko, also known as GLeasfy or Psi. I'm a trans digital artist who lives in Paraná and has been drawing since she can remember.",
    "A arte sempre foi minha forma favorita de me expressar, e fico muito feliz em poder dividir um pedacinho disso com você aqui!": "Art has always been my favorite way to express myself, and I'm so happy to be able to share a little bit of it with you here!",
    "⚠️ Esta página contém conteúdo para maiores de 18 anos.": "⚠️ This page contains content for 18+.",
    "Você confirma que é maior de idade?": "Do you confirm that you are of legal age?",
    "Sou maior de 18": "I am over 18",
    "Não sou maior de 18": "I am not over 18",
    "Discord": "Discord",
    "@gleasfy": "@gleasfy",
    "Copiado!": "Copied!",
    "Preços": "Prices",
    "Pedidos Especiais": "Special Requests",
    "FAQ": "FAQ",
    "Regras": "Rules"
  },
  es: {
    "Galeria": "Galería",
    "Comissões": "Comisiones",
    "NSFW": "NSFW",
    "Sobre Mim": "Sobre Mí",
    "Oi! Sou a Yoko, também conhecida como GLeasfy ou Psi. Sou uma artista digital trans que mora no Paraná e desenha desde que se entende por gente.": "¡Hola! Soy Yoko, también conocida como GLeasfy o Psi. Soy una artista digital trans que vive en Paraná y dibuja desde que tiene memoria.",
    "A arte sempre foi minha forma favorita de me expressar, e fico muito feliz em poder dividir um pedacinho disso com você aqui!": "El arte siempre ha sido mi forma favorita de expresarme, ¡y estoy muy feliz de poder compartir un poco de eso con ustedes aquí!",
    "⚠️ Esta página contém conteúdo para maiores de 18 anos.": "⚠️ Esta página contiene contenido para mayores de 18 años.",
    "Você confirma que é maior de idade?": "¿Confirmas que eres mayor de edad?",
    "Sou maior de 18": "Soy mayor de 18",
    "Não sou maior de 18": "No soy mayor de 18",
    "Discord": "Discord",
    "@gleasfy": "@gleasfy",
    "Copiado!": "¡Copiado!",
    "Preços": "Precios",
    "Pedidos Especiais": "Solicitudes especiales",
    "FAQ": "FAQ",
    "Regras": "Normas"
  }
};

function applyLanguage(lang) {
  document.querySelectorAll("nav a, p, h2, button").forEach(link => {
    const original = link.dataset.original || link.textContent;
    link.dataset.original = original;
    if (translations[lang][original]) {
      link.textContent = translations[lang][original];
    }
  });

  // Atualiza seções específicas com ids (caso não esteja coberto acima)
  const galleryTitle = document.querySelector('#gallery h2');
  if (galleryTitle) galleryTitle.textContent = translations[lang]["Galeria"];

  const aboutTitle = document.querySelector('#about h2');
  if (aboutTitle) aboutTitle.textContent = translations[lang]["Sobre Mim"];

  const commissionsTitle = document.querySelector('#commissions h2');
  if (commissionsTitle) commissionsTitle.textContent = translations[lang]["Comissões"];
}

// Troca de idioma via botão
const langButtons = document.querySelectorAll(".lang-switch button");
langButtons.forEach(button => {
  button.addEventListener("click", () => {
    const lang = button.getAttribute("data-lang");
    localStorage.setItem("lang", lang); // salva a escolha
    applyLanguage(lang);
  });
});

// Aplica o idioma salvo ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "pt";
  applyLanguage(savedLang);
  document.body.classList.add("loaded"); // exibe o conteúdo
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
    const lang = localStorage.getItem("lang") || "pt";
    el.textContent = translations[lang]["Copiado!"];
    setTimeout(() => {
      el.textContent = translations[lang]["Discord"];
    }, 2000);
  });
}
  
  function showDiscordTag() {
    document.getElementById("discord-text").textContent = "@gleasfy";
  }
  
  function resetDiscordText() {
    document.getElementById("discord-text").textContent = "Discord";
  }
  