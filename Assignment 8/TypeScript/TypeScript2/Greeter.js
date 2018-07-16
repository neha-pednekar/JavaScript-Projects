var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var firstName, middleInitial, lastName;
firstName = prompt("Enter your First Name");
middleInitial = prompt("Enter your Middle Initial");
lastName = prompt("Enter your Last Name");
var user = new Student(firstName, middleInitial, lastName);
document.body.innerHTML = greeter(user);
