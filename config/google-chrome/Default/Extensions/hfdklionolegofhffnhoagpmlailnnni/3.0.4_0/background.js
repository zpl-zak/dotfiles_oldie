control.firstStart = function(){
    if(config['thanks_url']){
        this.openUrl(config['thanks_url']);
    }
}

var activeTabs = [];
var capture = false;

// INIT

function initBg(){
    setTimeout(function(){
        setContext();
    },3000);
}

// PREMIUM

function showPremiumPage(){
    window.open('premium.html','_blank');
}

// WEAPONS INIT

function setContext(){
    chrome.contextMenus.removeAll(function(){});
    chrome.contextMenus.create({
        'id': 'destroyer_context',
        'title': chrome.app.getDetails().name
    });
    //basic
    basicWeapons();
    //free
    freeWeapons();
    //premium
    streetWeapons(control.getPref('newWeapon2'));
    scifiWeapons(control.getPref('newWeapon2'));
    historyWeapons(control.getPref('newWeapon2'));
    //other
    chrome.contextMenus.create({
        "parentId": "destroyer_context",
        "type":"normal",
        "title":translate('give5stars'),
        "contexts":["page"],
        "onclick":function(){
            window.open('https://chrome.google.com/webstore/detail/website-destroyer/hfdklionolegofhffnhoagpmlailnnni/reviews','_blank');
            trackButton('Context','CWS Review');
        }
    });
}

function basicWeapons(){
    chrome.contextMenus.create({
        'id': 'destroyer_context_basic',
        'parentId': 'destroyer_context',
        'title': translate('Basic_weapons')
    });
    chrome.contextMenus.create({
        'parentId': 'destroyer_context_basic',
        "type":"normal",
        "title":translate('Hammer'),
        "contexts":["page"],
        "onclick":hammerClick
    });
    chrome.contextMenus.create({
        'parentId': 'destroyer_context_basic',
        "type":"normal",
        "title":translate('Machine_gun'),
        "contexts":["page"],
        "onclick":gunClick
    });
}

function freeWeapons(){
    chrome.contextMenus.create({
        'id': 'destroyer_context_free',
        'parentId': 'destroyer_context',
        'title': translate('Free_weapons')
    });
    chrome.contextMenus.create({
        'parentId': 'destroyer_context_free',
        "type":"normal",
        "title":translate('Shotgun'),
        "contexts":["page"],
        "onclick":function(j,t){
            shotgunClick(j,t);
        }
    });
    chrome.contextMenus.create({
        'parentId': 'destroyer_context_free',
        "type":"normal",
        "title":translate('Stamp'),
        "contexts":["page"],
        "onclick":function(j,t){
            stampClick(j,t);
        }
    });
    chrome.contextMenus.create({
        'parentId': 'destroyer_context_free',
        "type":"normal",
        "title":translate('Flamethrower'),
        "contexts":["page"],
        "onclick":function(j,t){
            flameClick(j,t);
        }
    });
    chrome.contextMenus.create({
        'parentId': 'destroyer_context_free',
        "type":"normal",
        "title":translate('RPG'),
        "contexts":["page"],
        "onclick":function(j,t){
            rpgClick(j,t);
        }
    });
    chrome.contextMenus.create({
        'parentId': 'destroyer_context_free',
        "type":"normal",
        "title":translate('Grenade'),
        "contexts":["page"],
        "onclick":function(j,t){
            granClick(j,t);
        }
    });
    chrome.contextMenus.create({
        'parentId': 'destroyer_context_free',
        "type":"normal",
        "title":translate('Atom_bomb'),
        "contexts":["page"],
        "onclick":function(j,t){
            atomClick(j,t);
        }
    });
}

function streetWeapons(enable){
    chrome.contextMenus.create({
        'id': 'destroyer_context_street',
        'parentId': 'destroyer_context',
        'title': translate('Street_fight')
    });
    chrome.contextMenus.create({
        'parentId': 'destroyer_context_street',
        "type":"normal",
        "title":translate('Throwing_knife'),
        "contexts":["page"],
        "onclick":function(j,t){
            if(enable){
                knifeClick(j,t);
            }else{
                showPremiumPage();
            }
        }
    });
    chrome.contextMenus.create({
        'parentId': 'destroyer_context_street',
        "type":"normal",
        "title":translate('Shuriken'),
        "contexts":["page"],
        "onclick":function(j,t){
            if(enable){
                ninjaClick(j,t);
            }else{
                showPremiumPage();
            }
        }
    });
    chrome.contextMenus.create({
        'parentId': 'destroyer_context_street',
        "type":"normal",
        "title":translate('Grafiti_Spray'),
        "contexts":["page"],
        "onclick":function(j,t){
            if(enable){
                sprayClick(j,t);
            }else{
                showPremiumPage();
            }
        }
    });
    chrome.contextMenus.create({
        'parentId': 'destroyer_context_street',
        "type":"normal",
        "title":translate('Chainsaw'),
        "contexts":["page"],
        "onclick":function(j,t){
            if(enable){
                sawClick(j,t);
            }else{
                showPremiumPage();
            }
        }
    });
}

function scifiWeapons(enable){
    chrome.contextMenus.create({
        'id': 'destroyer_context_scifi',
        'parentId': 'destroyer_context',
        'title': translate('Scifi_weapons')
    });
    chrome.contextMenus.create({
        'parentId': 'destroyer_context_scifi',
        "type":"normal",
        "title":translate('Spartan_laser'),
        "contexts":["page"],
        "onclick":function(j,t){
            if(enable){
                laserClick(j,t);
            }else{
                showPremiumPage();
            }
        }
    });
    chrome.contextMenus.create({
        'parentId': 'destroyer_context_scifi',
        "type":"normal",
        "title":translate('Freezing_flash'),
        "contexts":["page"],
        "onclick":function(j,t){
            if(enable){
                flashClick(j,t);
            }else{
                showPremiumPage();
            }
        }
    });
    chrome.contextMenus.create({
        'parentId': 'destroyer_context_scifi',
        "type":"normal",
        "title":translate('Plasma_gun'),
        "contexts":["page"],
        "onclick":function(j,t){
            if(enable){
                plasmaClick(j,t);
            }else{
                showPremiumPage();
            }
        }
    });
}

function historyWeapons(enable){
    chrome.contextMenus.create({
        'id': 'destroyer_context_history',
        'parentId': 'destroyer_context',
        'title': 'History weapons'
    });
    chrome.contextMenus.create({
        'parentId': 'destroyer_context_history',
        "type":"normal",
        "title":'Sword',
        "contexts":["page"],
        "onclick":swordClick
    });
    chrome.contextMenus.create({
        'parentId': 'destroyer_context_history',
        "type":"normal",
        "title":'Ax',
        "contexts":["page"],
        "onclick":axClick
    });
    chrome.contextMenus.create({
        'parentId': 'destroyer_context_history',
        "type":"normal",
        "title":'Long Bow',
        "contexts":["page"],
        "onclick":bowClick
    });
    chrome.contextMenus.create({
        'parentId': 'destroyer_context_history',
        "type":"normal",
        "title":'Spear',
        "contexts":["page"],
        "onclick":spearClick
    });
    chrome.contextMenus.create({
        'parentId': 'destroyer_context_history',
        "type":"normal",
        "title":'Cannon',
        "contexts":["page"],
        "onclick":cannonClick
    });
}

// WEAPONS ACTIONS

//base
function hammerClick(j,t){
    if(isWS(t.url)){return;}
    trackButton('Context','Select Weapon','Hammer');
    chrome.tabs.executeScript(t.id, {
        code: "var param='hammer';"
    },function(){
        runContent(t.id);
    });
    if(checkActiveTabs(t)){return;}
    activeTabs.push({
        'id':t.id,
        'weapon':'hammer'
    });
}
function shotgunClick(j,t){
    if(isWS(t.url)){return;}
    trackButton('Context','Select Weapon','Shotgun');
    chrome.tabs.executeScript(t.id, {
        code: "var param='shotgun';"
    },function(){
        runContent(t.id);
    });
    if(checkActiveTabs(t)){return;}
    activeTabs.push({
        'id':t.id,
        'weapon':'shotgun'
    });
}

//free
function gunClick(j,t){    
    if(isWS(t.url)){return;}
    trackButton('Context','Select Weapon','Machine Gun');
    chrome.tabs.executeScript(t.id, {
        code: "var param='gun';"
    },function(){
        runContent(t.id);
    });
    if(checkActiveTabs(t)){return;}
    activeTabs.push({
        'id':t.id,
        'weapon':'gun'
    });
}
function stampClick(j,t){
    if(isWS(t.url)){return;}
    trackButton('Context','Select Weapon','Stamp');
    chrome.tabs.executeScript(t.id, {
        code: "var param='stamp';"
    },function(){
        runContent(t.id);
    });
    if(checkActiveTabs(t)){return;}
    activeTabs.push({
        'id':t.id,
        'weapon':'stamp'
    });
}
function flameClick(j,t){
    if(isWS(t.url)){return;}
    trackButton('Context','Select Weapon','Flamethrower');
    chrome.tabs.executeScript(t.id, {
        code: "var param='flame';"
    },function(){
        runContent(t.id);
    });
    if(checkActiveTabs(t)){return;}
    activeTabs.push({
        'id':t.id,
        'weapon':'flame'
    });
}
function rpgClick(j,t){
    if(isWS(t.url)){return;}
    trackButton('Context','Select Weapon','RPG');
    chrome.tabs.executeScript(t.id, {
        code: "var param='rpg';"
    },function(){
        runContent(t.id);
    });
    if(checkActiveTabs(t)){return;}
    activeTabs.push({
        'id':t.id,
        'weapon':'rpg'
    });
}
function granClick(j,t){
    if(isWS(t.url)){return;}
    trackButton('Context','Select Weapon','Grenade');
    chrome.tabs.executeScript(t.id, {
        code: "var param='gran';"
    },function(){
        runContent(t.id);
    });
    if(checkActiveTabs(t)){return;}
    activeTabs.push({
        'id':t.id,
        'weapon':'gran'
    });
}
function atomClick(j,t){
    if(isWS(t.url)){return;}
    trackButton('Context','Select Weapon','Atom bomb');
    chrome.tabs.executeScript(t.id, {
        code: "var param='atom';"
    },function(){
        runContent(t.id);
    });
    if(checkActiveTabs(t)){return;}
    activeTabs.push({
        'id':t.id,
        'weapon':'atom'
    });
}

//street
function knifeClick(j,t){
    if(isWS(t.url)){return;}
    trackButton('Context','Select Weapon','Throwing knife');
    chrome.tabs.executeScript(t.id, {
        code: "var param='knife';"
    },function(){
        runContent(t.id);
    });
    if(checkActiveTabs(t)){return;}
    activeTabs.push({
        'id':t.id,
        'weapon':'knife'
    });
}
function ninjaClick(j,t){
    if(isWS(t.url)){return;}
    trackButton('Context','Select Weapon','Shuriken');
    chrome.tabs.executeScript(t.id, {
        code: "var param='ninja';"
    },function(){
        runContent(t.id);
    });
    if(checkActiveTabs(t)){return;}
    activeTabs.push({
        'id':t.id,
        'weapon':'ninja'
    });
}
function sprayClick(j,t){
    if(isWS(t.url)){return;}
    trackButton('Context','Select Weapon','Spray');
    chrome.tabs.executeScript(t.id, {
        code: "var param='spray';"
    },function(){
        runContent(t.id);
    });
    if(checkActiveTabs(t)){return;}
    activeTabs.push({
        'id':t.id,
        'weapon':'spray'
    });
}
function sawClick(j,t){
    if(isWS(t.url)){return;}
    trackButton('Context','Select Weapon','Chainsaw');
    chrome.tabs.executeScript(t.id, {
        code: "var param='saw';"
    },function(){
        runContent(t.id);
    });
    if(checkActiveTabs(t)){return;}
    activeTabs.push({
        'id':t.id,
        'weapon':'saw'
    });
}

//scifi
function laserClick(j,t){
    if(isWS(t.url)){return;}
    trackButton('Context','Select Weapon','Spartan laser');
    chrome.tabs.executeScript(t.id, {
        code: "var param='laser';"
    },function(){
        runContent(t.id);
    });
    if(checkActiveTabs(t)){return;}
    activeTabs.push({
        'id':t.id,
        'weapon':'laser'
    });
}
function flashClick(j,t){
    if(isWS(t.url)){return;}
    trackButton('Context','Select Weapon','Freezing flash');
    chrome.tabs.executeScript(t.id, {
        code: "var param='flash';"
    },function(){
        runContent(t.id);
    });
    if(checkActiveTabs(t)){return;}
    activeTabs.push({
        'id':t.id,
        'weapon':'flash'
    });
}
function plasmaClick(j,t){
    if(isWS(t.url)){return;}
    trackButton('Context','Select Weapon','Plasma gun');
    chrome.tabs.executeScript(t.id, {
        code: "var param='plasma';"
    },function(){
        runContent(t.id);
    });
    if(checkActiveTabs(t)){return;}
    activeTabs.push({
        'id':t.id,
        'weapon':'plasma'
    });
}

//history
function swordClick(j,t){
    if(isWS(t.url)){return;}
    trackButton('Context','Select Weapon','Sword');
    chrome.tabs.executeScript(t.id, {
        code: "var param='sword';"
    },function(){
        runContent(t.id);
    });
    if(checkActiveTabs(t)){return;}
    activeTabs.push({
        'id':t.id,
        'weapon':'sword'
    });
}
function axClick(j,t){
    if(isWS(t.url)){return;}
    trackButton('Context','Select Weapon','Ax');
    chrome.tabs.executeScript(t.id, {
        code: "var param='ax';"
    },function(){
        runContent(t.id);
    });
    if(checkActiveTabs(t)){return;}
    activeTabs.push({
        'id':t.id,
        'weapon':'ax'
    });
}
function bowClick(j,t){
    if(isWS(t.url)){return;}
    trackButton('Context','Select Weapon','Bow');
    chrome.tabs.executeScript(t.id, {
        code: "var param='bow';"
    },function(){
        runContent(t.id);
    });
    if(checkActiveTabs(t)){return;}
    activeTabs.push({
        'id':t.id,
        'weapon':'bow'
    });
}
function spearClick(j,t){
    if(isWS(t.url)){return;}
    trackButton('Context','Select Weapon','Spear');
    chrome.tabs.executeScript(t.id, {
        code: "var param='spear';"
    },function(){
        runContent(t.id);
    });
    if(checkActiveTabs(t)){return;}
    activeTabs.push({
        'id':t.id,
        'weapon':'spear'
    });
}
function cannonClick(j,t){
    if(isWS(t.url)){return;}
    trackButton('Context','Select Weapon','Cannon');
    chrome.tabs.executeScript(t.id, {
        code: "var param='cannon';"
    },function(){
        runContent(t.id);
    });
    if(checkActiveTabs(t)){return;}
    activeTabs.push({
        'id':t.id,
        'weapon':'cannon'
    });
}

// other fce
function runContent(id){
    var t = {
        'reset': translate('content_reset'),
        'share': translate('content_share'),
        'exit': translate('content_exit'),
        'text1': translate('content_text1'),
        'text2': translate('content_text2')
    };
    chrome.tabs.executeScript(id,{
        code: 'var translate = '+JSON.stringify(t)+';'
    },function(){
        chrome.tabs.executeScript(id,{
            file:'content.js'
        });
    });
}

// inject TRY IT - text
function tryItText(wpn,pck,tab){
    trackButton('Premium page','Try it',wpn);
    chrome.tabs.executeScript(tab.id,{
        code: 'document.getElementById("title").innerHTML = "'+translate('bg_try_it_text1')+' '+wpn+' '+translate('bg_try_it_text2')+' '+pck+' '+translate('bg_try_it_text3')+'";'
    },function(){});
}

// LISTENERS

$(document).ready(function(){
    
    initBg();
    
});

chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
    if(request.exit){
        //if(!capture){
            capture=true;                     
            chrome.tabs.executeScript(sender.tab.id, {
                code: '$("#wd_text_loader").remove();$("#weapon").remove();$("#stamp").remove();$("#spray").remove();$("#reset").remove();$("#cursor").remove();$("#close").remove(); $("#facebook_button").remove();$("#sound_button").remove(); $("#loaderImage").remove();'
            },function(){
                chrome.tabs.captureVisibleTab(null, {format:'jpeg', quality:85}, function (image){
                    var text = translate('fbshare_text');
                    chrome.tabs.reload(sender.tab.id);
                    if(control.getPref('facebook_token')){
                        facebook.apiPostPhoto(text,image,function(ok){});
                    }else{
                        facebook.login(function(ok){
                            facebook.apiPostPhoto(text,image,function(ok){});
                        });
                    }
                    
                });
            });
        //}         
        active=false;
        for(var i=0;i<activeTabs.length;i++){
            if(activeTabs[i]==sender.tab.id)
                activeTabs.splice(i,1);
        }
    }else if(request.get_sound){
        sendResponse(getPref('sound_off'));
    }else if(request.set_sound){
        if(request.set_sound == 'on'){
            setPref('sound_off',false);
        }else{
            setPref('sound_off',true);
        }
    }else if(request.newWeapon2_activate){//free
        control.setPref('newWeapon2', true);
        setContext();        
    }else if(request.trackButton){
        trackButton(request.trackButton[0],request.trackButton[1],request.trackButton[2],request.trackButton[3]);
    }
});

// OTHER

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

function isWS(url){
    if(url.indexOf('chrome.google.com/webstore') != -1 || url.indexOf('chrome://') != -1){
        alert(translate('url_not_work'));
        return true;
    }
    return false;
}

function checkActiveTabs(t){
    for(var i=0;i<activeTabs.length;i++){
        if(activeTabs[i].id==t.id){           
            return true;
        }
    }
    return false;
}