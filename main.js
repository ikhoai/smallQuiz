function get_todos() {
    var todos = new Array;
    var todos_str = localStorage.getItem('todo');
    if (todos_str !== null) {
        todos = JSON.parse(todos_str); 
    }
    return todos;
}
 
function add() {
    var task = document.getElementById('task').value;
    console.log(task); 

    var todos = get_todos();
    if (task != '') {
        todos.push(task);
    }
    localStorage.setItem('todo', JSON.stringify(todos));

    
    show();
    resetText(); 
 
    return false;
}

function resetText() {
    document.getElementById('task').value = '';
}
 
function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
 
    show();
 
    return false;
}
 
function show() {
    var todos = get_todos();
 
    var html = '<ul>';
    for(var i=0; i<todos.length; i++) {
        html += '<li>' + todos[i] + '<button class="remove" id="' + i  + '">x</button></li>';
    };
    html += '</ul>';
 
    document.getElementById('todos').innerHTML = html;
 
    var buttons = document.getElementsByClassName('remove');
    for (var i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    };
}
 
document.getElementById('add').addEventListener('click', add);
show();

// Tesing the quiz application

var allQuestion = [{
    question: "Who is the PM of United Kingdom ?", 
    choices: ["David Cameron", "Gordon Brown", "Tony Blair", "Winston Churchill"], 
    correctAnswer: 0
                    }, 
                    {
    question: "Who is the PM of United State ?", 
    choices: ["George Bush", "Abraham Lincon", "Barrack Obama", "Theo Rosevelt"], 
    correctAnswer: 2
}
]; 

var questionIndex = 0; 

showQuestion(); 
showAnswer(); 

console.log(typeof answer);

function showQuestion() {
    var ask = document.getElementById('ask'); 
    ask.innerHTML = allQuestion[questionIndex].question; 
}

function showAnswer() {
   var answerList = document.getElementById('answerList'); 
   var answerArray = allQuestion[questionIndex].choices; 
   for (var i = 0; i < answerArray.length; i++) {
       
        answerList.innerHTML += '<input type="checkbox" id="' + i  + '" />' + '<li>' + answerArray[i] + '</li>'
   }  
}

console.log(allQuestion[0].choices);