const prompt = require('prompt-sync')();
const input = prompt('What is your input? ');
const length = prompt('What is your length? ');

//read what is in the input variable
// finds 1st number
nLocation = input.indexOf('n');
nthTerm = input.slice(0, nLocation);

// finds the operator
if (input.includes('+')) {
    operator = '+';
}
if (input.includes('-')) {
    operator = '-';
}
//finds the last number
operatorLocation = input.indexOf(operator);
lastNumber = input.slice(operatorLocation + 1, input.length);

//convert char to float
var nthTerm = parseFloat(nthTerm);
var lastNumber = parseFloat(lastNumber);

// math
console.log("\nStart Calcultion\n");
for (n = 1; n <= length; n++) {
    if (operator == "+") {
        answer = (nthTerm * n) + lastNumber;
    }
    if (operator == "-") {
        answer = (nthTerm * n) - lastNumber;
    }
    console.log(n + " term = " + answer);
}

console.log(input + " has outputed " + length + " times");