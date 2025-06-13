const passwordBox = document.getElementById('password');
const button=document.getElementById('btn');
const copyButton=document.getElementById('copy');


const length=12;

function generatePassword() {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    let password = "";
    for(let i=0;i<length;i++){
        let idx=Math.floor(Math.random()*charset.length);
        password+=charset[idx];
    }

    passwordBox.value=password;
    
}

button.addEventListener('click',generatePassword);


function copyToClipboard() {
    passwordBox.select();
    document.execCommand('copy');
    alert('Password copied to clipboard');
}

copyButton.addEventListener('click',copyToClipboard);