function closeClick(){
    $('#flamethrowerPopup').hide('slow',function(){
        $('#flamethrowerPopup').remove();
    });
    trackButton('Promotion','Close Popup');
}

function trackButton(param1,param2,param3,param4){
    chrome.extension.sendRequest({            
        trackButton:[param1,param2,param3,param4]
    },function(response) {});
}

$('body').append(
    $('<div></div>').attr({
        id:'flamethrowerPopup'
    }).css({
        border:'solid 1px',
        display:'none',
        position:'fixed',        
        height:'350px',  
        width:'600px',
        background:'#ffffff',  
        left: '200px',
        top: '150px', 
        'text-align':'center',
        'z-index': '9999999',
        'margin-left': '60px'  
    })
);
$('#flamethrowerPopup')
    .append(
        $('<p></p>')
        .html('Share this extension with the world and you will get this weapons:<br />'+((!pref_newWeapon1)?'- Shotgun<br />- Stamp<br />':'')+'- Flamethrower<br />- Granade<br />- RPG<br />- Atom Bomb'+((pref_newWeapon1)?'<br /><br /><br /><br />':''))
        .css({
            margin:'45px 0px 0px 0px',
            color:'#3AC2F1',
            'text-shadow':' black 1px 1px 1px',
            'font-size':'20px',
            'line-height': '24px'

        })
    )
    .append(
        $('<img src="'+chrome.extension.getURL('images/sipka_like.png')+'" alt="" style="position:absolute;left:22px;top:214px;" />')
    )
    .append(
        $('<img src="'+chrome.extension.getURL('images/share_fb.png')+'" alt="" style="position:absolute;left:160px;top:240px;cursor:pointer;" />').click(function(){
            closeClick();
            var url = 'https://www.facebook.com/sharer.php?u='+encodeURIComponent('https://chrome.google.com/webstore/detail/website-destroyer/hfdklionolegofhffnhoagpmlailnnni');
            window.open(url,'_blank');
            chrome.extension.sendRequest({            
                newWeapon2_activate:true,
                menuItemId: menuItemId
            },function(response) {});
            trackButton('Promotion','Share','Facebook');
        })
    )
    .append(
        $('<img src="'+chrome.extension.getURL('images/share_twt.png')+'" alt="" style="position:absolute;left:365px;top:240px;cursor:pointer;" />').click(function(){
            closeClick();
            var url = 'http://twitter.com/home?status=' + encodeURIComponent('I just beat the sh** out of my browser with this: https://chrome.google.com/webstore/detail/website-destroyer/hfdklionolegofhffnhoagpmlailnnni #chrome #extension');
            window.open(url,'_blank');
            chrome.extension.sendRequest({            
                newWeapon2_activate:true,
                menuItemId: menuItemId
            },function(response) {});
            trackButton('Promotion','Share','Tweet');
        })
    )
    .append(
        $('<input type="button"/></input>')
        .attr({
            id:'closePopup',
            value:'X'
        })
        .css({ 
            'position':'absolute',
            top:'10px',
            right:'10px',
            'font-weight': 'bold',
            'border':'none',
            'border-width': '1px',
            'padding':'3px 5px',    
            'cursor':'pointer',
            'color':'#999',
            'background-color': '#fff'
        })
        .click(closeClick)
    );
        
$('#flamethrowerPopup').show('slow');