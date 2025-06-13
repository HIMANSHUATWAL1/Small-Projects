const URL = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";


let inputFeild = document.getElementById('input-text');

let imgBox = document.querySelector('.img-box');

let qrImg = document.getElementById('qr-img');

let btn = document.getElementById('button')


btn.addEventListener('click', generateQR);


function generateQR() {

    if (inputFeild.value.length > 0) {
        qrImg.src = URL + inputFeild.value;
    } else {
        inputFeild.classList.add('error');
        
        setTimeout(()=>{
            inputFeild.classList.remove('error');
        },1000)
    }
}