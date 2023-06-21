// Vars
var hmmenu = document.querySelector('.hamburger-btn')
var options = document.querySelector('.hamburger-menu')
var button = document.querySelector('button.hamburger-btn')

// Open/close menu with button
hmmenu.onclick = function () {
    options.classList.toggle('show-menu')
    button.focus()
    //Set aria
    if (options.classList.contains('show-menu')) {
        hmmenu.setAttribute('aria-expanded', true)
    } else {
        hmmenu.setAttribute('aria-expanded', false)
    }
}

// Close menu with esc
document.onkeyup = function(e) {
    button.focus()
    if (e.key === 'Escape')
    options.classList.remove('show-menu')
}

// Close menu by clicking outside
window.addEventListener('click', function(e) { 
    if (!document.querySelector('.hamburger-btn').contains(e.target) && !document.querySelector('.hamburger-menu').contains(e.target)) {
        options.classList.remove('show-menu')
    }
})