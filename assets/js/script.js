// Declaring variables
const startButton = document.getElementById('start');
const quizArea = document.getElementById('quiz-area');
const question = document.getElementById('question');
const answerBtns = document.getElementsByClassName('choices');
const nextButton = document.getElementById('next');

// Show quiz area and hide start button
function unhideQuiz() {
    quizArea.classList.remove('hide')
    quizArea.classList.add('flex')
    startButton.classList.add('hide')
}

startButton.addEventListener('click', unhideQuiz);

// Get Question 
let questions = [
    {
        question: 'What is a bund?',
        choice1: 'A Car',
        choice2: 'Office Furniture',
        choice3: 'A Gathering',
        choice4: 'A Secondary Enclosure',
        answer: 4, 
    },
    {
        question: 'What is the maximum length of time a bund should be left unserviced?',
        choice1: '5 years',
        choice2: '3 years',
        choice3: '1 year',
        choice4: '6 months',
        answer: 2, 
    },
]

