// Get task from input
function get_todos() {
    // Create array of inputed tasks
    var todos = new Array;
    // Pull task that was saved in web browser memory
    var todos_str = localStorage.getItem('todo');
    // If input is not null, JSON.parse will communicate w 
    // web browser to make task a JS object
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}

// Adds inputed task to get_tasks function array
function add() {
    // Takes inputed task and makes it a variable
    var task = document.getElementById("task").value;

    var todos = get_todos();
    // Adds new task to end of array
    todos.push(task);
    // Converts task input to JSON string
    localStorage.setItem('todo', JSON.stringify(todos));
    document.getElementById("task").value = "";
    show();

    return false;
}

// Keeps tasks permanently displayed on screen
function show() {
    // Sets task that was retrieved as a variable
    var todos = get_todos();

    // Sets up each tast as ul
    var html = '<ul>';
    // Displays task to the list in order it is inputed
    for (var i = 0; i < todos.length; i++) {
        // Also displays task as list and creates button w/ "x"
        html +='<ul>' +  '<button class="remove" id="' + i + '">x</button>' + todos[i] + '</li>';

    };
    html += '</ul>';
    // Displays task as list
    document.getElementById("todos").innerHTML = html;

}

// Displays inputed task when 'Add Item' button is clicked
document.getElementById("add").addEventListener('click', add);
// Keeps inputs displayed permanently on screen
show();