"use strict"
let gridProperties = {
    width: '27rem',
    height: '27rem',
    display: 'grid',
    'grid-template-columns': 'repeat(3, 9rem)',
    'grid-template-rows': 'repeat(3, 9rem)',
}

let boxProperties = {
    border: '1px solid #ccc',
    display: 'flex',
    'align-items': 'center',
    'justify-content': 'center',
}

const grid = document.createElement('div')
Object.assign(grid.style, gridProperties);

for (let i = 0; i < 9; i++) {
    const box = document.createElement('div')
    Object.assign(box.style, gridProperties);
    grid.append(box)
}

document.getElementById('app').append(grid)