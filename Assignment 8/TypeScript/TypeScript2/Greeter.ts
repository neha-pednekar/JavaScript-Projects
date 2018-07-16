class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

var firstName: string, middleInitial: string, lastName: string;
firstName = prompt("Enter your First Name");
middleInitial = prompt("Enter your Middle Initial");
lastName = prompt("Enter your Last Name");
let user = new Student(firstName, middleInitial, lastName);

document.body.innerHTML = greeter(user);