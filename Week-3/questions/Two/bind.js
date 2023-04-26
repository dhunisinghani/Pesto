const person = {
    name:"Kartik",
    print:function () {
        console.log(`Name:-`,this.name);
    }
}

// Here the name will be Printed Undefined as this keyword is to be considered to be of global scope and no name in global scope
let printName = person.print;
printName();

// So we can bind person object with printname so we get the name
let bindedPrintName = printName.bind(person);
bindedPrintName();

// Main Diff Between Call and Bind is Call executes the function as it declares and bind creates a ne function.