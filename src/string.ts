let firstName: string = "Aononto";
let lastName: string = "Jahan";
let course: string = "TypeScript";
console.log(`The first name is ${firstName}, the last name is ${lastName} and the course is ${course}.`);


//string concatanation

let fullName = firstName + " " + lastName;
console.log(`The full name is ${fullName}.`);

let fullName2: string = `${firstName} ${lastName}`;
console.log(`The full name is ${fullName2}.`);

let username: string = "Aononto Jahan";
let email: string = "aonontojahan@gmail.com";
let myage: number = 25;
let message: string = `The username is ${username}, the email is ${email} and the age is ${myage}.`;
console.log(message);
console.log(message.toUpperCase());
console.log(message.toLowerCase());
console.log(message.length);