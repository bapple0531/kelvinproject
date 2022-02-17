// setting my kelvin variable to 293
const kelvin = 293;

//creating a var for celsius
let celsius = kelvin - 273;

//writing the equation to calculate fahrenheit
let fahrenheit = celsius * (9/5) + 32;

//rounding down fahrenheit to ensure I get a whole number
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)
