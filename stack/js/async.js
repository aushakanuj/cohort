function findSum(n) {
  let ans = 0;
  for (let i = 0; i <= n; i++) {
    ans += i;
  }
  return ans;
}
function findSumTill100() {
  return findSum(100);
}

console.log(setTimeout(findSumTill100, 10000));
console.log("hello world");
