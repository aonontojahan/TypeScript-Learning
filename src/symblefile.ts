let id1 = Symbol("id");
let id2 = Symbol("id");

let user ={
    [id1]: 1,
    [id2]: 2
}

console.log(user[id1]);
console.log(user[id2]);