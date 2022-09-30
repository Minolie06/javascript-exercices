span = document.querySelector('span')
span.addEventListener('click', () => {
    span.textContent = span.textContent == 'O' ? 'X' : 'O'
})