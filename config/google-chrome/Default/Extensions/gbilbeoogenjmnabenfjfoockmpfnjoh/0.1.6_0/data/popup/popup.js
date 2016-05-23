var globalScale = 100, globalMode = "on";
/*  */
function fillInfo(flag, value) {
  var dimmerInfo = document.getElementById("info-td");
  dimmerInfo.textContent = value;
  document.getElementsByTagName('html')[0].style.filter = (flag === "on" ? "invert(0%)" : "invert(100%)");
  document.getElementsByTagName('html')[0].style.webkitFilter = (flag === "on" ? "invert(0%)" : "invert(100%)");
}
/*  */
function toggle(flag) {
  var lightsOn = document.getElementById("lights-on");
  var lightsOff = document.getElementById("lights-off");
  if (flag === "on") {
    lightsOn.setAttribute("active", "true");
    lightsOff.setAttribute("active", "false");
    fillInfo(flag, "Day Mode with " + globalScale + "% Brightness.");
  }
  else {
    lightsOn.setAttribute("active", "false");
    lightsOff.setAttribute("active", "true");
    fillInfo(flag, "Night Mode with " + globalScale + "% Brightness.");
  }
}
/*  */
function backgroundSend() {
  background.send("storePopupData", {scale: globalScale, mode: globalMode});
}
/*  */
function init() {
  var options = document.getElementById("options");
  var support = document.getElementById("support");
  var lightsOn = document.getElementById("lights-on");
  var whitelist = document.getElementById("whitelist");
  var lightsOff = document.getElementById("lights-off");
  var dimmerSlider = document.getElementById("dimmer-slider");
  /*  */
  function handleClick(e) {
    var target = e.target || e.originalTarget;
    globalMode = target.getAttribute("type");
    toggle(globalMode);
    backgroundSend();
  }
  /*  */
  function handleChange(e) {
    var target = e.target || e.originalTarget;
    globalScale = target.value;
    toggle(globalMode);
    backgroundSend();
  }
  /*  */
  lightsOn.addEventListener("click", handleClick);
  lightsOff.addEventListener("click", handleClick);
  dimmerSlider.addEventListener("input", handleChange);
  options.addEventListener("click", function () {background.send("options")});
  support.addEventListener("click", function () {background.send("support")});
  whitelist.addEventListener("click", function () {background.send("whitelist")});
  /*  */
  background.receive("storageData", function(data) {
    globalMode = data.mode;
    globalScale = data.scale;
    toggle(globalMode);
    dimmerSlider.value = globalScale;
  });
  /*  */
  window.removeEventListener("load", init, false);
}
/*  */
window.addEventListener("load", init, false);