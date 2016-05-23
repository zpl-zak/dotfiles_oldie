// This script written by VplGhost
// Email: vplghost@gmail.com
var sGen = document.createElement('script');
sGen.src = chrome.extension.getURL('js/lang/_gen.js');
(document.head || document.documentElement).appendChild(sGen);
sGen.onload = function () {
    sGen.parentNode.removeChild(sGen);
};

var sPriceQueue = document.createElement('script');
sPriceQueue.src = chrome.extension.getURL('js/PriceQueue.js');
(document.head || document.documentElement).appendChild(sPriceQueue);
sPriceQueue.onload = function () {
    sPriceQueue.parentNode.removeChild(sPriceQueue);
};


var cssPQ = document.createElement('link');
cssPQ.href = chrome.extension.getURL('css/priceQueue.css');
cssPQ.rel = 'stylesheet';
cssPQ.type = 'text/css';
(document.head || document.documentElement).appendChild(cssPQ);

var sCommon = document.createElement('script');
sCommon.src = chrome.extension.getURL('js/hovermod.script.min.js');
(document.head || document.documentElement).appendChild(sCommon);
sCommon.onload = function () {
    var sOffer = document.createElement('script');
    sOffer.src = chrome.extension.getURL('js/tradeofferrev.script.min.js');
    (document.head || document.documentElement).appendChild(sOffer);
    sOffer.onload = function () {
        sOffer.parentNode.removeChild(sOffer);
    };
    sCommon.parentNode.removeChild(sCommon);
};


chrome.storage.sync.get({
    currency: '',
    quickaccept: false,
    quickacceptprompt: true,
    qadelay: 10,
    gpdelayscc: 2500,
    gpdelayerr: 5000,
    agp_hover: true,
    agp_gem: true,
    agp_sticker: true,
    lang: ''
}, function (items) {
    var actualCode = [
        'window.quickaccept = ' + items.quickaccept + ';',
        'window.quickacceptprompt = ' + items.quickacceptprompt + ';',
        'window.qadelay = ' + items.qadelay + ';',
        'window.currency = \'' + items.currency + '\';',
        'window.gpdelayscc = ' + items.gpdelayscc + ';',
        'window.gpdelayerr = ' + items.gpdelayerr + ';',
        'window.agp_hover = ' + items.agp_hover + ';',
        'window.agp_gem = ' + items.agp_gem + ';',
        'window.agp_sticker = ' + items.agp_sticker + ';'
    ].join('\r\n');
    var scriptOpt = document.createElement('script');
    scriptOpt.textContent = actualCode;
    (document.head || document.documentElement).appendChild(scriptOpt);
    scriptOpt.parentNode.removeChild(scriptOpt);

    var sLang = document.createElement('script');
    if (items.lang == '')
        sLang.src = chrome.extension.getURL('js/lang/' + chrome.i18n.getMessage("langcode") + '.js');
    else
        sLang.src = chrome.extension.getURL('js/lang/' + items.lang + '.js');

    (document.head || document.documentElement).appendChild(sLang);
    sLang.onload = function () {
        sLang.parentNode.removeChild(sLang);
    };
});

var cssF = document.createElement('link');
cssF.href = chrome.extension.getURL('css/inventscript.css');
cssF.rel = 'stylesheet';
cssF.type = 'text/css';
(document.head || document.documentElement).appendChild(cssF);

cssF = document.createElement('link');
cssF.href = chrome.extension.getURL('css/tradeoffer.css');
cssF.rel = 'stylesheet';
cssF.type = 'text/css';
(document.head || document.documentElement).appendChild(cssF);