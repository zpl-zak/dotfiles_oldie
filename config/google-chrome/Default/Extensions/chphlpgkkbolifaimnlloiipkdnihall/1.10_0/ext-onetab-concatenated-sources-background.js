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








var sX={};
function f1(qW,bW){
sX[qW]=bW;
if(Ju)D(qW,bW)
};

function L(OW){
return OW.indexOf(mX)==0
};

function fj(){
var sW=gK('availableVersion');

if(!sW)return false;

var GW=parseInt(x1.substring(0,x1.indexOf(".")));
var MW=parseInt(x1.substring(x1.indexOf(".")+1));

var kW=parseInt(sW.substring(0,sW.indexOf(".")));
var hW=parseInt(sW.substring(sW.indexOf(".")+1));

var dW=false;

if(GW<kW)dW=true;
if(GW==kW){
if(MW<hW)dW=true
}

return dW
};
f1('upgradeAvailable',function(WW){return {value:fj()}});


function V(){
if(!LX()['extensionKey'])LX()['extensionKey']=U1();
return LX()['extensionKey']
};
f1('getExtensionKey',function(_W){return V()});


var W=function(){
var JW=IX();
if(!JW['tabGroups']){
JW['tabGroups']=[];
OK(JW)
}
};



var SX=function(){
J()
};
f1('displayOneTabAction',function(Bn){return SX()});


var nX=function(nn){
q(function(BB){
DX(BB,function(Bl){
KK();
Bl()
},nn)
})
};
f1('sendCurrentTabToOneTabAction',function(en){return nX(en.gj)});


var d=function($n,Dn){

var Vn=$n['linkUrl'];

var ln='';

if($n['linkTitle'])ln=$n['linkTitle'];
else {

if(Ju&&(Vn==window.Rj)){
ln=window.KX
}
else {
ln=Vn
}
}

CX(Vn,ln,function(nB){

KK();
nB()
},Dn)

};


var AK=function(Yn){

c1(function(eB){
DK(eB,true,function(nl){
J(true,nl)
},Yn)
})

};
f1('sendAllTabsInCurrentWindowToOneTabAction',function(Qn){return AK(Qn.gj)});


var U=function(rn){

c1(function($B,DB){
var lB=[];
if(DB){
for(var VB in $B)if(parseInt($B[VB]['index'])!=parseInt(DB['index']))lB.push($B[VB]);
if(lB.length>0){
DK(lB,true,function(el){
KK();
el()
},rn)
}
}
else {
if(!l_)alert('no active tab (B)');
else if(_X)console.log('no active tab (B)')
}
})

};
f1('sendTabsExceptThisToOneTabAction',function(Hn){return U(Hn.gj)});


var uK=function(Zn){

c1(function(HB,YB){
var QB=[];
if(YB){
for(var rB in HB)if(parseInt(HB[rB]['index'])<parseInt(YB['index']))QB.push(HB[rB]);
if(QB.length>0){
DK(QB,true,function(ll){
KK();
ll()
},Zn)
}
}
})

};
f1('sendTabsToTheLeftToOneTabAction',function(Tn){return uK(Tn.gj)});


var UX=function(Rn){

c1(function(fB,ZB){
var TB=[];
if(ZB){
for(var RB in fB)if(parseInt(fB[RB]['index'])>parseInt(ZB['index']))TB.push(fB[RB]);
if(TB.length>0){
DK(TB,true,function(Dl){
KK();
Dl()
},Rn)
}
}

})

};
f1('sendTabsToTheRightToOneTabAction',function(fn){return UX(fn.gj)});



var rX=function(xn){

var Kn=[];

s1(function(KB){
DK(KB,true,function(Vl){
Kn.push(Vl)
},xn)
});

J(true,function(){
for(var xB in Kn)Kn[xB]()
})

};
f1('sendAllTabsInAllWindowsToOneTabAction',function(Fn){return rX(Fn.gj)});




function KK(pn){

qK(function(CB){

var FB=undefined;
for(var mB=0;mB<CB.length;mB++){
var pB=CB[mB];
var IB=pB['url'];
if(IB.indexOf(mX)==0){
FB=pB;
break
}
}

if(FB){
OX(FB,function(){
if(pn)pn()
})
}

})

};


function iK(){
var mn=IX();
var In=mn['tabGroups'];

if(!In)In=[];

var Cn=0;
for(var yn=0;yn<In.length;yn++){
var jn=In[yn];
Cn+=jn['tabsMeta'].length
}

if(Cn==0){
qK(function(yB){
for(var jB in yB){
if(L(yB[jB]['url'])){
h(yB[jB],function(){



y1()
})
}
}
})
}
};
f1('closeOneTabIfEmpty',function(an){return iK()});



function J(Un,Ln){

qK(function(zB){

var aB=undefined;
for(var oB=0;oB<zB.length;oB++){
var LB=zB[oB];
var UB=LB['url'];
if(UB.indexOf(mX)==0){
if(aB){
h(aB)
}
else {
aB=LB
}
}
}

if(aB){
if(Un){
OX(aB,function(){

})
}
XX(aB,function(){
if(Ln)Ln()
})
}
else {
nK(mX,function(){
if(Ln)Ln()
})
}

})

};
f1('showOneTab',function(on){return J(!!on.refresh)});




function Bj(Pn,zn){

var un=JX(Pn);

var Sn=true;

qK(function(gB){

var SB=undefined;
for(var cB=0;cB<gB.length;cB++){
var uB=gB[cB];
var PB=uB['url'];
if(PB==un){
if(SB){
h(SB)
}
else {
SB=uB
}
}
}

if(SB){
if(Sn){
OX(SB,function(){})
}
XX(SB,function(){
if(zn)zn()
})
}
else {
nK(un,function(){
if(zn)zn()
})
}

})

};
f1('showOrRefreshAndFocusScriptPage',function(cn){return Bj(cn.url)});



var EX=function(gn,Nn){

var wn=gK('restoreWindow');

if(Nn=='currentWindow')wn='currentWindow';
if(Nn=='newWindow')wn='newWindow';

c1(function(wB){

var vB=0;
for(var EB in wB){
var NB=wB[EB];
if(NB['pinned']||NB['isPinned'])continue;

if(L(NB['url']))continue;
vB++
}

if(wn=='currentWindow'||
((wn=='newWindow')&&(Nn!='newWindow')&&(vB==0))
){

for(var EB=0;EB<gn.length;EB++){
var iB=gn[EB];
X(iB['url'],!!iB['pinned'],false,function(){
y1()
})
}

}
else {
q1(gn,function(){
y1()
})
}

});

setTimeout(function(){
iK()
},200)

};
f1('restoreTabsMeta',function(vn){return EX(vn.jj,vn.XW)});


function K1(An){

var sn=IX();
var Xn=sn['tabGroups'];

var hn=An.split('\n');

var qn=new Date().getTime();

var bn=function(){
var AB={};
AB['createDate']=qn--;
AB['tabsMeta']=[];
AB['id']=qX();
return AB
};

var Mn=bn();

for(var Gn in hn){
var dn=hn[Gn];
if(!dn){
if(Mn['tabsMeta'].length>0){
Xn.push(Mn);
Mn=bn()
}
}
else {
var kn;
var En;
if(dn.indexOf(' | ')!=-1){
kn=dn.substring(0,dn.indexOf(' | '));
En=dn.substring(dn.indexOf(' | ')+' | '.length)
}
else {
kn=dn;
En=fK(dn)
}

if(kn.indexOf('://')==-1)kn='http://'+kn;

var On={};
On['id']=qX();
On['url']=kn;
On['title']=En;
Mn['tabsMeta'].push(On)
}
}
if(Mn['tabsMeta'].length>0){
Xn.push(Mn)
}


OK(sn);

J(true)


};
f1('importTabsFromText',function(Wn){return K1(Wn.text)});

var q=function(_n){

window['chrome']['tabs']['query']({'active':true,'currentWindow':true},function(XB){
if(XB&&XB.length==1)_n(XB[0])
})

};



var mX=window['chrome']['runtime']['getURL']('onetab.html');



function D(BV,Jn){

window['chrome']['runtime']['onMessage']['addListener'](function(dB,qB,hB){
if(dB.type==BV){

var OB=VK.parse(dB.PW);
var bB={};

var sB=Jn(OB);
if(!sB)sB={};
bB.PW=VK.VW(sB);
hB(bB)
}
})

};

function Dj(DV,eV,lV){

var nV={};
nV.fW=DV;
nV.PW={};
if(eV)nV.PW=VK.VW(eV);

s1(function(MB){
for(var kB in MB){
if(L(MB[kB]['url'])){
window['chrome']['tabs']['sendMessage'](MB[kB]['id'],nV,function($l){
if(lV)lV($l)
})
}
}
})

};


function c1(VV){

window['chrome']['windows']['getLastFocused'](undefined,function(GB){
window['chrome']['tabs']['query']({'windowId':GB['id']},
function(rl){
var Yl;
for(var Ql in rl){
if(rl[Ql]['active'])Yl=rl[Ql]
}
VV(rl,Yl)
}
)
})

};















function s1($V,YV){
window['chrome']['windows']['getLastFocused'](undefined,function(WB){
window['chrome']['windows']['getAll']({'populate':true},function(Zl){
for(var Tl in Zl){
var Hl=Zl[Tl];
if(YV&&(Hl['id']==WB['id']))continue;
$V(Hl['tabs'])





}
})
})
};

function qK(QV){
window['chrome']['tabs']['query']({},function(_B){
QV(_B)
})
};

function OX(HV,rV){
window['chrome']['tabs']['reload'](HV['id'],{},function(){
rV()
})
};
function h(TV,ZV){
window['chrome']['tabs']['remove'](TV['id'],function(){
if(ZV)ZV()
})
};


















function F(FV,RV){
var KV=[];
for(var xV in FV)KV.push(FV[xV]);
while(KV.length>0){
var fV=KV.pop();
h(fV,function(){
F(KV,function(){
RV()
})
})
}

};


function XX(IV,pV){
window['chrome']['tabs']['update'](IV['id'],{'active':true},function(){
window['chrome']['windows']['update'](IV['windowId'],{'focused':true},function(){
if(pV)pV()
})
})
};

function nK(CV,mV){
window['chrome']['tabs']['create']({'url':CV},function(){
if(mV)mV()
})
};











function X(LV,jV,aV,yV){
window['chrome']['windows']['getLastFocused']({'populate':true},function(JB){
window['chrome']['tabs']['create']({'windowId':JB['id'],'pinned':!!jV,'active':!!aV,'url':LV},function(){
if(yV)yV()
})
})

};



function q1(UV,oV){
window['chrome']['windows']['create']({'focused':true,'url':UV[0]['url']},function(BP){

window['chrome']['tabs']['query']({'windowId':BP['id']},function(Rl){
window['chrome']['tabs']['update'](Rl[0]['id'],{'pinned':!!UV[0]['pinned']},function(){

for(var na=1;na<UV.length;na++){
var Ba=UV[na];
X(Ba['url'],!!Ba['pinned'],false,function(){
if(oV)oV()
})
}

})
})

})
};



function aX(uV,zV,SV){
if(uV)zV['parentId']=uV.sj;
var PV={};
PV.sj=window['chrome']['contextMenus']['create'](zV);
if(SV)setTimeout(SV,1);
return PV
};

function $j(wV,cV,NV){
if(wV)cV['parentId']=wV.sj;
var gV=cV.title;
var vV={};
vV.sj=window['chrome']['contextMenus']['create'](cV);
vV.UW=function(nP){
window['chrome']['contextMenus']['update'](vV.sj,{'enabled':nP},function(){})
};
vV.xW=function(eP){
window['chrome']['contextMenus']['update'](vV.sj,{
'type':'checkbox',
'checked':
eP},function(){})
};
vV._j=function(lP){
window['chrome']['contextMenus']['update'](vV.sj,{
'title':
lP},function(){})
};
if(NV)setTimeout(NV,1);
return vV
};

function oK(EV,iV){
if(EV){
window['chrome']['contextMenus']['removeAll'](function(){
iV()
})
}
else iV()
};


function fX(XV){
var AV={
'type':'separator',
'contexts':['all']
};
if(XV)AV['parentId']=XV.sj;
window['chrome']['contextMenus']['create'](AV)
};

function n1(bV){

window['chrome']['runtime']['onMessage']['addListener'](function(VP,DP,$P){
if(VP.type=='linkRightClick'){
bV(VP.title,VP.url)
}
})

};




function LX(){
return window['localStorage']
};






function P(qV){
window['chrome']['browserAction']['onClicked']['addListener'](function(YP){
qV()
})
};

function xK(){
window['chrome']['commands']['onCommand']['addListener'](function(QP){
if(QP=='display-onetab'){
J()
}
if(QP=='send-current-tab-to-onetab'){
nX()
}
if(QP=='send-all-tabs-in-current-window-to-onetab'){
AK()
}
if(QP=='send-all-tabs-in-all-windows-to-onetab'){
rX()
}
if(QP=='send-all-tabs-except-this-to-onetab'){
U()
}
})
};

function E1(hV){

window['chrome']['tabs']['onCreated']['addListener'](function(rP){
window['chrome']['tabs']['get'](rP['id'],function(fl){
hV()
})
});
window['chrome']['tabs']['onUpdated']['addListener'](function(ZP,HP,TP){
hV()
});
window['chrome']['tabs']['onMoved']['addListener'](function(RP,fP){
hV()
});
window['chrome']['tabs']['onRemoved']['addListener'](function(xP,KP){
hV()
});
window['chrome']['tabs']['onReplaced']['addListener'](function(pP,FP){
hV()
});
window['chrome']['tabs']['onDetached']['addListener'](function(IP,mP){
hV()
});
window['chrome']['tabs']['onAttached']['addListener'](function(CP,jP){
hV()
});


var dV={};
var sV=undefined;
var OV=undefined;

window['chrome']['tabs']['onActivated']['addListener'](function(yP){
window['chrome']['tabs']['get'](yP['tabId'],function(xl){
if(!xl)return; 
var Kl=sV?sV:undefined;
dV[xl['windowId']]=xl;
if(typeof OV==='undefined')OV=xl['windowId'];
if(OV==xl['windowId'])sV=xl;
if(Kl!=sV['id'])hV()
})
});

window['chrome']['windows']['onFocusChanged']['addListener'](function(LP){
var aP=sV?sV['id']:undefined;
OV=LP;
if(dV.hasOwnProperty(OV)){
sV=dV[OV]
}
if(sV&&(aP!=sV['id']))hV()
})


};

function zK(kV){
window['chrome']['tabs']['query']({},function(UP){



kV()

})
};

function JX(MV){
return window['chrome']['runtime']['getURL'](MV)
};

function Y(){
window['chrome']['webRequest']['onCompleted']['addListener'](
function(zP){
if(zP['statusCode']==200&&zP['method']=='GET'&&zP['fromCache']==false&&zP['method']=='GET'){

try{
$K(fK(zP['url']))
}
catch(oP){
if(_X)console.log(oP)
}
}
},
{
'urls':['http://*/*','https://*/*'],
'types':['main_frame']
},
['responseHeaders']
)
};



function i1(WV,GV){
if(WV['f']<GV['f'])return 1;
if(WV['f']>GV['f'])return -1;
return 0
};

var v1=12;
var uX=30;
var C=150;

function $K(ly){
if(ly.indexOf('www.google.')!=-1)return; 

if(!LX()['topSites'])LX()['topSites']=VK.VW({});
var ny=VK.parse(LX()['topSites']);


var Yy=0;
var Dy=a1(new Date(new Date().getTime()+Yy));


var By=[];
var JV=[];
for(var ey in ny)if(ey!=Dy)By.push(ey);
By.sort();
while(By.length>v1)JV.push(By.splice(0,1)[0]);
for(var Qy in JV)delete ny[JV[Qy]];


for(var ey in ny){
if(ey!=Dy){
var _V=ny[ey];
if(_V.length>uX){
_V.sort(i1);
if(_V.length>uX)_V=_V.slice(0,uX);
ny[ey]=_V
}
}
}


if(!ny[Dy])ny[Dy]=[];
var $y=undefined;
var _V=ny[Dy];

for(var Qy in _V)if(_V[Qy]['u']==ly)$y=_V[Qy];
if(!$y){
$y={'u':ly,'f':0};
_V.push($y)
}
$y['f']++;


if(_V.length>C){
n_:for(var Qy=1;Qy<1000;Qy++){
for(var Vy in _V){
if(_V[Vy]['f']==Qy){



_V.splice(Vy,1);
break n_
}
}
}
}

LX()['topSites']=VK.VW(ny)




};var p1={};

var NK=function(){
p1.DW=undefined;
p1.SW=undefined;
p1.NW=undefined;
p1.bj=[];
p1.Gj=[];
p1.oj=[];
p1.Xj=[];
p1.Ij=[];
p1.kj=[];
p1.wj=[];
p1.uW=undefined
};



var ZX=function(Hy,Ty){
for(var Ry in Hy){
var ry=Hy[Ry];
for(var Zy in ry){

ry[Zy].UW(Ty)
}
}
};

function y1(){
setTimeout(zX,100)
};
var mK='';
function zX(){
qK(function(uP){

c1(function(Ul,Cl){


var Il=false;
if(!Cl||!Cl['url']){

if(_X)console.log('no active tab (A)');
return 
}

var yl=Cl['url'];
Il=L(yl);


p1.SW.UW(!Il);











mK=Cl['url'];

p1.uW.UW(!Il);
p1.uW._j('Exclude '+((Cl['url']&&(Cl['url'].toLowerCase().indexOf('http')==0))?fK(Cl['url']):'web site')+' from OneTab');
p1.uW.xW(Z1(yl));


ZX([
p1.bj,
p1.Gj,
p1.oj,
p1.Xj,
p1.Ij,
p1.
kj],true);


var ml=false;
var Ll=false;
var jl=false;
var pl=false;
var Fl=false;

for(var al in Ul){

if(Cl){
if(parseInt(Ul[al]['index'])<parseInt(Cl['index'])){
if(Ul[al]['url']){
if(!L(Ul[al]['url']))ml=true
}
}
if(parseInt(Ul[al]['index'])>parseInt(Cl['index'])){
if(Ul[al]['url']){
if(!L(Ul[al]['url']))Ll=true
}
}
if(!L(Ul[al]['url'])){
pl=true;
if(Ul[al]['id']!=Cl['id'])jl=true
}
}

}


s1(function(la){

for(var ea in la){
if(!L(la[ea]['url']))Fl=true
}
},true);











if(!pl)ZX([p1.bj],false);
if(Il||!pl)ZX([p1.Gj],false);
if(!ml)ZX([p1.oj],false);
if(!Ll)ZX([p1.Xj],false);
if(!Fl)ZX([p1.Ij],false);
if(!jl)ZX([p1.kj],false)

})
})

};



function N(){





oK(p1.DW,function(){
NK();
ZK();
y1()
})
};

f1('recreateContextMenus',function(fy){return N()});

function ZK(){
p1.DW=aX(undefined,{
'type':'normal',
'contexts':['all'],
'title':'OneTab'
});

p1.SW=$j(p1.DW,{
'type':'normal',
'title':'Display OneTab',
'contexts':['all'],
'onclick':function(PP,SP){
SX()
}
});


var Ky=$j(p1.DW,{
'type':'normal',
'title':'Send all tabs to OneTab',
'contexts':['all'],
'onclick':function(gP,cP){
AK()
}
});
p1.bj.push(Ky);

var oy=$j(p1.DW,{
'type':'normal',
'title':'Send this web link to OneTab',
'contexts':['link'],
'onclick':function(NP,wP){
d(NP)
}
});
p1.wj.push(oy);

fX(p1.DW);


var py=$j(p1.DW,{
'type':'normal',
'title':'Send only this tab to OneTab',
'contexts':['all'],
'onclick':function(iP,vP){
nX()
}
});
p1.Gj.push(py);


var Iy=$j(p1.DW,{
'type':'normal',
'title':'Send all tabs except this tab to OneTab',
'contexts':['all'],
'onclick':function(AP,EP){
U()
}
});
p1.kj.push(Iy);


var ay=$j(p1.DW,{
'type':'normal',
'title':'Send tabs on the left to OneTab',
'contexts':['all'],
'onclick':function(bP,XP){
uK()
}
});
p1.oj.push(ay);

var Ly=$j(p1.DW,{
'type':'normal',
'title':'Send tabs on the right to OneTab',
'contexts':['all'],
'onclick':function(OP,qP){
UX()
}
});
p1.Xj.push(Ly);

var jy=$j(p1.DW,{
'type':'normal',
'title':'Send all tabs from all windows to OneTab',
'contexts':['all'],
'onclick':function(dP,sP){
rX()
}
});
p1.Ij.push(jy);

fX(p1.DW);

p1.uW=$j(p1.DW,{
'type':'checkbox',
'checked':false,
'contexts':['all'],
'title':'Exclude this web site from OneTab',
'onclick':function(GP,MP){
var kP=fK(mK);
var hP=W1(kP);
if(hP){

Vj(kP)
}
else {

P1(kP)
}
y1()
}
});

var yy=false;
var Fy=IX();
var xy=Fy['tabGroups'];
if(!xy)xy=[];
for(var my=0;my<xy.length;my++){
var Cy=xy[my];
if(Cy['label']&&Y1(Cy['label'])!=''){
yy=true;
break
}
}

if(yy){

fX(p1.DW);

p1.NW=aX(p1.DW,{
'type':'normal',
'contexts':['all'],
'title':'Named tab groups'
},function(){

for(var JP=0;JP<xy.length;JP++){
var _P=xy[JP];
if(_P['label']&&Y1(_P['label'])!=''){

var WP=function(zl){

var ol=aX(p1.NW,{

'type':'normal',
'contexts':['all'],
'title':zl['label']
},function(){


p1.bj.push($j(ol,{

'type':'normal',
'title':'Send all tabs to \"'+zl['label']+'\"',
'contexts':['all'],
'onclick':function(uy,zy){
AK(zl['id'])
}
}));

p1.wj.push($j(ol,{

'type':'normal',
'title':'Send this web link to \"'+zl['label']+'\"',
'contexts':['link'],
'onclick':function(Py,Sy){
d(Py,zl['id'])
}
}));

p1.Gj.push($j(ol,{

'type':'normal',
'title':'Send only this tab to \"'+zl['label']+'\"',
'contexts':['all'],
'onclick':function(gy,cy){
nX(zl['id'])
}
}));


p1.kj.push($j(ol,{

'type':'normal',
'title':'Send all tabs except this tab to \"'+zl['label']+'\"',
'contexts':['all'],
'onclick':function(Ny,wy){
U(zl['id'])
}
}));


p1.oj.push($j(ol,{

'type':'normal',
'title':'Send tabs on the left to \"'+zl['label']+'\"',
'contexts':['all'],
'onclick':function(iy,vy){
uK(zl['id'])
}
}));

p1.Xj.push($j(ol,{

'type':'normal',
'title':'Send tabs on the right to \"'+zl['label']+'\"',
'contexts':['all'],
'onclick':function(Ay,Ey){
UX(zl['id'])
}
}));

p1.Ij.push($j(ol,{

'type':'normal',
'title':'Send all tabs from all windows to \"'+zl['label']+'\"',
'contexts':['all'],
'onclick':function(by,Xy){
rX(zl['id'])
}
}))

}

)

}(_P)

}
}
})

}

fX(p1.DW);

var Uy=$j(p1.DW,{
'type':'normal',
'title':'Help',
'contexts':['all'],
'onclick':function(nG,BG){

nK('http://www.one-tab.com/help')
}
})


};




















var VK={

VW:function(Oy){
var hy,My,ky,sy='',qy;

switch(typeof Oy){
case 'object':;
if(Oy){
if(Oy instanceof Array){
for(My=0;My<Oy.length;++My){
qy=this.VW(Oy[My]);
if(sy){
sy+=','
}
sy+=qy
}
return '['+sy+']'
}else if(typeof Oy.toString!='undefined'){
for(My in Oy){
qy=Oy[My];
if(typeof qy!='undefined'&&typeof qy!='function'){
qy=this.VW(qy);
if(sy){
sy+=','
}
sy+=this.VW(My)+':'+qy
}
}
return '{'+sy+'}'
}
}
return 'null';
case 'number':;
return isFinite(Oy)?String(Oy):'null';
case 'string':;
ky=Oy.length;
sy='\"';
for(My=0;My<ky;My+=1){
hy=Oy.charAt(My);
if(hy>=' '){
if(hy=='\\'||hy=='\"'){
sy+='\\'
}
sy+=hy
}else {
switch(hy){
case '\b':;
sy+='\\b';
break;
case '\f':;
sy+='\\f';
break;
case '\n':;
sy+='\\n';
break;
case '\r':;
sy+='\\r';
break;
case '\t':;
sy+='\\t';
break;
default:; 
hy=hy.charCodeAt();
sy+='\\u00'+Math.floor(hy/16).toString(16)+
(hy%16).toString(16)
}
}
}
return sy+'\"';
case 'boolean':;
return String(Oy);
default:; 
return 'null'
}
},
parse:function(_y){
var Dd=0;
var Yd=' ';

function Bd(eG){
throw {
name:'JSONError',
message:eG,
cW:Dd-1,
text:
_y}
};

function ed(){
Yd=_y.charAt(Dd);
Dd+=1;
return Yd
};

function ld(){
while(Yd!==''&&Yd<=' '){
ed()
}
};

function Jy(){
var $G,VG='',DG,lG;

if(Yd=='\"'){
n_:while(ed()){
if(Yd=='\"'){
ed();
return VG
}else if(Yd=='\\'){
switch(ed()){
case 'b':;
VG+='\b';
break;
case 'f':;
VG+='\f';
break;
case 'n':;
VG+='\n';
break;
case 'r':;
VG+='\r';
break;
case 't':;
VG+='\t';
break;
case 'u':;
lG=0;
for($G=0;$G<4;$G+=1){
DG=parseInt(ed(),16);
if(!isFinite(DG)){
break n_
}
lG=lG*16+DG
}
VG+=String.fromCharCode(lG);
break;
default:; 
VG+=Yd
}
}else {
VG+=Yd
}
}
}
Bd("Bad string")
};

function nd(){
var YG=[];

if(Yd=='['){
ed();
ld();
if(Yd==']'){
ed();
return YG
}
while(Yd){
YG.push(Gy());
ld();
if(Yd==']'){
ed();
return YG
}else if(Yd!=','){
break
}
ed();
ld()
}
}
Bd("Bad array")
};

function $d(){
var rG,QG={};

if(Yd=='{'){
ed();
ld();
if(Yd=='}'){
ed();
return QG
}
while(Yd){
rG=Jy();
ld();
if(Yd!=':'){
break
}
ed();
QG[rG]=Gy();
ld();
if(Yd=='}'){
ed();
return QG
}else if(Yd!=','){
break
}
ed();
ld()
}
}
Bd("Bad object")
};

function Wy(){
var ZG='',HG;
if(Yd=='-'){
ZG='-';
ed()
}
while(Yd>='0'&&Yd<='9'){
ZG+=Yd;
ed()
}
if(Yd=='.'){
ZG+='.';
while(ed()&&Yd>='0'&&Yd<='9'){
ZG+=Yd
}
}
if(Yd=='e'||Yd=='E'){
ZG+='e';
ed();
if(Yd=='-'||Yd=='+'){
ZG+=Yd;
ed()
}
while(Yd>='0'&&Yd<='9'){
ZG+=Yd;
ed()
}
}
HG=+ZG;
if(!isFinite(HG)){
Bd("Bad number")
}else {
return HG
}
};

function Vd(){
switch(Yd){
case 't':;
if(ed()=='r'&&ed()=='u'&&ed()=='e'){
ed();
return true
}
break;
case 'f':;
if(ed()=='a'&&ed()=='l'&&ed()=='s'&&
ed()=='e'){
ed();
return false
}
break;
case 'n':;
if(ed()=='u'&&ed()=='l'&&ed()=='l'){
ed();
return null
}
break
}
Bd("Syntax error")
};

function Gy(){
ld();
switch(Yd){
case '{':;
return $d();
case '[':;
return nd();
case '\"':;
return Jy();
case '-':;
return Wy();
default:; 
return Yd>='0'&&Yd<='9'?Wy():Vd()
}
};

return Gy()
}
};


function eK(Zd,Hd){

Zd=Zd.substring(Zd.indexOf('?')+1);

var rd=Zd.split('&');
for(var Td in rd){
var Qd=rd[Td].split('=');

if(Qd[0]==Hd){
return decodeURIComponent(Qd[1])
}
}
return undefined
};

function fK(Rd){
if(Rd.indexOf('://')==-1)Rd='http://'+Rd;
Rd=Rd.substring(Rd.indexOf('://')+'://'.length);
if(Rd.indexOf('/')!=-1)Rd=Rd.substring(0,Rd.indexOf('/'));
return Rd.toLowerCase()
};

function GX(xd,fd){
for(var Kd in xd)if(xd[Kd]==fd)return true;
return false
};

function K(Fd){
if(typeof Fd=='string')Fd=document.getElementById(Fd);
if(!Fd)return; 
while(Fd.childNodes.length>0)Fd.removeChild(Fd.childNodes[0])
};

function j1(pd){
var Id=document.createElement('div');
Id.style.fontSize='1px';
Id.style.height=pd+'px';
Id.style.width=1+'px';
return Id
};

function Zj(md,jd){
for(var Cd=0;Cd<jd.length;Cd++){
if(jd[Cd]==md){
jd.splice(Cd,1);
Cd--
}
}
};


function H(Ud){

var ad=Ud?Ud:window.event;

var zd=0;
var yd=0;
var Ld=0;
var od=0;

if(ad!=null){
if(b1){
Ld=ad.shiftKey;
yd=ad.altKey;
zd=ad.ctrlKey

}
else {
Ld=ad.shiftKey;
zd=ad.ctrlKey;
yd=ad.altKey;
od=ad.metaKey
}
}
return (zd||od||Ld)
};


function GK(cd){

var Sd=cd?cd:window.event;

var wd=0;
var ud=0;
var Pd=0;
var gd=0;

if(Sd!=null){
if(b1){
Pd=Sd.shiftKey;
ud=Sd.altKey;
wd=Sd.ctrlKey

}
else {
Pd=Sd.shiftKey;
wd=Sd.ctrlKey;
ud=Sd.altKey;
gd=Sd.metaKey
}
}
return (wd||gd)
};

function HX(Ad){

var vd=Ad?Ad:window.event;

var bd=0;
var Nd=0;
var Ed=0;
var Xd=0;

if(vd!=null){
if(b1){
Ed=vd.shiftKey;
Nd=vd.altKey;
bd=vd.ctrlKey

}
else {
Ed=vd.shiftKey;
bd=vd.ctrlKey;
Nd=vd.altKey;
Xd=vd.metaKey
}
}
return (Ed)
};



function IK(qd){
qd['noCacheRandom']=A1()
};
function A1(){
return new Date().getTime()+Math.round(Math.random()*10000)+''
};

function xX(hd,sd,dd){
IK(sd);
var Od=VK.VW(sd);
kK(hd,Od,function(TG){
if(dd)dd(VK.parse((TG)))
})
};

function kK(Wd,Md,Gd){

var kd=I1();

kd.open(Md==null?"GET":"POST",Wd,true);

kd.setRequestHeader("Content-Type","text/xml");
kd.onreadystatechange=function(){
var fG=false;



fG=(kd.readyState==4);
if(fG){
var RG=kd.responseText;
Gd(RG)
}
};

kd.send(Md)

};

function I1(){
var _d=new XMLHttpRequest();
return _d
};

function U1(){

return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,function(FG){
var xG=Math.random()*16|0,KG=FG=='x'?xG:(xG&0x3|0x8);
return KG.toString(16)
})
};


function Y1(Jd){
if(!Jd==null||Jd==undefined)return '';
return Jd.replace(/^\s+/,'').replace(/\s+$/,'')
};

function FK(){
var nA=document.createElement('span');
var BA=document.createElement('span');
BA.style.fontStyle='italic';
BA.appendChild(document.createTextNode('One'));
nA.appendChild(BA);
nA.appendChild(document.createTextNode('Tab'));
return nA
};

function O(eA){
var lA=eA.split('OneTab');
var VA=document.createElement('span');
for(var DA in lA){
if(lA[DA]=='')VA.appendChild(FK());
else VA.appendChild(document.createTextNode(lA[DA]))
}
return VA
};


function B(QA){
var YA=new Date(QA.valueOf()),
$A=(QA.getUTCDay()+6)%7,
rA;

YA.setUTCDate(YA.getUTCDate()-$A+3);
rA=YA.valueOf();
YA.setUTCMonth(0,1);

if(YA.getUTCDay()!==4){
YA.setUTCMonth(0,1+((4-YA.getUTCDay())+7)%7)
}

return Math.ceil((rA-YA)/(7*24*3600*1000))+1
};
function pK(HA,ZA){
while(HA.length<ZA)HA='0'+HA;
return HA
};
function a1(TA){
return (TA.getUTCFullYear()+'').substr(2)+pK(B(TA)+'',2)
};function oX(){

G1();

W();

if(!LX()['installDate']){
LX()['installDate']=new Date().getTime()
}

P(function(){
AK()
});

zK(function(){

var IG=IX();
var pG=IG['tabGroups'];
if(!pG)pG=[];

var CG=0;
for(var yG=0;yG<pG.length;yG++){
var jG=pG[yG];
CG+=jG['tabsMeta'].length
}

if(CG>0&&gK('startupLaunch')=='displayOneTab'){
var mG=LX()['lastSeenVersion'];
if(x1!=mG){
LX()['lastSeenVersion']=x1
}
else {

J()
}
}

});

N();




if(Ju){
n1(function(LG,aG){
window.KX=LG;
window.Rj=aG
})
}

xK();

E1(function(){
y1()
});

Y()

};function cX(RA){
RA.sort(function(oG,UG){

if(oG['starred']||UG['starred']){
if(!UG['starred'])return -1;
else if(!oG['starred'])return 1;
else {

if(oG['starredDate']>UG['starredDate'])return 1;
if(oG['starredDate']<UG['starredDate'])return -1;
return 0
}
}
else {
if(oG['createDate']>UG['createDate'])return -1;
if(oG['createDate']<UG['createDate'])return 1;
return 0
}

})
};
function G1(){

f1('createNewTab',function(zG){return nK(zG.url)});

f1('createNewTabInLastFocusedWindowWithOpts',function(uG){return X(uG.url,!!uG.yW,!!uG.eW)});
f1('createNewTabsInNewFocusedWindow',function(SG){return q1(SG.jj)})

};function PX(){
if(!LX()['settings'])return {};
else return VK.parse(LX()['settings'])
};
f1('getSettings',function(fA){return PX()});

function $X(FA,xA){
var KA=PX();
KA[FA]=xA;
D1(KA)
};
f1('storeSetting',function(pA){return $X(pA.key,pA.value)});

function D1(IA){
LX()['settings']=VK.VW(IA)
};
f1('storeSettings',function(mA){return D1(mA.HW)});

var Yj={
'restoreWindow':'newWindow',
'pinnedTabs':'ignore',
'startupLaunch':'displayOneTab',
'restoreRemoval':'default',
'duplicates':'allow'
};
function gK(CA){
var jA=PX();
if(jA[CA])return jA[CA];
else return Yj[CA]
};
f1('getSetting',function(yA){return {value:gK(yA.YW)}});



function IX(){
if(!LX()['state'])return {};
else return VK.parse(LX()['state'])
};
f1('getState',function(aA){return IX()});


function OK(zA){


var LA=LX()['state'];

var oA=zA['tabGroups'];
for(var uA=0;uA<oA.length;uA++){
if(oA[uA]['tabsMeta'].length==0){
oA.splice(uA,1);
uA--
}
}



LX()['state']=VK.VW(zA);

Dj('storedStateChanged',{Nj:zA});


try{
VK.parse(LX()['state'])
}
catch(UA){
LX()['state']=LA;

if(!l_)alert('Out of local storage memory - could not store extension state')
}

};
f1('storeState',function(SA){return OK(SA.Nj)});






function Fj(PA){
var cA=IX();
if(!cA[PA])cA[PA]=[];
return cA[PA]
};
function S(gA,NA){
var wA=IX();
if(!wA[gA])wA[gA]=[];
wA[gA].push(NA);
OK(wA)
};

function qX(){
if(!LX()['idCounter'])LX()['idCounter']=0;
LX()['idCounter']=(parseInt(LX()['idCounter'])+1)+'';
return parseInt(LX()['idCounter'])
};

function CX(XA,vA,iA,EA){

var AA={'id':qX(),'url':XA,'title':vA};
V1(AA,EA);
iA(function(){
})

};

function DX(sA,bA,qA){

if(L(sA['url'])){

bA(function(){});
return 
}

var OA={'id':qX(),'url':sA['url'],'title':sA['title']};
if((sA['pinned']||sA['isPinned']))OA['pinned']=true;

V1(OA,qA);

bA(function(){
h(sA,function(){
y1()
})


})

};


function V1(MA,kA){

var GA=IX();
var dA=GA['tabGroups'];


cX(dA);

var hA=undefined;

if(typeof kA==='undefined'){
for(var JA=0;JA<dA.length;JA++){
var _A=dA[JA];
if(_A['starred']||_A['locked'])continue;
hA=_A;
hA['tabsMeta'].splice(0,0,MA);
break
}
}
else {
for(var JA=0;JA<dA.length;JA++){
var _A=dA[JA];
if(_A['id']==kA){
hA=_A;
hA['tabsMeta'].splice(0,0,MA);
break
}
}
}


if(!hA){
var WA=qX();
dA.push({'id':WA,'tabsMeta':[MA],'createDate':new Date().getTime()})
}

OK(GA)

};











function DK(B3,F3,K3,x3){

var D3=IX();
var n3=D3['tabGroups'];
cX(n3);

var p3=[];
for(var f3 in B3){
if(!F3)p3.push(B3[f3]);
else {
if(!Z1(B3[f3]['url']))p3.push(B3[f3])
}
}

var e3=[];
var Z3=[];

for(var f3=0;f3<p3.length;f3++){
var V3=p3[f3];
var T3=V3['url'];
if(T3.indexOf('://tabmemfree.appspot.com')!=-1){

if(!l_)alert('The OneTab extension is not compatible with TabMemFree. Please ensure that none of your tabs are parked with TabMemFree, then uninstall the TabMemFree extension and restart your web browser before using OneTab.');
return 
}
}

n_:for(var f3=0;f3<p3.length;f3++){
var V3=p3[f3];

var T3=V3['url'];

if((V3['pinned']||V3['isPinned'])&&gK('pinnedTabs')=='ignore'){
continue
}
if(L(T3)){
continue
}
if(T3=='chrome://newtab/'||T3=='about:blank'||T3==''||T3=='about:home'||T3=='about:newtab'){
Z3.push(V3);
continue
}
if(T3.indexOf('chrome-devtools://')==0){
continue
}
if(gK('duplicates')=='reject'){
for(var r3 in n3){
for(var H3 in n3[r3]['tabsMeta']){
if(n3[r3]['tabsMeta'][H3]['url']==T3){
Z3.push(V3);
continue n_
}
}
}
for(var r3 in e3){
if(e3[r3]['url']==T3){
Z3.push(V3);
continue n_
}
}
}

Z3.push(V3);

var R3={'id':qX(),'url':T3,'title':V3['title']};
if((V3['pinned']||V3['isPinned']))R3['pinned']=true;
e3.push(R3)

}


if(typeof x3==='undefined'){
var Y3=qX();
S('tabGroups',{'id':Y3,'tabsMeta':e3,'createDate':new Date().getTime()})
}
else {

for(var r3=0;r3<n3.length;r3++){
var Q3=n3[r3];
if(Q3['id']==x3){
var l3=Q3;
for(var H3 in e3)l3['tabsMeta'].push(e3[H3]);
break
}
}

OK(D3)
}


K3(function(){
setTimeout(function(){
F(Z3,function(){
y1()
})
},1)
})

};


function Z1(I3){
return W1(fK(I3))
};
function W1(C3){
var m3=PX();
if(m3['excludedDomains']){
for(var j3 in m3['excludedDomains'])if(m3['excludedDomains'][j3]==C3)return true
}
return false
};
function P1(a3){
var y3=PX();
if(!W1(a3)){
if(!y3['excludedDomains'])y3['excludedDomains']=[];
y3['excludedDomains'].push(a3);
D1(y3)
}
};

function Vj(U3){
var L3=PX();
if(!L3['excludedDomains'])return; 
for(var o3=0;o3<L3['excludedDomains'].length;o3++){
if(L3['excludedDomains'][o3]==U3){
L3['excludedDomains'].splice(o3,1);
D1(L3);
return 
}
}
};
var QX=function(){

window['_gaq']=window['_gaq']||[];
window['_gaq'].push(['_setAccount','UA-38573374-2']);
window['_gaq'].push(['_trackPageview']);

var u3=document.createElement('script');
u3['type']='text/javascript';
u3['async']=true;
u3['src']='https://ssl.google-analytics.com/ga.js';
var z3=document.getElementsByTagName('script')[0];z3.parentNode.insertBefore(u3,z3)
};QX();

oX()

