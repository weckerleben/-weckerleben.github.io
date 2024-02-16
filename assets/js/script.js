function toggleTheme() {
  const currentTheme = document.body.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  document.body.setAttribute("data-theme", newTheme);
}

const translations = {
  en: {
    headerText: "I am working on it...",
    welcomeText:
      "Hello! I am working hard to launch my new website. It will be available soon. Thank you for your patience.",
    name: "William Eckerleben",
  },
  es: {
    headerText: "Estoy trabajando en ello...",
    welcomeText:
      "¡Hola! Estoy trabajando arduamente para lanzar mi nuevo sitio web. Estará disponible pronto. Gracias por tu paciencia.",
    name: "William Eckerleben",
  },
  pt: {
    headerText: "Estou trabalhando nisso...",
    welcomeText:
      "Olá! Estou trabalhando duro para lançar meu novo site. Ele estará disponível em breve. Obrigado por sua paciência.",
    name: "William Eckerleben",
  },
  zh: {
    headerText: "我正在努力...",
    welcomeText:
      "您好！ 我正在努力推出我的新網站. 很快就可以使用了. 感謝您的耐心等待.",
    name: "柯威廉",
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
