function solve(arr){

let sorted = arr.sort((a,b)=> a - b);
let takeAHalf =  Math.ceil(sorted.length / 2);
let result = sorted.slice(- takeAHalf);

return result;


}
console.log(solve([3, 19, 14, 7, 2, 19, 6]))