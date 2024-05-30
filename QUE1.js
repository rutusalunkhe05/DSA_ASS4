//Rotate a Matrix by 90 Degrees

function Rotatematrix90degrees(Matrix){
    const n = Matrix.length;
    const m = Matrix[0].length;
    let Rotatedmatrix = [];

    for(let i=0;i<m;i++){
        Rotatedmatrix[i]=[];
        }

for(let i=0; i<n; i++){
    for(let j=0; j<m; j++){
        Rotatedmatrix[j][n-1-i] = Matrix[i][j]; 
    }
}
return Rotatedmatrix;
}
let Matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
let Rotatedmatrix = Rotatematrix90degrees(Matrix);
Rotatedmatrix.forEach(row=>console.log(row));
