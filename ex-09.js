"use strict"
const cursor = document.querySelector('span')
const properties = {
    'width': '40px',
    'height': '40px',
    'border': '1px solid #1b1b1b',
    'border-radius': '50%',
    'position': 'absolute',
    'transition-property': 'top, left',
    'transition-duration': '125ms',
    'transition-timing-function': 'ease-out'
}

Object.assign(cursor.style, properties);

document.addEventListener('mousemove', e => {
    cursor.style.top = `${e.pageY - 40}px`
    cursor.style.left = `${e.pageX - 20}px`
})