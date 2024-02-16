document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});

function toggleTheme() {
  const currentTheme = document.body.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  document.body.setAttribute("data-theme", newTheme);
  
  // Change the image depending on the theme
  var logo = document.getElementById('logo');
  if (newTheme === "dark") {
    logo.src = "assets/images/logo_v1(blanco).png";
  } else {
    logo.src = "assets/images/logo_v1(negro).png";
  }
}

const translations = {
  en: {
    title: "Under Construction",
    headerText: "I am working on it...",
    welcomeText:
      "Hello! I am working hard to launch my new website. It will be available soon. Thank you for your patience.",
    name: "© 2024 William Eckerleben",
  },
  es: {
    title: "En Construcción",
    headerText: "Estoy trabajando en ello...",
    welcomeText:
      "¡Hola! Estoy trabajando arduamente para lanzar mi nuevo sitio web. Estará disponible pronto. Gracias por tu paciencia.",
    name: "© 2024 William Eckerleben",
  },
  pt: {
    title: "Em construção",
    headerText: "Estou trabalhando nisso...",
    welcomeText:
      "Olá! Estou trabalhando duro para lançar meu novo site. Ele estará disponível em breve. Obrigado por sua paciência.",
    name: "© 2024 William Eckerleben",
  },
  zh: {
    title: "施工中",
    headerText: "我正在努力...",
    welcomeText:
      "您好！ 我正在努力推出我的新網站. 很快就可以使用了. 感謝您的耐心等待.",
    name: "© 2024 柯威廉",
  },
};

function changeLanguage(lang) {
  document.querySelectorAll("[data-key]").forEach((elem) => {
    elem.textContent = translations[lang][elem.getAttribute("data-key")];
  });
  localStorage.setItem("selectedLanguage", lang);
}

document.addEventListener("DOMContentLoaded", () => {
  const selectedLanguage = localStorage.getItem("selectedLanguage") || "en";
  changeLanguage(selectedLanguage);
});