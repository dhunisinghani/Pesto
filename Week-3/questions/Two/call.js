const person = {
    name:"Kartik",
    print:function () {
        console.log(`Name:-`,this.name);
    }
}

// Here the name will be Printed Undefined as this keyword is to be considered to be of global scope and no name in global scope
let printName = person.print;
printName();

// So we can use call person object with printname so we get the name
printName.call(person);

// Main Diff Between Call and Bind is Call executes the function as it declares and bind creates a ne function.