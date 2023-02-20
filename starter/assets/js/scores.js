const highScoresList = document.querySelector('#highscores');
const highScores = JSON.parse(localStorage.getItem('highScores') || '[]');
const clearButton = document.querySelector('#clear');


function renderHighScores() {
    highScoresList.innerHTML = highScores
    .sort((a, b) => b.score - a.score)
    .map(score => `<li>${score.initials} - ${score.score}</li>`)
    .join('');
}

renderHighScores();
clearButton.addEventListener('click', function() {
    localStorage.clear();
    highScores.innerHTML = '';
});