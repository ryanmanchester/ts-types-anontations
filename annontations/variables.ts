let apples: number = 5;
let speed: string = "fast";
let hasName: boolean = true;

let nothingMuch: null = null;
let nothingToSee: undefined = undefined;

//built in objects
let now: Date = new Date();

//Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3, 5];
let truths: boolean[] = [true, true, false, true];

//Classes
class Car {

}
let car: Car = new Car();

//Object Literal
let point: {x: number; y: number; } = {
  x: 10,
  y: 20
};

// Funtion
const logNumber: (i: number) => void = (i: number) => {
  console.log(i)
}

//When to use annotations
//1. Function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates: {x: number, y: number} = JSON.parse(json);

//2. When we declare a variable and initialize later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;
for(let i = 0; i < words.length; i++) {
  if(words[i] === 'green') {
    foundWord = true;
  }
}

//3. Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;
for(let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i]
  }
}
