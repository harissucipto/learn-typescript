type DiceValue = 1 | 2 | 3 | 4 | 5 | 6;

function rollDice() {
  return (Math.floor(Math.random() * 6) + 1) as DiceValue;
}

// the code below will run type cheker and throw error because rollDice() returns number
// if (rollDice() === 7) {
//   console.log("You rolled a 1");
// }
