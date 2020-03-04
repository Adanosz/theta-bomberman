const common = require('./common.js');

const stdin = process.stdin;
stdin.setRawMode(true);
stdin.resume();
stdin.setEncoding('utf8');

let playerX = 1;
let playerY = 1;
let smallMap = [
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 'X', 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 0, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 2],
  [2, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 2],
  [2, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 0, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
];

const keyProcessor = (key) => {
  if (key === 'q') {
    process.exit(0);
  }
  if (key === 'w' && playerX > 1 && smallMap[playerX - 1][playerY] === 0) {
    console.clear();
    smallMap[playerX][playerY] = 0;
    playerX--;
    smallMap[playerX][playerY] = 'X';
    common.print(common.largeMapGen(smallMap));
  }
  if (key === 's' && playerX < smallMap.length - 2 && smallMap[playerX + 1][playerY] === 0) {
    console.clear();
    smallMap[playerX][playerY] = 0;
    playerX++;
    smallMap[playerX][playerY] = 'X';
    common.print(common.largeMapGen(smallMap));
  }
  if (key === 'a' && playerY > 1 && smallMap[playerX][playerY - 1] === 0) {
    console.clear();
    smallMap[playerX][playerY] = 0;
    playerY--;
    smallMap[playerX][playerY] = 'X';
    common.print(common.largeMapGen(smallMap));
  }
  if (key === 'd' && playerY < smallMap[0].length - 2 && smallMap[playerX][playerY + 1] === 0) {
    console.clear();
    smallMap[playerX][playerY] = 0;
    playerY++;
    smallMap[playerX][playerY] = 'X';
    common.print(common.largeMapGen(smallMap));
  }
};
stdin.on('data', keyProcessor);

smallMap = common.generatedMap(smallMap);
let board = common.largeMapGen(smallMap);

setInterval(() => { common.print(common.largeMapGen(smallMap)) }, 200);
