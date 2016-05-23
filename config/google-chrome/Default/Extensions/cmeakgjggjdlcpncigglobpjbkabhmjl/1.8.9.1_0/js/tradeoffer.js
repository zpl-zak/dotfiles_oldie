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

chrome.storage.sync.get({
    offerdelayinterval: 100,
    offerdelay: true,
    autocheckofferprice: true,
    currency: '',
    usevector: false,
    lang: '',
    gpdelayscc: 2500,
    gpdelayerr: 5000,
    agp_hover: true,
    agp_gem: true,
    agp_sticker: true,
    apikey: '',
    custombuttons: null,
    extprice: true,
    extbgcolor: '#0000FF',
    exttextcolor: '#FFFFFF',
    extcustom: [],
    ck_hidebanner: false
}, function (items) {
    modStyle({ extbgcolor: items.extbgcolor, exttextcolor: items.exttextcolor });
    if (items.custombuttons == null) {
        items.custombuttons = {
            "440": {
                "Keys": { "Type": "TF_T" },
                "Craft items": { "Type": "Craft Item" }
            },
            "570": {
                "Rares": { "Quality": "unique", "Rarity": "Rarity_Rare", "Type": "wearable" },
                "Keys": { "Type": "DOTA_WearableType_Treasure_Key" }
            },
            "730": {
                "Keys": { "Type": "CSGO_Tool_WeaponCase_KeyTag" }
            },
            "753": {
                "Trading cards": { "item_class": "item_class_2" }
            }
        };
    }
    //console.log(JSON.stringify(items.custombuttons));
    var actualCode = ['window.offerdelayinterval = ' + (items.offerdelayinterval || '100') + ';',
        'window.offerdelay = ' + (items.offerdelay || 'true') + ';',
        'window.autocheckofferprice = ' + items.autocheckofferprice + ';',
        'window.currency = \'' + items.currency + '\';',
        'window._apikey = \'' + items.apikey + '\';',
        'window.usevector = ' + items.usevector + ';',
        'window.hidebanner = ' + items.ck_hidebanner + ';',
        'window.takeButtonsJson = window.custombuttons = ' + JSON.stringify(items.custombuttons) + ';',
        'window.gpdelayscc = ' + items.gpdelayscc + ';',
        'window.gpdelayerr = ' + items.gpdelayerr + ';',
        'window.agp_hover = ' + items.agp_hover + ';',
        'window.agp_gem = ' + items.agp_gem + ';',
        'window.agp_sticker = ' + items.agp_sticker + ';',
        'window.extprice = ' + items.extprice + ';',
        'window.extcustom = ' + items.extcustom.length + ';',
        'window.SIHID = \'' + chrome.runtime.id + '\';'
    ].join('\r\n');
    chrome.storage.local.get({
        bookmarks: []
    }, function (subitems) {

        var actualCode = [
            'window.bookmarkeditems = ' + (JSON.stringify(subitems.bookmarks)) + ';'
        ].join('\r\n');

        var scriptsub = document.createElement('script');
        scriptsub.textContent = actualCode;
        (document.head || document.documentElement).appendChild(scriptsub);
        scriptsub.parentNode.removeChild(scriptsub);
    });
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

var sCommon = document.createElement('script');
sCommon.src = chrome.extension.getURL('js/hovermod.script.min.js');
(document.head || document.documentElement).appendChild(sCommon);
sCommon.onload = function () {
    var sOffer = document.createElement('script');
    sOffer.src = chrome.extension.getURL('js/tradeoffer.script.min.js');
    (document.head || document.documentElement).appendChild(sOffer);
    sOffer.onload = function () {
        sOffer.parentNode.removeChild(sOffer);
    };
    sCommon.parentNode.removeChild(sCommon);
};

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
