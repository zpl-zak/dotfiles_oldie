var WindowTracker=g_deprecated_window_utils.WindowTracker,self=g_self;g_chrome.Cu["import"]("resource://gre/modules/XPCOMUtils.jsm",this);var handlers=[];AwesomeBarSuggestion=function(a){var b=handlers.push(a)-1,c=!1;return{destroy:function(){c||(c=!0,handlers[b]=null)}}};function handlerMatch(a,b){return!(!b||!b.matches.test(a))}function getMatchingHandler(a){return handlers.filter(function(b){return handlerMatch(a,b)}).shift()}
function addAddressBarSearch(a){function b(){if(!g()){var k="",a=getMatchingHandler(e.value);a&&a.icon&&(k=a.icon);j(k)}}function c(a){e.setAttribute("autocompletesearch",a);e.mSearchNames=null;"function"==typeof e.initSearchNames&&e.initSearchNames()}var d=makeWindowHelpers(a).change,f=a.BrowserUI,l=a.gBrowser,h=a.gURLBar,j,g,e;null==l?"undefined"!=typeof f&&(j=function(a){return f._updateIcon(a)},g=function(){return!1},e=f._edit,listen(a,f._edit,"input",b),d(a.Browser,"getShortcutOrURI",function(a){return function(b,
c){return a.call(this,b,c)}})):(j=function(){},g=function(){return"valid"==h.getAttribute("pageproxystate")&&!h.hasAttribute("focused")},e=h,listen(a,h,"input",b),listen(a,l.tabContainer,"TabSelect",b),d(h,"_canonizeURL",function(a){return function(b,c){return a.call(this,b,c)}}));if("undefined"!=typeof e){var m=e.getAttribute("autocompletesearch");c(self.id+" "+m);unload(function(){return c(m)})}}
function addAutocomplete(){var a="@mozilla.org/autocomplete/search;1?name="+self.id,b=g_chrome.components.ID("504A8466-8D3D-11E0-A57E-D2F94824019B"),c,d={createInstance:function(a,b){return d.QueryInterface(b)},QueryInterface:XPCOMUtils.generateQI([g_chrome.Ci.nsIAutoCompleteSearch]),startSearch:function(a,b,f,g){function e(b){g.onSearchResult(d,{getCommentAt:function(a){return b[a].title},getImageAt:function(a){return b[a].favicon},getLabelAt:function(a){return b[a].label||b[a].url},getValueAt:function(a){return b[a].url},
getStyleAt:function(){return"favicon"},get matchCount(){return b.length},QueryInterface:XPCOMUtils.generateQI([g_chrome.Ci.nsIAutoCompleteResult]),removeValueAt:function(){},searchResult:g_chrome.Ci.nsIAutoCompleteResult.RESULT_SUCCESS,get searchString(){return a}})}null!=c&&clearTimeout(c);c=null;if(a.length){if((b=getMatchingHandler(a))&&a)b.onSearch(a,e)}else c=setTimeout(function(){g.onSearchResult(d,{searchResult:g_chrome.Ci.nsIAutoCompleteResult.RESULT_NOMATCH})},1E3)},stopSearch:function(){null!=
c&&clearTimeout(c);c=null}},f=g_chrome.Ci.nsIComponentRegistrar;g_chrome.Cm.QueryInterface(f).registerFactory(b,"LastPass Autocomplete",a,d);unload(function(){g_chrome.Cm.QueryInterface(f).unregisterFactory(b,d)})}WindowTracker({onTrack:addAddressBarSearch});addAutocomplete();function makeWindowHelpers(a){return{change:function(b,c,d){if(b){var f=b[c];b[c]="function"==typeof d?d(f):d;unload(function(){return b[c]=f},a)}}}};
