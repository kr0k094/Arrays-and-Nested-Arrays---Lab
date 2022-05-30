function solve(arr){

let result = [];
let biggest = 0;

for(let i=0; i<arr.length;i++){
    let currentnumber = arr[i];
    if(currentnumber >= biggest){
        result.push(currentnumber);
        biggest = currentnumber;
    }
    }

return result;

}
console.log(solve([20, 
    3, 
    2, 
    15,
    6, 
    1]
    
    ));