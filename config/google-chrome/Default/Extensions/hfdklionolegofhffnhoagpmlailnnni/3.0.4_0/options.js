var bgPage = chrome.extension.getBackgroundPage();
//var addCityEnable = false;

function trackButton(param1,param2,param3,param4){
    chrome.extension.sendRequest({            
        trackButton:[param1,param2,param3,param4]
    },function(response) {});
}

// OBECNE FCE
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
function setStats(){
      if(getPref('stats')){
          setPref('stats',false);
          $('#stats_check').removeAttr('checked');
      }else{
          setPref('stats',true);
          $('#stats_check').attr('checked','checked');
      }
      showSaved();
}
function renderStats(){
      if(getPref('stats')){
          $('#stats_check').attr('checked','checked');
      }
}
/*function setUpdateNotify(){
      if(getPref('update_notify_active')){
          setPref('update_notify_active',false);
          $('#update_notify_check').removeAttr('checked');
      }else{
          setPref('update_notify_active',true);
          $('#update_notify_check').attr('checked','checked');
      }
      showSaved();
}
function renderUpdateNotify(){
      if(getPref('update_notify_active')){
          $('#update_notify_check').attr('checked','checked');
      }
}*/
function showSaved(){
    $('#leftpanel .saved').fadeIn(300).delay(1500).fadeOut(300);
}
function initCheck(id){
    if(getPref(id)){
        $('#'+id).attr('checked','checked');
    }
}
function changeCheck(id){
    if(getPref(id)){
        setPref(id,false);
        $('#'+id).removeAttr('checked');
    }else{
        setPref(id,true);
        $('#'+id).attr('checked','checked');
    }
    showSaved();
}
    
// INIT
$(document).ready(function(){
    

    renderStats();
    //renderUpdateNotify();
    
    // ALL TRANSLATE
    $('.i18n').each(function(){
        var id = $(this).attr('i18n');
        var text = chrome.i18n.getMessage(id);
        $(this).val(text);
        $(this).html(text);
    });
    
    //UNIV CHECK (id=pref)
    $('input[type=checkbox]').each(function(){
        if($(this).hasClass('univ_check')){
            initCheck($(this).attr('id'));
        }
    });
    $('input[type=checkbox]').change(function(){
        if($(this).hasClass('univ_check')){
            changeCheck($(this).attr('id'));
        }
    });
    
    //LAYOUT
    $('#h1').html(chrome.app.getDetails().name);
    $('#leftpanel ul li').click(function(){
        var rel = $(this).attr('rel');
        $('#leftpanel ul li').removeClass('active');
        $(this).addClass('active');
        $('.change_blok').addClass('none');
        $('#' + rel).removeClass('none');
    });
    $('#close').click(function(){
        window.close();
    });
    
    // OBECNE FCE
    $('#close').click(function(){
        window.close();
    });
    $('#stats_check').change(function(){
        if(getPref('stats')){
            trackButton('Options','Sending statistics','Uncheck');
        }else{
            trackButton('Options','Sending statistics','Check');
        }
        setStats();
    });
    /*$('#update_notify_check').change(function(){
        if(getPref('update_notify_active')){
            trackButton('Options','New features notifications','Uncheck');
        }else{
            trackButton('Options','New features notifications','Check');
        }
        setUpdateNotify();
    });*/
           
});