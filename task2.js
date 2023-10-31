function analyzeObjectTypes(obj) {
    const typeCount = {};

    for (const key in obj) {
        const valueType = typeof obj[key];
        if (typeCount[valueType]) {
            typeCount[valueType]++;
        } else {
            typeCount[valueType] = 1;
        }
    }

    return typeCount;
}

const initialObj = {
    a: 'meme',
    b: 322,
    c: { c1: 'lol' },
    d: ["hola, amigo"],
    e: 0,
    f: [],
    g: [3, 2, 2],
    h: 'omg'
};

const resultObj = analyzeObjectTypes(initialObj);

console.log(resultObj);