const common = require('./common.js');

const stdin = process.stdin;
stdin.setRawMode(true);
stdin.resume();
stdin.setEncoding('utf8');

// player 1 starter position
let playerX = 1;
let playerY = 1;
// player 2 starter position
let player2X = 11;
let player2Y = 23;
// com1 starter position
let com1X = 1;
let com1Y = 23;

// If 'q' is pressed, exit the program.
const keyProcessor = (key) => {
  if (key === 'q') {
    process.exit(0);
  }
  // If it's a bomb (9 is bomb) at player's position, then it remain a bomb, and the player move up, if there is a free space.
  if (key === '\u0077' && playerX > 1 && smallMap[playerX - 1][playerY] === 0 && smallMap[playerX][playerY] === 9) {
    // console.clear();
    smallMap[playerX][playerY] = 9;
    playerX--;
    smallMap[playerX][playerY] = 'X';
    // common.print(common.largeMapGen(smallMap));
  } else {
    // If there isn't a bomb (9 is bomb) at player's position and there is a free space, the player move up,
    if (key === '\u0077' && playerX > 1 && smallMap[playerX - 1][playerY] === 0 && smallMap[playerX][playerY] !== 9) {
      // console.clear();
      smallMap[playerX][playerY] = 0;
      playerX--;
      smallMap[playerX][playerY] = 'X';
      // common.print(common.largeMapGen(smallMap));
    }
  }
  if (key === '\u0073' && playerX < smallMap.length - 2 && smallMap[playerX + 1][playerY] === 0 && smallMap[playerX][playerY] === 9) {
    // console.clear();
    smallMap[playerX][playerY] = 9;
    playerX++;
    smallMap[playerX][playerY] = 'X';
    // common.print(common.largeMapGen(smallMap));
  } else {
    if (key === '\u0073' && playerX < smallMap.length - 2 && smallMap[playerX + 1][playerY] === 0 && smallMap[playerX][playerY] !== 9) {
      // console.clear();
      smallMap[playerX][playerY] = 0;
      playerX++;
      smallMap[playerX][playerY] = 'X';
      // common.print(common.largeMapGen(smallMap));
    }
  }
  if (key === '\u0061' && playerY > 1 && smallMap[playerX][playerY - 1] === 0 && smallMap[playerX][playerY] === 9) {
    // console.clear();
    smallMap[playerX][playerY] = 9;
    playerY--;
    smallMap[playerX][playerY] = 'X';
    // common.print(common.largeMapGen(smallMap));
  } else {
    if (key === '\u0061' && playerY > 1 && smallMap[playerX][playerY - 1] === 0 && smallMap[playerX][playerY] !== 9) {
      // console.clear();
      smallMap[playerX][playerY] = 0;
      playerY--;
      smallMap[playerX][playerY] = 'X';
      // common.print(common.largeMapGen(smallMap));
    }
  }
  if (key === '\u0064' && playerY < smallMap[0].length - 2 && smallMap[playerX][playerY + 1] === 0 && smallMap[playerX][playerY] === 9) {
    // console.clear();
    smallMap[playerX][playerY] = 9;
    playerY++;
    smallMap[playerX][playerY] = 'X';
    // common.print(common.largeMapGen(smallMap));
  } else {
    if (key === '\u0064' && playerY < smallMap[0].length - 2 && smallMap[playerX][playerY + 1] === 0 && smallMap[playerX][playerY] !== 9) {
      // console.clear();
      smallMap[playerX][playerY] = 0;
      playerY++;
      smallMap[playerX][playerY] = 'X';
      // common.print(common.largeMapGen(smallMap));
    }
  }
  if (key === '\u0038' && player2X > 1 && smallMap[player2X - 1][player2Y] === 0 && smallMap[player2X][player2Y] === 8) {
    // console.clear();
    smallMap[player2X][player2Y] = 8;
    player2X--;
    smallMap[player2X][player2Y] = 'Y';
    // common.print(common.largeMapGen(smallMap));
  } else {
    if (key === '\u0038' && player2X > 1 && smallMap[player2X - 1][player2Y] === 0 && smallMap[player2X][player2Y] !== 8) {
      // console.clear();
      smallMap[player2X][player2Y] = 0;
      player2X--;
      smallMap[player2X][player2Y] = 'Y';
      // common.print(common.largeMapGen(smallMap));
    }
  }
  if (key === '\u0035' && player2X < smallMap.length - 2 && smallMap[player2X + 1][player2Y] === 0 && smallMap[player2X][player2Y] === 8) {
    // console.clear();
    smallMap[player2X][player2Y] = 8;
    player2X++;
    smallMap[player2X][player2Y] = 'Y';
    // common.print(common.largeMapGen(smallMap));
  } else {
    if (key === '\u0035' && player2X < smallMap.length - 2 && smallMap[player2X + 1][player2Y] === 0 && smallMap[player2X][player2Y] !== 8) {
      // console.clear();
      smallMap[player2X][player2Y] = 0;
      player2X++;
      smallMap[player2X][player2Y] = 'Y';
      // common.print(common.largeMapGen(smallMap));
    }
  }
  if (key === '\u0034' && player2Y > 1 && smallMap[player2X][player2Y - 1] === 0 && smallMap[player2X][player2Y] === 8) {
    // console.clear();
    smallMap[player2X][player2Y] = 8;
    player2Y--;
    smallMap[player2X][player2Y] = 'Y';
    // common.print(common.largeMapGen(smallMap));
  } else {
    if (key === '\u0034' && player2Y > 1 && smallMap[player2X][player2Y - 1] === 0 && smallMap[player2X][player2Y] !== 8) {
      // console.clear();
      smallMap[player2X][player2Y] = 0;
      player2Y--;
      smallMap[player2X][player2Y] = 'Y';
      // common.print(common.largeMapGen(smallMap));
    }
  }
  if (key === '\u0036' && player2Y < smallMap[0].length - 2 && smallMap[player2X][player2Y + 1] === 0 && smallMap[player2X][player2Y] === 8) {
    // console.clear();
    smallMap[player2X][player2Y] = 8;
    player2Y++;
    smallMap[player2X][player2Y] = 'Y';
    // common.print(common.largeMapGen(smallMap));
  } else {
    if (key === '\u0036' && player2Y < smallMap[0].length - 2 && smallMap[player2X][player2Y + 1] === 0 && smallMap[player2X][player2Y] !== 8) {
      // console.clear();
      smallMap[player2X][player2Y] = 0;
      player2Y++;
      smallMap[player2X][player2Y] = 'Y';
      // smallMap[com1X - 1][com1Y] === 0common.print(common.largeMapGen(smallMap));
    }
  }
  // If 'f' key pressed, then player 1 plant a bomb.
  if (key === 'f') {
    placeBombPlayer1();
  }
  // If '0' key pressed, then player 2 plant a bomb.
  if (key === '\u0030') {
    placeBombPlayer2();
  }
};
stdin.on('data', keyProcessor);
let smallMap = common.smallMap;
smallMap = common.generatedMap(smallMap);
let board = common.largeMapGen(smallMap);

let i = 1;
setTimeout(function run() {
  common.print(common.largeMapGen(smallMap));
  i++;
  setTimeout(run, 100);
}, 100);

// Bomb in minimap is 9.
let bomb1 = 9;
let bomb2 = 8;
let bomb3 = 'B';
// Number of player 1 & 2 bombs
let player1bomb = 100;
let player2bomb = 100;
let bot1Bomb = 100;
// This function remove the explosion from the map.
const removeExplosion = () => {
  for (let i = 0; i < smallMap.length; i++) {
    for (let j = 0; j < smallMap[i].length; j++) {
      if (smallMap[i][j] === '*') {
        smallMap[i][j] = 0;
      }
    }
  }
};

const removeExplosion2 = () => {
  for (let i = 0; i < smallMap.length; i++) {
    for (let j = 0; j < smallMap[i].length; j++) {
      if (smallMap[i][j] === '#') {
        smallMap[i][j] = 0;
      }
    }
  }
};

const removeExplosion3 = () => {
  for (let i = 0; i < smallMap.length; i++) {
    for (let j = 0; j < smallMap[i].length; j++) {
      if (smallMap[i][j] === '+') {
        smallMap[i][j] = 0;
      }
    }
  }
};

// Plant a bomb at player 1 position, then activate the countdown function.
const placeBombPlayer1 = () => {
  if (player1bomb > 0) {
    smallMap[playerX][playerY] = bomb1;
    player1bomb--;
    setTimeout(common.explode1, 2500);
    setTimeout(removeExplosion, 4000);
  }
};


// Plant a bomb at player 2 position, then activate the countdown function.
const placeBombPlayer2 = () => {
  if (player2bomb > 0) {
    smallMap[player2X][player2Y] = bomb2;
    player2bomb--;
    setTimeout(common.explode2, 2500);
    setTimeout(removeExplosion2, 4000);
  }
};

const placeBombBot1 = () => {
  if (bot1Bomb > 0) {
    smallMap[com1X][com1Y] = bomb3;
    bot1Bomb--;
    setTimeout(common.explode3, 2500);
    setTimeout(removeExplosion3, 4000);
  }
};

const up = () => {
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


