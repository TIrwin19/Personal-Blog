// Grabs the section element we are going to replace and assigns it to a variable
const blogOutput = document.querySelector('section')

// Grab the object array from localstorage usung JSON and assign it to a variable
const posts = JSON.parse(localStorage.getItem('blogArray')) || []

// Function that will iterate over the object array and place the values in the desired html elements using its assigned property
function addNewPost() {
    // Replaces any evisting content within the section element we are replacing
    if (posts.length) {
        blogOutput.innerHTML = ''
    }

    // A forof loop that iterates over each property/value of the object array, places its value in the desired element, and inserts the parent element/children into the html 
    for (let post of posts) {
        blogOutput.insertAdjacentHTML('beforeend', `
        <section class="new">
            <p class="opening">${post.title}</p>
            <p class="text">${post.content}</p>
            <p class="user">Posted by: ${post.username}</p>
        </section>
        `)
    }
}

// Run the function above
addNewPost()