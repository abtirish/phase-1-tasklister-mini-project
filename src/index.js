document.addEventListener("DOMContentLoaded", () => {
  //Generates a submit event on the Create New Task button 
    document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    //Since the id had dashes, needed to use querySelector to find. 
    AddToDo(e.target.querySelector('#new-task-description').value)
    })

})

// Create list (li) element with an 'x' button of inputs added to the list
function AddToDo(todo) {
  let list = document.createElement('LI');
  let button = document.createElement('button')
  button.addEventListener('click', handleDelete) 
  button.textContent = ' x '
  list.textContent = `${todo}  `
  list.appendChild(button)
  document.querySelector('#tasks').appendChild(list)
}

//When clicking the 'x' button, the button and text should be removed 
function handleDelete(e){
  e.target.parentNode.remove()
}

