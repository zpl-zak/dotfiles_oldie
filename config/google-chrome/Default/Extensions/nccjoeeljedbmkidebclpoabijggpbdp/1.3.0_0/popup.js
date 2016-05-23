var MAJOR_VERSION = 14;
var verTime = 86400000;
var welcomeURL = "http://chromeplayground.weebly.com/download.html";
var openUrl = 'chrome://downloads/';

chrome.tabs.getAllInWindow(null, function (tabs) {
    for (var i = 0; i < tabs.length; i++) {
        if (tabs[i].url.substr(0, openUrl.length) == openUrl) {
            chrome.tabs.update(tabs[i].id, { selected: true });
            window.close();
            return;
        }
    }
    chrome.tabs.create({ url: openUrl, selected: true });
    window.close();
});

showWelcomePage();

function showWelcomePage(){
    if (!localStorage["updatereadt"]) {
        localStorage["updatereadt"] =  Date.now();
        chrome.tabs.create({url: welcomeURL});
        return;
    }

    if (versionDiff(localStorage["updatereadt"],Date.now()) > MAJOR_VERSION){
        localStorage["updatereadt"] = Date.now();
        chrome.tabs.create({url: updateURL});
    }
}

function versionDiff(first, second) {
    return (second-first)/verTime;
}


