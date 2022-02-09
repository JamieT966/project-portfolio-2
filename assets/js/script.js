// Declaring variables
const startButton = document.getElementById('start-button');
const startArea = document.getElementById('start');
const quizArea = document.getElementById('quiz-area');
const questionText = document.getElementById('question-text');
const answerButtons = Array.from(document.getElementsByClassName('choices'));
const nextButton = document.getElementById('next-button');
const turn = document.getElementById('question-tracker');
let questionCounter = 0;
let questionProgress = 0;
const MAX_QUESTIONS = 10;

// Show quiz area and hide start button
function unhideQuiz() {
    quizArea.classList.remove('hide')
    quizArea.classList.add('flex')
    startArea.classList.add('hide')
    startButton.classList.add('hide')
}

startButton.addEventListener('click', unhideQuiz);

// Get Question 

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
        question: 'What is the maximum length of time a bund should be left unserviced?',
        choice1: '6 months', 
        choice2: '1 year', 
        choice3: '3 years', 
        choice4: '5 years',
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

// Displays first question and answers after clicking start button

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

// Increments questionCounter, allowing user to change set of questions when next is clicked

function nextQuestion() {
    showQuiz(questionCounter++);
}

startButton.addEventListener('click', showQuiz);
nextButton.addEventListener('click', nextQuestion);

// Checks answer, button turns green if correct and red if incorrect

answerButtons.forEach(button => button.addEventListener('click', () => {
    let theData = button.dataset.choice;
    testPassingData(theData, button)
}))

function testPassingData(usersChoice, button) {
    if (usersChoice == questions[questionCounter].answer) {
    button.classList.add('correct')
} else {
    button.classList.add('incorrect')
}
}

function endQuiz() {
    if (questionProgress === MAX_QUESTIONS) { 
       nextButton.addEventListener('click', endPage)
    }
}

function endPage() {
    return window.location.assign("/end-quiz.html")
}

//console.log(usersChoice == questions[questionCounter].answer)
