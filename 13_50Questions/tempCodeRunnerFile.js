
function removeDuplicate(){
 let set = new Set(arr);
 return [...set]
}

let resultArr = removeDuplicate([1,2,2,5,6,7])
console.log(resultArr);