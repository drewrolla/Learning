//sets the value of Kelvin to a constant of 293
const kelvin = 293;

//converts Kelvin to Celsius
var celsius = kelvin - 273;

//conversion for fahrenheit
let fahrenheit = celsius * (9/5) + 32;

//rounds to a whole number from a decimal
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

//extra practice
var newton = celsius * (33/100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.`);