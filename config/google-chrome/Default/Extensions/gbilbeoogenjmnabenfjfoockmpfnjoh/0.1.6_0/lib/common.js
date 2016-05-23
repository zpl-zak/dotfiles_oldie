var version = config.welcome.version;
if (app.version() !== version) {
  app.timer.setTimeout(function () {
    if (app.loadReason === "install" || app.loadReason === "startup") {
      app.tab.open(config.welcome.page + "?v=" + app.version() + (version ? "&p=" + version + "&type=upgrade" : "&type=install"));
      config.welcome.version = app.version();
    }
  }, config.welcome.timeout);
};

var popupSend = function () {
  app.popup.send("storageData", {
    mode: config.dimmer.mode,
    scale: config.dimmer.scale
  });
};

var pageSend = function () {
  app.content_script.send("storageData", {
    mode: config.dimmer.mode,
    scale: config.dimmer.scale,
    whitelist: config.whitelist.array.join('|')
  }, true);
  /* toolbar icon */
  app.icon(config.dimmer.mode);
};

var optionsSend = function () {
  app.options.send("white-list", config.whitelist.array);
};

app.popup.receive("load", popupSend);

app.popup.receive("storePopupData", function (data) {
  config.dimmer.scale = data.scale;
  config.dimmer.mode = data.mode;
  pageSend();
});

app.popup.receive("whitelist", function () {
  app.tab.getActive(function (tab, host) {
    var tmp = config.whitelist.array;
    if (tmp.indexOf(host) === -1) {
      tmp.push(host);
      config.whitelist.array = tmp;
      optionsSend();
      pageSend();
    }
  });
});

app.popup.receive("options", app.tab.openOptions);
app.popup.receive("support", function () {app.tab.open(config.welcome.page)});

app.tab.onCreated(pageSend);
app.tab.onUpdated(pageSend);

app.content_script.receive("storageData", pageSend);

app.options.receive("changed", function (o) {
  config.set(o.pref, o.value);
  app.options.send("set", {pref: o.pref, value: config.get(o.pref)});
});

app.options.receive("white-list", optionsSend);

app.options.receive("get", function (pref) {
  app.options.send("set", {pref: pref, value: config.get(pref)});
});

app.options.receive("store-options-data", function (data) {
  config.whitelist.array = data.whiteList;
  pageSend();
});