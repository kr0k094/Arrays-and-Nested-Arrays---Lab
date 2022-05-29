function solve(arr){

let result = [];

let sorted = arr.sort((a,b)=> a - b);
while(result.length != 2){

    result.push(sorted.shift());
}

console.log(result.join(" "));
}
solve([30, 15, 50, 5])
solve([3, 0, 10, 4, 7, 3])