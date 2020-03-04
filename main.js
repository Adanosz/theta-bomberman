const map = [
  [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [0, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

/*
const generatedMap = (sourceMap) => {
  for (let i = 0; i < sourceMap.length; i++) {
    for (let j = 0; j < sourceMap[i].length; j++) {
      if (sourceMap[i][j] === 1) {
        sourceMap[i][j] = Math.round(Math.random() * 1);
      }
    }
  }
  return sourceMap;
};
*/
// Height: 13 block
// Width: 25 block
// console.log(generatedMap(map));

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


const main = () => {
  player ();
  setInterval(() => {
    console.clear();
    
  })
}