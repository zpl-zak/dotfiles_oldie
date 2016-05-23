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

var i3=document.createElement('script');
i3['type']='text/javascript';
i3['async']=true;
i3['src']='https://ssl.google-analytics.com/ga.js';
var v3=document.getElementsByTagName('script')[0];v3.parentNode.insertBefore(i3,v3)
};

QX();

function h1(b3,E3,X3){

if(!E3)E3={};

var A3={};

A3.type=b3;
A3.PW=VK.VW(E3);

window['chrome']['runtime']['sendMessage'](undefined,A3,undefined,function(cG){

var gG={};
if(cG&&cG.PW)gG=VK.parse(cG.PW);

if(X3)X3(gG)
})
};

function wK(O3,q3){
window['chrome']['runtime']['onMessage']['addListener'](
function(vG,wG,iG){
if(O3==vG.fW){

var NG={};
if(vG&&vG.PW)NG=VK.parse(vG.PW);
q3(NG)


}
})
};

function PK(s3){
document.addEventListener('DOMContentLoaded',function(){s3()})
};

function XK(h3){
var d3=document.createElement('div');
d3.style.paddingTop='40px';
d3.style.paddingBottom='24px';
d3.style.paddingLeft='268px';
d3.style.fontSize='18px';
d3.style.color='#777';
d3.style.fontWeight='300';
d3.style.borderBottom='1px dashed #ddd';
d3.style.marginBottom='10px';
d3.appendChild(document.createTextNode(h3));
return d3
};

function pj(){
var k3=document.createElement('img');
k3.style.height=114/2+'px';
k3.style.width=414/2+'px';
k3.style.position='absolute';
k3.style.top='16px';
k3.style.left='22px';
k3.src='images/top-left-logo.png';

return k3
};

function T1(BY,J3,G3){
var _3=document.createElement('div');

var M3=document.createElement('div');
M3.style.paddingLeft='30px';
M3.style.position='relative';
M3.style.color='#777';
var W3=document.createElement('img');
W3.src=BY?'images/twister-open.png':'images/twister-closed.png';
W3.style.width=48/2+'px';
W3.style.height=50/2+'px';
W3.style.position='absolute';
W3.style.left='0px';
W3.style.top='0px';
M3.appendChild(document.createTextNode(J3));
M3.style.fontSize='16px';
M3.style.cursor='pointer';

_3.appendChild(M3);
M3.appendChild(W3);

var tY=document.createElement('div');
tY.style.paddingLeft='30px';
tY.style.paddingTop='10px';
tY.appendChild(G3);
tY.style.display=BY?'block':'none';

_3.appendChild(tY);

M3.onclick=function(){
BY=!BY;
W3.src=BY?'images/twister-open.png':'images/twister-closed.png';
tY.style.display=BY?'block':'none'
};

return _3
};

function dK(lY,VY,eY,nY){


var YY=document.createElement('div');
YY.style.fontSize=VY+'px';
YY.className='clickable';
var DY=document.createElement('span');

if(nY){
var $Y=document.createElement('span');
$Y.style.color='#f00';
$Y.appendChild(document.createTextNode('NEW '));
DY.appendChild($Y)
}


if(typeof lY=='string'){
DY.appendChild(document.createTextNode(lY))
}
else {
DY.appendChild(lY)
}

DY.style.verticalAlign='middle';
DY.onclick=function(){
eY(DY)
};
YY.appendChild(DY);
return YY
};




















var VK={

VW:function(rY){
var ZY,RY,TY,HY='',QY;

switch(typeof rY){
case 'object':;
if(rY){
if(rY instanceof Array){
for(RY=0;RY<rY.length;++RY){
QY=this.VW(rY[RY]);
if(HY){
HY+=','
}
HY+=QY
}
return '['+HY+']'
}else if(typeof rY.toString!='undefined'){
for(RY in rY){
QY=rY[RY];
if(typeof QY!='undefined'&&typeof QY!='function'){
QY=this.VW(QY);
if(HY){
HY+=','
}
HY+=this.VW(RY)+':'+QY
}
}
return '{'+HY+'}'
}
}
return 'null';
case 'number':;
return isFinite(rY)?String(rY):'null';
case 'string':;
TY=rY.length;
HY='\"';
for(RY=0;RY<TY;RY+=1){
ZY=rY.charAt(RY);
if(ZY>=' '){
if(ZY=='\\'||ZY=='\"'){
HY+='\\'
}
HY+=ZY
}else {
switch(ZY){
case '\b':;
HY+='\\b';
break;
case '\f':;
HY+='\\f';
break;
case '\n':;
HY+='\\n';
break;
case '\r':;
HY+='\\r';
break;
case '\t':;
HY+='\\t';
break;
default:; 
ZY=ZY.charCodeAt();
HY+='\\u00'+Math.floor(ZY/16).toString(16)+
(ZY%16).toString(16)
}
}
}
return HY+'\"';
case 'boolean':;
return String(rY);
default:; 
return 'null'
}
},
parse:function(xY){
var jY=0;
var LY=' ';

function pY(EG){
throw {
name:'JSONError',
message:EG,
cW:jY-1,
text:
xY}
};

function mY(){
LY=xY.charAt(jY);
jY+=1;
return LY
};

function CY(){
while(LY!==''&&LY<=' '){
mY()
}
};

function FY(){
var qG,bG='',XG,AG;

if(LY=='\"'){
n_:while(mY()){
if(LY=='\"'){
mY();
return bG
}else if(LY=='\\'){
switch(mY()){
case 'b':;
bG+='\b';
break;
case 'f':;
bG+='\f';
break;
case 'n':;
bG+='\n';
break;
case 'r':;
bG+='\r';
break;
case 't':;
bG+='\t';
break;
case 'u':;
AG=0;
for(qG=0;qG<4;qG+=1){
XG=parseInt(mY(),16);
if(!isFinite(XG)){
break n_
}
AG=AG*16+XG
}
bG+=String.fromCharCode(AG);
break;
default:; 
bG+=LY
}
}else {
bG+=LY
}
}
}
pY("Bad string")
};

function IY(){
var OG=[];

if(LY=='['){
mY();
CY();
if(LY==']'){
mY();
return OG
}
while(LY){
OG.push(fY());
CY();
if(LY==']'){
mY();
return OG
}else if(LY!=','){
break
}
mY();
CY()
}
}
pY("Bad array")
};

function aY(){
var dG,sG={};

if(LY=='{'){
mY();
CY();
if(LY=='}'){
mY();
return sG
}
while(LY){
dG=FY();
CY();
if(LY!=':'){
break
}
mY();
sG[dG]=fY();
CY();
if(LY=='}'){
mY();
return sG
}else if(LY!=','){
break
}
mY();
CY()
}
}
pY("Bad object")
};

function KY(){
var kG='',hG;
if(LY=='-'){
kG='-';
mY()
}
while(LY>='0'&&LY<='9'){
kG+=LY;
mY()
}
if(LY=='.'){
kG+='.';
while(mY()&&LY>='0'&&LY<='9'){
kG+=LY
}
}
if(LY=='e'||LY=='E'){
kG+='e';
mY();
if(LY=='-'||LY=='+'){
kG+=LY;
mY()
}
while(LY>='0'&&LY<='9'){
kG+=LY;
mY()
}
}
hG=+kG;
if(!isFinite(hG)){
pY("Bad number")
}else {
return hG
}
};

function yY(){
switch(LY){
case 't':;
if(mY()=='r'&&mY()=='u'&&mY()=='e'){
mY();
return true
}
break;
case 'f':;
if(mY()=='a'&&mY()=='l'&&mY()=='s'&&
mY()=='e'){
mY();
return false
}
break;
case 'n':;
if(mY()=='u'&&mY()=='l'&&mY()=='l'){
mY();
return null
}
break
}
pY("Syntax error")
};

function fY(){
CY();
switch(LY){
case '{':;
return aY();
case '[':;
return IY();
case '\"':;
return FY();
case '-':;
return KY();
default:; 
return LY>='0'&&LY<='9'?KY():yY()
}
};

return fY()
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

WK.prototype.Jj=function(NY,gY,cY,wY,oY,UY,zY,uY,PY){
var SY=this;

NY.onmousedown=function(MG){
var GG=false;
NX(MG,NY,null,function(cl,Pl,ul,Sl){

if(PY){
GG=PY()
}
},function(El,il,wl,vl,gl,Nl,Al,Xl){

if(!SY.aj&&!GG){
if((Math.abs(wl)>WK.IW)||(Math.abs(vl)>WK.IW)){
SY.aj=true;
SY.pW=new Array();

SY.dj=gY;

SY.Cj=cY.offsetWidth;
SY.wW=cY.offsetHeight;

SY.oW=cY.parentNode;
SY.FW=cY.nextSibling;
cY.parentNode.removeChild(cY);

SY.qj=cY;
SY.hj=wY;

SY.zj=document.createElement('div');
SY.zj.style.zIndex=X1;
SY.zj.style.position='absolute';
SY.zj.style.width=SY.Cj+'px';
SY.zj.style.height=SY.wW+'px';
SY.zj.appendChild(SY.qj);
lj().appendChild(SY.zj);


oY()

}

}
if(SY.aj){
SY.zj.style.left=Al+7+'px';

SY.zj.style.top=Xl-16+'px'
}

},function(dl,sl,Ml,hl,ql,Ol){

if(!SY.aj){
UY()
}
else {
SY.aj=false;

lj().removeChild(SY.zj);

if(SY.Wj){
SY.Wj(SY.dj)
}
else {
zY()
}
for(var kl in SY.pW){
var bl=SY.pW[kl];
bl.style.display='none'
}
SY.pW=new Array();
uY()
}


})

};
};

WK.prototype.vj=function(vY,XY,EY,iY){
var AY=this;
hX(vY,function(_G){
_G.event.cancelBubble=true;
if(AY.aj){
if(vY!=AY.qj){

EY.style.display='block';
EY.style.width=AY.Cj-(b1?0:2)+'px';
EY.style.height=AY.wW-(b1?0:2)+'px';
EY.style.border='1px dashed #'+TX;
AY.Wj=iY;

for(var JG in AY.pW){
var WG=AY.pW[JG];
if(Q1(WG.parentNode,EY)&&EY!=WG)WG.style.display='none'
}

if(!GX(AY.pW,EY))AY.pW.push(EY)

}
}
});
Kj(vY,function(B6){
B6.event.cancelBubble=true;
if(AY.aj){
if(vY!=AY.qj){
EY.style.display='none';
AY.Wj=null;

Zj(EY,AY.pW)

}
}
})
};

WK.prototype.AW=function(qY){
var bY=document.createElement('div');
qY.appendChild(bY);
return bY
};


function eK(hY,dY){

hY=hY.substring(hY.indexOf('?')+1);

var sY=hY.split('&');
for(var kY in sY){
var OY=sY[kY].split('=');

if(OY[0]==dY){
return decodeURIComponent(OY[1])
}
}
return undefined
};

function fK(MY){
if(MY.indexOf('://')==-1)MY='http://'+MY;
MY=MY.substring(MY.indexOf('://')+'://'.length);
if(MY.indexOf('/')!=-1)MY=MY.substring(0,MY.indexOf('/'));
return MY.toLowerCase()
};

function GX(_Y,GY){
for(var WY in _Y)if(_Y[WY]==GY)return true;
return false
};

function K(JY){
if(typeof JY=='string')JY=document.getElementById(JY);
if(!JY)return; 
while(JY.childNodes.length>0)JY.removeChild(JY.childNodes[0])
};

function j1(Bs){
var ns=document.createElement('div');
ns.style.fontSize='1px';
ns.style.height=Bs+'px';
ns.style.width=1+'px';
return ns
};

function Zj(es,Ds){
for(var ls=0;ls<Ds.length;ls++){
if(Ds[ls]==es){
Ds.splice(ls,1);
ls--
}
}
};


function H(Qs){

var $s=Qs?Qs:window.event;

var Hs=0;
var Vs=0;
var Ys=0;
var rs=0;

if($s!=null){
if(b1){
Ys=$s.shiftKey;
Vs=$s.altKey;
Hs=$s.ctrlKey

}
else {
Ys=$s.shiftKey;
Hs=$s.ctrlKey;
Vs=$s.altKey;
rs=$s.metaKey
}
}
return (Hs||rs||Ys)
};


function GK(fs){

var Ts=fs?fs:window.event;

var xs=0;
var Zs=0;
var Rs=0;
var Ks=0;

if(Ts!=null){
if(b1){
Rs=Ts.shiftKey;
Zs=Ts.altKey;
xs=Ts.ctrlKey

}
else {
Rs=Ts.shiftKey;
xs=Ts.ctrlKey;
Zs=Ts.altKey;
Ks=Ts.metaKey
}
}
return (xs||Ks)
};

function HX(ms){

var ps=ms?ms:window.event;

var js=0;
var Fs=0;
var Is=0;
var Cs=0;

if(ps!=null){
if(b1){
Is=ps.shiftKey;
Fs=ps.altKey;
js=ps.ctrlKey

}
else {
Is=ps.shiftKey;
js=ps.ctrlKey;
Fs=ps.altKey;
Cs=ps.metaKey
}
}
return (Is)
};



function IK(ys){
ys['noCacheRandom']=A1()
};
function A1(){
return new Date().getTime()+Math.round(Math.random()*10000)+''
};

function xX(os,Ls,Us){
IK(Ls);
var as=VK.VW(Ls);
kK(os,as,function(n6){
if(Us)Us(VK.parse((n6)))
})
};

function kK(Ps,us,Ss){

var zs=I1();

zs.open(us==null?"GET":"POST",Ps,true);

zs.setRequestHeader("Content-Type","text/xml");
zs.onreadystatechange=function(){
var l6=false;



l6=(zs.readyState==4);
if(l6){
var e6=zs.responseText;
Ss(e6)
}
};

zs.send(us)

};

function I1(){
var cs=new XMLHttpRequest();
return cs
};

function U1(){

return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,function(Y6){
var V6=Math.random()*16|0,D6=Y6=='x'?V6:(V6&0x3|0x8);
return D6.toString(16)
})
};


function Y1(gs){
if(!gs==null||gs==undefined)return '';
return gs.replace(/^\s+/,'').replace(/\s+$/,'')
};

function FK(){
var Ns=document.createElement('span');
var ws=document.createElement('span');
ws.style.fontStyle='italic';
ws.appendChild(document.createTextNode('One'));
Ns.appendChild(ws);
Ns.appendChild(document.createTextNode('Tab'));
return Ns
};

function O(vs){
var is=vs.split('OneTab');
var As=document.createElement('span');
for(var Es in is){
if(is[Es]=='')As.appendChild(FK());
else As.appendChild(document.createTextNode(is[Es]))
}
return As
};


function B(qs){
var bs=new Date(qs.valueOf()),
Xs=(qs.getUTCDay()+6)%7,
Os;

bs.setUTCDate(bs.getUTCDate()-Xs+3);
Os=bs.valueOf();
bs.setUTCMonth(0,1);

if(bs.getUTCDay()!==4){
bs.setUTCMonth(0,1+((4-bs.getUTCDay())+7)%7)
}

return Math.ceil((Os-bs)/(7*24*3600*1000))+1
};
function pK(ss,ds){
while(ss.length<ds)ss='0'+ss;
return ss
};
function a1(hs){
return (hs.getUTCFullYear()+'').substr(2)+pK(B(hs)+'',2)
};
var z1,LK,g,lK,wX;
var MK,_K;
var ej,nj;

var yK=!!('ontouchstart' in window);

function NX(Gs,ks,_s,Ws,Ms,Js){
z1=ks;
LK=_s;
g=Ws;
lK=Ms;
wX=Js;

ej=0;
nj=0;

if(yK&&(Gs instanceof TouchEvent)){
if(Gs.touches.length>1){

return 
}
MK=Gs.touches.item(0).pageX;
_K=Gs.touches.item(0).pageY;

document.addEventListener("touchmove",BK,false);
document.addEventListener("touchend",tj,false);
Gs.preventDefault()

}
else {

if(b1||YK){

MK=window.event.clientX+(YK?0:document.documentElement.scrollLeft)+document.body.scrollLeft;
_K=window.event.clientY+(YK?0:document.documentElement.scrollTop)+document.body.scrollTop
}
else {
MK=Gs.clientX+window.scrollX;
_K=Gs.clientY+window.scrollY
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
Gs.preventDefault()
}


}





g(z1,LK,MK,_K)


};

function BK(lU){
var VU,DU,nU,eU;

if(yK&&(lU instanceof TouchEvent)){
if(lU.touches.length>1){
nU=0;eU=0;
lK(z1,LK,nU,eU,MK,_K,VU,DU);
return tj(lU)
}
VU=lU.touches.item(0).pageX;
DU=lU.touches.item(0).pageY
}
else {
if(b1||YK){
VU=window.event.clientX+(YK?0:document.documentElement.scrollLeft)+document.body.scrollLeft;
DU=window.event.clientY+(YK?0:document.documentElement.scrollTop)+document.body.scrollTop
}
else {
VU=lU.clientX+window.scrollX;
DU=lU.clientY+window.scrollY
}
}


nU=VU-MK;
eU=DU-_K;

var BU=false;
if(ej!=nU||nj!=eU)BU=true;

ej=nU;
nj=eU;

if(BU){
lK(z1,LK,nU,eU,MK,_K,VU,DU)
}


if(b1){
window.event.cancelBubble=true;
window.event.returnValue=false
}
else {
lU.preventDefault()
}

};
function tj($U){

if(yK&&($U instanceof TouchEvent)){
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

















function rK(HU,rU,QU,YU){
this.KW=HU;
this.type=rU;
this.LW=QU;
this.mj=YU
};

rK.prototype.remove=function(){

if(b1){
this.KW.detachEvent(this.type,this.LW)
}
else {
this.KW.removeEventListener(this.type,this.LW,this.mj)
}

};







function $(ZU,TU){
ZU.onmousemove=function(Q6){TU(new m1(ZU,Q6))};

};
function hK(RU,fU){
RU.onmousedown=function(r6){fU(new m1(RU,r6))};

};
function z(KU,xU){
KU.onmouseover=function(H6){xU(new m1(KU,H6))};

};
function sK(FU,pU){
FU.onmouseup=function(Z6){pU(new m1(FU,Z6))};

};
function o1(IU,mU){
IU.onmouseout=function(T6){mU(new m1(IU,T6))};

};
function FX(CU,jU){
CU.onclick=function(R6){jU(new m1(CU,R6))};

};
function AX(yU,aU){
yU.ondblclick=function(f6){aU(new m1(yU,f6))};

};

function QK(LU,UU){
k1(LU,M1,TK,UU)
};
function _1(oU,zU){
k1(oU,T,H1,zU)
};

function hX(uU,SU){
return k1(uU,e1,bK,SU)
};
function cK(PU,cU){
return k1(PU,R1,G,cU)
};

function Kj(gU,wU){

var NU;
if(b1){
NU=function(K6){
wU(new m1(gU,K6))
};
gU.attachEvent(dX,NU);
return new rK(gU,dX,NU,false)
}
else {
NU=function(x6){
var F6,p6;
F6=x6.currentTarget;
p6=x6.relatedTarget;
if(F6==gU&&F6!=p6&&!Q1(F6,p6)){
wU(new m1(gU,x6))
}
};
gU.addEventListener(bX,NU,false);
return new rK(gU,bX,NU,false)
}
};



function g1(vU,iU){
if(b1){
vU.onmouseleave=function(I6){
iU(new m1(vU,I6))
};
}
else {
vU.onmouseout=function(m6){
var C6,j6;
C6=m6.currentTarget;
j6=m6.relatedTarget;
if(C6==vU&&C6!=j6&&!Q1(C6,j6)){
iU(new m1(vU,m6))
}
};
}
};

function xj(XU,AU){
if(b1){
for(var bU in XU){
var EU=XU[bU];
EU.onmouseleave=vK(EU,XU,AU)
}
}
else {

for(var bU in XU){
var EU=XU[bU];
EU.onmouseout=M(EU,XU,AU)
}
}
};

function M(qU,sU,OU){
return function(y6){
var a6,U6;
a6=y6.currentTarget;
U6=y6.relatedTarget;
if(a6==qU&&a6!=U6&&!Q1(a6,U6)){
for(var L6 in sU)if(U6==sU[L6])return; 
OU(new m1(qU,y6))
}
};
};
function vK(dU,kU,hU){
return function(){
for(var o6 in kU)if(window.event.toElement==kU[o6])return; 
hU(new m1(dU,window.event))
};
};


function Q1(MU,WU){
try{
if(!WU)return false;
while(WU.parentNode)
if((WU=WU.parentNode)==MU)
return true;
return false
}
catch(GU){

return false
}

};

function m1(_U,JU){
this.Ej=_U;
this.event=JU;
this.Aj=null;
this.ij=null;
this.aW=function(){
if(this.Aj==null){
var z6=MX(_U,JU);
this.Aj=z6.x;
this.ij=z6.y
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

function k1(ex,nx,lx,Dx){

var Bx=function(u6){
var S6=new m1(ex,u6);
Dx(S6)
};

if(b1){
ex.attachEvent(lx,Bx);
return new rK(ex,lx,Bx,false)
}
else {
ex.addEventListener(nx,Bx,false);
return new rK(ex,nx,Bx,false)
}
};



function EK(Vx,rx,Yx,$x,Qx){
hK(Vx,function(P6){
NX(P6.event,Vx,rx,Yx,$x,Qx)
})
};

function RX(Hx){
return S1(Hx)
};


function MX(Zx,Tx){
if(b1||B_){
return new D_(window.event.offsetX,window.event.offsetY)
}
return S1(Tx).iW(jK(Zx))
};
function S1(Rx){
if(b1||YK){
var Kx=window.event.clientX+(YK?0:document.documentElement.scrollLeft)+document.body.scrollLeft;
var fx=window.event.clientY+(YK?0:document.documentElement.scrollTop)+document.body.scrollTop
}
else {
var Kx=Rx.clientX+window.scrollX;
var fx=Rx.clientY+window.scrollY
}
return new D_(Kx,fx)
};

function jK(xx){
var Fx=xx;
var mx=0;
var Ix=0;

while(true){
var px=Fx.offsetParent;
if(px==undefined)break;

mx+=Fx.offsetLeft;
Ix+=Fx.offsetTop;

Fx=px
}

return new D_(mx,Ix)
};


function Q(jx,yx,ax){
if(!ax)if(!e_())return; 

try{

if(yx==100){
jx.style.filter='';
jx.style.Sj='';
jx.style.opacity=''
}
else {
jx.style.filter='alpha(opacity='+yx+')';
jx.style.Sj=yx/100;
jx.style.opacity=yx/100
}
}
catch(Cx){

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

function WX(Lx){
h1('getState',{},function(c6){if(Lx)Lx(c6)})
};
function l1(ox,Ux){

h1('storeState',{Nj:ox},function(g6){if(Ux)Ux(g6)})
};

function pX(zx,ux){
h1('getSetting',{YW:zx},function(w6){
if(ux)ux(w6.value)
})
};

function BX(Sx){
h1('getSettings',{},function(N6){if(Sx)Sx(N6)})
};

function CK(gx,cx,Px){
h1('storeSetting',{key:gx,value:cx},function(v6){if(Px)Px(v6)})
};

function I(Nx,wx){
h1('storeSettings',{HW:Nx},function(i6){if(wx)wx(i6)})
};

function UK(vx,Ex,ix){
h1('restoreTabsMeta',{jj:vx,XW:Ex},function(E6){if(ix)ix(E6)})
};

function RK(Ax){
h1('upgradeAvailable',{},function(A6){if(Ax)Ax(A6.value)})
};

function cX(Xx){
Xx.sort(function(b6,X6){

if(b6['starred']||X6['starred']){
if(!X6['starred'])return -1;
else if(!b6['starred'])return 1;
else {

if(b6['starredDate']>X6['starredDate'])return 1;
if(b6['starredDate']<X6['starredDate'])return -1;
return 0
}
}
else {
if(b6['createDate']>X6['createDate'])return -1;
if(b6['createDate']<X6['createDate'])return 1;
return 0
}

})
};
PK(function(){JK()});

function JK(){
WX(function(q6){
C1(q6)
})
};



function C1(Ox){

var qx=document.getElementById('contentAreaDiv');

K(qx);

qx.style.paddingTop='0px';
qx.style.paddingLeft='0px';

qx.appendChild(pj());

qx.appendChild(XK('Import / Export'));

var bx=document.createElement('div');
qx.appendChild(bx);

bx.style.paddingTop='14px';
bx.style.paddingLeft='36px';



bx.appendChild(T1(false,'Import URLs',function(){

var h6=document.createElement('div');
var k6=document.createElement('div');
k6.appendChild(document.createTextNode('Paste in a list of URLs and then click Import below'));
k6.style.color='#777';
k6.style.paddingBottom='10px';
h6.appendChild(k6);

var d6=document.createElement('textArea');
d6.style.width='800px';
d6.style.height='200px';

h6.appendChild(d6);



if(!Ox['tabGroups'])Ox['tabGroups']=[];
var s6=Ox['tabGroups'];

var O6=dK('Import',16,function(){

h1('importTabsFromText',{text:d6.value},function(){
setTimeout(function(){
window['close']()
},100)
})

});
h6.appendChild(O6);


h6.style.paddingBottom='30px';
return h6


}()));

bx.appendChild(j1(16));

bx.appendChild(T1(true,'Export URLs',function(){
var W6=document.createElement('div');

var B$=document.createElement('div');
B$.appendChild(document.createTextNode('The following list of URLs can also be imported back into OneTab on this or a different computer'));
B$.style.color='#777';
B$.style.paddingBottom='10px';
W6.appendChild(B$);

var G6=document.createElement('textArea');
G6.style.width='800px';
G6.style.height='500px';


var M6=Ox['tabGroups'];
if(!M6)M6=[];

cX(M6);

for(var J6=0;J6<M6.length;J6++){
var n$=M6[J6];
for(var l$ in n$['tabsMeta']){
var e$=n$['tabsMeta'][l$];
var _6=e$['url'];
if(fK(_6)!=e$['title'])_6=_6+' | '+e$['title'];
G6.value=G6.value+_6+'\n'
}
if(J6!=M6.length-1)G6.value=G6.value+'\n'

}



W6.appendChild(G6);
W6.style.paddingBottom='30px';
return W6
}()));



qx.appendChild(function(){
var D$=document.createElement('div');
D$.style.paddingTop='30px';
return D$
}())


}

