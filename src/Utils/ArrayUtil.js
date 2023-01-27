// wrong ... does the task for only 1 level still inner ones will be by reference so
// export const copyArray = arr => [...arr];

export const copyArray = arr => arr.map(x => [...x]);

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
