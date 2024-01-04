class animal {
  constructor(name, legCount, speak) {
    this.name = name;
    this.legCount = legCount;
    this.speak = speak;
  }
  static myType() {
    console.log("animal");
  }
  sound() {
    return `hi there ${this.speak}`;
  }
}

let dog = new animal("dog", 2, "bhow bhow");

console.log(animal.myType());
