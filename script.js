const mobileBtn  = document.querySelector('.btn-mobile');
const navlinks  = document.getElementById('nav-links');
const iocn  = document.querySelector('.btn-mobile i')

mobileBtn.addEventListener('click',() =>{
    navlinks.classList.toggle('show')
    iocn.classList.toggle("fa-times")
    iocn.classList.toggle("fa-bars")
})