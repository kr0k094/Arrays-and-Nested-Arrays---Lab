function solve(arr){
let result = [];

for(let i = 0; i < arr.length; i++){
if(i % 2 == 1){
    let currentNumber = arr[i];
    result.push(currentNumber);
}
}
result.reverse()
result = result.map((x)=> x * 2).join(" ");
return result;
}
console.log(solve([10, 15, 20, 25]))
