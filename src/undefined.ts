//let userName: string;
//console.log(`The username is ${userName}.`);

function greet() {
    console.log("Hello, welcome to TypeScript!");
}
let result1 = greet();
console.log(`The result of the greet function is ${result1}.`);


function welcome() {
    return "Hello, welcome to TypeScript!";
}
let result2 = welcome();
console.log(`The result of the welcome function is ${result2}.`);

console.log('I learn about symbol in TypeScript');

// So here in greet function, we are not returning anything, so the result is undefined. But in welcome function, we are returning a string, so the result is the string that we returned.