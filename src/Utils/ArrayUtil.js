export const copyArray = arr => [...arr];

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
