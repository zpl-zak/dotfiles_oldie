var {getDecodedHostname, RegExpFilter, CombinedMatcher, parseFilters} = adblockplus
var activeTab = queryTabs({lastFocusedWindow: true, active: true}).then(tabs => tabs[0])

function waitForClick()
{
    return new Promise(resolve => {
        document.onclick = event => {
            var {target} = event
            for (var el of $$('.menu')) {
                if (el == target || el.contains(target))
                    resolve(el)
            }
        }
    })
}

function checkOption(id)
{
    for (let str of ['w-page', 'w-site', 'session'])
    {
        let {classList} = $(`#${str}`)
        classList.toggle('checked', !classList.toggle('disabled', str != id))
    }
}

toggleSession = async(function* (url, enable)
{
    var sessions = yield getValue({sessions: []})

    var {hostname} = new URL(url)

    var index = sessions.indexOf(hostname)
    var includes = index != -1

    if (enable ? !includes: includes)
    {
        if (includes)
            sessions.splice(index, 1)
        else
            sessions.push(hostname)

        yield storageSet({sessions})

        return true
    }
})

toggleFilter = async(function* (buttonId, url, enable)
{
    var text = yield getValue({filters: ''})

    var uri = new URL(url)
    var docOrigin = getDecodedHostname(uri)
    var mask = RegExpFilter.typeMap.DOCUMENT

    var matcher = new CombinedMatcher()
    var {filters} = parseFilters(text)
    filters.forEach(filter => matcher.add(filter))

    var match = matcher.matchesAny(url, mask, docOrigin)
    var lines = []

    while (match)
    {
        lines.push(match.text)
        matcher.remove(match)
        match = matcher.matchesAny(url, mask, docOrigin)
    }

    if (enable ? !lines.length: lines.length)
    {
        if (!lines.length)
        {
            let str = ''
            if (buttonId == 'w-page')
            {
                let {host, pathname} = uri
                host = host.replace(/^www\./, '')
                pathname = pathname.length > 1 ? pathname: ''
                str = `${host}${pathname}`
            }
            else
            {
                str = uri.hostname.replace(/^www\./, '')
            }
            str = `@@||${str}^$document`
            text = `${str}\n${text}`.trim()
        }
        else
        {
            text = removeLines(text, ['', ...lines])
        }

        yield storageSet({filters: text})

        return true
    }
})

handleClicks = async(function* ()
{
    while (true)
    {
        let {id, classList} = yield waitForClick()

        if (id == 'w-site' || id == 'w-page' || id == 'session')
        {
            showGlassPane()

            let {id: tabId, url: tabUrl} = yield activeTab
            let enable = classList.contains('checked')
            let wasToggled = false

            if (id == 'session')
                wasToggled = yield toggleSession(tabUrl, !enable)
            else
                wasToggled = yield toggleFilter(id, tabUrl, !enable)

            if (wasToggled)
            {
                yield executeScript(tabId, {
                    code: 'scanDocument()',
                    allFrames: true,
                    matchAboutBlank: true
                })
            }

            break
        }

        if (id == 'settings')
        {
            showGlassPane()
            yield openOptionsPage()

            break
        }
    }
})

setupMenu = async(function* ()
{
    var {url} = yield activeTab

    var uri = new URL(url)
    var hostname = getDecodedHostname(uri)

    $('#w-site').innerHTML = i18nMessage('allow_site', [hostname.replace(/^www\./, '')])

    assert('chrome.google.com' != hostname)
    assert(!url.startsWith('chrome'))

    var match = yield matchesDocument(uri.origin)
    if (match)
    {
        checkOption(match.type == 'whitelist' ? 'w-site': '')
        return
    }

    match = yield matchesDocument(url)
    if (match)
    {
        checkOption(match.type == 'whitelist' ? 'w-page': '')
        return
    }

    match = yield matchesSession(url)
    if (match)
        checkOption('session')
})

run(function* ()
{
    localize()
    yield setupMenu().catch(() => document.body.classList.add('error'))
    yield handleClicks()
    window.close()
})
