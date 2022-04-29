function scrollHeader(){
    const nav = document.getElementById('header')

    if(this.scrollY >= 80) nav.classList.add('scroll-header');

    else
        nav.classList.remove
}
window.addEventListener('scroll', scrollHeader)



function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');

    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll');
    else
        scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)