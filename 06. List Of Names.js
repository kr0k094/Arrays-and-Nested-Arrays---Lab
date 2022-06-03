function solve(arr){

let sorted = arr.sort((a,b)=> a.localeCompare(b));
for(let i=0; i<sorted.length; i++){
    let name = sorted[i];
    console.log(`${i+1}.${name}`);
}

}
solve(["John", "Bob", "Christina", "Ema"])