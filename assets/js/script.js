// Declaring variables
const startButton = document.getElementById('start-button');
const startArea = document.getElementById('start');
const quizArea = document.getElementById('quiz-area');
const questionText = document.getElementById('question-text');
const answerButtons = document.getElementsByClassName('choices');
const nextButton = document.getElementById('next');

// Show quiz area and hide start button
function unhideQuiz() {
    quizArea.classList.remove('hide')
    quizArea.classList.add('flex')
    startArea.classList.add('hide')
    startButton.classList.add('hide')
}

startButton.addEventListener('click', unhideQuiz);

// Get Question 
let currentQuestion = 0;
var score = 0;

let questions = [
    {
        question: 'What is a bund?',
        alternatives: ['A Secondary Enclosure', 'A Gathering', 'Office Furniture', 'A Car'],
        correctAnswer: 1
    },
    {
        question: 'What is the maximum length of time a bund should be left unserviced?',
        alternatives: ['6 months', '1 year', '3 years', '5 years'],
        correctAnswer: 3
    },
]
console.log(questions.question)

// Displays first question and answers after clicking start button

function showQuiz() {
    questionText.textContent = questions[0].question;
    answerButtons[0].textContent = questions[0].alternatives[0];
    answerButtons[1].textContent = questions[0].alternatives[1];
    answerButtons[2].textContent = questions[0].alternatives[2];
    answerButtons[3].textContent = questions[0].alternatives[3];
}

startButton.addEventListener('click', showQuiz);

