"use strict"
const grid = document.getElementById('app')

grid.style.display = 'grid'
grid.style.gridTemplateColumns = 'repeat(3, 6rem)'

for(let i=0; i < 9; i++) {
    const gridItem = document.createElement('div')
    gridItem.style.width = '6rem'
    gridItem.style.height = '6rem'
    gridItem.style.border = '1px solid #ccc'
    grid.append(gridItem)
}