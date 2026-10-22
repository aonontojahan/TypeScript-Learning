//any type

let data: any = "Aononto Jahan";
console.log(`The data is ${data}.`);
console.log(`The type of data is ${typeof data}.`);

let data1: any = "Aononto Jahan";
data1 = 25; // no error because data is of type any
console.log(`The data1 is ${data1}.`);
console.log(`The type of data1 is ${typeof data1}.`);

// using any can be dangerous because it can lead to runtime errors if we are not careful.
// any doesnt know the type of the variable, so it can be anything. So we should avoid using any as much as possible.


//unknown type
let value: unknown = "aononto jahan";
// console.log(value.toUpperCase()); // error because value is of type unknown 

if (typeof value === "string") {
    console.log(value.toUpperCase()); // no error because we are checking the type of value before using it
}

// unknown is safer than any because it forces us to check the type of the variable before using it. So we should use unknown instead of any as much as possible.