function solve(matrix){

let result = 0;

for(let i=0; i<matrix.length; i++){

let currentline = matrix[i];
for(let j = 0; j < currentline.length; j++){
    let  currentEl = currentline[j];
    if(i != matrix.length - 1){
        let nextLine = matrix[i + 1];
        let nextEl = nextLine[j]
        if(currentEl == nextEl){
            result += 1;    
        }
    }
 
    if(currentEl == matrix[i][j -1] ){
        result += 1; 
    }
}

}
return result;
}
console.log(solve([[2, 2, 5, 7, 4],
                   [4, 0, 5, 3, 4],
                   [2, 5, 5, 4, 2]]
))
// console.log(solve([['test', 'yes', 'yo', 'ho'],
// ['well', 'done', 'yo', '6'],
// ['not', 'done', 'yet', '5']]
// ));