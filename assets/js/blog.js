const username = localStorage.getItem('username')
const title = localStorage.getItem('title')
const content = localStorage.getItem('content')

console.log(JSON.parse(localStorage.getItem('dataArray')))

document.getElementById('username').textContent = username
document.getElementById('title-data').textContent = title
document.getElementById('content').textContent = content