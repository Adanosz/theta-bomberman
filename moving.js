const stdin = process.stdin;
stdin.setRawMode(true);
stdin.resume();
stdin.setEncoding('utf8');
playerX = 0;
playerY = 0;

const keyProcessor = (key) => {

  if (key === 'w' && i > 0) {
    array[i][j] = ' ';
    i--;
    array[i][j] = playerX;
  } else if (key === 's' && i > 0) {
    array[i][j] = ' ';
    i++;
    array[i][j] = playerX;
  } else if (key === 'a' && j < array.length) {
    array[i][j] = ' ';
    j++
    array[i][j] = playerY;
  } else if (key === 'd' && j < array.length) {
    array[i][j] = ' ';
    j--;
    array[i][j] = playerY;
  }
};
