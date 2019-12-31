interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return "Hello" + person.firstName
}

let user = {
  firstName: 'L',
  lastName: 'EO'
};

console.log(greeter(user))