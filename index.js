const modalBtn = document.querySelectorAll('.modal_btn');

for(let i = 0; i < modalBtn.length; i++){
    modalBtn[i].addEventListener('click', function(){
        let modal = this.dataset.target;

        // modal open
        const modalBody = document.getElementById(modal);
        modalBody.style.display = 'flex';

        // modal close
        const close = document.querySelector(`#${modal} .modal_close_btn`);
        close.addEventListener('click', function(){
            modalBody.style.display = 'none';
        })

        const closeBtn = document.querySelector(`#${modal} .close`);
        closeBtn.addEventListener('click', function(){
            modalBody.style.display = 'none';
        })
    })
}



