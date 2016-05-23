var x1='1.10';

var b1=false;
var YK=false;


var gX="onmousemove";
var rj="onmousedown";
var bK="onmouseover";
var G="onmouseup";
var u1="onmouseout";
var TK="onclick";
var H1="ondblclick";
var dX="onmouseleave";
var Tj="mousemove";
var vX="mousedown";
var e1="mouseover";
var R1="mouseup";
var bX="mouseout";
var M1="click";
var T="dblclick";


var _X=!true;

var X1=100006;

function lj(){
return document.body
};

var TX='aaa';l_=false;
Ju=true;

var QX=function(){

window['_gaq']=window['_gaq']||[];
window['_gaq'].push(['_setAccount','UA-38573374-2']);
window['_gaq'].push(['_trackPageview']);

var hx=document.createElement('script');
hx['type']='text/javascript';
hx['async']=true;
hx['src']='https://ssl.google-analytics.com/ga.js';
var sx=document.getElementsByTagName('script')[0];sx.parentNode.insertBefore(hx,sx)
};

QX();

function h1(Wx,kx,Gx){

if(!kx)kx={};

var Mx={};

Mx.type=Wx;
Mx.PW=VK.VW(kx);

window['chrome']['runtime']['sendMessage'](undefined,Mx,undefined,function(V$){

var $$={};
if(V$&&V$.PW)$$=VK.parse(V$.PW);

if(Gx)Gx($$)
})
};

function wK(Jx,_x){
window['chrome']['runtime']['onMessage']['addListener'](
function(r$,Y$,H$){
if(Jx==r$.fW){

var Q$={};
if(r$&&r$.PW)Q$=VK.parse(r$.PW);
_x(Q$)


}
})
};

function PK(Jw){
document.addEventListener('DOMContentLoaded',function(){Jw()})
};



var r1=[
{fontFamily:'Open Sans',fontStyle:'normal',fontWeight:'300'},
{fontFamily:'Open Sans',fontStyle:'normal',fontWeight:'400'},
{fontFamily:'Open Sans',fontStyle:'italic',fontWeight:'400'},
{fontFamily:'Open Sans',fontStyle:'normal',fontWeight:'600'},
{fontFamily:'Open Sans',fontStyle:'normal',fontWeight:'700'}
];

function B1(YH,DH){
var eH=250;
var QH=0;
var $H=50;
var nH=false;
var BH=0;

var lH=false;
setTimeout(function(){
lH=true
},eH);

for(var rH=0,VH=YH.length;rH<VH;++rH){
(function(R$){
var Z$=document.createElement('span');

Z$.innerHTML='giItT1WQy@!-/#';

Z$.style.position='absolute';
Z$.style.left='-10000px';
Z$.style.top='-10000px';

Z$.style.fontSize='300px';

Z$.style.fontFamily='sans-serif';
Z$.style.fontVariant='normal';
Z$.style.fontStyle=R$.fontStyle;
Z$.style.fontWeight=R$.fontWeight;
Z$.style.letterSpacing='0';
document.body.appendChild(Z$);


var f$=Z$.offsetWidth;

Z$.style.fontFamily=R$.fontFamily;

var T$;

function K$(){

if(Z$&&Z$.offsetWidth!=f$){
++BH;


Z$.parentNode.removeChild(Z$);
Z$=null
}


if((BH>=YH.length)||lH){
if(T$){
clearInterval(T$)
}

if((BH==YH.length)||lH){
if(!nH){
nH=true;
DH()
}
return true
}
}
};

if(!K$()){
T$=setInterval(K$,$H)
}
})(YH[rH])
}


};

function XK(ZH){
var HH=document.createElement('div');
HH.style.paddingTop='40px';
HH.style.paddingBottom='24px';
HH.style.paddingLeft='268px';
HH.style.fontSize='18px';
HH.style.color='#777';
HH.style.fontWeight='300';
HH.style.borderBottom='1px dashed #ddd';
HH.style.marginBottom='10px';
HH.appendChild(document.createTextNode(ZH));
return HH
};

function pj(){
var TH=document.createElement('img');
TH.style.height=114/2+'px';
TH.style.width=414/2+'px';
TH.style.position='absolute';
TH.style.top='16px';
TH.style.left='22px';
TH.src='images/top-left-logo.png';

return TH
};

function T1(IH,FH,fH){
var xH=document.createElement('div');

var RH=document.createElement('div');
RH.style.paddingLeft='30px';
RH.style.position='relative';
RH.style.color='#777';
var KH=document.createElement('img');
KH.src=IH?'images/twister-open.png':'images/twister-closed.png';
KH.style.width=48/2+'px';
KH.style.height=50/2+'px';
KH.style.position='absolute';
KH.style.left='0px';
KH.style.top='0px';
RH.appendChild(document.createTextNode(FH));
RH.style.fontSize='16px';
RH.style.cursor='pointer';

xH.appendChild(RH);
RH.appendChild(KH);

var pH=document.createElement('div');
pH.style.paddingLeft='30px';
pH.style.paddingTop='10px';
pH.appendChild(fH);
pH.style.display=IH?'block':'none';

xH.appendChild(pH);

RH.onclick=function(){
IH=!IH;
KH.src=IH?'images/twister-open.png':'images/twister-closed.png';
pH.style.display=IH?'block':'none'
};

return xH
};

function dK(jH,aH,CH,mH){


var UH=document.createElement('div');
UH.style.fontSize=aH+'px';
UH.className='clickable';
var yH=document.createElement('span');

if(mH){
var LH=document.createElement('span');
LH.style.color='#f00';
LH.appendChild(document.createTextNode('NEW '));
yH.appendChild(LH)
}


if(typeof jH=='string'){
yH.appendChild(document.createTextNode(jH))
}
else {
yH.appendChild(jH)
}

yH.style.verticalAlign='middle';
yH.onclick=function(){
CH(yH)
};
UH.appendChild(yH);
return UH
};




















var VK={

VW:function(zH){
var SH,cH,PH,uH='',oH;

switch(typeof zH){
case 'object':;
if(zH){
if(zH instanceof Array){
for(cH=0;cH<zH.length;++cH){
oH=this.VW(zH[cH]);
if(uH){
uH+=','
}
uH+=oH
}
return '['+uH+']'
}else if(typeof zH.toString!='undefined'){
for(cH in zH){
oH=zH[cH];
if(typeof oH!='undefined'&&typeof oH!='function'){
oH=this.VW(oH);
if(uH){
uH+=','
}
uH+=this.VW(cH)+':'+oH
}
}
return '{'+uH+'}'
}
}
return 'null';
case 'number':;
return isFinite(zH)?String(zH):'null';
case 'string':;
PH=zH.length;
uH='\"';
for(cH=0;cH<PH;cH+=1){
SH=zH.charAt(cH);
if(SH>=' '){
if(SH=='\\'||SH=='\"'){
uH+='\\'
}
uH+=SH
}else {
switch(SH){
case '\b':;
uH+='\\b';
break;
case '\f':;
uH+='\\f';
break;
case '\n':;
uH+='\\n';
break;
case '\r':;
uH+='\\r';
break;
case '\t':;
uH+='\\t';
break;
default:; 
SH=SH.charCodeAt();
uH+='\\u00'+Math.floor(SH/16).toString(16)+
(SH%16).toString(16)
}
}
}
return uH+'\"';
case 'boolean':;
return String(zH);
default:; 
return 'null'
}
},
parse:function(NH){
var bH=0;
var sH=' ';

function iH(x$){
throw {
name:'JSONError',
message:x$,
cW:bH-1,
text:
NH}
};

function AH(){
sH=NH.charAt(bH);
bH+=1;
return sH
};

function XH(){
while(sH!==''&&sH<=' '){
AH()
}
};

function vH(){
var m$,I$='',p$,F$;

if(sH=='\"'){
n_:while(AH()){
if(sH=='\"'){
AH();
return I$
}else if(sH=='\\'){
switch(AH()){
case 'b':;
I$+='\b';
break;
case 'f':;
I$+='\f';
break;
case 'n':;
I$+='\n';
break;
case 'r':;
I$+='\r';
break;
case 't':;
I$+='\t';
break;
case 'u':;
F$=0;
for(m$=0;m$<4;m$+=1){
p$=parseInt(AH(),16);
if(!isFinite(p$)){
break n_
}
F$=F$*16+p$
}
I$+=String.fromCharCode(F$);
break;
default:; 
I$+=sH
}
}else {
I$+=sH
}
}
}
iH("Bad string")
};

function EH(){
var C$=[];

if(sH=='['){
AH();
XH();
if(sH==']'){
AH();
return C$
}
while(sH){
C$.push(gH());
XH();
if(sH==']'){
AH();
return C$
}else if(sH!=','){
break
}
AH();
XH()
}
}
iH("Bad array")
};

function OH(){
var y$,j$={};

if(sH=='{'){
AH();
XH();
if(sH=='}'){
AH();
return j$
}
while(sH){
y$=vH();
XH();
if(sH!=':'){
break
}
AH();
j$[y$]=gH();
XH();
if(sH=='}'){
AH();
return j$
}else if(sH!=','){
break
}
AH();
XH()
}
}
iH("Bad object")
};

function wH(){
var L$='',a$;
if(sH=='-'){
L$='-';
AH()
}
while(sH>='0'&&sH<='9'){
L$+=sH;
AH()
}
if(sH=='.'){
L$+='.';
while(AH()&&sH>='0'&&sH<='9'){
L$+=sH
}
}
if(sH=='e'||sH=='E'){
L$+='e';
AH();
if(sH=='-'||sH=='+'){
L$+=sH;
AH()
}
while(sH>='0'&&sH<='9'){
L$+=sH;
AH()
}
}
a$=+L$;
if(!isFinite(a$)){
iH("Bad number")
}else {
return a$
}
};

function qH(){
switch(sH){
case 't':;
if(AH()=='r'&&AH()=='u'&&AH()=='e'){
AH();
return true
}
break;
case 'f':;
if(AH()=='a'&&AH()=='l'&&AH()=='s'&&
AH()=='e'){
AH();
return false
}
break;
case 'n':;
if(AH()=='u'&&AH()=='l'&&AH()=='l'){
AH();
return null
}
break
}
iH("Syntax error")
};

function gH(){
XH();
switch(sH){
case '{':;
return OH();
case '[':;
return EH();
case '\"':;
return vH();
case '-':;
return wH();
default:; 
return sH>='0'&&sH<='9'?wH():qH()
}
};

return gH()
}
};
function WK(){

this.dj=null;
this.qj=null;
this.Cj=null;
this.wW=null;
this.hj=null;
this.zj=null;
this.aj=false;
this.pW=new Array();
this.oW=null;
this.FW=null
};
WK.IW=3;

WK.prototype.Jj=function(n5,JH,_H,B5,hH,dH,kH,MH,WH){
var GH=this;

n5.onmousedown=function(U$){
var o$=false;
NX(U$,n5,null,function(Jl,_l,Gl,Wl){

if(WH){
o$=WH()
}
},function(VN,DN,nN,lN,BN,eN,$N,YN){

if(!GH.aj&&!o$){
if((Math.abs(nN)>WK.IW)||(Math.abs(lN)>WK.IW)){
GH.aj=true;
GH.pW=new Array();

GH.dj=JH;

GH.Cj=_H.offsetWidth;
GH.wW=_H.offsetHeight;

GH.oW=_H.parentNode;
GH.FW=_H.nextSibling;
_H.parentNode.removeChild(_H);

GH.qj=_H;
GH.hj=B5;

GH.zj=document.createElement('div');
GH.zj.style.zIndex=X1;
GH.zj.style.position='absolute';
GH.zj.style.width=GH.Cj+'px';
GH.zj.style.height=GH.wW+'px';
GH.zj.appendChild(GH.qj);
lj().appendChild(GH.zj);


hH()

}

}
if(GH.aj){
GH.zj.style.left=$N+7+'px';

GH.zj.style.top=YN-16+'px'
}

},function(TN,ZN,KN,RN,rN,HN){

if(!GH.aj){
dH()
}
else {
GH.aj=false;

lj().removeChild(GH.zj);

if(GH.Wj){
GH.Wj(GH.dj)
}
else {
kH()
}
for(var fN in GH.pW){
var QN=GH.pW[fN];
QN.style.display='none'
}
GH.pW=new Array();
MH()
}


})

};
};

WK.prototype.vj=function(e5,Y5,D5,l5){
var V5=this;
hX(e5,function(u$){
u$.event.cancelBubble=true;
if(V5.aj){
if(e5!=V5.qj){

D5.style.display='block';
D5.style.width=V5.Cj-(b1?0:2)+'px';
D5.style.height=V5.wW-(b1?0:2)+'px';
D5.style.border='1px dashed #'+TX;
V5.Wj=l5;

for(var S$ in V5.pW){
var z$=V5.pW[S$];
if(Q1(z$.parentNode,D5)&&D5!=z$)z$.style.display='none'
}

if(!GX(V5.pW,D5))V5.pW.push(D5)

}
}
});
Kj(e5,function(P$){
P$.event.cancelBubble=true;
if(V5.aj){
if(e5!=V5.qj){
D5.style.display='none';
V5.Wj=null;

Zj(D5,V5.pW)

}
}
})
};

WK.prototype.AW=function(r5){
var Q5=document.createElement('div');
r5.appendChild(Q5);
return Q5
};
function HK(I5,F5,f5,K5,H5,Z5,T5,p5){

var x5=this;

this.parentElement=I5;
this.TW=function(){};
this.EW=p5;
this.value=f5;
this.ZW=K5;
this.fontWeight=H5;
this.vW=Z5;
this.CW=T5;

this.mW=false;

this.QW=false;

this.rW=document.createElement('div');

this.rW.style.display='inline-block';
this.rW.style.position='relative';
this.rW.style.overflow='hidden';

this.cj=document.createElement('div');

this.cj.style.textDecoration='none';
this.cj.style.display='block';
this.cj.className=this.vW;
this.cj.style.whiteSpace='nowrap';

this.cj.style.fontSize=this.ZW+'px';
this.cj.style.fontWeight=this.fontWeight;
this.cj.style.overflow='hidden';

this.gW(this.value,false,true);
this.TW=F5;

this.rW.appendChild(this.cj);

this.parentElement.appendChild(this.rW);




var R5=function(){

if(x5.mW)return; 

if(x5.EW)x5.EW();

x5.mW=true;
var c$=document.createElement('input');
c$.setAttribute("autocomplete","off");
c$.setAttribute("spellcheck","false");
c$.style.position='absolute';
c$.style.left='0px';
c$.style.top='0px';
c$.style.width=x5.cj.offsetWidth+'px';
c$.style.height=x5.cj.offsetHeight+0+'px';
c$.style.overflow='hidden';
c$.style.border='none';
c$.style.paddingTop='0px';
c$.style.paddingLeft='0px';
c$.style.paddingRight='0px';
c$.style.paddingBottom='0px';
c$.style.marginTop='0px';
c$.style.marginLeft='0px';
c$.style.marginRight='0px';
c$.style.marginBottom='0px';
c$.style.background='transparent';


K(x5.cj);
x5.cj.innerHTML='&nbsp;';
x5.cj.style.width='1px';
c$.className=x5.vW;
c$.style.fontSize=x5.ZW+'px';
c$.style.fontWeight=x5.fontWeight;

x5.rW.appendChild(c$);
c$.value=x5.value;

c$.onblur=function(){

x5.rW.removeChild(c$);
x5.gW(x5.value,false,false);
setTimeout(function(){

x5.mW=false
},300);
return false
};

c$.onkeyup=function(pN){

var FN=pN;
if(!FN)FN=window.event;
if(FN)if(FN.keyCode==13){
c$.blur();
return 
}

x5.value=c$.value;
var xN=L1(x5.value,x5.vW,x5.ZW,x5.fontWeight,false);

c$.style.width=xN+30+'px';
x5.rW.style.width=xN+30+'px';

F5(c$.value,false,xN+30);

return false

};
c$.onmouseup=c$.onkeyup;

c$.onkeyup();

setTimeout(function(){
c$.focus()

},100);

return false

};

this.nW=R5;

this.cj.onmousedown=function(g$){
};

this.cj.onmouseup=function(w$){

if(x5.mW)return true;

var N$=false;

if(x5.CW)N$=x5.CW();

if(!N$)R5();
return false

};
};



HK.prototype.RW=function(){
var m5=L1(this.value,this.vW,this.ZW,this.fontWeight,false);
m5=Math.max(m5,20);
this.cj.style.width=m5+'px';
this.rW.style.width=m5+'px';
return m5
};

HK.prototype.gW=function(a5,j5,y5){
this.value=a5;
if(a5==''||Y1(a5)==''){
this.cj.innerHTML='&nbsp;'
}
else {
K(this.cj);
this.cj.appendChild(document.createTextNode(a5))
}
var C5=this.RW();
if(!y5)this.TW(a5,!j5,C5)
};


var VX=null;
var Qj=new Array();
function L1(o5,c5,P5,U5,z5){


if(!U5)U5='normal';
if(U5===true)U5='bold';
if(U5===false)U5='normal';

for(var g5 in Qj){
var u5=Qj[g5];
if(u5.text==o5){
if(u5.className==c5&&u5.BW==P5&&u5.fontWeight==U5&&!!u5.yj==!!z5){


return u5.width
}
}
}

if(VX==null){
VX=document.createElement('div');
var S5=VX;
S5.style.visibility='hidden';
S5.style.position='absolute';
S5.style.left='-8000px';
S5.style.top='-8000px';
S5.style.whiteSpace='nowrap';
lj().appendChild(S5)
}
var S5=VX;
S5.className=c5;
S5.style.fontSize=P5+'px';
S5.style.fontStyle=z5?'italic':'normal';
if(U5)S5.style.fontWeight=U5;
S5.appendChild(document.createTextNode(o5));

var L5=S5.offsetWidth;
K(S5);

var u5=new Object();
u5.text=o5;
u5.className=c5;
u5.BW=P5;
u5.fontWeight=U5;
u5.yj=!!z5;
u5.width=L5;
Qj.push(u5);

return L5

};


function eK(i5,v5){

i5=i5.substring(i5.indexOf('?')+1);

var N5=i5.split('&');
for(var E5 in N5){
var w5=N5[E5].split('=');

if(w5[0]==v5){
return decodeURIComponent(w5[1])
}
}
return undefined
};

function fK(A5){
if(A5.indexOf('://')==-1)A5='http://'+A5;
A5=A5.substring(A5.indexOf('://')+'://'.length);
if(A5.indexOf('/')!=-1)A5=A5.substring(0,A5.indexOf('/'));
return A5.toLowerCase()
};

function GX(q5,X5){
for(var b5 in q5)if(q5[b5]==X5)return true;
return false
};

function K(O5){
if(typeof O5=='string')O5=document.getElementById(O5);
if(!O5)return; 
while(O5.childNodes.length>0)O5.removeChild(O5.childNodes[0])
};

function j1(s5){
var d5=document.createElement('div');
d5.style.fontSize='1px';
d5.style.height=s5+'px';
d5.style.width=1+'px';
return d5
};

function Zj(h5,M5){
for(var k5=0;k5<M5.length;k5++){
if(M5[k5]==h5){
M5.splice(k5,1);
k5--
}
}
};


function H(J5){

var W5=J5?J5:window.event;

var nr=0;
var G5=0;
var _5=0;
var Br=0;

if(W5!=null){
if(b1){
_5=W5.shiftKey;
G5=W5.altKey;
nr=W5.ctrlKey

}
else {
_5=W5.shiftKey;
nr=W5.ctrlKey;
G5=W5.altKey;
Br=W5.metaKey
}
}
return (nr||Br||_5)
};


function GK(Vr){

var lr=Vr?Vr:window.event;

var Yr=0;
var er=0;
var Dr=0;
var $r=0;

if(lr!=null){
if(b1){
Dr=lr.shiftKey;
er=lr.altKey;
Yr=lr.ctrlKey

}
else {
Dr=lr.shiftKey;
Yr=lr.ctrlKey;
er=lr.altKey;
$r=lr.metaKey
}
}
return (Yr||$r)
};

function HX(Zr){

var rr=Zr?Zr:window.event;

var Rr=0;
var Qr=0;
var Hr=0;
var Tr=0;

if(rr!=null){
if(b1){
Hr=rr.shiftKey;
Qr=rr.altKey;
Rr=rr.ctrlKey

}
else {
Hr=rr.shiftKey;
Rr=rr.ctrlKey;
Qr=rr.altKey;
Tr=rr.metaKey
}
}
return (Hr)
};



function IK(fr){
fr['noCacheRandom']=A1()
};
function A1(){
return new Date().getTime()+Math.round(Math.random()*10000)+''
};

function xX(pr,xr,Fr){
IK(xr);
var Kr=VK.VW(xr);
kK(pr,Kr,function(v$){
if(Fr)Fr(VK.parse((v$)))
})
};

function kK(jr,mr,Cr){

var Ir=I1();

Ir.open(mr==null?"GET":"POST",jr,true);

Ir.setRequestHeader("Content-Type","text/xml");
Ir.onreadystatechange=function(){
var E$=false;



E$=(Ir.readyState==4);
if(E$){
var i$=Ir.responseText;
Cr(i$)
}
};

Ir.send(mr)

};

function I1(){
var yr=new XMLHttpRequest();
return yr
};

function U1(){

return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,function(b$){
var X$=Math.random()*16|0,A$=b$=='x'?X$:(X$&0x3|0x8);
return A$.toString(16)
})
};


function Y1(ar){
if(!ar==null||ar==undefined)return '';
return ar.replace(/^\s+/,'').replace(/\s+$/,'')
};

function FK(){
var Ur=document.createElement('span');
var Lr=document.createElement('span');
Lr.style.fontStyle='italic';
Lr.appendChild(document.createTextNode('One'));
Ur.appendChild(Lr);
Ur.appendChild(document.createTextNode('Tab'));
return Ur
};

function O(or){
var zr=or.split('OneTab');
var Sr=document.createElement('span');
for(var ur in zr){
if(zr[ur]=='')Sr.appendChild(FK());
else Sr.appendChild(document.createTextNode(zr[ur]))
}
return Sr
};


function B(gr){
var cr=new Date(gr.valueOf()),
Pr=(gr.getUTCDay()+6)%7,
wr;

cr.setUTCDate(cr.getUTCDate()-Pr+3);
wr=cr.valueOf();
cr.setUTCMonth(0,1);

if(cr.getUTCDay()!==4){
cr.setUTCMonth(0,1+((4-cr.getUTCDay())+7)%7)
}

return Math.ceil((wr-cr)/(7*24*3600*1000))+1
};
function pK(Nr,vr){
while(Nr.length<vr)Nr='0'+Nr;
return Nr
};
function a1(ir){
return (ir.getUTCFullYear()+'').substr(2)+pK(B(ir)+'',2)
};
var z1,LK,g,lK,wX;
var MK,_K;
var ej,nj;

var yK=!!('ontouchstart' in window);

function NX(Xr,Er,qr,br,Ar,Or){
z1=Er;
LK=qr;
g=br;
lK=Ar;
wX=Or;

ej=0;
nj=0;

if(yK&&(Xr instanceof TouchEvent)){
if(Xr.touches.length>1){

return 
}
MK=Xr.touches.item(0).pageX;
_K=Xr.touches.item(0).pageY;

document.addEventListener("touchmove",BK,false);
document.addEventListener("touchend",tj,false);
Xr.preventDefault()

}
else {

if(b1||YK){

MK=window.event.clientX+(YK?0:document.documentElement.scrollLeft)+document.body.scrollLeft;
_K=window.event.clientY+(YK?0:document.documentElement.scrollTop)+document.body.scrollTop
}
else {
MK=Xr.clientX+window.scrollX;
_K=Xr.clientY+window.scrollY
}

if(b1){
document.attachEvent(gX,BK);
document.attachEvent(G,tj);
window.event.cancelBubble=true;
window.event.returnValue=false
}
else {
document.addEventListener(Tj,BK,false);
document.addEventListener(R1,tj,false);
Xr.preventDefault()
}


}





g(z1,LK,MK,_K)


};

function BK(kr){
var Gr,Mr,dr,hr;

if(yK&&(kr instanceof TouchEvent)){
if(kr.touches.length>1){
dr=0;hr=0;
lK(z1,LK,dr,hr,MK,_K,Gr,Mr);
return tj(kr)
}
Gr=kr.touches.item(0).pageX;
Mr=kr.touches.item(0).pageY
}
else {
if(b1||YK){
Gr=window.event.clientX+(YK?0:document.documentElement.scrollLeft)+document.body.scrollLeft;
Mr=window.event.clientY+(YK?0:document.documentElement.scrollTop)+document.body.scrollTop
}
else {
Gr=kr.clientX+window.scrollX;
Mr=kr.clientY+window.scrollY
}
}


dr=Gr-MK;
hr=Mr-_K;

var sr=false;
if(ej!=dr||nj!=hr)sr=true;

ej=dr;
nj=hr;

if(sr){
lK(z1,LK,dr,hr,MK,_K,Gr,Mr)
}


if(b1){
window.event.cancelBubble=true;
window.event.returnValue=false
}
else {
kr.preventDefault()
}

};
function tj(Wr){

if(yK&&(Wr instanceof TouchEvent)){
document.removeEventListener("touchmove",BK,false);
document.removeEventListener("touchend",tj,false)
}
else {
if(b1){
document.detachEvent(gX,BK);
document.detachEvent(G,tj)
}
else {
document.removeEventListener(Tj,BK,false);
document.removeEventListener(R1,tj,false)
}
}

wX(z1,LK,ej,nj,MK,_K)

};

















function rK(n9,B9,Jr,_r){
this.KW=n9;
this.type=B9;
this.LW=Jr;
this.mj=_r
};

rK.prototype.remove=function(){

if(b1){
this.KW.detachEvent(this.type,this.LW)
}
else {
this.KW.removeEventListener(this.type,this.LW,this.mj)
}

};







function $(e9,l9){
e9.onmousemove=function(q$){l9(new m1(e9,q$))};

};
function hK(D9,V9){
D9.onmousedown=function(O$){V9(new m1(D9,O$))};

};
function z(Y9,Q9){
Y9.onmouseover=function(s$){Q9(new m1(Y9,s$))};

};
function sK(r9,H9){
r9.onmouseup=function(d$){H9(new m1(r9,d$))};

};
function o1(Z9,T9){
Z9.onmouseout=function(h$){T9(new m1(Z9,h$))};

};
function FX(R9,f9){
R9.onclick=function(k$){f9(new m1(R9,k$))};

};
function AX(K9,x9){
K9.ondblclick=function(M$){x9(new m1(K9,M$))};

};

function QK(F9,p9){
k1(F9,M1,TK,p9)
};
function _1(I9,m9){
k1(I9,T,H1,m9)
};

function hX(C9,j9){
return k1(C9,e1,bK,j9)
};
function cK(y9,a9){
return k1(y9,R1,G,a9)
};

function Kj(L9,U9){

var o9;
if(b1){
o9=function(G$){
U9(new m1(L9,G$))
};
L9.attachEvent(dX,o9);
return new rK(L9,dX,o9,false)
}
else {
o9=function(W$){
var _$,J$;
_$=W$.currentTarget;
J$=W$.relatedTarget;
if(_$==L9&&_$!=J$&&!Q1(_$,J$)){
U9(new m1(L9,W$))
}
};
L9.addEventListener(bX,o9,false);
return new rK(L9,bX,o9,false)
}
};



function g1(z9,u9){
if(b1){
z9.onmouseleave=function(Bg){
u9(new m1(z9,Bg))
};
}
else {
z9.onmouseout=function(ng){
var eg,lg;
eg=ng.currentTarget;
lg=ng.relatedTarget;
if(eg==z9&&eg!=lg&&!Q1(eg,lg)){
u9(new m1(z9,ng))
}
};
}
};

function xj(c9,P9){
if(b1){
for(var g9 in c9){
var S9=c9[g9];
S9.onmouseleave=vK(S9,c9,P9)
}
}
else {

for(var g9 in c9){
var S9=c9[g9];
S9.onmouseout=M(S9,c9,P9)
}
}
};

function M(w9,v9,N9){
return function(Dg){
var Vg,Yg;
Vg=Dg.currentTarget;
Yg=Dg.relatedTarget;
if(Vg==w9&&Vg!=Yg&&!Q1(Vg,Yg)){
for(var $g in v9)if(Yg==v9[$g])return; 
N9(new m1(w9,Dg))
}
};
};
function vK(i9,A9,E9){
return function(){
for(var Qg in A9)if(window.event.toElement==A9[Qg])return; 
E9(new m1(i9,window.event))
};
};


function Q1(X9,q9){
try{
if(!q9)return false;
while(q9.parentNode)
if((q9=q9.parentNode)==X9)
return true;
return false
}
catch(b9){

return false
}

};

function m1(O9,s9){
this.Ej=O9;
this.event=s9;
this.Aj=null;
this.ij=null;
this.aW=function(){
if(this.Aj==null){
var rg=MX(O9,s9);
this.Aj=rg.x;
this.ij=rg.y
}
return this.Aj
};
this.jW=function(){
if(this.Aj==null){
this.aW()
}
return this.ij
};
};

function k1(k9,h9,M9,G9){

var d9=function(Hg){
var Zg=new m1(k9,Hg);
G9(Zg)
};

if(b1){
k9.attachEvent(M9,d9);
return new rK(k9,M9,d9,false)
}
else {
k9.addEventListener(h9,d9,false);
return new rK(k9,h9,d9,false)
}
};



function EK(W9,nE,J9,_9,BE){
hK(W9,function(Tg){
NX(Tg.event,W9,nE,J9,_9,BE)
})
};

function RX(eE){
return S1(eE)
};


function MX(lE,DE){
if(b1||B_){
return new D_(window.event.offsetX,window.event.offsetY)
}
return S1(DE).iW(jK(lE))
};
function S1(VE){
if(b1||YK){
var YE=window.event.clientX+(YK?0:document.documentElement.scrollLeft)+document.body.scrollLeft;
var $E=window.event.clientY+(YK?0:document.documentElement.scrollTop)+document.body.scrollTop
}
else {
var YE=VE.clientX+window.scrollX;
var $E=VE.clientY+window.scrollY
}
return new D_(YE,$E)
};

function jK(QE){
var rE=QE;
var TE=0;
var ZE=0;

while(true){
var HE=rE.offsetParent;
if(HE==undefined)break;

TE+=rE.offsetLeft;
ZE+=rE.offsetTop;

rE=HE
}

return new D_(TE,ZE)
};


function Q(fE,KE,xE){
if(!xE)if(!e_())return; 

try{

if(KE==100){
fE.style.filter='';
fE.style.Sj='';
fE.style.opacity=''
}
else {
fE.style.filter='alpha(opacity='+KE+')';
fE.style.Sj=KE/100;
fE.style.opacity=KE/100
}
}
catch(RE){

}
};

function Hj(){
if(b1||YK)return (YK?0:document.documentElement.scrollTop)+document.body.scrollTop;
else return window.scrollY
};
function iX(){
if(b1||YK)return (YK?0:document.documentElement.scrollLeft)+document.body.scrollLeft;
else return window.scrollX
};

function WX(FE){
h1('getState',{},function(Rg){if(FE)FE(Rg)})
};
function l1(IE,pE){

h1('storeState',{Nj:IE},function(fg){if(pE)pE(fg)})
};

function pX(mE,CE){
h1('getSetting',{YW:mE},function(Kg){
if(CE)CE(Kg.value)
})
};

function BX(jE){
h1('getSettings',{},function(xg){if(jE)jE(xg)})
};

function CK(LE,aE,yE){
h1('storeSetting',{key:LE,value:aE},function(Fg){if(yE)yE(Fg)})
};

function I(oE,UE){
h1('storeSettings',{HW:oE},function(pg){if(UE)UE(pg)})
};

function UK(zE,SE,uE){
h1('restoreTabsMeta',{jj:zE,XW:SE},function(Ig){if(uE)uE(Ig)})
};

function RK(PE){
h1('upgradeAvailable',{},function(mg){if(PE)PE(mg.value)})
};

function cX(cE){
cE.sort(function(jg,Cg){

if(jg['starred']||Cg['starred']){
if(!Cg['starred'])return -1;
else if(!jg['starred'])return 1;
else {

if(jg['starredDate']>Cg['starredDate'])return 1;
if(jg['starredDate']<Cg['starredDate'])return -1;
return 0
}
}
else {
if(jg['createDate']>Cg['createDate'])return -1;
if(jg['createDate']<Cg['createDate'])return 1;
return 0
}

})
};
PK(function(){JK()});

var lX=new WK();

var J1=undefined;

var N1=11;

function jX(){
if(J1)J1.style.display='none';
J1=undefined
};

function yX(wE,gE){
var NE={};

h1('getExtensionKey',{},function(ag){
NE['key']=ag;
var yg=[];
NE['tabList']=yg;

for(var Lg in wE){
yg.push({'url':wE[Lg]['url'],'title':wE[Lg]['title']})
}

xX('http://www.one-tab.com/api/createPage',NE,function(IN){
h1('createNewTab',{url:IN['url']});
gE()
})
})


};

function d1(EE,XE,vE,iE,qE,bE){
var AE=this;
this.rW=document.createElement('div');
this.rW.style.paddingRight=vE+'px';
this.rW.style.display='inline-block';
this.rW.style.fontSize='11px';
this.rW.className='clickable';
this.rW.appendChild(document.createTextNode(XE));

this.UW(qE);

this.rW.onclick=function(Ug){
if(AE.Mj)iE(Ug,AE.rW);
else if(AE.lW)AE.lW(Ug)
};
EE.appendChild(this.rW);
this.lW=bE
};
d1.prototype.UW=function(OE){
this.Mj=OE;
if(!this.Mj)this.rW.style.color='#999';
else {
if(Ju)delete this.rW.style.color;
if(l_)this.rW.style.color=''
}
};


function eX(Hi){

var Ri=[];
var $i=function(zg){
for(var og in Ri)Ri[og](zg)
};

var Di=function(ug){
WX(function(CN){
var mN=CN['tabGroups'];
for(var yN=0;yN<mN.length;yN++){
var jN=mN[yN];
if(jN['id']==Hi['id']){
jN['locked']=!!Hi['locked'];
jN['starred']=!!Hi['starred'];
jN['starredDate']=Hi['starredDate'];
jN['label']=Hi['label'];
break
}
}
l1(CN,function(){
if(ug)ug()
})
})
};

var WE=document.createElement('div');

WE.style.paddingTop='15px';

WE.style.paddingLeft='0px';

var hE=document.createElement('div');
WE.appendChild(hE);
hE.style.paddingLeft='20px';

var mi=document.createElement('div');
hE.appendChild(mi);
mi.style.display='inline-block';
mi.style.verticalAlign='middle';
mi.style.paddingLeft='16px';

var JE=Hi['tabsMeta'].length;
var ni;
var Fi;
var Ki;
var Ii,ji;

mi.appendChild(function(){
var Sg=document.createElement('img');
Sg.style.display='inline';
Sg.style.verticalAlign='middle';
Sg.src='images/star.png';
Sg.style.width='22px';
Sg.style.height='21px';
Sg.style.paddingRight='11px';
Sg.style.position='relative';
Sg.style.left='-2px';
Ii=Sg;
return Sg
}());

mi.appendChild(function(){
var Pg=document.createElement('img');
Pg.style.display='inline';
Pg.style.verticalAlign='middle';
Pg.src='images/lock.png';
Pg.style.width='14px';
Pg.style.height='18px';
Pg.style.paddingRight='19px';
Pg.style.position='relative';
Pg.style.left='2px';
ji=Pg;
return Pg
}());

Ii.style.display=Hi['starred']?'inline':'none';
ji.style.display=Hi['locked']?'inline':'none';

mi.appendChild(function(){
var cg=document.createElement('div');
cg.style.display='inline-block';
cg.style.fontSize='0px';
cg.style.color='#444';
cg.style.fontWeight='300';
cg.style.verticalAlign='middle';

Fi=document.createElement('div');
Fi.style.fontSize='0px';
Fi.style.display='none';
Fi.style.paddingRight='30px';
Ki=new HK(Fi,function(LN,aN){

if(aN){

Fi.style.display=(Y1(LN)!='')?'inline-block':'none';

Hi['label']=Y1(LN)==''?'':LN;
Di(function(){
h1('recreateContextMenus')
})




}
},Hi['label']?Hi['label']:'',26,'300','tabGroupTitleText',function(){

return Hi['locked']
},undefined);

cg.appendChild(Fi);

return cg
}());

Fi.style.display=(Hi['label']&&Y1(Hi['label'])!='')?'inline-block':'none';


mi.appendChild(function(){
var gg=document.createElement('div');
gg.style.display='inline-block';
gg.style.fontSize='26px';
gg.style.color='#777';
gg.style.fontWeight='300';
gg.style.verticalAlign='middle';
gg.onclick=function(){
Fi.style.display='inline-block';
Ki.nW()
};
ni=function(){
K(gg);
var UN=JE+' '+(JE==1?'tab':'tabs');
gg.appendChild(document.createTextNode(UN))
};
ni();
return gg
}());





mi.appendChild(function(){
var Ng=document.createElement('div');
Ng.style.display='inline-block';
Ng.style.paddingLeft='28px';
Ng.style.verticalAlign='middle';
Ng.style.fontSize='0px';

Ng.appendChild(function(){
var oN=document.createElement('div');
oN.style.fontSize='11px';
oN.style.fontWeight='400';

oN.style.color='#888';
oN.style.paddingTop='0px';
oN.style.paddingBottom='2px';
oN.appendChild(document.createTextNode('Created '+new Date(Hi['createDate']).toLocaleString()));
return oN
}());

new d1(Ng,'Restore all',30,function(zN){
var SN=H(zN);
var uN=HX(zN);

var PN;

if(SN){
PN=uN?'newWindow':'currentWindow'
}

pX('restoreRemoval',function(Da){

if(SN||Hi['locked']||Da=='keep'){
Qi(Hi['id'],PN)
}
else {
kE(Hi['id'],true,PN);
WE.parentNode.removeChild(WE)
}

})
},true);

var wg=new d1(Ng,'Delete all',30,function(cN){
var gN='Are you sure you want to delete '+(JE>=2?'these '+JE+' tabs?':'this tab?');
if(confirm(gN)){
kE(Hi['id'],false);
WE.parentNode.removeChild(WE)
}
},!Hi['locked'],function(wN){
alert('To delete this tab group, you must unlock it first (via the \"More...\" button)')
});

Ri.push(function(NN){
wg.UW(!NN)
});

new d1(Ng,'Share as web page',30,function(vN,iN){
K(iN);
iN.appendChild(document.createTextNode('Please wait...'));
yX(Hi['tabsMeta'],function(){
K(iN);
iN.appendChild(document.createTextNode('Share as web page'))
})
},true);


Ng.appendChild(function(){
var XN=document.createElement('div');

XN.style.display='inline-block';
XN.style.position='relative';
XN.style.fontSize=N1+'px';
XN.className='clickable';
XN.appendChild(document.createTextNode('More...'));

var EN=document.createElement('div');
XN.appendChild(EN);
if(Ju)EN.style['box-shadow']='rgb(221, 221, 221) 1px 1px 1px 1px';
if(l_)EN.style['boxShadow']='rgb(221, 221, 221) 1px 1px 1px 1px';
EN.style.backgroundColor='#fff';
EN.style.paddingTop='11px';
EN.style.paddingLeft='18px';
EN.style.paddingRight='16px';
EN.style.paddingBottom='11px';
EN.style.display='none';
EN.style.position='absolute';
EN.style.top='-11px';
EN.style.left='-18px';
EN.style.zIndex=10000;

var AN=function(ra,Qa,Ya){
var $a=document.createElement('div');
$a.style.display='inline-block';
$a.style.paddingBottom=Qa+'px';
$a.style.fontSize=N1+'px';
$a.style.whiteSpace='pre';
$a.className='clickable';
$a.appendChild(document.createTextNode(ra));

var Va=function(B8){
K($a);
$a.appendChild(document.createTextNode(B8))
};

$a.addEventListener('mousedown',function(n8){

n8.stopPropagation();
jX();
Ya(n8,Va)
},false);
return $a
};

EN.appendChild(AN('Name this tab group',6,function(Ha){
if(!Hi['label']){
Ki.gW('',false,true)
}
Fi.style.display='inline-block';
Ki.nW()
}));


EN.appendChild(AN(Hi['locked']?'Un-Lock this tab group':'Lock this tab group',6,function(Za,Ta){
Hi['locked']=!Hi['locked'];
Di();
Ta(Hi['locked']?'Un-Lock this tab group':'Lock this tab group');
ji.style.display=Hi['locked']?'inline':'none';
$i(Hi['locked'])
}));

EN.appendChild(AN(Hi['starred']?'Un-Star this tab group':'Star this tab group',6,function(Ra,fa){
Hi['starred']=!Hi['starred'];
if(Hi['starred'])Hi['starredDate']=new Date().getTime();
fa(Hi['starred']?'Un-Star this tab group':'Star this tab group');
Ii.style.display=Hi['starred']?'inline':'none';
Di(function(){
window.scrollTo(0,0);
document.location.reload()
})
}));


EN.appendChild(AN('Help',0,function(Ka){
h1('createNewTab',{url:'http://www.one-tab.com/help'})
}));


XN.onclick=function(){
EN.style.display='block';
J1=EN
};
return XN
}());


return Ng
}());

var pi=function(Eg,ig,vg){

WX(function(ON){
var bN={};

var qN=ON['tabGroups'];
for(var dN=0;dN<qN.length;dN++){
var sN=qN[dN];
if(sN['id']==Eg){
for(var hN=0;hN<sN['tabsMeta'].length;hN++){
if(sN['tabsMeta'][hN]['id']==ig){
sN['tabsMeta'].splice(hN,1);
Hi=sN;
if(sN['tabsMeta'].length==0){
bN.Pj=true;
qN.splice(dN,1)
}
break
}
}
break
}
}
l1(ON,function(){

vg(bN)
})

})
};















var Qi=function(Ag,Xg){

WX(function(MN){
var kN=MN['tabGroups'];
var _N;
for(var WN=0;WN<kN.length;WN++){
var GN=kN[WN];
if(GN['id']==Ag){
_N=GN;
break
}
}

UK(_N['tabsMeta'],Xg)
})

};

var kE=function(qg,bg,Og){

WX(function(BJ){

var JN=BJ['tabGroups'];
var lJ;
for(var eJ=0;eJ<JN.length;eJ++){
var nJ=JN[eJ];
if(nJ['id']==qg){
lJ=nJ;
break
}
}

if(bg){
setTimeout(function(){
UK(lJ['tabsMeta'],Og)
},100)

}

JN.splice(eJ,1);
l1(BJ)



})

};



var Yi=document.createElement('div');
WE.appendChild(Yi);
Yi.style.paddingRight='20px';
Yi.style.paddingLeft='12px';
Yi.style.paddingTop='12px';











for(var Zi in Hi['tabsMeta']){
var Bi=Hi['tabsMeta'][Zi];

var fi=document.createElement('div');



var Ci=document.createElement('div');
var ei=lX.AW(Ci);
ei.style.marginLeft='20px';
Ci.appendChild(fi);



Yi.appendChild(Ci);
fi.style.display='inline-block';
fi.style.paddingLeft='55px';
fi.style.paddingTop='8px';
fi.style.position='relative';

fi.style.fontSize='13px';

var xi='https://www.google.com/s2/favicons?domain='+fK(Bi['url']);

var li=fK(Bi['url']);

if(li=='news.ycombinator.com')xi='https://news.ycombinator.com/favicon.ico';


var _E=document.createElement('img');
_E.src=xi;
_E.style.position='absolute';
_E.style.top='9px';
_E.style.left='25px';
_E.style.width='16px';
_E.style.height='16px';

_E.style.cursor=Hi['locked']?'default':'move';

fi.appendChild(_E);

var ME=function(sg){
Ri.push(function(DJ){
sg.style.cursor=Hi['locked']?'auto':'move'
})
}(_E);

var Ti=document.createElement('a');
Ti.className='clickable';

Ti.style.paddingRight='12px';
Ti.style.textDecoration='none';
Ti.appendChild(document.createTextNode(Bi['title']?Bi['title']:'Untitled'));
Ti.innerHTML+='&nbsp';
var ri=Bi['url'];
if(ri.indexOf('://')==-1)ri='http://'+ri;
ri=SK(ri);

Ti.href=ri;
Ti.onclick=function(kg,dg,hg){
return function(VJ){
var YJ=H(VJ);
var $J=HX(VJ);
pX('restoreRemoval',function(xa){

if(YJ||Hi['locked']||xa=='keep'){

if($J){
h1('createNewTabsInNewFocusedWindow',{jj:[kg]})
}
else {
h1('createNewTabInLastFocusedWindowWithOpts',{url:hg,yW:!!kg['pinned'],eW:false})

}
}
else {
pi(Hi['id'],kg['id'],function(e8){
JE--;
ni();

dg.parentNode.removeChild(dg);
if(e8.Pj)WE.parentNode.removeChild(WE);

h1('createNewTabInLastFocusedWindowWithOpts',{url:hg,yW:!!kg['pinned'],eW:false});


setTimeout(function(){

h1('closeOneTabIfEmpty')
},200)
})

}

});
return false


};
}(Bi,fi,ri);

fi.appendChild(Ti);


var dE=document.createElement('img');
dE.src='images/cross.png';
dE.style.position='absolute';
dE.style.top='10px';
dE.style.left='0px';
dE.style.width=28/2+'px';
dE.style.height=26/2+'px';
dE.style.verticalAlign='middle';
dE.style.paddingTop='2px';
dE.style.visibility='hidden';
dE.style.cursor='pointer';
fi.appendChild(dE);
dE.onmousedown=function(Gg,Mg){
return function(){
Mg.parentNode.removeChild(Mg);
pi(Hi['id'],Gg['id'],function(Fa){
JE--;
ni();
if(Fa.Pj)WE.parentNode.removeChild(WE)
})
};
}(Bi,fi);

hX(fi,function(Wg){
return function(QJ){
if(!Hi['locked']){
if(!lX.aj)Wg.style.visibility='visible'
}
}
}(dE));
Kj(fi,function(_g){
return function(rJ){
_g.style.visibility='hidden'
}
}(dE));


var ME=function(Jg,BZ){

lX.Jj(Jg,{Uj:Hi['id'],Oj:BZ['id'],Lj:WE,uj:BZ},Jg,'tabLink',function(){




},function(){

},function(){


lX.oW.insertBefore(lX.qj,lX.FW)
},function(){

},function(){

return !!Hi['locked']
})

}(fi,Bi);



var ME=function(nZ){

lX.vj(Ci,'tabLink',ei,function(ZJ){


var HJ=nZ['id'];
Vi(HJ,ZJ)

})


}(Bi)


}


var Vi=function(eZ,rZ){

var DZ=rZ.Uj;
var YZ=rZ.Lj;
var QZ=YZ.parentNode;
var lZ;

var $Z=Hi['id'];
var ZZ=WE;
var HZ=ZZ.parentNode;
var VZ;

WX(function(RJ){

var TJ=RJ['tabGroups'];
n_:for(var KJ=0;KJ<TJ.length;KJ++){
var fJ=TJ[KJ];
for(var xJ=0;xJ<fJ['tabsMeta'].length;xJ++){
if(fJ['tabsMeta'][xJ]['id']==rZ.Oj){
fJ['tabsMeta'].splice(xJ,1);
lZ=fJ;
break n_
}
}
}



n_:for(var KJ=0;KJ<TJ.length;KJ++){
var fJ=TJ[KJ];
if(fJ['id']!=Hi['id'])continue;
if(eZ){
for(var xJ=0;xJ<fJ['tabsMeta'].length;xJ++){
if(fJ['tabsMeta'][xJ]['id']==eZ){
fJ['tabsMeta'].splice(xJ,0,rZ.uj);
VZ=fJ;
break n_
}
}
}
else {
fJ['tabsMeta'].push(rZ.uj);
VZ=fJ;
break n_
}
}

l1(RJ);

HZ.insertBefore(eX(VZ),ZZ);
HZ.removeChild(ZZ);

if(DZ!=$Z){

if(lZ['tabsMeta'].length>0){
QZ.insertBefore(eX(lZ),YZ)
}
QZ.removeChild(YZ)
}

})


};



var sE=document.createElement('div');
sE.style.height='19px';
sE.style.paddingTop='3px';
sE.style.paddingLeft='20px';
WE.appendChild(sE);
var GE=lX.AW(sE);
GE.style.marginLeft='10px';
lX.vj(sE,'tabLink',GE,function(RZ){


var TZ=undefined;
Vi(TZ,RZ)
});

return WE

};

function kX(Ui,Li,ai){

var zi=document.createElement('div');
var yi=document.createElement('input');
yi.type='checkbox';
yi.className='cssCheckbox';
yi.style.verticalAlign='middle';
yi.style.cursor='pointer';
yi.checked=!!Li;

var oi=document.createElement('span');
oi.appendChild(document.createTextNode(Ui));
oi.style.cursor='pointer';
oi.style.verticalAlign='middle';
oi.onclick=function(){
yi.checked=!yi.checked;
ai(yi.checked)
};
zi.appendChild(yi);
zi.appendChild(oi);
yi.onchange=function(){
ai(yi.checked)
};
return zi
};

function YX(Si,ui){
var Pi=document.createElement('span');
Pi.appendChild(document.createTextNode('\u2261'));
Pi.style.fontSize=Si+'px';
Pi.style.fontWeight=400;
Pi.style.position='relative';
Pi.style.top=ui+'px';
return Pi
};

function aK(){

var ci=document.getElementById('settingsDiv');
K('div');

ci.style.position='absolute';
ci.style.top='9px';
ci.style.right='5px';
ci.style.paddingTop='10px';
ci.style.paddingBottom='10px';
ci.style.paddingLeft='20px';
ci.style.paddingRight='20px';
ci.style.backgroundColor='#fff';









ci.appendChild(function(){
var fZ=document.createElement('div');

var KZ=document.createElement('div');
KZ.appendChild(document.createTextNode('Bring all tabs into '));
KZ.appendChild(FK());

fZ.appendChild(dK(KZ,14,function(){

h1('sendAllTabsInAllWindowsToOneTabAction',{},function(){
WX(function(l8){
C1(l8)
})

})

}));
return fZ
}());









var gi=12.25;

ci.appendChild(function(){
var xZ=document.createElement('div');
xZ.appendChild(dK('Share all as web page',gi,function(pJ){

K(pJ);
pJ.appendChild(document.createTextNode('Please wait...'));

var FJ=[];

WX(function(Ia){
var pa=Ia['tabGroups'];
if(!pa)pa=[];

for(var Ca=0;Ca<pa.length;Ca++){
var ma=pa[Ca];
if(!ma['createDate'])ma['createDate']=new Date().getTime()
}
cX(pa);

for(var Ca=0;Ca<pa.length;Ca++){
var ma=pa[Ca];
for(var ja in ma['tabsMeta'])FJ.push(ma['tabsMeta'][ja])
}
if(FJ.length==0){
alert('You do not yet have any tabs in OneTab')
}
else {
yX(FJ,function(){
K(pJ);
pJ.appendChild(document.createTextNode('Share all as web page'))
})

}

})

}));
return xZ
}());

ci.appendChild(function(){
var FZ=document.createElement('div');
FZ.appendChild(dK('Export / Import URLs',gi,function(){
h1('showOrRefreshAndFocusScriptPage',{url:'import-export.html'})
}));
return FZ
}());

ci.appendChild(function(){
var pZ=document.createElement('div');
pZ.appendChild(dK('Options',gi,function(){
h1('showOrRefreshAndFocusScriptPage',{url:'options.html'})
}));
return pZ
}());


ci.appendChild(function(){
var IZ=document.createElement('div');

pX('may2013NewFeaturesIndicatorDisplayDate',function(mJ){
var IJ=mJ;

if(!IJ){
IJ=new Date().getTime();
CK('may2013NewFeaturesIndicatorDisplayDate',IJ)
}
var CJ=(new Date().getTime()-IJ)<1000*3600*24*10;

IZ.appendChild(dK('Features / Help',gi,function(){
h1('createNewTab',{url:'http://www.one-tab.com/help'})
},CJ))

});

return IZ
}());

ci.appendChild(function(){
var mZ=document.createElement('div');
mZ.appendChild(dK('About / Feedback',gi,function(){

h1('createNewTab',{url:'http://www.one-tab.com'})
}));
return mZ
}());



return ci
};



function JK(){


if(false&&Ju){
window.R=false;

window['WebFontConfig']={
'google':{
'families':['Open Sans:400,600,300,700']
},
'active':function(){
window.R=true

},
'inactive':function(){
window.R=true

}
};
var Ni=(function(){
var jZ=document.createElement('script');
jZ.src='webfont.js';
jZ.type='text/javascript';
jZ.async='true';

var CZ=document.getElementsByTagName('link')[0];
CZ.parentNode.insertBefore(jZ,CZ)
})();
w1()
}
else {
B1(r1,function(){
w1()
})
}




var vi=1000*3600*24*2;


var ii=1000*3600*2;


var wi=function(){
setTimeout(function(){

h1('getExtensionKey',{},function(ya){
xX('http://www.one-tab.com/api/newVersionCheck',{'version':x1,'extensionKey':ya},function(D8){
if(D8['upgradeAvailable']){
CK('availableVersion',D8['availableVersion']);
_()
}
});

CK('nextVersionCheckDate',new Date().getTime()+vi)
})

},parseInt(Math.random()*ii))

};
pX('nextVersionCheckDate',function(aZ){

var yZ=aZ;
if(!yZ)yZ=new Date().getTime()-1000;

setTimeout(function(){
wi();
setInterval(function(){
wi()
},vi)
},Math.max((yZ-new Date().getTime()),1))


})







};

function _(){
if(!Ju)return; 
RK(function(LZ){
if(LZ){

var UZ=document.getElementById('updateAvailableMsgDiv');
K(UZ);
UZ.style.paddingLeft='30px';
UZ.style.color='#c00000';
UZ.style.maxWidth='600px';
UZ.style.lineHeight='2em';
UZ.appendChild(document.createTextNode('An update for '));
UZ.appendChild(FK());
UZ.appendChild(document.createTextNode(' is available - please click the '));
UZ.appendChild(YX(28,3));
UZ.appendChild(document.createTextNode(' menu button in the top right of your browser and then click \"Update Google Chrome\". If that option is not available, click \"About Google Chrome\" followed by \"Relaunch\".'))
}

})

};



function w1(){

if(false&&Ju){
if(!window.R){
setTimeout(function(){
w1()
},10);
return 
}
}

WX(function(oZ){
C1(oZ);
aK()
});

document.addEventListener('mousedown',function(){

jX()
},false)

};

function C1(bi){

var Xi=document.getElementById('contentAreaDiv');

K(Xi);

Xi.style.paddingTop='0px';
Xi.style.paddingLeft='0px';

Xi.appendChild(pj());




var Ei=bi['tabGroups'];
if(!Ei)Ei=[];


for(var di=0;di<Ei.length;di++){
var si=Ei[di];
if(!si['createDate'])si['createDate']=new Date().getTime()
}
var Oi=0;
for(var di=0;di<Ei.length;di++){
var si=Ei[di];
Oi+=si['tabsMeta'].length
}

cX(Ei);

var qi='Total: '+Oi+' '+(Oi==1?'tab':'tabs');
var Ai=XK(qi);
Xi.appendChild(Ai);

var hi=document.createElement('div');
hi.id='updateAvailableMsgDiv';
Xi.appendChild(hi);

_();

wK('storedStateChanged',function(uZ){

var NZ=uZ.Nj;

var SZ=NZ;
var zZ=SZ['tabGroups'];
if(!zZ)zZ=[];

var cZ=0;
for(var wZ=0;wZ<zZ.length;wZ++){
var gZ=zZ[wZ];
cZ+=gZ['tabsMeta'].length
}
var PZ='Total: '+cZ+' '+(cZ==1?'tab':'tabs');













K(Ai);
Ai.appendChild(document.createTextNode(PZ))

});


for(var di=0;di<Ei.length;di++){
var si=Ei[di];

Xi.appendChild(eX(si))
}

if(Ei.length==0){
Xi.appendChild(function(){
var vZ=document.createElement('div');
vZ.style.paddingTop='30px';
vZ.style.paddingLeft='30px';
vZ.style.width='500px';
vZ.appendChild(document.createTextNode('When you have multiple tabs open, click the OneTab icon on your browser toolbar and your open tabs will appear here.'));
return vZ
}())
}

Xi.appendChild(function(){
var iZ=document.createElement('div');
iZ.style.paddingTop='30px';
return iZ
}())


};

function SK(ki){
return ki
}















































