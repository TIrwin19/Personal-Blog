// Light and dark mode

// Gets the body element and assigns it to a variable
const body = document.body

// Grabs the id tag assigned to the light/dark button
const darkToggle = document.getElementById('toggle')

const theme = localStorage.getItem('theme')
if(theme){
    document.body.classList.add('dark-mode')
}

// Adds an event listener to the button and when the button is pressed a class tag is applied to the body element which enables the css styles assigned to the .dark-mode class tag
darkToggle.addEventListener('click', function() {
    body.classList.toggle('dark-mode')
    
    if(document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark-mode')
        
    } else{
        localStorage.removeItem('theme')
    }
})