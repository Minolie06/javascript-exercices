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