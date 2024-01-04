function findSum(a, b, fntoCAll) {
  const sum = a + b;
  return fntoCAll(sum);
}

function passive(data) {
  return "passive " + data;
}

function active(data) {
  return "actuve " + data;
}

let a = findSum(1, 3, passive);

console.log(a);
