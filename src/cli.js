import readlineSync from 'readline-sync';

function welcomingFunc() {
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello ${userName}`);
}
export default welcomingFunc;
