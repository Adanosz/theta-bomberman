const common = require('./common.js');
const arrays = require('./arrays.js');


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

// If 'q' is pressed, exit the program.
const keyProcessor = (key) => {
  if (key === 'q') {
    process.exit(0);
  }
  // If it's a bomb (9 is bomb) at player's position, then it remain a bomb, and the player move up, if there is a free space.
  if (key === 'w' && playerX > 1 && arrays.smallMap[playerX - 1][playerY] === 0 && arrays.smallMap[playerX][playerY] === 9) {
    arrays.smallMap[playerX][playerY] = 9;
    playerX--;
    arrays.smallMap[playerX][playerY] = 'X';
  } else {
    // If there isn't a bomb (9 is bomb) at player's position and there is a free space, the player move up,
    if (key === 'w' && playerX > 1 && arrays.smallMap[playerX - 1][playerY] === 0 && arrays.smallMap[playerX][playerY] !== 9) {
      arrays.smallMap[playerX][playerY] = 0;
      playerX--;
      arrays.smallMap[playerX][playerY] = 'X';
    }
  }
  if (key === 's' && playerX < arrays.smallMap.length - 2 && arrays.smallMap[playerX + 1][playerY] === 0 && arrays.smallMap[playerX][playerY] === 9) {
    arrays.smallMap[playerX][playerY] = 9;
    playerX++;
    arrays.smallMap[playerX][playerY] = 'X';
  } else {
    if (key === 's' && playerX < arrays.smallMap.length - 2 && arrays.smallMap[playerX + 1][playerY] === 0 && arrays.smallMap[playerX][playerY] !== 9) {
      arrays.smallMap[playerX][playerY] = 0;
      playerX++;
      arrays.smallMap[playerX][playerY] = 'X';
    }
  }
  if (key === 'a' && playerY > 1 && arrays.smallMap[playerX][playerY - 1] === 0 && arrays.smallMap[playerX][playerY] === 9) {
    arrays.smallMap[playerX][playerY] = 9;
    playerY--;
    arrays.smallMap[playerX][playerY] = 'X';
  } else {
    if (key === 'a' && playerY > 1 && arrays.smallMap[playerX][playerY - 1] === 0 && arrays.smallMap[playerX][playerY] !== 9) {
      arrays.smallMap[playerX][playerY] = 0;
      playerY--;
      arrays.smallMap[playerX][playerY] = 'X';
    }
  }
  if (key === 'd' && playerY < arrays.smallMap[0].length - 2 && arrays.smallMap[playerX][playerY + 1] === 0 && arrays.smallMap[playerX][playerY] === 9) {
    arrays.smallMap[playerX][playerY] = 9;
    playerY++;
    arrays.smallMap[playerX][playerY] = 'X';
  } else {
    if (key === 'd' && playerY < arrays.smallMap[0].length - 2 && arrays.smallMap[playerX][playerY + 1] === 0 && arrays.smallMap[playerX][playerY] !== 9) {
      arrays.smallMap[playerX][playerY] = 0;
      playerY++;
      arrays.smallMap[playerX][playerY] = 'X';
    }
  }
  if (key === '8' && player2X > 1 && arrays.smallMap[player2X - 1][player2Y] === 0 && arrays.smallMap[player2X][player2Y] === 8) {
    arrays.smallMap[player2X][player2Y] = 8;
    player2X--;
    arrays.smallMap[player2X][player2Y] = 'Y';
  } else {
    if (key === '8' && player2X > 1 && arrays.smallMap[player2X - 1][player2Y] === 0 && arrays.smallMap[player2X][player2Y] !== 8) {
      arrays.smallMap[player2X][player2Y] = 0;
      player2X--;
      arrays.smallMap[player2X][player2Y] = 'Y';
    }
  }
  if (key === '5' && player2X < arrays.smallMap.length - 2 && arrays.smallMap[player2X + 1][player2Y] === 0 && arrays.smallMap[player2X][player2Y] === 8) {
    arrays.smallMap[player2X][player2Y] = 8;
    player2X++;
    arrays.smallMap[player2X][player2Y] = 'Y';
  } else {
    if (key === '5' && player2X < arrays.smallMap.length - 2 && arrays.smallMap[player2X + 1][player2Y] === 0 && arrays.smallMap[player2X][player2Y] !== 8) {
      arrays.smallMap[player2X][player2Y] = 0;
      player2X++;
      arrays.smallMap[player2X][player2Y] = 'Y';
    }
  }
  if (key === '4' && player2Y > 1 && arrays.smallMap[player2X][player2Y - 1] === 0 && arrays.smallMap[player2X][player2Y] === 8) {
    arrays.smallMap[player2X][player2Y] = 8;
    player2Y--;
    arrays.smallMap[player2X][player2Y] = 'Y';
  } else {
    if (key === '4' && player2Y > 1 && arrays.smallMap[player2X][player2Y - 1] === 0 && arrays.smallMap[player2X][player2Y] !== 8) {
      arrays.smallMap[player2X][player2Y] = 0;
      player2Y--;
      arrays.smallMap[player2X][player2Y] = 'Y';
    }
  }
  if (key === '6' && player2Y < arrays.smallMap[0].length - 2 && arrays.smallMap[player2X][player2Y + 1] === 0 && arrays.smallMap[player2X][player2Y] === 8) {
    arrays.smallMap[player2X][player2Y] = 8;
    player2Y++;
    arrays.smallMap[player2X][player2Y] = 'Y';
  } else {
    if (key === '6' && player2Y < arrays.smallMap[0].length - 2 && arrays.smallMap[player2X][player2Y + 1] === 0 && arrays.smallMap[player2X][player2Y] !== 8) {
      arrays.smallMap[player2X][player2Y] = 0;
      player2Y++;
      arrays.smallMap[player2X][player2Y] = 'Y';
    }
  }
  // If 'f' key pressed, then player 1 plant a bomb.
  if (key === 'f') {
    placeBombPlayer1();
  }
  // If '0' key pressed, then player 2 plant a bomb.
  if (key === '0') {
    placeBombPlayer2();
  }
};
stdin.on('data', keyProcessor);
let smallMap = arrays.smallMap;
arrays.smallMap = common.generatedMap(arrays.smallMap);
let board = common.largeMapGen(arrays.smallMap);

let i = 1;
setTimeout(function run () {
  common.print(common.largeMapGen(arrays.smallMap));
  i++;
  setTimeout(run, 100);
}, 100);

// Bomb in minimap is 9.
let bomb1 = 9;
let bomb2 = 8;

// Number of player 1 & 2 bombs
let player1bomb = 100;
let player2bomb = 100;

// This function remove the explosion from the map.
const removeExplosion = () => {
  for (let i = 0; i < arrays.smallMap.length; i++) {
    for (let j = 0; j < arrays.smallMap[i].length; j++) {
      if (arrays.smallMap[i][j] === '*') {
        arrays.smallMap[i][j] = 0;
      }
    }
  }
};

const removeExplosion2 = () => {
  for (let i = 0; i < arrays.smallMap.length; i++) {
    for (let j = 0; j < arrays.smallMap[i].length; j++) {
      if (arrays.smallMap[i][j] === '#') {
        arrays.smallMap[i][j] = 0;
      }
    }
  }
};

// Plant a bomb at player 1 position, then activate the countdown function.
const placeBombPlayer1 = () => {
  if (player1bomb > 0) {
    arrays.smallMap[playerX][playerY] = bomb1;
    player1bomb--;
    setTimeout(common.explode1, 2500);
    setTimeout(removeExplosion, 4000);
  }
};


// Plant a bomb at player 2 position, then activate the countdown function.
const placeBombPlayer2 = () => {
  if (player2bomb > 0) {
    arrays.smallMap[player2X][player2Y] = bomb2;
    player2bomb--;
    setTimeout(common.explode2, 2500);
    setTimeout(removeExplosion2, 4000);
  }
};