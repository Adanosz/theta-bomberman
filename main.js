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

  let playerXcanUp;
  let playerXcanDown;
  let playerXcanRight;
  let playerXcanLeft;

  if (playerX > 1 && arrays.smallMap[playerX - 1][playerY] === 0) { playerXcanUp = true }
  else { playerXcanUp = false };
  if (playerX < arrays.smallMap.length - 2 && arrays.smallMap[playerX + 1][playerY] === 0) { playerXcanDown = true }
  else { playerXcanDown = false };
  if (playerY > 1 && arrays.smallMap[playerX][playerY - 1] === 0) { playerXcanLeft = true }
  else { playerXcanLeft = false };
  if (playerY < arrays.smallMap[0].length - 2 && arrays.smallMap[playerX][playerY + 1] === 0) { playerXcanRight = true }
  else { playerXcanRight = false };

  let playerYcanUp;
  let playerYcanDown;
  let playerYcanRight;
  let playerYcanLeft;

  if (player2X > 1 && arrays.smallMap[player2X - 1][player2Y] === 0) { playerYcanUp = true }
  else { playerYcanUp = false };
  if (player2X < arrays.smallMap.length - 2 && arrays.smallMap[player2X + 1][player2Y] === 0) { playerYcanDown = true }
  else { playerYcanDown = false };
  if (player2Y > 1 && arrays.smallMap[player2X][player2Y - 1] === 0) { playerYcanLeft = true }
  else { playerYcanLeft = false };
  if (player2Y < arrays.smallMap[0].length - 2 && arrays.smallMap[player2X][player2Y + 1] === 0) { playerYcanRight = true }
  else { playerYcanRight = false };

  let playerXpositionValue = arrays.smallMap[playerX][playerY];
  let playerYpositionValue = arrays.smallMap[player2X][player2Y];

  if (key === 'q') {
    process.exit(0);
  }
  if (key === 'w' && playerXcanUp === true) {
    switch (playerXpositionValue === 9) {
      case true:
        arrays.smallMap[playerX][playerY] = 9;
        playerX--;
        arrays.smallMap[playerX][playerY] = 'X';
        break;
      case false:
        arrays.smallMap[playerX][playerY] = 0;
        playerX--;
        arrays.smallMap[playerX][playerY] = 'X';
        break;
    }
  }
  if (key === 's' && playerXcanDown === true) {
    switch (playerXpositionValue === 9) {
      case true:
        arrays.smallMap[playerX][playerY] = 9;
        playerX++;
        arrays.smallMap[playerX][playerY] = 'X';
        break;
      case false:
        arrays.smallMap[playerX][playerY] = 0;
        playerX++;
        arrays.smallMap[playerX][playerY] = 'X';
        break;
    }
  }
  if (key === 'a' && playerXcanLeft === true) {
    switch (playerXpositionValue === 9) {
      case true:
        arrays.smallMap[playerX][playerY] = 9;
        playerY--;
        arrays.smallMap[playerX][playerY] = 'X';
        break;
      case false:
        arrays.smallMap[playerX][playerY] = 0;
        playerY--;
        arrays.smallMap[playerX][playerY] = 'X';
        break;
    }
  }
  if (key === 'd' && playerXcanRight === true) {
    switch (playerXpositionValue === 9) {
      case true:
        arrays.smallMap[playerX][playerY] = 9;
        playerY++;
        arrays.smallMap[playerX][playerY] = 'X';
        break;
      case false:
        arrays.smallMap[playerX][playerY] = 0;
        playerY++;
        arrays.smallMap[playerX][playerY] = 'X';
        break;
    }
  }
  if (key === '8' && playerYcanUp === true) {
    switch (playerYpositionValue === 8) {
      case true:
        arrays.smallMap[player2X][player2Y] = 8;
        player2X--;
        arrays.smallMap[player2X][player2Y] = 'Y';
        break;
      case false:
        arrays.smallMap[player2X][player2Y] = 0;
        player2X--;
        arrays.smallMap[player2X][player2Y] = 'Y';
        break;
    }
  }
  if (key === '5' && playerYcanDown === true) {
    switch (playerYpositionValue === 8) {
      case true:
        arrays.smallMap[player2X][player2Y] = 8;
        player2X++;
        arrays.smallMap[player2X][player2Y] = 'Y';
        break;
      case false:
        arrays.smallMap[player2X][player2Y] = 0;
        player2X++;
        arrays.smallMap[player2X][player2Y] = 'Y';
        break;
    }
  }
  if (key === '4' && playerYcanLeft === true) {
    switch (playerYpositionValue === 8) {
      case true:
        arrays.smallMap[player2X][player2Y] = 8;
        player2Y--;
        arrays.smallMap[player2X][player2Y] = 'Y';
        break;
      case false:
        arrays.smallMap[player2X][player2Y] = 0;
        player2Y--;
        arrays.smallMap[player2X][player2Y] = 'Y';
        break;
    }
  }
  if (key === '6' && playerYcanRight === true) {
    switch (playerYpositionValue === 8) {
      case true:
        arrays.smallMap[player2X][player2Y] = 8;
        player2Y++;
        arrays.smallMap[player2X][player2Y] = 'Y';
        break;
      case false:
        arrays.smallMap[player2X][player2Y] = 0;
        player2Y++;
        arrays.smallMap[player2X][player2Y] = 'Y';
        break;
    }
  }
  if (key === 'f') {
    placeBombPlayer1();
  }
  if (key === '0') {
    placeBombPlayer2();
  }
};
stdin.on('data', keyProcessor);
let smallMap = arrays.smallMap;
arrays.smallMap = common.generatedMap(arrays.smallMap);
let board = common.largeMapGen(arrays.smallMap);

let i = 1;
setTimeout(function run() {
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

