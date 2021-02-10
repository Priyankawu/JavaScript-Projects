// todo.js
//this function gets the task from the input, makes an Array of 
var todos;
function get_todos() {
    /* this creates an array of task that are inputed */
    todos = new Array;
    /* This pulls the task that was saved in teh web browser memory*/
    var todos_str = localStorage.getItem("todo"); //getItem takes the key returns the value
    console.log("todos_str is this: "+todos_str);
    /* If the input is not null, then JSON.parse will communicate with the web browser to make the task a JavaScript object.*/
    if (todos_str != null){
        todos = JSON.parse(todos_str); //remakes the object from the string
    }
    return todos;   //object
}

/*This function adds the inputed task to the get_todos function array */
function add() {
    /* This takes the inputed task and creates a variable of it */
    var task = document.getElementById('task').value;
    var todos = get_todos();
    /* This adds a new task the end of the array */
    todos.push(task);
    /* this converts the task input to a JSON string */
    localStorage.setItem("todo", JSON.stringify(todos));
    document.getElementById("task").value= "";
    show();

    return false;
}

/*This function keeps the tasks permanently displayed on the screen*/
function show() {
    /* this sets the task that was retrieved as a variable */
    var todos = get_todos();
    /* This sets up each task as an unordered list */
    var html = "<ul>";
    //putting a X button on the right of the item.
    /* This displays a task to the list in the order that it is inputed */
    for (var i=0; i<todos.length; i++) {
        /* this also displays the task as a list and creates the button with the "x" */
        html += '<li>' +todos[i] +'<button class="remove" id="'+ i+'"> x </button></li>';
    };
    html += '</ul>'
    /* This displays the task as a list */
    document.getElementById('todos').innerHTML = html;
    console.log("________________________ "+html);

    var buttons = document.getElementsByClassName('remove');
    for (var i=0; i<buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    }
}
/* this displays the inputed task when the 'Add Item' button is clicked */
document.getElementById('add').addEventListener('click',add);
show();



function remove(){
    var id = this.getAttribute('id');
    var Array = get_todos();
    console.log("+++++++ "+Array.length);
    Array.splice(id,1);
    console.log("+++++++ "+Array.length);
    localStorage.setItem('todo', JSON.stringify(Array)); //rearranging to fill the deleted hole
    console.log(Array.length);
    show();

    return false;
}

//localStorage stores in key-value pairs