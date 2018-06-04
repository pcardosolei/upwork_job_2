chrome.contextMenus.create({
    id: "show-info",
    title: "Show Information",
    contexts: ["all"]
});

chrome.contextMenus.onClicked.addListener(function(info,tab) {

  var action_url = "https://selling.autotrader.co.uk";
  chrome.tabs.query({currentWindow: true}, function(callback){
    var value = callback.length;
    console.log(value);
    chrome.tabs.create({url: action_url, index: value + 1});
    chrome.tabs.executeScript(value + 1 , {code:"var selectionText = info.selectionText", file:"script.js", runAt:"document_end"}, function(callback){
      console.log("over");
      chrome.tabs.remove(value + 1);
    });
  });


  alert(info.selectionText);

  var action_url_2 = "https://www.copart.co.uk/"; // to be added after.
  chrome.tabs.create({url: action_url_2})
});
