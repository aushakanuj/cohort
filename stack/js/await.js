function aushak() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve("hi there");
    }, 1000);
  });
}

async function main() {
  let value = await aushak();
  console.log(value);
}

main();

console.log("hi there!!");
