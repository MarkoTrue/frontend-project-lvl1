import gameLogic from '../index.js';

import randomNum from '../getRandom.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
function isPrime(num) {
  let result = true;
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      result = false;
      break;
    }
  }
  return result;
}
function createGameQuestionAnswer() {
  const gameQuestion = randomNum(3, 100);
  const gameAnswer = isPrime(gameQuestion) ? 'yes' : 'no';
  return [gameQuestion, gameAnswer];
}
const startGamePrime = () => gameLogic(gameRules, createGameQuestionAnswer);

export default startGamePrime;
