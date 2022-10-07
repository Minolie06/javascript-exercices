"use strict"
const style = document.createElement('style')
document.querySelector('head').appendChild(style)
style.sheet.insertRule(`
    .expand {
        transform: scale(3)
    }
`)


const cursor = document.querySelector('span')
const properties = {
    'width': '40px',
    'height': '40px',
    'border': '1px solid #1b1b1b',
    'border-radius': '50%',
    'position': 'absolute',
    'transition-property': 'top, left, transform',
    'transition-duration': '125ms, 125ms, .7s',
    'transition-timing-function': 'ease-out, ease-out, ease-out',
}

Object.assign(cursor.style, properties);

document.addEventListener('mousemove', e => {
    cursor.style.top = `${e.pageY - 40}px`
    cursor.style.left = `${e.pageX - 20}px`
    cursor.classList.remove('expand')
})

document.addEventListener('click', e => {
    cursor.classList.add('expand')
})
