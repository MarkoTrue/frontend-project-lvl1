import readlineSync from 'readline-sync';
var userName;

const welcomingFunc = () => {
  console.log('Welcome to the Brain Games!');
  userName = readlineSync.question('May I have your name?');
  console.log ('Hello ' + userName + '!');
};
export default welcomingFunc; 

export { userName };

