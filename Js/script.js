
let navbar = document.querySelector('#navbar');
let topbtn = document.querySelector('.top');
window.addEventListener('scroll',function(){
    var sticky = window.scrollY;

    if (sticky > 100) {
        navbar.classList.add('sticky_menu')
        topbtn.classList.add('topbtn')
    } else {
        navbar.classList.remove('sticky_menu')
        topbtn.classList.remove('topbtn')
    }
})