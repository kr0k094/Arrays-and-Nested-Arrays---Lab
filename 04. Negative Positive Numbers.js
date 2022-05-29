function solve(arr){

 let result = [];

for (const el of arr) {
    if (el >= 0){
        result.push(el);
    }else result.unshift(el);
}

return result.join("\n");

}
console.log(solve([3, -2, 0, -1]))