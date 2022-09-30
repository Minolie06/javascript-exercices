"use strict"
let grid = {
    attribute: {
        id: 'morpion'
    },
    style: {
        width: '27rem',
        height: '27rem',
        display: 'grid',
        'grid-template-columns': 'repeat(3, 9rem)',
        'grid-template-rows': 'repeat(3, 9rem)',
    }
}

let box = {
    style: {
        border: '1px solid #ccc',
        display: 'flex',
        'align-items': 'center',
        'justify-content': 'center',
    }
}
// Object.assign(gridElement.style, grid.style);

const gridElement = document.createElement('div')

for (const [key, value] of Object.entries(grid.attribute)) {
    gridElement[key] = value;
}

for (const [key, value] of Object.entries(grid.style)) {
    gridElement.style[key] = value;
}

for (let i = 0; i < 9; i++) {
    const boxElement = document.createElement('div')

    for (const [key, value] of Object.entries(box.style)) {
        boxElement.style[key] = value
    }

    gridElement.append(boxElement)
}

document.getElementById('app').append(gridElement)