"use strict"
for(let element of document.querySelectorAll('li')) {
    element.addEventListener('click', () => {
        document.querySelector('body').style[element.dataset.toggle] = element.dataset.value
    })
}


