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

var allQuestion = [
        {
            question: "Who is the PM of United Kingdom ?",
            choices: ["David Cameron", "Gordon Brown", "Tony Blair", "Winston Churchill"],
            correctAnswer: 0
        },
        {
            question: "Who is the PM of United State ?",
            choices: ["George Bush", "Abraham Lincon", "Barrack Obama", "Theo Rosevelt"],
            correctAnswer: 2
        },
        {
            question: "Who is the Founder of Apple?",
            choices: ["Bill Gates", "Steve Jobs", "Jeff Bezos", "Elen Musk"],
            correctAnswer: 1
        },
        {
            question: "What is the name of Khoai's son?",
            choices: ["Titi", "Tin tin", "meo meo", "Cantona"],
            correctAnswer: 0
        },
        {
            "question": "What is the full form of IP?",
            "choices": ["Internet Provider", "Internet Port", "Internet Protocol"],
            "correctAnswer": 2
        }, {
            "question": "Who is the founder of Microsoft?",
            "choices": ["Bill Gates", "Steve Jobs", "Steve Wozniak"],
            "correctAnswer": 0
        }, {
            "question": "1 byte = ?",
            "choices": ["8 bits", "64 bits", "1024 bits"],
            "correctAnswer": 0
        }, {
            "question": "The C programming language was developed by?",
            "choices": ["Brendan Eich", "Dennis Ritchie", "Guido van Rossum"],
            "correctAnswer": 1
        }, {
            "question": "What does CC mean in emails?",
            "choices": ["Carbon Copy", "Creative Commons", "other"],
            "correctAnswer": 0
        }
];

var answerList = document.getElementById('answerList');
var questionIndex = 0;
var score = 0;
var nextButton = document.getElementById("nextButton");

showQuestion(); 
showAnswer(); 

console.log(typeof answer);

function showQuestion() {
    var ask = document.getElementById('ask'); 
    ask.innerHTML = allQuestion[questionIndex].question; 
}

function showAnswer() {

   var answerArray = allQuestion[questionIndex].choices; 
   for (var i = 0; i < answerArray.length; i++) {
       
        answerList.innerHTML +=  '<li>' + answerArray[i] + '<input type="checkbox" name="checkbox" id="' + i  + '"  />' + '</li>';
   }  
}



nextButton.onclick = function() {
    checkId(); //return i;
    var i = checkId();

    if (allQuestion[questionIndex].correctAnswer == i) {
        alert("Perfect");
        score += 100;
    }

    questionIndex++;
    showQuestion();
    answerList.innerHTML = "";
    showAnswer();
    showScore();

};

function checkId() {
    var c = document.getElementById("answerList").getElementsByTagName("input");
    for (var i = 0; i < c.length; i++) {
        console.log(c[i]);
        console.log(c[i].checked);
        if (c[i].checked == true) {
            console.log(i);
            return i;
        } else if (c[c.length -1].checked == false) {
            alert("Please answer before proceed"); 
        }
    }

};

function showScore() {
    var scoreBoard = document.getElementById("score");
    scoreBoard.innerHTML = 'Score: ' + score;
}
