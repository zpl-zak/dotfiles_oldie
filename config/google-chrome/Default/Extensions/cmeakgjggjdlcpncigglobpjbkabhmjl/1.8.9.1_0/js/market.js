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
    quickbuybuttons: true,
    totalrow: true,
    historypagesize: 10,
    highlight: true,
    bookmarkscategories: null,
    showbookmarks: true,
    gpdelayscc: 2500,
    gpdelayerr: 5000,
    agp_hover: true,
    agp_gem: true,
    agp_sticker: true,
    lang: ''
}, function (items) {
    var actualCode = ['window.replaceBuy = ' + items.quickbuybuttons + ';',
        'window.totalrow = ' + items.totalrow + ';',
        'window.historypagesize = ' + items.historypagesize + ';',
        'window.highlight = ' + items.highlight + ';',
        'window.bookmarkscategories = ' + (items.showbookmarks ? JSON.stringify(items.bookmarkscategories) : '') + ';',
        'window.gpdelayscc = ' + items.gpdelayscc + ';',
        'window.gpdelayerr = ' + items.gpdelayerr + ';',
        'window.agp_hover = ' + items.agp_hover + ';',
        'window.agp_gem = ' + items.agp_gem + ';',
        'window.agp_sticker = ' + items.agp_sticker + ';'
    ].join('\r\n');

    chrome.storage.local.get({
        bookmarks: null
    }, function (subitems) {

        var actualCode = [
            'window.bookmarkeditems = ' + (items.showbookmarks ? JSON.stringify(subitems.bookmarks) : '') + ';'
        ].join('\r\n');

        var scriptsub = document.createElement('script');
        scriptsub.textContent = actualCode;
        (document.head || document.documentElement).appendChild(scriptsub);
        scriptsub.parentNode.removeChild(scriptsub);
    });

    var script = document.createElement('script');
    script.textContent = actualCode;
    (document.head || document.documentElement).appendChild(script);
    script.parentNode.removeChild(script);

    var sLang = document.createElement('script');
    if (items.lang == '')
        sLang.src = chrome.extension.getURL('js/lang/' + chrome.i18n.getMessage("langcode") + '.js');
    else
        sLang.src = chrome.extension.getURL('js/lang/' + items.lang + '.js');

    (document.head || document.documentElement).appendChild(sLang);
    sLang.onload = function () {
        sLang.parentNode.removeChild(sLang);
    };

    var sCommon = document.createElement('script');
    sCommon.src = chrome.extension.getURL('js/hovermod.script.min.js');
    (document.head || document.documentElement).appendChild(sCommon);

    sCommon.onload = function () {
        var sOffer = document.createElement('script');
        sOffer.src = chrome.extension.getURL('js/market.script.min.js');
        (document.head || document.documentElement).appendChild(sOffer);
        sOffer.onload = function () {
            sOffer.parentNode.removeChild(sOffer);
        };
        sCommon.parentNode.removeChild(sCommon);
    };
});


var cssF = document.createElement('link');
cssF.href = chrome.extension.getURL('css/market.css');
cssF.rel = 'stylesheet';
cssF.type = 'text/css';
(document.head || document.documentElement).appendChild(cssF);

$(function () {
    $('#myListings').on('click', '.remove-bookmark', function () {
        var hashmarket = $(this).data('hash');
        $(this).parents('.market_listing_row.market_recent_listing_row').hide(200);
        chrome.storage.local.get({
            bookmarks: null
        }, function (items) {
            var bookmarks = items.bookmarks || {};
            if (bookmarks[hashmarket])
                delete bookmarks[hashmarket];

            chrome.storage.local.set({
                bookmarks: bookmarks
            });
        });
    });
});