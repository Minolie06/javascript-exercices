"use strict"
const image = document.querySelector('img')

function changeImage() {
    this.src = this.src == 'https://picsum.photos/id/1025/600/400' ? 'https://picsum.photos/id/1020/600/400' : 'https://picsum.photos/id/1025/600/400'
    this.alt = this.alt == 'Un gentil chien' ? 'Un gentil ours' : 'Un gentil chien'
}

image.addEventListener('click', changeImage)