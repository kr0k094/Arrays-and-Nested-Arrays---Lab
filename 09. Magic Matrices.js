function solve(matrix) {
  let result = false;

  for (let i = 0; i < matrix.length; i++) {
    let sumRowOne = matrix[i].reduce((a,b)=> a + b,0);
    let sumRowTwo = matrix[i + 1].reduce((a,b)=> a + b,0);
    let colOne = 0;
    let colTwo = 0;
    for(let j = 0; j < matrix.length; j++) {
         colOne += matrix[i][j];
        colTwo  += matrix[i + 1][j]
    }
  }
}

solve([
  [4, 5, 6],
  [6, 5, 4],
  [5, 5, 5],
]);
