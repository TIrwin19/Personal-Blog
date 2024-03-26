const blogForm = document.getElementById('blog-form')
const username = document.getElementById('username')
const title = document.getElementById('title')
const content = document.getElementById('content')
// const submitButton = document.getElementById('submit-button')

blogForm.addEventListener('submit', function (event) {
    event.preventDefault() //prevents the form from auto submiting

   const usernameValue = username.value
   const titleValue = title.value
   const contentValue = content.value

   localStorage.setItem('dataArray', JSON.stringify([usernameValue, titleValue, contentValue]))

   localStorage.setItem('username', usernameValue)
   localStorage.setItem('title', titleValue)
   localStorage.setItem('content', contentValue)


   window.location = './blog.html'

})



// fetch




// const btn = document.querySelector('button')

// function toggleMode(){
//     const text = btn.innerText

//     document.body.style.backgroundColor = text === 'Dark' ?
//     'white' : '#333'

//     btn.innerText = text === 'Light' ? 'Dark' : 'Light'
// }

// btn.addEventListener('clock', toggleMode)