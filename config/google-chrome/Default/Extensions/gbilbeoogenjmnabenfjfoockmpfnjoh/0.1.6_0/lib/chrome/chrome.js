var app = {};

app.timer = window;
app.manifest = chrome.extension.getURL('');

app.icon = function (type) {
  chrome.browserAction.setIcon({
    path: "../../data/icons/32-" + type + ".png"
  });
};

app.version = function () {
  return chrome[chrome.runtime && chrome.runtime.getManifest ? "runtime" : "extension"].getManifest().version;
};

app.loadReason = '';
chrome.runtime.onInstalled.addListener(function(details) {
  if (details.reason === "install") {
    app.loadReason = "install";
  }
});

chrome.runtime.onStartup.addListener(function() {
  app.loadReason = "startup";
});

app.storage = (function () {
  var objs = {};
  chrome.storage.local.get(null, function (o) {
    objs = o;
    document.getElementById("common").src = "../common.js";
  });
  return {
    read : function (id) {
      return objs[id];
    },
    write : function (id, data) {
      data = data + '';
      objs[id] = data;
      var tmp = {};
      tmp[id] = data;
      chrome.storage.local.set(tmp, function () {});
    }
  }
})();

app.popup = {
  send: function (id, data) {
    chrome.runtime.sendMessage({path: 'background-to-popup', method: id, data: data});
  },
  receive: function (id, callback) {
    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
      if (request.path == 'popup-to-background') {
        if (request.method == id) {
          callback(request.data);
        }
      }
    });
  }
};

app.options = {
  send: function (id, data) {
    chrome.tabs.query({}, function (tabs) {
      tabs.forEach(function (tab) {
        if (tab.url.indexOf("data/options/options.html") !== -1) {
          chrome.tabs.sendMessage(tab.id, {path: 'background-to-options', method: id, data: data}, function () {});
        }
      });
    });
  },
  receive: function (id, callback) {
    chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
      if (request.path == 'options-to-background') {
        if (request.method === id) {
          callback(request.data);
        }
      }
    });
  }
};
  
app.content_script = {
  send: function (id, data, global) {
    if (global) {
      chrome.tabs.query({}, function (tabs) {
        tabs.forEach(function (tab) {
          chrome.tabs.sendMessage(tab.id, {path: 'background-to-page', method: id, data: data}, function () {});
        });
      });
    }
    else {
      chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        tabs.forEach(function (tab) {
          chrome.tabs.sendMessage(tab.id, {path: 'background-to-page', method: id, data: data}, function () {});
        });
      });
    }
  },
  receive: function (id, callback) {
    chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
      if (request.path == 'page-to-background') {
        if (request.method === id) {
          callback(request.data);
        }
      }
    });
  }
};

app.tab = {
  open: function (url) {
    chrome.tabs.create({url: url, active: true});
  },
  openOptions: function () {
    chrome.tabs.create({url: app.manifest + "data/options/options.html", active: true});
  },
  onCreated: function (callback) {
    chrome.tabs.onCreated.addListener(function (tab) {
      callback(tab);
    });
  },
  onUpdated: function (callback) {
    chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
      callback(tabId, changeInfo, tab);
    });
  },
  getActive: function (callback) {
    chrome.tabs.query({active: true}, function(tabs) {
      if (tabs && tabs.length) {
        var tab = tabs[0];
        var host = new URL(tab.url).host;
        callback(tab, host);
      }
    });
  }
};

app.button = (function () {
  var callback;
  chrome.browserAction.onClicked.addListener(function(tab) {
    if (callback) callback();
  });
  return {
    onCommand: function (c) {
      callback = c;
    },
  }
})();

chrome.runtime.setUninstallURL(config.welcome.page + "?v=" + app.version() + "&type=uninstall", function () {});