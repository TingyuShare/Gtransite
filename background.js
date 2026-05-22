const TRANSLATE_MENU_ID = "translate-site";

function getLocalizedMessage(messageName) {
  return chrome.i18n.getMessage(messageName);
}

chrome.contextMenus.create({
  id: TRANSLATE_MENU_ID,
  title: getLocalizedMessage("menu_item"),
  contexts: ["page"]
});

chrome.action.onClicked.addListener((tab) => {
  translateSite(tab.url);
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === TRANSLATE_MENU_ID) {
    translateSite(tab.url);
  }
});

function translateSite(url) {
  const targetLang = "zh-CN";
  const translateUrl = `https://translate.google.com/translate?sl=auto&tl=${targetLang}&u=${encodeURIComponent(url)}`;
  chrome.tabs.create({ url: translateUrl });
}