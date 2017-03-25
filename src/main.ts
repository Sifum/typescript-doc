import { sayHello } from "./greet";

let fullName: string = `Minson`;
function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = sayHello(name);
}

function sumMatrix(matrix: number[][]) {
    var sum = 0;
    for (var i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (var i = 0; i < currentRow.length; i++) {
            sum += currentRow[i];
        }
    }

    return sum;
}
let mattrix: number[][] = [[1,2,3],[4,6,5]] ;
let sum: number = sumMatrix(mattrix);

showHello("greeting",`${sum}`);