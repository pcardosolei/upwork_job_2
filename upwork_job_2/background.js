chrome.contextMenus.create({
    id: "show-info",
    title: "Show Information",
    contexts: ["all"]
});

chrome.contextMenus.onClicked.addListener(function(info,tab) {
  alert(info.selectionText);
});
