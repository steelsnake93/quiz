// Define global variables
const startButton = document.querySelector("#start");
const timerElement = document.querySelector("#time");
const startScreen = document.querySelector("#start-screen");
const questionsDiv = document.querySelector("#questions");
timeLeft = 60;
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
        button.addEventListener("click", handleAnswerClick);
        questionsDiv.appendChild(button);
    }
};
// Function to handle a user clicking an answer button
function handleAnswerClick(event) {
    const selectedButton = event.target;
    const correctAnswer = questions[i].correct;
    const userAnswer = selectedButton.textContent;
    if (userAnswer === questions[i].answers[correctAnswer]) {
        timeLeft += 5;
        console.log('correct');
    } else {
        timeLeft -= 10;
        console.log('incorrect');
    }
    timerElement.textContent = timeLeft;
    if (i < questions.length - 1) {
        i++;
        getQuestion();
    } else {
        endQuiz();
    }
};
// Function to end the quiz
function endQuiz() {
    clearInterval(timer);
};
// Function to update the timer display
let timer;
function startTimer() {
    timer = setInterval(function() {
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
// choicesDiv.addEventListener('click', handleAnswerClick);
// Call the startQuiz function to begin the quiz