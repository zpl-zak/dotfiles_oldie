var config = {};

config.welcome = {
  timeout: 3000,
  get version () {
    return app.storage.read("version");
  },
  set version (val) {
    app.storage.write("version", val);
  },
  page: "http://mybrowseraddon.com/night-mode.html"
};

config.whitelist = {
  get array () {
    if (!app.storage.read("whitelist") || app.storage.read("whitelist") === 'undefined' || typeof app.storage.read("whitelist") === 'undefined') {
      var whitelist = [];
      /*  */
      if (typeof require !== 'undefined') {
        whitelist = [
          "askubuntu.com",
          "news.yahoo.com",
          "keep.google.com",
          "www.facebook.com",
          "addons.opera.com",
          "chrome.google.com",
          "addons.mozilla.org",
          "linuxfoundation.org"
        ]
      }
      return whitelist;
    }
    else {
      var array = JSON.parse(app.storage.read('whitelist') || "[]");
      return array;
    }
  },
  set array (val) {
    app.storage.write('whitelist', JSON.stringify(val));
  }
};

config.dimmer = {
  get scale () {
    return parseInt(app.storage.read("dimmerScale") || "100");
  },
  set scale (val) {
    if (!val || isNaN(val)) val = 0;
    val = parseInt(val);
    if (val < 0) val = 0;
    if (val > 100) val = 100;
    app.storage.write("dimmerScale", val);
  },
  get mode () {
    return app.storage.read("dimmerMode") || "on";
  },
  set mode (val) {
    app.storage.write("dimmerMode", val);
  }
};