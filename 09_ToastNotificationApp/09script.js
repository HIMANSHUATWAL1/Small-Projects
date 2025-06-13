const btn1=document.getElementById('btn1')
const btn2=document.getElementById('btn2')
const btn3=document.getElementById('btn3')
const toastBox=document.getElementById('toast-box')

let successMsg='<i class="fa-solid fa-circle-check"></i> Successfully Submitted';
let errorMsg='<i class="fa-solid fa-circle-xmark"></i> Please fix the error!';
let invalidMsg='<i class="fa-solid fa-circle-exclamation"></i> Invalid input,check again!';

btn1.addEventListener('click',()=>showToast(successMsg))
btn2.addEventListener('click',()=>showToast(errorMsg))
btn3.addEventListener('click',()=>showToast(invalidMsg))

function showToast(msg){
    let div=document.createElement('div');

    div.classList.add('toast');

    div.innerHTML=msg;

    toastBox.appendChild(div);

    if(msg.includes('error')){
        div.classList.add('error');
    }
    if(msg.includes('Invalid')){
        div.classList.add('invalid');
    }

    setTimeout(()=>{
        div.remove()
    },5000)

}