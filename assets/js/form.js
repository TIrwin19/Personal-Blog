const blogForm = document.getElementById('blog-form')

function addBlog(e) {
   e.preventDefault()

   const usernameValue = blogForm.username.value
   const titleValue = blogForm.title.value
   const contentValue = blogForm.content.value

   const raw = localStorage.getItem('blogArray')
   const blogArray = JSON.parse(raw) || []

   const newBlog = {
      username: usernameValue,
      title: titleValue,
      content: contentValue
   }

   blogArray.push(newBlog)

   localStorage.setItem('blogArray', JSON.stringify(blogArray))

   window.location = './blog.html'
}

function init() {
   blogForm.addEventListener('submit', addBlog)
}

init()

// fetch




// const btn = document.querySelector('button')

// function toggleMode(){
//     const text = btn.innerText

//     document.body.style.backgroundColor = text === 'Dark' ?
//     'white' : '#333'

//     btn.innerText = text === 'Light' ? 'Dark' : 'Light'
// }

// btn.addEventListener('clock', toggleMode)