const stdin = process.stdin;
stdin.setRawMode(true);
stdin.resume();
stdin.setEncoding('utf8');
playerX = 0;
playerY = 0;

const keyProcessor = (key) => {
  if (key === 'q') {
    process.exit[0];
  }

  if (key === 'w' && i > 0) {
    map[i][j] = ' ';
    i--;
    map[i][j] = playerX;
  }
  if (key === 's' && i > 0) {
    map[i][j] = ' ';
    i++;
    map[i][j] = playerX;
  }
  if (key === 'a' && j < map.length - 1) {
    map[i][j] = ' ';
    j++
    map[i][j] = playerY;
  }
  if (key === 'd' && j < map.length) {
    map[i][j] = ' ';
    j--;
    map[i][j] = playerY;
  }
};
stdin.on('data', keyProcessor);

const player = () => {
  map[i][j] = 'P';
  return '';
};






