let menuMobile = document.querySelector('.menu_mobile')
let menu = document.querySelector('nav')

menuMobile.addEventListener('click', function(){
    menu.classList.toggle('active')
})