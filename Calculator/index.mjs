import ps from "prompt-sync";
const prompt=ps({sigint:true})

let num1=Number(prompt('Enter 1st Number: '));
let num2=Number(prompt("Enter 2nd Number: "));

let op=prompt("Enter operator(+,-,*,/,%) : ");

switch(op){
    case "+":
        console.log(`${num1} + ${num2} = `,num1+num2);
        break;
    case "-":
        console.log(`${num1} - ${num2} = `,num1-num2);
        break;
    case "*":
        console.log(`${num1} * ${num2} = `,num1*num2);
        break;
    case "/":
        console.log(`${num1} / ${num2} = `,num1/num2);
        break;
    case "%":
        console.log(`${num1} % ${num2} = `,num1%num2);
        break;
    default:
        console.log("Invalid Operator!");
        break;
}