function isSubset(arr1, arr2) {
     let set = new Set(arr1);
   for (let element of arr2) {
        if (!set.has(element)) {
            return false; 
          }
    }

    return true; 
}


let arr1 = [11, 1, 13, 21, 3, 7];
let arr2 = [11, 3, 7, 1];

let result = isSubset(arr1, arr2);
console.log(result); 
arr2 = [11, 3, 7, 1];
result = isSubset(arr1, arr2);
console.log(result); 