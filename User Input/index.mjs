import ps from "prompt-sync";
const prompt=ps({signint:true});

let course=prompt("Enter your course: ");
console.log(`Your Course is ${course}.`);