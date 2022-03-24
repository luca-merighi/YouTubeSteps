const backToTopButton = document.querySelector('.back-to-top')
function backToTop() {
    if(window.scrollY >= 500) {
        backToTopButton.classList.remove('hide')
    } else {
        backToTopButton.classList.add('hide')
    }
}

const header = document.querySelector('.header')
const navHeight = header.offsetHeight
function changeHeaderWhenScrolling() {
    if(window.scrollY >= navHeight) {
        header.classList.add('header-shadow')
    } else {
        header.classList.remove('header-shadow')
    }
}

window.addEventListener('scroll', function() {
    backToTop()
    changeHeaderWhenScrolling()
})

const toggleSidebar = document.querySelector('.toggle-sidebar')
const sidebar = document.querySelector('#sidebar')
const body = document.querySelector('body')

toggleSidebar.addEventListener('click', function() {
    sidebar.classList.toggle('hide')
    body.classList.toggle('lock-scroll')
})

toggleSidebar.addEventListener('keyup', function() {
    sidebar.classList.toggle('hide')
    body.classList.toggle('lock-scroll')
})

const sidebarLinks = document.querySelectorAll('#sidebar .nav a')
sidebarLinks.forEach((result) => {
    result.addEventListener('click', function() {
        sidebar.classList.add('hide')
        body.classList.remove('lock-scroll')
    })

    result.addEventListener('keyup', function() {
        if(event.keyCode === 13) {
            sidebar.classList.add('hide')
            body.classList.remove('lock-scroll')
        }
    })
})

const firstLink = document.querySelector('.create-account-list li a') 
firstLink.addEventListener('keyup', function() {
    sidebar.classList.add('hide')
    body.classList.remove('lock-scroll')
})