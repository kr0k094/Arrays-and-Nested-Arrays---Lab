function solve(arr, n) {

arr = arr.filter((el,index)=> index % n == 0)

return arr

}
console.log(solve([1,
    2,
    3,
    4,
    5,
    ], 6));

