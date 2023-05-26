// variables to reference DOM elements
var startBtn = document.getElementById('start');
var timerEl = document.getElementById('time');
var choicesEl = document.getElementById('choices');
var submitBtn = document.getElementById('submit');
var currentQuestionIndex = 0;
var time = 0;

function quizBegin() {
    // hide start screen
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
  if(questions.length === currentQuestionIndex)
    quizEnd();
  else{
    var currentQuestion = questions[currentQuestionIndex];

      // update title with current question
      var titleEl = document.getElementById('question-title');
      titleEl.textContent = currentQuestion.title; 

      // loop over choices
      for (var i = 0; i < currentQuestion.choices.length; i++) {
      
        // create new button for each choice
        var choiceNode = document.createElement('button');
        choiceNode.setAttribute('class', 'choice');
        choiceNode.setAttribute('value', 'choice');
        choiceNode.textContent = currentQuestion.choices[i];

        // display on the page
        document.getElementById('choices').appendChild(choiceNode);
      }
  }
  
}

function clearQuestions(){
  let element = document.getElementById("choices");
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

function startQuiz(event) {
 
  quizBegin();

    // start timer
    var timerInterval = setInterval(function() {
        
      time--;

      if(time <= 0){
        clearInterval(timerInterval);
        if(!(questions.length === currentQuestionIndex)) {
        // Stops execution of action at set interval
        quizEnd();
        }
        time = 0;
      }
      
    timerEl.textContent = time;

    }, 1000);
}

function questionClick(event) {
  buttonEl = event.target;
  var currentQuestion = questions[currentQuestionIndex]; 

  var feedback = document.createElement('p');
  feedback.setAttribute('class', 'feedback');

  if(currentQuestion.answer == buttonEl.textContent){
    feedback.textContent = "Correct!";
    var snd = new Audio("./assets/sfx/correct.wav");
    snd.play();
  }else{
    feedback.textContent = "Incorrect!";
    time = time - 10;
    var snd = new Audio("./assets/sfx/incorrect.wav");
    snd.play();
  }
  
  clearQuestions()
  currentQuestionIndex++;
  getQuestion();
  document.getElementById('choices').appendChild(feedback);
}

function saveHighscore(event) {

  // get value of input box
  var initialsEl = document.getElementById('initials');
  var initials = initialsEl.value.trim();

  if(initials){

    var highscores = JSON.parse(localStorage.getItem("highscores")) || [];

    // format new score object for current user
    var score = document.getElementById('final-score').textContent;
    var newScore = {
      score: score,
      initials: initials.toUpperCase(),
    };

    // save to localstorage
    highscores.push(newScore);
    localStorage.setItem("highscores", JSON.stringify(highscores));

    //redirect to highscores page
    window.location.href = 'highscores.html';
  }
}

// user clicks button to start quizz
startBtn.addEventListener("click", startQuiz);

// user selects an option
choicesEl.addEventListener("click", questionClick);

//user selects submit initials 
submitBtn.addEventListener("click", saveHighscore);