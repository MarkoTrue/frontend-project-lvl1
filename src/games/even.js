import gameLogic from '../index.js';
import randomNum from '../getRandom.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => (number % 2 === 0);
function createGameQuestionAnswer() {
  const gameQuestion = randomNum(1, 100);
  const gameAnswer = isEven(gameQuestion) ? 'yes' : 'no';
  return [gameQuestion, gameAnswer];
}
const startGameEven = () => gameLogic(gameRules, createGameQuestionAnswer);

export default startGameEven;

export { isEven };
