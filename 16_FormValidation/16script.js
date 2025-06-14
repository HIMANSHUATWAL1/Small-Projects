

const nameError = document.getElementById('name-error')

const phoneError = document.getElementById('phone-error')

const emailError = document.getElementById('email-error')

const messageError = document.getElementById('message-error')

const submitError = document.getElementById('submit-error')




function validateName() {
    const name = document.getElementById('contact-name').value;

    if (name.length === 0) {
        nameError.innerHTML = 'Name is required';
        return false;
    }


    if (!name.match(/^[A-Za-z]+\s[A-Za-z]+$/)) {
        nameError.innerHTML = 'Write full name';
        return false;
    }

    nameError.innerHTML = '<i class="fas fa-check-circle"><i/>';
    return true;
}


// this is causing little bit functionality issue 
//fix this validatePhone function.
function validatePhone() {
    const phone = document.getElementById('phone').value;

    if (phone.length === 0) {
        phoneError.innerHTML = 'phone is required';
        return false;

    }
    if (!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = 'Only digits please.';
        return false;

    }

    if (phone.length !== 10) {

        phoneError.innerHTML = 'Phone no. should be 10 digit';
        return false;

    }


    phoneError.innerHTML = '<i class="fas fa-check-circle"><i/>';
    return true;

}

function validateEmail() {
    const email = document.getElementById('email').value;

    if (email.length === 0) {
        emailError.innerHTML = 'Email is required';
        return false;
    }


    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = 'write valid email';
        return false;
    }


    emailError.innerHTML = '<i class="fas fa-check-circle"><i/>';
    return true;

}

function validateMessage() {
    const message = document.getElementById('textAria').value;

    let required = 30;

    let left = required - message.length;



    if (left > 0) {
        messageError.innerHTML = left + " more character required";
        return false;
    }

    messageError.innerHTML = '<i class="fas fa-check-circle"><i/>';
    return true;

}


function validateForm() {
    if (!validateName() || !validateEmail() || !validateMessage() || !validatePhone()) {
        submitError.style.display = 'block';

        submitError.innerHTML = 'please fix error to submit';

        setTimeout(function () {
            submitError.style.display = 'none';
        }, 3000)

        return false;
    }
}