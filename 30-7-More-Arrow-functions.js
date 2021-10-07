const add = (num1, num2) => num1 + num2;
const sum = add(45, 56);
const add2 = (num1, num2, num3) => num1 * num2 * num3;
const resilt = add(63, 45, 56);
const tenTime = (num) => num * 10;
const tenTime1 = tenTime(45);
const fiveTime = (num) => num * 5;
const fiveTime4 = fiveTime(45);


const doMath = (x, y) => {
    const total = x + y;
    const totalM = x - y;
    const totalMuti = total * totalM;
    const totalD = total / totalM;
    return totalD;
}
const totalresult = doMath(55, 22)
console.log(totalresult)
