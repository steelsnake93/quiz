// Define global variables
const startButton = document.querySelector("#start");
const timerElement = document.querySelector("#time");
const startScreen = document.querySelector("#start-screen");
const setQuestion = document.querySelector("#question-title");
const setChoices = document.querySelector("#choices");
const questionsDiv = document.querySelector("#questions");
const endScreen = document.querySelector("#end-screen");
timeLeft = 60;
// Define an array of objects representing questions and possible answers

// Function to start the quiz
function startQuiz() {
    startScreen.classList.add("hide");
    questionsDiv.classList.remove("hide");
    startTimer();
    getQuestion();
};

// Function to display the current question and answers
let i = 0;
function getQuestion() {
    setQuestion.textContent = questions[i].question;
    setChoices.textContent = questions[i].choices;
    const answers = questions[i].answers;
    for (let j = 0; j < answers.length; j++) {
        const button = document.createElement("button");
        button.textContent = answers[j];
        button.classList.add("btn");
        button.setAttribute("data-index", j);
        button.addEventListener("click", handleAnswerClick);
        setChoices.appendChild(button);
    }
};
// Function to handle a user clicking an answer button
function handleAnswerClick(event) {
    const selectedButton = event.target;
    const correctAnswer = questions[i].correct;
    const userAnswer = selectedButton.textContent;
    const feedback = document.createElement('p');
    if (userAnswer === questions[i].answers[correctAnswer]) {
        feedback.textContent = 'Correct';
        timeLeft += 5;
    } else {
        feedback.textContent = 'Incorrect';
        timeLeft -= 10;
    }
    timerElement.textContent = timeLeft;

    const previousFeedback = questionsDiv.querySelector('p');
    if (previousFeedback) {
        questionsDiv.removeChild(previousFeedback);
    }
    questionsDiv.appendChild(feedback);
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
    questionsDiv.classList.add('hide');
    endScreen.classList.remove('hide');
    const finalScore = document.querySelector('#final-score');
    finalScore.textContent = timeLeft;
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