let addToDoButton = document.querySelector('#addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');
let checkBox = document.getElementsByClassName('checkbox')
let removeToDoButton = document.getElementById('removeToDo')
let inputs = document.getElementsByClassName('input')

inputField.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        var paragraph = document.createElement('input');
        paragraph.classList.add('input')

        var buttonCheck = document.createElement('input');
        buttonCheck.type = 'checkbox'
        buttonCheck.classList.add('checkbox')
        buttonCheck.classList.add('checkbox')


        paragraph.defaultValue = inputField.value;

        toDoContainer.appendChild(paragraph);
        inputField.value = "";

        let check = checkBox.checked
        
        if (check === true) {
            paragraph.style.textDecoration = 'line through'

        }else{
            paragraph.style.textDecoration = 'initial'

        }

        removeToDoButton.addEventListener('click', () => {
            toDoContainer.removeChild(paragraph);
        })

        if (inputs.value == ''){
            removeChild(paragraph,buttonCheck)
        
        }
        
    }
})       



function addElement(tag, className) {
    let element = document.createElement(tag)
    
    element.classList.add(className)



}

console.log({inputField})
