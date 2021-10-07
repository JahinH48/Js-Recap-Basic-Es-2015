function add(Num1, Num2) {
    return Num1 + Num2;
}

const add2 = function add(Num1, Num2) {
    return Num1 + Num2;
}
// function expression anonymous
const add3 = function (Num1, Num2) {
    return Num1 + Num2;
}

// Arrow Function 
const add4 = (Num1, Num2) => Num1 + Num2;

const result = add(15, 47);
const result2 = add2(15, 47);
const result3 = add3(15, 47);
const result4 = add4(15, 47);
console.log(result);
console.log(result2);
console.log(result3);
console.log(result4);
