function solve(n, k){

let result = [1];

for(let i = 0; i < n - 1; i++){
    let previous = result.slice(-k)
    let sum = previous.reduce((a,b)=> a + b, 0)
     result.push(sum)

   sum = []
}

return result;
}
solve(8, 2)