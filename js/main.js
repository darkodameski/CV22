const modalViews = document.querySelectorAll('.services__modal')
      modalButtons = document.querySelectorAll('services__button')
      modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}
modalButtons.forEach((modalButton, i) =>{
    modalButton.addEventListener('click', () =>{
        modal(i)
    })
})

modalCloses.forEach((modalClose) =>{
    modalClose.addEventListener('click', () =>{
        modalViews.forEach((modalView) =>{
            modalView.classList.remove('active-modal')
        })
    })
})


let swiper = new Swiper(".portfolio__container", {

    cssMode:true,
    navigation:{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },

    mousewheel: true,
    keyboard: true,
  });