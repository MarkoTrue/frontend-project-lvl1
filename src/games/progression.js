import gameLogic from '../index.js';

import randomNum from '../getRandom.js';

const gameRules = 'What number is missing in the progression?';
function progression() {
  const progres = [];
  progres.push(randomNum(1, 10));
  const step = randomNum(2, 5);
  for (let i = 0; i < 9; i += 1) {
    progres.push(progres[i] + step);
  }
  return progres;
}
function createGameQuestionAnswer() {
  const gameQuestion = progression();
  const randomElement = randomNum(1, 9);
  const gameAnswer = gameQuestion.splice(randomElement, 1, '..');
  return [gameQuestion.join(' '), String(gameAnswer)];
}
const startGameProgres = () => gameLogic(gameRules, createGameQuestionAnswer);

export default startGameProgres;
