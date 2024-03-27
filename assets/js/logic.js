// Light and dark mode
const body = document.body
const darkToggle = document.querySelector('#toggle')

// const theme = localStorage.getItem('theme')

// if(theme) {
//    document.body.classList.add('theme')
// }

darkToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode')

    // if(document.body.classList.contains('dark-mode')){
    //     localStorage.setItem('theme', 'dark-mode')
    // } else {
    //     localStorage.removeItem('theme')
    // }
})