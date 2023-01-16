// This varible will be a constant of kelvin
const kelvin = 293;
console.log(`${kelvin} Kelvin`);
// this converts kelvin to celsius
const celsius = kelvin - 273;
console.log(`${celsius} Celsius`);
// This is converting celsius to fahrenheit
let fahrenheit = Math.floor(celsius * (9/5) + 32);
// this is using interpolate to print out the temp of fahrenheit.
console.log(`the temperature is ${fahrenheit} degress Fahrenheit.`);
// this convers celsius to Newtons
let newton = Math.floor(celsius * (33/100));
console.log(`${celsius} Celsius is ${newton} in the Newton scale`);
