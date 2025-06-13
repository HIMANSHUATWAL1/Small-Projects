const notesContainer = document.querySelector('.notes-container');

const createBtn = document.querySelector('.create-btn');

let notes = document.querySelectorAll('.input-box');


//checking if notes are present in local storage or not

function showNotes() {
    if (localStorage.getItem('notes')) {
        notesContainer.innerHTML = localStorage.getItem('notes');
    }
}


showNotes();

function updateStorage() {
    localStorage.setItem('notes', notesContainer.innerHTML);
}

createBtn.addEventListener('click', () => {
    //dynamic creation of input box----->

    let inputBox = document.createElement('p');
    let img = document.createElement('img');

    inputBox.classList.add('input-box');
    inputBox.setAttribute('contenteditable', 'true');
    img.src = 'images/delete.png';

    notesContainer.appendChild(inputBox).appendChild(img);

})


notesContainer.addEventListener('click', (e) => {

    if (e.target.tagName == 'IMG') {
        e.target.parentElement.remove();
        updateStorage();
    }
    else if (e.target.tagName === 'P') {
        notes = document.querySelectorAll('.input-box');
        notes.forEach((note) => {
            note.onkeyup = () => {
                updateStorage();
            }
        })
    }
})


// very important to prevent default behaviour of enter key
//because if we donot apply this method our application will crash
//local storage will create separate p tag for each enter key pressed
//which is lead to unappropriate behaviour of our application

document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        document.execCommand('insertLineBreak');
        e.preventDefault();
    }
})