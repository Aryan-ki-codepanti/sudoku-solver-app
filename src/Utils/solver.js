import { copyArray } from "./ArrayUtil";

const isValid = (arr, row, col, dimension, n, val) => {
    // presence in Row
    for (let i = 0; i < n; i++) if (arr[row][i] === val) return false;
    // presence in Column
    for (let i = 0; i < n; i++) if (arr[i][col] === val) return false;

    const row_start = dimension * Math.floor(row / dimension);
    const row_end = dimension * (Math.floor(row / dimension) + 1) - 1;
    const col_start = dimension * Math.floor(col / dimension);
    const col_end = dimension * (Math.floor(col / dimension) + 1) - 1;

    // console.log({ row_start, row_end, col_start, col_end });

    for (let i = row_start; i <= row_end; i++)
        for (let j = col_start; j <= col_end; j++)
            if (arr[i][j] === val) return false;

    return true;
};

export const solve = (arr, dimension, n, setSolverIterations) => {
    // const solve = (arr, dimension, n) => {
    // const newArr = [...arr];

    const iterations = [];

    const solveRecursive = (myArr, row, col) => {
        let copyMyArr = copyArray(myArr);

        if (row === n) return true;
        if (col === n) return solveRecursive(myArr, row + 1, 0, dimension, n);
        if (myArr[row][col] !== 0)
            return solveRecursive(myArr, row, col + 1, dimension, n);

        //tryin
        for (let i = 1; i <= n; i++) {
            if (isValid(myArr, row, col, dimension, n, i)) {
                myArr[row][col] = i;
                copyMyArr[row][col] = i;
                iterations.push(copyMyArr);
                if (solveRecursive(myArr, row, col + 1, dimension, n))
                    return true;
                myArr[row][col] = 0;
                copyMyArr[row][col] = 0;
                iterations.push(copyMyArr);
            }
        }

        return false;
    };

    const newArr = copyArray(arr);
    const res = solveRecursive(newArr, 0, 0) ? newArr : false;
    setSolverIterations(prev => iterations);
    return res;
};

// const arr = [
//     [1, 0, 0, 4],
//     [3, 0, 0, 2],
//     [0, 1, 4, 0],
//     [0, 3, 0, 1]
// ];

// const arr2 = [
//     [0, 0, 0, 3],
//     [0, 0, 0, 2],
//     [3, 0, 0, 0],
//     [4, 0, 0, 0]
// ];

// console.log(solve(arr, 2, 4));
