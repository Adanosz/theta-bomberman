const arrays = require('./arrays.js');

let mpg = require('mpg123');
let player = new mpg.MpgPlayer();

const print = (printable) => {
  // print an array as string, per line
  // used everywhere
  console.clear();
  for (let i = 0; i < printable.length; i++) {
    console.log(printable[i].join('').toString());
  }
};
let smallMap = arrays.smallMap;

let player1 = {
  life: 1,
  bombs: 1,
  pushAbility: false
};
let player2 = {
  life: 1,
  bombs: 1,
  pushAbility: false
};

let player1bomb = {
  firepower: 1,
  coordX: 0,
  coordY: 0
};
let player2bomb = {
  firepower: 1,
  coordX: 0,
  coordY: 0
};

let brokeable = [0, 1, 'X', 'Y', 4, 5, 6, 7];
let direction = 'up';
const explode1 = () => {
  player.play("sounds/bomb2.mp3");
  for (let i = 0; i < 4; i++) {
    switch (direction) {
      case 'up':
        for (let f = 1; f <= player1bomb.firepower; f++) {
          if (brokeable.includes(smallMap[player1bomb.coordX - f][player1bomb.coordY]) === true) {
            if (smallMap[player1bomb.coordX - f][player1bomb.coordY] === 1) {
              smallMap[player1bomb.coordX - f][player1bomb.coordY] = '*'
              /* setTimeout((() => { if (smallMap[player1bomb.coordX - f][player1bomb.coordY] = '*') {
                smallMap[player1bomb.coordX - f][player1bomb.coordY] = 0
              }
            }), 1000) */
              direction = 'right';
              break;
            }
            smallMap[player1bomb.coordX - f][player1bomb.coordY] = '*';
            /* setTimeout((() => { if (smallMap[player1bomb.coordX - f][player1bomb.coordY] = '*') {
              smallMap[player1bomb.coordX - f][player1bomb.coordY] = 0
            }
          }), 1000) */
          } else {
            direction = 'right';
            break;
          }
          direction = 'right';
        }
        break;
      case 'right':
        for (let f = 1; f <= player1bomb.firepower; f++) {
          if (brokeable.includes(smallMap[player1bomb.coordX][player1bomb.coordY + f]) === true) {
            if (smallMap[player1bomb.coordX][player1bomb.coordY + f] === 1) {
              smallMap[player1bomb.coordX][player1bomb.coordY + f] = '*'
              /* setTimeout((() => { if (smallMap[player1bomb.coordX][player1bomb.coordY + f] = '*') {
                smallMap[player1bomb.coordX][player1bomb.coordY + f] = 0
              }
            }), 1000) */
              direction = 'down';
              break;
            }
            smallMap[player1bomb.coordX][player1bomb.coordY + f] = '*';
            /* setTimeout((() => { if (smallMap[player1bomb.coordX][player1bomb.coordY + f] = '*') {
              smallMap[player1bomb.coordX][player1bomb.coordY + f] = 0
            }
          }), 1000) */
          } else {
            direction = 'down';
            break;
          }
          direction = 'down';
        }
        break;
      case 'down':
        for (let f = 1; f <= player1bomb.firepower; f++) {
          if (brokeable.includes(smallMap[player1bomb.coordX + f][player1bomb.coordY]) === true) {
            if (smallMap[player1bomb.coordX + f][player1bomb.coordY] === 1) {
              smallMap[player1bomb.coordX + f][player1bomb.coordY] = '*'
              /* setTimeout((() => { if (smallMap[player1bomb.coordX + f][player1bomb.coordY] = '*') {
                smallMap[player1bomb.coordX + f][player1bomb.coordY] = 0
              }
            }), 1000) */
              direction = 'left';
              break;
            }
            smallMap[player1bomb.coordX + f][player1bomb.coordY] = '*';
            /* setTimeout((() => { if (smallMap[player1bomb.coordX + f][player1bomb.coordY] = '*') {
              smallMap[player1bomb.coordX + f][player1bomb.coordY] = 0
            }
          }), 1000) */
          } else {
            direction = 'left';
            break;
          }
          direction = 'left';
        }
        break;
      case 'left':
        for (let f = 1; f <= player1bomb.firepower; f++) {
          if (brokeable.includes(smallMap[player1bomb.coordX][player1bomb.coordY - f]) === true) {
            if (smallMap[player1bomb.coordX][player1bomb.coordY - f] === 1) {
              smallMap[player1bomb.coordX][player1bomb.coordY - f] = '*'
              /* setTimeout((() => { if (smallMap[player1bomb.coordX][player1bomb.coordY - f] = '*') {
                smallMap[player1bomb.coordX][player1bomb.coordY - f] = 0
              }
            }), 1000) */
              direction = 'up';
              break;
            }
            smallMap[player1bomb.coordX][player1bomb.coordY - f] = '*';
            /* setTimeout((() => { if (smallMap[player1bomb.coordX][player1bomb.coordY - f] = '*') {
              smallMap[player1bomb.coordX][player1bomb.coordY - f] = 0
            }
          }), 1000) */
          } else {
            direction = 'up';
            break;
          }
          direction = 'up';
        }
        break;
    }
  }

  smallMap[player1bomb.coordX][player1bomb.coordY] = '*';
  /* setTimeout((() => { if (smallMap[player1bomb.coordX][player1bomb.coordY] = '*') {
    smallMap[player1bomb.coordX][player1bomb.coordY] = 0
  }
}), 1500) */
  if (smallMap[player1bomb.coordX][player1bomb.coordY] === smallMap[playerX][playerY]) {
    player1.life--
  }
  if (smallMap[player1bomb.coordX][player1bomb.coordY] === smallMap[player2X][player2Y]) {
    player2.life--
  } player1.bombs++;
};

const explode2 = () => {
  player.play("sounds/bomb2.mp3")
  for (let i = 0; i < 4; i++) {
    switch (direction) {
      case 'up':
        for (let f = 1; f <= player2bomb.firepower; f++) {
          if (brokeable.includes(smallMap[player2bomb.coordX - f][player2bomb.coordY]) === true) {
            if (smallMap[player2bomb.coordX - f][player2bomb.coordY] === 1) {
              smallMap[player2bomb.coordX - f][player2bomb.coordY] = '#'
              direction = 'right';
              break;
            }
            smallMap[player2bomb.coordX - f][player2bomb.coordY] = '#';
          } else {
            direction = 'right';
            break;
          }
          direction = 'right';
        }
        break;
      case 'right':
        for (let f = 1; f <= player2bomb.firepower; f++) {
          if (brokeable.includes(smallMap[player2bomb.coordX][player2bomb.coordY + f]) === true) {
            if (smallMap[player2bomb.coordX][player2bomb.coordY + f] === 1) {
              smallMap[player2bomb.coordX][player2bomb.coordY + f] = '#'
              direction = 'down';
              break;
            }
            smallMap[player2bomb.coordX][player2bomb.coordY + f] = '#';
          } else {
            direction = 'down';
            break;
          }
          direction = 'down';
        }
        break;
      case 'down':
        for (let f = 1; f <= player2bomb.firepower; f++) {
          if (brokeable.includes(smallMap[player2bomb.coordX + f][player2bomb.coordY]) === true) {
            if (smallMap[player2bomb.coordX + f][player2bomb.coordY] === 1) {
              smallMap[player2bomb.coordX + f][player2bomb.coordY] = '#'
              direction = 'left';
              break;
            }
            smallMap[player2bomb.coordX + f][player2bomb.coordY] = '#';
          } else {
            direction = 'left';
            break;
          }
          direction = 'left';
        }
        break;
      case 'left':
        for (let f = 1; f <= player2bomb.firepower; f++) {
          if (brokeable.includes(smallMap[player2bomb.coordX][player2bomb.coordY - f]) === true) {
            if (smallMap[player2bomb.coordX][player2bomb.coordY - f] === 1) {
              smallMap[player2bomb.coordX][player2bomb.coordY - f] = '#'
              direction = 'up';
              break;
            }
            smallMap[player2bomb.coordX][player2bomb.coordY - f] = '#';
          } else {
            direction = 'up';
            break;
          }
          direction = 'up';
        }
        break;
    }
  }
  smallMap[player2bomb.coordX][player2bomb.coordY] = '#';
  if (smallMap[player2bomb.coordX][player2bomb.coordY] === smallMap[playerX][playerY]) {
    player1.life--
  }
  
  if (smallMap[player2bomb.coordX][player2bomb.coordY] === smallMap[player2X][player2Y]) {
    player2.life--
  }
  player2.bombs++;
};

let makeItHappen = ['*', 0, 'Y', 'X'];
let makeitHappenBMap = [4, 5, 6, 7]
const explRemove1 = () => {
  for (let i = 0; i < 4; i++) {
    switch (direction) {
      case 'up':
        for (let f = 1; f <= player1bomb.firepower; f++) {
          if (makeItHappen.includes(smallMap[player1bomb.coordX - f][player1bomb.coordY])  === true) {
            smallMap[player1bomb.coordX - f][player1bomb.coordY] = 0;
          } else {
            direction = 'right';
            break;
          }
          direction = 'right';
        }
        break;
      case 'right':
        for (let f = 1; f <= player1bomb.firepower; f++) {
          if (makeItHappen.includes(smallMap[player1bomb.coordX][player1bomb.coordY + f]) === true) {
            smallMap[player1bomb.coordX][player1bomb.coordY + f] = 0;
          } else {
            direction = 'down';
            break;
          }
          direction = 'down';
        }
        break;
      case 'down':
        for (let f = 1; f <= player1bomb.firepower; f++) {
          if (makeItHappen.includes(smallMap[player1bomb.coordX + f][player1bomb.coordY]) === true) {
            smallMap[player1bomb.coordX + f][player1bomb.coordY] = 0;
          } else {
            direction = 'left';
            break;
          }
          direction = 'left';
        }
        break;
      case 'left':
        for (let f = 1; f <= player1bomb.firepower; f++) {
          if (makeItHappen.includes(smallMap[player1bomb.coordX][player1bomb.coordY - f]) === true) {
            smallMap[player1bomb.coordX][player1bomb.coordY - f] = 0;
          } else {
            direction = 'up';
            break;
          }
          direction = 'up';
        }
        break;
    }
  }
  smallMap[player1bomb.coordX][player1bomb.coordY] = 0;
}
let makeItHappen2 = ['#', 0, 'Y', 'X'];
const explRemove2 = () => {
  for (let i = 0; i < 4; i++) {
    switch (direction) {
      case 'up':
        for (let f = 1; f <= player2bomb.firepower; f++) {
          if (makeItHappen2.includes(smallMap[player2bomb.coordX - f][player2bomb.coordY]) === true) {
            smallMap[player2bomb.coordX - f][player2bomb.coordY] = 0;
          } else {
            direction = 'right';
            break;
          }
          direction = 'right';
        }
        break;
      case 'right':
        for (let f = 1; f <= player2bomb.firepower; f++) {
          if (makeItHappen2.includes(smallMap[player2bomb.coordX][player2bomb.coordY + f]) === true) {
            smallMap[player2bomb.coordX][player2bomb.coordY + f] = 0;
          } else {
            direction = 'down';
            break;
          }
          direction = 'down';
        }
        break;
      case 'down':
        for (let f = 1; f <= player2bomb.firepower; f++) {
          if (makeItHappen2.includes(smallMap[player2bomb.coordX + f][player2bomb.coordY]) === true) {
            smallMap[player2bomb.coordX + f][player2bomb.coordY] = 0;
          } else {
            direction = 'left';
            break;
          }
          direction = 'left';
        }
        break;
      case 'left':
        for (let f = 1; f <= player2bomb.firepower; f++) {
          if (makeItHappen2.includes(smallMap[player2bomb.coordX][player2bomb.coordY - f]) === true) {
            smallMap[player2bomb.coordX][player2bomb.coordY - f] = 0;
          } else {
            direction = 'up';
            break;
          }
          direction = 'up';
        }
        break;
    }
  }
  smallMap[player2bomb.coordX][player2bomb.coordY] = 0;
}

const oldexplode2 = () => {
  for (let i = 0; i < smallMap.length; i++) {
    for (let j = 0; j < smallMap[i].length; j++) {
      if (smallMap[i][j] === 8 && (smallMap[i + 1][j] === 1 || smallMap[i + 1][j] === 0 || smallMap[i + 1][j] === 'X' || smallMap[i + 1][j] === 'Y')) {
        smallMap[i + explodeRange][j] = '#';
      }
      if (smallMap[i][j] === 8 && (smallMap[i - 1][j] === 1 || smallMap[i - 1][j] === 0 || smallMap[i - 1][j] === 'X' || smallMap[i - 1][j] === 'Y')) {
        smallMap[i - explodeRange][j] = '#';
      }
      if (smallMap[i][j] === 8 && (smallMap[i][j + 1] === 1 || smallMap[i][j + 1] === 0 || smallMap[i][j + 1] === 'X' || smallMap[i][j + 1] === 'Y')) {
        smallMap[i][j + explodeRange] = '#';
      }
      if (smallMap[i][j] === 8 && (smallMap[i][j - 1] === 1 || smallMap[i][j - 1] === 0 || smallMap[i][j + 1] === 'X' || smallMap[i][j - 1] === 'Y')) {
        smallMap[i][j - explodeRange] = '#';
      }
      if (smallMap[i][j] === 8) {
        smallMap[i][j] = '#';
      }
    }
  } player2.bombs++;
};

const explode3 = () => {
  for (let i = 0; i < smallMap.length; i++) {
    for (let j = 0; j < smallMap[i].length; j++) {
      if (smallMap[i][j] === 'B' && (smallMap[i + 1][j] === 1 || smallMap[i + 1][j] === 0 || smallMap[i + 1][j] === 'X' || smallMap[i + 1][j] === 'Y')) {
        smallMap[i + explodeRange][j] = '+';
      }
      if (smallMap[i][j] === 'B' && (smallMap[i - 1][j] === 1 || smallMap[i - 1][j] === 0 || smallMap[i - 1][j] === 'X' || smallMap[i - 1][j] === 'Y')) {
        smallMap[i - explodeRange][j] = '+';
      }
      if (smallMap[i][j] === 'B' && (smallMap[i][j + 1] === 1 || smallMap[i][j + 1] === 0 || smallMap[i][j + 1] === 'X' || smallMap[i][j + 1] === 'Y')) {
        smallMap[i][j + explodeRange] = '+';
      }
      if (smallMap[i][j] === 'B' && (smallMap[i][j - 1] === 1 || smallMap[i][j - 1] === 0 || smallMap[i][j + 1] === 'X' || smallMap[i][j - 1] === 'Y')) {
        smallMap[i][j - explodeRange] = '+';
      }
      if (smallMap[i][j] === 'B') {
        smallMap[i][j] = '+';
      }
    }
  }
};



const largeMapGen = (smallMap) => {
  // make a 200x52 array, will be spliced to 176x44
  let board = new Array(52);
  for (let i = 0; i < board.length; i++) {
    board[i] = new Array(200);
  }
  // elements kiszervezve arrays-be / 16-81 sor
  // convert smallMap indexes into 8x4 array
  let position1 = 0;
  let position2 = 0;
  for (let i = 0, a = position1; i < smallMap.length; i++, a += 4) {
    for (let j = 0, b = position2; j < smallMap[i].length; j++, b += 8) {
      const largeMapGenAssistant = (type) => {
        for (let i = 0; i < 4; i++) {
          for (let j = 0; j < 8; j++) {
            board[a + i][b + j] = type[i][j];
          }
        }
      }
      switch (smallMap[i][j]) {
        case 0:
          largeMapGenAssistant(arrays.freeSpace);
          break;
        case 1:
          largeMapGenAssistant(arrays.softWall);
          break;
        case 2:
          largeMapGenAssistant(arrays.border);
          break;
        case 3:
          largeMapGenAssistant(arrays.fixWall);
          break;
        case 4:
          largeMapGenAssistant(arrays.PRESENT_FirePower);
          break;
        case 5:
          largeMapGenAssistant(arrays.PRESENT_PlusBomb);
          break;
        case 6:
          largeMapGenAssistant(arrays.PRESENT_PushTheBomb);
          break;
        case 7:
          largeMapGenAssistant(arrays.PRESENT_ExtraLife);
          break;
        case 'X':
          largeMapGenAssistant(arrays.playerXDesign);
          break;
        case 'Y':
          largeMapGenAssistant(arrays.playerYDesign);
          break;
        case '*':
          largeMapGenAssistant(arrays.playerXExplode);
          break;
        case 9:
          largeMapGenAssistant(arrays.playerXbombDesign);
          break;
        case '#':
          largeMapGenAssistant(arrays.playerYExplode);
          break;
        case 8:
          largeMapGenAssistant(arrays.playerYbombDesign);
      }
    }
  }

  // splice as promised
  board.splice(0, 3);
  board.splice(-4, 3);
  for (let i = 0; i < 6; i++) {
    for (let i = 0, j = 0; i < board.length; i++, j++) {
      board[i].pop();
      board[j].shift();
    }
  }
  return board;
};

const generatedMap = (sourceMap) => {
  // randomize empty spaces
  // used in game before generating large map
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

const menuArrGen = () => {
  // generates the empty menu array
  // used in menu
  let menuArr = new Array(44);
  for (let i = 0; i < menuArr.length; i++) {
    menuArr[i] = new Array(176);
  }
  return menuArr;
}
let menuArr = menuArrGen();
const menuSelectionMove = () => { // leftArrow, rightArrow
  // moves the selections arrays
  // used in menu after menuSelectionDel
  for (let i = position1, k = 0; k < arrays.arrowLeft.length; i++, k++) {
    for (let j = position2, m = 0; m < arrays.arrowLeft[k].length; j++, m++) {
      menuArr[i][j] = arrays.arrowLeft[k][m];
    }
  }
  for (let i = position1, k = 0; k < arrays.arrowRight.length; i++, k++) {
    for (let j = position2 + 62, m = 0; m < arrays.arrowRight[k].length; j++, m++) {
      menuArr[i][j] = arrays.arrowRight[k][m];
    }
  }
};
let position1 = 13;
let position2 = 60;
const menuSelectionDel = () => {
  // clears the selection arrows
  // used in menu after moving selection
  for (let i = position1, k = 0; k < arrays.arrowLeft.length; i++, k++) {
    for (let j = position2, m = 0; m < arrays.arrowLeft[k].length; j++, m++) {
      menuArr[i][j] = ' ';
    }
  }
  for (let i = position1, k = 0; k < arrays.arrowRight.length; i++, k++) {
    for (let j = position2 + 62, m = 0; m < arrays.arrowRight[k].length; j++, m++) {
      menuArr[i][j] = ' ';
    }
  }
};

const clearArr = (arr) => {
  // overwire an array with space
  // used in menu after option choose
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] = ' ';
    }
  }
};

// player 1 starter position
let playerX = 1;
let playerY = 1;
// player 2 starter position
let player2X = 11;
let player2Y = 23;
// com1 starter position
let com1X = 1;
let com1Y = 23;

let bomb1 = 9;
let bomb2 = 8;
let bomb3 = 'B';
let blindset;
const keyProcessor = (key) => {
  if (blindset === 0) {
    if (key === '\u0020') {
      switch (position1) {
        case 13:
          game();
          break;
        case 20:
          print(optionsFunc());
          break;
        case 27:
          print(creditsFunc());
          break;
        case 34:
          process.exit(0);
          break;
      }
    }
    if (key === 'w' && position1 > 13) {
      menuSelectionDel();
      position1 -= 7;
      menuSelectionMove();
      print(menuFunc());
    }
    if (key === 's' && position1 < 34) {
      menuSelectionDel();
      position1 += 7;
      menuSelectionMove();
      print(menuFunc());
    }
  }
  if (blindset === 1) {
    if (key === 'w' && position1 > 13) {
      menuSelectionDel();
      position1 -= 7;
      menuSelectionMove();
      print(optionsFunc());
    }
    if (key === 's' && position1 < 34) {
      menuSelectionDel();
      position1 += 7;
      menuSelectionMove();
      print(optionsFunc());
    }
    if (key === 'a') {
      switch (position1) {
        case 13:
          soundSwitch = true;
          print(optionsFunc());
          break;
        case 20:
          mapSwitch = 0;
          print(optionsFunc());
          break;
        case 27:
          playerSwitch = 0;
          print(optionsFunc());
          break;
      }
    }
    if (key === 'd') {
      switch (position1) {
        case 13:
          soundSwitch = false;
          print(optionsFunc());
          break;
        case 20:
          mapSwitch = 1;
          print(optionsFunc());
          break;
        case 27:
          playerSwitch = 1;
          print(optionsFunc());
          break;
      }
    }

    if (key === '\u0020' && position1 === 34) {
      print(menuFunc());
    }
  }
  if (blindset === 2) {
    let playerXcanUp;
    let playerXcanDown;
    let playerXcanRight;
    let playerXcanLeft;

    // Where a player can go
    const arr = ['*', '#', 0, 4, 5, 6, 7];

    if (playerX > 1 && (arr.includes(arrays.smallMap[playerX - 1][playerY]) === true)) { playerXcanUp = true }
    else { playerXcanUp = false };
    if (playerX < arrays.smallMap.length - 2 && (arr.includes(arrays.smallMap[playerX + 1][playerY]) === true)) { playerXcanDown = true }
    else { playerXcanDown = false };
    if (playerY > 1 && (arr.includes(arrays.smallMap[playerX][playerY - 1]) === true)) { playerXcanLeft = true }
    else { playerXcanLeft = false };
    if (playerY < arrays.smallMap[0].length - 2 && (arr.includes(arrays.smallMap[playerX][playerY + 1]) === true)) { playerXcanRight = true }
    else { playerXcanRight = false };

    let playerYcanUp;
    let playerYcanDown;
    let playerYcanRight;
    let playerYcanLeft;

    if (player2X > 1 && (arr.includes(arrays.smallMap[player2X - 1][player2Y]) === true)) { playerYcanUp = true }
    else { playerYcanUp = false };
    if (player2X < arrays.smallMap.length - 2 && (arr.includes(arrays.smallMap[player2X + 1][player2Y]) === true)) { playerYcanDown = true }
    else { playerYcanDown = false };
    if (player2Y > 1 && (arr.includes(arrays.smallMap[player2X][player2Y - 1]) === true)) { playerYcanLeft = true }
    else { playerYcanLeft = false };
    if (player2Y < arrays.smallMap[0].length - 2 && (arr.includes(arrays.smallMap[player2X][player2Y + 1]) === true)) { playerYcanRight = true }
    else { playerYcanRight = false };

    let com1XcanUp;
    let com1XcanDown;
    let com1XcanRight;
    let com1XcanLeft;

    if (com1X > 1 && (arr.includes(arrays.smallMap[com1X - 1][com1Y]) === true)) { com1XcanUp = true }
    else { com1XcanUp = false };
    if (com1X < arrays.smallMap.length - 2 && (arr.includes(arrays.smallMap[com1X + 1][com1Y]) === true)) { com1XcanDown = true }
    else { com1XcanDown = false };
    if (com1Y > 1 && (arr.includes(arrays.smallMap[com1X][com1Y - 1]) === true)) { com1XcanLeft = true }
    else { com1XcanLeft = false };
    if (com1Y < arrays.smallMap[0].length - 2 && (arr.includes(arrays.smallMap[com1X][com1Y + 1]) === true)) { com1XcanRight = true }
    else { com1XcanRight = false };

    let playerXpositionValue = arrays.smallMap[playerX][playerY];
    let playerYpositionValue = arrays.smallMap[player2X][player2Y];
    let com1XpositionValue = arrays.smallMap[com1X][com1Y];

    if (key === 'q') {
      console.clear();
      print(menuFunc());
    }
    if (key === 'w' && playerXcanUp === true) {
      switch (playerXpositionValue === 9) {
        case true:
          arrays.smallMap[playerX][playerY] = 9;
          arrays.boostersMap[playerX][playerY] = 0;
          if (smallMap[playerX - 1][playerY] === '*' || smallMap[playerX - 1][playerY] === '#') {
            player1.life--
          }
          playerX--;
          arrays.smallMap[playerX][playerY] = 'X';
          break;
        case false:
          arrays.smallMap[playerX][playerY] = 0;
          arrays.boostersMap[playerX][playerY] = 0;
          if (smallMap[playerX - 1][playerY] === '*' || smallMap[playerX - 1][playerY] === '#') {
            player1.life--
          }
          playerX--;
          arrays.smallMap[playerX][playerY] = 'X';
          switch (arrays.boostersMap[playerX][playerY]) {
            case 4:
              player.play("sounds/booster.mp3");
              player1bomb.firepower++;
              break;
            case 5:
              player.play("sounds/booster.mp3");
              player1.bombs++;
              break;
            case 6:
              player.play("sounds/booster.mp3");
              player1.pushAbility = true;
              break;
            case 7:
              player.play("sounds/booster.mp3");
              player1.life++;
              break;
          }
          arrays.boostersMap[playerX][playerY] = 0;
          break;
      }
    }
    if (key === 's' && playerXcanDown === true) {
      switch (playerXpositionValue === 9) {
        case true:
          arrays.smallMap[playerX][playerY] = 9;
          arrays.boostersMap[playerX][playerY] = 0;
          if (smallMap[playerX + 1][playerY] === '*' || smallMap[playerX + 1][playerY] === '#') {
            player1.life--
          }
          playerX++;
          arrays.smallMap[playerX][playerY] = 'X';
          break;
        case false:
          arrays.smallMap[playerX][playerY] = 0;
          arrays.boostersMap[playerX][playerY] = 0;
          if (smallMap[playerX + 1][playerY] === '*' || smallMap[playerX + 1][playerY] === '#') {
            player1.life--
          }
          playerX++;
          arrays.smallMap[playerX][playerY] = 'X';
          switch (arrays.boostersMap[playerX][playerY]) {
            case 4:
              player.play("sounds/booster.mp3");
              player1bomb.firepower++;
              break;
            case 5:
              player.play("sounds/booster.mp3");
              player1.bombs++;
              break;
            case 6:
              player.play("sounds/booster.mp3");
              player1.pushAbility = true;
              break;
            case 7:
              player.play("sounds/booster.mp3");
              player1.life++;
              break;
          }
          arrays.boostersMap[playerX][playerY] = 0;
          break;
      }
    }
    if (key === 'a' && playerXcanLeft === true) {
      switch (playerXpositionValue === 9) {
        case true:
          arrays.smallMap[playerX][playerY] = 9;
          arrays.boostersMap[playerX][playerY] = 0;
          if (smallMap[playerX][playerY - 1] === '*' || smallMap[playerX][playerY - 1] === '#') {
            player1.life--
          }
          playerY--;
          arrays.smallMap[playerX][playerY] = 'X';
          break;
        case false:
          arrays.smallMap[playerX][playerY] = 0;
          arrays.boostersMap[playerX][playerY] = 0;
          if (smallMap[playerX][playerY - 1] === '*' || smallMap[playerX][playerY - 1] === '#') {
            player1.life--
          }
          playerY--;
          arrays.smallMap[playerX][playerY] = 'X';
          switch (arrays.boostersMap[playerX][playerY]) {
            case 4:
              player.play("sounds/booster.mp3");
              player1bomb.firepower++;
              break;
            case 5:
              player.play("sounds/booster.mp3");
              player1.bombs++;
              break;
            case 6:
              player.play("sounds/booster.mp3");
              player1.pushAbility = true;
              break;
            case 7:
              player.play("sounds/booster.mp3");
              player1.life++;
              break;
          }
          arrays.boostersMap[playerX][playerY] = 0;
          break;
      }
    }
    if (key === 'd' && playerXcanRight === true) {
      switch (playerXpositionValue === 9) {
        case true:
          arrays.smallMap[playerX][playerY] = 9;
          arrays.boostersMap[playerX][playerY] = 0;
          if (smallMap[playerX][playerY + 1] === '*' || smallMap[playerX][playerY + 1] === '#') {
            player1.life--
          }
          playerY++;
          arrays.smallMap[playerX][playerY] = 'X';
          break;
        case false:
          arrays.smallMap[playerX][playerY] = 0;
          arrays.boostersMap[playerX][playerY] = 0;
          if (smallMap[playerX][playerY + 1] === '*' || smallMap[playerX][playerY + 1] === '#') {
            player1.life--
          }
          playerY++;
          arrays.smallMap[playerX][playerY] = 'X';
          switch (arrays.boostersMap[playerX][playerY]) {
            case 4:
              player.play("sounds/booster.mp3");
              player1bomb.firepower++;
              break;
            case 5:
              player.play("sounds/booster.mp3");
              player1.bombs++;
              break;
            case 6:
              player.play("sounds/booster.mp3");
              player1.pushAbility = true;
              break;
            case 7:
              player.play("sounds/booster.mp3");
              player1.life++;
              break;
          }
          arrays.boostersMap[playerX][playerY] = 0;
          break;
      }
    }
    if (key === '8' && playerYcanUp === true) {
      switch (playerYpositionValue === 8) {
        case true:
          arrays.smallMap[player2X][player2Y] = 8;
          arrays.boostersMap[player2X][player2Y] = 0;
          if (smallMap[player2X - 1][player2Y] === '*' || smallMap[player2X - 1][player2Y] === '#') {
            player2.life--
          }
          player2X--;
          arrays.smallMap[player2X][player2Y] = 'Y';
          break;
        case false:
          arrays.smallMap[player2X][player2Y] = 0;
          arrays.boostersMap[player2X][player2Y] = 0;
          if (smallMap[player2X - 1][player2Y] === '*' || smallMap[player2X - 1][player2Y] === '#') {
            player2.life--
          }
          player2X--;
          arrays.smallMap[player2X][player2Y] = 'Y';
          switch (arrays.boostersMap[player2X][player2Y]) {
            case 4:
              player.play("sounds/booster.mp3");
              player2bomb.firepower++;
              break;
            case 5:
              player.play("sounds/booster.mp3");
              player2.bombs++;
              break;
            case 6:
              player.play("sounds/booster.mp3");
              player2.pushAbility = true;
              break;
            case 7:
              player.play("sounds/booster.mp3");
              player2.life++;
              break;
          }
          arrays.boostersMap[player2X][player2Y] = 0;
          break;
      }
    }
    if (key === '5' && playerYcanDown === true) {
      switch (playerYpositionValue === 8) {
        case true:
          arrays.smallMap[player2X][player2Y] = 8;
          arrays.boostersMap[player2X][player2Y] = 0;
          if (smallMap[player2X + 1][player2Y] === '*' || smallMap[player2X + 1][player2Y] === '#') {
            player2.life--
          }
          player2X++;
          arrays.smallMap[player2X][player2Y] = 'Y';
          break;
        case false:
          arrays.smallMap[player2X][player2Y] = 0;
          arrays.boostersMap[player2X][player2Y] = 0;
          if (smallMap[player2X + 1][player2Y] === '*' || smallMap[player2X + 1][player2Y] === '#') {
            player2.life--
          }
          player2X++;
          arrays.smallMap[player2X][player2Y] = 'Y';
          switch (arrays.boostersMap[player2X][player2Y]) {
            case 4:
              player.play("sounds/booster.mp3");
              player2bomb.firepower++;
              break;
            case 5:
              player.play("sounds/booster.mp3");
              player2.bombs++;
              break;
            case 6:
              player.play("sounds/booster.mp3");
              player2.pushAbility = true;
              break;
            case 7:
              player.play("sounds/booster.mp3");
              player2.life++;
              break;
          }
          arrays.boostersMap[player2X][player2Y] = 0;
          break;
      }
    }
    if (key === '4' && playerYcanLeft === true) {
      switch (playerYpositionValue === 8) {
        case true:
          arrays.smallMap[player2X][player2Y] = 8;
          arrays.boostersMap[player2X][player2Y] = 0;
          if (smallMap[player2X][player2Y - 1] === '*' || smallMap[player2X][player2Y - 1] === '#') {
            player2.life--
          }
          player2Y--;
          arrays.smallMap[player2X][player2Y] = 'Y';
          break;
        case false:
          arrays.smallMap[player2X][player2Y] = 0;
          arrays.boostersMap[player2X][player2Y] = 0;
          if (smallMap[player2X][player2Y - 1] === '*' || smallMap[player2X][player2Y - 1] === '#') {
            player2.life--
          }
          player2Y--;
          arrays.smallMap[player2X][player2Y] = 'Y';
          switch (arrays.boostersMap[player2X][player2Y]) {
            case 4:
              player.play("sounds/booster.mp3");
              player2bomb.firepower++;
              break;
            case 5:
              player.play("sounds/booster.mp3");
              player2.bombs++;
              break;
            case 6:
              player.play("sounds/booster.mp3");
              player2.pushAbility = true;
              break;
            case 7:
              player.play("sounds/booster.mp3");
              player2.life++;
              break;
          }
          arrays.boostersMap[player2X][player2Y] = 0;
          break;
      }
    }
    if (key === '6' && playerYcanRight === true) {
      switch (playerYpositionValue === 8) {
        case true:
          arrays.smallMap[player2X][player2Y] = 8;
          arrays.boostersMap[player2X][player2Y] = 0;
          if (smallMap[player2X][player2Y + 1] === '*' || smallMap[player2X][player2Y + 1] === '#') {
            player2.life--
          }
          player2Y++;
          arrays.smallMap[player2X][player2Y] = 'Y';
          break;
        case false:
          arrays.smallMap[player2X][player2Y] = 0;
          arrays.boostersMap[player2X][player2Y] = 0;
          if (smallMap[player2X][player2Y + 1] === '*'|| smallMap[player2X][player2Y + 1] === '#') {
            player2.life--
          }
          player2Y++;
          arrays.smallMap[player2X][player2Y] = 'Y';
          switch (arrays.boostersMap[player2X][player2Y]) {
            case 4:
              player.play("sounds/booster.mp3");
              player2bomb.firepower++;
              break;
            case 5:
              player.play("sounds/booster.mp3");
              player2.bombs++;
              break;
            case 6:
              player.play("sounds/booster.mp3");
              player2.pushAbility = true;
              break;
            case 7:
              player.play("sounds/booster.mp3");
              player2.life++;
              break;
          }
          arrays.boostersMap[player2X][player2Y] = 0;
          break;
      }
    }
    if (key === 'f') {
      placeBombPlayer1();
    }
    if (key === '0') {
      placeBombPlayer2();      
    }
  }
};

let bombStorageX = [];
let bombExplTStorageX = [];
let bombStorageY = [];
let bombExplTStorageY = [];

const bombObjCreator = (storage, x, y) => {
  let obj = {
    x: x,
    y: y,
    time: 2500,
    time2: 4000
  };
  storage.push(obj);
}

const bombObjTimeDecreaserPro3000Plus = (storage) => {
  for (let i = 0; i < storage.length; i++) {
    storage[i].time -= 100;
  }
}

const bombExplRemTimeDecreaserPro3000Plus = (storage) => {
  for (let i = 0; i < storage.length; i++) {
    storage[i].time2 -= 100;
  }
}

const bombExplRemTimeChecker = (player, storage, explRemove) => {
  if (storage.length > 0) {
    if (storage[0].time2 <= 0) {
      player.coordX = storage[0].x
      player.coordY = storage[0].y
      explRemove();
      storage.shift();
    }
  }
}

const bombTimeChecker = (player, storage, explode) => {
  if (storage.length > 0) {
    if (storage[0].time <= 0) {
      player.coordX = storage[0].x
      player.coordY = storage[0].y
      explode();
      storage.shift();
    }
  }
}

const removeExplosion3 = () => {
  for (let i = 0; i < smallMap.length; i++) {
    for (let j = 0; j < smallMap[i].length; j++) {
      if (smallMap[i][j] === '+') {
        smallMap[i][j] = 0;
      }
    }
  }
};

const placeBombPlayer1 = () => {
  if (player1.bombs > 0) {
    arrays.smallMap[playerX][playerY] = bomb1;
    arrays.boostersMap[playerX][playerY] = 'X'
    player1.bombs--;
    bombObjCreator(bombStorageX, playerX, playerY);
    bombObjCreator(bombExplTStorageX, playerX, playerY);
  }
};

const placeBombPlayer2 = () => {
  if (player2.bombs > 0) {
    arrays.smallMap[player2X][player2Y] = bomb2;
    player2.bombs--;
    bombObjCreator(bombStorageY, player2X, player2Y);
    bombObjCreator(bombExplTStorageY, player2X, player2Y)
  }
};

const placeBombBot1 = () => {
  if (bot1Bomb > 0) {
    smallMap[com1X][com1Y] = bomb3;
    bot1Bomb--;
    setTimeout(explode3, 2500);
    setTimeout(removeExplosion3, 4000);
  }
};

const game = () => {
  blindset = 2;
  setTimeout(function run() {
    boosters(smallMap);
    print(largeMapGen(arrays.smallMap));
    bombObjTimeDecreaserPro3000Plus(bombStorageX);
    bombObjTimeDecreaserPro3000Plus(bombStorageY);
    bombExplRemTimeDecreaserPro3000Plus(bombExplTStorageX);
    bombExplRemTimeDecreaserPro3000Plus(bombExplTStorageY);
    bombTimeChecker(player1bomb, bombStorageX, explode1);
    bombTimeChecker(player2bomb, bombStorageY, explode2);
    bombExplRemTimeChecker(player1bomb, bombExplTStorageX, explRemove1);
    bombExplRemTimeChecker(player2bomb, bombExplTStorageY, explRemove2);

    if (blindset === 2) {
      setTimeout(run, 100);
    }
    if (blindset === 0) {
      console.clear();
      print(menuFunc());
    }
    console.log('P1 life =(', player1.life, ')', 'P1 bombs =(',player1.bombs, ')', 'P1 can push =(', player1.pushAbility,')', 'P1 firepower =(', player1bomb.firepower, ')', smallMap[playerX][playerY], '                                  ', 'P2 life =(', player2.life, ')', 'P2 bombs =(',player2.bombs, ')', 'P2 can push =(', player2.pushAbility,')', 'P2 firepower =(', player2bomb.firepower, ')', smallMap[player2X][player2Y]);
  }, 100);
};

const menuFuncAssistant = (y, x, array) => {
  for (let i = y, k = 0; k < array.length; i++, k++) {
    for (let j = x, m = 0; m < array[k].length; j++, m++) {
      menuArr[i][j] = array[k][m];
    }
  }
};

const menuFunc = () => {
  blindset = 0;
  clearArr(menuArr);
  menuFuncAssistant(4, 60, arrays.bombermanArr);
  menuFuncAssistant(13, 82, arrays.playArr);
  menuFuncAssistant(20, 73, arrays.optionsArr);
  menuFuncAssistant(27, 74, arrays.creditsArr);
  menuFuncAssistant(34, 81, arrays.exitArr);
  menuFuncAssistant(position1, position2 + 62, arrays.arrowRight);
  menuFuncAssistant(position1, position2, arrays.arrowLeft);
  return menuArr;
};

let soundSwitch = true;
let mapSwitch = 0;
let playerSwitch = 0;
const optionsFunc = () => {
  blindset = 1;
  console.clear();
  clearArr(menuArr);
  menuFuncAssistant(4, 60, arrays.bombermanArr);
  menuFuncAssistant(13, 60, arrays.soundArr);

  switch (soundSwitch) {
    case true:
      menuFuncAssistant(13, 109, arrays.onArr);
      break;
    case false:
      menuFuncAssistant(13, 109, arrays.offArr);
      break;
  };
  menuFuncAssistant(20, 60, arrays.mapArr);
  switch (mapSwitch) {
    case 0:
      menuFuncAssistant(20, 92, arrays.defaultArr);
      break;
    case 1:
      menuFuncAssistant(20, 88, arrays.randomArr);
      break;
  }
  menuFuncAssistant(27, 60, arrays.playersArr);
  switch (playerSwitch) {
    case 0:
      menuFuncAssistant(27, 111, arrays.twoArr);
      break;
    case 1:
      menuFuncAssistant(27, 111, arrays.oneArr);
      break;
  }
  menuFuncAssistant(34, 81, arrays.backArr);
  menuFuncAssistant(position1, position2 + 78, arrays.arrowRight);
  menuFuncAssistant(position1, position2 - 14, arrays.arrowLeft);
  return menuArr;
};
const creditsFunc = () => {
  let stopInterval = setInterval(() => { print(credistFuncInner()) }, 250);
  const credistFuncInner = () => {
    menuArr.splice(0, 1);
    menuArr.push(arrays.creatorsArr[0]);
    arrays.creatorsArr.splice(0, 1);
    print(menuArr);
    if (arrays.creatorsArr.length === 1) {
      clearInterval(stopInterval);
      stopInterval = 0;
      print(menuFunc());
    }
    return menuArr;
  }
  return menuArr;
};

const PRESENT_FirePower = 4;
const PRESENT_PlusBomb = 5;
const PRESENT_PushTheBomb = 6;
const PRESENT_ExtraLife = 7;

const PRESENTS = [PRESENT_FirePower, PRESENT_PlusBomb, PRESENT_PushTheBomb, PRESENT_ExtraLife];

const boosterGenerator = (sourceMap) => {
  for (let i = 0; i < sourceMap.length; i++) {
    for (let j = 0; j < sourceMap[i].length; j++) {
      if (sourceMap[i][j] === 1) {
        getRandomInt(0, 12);
        if (GeneratedBoosterNUmber <= 3) {
          arrays.boostersMap[i][j] = PRESENTS[GeneratedBoosterNUmber];
        }
      }
    }
  }
  return arrays.boostersMap;
};

let GeneratedBoosterNUmber;
const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  GeneratedBoosterNUmber = Math.floor(Math.random() * (max - min + 1)) + min;
};

const boosters = (sourceMap) => {
  for (let i = 0; i < sourceMap.length; i++) {
    for (let j = 0; j < sourceMap[i].length; j++) {
      if (sourceMap[i][j] === 0 && (arrays.boostersMap[i][j] === 4 || arrays.boostersMap[i][j] === 5 || arrays.boostersMap[i][j] === 6 || arrays.boostersMap[i][j] === 7)) {
        sourceMap[i][j] = arrays.boostersMap[i][j];
      }
    }
  }
  return sourceMap;
};

module.exports = {
  print,
  largeMapGen,
  generatedMap,
  menuArrGen,
  menuSelectionMove,
  menuSelectionDel,
  clearArr,
  explode1,
  explode2,
  explode3,
  boosterGenerator,
  // removeExplosion,
  // removeExplosion2,
  placeBombPlayer1,
  placeBombPlayer2,
  placeBombBot1,
  keyProcessor,
  game,
  menuFunc,
  optionsFunc,
  creditsFunc,
  boosters
};
