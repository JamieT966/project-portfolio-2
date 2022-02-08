// Declaring variables
const startButton = document.getElementById('start-button');
const startArea = document.getElementById('start');
const quizArea = document.getElementById('quiz-area');
const questionText = document.getElementById('question-text');
const answerButtons = Array.from(document.getElementsByClassName('choices'));
const nextButton = document.getElementById('next-button');
const answerOne = document.getElementById('answer1');


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
        choice1: 'A Secondary Enclosure', 
        choice2: 'A Gathering', 
        choice3: 'Office Furniture', 
        choice4: 'A Car',
        answer: 1
    },
    {
        question: 'What is the maximum length of time a bund should be left unserviced?',
        choice1: '6 months', 
        choice2: '1 year', 
        choice3: '3 years', 
        choice4: '5 years',
        answer: 3
    },
]

// Displays first question and answers after clicking start button

    let questionNumber = 0;

function showQuiz() {
    
    questionText.textContent = questions[questionNumber].question;
    answerButtons[0].textContent = questions[questionNumber].choice1;
    answerButtons[1].textContent = questions[questionNumber].choice2;
    answerButtons[2].textContent = questions[questionNumber].choice3;
    answerButtons[3].textContent = questions[questionNumber].choice4;
}

// Increments questionNumber, allowing user to change set of questions when next is clicked

function nextQuestion() {
    showQuiz(questionNumber++);
}

startButton.addEventListener('click', showQuiz);
nextButton.addEventListener('click', nextQuestion);

// Checks answer, button turns green if correct and red if incorrect

answerButtons.forEach(button => button.addEventListener('click', () => {
    let theData = button.dataset.choice;
    testPassingData(theData, button)
}))

function testPassingData(usersChoice, button) {
    if (usersChoice == questions[0].answer) {
    button.classList.add('correct')
} else {
    button.classList.add('incorrect')
}
}

/*
console.log(usersChoice)
console.log(questions[0].answer)
*/






