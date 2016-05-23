window.forge = {}; window.forge.config = {
    "author": "Jared Sohn", 
    "config_hash": "CONFIG_HASH_HERE", 
    "config_version": "4", 
    "core": {
        "firefox": {
            "package_name": "441d2f3ba8984ae0ac6301e2ba503b8e"
        }, 
        "general": {
            "reload": true
        }, 
        "ie": {
            "package_name": "{C49BE605-DBB2-3ED6-25CE-1BAF3B6C2DF7}"
        }, 
        "safari": {
            "package_name": "forge.safari.mutetab441d2f3ba8984ae0ac6301e2ba503b8e"
        }
    }, 
    "description": "Helps narrow down which tab that sound is coming from, and often lets you stop or pause it", 
    "json_safe_name": "MuteTab", 
    "logging": {
        "level": "CRITICAL"
    }, 
    "logging_level": "CRITICAL", 
    "name": "MuteTab", 
    "package_name": "mutetab441d2f3ba8984ae0ac6301e2ba503b8e", 
    "platform_version": "v1.4", 
    "plugins": {
        "activations": {
            "config": {
                "activations": [
                    {
                        "all_frames": true, 
                        "patterns": [
                            "http://*/*", 
                            "https://*/*"
                        ], 
                        "run_at": "start", 
                        "scripts": [
                            "src/js/vendor/jquery.js", 
                            "src/js/shared/core.js", 
                            "src/js/shared/operationssupported.js", 
                            "src/js/vendor/elementclassutil.js", 
                            "src/js/contentscript/operation.js", 
                            "src/js/contentscript/objectembed.js", 
                            "src/js/contentscript/messaging_contentscript.js", 
                            "src/js/contentscript/detectaudiosources.js", 
                            "src/js/contentscript/contentscript.js", 
                            "src/js/contentscript/init.js"
                        ], 
                        "styles": []
                    }
                ]
            }, 
            "hash": "notahash"
        }, 
        "background": {
            "config": {
                "files": [
                    "js/vendor/deepcopy.js", 
                    "js/shared/analytics.js", 
                    "js/vendor/ga.js", 
                    "js/shared/core.js", 
                    "js/vendor/async.min.js", 
                    "js/background/injectjs.js", 
                    "js/options.js", 
                    "js/background/messaging.js", 
                    "js/background/displayutil.js", 
                    "js/background/contextmenus.js", 
                    "js/shared/operationssupported.js", 
                    "js/background/stats.js", 
                    "js/background/background.js"
                ]
            }, 
            "hash": "notahash"
        }, 
        "button": {
            "config": {
                "default_icon": "src/img/favicon.png", 
                "default_popup": "src/popup.html", 
                "default_title": "MuteTab"
            }, 
            "hash": "notahash"
        }, 
        "contact": {
            "hash": "notahash"
        }, 
        "file": {
            "hash": "notahash"
        }, 
        "media": {
            "hash": "notahash"
        }, 
        "prefs": {
            "hash": "notahash"
        }, 
        "request": {
            "config": {
                "permissions": [
                    "http://*/*", 
                    "contextMenus", 
                    "chrome://favicon/", 
                    "https://*/*"
                ]
            }, 
            "hash": "notahash"
        }, 
        "tabs": {
            "hash": "notahash"
        }
    }, 
    "uuid": "441d2f3ba8984ae0ac6301e2ba503b8e", 
    "version": "2.13", 
    "xml_safe_name": "MuteTab"
};