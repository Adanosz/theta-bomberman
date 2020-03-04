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
        console.log(smallMap);
      }
    }
  }
};

module.exports = {
  boosters
};
