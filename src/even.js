import readlineSync from 'readline-sync';

const textOfRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const requestEven = (name) => {
  console.log(textOfRules);
  for (let i = 1; i <= 3; i += 1) {
    const expression = Math.round(Math.random() * 100);
    console.log(`Question: ${expression}`);
    const correctAnsw = (expression % 2 === 0) ? 'yes' : 'no';
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnsw) {
      console.log('Correct!');
    } else {
      return (`Let's try again, ${name}!`);
    }
  }

  return `Congratulations, ${name}!`;
};

export default requestEven;
