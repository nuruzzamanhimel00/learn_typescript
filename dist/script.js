"use strict";
(() => {
  // src/classes/Player.ts
  var Player = class {
    // name: string;
    // age: number
    // country: string
    // constructor(name: string, age: number, country: string) {
    //     this.name = name;
    //     this.age = age;
    //     this.country = country;
    // }
    constructor(name, age, country) {
      this.name = name;
      this.age = age;
      this.country = country;
    }
    play() {
      console.log(`${this.name} is playing. Age: ${this.age}, Country: ${this.country}`);
    }
  };

  // src/script.ts
  var shakib = new Player("Shakib Al Hasan", 35, "Bangladesh");
  var himel = new Player("Himel", 25, "Bangladesh");
  shakib.play();
  himel.play();
})();
//# sourceMappingURL=script.js.map
