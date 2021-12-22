import gameLogic from '../index.js';

import randomNum from '../getRandom.js';

const gameRules = 'Find the greatest common divisor of given numbers.';
function divisor(a, b) {
  let result;
  const smallestNum = Math.min(a, b);
  for (let i = smallestNum; i > 0; i -= 1) {
    if (a % i === 0 && b % i === 0) {
      result = i;
      break;
    }
  }
  return result;
}

function createGameQuestionAnswer() {
  const randomNum1 = randomNum(1, 100);
  const randomNum2 = randomNum(1, 100);
  const gameQuestion = `${randomNum1} ${randomNum2}`;
  const gameAnswer = String(divisor(randomNum1, randomNum2));
  return [gameQuestion, gameAnswer];
}

const startGameDiv = () => gameLogic(gameRules, createGameQuestionAnswer);

export default startGameDiv;
