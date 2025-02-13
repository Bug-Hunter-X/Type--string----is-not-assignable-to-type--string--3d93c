function greeter(person: string[]): string {
  let greetings = person.map(name => `Hello, ${name}!`);
  return greetings.join('\n');
}

let user = ["Jane", "Doe"];
console.log(greeter(user)); // Output: Hello, Jane!
Hello, Doe!