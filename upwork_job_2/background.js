chrome.contextMenus.create({
    id: "show-info",
    title: "Show Information",
    contexts: ["all"]
});

chrome.contextMenus.onClicked.addListener(function(info,tab) {

  var action_url = "https://selling.autotrader.co.uk";
  chrome.tabs.query({currentWindow: true}, function(callback){
    var value = callback.length;
    chrome.tabs.create({url: action_url, index: value});
    chrome.tabs.executeScript(value+1, {file:'script.js'},function(callback) {
        console.log('envia');
        chrome.tabs.sendMessage(value+1, info.selectionText);
        console.log('ja enviou');
      });
    });
    //chrome.tabs.remove(value);

/*
  var action_url_2 = "https://www.copart.co.uk/"; // to be added after.
  chrome.tabs.create({url: action_url_2});
  */
});


chrome.tabs.onCreated.addListener(function(tab){
    alert("new tab "+tab.id);
});
