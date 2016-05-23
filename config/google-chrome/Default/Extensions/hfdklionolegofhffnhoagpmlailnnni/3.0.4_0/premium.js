var bgPage = chrome.extension.getBackgroundPage();

// actions

function getFbShare(){
    bgPage.facebook.login(function(ok){
        if(ok){
            bgPage.facebook.apiPostText(translate('fb_mess'),function(ok){
                if(ok){
                    trackButton('Premium page','Activated package','FB Share');
                    chrome.extension.sendRequest({            
                        newWeapon2_activate: true
                    },function(response) {});
                }
            });
        }
    });
}

// INIT
$(document).ready(function(){
    
    // ALL TRANSLATE
    $('[i18]').each(function(){
        var id = $(this).attr('i18');
        var text = chrome.i18n.getMessage(id);
        $(this).val(text);
        $(this).html(text);
    });
    
    // other
    $('.active_mess').click(function(){
        trackButton('Premium page','Active package',packageNames[package_pos]);
        window.open('http://howto.wips.com/page-destroyer/','_blank');
    });    
    
    // share
    $('#premium_street .fb').click(function(){
        trackButton('Premium page','Top fb share');
        getFbShare();
    });
    
});

// other

function trackButton(param1,param2,param3,param4){
    chrome.extension.sendRequest({            
        trackButton:[param1,param2,param3,param4]
    },function(response) {});
}

function getPref(name){
    var value = localStorage[name];
    if(value == 'false') 
        return false; 
    else  
        return value;
}

function setPref(name,value){
    localStorage[name] = value;
}