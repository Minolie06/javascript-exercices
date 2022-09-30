"use strict"
const imageAttributes = [
    {
        'src': 'https://picsum.photos/id/1025/600/400',
        'alt': 'Un gentil chien'
    },
    {
        'src': 'https://picsum.photos/id/1020/600/400',
        'alt': 'Un gentil ours'
    }
]
const image = document.querySelector('img')
let i = 0;
const n = imageAttributes.length

function changeImage() {
    i = (i + 1)%n
    Object.assign(this, imageAttributes[i])
}

image.addEventListener('click', changeImage)