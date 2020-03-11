const common = require('./common.js');
const arrays = require('./arrays.js');

const stdin = process.stdin;
stdin.setRawMode(true);
stdin.resume();
stdin.setEncoding('utf8');

stdin.on('data', common.keyProcessor);
let smallMap = arrays.smallMap;
arrays.smallMap = common.generatedMap(arrays.smallMap);

let menuArr = common.menuArrGen();
common.clearArr(menuArr);
arrays.boostersMap = common.boosterGenerator(smallMap);
common.print(common.menuFunc());
