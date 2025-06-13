const inputBox = document.getElementById("inputBox");

const listContainer = document.getElementById("list-container");


function addTask() {
    if (inputBox.value === '') {
        alert("Please Enter atleast one Task");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    saveTask();

}


listContainer.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveTask();
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentNode.remove();
        saveTask();
    }
}, false)


function saveTask() {
    localStorage.setItem('data', JSON.stringify(listContainer.innerHTML));
}


function showTask() {
    listContainer.innerHTML = JSON.parse(localStorage.getItem('data'));
}

showTask();