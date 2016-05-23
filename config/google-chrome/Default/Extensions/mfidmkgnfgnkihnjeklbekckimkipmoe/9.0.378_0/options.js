var optionsMap = new Map()
var exceptionsPanel = $(`#exceptions`)

function handleChange(event)
{
    var {target} = event
    var {type, key} = optionsMap.get(target)
    var newVal = null

    if (type == 'checkbox') newVal = target.checked
    else if (type == 'radio') newVal = target.value
    else if (type == 'select') newVal = target.options[target.selectedIndex].value
    else if (type == 'color') newVal = target.value

    if (newVal != null)
        setPrefs({[key]: newVal})
}

function createOption(setting)
{
    var el = $e('div')
    el.onchange = handleChange

    var input
    var {type, key, description} = setting
    if (type == 'checkbox')
    {
        input = $e('input', {type: 'checkbox', id: key})

        let label = $e('label')
        let span = $e('span', {innerText: description})
        label.appendChild(input)
        label.appendChild(span)
        el.appendChild(label)
        el.classList.add('checkbox')
    }
    else if (type == 'radio')
    {
        let {value} = setting
        input = $e('input', {type: 'radio', name: key, value})

        let label = $e('label')
        let span = $e('span', {innerText: description})
        label.appendChild(input)
        label.appendChild(span)
        el.appendChild(label)
        el.classList.add('checkbox')
    }
    else if (type == 'select')
    {
        input = $e('select', {id: key})

        let {options} = setting
        options.forEach((opt, index) =>
        {
            var option = $e('option', {innerText: opt.label, value: opt.value})
            input.appendChild(option)
        })

        let span = $e('span', {innerText: `${description}:`})
        el.appendChild(span)
        el.appendChild(input)
        el.classList.add('settings-row')
    }
    else if (type == 'color')
    {
        input = $e('input', {id: setting.key, type: 'color'})

        let span = $e('span', {innerText: `${setting.description}:`})
        el.appendChild(span)
        el.appendChild(input)
        el.classList.add('settings-row')
    }

    optionsMap.set(input, setting)

    return el
}

function showDialog(id)
{
    var dialog = $(`dialog#${id}`)
    localize(dialog)

    var button = $('button', dialog)
    button.onclick = () => dialog.close()
    button.focus()

    for (let current of $$('dialog[open]'))
        current.close()
    dialog.showModal()
}

function saveTextarea(str = '')
{
    var textarea = $('textarea', exceptionsPanel)
    var value = textarea.value

    var filters = removeLines(value, ['', str])
    filters = `${filters}\n${str}`.trim()

    if (filters.length < value.length)
        textarea.value = filters

    return storageSet({filters})
}

function generatePattern()
{
    var input = $('.input-box input', exceptionsPanel).value
    input = input.trim().replace(/^(.+:\/+)?/, 'http://')

    var {auth} = splitUrl(input)
    var pattern = auth.trim()
    if (pattern) pattern = `@@||${pattern}^$document`

    return pattern
}

function initNavigationPanel()
{
    $('nav ol').onclick = event =>
    {
        var {target, currentTarget} = event
        if (target === currentTarget) return

        for (let el of $$('nav li.selected, .panels > .selected'))
            el.classList.remove('selected')

        var index = getChildPosition(target)
        currentTarget.children[index].classList.add('selected')
        $('.panels').children[index].classList.add('selected')
    }
}

function initOptionsPanel()
{
    let options =
    [
        $e('h3', {innerText: i18nMessage('browsing')}),
        createOption({
            type: 'radio',
            description: i18nMessage('run_content'),
            key: 'default_behavior',
            value: 'whitelist'
        }),
        createOption({
            type: 'radio',
            description: i18nMessage('choose_content'),
            key: 'default_behavior',
            value: 'replace'
        }),

        $e('h3', {innerText: i18nMessage('appearance')}),
        createOption({
            type: 'checkbox',
            description: i18nMessage('flash_count'),
            key: 'badge_counter'
        }),
        createOption({
            type: 'checkbox',
            description: i18nMessage('reblock_buttons'),
            key: 'player_reblock'
        }),

        // WARN chrome 49 bug renders select drop-down offscreen
        createOption({
            type: 'select',
            description: i18nMessage('icon_label'),
            key: 'placeholder_icon',
            options: [
                {label: i18nMessage('plugin_logo'), value: 'pluginlogo.svg'},
                {label: i18nMessage('flash_logo'), value: 'flashlogo.svg'},
                {label: i18nMessage('no_logo'), value: ''}
            ]
        }),
        createOption({
            type: 'color',
            description: i18nMessage('color_label'),
            key: 'placeholder_color'
        }),

        $e('h3', {innerText: i18nMessage('tools')}),
        createOption({
            type: 'checkbox',
            description: i18nMessage('devtools_panel'),
            key: 'devtools_panel'
        })
    ]

    let fragment = document.createDocumentFragment()
    for (let opt of options)
        fragment.appendChild(opt)

    let panel = $('.panels .panel:nth-child(1)')
    panel.insertBefore(fragment, $('.toolbar', panel))

    $('#reset').onclick = clearPrefs
}

function initExceptionsPanel()
{
    var inputbox = $('.input-box', exceptionsPanel)

    inputbox.onclick =
    inputbox.onkeyup = event =>
    {
        var {type, target, code} = event
        if (target == inputbox) return

        if ((type == 'keyup' && code == 'Enter') ||
            (type == 'click' && target instanceof HTMLButtonElement)) {

            let pattern = generatePattern()
            if (pattern) saveTextarea(pattern).then(() => input.value = '')
        }
    }

    var input = $('input', inputbox)
    input.spellcheck = false

    var readonly = localStorage.read_only_filters == 'true'
    var textarea = $('textarea', exceptionsPanel)
    textarea.spellcheck = false
    textarea.disabled = readonly
    textarea.addEventListener('input', () => button.disabled = false)

    var checkbox = $('#read_only', exceptionsPanel)
    checkbox.checked = readonly
    checkbox.onchange = () =>
    {
        var readonly = checkbox.checked
        localStorage.read_only_filters = readonly
        textarea.disabled = readonly
    }

    var button = $('.toolbar button', exceptionsPanel)
    button.disabled = true
    button.onclick = event => saveTextarea().then(() => button.disabled = true)

    var link = $('a', exceptionsPanel)
    link.onclick = () => showDialog('syntax-dialog')
}

function initAboutPanel()
{
    var manifest = chrome.runtime.getManifest()
    $('.extension-version').innerText = `Flashcontrol ${manifest.version}`
    $('.flash-version').innerText = navigator.plugins['Shockwave Flash'].description
}

updateSettings = async(function* ()
{
    var prefs = yield loadPrefs()
    optionsMap.forEach((setting, el) =>
    {
        var {key, type} = setting
        if (key in prefs)
        {
            let val = prefs[key]
            if (type == 'checkbox')
            {
                $(`#${key}`).checked = val
            }
            else if (type == 'radio')
            {
                let el = $$(`[name=${key}]`)
                el = el.find(e => e.value == val)
                el.checked = true
            }
            else if (type == 'color')
            {
                $(`#${key}`).value = val
            }
            else if (type == 'select')
            {
                let el = $(`#${key}`)
                el.selectedIndex = Array.from(el.options)
                    .findIndex(o => o.value == val)
            }
        }
    })
})

updateFilters = async(function* ()
{
    var text = yield getValue({filters: ''})
    $('textarea', exceptionsPanel).value = text
})

document.addEventListener('keydown', function(event)
{
    var {ctrlKey, which} = event
    if (ctrlKey && which == 83) {
        event.preventDefault()
        $('.toolbar button', exceptionsPanel).click()
    }
})

run(function* ()
{
    localize()
    initNavigationPanel()
    initOptionsPanel()
    initExceptionsPanel()
    initAboutPanel()

    if (localStorage.first_run == null) {
        localStorage.first_run = 1
        setTimeout(() => showDialog('firstrun-dialog'), 1000)
    }

    yield updateSettings()
    yield updateFilters()

    $('nav li:nth-child(1)').click()
})

chrome.storage.onChanged.addListener(function(changes, area)
{
    if (changes.filters) updateFilters()
    if (changes.prefs) updateSettings()
})
