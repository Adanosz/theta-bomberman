let playerfire = 1;
let playerbomb = 1;
let playerlife = 1;
let player2fire = 1;
let player2bomb = 1;
let player2life = 1
const firepower = 4;
const plusBomb = 5;
const pushTheBomb = 6;
const extraLife = 7;
const chancePercentage = Math.random() * 100;

const boosters = (smallMap) => {
  for (let i = 0; i < smallMap.length; i++) {
    for (let j = 0; j < smallMap[i].length; j++) {
      if (smallMap[i][j] === 1 && chancePercentage < 30) {
        smallMap[i][j] = Math.floor(Math.random() * (7 - 4 + 1)) + 4;
        if (smallMap[i[j]] === 4) {
          fire++;
        } else if (smallMap[i[j]] === 5) {
          playerbomb++;
        } else (smallMap[i][j] === 7) {
          playerlife++;
        }
      }
    }
  }
};

module.exports = {
  boosters
};
