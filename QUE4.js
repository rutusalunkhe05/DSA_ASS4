//Find the Common Elements in All Rows of a Matrix

function searchMatrix(matrix, target) {
    if (matrix.length === 0 || matrix[0].length === 0) {
        return [-1, -1];
     }

    let rows = matrix.length;
    let cols = matrix[0].length;
    let row = 0;
    let col = cols - 1;

    while (row < rows && col >= 0) {
        if (matrix[row][col] === target) {
            return [row, col]; 
        } else if (matrix[row][col] > target) {
            col--; 
        } else {
            row++; 
        }
    }

    return [-1, -1];
}

let matrix = [
    [1,2,1,4,8],
    [3,7,8,5,1],
    [8,7,7,3,1],
    [8,1,2,7,9]
];

let target = 5;
let result = searchMatrix(matrix, target);
console.log(result);

// target = 20;
// result = searchMatrix(matrix, target);
// console.log(result); 
