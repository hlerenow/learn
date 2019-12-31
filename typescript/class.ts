class Student {
  fullName: string;
  constructor(public f, public l) {
    this.fullName = f + l;
  }
}

interface Person {
  firstName: string,
  lastName: string
}

function greeter(person: Person) {
  return 'Hello' + person.firstName + person.lastName
}

let user = new Student("Jane", "M.");

console.log(greeter(user))