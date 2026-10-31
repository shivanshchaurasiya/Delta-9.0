// Qs2. Take the user's name & age as input using prompts.
// Then return back the following statement to the user as an alert (by substituting
// their name & age) :
// name is age years old.
// [Use template Literals to print this sentence]

let name = prompt("enter your name");
let age = prompt("enter your age");

let output =` ${name} is ${age} years old.`;

alert(output);