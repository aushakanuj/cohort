function findSum() {
  let ans = 0;
  for (let i = 0; i <= 100; i++) {
    ans += i;
  }
  return ans;
}

function findSumTill100() {}

function findSumTill() {
  return new Promise(function (resolve) {
    resolve(setTimeout(findSumTill100, 10000));
  });
}

function onDone(data) {
  console.log("hello" + data);
}
console.log("first line");
// findSumTill100().then(onDone);
console.log("second line");

console.log(setTimeout(findSum, 5000));
