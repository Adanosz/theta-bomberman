const common = require('./common.js');
const arrays = require('./arrays.js');


let mpg = require('mpg123');
let player = new mpg.MpgPlayer();



const stdin = process.stdin;
stdin.setRawMode(true);
stdin.resume();
stdin.setEncoding('utf8');
stdin.on('data', common.keyProcessor);
let smallMap = arrays.smallMap;
arrays.smallMap = common.generatedMap(arrays.smallMap);



let menuArr = common.menuArrGen();
common.clearArr(menuArr);
arrays.boostersMap = common.boosterGenerator(smallMap);
common.print(common.menuFunc());


/*const up = () => {
  if (com1X > 1 && smallMap[com1X - 1][com1Y] === 0) {
    // console.clear();
    smallMap[com1X][com1Y] = 0;
    com1X--;
    smallMap[com1X][com1Y] = 'C';
    // common.print(common.largeMapGen(smallMap));
  } else {
    if (com1X > 1 && smallMap[com1X - 1][com1Y] === 0 && smallMap[com1X][com1Y] !== '+') {
      // console.clear();
      smallMap[com1X][com1Y] = 0;
      com1X--;
      smallMap[com1X][com1Y] = 'C';
    }
  }
};
const down = () => {
  if (com1X < smallMap.length - 2 && smallMap[com1X + 1][com1Y] === 0) {
    // console.clear();
    smallMap[com1X][com1Y] = 0;
    com1X++;
    smallMap[com1X][com1Y] = 'C';
    // common.print(common.largeMapGen(smallMap));
  } else {
    if (com1X < smallMap.length - 2 && smallMap[com1X + 1][com1Y] === 0 && smallMap[com1X][com1Y] !== '+') {
      // console.clear();
      smallMap[com1X][com1Y] = 0;
      com1X++;
      smallMap[com1X][com1Y] = 'C';
      // common.print(common.largeMapGen(smallMap));
    }
  }
};
const left = () => {
  if (com1Y > 1 && smallMap[com1X][com1Y - 1] === 0) {
    // console.clear();
    smallMap[com1X][com1Y] = 0;
    com1Y--;
    smallMap[com1X][com1Y] = 'C';
  } else {
    if (com1X > 1 && smallMap[com1X][com1Y - 1] === 0 && smallMap[com1X][com1Y] !== '+') {
      // console.clear();
      smallMap[com1X][com1Y] = 0;
      com1Y--;
      smallMap[com1X][com1Y] = 'C';
      // common.print(common.largeMapGen(smallMap));
    }
  }
};
const right = () => {
  if (com1Y > 1 && smallMap[com1X][com1Y + 1] === 0) {
    // console.clear();
    smallMap[com1X][com1Y] = 0;
    com1Y++;
    smallMap[com1X][com1Y] = 'C';
  }
  else {
    if (com1Y > 1 && smallMap[com1X][com1Y + 1] === 0 && smallMap[com1X][com1Y] !== '+') {
      // console.clear();
      smallMap[com1X][com1Y] = 0;
      com1Y++;
      smallMap[com1X][com1Y] = 'C';
      // smallMap[com1X - 1][com1Y] === 0common.print(common.largeMapGen(smallMap));
    }
  }
};



let bot1 = () => {
  let randomNumber = 1 + Math.round(Math.random() * 3)
  if (randomNumber === 3) {
    up();
  } else if (randomNumber === 2) {
    down();
  } else if (randomNumber === 1) {
    left();
  } else if (randomNumber === 4) {
    right();
  }
};



let k = 1;
setTimeout(function botmove() {
  bot1();
  setTimeout(placeBombBot1, 4000)
  setTimeout(botmove, 1000);
}, 1000);


*/
