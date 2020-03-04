const print = (printable) => {
  console.clear();
  for (let i = 0; i < printable.length; i++) {
    console.log(printable[i].join('').toString());
  }
};

const largeMapGen = (smallMap) => {

  // make a 200x52 array, will be spliced to 176x44
  let board = new Array(52);
  for (let i = 0; i < board.length; i++) {
    board[i] = new Array(200);
  }
  // elements
  const freeSpace = ['░'];
  const softWall = ['█'];
  const fixWall = ['▓'];
  const border = ['▚'];

  // convert smallMap indexes into 8x4 array
  let position1 = 0;
  let position2 = 0;
  for (let i = 0, a = position1; i < smallMap.length; i++ , a += 4) {
    for (let j = 0, b = position2; j < smallMap[i].length; j++ , b += 8) {
      if (smallMap[i][j] === 0) {
        for (let i = 0; i < 4; i++) {
          for (let j = 0; j < 8; j++) {
            board[a + i][b + j] = freeSpace[0];
          }
        }
      }
      if (smallMap[i][j] === 1) {
        for (let i = 0; i < 4; i++) {
          for (let j = 0; j < 8; j++) {
            board[a + i][b + j] = softWall[0];
          }
        }
      }
      if (smallMap[i][j] === 2) {
        for (let i = 0; i < 4; i++) {
          for (let j = 0; j < 8; j++) {
            board[a + i][b + j] = border[0];
          }
        }
      }
      if (smallMap[i][j] === 3) {
        for (let i = 0; i < 4; i++) {
          for (let j = 0; j < 8; j++) {
            board[a + i][b + j] = fixWall[0];
          }
        }
      }
      if (smallMap[i][j] === 'X') {
        for (let i = 0; i < 4; i++) {
          for (let j = 0; j < 8; j++) {
            board[a + i][b + j] = 'X';
          }
        }
      }
    }
  }

  // splice as promised
  board.splice(0, 3);
  board.splice(-4, 3);
  for (let i = 0; i < 6; i++) {
    for (let i = 0, j = 0; i < board.length; i++ , j++) {
      board[i].pop();
      board[j].shift();
    }
  }
  return board;
};

const generatedMap = (sourceMap) => {
  for (let i = 0; i < sourceMap.length; i++) {
    for (let j = 0; j < sourceMap[i].length; j++) {
      if (sourceMap[i][j] === 1) {
        sourceMap[1 + Math.round(Math.random() * 10)][5] = Math.round(Math.random());
        // sourceMap[1 + Math.round(Math.random() * 10)][9] = Math.round(Math.random());
        sourceMap[1 + Math.round(Math.random() * 10)][13] = Math.round(Math.random());
        // sourceMap[1 + Math.round(Math.random() * 10)][17] = Math.round(Math.random());
        sourceMap[5][Math.round(Math.random() * 21) + 1] = Math.round(Math.random());
        sourceMap[9][Math.round(Math.random() * 21) + 1] = Math.round(Math.random());
      }
    }
  }
  return sourceMap;
};



module.exports = {
  print,
  largeMapGen,
  generatedMap
};
