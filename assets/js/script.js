// Declaring variables
const startButton = document.getElementById('start');
const quizArea = document.getElementById('quiz-area');
const question = document.getElementById('question');
const answerBtns = document.getElementsByClassName('buttons');

// Show quiz area and hide start button
function unhideQuiz() {
    quizArea.classList.remove('hide')
    startButton.classList.add('hide')
}

startButton.addEventListener('click', unhideQuiz);

// Get Question 



const question = [
    {
        question: "What is a bund?"
        answers: [
            { text: 'A Secondary Enclosure' correct: true}
            { text: 'A Car', correct: false},
            { text: 'A Bottle' correct: false},
            { text: 'A Gathering' correct: false}
        ]
    },
    {question: "After what length of time should a bund be serviced?"
    answers: [
        { text: '3 years' correct: true}
        { text: '5 years', correct: false},
        { text: '1 year' correct: false},
        { text: '6 months' correct: false}
    ]}

]