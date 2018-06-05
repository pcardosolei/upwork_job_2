

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    // Handle message.
    // In this example, message === 'whatever value; String, object, whatever'
    console.log(message);
    var teste = document.getElementById("mileage").value = "200000";
    console.log(teste);
    console.log('passou');

});
