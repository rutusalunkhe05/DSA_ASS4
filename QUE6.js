// Find the Saddle Point in a Matrix
function findSaddlePoint(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;

    for (let i = 0; i < rows; i++) {
        let minRowValue = matrix[i][0];
        let minColIndex = 0;
        for (let j = 1; j < cols; j++) {
            if (matrix[i][j] < minRowValue) {
                minRowValue = matrix[i][j];
                minColIndex = j;
            }
        }

         let isSaddlePoint = true;
        for (let k = 0; k < rows; k++) {
            if (matrix[k][minColIndex] > minRowValue) {
                isSaddlePoint = false;
                break;
            }
        }

        if (isSaddlePoint) {
            return { row: i, col: minColIndex, value: minRowValue };
        }
    }

    return null; 
}

let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

let saddlePoint = findSaddlePoint(matrix);
if (saddlePoint) {
    console.log(`Saddle Point found at row ${saddlePoint.row} and column ${saddlePoint.col} with value ${saddlePoint.value}`);
} else {
    console.log("No Saddle Point found");
}
