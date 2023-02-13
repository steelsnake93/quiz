// Define global variables
const startButton = document.querySelector("#start");
const timerElement = document.querySelector("#time");
const startScreen = document.querySelector("#start-screen");
const questionsDiv = document.querySelector("#questions");
// Define an array of objects representing questions and possible answers

// Function to start the quiz
function startQuiz() {
    startScreen.classList.add("hide");
    questionsDiv.classList.remove("hide");
    startTimer();
    getQuestion();
    console.log("Quiz started!");
};

// Function to display the current question and answers
let i = 0;
function getQuestion() {
    const question = questions[i].question;
    const answers = questions[i].answers;
    questionsDiv.textContent = question;
    for (let j = 0; j < answers.length; j++) {
        const button = document.createElement("button");
        button.textContent = answers[j];
        button.classList.add("btn");
        button.setAttribute("data-index", j);
        // button.addEventListener("click", handleAnswerClick);
        questionsDiv.appendChild(button);
    }
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
            timerElement.textContent = timeLeft;
        } else {
            clearInterval(timer);
        }
    }, 1000);
};
// Function to save high score

// Define the event listeners

// Start button listener to call startQuiz function
startButton.addEventListener("click", startQuiz);
// Answer button listener to call handleAnswerClick function

// Call the startQuiz function to begin the quiz