// Grab the element id of the form and assign it to a constant
const blogForm = document.getElementById('blog-form')

// Create a function that will listen for a click event and store the data input to the form to an object array using JSON
function addBlog(e) {
   e.preventDefault()

   // Assign the input value to a constant
   const usernameValue = blogForm.username.value
   const titleValue = blogForm.title.value
   const contentValue = blogForm.content.value

   // Grab the existing values from the form in the form of an array or empty array
   const raw = localStorage.getItem('blogArray')
   const blogArray = JSON.parse(raw) || []

   // Assign the input values to an object
   const newBlog = {
      username: usernameValue,
      title: titleValue,
      content: contentValue
   }

   // Push the object into an array
   blogArray.push(newBlog)

   // Store the object array to local storage using JSON
   localStorage.setItem('blogArray', JSON.stringify(blogArray))

   // Redirect the user to another webpage when the button is clicked
   window.location = './blog.html'
}

// Function that listens for a click event on the form button and runs the addBlog function above
function init() {
   blogForm.addEventListener('submit', addBlog)
}

// Runs the initialize function above to exicute the addBlog function
init()