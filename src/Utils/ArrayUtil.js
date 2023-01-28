// wrong ... does the task for only 1 level still inner ones will be by reference so
// export const copyArray = arr => [...arr];
export const copyArray = arr => arr.map(x => [...x]);

const isValidBoxPuzzle = (arr, row, col, dimension, n, val) => {
    // presence in Row
    for (let i = 0; i < n; i++)
        if (arr[row][i] === val && i !== col) return false;
    // presence in Column
    for (let i = 0; i < n; i++)
        if (arr[i][col] === val && i !== row) return false;

    const row_start = dimension * Math.floor(row / dimension);
    const row_end = dimension * (Math.floor(row / dimension) + 1) - 1;
    const col_start = dimension * Math.floor(col / dimension);
    const col_end = dimension * (Math.floor(col / dimension) + 1) - 1;

    for (let i = row_start; i <= row_end; i++)
        for (let j = col_start; j <= col_end; j++)
            if (arr[i][j] === val && i !== row && j !== col) return false;

    return true;
};

export const isValidPuzzle = (arr, dimension, n) => {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (!arr[i][j]) continue;
            if (!isValidBoxPuzzle(arr, i, j, dimension, n, arr[i][j]))
                return false;
        }
    }

    return true;
};

export const toIntegers = (arr, dimension, n) => {
    const newArr = [];
    for (let i = 0; i < n; i++) {
        let inner = [];
        for (let j = 0; j < n; j++) inner.push(Number.parseInt(arr[i][j]));
        newArr.push(inner);
    }
    return newArr;
};

export const zeroArray = dimension => {
    const newArr = [];
    const n = dimension * dimension;
    for (let i = 0; i < n; i++) {
        let inner = [];
        for (let j = 0; j < n; j++) inner.push(0);
        newArr.push(inner);
    }
    return newArr;
};
