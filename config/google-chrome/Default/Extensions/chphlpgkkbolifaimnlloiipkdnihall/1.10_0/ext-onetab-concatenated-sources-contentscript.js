l_=false;
Ju=true;

document.addEventListener("mousedown",function(P3){


if(P3.button==2){
var N3=P3.target;

while(N3){
if(N3 instanceof HTMLAnchorElement){

var w3=N3;

var g3=N3['href'];

var c3=N3.innerText;
if(!c3)c3='';
if(c3.length>0){
if(c3.charAt(0)==' ')c3=c3.substr(1)
}
if(c3=='')c3=g3;

var S3=c3;

window['chrome']['runtime']['sendMessage'](undefined,{type:'linkRightClick',url:g3,title:S3},undefined,function(PG){});

break
}
else {
N3=N3.parentNode
}
}
}
},true)












