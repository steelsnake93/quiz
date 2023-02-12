// Define global variables
const startButton = document.querySelector("#start");
const timerElement = document.querySelector("#time");
const startScreen = document.querySelector("#start-screen");
const questionsDiv = document.querySelector("#questions");
// Define an array of objects representing questions and possible answers

// Function to start the quiz
function startQuiz() {

};

// Function to display the current question and answers
function getQuestion() {
    questionTitle.innerHTML = questions[i].question;
    choicesDiv.innerHTML = "";
};
// Function to handle a user clicking an answer button

// Function to end the quiz
function endQuiz() {
    console.log(answers);
};
// Function to update the timer display
function startTimer() {
    let timeLeft = 60;
    const timer = setInterval(function() {
        if (timeLeft > 0) {
            timeLeft--;
        } else {
            clearInterval(timer);
        }
    }, 1000);
};
// Function to save high score

// Define the event listeners

// Start button listener to call startQuiz function
startButton.addEventListener('click', startTimer);
// Answer button listener to call handleAnswerClick function

// Call the startQuiz function to begin the quiz