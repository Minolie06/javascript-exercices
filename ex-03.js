"use strict"
const span = document.querySelector('span')
const div = document.querySelector('div')
span.addEventListener('mouseenter', () => {
    div.style.backgroundColor = 'lightgrey'
})