var devtoolsPorts = {}

function logRequest(message, response, sender)
{
    var port = devtoolsPorts[sender.tab.id]
    if (port) {
        let {request} = message
        port.postMessage({type: 'log', details: {request, response, sender}})
    }
}

chrome.runtime.onConnect.addListener(function(port)
{
    var match = port.name.match('^devtools-(\\d+)$')
    if (!match) return

    var id = parseInt(match[1], 10)
    devtoolsPorts[id] = port

    var onUpdated = function(tabId, info, tab) {
        if (tabId == id)
            port.postMessage({type: 'update', details: tab})
    }

    chrome.tabs.onUpdated.addListener(onUpdated)

    port.onMessage.addListener(message =>
    {
        var {text, enable} = message

        storageGet({filters: ''}).then(({filters}) => {
            filters = removeLines(filters, ['', text])
            if (enable) filters = `${filters}\n${text}`.trim()
            storageSet({filters})
        })
    })

    port.onDisconnect.addListener(() =>
    {
        chrome.tabs.onUpdated.removeListener(onUpdated)
        delete devtoolsPorts[id]
    })
})

updateBadge = async(function* (tabId, increment = false)
{
    var count = yield getPref('badge_counter')
    if (!count) return

    var text = null
    if (increment)
    {
        text = yield getBadgeText({tabId}).catch(err => null)
        if (text != null) text = Number(text) + 1
    }
    else
    {
        let allFrames = true
        let matchAboutBlank = true
        let code = 'collectElements(currentDocument).length'
        let result = yield executeScript(tabId, {allFrames, matchAboutBlank, code})
        text = result.reduce((a, b) => a + b, 0) || ''
    }

    if (text != null)
    {
        setBadgeBackgroundColor({tabId, color: '#555'})
        setBadgeText({tabId, text: String(text)})
    }
})

handleRequest = async(function* (message, sender)
{
    var {request: {url, newPlayer}} = message
    var {url: frameUrl, tab: {url: tabUrl}} = sender

    var match = yield matchesAny(url, tabUrl, frameUrl)
    var {type, text} = match || {}

    logRequest(message, {type, text}, sender)

    if (newPlayer)
        updateBadge(sender.tab.id, true)

    if (!type)
    {
        let session = yield matchesSession(tabUrl)
        if (session) type = 'whitelist'
    }

    if (!type)
    {
        let behavior = yield getPref('default_behavior')
        if (behavior) type = behavior
    }

    return type
})

chrome.runtime.onStartup.addListener(function()
{
    storageRemove('sessions')
})

chrome.runtime.onMessage.addListener(function(message, sender, callback)
{
    handleRequest(message, sender).then(callback, callback)
    return true
})

chrome.storage.onChanged.addListener(function(changes, area)
{
    if (changes.filters) window.filters = null
    if (changes.prefs) window.prefs = null
    if (changes.sessions) window.sessions = null
})

chrome.tabs.onReplaced.addListener(updateBadge)
