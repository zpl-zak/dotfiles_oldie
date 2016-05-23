getPref('devtools_panel').then(enabled => {
    if (enabled) {
        chrome.devtools.panels.create(
            'Flashcontrol',
            'skin/48.png',
            'devtools-panel.html'
        )
    }
})
