const playerFinalScore= localStorage.getItem('playerFinalScore');
console.log(playerFinalScore)
 // Displays score at end of quiz
 scoreDisplay.innerText = `You scored ${playerFinalScore} of 10!`;
