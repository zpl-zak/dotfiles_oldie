var facebook = {
    apiUrl: 'https://graph.facebook.com/',
    clientId: '210169539151166',
    clientSecret: 'e28e6cc6447c80ffc93262cea05360e8',
    token: undefined,
    loginTabId: undefined,
    init: function(){
        this.token = control.getPref('facebook_token');
        if(this.token && this.token!=''){
            this.checkTokenActive();
        }else{
            this.logout();
        }
    },
    login: function(callback){
        var url = this.apiUrl + "oauth/authorize?client_id=" + this.clientId + "&redirect_uri=http://www.wips.com/&type=user_agent&display=page&scope=publish_stream";
    		chrome.tabs.getSelected(null,function(tab){
            chrome.tabs.create({
                url: url,
                index: tab.index
            },function(tab){
                facebook.loginTabId = tab.id;
                setTimeout(function(){
                    facebook.checkTokenUrl(function(ok){ if(ok) callback(true); });
                },1000);
            });
        });
    },
    checkTokenUrl: function(callback){
        chrome.tabs.get(this.loginTabId, function(tab){
          if(tab){
            try{
                facebook.token = tab.url.split('access_token=')[1].split('&')[0];
                control.setPref('facebook_token',facebook.token);
                chrome.tabs.remove(tab.id, function(){});
                setTimeout(function(){
                    facebook.refreshToken();
                },5000);
                callback(true);
            }catch(e){
                setTimeout(function(){
                    facebook.checkTokenUrl(function(ok){ if(ok) callback(true); });
                },1000);
            };
          }
        });
    },
    logout: function(){
        //control.facebookActive = false;
        this.token = undefined;
        control.setPref('facebook_token','');
    },
    checkTokenActive: function(callback){
        var url = this.apiUrl + 'me?locale=' + translate('locale_fb') + '&access_token=' + this.token;
        var r = new XMLHttpRequest();
        r.open("GET", url, true);
        r.onreadystatechange = function (){
            if(r.readyState == 4){
                // token ok
                if(r.status == 200){
                    //control.facebookActive = true;
                    setTimeout(function(){
                        facebook.refreshToken();
                    },5000);
                    var out = JSON.parse(r.responseText);
                    control.setPref('my_user_id',out.id);
                // neplatny token
                }else if(r.status == 400){
                    facebook.login();
                // ostatni chyby
                }else{
                    facebook.logout();
                }
            }
        };                        
        r.send(null);
    },
    apiGetJson: function(id,query,offset,read,callback){
        var url = this.apiUrl + id + '/' + query + '?locale=' + translate('locale_fb') + '&limit=30&access_token=' + this.token;
        if(offset && offset!=0){
            url += '&until=' + offset;
        }
        if(read){
            url += '&include_read=true';
        }
        var r = new XMLHttpRequest();
        r.open("GET", url, true);
        r.onreadystatechange = function (){
            if(r.status == 200 && r.readyState == 4){
                var data = JSON.parse(r.responseText);
                if(query == 'comments'){
                    callback(query,data.data,id);
                }else{
                    callback(query,data.data,offset);
                }
            }
        };
        r.send(null);
    },
    apiPostText: function(message,callback){
        var url = this.apiUrl + 'me/feed';
        var r = new XMLHttpRequest();
        r.open("POST", url, true);
        r.onreadystatechange = function (){
            if(r.readyState == 4){
                if(r.status == 200){
                    callback(true);
                }else{
                    callback(false);
                }
            }
        };
        var data = 'access_token=' + this.token;
        if(message){
            data += '&message=' + message + '&link=http://chrome.google.com/webstore/detail/'+config.webstoreId;
        }
        r.send(data);
    },
    apiPostPhoto: function(message,img,callback){
        if(message){
            message += '\n';
        }else{
            message = '';
        }
        var imageData = img.split('base64,')[1];
        var blob = dataURItoBlob(imageData,'image/png');
        var fd = new FormData();
        fd.append("access_token",this.token);
        fd.append("source", blob);
        fd.append("message",message+'http://bit.ly/Website_Destroyer_Chrome');
        $.ajax({
            url:"https://graph.facebook.com/me/photos?access_token=" + this.token,
            type:"POST",
            data:fd,
            processData:false,
            contentType:false,
            cache:false,
            success:function(data){
                callback(true);
            },
            error:function(shr,status,data){
                callback(false);
            },
            complete:function(){
            }
        });
        function dataURItoBlob(dataURI,mime){
            var byteString = window.atob(dataURI);
            var ia = new Uint8Array(byteString.length);
            for (var i = 0; i < byteString.length; i++) {
                ia[i] = byteString.charCodeAt(i);
            }
            var blob = new Blob([ia], { type: mime });
            return blob;
        }
    },
    apiDelete: function(id,query,callback){
        var url = this.apiUrl + id + '/' +  query;
        var r = new XMLHttpRequest();
        r.open("POST", url, true);
        r.onreadystatechange = function (){
            if(r.status == 200 && r.readyState == 4){
                callback('delete',id);
            }
        };
        var data = 'method=delete&locale=' + translate('locale_fb') + '&access_token=' + this.token;
        r.send(data);
    },
    apiGetUrl: function(user,query){
        return this.apiUrl + user + '/' + query + '?locale=' + translate('locale_fb') + '&access_token=' + this.token;
    },
    fql: function(query,callback){
        var url = this.apiUrl + 'fql?q=' + query.replace(' ','+') + '&locale=' + translate('locale_fb') + '&access_token=' + this.token;
        var r = new XMLHttpRequest();
        r.open("GET", url, true);
        r.onreadystatechange = function (){
            if(r.status == 200 && r.readyState == 4){
                callback(JSON.parse(r.responseText));
            }
        };
        r.send(null);
    },
    refreshToken: function(){
        var url = this.apiUrl + 'oauth/access_token?client_id=' + this.clientId + '&client_secret=' + this.clientSecret + '&grant_type=fb_exchange_token&fb_exchange_token=' + this.token;
        var r = new XMLHttpRequest();
        r.open("GET", url, true);
        r.onreadystatechange = function (){
            if(r.readyState == 4 && r.status == 200){
                facebook.token = r.responseText.split('access_token=')[1].split('&expires=')[0];
                control.setPref('facebook_token',facebook.token);
            }
        };                        
        r.send(null);
    }
}