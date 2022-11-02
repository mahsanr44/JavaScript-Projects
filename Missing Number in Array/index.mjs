let arr = [11, 13, 15, 19];
let new_arr = [];
for (let i = arr[0]; i <= arr[arr.length - 1]; i++) {
  if (arr.indexOf(i) == -1) {
    new_arr.push(i);
  }
}
console.log([new_arr.toString()]);
console.log(`At index ${new_arr.indexOf(14)} value is ${new_arr[1]}`);
