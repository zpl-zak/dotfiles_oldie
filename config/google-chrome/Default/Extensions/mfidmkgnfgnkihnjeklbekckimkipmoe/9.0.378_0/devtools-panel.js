var inspectedDomain = ''
var inspectedTabId = chrome.devtools.inspectedWindow.tabId
var messagePort = chrome.runtime.connect({name: `devtools-${inspectedTabId}`})
var requestsElement = $('#requests')

var RecordElement = Object.create(HTMLElement.prototype, {
    createdCallback: {
        value: function() {
            var address = this.appendChild($e('div', {className: 'address'}))
            address.appendChild($e('div', {className: 'url'}))
            address.appendChild($e('div', {className: 'host'}))
            this.appendChild($e('div', {className: 'filter'}))
            this.appendChild($e('div', {className: 'action'}))
            this.actions = new WeakMap()
        }
    }
})

RecordElement.update = function(details)
{
    var {request: {url}} = details
    var {sender: {frameId, url: frameUrl}} = details
    var {response: {type, text}} = details

    var urlEl = $('.url', this)
    urlEl.innerText = urlEl.title = url

    var hostEl = $('.host', this)
    hostEl.innerText = hostEl.title =
        new URL(frameUrl).hostname.replace(/^www\./, '')

    this._updateFilter({type, text})

    this.addEventListener('click', this)
}

RecordElement._updateFilter = function(filter)
{
    var {type, text, enable} = filter
    var textEl = $('.filter', this)
    textEl.innerText = textEl.title = type ? text: ''

    var actionEl = $('.action', this)
    actionEl.innerHTML = ''

    this.setAttribute('type', type || '')

    if (type)
    {
        let button = actionEl.appendChild($e('button', {innerText: 'Remove filter'}))
        this.actions.set(button, {text, enable: false})
    }
    else
    {
        let str = $('.url', this).innerText.replace(/^[\w\-]+:\/+(www\.)?/,
            (match, p1, p2) => p2 == 'about:blank' ? '': '||')
        let button = actionEl.appendChild($e('button', {innerText: 'Allow'}))
        this.actions.set(button, {type: 'whitelist', text: `@@${str}`, enable: true})
        button = actionEl.appendChild($e('button', {innerText: 'Block'}))
        this.actions.set(button, {type: 'blocking', text: `${str}`, enable: true})
    }
}

RecordElement.handleEvent = function(event)
{
    var el = event.target
    if (el === this) return

    var action = this.actions.get(el)
    if (action)
    {
        messagePort.postMessage(action)
        this._updateFilter(action)
    }
}

document.registerElement('panel-record', {prototype: RecordElement})

messagePort.onMessage.addListener(function(message)
{
    var {type, details} = message
    if (type == 'update')
    {
        if (details.status == 'loading')
        {
            let {hostname} = new URL(details.url)
            if (inspectedDomain != hostname)
            {
                inspectedDomain = hostname
                requestsElement.innerHTML = ''
            }
        }
    }
    else if (type == 'log')
    {
        if (details.request.newPlayer)
        {
            let el = $e('panel-record')
            el.update(details)
            requestsElement.appendChild(el)
        }
    }
})

{
    $('.dividers').appendChild($e('panel-record'))

    let record = $('.labels').appendChild($e('panel-record'))
    $('.url', record).innerText = 'Address'
    $('.filter', record).innerText = 'Filter'
}
