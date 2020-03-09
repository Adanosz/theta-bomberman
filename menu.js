const common = require('./common.js');
const arrays = require('./arrays.js');
const stdin = process.stdin;
stdin.setRawMode(true);
stdin.resume();
stdin.setEncoding('utf-8');
const keyProcessor = (key) => {
  if (blindset === 0) {
    if (key === '\u0020') {
      switch (position1) {
        case 13:
          // start game
          break;
        case 20:
          common.print(optionsFunc());
          break;
        case 27:
          common.print(creditsFunc());
          break;
        case 34:
          process.exit(0);
          break;
      }
    }
    if (key === 'w' && position1 > 13) {
      common.menuSelectionDel();
      position1 -= 7;
      common.menuSelectionMove();
      common.print(menuFunc());
    }
    if (key === 's' && position1 < 34) {
      common.menuSelectionDel();
      position1 += 7;
      common.menuSelectionMove();
      common.print(menuFunc());
    }
  }
  if (blindset === 1) {
    if (key === 'w' && position1 > 13) {
      common.menuSelectionDel();
      position1 -= 7;
      common.menuSelectionMove();
      common.print(optionsFunc());
    }
    if (key === 's' && position1 < 34) {
      common.menuSelectionDel();
      position1 += 7;
      common.menuSelectionMove();
      common.print(optionsFunc());
    }
    if (key === 'a') {
      switch (position1) {
        case 13:
          soundSwitch = true;
          common.print(optionsFunc());
          break;
        case 20:
          mapSwitch = 0;
          common.print(optionsFunc());
          break;
        case 27:
          playerSwitch = 0;
          common.print(optionsFunc());
          break;
      }
    }
    if (key === 'd') {
      switch (position1) {
        case 13:
          soundSwitch = false;
          common.print(optionsFunc());
          break;
        case 20:
          mapSwitch = 1;
          common.print(optionsFunc());
          break;
        case 27:
          playerSwitch = 1;
          common.print(optionsFunc());
          break;
      }
    }

    if (key === '\u0020' && position1 === 34) {
      common.print(menuFunc());
    }
  }
  if (blindset === 2) {
    if (key === 'q') {
      common.print(menuFunc());
    }

  }
};

stdin.on('data', keyProcessor);
let blindset;

let position1 = 13;
let position2 = 60;

let menuArr = common.menuArrGen();
common.clearArr(menuArr);

const menuFunc = () => {
  blindset = 0;
  common.clearArr(menuArr);
  for (let i = 4, k = 0; k < arrays.bombermanArr.length; i++ , k++) {
    for (let j = 60, m = 0; m < arrays.bombermanArr[k].length; j++ , m++) {
      menuArr[i][j] = arrays.bombermanArr[k][m];
    }
  }
  for (let i = 13, k = 0; k < arrays.playArr.length; i++ , k++) {
    for (let j = 82, m = 0; m < arrays.playArr[k].length; j++ , m++) {
      menuArr[i][j] = arrays.playArr[k][m];
    }
  }
  for (let i = 20, k = 0; k < arrays.optionsArr.length; i++ , k++) {
    for (let j = 73, m = 0; m < arrays.optionsArr[k].length; j++ , m++) {
      menuArr[i][j] = arrays.optionsArr[k][m];
    }
  }
  for (let i = 27, k = 0; k < arrays.creditsArr.length; i++ , k++) {
    for (let j = 74, m = 0; m < arrays.creditsArr[k].length; j++ , m++) {
      menuArr[i][j] = arrays.creditsArr[k][m];
    }
  }
  for (let i = 34, k = 0; k < arrays.exitArr.length; i++ , k++) {
    for (let j = 81, m = 0; m < arrays.exitArr[k].length; j++ , m++) {
      menuArr[i][j] = arrays.exitArr[k][m];
    }
  }
  for (let i = position1, k = 0; k < arrays.arrowRight.length; i++ , k++) {
    for (let j = position2 + 62, m = 0; m < arrays.arrowRight[k].length; j++ , m++) {
      menuArr[i][j] = arrays.arrowRight[k][m];
    }
  }
  for (let i = position1, k = 0; k < arrays.arrowLeft.length; i++ , k++) {
    for (let j = position2, m = 0; m < arrays.arrowLeft[k].length; j++ , m++) {
      menuArr[i][j] = arrays.arrowLeft[k][m];
    }
  }
  return menuArr;
}
let soundSwitch = true;
let mapSwitch = 0;
let playerSwitch = 0;
const optionsFunc = () => {
  blindset = 1;
  console.clear();
  common.clearArr(menuArr);
  for (let i = 4, k = 0; k < arrays.bombermanArr.length; i++ , k++) {
    for (let j = 60, m = 0; m < arrays.bombermanArr[k].length; j++ , m++) {
      menuArr[i][j] = arrays.bombermanArr[k][m];
    }
  }
  for (let i = 13, k = 0; k < arrays.soundArr.length; i++ , k++) {
    for (let j = 60, m = 0; m < arrays.soundArr[k].length; j++ , m++) {
      menuArr[i][j] = arrays.soundArr[k][m];
    }
  }
  switch (soundSwitch) {
    case true:
      for (let i = 13, k = 0; k < arrays.onArr.length; i++ , k++) {
        for (let j = 109, m = 0; m < arrays.onArr[k].length; j++ , m++) {
          menuArr[i][j] = arrays.onArr[k][m];
        }
      }
      break;
    case false:
      for (let i = 13, k = 0; k < arrays.offArr.length; i++ , k++) {
        for (let j = 109, m = 0; m < arrays.offArr[k].length; j++ , m++) {
          menuArr[i][j] = arrays.offArr[k][m];
        }
      }
      break;
  }

  for (let i = 20, k = 0; k < arrays.mapArr.length; i++ , k++) {
    for (let j = 60, m = 0; m < arrays.mapArr[k].length; j++ , m++) {
      menuArr[i][j] = arrays.mapArr[k][m];
    }
  }
  switch (mapSwitch) {
    case 0:
      for (let i = 20, k = 0; k < arrays.defaultArr.length; i++ , k++) {
        for (let j = 92, m = 0; m < arrays.defaultArr[k].length; j++ , m++) {
          menuArr[i][j] = arrays.defaultArr[k][m];
        }
      }
      break;
    case 1:
      for (let i = 20, k = 0; k < arrays.randomArr.length; i++ , k++) {
        for (let j = 88, m = 0; m < arrays.randomArr[k].length; j++ , m++) {
          menuArr[i][j] = arrays.randomArr[k][m];
        }
      }
      break;
  }

  for (let i = 27, k = 0; k < arrays.playersArr.length; i++ , k++) {
    for (let j = 60, m = 0; m < arrays.playersArr[k].length; j++ , m++) {
      menuArr[i][j] = arrays.playersArr[k][m];
    }
  }
  switch (playerSwitch) {
    case 0:
      for (let i = 27, k = 0; k < arrays.twoArr.length; i++ , k++) {
        for (let j = 111, m = 0; m < arrays.twoArr[k].length; j++ , m++) {
          menuArr[i][j] = arrays.twoArr[k][m];
        }
      }
      break;
    case 1:
      for (let i = 27, k = 0; k < arrays.oneArr.length; i++ , k++) {
        for (let j = 111, m = 0; m < arrays.oneArr[k].length; j++ , m++) {
          menuArr[i][j] = arrays.oneArr[k][m];
        }
      }
      break;
  }
  for (let i = 34, k = 0; k < arrays.backArr.length; i++ , k++) {
    for (let j = 81, m = 0; m < arrays.backArr[k].length; j++ , m++) {
      menuArr[i][j] = arrays.backArr[k][m];
    }
  }
  for (let i = position1, k = 0; k < arrays.arrowRight.length; i++ , k++) {
    for (let j = position2 + 78, m = 0; m < arrays.arrowRight[k].length; j++ , m++) {
      menuArr[i][j] = arrays.arrowRight[k][m];
    }
  }
  for (let i = position1, k = 0; k < arrays.arrowLeft.length; i++ , k++) {
    for (let j = position2 - 14, m = 0; m < arrays.arrowLeft[k].length; j++ , m++) {
      menuArr[i][j] = arrays.arrowLeft[k][m];
    }
  }
  return menuArr;
}

const creditsFunc = () => {
  let stopInterval = setInterval(() => { common.print(credistFuncInner()) }, 250);
  const credistFuncInner = () => {
    menuArr.splice(0, 1);
    menuArr.push(arrays.creatorsArr[0]);
    arrays.creatorsArr.splice(0, 1);
    common.print(menuArr);
    if (arrays.creatorsArr.length === 1) {
      clearInterval(stopInterval);
      stopInterval = 0;
      common.print(menuFunc());
    }
    return menuArr;
  }
  return menuArr;
};


common.print(menuFunc());
