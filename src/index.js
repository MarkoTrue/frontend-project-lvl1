import readlineSync from 'readline-sync';

const numberofGames = 3;

function gameLogic(gameRules, createGameQuestionAnswer) {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello ${userName}!`);
  console.log(gameRules);
  for (let i = 0; i < numberofGames; i += 1) {
    const [gameQuestion, gameAnswer] = createGameQuestionAnswer();
    console.log(`Question: ${gameQuestion}`);
    const yourAnswer = readlineSync.question('Your asnwer: ');
    if (yourAnswer !== gameAnswer) {
      console.log(`${yourAnswer} is  wrong answer ;(. Correct answer is ${gameAnswer}`);
      console.log(`Let's try again, ${userName}`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
}
export default gameLogic;
