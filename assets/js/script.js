// Declaring variables
const startButton = document.getElementById('start-button');
const startArea = document.getElementById('start');
const quizArea = document.getElementById('quiz-area');
const questionText = document.getElementById('question-text');
const choices = document.querySelectorAll('choices');
const answerButtons = Array.from(document.getElementsByClassName('choices'));
const nextButton = document.getElementById('next-button');
const restartButton = document.getElementById('restart-button');
const turn = document.getElementById('question-tracker');
const answerOne = document.getElementById('answer1');
const answerTwo = document.getElementById('answer2');
const answerThree = document.getElementById('answer3');
const answerFour = document.getElementById('answer4');
const scoreDisplay = document.getElementById('display-score');
const endScreen = document.getElementById('end-page');
let questionCounter = 0;
let questionProgress = 0;
var score = 0;
const MAX_QUESTIONS = 10;

/**
 * Function hides start area after start quiz button is clicked.
 * Unhides quiz area.
 */
function unhideQuiz() {
    quizArea.classList.remove('hide')
    quizArea.classList.add('flex')
    startArea.classList.add('hide')
    startButton.classList.add('hide')
}

// Get array of questions
let questions = [{
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
    {
        question: 'What is an employers duty under the Safety, Health & Welfare At Work Act?',
        choice1: 'Pay above minimum wage',
        choice2: 'Prevent exposure to dangerous chemicals',
        choice3: 'Turn up to work on time',
        choice4: 'Purchase you a company car',
        answer: 2
    },
    {
        question: 'What percentage of volumne must a bund be able to store?',
        choice1: '25%',
        choice2: '75%',
        choice3: '110%',
        choice4: '150%',
        answer: 3
    },
    {
        question: 'What item would you typically find in a spill kit?',
        choice1: 'Condiments',
        choice2: 'Chemicals',
        choice3: 'Bandages',
        choice4: 'Spill socks',
        answer: 4
    },
    {
        question: 'What Chemstore product would you use to store a corrosive chemical?',
        choice1: 'Firevault',
        choice2: 'Gasvault',
        choice3: 'Corvault',
        choice4: 'Hazvault',
        answer: 3
    },
    {
        question: 'What should you do in the event of a major fire?',
        choice1: 'Call 999',
        choice2: 'Try to put it out yourself',
        choice3: 'Just leave it',
        choice4: 'Panic',
        answer: 1
    },
    {
        question: 'Which of these is NOT an entry route for chemicals into the body?',
        choice1: 'Inhalation',
        choice2: 'Viewing',
        choice3: 'Absorption',
        choice4: 'Ingestion',
        answer: 2
    },
    {
        question: 'If a chemical is said to be carcinogenic, what does that mean?',
        choice1: 'Causes cancer',
        choice2: 'Causes adverse health effects',
        choice3: 'Causes severe irritation',
        choice4: 'Causes genetic mutation',
        answer: 1
    },
    {
        question: 'What does an SDS stand for?',
        choice1: 'Solid Drive State',
        choice2: 'Secure Device Safety',
        choice3: 'Safety Data Sheet',
        choice4: 'Safety Demonstration Slide',
        answer: 3
    },
]

/**
 * Renders question into question text area.
 * Renders choices for answers, 4 for each question.
 */
function showQuiz() {
    questionText.textContent = questions[questionCounter].question;
    answerButtons[0].textContent = questions[questionCounter].choice1;
    answerButtons[1].textContent = questions[questionCounter].choice2;
    answerButtons[2].textContent = questions[questionCounter].choice3;
    answerButtons[3].textContent = questions[questionCounter].choice4;
    questionProgress++

    // Displays current question user is on
    turn.innerText = `Question ${questionProgress} of 10`;
    // Takes user to end-quiz.html
    endQuiz();
}

/**
 * Increments questionCounter, allowing user to change set of questions when next is clicked.
 */
function nextQuestion() {
    showQuiz(questionCounter++);
    resetChoice();
    resetChoice();
    questionText.style.color = '#ffffff';
}

/**
 * Restarts quiz by returning user to index.html.
 */
function restartQuiz() {
    return location.assign("index.html")
}

/**
 * Checks answer, button turns green if correct and red if incorrect.
 * Then increments score.
 * Also changes question text to a correct or incorrect answer based on choice.
 */
answerButtons.forEach(button => button.addEventListener('click', () => {
    let theData = button.dataset.choice;
    testPassingData(theData, button)
}))

function testPassingData(usersChoice, button) {
    if (usersChoice == questions[questionCounter].answer) {
        button.classList.toggle('correct')
        // Increments score for correct answer
        score++
        // Disables other buttons from being selected
        disableChoice()
        // Changes question text to correct message
        questionText.innerText = "Well done, you got that question right!";
        questionText.style.color = "#98c244";
    } else {
        button.classList.toggle('incorrect')
        // Disables other buttons from being selected
        disableChoice()
        // Changes question text to incorrect message
        questionText.innerText = "Unlucky, that answer was wrong.";
        questionText.style.color = "#e6554d";
    }
}
/**
 * Disables all other buttons when choice has been made to avoid multiple guesses.
 */
function disableChoice() {
    answerButtons[0].classList.add('button-disable')
    answerButtons[0].classList.remove(':hover')
    answerButtons[1].classList.add('button-disable')
    answerButtons[1].classList.remove(':hover')
    answerButtons[2].classList.add('button-disable')
    answerButtons[2].classList.remove(':hover')
    answerButtons[3].classList.add('button-disable')
    answerButtons[3].classList.remove(':hover')
}
/**
 * Resets all choice buttons when next button is clicked.
 */
function resetChoice() {
    answerButtons[0].classList.remove('button-disable')
    answerButtons[0].classList.add(':hover')
    answerButtons[1].classList.remove('button-disable')
    answerButtons[1].classList.add(':hover')
    answerButtons[2].classList.remove('button-disable')
    answerButtons[2].classList.add(':hover')
    answerButtons[3].classList.remove('button-disable')
    answerButtons[3].classList.add(':hover')
}
/**
 * Clears colour change on correct or incorrect answers.
 */
function clearAnswer() {
    answerOne.classList.remove('correct')
    answerOne.classList.remove('incorrect')
    answerTwo.classList.remove('correct')
    answerTwo.classList.remove('incorrect')
    answerThree.classList.remove('correct')
    answerThree.classList.remove('incorrect')
    answerFour.classList.remove('correct')
    answerFour.classList.remove('incorrect')
}
/**
 * Checks if question progress is equal to max questions i.e, does 10 = 10. If yes run endPage function
 */
function endQuiz() {
    if (questionProgress === MAX_QUESTIONS) {
        nextButton.addEventListener('click', endPage)
    }
}
/**
 * Takes user's current score and stores locally to move to end-quiz.js.
 * Automatically directs user to end quiz/ results page
 */
function endPage() {
    localStorage.setItem("playerFinalScore", score);
    return location.assign("end-quiz.html")
}

/**
 *  Entire modal structure taken from W3 Schools
 */
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

function modalBtn() {
    modal.style.display = "block";
}

function modalSpan() {
    modal.style.display = "none";
}

function modalWindow(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}