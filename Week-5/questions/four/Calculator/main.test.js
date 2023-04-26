const calculator = require('./mathOps');


test("addition", () =>{
    expect(calculator.addition(2,2)).toBe(4);
});

test("subtraction", () =>{
    expect(calculator.subtraction(2,2)).toBe(0);
});

test("multiplication", () =>{
    expect(calculator.multiplication(2,2)).toBe(4);
});