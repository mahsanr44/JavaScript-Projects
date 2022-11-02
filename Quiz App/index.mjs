import ps from "prompt-sync";
const prompt = ps({ signint: true });

console.log("\n-------------------")
console.log("JavaScript Quiz App")
console.log("-------------------")
function question1() {
  console.log(`\nQ1. How many Sections in PIAIC WMD Course?`);
  console.log(` a. 2\n b. 4\n c. 6\n d. 7`);
  let sections = Number(prompt());
  if (sections == 7) {
    console.log("You are Right!");
  } else {
    console.log("You are Wrong!");
  }
}

function question2() {
  console.log(`\nQ2. How many Provinces in Pakistan?`);
  console.log(` a. 1\n b. 2\n c. 4\n d. 5`);
  let provinces = Number(prompt());
  if (provinces == 5) {
    console.log("You are Right!");
  } else {
    console.log("You are Wrong!");
  }
}
function question3() {
    console.log(`\nQ3. Who is teaching JavaScript in onsite classes?`);
    console.log(` a. Zia Khan\n b. Daniyal Nagori\n c. Hira Khan\n d. Adil Altaf`);
    let provinces = (prompt("Enter a, b, c, or d: "));
    if (provinces == "b") {
      console.log("You are Right!");
    } else {
      console.log("You are Wrong!");
    }
  }

  function question4() {
    console.log(`\nQ4. Who is teaching JavaScript in online classes?`);
    console.log(` a. Zia Khan\n b. Daniyal Nagori\n c. Hira Khan\n d. Ali Razzaq`);
    let provinces = (prompt("Enter a, b, c, or d: "));
    if (provinces == "c") {
      console.log("You are Right!");
    } else {
      console.log("You are Wrong!");
    }
  }
  function question5() {
    console.log(`\nQ5. What does 7+2 equals to?`);
    console.log(` a. 9\n b. 5\n c. 11\n d. 19`);
    let provinces = Number(prompt());
    if (provinces == 9) {
      console.log("You are Right!");
    } else {
      console.log("You are Wrong!");
    }
  }


question1();
question2();
question3();
question4();
question5();