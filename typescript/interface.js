function greeter(person) {
    return "Hello" + person.firstName;
}
var user = {
    firstName: 'L',
    lastName: 'EO'
};
console.log(greeter(user));
