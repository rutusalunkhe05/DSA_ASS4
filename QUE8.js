//Boundary elements of a Matrix

function printBoundaryElements(matrix) {
    if (matrix.length === 0) return;

    let rows = matrix.length;
    let cols = matrix[0].length;
  for (let j = 0; j < cols; j++) {
        console.log(matrix[0][j]);
    }

   for (let i = 1; i < rows - 1; i++) {
        console.log(matrix[i][cols - 1]);
    }

  if (rows > 1) {
        for (let j = cols - 1; j >= 0; j--) {
            console.log(matrix[rows - 1][j]);
        }
    }

    for (let i = rows - 2; i > 0; i--) {
        console.log(matrix[i][0]);
    }
}


let matrix = [
    [1, 2, 3],
    [5, 6, 7],
    [1,2,3]
];

printBoundaryElements(matrix);


