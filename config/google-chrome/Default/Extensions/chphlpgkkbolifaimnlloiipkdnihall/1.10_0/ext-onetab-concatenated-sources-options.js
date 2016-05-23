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

var Gi=document.createElement('script');
Gi['type']='text/javascript';
Gi['async']=true;
Gi['src']='https://ssl.google-analytics.com/ga.js';
var Mi=document.getElementsByTagName('script')[0];Mi.parentNode.insertBefore(Gi,Mi)
};

QX();

function h1(B4,Wi,Ji){

if(!Wi)Wi={};

var _i={};

_i.type=B4;
_i.PW=VK.VW(Wi);

window['chrome']['runtime']['sendMessage'](undefined,_i,undefined,function(EZ){

var AZ={};
if(EZ&&EZ.PW)AZ=VK.parse(EZ.PW);

if(Ji)Ji(AZ)
})
};

function wK(e4,n4){
window['chrome']['runtime']['onMessage']['addListener'](
function(qZ,XZ,OZ){
if(e4==qZ.fW){

var bZ={};
if(qZ&&qZ.PW)bZ=VK.parse(qZ.PW);
n4(bZ)


}
})
};

function PK(l4){
document.addEventListener('DOMContentLoaded',function(){l4()})
};



function WX(D4){
h1('getState',{},function(sZ){if(D4)D4(sZ)})
};
function l1(Y4,V4){

h1('storeState',{Nj:Y4},function(dZ){if(V4)V4(dZ)})
};

function pX(Q4,r4){
h1('getSetting',{YW:Q4},function(hZ){
if(r4)r4(hZ.value)
})
};

function BX(H4){
h1('getSettings',{},function(kZ){if(H4)H4(kZ)})
};

function CK(R4,T4,Z4){
h1('storeSetting',{key:R4,value:T4},function(MZ){if(Z4)Z4(MZ)})
};

function I(K4,f4){
h1('storeSettings',{HW:K4},function(GZ){if(f4)f4(GZ)})
};

function UK(x4,p4,F4){
h1('restoreTabsMeta',{jj:x4,XW:p4},function(WZ){if(F4)F4(WZ)})
};

function RK(I4){
h1('upgradeAvailable',{},function(_Z){if(I4)I4(_Z.value)})
};

function XK(C4){
var m4=document.createElement('div');
m4.style.paddingTop='40px';
m4.style.paddingBottom='24px';
m4.style.paddingLeft='268px';
m4.style.fontSize='18px';
m4.style.color='#777';
m4.style.fontWeight='300';
m4.style.borderBottom='1px dashed #ddd';
m4.style.marginBottom='10px';
m4.appendChild(document.createTextNode(C4));
return m4
};

function pj(){
var j4=document.createElement('img');
j4.style.height=114/2+'px';
j4.style.width=414/2+'px';
j4.style.position='absolute';
j4.style.top='16px';
j4.style.left='22px';
j4.src='images/top-left-logo.png';

return j4
};

function T1(u4,o4,a4){
var U4=document.createElement('div');

var y4=document.createElement('div');
y4.style.paddingLeft='30px';
y4.style.position='relative';
y4.style.color='#777';
var L4=document.createElement('img');
L4.src=u4?'images/twister-open.png':'images/twister-closed.png';
L4.style.width=48/2+'px';
L4.style.height=50/2+'px';
L4.style.position='absolute';
L4.style.left='0px';
L4.style.top='0px';
y4.appendChild(document.createTextNode(o4));
y4.style.fontSize='16px';
y4.style.cursor='pointer';

U4.appendChild(y4);
y4.appendChild(L4);

var z4=document.createElement('div');
z4.style.paddingLeft='30px';
z4.style.paddingTop='10px';
z4.appendChild(a4);
z4.style.display=u4?'block':'none';

U4.appendChild(z4);

y4.onclick=function(){
u4=!u4;
L4.src=u4?'images/twister-open.png':'images/twister-closed.png';
z4.style.display=u4?'block':'none'
};

return U4
};

function dK(c4,w4,P4,S4){


var v4=document.createElement('div');
v4.style.fontSize=w4+'px';
v4.className='clickable';
var g4=document.createElement('span');

if(S4){
var N4=document.createElement('span');
N4.style.color='#f00';
N4.appendChild(document.createTextNode('NEW '));
g4.appendChild(N4)
}


if(typeof c4=='string'){
g4.appendChild(document.createTextNode(c4))
}
else {
g4.appendChild(c4)
}

g4.style.verticalAlign='middle';
g4.onclick=function(){
P4(g4)
};
v4.appendChild(g4);
return v4
};




















var VK={

VW:function(E4){
var X4,q4,b4,A4='',i4;

switch(typeof E4){
case 'object':;
if(E4){
if(E4 instanceof Array){
for(q4=0;q4<E4.length;++q4){
i4=this.VW(E4[q4]);
if(A4){
A4+=','
}
A4+=i4
}
return '['+A4+']'
}else if(typeof E4.toString!='undefined'){
for(q4 in E4){
i4=E4[q4];
if(typeof i4!='undefined'&&typeof i4!='function'){
i4=this.VW(i4);
if(A4){
A4+=','
}
A4+=this.VW(q4)+':'+i4
}
}
return '{'+A4+'}'
}
}
return 'null';
case 'number':;
return isFinite(E4)?String(E4):'null';
case 'string':;
b4=E4.length;
A4='\"';
for(q4=0;q4<b4;q4+=1){
X4=E4.charAt(q4);
if(X4>=' '){
if(X4=='\\'||X4=='\"'){
A4+='\\'
}
A4+=X4
}else {
switch(X4){
case '\b':;
A4+='\\b';
break;
case '\f':;
A4+='\\f';
break;
case '\n':;
A4+='\\n';
break;
case '\r':;
A4+='\\r';
break;
case '\t':;
A4+='\\t';
break;
default:; 
X4=X4.charCodeAt();
A4+='\\u00'+Math.floor(X4/16).toString(16)+
(X4%16).toString(16)
}
}
}
return A4+'\"';
case 'boolean':;
return String(E4);
default:; 
return 'null'
}
},
parse:function(d4){
var _4=0;
var nD=' ';

function k4(JZ){
throw {
name:'JSONError',
message:JZ,
cW:_4-1,
text:
d4}
};

function G4(){
nD=d4.charAt(_4);
_4+=1;
return nD
};

function W4(){
while(nD!==''&&nD<=' '){
G4()
}
};

function h4(){
var lw,ew='',nw,Bw;

if(nD=='\"'){
n_:while(G4()){
if(nD=='\"'){
G4();
return ew
}else if(nD=='\\'){
switch(G4()){
case 'b':;
ew+='\b';
break;
case 'f':;
ew+='\f';
break;
case 'n':;
ew+='\n';
break;
case 'r':;
ew+='\r';
break;
case 't':;
ew+='\t';
break;
case 'u':;
Bw=0;
for(lw=0;lw<4;lw+=1){
nw=parseInt(G4(),16);
if(!isFinite(nw)){
break n_
}
Bw=Bw*16+nw
}
ew+=String.fromCharCode(Bw);
break;
default:; 
ew+=nD
}
}else {
ew+=nD
}
}
}
k4("Bad string")
};

function M4(){
var Dw=[];

if(nD=='['){
G4();
W4();
if(nD==']'){
G4();
return Dw
}
while(nD){
Dw.push(O4());
W4();
if(nD==']'){
G4();
return Dw
}else if(nD!=','){
break
}
G4();
W4()
}
}
k4("Bad array")
};

function BD(){
var $w,Vw={};

if(nD=='{'){
G4();
W4();
if(nD=='}'){
G4();
return Vw
}
while(nD){
$w=h4();
W4();
if(nD!=':'){
break
}
G4();
Vw[$w]=O4();
W4();
if(nD=='}'){
G4();
return Vw
}else if(nD!=','){
break
}
G4();
W4()
}
}
k4("Bad object")
};

function s4(){
var Qw='',Yw;
if(nD=='-'){
Qw='-';
G4()
}
while(nD>='0'&&nD<='9'){
Qw+=nD;
G4()
}
if(nD=='.'){
Qw+='.';
while(G4()&&nD>='0'&&nD<='9'){
Qw+=nD
}
}
if(nD=='e'||nD=='E'){
Qw+='e';
G4();
if(nD=='-'||nD=='+'){
Qw+=nD;
G4()
}
while(nD>='0'&&nD<='9'){
Qw+=nD;
G4()
}
}
Yw=+Qw;
if(!isFinite(Yw)){
k4("Bad number")
}else {
return Yw
}
};

function J4(){
switch(nD){
case 't':;
if(G4()=='r'&&G4()=='u'&&G4()=='e'){
G4();
return true
}
break;
case 'f':;
if(G4()=='a'&&G4()=='l'&&G4()=='s'&&
G4()=='e'){
G4();
return false
}
break;
case 'n':;
if(G4()=='u'&&G4()=='l'&&G4()=='l'){
G4();
return null
}
break
}
k4("Syntax error")
};

function O4(){
W4();
switch(nD){
case '{':;
return BD();
case '[':;
return M4();
case '\"':;
return h4();
case '-':;
return s4();
default:; 
return nD>='0'&&nD<='9'?s4():J4()
}
};

return O4()
}
};


function eK(VD,DD){

VD=VD.substring(VD.indexOf('?')+1);

var lD=VD.split('&');
for(var $D in lD){
var eD=lD[$D].split('=');

if(eD[0]==DD){
return decodeURIComponent(eD[1])
}
}
return undefined
};

function fK(YD){
if(YD.indexOf('://')==-1)YD='http://'+YD;
YD=YD.substring(YD.indexOf('://')+'://'.length);
if(YD.indexOf('/')!=-1)YD=YD.substring(0,YD.indexOf('/'));
return YD.toLowerCase()
};

function GX(HD,QD){
for(var rD in HD)if(HD[rD]==QD)return true;
return false
};

function K(ZD){
if(typeof ZD=='string')ZD=document.getElementById(ZD);
if(!ZD)return; 
while(ZD.childNodes.length>0)ZD.removeChild(ZD.childNodes[0])
};

function j1(TD){
var RD=document.createElement('div');
RD.style.fontSize='1px';
RD.style.height=TD+'px';
RD.style.width=1+'px';
return RD
};

function Zj(fD,xD){
for(var KD=0;KD<xD.length;KD++){
if(xD[KD]==fD){
xD.splice(KD,1);
KD--
}
}
};


function H(mD){

var pD=mD?mD:window.event;

var jD=0;
var FD=0;
var ID=0;
var CD=0;

if(pD!=null){
if(b1){
ID=pD.shiftKey;
FD=pD.altKey;
jD=pD.ctrlKey

}
else {
ID=pD.shiftKey;
jD=pD.ctrlKey;
FD=pD.altKey;
CD=pD.metaKey
}
}
return (jD||CD||ID)
};


function GK(UD){

var aD=UD?UD:window.event;

var zD=0;
var yD=0;
var LD=0;
var oD=0;

if(aD!=null){
if(b1){
LD=aD.shiftKey;
yD=aD.altKey;
zD=aD.ctrlKey

}
else {
LD=aD.shiftKey;
zD=aD.ctrlKey;
yD=aD.altKey;
oD=aD.metaKey
}
}
return (zD||oD)
};

function HX(cD){

var SD=cD?cD:window.event;

var wD=0;
var uD=0;
var PD=0;
var gD=0;

if(SD!=null){
if(b1){
PD=SD.shiftKey;
uD=SD.altKey;
wD=SD.ctrlKey

}
else {
PD=SD.shiftKey;
wD=SD.ctrlKey;
uD=SD.altKey;
gD=SD.metaKey
}
}
return (PD)
};



function IK(ND){
ND['noCacheRandom']=A1()
};
function A1(){
return new Date().getTime()+Math.round(Math.random()*10000)+''
};

function xX(AD,iD,ED){
IK(iD);
var vD=VK.VW(iD);
kK(AD,vD,function(rw){
if(ED)ED(VK.parse((rw)))
})
};

function kK(OD,bD,qD){

var XD=I1();

XD.open(bD==null?"GET":"POST",OD,true);

XD.setRequestHeader("Content-Type","text/xml");
XD.onreadystatechange=function(){
var Zw=false;



Zw=(XD.readyState==4);
if(Zw){
var Hw=XD.responseText;
qD(Hw)
}
};

XD.send(bD)

};

function I1(){
var sD=new XMLHttpRequest();
return sD
};

function U1(){

return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,function(fw){
var Rw=Math.random()*16|0,Tw=fw=='x'?Rw:(Rw&0x3|0x8);
return Tw.toString(16)
})
};


function Y1(dD){
if(!dD==null||dD==undefined)return '';
return dD.replace(/^\s+/,'').replace(/\s+$/,'')
};

function FK(){
var kD=document.createElement('span');
var hD=document.createElement('span');
hD.style.fontStyle='italic';
hD.appendChild(document.createTextNode('One'));
kD.appendChild(hD);
kD.appendChild(document.createTextNode('Tab'));
return kD
};

function O(MD){
var GD=MD.split('OneTab');
var WS=document.createElement('span');
for(var GS in GD){
if(GD[GS]=='')WS.appendChild(FK());
else WS.appendChild(document.createTextNode(GD[GS]))
}
return WS
};


function B(Be){
var JS=new Date(Be.valueOf()),
_S=(Be.getUTCDay()+6)%7,
ne;

JS.setUTCDate(JS.getUTCDate()-_S+3);
ne=JS.valueOf();
JS.setUTCMonth(0,1);

if(JS.getUTCDay()!==4){
JS.setUTCMonth(0,1+((4-JS.getUTCDay())+7)%7)
}

return Math.ceil((ne-JS)/(7*24*3600*1000))+1
};
function pK(ee,le){
while(ee.length<le)ee='0'+ee;
return ee
};
function a1(De){
return (De.getUTCFullYear()+'').substr(2)+pK(B(De)+'',2)
};PK(function(){JK()});

function JK(){
C1()
};

function C1(){

var Ve=document.getElementById('contentAreaDiv');

K(Ve);

Ve.style.paddingTop='0px';
Ve.style.paddingLeft='0px';

Ve.appendChild(pj());

Ve.appendChild(XK('Options'));

var $e=document.createElement('div');
Ve.appendChild($e);

$e.style.paddingTop='24px';
$e.style.paddingLeft='36px';



$e.appendChild(F1('restoreWindow','When a tab group is restored, send the tabs to:',[
{zW:'newWindow',title:'A new window, unless OneTab is the only tab in the current window'},
{zW:'newWindowAlways',title:'Always a new window'},
{zW:'currentWindow',title:'Always the current window'}
]));

$e.appendChild(F1('pinnedTabs','Pinned tabs:',[
{
zW:'ignore',title:"Don\'t send pinned tabs to OneTab",
$W:"You can still manually send a pinned tab to OneTab by right clicking within the web page to access the OneTab menu, and then clicking \'Send only this tab to OneTab\'"
},
{
zW:'allow',title:'Allow pinned tabs to be sent to OneTab'
}
],"Note:  A tab becomes \'pinned\' when you right click on the tab and click \'Pin tab\'. Some people like to make sites such as Facebook or Gmail pinned so they can easily locate them. OneTab will remember whether a tab was pinned when you restore it."));

$e.appendChild(F1('startupLaunch','Startup:',[
{zW:'displayOneTab',title:'Display OneTab whenever you start your web browser for the first time'},
{zW:'none',title:"Do not open OneTab automatically",$W:"To open it manually, use the right click menu and choose \'Display OneTab\'"}
]));

$e.appendChild(F1('restoreRemoval',"On clicking \'restore all\' or restoring a single tab:",[
{zW:'default',title:'Open the tab(s) and remove them from your OneTab list',
$W:"You still can press ctrl, cmd or shift to restore the tab(s) without removing them from OneTab. If you set any of your tab groups as \'locked\' then the tabs will not be removed from OneTab unless you unlock that tab group first."},
{zW:'keep',title:"Keep them in your OneTab list",$W:"You can manually delete entries by hovering over them and clicking the X icon, or by clicking the \'delete all\' button"}
]));

$e.appendChild(F1('duplicates',"Duplicates:",[
{zW:'allow',title:'Allow duplicates'},
{zW:'reject',title:"Silently reject duplicates",$W:"If OneTab already contains the URL of a tab, it will not be added again. This only applies when you click the OneTab icon or use the right click menu to send multiple tabs to OneTab. If you use the right click OneTab menu to send only a specific tab to OneTab, then the duplicate will be allowed for that specific tab."}
]))


};


var O1=0;

function F1(re,Re,Ke,Te){
var Ze=document.createElement('div');
Ze.style.paddingBottom='40px';
Ze.style.maxWidth='600px';

var Qe=document.createElement('div');
Ze.appendChild(Qe);
Qe.style.fontSize='14px';
Qe.style.paddingBottom='0px';
Qe.appendChild(document.createTextNode(Re));

var Ye='optionGroup'+(O1++);

for(var fe in Ke)Ze.appendChild(Z(re,Ye,Ke[fe]));

if(Te){
var He=document.createElement('div');
Ze.appendChild(He);
He.style.fontSize='12.25px';
He.style.color='#666';
He.style.paddingTop='10px';
He.style.paddingLeft='0px';
He.appendChild(document.createTextNode(Te))

}

return Ze
};

var A=0;

function Z(Ie,Fe,ae){

var xe='optionId'+A++;

var je=ae.zW;

var me=document.createElement('div');
me.style.paddingBottom='0px';


var pe=document.createElement('input');
pe.type='radio';
pe.name=Fe;
pe.id=xe;
pe.style.cursor='pointer';

pX(Ie,function(Kw){

if(Kw==je)pe.checked=true
});

pe.addEventListener('click',function(){
BX(function(jJ){
jJ[Ie]=je;
I(jJ)
})
});

var Ce=document.createElement('label');
Ce['htmlFor']=xe;
Ce.style.fontSize='14px';
Ce.appendChild(document.createTextNode(ae.title));
Ce.style.cursor='pointer';

me.appendChild(pe);
me.appendChild(Ce);

var ye=document.createElement('div');
ye.style.color='#666';
ye.style.fontSize='12.25px';
ye.style.paddingTop='4px';
ye.style.paddingLeft='25px';
if(ae.$W)ye.appendChild(document.createTextNode(ae.$W));
me.appendChild(ye);


return me
}



