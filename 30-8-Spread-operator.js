const number = [12, 65, 38, 54, 212, 52, 8, 622, 22, 20, 33, 52]

const max = Math.max(...number);
// console.log(max)
const NumberArray = [...number];
const NumberArrayAddNew = [...number, 89];
const NumberArrayAddNewprevew = [65, ...number, 89];
console.log(NumberArrayAddNew)
console.log(NumberArrayAddNewprevew)
number.push(515);

console.log(NumberArray) 