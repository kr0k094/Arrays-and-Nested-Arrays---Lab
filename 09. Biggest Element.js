function solve(matrix){

let result = [];
for (let i = 0; i < matrix.length; i++) {
   let currentline = matrix[i];
    currentline = currentline.sort((a,b)=> b-a);
    result.push(currentline[0]);
    
}
result = result.sort((a,b)=> b-a);
return result[0];

}
console.log(solve([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
   ));
   console.log(solve([[20, 50, 10],
    [8, 33, 145]]
   ))