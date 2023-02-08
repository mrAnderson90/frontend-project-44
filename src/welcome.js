import readlineSync from 'readline-sync';

const text = 'May I have your name? ';

const userGreeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question(text);
  console.log(`Hello, ${name}!`);
  return name;
};

export default userGreeting;
