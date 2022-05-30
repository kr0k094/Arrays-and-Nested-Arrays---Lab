function solve(arr){
let result = [];
let n = 1;

for(let i = 0; i < arr.length; i++){
    let command = arr[i];
    if(command == "add"){
        result.push(n)
    }else result.pop();
    n++
}


if(result.length == 0){
    console.log("Empty");
}else console.log(result.join("\n"))

}
// solve(['add', 
// 'add', 
// 'add', 
// 'add']
// )
solve(['remove', 
'remove', 
'remove']
)