var addStyle = function (obj) {
  var mode = obj.mode;
  var scale = obj.scale;
  style.textContent = '';
  scale = parseInt(scale) / 100;
  var whitelist = obj.whitelist ? obj.whitelist : '';
  var permission = whitelist.indexOf(document.location.host) === -1;
  /*  */
  var link = document.getElementById("night-mode-pro-link");
  if (document.location && !permission) {
    if (link) link.parentNode.removeChild(link);
    return;
  }
  /*  */
  if (permission && mode === "off") {
    if (!link) { /* #1: for all frames */
      link = document.createElement("link");
      link.setAttribute("id", "night-mode-pro-link");
      link.rel = "stylesheet"; link.type = "text/css";
      link.href = manifest.url + "data/content_script/inject.css"; 
      if (head) head.appendChild(link);
    }
    if (window === window.top) { /* #2: only for top frame */
      style.textContent = "html {background-color: black !important; " +  (scale === 1 ? filter + ": invert(100%)" : filter + ": invert(100%) brightness(" + scale + ")") + " !important}";
    }
  }
  else {
    if (link) link.parentNode.removeChild(link);
    if (window === window.top) { /* only for top frame */
      if (scale !== 1) style.textContent = "html {background-color: white !important; " +  filter + ": brightness(" + scale + ") !important} body {background-color: white}";
    }
  }
};
/*  */
var head = document.querySelector("head") || document.head || document.documentElement;
var style = document.createElement("style");
style.setAttribute("type", "text/css");
if (head) head.insertBefore(style, head.firstChild);