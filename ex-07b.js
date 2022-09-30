
"use strict"
const elements = Array.from(document.querySelectorAll('li'))
elements.map((value) => {
    value.addEventListener('click', changeBackgroundColor)
})

function changeBackgroundColor() {
    const color = this.dataset.value
    document.querySelector('body').style.backgroundColor = color
}