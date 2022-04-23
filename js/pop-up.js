
const modalViews = document.querySelectorAll('.services__modal'),
      
      modalButtons = document.querySelectorAll('.services__button'),

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