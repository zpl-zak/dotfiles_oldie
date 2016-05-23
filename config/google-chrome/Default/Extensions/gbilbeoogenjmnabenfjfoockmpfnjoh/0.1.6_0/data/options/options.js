var connect = function (elem, pref) {
  var att = "value";
  if (elem) {
    if (elem.type == "checkbox") att = "checked";
    if (elem.localName == "span") att = "textContent";
    if (elem.localName == "select") att = "selectedIndex";
    var pref = elem.getAttribute("data-pref");
    background.send("get", pref);
    elem.addEventListener("change", function () {
      background.send("changed", {pref: pref, value: this[att]});
    });
  }
  return {
    get value () {return elem[att]},
    set value (val) {
      if (elem.type === "file") return;
      elem[att] = val;
    }
  }
};
/*  */
background.receive("set", function (o) {
  if (window[o.pref]) {window[o.pref].value = o.value}
});
/*  */
function init() {
  var prefs = document.querySelectorAll("*[data-pref]");
  [].forEach.call(prefs, function (elem) {
    var pref = elem.getAttribute("data-pref");
    window[pref] = connect(elem, pref);
  });
  /*  */
  var whiteList = [];
  /*  */
  function storePopupData() {
    fillTable(whiteList);
    background.send("store-options-data", {
      whiteList: whiteList,
    });
  }
  /*  */
  document.getElementById('white-list-table').addEventListener("click", function (e) {
    var target = e.target || e.originalTarget;
    if (target.tagName.toLowerCase() == 'td' || target.nodeName.toLowerCase() == 'td') {
      if (target.getAttribute('type') == 'close') {
        var url = target.parentNode.childNodes[1].textContent;
        whiteList = whiteList.filter(function (e) {return e && e !== url});
        storePopupData();
      }
    }
  });
  /*  */
  function addInputFieldItem(e) {
    var value = document.getElementById('input-field').value;
    var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    if (value && regexp.test(value)) {
      /* create host from url */
      var a = document.createElement('a');
      a.href = value;
      value = a.host;
      whiteList = whiteList.filter(function (e) {return e != value;});
      whiteList.push(value);
      storePopupData();
      /* empty input field after insertion */
      document.getElementById('input-field').value = '';
    }
  }
  document.getElementById('input-field-add').addEventListener("click", addInputFieldItem);
  document.getElementById('input-field').addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key == 13) addInputFieldItem(e);
  });
  /*  */
  function fillTable(arr) {
    /* update white-list */
    whiteList = arr;
    /*  */
    var count = 1;
    var table = document.getElementById('white-list-table');
    while (table.hasChildNodes()) table.removeChild(table.lastChild);
    for (var i = arr.length - 1; i >= 0; i--) {
      var a = document.createElement('a');
      var tr = document.createElement('tr');
      var td1 = document.createElement('td');
      var td2 = document.createElement('td');
      var td3 = document.createElement('td');
      /* set attributes */
      td1.textContent = count;
      td1.setAttribute('type', 'number');
      td2.appendChild(a);
      a.href = arr[i];
      a.textContent = arr[i];
      a.setAttribute("target", "_blank");
      a.setAttribute("style", "text-decoration: none; color: #404040;");
      td2.setAttribute('type', 'item');
      td3.setAttribute('type', 'close');
      td1.setAttribute("style", "color: #404040;");
      td2.setAttribute("style", "color: #404040;");
      td3.setAttribute("style", "color: #404040;");
      /* append children */
      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      table.appendChild(tr);
      count++;
    }
  }
  background.receive("white-list", fillTable);
  background.send("white-list");
  /*  */
  window.removeEventListener("load", init, false);
}
/*  */
window.addEventListener("load", init, false);