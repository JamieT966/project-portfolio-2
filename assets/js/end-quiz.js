const playerFinalScore= localStorage.getItem('playerFinalScore');
const resultShow = document.getElementById('result')
 // Displays score at end of quiz


if(playerFinalScore < 5) {
    resultShow.innerText = `You scored ${playerFinalScore} of 10! Needs improvement! Please click restart`;
} else {
    resultShow.innerText = `You scored ${playerFinalScore} of 10! Good work!`;
}