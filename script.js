let players = ["John", "Bob", "Alice", "Poppy"];
let person = {
name: "John Doe",
age: 80,
};

let team = players;
let team1 = [...players];
let cap1 = {...person};

window.players = players;
window.person = person;
window.team = team;
window.team1 = team1;
window.cap1 = cap1;

// Testing
console.log(players === team); // true
console.log(players === team1); // false
console.log(team1); // ["John", "Bob", "Alice", "Poppy"]
console.log(cap1); // { name: "John Doe", age: 80 }