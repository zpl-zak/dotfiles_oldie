"use strict";this.default_windowbootstrap=this.default_windowbootstrap||{};(function(_){var window=this;
try{
var da,ea,ba,ga,ha,ia,ja,ka,la,ma,na,oa,pa;_.aa="undefined"!=typeof window&&window===this?this:"undefined"!=typeof window.global?window.global:this;da=function(){_.aa.Symbol||(_.aa.Symbol=ba);da=function(){}};ea=0;ba=function(a){return"jscomp_symbol_"+a+ea++};_.fa=function(){da();_.aa.Symbol.iterator||(_.aa.Symbol.iterator=_.aa.Symbol("iterator"));_.fa=function(){}};ga=function(){return{done:!0,value:void 0}};
ha=function(a,b){a instanceof String&&(a=String(a));var c=0;da();_.fa();var d={};da();_.fa();var e=(d.next=function(){if(c<a.length){var d=c++;return{value:b(d,a[d]),done:!1}}e.next=ga;return ga()},d[window.Symbol.iterator]=function(){return e},d);return e};ia=function(a,b){!Array.prototype[a]&&Object.defineProperties&&Object.defineProperty&&Object.defineProperty(Array.prototype,a,{configurable:!0,enumerable:!1,writable:!0,value:b})};
ja=function(a,b){if(null==a)throw new TypeError("The 'this' value for String.prototype."+b+" must not be null or undefined");};ka=function(a,b){if(a instanceof RegExp)throw new TypeError("First argument to String.prototype."+b+" must not be a regular expression");};la=function(a){ja(this,"repeat");var b=String(this);if(0>a||1342177279<a)throw new window.RangeError("Invalid count value");a|=0;for(var c="";a;)if(a&1&&(c+=b),a>>>=1)b+=b;return c};
ma=function(a){ja(this,"codePointAt");var b=String(this),c=b.length;a=Number(a)||0;if(0<=a&&a<c){a|=0;var d=b.charCodeAt(a);if(55296>d||56319<d||a+1===c)return d;a=b.charCodeAt(a+1);return 56320>a||57343<a?d:1024*(d-55296)+a+9216}};na=function(a,b){b=void 0===b?0:b;ka(a,"includes");ja(this,"includes");return-1!==String(this).indexOf(a,b)};
oa=function(a,b){b=void 0===b?0:b;ka(a,"startsWith");ja(this,"startsWith");var c=String(this);a+="";for(var d=c.length,e=a.length,f=Math.max(0,Math.min(b|0,c.length)),h=0;h<e&&f<d;)if(c[f++]!=a[h++])return!1;return h>=e};pa=function(a,b){ka(a,"endsWith");ja(this,"endsWith");var c=String(this);a+="";void 0===b&&(b=c.length);for(var d=Math.max(0,Math.min(b|0,c.length)),e=a.length;0<e&&0<d;)if(c[--d]!=a[--e])return!1;return 0>=e};String.prototype.endsWith||(String.prototype.endsWith=pa);
String.prototype.startsWith||(String.prototype.startsWith=oa);String.prototype.includes||(String.prototype.includes=na);String.prototype.codePointAt||(String.prototype.codePointAt=ma);String.prototype.repeat||(String.prototype.repeat=la);ia("values",function(){return ha(this,function(a,b){return b})});ia("keys",function(){return ha(this,function(a){return a})});ia("entries",function(){return ha(this,function(a,b){return[a,b]})});_.qa=_.qa||{};_.l=this;_.ra="closure_uid_"+(1E9*Math.random()>>>0); _.m=Date.now||function(){return+new Date};

}catch(e){_._DumpException(e)}
try{
_.Xg="https://support.google.com/chrome/answer/185277?hl="+window.chrome.i18n.getMessage("@@ui_locale");window.chrome.i18n.getMessage("@@ui_locale");_.Yg="https://support.google.com/hangouts/?p=chrome_desktop_app_outdated&hl="+window.chrome.i18n.getMessage("@@ui_locale");

}catch(e){_._DumpException(e)}
try{
window.location.search&&window.addEventListener("load",function(){window.chrome.runtime.getBackgroundPage(function(a){a.__onExtWindowLoad(window)})});
}catch(e){_._DumpException(e)}
}).call(this,this.default_windowbootstrap);
// Google Inc.
