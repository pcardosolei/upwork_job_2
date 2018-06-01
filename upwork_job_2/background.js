chrome.contextMenus.create({
    id: "show-info",
    title: "Show Information",
    contexts: ["all"]
});

chrome.contextMenus.onClicked.addListener(function(info,tab) {
  alert(info.selectionText);
  var action_url = "https://selling.autotrader.co.uk";
  chrome.tabs.create({url: action_url});

  var action_url = "https://www.copart.co.uk/"; // to be added after.
});
