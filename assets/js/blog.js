const blogOutput = document.querySelector('section')

const posts = JSON.parse(localStorage.getItem('blogArray')) || []

function addNewPost() {
    if (posts.length) {
        blogOutput.innerHTML = ''
    }

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

addNewPost()