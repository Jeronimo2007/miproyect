var list = document.getElementById('todos-list')
var removeDoneBtn = document.getElementById('removeDone')
var addInput = document.getElementById('inputField')
var removeAllBtn = document.getElementById('removeAll')



function createTodo () {
    
    var text = addInput.value;

    if (text === "") {
        return;

    }

    var li = document.createElement("li");

    var checkbox = document.createElement('input');
    checkbox.classList.add('checkbox');
    checkbox.type = 'checkbox';

    var inputBtn = document.createElement('input');
    inputBtn.classList.add('input');
    inputBtn.defaultValue = text;

    li.appendChild(checkbox);
    li.appendChild(inputBtn);
    list.appendChild(li);

    addInput.value = "";

    removeAll.addEventListener('click', function() {

        li.removeChild(checkbox)
        li.removeChild(inputBtn)
        list.removeChild(li)
    })

    removeDoneBtn.addEventListener('click', () => {
        let checkboxAtt = checkbox.getAttribute('completed')

        if (checkboxAtt === 'true') {
            li.removeChild(checkbox)
            li.removeChild(inputBtn)
            list.removeChild(li)

        }

    })
}    


function toggleComplete (inputElement) {

    if (inputElement.checked === false) {

        inputElement.parentElement.classList.remove("complete")
    }else{
        inputElement.parentElement.classList.add("complete")
        inputElement.setAttribute("completed", 'true')
        console.log({inputElement})

    }

}


list.addEventListener("change", (event) =>{
    if (event.target.tagName === "INPUT" && event.target.type === "checkbox"){
        toggleComplete(event.target)
    }

}) 





addInput.addEventListener('keypress', (event) => {

    if (event.key === 'Enter'){
        createTodo()
    }

})






