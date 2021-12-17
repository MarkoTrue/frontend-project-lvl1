import gameLogic from '../index.js';

import randomNum from '../getRandom.js';

const gameRules = 'What is the result of the expression?';
const operators = ['+', '-', '*'];
const makeCount = (number1, number2, operator) => {
  switch (operators) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`Operation ${operator} is not supported.`);
  }
};

function createGameQuestionAnswer() {
  const randomNum1 = randomNum(1, 100);
  const randomNum2 = randomNum(1, 100);
  const randomOperator = operators[randomNum(0, 2)];
  const gameQuestion = `${randomNum1} ${randomOperator} ${randomNum2}`;
  const gameAnswer = String(makeCount(randomNum1, randomNum2, randomOperator));
  return [gameQuestion, gameAnswer];
}
const startGameCalc = () => gameLogic(gameRules, createGameQuestionAnswer);

export default startGameCalc;
