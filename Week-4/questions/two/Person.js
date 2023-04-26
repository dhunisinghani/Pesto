let Person = function () { };
Person.prototype.initialize = function (name, age) {
    this.name = name;
    this.age = age;
}

let Teacher = function () { };
Teacher.prototype.teach = function (subject) {
    this.subject = subject;
    console.log(`${this.name} is now teaching ${this.subject}.`);
}

Object.setPrototypeOf(Teacher.prototype, Person.prototype);

let him = new Teacher();

him.initialize("Kartik", 25);
him.teach("JavaScript");
console.log(him);