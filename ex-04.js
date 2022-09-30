"use strict"
const parent = document.querySelector('nav>ul>li>a')
const menu = document.querySelector('nav>ul>li>ul')
parent.addEventListener('click', () => {
    menu.style.display = menu.style.display == '' ? 'none' : ''
})