// Declaring variables
const playerFinalScore = localStorage.getItem('playerFinalScore');
const resultShow = document.getElementById('result')
/**
 * Takes user's score and gives result and message.
 */
if (playerFinalScore < 5) {
    resultShow.innerText = `You scored ${playerFinalScore} of 10! Needs improvement! Please click restart.`;
} else {
    resultShow.innerText = `You scored ${playerFinalScore} of 10! Good work!`;
}