export class Player{
    // name: string;
    // age: number
    // country: string
    // constructor(name: string, age: number, country: string) {
    //     this.name = name;
    //     this.age = age;
    //     this.country = country;
    // }

    constructor(public name: string, public age: number, public country: string) {
    }

    play() {
        console.log(`${this.name} is playing. Age: ${this.age}, Country: ${this.country}`);
    }
}