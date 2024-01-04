const fs = require("fs");
fs.readFile("a.txt", "utf-8", function (err, data) {
  console.log(data);
});

setTimeout(function () {
  console.log("hello world");
}, 10000);

console.log("hello world");
