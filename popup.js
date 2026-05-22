document.addEventListener("DOMContentLoaded", () => {
  const translateBtn = document.getElementById("translate");
  const langSelect = document.getElementById("lang");

  // Load saved language
  const savedLang = localStorage.getItem("targetLang") || "en";
  langSelect.value = savedLang;

  // Save language preference
  langSelect.addEventListener("change", () => {
    localStorage.setItem("targetLang", langSelect.value);
  });

  translateBtn.addEventListener("click", () => {
    const lang = langSelect.value;
    localStorage.setItem("targetLang", lang);

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const url = tabs[0].url;
      const translateUrl = `https://translate.google.com/translate?sl=auto&tl=${lang}&u=${encodeURIComponent(url)}`;
      chrome.tabs.create({ url: translateUrl });
    });
  });
});