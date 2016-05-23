var itemRegExp = /BuildHover.*;/i;
var _cacheItems = {};
var g_rgWalletInfo = { wallet_fee: 1, wallet_fee_base: 0, wallet_fee_minimum: 1, wallet_fee_percent: 0.05, wallet_publisher_fee_percent_default: 0.10 };
var _tradesTimers = {};
var _openedWins = {};
var UpdateTotal = function (rgItem) {

    var el = $J('div[data-economy-item="' + rgItem.appid + '/' + rgItem.contextid + '/' + rgItem.id + '/' + rgItem.owner + '"]');

    var conts = el.parent('.tradeoffer_item_list');
    conts.each(function (idx, el) {
        var cont = $J(this);
        var tLabel = cont.find('.total_price');
        var total = 0, totalNoTax = 0, gemprices = 0, itemcount = 0;
        cont.find('.trade_item').each(function (i) {
            itemcount++;
            var rgI = this.rgItem;
            if (rgI) {
                if (rgI.lowestPrice)//&& rgI.isUnusualCour == null)
                {
                    var price = parseInt(parseFloat(getNumber(rgI.lowestPrice)) * 100);

                    var publisherFee = typeof rgI.market_fee != 'undefined' ? rgI.market_fee : 0.1;

                    var feeInfo = CalculateFeeAmount(price, publisherFee);
                    totalNoTax += (price - feeInfo.fees) / 100;

                    total += parseFloat(getNumber(rgI.lowestPrice));
                }

                if (rgI.gemPrices != 'undefined' && rgI.gemPrices != null) {
                    $J.each(rgI.gemPrices, function (k, v) {
                        gemprices += parseFloat(getNumber(v.lowestPrice));
                    });
                }
            }


            if (this.inited == null)
                PrebuildData(this, $J(this).attr('data-economy-item'));//.QueueAjaxRequestIfNecessary();
        });

        var str = '' + formatNumber(total) + ' (' + formatNumber(totalNoTax) + ')';
        if (gemprices > 0) {
            str += ' - Gems total price: ' + formatNumber(gemprices);
        }

        str += ' <span style="float: right; padding-right: 15px">' + itemcount + ' item(s)</span>';
        if (cont.find('.price-tag.no-price').length > 0) {
            tLabel.addClass('warning');
        }
        tLabel.html(str);

    });
};

var CheckItem = function (prefix, item, owner) {

    if (!item.marketable) {
        var divPricetag = $J('<div class="price-tag">');
        divPricetag.html('No price');
        divPricetag.addClass('no-price');
        $J('div[data-economy-item^="' + item.appid + '/' + item.contextid + '/' + item.id + '/"]').append(divPricetag);
        return;
    }

    getLowestPriceHandler(item, prefix, function (rgI) {
        var el = $J('div[data-economy-item^="' + item.appid + '/' + item.contextid + '/' + item.id + '/"]');
        el.each(function (e, i) {
            if ($J(this).find('.price-tag').length == 0) {
                var divPricetag = $J('<div class="price-tag">');
                divPricetag.html(rgI.lowestPrice);
                if (rgI.lowestPrice == 'Can\'t get price') {
                    divPricetag.addClass('no-price');
                }
                $J(this).append(divPricetag);
            }
        });
    });


    _cacheItems[item.appid + '/' + item.contextid + '/' + item.id] = item;
    var el = $J('div[data-economy-item^="' + item.appid + '/' + item.contextid + '/' + item.id + '/"]');
    el.each(function (e, i) {
        this.rgItem = item;
    });
}

var PrebuildData = function (ele, key, getprice) {
    var rgItemKey = key.split('/');
    if (rgItemKey.length == 3 || rgItemKey.length == 4) {
        ele.inited = true;
        var strURL = null;
        var appid = rgItemKey[0];

        if (appid == 'classinfo') {
            // class info style
            appid = rgItemKey[1];
            var classid = rgItemKey[2];
            var instanceid = (rgItemKey.length > 3 ? rgItemKey[3] : 0);
            strURL = 'economy/itemclasshover/' + appid + '/' + classid + '/' + instanceid;
            strURL += '?content_only=1&l=english';
        }
        else {
            // real asset
            var contextid = rgItemKey[1];
            var assetid = rgItemKey[2];
            if (_cacheItems[appid + '/' + contextid + '/' + assetid] != null) return;

            var strURL = 'economy/itemhover/' + appid + '/' + contextid + '/' + assetid;
            strURL += '?content_only=1&omit_owner=1&l=english';
            if (rgItemKey.length == 4 && rgItemKey[3]) {
                var strOwner = rgItemKey[3];
                if (strOwner.indexOf('id:') == 0)
                    strURL += '&o_url=' + strOwner.substr(3);
                else
                    strURL += '&o=' + strOwner;
            }
        }
        //console.log(strURL);

        //return new CDelayedAJAXData(strURL, 100);
        //var $HoverContent = $J('<div/>', { 'class': 'economyitem_hover_content' });

        $J.ajax({
            url: window.location.protocol + "//steamcommunity.com/" + strURL,
            cache: true,
            data: { l: 'english' }
        }).done(function (data) {
            var m_$Data = $J(data);
            var match = itemRegExp.exec(data);
            if (match) {
                //console.log(match)
                eval(match[0].replace('BuildHover', 'CheckItem'));
            }
            //console.log(data);
            //$HoverContent.children().detach();
            //$HoverContent.append(m_$Data);
        });

    }
    else
        return null;
}
var jpcallback = function (data) { }
var GetAllPrice = function (parent) {
    parent.find('.trade_item').each(function () {
        if (this.inited == null)
            PrebuildData(this, $J(this).attr('data-economy-item'));//.QueueAjaxRequestIfNecessary();
        //else
        //    getLowestPriceHandler(this.rgItem, '');

        //$J(this).trigger('mouseenter');
    });
}
$J(function () {
    var warningMsg = $J('<div style="color: red; z-index: 2">Warning! This is an empty trade offer, you will not receive anything after accepted.<br /> <a href="https://support.steampowered.com/kb_article.php?ref=2178-QGJV-0708#whatoffer" target="_blank">Steam wallet funds can not be included in trade, or trade offer.</a></div>');
    warningMsg.click(function (e) {
        e.stopPropagation();
    });
    var emptyTradeOffers = $J('.tradeoffer_items.primary .tradeoffer_item_list:not(:has(.trade_item ))');
    emptyTradeOffers.append(warningMsg);
    emptyTradeOffers.parents('.tradeoffer_items_ctn').find('.link_overlay').css('top', '110px');
    $J('.tradeoffer_item_list').append('<div class="total_price total" style="cursor:pointer; font-weight: bold; font-size: 15px">&nbsp;</div>');
    $J('.tradeoffer_footer_actions').prepend('<a class="offer_price whiteLink" href="#" style="cursor:pointer;">Get total price</a> | ');
    if (window.quickaccept)
        $J('.tradeoffer_footer_actions').prepend('<a class="accept_trade whiteLink" href="#" style="cursor:pointer;">Quick accept</a> | ');

    $J('.offer_price').click(function () {
        GetAllPrice($J(this).parents('.tradeoffer'));
        return false;
    });

    $J('.accept_trade').click(function () {
        if ($J(this).prop('disabled')) return false;
        var idTrade = $J(this).parents('.tradeoffer').prop('id').substr(13);
        if (_tradesTimers[idTrade]) {
            window.clearInterval(_tradesTimers[idTrade].timer);
            _tradesTimers[idTrade] = null;
            $J(this).html('Quick accept');
            return false;
        }
        if (window.quickacceptprompt && !confirm('Are you sure?')) return false;
        if (window.qadelay) {
            _tradesTimers[idTrade] = {
                timer: window.setInterval('TradeAcceptTimerTick(' + idTrade + ')', 1000),
                remain: window.qadelay
            };
            $J(this).html('Cancel (' + (window.qadelay < 10 ? '0' : '') + window.qadelay + ')');
        }
        else if (window.qadelay == 0) {
            var link = $J(this);
            link.html('Accepting...');
            link.prop('disabled', true);
            AcceptTradeOffer(idTrade);
        }
        //AcceptTradeOffer(idTrade);
        //$J(this).prop('disabled', true);
        return false;
    });

    $J('.total_price').click(function () {
        var cont = $J(this).parent('.tradeoffer_item_list');
        GetAllPrice(cont);
    });

    $J(function () {
        $J(window).on('message', function (event) {
            var origin = event.originalEvent.origin;
            var data = event.originalEvent.data;
            if (origin && data &&
                ('http://steamcommunity.com/'.indexOf(origin) == 0 || 'https://steamcommunity.com/'.indexOf(origin) == 0)) {
                if (data.type == 'accepted' || data.type == 'await_confirm' && _openedWins[data.tradeofferid]) {
                    _openedWins[data.tradeofferid].close();
                }
            }
        });
    });
});

var TradeAcceptTimerTick = function (IdTradeOffer) {
    if (!_tradesTimers[IdTradeOffer]) {
        return;
    }
    var remain = _tradesTimers[IdTradeOffer].remain;
    var link = $J('#tradeofferid_' + IdTradeOffer).find('.accept_trade');
    if (remain == 0) {
        link.html('Accepting...');
        link.prop('disabled', true);
        window.clearInterval(_tradesTimers[IdTradeOffer].timer);
        AcceptTradeOffer(IdTradeOffer);
    }
    else {
        remain--;
        _tradesTimers[IdTradeOffer].remain = remain;
        link.html('Cancel (' + (remain < 10 ? '0' : '') + remain + ')');
    }
}

var regRpLink = /javascript:ReportTradeScam\( '(\d+)',/;
var AcceptTradeOffer = function (IdTradeOffer) {
    //$J('#HiddenTradeOffer' + IdTradeOffer).remove();
    //var tradeDiv = $J('#tradeofferid_' + IdTradeOffer);

    //var iframe = $J('<iframe id="HiddenTradeOffer' + IdTradeOffer + '" name="HiddenTradeOffer' + IdTradeOffer + '" style="display: none" />');
    //tradeDiv.after(iframe);
    //iframe[0].opener = window;

    _openedWins[IdTradeOffer] = window.open('https://steamcommunity.com/tradeoffer/' + IdTradeOffer + '/?sihaccept=' + g_sessionID, 'HiddenTradeOffer' + IdTradeOffer, 'height=10,width=10,resize=yes,scrollbars=yes');
    return;
    //var linkRp = tradeDiv.find('.btn_report').prop('href');
    //var partnerId = regRpLink.exec(linkRp)[1];
    //var nTradeOfferID = IdTradeOffer;
    //var rgParams = {
    //    sessionid: g_sessionID,
    //    serverid: 1,
    //    tradeofferid: IdTradeOffer,
    //    partner: partnerId,
    //    captcha: ''
    //};

    //return $J.ajax({
    //    url: 'https://steamcommunity.com/tradeoffer/' + IdTradeOffer + '/accept',
    //    data: rgParams,
    //    type: 'POST',
    //    crossDomain: true,
    //    xhrFields: { withCredentials: true }
    //}).done(function (data) {
    //    var bNeedsEmailConfirmation = data && data.needs_email_confirmation;
    //    var bNeedsMobileConfirmation = data && data.needs_mobile_confirmation;
    //    console.log(data);
    //});
}
