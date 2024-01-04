const fs = require("fs");

function findSum() {
  let ans = 0;
  for (let i = 0; i <= 100; i++) {
    ans += i;
  }
  return ans;
}
function findSumTill100() {
  return new Promise(function (resolve) {
    resolve(setTimeout(findSum, 10000));
  });
}

function AushakReadFile() {
  return new Promise(function (resolve) {
    fs.readFile("a.txt", "utf-8", function (err, data) {
      resolve(data);
    });
  });
}
function onDone(data) {
  console.log(data);
}
console.log("first line");
findSumTill100().then(onDone);
console.log("second line");
