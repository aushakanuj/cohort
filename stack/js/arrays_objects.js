let count = 10;

for (let index = 0; index <= count; ++index) {
  console.log(index);
}

console.log("new program");

const a = [1, 2, 3, 4, 5, 5, 6, 6, 77, 7, 8];

for (let index = 0; index < a.length; index++) {
  let element = a[index];
  if (element % 2 == 0) {
    console.log(element);
  }
}

console.log("object");

const people = [
  { name: "aushak", age: 24 },
  { name: "priya", age: 23 },
];

for (let i = 0; i < people.length; i++) {
  console.log(people[i]["age"]);
  var g = i;
}

console.log(g);

let b = [1, 2, 3, 4, 5, 6, 6, 7];
b.push(2);
console.log(b);
b.pop();
console.log(b);

b.shift();
console.log(b);

b.unshift(199);
console.log(b);

console.log(a.concat(b));

b.forEach(function (item, index, b) {
  console.log(item, index, "hi");
});
