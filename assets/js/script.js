/* Declaring variables */
const startButton = document.getElementById('start');
const quizArea = document.getElementById('quiz-area');
const question = document.getElementById('question');
const answerBtns = document.getElementsByClassName('buttons');

function unhideQuiz() {
    quizArea.classList.remove('hide')
    startButton.classList.add('hide')
}

startButton.addEventListener('click', unhideQuiz);
