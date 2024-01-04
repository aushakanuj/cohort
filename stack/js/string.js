function indexOf(str, a) {
  console.log(str.indexOf(a));
  console.log(str.lastIndexOf(a));
}

indexOf("Hello world! world", "world");

function lengthString(str) {
  console.log(str.length);
}

lengthString("hello world");

let x = " hello world ";
console.log(x.slice(0, 5));

console.log(x.replace("hello", "hi"));

console.log(x.split(" "));

console.log(x.trim());
console.log(x.toUpperCase());
console.log(x.toLowerCase());
console.log(parseInt("42"));
console.log(parseInt("42px"));
console.log(parseInt("2.32434344"));

console.log(parseFloat("243.44554"));
