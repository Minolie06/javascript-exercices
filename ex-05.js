"use strict"
const parentList = document.querySelectorAll('[data-toggle=dropdown]')

function hideMenus(parentShow = null) {
    for(parent of parentList) {
        const menu = parent.nextElementSibling
        menu.style.display = parent == parentShow ? '' : 'none'
    }
}

hideMenus()
for(parent of parentList) {
    parent.addEventListener('click', (e) => {
        hideMenus(e.target)
    })
}