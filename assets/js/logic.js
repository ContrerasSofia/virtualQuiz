// variables to reference DOM elements
var startBtn = document.getElementById('start');
var timerEl = document.getElementById('time');
var currentQuestionIndex = 0;
var time = 0;

function startQuiz(event) {
 
  quizBegin();

    // start timer
    var timerInterval = setInterval(function() {
        
      time--;

      if(time === 0 || currentQuestionIndex == (questions.length -1)) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        time = 0;
        quizEnd();

      }

      timerEl.textContent = time;
    
    }, 1000);
}

function quizBegin() {
    // hide start screen
    console.log("entro a quizbegin");
    var startScreenEl = document.getElementById('start-screen');
    startScreenEl.setAttribute('class', 'hide');
  
    // un-hide questions section
    var questionsEl = document.getElementById('questions');
    questionsEl.removeAttribute('class', 'hide');

    //set starting time
    time = 75;
    timerEl.textContent = time;
    currentQuestionIndex = 0;
    getQuestion();
}

function quizEnd() {
  // hide questions section
  var questionsEl = document.getElementById('questions');
  questionsEl.setAttribute('class', 'hide');

  // show end screen
  var endScreenEl = document.getElementById('end-screen');
  endScreenEl.removeAttribute('class', 'hide');

  // show final score
  var finalScoreEl = document.getElementById('final-score');
  finalScoreEl.textContent = time;
  time = 0;
}

function getQuestion() {
  var currentQuestion = questions[currentQuestionIndex];

  // update title with current question
  var titleEl = document.getElementById('question-title');
  titleEl.textContent = currentQuestion.title; 
  var list = document.createElement('ol');
  document.getElementById('choices').appendChild(list);

  // loop over choices
  for (var i = 0; i < currentQuestion.choices.length; i++) {
    // create new button for each choice
    var choiceNode = document.createElement('li');
    choiceNode.textContent = currentQuestion.choices[i];

    // display on the page
    list.appendChild(choiceNode);
  }
  
}

// user clicks button to start quizz
startBtn.addEventListener("click", startQuiz);

