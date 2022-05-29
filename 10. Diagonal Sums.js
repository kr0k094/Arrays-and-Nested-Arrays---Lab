function solve(matrix){

let firstDiagonal = 0;
let secondDiagonal = 0;
for(let i=0;i<matrix.length;i++){

let currentline = matrix[i];
let numbForFistDiagonal = currentline[i];
let numbForSecondDiagonal = currentline[currentline.length -(1 + i)]


firstDiagonal += numbForFistDiagonal
secondDiagonal += numbForSecondDiagonal

}



console.log(firstDiagonal,secondDiagonal);

}
solve([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
   );
solve([[20, 40],
    [10, 60]]
   )