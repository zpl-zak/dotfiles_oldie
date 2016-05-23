/**
 * Simple URL filter that converts any URIs found in the plain text message to clickable links
 *
 * @param megaChat
 * @returns {UrlFilter}
 * @constructor
 */
var UrlFilter = function(megaChat) {
    var self = this;

    megaChat.bind("onBeforeRenderMessage", function(e, eventData) {
        self.processMessage(e, eventData);
    });

    return this;
};

UrlFilter.prototype.processMessage = function(e, eventData) {
    var self = this;

    // use the HTML version of the message if such exists (the HTML version should be generated by hooks/filters on the
    // client side.
    var textContents;
    if (eventData.message.getContents) {
        textContents = eventData.message.getContents();
    } else {
        textContents = eventData.message.textContents;
    }

    var messageContents = eventData.message.messageHtml ? eventData.message.messageHtml : textContents;

    if (!messageContents) {
        return; // ignore, maybe its a system message (or composing/paused composing notification)
    }

    eventData.message.messageHtml = Autolinker.link(messageContents, {
        truncate: 30,
        newWindow: true,
        stripPrefix: true,
        twitter: false,
        replaceFn : function( autolinker, match ) {
            switch( match.getType() ) {
                case 'email' :

                    //var contactFound = M.getContactByEmail(match.getEmail());
                    //
                    //if (contactFound) {
                    //    var tag = autolinker.getTagBuilder().build( match );  // returns an `Autolinker.HtmlTag` instance, which provides mutator methods for easy changes
                    //    tag.setAttr('href', "#fm/" + contactFound.h);
                    //    tag.setAttr('onclick', "window.location = '#fm/" + contactFound.h + "';");
                    //    tag.setAttr('target', "");
                    //    tag.addClass("inline-profile-link");
                    //    tag.innerHtml = '<div class="nw-contact-avatar ' + htmlentities(contactFound.h) + '">'
                    //        +  useravatar.contact(contactFound, 'av', 'span')
                    //    + '</div>' + tag.innerHtml;
                    //    return tag;
                    //
                    //} else {
                        return true;  // let Autolinker perform its normal anchor tag replacement
                    //}
            }
        }
    });
};