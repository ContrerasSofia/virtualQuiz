printHighscores();

function printHighscores() {
  // either get scores from localstorage or set to empty array
  var highscores = JSON.parse(window.localStorage.getItem('highscores')) || [];

  // sort highscores by score property in descending order HINT: the sort method. 
  highscores.sort((firstItem, secondItem) => secondItem.score - firstItem.score );

  for (var i = 0; i < highscores.length; i++) {
    // create li tag for each high score
    var liTag = document.createElement('li');
    liTag.textContent = highscores[i].initials + ' - ' + highscores[i].score;

    // display on page
    var olEl = document.getElementById('highscores');
    olEl.appendChild(liTag);
  }
}

function clearHighscores() {
  var highscores = [];
  localStorage.setItem("highscores", JSON.stringify(highscores))
  window.location.reload();
}

document.getElementById('clear').onclick = clearHighscores;