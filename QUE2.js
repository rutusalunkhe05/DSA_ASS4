//Transpose of a Matrix

function transposeMatrix(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    let transposedMatrix = [];

   
    for (let i = 0; i < cols; i++) {
        transposedMatrix[i] = [];
    }

   
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            transposedMatrix[j][i] = matrix[i][j];
        }
    }

    return transposedMatrix;
}

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let transposedMatrix = transposeMatrix(matrix);
transposedMatrix.forEach(row => console.log(row));
