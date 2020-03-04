const stdin = process.stdin;
stdin.setRawMode(true);
stdin.resume();
stdin.setEncoding('utf8');

const keyProcessor = (key) => {
  if (key === 'q') {
    process.exit[0];
  }

  if (key === 'w' && i > 1) {
    board[playerX][playerY] = ' ';
    playerX--;
    board[playerX][playerY] = player();
  }
  if (key === 's' && i < board.length - 1) {
    board[playerX][playerY] = ' ';
    playerX++;
    board[playerX][playerY] = player();
  }
  if (key === 'a' && j > 1) {
    board[playerX][playerY] = ' ';
    playerY--;
    board[playerX][playerY] = player();
  }
  if (key === 'd' && j < board.length - 1) {
    board[playerX][playerY] = ' ';
    playerY++;
    board[playerX][playerY] = player();
  }
};
stdin.on('data', keyProcessor);

var playerX = 1;
var playerY = 1;
const player = () => {
  board[playerX][playerY] = 'P';
};
