const readline = require("readline");

// Create an interface for reading and writing to the console
const rl = readline.createInterface({
  input: process.stdin, // Read from standard input (keyboard)
  output: process.stdout, // Write to standard output (console)
});

// Ask the user to enter something
rl.question("Enter something: ", (input) => {
  // Process or use the user input as needed
  console.log("You entered:", input);

  // Close the readline interface
  rl.close();
});

// The close event is emitted when the input stream receives a 'close' signal (e.g., when rl.close() is called)
rl.on("close", () => {
  console.log("Readline interface closed.");
  // Any code that depends on userInput should be placed here
});

let count = 10;

for (let index = 0; index <= count; ++index) {
  console.log(index);
}
