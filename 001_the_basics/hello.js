function greet(person, date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
greet("Gustavo", new Date());
// Typescript will point out the mistake.
// Using the flag --noEmitOnError stops the outputted
// JS file from being updated if there's an error.
