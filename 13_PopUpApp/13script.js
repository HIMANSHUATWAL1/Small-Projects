
let submitBtn=document.getElementById('submit')

let popup=document.getElementById('popup')

let okBtn=document.getElementById('ok-btn')


submitBtn.addEventListener('click',openPopUp);


okBtn.addEventListener('click', closePopUp)


function openPopUp(){
    popup.classList.add('openPopup');
}

function closePopUp(){
   popup.classList.remove('openPopup');
}