import readlineSync from 'readline-sync';

import welcomingFunc, { userName } from './cli.js';

welcomingFunc();
console.log('Answer "yes" if the number is even, otherwise answer "no".');

function firstResult() {
  const que = 'Question: ';
  const randomNum = Math.floor(Math.random() * 100);
  console.log(que + randomNum);
  const userAnswer = readlineSync.question('Your answer: ');
  let corAnswer = '';
  if (randomNum % 2 === 0) {
    corAnswer = 'yes';
  }
  if (randomNum % 2 !== 0) {
    corAnswer = 'no';
  }
  if (userAnswer === corAnswer) {
    console.log('Correct!');
  } else if (userAnswer !== corAnswer) {
    console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${corAnswer}`);
  }
}
function whi() {
  for (let i = 0; i < 3; i += 1) {
    firstResult();
  }
  return console.log(`Congratulations, ${userName}!`);
}

export default whi;
