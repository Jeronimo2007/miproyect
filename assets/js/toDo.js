let addToDoButton = document.querySelector('#addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');
let checkBox = document.getElementsByClassName('checkbox')
let removeToDoButton = document.getElementById('removeToDo')

inputField.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        var paragraph = document.createElement('input');
        paragraph.classList.add('input')


        paragraph.defaultValue = inputField.value;

        toDoContainer.appendChild(paragraph);
        inputField.value = "";

        checkbox.addEventListener('click', function () {
            paragraph.style.textDecoration = "line-through";

            checkbox.addEventListener('click', function () {
                paragraph.style.textDecoration = "initial";

            
            
            })
            })
        removeToDoButton.addEventListener('click', () => {
            toDoContainer.removeChild(paragraph);
        })
    }
})                                       


function addElement(tag, className) {
    let element = document.createElement(tag)
    
    element.classList.add(className)



}

console.log({checkBox})
