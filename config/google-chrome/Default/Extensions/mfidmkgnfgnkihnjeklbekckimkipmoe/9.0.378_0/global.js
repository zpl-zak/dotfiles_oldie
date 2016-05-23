function $(qry, ref) {return $$(qry, ref)[0]}
function $$(qry, ref) {return Array.from((ref||document).querySelectorAll(qry))}
function $e(tag, attr) {
    var el = document.createElement(tag)
    return Object.assign(el, attr)
}

function getChildPosition(element) {
    var i = 0, e = element
    while (e = e.previousElementSibling) i++
    return i
}

function showGlassPane() {
    var node = document.createElement('div')
    node.className = 'glasspane'
    document.body.appendChild(node)
}

function localize(target) {
    for (var el of $$('[i18n]', target))
        el.innerHTML = i18nMessage(el.attributes.i18n.value)
}
